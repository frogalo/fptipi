import fs from 'fs';
import path from 'path';

const PAGES = [
  { file: 'src/pages/teoria/TeoriaFalaPropagacja.tsx', route: '/teoria/fala-propagacja', category: 'Teoria' },
  { file: 'src/pages/teoria/TeoriaModulacja.tsx', route: '/teoria/modulacja', category: 'Teoria' },
  { file: 'src/pages/teoria/TeoriaPolprzewodniki.tsx', route: '/teoria/polprzewodniki', category: 'Teoria' },
  { file: 'src/pages/teoria/TeoriaPamieciNosniki.tsx', route: '/teoria/pamieci-nosniki', category: 'Teoria' },
  { file: 'src/pages/teoria/TeoriaSwiatlowody.tsx', route: '/teoria/swiatlowody', category: 'Teoria' },
  { file: 'src/pages/teoria/TeoriaSciaga.tsx', route: '/teoria/sciaga', category: 'Ściąga' },
  { file: 'src/pages/zadania/Zadania1.tsx', route: '/zadania/1', category: 'Zadania' },
  { file: 'src/pages/zadania/Zadania2.tsx', route: '/zadania/2', category: 'Zadania' },
  { file: 'src/pages/zadania/Zadania3.tsx', route: '/zadania/3', category: 'Zadania' },
  { file: 'src/pages/Home.tsx', route: '/', category: 'Spis treści' }
];

function cleanText(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, ' ') // remove HTML tags
    .replace(/\{?String\.raw`([^`]*)`\}?/g, '$1') // clean String.raw
    .replace(/\\\[([\s\S]*?)\\\]/g, '$1') // clean MathJax display equations
    .replace(/\\\(([\s\S]*?)\\\)/g, '$1') // clean MathJax inline equations
    .replace(/\s+/g, ' ') // replace multiple spaces/newlines with single space
    .trim();
}

function parseAttributes(jsxString) {
  const attrs = {};
  // Handles names like title, symbol, desc, id, number, source, etc.
  const regex = /(\w+)\s*=\s*(?:{String\.raw`([^`]*)`}|{([^}]+)}|"([^"]*)")/g;
  let match;
  while ((match = regex.exec(jsxString)) !== null) {
    const name = match[1];
    const val = match[2] || match[3] || match[4];
    attrs[name] = val;
  }
  return attrs;
}

const searchIndex = [];

for (const page of PAGES) {
  const filePath = path.resolve(page.file);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  let pageTitle = page.file.split('/').pop().replace('.tsx', '');
  
  // 1. Extract PageHeader
  const pageHeaderRegex = /<PageHeader([\s\S]*?)\/?>/g;
  let headerMatch;
  while ((headerMatch = pageHeaderRegex.exec(content)) !== null) {
    const attrs = parseAttributes(headerMatch[1]);
    if (attrs.title) {
      pageTitle = cleanText(attrs.title);
      searchIndex.push({
        type: 'page',
        title: pageTitle,
        subtitle: cleanText(attrs.subtitle),
        description: cleanText(attrs.description),
        route: page.route,
        anchor: '',
        category: page.category
      });
    }
  }

  // If page doesn't have a PageHeader component, let's extract the main heading
  if (page.category === 'Ściąga' || page.category === 'Spis treści') {
    const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/g;
    const h1Match = h1Regex.exec(content);
    if (h1Match) {
      pageTitle = cleanText(h1Match[1]);
      searchIndex.push({
        type: 'page',
        title: pageTitle,
        route: page.route,
        anchor: '',
        category: page.category
      });
    }
  }

  // 2. Extract QuestionSections
  const questionRegex = /<QuestionSection([\s\S]*?)>([\s\S]*?)<\/QuestionSection>/g;
  let qMatch;
  while ((qMatch = questionRegex.exec(content)) !== null) {
    const attrs = parseAttributes(qMatch[1]);
    const body = qMatch[2];
    const title = cleanText(attrs.title);
    const id = attrs.id || '';
    
    searchIndex.push({
      type: 'question',
      title: title,
      number: attrs.number || '',
      source: attrs.source || '',
      content: cleanText(body),
      route: page.route,
      anchor: id,
      pageTitle: pageTitle,
      category: page.category
    });

    // Extract BookAdditions nested inside this QuestionSection
    const bookRegex = /<BookAddition([\s\S]*?)>([\s\S]*?)<\/BookAddition>/g;
    let bMatch;
    while ((bMatch = bookRegex.exec(body)) !== null) {
      const bAttrs = parseAttributes(bMatch[1]);
      const bTitle = cleanText(bAttrs.title);
      searchIndex.push({
        type: 'book_addition',
        title: bTitle,
        content: cleanText(bMatch[2]),
        route: page.route,
        anchor: id, // links back to this question section
        pageTitle: pageTitle,
        category: page.category
      });
    }

    // Extract Symbols nested inside this QuestionSection
    const symbolRegex = /<Symbol([\s\S]*?)\/?>/g;
    let sMatch;
    while ((sMatch = symbolRegex.exec(body)) !== null) {
      const sAttrs = parseAttributes(sMatch[1]);
      if (sAttrs.symbol && sAttrs.desc) {
        searchIndex.push({
          type: 'symbol',
          symbol: cleanText(sAttrs.symbol),
          description: cleanText(sAttrs.desc),
          route: page.route,
          anchor: id, // links back to this question section
          pageTitle: pageTitle,
          category: 'Symbole'
        });
      }
    }
  }

  // 3. Extract BookAdditions that are NOT nested inside QuestionSections
  const rootBookRegex = /<BookAddition([\s\S]*?)>([\s\S]*?)<\/BookAddition>/g;
  let rbMatch;
  while ((rbMatch = rootBookRegex.exec(content)) !== null) {
    const rbAttrs = parseAttributes(rbMatch[1]);
    const rbTitle = cleanText(rbAttrs.title);
    
    // Check if this book addition is already indexed
    const isIndexed = searchIndex.some(
      item => item.type === 'book_addition' && item.title === rbTitle && item.route === page.route
    );
    if (!isIndexed) {
      searchIndex.push({
        type: 'book_addition',
        title: rbTitle,
        content: cleanText(rbMatch[2]),
        route: page.route,
        anchor: '', // no section anchor
        pageTitle: pageTitle,
        category: page.category
      });
    }
  }

  // 4. Extract Symbols that are NOT nested inside QuestionSections (e.g. in TeoriaSciaga)
  const rootSymbolRegex = /<Symbol([\s\S]*?)\/?>/g;
  let rsMatch;
  while ((rsMatch = rootSymbolRegex.exec(content)) !== null) {
    const rsAttrs = parseAttributes(rsMatch[1]);
    if (rsAttrs.symbol && rsAttrs.desc) {
      const isIndexed = searchIndex.some(
        item => item.type === 'symbol' && item.symbol === cleanText(rsAttrs.symbol) && item.route === page.route
      );
      if (!isIndexed) {
        searchIndex.push({
          type: 'symbol',
          symbol: cleanText(rsAttrs.symbol),
          description: cleanText(rsAttrs.desc),
          route: page.route,
          anchor: '', // no section anchor
          pageTitle: pageTitle,
          category: 'Symbole'
        });
      }
    }
  }

  // 5. Extract Section headings in Zadania pages
  if (page.category === 'Zadania') {
    const sectionRegex = /<section([\s\S]*?)>([\s\S]*?)<\/section>/g;
    let sMatch;
    while ((sMatch = sectionRegex.exec(content)) !== null) {
      const sAttrs = parseAttributes(sMatch[1]);
      const sBody = sMatch[2];
      const id = sAttrs.id || '';
      
      // Look for number and title in h2
      const h2Regex = /<h2[^>]*>([\s\S]*?)<\/h2>/i;
      const h2Match = h2Regex.exec(sBody);
      
      // Look for the tag or span number
      const numRegex = /<span[^>]*whitespace-nowrap[^>]*>([\s\S]*?)<\/span>/i;
      const numMatch = numRegex.exec(sBody);
      
      if (h2Match && id) {
        const title = cleanText(h2Match[1]);
        const num = numMatch ? cleanText(numMatch[1]) : '';
        searchIndex.push({
          type: 'section',
          title: title,
          number: num,
          content: cleanText(sBody),
          route: page.route,
          anchor: id,
          pageTitle: pageTitle,
          category: page.category
        });
      }
    }
  }
}


// 6. Index Exams from examsData.json
const examsPath = path.resolve('src/data/examsData.json');
if (fs.existsSync(examsPath)) {
  const examsContent = JSON.parse(fs.readFileSync(examsPath, 'utf-8'));
  for (const year in examsContent) {
    const yearData = examsContent[year];
    for (const term in yearData) {
      const termData = yearData[term];
      for (const group in termData) {
        const groupData = termData[group];
        if (groupData && groupData.tasks) {
          let termName = 'Wrzesień';
          if (term === 'Z1') termName = 'Zima 1';
          else if (term === 'Z2') termName = 'Zima 2';
          else if (term === 'L1') termName = 'Lato 1';
          else if (term === 'L2') termName = 'Lato 2';
          else if (term === 'Z') termName = 'Zima';
          else if (term === 'L') termName = 'Lato';
          const groupTitle = `Egzamin ${year} (${termName}) — Grupa ${group}`;
          
          groupData.tasks.forEach((task) => {
            searchIndex.push({
              type: 'exam_task',
              title: `Zadanie ${task.number}: ${task.question.slice(0, 75)}...`,
              number: task.number.toString(),
              content: cleanText(task.question) + ' ' + cleanText(task.solution) + (task.tip ? ' ' + cleanText(task.tip) : ''),
              route: `/egzaminy?year=${year}&term=${term}&group=${group}`,
              anchor: `task-${task.number}`,
              pageTitle: groupTitle,
              category: 'Egzaminy'
            });
          });
        }
      }
    }
  }
}

// Ensure the target assets directory exists
const targetDir = path.resolve('src/assets');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const targetPath = path.join(targetDir, 'search-index.json');
fs.writeFileSync(targetPath, JSON.stringify(searchIndex, null, 2), 'utf-8');
console.log(`Successfully generated search index with ${searchIndex.length} items at: ${targetPath}`);


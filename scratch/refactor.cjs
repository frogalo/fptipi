const fs = require('fs');
const path = require('path');

const theoryDir = 'c:/Users/tmpAdmin/AntigravityProjects/Fizyka/src/pages/teoria';

const files = fs.readdirSync(theoryDir);

const newImports = `import { PageHeader, QuestionSection, BlockFormula } from '../../components/TheoryComponents';
import { Concept, Formula, Symbol, Explanation, Conclusion, BookAddition } from '../../components/MathBlocks';`;

for (const file of files) {
    if (!file.endsWith('.tsx')) continue;
    if (file === 'TeoriaSciaga.tsx') continue; // Cheat sheet has different structure
    
    const filePath = path.join(theoryDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // 1. Remove any pre-existing imports of TheoryComponents or MathBlocks to prevent duplicates
    content = content.replace(/import\s+\{[^}]*\}\s+from\s+['"]\.\.\/\.\.\/components\/(TheoryComponents|MathBlocks)['"];?\r?\n?/g, '');
    
    // 2. Add new imports right after the last import of images or other assets
    const lines = content.split(/\r?\n/);
    let lastImportIdx = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim().startsWith('import ')) {
            lastImportIdx = i;
        }
    }
    
    if (lastImportIdx !== -1) {
        lines.splice(lastImportIdx + 1, 0, newImports);
        content = lines.join('\n');
    } else {
        content = newImports + '\n' + content;
    }
    
    // 3. Refactor Header
    const headerRegex = /<header className="mb-6 border border-line bg-gradient-to-br from-panel to-ink2 rounded-\[14px\] px-6 py-\[22px\]">\s*<div className="font-mono text-\[11px\] tracking-\[0.18em\] uppercase text-amber">([^<]+)<\/div>\s*<h1 className="text-\[27px\] font-semibold mt-1.5 mb-1">([^<]+)<\/h1>\s*<div className="text-muted text-\[14.5px\]">([^<]+)<\/div>\s*<\/header>/g;
    content = content.replace(headerRegex, (match, subtitle, title, description) => {
        return `<PageHeader
  subtitle="${subtitle.trim()}"
  title="${title.trim()}"
  description="${description.trim()}"
/>`;
    });
    
    // 4. Refactor QuestionSection and standard section tags
    const sectionOpenRegex = /<section\s+className="[^"]+"\s+id="q(\w+)">\s*<div[^>]*>\s*<span([^>]*)>([^<]+)<\/span>\s*<h2[^>]*>([^<]+)<\/h2>\s*(?:<span[^>]*>([^<]*)<\/span>)?\s*<\/div>/g;
    
    content = content.replace(sectionOpenRegex, (match, id, spanAttrs, number, title, source) => {
        const isTier1 = spanAttrs.includes('bg-green');
        const sourceAttr = source ? `\n  source="${source.trim()}"` : '';
        const isTier1Attr = isTier1 ? '\n  isTier1={true}' : '';
        return `<QuestionSection
  id="q${id}"
  number="${number.trim()}"
  title="${title.trim()}"${sourceAttr}${isTier1Attr}
>`;
    });
    
    // Replace closing </section> with </QuestionSection>
    content = content.replace(/<\/section>/g, '</QuestionSection>');
    
    // 5. Refactor Conclusion (Green blocks)
    const conclusionRegex = /<div className="rounded-\[10px\] px-4 py-\[14px\] my-\[14px\] border border-line bg-green-dim\/10 border-green-dim">\s*<span className="font-mono text-\[11px\] tracking-\[0.14em\] uppercase block mb-2">([^<]+)<\/span>([\s\S]*?)<\/div>/g;
    content = content.replace(conclusionRegex, '<Conclusion title="$1">$2</Conclusion>');
    
    // 6. Refactor BookAddition (Blue blocks)
    const bookAdditionRegex = /<div className="rounded-\[10px\] px-4 py-\[14px\] my-\[14px\] border border-line bg-blue\/10 border-\[#34465f\]">\s*<span className="font-mono text-\[11px\] tracking-\[0.14em\] uppercase block mb-2">([^<]+)<\/span>([\s\S]*?)<\/div>/g;
    content = content.replace(bookAdditionRegex, '<BookAddition title="$1">$2</BookAddition>');
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Refactored: ${file}`);
}

import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import examsData from '../data/examsData.json';
import { Tip } from '../components/MathBlocks';
import egzamin_2026_L_B from '../assets/egzamin_2026_L_B.png';
import TeoriaPamieciNosniki_img_2 from '../assets/TeoriaPamieciNosniki_img_2.jpeg';
import TeoriaPamieciNosniki_img_3 from '../assets/TeoriaPamieciNosniki_img_3.jpeg';
import TeoriaModulacja_img_1 from '../assets/TeoriaModulacja_img_1.png';
import TeoriaPamieciNosniki_img_4 from '../assets/TeoriaPamieciNosniki_img_4.jpeg';
import TeoriaPamieciNosniki_img_5 from '../assets/TeoriaPamieciNosniki_img_5.jpeg';
import TeoriaPamieciNosniki_img_6 from '../assets/TeoriaPamieciNosniki_img_6.jpeg';
import TeoriaPamieciNosniki_img_7 from '../assets/TeoriaPamieciNosniki_img_7.jpeg';
import TeoriaPamieciNosniki_img_8 from '../assets/TeoriaPamieciNosniki_img_8.jpeg';
import TeoriaFalaPropagacja_img_4 from '../assets/TeoriaFalaPropagacja_img_4.png';
import TeoriaFalaPropagacja_img_5 from '../assets/TeoriaFalaPropagacja_img_5.png';
import TeoriaFalaPropagacja_img_2 from '../assets/TeoriaFalaPropagacja_img_2.png';
import TeoriaFalaPropagacja_img_3 from '../assets/TeoriaFalaPropagacja_img_3.png';
import TeoriaPolprzewodniki_img_2 from '../assets/TeoriaPolprzewodniki_img_2.png';
import TeoriaPolprzewodniki_img_3 from '../assets/TeoriaPolprzewodniki_img_3.png';
import TeoriaPolprzewodniki_img_4 from '../assets/TeoriaPolprzewodniki_img_4.png';
import TeoriaPolprzewodniki_img_5 from '../assets/TeoriaPolprzewodniki_img_5.png';

const EXAM_IMAGES: Record<string, string> = {
  '2026_L_B': egzamin_2026_L_B
};

interface Task {
  number: number;
  question: string;
  solution: string;
  tip?: string;
}

interface GroupData {
  image?: string;
  tasks: Task[];
}

// Cross-link mapping: exam task key -> related theory answers
interface RelatedLink {
  label: string;
  route: string;
}

const RELATED_LINKS: Record<string, RelatedLink[]> = {
  // 2026 Lato I (L1) Grupa A1
  '2026_L1_A1_1': [
    { label: 'Pyt. 17 · Stan równowagi termodynamicznej', route: '/teoria/polprzewodniki#q17' },
    { label: 'Pyt. 18 · Stan nierównowagi termodynamicznej', route: '/teoria/polprzewodniki#q18' }
  ],
  '2026_L1_A1_2': [
    { label: 'Pyt. 1 · Równania Maxwella', route: '/teoria/fala-propagacja#q1' }
  ],
  '2026_L1_A1_3': [
    { label: 'Pyt. 3 · Zjawiska falowe (odbicie, załamanie, dyfrakcja, interferencja)', route: '/teoria/fala-propagacja#q3' },
    { label: 'Pyt. 12 · Budżet łącza telekomunikacyjnego', route: '/teoria/swiatlowody#q12' }
  ],
  // 2026 Lato I (L1) Grupa B
  '2026_L1_B_1': [
    { label: 'Pyt. 22 · Tranzystory bipolarne', route: '/teoria/pamieci-nosniki#q22' }
  ],
  '2026_L1_B_2': [
    { label: 'Pyt. 13 · Jakość modulacji (BER, oczko, Γ)', route: '/teoria/modulacja#q13' }
  ],
  '2026_L1_B_3': [
    { label: 'Pyt. 4 · Fale powierzchniowe, troposferyczne, jonosferyczne', route: '/teoria/fala-propagacja#q4' },
    { label: 'Pyt. 12 · Budżet łącza telekomunikacyjnego', route: '/teoria/swiatlowody#q12' }
  ],
  // 2025 Lato I (L1) Grupa B
  '2025_L1_B_1': [
    { label: 'Pyt. 23 · Tranzystory polowe', route: '/teoria/pamieci-nosniki#q23' }
  ],
  '2025_L1_B_2': [
    { label: 'Pyt. 12 · Budżet łącza telekomunikacyjnego', route: '/teoria/swiatlowody#q12' }
  ],
  '2025_L1_B_3': [
    { label: 'Pyt. 3 · Zjawiska falowe (odbicie, załamanie, dyfrakcja, interferencja)', route: '/teoria/fala-propagacja#q3' },
    { label: 'Pyt. 12 · Budżet łącza telekomunikacyjnego', route: '/teoria/swiatlowody#q12' }
  ],
  // 2025 Zima I (Z1) Grupa A1
  '2025_Z1_A1_1': [
    { label: 'Pyt. 14 · Multipleksacja i zastosowania', route: '/teoria/modulacja#q14' }
  ],
  '2025_Z1_A1_2': [
    { label: 'Pyt. 25 · Zapis i odtwarzanie na dyskach optycznych', route: '/teoria/pamieci-nosniki#q25' }
  ],
  '2025_Z1_A1_3': [
    { label: 'Pyt. 8 · Światłowody jedno- i wielomodowe', route: '/teoria/swiatlowody#q8' },
    { label: 'Pyt. 9 · Okna transmisyjne', route: '/teoria/swiatlowody#q9' },
    { label: 'Pyt. 10 · Dyspersja w światłowodach', route: '/teoria/swiatlowody#q10' }
  ]
};

// Mapping of task keys to their diagrams using the actual textbook assets
const TASK_CHARTS: Record<string, React.ReactNode> = {
  // 2026 Lato I (L1) Grupa A1
  '2026_L1_A1_1': (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
        <img src={TeoriaPolprzewodniki_img_2} alt="Rysunek 6.2. Rozkład Fermiego-Diraca" className="mx-auto max-h-[180px] object-contain" />
        <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
          Rysunek 6.2. Rozkład Fermiego–Diraca dla półprzewodnika a) samoistnego, b) typu n i c) typu p.
        </figcaption>
      </figure>
      <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
        <img src={TeoriaPolprzewodniki_img_3} alt="Rysunek 6.3. Zależność koncentracji nośników w funkcji temperatury" className="mx-auto max-h-[180px] object-contain" />
        <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
          Rysunek 6.3. Zależność koncentracji nośników w funkcji temperatury dla krzemu typu n.
        </figcaption>
      </figure>
      <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
        <img src={TeoriaPolprzewodniki_img_4} alt="Rysunek 6.5. Model generacji i rekombinacji bezpośredniej" className="mx-auto max-h-[180px] object-contain" />
        <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
          Rysunek 6.5. Model generacji i rekombinacji bezpośredniej w półprzewodniku.
        </figcaption>
      </figure>
      <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
        <img src={TeoriaPolprzewodniki_img_5} alt="Rysunek 6.6. Model generacji i rekombinacji pośredniej" className="mx-auto max-h-[180px] object-contain" />
        <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
          Rysunek 6.6. Model generacji i rekombinacji pośredniej w półprzewodniku.
        </figcaption>
      </figure>
    </div>
  ),
  '2026_L1_A1_3': (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
        <img src={TeoriaFalaPropagacja_img_2} alt="Rysunek 3.1. Odbicie fali" className="mx-auto max-h-[180px] object-contain" />
        <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
          Rysunek 3.1. Odbicie fali na granicy dwóch ośrodków.
        </figcaption>
      </figure>
      <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
        <img src={TeoriaFalaPropagacja_img_3} alt="Rysunek 3.2. Załamanie fali" className="mx-auto max-h-[180px] object-contain" />
        <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
          Rysunek 3.2. Załamanie fali na granicy dwóch ośrodków.
        </figcaption>
      </figure>
      <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
        <img src={TeoriaFalaPropagacja_img_4} alt="Rysunek 3.3. Schemat doświadczenia Younga" className="mx-auto max-h-[180px] object-contain" />
        <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
          Rysunek 3.3. Schemat doświadczenia Younga.
        </figcaption>
      </figure>
      <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
        <img src={TeoriaFalaPropagacja_img_5} alt="Rysunek 3.4. Ilustracja interferencji" className="mx-auto max-h-[180px] object-contain" />
        <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
          Rysunek 3.4. Ilustracja interferencji w doświadczeniu Younga dla dwóch różnych odległości pomiędzy szczelinami: a) mniejszej, b) większej.
        </figcaption>
      </figure>
    </div>
  ),
  // 2026 Lato I (L1) Grupa B
  '2026_L1_B_1': (
    <>
      <figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]">
        <img src={TeoriaPamieciNosniki_img_2} alt="Charakterystyka potencjału w złączu p-n-p" className="mx-auto max-h-[300px] object-contain" />
        <figcaption className="font-mono text-[11px] text-muted mt-2 text-left">
          Rysunek 7.2. Charakterystyka potencjału w złączu p–n–p a) bez polaryzacji, b) po przyłożeniu napięcia U<sub>CE</sub>, c) złącze emiter–baza spolaryzowane w kierunku przewodzenia napięciem U<sub>BE</sub>.
        </figcaption>
      </figure>
      <figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]">
        <img src={TeoriaPamieciNosniki_img_3} alt="Charakterystyka prądowo-napięciowa tranzystora" className="mx-auto max-h-[300px] object-contain" />
        <figcaption className="font-mono text-[11px] text-muted mt-2 text-left">
          Rysunek 7.3. Charakterystyka prądowo–napięciowa tranzystora.
        </figcaption>
      </figure>
    </>
  ),
  '2026_L1_B_2': (
    <figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]">
      <img src={TeoriaModulacja_img_1} alt="Wykres oczkowy" className="mx-auto max-h-[300px] object-contain" />
      <figcaption className="font-mono text-[11px] text-muted mt-2 text-left">
        Rysunek 5.4. Wykres oczkowy.
      </figcaption>
    </figure>
  ),
  // 2025 Lato I (L1) Grupa B
  '2025_L1_B_1': (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
          <img src={TeoriaPamieciNosniki_img_4} alt="Rysunek 7.4. Przekrój MOSFET (polaryzacja zerowa)" className="mx-auto max-h-[180px] object-contain" />
          <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
            Rysunek 7.4. Przekrój tranzystora MOSFET, gdy polaryzacja bramki i drenu jest zerowa.
          </figcaption>
        </figure>
        <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
          <img src={TeoriaPamieciNosniki_img_5} alt="Rysunek 7.5. Przekrój MOSFET (polaryzacja bramki dodatnia)" className="mx-auto max-h-[180px] object-contain" />
          <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
            Rysunek 7.5. Przekrój tranzystora MOSFET, gdy polaryzacja bramki jest dodatnia a drenu zerowa.
          </figcaption>
        </figure>
        <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
          <img src={TeoriaPamieciNosniki_img_6} alt="Rysunek 7.6. Przekrój MOSFET (polaryzacja bramki i drenu dodatnia)" className="mx-auto max-h-[180px] object-contain" />
          <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
            Rysunek 7.6. Przekrój tranzystora MOSFET, gdy polaryzacja bramki i drenu jest dodatnia.
          </figcaption>
        </figure>
        <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
          <img src={TeoriaPamieciNosniki_img_7} alt="Rysunek 7.7. Przekrój MOSFET (UDS = UGS)" className="mx-auto max-h-[180px] object-contain" />
          <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
            Rysunek 7.7. Przekrój tranzystora MOSFET gdy polaryzacja bramki i drenu jest dodatnia U<sub>DS</sub> = U<sub>GS</sub>.
          </figcaption>
        </figure>
      </div>
      <figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]">
        <img src={TeoriaPamieciNosniki_img_8} alt="Rysunek 7.8. Charakterystyka wyjściowa MOSFET" className="mx-auto max-h-[250px] object-contain" />
        <figcaption className="font-mono text-[11px] text-muted mt-2 text-left">
          Rysunek 7.8. Charakterystyka wyjściowa tranzystora MOSFET.
        </figcaption>
      </figure>
    </>
  ),
  '2025_L1_B_3': (
    <>
      <figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]">
        <img src={TeoriaFalaPropagacja_img_4} alt="Schemat doświadczenia Younga" className="mx-auto max-h-[220px] object-contain" />
        <figcaption className="font-mono text-[11px] text-muted mt-2 text-left">
          Rysunek 3.3. Schemat doświadczenia Younga.
        </figcaption>
      </figure>
      <figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]">
        <img src={TeoriaFalaPropagacja_img_5} alt="Ilustracja interferencji w doświadczeniu Younga" className="mx-auto max-h-[300px] object-contain" />
        <figcaption className="font-mono text-[11px] text-muted mt-2 text-left">
          Rysunek 3.4. Ilustracja interferencji w doświadczeniu Younga dla dwóch różnych odległości pomiędzy szczelinami: a) mniejszej, b) większej.
        </figcaption>
      </figure>
    </>
  )
};

export default function Egzaminy() {
  const [searchParams, setSearchParams] = useSearchParams();
  const yearParam = searchParams.get('year');
  const termParam = searchParams.get('term');
  const groupParam = searchParams.get('group');

  const selectedYear = yearParam ? parseInt(yearParam) : 2026;
  const selectedTerm = termParam || 'L1';

  const years = [2026, 2025, 2024];
  const terms = [
    { id: 'Z1', name: 'Zima 1' },
    { id: 'Z2', name: 'Zima 2' },
    { id: 'L1', name: 'Lato 1' },
    { id: 'L2', name: 'Lato 2' },
    { id: 'W', name: 'Wrzesień' }
  ];

  // Fetch active group data from DB
  const yearData = (examsData as any)[selectedYear];
  const termData = yearData ? yearData[selectedTerm] : null;

  const groups = termData ? Object.keys(termData).sort() : ['A', 'B'];
  const selectedGroup = groupParam && groups.includes(groupParam) ? groupParam : (groups[0] || 'B');

  // Update URL query parameters on tab click
  const updateParams = (y: number, t: string, g: string) => {
    setSearchParams({ year: y.toString(), term: t, group: g });
  };

  // Trigger MathJax formatting whenever active exam changes
  useEffect(() => {
    let timeoutId: any;
    const checkMathJax = () => {
      const w = window as any;
      if (w.MathJax && w.MathJax.typesetPromise) {
        w.MathJax.typesetPromise().then(() => {
          // Once typesetting is done and heights are stable, scroll to hash if present
          const hash = window.location.hash;
          if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
              // Wrap in a tiny delay to let the browser adjust heights
              setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 50);
            }
          }
        }).catch((err: any) => console.warn('MathJax typesetting error:', err));
      } else {
        timeoutId = setTimeout(checkMathJax, 100);
      }
    };
    checkMathJax();
    return () => clearTimeout(timeoutId);
  }, [selectedYear, selectedTerm, selectedGroup]);

  const groupData = termData ? (termData[selectedGroup] as GroupData) : null;

  // Custom renderer to format plain text solution strings into rich HTML structure
  const renderInline = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={idx} className="text-white font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const renderContent = (text: string) => {
    if (!text) return null;
    const paragraphs = text.split(/\n\n+/);

    return paragraphs.map((p, idx) => {
      const trimmed = p.trim();
      
      // Render Horizontal Rule
      if (trimmed === '---') {
        return <hr key={idx} className="border-t border-line my-6" />;
      }

      // Render Subheadings (lines that are short and end with a colon)
      if (trimmed.endsWith(':') && trimmed.length < 80) {
        return (
          <h4 key={idx} className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">
            {trimmed}
          </h4>
        );
      }

      // Parse the lines of the paragraph block
      const lines = trimmed.split('\n');
      const elements: React.ReactNode[] = [];
      
      let currentList: {
        type: 'ol' | 'ul';
        start?: number;
        items: { key: number; blocks: { type: 'text' | 'formula'; content: string }[] }[];
      } | null = null;
      
      let currentParagraphLines: string[] = [];

      const flushCurrentList = (key: string) => {
        if (!currentList) return;
        
        const listItems = currentList.items.map((item) => {
          return (
            <li key={item.key} className="mb-2">
              {item.blocks.map((block, bIdx) => {
                if (block.type === 'formula') {
                  return (
                    <div key={bIdx} className="my-2.5 text-center overflow-x-auto">
                      {renderInline(block.content)}
                    </div>
                  );
                }
                return (
                  <div key={bIdx} className={bIdx > 0 ? "mt-1.5" : ""}>
                    {renderInline(block.content)}
                  </div>
                );
              })}
            </li>
          );
        });

        if (currentList.type === 'ol') {
          elements.push(
            <ol key={key} start={currentList.start} className="list-decimal pl-5 mb-4 text-[15px] space-y-1.5">
              {listItems}
            </ol>
          );
        } else {
          elements.push(
            <ul key={key} className="list-disc pl-5 mb-4 text-[15px] space-y-1.5">
              {listItems}
            </ul>
          );
        }
        currentList = null;
      };

      const flushCurrentParagraph = (key: string) => {
        if (currentParagraphLines.length === 0) return;
        const pText = currentParagraphLines.join(' ');
        elements.push(
          <p key={key} className="mb-3.5 text-[15px] leading-relaxed text-txt font-sans">
            {renderInline(pText)}
          </p>
        );
        currentParagraphLines = [];
      };

      lines.forEach((line, lineIdx) => {
        const lineTrimmed = line.trim();
        if (!lineTrimmed) return;

        const isBullet = lineTrimmed.startsWith('-') || lineTrimmed.startsWith('•');
        const isNumber = lineTrimmed.match(/^\d+\./);
        const isBlockFormula = lineTrimmed.startsWith('\\[') && lineTrimmed.endsWith('\\]');

        if (isBullet) {
          flushCurrentParagraph(`${idx}-${lineIdx}-p`);
          if (currentList && currentList.type !== 'ul') {
            flushCurrentList(`${idx}-${lineIdx}-list`);
          }
          const cleaned = lineTrimmed.replace(/^[-•]\s*/, '');
          if (!currentList) {
            currentList = {
              type: 'ul',
              items: [{ key: 0, blocks: [{ type: 'text', content: cleaned }] }]
            };
          } else {
            currentList.items.push({
              key: currentList.items.length,
              blocks: [{ type: 'text', content: cleaned }]
            });
          }
        } else if (isNumber) {
          flushCurrentParagraph(`${idx}-${lineIdx}-p`);
          if (currentList && currentList.type !== 'ol') {
            flushCurrentList(`${idx}-${lineIdx}-list`);
          }
          const cleaned = lineTrimmed.replace(/^\d+\.\s*/, '');
          const startNum = parseInt(isNumber[0]);
          if (!currentList) {
            currentList = {
              type: 'ol',
              start: startNum,
              items: [{ key: 0, blocks: [{ type: 'text', content: cleaned }] }]
            };
          } else {
            currentList.items.push({
              key: currentList.items.length,
              blocks: [{ type: 'text', content: cleaned }]
            });
          }
        } else if (isBlockFormula) {
          if (currentList) {
            const lastItem = currentList.items[currentList.items.length - 1];
            lastItem.blocks.push({ type: 'formula', content: lineTrimmed });
          } else {
            flushCurrentParagraph(`${idx}-${lineIdx}-p`);
            elements.push(
              <div key={`${idx}-${lineIdx}-formula`} className="my-3 text-center overflow-x-auto">
                {renderInline(lineTrimmed)}
              </div>
            );
          }
        } else {
          if (currentList) {
            const lastItem = currentList.items[currentList.items.length - 1];
            const lastBlock = lastItem.blocks[lastItem.blocks.length - 1];
            if (lastBlock && lastBlock.type === 'text') {
              lastBlock.content += ' ' + lineTrimmed;
            } else {
              lastItem.blocks.push({ type: 'text', content: lineTrimmed });
            }
          } else {
            currentParagraphLines.push(lineTrimmed);
          }
        }
      });

      flushCurrentParagraph(`${idx}-final-p`);
      flushCurrentList(`${idx}-final-list`);

      return <div key={idx}>{elements}</div>;
    });
  };

  const renderEmptyState = () => (
    <div className="border border-line border-dashed rounded-[14px] p-10 text-center text-muted bg-panel/30 my-6">
      <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" className="mx-auto mb-3.5 text-line">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <h3 className="text-white font-semibold text-lg mb-1">Brak danych dla wybranego terminu</h3>
      <p className="text-[14.5px] max-w-[420px] mx-auto text-muted-more">
        Brak arkusza i rozwiązań w bazie dla roku <strong>{selectedYear}</strong>, sesji <strong>{selectedTerm === 'Z' ? 'Zimowej' : selectedTerm === 'L' ? 'Letniej' : 'Wrześniowej'}</strong>, <strong>Grupy {selectedGroup}</strong>.
      </p>
      <div className="mt-5 flex justify-center gap-3">
        <button
          onClick={() => updateParams(2026, 'L', 'B')}
          className="font-mono text-[11.5px] bg-amber text-ink px-4 py-2 rounded-lg font-semibold hover:bg-amber-soft transition-colors cursor-pointer border-none"
        >
          Pokaż egzamin z 2026 (Lato, Grupa B)
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-[880px] mx-auto px-4 py-7 pb-20">
      {/* Page Header */}
      <header className="mb-6 border border-line bg-linear-to-br from-panel to-ink2 rounded-[14px] px-6 py-[22px]">
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-amber">FPTiTI · baza egzaminów i kolokwiów</div>
        <h1 className="text-[27px] font-semibold mt-1.5 mb-1">Archiwum Egzaminów</h1>
        <div className="text-muted text-[14.5px]">Rozwiązania zadań z ubiegłych lat · wskazówki dla studentów</div>
      </header>

      {/* Selector Filters */}
      <div className="border border-line bg-panel rounded-[14px] p-5 mb-6 flex flex-col gap-4">
        {/* Year Selector */}
        <div>
          <span className="block font-mono text-[10.5px] uppercase tracking-wider text-muted mb-2">Rok akademicki</span>
          <div className="flex gap-2.5">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => updateParams(y, selectedTerm, selectedGroup)}
                className={`font-mono text-[12.5px] px-4 py-1.5 rounded-lg border cursor-pointer transition-all ${
                  selectedYear === y
                    ? 'bg-amber border-amber text-ink font-bold shadow-[0_2px_8px_rgba(244,165,42,0.3)]'
                    : 'border-line text-txt hover:border-amber hover:text-white bg-ink2/30'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Term Selector */}
          <div>
            <span className="block font-mono text-[10.5px] uppercase tracking-wider text-muted mb-2">Termin / Sesja</span>
            <div className="flex gap-2">
              {terms.map((t) => (
                <button
                  key={t.id}
                  onClick={() => updateParams(selectedYear, t.id, selectedGroup)}
                  className={`font-mono text-[12.5px] px-3.5 py-1.5 rounded-lg border cursor-pointer transition-all flex-1 text-center ${
                    selectedTerm === t.id
                      ? 'bg-amber border-amber text-ink font-bold shadow-[0_2px_8px_rgba(244,165,42,0.3)]'
                      : 'border-line text-txt hover:border-amber hover:text-white bg-ink2/30'
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          {/* Group Selector */}
          <div>
            <span className="block font-mono text-[10.5px] uppercase tracking-wider text-muted mb-2">Grupa</span>
            <div className="flex gap-2">
              {groups.map((g) => (
                <button
                  key={g}
                  onClick={() => updateParams(selectedYear, selectedTerm, g)}
                  className={`font-mono text-[12.5px] px-4 py-1.5 rounded-lg border cursor-pointer transition-all flex-1 text-center ${
                    selectedGroup === g
                      ? 'bg-amber border-amber text-ink font-bold shadow-[0_2px_8px_rgba(244,165,42,0.3)]'
                      : 'border-line text-txt hover:border-amber hover:text-white bg-ink2/30'
                  }`}
                >
                  Grupa {g}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Render */}
      {groupData && groupData.tasks && groupData.tasks.length > 0 ? (
        <div className="flex flex-col gap-6">
          {/* Exam image scan if available */}
          {groupData.image && EXAM_IMAGES[groupData.image] && (
            <div className="border border-line bg-ink2 rounded-[14px] p-4 flex flex-col items-center">
              <span className="font-mono text-[11px] tracking-wider text-muted mb-3 uppercase">Oryginalny arkusz egzaminacyjny</span>
              <img
                src={EXAM_IMAGES[groupData.image]}
                alt={`Arkusz ${selectedYear} termin ${selectedTerm} grupa ${selectedGroup}`}
                className="max-h-[380px] w-auto max-w-full rounded-lg border border-line shadow-md hover:scale-[1.01] transition-transform duration-300 object-contain"
              />
            </div>
          )}

          {/* Task Anchor Quicklinks */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11.5px] text-muted">
            <span>Zadania:</span>
            {groupData.tasks.map((task) => (
              <a
                key={task.number}
                href={`#task-${task.number}`}
                className="text-amber-soft border border-line bg-panel px-3 py-1 rounded-full hover:border-amber transition-colors no-underline"
              >
                Zadanie {task.number}
              </a>
            ))}
          </div>

          {/* Render tasks */}
          {groupData.tasks.map((task) => {
            const linkKey = `${selectedYear}_${selectedTerm}_${selectedGroup}_${task.number}`;
            const relatedLinks = RELATED_LINKS[linkKey] || [];
            const charts = TASK_CHARTS[linkKey];

            return (
            <section
              key={task.number}
              id={`task-${task.number}`}
              className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-2 scroll-mt-24"
            >
              {/* Task Header */}
              <div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
                <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">
                  Zadanie {task.number}
                </span>
                <h2 className="text-[19px] font-semibold leading-tight text-white">Treść zadania</h2>
              </div>

              {/* Task Question text */}
              <div className="bg-ink2/50 border border-line rounded-lg px-4 py-3.5 mb-4 text-[15px] font-sans leading-relaxed text-txt whitespace-pre-wrap">
                {task.question}
              </div>

              {/* Related theory links */}
              {relatedLinks.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-mono text-[10.5px] text-muted uppercase tracking-wider self-center mr-1">Powiązane odpowiedzi →</span>
                  {relatedLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.route}
                      className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-ink2/60 px-3 py-1.5 rounded-lg hover:border-amber hover:bg-amber/10 transition-all flex items-center gap-1.5"
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Tip Component */}
              {task.tip && <Tip>{task.tip}</Tip>}

              {/* Solution */}
              <div className="mt-5">
                <h3 className="text-[14px] font-mono text-amber uppercase tracking-wider mb-3">Wzorcowe rozwiązanie:</h3>
                <div className="solution-content font-serif">
                  {renderContent(task.solution)}
                </div>
              </div>

              {/* Rysunki pomocnicze */}
              {charts && (
                <div className="mt-5">
                  <h3 className="text-[14px] font-mono text-amber uppercase tracking-wider mb-3">Rysunki pomocnicze:</h3>
                  {charts}
                </div>
              )}
            </section>
          );
          })}
        </div>
      ) : (
        renderEmptyState()
      )}
      <Footer>FPTiTI · Archiwum egzaminów · powodzenia! 💪</Footer>
    </div>
  );
}

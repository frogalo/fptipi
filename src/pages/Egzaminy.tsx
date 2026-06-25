import React, { useEffect, useState } from 'react';
import { Radio } from 'react-next-loader';
import { useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer';
import LazyImage from '@/components/LazyImage';
import examsData from '@/lib/examsData.json';
import ExamSelector from '@/features/egzaminy/ExamSelector';
import ExamEmptyState from '@/features/egzaminy/ExamEmptyState';
import TaskCard, { Task, RelatedLink } from '@/features/egzaminy/TaskCard';
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

interface GroupData {
  image?: string;
  tasks: Task[];
}

// Cross-link mapping: exam task key -> related theory answers
const RELATED_LINKS: Record<string, RelatedLink[]> = {
  // 2026 Lato Grupa A
  '2026_L1_A_1': [
    { label: 'Pyt. 17 · Stan równowagi termodynamicznej', route: '/teoria/polprzewodniki#q17' },
    { label: 'Pyt. 18 · Stan nierównowagi termodynamicznej', route: '/teoria/polprzewodniki#q18' }
  ],
  '2026_L1_A_2': [
    { label: 'Pyt. 1 · Równania Maxwella', route: '/teoria/fala-propagacja#q1' }
  ],
  '2026_L1_A_3': [
    { label: 'Pyt. 3 · Zjawiska falowe (odbicie, załamanie, dyfrakcja, interferencja)', route: '/teoria/fala-propagacja#q3' },
    { label: 'Pyt. 12 · Budżet łącza telekomunikacyjnego', route: '/teoria/swiatlowody#q12' }
  ],
  // 2026 Lato Grupa B
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
  // 2025 Lato Grupa B
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
  // 2025 Zima Grupa A
  '2025_Z1_A_1': [
    { label: 'Pyt. 14 · Multipleksacja i zastosowania', route: '/teoria/modulacja#q14' }
  ],
  '2025_Z1_A_2': [
    { label: 'Pyt. 25 · Zapis i odtwarzanie na dyskach optycznych', route: '/teoria/pamieci-nosniki#q25' }
  ],
  '2025_Z1_A_3': [
    { label: 'Pyt. 8 · Światłowody jedno- i wielomodowe', route: '/teoria/swiatlowody#q8' },
    { label: 'Pyt. 9 · Okna transmisyjne', route: '/teoria/swiatlowody#q9' },
    { label: 'Pyt. 10 · Dyspersja w światłowodach', route: '/teoria/swiatlowody#q10' }
  ],
  // 2025 Wrzesień Grupa A
  '2025_Wrzesien_A_1': [
    { label: 'Pyt. 28 · Magnetorezystancja', route: '/teoria/pamieci-nosniki#q28' },
    { label: 'Pyt. 12 · Budżet łącza telekomunikacyjnego', route: '/teoria/swiatlowody#q12' }
  ],
  '2025_Wrzesien_A_2': [
    { label: 'Pyt. 1 · Równania Maxwella', route: '/teoria/fala-propagacja#q1' }
  ],
  '2025_Wrzesien_A_3': [
    { label: 'Pyt. 22 · Tranzystory bipolarne', route: '/teoria/pamieci-nosniki#q22' }
  ],
  // 2018 Zima Grupa A
  '2018_Z1_A_1': [
    { label: 'Pyt. 22 · Tranzystory bipolarne', route: '/teoria/pamieci-nosniki#q22' }
  ],
  '2018_Z1_A_2': [
    { label: 'Pyt. 8 · Światłowody jedno- i wielomodowe', route: '/teoria/swiatlowody#q8' }
  ],
  '2018_Z1_A_3': [
    { label: 'Pyt. 18 · Stan nierównowagi termodynamicznej', route: '/teoria/polprzewodniki#q18' }
  ],
  // 2018 Zima Grupa B
  '2018_Z1_B_1': [
    { label: 'Pyt. 23 · Tranzystory polowe', route: '/teoria/pamieci-nosniki#q23' }
  ],
  '2018_Z1_B_2': [
    { label: 'Pyt. 6 · Zasięg anteny nadawczej', route: '/teoria/fala-propagacja#q6' }
  ],
  '2018_Z1_B_3': [
    { label: 'Pyt. 13 · Jakość modulacji (BER, oczko, Γ)', route: '/teoria/modulacja#q13' }
  ],
  // 2018 Lato Grupa A
  '2018_L1_A_1': [
    { label: 'Pyt. 5 · Czynniki atmosferyczne', route: '/teoria/fala-propagacja#q5' }
  ],
  '2018_L1_A_2': [
    { label: 'Pyt. 22 · Tranzystory bipolarne', route: '/teoria/pamieci-nosniki#q22' }
  ],
  // 2018 Lato Grupa B
  '2018_L1_B_1': [
    { label: 'Pyt. 1 · Równania Maxwella', route: '/teoria/fala-propagacja#q1' },
    { label: '★ · Warunki brzegowe', route: '/teoria/swiatlowody#qwb' }
  ],
  '2018_L1_B_2': [
    { label: 'Pyt. 10 · Dyspersja w światłowodach', route: '/teoria/swiatlowody#q10' }
  ]
};

// Mapping of task keys to their diagrams using the actual textbook assets
const TASK_CHARTS: Record<string, React.ReactNode> = {
  // 2026 Lato I (L1) Grupa A
  '2026_L1_A_1': (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
        <LazyImage src={TeoriaPolprzewodniki_img_2} alt="Rysunek 6.2. Rozkład Fermiego-Diraca" className="mx-auto max-h-[180px] object-contain" wrapperClassName="w-full min-h-[100px]" />
        <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
          Rysunek 6.2. Rozkład Fermiego–Diraca dla półprzewodnika a) samoistnego, b) typu n i c) typu p.
        </figcaption>
      </figure>
      <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
        <LazyImage src={TeoriaPolprzewodniki_img_3} alt="Rysunek 6.3. Zależność koncentracji nośników w funkcji temperatury" className="mx-auto max-h-[180px] object-contain" wrapperClassName="w-full min-h-[100px]" />
        <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
          Rysunek 6.3. Zależność koncentracji nośników w funkcji temperatury dla krzemu typu n.
        </figcaption>
      </figure>
      <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
        <LazyImage src={TeoriaPolprzewodniki_img_4} alt="Rysunek 6.5. Model generacji i rekombinacji bezpośredniej" className="mx-auto max-h-[180px] object-contain" wrapperClassName="w-full min-h-[100px]" />
        <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
          Rysunek 6.5. Model generacji i rekombinacji bezpośredniej w półprzewodniku.
        </figcaption>
      </figure>
      <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
        <LazyImage src={TeoriaPolprzewodniki_img_5} alt="Rysunek 6.6. Model generacji i rekombinacji pośredniej" className="mx-auto max-h-[180px] object-contain" wrapperClassName="w-full min-h-[100px]" />
        <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
          Rysunek 6.6. Model generacji i rekombinacji pośredniej w półprzewodniku.
        </figcaption>
      </figure>
    </div>
  ),
  '2026_L1_A_3': (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
        <LazyImage src={TeoriaFalaPropagacja_img_2} alt="Rysunek 3.1. Odbicie fali" className="mx-auto max-h-[180px] object-contain" wrapperClassName="w-full min-h-[100px]" />
        <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
          Rysunek 3.1. Odbicie fali na granicy dwóch ośrodków.
        </figcaption>
      </figure>
      <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
        <LazyImage src={TeoriaFalaPropagacja_img_3} alt="Rysunek 3.2. Załamanie fali" className="mx-auto max-h-[180px] object-contain" wrapperClassName="w-full min-h-[100px]" />
        <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
          Rysunek 3.2. Załamanie fali na granicy dwóch ośrodków.
        </figcaption>
      </figure>
      <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
        <LazyImage src={TeoriaFalaPropagacja_img_4} alt="Rysunek 3.3. Schemat doświadczenia Younga" className="mx-auto max-h-[180px] object-contain" wrapperClassName="w-full min-h-[100px]" />
        <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
          Rysunek 3.3. Schemat doświadczenia Younga.
        </figcaption>
      </figure>
      <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
        <LazyImage src={TeoriaFalaPropagacja_img_5} alt="Rysunek 3.4. Ilustracja interferencji" className="mx-auto max-h-[180px] object-contain" wrapperClassName="w-full min-h-[100px]" />
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
        <LazyImage src={TeoriaPamieciNosniki_img_2} alt="Charakterystyka potencjału w złączu p-n-p" className="mx-auto max-h-[300px] object-contain" wrapperClassName="w-full min-h-[160px]" />
        <figcaption className="font-mono text-[11px] text-muted mt-2 text-left">
          Rysunek 7.2. Charakterystyka potencjału w złączu p–n–p a) bez polaryzacji, b) po przyłożeniu napięcia U<sub>CE</sub>, c) złącze emiter–baza spolaryzowane w kierunku przewodzenia napięciem U<sub>BE</sub>.
        </figcaption>
      </figure>
      <figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]">
        <LazyImage src={TeoriaPamieciNosniki_img_3} alt="Charakterystyka prądowo-napięciowa tranzystora" className="mx-auto max-h-[300px] object-contain" wrapperClassName="w-full min-h-[160px]" />
        <figcaption className="font-mono text-[11px] text-muted mt-2 text-left">
          Rysunek 7.3. Charakterystyka prądowo–napięciowa tranzystora.
        </figcaption>
      </figure>
    </>
  ),
  '2026_L1_B_2': (
    <figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]">
      <LazyImage src={TeoriaModulacja_img_1} alt="Wykres oczkowy" className="mx-auto max-h-[300px] object-contain" wrapperClassName="w-full min-h-[160px]" />
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
          <LazyImage src={TeoriaPamieciNosniki_img_4} alt="Rysunek 7.4. Przekrój MOSFET (polaryzacja zerowa)" className="mx-auto max-h-[180px] object-contain" wrapperClassName="w-full min-h-[100px]" />
          <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
            Rysunek 7.4. Przekrój tranzystora MOSFET, gdy polaryzacja bramki i drenu jest zerowa.
          </figcaption>
        </figure>
        <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
          <LazyImage src={TeoriaPamieciNosniki_img_5} alt="Rysunek 7.5. Przekrój MOSFET (polaryzacja bramki dodatnia)" className="mx-auto max-h-[180px] object-contain" wrapperClassName="w-full min-h-[100px]" />
          <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
            Rysunek 7.5. Przekrój tranzystora MOSFET, gdy polaryzacja bramki jest dodatnia a drenu zerowa.
          </figcaption>
        </figure>
        <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
          <LazyImage src={TeoriaPamieciNosniki_img_6} alt="Rysunek 7.6. Przekrój MOSFET (polaryzacja bramki i drenu dodatnia)" className="mx-auto max-h-[180px] object-contain" wrapperClassName="w-full min-h-[100px]" />
          <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
            Rysunek 7.6. Przekrój tranzystora MOSFET, gdy polaryzacja bramki i drenu jest dodatnia.
          </figcaption>
        </figure>
        <figure className="text-center bg-white rounded-[10px] p-[14px] border border-line">
          <LazyImage src={TeoriaPamieciNosniki_img_7} alt="Rysunek 7.7. Przekrój MOSFET (UDS = UGS)" className="mx-auto max-h-[180px] object-contain" wrapperClassName="w-full min-h-[100px]" />
          <figcaption className="font-mono text-[10.5px] text-muted mt-2 text-left">
            Rysunek 7.7. Przekrój tranzystora MOSFET gdy polaryzacja bramki i drenu jest dodatnia U<sub>DS</sub> = U<sub>GS</sub>.
          </figcaption>
        </figure>
      </div>
      <figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]">
        <LazyImage src={TeoriaPamieciNosniki_img_8} alt="Rysunek 7.8. Charakterystyka wyjściowa MOSFET" className="mx-auto max-h-[250px] object-contain" wrapperClassName="w-full min-h-[130px]" />
        <figcaption className="font-mono text-[11px] text-muted mt-2 text-left">
          Rysunek 7.8. Charakterystyka wyjściowa tranzystora MOSFET.
        </figcaption>
      </figure>
    </>
  ),
  '2025_L1_B_3': (
    <>
      <figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]">
        <LazyImage src={TeoriaFalaPropagacja_img_4} alt="Schemat doświadczenia Younga" className="mx-auto max-h-[220px] object-contain" wrapperClassName="w-full min-h-[120px]" />
        <figcaption className="font-mono text-[11px] text-muted mt-2 text-left">
          Rysunek 3.3. Schemat doświadczenia Younga.
        </figcaption>
      </figure>
      <figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]">
        <LazyImage src={TeoriaFalaPropagacja_img_5} alt="Ilustracja interferencji w doświadczeniu Younga" className="mx-auto max-h-[300px] object-contain" wrapperClassName="w-full min-h-[160px]" />
        <figcaption className="font-mono text-[11px] text-muted mt-2 text-left">
          Rysunek 3.4. Ilustracja interferencji w doświadczeniu Younga dla dwóch różnych odległości pomiędzy szczelinami: a) mniejszej, b) większej.
        </figcaption>
      </figure>
    </>
  )
};


const termNameMap: Record<string, string> = {
  'Z1': 'Zimowej (sesja 1)',
  'Z2': 'Zimowej (sesja 2)',
  'L1': 'Letniej (sesja 1)',
  'L2': 'Letniej (sesja 2)',
  'Wrzesien': 'Wrześniowej'
};

const years = [2018, 2024, 2025, 2026];
const terms = [
  { id: 'Z1', name: 'Zima 1' },
  { id: 'Z2', name: 'Zima 2' },
  { id: 'L1', name: 'Lato 1' },
  { id: 'L2', name: 'Lato 2' },
  { id: 'Wrzesien', name: 'Wrzesień' }
];

export default function Egzaminy() {
  const [searchParams, setSearchParams] = useSearchParams();
  const yearParam = searchParams.get('year');
  const termParam = searchParams.get('term');
  const groupParam = searchParams.get('group');

  const selectedYear = yearParam ? parseInt(yearParam) : 2026;
  const selectedTerm = termParam || 'L1';

  const [mathJaxLoading, setMathJaxLoading] = useState(true);

  // Helper functions to check if exams are available (have tasks)
  const isYearAvailable = (year: number) => {
    const yData = (examsData as any)[year];
    if (!yData) return false;
    return Object.values(yData).some((tData: any) =>
      tData && Object.values(tData).some((gData: any) =>
        gData && gData.tasks && gData.tasks.length > 0
      )
    );
  };

  const isTermAvailable = (year: number, termId: string) => {
    const yData = (examsData as any)[year];
    const tData = yData ? yData[termId] : null;
    if (!tData) return false;
    return Object.values(tData).some((gData: any) =>
      gData && gData.tasks && gData.tasks.length > 0
    );
  };

  const isGroupAvailable = (year: number, termId: string, groupName: string) => {
    const yData = (examsData as any)[year];
    const tData = yData ? yData[termId] : null;
    const gData = tData ? tData[groupName] : null;
    return !!(gData && gData.tasks && gData.tasks.length > 0);
  };

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
    setMathJaxLoading(true);
    let timeoutId: any;
    const checkMathJax = () => {
      const w = window as any;
      if (w.MathJax && w.MathJax.typesetPromise) {
        w.MathJax.typesetPromise().then(() => {
          setMathJaxLoading(false);
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
        }).catch((err: any) => {
          console.warn('MathJax typesetting error:', err);
          setMathJaxLoading(false);
        });
      } else {
        timeoutId = setTimeout(checkMathJax, 100);
      }
    };
    checkMathJax();
    return () => clearTimeout(timeoutId);
  }, [selectedYear, selectedTerm, selectedGroup]);

  const groupData = termData ? (termData[selectedGroup] as GroupData) : null;

  if (mathJaxLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-ink z-50">
        <Radio size="lg" color="#f4a52a" speed={0.4} glow />
      </div>
    );
  }

  return (
    <div className="max-w-[880px] mx-auto px-4 py-7 pb-20">
      {/* Page Header */}
      <header className="mb-6 border border-line bg-linear-to-br from-panel to-ink2 rounded-[14px] px-6 py-[22px]">
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-amber">FPTiTI · baza egzaminów i kolokwiów</div>
        <h1 className="text-[27px] font-semibold mt-1.5 mb-1">Archiwum Egzaminów</h1>
        <div className="text-muted text-[14.5px]">Rozwiązania zadań z ubiegłych lat · wskazówki dla studentów</div>
      </header>

      {/* Selector Filters */}
      <ExamSelector
        years={years}
        terms={terms}
        groups={groups}
        selectedYear={selectedYear}
        selectedTerm={selectedTerm}
        selectedGroup={selectedGroup}
        isYearAvailable={isYearAvailable}
        isTermAvailable={isTermAvailable}
        isGroupAvailable={isGroupAvailable}
        onSelect={updateParams}
      />

      {/* Main Content Render */}
      {groupData && groupData.tasks && groupData.tasks.length > 0 ? (
        <div className="flex flex-col gap-6">
          {/* Exam image scan if available */}
          {groupData.image && EXAM_IMAGES[groupData.image] && (
            <div className="border border-line bg-ink2 rounded-[14px] p-4 flex flex-col items-center">
              <span className="font-mono text-[11px] tracking-wider text-muted mb-3 uppercase">Oryginalny arkusz egzaminacyjny</span>
              <LazyImage
                src={EXAM_IMAGES[groupData.image]}
                alt={`Arkusz ${selectedYear} termin ${selectedTerm} grupa ${selectedGroup}`}
                className="max-h-[380px] w-auto max-w-full rounded-lg border border-line shadow-md hover:scale-[1.01] transition-transform duration-300 object-contain"
                wrapperClassName="w-full justify-center min-h-[120px]"
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
            return (
              <TaskCard
                key={task.number}
                task={task}
                relatedLinks={RELATED_LINKS[linkKey] || []}
                charts={TASK_CHARTS[linkKey]}
              />
            );
          })}
        </div>
      ) : (
        <ExamEmptyState
          selectedYear={selectedYear}
          selectedTerm={selectedTerm}
          selectedGroup={selectedGroup}
          termNameMap={termNameMap}
          onShowDefault={() => updateParams(2026, 'L1', 'B')}
        />
      )}
      <Footer>FPTiTI · Archiwum egzaminów · powodzenia! 💪</Footer>
    </div>
  );
}


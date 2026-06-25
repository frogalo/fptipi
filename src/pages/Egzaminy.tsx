import React, { useEffect, useState, useMemo } from 'react';
import { Radio } from 'react-next-loader';
import { useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer';
import LazyImage from '@/components/LazyImage';
import ExamSelector from '@/features/egzaminy/ExamSelector';
import ExamEmptyState from '@/features/egzaminy/ExamEmptyState';
import TaskCard, { Task } from '@/features/egzaminy/TaskCard';

const examModules = import.meta.glob('@/data/exams/*.json');
const assetModules = import.meta.glob('/src/assets/*.{png,jpg,jpeg}', { eager: true, import: 'default' }) as Record<string, string>;

// Map filename to year, term, group
// e.g. /src/data/exams/2026_L1_B.json -> { year: 2026, term: 'L1', group: 'B' }
const availableExams = Object.keys(examModules).map((path) => {
  const match = path.match(/\/(\d+)_([A-Za-z0-9]+)_([A-Za-z0-9]+)\.json$/);
  if (match) {
    return {
      year: parseInt(match[1]),
      term: match[2],
      group: match[3],
      path,
      load: examModules[path] as () => Promise<any>
    };
  }
  return null;
}).filter(Boolean) as { year: number, term: string, group: string, path: string, load: () => Promise<any> }[];

const termNameMap: Record<string, string> = {
  'Z1': 'Zimowej (sesja 1)',
  'Z2': 'Zimowej (sesja 2)',
  'L1': 'Letniej (sesja 1)',
  'L2': 'Letniej (sesja 2)',
  'Wrzesien': 'Wrześniowej'
};

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
  const [groupData, setGroupData] = useState<any>(null);
  const [loadingData, setLoadingData] = useState(false);

  const years = useMemo(() => Array.from(new Set(availableExams.map(e => e.year))).sort(), []);
  
  const isYearAvailable = (year: number) => availableExams.some(e => e.year === year);
  const isTermAvailable = (year: number, termId: string) => availableExams.some(e => e.year === year && e.term === termId);
  const isGroupAvailable = (year: number, termId: string, groupName: string) => availableExams.some(e => e.year === year && e.term === termId && e.group === groupName);

  const groups = useMemo(() => {
    return Array.from(new Set(availableExams.filter(e => e.year === selectedYear && e.term === selectedTerm).map(e => e.group))).sort();
  }, [selectedYear, selectedTerm]);

  const selectedGroup = groupParam && groups.includes(groupParam) ? groupParam : (groups[0] || 'B');

  const updateParams = (y: number, t: string, g: string) => {
    setSearchParams({ year: y.toString(), term: t, group: g });
  };

  useEffect(() => {
    const loadExam = async () => {
      const examMeta = availableExams.find(e => e.year === selectedYear && e.term === selectedTerm && e.group === selectedGroup);
      if (examMeta) {
        setLoadingData(true);
        try {
          const mod = await examMeta.load();
          setGroupData(mod.default || mod);
        } catch (err) {
          console.error("Failed to load exam data", err);
          setGroupData(null);
        }
        setLoadingData(false);
      } else {
        setGroupData(null);
      }
    };
    loadExam();
  }, [selectedYear, selectedTerm, selectedGroup]);

  useEffect(() => {
    if (loadingData || !groupData) {
       setMathJaxLoading(false);
       return;
    }
    setMathJaxLoading(true);
    let timeoutId: any;
    const checkMathJax = () => {
      const w = window as any;
      if (w.MathJax && w.MathJax.typesetPromise) {
        w.MathJax.typesetPromise().then(() => {
          setMathJaxLoading(false);
          const hash = window.location.hash;
          if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
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
  }, [groupData, loadingData]);

  if (mathJaxLoading || loadingData) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-ink z-50">
        <Radio size="lg" color="#f4a52a" speed={0.4} glow />
      </div>
    );
  }

  return (
    <div className="max-w-[880px] mx-auto px-4 py-7 pb-20">
      <header className="mb-6 border border-line bg-linear-to-br from-panel to-ink2 rounded-[14px] px-6 py-[22px]">
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-amber">FPTiTI · baza egzaminów i kolokwiów</div>
        <h1 className="text-[27px] font-semibold mt-1.5 mb-1">Archiwum Egzaminów</h1>
        <div className="text-muted text-[14.5px]">Rozwiązania zadań z ubiegłych lat · wskazówki dla studentów</div>
      </header>

      <ExamSelector
        years={years}
        terms={terms}
        groups={groups.length > 0 ? groups : ['A', 'B']}
        selectedYear={selectedYear}
        selectedTerm={selectedTerm}
        selectedGroup={selectedGroup}
        isYearAvailable={isYearAvailable}
        isTermAvailable={isTermAvailable}
        isGroupAvailable={isGroupAvailable}
        onSelect={updateParams}
      />

      {groupData && groupData.tasks && groupData.tasks.length > 0 ? (
        <div className="flex flex-col gap-6">
          {groupData.image && assetModules[`/src/assets/${groupData.image}`] && (
            <div className="border border-line bg-ink2 rounded-[14px] p-4 flex flex-col items-center">
              <span className="font-mono text-[11px] tracking-wider text-muted mb-3 uppercase">Oryginalny arkusz egzaminacyjny</span>
              <LazyImage
                src={assetModules[`/src/assets/${groupData.image}`]}
                alt={`Arkusz ${selectedYear} termin ${selectedTerm} grupa ${selectedGroup}`}
                className="max-h-[380px] w-auto max-w-full rounded-lg border border-line shadow-md hover:scale-[1.01] transition-transform duration-300 object-contain"
                wrapperClassName="w-full justify-center min-h-[120px]"
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 font-mono text-[11.5px] text-muted">
            <span>Zadania:</span>
            {groupData.tasks.map((task: Task) => (
              <a
                key={task.number}
                href={`#task-${task.number}`}
                className="text-amber-soft border border-line bg-panel px-3 py-1 rounded-full hover:border-amber transition-colors no-underline"
              >
                Zadanie {task.number}
              </a>
            ))}
          </div>

          {groupData.tasks.map((task: Task) => (
            <TaskCard
              key={task.number}
              task={task}
              assetModules={assetModules}
            />
          ))}
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

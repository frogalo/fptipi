import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Tip } from '@/components/MathBlocks';
import { renderContent } from './examRenderContent';
import LazyImage from '@/components/LazyImage';
import { typesetMathJax } from '@/utils/mathjax';

export interface RelatedLink {
  label: string;
  route: string;
}

export interface Chart {
  image: string;
  alt: string;
  caption: string;
  maxWidth?: string;
}

export interface TaskTipObject {
  title?: string;
  badge?: string;
  text: string;
}

export type TaskTip = string | TaskTipObject;

export interface Task {
  number: number;
  question: string;
  solution: string;
  tip?: string;
  tips?: TaskTip[];
  relatedLinks?: RelatedLink[];
  charts?: Chart[];
}

interface TaskCardProps {
  task: Task;
  assetModules: Record<string, string>;
  isSolutionVisible?: boolean;
  onToggleSolution?: () => void;
}

export default function TaskCard({
  task,
  assetModules,
  isSolutionVisible,
  onToggleSolution,
}: TaskCardProps) {
  const [showSolution, setShowSolution] = useState<boolean>(true);

  useEffect(() => {
    if (isSolutionVisible !== undefined) {
      setShowSolution(isSolutionVisible);
    }
  }, [isSolutionVisible]);

  const handleToggle = () => {
    const next = !showSolution;
    setShowSolution(next);
    if (onToggleSolution) {
      onToggleSolution();
    }
    if (next) {
      setTimeout(() => {
        typesetMathJax();
      }, 50);
    }
  };

  const relatedLinks = task.relatedLinks || [];
  const charts = task.charts || [];

  const normalizedTips: TaskTipObject[] = useMemo(() => {
    if (task.tips && task.tips.length > 0) {
      return task.tips.map((t, idx) => {
        if (typeof t === 'string') {
          return {
            title: task.tips!.length > 1 ? `Wskazówka egzaminacyjna #${idx + 1}` : 'Wskazówka egzaminacyjna',
            text: t,
          };
        }
        return {
          title: t.title || (task.tips!.length > 1 ? `Wskazówka egzaminacyjna #${idx + 1}` : 'Wskazówka egzaminacyjna'),
          badge: t.badge,
          text: t.text,
        };
      });
    }
    if (task.tip) {
      return [
        {
          title: 'Wskazówka egzaminacyjna',
          text: task.tip,
        },
      ];
    }
    return [];
  }, [task.tip, task.tips]);

  return (
    <section
      id={`task-${task.number}`}
      className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-2 scroll-mt-24"
    >
      {/* Task Header */}
      <div className="flex items-baseline justify-between border-b border-line pb-3 mb-4 gap-3">
        <div className="flex items-baseline gap-3">
          <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">
            Zadanie {task.number}
          </span>
          <h2 className="text-[19px] font-semibold leading-tight text-txt">Treść zadania</h2>
        </div>

        <button
          type="button"
          onClick={handleToggle}
          className={`font-mono text-[11.5px] px-3 py-1 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer select-none ${
            showSolution
              ? 'border-line hover:border-amber/60 text-muted hover:text-txt bg-ink2/40'
              : 'border-amber bg-amber/15 text-amber hover:bg-amber hover:text-ink font-semibold'
          }`}
          title={showSolution ? 'Ukryj rozwiązanie tego zadania' : 'Pokaż rozwiązanie tego zadania'}
          aria-expanded={showSolution}
        >
          {showSolution ? (
            <>
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
              Ukryj odp.
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Pokaż odp.
            </>
          )}
        </button>
      </div>

      {/* Task Question text */}
      <div className="bg-ink2/50 border border-line rounded-lg px-4 py-3.5 mb-4 text-[15px] font-sans leading-relaxed text-txt whitespace-pre-wrap">
        {task.question}
      </div>

      {/* Related theory links */}
      {relatedLinks.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="font-mono text-[10.5px] text-muted uppercase tracking-wider self-center mr-1">
            Powiązane odpowiedzi →
          </span>
          {relatedLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.route}
              className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-ink2/60 px-3 py-1.5 rounded-lg hover:border-amber hover:bg-amber/10 transition-all flex items-center gap-1.5"
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="shrink-0"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Tips Component(s) */}
      {normalizedTips.length > 0 && (
        <div className="space-y-1 my-3">
          {normalizedTips.map((t, idx) => (
            <Tip key={idx} title={t.title} badge={t.badge}>
              {t.text}
            </Tip>
          ))}
        </div>
      )}

      {/* Solution Section */}
      <div className="mt-5 pt-4 border-t border-line/60">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-[14px] font-mono text-amber uppercase tracking-wider">
              Wzorcowe rozwiązanie:
            </h3>
            <span
              className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                showSolution
                  ? 'bg-green/15 text-green border border-green/30'
                  : 'bg-muted/15 text-muted border border-line'
              }`}
            >
              {showSolution ? 'Widoczne' : 'Ukryte'}
            </span>
          </div>

          <button
            type="button"
            onClick={handleToggle}
            className={`font-mono text-[12px] px-3.5 py-1.5 rounded-lg border transition-all flex items-center gap-2 cursor-pointer select-none ${
              showSolution
                ? 'border-line hover:border-amber/60 text-txt hover:text-amber bg-ink2/50'
                : 'border-amber bg-amber text-ink font-bold shadow-[0_2px_8px_rgba(244,165,42,0.25)] hover:brightness-110'
            }`}
            aria-expanded={showSolution}
          >
            {showSolution ? (
              <>
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
                Ukryj odpowiedź
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                Pokaż odpowiedź
              </>
            )}
          </button>
        </div>

        {showSolution ? (
          <div className="animate-fadeIn">
            <div className="solution-content font-sans text-txt leading-relaxed">
              {renderContent(task.solution)}
            </div>

            {/* Rysunki pomocnicze */}
            {charts.length > 0 && (
              <div className="mt-5 pt-4 border-t border-line/40">
                <h4 className="text-[13px] font-mono text-amber uppercase tracking-wider mb-3">
                  Rysunki pomocnicze:
                </h4>
                <div className={`grid grid-cols-1 ${charts.length > 1 ? 'md:grid-cols-2' : ''} gap-4 my-4`}>
                  {charts.map((chart, idx) => {
                    const imageSrc = assetModules[`/src/assets/${chart.image}`];
                    return (
                      <figure
                        key={idx}
                        className="text-center bg-white rounded-[10px] p-[14px] border border-line mx-auto w-full"
                        style={chart.maxWidth ? { maxWidth: chart.maxWidth } : undefined}
                      >
                        <LazyImage
                          src={imageSrc}
                          alt={chart.alt}
                          className="mx-auto max-h-[300px] object-contain"
                          wrapperClassName="w-full min-h-[100px]"
                        />
                        <figcaption
                          className="font-mono text-[11px] text-muted mt-2 text-left"
                          dangerouslySetInnerHTML={{
                            __html: chart.caption.replace(/U<sub>(.+?)<\/sub>/g, 'U<sub>$1</sub>'),
                          }}
                        />
                      </figure>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="border border-dashed border-line/80 bg-ink2/30 rounded-xl p-5 text-center my-2 animate-fadeIn">
            <p className="text-[14px] text-muted mb-3 font-sans">
              Odpowiedź i materiały pomocnicze są ukryte. Rozwiąż zadanie na kartce (pamiętaj: na egzaminie nie ma kalkulatora!), a następnie sprawdź swój wynik.
            </p>
            <button
              type="button"
              onClick={handleToggle}
              className="font-mono text-[12px] font-bold px-4 py-2 rounded-lg bg-amber/20 hover:bg-amber text-amber hover:text-ink border border-amber/40 transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
             Odsłoń wzorcowe rozwiązanie
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

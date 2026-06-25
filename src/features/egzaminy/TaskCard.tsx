import React from 'react';
import { Link } from 'react-router-dom';
import { Tip } from '@/components/MathBlocks';
import { renderContent } from './examRenderContent';
import LazyImage from '@/components/LazyImage';

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

export interface Task {
  number: number;
  question: string;
  solution: string;
  tip?: string;
  relatedLinks?: RelatedLink[];
  charts?: Chart[];
}

interface TaskCardProps {
  task: Task;
  assetModules: Record<string, string>;
}

export default function TaskCard({ task, assetModules }: TaskCardProps) {
  const relatedLinks = task.relatedLinks || [];
  const charts = task.charts || [];

  return (
    <section
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

      {/* Tip Component */}
      {task.tip && <Tip>{task.tip}</Tip>}

      {/* Solution */}
      <div className="mt-5">
        <h3 className="text-[14px] font-mono text-amber uppercase tracking-wider mb-3">
          Wzorcowe rozwiązanie:
        </h3>
        <div className="solution-content font-serif">{renderContent(task.solution)}</div>
      </div>

      {/* Rysunki pomocnicze */}
      {charts.length > 0 && (
        <div className="mt-5">
          <h3 className="text-[14px] font-mono text-amber uppercase tracking-wider mb-3">
            Rysunki pomocnicze:
          </h3>
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
                    dangerouslySetInnerHTML={{ __html: chart.caption.replace(/U<sub>(.+?)<\/sub>/g, 'U<sub>$1</sub>') }}
                  />
                </figure>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

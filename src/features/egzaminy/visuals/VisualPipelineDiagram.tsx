import React, { useState } from 'react';

export interface PipelineNode {
  id: string;
  title: string;
  type: 'tx' | 'rx' | 'connector' | 'fiber' | 'dcf' | 'generic';
  badge: string;
  metrics: string[];
}

interface VisualPipelineDiagramProps {
  raw: string;
  title?: string;
}

export function parsePipelineString(raw: string): PipelineNode[] {
  const cleaned = raw.replace(/^[`'"]+|[`'"]+$/g, '').trim();
  const blockRegex = /\[(.*?)\]/g;
  const matches: string[] = [];
  let match;
  while ((match = blockRegex.exec(cleaned)) !== null) {
    matches.push(match[1].trim());
  }

  if (matches.length === 0) return [];

  return matches.map((text, idx) => {
    const lower = text.toLowerCase();
    let type: PipelineNode['type'] = 'generic';
    let badge = 'MODUŁ';

    if (lower.includes('nadajnik') || lower.includes('tx') || lower.includes('laser')) {
      type = 'tx';
      badge = 'Tx';
    } else if (lower.includes('odbiornik') || lower.includes('rx') || lower.includes('detektor')) {
      type = 'rx';
      badge = 'Rx';
    } else if (lower.includes('złącze') || lower.includes('spaw') || lower.includes('tłumik')) {
      type = 'connector';
      badge = 'ZŁĄCZE';
    } else if (lower.includes('dcf') || lower.includes('szpula')) {
      type = 'dcf';
      badge = 'DCF';
    } else if (lower.includes('smf') || lower.includes('światłowód') || lower.includes('falowód')) {
      type = 'fiber';
      badge = 'SMF';
    }

    let title = text;
    const metrics: string[] = [];

    const parenMatch = text.match(/^(.*?)\s*\((.*?)\)$/);
    if (parenMatch) {
      title = parenMatch[1].trim();
      metrics.push(parenMatch[2].trim());
    } else if (text.includes(':')) {
      const colonParts = text.split(':');
      title = colonParts[0].trim();
      const rest = colonParts.slice(1).join(':').trim();
      rest.split(',').forEach(p => {
        if (p.trim()) metrics.push(p.trim());
      });
    }

    return {
      id: `node-${idx}`,
      title,
      type,
      badge,
      metrics,
    };
  });
}

export default function VisualPipelineDiagram({ raw, title }: VisualPipelineDiagramProps) {
  const nodes = parsePipelineString(raw);
  const [activeNode, setActiveNode] = useState<number | null>(null);

  if (nodes.length === 0) {
    return (
      <div className="font-mono text-[12px] bg-ink px-2.5 py-1 rounded text-amber-soft border border-line">
        {raw}
      </div>
    );
  }

  const getTypeStyle = (type: PipelineNode['type'], isSelected: boolean) => {
    switch (type) {
      case 'tx':
        return {
          cardBg: 'bg-emerald-500/10 hover:bg-emerald-500/15',
          border: isSelected ? 'border-emerald-400 ring-2 ring-emerald-500/30' : 'border-emerald-500/40',
          badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          iconColor: 'text-emerald-400',
        };
      case 'rx':
        return {
          cardBg: 'bg-amber-500/10 hover:bg-amber-500/15',
          border: isSelected ? 'border-amber-400 ring-2 ring-amber-500/30' : 'border-amber-500/40',
          badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          iconColor: 'text-amber-400',
        };
      case 'connector':
        return {
          cardBg: 'bg-rose-500/10 hover:bg-rose-500/15',
          border: isSelected ? 'border-rose-400 ring-2 ring-rose-500/30' : 'border-rose-500/40',
          badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          iconColor: 'text-rose-400',
        };
      case 'fiber':
        return {
          cardBg: 'bg-sky-500/10 hover:bg-sky-500/15',
          border: isSelected ? 'border-sky-400 ring-2 ring-sky-500/30' : 'border-sky-500/40',
          badgeBg: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          iconColor: 'text-sky-400',
        };
      case 'dcf':
        return {
          cardBg: 'bg-purple-500/10 hover:bg-purple-500/15',
          border: isSelected ? 'border-purple-400 ring-2 ring-purple-500/30' : 'border-purple-500/40',
          badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
          iconColor: 'text-purple-400',
        };
      default:
        return {
          cardBg: 'bg-panel hover:bg-panel/80',
          border: isSelected ? 'border-amber' : 'border-line',
          badgeBg: 'bg-ink2 text-muted border-line',
          iconColor: 'text-muted',
        };
    }
  };

  return (
    <div className="my-3 rounded-xl border border-line/70 bg-[#0d131f] p-2.5 sm:p-3 shadow-md">
      {/* Optional Title Header (rendered only if explicitly provided and not empty) */}
      {title && (
        <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-line/50">
          <span className="flex h-2 w-2 rounded-full bg-amber shadow-[0_0_6px_#f4a52a]" />
          <h5 className="font-mono text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider text-amber">
            {title}
          </h5>
        </div>
      )}

      {/* Nodes Stream: fits on ONE single row without horizontal scrolling */}
      <div className="w-full">
        <div className="flex flex-wrap sm:flex-nowrap items-stretch gap-1 sm:gap-1.5 w-full">
          {nodes.map((node, idx) => {
            const isSelected = activeNode === idx;
            const style = getTypeStyle(node.type, isSelected);

            return (
              <React.Fragment key={node.id}>
                {/* Node Card */}
                <div
                  onClick={() => setActiveNode(isSelected ? null : idx)}
                  className={`group relative flex-1 min-w-22.5 flex flex-col justify-between rounded-lg border p-2 transition-all duration-200 cursor-pointer select-none ${style.cardBg} ${style.border} hover:scale-[1.02]`}
                  title={`${node.title} ${node.metrics.length ? '(' + node.metrics.join(', ') + ')' : ''} - kliknij po szczegóły`}
                >
                  {/* Top Badge & Tiny Icon */}
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span
                      className={`text-[8.5px] sm:text-[9.5px] font-mono font-bold tracking-tight px-1.5 py-0.5 rounded border ${style.badgeBg}`}
                    >
                      {node.badge}
                    </span>
                    {node.type === 'tx' && (
                      <svg className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${style.iconColor}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <line x1="12" y1="2" x2="12" y2="6" />
                        <line x1="12" y1="18" x2="12" y2="22" />
                        <line x1="2" y1="12" x2="6" y2="12" />
                        <line x1="18" y1="12" x2="22" y2="12" />
                      </svg>
                    )}
                    {node.type === 'connector' && (
                      <svg className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${style.iconColor}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20M17 5H7M17 19H7" />
                      </svg>
                    )}
                    {node.type === 'fiber' && (
                      <svg className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${style.iconColor}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 12h16M16 6l4 6-4 6" />
                      </svg>
                    )}
                    {node.type === 'dcf' && (
                      <svg className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${style.iconColor}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="7" r="6" />
                        <circle cx="12" cy="17" r="4" />
                      </svg>
                    )}
                    {node.type === 'rx' && (
                      <svg className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${style.iconColor}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    )}
                  </div>

                  {/* Main Title (Clean & Compact) */}
                  <div className="text-[11px] sm:text-[11.5px] font-semibold text-txt leading-tight mb-1 font-sans wrap-break-word">
                    {node.title}
                  </div>

                  {/* Metrics Pills */}
                  {node.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-auto pt-1 border-t border-line/30">
                      {node.metrics.map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="font-mono text-[9.5px] sm:text-[10px] px-1.5 py-0.5 rounded bg-ink/80 text-amber-soft border border-line/40 font-medium leading-none"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Compact Arrow Between Nodes */}
                {idx < nodes.length - 1 && (
                  <div className="flex items-center justify-center shrink-0 text-amber/60 px-0.5 select-none self-center">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber/80" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Expanded node details if clicked */}
      {activeNode !== null && nodes[activeNode] && (
        <div className="mt-2.5 p-2 px-3 rounded-lg border border-line/60 bg-ink/90 flex items-center justify-between text-[11.5px] text-muted">
          <div>
            <span className="font-bold text-txt font-sans mr-2">
              {nodes[activeNode].title}
            </span>
            {nodes[activeNode].metrics.length > 0 && (
              <span className="font-mono text-amber">
                [{nodes[activeNode].metrics.join(' · ')}]
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => setActiveNode(null)}
            className="text-muted hover:text-txt text-[11px] cursor-pointer ml-3"
          >
            ✕ Zamknij
          </button>
        </div>
      )}
    </div>
  );
}

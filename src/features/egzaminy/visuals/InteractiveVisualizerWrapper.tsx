import React, { useState } from 'react';

interface InteractiveVisualizerWrapperProps {
  title: string;
  subtitle?: string;
  badge?: string;
  icon?: 'chart' | 'circuit' | 'eye' | 'pipeline' | 'wave';
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function InteractiveVisualizerWrapper({
  title,
  subtitle,
  badge = 'INTERAKTYWNA WIZUALIZACJA',
  icon = 'chart',
  defaultOpen = false,
  children,
}: InteractiveVisualizerWrapperProps) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  const getIcon = () => {
    switch (icon) {
      case 'circuit':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-amber">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      case 'eye':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-cyan-400">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        );
      case 'pipeline':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-emerald-400">
            <rect x="3" y="3" width="6" height="6" rx="1"></rect>
            <rect x="15" y="15" width="6" height="6" rx="1"></rect>
            <path d="M9 6h6a3 3 0 0 1 3 3v6"></path>
          </svg>
        );
      case 'wave':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-purple-400">
            <path d="M2 12s3-7 7-7 5 14 8 14 5-7 5-7"></path>
          </svg>
        );
      case 'chart':
      default:
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-amber">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        );
    }
  };

  return (
    <div className="my-5 rounded-2xl border border-line/80 bg-linear-to-b from-panel via-ink2/90 to-panel/80 overflow-hidden shadow-lg transition-all">
      {/* Toggle Banner / Header */}
      <div
        onClick={() => setIsOpen(prev => !prev)}
        className={`px-4 sm:px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 cursor-pointer select-none transition-all ${
          isOpen
            ? 'border-b border-line/60 bg-ink2/50'
            : 'hover:bg-amber/5 hover:border-amber/40'
        }`}
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(prev => !prev);
          }
        }}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 rounded-xl bg-ink border border-line/70 flex items-center justify-center shrink-0">
            {getIcon()}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-[10.5px] tracking-wider uppercase px-2 py-0.5 rounded-md font-bold bg-amber/15 text-amber border border-amber/30">
                {badge}
              </span>
              <span className={`font-mono text-[11px] px-2 py-0.5 rounded-md border ${
                isOpen ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' : 'bg-muted/10 text-muted border-line/50'
              }`}>
                {isOpen ? 'Włączony' : 'Domyślnie wyłączony'}
              </span>
            </div>
            <h4 className="font-semibold text-[14.5px] text-txt mt-0.5 truncate">
              {title}
            </h4>
            {subtitle && (
              <p className="text-[12px] text-muted truncate mt-0.5 hidden sm:block">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Action Toggle Button */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={e => {
              e.stopPropagation();
              setIsOpen(prev => !prev);
            }}
            className={`font-mono text-[12px] px-3.5 py-1.5 rounded-xl border font-bold flex items-center gap-2 transition-all cursor-pointer ${
              isOpen
                ? 'bg-ink border-line text-muted hover:text-txt hover:border-amber/50'
                : 'bg-amber text-ink border-amber shadow-[0_2px_10px_rgba(244,165,42,0.25)] hover:brightness-110'
            }`}
          >
            {isOpen ? (
              <>
                <span>Zwiń / Wyłącz</span>
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none">
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </>
            ) : (
              <>
                <span>Pokaż element (kliknij)</span>
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <div className="p-3 sm:p-5 animate-fadeIn">
          {children}

          {/* Bottom quick-close bar */}
          <div className="mt-3 pt-3 border-t border-line/40 flex justify-end">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="font-mono text-[11.5px] px-3 py-1 rounded-lg border border-line text-muted hover:text-txt hover:border-amber/50 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Zwiń wizualizację</span>
              <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

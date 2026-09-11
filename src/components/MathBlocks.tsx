import React, { useState } from 'react';
import { typesetMathJax } from '@/utils/mathjax';

interface FormulaProps {
  tex: string;
  tag?: string;
}

export function Formula({ tex, tag }: FormulaProps) {
  return (
    <div className="block bg-ink2 border border-line border-l-[3px] border-l-amber rounded-md px-3 py-2 my-2 text-[15.5px] overflow-x-auto font-sans relative">
      {tag && <span className="tag absolute top-2 right-3 text-xs text-muted font-mono">{tag}</span>}
      {`\\[${tex}\\]`}
    </div>
  );
}

interface ExplanationProps {
  children: React.ReactNode;
}

export function Explanation({ children }: ExplanationProps) {
  return (
    <div className="block bg-ink2 border border-line border-l-2 border-l-blue rounded-md px-3 py-2 my-2 text-[15.5px] text-muted-more font-sans">
      {children}
    </div>
  );
}

interface SymbolProps {
  symbol: string;
  desc: React.ReactNode;
}

export function Symbol({ symbol, desc }: SymbolProps) {
  return (
    <div className="flex gap-2 items-baseline ml-3 my-0.5 text-[15px] border-l-2 border-l-green pl-2 font-sans">
      <span className="font-semibold text-green whitespace-nowrap">{`\\(${symbol}\\)`}</span>
      <span className="text-muted-more">— {desc}</span>
    </div>
  );
}

interface ConceptProps {
  title?: React.ReactNode;
  children: React.ReactNode;
}

export function Concept({ title, children }: ConceptProps) {
  return (
    <div className="block bg-ink2/50 border border-line/60 border-l-4 border-l-violet rounded-xl p-3 my-3 shadow-inner">
      {title && (
        <div className="font-mono text-[12.5px] font-bold text-violet tracking-wider uppercase mb-2 px-0.5">
          {title}
        </div>
      )}
      <div className="flex flex-col gap-1">
        {children}
      </div>
    </div>
  );
}

interface ConclusionProps {
  title?: string;
  children: React.ReactNode;
}

export function Conclusion({ title = "Wnioski", children }: ConclusionProps) {
  return (
 <div className="rounded-[10px] px-4 py-[14px] my-[14px] border bg-green-dim/10 border-green-dim">
      <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">{title}</span>
      <div className="text-[15px]">{children}</div>
    </div>
  );
}

interface BookAdditionProps {
  title: string;
  children: React.ReactNode;
}

export function BookAddition({ title, children }: BookAdditionProps) {
  return (
 <div className="rounded-[10px] px-4 py-[14px] my-[14px] border bg-blue/10 border-[#34465f]">
      <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">{title}</span>
      <div className="text-[15px]">{children}</div>
    </div>
  );
}

interface TipProps {
  title?: React.ReactNode;
  badge?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export function Tip({
  title = "Wskazówka egzaminacyjna",
  badge,
  defaultOpen = false,
  children,
}: TipProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    const next = !isOpen;
    setIsOpen(next);
    if (next) {
      setTimeout(() => {
        typesetMathJax();
      }, 50);
    }
  };

  return (
    <div className="rounded-[10px] my-2 border border-amber/30 bg-amber/10 overflow-hidden transition-all">
      <button
        type="button"
        onClick={handleToggle}
        className="w-full px-3.5 py-2.5 flex items-center justify-between gap-3 text-left hover:bg-amber/15 transition-colors cursor-pointer select-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-amber text-xs shrink-0">💡</span>
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-amber font-semibold truncate">
            {title}
          </span>
          {badge && (
            <span className="font-mono text-[9.5px] uppercase px-1.5 py-0.5 rounded bg-amber/20 text-amber-soft border border-amber/30 shrink-0">
              {badge}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <span className="font-mono text-[11px] text-amber-soft hover:text-amber font-medium">
            {isOpen ? 'Ukryj wskazówkę' : 'Pokaż wskazówkę'}
          </span>
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            className={`text-amber transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="px-4 pb-3.5 pt-1 text-[14.5px] text-txt/90 leading-relaxed border-t border-amber/20 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}


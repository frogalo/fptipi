import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  subtitle: string;
  title: string;
  description: string;
}

export function PageHeader({ subtitle, title, description }: PageHeaderProps) {
  return (
    <header className="mb-6 border border-line bg-linear-to-br from-panel to-ink2 rounded-[14px] px-6 py-[22px]">
      <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-amber">
        {subtitle}
      </div>
      <h1 className="text-[27px] font-semibold mt-1.5 mb-1">{title}</h1>
      <div className="text-muted text-[14.5px]">{description}</div>
    </header>
  );
}

interface ExamBadgeInfo {
  label: string;
  route: string;
}

interface QuestionSectionProps {
  id: string;
  number: string | number;
  title: string;
  source?: string;
  isTier1?: boolean;
  examBadge?: ExamBadgeInfo;
  children: React.ReactNode;
}

export function QuestionSection({
  id,
  number,
  title,
  source,
  isTier1 = false,
  examBadge,
  children,
}: QuestionSectionProps) {
  return (
    <div className="relative mb-[26px]" id={id}>
      {examBadge && (
        <Link
          to={examBadge.route}
          className="absolute -top-3 right-4 z-10 font-mono text-[10.5px] text-amber bg-ink border border-amber/30 px-2.5 py-[3px] rounded-full whitespace-nowrap no-underline hover:bg-amber/15 hover:border-amber transition-all flex items-center gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
          title={`Pytanie było na egzaminie — kliknij aby przejść`}
        >
          <span>☀️</span>
          <span>{examBadge.label}</span>
          <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2.5" fill="none" className="opacity-60">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Link>
      )}
      <section className="border border-line bg-panel rounded-[14px] px-[26px] py-6">
        <div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
          <span
            className={`font-mono font-bold text-ink rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap ${
              isTier1 ? 'bg-green' : 'bg-amber'
            }`}
          >
            {number}
          </span>
          <h2 className="text-[20.5px] font-semibold leading-tight">{title}</h2>
          {source && (
            <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap">
              {source}
            </span>
          )}
        </div>
        {children}
      </section>
    </div>
  );
}

interface TaskSectionProps {
  id: string;
  number: string;
  title: string;
  badge?: string;
  children: React.ReactNode;
}

export function TaskSection({
  id,
  number,
  title,
  badge,
  children,
}: TaskSectionProps) {
  return (
    <section className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-[26px]" id={id}>
      <div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
        <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">
          {number}
        </span>
        <h2 className="text-[20.5px] font-semibold leading-tight">{title}</h2>
        {badge && (
          <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap">
            <span className="t1 font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[12px] whitespace-nowrap">
              {badge}
            </span>
          </span>
        )}
      </div>
      {children}
    </section>
  );
}

interface BlockFormulaProps {
  tex: string;
  tag?: string;
  color?: string;
}

export function BlockFormula({ tex, tag, color = 'amber' }: BlockFormulaProps) {
  const borderColorClass = color === 'blue' ? 'border-l-blue' : 'border-l-amber';
  return (
    <div className={`bg-ink2 border border-line border-l-[3px] ${borderColorClass} rounded-lg px-4 py-2.5 my-3 overflow-x-auto`}>
      {tag && <span className="tag">{tag}</span>}
      {`\\[${tex}\\]`}
    </div>
  );
}

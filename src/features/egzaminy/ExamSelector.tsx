import React from 'react';

interface Term {
  id: string;
  name: string;
}

interface ExamSelectorProps {
  years: number[];
  terms: Term[];
  groups: string[];
  selectedYear: number;
  selectedTerm: string;
  selectedGroup: string;
  isYearAvailable: (year: number) => boolean;
  isTermAvailable: (year: number, termId: string) => boolean;
  isGroupAvailable: (year: number, termId: string, group: string) => boolean;
  onSelect: (year: number, term: string, group: string) => void;
}

export default function ExamSelector({
  years,
  terms,
  groups,
  selectedYear,
  selectedTerm,
  selectedGroup,
  isYearAvailable,
  isTermAvailable,
  isGroupAvailable,
  onSelect,
}: ExamSelectorProps) {
  const activeBtn =
    'bg-amber border-amber text-ink font-bold shadow-[0_2px_8px_rgba(244,165,42,0.3)]';
  const inactiveBtn =
    'border-line text-txt hover:border-amber hover:text-white bg-ink2/30';

  return (
    <div className="border border-line bg-panel rounded-[14px] p-5 mb-6 flex flex-col gap-5">
      {/* Year Selector */}
      <div>
        <span className="block font-mono text-[10.5px] uppercase tracking-wider text-muted mb-2">
          Rok akademicki
        </span>
        <div className="flex flex-wrap gap-2.5">
          {years.map((y) => {
            const available = isYearAvailable(y);
            return (
              <button
                key={y}
                onClick={() => onSelect(y, selectedTerm, selectedGroup)}
                className={`font-mono text-[12.5px] px-4 py-2 rounded-lg border cursor-pointer transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  selectedYear === y ? activeBtn : inactiveBtn
                }`}
              >
                <span className={available ? 'text-green' : 'text-muted'}>●</span>
                {y}
              </button>
            );
          })}
        </div>
      </div>

      {/* Term Selector */}
      <div>
        <span className="block font-mono text-[10.5px] uppercase tracking-wider text-muted mb-2">
          Termin / Sesja
        </span>
        <div className="flex flex-wrap gap-2">
          {terms.map((t) => {
            const available = isTermAvailable(selectedYear, t.id);
            return (
              <button
                key={t.id}
                onClick={() => onSelect(selectedYear, t.id, selectedGroup)}
                className={`font-mono text-[12.5px] px-4 py-2 rounded-lg border cursor-pointer transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
                  selectedTerm === t.id ? activeBtn : inactiveBtn
                }`}
              >
                <span className={available ? 'text-green' : 'text-muted'}>●</span>
                {t.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Group Selector */}
      <div>
        <span className="block font-mono text-[10.5px] uppercase tracking-wider text-muted mb-2">
          Grupa
        </span>
        <div className="flex flex-wrap gap-2">
          {groups.map((g) => {
            const available = isGroupAvailable(selectedYear, selectedTerm, g);
            return (
              <button
                key={g}
                onClick={() => onSelect(selectedYear, selectedTerm, g)}
                className={`font-mono text-[12.5px] px-4 py-2 rounded-lg border cursor-pointer transition-all flex-1 md:flex-initial text-center flex items-center justify-center gap-1.5 whitespace-nowrap ${
                  selectedGroup === g ? activeBtn : inactiveBtn
                }`}
              >
                <span className={available ? 'text-green' : 'text-muted'}>●</span>
                Grupa {g}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}


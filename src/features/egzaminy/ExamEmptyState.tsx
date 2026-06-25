import React from 'react';

interface ExamEmptyStateProps {
  selectedYear: number;
  selectedTerm: string;
  selectedGroup: string;
  termNameMap: Record<string, string>;
  onShowDefault: () => void;
}

export default function ExamEmptyState({
  selectedYear,
  selectedTerm,
  selectedGroup,
  termNameMap,
  onShowDefault,
}: ExamEmptyStateProps) {
  return (
    <div className="border border-line border-dashed rounded-[14px] p-10 text-center text-muted bg-panel/30 my-6">
      <svg
        viewBox="0 0 24 24"
        width="40"
        height="40"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="mx-auto mb-3.5 text-line"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <h3 className="text-white font-semibold text-lg mb-1">
        Brak danych dla wybranego terminu
      </h3>
      <p className="text-[14.5px] max-w-[420px] mx-auto text-muted-more">
        Brak arkusza i rozwiązań w bazie dla roku <strong>{selectedYear}</strong>, sesji{' '}
        <strong>{termNameMap[selectedTerm] || 'Nieznanej'}</strong>,{' '}
        <strong>Grupy {selectedGroup}</strong>.
      </p>
      <div className="mt-5 flex justify-center gap-3">
        <button
          onClick={onShowDefault}
          className="font-mono text-[11.5px] bg-amber text-ink px-4 py-2 rounded-lg font-semibold hover:bg-amber-soft transition-colors cursor-pointer border-none"
        >
          Pokaż egzamin z 2026 (Lato 1, Grupa B)
        </button>
      </div>
    </div>
  );
}


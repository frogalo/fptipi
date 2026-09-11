import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface TheoryChapterItem {
  id: string;
  route: string;
  partNum: string;
  badge: string;
  shortTitle: string;
  title: string;
  range: string;
  connectedTask?: {
    route: string;
    label: string;
  };
  connectedViz?: {
    route: string;
    label: string;
  };
}

export const THEORY_CHAPTERS: TheoryChapterItem[] = [
  {
    id: 'fala-propagacja',
    route: '/teoria/fala-propagacja',
    partNum: 'Część 1',
    badge: 'cz. 1',
    shortTitle: 'Fala i propagacja',
    title: 'Fala elektromagnetyczna i propagacja w przestrzeni',
    range: 'pytania 1–6',
    connectedTask: {
      route: '/zadania/1',
      label: 'Zadania: Rozdział 3 (zad. 3.5.1–3.5.4)',
    },
    connectedViz: {
      route: '/wizualizacje/fale_em',
      label: 'Symulacja: Fale EM i horyzont radiowy',
    },
  },
  {
    id: 'swiatlowody',
    route: '/teoria/swiatlowody',
    partNum: 'Część 2',
    badge: 'cz. 2',
    shortTitle: 'Światłowody',
    title: 'Transmisja światłowodowa i warunki brzegowe',
    range: 'pytania 7–12',
    connectedTask: {
      route: '/zadania/2',
      label: 'Zadania: Rozdział 4 (zad. 4.6.1–4.6.6)',
    },
    connectedViz: {
      route: '/wizualizacje/technika_swiatlowodowa',
      label: 'Symulacja: Dyspersja modowa we włóknach',
    },
  },
  {
    id: 'modulacja',
    route: '/teoria/modulacja',
    partNum: 'Część 3',
    badge: 'cz. 3',
    shortTitle: 'Modulacja i multipleksacja',
    title: 'Modulacja sygnałów i multipleksacja',
    range: 'pytania 13–15',
    connectedTask: {
      route: '/zadania/3',
      label: 'Zadania: Rozdział 5 (zad. 5.5.1–5.5.5)',
    },
  },
  {
    id: 'polprzewodniki',
    route: '/teoria/polprzewodniki',
    partNum: 'Część 4',
    badge: 'cz. 4',
    shortTitle: 'Półprzewodniki i złącze p-n',
    title: 'Fizyka półprzewodników i złącze p–n',
    range: 'pytania 16–20',
    connectedViz: {
      route: '/wizualizacje/elementy_polprzewodnikowe',
      label: 'Symulacja: Pasma złącza p-n i MOSFET',
    },
  },
  {
    id: 'pamieci-nosniki',
    route: '/teoria/pamieci-nosniki',
    partNum: 'Część 5',
    badge: 'cz. 5',
    shortTitle: 'Pamięci i nośniki',
    title: 'Pamięci półprzewodnikowe i nośniki danych',
    range: 'pytania 21–28',
    connectedViz: {
      route: '/wizualizacje/nosniki_danych',
      label: 'Symulacja: Pamięci HDD i optyczne CD-RW',
    },
  },
  {
    id: 'sciaga',
    route: '/teoria/sciaga',
    partNum: 'Podsumowanie',
    badge: 'ściąga',
    shortTitle: 'Ściąga egzaminacyjna',
    title: 'Ściąga egzaminacyjna · 28 pytań w pigułce',
    range: 'wzory i keypointy',
  },
];

interface TheoryNavigationProps {
  currentRoute?: string;
}

export default function TheoryNavigation({ currentRoute }: TheoryNavigationProps) {
  const location = useLocation();
  const activePath = currentRoute || location.pathname;

  // Find index of current chapter
  const currentIndex = THEORY_CHAPTERS.findIndex(
    (ch) => ch.route === activePath || activePath.startsWith(ch.route)
  );

  const currentChapter = currentIndex !== -1 ? THEORY_CHAPTERS[currentIndex] : null;
  const prevChapter = currentIndex > 0 ? THEORY_CHAPTERS[currentIndex - 1] : null;
  const nextChapter =
    currentIndex !== -1 && currentIndex < THEORY_CHAPTERS.length - 1
      ? THEORY_CHAPTERS[currentIndex + 1]
      : null;

  return (
    <nav
      className="theory-navigation my-12 pt-8 border-t border-line/80 font-sans"
      aria-label="Nawigacja między rozdziałami teorii"
    >
      {/* Nagłówek sekcji nawigacji */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-amber/15 border border-amber/30 text-amber text-xs">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </span>
          <span className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-muted font-medium">
            Nawigacja po teorii
          </span>
          {currentChapter && (
            <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-panel2 border border-line text-amber-soft">
              {currentChapter.partNum === 'Podsumowanie' ? 'Ściąga' : `${currentChapter.partNum} z 5`}
            </span>
          )}
        </div>

        <Link
          to="/#teoria"
          className="inline-flex items-center gap-1.5 text-[12.5px] font-mono text-muted hover:text-amber transition-colors no-underline group self-start sm:self-auto"
        >
          <span>Spis wszystkich 28 pytań</span>
          <span className="text-amber transition-transform group-hover:translate-x-0.5">↗</span>
        </Link>
      </div>

      {/* Pasek szybkiego skoku po wszystkich rozdziałach (Stepper / Pills) */}
      <div className="mb-6 p-2 rounded-xl bg-ink2/80 border border-line/70 backdrop-blur-xs">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1.5">
          {THEORY_CHAPTERS.map((chapter, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <Link
                key={chapter.id}
                to={chapter.route}
                className={`group relative flex flex-col p-2 rounded-lg text-left transition-all no-underline ${
                  isCurrent
                    ? 'bg-amber/15 border border-amber/60 text-txt shadow-[0_0_12px_rgba(244,165,42,0.15)]'
                    : 'bg-panel/60 border border-transparent hover:border-line hover:bg-panel text-muted hover:text-txt'
                }`}
                title={`${chapter.partNum}: ${chapter.title} (${chapter.range})`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      isCurrent
                        ? 'bg-amber text-ink font-semibold'
                        : 'bg-line/60 text-muted group-hover:text-txt group-hover:bg-line'
                    }`}
                  >
                    {chapter.id === 'sciaga' ? '★ Ściąga' : `cz. ${idx + 1}`}
                  </span>
                  {isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse"></span>
                  )}
                </div>
                <span className={`text-[12px] font-medium truncate leading-snug ${isCurrent ? 'text-amber-soft font-semibold' : ''}`}>
                  {chapter.shortTitle}
                </span>
                <span className="font-mono text-[10px] text-muted/80 mt-0.5 truncate">
                  {chapter.range}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Główne kafelki nawigacji: Poprzedni / Następny rozdział */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Lewy kafelek: Poprzedni rozdział LUB powrót do spisu treści */}
        {prevChapter ? (
          <Link
            to={prevChapter.route}
            className="group relative flex items-stretch p-4 rounded-xl border border-line bg-panel hover:bg-panel2 hover:border-amber/60 transition-all no-underline text-txt shadow-sm hover:shadow-md"
          >
            <div className="flex items-center justify-center pr-3.5 text-muted group-hover:text-amber transition-colors">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                className="transition-transform group-hover:-translate-x-1"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-muted group-hover:text-amber transition-colors">
                  Poprzedni rozdział
                </span>
                <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-ink border border-line text-muted">
                  {prevChapter.range}
                </span>
              </div>
              <div className="text-[14.5px] font-semibold leading-snug text-txt group-hover:text-amber-soft transition-colors truncate">
                {prevChapter.partNum}: {prevChapter.shortTitle}
              </div>
              <div className="text-[12px] text-muted truncate mt-0.5">
                {prevChapter.title}
              </div>
            </div>
          </Link>
        ) : (
          <Link
            to="/#teoria"
            className="group relative flex items-stretch p-4 rounded-xl border border-line/70 bg-panel/70 hover:bg-panel hover:border-line transition-all no-underline text-txt"
          >
            <div className="flex items-center justify-center pr-3.5 text-muted group-hover:text-amber transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.2" fill="none">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-mono text-[10.5px] uppercase tracking-wider text-muted mb-1">
                Początek teorii
              </div>
              <div className="text-[14.5px] font-medium leading-snug text-txt group-hover:text-amber transition-colors">
                Strona główna · Spis pytań
              </div>
              <div className="text-[12px] text-muted truncate mt-0.5">
                Wróć do pełnego katalogu materiałów
              </div>
            </div>
          </Link>
        )}

        {/* Prawy kafelek: Kolejny rozdział LUB przejście do bazy egzaminów / podsumowania */}
        {nextChapter ? (
          <Link
            to={nextChapter.route}
            className="group relative flex items-stretch p-4 rounded-xl border border-amber/40 bg-linear-to-br from-panel via-panel to-amber/5 hover:border-amber hover:bg-panel2 transition-all no-underline text-txt shadow-[0_2px_12px_rgba(244,165,42,0.06)] hover:shadow-[0_4px_16px_rgba(244,165,42,0.14)] text-right"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-end gap-2 mb-1">
                <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-ink border border-line text-amber-soft">
                  {nextChapter.range}
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-amber font-semibold">
                  Kolejny rozdział
                </span>
              </div>
              <div className="text-[14.5px] font-semibold leading-snug text-txt group-hover:text-amber transition-colors truncate">
                {nextChapter.partNum}: {nextChapter.shortTitle}
              </div>
              <div className="text-[12px] text-muted truncate mt-0.5">
                {nextChapter.title}
              </div>
            </div>
            <div className="flex items-center justify-center pl-3.5 text-amber">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </Link>
        ) : (
          <Link
            to="/egzaminy"
            className="group relative flex items-stretch p-4 rounded-xl border border-green/40 bg-linear-to-br from-panel via-panel to-green/5 hover:border-green hover:bg-panel2 transition-all no-underline text-txt text-right shadow-[0_2px_12px_rgba(91,227,154,0.06)]"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-end gap-2 mb-1">
                <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-ink border border-green/30 text-green">
                  2017–2026
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-green font-semibold">
                  Sprawdź wiedzę
                </span>
              </div>
              <div className="text-[14.5px] font-semibold leading-snug text-txt group-hover:text-green transition-colors truncate">
                Baza egzaminów
              </div>
              <div className="text-[12px] text-muted truncate mt-0.5">
                Prawdziwe arkusze z rozwiązaniami krok po kroku
              </div>
            </div>
            <div className="flex items-center justify-center pl-3.5 text-green">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </Link>
        )}
      </div>

      {/* Połączone materiały praktyczne (Zadania / Wizualizacje) */}
      {currentChapter && (currentChapter.connectedTask || currentChapter.connectedViz) && (
        <div className="mt-4 pt-3.5 border-t border-line/40 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
          <span className="text-muted flex items-center gap-1.5">
            <span className="text-amber">✦</span> Połączone z tym działem:
          </span>
          {currentChapter.connectedTask && (
            <Link
              to={currentChapter.connectedTask.route}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-panel border border-line text-txt hover:border-amber hover:text-amber transition-colors no-underline"
            >
              <span>✏️</span>
              <span>{currentChapter.connectedTask.label}</span>
              <span className="text-amber">↗</span>
            </Link>
          )}
          {currentChapter.connectedViz && (
            <Link
              to={currentChapter.connectedViz.route}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-panel border border-line text-txt hover:border-blue hover:text-blue transition-colors no-underline"
            >
              <span>⚡</span>
              <span>{currentChapter.connectedViz.label}</span>
              <span className="text-blue">↗</span>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

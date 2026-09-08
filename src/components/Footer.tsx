import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  children?: React.ReactNode;
}

export default function Footer({ children }: FooterProps) {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full mt-20 pt-10 pb-16 border-t border-line text-txt font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Górny pasek kontekstowy strony (jeśli podano children) */}
        {children && (
          <div className="mb-6 pb-6 border-b border-line/60 flex items-center gap-2.5 text-xs sm:text-[13px] font-mono text-muted">
            <span className="w-2 h-2 rounded-full bg-amber shrink-0 animate-pulse"></span>
            <div className="text-txt font-medium">{children}</div>
          </div>
        )}

        {/* Sekcja nawigacyjna stopki */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-line/50">
          <div>
            <div className="font-mono text-xs tracking-[0.16em] uppercase text-amber font-semibold mb-1">
              FPTiTI · Portal Edukacyjny
            </div>
            <div className="text-sm text-muted">
              Fizyczne Podstawy Technologii i Teleinformatyki
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-[13px] font-mono">
            <Link
              to="/"
              className="text-muted hover:text-amber transition-colors no-underline"
            >
              Strona główna
            </Link>
            <span className="text-line opacity-50">·</span>
            <Link
              to="/egzaminy"
              className="text-muted hover:text-amber transition-colors no-underline"
            >
              Archiwum egzaminów
            </Link>
            <span className="text-line opacity-50">·</span>
            <Link
              to="/teoria/sciaga"
              className="text-muted hover:text-amber transition-colors no-underline"
            >
              Ściąga egzaminacyjna
            </Link>
            <span className="text-line opacity-50">·</span>
            <Link
              to="/teoria/fala-propagacja"
              className="text-muted hover:text-amber transition-colors no-underline"
            >
              Teoria (28 pytań)
            </Link>
            <span className="text-line opacity-50">·</span>
            <Link
              to="/zadania/1"
              className="text-muted hover:text-amber transition-colors no-underline"
            >
              Zadania
            </Link>
            <span className="text-line opacity-50">·</span>
            <Link
              to="/wizualizacje/fale_em"
              className="text-muted hover:text-amber transition-colors no-underline"
            >
              Wizualizacje
            </Link>
          </nav>
        </div>

        {/* Dolny pasek: Informacja o podręczniku, jeden przycisk powrotu na górę i link do GitHuba */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted text-center sm:text-left">
          <div>
            Opracowanie według podręcznika dr hab. inż. Anny Szymańskiej (luty 2026).
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5">
            <button
              onClick={scrollToTop}
              className="text-amber hover:text-amber-soft hover:underline transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>↑</span>
              <span>Powrót na początek</span>
            </button>
            <span className="text-line opacity-50 hidden sm:inline">·</span>
            <div className="opacity-90">
              Znalazłeś błąd?{' '}
              <a
                href="https://github.com/frogalo/fptipi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber hover:underline hover:text-amber-soft transition-colors font-semibold"
              >
                Utwórz Pull Request
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

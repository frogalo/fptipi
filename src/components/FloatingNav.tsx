import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchOverlay from './SearchOverlay';
import { usePageSections, useActiveSection } from '@/hooks/usePageSections';

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

import { useTheme } from '@/context/ThemeContext';

export default function FloatingNav() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const sections = usePageSections();
  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);
  const activeSectionId = useActiveSection(sectionIds);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <div ref={navRef} className="floating-nav">
        <div className="floating-nav-controls flex gap-2.5">
          <Link
            to="/"
            className="floating-nav-toggle flex items-center justify-center"
            aria-label="Spis treści"
            title="Spis treści"
          >
            <HomeIcon />
          </Link>

          <button
            className="floating-nav-toggle flex items-center justify-center"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Szukaj"
            title="Wyszukiwarka"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <button
            className="floating-nav-toggle flex items-center justify-center"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Włącz tryb ciemny' : 'Włącz tryb jasny'}
            title={theme === 'light' ? 'Przełącz na tryb ciemny' : 'Przełącz na tryb jasny'}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>

          <button
            className={`floating-nav-toggle ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            title="Skróty nawigacji"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {sections.length > 0 && (
          <nav className="floating-nav-sections" aria-label="Sekcje na tej stronie">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`floating-nav-section-link${activeSectionId === section.id ? ' active' : ''}`}
                title={section.fullLabel}
              >
                {section.label}
              </a>
            ))}
          </nav>
        )}

        <div className={`floating-nav-menu ${isOpen ? 'open' : ''}`}>
          <Link to="/nauka" className="floating-nav-link text-amber font-semibold" onClick={() => setIsOpen(false)}>
            <span className="font-mono text-[10px] bg-amber text-ink font-bold px-1 rounded mr-1">QUIZ</span>
            Fiszki & Test ABCD
          </Link>

          <Link to="/teoria/sciaga" className="floating-nav-link" onClick={() => setIsOpen(false)}>
            <span className="font-mono text-[10px] bg-amber/20 text-amber border border-amber/30 px-1 rounded mr-1">TEZY</span>
            Opracowanie tez (Ściąga)
          </Link>

          <Link to="/egzaminy" className="floating-nav-link" onClick={() => setIsOpen(false)}>
            <span className="font-mono text-[10px] bg-amber/20 text-amber border border-amber/30 px-1 rounded mr-1">ARK</span>
            Baza arkuszy egzaminacyjnych
          </Link>

          <div className="h-px bg-line my-1"></div>

          <Link to="/zadania/1" className="floating-nav-link" onClick={() => setIsOpen(false)}>
            <span className="font-mono text-[10px] bg-ink2 text-muted border border-line px-1 rounded mr-1">R3</span>
            Zadania: Fale i propagacja
          </Link>

          <Link to="/zadania/2" className="floating-nav-link" onClick={() => setIsOpen(false)}>
            <span className="font-mono text-[10px] bg-ink2 text-muted border border-line px-1 rounded mr-1">R4</span>
            Zadania: Falowody optyczne
          </Link>

          <Link to="/zadania/3" className="floating-nav-link" onClick={() => setIsOpen(false)}>
            <span className="font-mono text-[10px] bg-ink2 text-muted border border-line px-1 rounded mr-1">R5</span>
            Zadania: Modulacja i pasmo
          </Link>

          <div className="h-px bg-line my-1"></div>

          <Link to="/wizualizacje/fale_em" className="floating-nav-link" onClick={() => setIsOpen(false)}>
            <span className="font-mono text-[10px] bg-ink2 text-muted border border-line px-1 rounded mr-1">MOD</span>
            Modele i aplety numeryczne
          </Link>

          <div className="h-px bg-line my-1"></div>

          <button
            type="button"
            onClick={() => {
              toggleTheme();
              setIsOpen(false);
            }}
            className="floating-nav-link text-left w-full cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center">
              <span className="font-mono text-[10px] bg-amber/20 text-amber border border-amber/30 px-1 rounded mr-1">MOTYW</span>
              <span>{theme === 'light' ? 'Włącz tryb ciemny' : 'Włącz tryb jasny'}</span>
            </div>
            <span>{theme === 'light' ? '🌙' : '☀️'}</span>
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <SearchOverlay onClose={() => setIsSearchOpen(false)} />
      )}
    </>
  );
}

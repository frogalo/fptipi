import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SearchOverlay from './SearchOverlay';

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div ref={navRef} className="floating-nav">
        <div className="flex gap-2.5">
          {/* Search Toggle Button */}
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

          {/* Menu Toggle Button */}
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
        
        {/* Navigation Dropdown Menu */}
        <div className={`floating-nav-menu ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="floating-nav-link" onClick={() => setIsOpen(false)}>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Spis Treści
          </Link>
          
          <Link to="/teoria/sciaga" className="floating-nav-link" onClick={() => setIsOpen(false)}>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Ściąga Egzaminacyjna
          </Link>

          <Link to="/egzaminy" className="floating-nav-link" onClick={() => setIsOpen(false)}>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Baza Egzaminów
          </Link>

          <div className="h-px bg-line my-1"></div>

          <Link to="/zadania/1" className="floating-nav-link" onClick={() => setIsOpen(false)}>
            <span className="font-mono text-[10px] bg-amber/20 text-amber border border-amber/30 px-1 rounded mr-1">Zad.1</span>
            Zadania: Fale & Propagacja
          </Link>

          <Link to="/zadania/2" className="floating-nav-link" onClick={() => setIsOpen(false)}>
            <span className="font-mono text-[10px] bg-amber/20 text-amber border border-amber/30 px-1 rounded mr-1">Zad.2</span>
            Zadania: Światłowody
          </Link>

          <Link to="/zadania/3" className="floating-nav-link" onClick={() => setIsOpen(false)}>
            <span className="font-mono text-[10px] bg-amber/20 text-amber border border-amber/30 px-1 rounded mr-1">Zad.3</span>
            Zadania: Modulacja
          </Link>

          <div className="h-px bg-line my-1"></div>

          <Link to="/wizualizacje/fale_em" className="floating-nav-link" onClick={() => setIsOpen(false)}>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
              <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
            </svg>
            Wizualizacje Interaktywne
          </Link>
        </div>
      </div>

      {/* Floating Search Overlay Modal */}
      {isSearchOpen && (
        <SearchOverlay onClose={() => setIsSearchOpen(false)} />
      )}
    </>
  );
}


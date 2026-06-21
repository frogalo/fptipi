import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import searchData from '../assets/search-index.json';

interface SearchItem {
  type: string;
  title?: string;
  subtitle?: string;
  description?: string;
  number?: string;
  source?: string;
  content?: string;
  symbol?: string;
  route: string;
  anchor: string;
  pageTitle?: string;
  category?: string;
}

interface SearchOverlayProps {
  onClose: () => void;
}

function escapeRegex(str: string) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export default function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Focus input on open
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const trimmedQuery = query.trim().toLowerCase();
    const searchResults: { item: SearchItem; score: number }[] = [];

    (searchData as SearchItem[]).forEach((item) => {
      let score = 0;
      const type = item.type;

      // Match rules & scoring
      if (type === 'symbol') {
        const symbolText = (item.symbol || '').toLowerCase();
        const descText = (item.description || '').toLowerCase();

        if (symbolText === trimmedQuery) score += 100;
        else if (symbolText.includes(trimmedQuery)) score += 50;
        else if (descText.includes(trimmedQuery)) score += 20;
      } else {
        const titleText = (item.title || '').toLowerCase();
        const numText = (item.number || '').toLowerCase();
        const contentText = (item.content || '').toLowerCase();

        if (titleText.includes(trimmedQuery)) {
          score += 40;
          if (titleText.startsWith(trimmedQuery)) score += 20;
        }
        if (numText === trimmedQuery) {
          score += 50;
        }
        if (contentText.includes(trimmedQuery)) {
          score += 10;
        }
      }

      if (score > 0) {
        searchResults.push({ item, score });
      }
    });

    // Sort by score descending
    searchResults.sort((a, b) => b.score - a.score);

    setResults(searchResults.map((r) => r.item).slice(0, 8)); // Limit to top 8 results
    setSelectedIndex(0);
  }, [query]);

  // Navigate to result
  const handleItemSelect = (item: SearchItem) => {
    onClose();
    const targetPath = item.anchor ? `${item.route}#${item.anchor}` : item.route;
    navigate(targetPath);
    
    // Force scroll if on the same page
    if (window.location.pathname === item.route && item.anchor) {
      const element = document.getElementById(item.anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
      } else if (e.key === 'Enter') {
        if (results.length > 0 && selectedIndex < results.length) {
          handleItemSelect(results[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [results, selectedIndex]);

  // Auto scroll focused item into view
  useEffect(() => {
    if (resultsContainerRef.current) {
      const activeEl = resultsContainerRef.current.querySelector('.search-active-item');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  // Typeset MathJax when results update
  useEffect(() => {
    if (window.MathJax && resultsContainerRef.current) {
      window.MathJax.typesetPromise([resultsContainerRef.current]).catch((err: any) => {
        console.error('MathJax search typeset failed:', err);
      });
    }
  }, [results]);

  // Highlights matched text
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return <span>{text}</span>;
    const parts = text.split(new RegExp(`(${escapeRegex(highlight.trim())})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.trim().toLowerCase() ? (
            <mark key={i} className="search-result-highlight">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  // Extracts snippet containing keyword
  const getSnippet = (content: string, keyword: string) => {
    if (!content) return '';
    const idx = content.toLowerCase().indexOf(keyword.toLowerCase());
    if (idx === -1) {
      return content.slice(0, 100) + (content.length > 100 ? '...' : '');
    }
    const start = Math.max(0, idx - 45);
    const end = Math.min(content.length, idx + keyword.length + 55);
    let snippet = content.slice(start, end);
    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';
    return snippet;
  };

  return (
    <div className="search-overlay-backdrop" onClick={onClose} id="search-overlay">
      <div className="search-container-box" onClick={(e) => e.stopPropagation()}>
        {/* Header Search input */}
        <div className="flex items-center gap-3 px-4.5 py-3.5 border-b border-line bg-ink2/50">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-muted shrink-0">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent border-none text-white text-[16px] placeholder-muted outline-none font-sans"
            placeholder="Szukaj wzorów, haseł, pytań lub symboli..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose} 
            className="text-muted hover:text-white transition-colors cursor-pointer border border-line bg-ink2 hover:bg-line px-2 py-1 rounded text-[11px] font-mono shrink-0"
          >
            ESC
          </button>
        </div>

        {/* Results area */}
        <div 
          ref={resultsContainerRef}
          className="overflow-y-auto flex-1 p-2 flex flex-col gap-1 max-h-[50vh] min-h-[120px] scrollbar-thin scrollbar-thumb-line"
        >
          {query.trim() === '' ? (
            <div className="flex flex-col items-center justify-center py-10 text-center text-muted">
              <svg viewBox="0 0 24 24" width="38" height="38" stroke="currentColor" strokeWidth="1.5" fill="none" className="mb-2 text-line">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <div className="text-[13.5px] font-mono">Wpisz frazę do wyszukania...</div>
              <div className="text-[11px] mt-1 text-muted-more max-w-[280px]">Przeszukiwane są tytuły pytań, wzory, słowniczki, symbole i treści zadań.</div>
            </div>
          ) : results.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center text-muted">
              <svg viewBox="0 0 24 24" width="38" height="38" stroke="currentColor" strokeWidth="1.5" fill="none" className="mb-2 text-red/60">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <div className="text-[13.5px] font-mono text-red/80">Brak wyników</div>
              <div className="text-[11px] mt-1 text-muted-more">Spróbuj wpisać inne hasło lub skrócony symbol.</div>
            </div>
          ) : (
            results.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={index}
                  className={`search-result-item ${isSelected ? 'search-active-item bg-line/60 border-amber/40 scale-[1.005]' : ''}`}
                  onClick={() => handleItemSelect(item)}
                >
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      {/* Badge / Type */}
                      <div className="flex items-center gap-2">
                        {item.type === 'symbol' ? (
                          <span className="search-result-badge bg-green text-ink">Symbol</span>
                        ) : item.type === 'question' ? (
                          <span className="search-result-badge bg-amber text-ink">Pytanie {item.number}</span>
                        ) : item.type === 'book_addition' ? (
                          <span className="search-result-badge bg-blue/30 border border-blue/40 text-blue font-mono">Podręcznik</span>
                        ) : item.type === 'section' ? (
                          <span className="search-result-badge bg-violet/30 border border-violet/40 text-violet font-mono">Zadanie {item.number}</span>
                        ) : (
                          <span className="search-result-badge bg-line text-muted">Strona</span>
                        )}
                        <span className="text-[11px] font-mono text-muted truncate">
                          {item.pageTitle || 'Fizyka'}
                        </span>
                      </div>

                      {/* Title / Symbol */}
                      <div className="search-result-title mt-1">
                        {item.type === 'symbol' ? (
                          <span className="text-green font-bold text-[16px]">{`\\(${item.symbol || ''}\\)`}</span>
                        ) : (
                          highlightText(item.title || '', query)
                        )}
                      </div>

                      {/* Content Snippet / Description */}
                      <div className="search-result-snippet mt-0.5">
                        {item.type === 'symbol'
                          ? highlightText(item.description || '', query)
                          : highlightText(getSnippet(item.content || '', query), query)}
                      </div>
                    </div>

                    {/* Navigation target context arrow */}
                    <div className="text-muted shrink-0 self-center">
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4.5 py-2.5 bg-ink2/30 border-t border-line text-[11px] text-muted flex items-center justify-between font-mono">
          <div className="flex gap-4">
            <span><kbd className="bg-ink2 px-1 rounded border border-line">↑↓</kbd> Nawigacja</span>
            <span><kbd className="bg-ink2 px-1 rounded border border-line">Enter</kbd> Wybór</span>
          </div>
          <div>
            <span>Szukaj na FPTiTI</span>
          </div>
        </div>
      </div>
    </div>
  );
}

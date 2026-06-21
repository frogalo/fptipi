import React, { useState, useRef, useEffect } from 'react';

interface InteractiveModalProps {
  children: React.ReactNode;
  title?: string;
}

export function InteractiveModal({ children, title }: InteractiveModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!isSticky) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isSticky) setIsOpen(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSticky(!isSticky);
    setIsOpen(!isSticky);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Jeśli kliknięcie było poza komponentem, zamknij
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsSticky(false);
        setIsOpen(false);
      }
    };
    if (isSticky) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSticky]);

  return (
    <span 
      className="interactive-modal-container" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      ref={modalRef}
    >
      <button 
        className={`interactive-cube-btn ${isSticky ? 'sticky-active' : ''}`} 
        onClick={handleClick}
        title="Pokaż wizualizację"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      </button>

      <div className={`interactive-modal-popup ${isOpen || isSticky ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
        {title && <div className="modal-title">{title}</div>}
        <div className="modal-content-area">
            {children}
        </div>
        {isSticky && <div className="modal-sticky-indicator">Zablokowano (kliknij poza aby zamknąć)</div>}
      </div>
    </span>
  );
}

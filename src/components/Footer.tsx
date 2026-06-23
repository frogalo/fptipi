import React from 'react';

interface FooterProps {
  children?: React.ReactNode;
}

export default function Footer({ children }: FooterProps) {
  return (
    <footer className="text-center text-muted font-mono text-[11px] mt-9 leading-relaxed">
      {children && <div className="mb-1">{children}</div>}
      <div className="text-[10px] opacity-85">
        Znalazłeś błąd lub chcesz coś ulepszyć?{' '}
        <a
          href="https://github.com/frogalo/fptipi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber hover:underline hover:text-amber-soft transition-colors font-semibold"
        >
          Utwórz Pull Request
        </a>
        !
      </div>
    </footer>
  );
}

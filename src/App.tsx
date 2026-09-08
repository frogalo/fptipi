import React, { useEffect, useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import FloatingNav from '@/components/FloatingNav';
import AppRoutes from '@/router/routes';
import PageLoader from '@/components/PageLoader';
import { ThemeProvider } from '@/context/ThemeContext';

function NavigationManager() {
  const { pathname, search, hash } = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  // Natychmiastowe przechwytywanie kliknięć w linki do innych podstron
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Ignorujemy linki zewnętrzne, nowe karty, mailto
      if (target.target === '_blank' || href.startsWith('http') || href.startsWith('mailto:')) {
        return;
      }

      // Ignorujemy wewnętrzne kotwice na tej samej stronie np. href="#teoria"
      if (href.startsWith('#')) {
        return;
      }

      const targetPath = href.split('#')[0].split('?')[0];
      const currentPath = window.location.pathname;

      // Gdy następuje przejście do innej ścieżki
      if (targetPath !== currentPath || href.includes('?')) {
        // Natychmiast przewijamy na górę
        window.scrollTo(0, 0);
        // Natychmiast pokazujemy loader
        setIsNavigating(true);
      }
    };

    document.addEventListener('click', handleDocumentClick, true);
    return () => document.removeEventListener('click', handleDocumentClick, true);
  }, []);

  // Gdy nowa trasa zostanie zamontowana, ukrywamy loader i obsługujemy kotwicę
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 150);

    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const scrollTimer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
        return () => {
          clearTimeout(timer);
          clearTimeout(scrollTimer);
        };
      }
    } else {
      window.scrollTo(0, 0);
    }

    return () => clearTimeout(timer);
  }, [pathname, search, hash]);

  return isNavigating ? <PageLoader /> : null;
}

export default function App() {
  const basename = import.meta.env.BASE_URL.endsWith('/') && import.meta.env.BASE_URL !== '/'
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;

  return (
    <ThemeProvider>
      <BrowserRouter basename={basename}>
        <NavigationManager />
        <AppRoutes />
        <FloatingNav />
      </BrowserRouter>
    </ThemeProvider>
  );
}

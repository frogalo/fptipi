import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import FloatingNav from '@/components/FloatingNav';
import AppRoutes from '@/router/routes';

function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [hash]);

  return null;
}

export default function App() {
  const basename = import.meta.env.BASE_URL.endsWith('/') && import.meta.env.BASE_URL !== '/'
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <ScrollToHashElement />
      <AppRoutes />
      <FloatingNav />
    </BrowserRouter>
  );
}

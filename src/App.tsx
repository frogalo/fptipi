import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import TeoriaFalaPropagacja from './pages/teoria/TeoriaFalaPropagacja';
import TeoriaModulacja from './pages/teoria/TeoriaModulacja';
import TeoriaPolprzewodniki from './pages/teoria/TeoriaPolprzewodniki';
import TeoriaPamieciNosniki from './pages/teoria/TeoriaPamieciNosniki';
import TeoriaSwiatlowody from './pages/teoria/TeoriaSwiatlowody';
import TeoriaSciaga from './pages/teoria/TeoriaSciaga';
import WizualizacjeElementypolprzewodnikowe from './pages/wizualizacje/WizualizacjeElementypolprzewodnikowe';
import WizualizacjeFaleem from './pages/wizualizacje/WizualizacjeFaleem';
import WizualizacjeNosnikidanych from './pages/wizualizacje/WizualizacjeNosnikidanych';
import WizualizacjeTechnikaswiatlowodowa from './pages/wizualizacje/WizualizacjeTechnikaswiatlowodowa';
import Zadania1 from './pages/zadania/Zadania1';
import Zadania2 from './pages/zadania/Zadania2';
import Zadania3 from './pages/zadania/Zadania3';
import FloatingNav from './components/FloatingNav';
import Home from './pages/Home';
import Egzaminy from './pages/Egzaminy';

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
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/teoria/fala-propagacja" element={<TeoriaFalaPropagacja />} />
        <Route path="/teoria/modulacja" element={<TeoriaModulacja />} />
        <Route path="/teoria/polprzewodniki" element={<TeoriaPolprzewodniki />} />
        <Route path="/teoria/pamieci-nosniki" element={<TeoriaPamieciNosniki />} />
        <Route path="/teoria/swiatlowody" element={<TeoriaSwiatlowody />} />
        <Route path="/teoria/sciaga" element={<TeoriaSciaga />} />
        <Route path="/egzaminy" element={<Egzaminy />} />
        <Route path="/wizualizacje/elementy_polprzewodnikowe" element={<WizualizacjeElementypolprzewodnikowe />} />
        <Route path="/wizualizacje/fale_em" element={<WizualizacjeFaleem />} />
        <Route path="/wizualizacje/nosniki_danych" element={<WizualizacjeNosnikidanych />} />
        <Route path="/wizualizacje/technika_swiatlowodowa" element={<WizualizacjeTechnikaswiatlowodowa />} />
        <Route path="/zadania/1" element={<Zadania1 />} />
        <Route path="/zadania/2" element={<Zadania2 />} />
        <Route path="/zadania/3" element={<Zadania3 />} />
      </Routes>
      <FloatingNav />
    </BrowserRouter>
  );
}



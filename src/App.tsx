import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Teoria1 from './pages/teoria/Teoria1';
import Teoria13 from './pages/teoria/Teoria13';
import Teoria16 from './pages/teoria/Teoria16';
import Teoria21 from './pages/teoria/Teoria21';
import Teoria7 from './pages/teoria/Teoria7';
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

export default function App() {
  const basename = import.meta.env.BASE_URL.endsWith('/') && import.meta.env.BASE_URL !== '/'
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/teoria/1" element={<Teoria1 />} />
        <Route path="/teoria/13" element={<Teoria13 />} />
        <Route path="/teoria/16" element={<Teoria16 />} />
        <Route path="/teoria/21" element={<Teoria21 />} />
        <Route path="/teoria/7" element={<Teoria7 />} />
        <Route path="/teoria/sciaga" element={<TeoriaSciaga />} />
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

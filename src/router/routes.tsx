import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import PageLoader from '@/components/PageLoader';

const Home = lazy(() => import('@/pages/Home'));
const Egzaminy = lazy(() => import('@/pages/Egzaminy'));
const TeoriaFalaPropagacja = lazy(() => import('@/pages/teoria/TeoriaFalaPropagacja'));
const TeoriaModulacja = lazy(() => import('@/pages/teoria/TeoriaModulacja'));
const TeoriaPolprzewodniki = lazy(() => import('@/pages/teoria/TeoriaPolprzewodniki'));
const TeoriaPamieciNosniki = lazy(() => import('@/pages/teoria/TeoriaPamieciNosniki'));
const TeoriaSwiatlowody = lazy(() => import('@/pages/teoria/TeoriaSwiatlowody'));
const TeoriaSciaga = lazy(() => import('@/pages/teoria/TeoriaSciaga'));
const WizualizacjeElementypolprzewodnikowe = lazy(() => import('@/pages/wizualizacje/WizualizacjeElementypolprzewodnikowe'));
const WizualizacjeFaleem = lazy(() => import('@/pages/wizualizacje/WizualizacjeFaleem'));
const WizualizacjeNosnikidanych = lazy(() => import('@/pages/wizualizacje/WizualizacjeNosnikidanych'));
const WizualizacjeTechnikaswiatlowodowa = lazy(() => import('@/pages/wizualizacje/WizualizacjeTechnikaswiatlowodowa'));
const Zadania1 = lazy(() => import('@/pages/zadania/Zadania1'));
const Zadania2 = lazy(() => import('@/pages/zadania/Zadania2'));
const Zadania3 = lazy(() => import('@/pages/zadania/Zadania3'));
const Nauka = lazy(() => import('@/pages/Nauka'));

export default function AppRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/nauka" element={<Nauka />} />
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
    </Suspense>
  );
}



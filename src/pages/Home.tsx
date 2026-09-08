import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Dynamiczny import dostępnych arkuszy egzaminacyjnych
const examModules = import.meta.glob('@/data/exams/*.json');
const termNames: Record<string, string> = {
  'Z1': 'Zima 1',
  'Z2': 'Zima 2',
  'L1': 'Lato 1',
  'L2': 'Lato 2',
  'Wrzesien': 'Wrzesień'
};
const termOrder: Record<string, number> = { 'Z1': 1, 'Z2': 2, 'L1': 3, 'L2': 4, 'Wrzesien': 5 };

const availableExams = Object.keys(examModules).map((path) => {
  const match = path.match(/\/(\d+)_([A-Za-z0-9]+)_([A-Za-z0-9]+)\.json$/);
  if (match) {
    const year = parseInt(match[1]);
    const term = match[2];
    const group = match[3];
    return {
      year,
      term,
      group,
      termName: termNames[term] || term
    };
  }
  return null;
}).filter(Boolean) as { year: number; term: string; group: string; termName: string }[];

// Sortowanie: Rok malejąco, termin rosnąco, grupa rosnąco
availableExams.sort((a, b) => {
  if (b.year !== a.year) return b.year - a.year;
  const orderA = termOrder[a.term] || 99;
  const orderB = termOrder[b.term] || 99;
  if (orderA !== orderB) return orderA - orderB;
  return a.group.localeCompare(b.group);
});

// Grupowanie arkuszy wg roczników
const examsByYear = availableExams.reduce((acc, exam) => {
  if (!acc[exam.year]) acc[exam.year] = [];
  acc[exam.year].push(exam);
  return acc;
}, {} as Record<number, typeof availableExams>);

const sortedYears = Object.keys(examsByYear).map(Number).sort((a, b) => b - a);

interface TheoryPart {
  id: string;
  badge: string;
  partNum: string;
  route: string;
  title: string;
  desc: string;
  range: string;
  connectedTask?: {
    route: string;
    label: string;
  };
  connectedViz?: {
    route: string;
    label: string;
  };
  questions: { num: number; id: string; title: string }[];
}

const THEORY_MODULES: TheoryPart[] = [
  {
    id: "cz1",
    badge: "cz. 1",
    partNum: "Część 1",
    route: "/teoria/fala-propagacja",
    title: "Fala elektromagnetyczna i propagacja w przestrzeni",
    desc: "Równania Maxwella w postaci różniczkowej i całkowej, równania materiałowe, zjawiska falowe (odbicie, załamanie, dyfrakcja, interferencja) oraz wyznaczanie zasięgu anten.",
    range: "pytania 1–6",
    connectedTask: {
      route: "/zadania/1",
      label: "Zadania: Rozdział 3 (zad. 3.5.1–3.5.4)"
    },
    connectedViz: {
      route: "/wizualizacje/fale_em",
      label: "Symulacja: Fale EM i horyzont radiowy"
    },
    questions: [
      { num: 1, id: "q1", title: "Równania Maxwella w postaci różniczkowej i całkowej oraz wnioski fizyczne, które z nich wynikają." },
      { num: 2, id: "q2", title: "Równania materiałowe i rodzaje ośrodków (dielektryki, przewodniki, ośrodki dyspersyjne)." },
      { num: 3, id: "q3", title: "Zjawiska falowe w propagacji: załamanie (prawo Snella), odbicie, dyfrakcja, interferencja." },
      { num: 4, id: "q4", title: "Fale powierzchniowe, troposferyczne i jonosferyczne — mechanizmy rozchodzenia się fal radiowych." },
      { num: 5, id: "q5", title: "Wpływ czynników atmosferycznych i zanieczyszczeń środowiska na propagację fali." },
      { num: 6, id: "q6", title: "Metody wyznaczania zasięgu anteny nadawczej i horyzont radiowy (model 4/3 R)." }
    ]
  },
  {
    id: "cz2",
    badge: "cz. 2",
    partNum: "Część 2",
    route: "/teoria/swiatlowody",
    title: "Transmisja światłowodowa i warunki brzegowe",
    desc: "Warunki brzegowe pola EM na granicy dielektryków, światłowody jedno- i wielomodowe, parametry tłumienia, dyspersja chromatyczna i modowa oraz budżet łącza.",
    range: "pytania 7–12",
    connectedTask: {
      route: "/zadania/2",
      label: "Zadania: Rozdział 4 (zad. 4.6.1–4.6.6)"
    },
    connectedViz: {
      route: "/wizualizacje/technika_swiatlowodowa",
      label: "Symulacja: Dyspersja modowa we włóknach"
    },
    questions: [
      { num: 7, id: "q7", title: "Warunki propagacji we włóknach światłowodowych i warunki brzegowe pola elektromagnetycznego." },
      { num: 8, id: "q8", title: "Światłowody jedno- i wielomodowe: od czego zależy liczba modów, rodzaje modów i ich wzbudzanie." },
      { num: 9, id: "q9", title: "Tłumienie we włóknach światłowodowych (absorpcja, rozpraszanie Rayleigha, straty na zgięciach)." },
      { num: 10, id: "q10", title: "Dyspersja we włóknach światłowodowych (modowa, chromatyczna materiałowa i falowodowa, polaryzacyjna PMD)." },
      { num: 11, id: "q11", title: "Kompensacja dyspersji w łączach światłowodowych (włókna DCF, siatki Bragga FBG)." },
      { num: 12, id: "q12", title: "Budżet łącza telekomunikacyjnego (Power Budget): omówienie wszystkich zmiennych i marginesu." }
    ]
  },
  {
    id: "cz3",
    badge: "cz. 3",
    partNum: "Część 3",
    route: "/teoria/modulacja",
    title: "Modulacja sygnałów i multipleksacja",
    desc: "Kryteria pomiaru jakości modulacji, wykres oka, współczynniki BER i SNR, techniki multipleksacji TDM/FDM/WDM oraz zjawisko mieszania czterofalowego (FWM).",
    range: "pytania 13–15",
    connectedTask: {
      route: "/zadania/3",
      label: "Zadania: Rozdział 5 (zad. 5.5.1–5.5.5)"
    },
    questions: [
      { num: 13, id: "q13", title: "Wymień i opisz sposoby mierzenia jakości zastosowanej modulacji (BER, SNR/OSNR, wykres oka, EVM)." },
      { num: 14, id: "q14", title: "Co to jest multipleksacja i jakie są jej zastosowania (TDM, FDM, WDM, DWDM)." },
      { num: 15, id: "q15", title: "Omów zjawisko mieszania czterofalowego (FWM) w łączach optycznych i metody jego ograniczania." }
    ]
  },
  {
    id: "cz4",
    badge: "cz. 4",
    partNum: "Część 4",
    route: "/teoria/polprzewodniki",
    title: "Fizyka półprzewodników i złącze p-n",
    desc: "Pasma energetyczne, nośniki samoistne i domieszkowane, rozkład Fermiego-Diraca, mechanizmy transportu (dryf i dyfuzja) oraz złącze p-n w stanie równowagi i polaryzacji.",
    range: "pytania 16–20",
    connectedViz: {
      route: "/wizualizacje/elementy_polprzewodnikowe",
      label: "Symulacja: Pasma złącza p-n i tranzystor MOSFET"
    },
    questions: [
      { num: 16, id: "q16", title: "Półprzewodniki samoistne i domieszkowane (typu n i typu p): struktura pasmowa i domieszki." },
      { num: 17, id: "q17", title: "Koncentracja nośników ładunku w stanie równowagi termodynamicznej (poziom Fermiego)." },
      { num: 18, id: "q18", title: "Koncentracja nośników w stanie nierównowagi termodynamicznej (generacja, rekombinacja, quasi-poziomy Fermiego)." },
      { num: 19, id: "q19", title: "Transport nośników w półprzewodnikach: prąd unoszenia (dryf w polu elektrycznym) i prąd dyfuzji." },
      { num: 20, id: "q20", title: "Działanie złącza typu p–n: polaryzacja w kierunku zaporowym i w kierunku przewodzenia." }
    ]
  },
  {
    id: "cz5",
    badge: "cz. 5",
    partNum: "Część 5",
    route: "/teoria/pamieci-nosniki",
    title: "Pamięci półprzewodnikowe i nośniki danych",
    desc: "Parametry pamięci, tranzystory bipolarne (BJT) i polowe (MOSFET), komórki pamięci Flash oraz fizyka zapisu optycznego, magnetooptycznego i magnetycznego.",
    range: "pytania 21–28",
    connectedViz: {
      route: "/wizualizacje/nosniki_danych",
      label: "Symulacja: Pamięci magnetyczne (HDD/GMR) i optyczne (CD-RW)"
    },
    questions: [
      { num: 21, id: "q21", title: "Wymień i opisz podstawowe parametry pamięci półprzewodnikowych (czas dostępu, gęstość, ulotność, cykle zapisu)." },
      { num: 22, id: "q22", title: "Omów budowę, charakterystyki i zasadę działania tranzystorów bipolarnych (BJT)." },
      { num: 23, id: "q23", title: "Omów budowę i zasadę działania tranzystorów polowych (JFET oraz MOSFET z kanałem indukowanym i wbudowanym)." },
      { num: 24, id: "q24", title: "Omów zasadę działania i parametry pamięci Flash (struktura komórki z pływającą bramką, architektura NAND vs NOR)." },
      { num: 25, id: "q25", title: "Omów jeden ze sposobów odtwarzania i zapisu informacji na dyskach optycznych (CD, DVD, nośniki fazowe CD-RW)." },
      { num: 26, id: "q26", title: "Omów jeden ze sposobów odtwarzania i zapisu informacji na dyskach magneto-optycznych (efekt Kerra, punkt Curie)." },
      { num: 27, id: "q27", title: "Omów zasadę zapisu i odczytu z dysków magnetycznych (HDD, głowice indukcyjne i cienkowarstwowe)." },
      { num: 28, id: "q28", title: "Omów zjawisko magnetorezystancji (AMR) i gigantycznej magnetorezystancji (GMR) w głowicach odczytu." }
    ]
  }
];

const COMPUTATIONAL_TASKS = [
  {
    id: "zad1",
    badge: "zad. 1",
    route: "/zadania/1",
    title: "Rozdział 3 — Propagacja i zjawiska falowe",
    range: "zad. 3.5.1 – 3.5.4",
    desc: "Obliczenia wektora Poyntinga, parametrów fali płaskiej w dielektryku, kąta Brewstera, współczynników odbicia Fresnela oraz promienia I strefy Fresnela."
  },
  {
    id: "zad2",
    badge: "zad. 2",
    route: "/zadania/2",
    title: "Rozdział 4 — Technika światłowodowa",
    range: "zad. 4.6.1 – 4.6.6",
    desc: "Wyznaczanie apertury numerycznej (NA), znormalizowanej częstotliwości V, liczby modów prowadzonych, dyspersji chromatycznej i bilansu mocy łącza optycznego."
  },
  {
    id: "zad3",
    badge: "zad. 3",
    route: "/zadania/3",
    title: "Rozdział 5 — Modulacja i multipleksacja",
    range: "zad. 5.5.1 – 5.5.5",
    desc: "Wyznaczanie widma i pasma sygnału zmodulowanego AM/FM (reguła Carsona), głębokości modulacji, przepustowości Shannona oraz parametrów nieliniowości FWM."
  }
];

const SIMULATIONS = [
  {
    id: "sim1",
    badge: "viz",
    category: "Fale radiowe",
    route: "/wizualizacje/fale_em",
    title: "Równania Maxwella i propagacja troposferyczna",
    desc: "Animacja przestrzenna fali TEM z wektorami E i H oraz kalkulator horyzontu radiowego i bezpośredniej widoczności anten (LOS)."
  },
  {
    id: "sim2",
    badge: "viz",
    category: "Światłowody",
    route: "/wizualizacje/technika_swiatlowodowa",
    title: "Dyspersja modowa we włóknach światłowodowych",
    desc: "Porównanie trajektorii promieni i rozmycia impulsów we włóknach o profilu skokowym (Step-Index) oraz gradientowym (Graded-Index)."
  },
  {
    id: "sim3",
    badge: "viz",
    category: "Półprzewodniki",
    route: "/wizualizacje/elementy_polprzewodnikowe",
    title: "Fizyka półprzewodników — złącze p-n i MOSFET",
    desc: "Diagramy pasm energetycznych (pasmo przewodnictwa, walencyjne, poziom Fermiego), zjawisko polaryzacji złącza oraz kanał przewodzący tranzystora MOS."
  },
  {
    id: "sim4",
    badge: "viz",
    category: "Nośniki danych",
    route: "/wizualizacje/nosniki_danych",
    title: "Nośniki danych — pamięć optyczna i magnetyczna",
    desc: "Model fizyczny zjawiska gigantycznego magnetooporu (GMR), zapis termomagnetyczny MO oraz zmiana fazy krystalicznej w nośnikach CD-RW."
  }
];

export default function Home() {
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    cz1: true,
    cz2: true,
    cz3: true,
    cz4: true,
    cz5: true,
  });

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const setAllModules = (expand: boolean) => {
    const nextState: Record<string, boolean> = {};
    THEORY_MODULES.forEach(m => {
      nextState[m.id] = expand;
    });
    setExpandedModules(nextState);
  };

  const [highlightedSection, setHighlightedSection] = useState<string | null>(null);
  const highlightTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNavClick = (sectionKey: string, elementId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setHighlightedSection(sectionKey);

    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (highlightTimeoutRef.current) {
      clearTimeout(highlightTimeoutRef.current);
    }
    highlightTimeoutRef.current = setTimeout(() => {
      setHighlightedSection(null);
    }, 2800);
  };

  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      if (['baza-egzaminow', 'archiwum', 'sciaga', 'teoria', 'zadania', 'wizualizacje'].includes(hash)) {
        setHighlightedSection(hash === 'baza-egzaminow' ? 'archiwum' : hash);
        const timer = setTimeout(() => setHighlightedSection(null), 3000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 text-txt font-sans">
      
      {/* ============================================================
          1. HEADER GŁÓWNY
          ============================================================ */}
      <header className="mb-8 border border-line bg-linear-to-br from-panel to-ink2 rounded-2xl px-6 sm:px-8 py-7 shadow-lg shadow-black/20">
        <div className="font-mono text-xs sm:text-[13px] tracking-[0.2em] uppercase text-amber font-medium">
          FPTiTI · Fizyczne Podstawy Technologii i Teleinformatyki
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-2 text-txt leading-tight">
          Spis treści — materiały do egzaminu
        </h1>
        <div className="text-muted text-base sm:text-[17px] leading-relaxed max-w-4xl">
          Opracowanie według podręcznika A. Szymańskiej · 28 pytań teoretycznych, zbiór zadań obliczeniowych oraz interaktywne symulacje zjawisk fizycznych.
        </div>

        {/* Pasek szybkiego przejścia do sekcji */}
        <nav className="flex flex-wrap gap-2.5 mt-5 pt-4 border-t border-line/60 items-center">
          <Link
            to="/nauka"
            className="font-mono text-xs sm:text-sm px-4 py-2 rounded-full cursor-pointer transition-all duration-300 bg-amber text-ink font-bold hover:brightness-110 shadow-[0_0_15px_rgba(245,158,11,0.35)] flex items-center"
          >
            <span>Fiszki & Test ABCD</span>
          </Link>
          <button
            onClick={handleNavClick('archiwum', 'archiwum')}
            className={`font-mono text-xs sm:text-sm px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
              highlightedSection === 'archiwum'
                ? 'bg-amber text-ink font-bold border-amber shadow-[0_0_18px_rgba(245,158,11,0.45)] scale-105'
                : 'text-amber-soft border border-line bg-panel hover:border-amber hover:text-amber'
            }`}
          >
            Archiwum egzaminów
          </button>
          <button
            onClick={handleNavClick('sciaga', 'sciaga')}
            className={`font-mono text-xs sm:text-sm px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
              highlightedSection === 'sciaga'
                ? 'bg-amber text-ink font-bold border-amber shadow-[0_0_18px_rgba(245,158,11,0.45)] scale-105'
                : 'text-amber-soft border border-line bg-panel hover:border-amber hover:text-amber'
            }`}
          >
            Ściąga egzaminacyjna
          </button>
          <button
            onClick={handleNavClick('teoria', 'teoria')}
            className={`font-mono text-xs sm:text-sm px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
              highlightedSection === 'teoria'
                ? 'bg-amber text-ink font-bold border-amber shadow-[0_0_18px_rgba(245,158,11,0.45)] scale-105'
                : 'text-amber-soft border border-line bg-panel hover:border-amber hover:text-amber'
            }`}
          >
            Zagadnienia teoretyczne
          </button>
          <button
            onClick={handleNavClick('zadania', 'zadania')}
            className={`font-mono text-xs sm:text-sm px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
              highlightedSection === 'zadania'
                ? 'bg-amber text-ink font-bold border-amber shadow-[0_0_18px_rgba(245,158,11,0.45)] scale-105'
                : 'text-amber-soft border border-line bg-panel hover:border-amber hover:text-amber'
            }`}
          >
            Zadania obliczeniowe
          </button>
          <button
            onClick={handleNavClick('wizualizacje', 'wizualizacje')}
            className={`font-mono text-xs sm:text-sm px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
              highlightedSection === 'wizualizacje'
                ? 'bg-amber text-ink font-bold border-amber shadow-[0_0_18px_rgba(245,158,11,0.45)] scale-105'
                : 'text-amber-soft border border-line bg-panel hover:border-amber hover:text-amber'
            }`}
          >
            Wizualizacje
          </button>
        </nav>
      </header>

      {/* ============================================================
          2. SEKCJA: SZYBKA POWTÓRKA I BAZA EGZAMINÓW
          ============================================================ */}
      <section id="baza-egzaminow" className="mb-12 scroll-mt-6">
        <div className="font-mono text-sm sm:text-[15px] tracking-[0.14em] uppercase text-amber border-b border-line pb-2 mb-4 flex items-center justify-between">
          <span className="font-bold">Przygotowanie do egzaminu — nauka, ściąga i archiwum</span>
          <span className="text-xs sm:text-sm text-muted font-normal">Lata 2017 – 2026</span>
        </div>

        {/* Trzy karty: Centrum Nauki, Ściąga oraz Wejście do Archiwum */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          
          {/* Karta Centrum Nauki (NOWOŚĆ) */}
          <div className="rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 border-2 border-amber/70 bg-linear-to-br from-panel to-ink2 hover:border-amber shadow-lg shadow-amber/5 hover:scale-[1.01]">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono font-bold text-ink bg-amber rounded-md px-2.5 py-1 text-xs uppercase tracking-wider">
                  Nowość
                </span>
                <span className="font-mono text-xs text-green font-bold">Fiszki & Test</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-txt mb-2 leading-snug">
                Fiszki i Test ABCD
              </h2>
              <p className="text-sm sm:text-[15px] text-muted leading-relaxed mb-4">
                Interaktywny system sprawdzania wiedzy: obracane karty 3D, quiz wyboru z realistycznymi pułapkami, kołem 50:50 i natychmiastowym wyjaśnieniem.
              </p>
            </div>
            <div className="pt-3 border-t border-line/50 flex items-center justify-between">
              <span className="text-xs text-amber font-mono">Baza 60+ zagadnień</span>
              <Link
                to="/nauka"
                className="font-mono text-xs sm:text-sm bg-amber text-ink px-3 py-1.5 rounded-lg font-bold hover:brightness-110 flex items-center gap-1 transition-all"
              >
                Uruchom test &rarr;
              </Link>
            </div>
          </div>
          
          {/* Karta Ściągi */}
          <div
            id="sciaga"
            className={`rounded-[16px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 scroll-mt-10 ${
              highlightedSection === 'sciaga'
                ? 'border-2 border-amber ring-4 ring-amber/30 bg-ink2/80 shadow-[0_0_40px_rgba(245,158,11,0.35)] scale-[1.01]'
                : 'border border-line bg-panel hover:border-amber'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono font-bold text-ink bg-amber rounded-md px-2.5 py-1 text-xs uppercase tracking-wider">
                  Keypointy
                </span>
                <span className="font-mono text-xs text-muted">28 zagadnień</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-txt mb-2 leading-snug">
                Ściąga egzaminacyjna — 28 pytań w pigułce
              </h2>
              <p className="text-sm sm:text-[15px] text-muted leading-relaxed mb-4">
                Zestawienie definicji, praw fizycznych, kluczowych równań i wykresów do natychmiastowej powtórki przed salą egzaminacyjną.
              </p>
            </div>
            <div className="pt-3 border-t border-line/50 flex items-center justify-between">
              <span className="text-xs text-muted font-mono">Wzory · Prawa · Wykresy</span>
              <Link
                to="/teoria/sciaga"
                className="font-mono text-xs sm:text-sm text-amber font-semibold hover:text-amber-soft hover:underline flex items-center gap-1"
              >
                Otwórz całą ściągę &rarr;
              </Link>
            </div>
          </div>

          {/* Karta Wejścia do Archiwum */}
          <div
            id="archiwum"
            className={`rounded-[16px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 scroll-mt-10 ${
              highlightedSection === 'archiwum'
                ? 'border-2 border-amber ring-4 ring-amber/30 bg-ink2/80 shadow-[0_0_40px_rgba(245,158,11,0.35)] scale-[1.01]'
                : 'border border-line bg-panel hover:border-amber'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono font-bold text-ink bg-amber rounded-md px-2.5 py-1 text-xs uppercase tracking-wider">
                  Archiwum
                </span>
                <span className="font-mono text-xs text-muted">14 terminów</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-txt mb-2 leading-snug">
                Przeglądarka arkuszy egzaminacyjnych
              </h2>
              <p className="text-sm sm:text-[15px] text-muted leading-relaxed mb-4">
                Oryginalne zadania z kolokwiów i egzaminów pisemnych z terminów zimowych, letnich i poprawkowych wraz z modelowymi rozwiązaniami.
              </p>
            </div>
            <div className="pt-3 border-t border-line/50 flex items-center justify-between">
              <span className="text-xs text-muted font-mono">Zimowa · Letnia · Wrzesień</span>
              <Link
                to="/egzaminy"
                className="font-mono text-xs sm:text-sm text-amber font-semibold hover:text-amber-soft hover:underline flex items-center gap-1"
              >
                Przejdź do archiwum &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Matryca szybkiego wyboru arkuszy */}
        <div
          className={`rounded-[16px] p-5 sm:p-6 transition-all duration-500 ${
            highlightedSection === 'archiwum'
              ? 'border-2 border-amber/70 ring-2 ring-amber/20 bg-panel shadow-[0_0_30px_rgba(245,158,11,0.2)]'
              : 'border border-line bg-panel2/60'
          }`}
        >
          <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-muted font-semibold mb-3">
            Szybki wybór konkretnego arkusza:
          </div>

          <div className="flex flex-col gap-2.5">
            {sortedYears.map((year) => (
              <div key={year} className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2.5 border-t border-line/40 first:border-t-0 first:pt-0">
                <span className="font-mono font-bold text-amber text-sm sm:text-base w-16 shrink-0">
                  {year}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {examsByYear[year].map((exam, idx) => (
                    <Link
                      key={idx}
                      to={`/egzaminy?year=${exam.year}&term=${exam.term}&group=${exam.group}`}
                      className="font-mono text-xs sm:text-[13px] no-underline bg-panel border border-line text-txt px-3.5 py-1.5 rounded-lg hover:border-amber hover:bg-amber/10 hover:text-amber transition-all shadow-xs"
                    >
                      <span className="text-muted mr-1.5">{exam.term}</span>
                      <strong className="text-txt font-semibold">Gr. {exam.group}</strong>
                      <span className="text-[11px] text-muted ml-1.5 opacity-80">({exam.termName})</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3. SEKCJA: WZORCOWE ODPOWIEDZI EGZAMINACYJNE (5 MODUŁÓW)
          ============================================================ */}
      <section
        id="teoria"
        className={`mb-12 scroll-mt-8 rounded-[20px] p-3 sm:p-4 -mx-3 sm:-mx-4 transition-all duration-500 ${
          highlightedSection === 'teoria'
            ? 'border-2 border-amber ring-4 ring-amber/30 bg-amber/[0.03] shadow-[0_0_45px_rgba(245,158,11,0.22)]'
            : 'border border-transparent'
        }`}
      >
        <div className="font-mono text-sm sm:text-[15px] tracking-[0.14em] uppercase text-amber border-b border-line pb-2 mb-5 flex items-center justify-between">
          <span className="font-bold">Wzorcowe odpowiedzi egzaminacyjne</span>
          
          <div className="flex items-center gap-3 text-xs sm:text-sm font-mono normal-case tracking-normal">
            <button
              onClick={() => setAllModules(true)}
              className="text-muted hover:text-amber transition-colors cursor-pointer"
            >
              [rozwiń wszystkie]
            </button>
            <span className="text-line">/</span>
            <button
              onClick={() => setAllModules(false)}
              className="text-muted hover:text-amber transition-colors cursor-pointer"
            >
              [zwiń wszystkie]
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {THEORY_MODULES.map((part) => {
            const isExpanded = !!expandedModules[part.id];
            return (
              <div
                key={part.id}
                className="border border-line bg-panel rounded-[16px] overflow-hidden transition-all duration-200 hover:border-amber/70"
              >
                {/* Nagłówek części */}
                <div className="p-5 sm:p-6 border-b border-line bg-ink2/30 flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono font-bold text-ink bg-amber rounded-md px-2.5 py-0.5 text-xs sm:text-sm whitespace-nowrap shrink-0">
                        {part.badge}
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold text-txt m-0 leading-snug">
                        {part.title}
                      </h2>
                    </div>
                    <span className="text-xs sm:text-sm text-muted font-mono whitespace-nowrap shrink-0 self-start sm:self-auto">
                      {part.range}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-muted/90 m-0 leading-relaxed max-w-5xl">
                    {part.desc}
                  </p>

                  {/* Skróty do rozdziału, zadań i apletu */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-2.5 border-t border-line/40 text-xs sm:text-sm font-mono">
                    <Link
                      to={part.route}
                      className="inline-flex items-center gap-1.5 bg-ink2 border border-line text-txt hover:border-amber hover:text-amber px-3.5 py-1.5 rounded-lg no-underline transition-colors"
                    >
                      Pełny rozdział teorii &rarr;
                    </Link>

                    {part.connectedTask && (
                      <Link
                        to={part.connectedTask.route}
                        className="inline-flex items-center gap-1.5 bg-ink2 border border-line text-muted hover:border-amber hover:text-txt px-3.5 py-1.5 rounded-lg no-underline transition-colors"
                      >
                        {part.connectedTask.label} &rarr;
                      </Link>
                    )}

                    {part.connectedViz && (
                      <Link
                        to={part.connectedViz.route}
                        className="inline-flex items-center gap-1.5 bg-ink2 border border-line text-muted hover:border-amber hover:text-txt px-3.5 py-1.5 rounded-lg no-underline transition-colors"
                      >
                        {part.connectedViz.label} &rarr;
                      </Link>
                    )}

                    <button
                      onClick={() => toggleModule(part.id)}
                      className="ml-auto text-xs sm:text-sm text-muted hover:text-amber transition-colors px-2 py-1 cursor-pointer"
                    >
                      {isExpanded ? "[zwiń pytania]" : `[pokaż pytania (${part.questions.length})]`}
                    </button>
                  </div>
                </div>

                {/* Lista pytań (zwijana) */}
                {isExpanded && (
                  <div className="p-3 sm:p-4 bg-panel/40 flex flex-col gap-1.5">
                    {part.questions.map((q) => (
                      <Link
                        key={q.id}
                        to={`${part.route}#${q.id}`}
                        className="flex items-start gap-3.5 px-4 py-2.5 rounded-xl hover:bg-ink2/60 text-[15px] sm:text-[16px] text-txt no-underline transition-colors group"
                      >
                        <span className="font-mono text-xs sm:text-sm font-bold text-muted group-hover:text-amber bg-ink2 border border-line px-2 py-0.5 rounded-md shrink-0 mt-0.5">
                          {q.num}
                        </span>
                        <span className="group-hover:text-amber leading-relaxed flex-1">
                          {q.title}
                        </span>
                        <span className="font-mono text-sm text-muted/60 group-hover:text-amber shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          &rarr;
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          4. SEKCJA: ZADANIA OBLICZENIOWE
          ============================================================ */}
      <section
        id="zadania"
        className={`mb-12 scroll-mt-8 rounded-[20px] p-3 sm:p-4 -mx-3 sm:-mx-4 transition-all duration-500 ${
          highlightedSection === 'zadania'
            ? 'border-2 border-amber ring-4 ring-amber/30 bg-amber/[0.03] shadow-[0_0_45px_rgba(245,158,11,0.22)]'
            : 'border border-transparent'
        }`}
      >
        <div className="font-mono text-sm sm:text-[15px] tracking-[0.14em] uppercase text-amber border-b border-line pb-2 mb-5 flex items-center justify-between">
          <span className="font-bold">Zadania obliczeniowe z rozwiązaniami</span>
          <span className="text-xs sm:text-sm text-muted font-normal">Rozdziały 3, 4, 5</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {COMPUTATIONAL_TASKS.map((task) => (
            <Link
              key={task.id}
              to={task.route}
              className="border border-line bg-panel rounded-[16px] p-5 sm:p-6 flex flex-col justify-between no-underline text-txt hover:border-amber hover:translate-x-0.5 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="font-mono font-bold text-ink bg-amber rounded-md px-2.5 py-0.5 text-xs sm:text-sm whitespace-nowrap">
                    {task.badge}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {task.range}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber transition-colors mb-2 leading-snug">
                  {task.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {task.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-line/40 flex items-center justify-between font-mono text-xs sm:text-sm text-muted group-hover:text-amber transition-colors">
                <span>Pełne rozwiązania</span>
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================
          5. SEKCJA: WIZUALIZACJE I SYMULACJE INTERAKTYWNE
          ============================================================ */}
      <section
        id="wizualizacje"
        className={`mb-12 scroll-mt-8 rounded-[20px] p-3 sm:p-4 -mx-3 sm:-mx-4 transition-all duration-500 ${
          highlightedSection === 'wizualizacje'
            ? 'border-2 border-amber ring-4 ring-amber/30 bg-amber/[0.03] shadow-[0_0_45px_rgba(245,158,11,0.22)]'
            : 'border border-transparent'
        }`}
      >
        <div className="font-mono text-sm sm:text-[15px] tracking-[0.14em] uppercase text-amber border-b border-line pb-2 mb-5 flex items-center justify-between">
          <span className="font-bold">Wizualizacje i symulacje interaktywne</span>
          <span className="text-xs sm:text-sm text-muted font-normal">4 aplety fizyczne</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SIMULATIONS.map((sim) => (
            <Link
              key={sim.id}
              to={sim.route}
              className="border border-line bg-panel rounded-[16px] p-5 sm:p-6 flex flex-col justify-between no-underline text-txt hover:border-amber hover:translate-x-0.5 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="font-mono font-bold text-ink bg-amber rounded-md px-2.5 py-0.5 text-xs sm:text-sm whitespace-nowrap uppercase">
                    {sim.badge}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {sim.category}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber transition-colors mb-2 leading-snug">
                  {sim.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {sim.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-line/40 flex items-center justify-between font-mono text-xs sm:text-sm text-muted group-hover:text-amber transition-colors">
                <span>Uruchom symulację</span>
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================
          STOPKA
          ============================================================ */}
      <Footer>
        Spis treści · Centrum przygotowań do egzaminu FPTiTI (28 pytań, zadania, aplety)
      </Footer>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const parts = [
    {
      id: "cz1",
      badge: "cz.1",
      route: "/teoria/fala-propagacja",
      title: "Fala elektromagnetyczna i propagacja w wolnej przestrzeni",
      range: "pyt. 1–6",
      questions: [
        { num: 1, id: "q1", title: "Napisz i omów równania Maxwella oraz napisz wnioski, które z nich wynikają." },
        { num: 2, id: "q2", title: "Równania materiałowe i rodzaje ośrodków." },
        { num: 3, id: "q3", title: "Opisz zjawiska falowe (załamanie, odbicie, dyfrakcja, interferencja)." },
        { num: 4, id: "q4", title: "Omów fale powierzchniowe, troposferyczne i jonosferyczne." },
        { num: 5, id: "q5", title: "Omów wpływ czynników atmosferycznych i innych „zanieczyszczeń” na propagację fali." },
        { num: 6, id: "q6", title: "W jaki sposób określa się zasięg anteny nadawczej?" }
      ]
    },
    {
      id: "cz2",
      badge: "cz.2",
      route: "/teoria/swiatlowody",
      title: "Transmisja światłowodowa (+ warunki brzegowe)",
      range: "pyt. 7–12",
      questions: [
        { num: 7, id: "q7", title: "Omów warunki propagacji we włóknach światłowodowych." },
        { num: 8, id: "q8", title: "Światłowody jedno- i wielomodowe, od czego zależy liczba modów, rodzaje modów i ich wzbudzanie." },
        { num: 9, id: "q9", title: "Tłumienie we włóknach światłowodowych." },
        { num: 10, id: "q10", title: "Dyspersja we włóknach światłowodowych." },
        { num: 11, id: "q11", title: "Kompensacja dyspersji w łączach światłowodowych." },
        { num: 12, id: "q12", title: "Budżet łącza telekomunikacyjnego. Omówić wszystkie zmienne i ich wartości." }
      ]
    },
    {
      id: "cz3",
      badge: "cz.3",
      route: "/teoria/modulacja",
      title: "Modulacja i multipleksacja",
      range: "pyt. 13–15",
      questions: [
        { num: 13, id: "q13", title: "Wymień i opisz sposoby mierzenia jakości zastosowanej modulacji." },
        { num: 14, id: "q14", title: "Co to jest multipleksacja i jakie są jej zastosowania." },
        { num: 15, id: "q15", title: "Omów zjawisko mieszania czterofalowego." }
      ]
    },
    {
      id: "cz4",
      badge: "cz.4",
      route: "/teoria/polprzewodniki",
      title: "Fizyka półprzewodników",
      range: "pyt. 16–20",
      questions: [
        { num: 16, id: "q16", title: "Półprzewodniki samoistne i domieszkowane." },
        { num: 17, id: "q17", title: "Koncentracja nośników w stanie równowagi termodynamicznej." },
        { num: 18, id: "q18", title: "Koncentracja nośników w stanie nierównowagi termodynamicznej." },
        { num: 19, id: "q19", title: "Transport nośników w półprzewodnikach." },
        { num: 20, id: "q20", title: "Działanie złącza typu p–n. Polaryzacja w kierunku zaporowym i przewodzenia." }
      ]
    },
    {
      id: "cz5",
      badge: "cz.5",
      route: "/teoria/pamieci-nosniki",
      title: "Pamięci i nośniki danych",
      range: "pyt. 21–28",
      questions: [
        { num: 21, id: "q21", title: "Wymień i opisz podstawowe parametry pamięci półprzewodnikowych." },
        { num: 22, id: "q22", title: "Omów budowę i zasadę działania tranzystorów bipolarnych." },
        { num: 23, id: "q23", title: "Omów budowę i zasadę działania tranzystorów polowych." },
        { num: 24, id: "q24", title: "Omów zasadę działania i parametry pamięci Flash." },
        { num: 25, id: "q25", title: "Omów jeden ze sposobów odtwarzania i zapisu informacji na dyskach optycznych." },
        { num: 26, id: "q26", title: "Omów jeden ze sposobów odtwarzania i zapisu informacji na dyskach magneto-optycznych." },
        { num: 27, id: "q27", title: "Omów zasadę zapisu/odczytu z dysków magnetycznych." },
        { num: 28, id: "q28", title: "Omów zjawisko magnetorezystancji." }
      ]
    }
  ];

  return (
    <div className="max-w-[880px] mx-auto px-4 py-7 pb-20">
      <header className="mb-6 border border-line bg-linear-to-br from-panel to-ink2 rounded-[14px] px-6 py-[22px]">
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-amber">FPTiTI · Fizyczne Podstawy Technologii i Teleinformatyki</div>
        <h1 className="text-[27px] font-semibold mt-1.5 mb-1">Spis treści — materiały do egzaminu</h1>
        <div className="text-muted text-[14.5px]">Wg podręcznika A. Szymańskiej · luty 2026 · 28 pytań + wizualizacje interaktywne</div>
      </header>

      {/* ===== Ściąga ===== */}
      <div className="mt-7 mb-3 font-mono text-[13px] tracking-[0.14em] uppercase text-amber border-b border-line pb-1.5 flex items-center gap-2">
        <em className="not-italic text-lg">⚡</em> Ściąga — szybka powtórka
      </div>
      <ul className="list-none m-0 p-0">
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1">
          <Link to="/teoria/sciaga" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
            <span className="font-mono font-bold text-ink bg-green rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">★</span>
            <span className="font-semibold text-[15px] text-white">Ściąga · 28 pytań · Keypointy</span>
            <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">wszystkie pytania</span>
          </Link>
        </li>
      </ul>

      {/* ===== Odpowiedzi egzaminacyjne ===== */}
      <div className="mt-7 mb-3 font-mono text-[13px] tracking-[0.14em] uppercase text-amber border-b border-line pb-1.5 flex items-center gap-2">
        <em className="not-italic text-lg">📖</em> Wzorcowe odpowiedzi egzaminacyjne
      </div>
      <div className="flex flex-col gap-4">
        {parts.map((part) => (
          <div key={part.id} className="border border-line bg-panel rounded-xl overflow-hidden transition-all duration-200 hover:border-amber/50">
            <div className="border-b border-line bg-ink2/30">
              <Link to={part.route} className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt hover:text-amber transition-colors">
                <span className="font-mono font-bold text-ink bg-amber rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">{part.badge}</span>
                <span className="font-semibold text-[15.5px] text-white">{part.title}</span>
                <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">{part.range}</span>
              </Link>
            </div>
            <div className="p-3 bg-panel/50 flex flex-col gap-1.5">
              {part.questions.map((q) => (
                <Link
                  key={q.id}
                  to={`${part.route}#${q.id}`}
                  className="flex items-start gap-2.5 px-3 py-2 rounded-lg hover:bg-ink2/50 text-[14px] text-txt no-underline transition-colors group"
                >
                  <span className="font-mono text-[12px] bg-ink2 text-muted group-hover:text-amber px-1.5 py-0.5 rounded shrink-0">{q.num}</span>
                  <span className="group-hover:text-white transition-colors">{q.title}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ===== Zadania obliczeniowe ===== */}
      <div className="mt-7 mb-3 font-mono text-[13px] tracking-[0.14em] uppercase text-amber border-b border-line pb-1.5 flex items-center gap-2">
        <em className="not-italic text-lg">🧮</em> Zadania obliczeniowe z rozwiązaniami
      </div>
      <ul className="list-none m-0 p-0">
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1">
          <Link to="/zadania/1" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
            <span className="font-mono font-bold text-ink bg-green rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">zad.1</span>
            <span className="font-semibold text-[15px] text-white">Rozdział 3 — Propagacja i zjawiska falowe</span>
            <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">zad. 3.5.1 – 3.5.4</span>
          </Link>
        </li>
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1">
          <Link to="/zadania/2" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
            <span className="font-mono font-bold text-ink bg-green rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">zad.2</span>
            <span className="font-semibold text-[15px] text-white">Rozdział 4 — Technika światłowodowa</span>
            <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">zad. 4.6.1 – 4.6.6</span>
          </Link>
        </li>
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1">
          <Link to="/zadania/3" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
            <span className="font-mono font-bold text-ink bg-green rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">zad.3</span>
            <span className="font-semibold text-[15px] text-white">Rozdział 5 — Modulacja i multipleksacja</span>
            <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">zad. 5.5.1 – 5.5.5</span>
          </Link>
        </li>
      </ul>

      {/* ===== Wizualizacje ===== */}
      <div className="mt-7 mb-3 font-mono text-[13px] tracking-[0.14em] uppercase text-amber border-b border-line pb-1.5 flex items-center gap-2">
        <em className="not-italic text-lg">🎨</em> Wizualizacje interaktywne
      </div>
      <ul className="list-none m-0 p-0">
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1">
          <Link to="/wizualizacje/fale_em" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
            <span className="font-mono font-bold text-ink bg-green rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">viz</span>
            <span className="font-semibold text-[15px] text-white">Równania Maxwella i propagacja troposferyczna</span>
            <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">animacja LOS</span>
          </Link>
        </li>
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1">
          <Link to="/wizualizacje/technika_swiatlowodowa" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
            <span className="font-mono font-bold text-ink bg-green rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">viz</span>
            <span className="font-semibold text-[15px] text-white">Dyspersja modowa w światłowodach</span>
            <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">profil skokowy vs gradientowy</span>
          </Link>
        </li>
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1">
          <Link to="/wizualizacje/elementy_polprzewodnikowe" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
            <span className="font-mono font-bold text-ink bg-green rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">viz</span>
            <span className="font-semibold text-[15px] text-white">Fizyka półprzewodników — złącze P-N i MOSFET</span>
            <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">interaktywne diagramy</span>
          </Link>
        </li>
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1">
          <Link to="/wizualizacje/nosniki_danych" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
            <span className="font-mono font-bold text-ink bg-green rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">viz</span>
            <span className="font-semibold text-[15px] text-white">Nośniki danych — pamięć optyczna i magnetyczna</span>
            <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">CD-RW / HDD / GMR</span>
          </Link>
        </li>
      </ul>

      <footer className="text-center text-muted font-mono text-[11px] mt-9">FPTiTI · Materiały egzaminacyjne · wg A. Szymańskiej · powodzenia 💪</footer>
    </div>
  );
}

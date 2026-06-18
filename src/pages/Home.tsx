import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-[880px] mx-auto px-4 py-7 pb-20">
      <header className="mb-6 border border-line bg-linear-to-br from-panel to-ink2 rounded-[14px] px-6 py-[22px]">
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-amber">FPTiTI · Fizyczne Podstawy Technologii i Teleinformatyki</div>
        <h1 className="text-[27px] font-semibold mt-1.5 mb-1">Spis treści — materiały do egzaminu</h1>
        <div className="text-muted text-[14.5px]">Wg podręcznika A. Szymańskiej · luty 2026 · 28 pytań + wizualizacje interaktywne</div>
      </header>

      {/* ===== Ściąga ===== */}
      <div className="mt-7 mb-3 font-mono text-[13px] tracking-[0.14em] uppercase text-amber border-b border-line pb-1.5 flex items-center gap-2"><em className="not-italic text-lg">⚡</em> Ściąga — szybka powtórka</div>
      <ul className="list-none m-0 p-0">
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1"><Link to="/teoria/sciaga" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
          <span className="font-mono font-bold text-ink bg-green rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">★</span>
          <span className="font-semibold text-[15px] text-white">Ściąga · 28 pytań · Keypointy</span>
          <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">wszystkie pytania</span>
        </Link></li>
      </ul>

      {/* ===== Odpowiedzi egzaminacyjne ===== */}
      <div className="mt-7 mb-3 font-mono text-[13px] tracking-[0.14em] uppercase text-amber border-b border-line pb-1.5 flex items-center gap-2"><em className="not-italic text-lg">📖</em> Wzorcowe odpowiedzi egzaminacyjne</div>
      <ul className="list-none m-0 p-0">
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1"><Link to="/teoria/1" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
          <span className="font-mono font-bold text-ink bg-amber rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">cz.1</span>
          <span className="font-semibold text-[15px] text-white">Fala elektromagnetyczna i propagacja w wolnej przestrzeni</span>
          <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">pyt. 1–6</span>
        </Link></li>
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1"><Link to="/teoria/7" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
          <span className="font-mono font-bold text-ink bg-amber rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">cz.2</span>
          <span className="font-semibold text-[15px] text-white">Transmisja światłowodowa (+ warunki brzegowe)</span>
          <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">pyt. 7–12</span>
        </Link></li>
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1"><Link to="/teoria/13" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
          <span className="font-mono font-bold text-ink bg-amber rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">cz.3</span>
          <span className="font-semibold text-[15px] text-white">Modulacja i multipleksacja</span>
          <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">pyt. 13–15</span>
        </Link></li>
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1"><Link to="/teoria/16" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
          <span className="font-mono font-bold text-ink bg-amber rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">cz.4</span>
          <span className="font-semibold text-[15px] text-white">Fizyka półprzewodników</span>
          <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">pyt. 16–20</span>
        </Link></li>
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1"><Link to="/teoria/21" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
          <span className="font-mono font-bold text-ink bg-amber rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">cz.5</span>
          <span className="font-semibold text-[15px] text-white">Pamięci i nośniki danych</span>
          <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">pyt. 21–28</span>
        </Link></li>
      </ul>

      {/* ===== Zadania obliczeniowe ===== */}
      <div className="mt-7 mb-3 font-mono text-[13px] tracking-[0.14em] uppercase text-amber border-b border-line pb-1.5 flex items-center gap-2"><em className="not-italic text-lg">🧮</em> Zadania obliczeniowe z rozwiązaniami</div>
      <ul className="list-none m-0 p-0">
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1"><Link to="/zadania/1" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
          <span className="font-mono font-bold text-ink bg-green rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">zad.1</span>
          <span className="font-semibold text-[15px] text-white">Rozdział 3 — Propagacja i zjawiska falowe</span>
          <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">zad. 3.5.1 – 3.5.4</span>
        </Link></li>
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1"><Link to="/zadania/2" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
          <span className="font-mono font-bold text-ink bg-green rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">zad.2</span>
          <span className="font-semibold text-[15px] text-white">Rozdział 4 — Technika światłowodowa</span>
          <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">zad. 4.6.1 – 4.6.6</span>
        </Link></li>
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1"><Link to="/zadania/3" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
          <span className="font-mono font-bold text-ink bg-green rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">zad.3</span>
          <span className="font-semibold text-[15px] text-white">Rozdział 5 — Modulacja i multipleksacja</span>
          <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">zad. 5.5.1 – 5.5.5</span>
        </Link></li>
      </ul>

      {/* ===== Wizualizacje ===== */}
      <div className="mt-7 mb-3 font-mono text-[13px] tracking-[0.14em] uppercase text-amber border-b border-line pb-1.5 flex items-center gap-2"><em className="not-italic text-lg">🎨</em> Wizualizacje interaktywne</div>
      <ul className="list-none m-0 p-0">
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1"><Link to="/wizualizacje/fale_em" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
          <span className="font-mono font-bold text-ink bg-green rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">viz</span>
          <span className="font-semibold text-[15px] text-white">Równania Maxwella i propagacja troposferyczna</span>
          <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">animacja LOS</span>
        </Link></li>
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1"><Link to="/wizualizacje/technika_swiatlowodowa" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
          <span className="font-mono font-bold text-ink bg-green rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">viz</span>
          <span className="font-semibold text-[15px] text-white">Dyspersja modowa w światłowodach</span>
          <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">profil skokowy vs gradientowy</span>
        </Link></li>
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1"><Link to="/wizualizacje/elementy_polprzewodnikowe" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
          <span className="font-mono font-bold text-ink bg-green rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">viz</span>
          <span className="font-semibold text-[15px] text-white">Fizyka półprzewodników — złącze P-N i MOSFET</span>
          <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">interaktywne diagramy</span>
        </Link></li>
        <li className="border border-line bg-panel rounded-xl mb-2.5 transition-all duration-200 hover:border-amber hover:translate-x-1"><Link to="/wizualizacje/nosniki_danych" className="flex items-baseline gap-3 px-[18px] py-[14px] no-underline text-txt">
          <span className="font-mono font-bold text-ink bg-green rounded-md px-2 py-px text-[12px] whitespace-nowrap shrink-0">viz</span>
          <span className="font-semibold text-[15px] text-white">Nośniki danych — pamięć optyczna i magnetyczna</span>
          <span className="text-[13px] text-muted ml-auto font-mono whitespace-nowrap">CD-RW / HDD / GMR</span>
        </Link></li>
      </ul>

      <footer className="text-center text-muted font-mono text-[11px] mt-9">FPTiTI · Materiały egzaminacyjne · wg A. Szymańskiej · powodzenia 💪</footer>
    </div>
  );
}

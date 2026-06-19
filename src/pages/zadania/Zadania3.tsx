import React, { useEffect } from 'react';
import rys_5_5 from '../../assets/rys_5_5.png';

export default function Zadania3() {

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);



  return (
    <>
      
<div className="max-w-[880px] mx-auto">

<header className="mb-6 border border-line bg-gradient-to-br from-panel to-ink2 rounded-[14px] px-6 py-[22px]">
  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-amber">FPTiTI · zadania obliczeniowe · część 3 / 3</div>
  <h1 className="text-[27px] font-semibold mt-1.5 mb-1">Rozdział 5: Modulacja i multipleksacja</h1>
  <div className="text-muted text-[14.5px]">Zadania z rozwiązaniami krok po kroku · na podstawie podręcznika A. Szymańskiej</div>
</header>

<nav className="flex flex-wrap gap-2 my-[18px] mb-[30px]">
  <a href="#t1" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">5.5.1 · Wykres oczkowy</a>
  <a href="#t2" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">5.5.2 · Efektywność widmowa</a>
  <a href="#t3" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">5.5.3 · Maksymalna przepływność</a>
  <a href="#t4" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">5.5.4 · System DWDM i FWM</a>
  <a href="#t5" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">5.5.5 · Produkty FWM (N=2, 4, 8)</a>
</nav>


<section className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-[26px]" id="t1">
<div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
  <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">5.5.1</span>
  <h2 className="text-[20.5px] font-semibold leading-tight">Parametry wykresu oczkowego na podstawie Rys. 5.5</h2>
  <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap"><span className="t1 font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-[1px] text-[12px] whitespace-nowrap">P1</span></span>
</div>

<p className="mb-[11px] text-red font-semibold"><b>Zadanie:</b> Korzystając z wykresów zamieszczonych na Rys. 5.5, oblicz wielkości charakteryzujące wykres oczkowy.</p>

<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]">
  <img src={rys_5_5} alt="Wykres oczkowy z zaznaczonymi parametrami"/>
  <figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rys. 5.5: Wykres oczkowy (eye-diagram) z naniesionymi liniami pomocniczymi do odczytu poziomów napięć i czasów.</figcaption>
</figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Odczyt poziomów z wykresu (oś Y w jednostkach umownych [a.u.]):</h3>
<ul className="mb-3 ml-5 list-disc">
  <li className="mb-1.5">Maksymalna amplituda sygnału (poziom wysoki logiczny): \(V_&#123;\mathrm&#123;max&#125;&#125; \approx 6&#123;,&#125;7 \cdot 10^&#123;-5&#125;\)</li>
  <li className="mb-1.5">Minimalna amplituda sygnału (poziom niski logiczny): \(V_&#123;\mathrm&#123;min&#125;&#125; \approx -0&#123;,&#125;1 \cdot 10^&#123;-5&#125;\)</li>
  <li className="mb-1.5">Wewnętrzny poziom wysoki (najniższy punkt wewnątrz oka u góry): \(V'_&#123;\mathrm&#123;max&#125;&#125; \approx 4&#123;,&#125;8 \cdot 10^&#123;-5&#125;\)</li>
  <li className="mb-1.5">Wewnętrzny poziom niski (najwyższy punkt wewnątrz oka u dołu): \(V'_&#123;\mathrm&#123;min&#125;&#125; \approx 0&#123;,&#125;1 \cdot 10^&#123;-5&#125;\)</li>
  <li className="mb-1.5">Poziom wysoki logiczny (średnia wartość dla jedynki): \(V_1 \approx 5&#123;,&#125;5 \cdot 10^&#123;-5&#125;\)</li>
  <li className="mb-1.5">Próg decyzyjny: \(V_D \approx 2&#123;,&#125;3 \cdot 10^&#123;-5&#125;\)</li>
</ul>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Odczyt parametrów czasowych (oś X w nanosekundach [ns]):</h3>
<ul className="mb-3 ml-5 list-disc">
  <li className="mb-1.5">Początek oka: \(t_&#123;\mathrm&#123;start&#125;&#125; \approx 0&#123;,&#125;06\ \mathrm&#123;ns&#125;\)</li>
  <li className="mb-1.5">Koniec oka: \(t_&#123;\mathrm&#123;end&#125;&#125; \approx 0&#123;,&#125;15\ \mathrm&#123;ns&#125;\)</li>
  <li className="mb-1.5">Czas narastania od 20% do 80%: \(T_&#123;20-80&#125; \approx 0&#123;,&#125;003\ \mathrm&#123;ns&#125;\) (ok. \(3\ \mathrm&#123;ps&#125;\))</li>
  <li className="mb-1.5">Rozmycie czasu przełączania (jitter): \(\Delta T \approx 0&#123;,&#125;0075\ \mathrm&#123;ns&#125;\) (ok. \(7&#123;,&#125;5\ \mathrm&#123;ps&#125;\))</li>
</ul>

---

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Obliczenia parametrów wykresu oczkowego:</h3>

<ol>
  <li className="mb-1.5"><b>Szerokość oka (przedział czasu bezpiecznego próbkowania):</b>
    \[W_&#123;\mathrm&#123;eye&#125;&#125; = t_&#123;\mathrm&#123;end&#125;&#125; - t_&#123;\mathrm&#123;start&#125;&#125; = 0&#123;,&#125;15\ \mathrm&#123;ns&#125; - 0&#123;,&#125;06\ \mathrm&#123;ns&#125; = \mathbf&#123;0&#123;,&#125;09\ \mathrm&#123;ns&#125;&#125;\ \text&#123;(90 ps)&#125;\]
  </li>
  <li className="mb-1.5"><b>Rozwartość wykresu oczkowego (\(R_0\)):</b>
    \[R_0 = \frac&#123;V'_&#123;\mathrm&#123;max&#125;&#125; - V'_&#123;\mathrm&#123;min&#125;&#125;&#125;&#123;V_&#123;\mathrm&#123;max&#125;&#125; - V_&#123;\mathrm&#123;min&#125;&#125;&#125; = \frac&#123;4&#123;,&#125;8 \cdot 10^&#123;-5&#125; - 0&#123;,&#125;1 \cdot 10^&#123;-5&#125;&#125;&#123;6&#123;,&#125;7 \cdot 10^&#123;-5&#125; - (-0&#123;,&#125;1 \cdot 10^&#123;-5&#125;)&#125; = \frac&#123;4&#123;,&#125;7 \cdot 10^&#123;-5&#125;&#125;&#123;6&#123;,&#125;8 \cdot 10^&#123;-5&#125;&#125; = \frac&#123;47&#125;&#123;68&#125; \approx \mathbf&#123;0&#123;,&#125;69&#125;\ \text&#123;(69%)&#125;\]
  </li>
  <li className="mb-1.5"><b>Margines szumowy (\(M_S\)):</b>
    <p className="mb-[11px]">Odnosi się do odległości od poziomu decyzyjnego do minimalnego poziomu logicznej jedynki wewnątrz oka:</p>
    \[V_1^* = V'_&#123;\mathrm&#123;max&#125;&#125; - V_D = 4&#123;,&#125;8 \cdot 10^&#123;-5&#125; - 2&#123;,&#125;3 \cdot 10^&#123;-5&#125; = 2&#123;,&#125;5 \cdot 10^&#123;-5&#125;\]
    \[M_S = \frac&#123;V_1^*&#125;&#123;V'_&#123;\mathrm&#123;max&#125;&#125;&#125; = \frac&#123;2&#123;,&#125;5 \cdot 10^&#123;-5&#125;&#125;&#123;4&#123;,&#125;8 \cdot 10^&#123;-5&#125;&#125; = \frac&#123;25&#125;&#123;48&#125; \approx \mathbf&#123;0&#123;,&#125;52&#125;\ \text&#123;(52%)&#125;\]
  </li>
  <li className="mb-1.5"><b>Czas narastania sygnału (\(C_&#123;NS&#125;\)):</b>
    \[C_&#123;NS&#125; = 1&#123;,&#125;25 \cdot T_&#123;20-80&#125; = 1&#123;,&#125;25 \cdot 0&#123;,&#125;003\ \mathrm&#123;ns&#125; \approx \mathbf&#123;0&#123;,&#125;00375\ \mathrm&#123;ns&#125;&#125;\ \text&#123;(3,75 ps)&#125;\]
  </li>
  <li className="mb-1.5"><b>Nachylenie wykresu (odporność na jitter):</b>
    <p className="mb-[11px]">Kąt nachylenia zbocza wynosi ok. <b>60°</b>.</p>
  </li>
  <li className="mb-1.5"><b>Zniekształcenie czasowe (jitter):</b>
    \[\Delta T \approx \mathbf&#123;0&#123;,&#125;0075\ \mathrm&#123;ns&#125;&#125;\ \text&#123;(7,5 ps)&#125;\]
  </li>
  <li className="mb-1.5"><b>Współczynnik ekstynkcji (\(EX\)):</b>
    \[EX = \frac&#123;\text&#123;Moc logicznej jedynki &#125; (V_1)&#125;&#123;\text&#123;Moc logicznego zera &#125; (V'_&#123;\mathrm&#123;min&#125;&#125;)&#125; = \frac&#123;5&#123;,&#125;5 \cdot 10^&#123;-5&#125;&#125;&#123;0&#123;,&#125;1 \cdot 10^&#123;-5&#125;&#125; = \frac&#123;5&#123;,&#125;5&#125;&#123;0&#123;,&#125;1&#125; = \mathbf&#123;55&#125;\]
  </li>
</ol>

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border border-line bg-red/10 border-[#7d3a3a]">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">⚠️ Błędy w studenckich notatkach</span>
  <ol>
    <li className="mb-1.5">W notatkach studentów jednostka nanosekundy [ns] z osi czasu została błędnie przepisana jako **milisekundy [ms]** (np. szerokość oka zapisano jako \(0&#123;,&#125;09\ \mathrm&#123;ms&#125;\)). Przy prędkościach rzędu Gb/s jednostki milisekundowe są fizycznie niemożliwe. Poprawna jednostka to **ns** (a dla czasów narastania **ps**).</li>
    <li className="mb-1.5">Obliczenie współczynnika ekstynkcji w notatkach wynosiło błędnie: <code>5.5 / 0.1e-5 = 5500000</code>. Autor zapomniał doliczyć czynnik \(10^&#123;-5&#125;\) w liczniku. Poziom wysoki to \(5&#123;,&#125;5 \cdot 10^&#123;-5&#125;\), a nie \(5&#123;,&#125;5\). Ich stosunek to prawidłowo **55**.</li>
  </ol>
</div>

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border border-line bg-green-dim/10 border-green-dim">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Podsumowanie Jakości Modulacji</span>
  <p className="mb-[11px]">Na podstawie wykresu oczkowego:</p>
  <ul className="mb-3 ml-5 list-disc">
    <li className="mb-1.5">Wykres jest **szeroko otwarty** w poziomie (szerokość 90 ps przy czasie bitu 200 ps), co oznacza dobrą odporność na przesunięcia fazowe (jitter).</li>
    <li className="mb-1.5">Rozwartość pionowa wynosi **69%**, a margines szumowy **52%**, co gwarantuje wysoką odporność na zakłócenia amplitudy (szumy).</li>
    <li className="mb-1.5">Współczynnik ekstynkcji wynosi **55** (ok. 17,4 dB), co jest poprawną wartością dla nadajników laserowych (standardowo &gt; 10-20).</li>
  </ul>
</div>
</section>


<section className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-[26px]" id="t2">
<div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
  <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">5.5.2</span>
  <h2 className="text-[20.5px] font-semibold leading-tight">Efektywność widmowa</h2>
  <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap"><span className="t1 font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-[1px] text-[12px] whitespace-nowrap">P1</span></span>
</div>

<p className="mb-[11px] text-red font-semibold"><b>Zadanie:</b> Wyznacz efektywność widmową wiedząc, że szybkość transmisji wynosi \(10\ \mathrm&#123;Gbit/s&#125;\), a szerokość pasma zajmowanego przez sygnał wynosi \(1\ \mathrm&#123;GHz&#125;\).</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Dane:</h3>
<ul className="mb-3 ml-5 list-disc">
  <li className="mb-1.5">Szybkość transmisji (przepływność): \(R_b = 10\ \mathrm&#123;Gbit/s&#125; = 10 \cdot 10^9\ \mathrm&#123;bit/s&#125;\)</li>
  <li className="mb-1.5">Szerokość pasma sygnału: \(B = 1\ \mathrm&#123;GHz&#125; = 1 \cdot 10^9\ \mathrm&#123;Hz&#125;\)</li>
</ul>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Wzór:</h3>
<div className="bg-ink2 border border-line border-l-[3px] border-l-amber rounded-lg px-4 py-2.5 my-3 overflow-x-auto">
  <span className="tag">(5.5.2)</span>
  \[\Gamma = \frac&#123;R_b&#125;&#123;B&#125;\ \mathrm&#123;\left[\frac&#123;bit/s&#125;&#123;Hz&#125;\right]&#125;\]
</div>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Obliczenia:</h3>
\[\Gamma = \frac&#123;10 \cdot 10^9\ \mathrm&#123;bit/s&#125;&#125;&#123;1 \cdot 10^9\ \mathrm&#123;Hz&#125;&#125; = \mathbf&#123;10\ \mathrm&#123;\frac&#123;bit/s&#125;&#123;Hz&#125;&#125;&#125;\]

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border border-line bg-green-dim/10 border-green-dim">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Odpowiedź</span>
  <p className="mb-[11px]">Efektywność widmowa tego łącza wynosi **10 (bit/s)/Hz**.</p>
</div>
</section>


<section className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-[26px]" id="t3">
<div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
  <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">5.5.3</span>
  <h2 className="text-[20.5px] font-semibold leading-tight">Maksymalna szybkość transmisji z efektywności widmowej</h2>
  <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap"><span className="t1 font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-[1px] text-[12px] whitespace-nowrap">P1</span></span>
</div>

<p className="mb-[11px] text-red font-semibold"><b>Zadanie:</b> Maksymalna efektywność widmowa wynosi \(14\ \mathrm&#123;bit/s/Hz&#125;\), szerokość pasma zajmowanego przez sygnał to \(714\ \mathrm&#123;MHz&#125;\). Wyznacz maksymalną szybkość transmisji w tym łączu.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Dane:</h3>
<ul className="mb-3 ml-5 list-disc">
  <li className="mb-1.5">Efektywność widmowa: \(\Gamma = 14\ \mathrm&#123;bit/s/Hz&#125;\)</li>
  <li className="mb-1.5">Szerokość pasma: \(B = 714\ \mathrm&#123;MHz&#125; = 714 \cdot 10^6\ \mathrm&#123;Hz&#125;\)</li>
</ul>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Wzór:</h3>
\[R_b = \Gamma \cdot B\]

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Obliczenia:</h3>
\[R_b = 14\ \mathrm&#123;\frac&#123;bit/s&#125;&#123;Hz&#125;&#125; \cdot 714 \cdot 10^6\ \mathrm&#123;Hz&#125; = 9\ 996 \cdot 10^6\ \mathrm&#123;bit/s&#125; = 9&#123;,&#125;996\ \mathrm&#123;Gbit/s&#125; \approx \mathbf&#123;10\ \mathrm&#123;Gbit/s&#125;&#125;\]

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border border-line bg-green-dim/10 border-green-dim">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Odpowiedź</span>
  <p className="mb-[11px]">Maksymalna szybkość transmisji w tym łączu wynosi **ok. 10 Gbit/s** (dokładnie 9,996 Gbit/s).</p>
</div>
</section>


<section className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-[26px]" id="t4">
<div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
  <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">5.5.4</span>
  <h2 className="text-[20.5px] font-semibold leading-tight">Maksymalna liczba kanałów WDM i całkowita przepływność</h2>
  <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap"><span className="t1 font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-[1px] text-[12px] whitespace-nowrap">P1</span> <span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-[1px] text-[12px] whitespace-nowrap" style={{ "background": "var(--red)" }}>DC</span></span>
</div>

<p className="mb-[11px] text-red font-semibold"><b>Zadanie:</b> W łączu światłowodowym zastosowano lasery przestrajalne w zakresie od \(1480\ \mathrm&#123;nm&#125;\) do \(1580\ \mathrm&#123;nm&#125;\) o mocy \(10\ \mathrm&#123;mW&#125;\) każdy. Odstęp między kanałami wynosi \(50\ \mathrm&#123;GHz&#125;\). Wyznacz maksymalną ilość kanałów w tym łączu. Jaka będzie całkowita przepływność tego łącza, jeżeli przepływność w każdym z kanałów wynosi \(100\ \mathrm&#123;Gb/s&#125;\)? Co możesz powiedzieć na temat tego łącza? Wymień zjawiska, które tu dominują, przeanalizuj podane parametry. Czy zmiana mocy wpłynie na działanie łącza?</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Dane:</h3>
<ul className="mb-3 ml-5 list-disc">
  <li className="mb-1.5">Zakres długości fal: \(\lambda_&#123;\mathrm&#123;min&#125;&#125; = 1480\ \mathrm&#123;nm&#125;\), \(\lambda_&#123;\mathrm&#123;max&#125;&#125; = 1580\ \mathrm&#123;nm&#125;\)</li>
  <li className="mb-1.5">Odstęp międzykanałowy: \(\Delta f_&#123;\mathrm&#123;ch&#125;&#125; = 50\ \mathrm&#123;GHz&#125; = 50 \cdot 10^9\ \mathrm&#123;Hz&#125;\)</li>
  <li className="mb-1.5">Przepływność kanału: \(B_&#123;\mathrm&#123;ch&#125;&#125; = 100\ \mathrm&#123;Gb/s&#125;\)</li>
  <li className="mb-1.5">Moc lasera na kanał: \(P_&#123;\mathrm&#123;ch&#125;&#125; = 10\ \mathrm&#123;mW&#125;\)</li>
  <li className="mb-1.5">Prędkość światła: \(c \approx 3 \cdot 10^8\ \mathrm&#123;m/s&#125;\)</li>
</ul>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Obliczenia:</h3>
<ol>
  <li className="mb-1.5">Wyznaczamy skrajne częstotliwości pasma:
    \[f_&#123;\mathrm&#123;min&#125;&#125; = \frac&#123;c&#125;&#123;\lambda_&#123;\mathrm&#123;max&#125;&#125;&#125; = \frac&#123;3 \cdot 10^8&#125;&#123;1580 \cdot 10^&#123;-9&#125;&#125; \approx 189&#123;,&#125;87 \cdot 10^&#123;12&#125;\ \mathrm&#123;Hz&#125; = 189&#123;,&#125;87\ \mathrm&#123;THz&#125;\]
    \[f_&#123;\mathrm&#123;max&#125;&#125; = \frac&#123;c&#125;&#123;\lambda_&#123;\mathrm&#123;min&#125;&#125;&#125; = \frac&#123;3 \cdot 10^8&#125;&#123;1480 \cdot 10^&#123;-9&#125;&#125; \approx 202&#123;,&#125;70 \cdot 10^&#123;12&#125;\ \mathrm&#123;Hz&#125; = 202&#123;,&#125;70\ \mathrm&#123;THz&#125;\]
  </li>
  <li className="mb-1.5">Obliczamy szerokość dostępnego pasma częstotliwości (\(\Delta f_&#123;\mathrm&#123;total&#125;&#125;\)):
    \[\Delta f_&#123;\mathrm&#123;total&#125;&#125; = f_&#123;\mathrm&#123;max&#125;&#125; - f_&#123;\mathrm&#123;min&#125;&#125; = 202&#123;,&#125;70\ \mathrm&#123;THz&#125; - 189&#123;,&#125;87\ \mathrm&#123;THz&#125; = 12&#123;,&#125;83\ \mathrm&#123;THz&#125; = 12\ 830\ \mathrm&#123;GHz&#125;\]
  </li>
  <li className="mb-1.5">Obliczamy maksymalną liczbę kanałów (\(N\)):
    \[N = \left\lfloor \frac&#123;\Delta f_&#123;\mathrm&#123;total&#125;&#125;&#125;&#123;\Delta f_&#123;\mathrm&#123;ch&#125;&#125;&#125; \right\rfloor + 1 = \left\lfloor \frac&#123;12\ 830&#125;&#123;50&#125; \right\rfloor + 1 = 256 + 1 = \mathbf&#123;257\ \mathrm&#123;kanałów&#125;&#125;\]
    *(W notatkach uproszczonych podawany jest wynik ok. 260 kanałów).*
  </li>
  <li className="mb-1.5">Obliczamy całkowitą przepustowość łącza (\(R_&#123;\mathrm&#123;total&#125;&#125;\)):
    \[R_&#123;\mathrm&#123;total&#125;&#125; = N \cdot B_&#123;\mathrm&#123;ch&#125;&#125; = 257 \cdot 100\ \mathrm&#123;Gb/s&#125; = 25\ 700\ \mathrm&#123;Gb/s&#125; = \mathbf&#123;25&#123;,&#125;7\ \mathrm&#123;Tb/s&#125;&#125;\]
    *(W notatkach uproszczonych: ok. 26 Tb/s).*
  </li>
</ol>

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border border-line bg-green-dim/10 border-green-dim">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Analiza Łącza i Wpływ Mocy</span>
  <ul className="mb-3 ml-5 list-disc">
    <li className="mb-1.5"><b>Zakres pracy:</b> Łącze obejmuje bardzo szeroki zakres widmowy (1480–1580 nm), co wykracza poza standardowe okno C (1530-1565 nm) i wchodzi w okno L oraz S. Jest to system **DWDM (Dense Wavelength Division Multiplexing)**.</li>
    <li className="mb-1.5"><b>Dominujące zjawisko:</b> Z powodu bardzo małego odstępu międzykanałowego (\(50\ \mathrm&#123;GHz&#125;\)) oraz olbrzymiej liczby kanałów (ponad 250), dominującym zagrożeniem nieliniowym jest **mieszanie czterofalowe (FWM – Four Wave Mixing)**. Generuje ono fale pasożytnicze, które nakładają się na istniejące kanały i pogarszają stosunek sygnał/szum (OSNR).</li>
    <li className="mb-1.5"><b>Ocena mocy laserów:</b> Moc laserów na poziomie **10 mW** (10 dBm) jest wartością optymalną — wystarczająco wysoką do pokonania tłumienia światłowodu, ale na tyle niską, że zjawiska nieliniowe (FWM) nie niszczą całkowicie transmisji.</li>
    <li className="mb-1.5"><b>Wpływ zmiany mocy:</b> Zwiększenie mocy laserów (np. do 20-50 mW) drastycznie zwiększyłoby wydajność generacji FWM, co doprowadziłoby do drastycznego wzrostu bitowej stopy błędów (BER) i zakłócenia pracy łącza. Z kolei spadek mocy ograniczyłby FWM, ale zmniejszyłby zasięg łącza ze względu na tłumienie (budżet mocy).</li>
  </ul>
</div>
</section>


<section className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-[26px]" id="t5">
<div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
  <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">5.5.5</span>
  <h2 className="text-[20.5px] font-semibold leading-tight">Liczba fal z mieszania czterofalowego (FWM) dla 2, 4 i 8 kanałów</h2>
  <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap"><span className="t1 font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-[1px] text-[12px] whitespace-nowrap">P1</span> <span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-[1px] text-[12px] whitespace-nowrap" style={{ "background": "var(--red)" }}>DC</span></span>
</div>

<p className="mb-[11px] text-red font-semibold"><b>Zadanie:</b> Oblicz liczbę fal powstałych w wyniku zjawiska mieszania czterofalowego dla 2, 4 i 8 kanałów. Naszkicuj wykres przedstawiający liczbę nowopowstałych fal w zależności od ilości kanałów.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Wzór:</h3>
<p className="mb-[11px]">Liczba produktów mieszania czterofalowego (nowych fal) \(L\) w funkcji liczby kanałów wejściowych \(N\) wynosi:</p>
<div className="bg-ink2 border border-line border-l-[3px] border-l-amber rounded-lg px-4 py-2.5 my-3 overflow-x-auto">
  <span className="tag">(5.5.5)</span>
  \[L = \frac&#123;N^2(N - 1)&#125;&#123;2&#125;\]
</div>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Obliczenia:</h3>
<ol>
  <li className="mb-1.5"><b>Dla \(N = 2\) kanałów:</b>
    \[L_2 = \frac&#123;2^2(2 - 1)&#125;&#123;2&#125; = \frac&#123;4 \cdot 1&#125;&#123;2&#125; = \mathbf&#123;2\ \mathrm&#123;nowe\ fale&#125;&#125;\]
    *(Są to składowe intermodulacyjne trzeciego rzędu o częstotliwościach: \(2f_1 - f_2\) oraz \(2f_2 - f_1\)).*
  </li>
  <li className="mb-1.5"><b>Dla \(N = 4\) kanałów:</b>
    \[L_4 = \frac&#123;4^2(4 - 1)&#125;&#123;2&#125; = \frac&#123;16 \cdot 3&#125;&#123;2&#125; = \mathbf&#123;24\ \mathrm&#123;nowe\ fale&#125;&#125;\]
  </li>
  <li className="mb-1.5"><b>Dla \(N = 8\) kanałów:</b>
    \[L_8 = \frac&#123;8^2(8 - 1)&#125;&#123;2&#125; = \frac&#123;64 \cdot 7&#125;&#123;2&#125; = \mathbf&#123;224\ \mathrm&#123;nowe\ fale&#125;&#125;\]
  </li>
</ol>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Zależność graficzna (Charakterystyka \(L(N)\)):</h3>
<p className="mb-[11px]">Liczba fal rośnie w przybliżeniu sześciennie wraz ze wzrostem liczby kanałów (\(L \propto N^3\)). Poniższa tabela i wykres ilustrują tę zależność:</p>

<table className="w-full border-collapse my-3 text-[14.5px]">
  <tbody><tr>
    <th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-[0.05em]">Liczba kanałów (\(N\))</th>
    <td className="border border-line px-2.5 py-1.5 text-left">2</td>
    <td className="border border-line px-2.5 py-1.5 text-left">3</td>
    <td className="border border-line px-2.5 py-1.5 text-left">4</td>
    <td className="border border-line px-2.5 py-1.5 text-left">5</td>
    <td className="border border-line px-2.5 py-1.5 text-left">6</td>
    <td className="border border-line px-2.5 py-1.5 text-left">7</td>
    <td className="border border-line px-2.5 py-1.5 text-left">8</td>
  </tr>
  <tr>
    <th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-[0.05em]">Liczba fal FWM (\(L\))</th>
    <td className="border border-line px-2.5 py-1.5 text-left text-green"><b>2</b></td>
    <td className="border border-line px-2.5 py-1.5 text-left">9</td>
    <td className="border border-line px-2.5 py-1.5 text-left text-green"><b>24</b></td>
    <td className="border border-line px-2.5 py-1.5 text-left">50</td>
    <td className="border border-line px-2.5 py-1.5 text-left">90</td>
    <td className="border border-line px-2.5 py-1.5 text-left">147</td>
    <td className="border border-line px-2.5 py-1.5 text-left text-green"><b>224</b></td>
  </tr>
</tbody></table>

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border border-line bg-blue/10 border-[#34465f]">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Wykres zależności liczby fal FWM od liczby kanałów</span>
  <div style={{ "fontFamily": "var(--mono)", "fontSize": "12px", "color": "var(--muted)", "textAlign": "center", "background": "var(--ink2)", "padding": "15px", "borderRadius": "8px", "border": "1px solid var(--line)" }}>
    <pre style={{ "lineHeight": "1.2", "fontSize": "11px" }}> Liczba fal FWM (L)
   ^
250|                                                     * (8, 224)
   |
200|
   |
150|                                               *
   |
100|                                         *
   |
 50|                                   *
   |                             * (4, 24)
  0+-------------------------------------------------------&gt;
   0     1     2     3     4     5     6     7     8    Liczba kanałów (N)
    </pre>
  </div>
</div>

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border border-line bg-red/10 border-[#7d3a3a]">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">⚠️ Pułapka Egzaminacyjna (DC)</span>
  <p className="mb-[11px]">Prowadząca może zapytać, co w praktyce oznacza ta zależność. Ponieważ dla \(N = 8\) mamy już aż 224 fale pasożytnicze, w systemach o równej siatce kanałów (równych odstępach) produkty FWM trafiają **dokładnie w częstotliwości sygnałów użytecznych**. Blokuje to możliwość poprawnego odbioru. Rozwiązaniem jest stosowanie nierównomiernego odstępu między kanałami lub światłowodów o niezerowej dyspersji chromatycznej (np. G.655 / NZ-DSF), co niszczy warunek synchronizmu fazowego fali i gasi FWM.</p>
</div>
</section>

<footer className="text-center text-muted font-mono text-[11px] mt-9">FPTiTI · Zadania obliczeniowe cz. 3 · powtórka przed egzaminem · powodzenia! 💪</footer>
</div>
    



    </>
  );
}

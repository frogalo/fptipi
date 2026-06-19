import React, { useEffect } from 'react';
import rys_3_9 from '../../assets/rys_3_9.png';

export default function Zadania1() {

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);



  return (
    <>
      
<div className="max-w-[880px] mx-auto">

<header className="mb-6 border border-line bg-gradient-to-br from-panel to-ink2 rounded-[14px] px-6 py-[22px]">
  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-amber">FPTiTI · zadania obliczeniowe · część 1 / 3</div>
  <h1 className="text-[27px] font-semibold mt-1.5 mb-1">Rozdział 3: Propagacja i zjawiska falowe</h1>
  <div className="text-muted text-[14.5px]">Zadania z rozwiązaniami krok po kroku · na podstawie podręcznika A. Szymańskiej</div>
</header>

<nav className="flex flex-wrap gap-2 my-[18px] mb-[30px]">
  <a href="#t1" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">3.5.1 · Odległość widoczności</a>
  <a href="#t2" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">3.5.2 · Natężenie pola E</a>
  <a href="#t3" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">3.5.3 · Strefy Fresnela</a>
  <a href="#t4" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">3.5.4 · Tłumienie troposferyczne</a>
</nav>


<section className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-[26px]" id="t1">
<div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
  <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">3.5.1</span>
  <h2 className="text-[20.5px] font-semibold leading-tight">Graniczna odległość bezpośredniej widoczności (troposfera)</h2>
  <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap"><span className="t1 font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-[1px] text-[12px] whitespace-nowrap">P1</span></span>
</div>

<p className="mb-[11px] text-red font-semibold"><b>Zadanie:</b> Znając wysokość anten \(H_N = 25\ \mathrm&#123;m&#125;\) oraz \(H_O = 49\ \mathrm&#123;m&#125;\), wyznacz graniczną odległość bezpośredniej widoczności pomiędzy nadajnikiem a odbiornikiem dla fali propagującej się w troposferze.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Dane:</h3>
<ul className="mb-3 ml-5 list-disc">
  <li className="mb-1.5">Wysokość anteny nadawczej: \(H_N = 25\ \mathrm&#123;m&#125;\)</li>
  <li className="mb-1.5">Wysokość anteny odbiorczej: \(H_O = 49\ \mathrm&#123;m&#125;\)</li>
  <li className="mb-1.5">Średni promień Ziemi: \(R_Z \approx 6371\ \mathrm&#123;km&#125; = 6\ 371\ 000\ \mathrm&#123;m&#125;\)</li>
</ul>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Wzór:</h3>
<div className="bg-ink2 border border-line border-l-[3px] border-l-amber rounded-lg px-4 py-2.5 my-3 overflow-x-auto">
  <span className="tag">(3.5.1)</span>
  \[d_0 = \sqrt&#123;2 R_Z&#125; \left( \sqrt&#123;H_N&#125; + \sqrt&#123;H_O&#125; \right)\]
</div>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Obliczenia krok po kroku:</h3>
<ol>
  <li className="mb-1.5">Wyznaczamy pierwiastki z wysokości anten:
    \[\sqrt&#123;H_N&#125; = \sqrt&#123;25&#125; = 5\ \mathrm&#123;m^&#123;1/2&#125;&#125;\]
    \[\sqrt&#123;H_O&#125; = \sqrt&#123;49&#125; = 7\ \mathrm&#123;m^&#123;1/2&#125;&#125;\]
  </li>
  <li className="mb-1.5">Obliczamy sumę pierwiastków:
    \[\sqrt&#123;H_N&#125; + \sqrt&#123;H_O&#125; = 5 + 7 = 12\]
  </li>
  <li className="mb-1.5">Obliczamy czynnik pierwiastkowy z promienia Ziemi:
    \[\sqrt&#123;2 R_Z&#125; = \sqrt&#123;2 \cdot 6\ 371\ 000&#125; = \sqrt&#123;12\ 742\ 000&#125; \approx 3569&#123;,&#125;59\ \mathrm&#123;m^&#123;1/2&#125;&#125;\]
  </li>
  <li className="mb-1.5">Podstawiamy dane do wzoru końcowego:
    \[d_0 = 3569&#123;,&#125;59 \cdot 12 \approx 42\ 835\ \mathrm&#123;m&#125; \approx 42&#123;,&#125;8\ \mathrm&#123;km&#125;\]
  </li>
</ol>

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border border-line bg-green-dim/10 border-green-dim">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Odpowiedź i Wnioski</span>
  <p className="mb-[11px]">Graniczna odległość bezpośredniej widoczności (horyzont radiowy) dla tych anten wynosi <b>ok. 43 000 m (42,8 km)</b>.</p>
</div>
</section>


<section className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-[26px]" id="t2">
<div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
  <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">3.5.2</span>
  <h2 className="text-[20.5px] font-semibold leading-tight">Natężenie pola elektrycznego przy znanej gęstości mocy</h2>
  <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap"><span className="t1 font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-[1px] text-[12px] whitespace-nowrap">P1</span></span>
</div>

<p className="mb-[11px] text-red font-semibold"><b>Zadanie:</b> Wyznacz natężenie pola elektrycznego sygnału docierającego do odbiornika wiedząc, że odległość między antenami wynosi \(R\), a powierzchniowa gęstość mocy anteny nadawczej wynosi \(S\).</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Wyprowadzenie wzoru krok po kroku:</h3>
<p className="mb-[11px]">W wolnej przestrzeni natężenie pola elektrycznego \(E\) wiąże się z mocą wypromieniowaną przez nadajnik \(P_S\) i zyskiem anteny nadawczej \(G_N\) wzorem:</p>
<div className="bg-ink2 border border-line border-l-[3px] border-l-amber rounded-lg px-4 py-2.5 my-3 overflow-x-auto">
  <span className="tag">(3.5.2a)</span>
  \[E = \frac&#123;\sqrt&#123;60 \cdot P_S \cdot G_N&#125;&#125;&#123;R&#125;\]
</div>

<p className="mb-[11px]">Gęstość powierzchniowa mocy \(S\) w odległości \(R\) od anteny izotropowej o mocy \(P_S\) i zysku \(G_N\) wynosi:</p>
<div className="bg-ink2 border border-line border-l-[3px] border-l-amber rounded-lg px-4 py-2.5 my-3 overflow-x-auto">
  <span className="tag">(3.5.2b)</span>
  \[S = \frac&#123;P_S \cdot G_N&#125;&#123;4\pi R^2&#125;\]
</div>

<p className="mb-[11px]">Z powyższego wzoru na gęstość mocy wyznaczamy iloczyn \(P_S \cdot G_N\):</p>
\[P_S \cdot G_N = S \cdot 4\pi R^2\]

<p className="mb-[11px]">Podstawiamy to wyrażenie do wzoru na natężenie pola elektrycznego \(E\):</p>
\[E = \frac&#123;\sqrt&#123;60 \cdot \left( S \cdot 4\pi R^2 \right)&#125;&#125;&#123;R&#125;\]
\[E = \frac&#123;\sqrt&#123;240\pi S \cdot R^2&#125;&#125;&#123;R&#125;\]
\[E = \frac&#123;R \sqrt&#123;240\pi S&#125;&#125;&#123;R&#125;\]

<p className="mb-[11px]">Promień \(R\) w liczniku i mianowniku upraszcza się:</p>
\[E = \sqrt&#123;240\pi S&#125;\]

<p className="mb-[11px]">Wyciągamy czynnik \(16\) przed pierwiastek (\(240 = 16 \cdot 15\)):</p>
\[E = \sqrt&#123;16 \cdot 15\pi S&#125; = 4\sqrt&#123;15\pi S&#125;\]

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border border-line bg-green-dim/10 border-green-dim">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Wniosek Końcowy</span>
  <p className="mb-[11px]">Wzór na natężenie pola elektrycznego przy znanej gęstości mocy \(S\) i odległości \(R\) ma postać:</p>
  <div className="bg-ink2 border border-line border-l-[3px] border-l-amber rounded-lg px-4 py-2.5 my-3 overflow-x-auto">
    \[E = 4\sqrt&#123;15\pi S&#125;\ \left[\mathrm&#123;\frac&#123;V&#125;&#123;m&#125;&#125;\right]\]
  </div>
  <p className="mb-[11px]">Warto zauważyć, że ostateczne natężenie pola elektrycznego \(E\) <b>nie zależy od odległości \(R\) bezpośrednio</b>, ponieważ gęstość mocy \(S\) już uwzględnia rozbieżność geometryczną fali (spada jak \(1/R^2\)).</p>
</div>
</section>


<section className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-[26px]" id="t3">
<div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
  <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">3.5.3</span>
  <h2 className="text-[20.5px] font-semibold leading-tight">Promień 1. i 2. strefy Fresnela</h2>
  <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap"><span className="t1 font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-[1px] text-[12px] whitespace-nowrap">P1</span></span>
</div>

<p className="mb-[11px] text-red font-semibold"><b>Zadanie:</b> Wyznacz promień pierwszej i drugiej strefy Fresnela, znając częstotliwość fali \(f = 2412\ \mathrm&#123;MHz&#125;\), odległość między nadajnikiem a odbiornikiem \(D = 200\ \mathrm&#123;m&#125;\) oraz odległość przeszkody od nadajnika \(d = 50\ \mathrm&#123;m&#125;\).</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Dane:</h3>
<ul className="mb-3 ml-5 list-disc">
  <li className="mb-1.5">Częstotliwość fali: \(f = 2412\ \mathrm&#123;MHz&#125; = 2&#123;,&#125;412 \cdot 10^9\ \mathrm&#123;Hz&#125;\)</li>
  <li className="mb-1.5">Całkowita odległość: \(D = 200\ \mathrm&#123;m&#125;\)</li>
  <li className="mb-1.5">Odległość od nadajnika: \(d_1 = d = 50\ \mathrm&#123;m&#125;\)</li>
  <li className="mb-1.5">Odległość od odbiornika: \(d_2 = D - d_1 = 200 - 50 = 150\ \mathrm&#123;m&#125;\)</li>
  <li className="mb-1.5">Prędkość światła: \(c \approx 3 \cdot 10^8\ \mathrm&#123;m/s&#125;\)</li>
</ul>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Wzór:</h3>
<div className="bg-ink2 border border-line border-l-[3px] border-l-amber rounded-lg px-4 py-2.5 my-3 overflow-x-auto">
  <span className="tag">(3.5.3)</span>
  \[F_n = \sqrt&#123;\frac&#123;n \cdot \lambda \cdot d_1 \cdot d_2&#125;&#123;d_1 + d_2&#125;&#125;\]
</div>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Obliczenia:</h3>
<ol>
  <li className="mb-1.5">Obliczamy długość fali \(\lambda\):
    \[\lambda = \frac&#123;c&#125;&#123;f&#125; = \frac&#123;3 \cdot 10^8&#125;&#123;2&#123;,&#125;412 \cdot 10^9&#125; \approx 0&#123;,&#125;1244\ \mathrm&#123;m&#125;\]
  </li>
  <li className="mb-1.5">Obliczamy promień pierwszej strefy Fresnela (\(n = 1\)):
    \[F_1 = \sqrt&#123;\frac&#123;1 \cdot 0&#123;,&#125;1244 \cdot 50 \cdot 150&#125;&#123;200&#125;&#125; = \sqrt&#123;\frac&#123;0&#123;,&#125;1244 \cdot 7500&#125;&#123;200&#125;&#125; = \sqrt&#123;\frac&#123;933&#125;&#123;200&#125;&#125; = \sqrt&#123;4&#123;,&#125;665&#125; \approx 2&#123;,&#125;16\ \mathrm&#123;m&#125;\]
  </li>
  <li className="mb-1.5">Obliczamy promień drugiej strefy Fresnela (\(n = 2\)):
    \[F_2 = \sqrt&#123;\frac&#123;2 \cdot 0&#123;,&#125;1244 \cdot 50 \cdot 150&#125;&#123;200&#125;&#125; = \sqrt&#123;2&#125; \cdot F_1 \approx 1&#123;,&#125;4142 \cdot 2&#123;,&#125;16 \approx 3&#123;,&#125;05\ \mathrm&#123;m&#125;\]
  </li>
</ol>

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border border-line bg-green-dim/10 border-green-dim">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Odpowiedź</span>
  <p className="mb-[11px]">Promień pierwszej strefy Fresnela wynosi <b>ok. 2,16 m</b>, a drugiej <b>ok. 3,05 m</b>.</p>
</div>
</section>


<section className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-[26px]" id="t4">
<div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
  <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">3.5.4</span>
  <h2 className="text-[20.5px] font-semibold leading-tight">Tłumienie atmosferyczne dla \(\lambda = 0,5\ \mathrm&#123;cm&#125;\)</h2>
  <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap"><span className="t1 font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-[1px] text-[12px] whitespace-nowrap">P1</span> <span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-[1px] text-[12px] whitespace-nowrap" style={{ "background": "var(--red)" }}>DC</span></span>
</div>

<p className="mb-[11px] text-red font-semibold"><b>Zadanie:</b> Odległość pomiędzy nadajnikiem i odbiornikiem wynosi \(1500\ \mathrm&#123;m&#125;\). Moc nadajnika wynosi \(10\ \mathrm&#123;mW&#125;\) (\(10\ \mathrm&#123;dBm&#125;\)), długość fali wynosi \(0&#123;,&#125;5\ \mathrm&#123;cm&#125;\). O ile \(\mathrm&#123;dB&#125;\) zostanie stłumiony sygnał na tej drodze? Potrzebne dane odczytaj z Rys. 3.9. Rozpatrz dwa przypadki dla: a) \(0\ \mathrm&#123;m&#125;\) n.p.m. i b) \(4\ \mathrm&#123;km&#125;\) n.p.m. Ile razy zmniejszy się moc sygnału w obydwu przypadkach? Jaki czynnik ma tu decydujący wpływ na wartość tłumienia?</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Dane wejściowe:</h3>
<ul className="mb-3 ml-5 list-disc">
  <li className="mb-1.5">Długość toru propagacji: \(L = 1500\ \mathrm&#123;m&#125; = 1&#123;,&#125;5\ \mathrm&#123;km&#125;\)</li>
  <li className="mb-1.5">Moc nadajnika: \(P_S = 10\ \mathrm&#123;mW&#125; = 10\ \mathrm&#123;dBm&#125;\)</li>
  <li className="mb-1.5">Długość fali: \(\lambda = 0&#123;,&#125;5\ \mathrm&#123;cm&#125; = 0&#123;,&#125;005\ \mathrm&#123;m&#125;\)</li>
</ul>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Określenie częstotliwości:</h3>
\[f = \frac&#123;c&#125;&#123;\lambda&#125; = \frac&#123;3 \cdot 10^8\ \mathrm&#123;m/s&#125;&#125;&#123;0&#123;,&#125;005\ \mathrm&#123;m&#125;&#125; = 60 \cdot 10^9\ \mathrm&#123;Hz&#125; = 60\ \mathrm&#123;GHz&#125;\]

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Odczyt z wykresu (Rys. 3.9):</h3>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]">
  <img src={rys_3_9} alt="Wykres tłumienia atmosferycznego w funkcji częstotliwości"/>
  <figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rys. 3.9: Tłumienie atmosferyczne dla fal EM. Na częstotliwości 60 GHz widoczny jest potężny rezonans absorpcyjny tlenu \(O_2\).</figcaption>
</figure>

<p className="mb-[11px]">Dla częstotliwości \(60\ \mathrm&#123;GHz&#125;\) odczytujemy współczynniki tłumienia jednostkowego \(\alpha\):</p>
<ul className="mb-3 ml-5 list-disc">
  <li className="mb-1.5"><b>a) Na poziomie morza (0 m n.p.m.):</b> \(\alpha_a \approx 12\ \mathrm&#123;dB/km&#125;\) (punkt <i>a</i> na zielonej linii)</li>
  <li className="mb-1.5"><b>b) Na wysokości 4 km n.p.m.:</b> \(\alpha_b \approx 2\ \mathrm&#123;dB/km&#125;\) (punkt <i>b</i> na czerwonej linii)</li>
</ul>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Obliczenie całkowitego tłumienia (\(A = \alpha \cdot L\)) i spadek mocy:</h3>

<h4>Przypadek a) Na poziomie morza (0 m n.p.m.)</h4>
<ul className="mb-3 ml-5 list-disc">
  <li className="mb-1.5">Tłumienie:
    \[A_a = 12\ \mathrm&#123;dB/km&#125; \cdot 1&#123;,&#125;5\ \mathrm&#123;km&#125; = 18\ \mathrm&#123;dB&#125;\]
  </li>
  <li className="mb-1.5">Stosunek mocy nadanej do odebranej (liniowo):
    \[\frac&#123;P_&#123;\mathrm&#123;nad&#125;&#125;&#125;&#123;P_&#123;\mathrm&#123;odb&#125;&#125;&#125; = 10^&#123;\frac&#123;A_a&#125;&#123;10&#125;&#125; = 10^&#123;1&#123;,&#125;8&#125; \approx 63&#123;,&#125;1\ \mathrm&#123;razy&#125;\]
    Możemy to również oszacować pamiętając, że \(3\ \mathrm&#123;dB&#125;\) to dwukrotna zmiana:
    \[18\ \mathrm&#123;dB&#125; = 6 \cdot 3\ \mathrm&#123;dB&#125; \implies 2^6 = 64\ \mathrm&#123;razy&#125;\]
  </li>
</ul>

<h4>Przypadek b) Na wysokości 4 km n.p.m.</h4>
<ul className="mb-3 ml-5 list-disc">
  <li className="mb-1.5">Tłumienie:
    \[A_b = 2\ \mathrm&#123;dB/km&#125; \cdot 1&#123;,&#125;5\ \mathrm&#123;km&#125; = 3\ \mathrm&#123;dB&#125;\]
  </li>
  <li className="mb-1.5">Stosunek mocy nadanej do odebranej:
    \[\frac&#123;P_&#123;\mathrm&#123;nad&#125;&#125;&#125;&#123;P_&#123;\mathrm&#123;odb&#125;&#125;&#125; = 10^&#123;\frac&#123;A_b&#125;&#123;10&#125;&#125; = 10^&#123;0&#123;,&#125;3&#125; \approx 2\ \mathrm&#123;razy&#125;\]
  </li>
</ul>

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border border-line bg-red/10 border-[#7d3a3a]">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">⚠️ Pułapka Egzaminacyjna (DC)</span>
  <p className="mb-[11px]">Prowadząca bardzo pilnuje, aby poprawnie wskazać czynnik tłumiący dla danej częstotliwości. Dla częstotliwości <b>60 GHz</b> decydującym czynnikiem jest **rezonans absorpcyjny cząsteczek tlenu (\(O_2\))**. Nie wolno pomylić go z rezonansem pary wodnej (\(H_2O\)), który występuje przy innych częstotliwościach (np. ok. 22 GHz oraz 183 GHz).</p>
</div>

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border border-line bg-green-dim/10 border-green-dim">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Podsumowanie i Wnioski</span>
  <ul className="mb-3 ml-5 list-disc">
    <li className="mb-1.5">Na poziomie morza sygnał zostanie stłumiony o <b>18 dB</b>, co oznacza, że jego moc zmniejszy się **ok. 64 razy**.</li>
    <li className="mb-1.5">Na wysokości 4 km n.p.m. sygnał zostanie stłumiony o zaledwie <b>3 dB</b>, co oznacza, że jego moc zmniejszy się **2 razy**.</li>
    <li className="mb-1.5">Decydujący wpływ na tak wysokie tłumienie przy 60 GHz ma <b>absorpcja molekularna tlenu (\(O_2\))</b>. Różnica między przypadkiem (a) i (b) wynika z faktu, że wraz ze wzrostem wysokości gęstość powietrza (a więc i stężenie tlenu) drastycznie maleje.</li>
  </ul>
</div>
</section>

<footer className="text-center text-muted font-mono text-[11px] mt-9">FPTiTI · Zadania obliczeniowe cz. 1 · powtórka przed egzaminem · powodzenia! 💪</footer>
</div>
    



    </>
  );
}

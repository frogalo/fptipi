import React, { useEffect } from 'react';
import Footer from '../../components/Footer';

export default function Zadania2() {

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);



  return (
    <>
      
<div className="max-w-[880px] mx-auto">

<header className="mb-6 border border-line bg-linear-to-br from-panel to-ink2 rounded-[14px] px-6 py-[22px]">
  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-amber">FPTiTI · zadania obliczeniowe · część 2 / 3</div>
  <h1 className="text-[27px] font-semibold mt-1.5 mb-1">Rozdział 4: Technika światłowodowa</h1>
  <div className="text-muted text-[14.5px]">Zadania z rozwiązaniami krok po kroku · na podstawie podręcznika A. Szymańskiej</div>
</header>

<nav className="flex flex-wrap gap-2 my-[18px] mb-[30px]">
  <a href="#t1" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">4.6.1 · Liczba modów</a>
  <a href="#t2" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">4.6.2 · Dyspersja międzymodowa</a>
  <a href="#t3" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">4.6.3 · Maksymalna długość łącza</a>
  <a href="#t4" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">4.6.4 · Wpływ profilu, λ i mocy</a>
  <a href="#t5" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">4.6.5 · Minimalna moc lasera (150 km)</a>
  <a href="#t6" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">4.6.6 · Minimalna czułość odbiornika</a>
</nav>


<section className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-[26px]" id="t1">
<div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
  <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">4.6.1</span>
  <h2 className="text-[20.5px] font-semibold leading-tight">Liczba modów w światłowodzie o profilu skokowym</h2>
  <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap"><span className="t1 font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[12px] whitespace-nowrap">P1</span></span>
</div>

<p className="mb-[11px] text-red font-semibold"><b>Zadanie:</b> Wyznacz liczbę modów propagujących się w światłowodzie o profilu skokowym, znając następujące parametry: średnica rdzenia \(2a = 50\ \mathrm&#123;\mu m&#125;\), współczynnik załamania rdzenia \(n_1 = 1&#123;,&#125;46\), współczynnik załamania płaszcza \(n_2 = 1&#123;,&#125;44\), długość fali \(\lambda = 1300\ \mathrm&#123;nm&#125;\).</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Dane:</h3>
<ul className="mb-3 ml-5 list-disc">
  <li className="mb-1.5">Średnica rdzenia: \(2a = 50\ \mathrm&#123;\mu m&#125; \implies a = 25\ \mathrm&#123;\mu m&#125; = 25 \cdot 10^&#123;-6&#125;\ \mathrm&#123;m&#125;\)</li>
  <li className="mb-1.5">Współczynniki załamania: \(n_1 = 1&#123;,&#125;46\), \(n_2 = 1&#123;,&#125;44\)</li>
  <li className="mb-1.5">Długość fali: \(\lambda = 1300\ \mathrm&#123;nm&#125; = 1&#123;,&#125;3 \cdot 10^&#123;-6&#125;\ \mathrm&#123;m&#125;\)</li>
</ul>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Wzory:</h3>
<p className="mb-[11px]">Częstotliwość znormalizowana (parametr \(V\)):</p>
<div className="bg-ink2 border border-line border-l-[3px] border-l-amber rounded-lg px-4 py-2.5 my-3 overflow-x-auto">
  <span className="tag">(4.6.1a)</span>
  \[V = \frac&#123;2\pi a&#125;&#123;\lambda&#125; \sqrt&#123;n_1^2 - n_2^2&#125;\]
</div>

<p className="mb-[11px]">Przybliżona liczba modów \(M\) dla profilu skokowego (gdy \(V \gg 1\)):</p>
<div className="bg-ink2 border border-line border-l-[3px] border-l-amber rounded-lg px-4 py-2.5 my-3 overflow-x-auto">
  <span className="tag">(4.6.1b)</span>
  \[M \approx \frac&#123;V^2&#125;&#123;2&#125;\]
</div>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Obliczenia:</h3>
<ol>
  <li className="mb-1.5">Obliczamy kontrast współczynników załamania (aperturę numeryczną \(NA = \sqrt&#123;n_1^2 - n_2^2&#125;\)):
    \[NA = \sqrt&#123;1&#123;,&#125;46^2 - 1&#123;,&#125;44^2&#125; = \sqrt&#123;2&#123;,&#125;1316 - 2&#123;,&#125;0736&#125; = \sqrt&#123;0&#123;,&#125;058&#125; \approx 0&#123;,&#125;2408\]
  </li>
  <li className="mb-1.5">Obliczamy parametr \(V\):
    \[V = \frac&#123;2\pi \cdot 25 \cdot 10^&#123;-6&#125;&#125;&#123;1&#123;,&#125;3 \cdot 10^&#123;-6&#125;&#125; \cdot 0&#123;,&#125;2408 \approx 38&#123;,&#125;46 \cdot 0&#123;,&#125;2408 \approx 9&#123;,&#125;26\pi \approx 29&#123;,&#125;09\]
  </li>
  <li className="mb-1.5">Podnosimy parametr \(V\) do kwadratu:
    \[V^2 \approx 29&#123;,&#125;09^2 \approx 846&#123;,&#125;2\]
  </li>
  <li className="mb-1.5">Obliczamy liczbę modów \(M\):
    \[M \approx \frac&#123;846&#123;,&#125;2&#125;&#123;2&#125; \approx 423\]
  </li>
</ol>

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border bg-green-dim/10 border-green-dim">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Odpowiedź</span>
  <p className="mb-[11px]">Liczba modów propagujących się w tym światłowodzie wynosi **ok. 423**.</p>
</div>
</section>


<section className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-[26px]" id="t2">
<div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
  <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">4.6.2</span>
  <h2 className="text-[20.5px] font-semibold leading-tight">Szerokość impulsu po propagacji na L = 10 km</h2>
  <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap"><span className="t1 font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[12px] whitespace-nowrap">P1</span></span>
</div>

<p className="mb-[11px] text-red font-semibold"><b>Zadanie:</b> Wyznacz szerokość impulsu po propagacji na odległość \(L = 10\ \mathrm&#123;km&#125;\) (poszerzenie impulsu na skutek dyspersji międzymodowej), znając współczynnik załamania rdzenia i płaszcza światłowodu \(n_1 = 1&#123;,&#125;46\), \(n_2 = 1&#123;,&#125;44\).</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Dane:</h3>
<ul className="mb-3 ml-5 list-disc">
  <li className="mb-1.5">Długość światłowodu: \(L = 10\ \mathrm&#123;km&#125; = 10\ 000\ \mathrm&#123;m&#125;\)</li>
  <li className="mb-1.5">Współczynniki załamania: \(n_1 = 1&#123;,&#125;46\), \(n_2 = 1&#123;,&#125;44\)</li>
  <li className="mb-1.5">Prędkość światła w próżni: \(c \approx 3 \cdot 10^8\ \mathrm&#123;m/s&#125;\)</li>
</ul>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Wzory i definicje:</h3>
<p className="mb-[11px]">Prędkość światła w rdzeniu światłowodu (\(c_1\)):</p>
\[c_1 = \frac&#123;c&#125;&#123;n_1&#125; \approx \frac&#123;3 \cdot 10^8&#125;&#123;1&#123;,&#125;46&#125; \approx 2&#123;,&#125;055 \cdot 10^8\ \mathrm&#123;m/s&#125;\]

<p className="mb-[11px]">Względna różnica współczynników załamania (\(\Delta\)):</p>
\[\Delta = \frac&#123;n_1 - n_2&#125;&#123;n_1&#125; = \frac&#123;1&#123;,&#125;46 - 1&#123;,&#125;44&#125;&#123;1&#123;,&#125;46&#125; \approx 0&#123;,&#125;0137\]

<h4>1) Profil skokowy:</h4>
<div className="bg-ink2 border border-line border-l-[3px] border-l-amber rounded-lg px-4 py-2.5 my-3 overflow-x-auto">
  <span className="tag">(4.6.2a)</span>
  \[\sigma_\tau \approx \frac&#123;L&#125;&#123;c_1&#125;\Delta = \frac&#123;L (n_1 - n_2)&#125;&#123;c&#125;\]
</div>

<h4>2) Profil gradientowy:</h4>
<div className="bg-ink2 border border-line border-l-[3px] border-l-amber rounded-lg px-4 py-2.5 my-3 overflow-x-auto">
  <span className="tag">(4.6.2b)</span>
  \[\sigma_\tau \approx \frac&#123;L&#125;&#123;2c_1&#125;\Delta^2 = \frac&#123;L (n_1 - n_2)^2&#125;&#123;2c \cdot n_1&#125;\]
</div>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Obliczenia krok po kroku:</h3>

<h4>Dla profilu skokowego:</h4>
\[\sigma_\tau \approx \frac&#123;10\ 000 \cdot (1&#123;,&#125;46 - 1&#123;,&#125;44)&#125;&#123;3 \cdot 10^8&#125; = \frac&#123;10\ 000 \cdot 0&#123;,&#125;02&#125;&#123;3 \cdot 10^8&#125; = \frac&#123;200&#125;&#123;3 \cdot 10^8&#125; \approx 6&#123;,&#125;67 \cdot 10^&#123;-7&#125;\ \mathrm&#123;s&#125; = 667\ \mathrm&#123;ns&#125;\]

<h4>Dla profilu gradientowego:</h4>
\[\sigma_\tau \approx \frac&#123;10\ 000 \cdot (1&#123;,&#125;46 - 1&#123;,&#125;44)^2&#125;&#123;2 \cdot 3 \cdot 10^8 \cdot 1&#123;,&#125;46&#125; = \frac&#123;10\ 000 \cdot 0&#123;,&#125;0004&#125;&#123;8&#123;,&#125;76 \cdot 10^8&#125; = \frac&#123;4&#125;&#123;8&#123;,&#125;76 \cdot 10^8&#125; \approx 4&#123;,&#125;57 \cdot 10^&#123;-9&#125;\ \mathrm&#123;s&#125; = 4&#123;,&#125;57\ \mathrm&#123;ns&#125;\]

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border bg-red/10 border-[#7d3a3a]">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">⚠️ Korekta jednostki w notatkach studentów</span>
  <p className="mb-[11px]">W studenckich opracowaniach odręcznych dla profilu skokowego pojawia się błędny zapis: <code>0,6 um (mikrometry) albo 600nm</code>. Jest to podwójny błąd:</p>
  <ol>
    <li className="mb-1.5">Dyspersja międzymodowa opisuje **poszerzenie czasowe** impulsu, więc jej wynik musi być wyrażony w jednostkach czasu: **sekundach [s]**, a nie długości [m]. Odręczny zapis "nm/um" powstał przez mylne rozwinięcie skrótu "ns" (nanosekundy) jako "nm" (nanometry).</li>
    <li className="mb-1.5">Dokładna wartość obliczeniowa to **667 ns** (lub \(0&#123;,&#125;67\ \mu\mathrm&#123;s&#125;\)), a nie 600.</li>
  </ol>
</div>

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border bg-green-dim/10 border-green-dim">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Odpowiedź</span>
  <ul className="mb-3 ml-5 list-disc">
    <li className="mb-1.5">Dla światłowodu wielomodowego o **profilu skokowym** poszerzenie impulsu wynosi **ok. 667 ns** (wersja uproszczona w notatkach: ok. 600-666 ns).</li>
    <li className="mb-1.5">Dla światłowodu wielomodowego o **profilu gradientowym** poszerzenie wynosi **ok. 4,57 ns** (wersja uproszczona w notatkach: ok. 4 ns).</li>
    <li className="mb-1.5">W przypadku światłowodu **jednomodowego** dyspersja międzymodowa nie występuje (\(\sigma_\tau = 0\)).</li>
  </ul>
</div>
</section>


<section className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-[26px]" id="t3">
<div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
  <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">4.6.3</span>
  <h2 className="text-[20.5px] font-semibold leading-tight">Maksymalna długość łącza optycznego (budżet mocy)</h2>
  <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap"><span className="t1 font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[12px] whitespace-nowrap">P1</span> <span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[12px] whitespace-nowrap" style={{ "background": "var(--red)" }}>DC</span></span>
</div>

<p className="mb-[11px] text-red font-semibold"><b>Zadanie:</b> Wyznacz maksymalną długość łącza optycznego znając moc nadajnika \(P_S\), czułość odbiornika \(P_R\) i współczynnik tłumienia włókna \(\alpha\). Pomiń straty na połączeniach.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Wyprowadzenie wzoru:</h3>
<p className="mb-[11px]">Moc na wejściu odbiornika \(P_&#123;\mathrm&#123;odb&#125;&#125;\) po propagacji na odległość \(L\) we włóknie o tłumienności jednostkowej \(\alpha\ \mathrm&#123;[dB/km]&#125;\) przy mocy nadajnika \(P_&#123;\mathrm&#123;nad&#125;&#125;\) wyraża się w skali logarytmicznej jako:</p>
\[P_&#123;\mathrm&#123;odb&#125;&#125;\ [\mathrm&#123;dBm&#125;] = P_&#123;\mathrm&#123;nad&#125;&#125;\ [\mathrm&#123;dBm&#125;] - \alpha \cdot L\]

<p className="mb-[11px]">Aby odbiornik poprawnie odczytał sygnał, moc docierająca musi być większa lub równa minimalnej wymaganej czułości odbiornika \(P_&#123;\mathrm&#123;min&#125;&#125;\) (często oznaczanej też jako \(P_R\)):</p>
\[P_&#123;\mathrm&#123;odb&#125;&#125; \ge P_&#123;\mathrm&#123;min&#125;&#125;\]
\[P_S - \alpha \cdot L \ge P_R\]

<p className="mb-[11px]">Wyznaczamy maksymalną długość \(L\):</p>
\[\alpha \cdot L \le P_S - P_R \implies L \le \frac&#123;P_S - P_R&#125;&#123;\alpha&#125;\]

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border bg-green-dim/10 border-green-dim">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Odpowiedź</span>
  <p className="mb-[11px]">Maksymalna długość łącza optycznego wynosi:</p>
  <div className="bg-ink2 border border-line border-l-[3px] border-l-amber rounded-lg px-4 py-2.5 my-3 overflow-x-auto">
    \[L_&#123;\mathrm&#123;max&#125;&#125; = \frac&#123;P_S - P_R&#125;&#123;\alpha&#125;\ [\mathrm&#123;km&#125;]\]
  </div>
  <p className="mb-[11px]">Gdzie \(P_S\) to moc nadajnika [dBm], \(P_R\) to czułość odbiornika [dBm], a \(\alpha\) to tłumienność włókna [dB/km].</p>
</div>
</section>


<section className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-[26px]" id="t4">
<div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
  <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">4.6.4</span>
  <h2 className="text-[20.5px] font-semibold leading-tight">Profil skokowy vs gradientowy: szerokość impulsu i liczba modów</h2>
  <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap"><span className="t1 font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[12px] whitespace-nowrap">P1</span> <span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[12px] whitespace-nowrap" style={{ "background": "var(--red)" }}>DC</span></span>
</div>

<p className="mb-[11px] text-red font-semibold"><b>Zadanie:</b> Jak zmieni się szerokość impulsów i ilość modów propagujących się w światłowodzie: a) jednomodowym, b) wielomodowym, jeżeli zmieni się profil współczynnika załamania ze skokowego na gradientowy? Czy wartości te ulegną zmianie, jeżeli użyjemy nadajnika: a) o innej długości fali, b) o innej mocy? Uzasadnij odpowiedź.</p>

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border bg-blue/10 border-[#34465f]">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Analiza dla poszczególnych rodzajów światłowodów</span>
  <h4>1. Światłowód jednomodowy (SMF)</h4>
  <ul className="mb-3 ml-5 list-disc">
    <li className="mb-1.5"><b>Szerokość impulsu:</b> **Nie zmieni się**. W światłowodzie jednomodowym nie występuje dyspersja międzymodowa (propaguje się tylko jeden mod podstawowy \(HE_&#123;11&#125;\)). Zmiana profilu rdzenia nie wpływa na ten mechanizm.</li>
    <li className="mb-1.5"><b>Liczba modów:</b> **Nie zmieni się**. Pozostaje równa 1, dopóki spełniony jest warunek jednomodowości (\(V &lt; 2&#123;,&#125;405\)).</li>
  </ul>

  <h4>2. Światłowód wielomodowy (MMF)</h4>
  <ul className="mb-3 ml-5 list-disc">
    <li className="mb-1.5"><b>Szerokość impulsu:</b> **Ulegnie drastycznemu zmniejszeniu** (impuls ulegnie skróceniu / mniejszemu poszerzeniu). Szerokość impulsu zmienia się z wartości:
      \[\sigma_&#123;\tau,\mathrm&#123;skok&#125;&#125; \approx \frac&#123;L&#125;&#123;c_1&#125; \Delta \quad \text&#123;na&#125; \quad \sigma_&#123;\tau,\mathrm&#123;grad&#125;&#125; \approx \frac&#123;L&#125;&#123;2c_1&#125; \Delta^2\]
      Ponieważ \(\Delta \ll 1\) (typowo ok. 1-2%), to \(\Delta^2 \ll \Delta\), co powoduje skrócenie czasu rozmycia o około dwa rzędy wielkości. Wynika to z faktu, że w profilu gradientowym mody biegnące dłuższą drogą (dalej od osi rdzenia) poruszają się w obszarze o mniejszym współczynniku załamania, czyli z większą prędkością, co wyrównuje czasy ich dotarcia.
    </li>
    <li className="mb-1.5"><b>Liczba modów:</b> **Zmniejszy się o połowę**. Liczba modów zmienia się z:
      \[M_&#123;\mathrm&#123;skok&#125;&#125; \approx \frac&#123;V^2&#125;&#123;2&#125; \quad \text&#123;na&#125; \quad M_&#123;\mathrm&#123;grad&#125;&#125; \approx \frac&#123;V^2&#125;&#123;4&#125;\]
    </li>
  </ul>
</div>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Wpływ parametrów nadajnika:</h3>
<table className="w-full border-collapse my-3 text-[14.5px]">
  <tbody><tr>
    <th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">Zmienna czynnika zewnętrznego</th>
    <th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">Wpływ na szerokość impulsu \(\sigma_\tau\) (dysp. międzymodowa)</th>
    <th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">Wpływ na liczbę modów \(M\)</th>
  </tr>
  <tr>
    <td className="border border-line px-2.5 py-1.5 text-left"><b>Inna moc lasera (\(P_S\))</b></td>
    <td className="border border-line px-2.5 py-1.5 text-left"><b>Brak wpływu.</b> Moc lasera nie występuje w żadnym ze wzorów na szerokość impulsu.</td>
    <td className="border border-line px-2.5 py-1.5 text-left"><b>Brak wpływu.</b> Parametry strukturalne i częstotliwość unormowana \(V\) są niezależne od mocy optycznej.</td>
  </tr>
  <tr>
    <td className="border border-line px-2.5 py-1.5 text-left"><b>Inna długość fali (\(\lambda\))</b></td>
    <td className="border border-line px-2.5 py-1.5 text-left"><b>Brak wpływu.</b> Długość fali nie wpływa bezpośrednio na dyspersję międzymodową (nie występuje we wzorze na \(\sigma_\tau\)). *Uwaga: Wpłynie to na dyspersję chromatyczną, ale nie międzymodową.*</td>
    <td className="border border-line px-2.5 py-1.5 text-left"><b>Wpłynie znacząco.</b> Liczba modów zależy od parametru \(V\), w którym \(\lambda\) jest w mianowniku (\(V \propto 1/\lambda\)). Z tego wynika, że \(M \propto 1/\lambda^2\) — **wraz ze wzrostem długości fali liczba modów maleje kwadratowo**.</td>
  </tr>
</tbody></table>

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border bg-red/10 border-[#7d3a3a]">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">⚠️ Pułapka Egzaminacyjna (DC)</span>
  <p className="mb-[11px]">Trzeba wyraźnie napisać, że pojęcia profilu skokowego i gradientowego **dotyczą wyłącznie światłowodów wielomodowych**. W jednomodowym zmiana profilu nie zmienia szerokości impulsu (w kontekście dyspersji międzymodowej) ani liczby modów (zawsze wynosi 1).</p>
</div>
</section>


<section className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-[26px]" id="t5">
<div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
  <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">4.6.5</span>
  <h2 className="text-[20.5px] font-semibold leading-tight">Minimalna moc lasera dla L = 150 km (III okno)</h2>
  <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[12px] whitespace-nowrap">P1</span></span>
</div>

<p className="mb-[11px] text-red font-semibold"><b>Zadanie:</b> Wyznacz minimalną moc lasera, która pozwoli na przesłanie sygnału na odległość \(150\ \mathrm&#123;km&#125;\). Obliczenia wykonaj dla łącza telekomunikacyjnego pracującego w trzecim oknie telekomunikacyjnym (\(\alpha_&#123;SMF&#125; = 0&#123;,&#125;2\ \mathrm&#123;dB/km&#125;\), \(D_&#123;SMF&#125; = 16\ \mathrm&#123;ps/(nm \cdot km)&#125;\)). Do kompensacji dyspersji użyj:
  <br/>1) światłowodowej siatki Bragga (tłumienie siatki wraz z cyrkulatorem wynosi \(A_&#123;\mathrm&#123;Bragg&#125;&#125; = 1\ \mathrm&#123;dB&#125;\))
  <br/>2) światłowodu DCF (\(D_&#123;DCF&#125; = -38\ \mathrm&#123;ps/(nm \cdot km)&#125;\), \(\alpha_&#123;DCF&#125; = 0&#123;,&#125;235\ \mathrm&#123;dB/km&#125;\))
  <br/>Do obliczeń przyjmij: straty na złączach \(A_c = 0&#123;,&#125;5\ \mathrm&#123;dB&#125;\), straty na spawach \(A_s = 0&#123;,&#125;1\ \mathrm&#123;dB&#125;\), odległość między spawami wynosi \(10\ \mathrm&#123;km&#125;\). Przyjmij czułość odbiornika \(P_R \approx -30\ \mathrm&#123;dBm&#125;\) oraz margines bezpieczeństwa \(P_m = 3\ \mathrm&#123;dB&#125;\).
</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Wspólne parametry łącza:</h3>
<ul className="mb-3 ml-5 list-disc">
  <li className="mb-1.5">Długość głównego włókna (SMF): \(L_&#123;SMF&#125; = 150\ \mathrm&#123;km&#125;\)</li>
  <li className="mb-1.5">Liczba spawów: \(N_s = \frac&#123;L_&#123;SMF&#125;&#125;&#123;10\ \mathrm&#123;km&#125;&#125; = \frac&#123;150&#125;&#123;10&#125; = 15\) spawów</li>
  <li className="mb-1.5">Całkowite straty na spawach: \(P_&#123;\mathrm&#123;spawy&#125;&#125; = 15 \cdot A_s = 15 \cdot 0&#123;,&#125;1 = 1&#123;,&#125;5\ \mathrm&#123;dB&#125;\)</li>
  <li className="mb-1.5">Tłumienie światłowodu SMF: \(A_&#123;SMF&#125; = \alpha_&#123;SMF&#125; \cdot L_&#123;SMF&#125; = 0&#123;,&#125;2\ \mathrm&#123;dB/km&#125; \cdot 150\ \mathrm&#123;km&#125; = 30\ \mathrm&#123;dB&#125;\)</li>
</ul>

---

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Wariant 1: Kompensacja za pomocą siatki Bragga</h3>
<p className="mb-[11px]">Element ten nie wymaga dodatkowej długości światłowodu. Wnosi jedynie stałe tłumienie wtrąceniowe.</p>

<h4>Całkowite straty w torze (\(A_&#123;\mathrm&#123;total&#125;, 1&#125;\)):</h4>
\[A_&#123;\mathrm&#123;total&#125;, 1&#125; = A_&#123;SMF&#125; + P_&#123;\mathrm&#123;spawy&#125;&#125; + A_c + A_&#123;\mathrm&#123;Bragg&#125;&#125;\]
\[A_&#123;\mathrm&#123;total&#125;, 1&#125; = 30\ \mathrm&#123;dB&#125; + 1&#123;,&#125;5\ \mathrm&#123;dB&#125; + 0&#123;,&#125;5\ \mathrm&#123;dB&#125; + 1\ \mathrm&#123;dB&#125; = 33\ \mathrm&#123;dB&#125;\]

<h4>Minimalna moc lasera (\(P_&#123;S, 1&#125;\)):</h4>
\[P_&#123;S, 1&#125; - A_&#123;\mathrm&#123;total&#125;, 1&#125; \ge P_R + P_m\]
\[P_&#123;S, 1&#125; \ge -30\ \mathrm&#123;dBm&#125; + 3\ \mathrm&#123;dB&#125; + 33\ \mathrm&#123;dB&#125; = +6\ \mathrm&#123;dBm&#125;\]
<p className="mb-[11px]">Przeliczając na miliwaty: \(P_&#123;S, 1&#125; \ge 10^&#123;0&#123;,&#125;6&#125; \approx 3&#123;,&#125;98\ \mathrm&#123;mW&#125;\).</p>

---

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Wariant 2: Kompensacja za pomocą światłowodu DCF</h3>
<p className="mb-[11px]">Włókno DCF kompensuje dyspersję, ale posiada własną długość \(L_&#123;DCF&#125;\) oraz wysoki współczynnik tłumienia, które należy doliczyć do bilansu.</p>

<h4>1. Obliczenie długości włókna DCF (\(L_&#123;DCF&#125;\)):</h4>
\[L_&#123;DCF&#125; \cdot D_&#123;DCF&#125; = - L_&#123;SMF&#125; \cdot D_&#123;SMF&#125;\]
\[L_&#123;DCF&#125; = - \frac&#123;L_&#123;SMF&#125; \cdot D_&#123;SMF&#125;&#125;&#123;D_&#123;DCF&#125;&#125; = - \frac&#123;150 \cdot 16&#125;&#123;-38&#125; \approx 63&#123;,&#125;16\ \mathrm&#123;km&#125;\]

<h4>2. Obliczenie tłumienia wnoszonego przez DCF (\(A_&#123;DCF&#125;\)):</h4>
\[A_&#123;DCF&#125; = \alpha_&#123;DCF&#125; \cdot L_&#123;DCF&#125; = 0&#123;,&#125;235\ \mathrm&#123;dB/km&#125; \cdot 63&#123;,&#125;16\ \mathrm&#123;km&#125; \approx 14&#123;,&#125;84\ \mathrm&#123;dB&#125;\]

<h4>3. Całkowite straty w torze (\(A_&#123;\mathrm&#123;total&#125;, 2&#125;\)):</h4>
<p className="mb-[11px]">Spawy i złącza liczymy dla głównego toru SMF. Zakładamy, że moduł DCF jest zamkniętą kasetą (szpula) i nie dodaje spawów zewnętrznych.</p>
\[A_&#123;\mathrm&#123;total&#125;, 2&#125; = A_&#123;SMF&#125; + P_&#123;\mathrm&#123;spawy&#125;&#125; + A_c + A_&#123;DCF&#125;\]
\[A_&#123;\mathrm&#123;total&#125;, 2&#125; = 30\ \mathrm&#123;dB&#125; + 1&#123;,&#125;5\ \mathrm&#123;dB&#125; + 0&#123;,&#125;5\ \mathrm&#123;dB&#125; + 14&#123;,&#125;84\ \mathrm&#123;dB&#125; = 46&#123;,&#125;84\ \mathrm&#123;dB&#125;\]

<h4>4. Minimalna moc lasera (\(P_&#123;S, 2&#125;\)):</h4>
\[P_&#123;S, 2&#125; - A_&#123;\mathrm&#123;total&#125;, 2&#125; \ge P_R + P_m\]
\[P_&#123;S, 2&#125; \ge -30\ \mathrm&#123;dBm&#125; + 3\ \mathrm&#123;dB&#125; + 46&#123;,&#125;84\ \mathrm&#123;dB&#125; = +19&#123;,&#125;84\ \mathrm&#123;dBm&#125;\]
<p className="mb-[11px]">Przeliczając na miliwaty: \(P_&#123;S, 2&#125; \ge 10^&#123;1&#123;,&#125;984&#125; \approx 96&#123;,&#125;4\ \mathrm&#123;mW&#125;\).</p>

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border bg-green-dim/10 border-green-dim">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Porównanie Wariantów</span>
  <ul className="mb-3 ml-5 list-disc">
    <li className="mb-1.5"><b>Wariant z siatką Bragga:</b> Wymaga mocy lasera min. **+6 dBm (ok. 4 mW)**. Jest to bardzo ekonomiczny wariant pod względem budżetu mocy.</li>
    <li className="mb-1.5"><b>Wariant z włóknem DCF:</b> Wymaga mocy lasera aż **+19,84 dBm (ok. 96,4 mW)** ze względu na tłumienie ponad 63 km kompensatora. Taka moc zbliża się do progu zjawisk nieliniowych (np. FWM), co w praktyce wymagałoby zastosowania wzmacniaczy optycznych (np. EDFA) w środku linii zamiast zwiększania mocy samego lasera nadawczego.</li>
  </ul>
</div>
</section>


<section className="border border-line bg-panel rounded-[14px] px-[26px] py-6 mb-[26px]" id="t6">
<div className="flex items-baseline gap-3 border-b border-line pb-3 mb-4">
  <span className="font-mono font-bold text-ink bg-amber rounded-lg px-2.5 py-[2px] text-[14px] whitespace-nowrap">4.6.6</span>
  <h2 className="text-[20.5px] font-semibold leading-tight">Minimalna czułość odbiornika dla zadanej liczby fotonów na bit</h2>
  <span className="font-mono text-[11px] text-muted ml-auto whitespace-nowrap"><span className="t1 font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[12px] whitespace-nowrap">P1</span></span>
</div>

<p className="mb-[11px] text-red font-semibold"><b>Zadanie:</b> Oblicz jaka musi być minimalna czułość odbiornika, aby sygnał został prawidłowo odczytany. Załóż, że liczba fotonów przypadających na jeden bit wynosi: a) 10, b) 100, c) 1000. Przepływność łącza wynosi \(B_0 = 10\ \mathrm&#123;Gb/s&#125;\) (rozważ również wersję dla \(B_0 = 1\ \mathrm&#123;Gb/s&#125;\)). Obliczenia wykonaj dla częstotliwości fali \(f = 193&#123;,&#125;4\ \mathrm&#123;THz&#125;\) (trzecie okno).</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Dane:</h3>
<ul className="mb-3 ml-5 list-disc">
  <li className="mb-1.5">Stała Plancka: \(h \approx 6&#123;,&#125;626 \cdot 10^&#123;-34&#125;\ \mathrm&#123;J \cdot s&#125;\)</li>
  <li className="mb-1.5">Częstotliwość fali: \(f = 193&#123;,&#125;4\ \mathrm&#123;THz&#125; = 1&#123;,&#125;934 \cdot 10^&#123;14&#125;\ \mathrm&#123;Hz&#125;\)</li>
  <li className="mb-1.5">Energia jednego fotonu (\(E_&#123;\mathrm&#123;fot&#125;&#125;\)):
    \[E_&#123;\mathrm&#123;fot&#125;&#125; = h \cdot f = 6&#123;,&#125;626 \cdot 10^&#123;-34&#125; \cdot 1&#123;,&#125;934 \cdot 10^&#123;14&#125; \approx 1&#123;,&#125;2815 \cdot 10^&#123;-19&#125;\ \mathrm&#123;J&#125;\]
  </li>
</ul>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Wzory:</h3>
<p className="mb-[11px]">Średnia moc docierająca do odbiornika \(P_&#123;\mathrm&#123;odb&#125;&#125;\) (w watach) dla przepływności \(B_0\) przy średniej liczbie fotonów na bit \(n_0\):</p>
<div className="bg-ink2 border border-line border-l-[3px] border-l-amber rounded-lg px-4 py-2.5 my-3 overflow-x-auto">
  <span className="tag">(4.6.6a)</span>
  \[P_&#123;\mathrm&#123;odb&#125;&#125; = n_0 \cdot h \cdot f \cdot B_0\ \mathrm&#123;[W]&#125;\]
</div>

<p className="mb-[11px]">Przeliczenie mocy na jednostki logarytmiczne [dBm]:</p>
<div className="bg-ink2 border border-line border-l-[3px] border-l-amber rounded-lg px-4 py-2.5 my-3 overflow-x-auto">
  <span className="tag">(4.6.6b)</span>
  \[P_R\ \mathrm&#123;[dBm]&#125; = 10 \cdot \log_&#123;10&#125; \left( \frac&#123;P_&#123;\mathrm&#123;odb&#125;&#125;&#125;&#123;10^&#123;-3&#125;&#125; \right)\]
</div>

---

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Obliczenia dla Przepływności \(B_0 = 1\ \mathrm&#123;Gb/s&#125; = 10^9\ \mathrm&#123;b/s&#125;\) (Dane z notatek):</h3>
<p className="mb-[11px]">Dla tej przepływności wyniki idealnie pokrywają się z uproszczonymi wartościami w notatkach studentów:</p>

<ol type="a">
  <li className="mb-1.5"><b>Dla \(n_0 = 10\) fotonów/bit:</b>
    \[P_&#123;\mathrm&#123;odb&#125;&#125; = 10 \cdot 1&#123;,&#125;2815 \cdot 10^&#123;-19&#125; \cdot 10^9 = 1&#123;,&#125;2815 \cdot 10^&#123;-9&#125;\ \mathrm&#123;W&#125;\]
    \[P_R = 10 \cdot \log_&#123;10&#125; \left( \frac&#123;1&#123;,&#125;2815 \cdot 10^&#123;-9&#125;&#125;&#123;10^&#123;-3&#125;&#125; \right) = 10 \cdot \log_&#123;10&#125;(1&#123;,&#125;2815 \cdot 10^&#123;-6&#125;) \approx -48&#123;,&#125;9\ \mathrm&#123;dBm&#125; \approx \mathbf&#123;-50\ \mathrm&#123;dBm&#125;&#125;\]
  </li>
  <li className="mb-1.5"><b>Dla \(n_0 = 100\) fotonów/bit:</b>
    \[P_&#123;\mathrm&#123;odb&#125;&#125; = 100 \cdot 1&#123;,&#125;2815 \cdot 10^&#123;-19&#125; \cdot 10^9 = 1&#123;,&#125;2815 \cdot 10^&#123;-8&#125;\ \mathrm&#123;W&#125;\]
    \[P_R = 10 \cdot \log_&#123;10&#125; \left( \frac&#123;1&#123;,&#125;2815 \cdot 10^&#123;-8&#125;&#125;&#123;10^&#123;-3&#125;&#125; \right) \approx -38&#123;,&#125;9\ \mathrm&#123;dBm&#125; \approx \mathbf&#123;-40\ \mathrm&#123;dBm&#125;&#125;\]
  </li>
  <li className="mb-1.5"><b>Dla \(n_0 = 1000\) fotonów/bit:</b>
    \[P_&#123;\mathrm&#123;odb&#125;&#125; = 1000 \cdot 1&#123;,&#125;2815 \cdot 10^&#123;-19&#125; \cdot 10^9 = 1&#123;,&#125;2815 \cdot 10^&#123;-7&#125;\ \mathrm&#123;W&#125;\]
    \[P_R = 10 \cdot \log_&#123;10&#125; \left( \frac&#123;1&#123;,&#125;2815 \cdot 10^&#123;-7&#125;&#125;&#123;10^&#123;-3&#125;&#125; \right) \approx -28&#123;,&#125;9\ \mathrm&#123;dBm&#125; \approx \mathbf&#123;-30\ \mathrm&#123;dBm&#125;&#125;\]
  </li>
</ol>

---

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Obliczenia dla Przepływności \(B_0 = 10\ \mathrm&#123;Gb/s&#125; = 10^&#123;10&#125;\ \mathrm&#123;b/s&#125;\) (Treść zadania):</h3>
<p className="mb-[11px]">Zwiększenie przepływności o jeden rząd wielkości (10-krotnie) skraca czas trwania pojedynczego bitu, co przy stałej liczbie fotonów na bit wymaga 10-krotnie większej średniej mocy docierającej (wzrost czułości o \(10\ \mathrm&#123;dB&#125;\)):</p>

<ol type="a">
  <li className="mb-1.5"><b>Dla \(n_0 = 10\) fotonów/bit:</b>
    \[P_&#123;\mathrm&#123;odb&#125;&#125; = 10 \cdot 1&#123;,&#125;2815 \cdot 10^&#123;-19&#125; \cdot 10^&#123;10&#125; = 1&#123;,&#125;2815 \cdot 10^&#123;-8&#125;\ \mathrm&#123;W&#125;\]
    \[P_R = 10 \cdot \log_&#123;10&#125; \left( \frac&#123;1&#123;,&#125;2815 \cdot 10^&#123;-8&#125;&#125;&#123;10^&#123;-3&#125;&#125; \right) \approx \mathbf&#123;-39\ \mathrm&#123;dBm&#125;&#125;\]
  </li>
  <li className="mb-1.5"><b>Dla \(n_0 = 100\) fotonów/bit:</b>
    \[P_&#123;\mathrm&#123;odb&#125;&#125; = 100 \cdot 1&#123;,&#125;2815 \cdot 10^&#123;-19&#125; \cdot 10^&#123;10&#125; = 1&#123;,&#125;2815 \cdot 10^&#123;-7&#125;\ \mathrm&#123;W&#125;\]
    \[P_R = 10 \cdot \log_&#123;10&#125; \left( \frac&#123;1&#123;,&#125;2815 \cdot 10^&#123;-7&#125;&#125;&#123;10^&#123;-3&#125;&#125; \right) \approx \mathbf&#123;-29\ \mathrm&#123;dBm&#125;&#125;\]
  </li>
  <li className="mb-1.5"><b>Dla \(n_0 = 1000\) fotonów/bit:</b>
    \[P_&#123;\mathrm&#123;odb&#125;&#125; = 1000 \cdot 1&#123;,&#125;2815 \cdot 10^&#123;-19&#125; \cdot 10^&#123;10&#125; = 1&#123;,&#125;2815 \cdot 10^&#123;-6&#125;\ \mathrm&#123;W&#125;\]
    \[P_R = 10 \cdot \log_&#123;10&#125; \left( \frac&#123;1&#123;,&#125;2815 \cdot 10^&#123;-6&#125;&#125;&#123;10^&#123;-3&#125;&#125; \right) \approx \mathbf&#123;-19\ \mathrm&#123;dBm&#125;&#125;\]
  </li>
</ol>

<div className="rounded-[10px] px-4 py-[14px] my-[14px] border bg-green-dim/10 border-green-dim">
  <span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Podsumowanie Czułości</span>
  <p className="mb-[11px]">W zależności od przepływności minimalna czułość odbiornika wynosi:</p>
  <table className="w-full border-collapse my-3 text-[14.5px]">
    <tbody><tr>
      <th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">Liczba fotonów na bit (\(n_0\))</th>
      <th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">Dla \(B_0 = 1\ \mathrm&#123;Gb/s&#125;\)</th>
      <th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">Dla \(B_0 = 10\ \mathrm&#123;Gb/s&#125;\)</th>
    </tr>
    <tr className="text-green">
      <td className="border border-line px-2.5 py-1.5 text-left"><b>10 fotonów</b> (limit kwantowy)</td>
      <td className="border border-line px-2.5 py-1.5 text-left">ok. -50 dBm</td>
      <td className="border border-line px-2.5 py-1.5 text-left">ok. -39 dBm</td>
    </tr>
    <tr>
      <td className="border border-line px-2.5 py-1.5 text-left"><b>100 fotonów</b></td>
      <td className="border border-line px-2.5 py-1.5 text-left">ok. -40 dBm</td>
      <td className="border border-line px-2.5 py-1.5 text-left">ok. -29 dBm</td>
    </tr>
    <tr>
      <td className="border border-line px-2.5 py-1.5 text-left"><b>1000 fotonów</b> (szumy realne)</td>
      <td className="border border-line px-2.5 py-1.5 text-left">ok. -30 dBm</td>
      <td className="border border-line px-2.5 py-1.5 text-left">ok. -19 dBm</td>
    </tr>
  </tbody></table>
  <p className="mb-[11px]">Wniosek: <b>Wyższa szybkość transmisji (przepływność) wymaga czulszych odbiorników</b> (czyli o wyższej dopuszczalnej mocy, czyli mniej ujemnej w dBm), aby zachować tę samą liczbę fotonów na bit i uniknąć błędów.</p>
</div>
</section>

<Footer>FPTiTI · Zadania obliczeniowe cz. 2 · powtórka przed egzaminem · powodzenia! 💪</Footer>
</div>
    



    </>
  );
}

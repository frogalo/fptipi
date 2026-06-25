import TeoriaFalaPropagacja_img_1 from '../../assets/TeoriaFalaPropagacja_img_1.png';
import TeoriaFalaPropagacja_img_2 from '../../assets/TeoriaFalaPropagacja_img_2.png';
import TeoriaFalaPropagacja_img_3 from '../../assets/TeoriaFalaPropagacja_img_3.png';
import TeoriaFalaPropagacja_img_4 from '../../assets/TeoriaFalaPropagacja_img_4.png';
import TeoriaFalaPropagacja_img_5 from '../../assets/TeoriaFalaPropagacja_img_5.png';
import TeoriaFalaPropagacja_img_6 from '../../assets/TeoriaFalaPropagacja_img_6.png';
import TeoriaFalaPropagacja_img_7 from '../../assets/TeoriaFalaPropagacja_img_7.png';
import TeoriaFalaPropagacja_img_8 from '../../assets/TeoriaFalaPropagacja_img_8.png';
import TeoriaFalaPropagacja_img_9 from '../../assets/TeoriaFalaPropagacja_img_9.png';
import TeoriaFalaPropagacja_img_10 from '../../assets/TeoriaFalaPropagacja_img_10.png';
import TeoriaFalaPropagacja_img_11 from '../../assets/TeoriaFalaPropagacja_img_11.png';
import TeoriaFalaPropagacja_img_12 from '../../assets/TeoriaFalaPropagacja_img_12.png';
import TeoriaFalaPropagacja_img_13 from '../../assets/TeoriaFalaPropagacja_img_13.png';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, QuestionSection, BlockFormula } from '../../components/TheoryComponents';
import { Concept, Formula, Symbol, Explanation, Conclusion, BookAddition } from '../../components/MathBlocks';
import Footer from '../../components/Footer';

export default function Teoria1() {

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);


  return (
    <>
      
<div className="max-w-[880px] mx-auto">

<PageHeader
  subtitle="FPTiTI · wzorcowe odpowiedzi egzaminacyjne · część 1 / 5"
  title="Pytania 1–6: Fala elektromagnetyczna i propagacja w wolnej przestrzeni"
  description="Treść wiernie wg podręcznika A. Szymańskiej (luty 2026), rozdz. 2–3 · rysunki oryginalne z podręcznika · numeracja pytań wg rozdz. 10"
/>

<nav className="flex flex-wrap gap-2 my-[18px] mb-[30px]">
  <a href="#q1" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">1 · Równania Maxwella</a>
  <a href="#q2" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">2 · Równania materiałowe i ośrodki</a>
  <a href="#q3" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">3 · Zjawiska falowe</a>
  <a href="#q4" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">4 · Fale powierzchniowe / tropo / jono</a>
  <a href="#q5" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">5 · Czynniki atmosferyczne</a>
  <a href="#q6" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">6 · Zasięg anteny nadawczej</a>
</nav>


<QuestionSection
  id="q1"
  number="1"
  title="Napisz i omów równania Maxwella oraz napisz wnioski, które z nich wynikają."
  source="str. 9–11, 14"
  examBadges={[
    { label: "2026 Lato 1 A", route: "/egzaminy?year=2026&term=L1&group=A#task-2" },
    { label: "2025 Wrzesień A (Zad. 2)", route: "/egzaminy?year=2025&term=Wrzesien&group=A#task-2" },
    { label: "2018 Lato 1 B", route: "/egzaminy?year=2018&term=L1&group=B#task-1" }
  ]}
>

<p className="mb-[11px]">Podstawowymi zależnościami, od których rozpoczyna się jakiekolwiek rozważania na temat propagacji fal, są <b>równania Maxwella</b>. Nazwano je od nazwiska uczonego Jamesa Clerka Maxwella, który sformułował je i zebrał w integralną całość, korzystając z wiedzy innych uczonych, takich jak Michael Faraday, Carl Gauss i Andre Ampère. Równania przedstawiają <b>zależności pomiędzy zmianami pola elektrycznego i pola magnetycznego w czasie i przestrzeni</b>. Na tych czterech równaniach oparte jest działanie wszelkich systemów radio- i telekomunikacyjnych (telefonia komórkowa, radio, telewizja naziemna i satelitarna, nawigacja, radiolokacja).</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Wielkości i parametry pola elektromagnetycznego</h3>
<table className="w-full border-collapse my-3 text-[14.5px]">
<tbody><tr><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">Symbol</th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">Wielkość</th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">Jednostka</th></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">{String.raw`\(\vec{E}\)`}</td><td className="border border-line px-2.5 py-1.5 text-left">wektor natężenia pola elektrycznego</td><td className="border border-line px-2.5 py-1.5 text-left">{String.raw`\(\mathrm{V/m}\)`}</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">{String.raw`\(\vec{H}\)`}</td><td className="border border-line px-2.5 py-1.5 text-left">wektor natężenia pola magnetycznego</td><td className="border border-line px-2.5 py-1.5 text-left">{String.raw`\(\mathrm{A/m}\)`}</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">{String.raw`\(\vec{D}\)`}</td><td className="border border-line px-2.5 py-1.5 text-left">wektor indukcji elektrycznej</td><td className="border border-line px-2.5 py-1.5 text-left">{String.raw`\(\mathrm{As/m^2}\)`}</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">{String.raw`\(\vec{B}\)`}</td><td className="border border-line px-2.5 py-1.5 text-left">wektor indukcji magnetycznej</td><td className="border border-line px-2.5 py-1.5 text-left">{String.raw`\(\mathrm{Vs/m^2}\)`}</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">{String.raw`\(\vec{j}\)`}</td><td className="border border-line px-2.5 py-1.5 text-left">wektor gęstości prądu</td><td className="border border-line px-2.5 py-1.5 text-left">{String.raw`\(\mathrm{A/m^2}\)`}</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">{String.raw`\(\rho\)`}</td><td className="border border-line px-2.5 py-1.5 text-left">gęstość objętościowa ładunku</td><td className="border border-line px-2.5 py-1.5 text-left">{String.raw`\(\mathrm{C/m^3}\)`}</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">{String.raw`\(\nabla\cdot\)`} / {String.raw`\(\nabla\times\)`}</td><td className="border border-line px-2.5 py-1.5 text-left">operator dywergencji / operator rotacji</td><td className="border border-line px-2.5 py-1.5 text-left">—</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">{String.raw`\(\mu_0\)`}, {String.raw`\(\varepsilon_0\)`}</td><td className="border border-line px-2.5 py-1.5 text-left">przenikalność magnetyczna / elektryczna próżni</td><td className="border border-line px-2.5 py-1.5 text-left">{String.raw`\(\mathrm{Vs/Am}\)`} ; {String.raw`\(\mathrm{A^2s^4/m^3kg}\)`}</td></tr>
</tbody></table>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">I równanie — prawo Faradaya</h3>
<BlockFormula tag="(2.1.1)" tex={String.raw`\nabla\times\vec{E}=-\frac{\delta\vec{B}}{\delta t}`} />
<Symbol symbol={String.raw`\vec{E}`} desc="wektor natężenia pola elektrycznego" />
<Symbol symbol={String.raw`\vec{B}`} desc="wektor indukcji magnetycznej" />
<Symbol symbol={String.raw`t`} desc="czas" />
<Symbol symbol={String.raw`\nabla\times`} desc="operator rotacji (wirowości pola)" />
<p className="mb-[11px]">Mówi o tym, że <b>zmienne w czasie pole magnetyczne wytwarza pole elektryczne</b>. Rotacja wektora natężenia pola elektrycznego jest równa co do wartości szybkości zmian w czasie wektora indukcji magnetycznej. Czyli zmiany indukcji magnetycznej powodują powstanie <b>wirowego pola elektrycznego</b>. Równanie to opisuje zjawisko <b>indukcji elektromagnetycznej</b>, gdzie wektor natężenia pola elektrycznego jest w każdym punkcie przestrzeni prostopadły do wektora indukcji magnetycznej.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">II równanie — prawo Ampera rozszerzone przez Maxwella</h3>
<BlockFormula tag="(2.1.2)" tex={String.raw`\nabla\times\vec{B}=\mu_0\left(\vec{j}+\varepsilon_0\frac{\delta\vec{E}}{\delta t}\right)`} />
<Symbol symbol={String.raw`\vec{B}`} desc="wektor indukcji magnetycznej" />
<Symbol symbol={String.raw`\mu_0`} desc="przenikalność magnetyczna próżni" />
<Symbol symbol={String.raw`\vec{j}`} desc="wektor gęstości prądu (przewodzenia i unoszenia)" />
<Symbol symbol={String.raw`\varepsilon_0`} desc="przenikalność elektryczna próżni" />
<Symbol symbol={String.raw`\vec{E}`} desc="wektor natężenia pola elektrycznego" />
<Symbol symbol={String.raw`t`} desc="czas" />
<Symbol symbol={String.raw`\nabla\times`} desc="operator rotacji (wirowości pola)" />
<p className="mb-[11px]">Przedstawia, jak <b>przepływający prąd oraz zmienne pole elektryczne wytwarzają wirowe pole magnetyczne</b>. Prawa strona równania zawiera dwa składniki: wektor gęstości prądu elektrycznego, który jest sumą wektora gęstości <b>prądu przewodzenia</b> (wynikającego z ruchu ładunków w materiale) i wektora gęstości <b>prądu unoszenia</b> (polegającego na ruchu naładowanych ciał). Drugi składnik oznacza <b>prąd przesunięcia</b> związany ze zmianami indukcji elektrycznej w czasie. Pomijając prąd przesunięcia stwierdza się, że przepływ prądu elektrycznego powoduje powstanie wirowego pola magnetycznego o rotacji równej gęstości tego prądu — <b>prąd elektryczny jest więc źródłem pola magnetycznego</b>. Gdy występuje tylko prąd przesunięcia, drugie równanie Maxwella wyraża zjawisko <b>indukcji magnetoelektrycznej</b>, polegające na indukowaniu przez zmienne pole indukcji elektrycznej zmiennego pola magnetycznego, przy czym wektor natężenia pola magnetycznego jest w każdym punkcie przestrzeni prostopadły do wektora indukcji elektrycznej.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">III równanie — prawo Gaussa dla elektryczności</h3>
<BlockFormula tag="(2.1.3)" tex={String.raw`\nabla\cdot\vec{E}=\frac{\rho}{\varepsilon_0}`} />
<Symbol symbol={String.raw`\vec{E}`} desc="wektor natężenia pola elektrycznego" />
<Symbol symbol={String.raw`\rho`} desc="objętościowa gęstość ładunku elektrycznego" />
<Symbol symbol={String.raw`\varepsilon_0`} desc="przenikalność elektryczna próżni" />
<Symbol symbol={String.raw`\nabla\cdot`} desc="operator dywergencji (źródłowości pola)" />
<p className="mb-[11px]">Wiąże ono wypadkowy strumień elektryczny z całkowitym ładunkiem elektrycznym objętym powierzchnią Gaussa. Mamy tu do czynienia z <b>niezerową dywergencją</b>, co oznacza, że <b>pole nie jest bezźródłowe</b>. Dywergencja wektora natężenia pola elektrycznego równa jest objętościowej gęstości ładunku elektrycznego. <b>Skalarnym źródłem pola indukcji elektrycznej są ładunki elektryczne.</b></p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">IV równanie — prawo Gaussa dla magnetyzmu</h3>
<BlockFormula tag="(2.1.4)" tex={String.raw`\nabla\cdot\vec{B}=0`} />
<Symbol symbol={String.raw`\vec{B}`} desc="wektor indukcji magnetycznej" />
<Symbol symbol={String.raw`\nabla\cdot`} desc="operator dywergencji (źródłowości pola)" />
<p className="mb-[11px]">Łączy ono wypadkowy strumień magnetyczny z całkowitym ładunkiem magnetycznym objętym powierzchnią Gaussa. <b>Pole magnetyczne jest bezźródłowe</b>, linie pola magnetycznego są zamknięte, <b>brak jest swobodnych ładunków magnetycznych</b>. Pole indukcji magnetycznej jest bezźródłowe.</p>

<Conclusion title="Wnioski z równań Maxwella">
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5">Z równań (2.1.1) i (2.1.2) wynika, że zmiany w czasie indukcji magnetycznej powodują powstanie wirowego pola elektrycznego, a zmienna w czasie indukcja elektryczna wytwarza wirowe pole magnetyczne. <b>Nie można rozłączyć od siebie pola elektrycznego i magnetycznego — dlatego mówimy o polu elektromagnetycznym.</b></li>
<li className="mb-1.5">Pola te mogą występować niezależnie tylko wtedy, gdy <b>nie zmieniają się w czasie</b>.</li>
<li className="mb-1.5">Zmiany pola elektrycznego i magnetycznego (prostopadłych wzajemnie) rozchodzą się <b>z prędkością światła</b>, w kierunku prostopadłym do kierunku obydwu tych pól. Ponadto drgania wektora elektrycznego i magnetycznego są <b>w tej samej fazie</b>.</li>
<li className="mb-1.5">Z równań wynika, że <b>istnieją fale elektromagnetyczne</b> oraz zachowane jest <b>prawo zachowania ładunku</b>, które mówi, że dywergencja gęstości prądu przewodzenia równa jest szybkości zmian w czasie gęstości objętościowej niezrównoważonego ładunku swobodnego (skalarnym źródłem pola gęstości prądu przewodzenia jest zmiana ładunku w czasie):
<BlockFormula tag="(2.1.5)" tex={String.raw`\nabla\cdot\vec{j}=-\frac{\partial\rho}{\partial t}`} />
<Symbol symbol={String.raw`\vec{j}`} desc="wektor gęstości prądu" />
<Symbol symbol={String.raw`\rho`} desc="objętościowa gęstość ładunku" />
<Symbol symbol={String.raw`t`} desc="czas" />
<Symbol symbol={String.raw`\nabla\cdot`} desc="operator dywergencji (źródłowości pola)" /></li>
</ul>
</Conclusion>

<BookAddition title="Skrót ze słowniczka (str. 14) — wersja „na szybko”">
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>I prawo Maxwella</b> — zmienne pole magnetyczne jest źródłem zmiennego pola elektrycznego. W postaci całkowej jest zapisem prawa Faradaya. W postaci różniczkowej: rotacja pola elektrycznego jest równa minus pochodnej indukcji magnetycznej po czasie.</li>
<li className="mb-1.5"><b>II prawo Maxwella</b> — źródłem zmiennego pola magnetycznego jest zmienny w czasie prąd lub zmienne pole elektryczne. W postaci całkowej jest zapisem prawa Ampera. W postaci różniczkowej: rotacja pola magnetycznego jest równa pochodnej indukcji elektrycznej i prądu po czasie.</li>
<li className="mb-1.5"><b>III prawo Maxwella</b> — zapis prawa Gaussa dla pola elektrycznego: źródłem pola indukcji elektrycznej są ładunki elektryczne.</li>
<li className="mb-1.5"><b>IV prawo Maxwella</b> — zapis prawa Gaussa dla pola magnetycznego: pole magnetyczne jest bezźródłowe.</li>
</ul>
</BookAddition>
</QuestionSection>


<QuestionSection
  id="q2"
  number="2"
  title="Równania materiałowe i rodzaje ośrodków."
  source="str. 11–13"
>

<p className="mb-[11px]">Pomiędzy wektorami {String.raw`\(\vec{E}\)`}, {String.raw`\(\vec{H}\)`}, {String.raw`\(\vec{D}\)`}, {String.raw`\(\vec{B}\)`} i {String.raw`\(\vec{j}\)`} zachodzą zależności, które określane są jako <b>równania materiałowe</b>:</p>
<BlockFormula tag="(2.2.1)" tex={String.raw`\vec{D}=\varepsilon_0\varepsilon_r\cdot\vec{E}`} />
<Symbol symbol={String.raw`\vec{D}`} desc="wektor indukcji elektrycznej (przesunięcia)" />
<Symbol symbol={String.raw`\varepsilon_0`} desc="przenikalność elektryczna próżni" />
<Symbol symbol={String.raw`\varepsilon_r`} desc="względna przenikalność elektryczna ośrodka" />
<Symbol symbol={String.raw`\vec{E}`} desc="wektor natężenia pola elektrycznego" />

<BlockFormula tag="(2.2.2)" tex={String.raw`\vec{B}=\mu_0\mu_r\cdot\vec{H}`} />
<Symbol symbol={String.raw`\vec{B}`} desc="wektor indukcji magnetycznej" />
<Symbol symbol={String.raw`\mu_0`} desc="przenikalność magnetyczna próżni" />
<Symbol symbol={String.raw`\mu_r`} desc="względna przenikalność magnetyczna ośrodka" />
<Symbol symbol={String.raw`\vec{H}`} desc="wektor natężenia pola magnetycznego" />

<BlockFormula tag="(2.2.3)" tex={String.raw`\vec{j}=\sigma\vec{E}`} />
<Symbol symbol={String.raw`\vec{j}`} desc="wektor gęstości prądu" />
<Symbol symbol={String.raw`\sigma`} desc="konduktywność (przewodnictwo właściwe) ośrodka" />
<Symbol symbol={String.raw`\vec{E}`} desc="wektor natężenia pola elektrycznego" />
<p className=" text-[14px] text-muted -mt-1 mb-[14px]">gdzie: {String.raw`\(\mu\)`}, {String.raw`\(\varepsilon\)`} i {String.raw`\(\sigma\)`} oznaczają parametry materiałowe ośrodka; <code className="font-mono text-txt text-[12.5px]">μ<sub>r</sub></code> — względna przenikalność magnetyczna (liczba bezwymiarowa); <code className="font-mono text-txt text-[12.5px]">ε<sub>r</sub></code> — względna przenikalność elektryczna (liczba bezwymiarowa); <code className="font-mono text-txt text-[12.5px]">σ</code> — konduktywność ośrodka {String.raw`\([\tfrac{1}{\Omega m}]\)`}.</p>

<p className="mb-[11px]">Przenikalność elektryczna i konduktywność ośrodka charakteryzują <b>dielektryki</b>, a przenikalność magnetyczna — <b>magnetyki</b>. Przenikalność elektryczna to miara zdolności dielektryka do osłabiania zewnętrznego pola elektrycznego oraz miara zdolności do koncentracji energii pola elektrycznego.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Rodzaje ośrodków</h3>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>Ośrodek liniowy</b> — przenikalność elektryczna i magnetyczna oraz konduktywność ośrodka <b>nie zależą od natężeń pól</b>. Jeżeli chociaż jeden z tych parametrów zależy od natężenia pola — ośrodek <b>nieliniowy</b>.</li>
<li className="mb-1.5"><b>Ośrodek bezstratny</b> — konduktywność ośrodka wynosi zero.</li>
<li className="mb-1.5"><b>Ośrodek jednorodny / niejednorodny</b> — parametry odpowiednio nie zależą lub zależą od współrzędnych punktu.</li>
<li className="mb-1.5"><b>Ośrodek dyspersyjny</b> — przenikalność elektryczna, przenikalność magnetyczna i/lub konduktywność ośrodka <b>zależą od częstotliwości</b> (niedyspersyjny — nie zależą).</li>
<li className="mb-1.5"><b>Ośrodek izotropowy</b> — przenikalność elektryczna i magnetyczna oraz konduktywność są <b>niezależne od kierunku pól</b>; odpowiednie wektory w równaniach materiałowych są do siebie równoległe. W przeciwnym przypadku — ośrodek <b>anizotropowy</b>.</li>
</ul>
<p className="mb-[11px]">Ośrodki ze względu na ich własności możemy podzielić na <b>próżnię i ośrodki materialne</b>, gdzie <b>tylko próżnia jest ośrodkiem bezstratnym</b>. W przypadku gdy ośrodek jest liniowy, izotropowy, niedyspersyjny i jednorodny, to jego przenikalność elektryczna i magnetyczna wyrażona jest liczbami stałymi i rzeczywistymi.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Prędkość światła i prędkość propagacji</h3>
<BlockFormula tag="(2.2.4)" tex={String.raw`c=\frac{1}{\sqrt{\varepsilon_0\cdot\mu_0}}\approx 3\cdot 10^8\;\left[\frac{m}{s}\right]`} />
<Symbol symbol={String.raw`c`} desc="prędkość światła w próżni" />
<Symbol symbol={String.raw`\varepsilon_0`} desc="przenikalność elektryczna próżni" />
<Symbol symbol={String.raw`\mu_0`} desc="przenikalność magnetyczna próżni" />
<p className=" text-[14px] text-muted -mt-1 mb-[14px]">gdzie {String.raw`\(\varepsilon_0=\frac{10^{-9}}{36\pi}\,[\frac{F}{m}]\)`}; {String.raw`\(\mu_0=4\pi\cdot 10^{-7}\,[\frac{H}{m}]\)`}.</p>
<p className="mb-[11px]">Dla dowolnego ośrodka materialnego prędkość propagacji {String.raw`\(v_p\)`} jest <b>mniejsza</b> niż prędkość rozchodzenia się światła w próżni:</p>
<BlockFormula tag="(2.2.5)–(2.2.7)" tex={String.raw`v_p=\frac{1}{\sqrt{\varepsilon_0\mu_0}\cdot\sqrt{\varepsilon_r\mu_r}}=\frac{c}{\sqrt{\varepsilon_r\mu_r}},\qquad n=\sqrt{\varepsilon_r\cdot\mu_r}\;\Rightarrow\; v_p=\frac{c}{n}`} />
<Symbol symbol={String.raw`v_p`} desc="prędkość fazowa fali w ośrodku" />
<Symbol symbol={String.raw`c`} desc="prędkość światła w próżni" />
<Symbol symbol={String.raw`\varepsilon_r`} desc="względna przenikalność elektryczna ośrodka" />
<Symbol symbol={String.raw`\mu_r`} desc="względna przenikalność magnetyczna ośrodka" />
<Symbol symbol={String.raw`n`} desc="współczynnik załamania światła ośrodka" />

<BookAddition title="Uzupełnienie (str. 12–13): fala płaska — własności fali TEM (pytanie z dawnych egzaminów)">
<p className="mb-[11px]">Bardzo ważnym parametrem falowym jest <b>impedancja falowa</b> {String.raw`\(Z_0\)`} — pierwiastek ze stosunku przenikalności magnetycznej i elektrycznej, ma wymiar oma:</p>
<BlockFormula tag="(2.3.1)–(2.3.2)" tex={String.raw`Z_0=\sqrt{\frac{\mu_r}{\varepsilon_r}\frac{\mu_0}{\varepsilon_0}},\qquad Z_0=\sqrt{\frac{\mu_0}{\varepsilon_0}}=120\pi\approx 377\,\Omega\ \text{(próżnia)}`} />
<Symbol symbol={String.raw`Z_0`} desc="impedancja falowa ośrodka / próżni" />
<Symbol symbol={String.raw`\mu_r`} desc="względna przenikalność magnetyczna" />
<Symbol symbol={String.raw`\varepsilon_r`} desc="względna przenikalność elektryczna" />
<Symbol symbol={String.raw`\mu_0`} desc="przenikalność magnetyczna próżni" />
<Symbol symbol={String.raw`\varepsilon_0`} desc="przenikalność elektryczna próżni" />
<p className="mb-[11px]"><b>Fala płaska jest falą typu TEM</b> — pole elektryczne i magnetyczne leży w płaszczyźnie prostopadłej do kierunku propagacji fali, czyli {String.raw`\(E_z=0\)`} i {String.raw`\(H_z=0\)`}. Wartości chwilowe wektorów pól tej fali są takie same w każdym punkcie płaszczyzny prostopadłej do kierunku rozchodzenia się fali.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaFalaPropagacja_img_1} alt="Fala TEM"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 2.1. Rozkład pola elektromagnetycznego dla fali TEM w dielektryku bezstratnym (w próżni).</figcaption></figure>
<p className="mb-[11px]">Zachowanie się fali opisuje <b>współczynnik propagacji</b> {String.raw`\(\gamma=\alpha+j\beta\)`} (2.3.3), gdzie {String.raw`\(\alpha\)`} — stała tłumienia, {String.raw`\(\beta\)`} — stała fazowa zależna od ośrodka. Impedancja falowa charakteryzująca ośrodek: {String.raw`\(Z_f=\frac{E_T}{H_T}=\sqrt{\frac{j\omega\mu}{\sigma+j\omega\varepsilon}}\)`} (2.3.4). <b>Prędkość fazowa</b> (prędkość płaszczyzny stałej fazy): {String.raw`\(v_f=\frac{\omega}{\beta}\)`} (2.3.5), dla próżni {String.raw`\(v_f=c=\frac{1}{\sqrt{\varepsilon_0\mu_0}}\)`} (2.3.6); <b>prędkość grupowa</b> (prędkość poruszania się obwiedni): {String.raw`\(v_g=\frac{\partial\omega}{\partial\beta}\)`} (2.3.7).</p>
<p className="mb-[11px]">Rozwiązania równań Maxwella mają różną postać w zależności od warunków brzegowych; istnieje nieskończenie wiele <b>modów</b> (mod — charakterystyczny rozkład pola elektromagnetycznego). Oprócz fali TEM istnieje: fala typu <b>TM</b> (zwana też E): {String.raw`\(E_z\neq 0,\ H_z=0\)`} — pole magnetyczne leży w płaszczyźnie prostopadłej do kierunku propagacji; fala typu <b>TE</b> (zwana też H): {String.raw`\(H_z\neq 0,\ E_z=0\)`} — pole elektryczne leży w płaszczyźnie prostopadłej do kierunku propagacji; oraz fala typu <b>EH</b>: {String.raw`\(E_z\neq 0,\ H_z\neq 0\)`}.</p>
</BookAddition>
</QuestionSection>


<QuestionSection
  id="q3"
  number="3"
  title="Opisz zjawiska falowe (załamanie, odbicie, dyfrakcja, interferencja)."
  source="str. 15–17"
  examBadges={[
    { label: "2026 Lato 1 A", route: "/egzaminy?year=2026&term=L1&group=A#task-3" },
    { label: "2025 Lato 1 B", route: "/egzaminy?year=2025&term=L1&group=B#task-3" }
  ]}
>

<p className="mb-[11px]">W idealnym przypadku fale propagujące się nie mogą oddziaływać między sobą, powinny rozchodzić się w wolnej przestrzeni bez żadnych ograniczeń. Przez pojęcie <b>wolnej przestrzeni</b> rozumiemy <b>ośrodek jednorodny</b>. W rzeczywistości tak nie jest — podczas transmisji mamy do czynienia z <b>odbiciem, załamaniem (refrakcją), ugięciem (dyfrakcją) i nakładaniem się fal (interferencją)</b>.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Odbicie</h3>
<p className="mb-[11px]"><b>Odbicie</b> to zmiana kierunku rozchodzenia się fali występująca na granicy dwóch ośrodków o różnych współczynnikach załamania. <b>Światło pozostaje w ośrodku, w którym się propaguje.</b></p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaFalaPropagacja_img_2} alt="Odbicie" style={{ "maxWidth": "220px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 3.1. Odbicie fali na granicy dwóch ośrodków.</figcaption></figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Załamanie (refrakcja)</h3>
<p className="mb-[11px]"><b>Załamanie</b> to zmiana kierunku rozchodzenia się fali związana ze zmianą prędkości po przejściu do innego ośrodka. <b>Następuje zmiana długości fali, zaś częstotliwość nie ulega zmianie.</b></p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaFalaPropagacja_img_3} alt="Załamanie" style={{ "maxWidth": "220px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 3.2. Załamanie fali na granicy dwóch ośrodków.</figcaption></figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Ugięcie (dyfrakcja)</h3>
<p className="mb-[11px]"><b>Ugięcie</b> to zmiana kierunku rozchodzenia się fali, spowodowana występowaniem krawędzi przeszkody lub jej bliskością. Najwyraźniej występuje wtedy, kiedy <b>rozmiar przeszkody jest porównywalny z długością fali</b>. Po przejściu przez przeszkodę każdy punkt fali staje się nowym źródłem fali kulistej; fale te nakładają się, oddziałują między sobą, wskutek czego powstają obszary, gdzie następuje wzmocnienie bądź osłabienie fal (interferencja).</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Interferencja — doświadczenie Younga</h3>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaFalaPropagacja_img_4} alt="Doświadczenie Younga"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 3.3. Schemat doświadczenia Younga.</figcaption></figure>
<p className="mb-[11px]">W doświadczeniu Younga światło w postaci fali płaskiej pada na układ dwóch szczelin {String.raw`\(S_1\)`} i {String.raw`\(S_2\)`} w przesłonie {String.raw`\(P\)`}. Interesuje nas rezultat nałożenia się fal w punkcie {String.raw`\(A\)`} na ekranie {String.raw`\(E\)`} ustawionym za szczelinami. Promienie świetlne, które przeszły przez szczeliny, docierają do punktu {String.raw`\(A\)`}, ale drogi ich {String.raw`\(r_1\)`} i {String.raw`\(r_2\)`} nie są takie same. Jeśli więc faza fali świetlnej była w płaszczyźnie szczelin taka sama, to w punkcie {String.raw`\(A\)`} będzie różna wskutek różnicy dróg. Różnica dróg promieni od szczelin do punktu {String.raw`\(A\)`} równa jest odcinkowi {String.raw`\(S_2a\)`}, który równy jest {String.raw`\(d\cdot\sin\theta\)`}. <b>Jeśli różnica ta będzie równa całkowitej wielokrotności długości fali — nastąpi wzmocnienie; jeśli będzie równa połówkowej liczbie długości fal — nastąpi wygaszenie.</b> Warunek uzyskania maksimum i minimum natężenia fali wypadkowej:</p>
<BlockFormula tag="(3.1.1) maksimum" tex={String.raw`d\cdot\sin\theta=n\cdot\lambda`} />
<Symbol symbol={String.raw`d`} desc="szerokość szczeliny (lub odległość szczelin)" />
<Symbol symbol={String.raw`\theta`} desc="kąt interferencji (kierunek do prążka)" />
<Symbol symbol={String.raw`n`} desc="rząd widma (rząd prążka: 0, 1, 2...)" />
<Symbol symbol={String.raw`\lambda`} desc="długość fali" />

<BlockFormula tag="(3.1.2) minimum" tex={String.raw`d\cdot\sin\theta=\left(n+\tfrac{1}{2}\right)\cdot\lambda`} />
<Symbol symbol={String.raw`d`} desc="szerokość szczeliny" />
<Symbol symbol={String.raw`\theta`} desc="kąt interferencji" />
<Symbol symbol={String.raw`n`} desc="rząd widma" />
<Symbol symbol={String.raw`\lambda`} desc="długość fali" />
<p className=" text-[14px] text-muted -mt-1 mb-[14px]">gdzie {String.raw`\(n=0,1,2,3,\ldots\)`}</p>
<p className="mb-[11px]">Z powyższych wzorów wynika, że <b>im mniejsza jest odległość pomiędzy szczelinami, tym większa będzie wartość kąta</b>, dla którego wystąpi wzmocnienie (lub wygaszenie) i tym większa będzie różnica kątowa pomiędzy maksimami bądź minimami.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaFalaPropagacja_img_5} alt="Interferencja"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 3.4. Ilustracja interferencji w doświadczeniu Younga dla dwóch różnych odległości pomiędzy szczelinami: a)&nbsp;mniejszej, b)&nbsp;większej.</figcaption></figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Prawo załamania i kąt krytyczny</h3>
<p className="mb-[11px]">Powyżej opisane zjawiska tłumaczą jedno z podstawowych praw optyki — <b>prawo załamania</b>, określające sposób zachowania się promienia na granicy dwóch ośrodków:</p>
<BlockFormula tag="(3.1.3)" tex={String.raw`n_1\sin\theta_1=n_2\sin\theta_2`} />
<Symbol symbol={String.raw`n_1, n_2`} desc="współczynniki załamania ośrodków 1 i 2" />
<Symbol symbol={String.raw`\theta_1`} desc="kąt padania fali" />
<Symbol symbol={String.raw`\theta_2`} desc="kąt załamania fali" />

<p className="mb-[11px]"><b>Całkowite wewnętrzne odbicie</b> zapewnia padanie wiązki na granicę pod kątem krytycznym:</p>
<BlockFormula tag="(3.1.4)" tex={String.raw`\theta_C=\arcsin\frac{n_2}{n_1}`} />
<Symbol symbol={String.raw`\theta_C`} desc="kąt krytyczny (graniczny)" />
<Symbol symbol={String.raw`n_1`} desc="współczynnik załamania ośrodka gęstszego (rdzenia)" />
<Symbol symbol={String.raw`n_2`} desc="współczynnik załamania ośrodka rzadszego (płaszcza)" />
<div className="rounded-[10px] px-4 py-[14px] my-[14px] border bg-red/10 border-[#7d3a3a]"><span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Uwaga — pułapka z opracowania</span>
<p className="mb-[11px]">W opracowaniu studenckim wzór na kąt krytyczny bywa zapisany odwrotnie, jako {String.raw`\(\arcsin\frac{n_1}{n_2}\)`} — to <b>błąd</b>. Poprawna wersja podręcznikowa to {String.raw`\(\theta_C=\arcsin\frac{n_2}{n_1}\)`} (ponieważ {String.raw`\(n_1>n_2\)`}, argument arcsin musi być ≤&nbsp;1).</p>
</div>
</QuestionSection>


<QuestionSection
  id="q4"
  number="4"
  title="Omów fale powierzchniowe, troposferyczne i jonosferyczne."
  source="str. 17–19"
  examBadge={{ label: "2026 Lato 1 B", route: "/egzaminy?year=2026&term=L1&group=B#task-3" }}
>

<p className="mb-[11px]">Fale ze względu na sposób propagacji możemy podzielić na: <b>fale powierzchniowe, fale troposferyczne i fale jonosferyczne</b>.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Fale powierzchniowe</h3>
<p className="mb-[11px]">Fale powierzchniowe mają dobry zasięg w takiej odległości, w której <b>Ziemia może być uznana za płaską</b> (zasięg dla fali powierzchniowej maleje wraz z długością fali). Odległość, na jaką propagują się fale powierzchniowe, zależy od częstotliwości.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaFalaPropagacja_img_6} alt="Bezpośrednia widoczność"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 3.5. Transmisja przy bezpośredniej widoczności nadajnika i odbiornika.</figcaption></figure>
<p className="mb-[11px]">Ze względu na krzywiznę Ziemi przynajmniej jedna z anten — nadawcza lub odbiorcza — musi być umieszczona na pewnej wysokości. Można wyznaczyć <b>graniczną odległość bezpośredniej widoczności</b> pomiędzy nadajnikiem a odbiornikiem w zależności od wysokości anten:</p>
<BlockFormula tag="(3.2.1)" tex={String.raw`d_0=\sqrt{2R_Z}\left(\sqrt{H_N}+\sqrt{H_O}\right)`} />
<Symbol symbol={String.raw`d_0`} desc="graniczny zasięg bezpośredniej widoczności" />
<Symbol symbol={String.raw`R_Z`} desc="promień kuli ziemskiej (~6400 km)" />
<Symbol symbol={String.raw`H_N`} desc="wysokość anteny nadawczej" />
<Symbol symbol={String.raw`H_O`} desc="wysokość anteny odbiorczej" />
<p className=" text-[14px] text-muted -mt-1 mb-[14px]">gdzie: <code className="font-mono text-txt text-[12.5px]">R<sub>Z</sub></code> — promień Ziemi (przyjmujemy w przybliżeniu 6400&nbsp;km); <code className="font-mono text-txt text-[12.5px]">H<sub>N</sub></code> — wysokość anteny nadawczej; <code className="font-mono text-txt text-[12.5px]">H<sub>O</sub></code> — wysokość anteny odbiorczej.</p>
<p className="mb-[11px]">Tak jest wtedy, kiedy teren jest „czysty” — bez zabudowań i wzniesień. Przed przystąpieniem do projektowania łącza radiowego należy wykonać <b>projekt hipsometryczny terenu</b>, który uwzględnia zarówno ukształtowanie naturalne terenu, jak i sztuczne przeszkody (np. budynki). Istnieje jeszcze możliwość transmisji z wykorzystaniem <b>ugięcia fali elektromagnetycznej wzdłuż krzywizny Ziemi</b>:</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaFalaPropagacja_img_7} alt="Ugięcie wzdłuż krzywizny Ziemi"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 3.7. Transmisja z wykorzystaniem ugięcia fali elektromagnetycznej wzdłuż krzywizny Ziemi.</figcaption></figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Budowa atmosfery — fale troposferyczne</h3>
<p className="mb-[11px]">W przypadku rozchodzenia się fal radiowych decydujący wpływ na propagację ma budowa atmosfery oraz zjawiska fizyczne w niej zachodzące. Z punktu widzenia telekomunikacji dwie najważniejsze warstwy atmosfery to <b>troposfera i jonosfera</b>, pomiędzy którymi znajduje się <b>obojętna stratosfera</b>. Najbliżej Ziemi znajduje się troposfera; jej grubość zależy od szerokości geograficznej i pory roku — w strefie umiarkowanej latem ok. <b>13&nbsp;km</b>, zimą ok. <b>10&nbsp;km</b>; im bliżej równika, tym zasięg troposfery większy (na równiku 15–18&nbsp;km).</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaFalaPropagacja_img_8} alt="Warstwy atmosfery"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 3.8. Warstwy atmosfery.</figcaption></figure>
<p className="mb-[11px]"><b>Fala troposferyczna dociera do odbiornika tylko dlatego, że załamuje się w tej warstwie.</b> W tej części atmosfery propagują się <b>fale ultrakrótkie</b>. Propagacja fal w troposferze jest mocno uzależniona od zjawisk meteorologicznych (szczegóły — pytanie 5); dominującym zjawiskiem pasożytniczym jest <b>refrakcja</b>.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Fale jonosferyczne</h3>
<p className="mb-[11px]"><b>Jonosfera jest silnie zjonizowana przez promieniowanie słoneczne i kosmiczne.</b> Tu odbywa się transmisja fal długich, a przede wszystkim średnich i krótkich. <b>Fale odbijają się od tej warstwy i dzięki temu możliwa jest transmisja na duże odległości.</b> Fale radiowe o większej częstotliwości przenikają jonosferę nie odbijając się od niej — zjawisko to jest wykorzystywane w <b>transmisji satelitarnej</b>.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaFalaPropagacja_img_9} alt="Odbicia od jonosfery"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 3.6. Transmisja fal radiowych z wykorzystaniem odbić od warstw jonosfery.</figcaption></figure>
<p className="mb-[11px]">Warstwa jonosfery ulega okresowym zmianom — zmniejsza się i zwiększa promieniowanie jonizujące (różna wartość promieniowania słonecznego w dzień i w nocy). <b>Stąd wynika zmiana zasięgu fal w trakcie doby.</b></p>

<BookAddition title="Kontekst — zastosowania pasm (str. 15)">
<p className="mb-[11px]">Fale bardzo długie — łączność na bardzo duże odległości. Fale długie, średnie i krótkie — radiofonia oraz komunikacja na duże odległości. Fale bardzo krótkie — radiofonia FM i telewizja. Pasma UHF — telewizja, radionawigacja, telefonia komórkowa, radary dalekiego zasięgu, systemy przesyłania danych (pasmo 2,4&nbsp;GHz i 5,8&nbsp;GHz). Pasma mikrofalowe centymetrowe i milimetrowe — radiolinie, telewizja satelitarna, radary i nawigacja satelitarna.</p>
</BookAddition>
</QuestionSection>


<QuestionSection
  id="q5"
  number="5"
  title="Omów wpływ czynników atmosferycznych i innych „zanieczyszczeń” na propagację fali."
  source="str. 18–19"
  examBadge={{ label: "2018 Lato 1 A", route: "/egzaminy?year=2018&term=L1&group=A#task-1" }}
>

<p className="mb-[11px]">Propagacja fal w troposferze jest <b>mocno uzależniona od zjawisk meteorologicznych</b>. Fale radiowe w zależności od ich występowania mogą być <b>tłumione lub/i rozpraszane</b>. Na skalę zjawiska w znacznym stopniu wpływa <b>długość fali</b>. Poza tym w obszarze propagacji mogą zachodzić zjawiska pasożytnicze — w tym przypadku dominującym jest <b>zjawisko refrakcji</b>.</p>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5">Tłumienie w troposferze spowodowane jest przez <b>wszelkie opady, mgłę, absorpcję molekularną i rozproszenie na cząsteczkach</b>.</li>
<li className="mb-1.5">Tłumienie zachodzi również na tzw. <b>twardych cząsteczkach</b>, czyli pyłach, cząstkach dymów i innych zanieczyszczeniach.</li>
<li className="mb-1.5">Tłumienie zależy przede wszystkim od <b>odległości między nadajnikiem a odbiornikiem</b> i <b>długości fali</b>, a znaczący wpływ ma także tłumienie atmosfery oraz zjawiska takie jak <b>dyfrakcja, refrakcja, interferencja i rozproszenie</b>.</li>
<li className="mb-1.5"><b>Wykazano, że największe tłumienie powodują opady.</b></li>
</ul>
<p className="mb-[11px]">Tłumienie wywołane absorpcją na cząsteczkach wody (głównie pary wodnej) i tlenu jest <b>pomijalne dla częstotliwości mniejszych niż 2&nbsp;GHz</b>. Dla częstotliwości wyższych wyraźnie następuje wzrost absorpcji, ponadto występują kolejne <b>maksima mające charakter rezonansowy</b>. Na rysunku czerwoną linią zaznaczono przebieg dla fal propagujących się na wysokości 4&nbsp;km, niebieską — na poziomie morza:</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaFalaPropagacja_img_10} alt="Tłumienie mikrofal w atmosferze"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 3.9. Tłumienie sygnałów mikrofalowych w atmosferze na różnych wysokościach.</figcaption></figure>
<p className="mb-[11px]">Poniżej — wpływ różnych czynników atmosferycznych na zasięg fali w zależności od częstotliwości (długości fali):</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaFalaPropagacja_img_11} alt="Pochłanianie a warunki atmosferyczne"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 3.10. Wartość współczynnika pochłaniania fal dla różnych długości fal w zależności od warunków atmosferycznych.</figcaption></figure>
<p className="mb-[11px]"><b>Tłumienie i rozpraszanie zależą od długości fali świetlnej i czynników atmosferycznych.</b> Ponadto warstwa jonosfery ulega okresowym zmianom — zmniejsza się i zwiększa promieniowanie jonizujące (ponieważ różna jest wartość promieniowania słonecznego w dzień i w nocy). Stąd też wynika <b>zmiana zasięgu fal w trakcie doby</b>.</p>
</QuestionSection>


<QuestionSection
  id="q6"
  number="6"
  title="W jaki sposób określa się zasięg anteny nadawczej?"
  source="str. 19–22"
  examBadge={{ label: "2018 Zima 1 B", route: "/egzaminy?year=2018&term=Z1&group=B#task-2" }}
>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Strefa bliska i daleka</h3>
<p className="mb-[11px]">Ogólnie przyjmuje się, że wokół anteny mamy do czynienia z dwoma strefami: bliską i daleką. <b>Strefa bliska (tzw. strefa Fresnela)</b> to obszar, w którym fala jest kulista, a amplituda i faza natężenia pola zależy od kwadratu odległości od różnych części anteny. <b>Strefa daleka (tzw. strefa Fraunhofera)</b> to obszar, w którym fala ma charakter fali płaskiej, a amplituda pola elektrycznego i magnetycznego maleje liniowo z odległością.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Równanie transmisji mocy</h3>
<p className="mb-[11px]">W wolnej przestrzeni fale radiowe rozchodzą się po liniach prostych. Wraz z odległością <b>natężenie pola elektrycznego fali zmniejsza się proporcjonalnie do odległości, a gęstość mocy — do jej kwadratu</b>. Moc odebrana przez odbiornik jest funkcją mocy nadajnika, odległości i długości fali oraz zysku energetycznego anteny nadawczej i odbiorczej.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaFalaPropagacja_img_12} alt="Propagacja nadajnik-odbiornik"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 3.11. Propagacja sygnału optycznego w wolnej przestrzeni z nadajnika do odbiornika.</figcaption></figure>
<p className="mb-[11px]">Dla fali kulistej i anteny izotropowej wysyłającej promieniowanie o mocy {String.raw`\(P_S\)`} i mającej wzmocnienie {String.raw`\(G_S\)`}, powierzchniowa gęstość mocy {String.raw`\(S\)`} w odległości {String.raw`\(R\)`} od anteny:</p>
<BlockFormula tag="(3.4.1)" tex={String.raw`S=\frac{P_S\cdot G_S}{4\pi\cdot R^2}`} />
<Symbol symbol={String.raw`S`} desc="powierzchniowa gęstość mocy" />
<Symbol symbol={String.raw`P_S`} desc="moc doprowadzona do anteny nadawczej" />
<Symbol symbol={String.raw`G_S`} desc="zysk kierunkowy anteny nadawczej" />
<Symbol symbol={String.raw`R`} desc="odległość od anteny" />

<p className="mb-[11px]">Sygnał docierający do anteny odbiorczej w odległości {String.raw`\(R\)`} wytwarza pole elektryczne o natężeniu {String.raw`\(E\)`} zależnym od skutecznej mocy promieniowania i odległości pomiędzy antenami:</p>
<BlockFormula tag="(3.4.2)" tex={String.raw`E=\frac{\sqrt{60P_S G_S}}{R}`} />
<Symbol symbol={String.raw`E`} desc="natężenie pola elektrycznego" />
<Symbol symbol={String.raw`P_S`} desc="moc doprowadzona do anteny nadawczej" />
<Symbol symbol={String.raw`G_S`} desc="zysk kierunkowy anteny nadawczej" />
<Symbol symbol={String.raw`R`} desc="odległość" />

<p className="mb-[11px]">Moc odbierana przez odbiornik to iloczyn powierzchniowej gęstości mocy {String.raw`\(S\)`} i powierzchni skutecznej anteny odbiorczej {String.raw`\(A_{ef}\)`}:</p>
<BlockFormula tag="(3.4.3)–(3.4.4)" tex={String.raw`P_O=S A_{ef},\qquad A_{ef}=\frac{\lambda^2 G_O}{4\pi}`} />
<Symbol symbol={String.raw`P_O`} desc="moc odbierana przez antenę odbiorczą" />
<Symbol symbol={String.raw`S`} desc="powierzchniowa gęstość mocy" />
<Symbol symbol={String.raw`A_{ef}`} desc="powierzchnia skuteczna anteny odbiorczej" />
<Symbol symbol={String.raw`\lambda`} desc="długość fali" />
<Symbol symbol={String.raw`G_O`} desc="zysk kierunkowy anteny odbiorczej" />
<p className=" text-[14px] text-muted -mt-1 mb-[14px]">gdzie <code className="font-mono text-txt text-[12.5px]">G<sub>O</sub></code> — wzmocnienie anteny odbiorczej, <code className="font-mono text-txt text-[12.5px]">λ</code> — długość fali.</p>
<p className="mb-[11px]">Podstawiając (3.4.1) i (3.4.4) do (3.4.3) otrzymujemy <b>równanie transmisji mocy</b>:</p>
<BlockFormula tag="(3.4.5)" tex={String.raw`P_O=P_S\frac{G_S G_O\lambda^2}{(4\pi\cdot R)^2}`} />
<Symbol symbol={String.raw`P_O`} desc="moc odbierana przez antenę odbiorczą" />
<Symbol symbol={String.raw`P_S`} desc="moc nadawana" />
<Symbol symbol={String.raw`G_S`} desc="zysk anteny nadawczej" />
<Symbol symbol={String.raw`G_O`} desc="zysk anteny odbiorczej" />
<Symbol symbol={String.raw`\lambda`} desc="długość fali" />
<Symbol symbol={String.raw`R`} desc="odległość między antenami" />

<p className="mb-[11px]">Do obliczeń wygodnie jest przekształcić je do postaci logarytmicznej (przekształceniu podlega tylko część {String.raw`\(\frac{\lambda^2}{(4\pi R)^2}\)`}); pamiętając, że {String.raw`\(f=\frac{c}{\lambda}\)`}:</p>
<BlockFormula tag="(3.4.6)" tex={String.raw`20\log_{10}\!\left(\frac{\lambda}{4\pi R}\right)=20\log_{10}\!\left(\frac{0{,}3}{4\pi}\right)-20\log_{10}\!\left(0{,}3\frac{fR}{c}\right)=-32{,}44-20\log_{10}(f_{MHz}R_{km})`} />
<Symbol symbol={String.raw`\lambda`} desc="długość fali" />
<Symbol symbol={String.raw`R`} desc="odległość" />
<Symbol symbol={String.raw`f_{MHz}`} desc="częstotliwość fali w megahercach" />
<Symbol symbol={String.raw`R_{km}`} desc="odległość w kilometrach" />
<Symbol symbol={String.raw`c`} desc="prędkość światła" />

<p className="mb-[11px]"><b>Równanie transmisji mocy w postaci logarytmicznej</b> (częstotliwość w MHz, odległość w km):</p>
<BlockFormula tag="(3.4.7)" tex={String.raw`P_O[dBm]=P_S[dBm]+G_S[dB]+G_O[dB]-20\log_{10}(f_{MHz}R_{km})-32{,}44`} />
<Symbol symbol={String.raw`P_O[dBm]`} desc="odbierana moc w dBm" />
<Symbol symbol={String.raw`P_S[dBm]`} desc="moc nadawana w dBm" />
<Symbol symbol={String.raw`G_S[dB]`} desc="zysk anteny nadawczej w dB" />
<Symbol symbol={String.raw`G_O[dB]`} desc="zysk anteny odbiorczej w dB" />
<Symbol symbol={String.raw`f_{MHz}`} desc="częstotliwość fali w megahercach" />
<Symbol symbol={String.raw`R_{km}`} desc="odległość w kilometrach" />

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Strefa Fresnela</h3>
<p className="mb-[11px]">Bardzo duży wpływ na propagację mają przeszkody — występuje wtedy zjawisko <b>dyfrakcji</b>, które można wyjaśnić korzystając z <b>zasady Huygensa</b>. Obszar propagowania energii wzdłuż linii łączącej nadajnik z odbiornikiem nazywa się <b>strefą Fresnela</b>. Jeżeli w obszarze nie byłoby przeszkód, to kształtem przypomina ona <b>elipsoidę obrotową</b> umieszczoną pomiędzy anteną nadawczą i odbiorczą. Kształt elipsoidy zależy od częstotliwości — <b>im jest ona wyższa, tym elipsoida staje się smuklejsza</b>.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaFalaPropagacja_img_13} alt="Strefa Fresnela"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 3.12. Strefa Fresnela.</figcaption></figure>
<p className="mb-[11px]">Promień <i>n</i>-tej strefy Fresnela:</p>
<BlockFormula tag="(3.4.8)" tex={String.raw`R_n=\sqrt{\frac{n\lambda d_1 d_2}{d_1+d_2}}`} />
<Symbol symbol={String.raw`R_n`} desc="promień n-tej strefy Fresnela" />
<Symbol symbol={String.raw`n`} desc="numer strefy" />
<Symbol symbol={String.raw`\lambda`} desc="długość fali" />
<Symbol symbol={String.raw`d_1, d_2`} desc="odległość od nadajnika / odbiornika do przeszkody" />
<p className=" text-[14px] text-muted -mt-1 mb-[14px]">gdzie: <code className="font-mono text-txt text-[12.5px]">d<sub>1</sub></code> — odległość od nadajnika; <code className="font-mono text-txt text-[12.5px]">d<sub>2</sub></code> — odległość od odbiornika; <code className="font-mono text-txt text-[12.5px]">D = d<sub>1</sub> + d<sub>2</sub></code> — odległość pomiędzy nadajnikiem a odbiornikiem.</p>
<p className="mb-[11px]">Największą wartość promień strefy Fresnela przyjmuje wtedy, kiedy {String.raw`\(d_1=d_2\)`}. Dla takiego przypadku promień pierwszej strefy Fresnela wynosi {String.raw`\(R_1=\frac{1}{2}\sqrt{\lambda D}\)`}. <b>Chcąc zapewnić niezawodne działanie łącza mikrofalowego, należy tak projektować system, aby cały obszar pierwszej strefy Fresnela był wolny od przeszkód.</b></p>

<Conclusion title="Pełna odpowiedź w skrócie">
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>Bezpośrednia widoczność:</b> {String.raw`\(d_0=\sqrt{2R_Z}(\sqrt{H_N}+\sqrt{H_O})\)`} — graniczna odległość zależna od wysokości anten (+ projekt hipsometryczny terenu).</li>
<li className="mb-1.5"><b>Bilans mocy:</b> moc odebrana wg (3.4.5)/(3.4.7) musi być wystarczająca — zasięg ograniczają straty rosnące z {String.raw`\(R^2\)`} (czyli {String.raw`\(20\log_{10}R\)`} w dB).</li>
<li className="mb-1.5"><b>Czystość pierwszej strefy Fresnela:</b> {String.raw`\(R_n=\sqrt{\frac{n\lambda d_1 d_2}{d_1+d_2}}\)`} — obszar wolny od przeszkód.</li>
</ul>
</Conclusion>

<BookAddition title="Zadanie, które pojawiło się na egzaminie (2018, gr. 2) — rozwiązanie">
<p className="mb-[11px]"><b>Treść:</b> Wyznacz promień pierwszej i drugiej strefy Fresnela, znając częstotliwość fali {String.raw`\(f=2412\)`} MHz, odległość między nadajnikiem a odbiornikiem {String.raw`\(D=200\)`} m, odległość od nadajnika {String.raw`\(d_1=100\)`} m.</p>
<p className="mb-[11px]"><b>Rozwiązanie:</b> {String.raw`\(\lambda=\frac{c}{f}=\frac{3\cdot10^8}{2412\cdot10^6}\approx 0{,}1244\)`} m; {String.raw`\(d_2=D-d_1=100\)`} m.</p>
<p className="mb-[11px]">{String.raw`\(R_1=\sqrt{\frac{1\cdot 0{,}1244\cdot 100\cdot 100}{200}}=\sqrt{6{,}22}\approx \mathbf{2{,}49\ m}\)`}</p>
<p className="mb-[11px]">{String.raw`\(R_2=\sqrt{\frac{2\cdot 0{,}1244\cdot 100\cdot 100}{200}}=\sqrt{12{,}44}\approx \mathbf{3{,}53\ m}\)`} &nbsp;(czyli {String.raw`\(R_2=R_1\sqrt{2}\)`}).</p>
<p className="mb-[11px]">Uwaga: {String.raw`\(d_1=d_2\)`}, więc to przypadek maksymalnego promienia — kontrola: {String.raw`\(R_1=\frac{1}{2}\sqrt{\lambda D}=\frac{1}{2}\sqrt{0{,}1244\cdot 200}\approx 2{,}49\)`} m ✓</p>
</BookAddition>
</QuestionSection>

<Footer>FPTiTI · odpowiedzi cz. 1/5 (pytania 1–6) · źródło: A. Szymańska, „Fizyczne podstawy transmisji i przechowywania informacji”, luty 2026 · egzamin 13.06</Footer>
</div>
    



    </>
  );
}

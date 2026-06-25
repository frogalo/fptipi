import TeoriaModulacja_img_1 from '../../assets/TeoriaModulacja_img_1.png';
import TeoriaModulacja_img_2 from '../../assets/TeoriaModulacja_img_2.png';
import TeoriaModulacja_img_3 from '../../assets/TeoriaModulacja_img_3.png';
import TeoriaModulacja_img_4 from '../../assets/TeoriaModulacja_img_4.png';
import TeoriaModulacja_img_5 from '../../assets/TeoriaModulacja_img_5.png';
import TeoriaModulacja_img_6 from '../../assets/TeoriaModulacja_img_6.png';
import TeoriaModulacja_img_7 from '../../assets/TeoriaModulacja_img_7.png';
import React, { useEffect } from 'react';
import { PageHeader, QuestionSection, BlockFormula } from '../../components/TheoryComponents';
import { Concept, Formula, Symbol, Explanation, Conclusion, BookAddition } from '../../components/MathBlocks';
import Footer from '../../components/Footer';

export default function Teoria13() {

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);





  return (
    <>
      













<div className="max-w-[880px] mx-auto">

<PageHeader
  subtitle="FPTiTI · wzorcowe odpowiedzi egzaminacyjne · część 3 / 5"
  title="Pytania 13–15: Modulacja i multipleksacja"
  description="Treść wiernie wg podręcznika A. Szymańskiej (luty 2026), rozdz. 5 · rysunki oryginalne z podręcznika · numeracja pytań wg rozdz. 10"
/>

<nav className="flex flex-wrap gap-2 my-[18px] mb-[30px]">
  <a href="#q13" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">13 · Jakość modulacji (BER, oczko, Γ)</a>
  <a href="#q14" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">14 · Multipleksacja i zastosowania</a>
  <a href="#q15" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">15 · Mieszanie czterofalowe</a>
</nav>


<QuestionSection
  id="q13"
  number="13"
  title="Wymień i opisz sposoby mierzenia jakości zastosowanej modulacji."
  source="str. 38–41"
  examBadges={[
    { label: "2026 Lato 1 B", route: "/egzaminy?year=2026&term=L1&group=B#task-2" },
    { label: "2018 Zima 1 B", route: "/egzaminy?year=2018&term=Z1&group=B#task-3" }
  ]}
>

<p className="mb-[11px]">Do mierzenia jakości zastosowanej modulacji służą między innymi metody takie jak <b>bitowa stopa błędu — BER</b> (ang. Bit Error Rate), <b>wykres oczkowy</b> czy <b>efektywność widmowa</b>.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">① Bitowa stopa błędu (BER)</h3>
<p className="mb-[11px]">W trakcie transmisji może dojść do wystąpienia przekłamań; aby przepływ informacji odbywał się w stabilny i poprawny sposób, ilość tych przekłamań nie może być zbyt duża. <b>Dopuszczalny poziom błędnie zdekodowanych bitów określa współczynnik BER.</b> Przy transmisji sygnału w postaci bitowej może dojść do następujących przekłamań: wysłane zostało „0", natomiast odebrano „1", lub wysłano „1", a odebrano „0":</p>
<BlockFormula tag="(5.3.1)" tex={String.raw`BER=\frac{p_0+p_1}{2}<10^{-12}`} />
<Symbol symbol={String.raw`BER`} desc="bitowa stopa błędu (Bit Error Rate)" />
<Symbol symbol={String.raw`p_0`} desc="prawdopodobieństwo błędnego odebrania zera (odczytanego jako jedynka)" />
<Symbol symbol={String.raw`p_1`} desc="prawdopodobieństwo błędnego odebrania jedynki (odczytanej jako zero)" />
<p className=" text-[14px] text-muted -mt-1 mb-[14px]">gdzie: <code className="font-mono text-txt text-[12.5px]">p<sub>0</sub></code> — prawdopodobieństwo potraktowania „1" jako „0"; <code className="font-mono text-txt text-[12.5px]">p<sub>1</sub></code> — prawdopodobieństwo potraktowania „0" jako „1".</p>
<p className="mb-[11px]"><b>Inna definicja</b> przedstawia współczynnik BER jako <b>stosunek błędnie przetransmitowanych bitów do wszystkich bitów, które wzięły udział w transmisji</b>. Maksymalna dopuszczalna wartość współczynnika BER nie jest taka sama dla wszystkich łącz — jej wartość określają specjalne normy, gdzie opisano parametry poszczególnych standardów. Wartość współczynnika <b>BER &lt; 10⁻¹² jest zgodna z zaleceniami zawartymi w normach ITU-T G.987.1</b> i oznacza, że transmisja może być uznana za poprawną, gdy nastąpi zaledwie jedno przekłamanie na jeden miliard przetransmitowanych bitów.</p>
<div className="rounded-[10px] px-4 py-[14px] my-[14px] border bg-red/10 border-[#7d3a3a]"><span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Drobna nieścisłość w podręczniku</span>
<p className="mb-[11px]">Podręcznik pisze „jedno przekłamanie na jeden miliard bitów", ale 10⁻¹² to formalnie jedno przekłamanie na <b>bilion</b> (10¹²) bitów. Na egzaminie najbezpieczniej podać wzór i wartość BER&nbsp;&lt;&nbsp;10⁻¹² — liczba mówi sama za siebie.</p>
</div>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">② Wykres oczkowy</h3>
<p className="mb-[11px]">Przedstawia on <b>nałożone na siebie wszystkie dopuszczalne (w danej sieci) kombinacje transmitowanych bitów</b> (zer i jedynek), które tworzą charakterystyczny wykres przypominający oko.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaModulacja_img_1} alt="Wykres oczkowy"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 5.4. Wykres oczkowy.</figcaption></figure>
<p className="mb-[11px]"><b>Charakterystyczne wielkości opisujące wykres oczkowy:</b></p>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>szerokość wykresu oczkowego</b> — określa przedział czasowy, w którym podczas próbkowania nie występuje niebezpieczeństwo błędnego odczytu danych;</li>
<li className="mb-1.5"><b>rozwartość wykresu oczkowego</b>:
<BlockFormula tag="(5.3.2)" tex={String.raw`R_0=\frac{V'_{max}-V'_{min}}{V_{max}-V_{min}}`} />
<Symbol symbol={String.raw`R_0`} desc="rozwartość wykresu oczkowego (Eye Opening Ratio)" />
<Symbol symbol={String.raw`V'_{max}, V'_{min}`} desc="poziomy napięcia zniekształceń oka od góry i od dołu" />
<Symbol symbol={String.raw`V_{max}, V_{min}`} desc="maksymalny i minimalny poziom napięcia sygnału (pełne otwarcie)" />
gdzie {String.raw`\(V'_{max}\)`}, {String.raw`\(V_{max}\)`}, {String.raw`\(V'_{min}\)`} i {String.raw`\(V_{min}\)`} oznaczają tak jak opisano na rysunku;</li>
<li className="mb-1.5"><b>margines szumowy</b> {String.raw`\(M_S\)`}:
<BlockFormula tag="(5.3.3)" tex={String.raw`M_S=\frac{V_1}{V'_{max}}`} />
<Symbol symbol={String.raw`M_S`} desc="margines szumowy (Noise Margin)" />
<Symbol symbol={String.raw`V_1`} desc="poziom napięcia logicznej jedynki" />
<Symbol symbol={String.raw`V'_{max}`} desc="poziom napięcia zniekształceń oka od góry" /></li>
<li className="mb-1.5"><b>nachylenie wykresu oczkowego</b> — wskazujące odporność sieci na błędy w dziedzinie czasu;</li>
<li className="mb-1.5"><b>czas narastania sygnału</b> {String.raw`\(C_{NS}\)`}:
<BlockFormula tag="(5.3.4)" tex={String.raw`C_{NS}=1{,}25\cdot T_{20-80}`} />
<Symbol symbol={String.raw`C_{NS}`} desc="czas narastania (rise time) impulsu" />
<Symbol symbol={String.raw`T_{20-80}`} desc="czas w jakim amplituda impulsu narasta od 20% do 80% wartości maksymalnej" />
gdzie {String.raw`\(T_{20-80}\)`} — czas narastania sygnału od 20% do 80% jego maksymalnej wartości;</li>
<li className="mb-1.5"><b>zniekształcenie czasowe</b> {String.raw`\(\Delta T\)`} — obrazuje wymiar fluktuacji fazy sygnału;</li>
<li className="mb-1.5"><b>współczynnik ekstynkcji</b> {String.raw`\(EX\)`} — obrazuje stosunek średniej wartości poziomu wysokiego sygnału do średniej wartości poziomu niskiego sygnału.</li>
</ul>
<p className="mb-[11px]">Analizując wyżej opisane parametry możemy dokładnie określić poprawność działania łącza:</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaModulacja_img_2} alt="Przykładowe wykresy oczkowe"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 5.5. Przykładowe wykresy oczkowe dla łącz telekomunikacyjnych.</figcaption></figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">③ Efektywność widmowa</h3>
<p className="mb-[11px]">Efektywność widmowa {String.raw`\(\Gamma\)`} określa <b>ilość informacji w bit/s, jaka może zostać przesłana na jednostkę pasma wyrażoną w Hz</b>:</p>
<BlockFormula tag="(5.3.5)" tex={String.raw`\Gamma=\frac{R_b}{B}`} />
<Symbol symbol={String.raw`\Gamma`} desc="efektywność widmowa modulacji w bit/s/Hz" />
<Symbol symbol={String.raw`R_b`} desc="przepływność binarna (przepustowość kanału)" />
<Symbol symbol={String.raw`B`} desc="szerokość pasma częstotliwości" />
<p className=" text-[14px] text-muted -mt-1 mb-[14px]">gdzie: <code className="font-mono text-txt text-[12.5px]">R<sub>b</sub></code> — szybkość transmisji; <code className="font-mono text-txt text-[12.5px]">B</code> — szerokość pasma częstotliwości zajmowanego przez sygnał zmodulowany.</p>

<BookAddition title="Kontekst do „kombinacji pytań” — czym jest modulacja (str. 36–38)">
<p className="mb-[11px]"><b>Modulacja to zmiana parametrów jednego sygnału (fali) przez inny sygnał (falę).</b> Fala, która podlega zmianom, nazywa się <b>falą nośną</b>, natomiast ta, która na nią oddziałuje — <b>falą informacyjną</b>. Celem modulacji jest <b>dopasowanie sygnału zmodulowanego do parametrów toru transmisyjnego</b>. Fala zmodulowana jest końcowym efektem procesu modulacji fali nośnej przez falę modulującą i jest przesyłana od nadajnika do odbiornika. Zmodulowany sygnał jest <b>bardziej odporny na zakłócenia, przesłuchy</b>, a ponadto w tym samym paśmie można przesłać wiele informacji równocześnie.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaModulacja_img_3} alt="Modulacja analogowa"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 5.1. Modulacja sygnału analogowego: a) fala nośna, b) sygnał analogowy, c) sygnał zmodulowany.</figcaption></figure>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaModulacja_img_4} alt="Modulacja cyfrowa"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 5.2. Modulacja sygnału cyfrowego: a) fala nośna, b) sygnał cyfrowy, c) sygnał zmodulowany.</figcaption></figure>
<p className="mb-[11px]">Systemy modulacji dzielimy na trzy grupy: <b>analogowe, impulsowe i cyfrowe</b>. Do analogowych zaliczamy <b>modulację amplitudy</b> (kodowanie sygnału informacyjnego w chwilowych zmianach amplitudy sygnału nośnego; współczynnik głębokości modulacji {String.raw`\(m=\frac{M}{C}\)`}, gdzie M — amplituda sygnału modulującego, C — amplituda sygnału nośnego; sygnał składa się z fali nośnej oraz <b>wstęgi górnej</b> (F+f) i <b>wstęgi dolnej</b> (F−f)) oraz <b>modulację kąta</b>: <b>modulację częstotliwości FM</b> i <b>modulację fazy PM</b> (amplituda stała, modulowany jest kąt). <b>Dla modulacji PM dewiacja częstotliwości jest proporcjonalna do częstotliwości, natomiast dla modulacji FM dewiacja jest niezależna od częstotliwości.</b> Poza modulacjami prostymi występują modulacje mieszane, np. AM-PM. Dobór typu modulacji jest uzależniony przede wszystkim od odporności na szum i zakłócenia wykorzystywanego kanału transmisyjnego.</p>
<p className="mb-[11px]">W telekomunikacji optycznej, gdy źródłem mocy jest laser, rozróżniamy: <b>modulację bezpośrednią</b> (poprzez zmianę warunków zasilania lasera) i <b>modulację zewnętrzną</b> (odbywa się poza laserem — sygnał jest transmitowany przez modulator i zmienia swoje parametry). Z punktu widzenia tego, co modulujemy w optycznej fali nośnej: <b>modulacja pola</b> i <b>modulacja mocy</b>.</p>
</BookAddition>
</QuestionSection>


<QuestionSection
  id="q14"
  number="14"
  title="Co to jest multipleksacja i jakie są jej zastosowania."
  source="str. 41–43"
  examBadge={{ label: "2025 Zima 1 A", route: "/egzaminy?year=2025&term=Z1&group=A#task-1" }}
>

<p className="mb-[11px]">Kanały, którymi są transmitowane dane, znajdują się w ograniczonym paśmie częstotliwości. Korzystnym jest przeniesienie widma w zakres fal o wyższych częstotliwościach, co <b>zwiększa zasięg łącza</b>. Automatycznie <b>zmniejsza się wartość mocy nadajnika i rozmiar anteny</b>. <b>Równoczesne przesyłanie wielu sygnałów przez jeden kanał transmisyjny jest możliwe dzięki zastosowaniu zwielokrotnienia, czyli multipleksacji.</b></p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Techniki multipleksacji</h3>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>TDM</b> (ang. Time-Division Multiplexing) — zwielokrotnianie z podziałem czasowym, powszechnie stosowane w telekomunikacji elektronicznej do transmisji sygnałów cyfrowych. W łączach optycznych technika ta nazywana jest <b>OTDM</b> (ang. Optical Time-Division Multiplexing).</li>
<li className="mb-1.5"><b>FDM</b> (ang. Frequency-Division Multiplexing) — łączem można przesyłać jednocześnie kilka sygnałów o różnych częstotliwościach nośnych, gdzie każdy z nich może być zmodulowany i nieść odrębną informację.</li>
<li className="mb-1.5"><b>SCM</b> (ang. SubCarier Multiplexing) — w analogowych sieciach optycznych, np. CATV, wykorzystywana jest jedna nośna, ale sygnały różnych kanałów zapisywane są na różnych częstotliwościach mikrofalowych — „podnośnych".</li>
<li className="mb-1.5"><b>CDMA</b> (ang. Code Division Multiple Access) — zastosowanie kodowania transmitowanych sygnałów.</li>
<li className="mb-1.5"><b>WDM</b> (ang. Wavelenght-Division Multiplexing) — w łączach światłowodowych, gdy odstęp między nośnymi jest duży (GHz). Gdy częstotliwości nośne zbliżają się do siebie — <b>DWDM</b> (ang. Dense Wavelenght-Division Multiplexing). Zmniejszając odstęp dochodzimy do zwielokrotnienia <b>DFDM</b> (ang. Dense Frequency-Division Multiplexing).</li>
</ul>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaModulacja_img_5} alt="Klasyfikacja technik multipleksacji"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 5.6. Klasyfikacja technik multipleksacji w zależności od odstępu między nośnymi.</figcaption></figure>
<p className="mb-[11px]">Zwielokrotnienie w domenie długości fali i częstotliwości fali związane jest zależnością:</p>
<BlockFormula tag="(5.4.1)" tex={String.raw`\lambda\nu=\frac{c}{n}`} />
<Symbol symbol={String.raw`\lambda`} desc="długość fali świetlnej w próżni" />
<Symbol symbol={String.raw`\nu`} desc="częstotliwość fali świetlnej" />
<Symbol symbol={String.raw`c`} desc="prędkość światła w próżni" />
<Symbol symbol={String.raw`n`} desc="współczynnik załamania ośrodka" />

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">DWDM — podział trzeciego okna</h3>
<p className="mb-[11px]">W telekomunikacji <b>trzecie okno transmisyjne zostało podzielone na potrzeby techniki DWDM na częstotliwości nośne począwszy od 193,1&nbsp;THz, w prawo i lewo co 200&nbsp;GHz, 100&nbsp;GHz, 50&nbsp;GHz czy 25&nbsp;GHz</b> — tzw. odstęp międzykanałowy.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaModulacja_img_6} alt="Podział trzeciego okna"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 5.7. Podział trzeciego okna na częstotliwości nośne.</figcaption></figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Ograniczenia — przesłuchy</h3>
<p className="mb-[11px]"><b>Im mniejsza jest odległość między kanałami, tym więcej dodatkowych kanałów może być przesyłanych w łączu.</b> Niestety zmniejszanie tej odległości powoduje <b>nasilenie się zjawisk nieliniowych, głównie mieszania czterofalowego — FWM</b> (ang. Four Wave Mixing). W wyniku czego w łączu pojawiają się <b>przesłuchy między kanałami</b>. Moc całkowita w kanale jest definiowana następująco:</p>
<BlockFormula tag="(5.4.2)" tex={String.raw`P=P_m+\sum_{n\neq m}^{N}T_{mn}P_n+\sum_{n,j\neq m}^{N}K_{mnj}P_nP_j`} />
<Symbol symbol={String.raw`P`} desc="całkowita moc w m-tym kanale odbiornika" />
<Symbol symbol={String.raw`P_m`} desc="moc sygnału użytecznego w m-tym kanale" />
<Symbol symbol={String.raw`T_{mn}P_n`} desc="suma przesłuchów liniowych (liniowych interferencji międzykanałowych)" />
<Symbol symbol={String.raw`K_{mnj}P_nP_j`} desc="suma przesłuchów nieliniowych (np. mieszania czterofalowego FWM)" />
<Symbol symbol={String.raw`P_n, P_j`} desc="moce sygnałów w sąsiednich kanałach n i j" />
<p className=" text-[14px] text-muted -mt-1 mb-[14px]">gdzie <code className="font-mono text-txt text-[12.5px]">P<sub>m</sub></code> — moc optyczna m-tego kanału.</p>
<p className="mb-[11px]"><b>Drugi człon</b> równania opisuje <b>przesłuchy liniowe</b>, które są spowodowane małym odstępem między kanałami, wahaniami długości fali świetlnej, szerokością widmową filtrów. <b>Trzeci człon</b> opisuje <b>przesłuchy nieliniowe</b>. Chcąc zmniejszyć wpływ przesłuchów liniowych należy zwiększyć moc nadajnika, ale niestety <b>wraz z mocą wzrasta wpływ zjawisk nieliniowych</b>, takich jak <b>wymuszone rozpraszanie Ramana, wymuszone rozpraszanie Brillouina, skrośna modulacja fazy i mieszanie czterofalowe</b>.</p>

<Conclusion title="Definicja + zastosowania w jednym zdaniu (na egzamin)">
<p className="mb-[11px]"><b>Multipleksacja</b> — transmisja dwóch lub większej liczby kanałów (częstotliwości) w jednym medium transmisyjnym (np. w wolnej przestrzeni, w światłowodach). <b>Zastosowania:</b> cyfrowa telekomunikacja elektroniczna (TDM) i optyczna (OTDM), transmisja wielu nośnych (FDM), analogowe sieci optyczne CATV (SCM), systemy z kodowaniem (CDMA), telekomunikacja światłowodowa dalekiego zasięgu — WDM / DWDM / DFDM w trzecim oknie transmisyjnym.</p>
</Conclusion>
</QuestionSection>


<QuestionSection
  id="q15"
  number="15"
  title="Omów zjawisko mieszania czterofalowego."
  source="str. 42–43"
>

<p className="mb-[11px]"><b>Mieszanie czterofalowe (FWM, ang. Four Wave Mixing) to zjawisko występujące podczas transmisji fali świetlnej o trzech różnych długościach, gdzie w wyniku interferencji generowane są kolejne fale o innych długościach:</b></p>
<BlockFormula tag="(5.4.3)" tex={String.raw`f_{ijk}=f_i+f_j-f_k`} />
<Symbol symbol={String.raw`f_{ijk}`} desc="częstotliwość nowo powstałej fali wtórnej (produktu nieliniowego FWM)" />
<Symbol symbol={String.raw`f_i, f_j, f_k`} desc="częstotliwości fal wejściowych w sąsiednich kanałach WDM" />
<p className=" text-[14px] text-muted -mt-1 mb-[14px]">gdzie {String.raw`\(i,j\neq k\)`}.</p>
<p className="mb-[11px]">Liczbę fal nowopowstałych {String.raw`\(L\)`} w wyniku zjawiska mieszania czterofalowego można wyznaczyć z zależności:</p>
<BlockFormula tag="(5.4.4)" tex={String.raw`L=\frac{N^2(N-1)}{2}`} />
<Symbol symbol={String.raw`L`} desc="liczba powstałych fal wtórnych (produktów nieliniowych FWM)" />
<Symbol symbol={String.raw`N`} desc="liczba transmitowanych nośnych (kanałów)" />
<p className=" text-[14px] text-muted -mt-1 mb-[14px]">gdzie <code className="font-mono text-txt text-[12.5px]">N</code> — liczba fal podstawowych.</p>
<p className="mb-[11px]">Dla dwóch fal o bliskich częstotliwościach {String.raw`\(f_1\)`} i {String.raw`\(f_2\)`} w wyniku mieszania powstają dodatkowo <b>dwie składowe o częstotliwościach {String.raw`\(2f_1-f_2\)`} i {String.raw`\(2f_2-f_1\)`}</b>:</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaModulacja_img_7} alt="Mieszanie czterofalowe" style={{ "maxWidth": "280px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 ">Rysunek 5.8. Mieszanie czterofalowe dla dwóch częstotliwości f₁ i f₂.</figcaption></figure>
<p className="mb-[11px]">W tym przypadku łatwo jest odfiltrować nieużyteczne sygnały. Jednak przypadek, kiedy mamy do czynienia tylko z dwoma częstotliwościami, jest daleki od rzeczywistości. <b>Fale podstawowe, jak i wtórne rozchodzą się w tym samym kierunku, a moc fal wtórnych rośnie kosztem fal podstawowych.</b> Ponadto w zależności od tego, czy odległość między kanałami jest równa czy nie, fale te będą się częściowo pokrywały lub nie, co w efekcie końcowym będzie miało wpływ na jakość otrzymanego sygnału. Część fal podstawowych będzie miała mniejszą moc i dodatkowo powstaną nowe fale. <b>W efekcie pojawi się tłumienie i przesłuchy.</b></p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Jak eliminować FWM</h3>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>Włókna o niezerowym współczynniku dyspersji wykonane zgodnie z normą G.655 eliminują efekt FWM.</b> Z tego powodu doskonale znajdują zastosowanie w systemach DWDM.</li>
<li className="mb-1.5"><b>Im większa jest wartość współczynnika dyspersji, tym mniejsza jest efektywność mieszania czterofalowego.</b> Przykładowo dla światłowodu SMF-28 o współczynniku dyspersji 16&nbsp;ps/nm/km odległość między kanałami może wynosić około 20&nbsp;GHz, natomiast dla włókien o niskim współczynniku dyspersji (np. Leaf Corning 2,5–6&nbsp;ps/km/nm) odległość ta wynosi ponad 50&nbsp;GHz.</li>
<li className="mb-1.5">Szerokość wykorzystywanego pasma jest ograniczona, zatem korzystnym wydaje się użycie światłowodów o większym współczynniku dyspersji, gdzie różnica prędkości grupowych jest większa. <b>Należy jednak pamiętać, że im wyższa wartość współczynnika dyspersji, tym dłuższy musi być światłowód kompensujący, co prowadzi do zmniejszenia mocy</b> (problem omówiony w module dotyczącym dyspersji).</li>
</ul>

<Conclusion title="Definicja ze słowniczka (str. 44) — wersja do wykucia">
<p className="mb-[11px]"><b>Mieszanie czterofalowe</b> — proces nieliniowy trzeciego rzędu, zniekształca transmitowany sygnał, zwiększa wartość współczynnika BER, jest wynikiem oddziaływania fal, wskutek czego są generowane kolejne fale.</p>
<p className="mb-[11px]">Pokrewne (też ze słowniczka): <b>skrośna modulacja fazy</b> — zjawisko nieliniowe, jedna długość fali zmienia fazę fali o innej długości poprzez optyczny efekt Kerra; <b>wymuszone rozpraszanie Ramana / Brillouina</b> — w wyniku oddziaływania materii z fotonami światła następuje wymiana energii poprzez fonony optyczne / akustyczne, wskutek czego powstaje w ośrodku polaryzacja trzeciego rzędu.</p>
</Conclusion>

<BookAddition title="Mini-zadanie (Zadanie 5, str. 44) — rozwiązane">
<p className="mb-[11px]"><b>Treść:</b> Oblicz liczbę fal powstałych w wyniku zjawiska mieszania czterofalowego dla 2, 4 i 8 kanałów.</p>
<p className="mb-[11px]"><b>Rozwiązanie</b> ze wzoru {String.raw`\(L=\frac{N^2(N-1)}{2}\)`}:</p>
<p className="mb-[11px]">{String.raw`\(N=2:\ L=\frac{4\cdot 1}{2}=\mathbf{2}\)`} | {String.raw`\(N=4:\ L=\frac{16\cdot 3}{2}=\mathbf{24}\)`} | {String.raw`\(N=8:\ L=\frac{64\cdot 7}{2}=\mathbf{224}\)`}</p>
<p className="mb-[11px]">Wniosek do szkicu wykresu: liczba nowopowstałych fal rośnie ~{String.raw`\(N^3\)`} — lawinowo z liczbą kanałów.</p>
</BookAddition>
</QuestionSection>

<Footer>FPTiTI · odpowiedzi cz. 3/5 (pytania 13–15) · źródło: A. Szymańska, „Fizyczne podstawy transmisji i przechowywania informacji”, luty 2026 · egzamin 13.06</Footer>
</div>
    



    </>
  );
}

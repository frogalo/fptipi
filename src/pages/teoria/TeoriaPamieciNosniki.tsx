import TeoriaPamieciNosniki_img_1 from '../../assets/TeoriaPamieciNosniki_img_1.jpeg';
import TeoriaPamieciNosniki_img_2 from '../../assets/TeoriaPamieciNosniki_img_2.jpeg';
import TeoriaPamieciNosniki_img_3 from '../../assets/TeoriaPamieciNosniki_img_3.jpeg';
import TeoriaPamieciNosniki_img_4 from '../../assets/TeoriaPamieciNosniki_img_4.jpeg';
import TeoriaPamieciNosniki_img_5 from '../../assets/TeoriaPamieciNosniki_img_5.jpeg';
import TeoriaPamieciNosniki_img_6 from '../../assets/TeoriaPamieciNosniki_img_6.jpeg';
import TeoriaPamieciNosniki_img_7 from '../../assets/TeoriaPamieciNosniki_img_7.jpeg';
import TeoriaPamieciNosniki_img_8 from '../../assets/TeoriaPamieciNosniki_img_8.jpeg';
import TeoriaPamieciNosniki_img_9 from '../../assets/TeoriaPamieciNosniki_img_9.jpeg';
import TeoriaPamieciNosniki_img_10 from '../../assets/TeoriaPamieciNosniki_img_10.jpeg';
import TeoriaPamieciNosniki_img_11 from '../../assets/TeoriaPamieciNosniki_img_11.jpeg';
import TeoriaPamieciNosniki_img_12 from '../../assets/TeoriaPamieciNosniki_img_12.jpeg';
import TeoriaPamieciNosniki_img_13 from '../../assets/TeoriaPamieciNosniki_img_13.jpeg';
import TeoriaPamieciNosniki_img_14 from '../../assets/TeoriaPamieciNosniki_img_14.jpeg';
import TeoriaPamieciNosniki_img_15 from '../../assets/TeoriaPamieciNosniki_img_15.jpeg';
import TeoriaPamieciNosniki_img_16 from '../../assets/TeoriaPamieciNosniki_img_16.jpeg';
import TeoriaPamieciNosniki_img_17 from '../../assets/TeoriaPamieciNosniki_img_17.jpeg';
import TeoriaPamieciNosniki_img_18 from '../../assets/TeoriaPamieciNosniki_img_18.jpeg';
import TeoriaPamieciNosniki_img_19 from '../../assets/TeoriaPamieciNosniki_img_19.jpeg';
import TeoriaPamieciNosniki_img_20 from '../../assets/TeoriaPamieciNosniki_img_20.jpeg';
import TeoriaPamieciNosniki_img_21 from '../../assets/TeoriaPamieciNosniki_img_21.jpeg';
import TeoriaPamieciNosniki_img_22 from '../../assets/TeoriaPamieciNosniki_img_22.jpeg';
import React, { useEffect } from 'react';
import { PageHeader, QuestionSection, BlockFormula } from '../../components/TheoryComponents';
import { Concept, Formula, Symbol, Explanation, Conclusion, BookAddition } from '../../components/MathBlocks';
import Footer from '../../components/Footer';

export default function Teoria21() {

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);





  return (
    <>
      













<div className="max-w-[880px] mx-auto">

<PageHeader
  subtitle="FPTiTI · wzorcowe odpowiedzi egzaminacyjne · część 5 / 5"
  title="Pytania 21–28: Pamięci i nośniki danych"
  description="Treść wiernie wg podręcznika A. Szymańskiej (luty 2026), rozdz. 7–9 · rysunki oryginalne z podręcznika · numeracja pytań wg rozdz. 10"
/>

<nav className="flex flex-wrap gap-2 my-[18px] mb-[30px]">
  <a href="#q21" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">21 · Parametry pamięci</a>
  <a href="#q22" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">22 · Tranzystory bipolarne</a>
  <a href="#q23" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">23 · Tranzystory polowe</a>
  <a href="#q24" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">24 · Pamięć Flash</a>
  <a href="#q25" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">25 · Dyski optyczne</a>
  <a href="#q26" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">26 · Dyski magneto-optyczne</a>
  <a href="#q27" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">27 · Dyski magnetyczne</a>
  <a href="#q28" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">28 · Magnetorezystancja</a>
</nav>


<QuestionSection
  id="q21"
  number="21"
  title="Wymień i opisz podstawowe parametry pamięci półprzewodnikowych."
  source="str. 56–57"
>

<p className="mb-[11px]"><b>Pamięcią nazywamy urządzenie zbudowane z elementów elektronicznych, elektrostatycznych, elektrycznych lub innych, umożliwiające zapis i odczyt danych.</b> Ze względu na formę zapisu danych można wyróżnić następujące rodzaje pamięci: <b>pamięci półprzewodnikowe, pamięci magnetyczne, pamięci optyczne, pamięci magneto-optyczne</b> i inne.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Podstawowe parametry</h3>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>Pojemność</b> — określa <b>liczbę dostępnych jednostek pamięci</b>;</li>
<li className="mb-1.5"><b>Organizacja pamięci</b>;</li>
<li className="mb-1.5"><b>Czas dostępu</b> — określa <b>czas potrzebny do lokalizacji bajtu informacji</b>.</li>
</ul>
<p className="mb-[11px]">Ponadto bardzo ważnymi są też <b>parametry związane z technologiami wykonania nośników pamięci oraz urządzeniami zarządzającymi nośnikami</b>; do najważniejszych z nich należą <b>czas odczytu i zapisu oraz szybkość transmisji danych</b>. To te parametry determinują szybkość korzystania z pamięci.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Własności pamięci półprzewodnikowych</h3>
<p className="mb-[11px]">Pamięci półprzewodnikowe wykonane są <b>w technologii układów scalonych na bazie półprzewodnika</b>. Charakteryzują się <b>krótkim czasem dostępu, znaczną pojemnością i znikomym poborem mocy</b>. Niewątpliwą ich zaletą nad innymi jest to, że <b>nie posiadają elementów mechanicznych</b>, dzięki czemu dostęp do danych jest <b>jednorodny</b> — nie ogranicza go przeskok głowicy, ponadto czas zapisu i odczytu jest również o wiele krótszy. Zastosowanie pamięci półprzewodnikowych w dyskach <b>SSD</b> (ang. Solid State Disk) spowodowało <b>skrócenie czasu dostępu do danych w procesach obliczeniowych nawet o 1000 razy</b>. Macierze SSD działają w oparciu o dwie technologie: <b>pamięci błyskowe lub zasilane z baterii pamięci RAM</b> (czas odczytu podobny, czas zapisu dłuższy w pamięciach błyskowych, bo dane zapisywane są blokami).</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Podział pamięci półprzewodnikowych</h3>
<p className="mb-[11px]">Pamięci półprzewodnikowe to <b>cyfrowe układy scalone przeznaczone do przechowywania informacji w postaci binarnej</b>. Ze względu na działanie dzielimy je na:</p>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>ROM</b> (ang. Read Only Memory) — <b>pamięci do odczytu, tzw. pamięci stałe</b>;</li>
<li className="mb-1.5"><b>RAM</b> (ang. Random Access Memory) — <b>pamięci o dostępie swobodnym służące do wielokrotnego odczytu i zapisu</b>. Pamięci RAM w przeciwieństwie do ROM są <b>pamięciami ulotnymi</b> — po wyłączeniu zasilania informacje są tracone. Wśród nich wyróżniamy <b>statyczne SRAM</b> (należą do najszybszych pamięci półprzewodnikowych) i <b>wolniejsze, ale tańsze dynamiczne DRAM</b>.</li>
</ul>
<BookAddition title="Dlaczego tranzystory są podstawą pamięci">
<p className="mb-[11px]"><b>Podstawowym elementem pamięci półprzewodnikowych są tranzystory.</b> Jedna komórka pamięci <b>DRAM to jeden kondensator i jeden tranzystor</b> (512 MB pamięci DRAM = 512 mln kondensatorów i 512 mln tranzystorów), natomiast komórki bitowe statycznej pamięci <b>SRAM zbudowane są z 4 lub 6 odpowiednio sprzężonych tranzystorów MOS</b> (co zwiększa zajmowaną powierzchnię). W pamięciach wykorzystuje się m.in. <b>mechanizmy przechowywania ładunku w pojemnościach pasożytniczych tranzystorów</b> oraz <b>zależność napięcia progowego tranzystorów MOS od grubości warstwy dielektrycznej</b> pod elektrodą bramki.</p>
</BookAddition>
</QuestionSection>


<QuestionSection
  id="q22"
  number="22"
  title="Omów budowę i zasadę działania tranzystorów bipolarnych."
  source="str. 57–59"
  examBadges={[
    { label: "2026 Lato 1 B", route: "/egzaminy?year=2026&term=L1&group=B#task-1" },
    { label: "2025 Wrzesień A (Zad. 3)", route: "/egzaminy?year=2025&term=Wrzesien&group=A#task-3" },
    { label: "2018 Zima 1 A", route: "/egzaminy?year=2018&term=Z1&group=A#task-1" },
    { label: "2018 Lato 1 A", route: "/egzaminy?year=2018&term=L1&group=A#task-2" }
  ]}
>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Budowa</h3>
<p className="mb-[11px]"><b>Tranzystory bipolarne składają się z dwóch przeciwnie połączonych złącz (p–n i n–p) mających wspólną warstwę p lub n.</b> Tranzystor bipolarny ma trzy elektrody: <b>bazę – B</b> (ang. base), <b>emiter – E</b> (ang. emitter) i <b>kolektor – C</b> (ang. collector). <b>Emiter i kolektor mają ten sam typ przewodnictwa p lub n, natomiast baza charakteryzuje się przewodnictwem przeciwnym</b> do przewodnictwa emitera i kolektora. Możliwe są dwie konfiguracje złączy, które prowadzą do powstania dwóch rodzajów tranzystorów bipolarnych: <b>n–p–n i p–n–p</b>. <b>Emiter dostarcza nośniki mniejszościowe do drugiej warstwy (bazy), natomiast kolektor zbiera nośniki wstrzykiwane z emitera do bazy.</b></p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_1} alt="Symbole tranzystorów bipolarnych"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 7.1. Symbole graficzne i diodowe schematy zastępcze a) tranzystor n–p–n i b) p–n–p.</figcaption></figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Zasada działania (na przykładzie p–n–p)</h3>
<p className="mb-[11px]">Kiedy <b>nie ma polaryzacji zewnętrznej</b>, dziury z emitera nie przenikają do kolektora, ponieważ <b>blokowane są przez barierę potencjału emiter–baza</b>; taka sama sytuacja jest na złączu baza–kolektor. Jeżeli pomiędzy kolektor a emiter zostanie przyłożone napięcie, a <b>baza nie będzie podłączona, to w układzie nie zaobserwujemy przepływu prądu</b>. Natomiast kiedy pomiędzy bazę a emiter zostanie przyłożone napięcie {String.raw`\(U_{BE}\)`}, <b>zmniejszające barierę potencjału, dziury z emitera dostaną się do bazy i przepłyną do kolektora</b>. Zmiana napięcia {String.raw`\(U_{BE}\)`} wpływa na <b>wysokość bariery potencjału w złączu</b>, poza tym istnieje <b>kontrola ilości dziur przechodzących do bazy</b>.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_2} alt="Charakterystyka potencjału w złączu p-n-p"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 7.2. Charakterystyka potencjału w złączu p–n–p a) bez polaryzacji, b) po przyłożeniu napięcia U<sub>CE</sub>, c) złącze emiter–baza spolaryzowane w kierunku przewodzenia napięciem U<sub>BE</sub>.</figcaption></figure>
<p className="mb-[11px]"><b>Obniżenie bariery potencjału powoduje przepływ dziur do bazy i powstaje prąd emitera {String.raw`\(I_E\)`}.</b> Przy czym <b>tylko niewielka część dziur rekombinuje w bazie</b>. Ponadto z bazy do emitera dostają się elektrony, gdzie rekombinują. <b>Żeby zrównoważyć procesy rekombinacyjne przy obniżonej barierze potencjału, z bazy do zewnętrznego źródła musi wypływać prąd {String.raw`\(I_B\)`}.</b> Większość dziur dociera do złącza baza–kolektor; dziury dostają się do kolektora (bariera potencjału nie stanowi dla nich przeszkody), <b>tworząc prąd {String.raw`\(I_C\)`}</b>. Pomiędzy prądami bazy, kolektora i emitera zachodzi związek:</p>
<BlockFormula tag="(7.1.1)" tex={String.raw`I_E=I_C+I_B`} />
<Symbol symbol={String.raw`I_E`} desc="prąd emitera" />
<Symbol symbol={String.raw`I_C`} desc="prąd kolektora" />
<Symbol symbol={String.raw`I_B`} desc="prąd bazy" />
<p className="mb-[11px]">Jeżeli zewnętrzne źródła zezwalają, <b>prąd kolektora jest proporcjonalny do prądu bazy</b>. Ich stosunek określa <b>współczynnik wzmocnienia prądowego tranzystora {String.raw`\(\beta\)`}, którego wartość wynosi od kilku do kilkuset, zazwyczaj około 100</b>:</p>
<BlockFormula tag="(7.1.2)" tex={String.raw`\beta=\frac{I_C}{I_B}`} />
<Symbol symbol={String.raw`\beta`} desc="współczynnik wzmocnienia prądowego" />
<Symbol symbol={String.raw`I_C`} desc="prąd kolektora" />
<Symbol symbol={String.raw`I_B`} desc="prąd bazy" />
<p className="mb-[11px]"><b>Prąd kolektora {String.raw`\(I_C\)`} rośnie wraz z napięciem baza–emiter {String.raw`\(\beta\)`}-razy szybciej niż prąd {String.raw`\(I_B\)`}. Czyli prąd kolektora zależy od prądu bazy, natomiast słabo zależy od napięcia kolektor–emiter.</b> Wprowadzenie prądu do bazy jest możliwe wtedy, kiedy <b>napięcie baza–emiter przekroczy napięcie przewodzenia złącza</b>.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_3} alt="Charakterystyka prądowo-napięciowa tranzystora"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 7.3. Charakterystyka prądowo–napięciowa tranzystora.</figcaption></figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Tranzystor n–p–n</h3>
<p className="mb-[11px]"><b>Działanie tranzystora n–p–n jest analogiczne, tyle że kierunki napięć i prądów są przeciwne, a nośnikami prądu kolektora są elektrony.</b> Przez złącze baza–emiter przepływają nośniki większościowe: z emitera do bazy płyną głównie <b>elektrony swobodne</b>, natomiast z bazy do emitera płyną <b>dziury</b> (prąd dziurowy jest znacznie mniejszy, gdyż mniejsza jest liczba dziur). Mniejsza część elektronów swobodnych po dotarciu do obszaru bazy zajmuje istniejące tam dziury (rekombinacja). <b>Ważnym jest, żeby dziury nie zrekombinowały w bazie, dlatego baza musi być odpowiednio cienka. Czas rekombinacji dziur w bazie musi być znacznie dłuższy niż czas ich dyfuzji przez bazę.</b> Większa część elektronów swobodnych jest przyciągana przez kolektor i przepływa przez złącze baza–kolektor, które jest <b>spolaryzowane zaporowo</b>. Elektrony swobodne wypływające z emitera tworzą prąd emitera {String.raw`\(I_E\)`}, który w obszarze bazy <b>dzieli się na niewielki prąd bazy {String.raw`\(I_B\)`} i dużo większy prąd kolektora {String.raw`\(I_C\)`}</b>.</p>
<Conclusion title="Sedno odpowiedzi w jednym zdaniu">
<p className="mb-[11px]">Tranzystor umożliwia <b>sterowanie przepływem dużego prądu (kolektora) za pomocą prądu znacznie mniejszego (bazy)</b> — dzięki temu tranzystory pozwalają <b>wzmacniać małe sygnały oraz przetwarzać informację w postaci cyfrowej</b>.</p>
</Conclusion>
</QuestionSection>


<QuestionSection
  id="q23"
  number="23"
  title="Omów budowę i zasadę działania tranzystorów polowych."
  source="str. 59–63"
  examBadges={[
    { label: "2025 Lato 1 B", route: "/egzaminy?year=2025&term=L1&group=B#task-1" },
    { label: "2018 Zima 1 B", route: "/egzaminy?year=2018&term=Z1&group=B#task-1" }
  ]}
>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Podział i budowa</h3>
<p className="mb-[11px]"><b>Tranzystory polowe – FET (ang. Field Effect Transistor) dzieli się na tranzystory polowe złączowe – JFET (ang. Junction FET) oraz tranzystory polowe z izolowaną bramką – IGFET (ang. Insulated Gate FET). Sterowanie prądem odbywa się tu za pomocą pola elektrycznego wytwarzanego przez bramkę.</b> Podstawową częścią tranzystora polowego jest <b>kryształ odpowiednio domieszkowanego półprzewodnika z dwiema elektrodami: źródłem – S (ang. source) i drenem – D (ang. drain)</b>. Źródło jest odpowiednikiem emitera w tranzystorze bipolarnym, natomiast dren to odpowiednik kolektora. <b>Pomiędzy źródłem a drenem tworzy się kanał, w którym płynie prąd. Wzdłuż kanału umieszczona jest trzecia elektroda – bramka – G (ang. gate), stanowiąca odpowiednik bazy.</b></p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Tranzystor JFET</h3>
<p className="mb-[11px]">W tranzystorze JFET w półprzewodniku zostały wytworzone <b>trzy warstwy</b>: warstwa środkowa ma określony typ przewodnictwa (p lub n), a pozostałe dwie warstwy zewnętrzne to <b>silnie domieszkowane warstwy półprzewodnika przeciwnego typu</b> — występują tu więc <b>dwa złącza typu p–n</b>. Po obu stronach złącza p–n istnieje <b>obszar pozbawiony swobodnych nośników prądu</b> (obszar nie przewodzi prądu). <b>Szerokość tego obszaru zależy od napięcia pomiędzy warstwami p i n — jest tym większa, im większe jest napięcie polaryzujące złącze p–n w kierunku zaporowym, co wpływa na wzrost oporu kanału.</b> Czyli zmieniając napięcie przyłożone pomiędzy bramkę a kanał, możemy zmienić szerokość obszaru pozbawionego nośników w kanale.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Tranzystor MOSFET — budowa</h3>
<p className="mb-[11px]">Tranzystor z izolowaną bramką typu <b>MOSFET</b> (ang. Metal–Oxide Semiconductor FET) wykonany jest z kryształu domieszkowanego półprzewodnika z dwiema elektrodami: źródłem i drenem. Wzdłuż elektrod umieszczona jest <b>warstwa izolatora, na której napylona jest trzecia elektroda – bramka</b>. Warstwa izolatora wykonywana jest z <b>tlenku metalu lub półmetalu</b>; jest bardzo cienka — jej grubość w skrajnych przypadkach wynosi <b>5 atomów tlenu</b>. Elektroda umieszczona na izolatorze wykonywana jest z <b>metalu o wysokiej przewodności (np. złoto)</b>.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_4} alt="Przekrój MOSFET - polaryzacja zerowa"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 7.4. Przekrój tranzystora MOSFET, gdy polaryzacja bramki i drenu jest zerowa.</figcaption></figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Zasada działania MOSFET</h3>
<p className="mb-[11px]"><b>Zasada działania tranzystora MOSFET jest całkowicie inna niż tranzystorów bipolarnych — występująca tu warstwa izolatora powoduje, że przez bramkę nie płynie żaden prąd.</b></p>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>Polaryzacja bramki i drenu zerowa:</b> obszary półprzewodnika typu n⁺ rozdzielone zostały półprzewodnikiem typu p; w okolicy źródła i drenu występuje obszar jonów ujemnych. <b>Nie ma przepływu między drenem i źródłem — mamy do czynienia z „zatkaniem" tranzystora.</b></li>
<li className="mb-1.5"><b>Bramka zasilona napięciem {String.raw`\(U_{GS}\)`}:</b> pole elektryczne wytworzone przez bramkę <b>oddziałuje poprzez izolator na półprzewodnik. W półprzewodniku indukuje się warstwa inwersyjna składająca się z elektronów swobodnych, dzięki czemu możliwy jest przepływ pomiędzy drenem a źródłem.</b> Wraz ze wzrostem napięcia polaryzującego bramkę wzrasta zdolność przewodności elektrycznej tranzystora.</li>
</ul>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_5} alt="Przekrój MOSFET - polaryzacja bramki dodatnia"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 7.5. Przekrój tranzystora MOSFET, gdy polaryzacja bramki jest dodatnia a drenu zerowa.</figcaption></figure>
<p className="mb-[11px]"><b>Po zasileniu drenu</b> przez tranzystor zacznie płynąć prąd, który będzie od niego zależny, jednakże <b>nie jest to zależność liniowa</b>. Wzrost napięcia drenu zmienia stan polaryzacji bramki: <b>im bliżej drenu, tym różnica potencjałów pomiędzy bramką a podłożem jest mniejsza i kanał staje się płytszy</b>. Wzrost napięcia zasilającego dren powoduje nie tylko wzrost wartości prądu, ale również <b>wzrost rezystancji kanału inwersyjnego, co jest związane z jego zwężaniem</b>; wzrost wartości prądu jest zgodny z prawem Ohma.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_6} alt="Przekrój MOSFET - polaryzacja bramki i drenu dodatnia"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 7.6. Przekrój tranzystora MOSFET, gdy polaryzacja bramki i drenu jest dodatnia.</figcaption></figure>
<p className="mb-[11px]">Warto rozpatrzyć przypadek, kiedy <b>napięcie bramki jest równe napięciu drenu</b>. W tej sytuacji <b>kanał w pobliżu drenu zanika całkowicie i następuje nasycenie prądu drenu. Po przekroczeniu tego napięcia do wartości granicznych wartość prądu nie zmienia się.</b></p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_7} alt="Przekrój MOSFET przy UDS=UGS"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 7.7. Przekrój tranzystora MOSFET gdy polaryzacja bramki i drenu jest dodatnia U<sub>DS</sub> = U<sub>GS</sub>.</figcaption></figure>
<Conclusion title="Dwa obszary pracy MOSFET">
<p className="mb-[11px]"><b>Tranzystor MOSFET może pracować w dwóch obszarach: nasycenia i nienasycenia. W obszarze nasycenia prąd {String.raw`\(I_D\)`} jest stały dla różnych napięć dren–źródło {String.raw`\(U_{DS}\)`}. Natomiast w obszarze nienasycenia, dla małych wartości {String.raw`\(U_{DS}\)`}, prąd drenu jest proporcjonalny do napięcia drenu. W obydwu przypadkach prąd drenu jest funkcją napięcia bramka–źródło.</b></p>
</Conclusion>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_8} alt="Charakterystyka wyjściowa MOSFET" style={{ "maxWidth": "380px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 7.8. Charakterystyka wyjściowa tranzystora MOSFET.</figcaption></figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Porównanie tranzystorów bipolarnych i polowych (Tabela 7.1)</h3>
<table className="w-full border-collapse my-3 text-[14.5px]">
<tbody><tr><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">Rodzaj tranzystora</th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">BIPOLARNY</th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">POLOWY</th></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Konstrukcja</td><td className="border border-line px-2.5 py-1.5 text-left">emiter, baza, kolektor;<br/>budowa asymetryczna</td><td className="border border-line px-2.5 py-1.5 text-left">źródło, bramka, dren;<br/>budowa asymetryczna</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Rodzaj sterowania</td><td className="border border-line px-2.5 py-1.5 text-left"><b>prądowe</b></td><td className="border border-line px-2.5 py-1.5 text-left"><b>napięciowe</b></td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Transkonduktancja</td><td className="border border-line px-2.5 py-1.5 text-left">nie zależy od parametrów jego struktury, 1000&nbsp;mA/V</td><td className="border border-line px-2.5 py-1.5 text-left">zależy od rozmiarów geometrycznych struktury, przenikalności elektrycznej warstwy dielektryka i ruchliwości nośników, 5&nbsp;mA/V; bardzo duża impedancja wejściowa; kwadratowy przebieg charakterystyki przejściowej</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Zasilanie</td><td className="border border-line px-2.5 py-1.5 text-left"><b>ciągłe</b></td><td className="border border-line px-2.5 py-1.5 text-left"><b>tylko podczas przełączania</b></td></tr>
</tbody></table>

<BookAddition title="Extra: tranzystory trzybramkowe (3D Tri-gate)">
<p className="mb-[11px]"><b>Długość bramki wyznacza wielkość tranzystora — dla krzemu minimalna odległość wynosi 5 nm</b> (poniżej pojawiają się problemy podczas przepływu elektronów ze źródła do drenu). W 2012 roku firma <b>Intel</b> zastosowała tranzystory trzybramkowe, w których <b>bramki kontrolują przepływ elektronów z trzech stron</b> — pozwoliło to na dalsze funkcjonowanie <b>prawa Moore'a</b>. Technologia żebrowa zapewnia <b>lepszą kontrolę przepływu elektronów</b> (wyższa wydajność, mniejsze straty), pozwala <b>umieszczać tranzystory bliżej siebie</b> i <b>zmniejsza zużycie energii</b>. Dzięki nowym materiałom (disiarczek molibdenu, nanorurki węglowe, grafen) wytwarzano tranzystory poniżej 5 nm; w 2022 r. powstały tranzystory z bramkami o długości zaledwie <b>0,34 nm</b>.</p>
</BookAddition>
</QuestionSection>


<QuestionSection
  id="q24"
  number="24"
  title="Omów zasadę działania i parametry pamięci Flash."
  source="str. 63–65"
>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Pamięć EEPROM — punkt wyjścia</h3>
<p className="mb-[11px]"><b>Pamięć EEPROM to pamięć kasowalna i programowalna elektrycznie. Jedna komórka tego typu pamięci składa się z jednego tranzystora MNOS (ang. Metal Nitride Oxide Semiconductor). Do każdej komórki można wprowadzić ładunek elektryczny poprzez przyłożenie wysokiego napięcia (20–40 V) do bramki tranzystora. Między bramką a podłożem wykonanym z tlenku krzemu, w izolowanej warstwie azotku krzemu, przechowywany jest ładunek i taki stan jest interpretowany jako zero logiczne. Jeżeli zmieni się polaryzację tego napięcia, to proces można odwrócić i skasować pamięć, co odpowiada logicznej jedynce.</b> Pamięci EEPROM mają technologicznie ograniczoną liczbę cykli kasowania i zapisu, powyżej której powstają nieodwracalne uszkodzenia.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Pamięć Flash EEPROM (pamięć błyskowa)</h3>
<p className="mb-[11px]"><b>Odmianą pamięci EEPROM jest pamięć Flash EEPROM, tzw. pamięć błyskowa. Kasowanie, jak i zapisywanie danych odbywa się tylko dla określonej dla danego typu liczby komórek pamięci jednocześnie, podczas jednej sekwencji operacji programowania.</b> Nie ma potrzeby użycia promieniowania UV, jak to było w pamięciach EPROM. <b>Istnieje możliwość elektrycznego wielokrotnego kasowania pamięci — około 10 000–100 000 razy.</b></p>
<p className="mb-[11px]">Jeśli napięcie bramki w tranzystorze MOSFET jest równe napięciu podłoża, to w układzie nie płynie prąd — <b>tranzystor jest wyłączony</b>. Po przyłożeniu napięcia do bramki w półprzewodniku powstaje pole elektryczne i wytwarza się w nim obszar o tym samym typie co źródło i dren — <b>tranzystor jest włączony</b>. Bardzo ważnym jest, że <b>tranzystor polowy pobiera prąd tylko w momencie przełączania stanu</b>. Ponadto <b>raz umieszczone elektrony na bramce pływającej mogą pozostać tam przez wiele lat, pamiętając zaprogramowany stan</b>.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Struktury NOR i NAND</h3>
<p className="mb-[11px]"><b>Wyróżniamy dwie struktury pamięci: Flash typu NOR lub Flash typu NAND</b>, ze względu na wykorzystanie odpowiednich funktorów NOR i NAND.</p>
<table className="w-full border-collapse my-3 text-[14.5px]">
<tbody><tr><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider"></th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">Flash NOR</th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">Flash NAND</th></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Dostęp do komórek</td><td className="border border-line px-2.5 py-1.5 text-left"><b>bezpośredni dostęp do każdej komórki</b></td><td className="border border-line px-2.5 py-1.5 text-left"><b>sekwencyjny dostęp do danych (wada)</b></td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Czas zapisu i kasowania</td><td className="border border-line px-2.5 py-1.5 text-left">stosunkowo <b>długi</b> — nie stosuje się, gdy wymagane są częste aktualizacje</td><td className="border border-line px-2.5 py-1.5 text-left"><b>krótszy</b></td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Gęstość upakowania danych</td><td className="border border-line px-2.5 py-1.5 text-left">mniejsza</td><td className="border border-line px-2.5 py-1.5 text-left"><b>większa</b></td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Trwałość</td><td className="border border-line px-2.5 py-1.5 text-left">od 10 do 100 tys. cykli</td><td className="border border-line px-2.5 py-1.5 text-left"><b>dziesięć razy większa</b>; korzystniejszy stosunek kosztu do pojemności</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Zastosowania</td><td className="border border-line px-2.5 py-1.5 text-left">—</td><td className="border border-line px-2.5 py-1.5 text-left">karty SmartMedia, MultiMedia Card, Secure Digital, Memory Stick, xD Picture Card, pamięci USB</td></tr>
</tbody></table>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Wady pamięci Flash</h3>
<p className="mb-[11px]"><b>Niewątpliwą wadą pamięci Flash jest to, że zapis komórki pamięci Flash jest możliwy po wcześniejszym jej skasowaniu — do zapisanej komórki nie można ponownie zapisać danych. Kasowanie umożliwia usunięcie tylko całych bloków komórek</b> (niemożliwe jest skasowanie pojedynczej komórki), natomiast <b>odczytać i zapisać można dowolną komórkę pamięci</b>. Kiedy chcemy zaktualizować lub nadpisać plik, tworzona jest <b>nowa kopia pliku w innym miejscu, a stary plik nadal pozostaje i zajmuje miejsce</b>; do całkowitego usunięcia bezużytecznej wersji dojdzie tylko wtedy, gdy w danym bloku pamięci nie ma fragmentu innego pliku. <b>Operacja kasowania jest znacznie dłuższa niż operacja zapisu i odczytu.</b> Wzrost szybkości działania umożliwia jednoczesny odczyt i zapis komórek o różnych adresach.</p>

<Conclusion title="Co zdecydowało o dużej popularności pamięci Flash? (możliwe pytanie dodatkowe)">
<ul style={{ "marginBottom": "0" }} className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>pamięć trwała (nieulotna)</b> — po odłączeniu zasilania nie traci zapisanych danych; elektrony na bramce pływającej pozostają przez wiele lat;</li>
<li className="mb-1.5"><b>brak elementów mechanicznych</b> — jednorodny i krótki czas dostępu, odporność na wstrząsy;</li>
<li className="mb-1.5"><b>znikomy pobór mocy</b> — tranzystor polowy pobiera prąd tylko w momencie przełączania stanu;</li>
<li className="mb-1.5"><b>elektryczne, wielokrotne kasowanie</b> (bez UV), do ~100 000 cykli;</li>
<li className="mb-1.5"><b>duża gęstość upakowania i korzystny stosunek kosztu do pojemności</b> (zwłaszcza NAND) oraz gwałtowny spadek cen pamięci półprzewodnikowych;</li>
<li className="mb-1.5"><b>uniwersalność zastosowań</b> — pamięci USB, dyski SSD, karty pamięci (MMC, SD, MS, CF, SM, xD).</li>
</ul>
</Conclusion>
</QuestionSection>


<QuestionSection
  id="q25"
  number="25"
  title="Omów jeden ze sposobów odtwarzania i zapisu informacji na dyskach optycznych."
  source="str. 66–74"
  examBadge={{ label: "2025 Zima 1 A", route: "/egzaminy?year=2025&term=Z1&group=A#task-2" }}
>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Budowa płyty CD–R</h3>
<p className="mb-[11px]"><b>Płyta CD–R (ang. Compact Disc–Recordable) to przeźroczysty krążek o średnicy 12 cm i wadze 14 g, zbudowany z kilku warstw:</b></p>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>poliwęglan</b> — pierwsza warstwa od strony lasera; przezroczyste tworzywo o współczynniku załamania <b>n = 1,55</b> i grubości <b>1,2 mm</b>; nadaje kształt i sztywność płycie, nie wprowadza efektów magnetycznych, elektrycznych ani optycznych;</li>
<li className="mb-1.5"><b>warstwa odbijająca</b> — wykonana najczęściej z <b>aluminium, złota lub srebra</b>; jest tak cienka, że nawet najmniejsze zadrapanie powoduje utratę informacji;</li>
<li className="mb-1.5"><b>warstwa ochronna</b> — powłoka lakieru o grubości około <b>30 μm</b>; na niej producenci umieszczają nadruki.</li>
</ul>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_9} alt="Przekrój płyty CD-R"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 8.2. Przekrój poprzeczny przez płytę CD–R.</figcaption></figure>
<p className="mb-[11px]">Wytłoczone zagłębienia w warstwie poliwęglanu nazywa się <b>pitami</b>, a pozostałe płaskie obszary to <b>landy</b>. Pity tworzą ciąg układający się w <b>spiralną ścieżkę</b>. <b>Szerokość ścieżki na płycie CD wynosi 0,6 μm</b>, nałożone na nią <b>odchylenie sinusoidalne ma wartość 0,3 μm i częstotliwość 22,05 kHz</b> (częstotliwość odchylenia jest wykorzystywana do <b>sterowania prędkością obrotową dysku</b>). <b>Odległość między ścieżkami wynosi 1,6 μm.</b></p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Zapis — zmiana fazy (technologia CD–RW)</h3>
<p className="mb-[11px]">Dyski <b>CD–RW</b> (ang. Compact Disc ReWritable) to płyty wielokrotnego zapisu. <b>Warstwa nagrywana zbudowana jest ze stopu czterech pierwiastków: srebra, indu, antymonu i telluru (Ag–In–Sb2–Te)</b>, który charakteryzuje się <b>dużą różnicą pomiędzy temperaturą krystalizacji a temperaturą topnienia</b>. Po obydwu jej stronach znajdują się <b>warstwy dielektryczne, których zadaniem jest poprawienie odprowadzania ciepła z nośnika</b>; najdalej od głowicy znajduje się <b>warstwa refleksyjna (najczęściej srebro)</b>.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_10} alt="Przekrój płyty CD-RW"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 8.4. Przekrój poprzeczny przez płytę CD–RW.</figcaption></figure>
<p className="mb-[11px]"><b>Żeby nastąpiła rejestracja informacji, musi nastąpić zmiana struktury materiału nośnika z krystalicznej na amorficzną (zapis) i odwrotnie — z amorficznej na krystaliczną (kasowanie).</b></p>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>Zapis:</b> wiązka lasera <b>podgrzewa warstwę powyżej temperatury topnienia (około 500–700°C)</b>, czas podgrzewania trwa ułamki sekundy. <b>Stopione kryształy przechodzą do stanu amorficznego</b> (czas chłodzenia jest bardzo krótki), w którym <b>współczynnik odbicia jest niższy niż dla stanu krystalicznego</b> — struktura amorficzna <b>rozprasza światło</b>, natomiast stop krystaliczny jest <b>wysoce refleksyjny</b>.</li>
<li className="mb-1.5"><b>Kasowanie (wyżarzanie):</b> stop podgrzewa się do <b>temperatury powyżej 200°C</b> i utrzymuje w niej przez pewien czas, co prowadzi do <b>odtworzenia krystalicznej struktury</b>.</li>
<li className="mb-1.5">Zmianę temperatury uzyskuje się <b>poprzez zmianę mocy wiązki lasera: najwyższa moc (15 mW) służy do wypalania obszarów amorficznych, zaś moc najniższa (do 3 mW) nie zmienia stanu warstwy i służy do odczytu danych</b>.</li>
<li className="mb-1.5">Obecne nośniki umożliwiają nagranie i skasowanie danych <b>około 1000 razy</b>.</li>
</ul>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_11} alt="Struktura amorficzna i krystaliczna" style={{ "maxWidth": "420px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 8.5. Struktura amorficzna i krystaliczna.</figcaption></figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Odczyt — interferencja na pitach i landach</h3>
<p className="mb-[11px]">W odtwarzaczach CD najczęściej używanym laserem jest <b>dioda GaAlAs emitująca światło o długości 780 nm w powietrzu; w poliwęglanie długość światła jest mniejsza i wynosi około 500 nm</b> (współczynnik załamania poliwęglanu 1,55). <b>Wgłębienia mają głębokość dokładnie jednej czwartej długości fali światła w poliwęglanie — czyli około 125 nm. Fala świetlna po odbiciu od landu będzie opóźniona o pół długości fali (λ/4 + λ/4 = λ/2), więc będzie dokładnie w przeciw-fazie do fali odbitej od pitu — zgodnie z prawem optyki o interferencji dwie odbite fale wygaszają się, powodując spadek sygnału na fotodetektorze.</b></p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_12} alt="Pity i landy" style={{ "maxWidth": "360px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 8.6. Pity i landy na dysku optycznym.</figcaption></figure>
<p className="mb-[11px]">Przejście z powietrza do poliwęglanu powoduje, że <b>wiązka o szerokości 800 μm w płaszczyźnie wierzchniej płyty w warstwie odbijającej ma średnicę zaledwie 1,7 μm</b> — zanieczyszczenia typu kurz, włosy, drobne rysy są dużo mniejsze niż średnica wiązki, są zatem niezauważalne i nie wpływają na odczyt danych.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Układ optyczny zapisu/odczytu</h3>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_13} alt="Układ do odczytu i zapisu na płytach CD" style={{ "maxWidth": "430px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 8.7. Układ do odczytu lub do zapisu na płytach CD.</figcaption></figure>
<p className="mb-[11px]"><b>Układ odczytu danych zapisanych na płycie CD składa się z: głowicy, którą stanowi dioda laserowa poruszająca się na specjalnych sankach; układu optycznego (toru transmisyjnego); oraz zespołu fotodiod odczytujących odbite światło laserowe.</b> Fotodiody służą do <b>kontroli ogniskowania lasera i śledzenia odczytywanej ścieżki</b>. <b>Prędkość liniowa odczytu danych musi być stała i wynosi 1,25 m/s</b> — jako że różny jest promień spirali, <b>płyta musi obracać się ze zmienną prędkością (od 500 do 200 obrotów/minutę)</b>.</p>
<p className="mb-[11px]">Światło z lasera trafia na <b>soczewkę kolimującą</b> (wiązka rozbieżna staje się równoległa), następnie przechodzi przez <b>zwierciadło półprzepuszczalne</b> (wnosi niewielkie tłumienie, nie zmienia kierunku propagacji). Dalej <b>soczewka o odpowiednio dobranej aperturze numerycznej</b> (im wyższa apertura, tym mniejsza plamka) <b>skupia światło w płaszczyźnie warstwy rejestrującej</b>. Wiązka pada na wgłębienia i pola niezapisane i w zależności od miejsca padania <b>ulega w różnym stopniu odbiciu i polaryzacji</b>. Po odbiciu wraca tą samą drogą przez soczewkę, ale <b>zwierciadło półprzepuszczalne powoduje, że wiązka odbija się od niego i trafia do układu detekcyjnego</b>. Następnie sygnał z fotodetektora jest <b>wzmacniany i poddawany demodulacji, korekcji błędów</b>, aż wreszcie przetwarzany jest na sygnał analogowy.</p>
<Conclusion title="Kodowanie bitów">
<p className="mb-[11px]"><b>Odczyt danych z płyty CD polega na odczytywaniu poziomu mocy światła odbitego od kolejnych pitów i landów.</b> Kiedy wiązka pada na pit, ulega częściowemu rozproszeniu, a pozostała część ulega <b>interferencji ze światłem sąsiednich landów</b>, wskutek czego jest wygaszana — stały poziom mocy na detektorze (<b>logiczne „0"</b>). W obszarze landów poziom sygnału jest wysoki, ale również stały (<b>logiczne „0"</b>). <b>Przy przejściu wiązki z obszaru pitu do landu lub odwrotnie odnotowywana jest zmiana poziomu sygnału, co oznacza logiczną „1".</b> Czyli: <b>każda zmiana = logiczne „1", brak zmiany = logiczne „0".</b></p>
</Conclusion>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_14} alt="Zapis cyfrowy na płycie" style={{ "maxWidth": "480px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 8.8. Zapis cyfrowy na płycie.</figcaption></figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Porównanie CD i DVD (możliwe pytanie dodatkowe)</h3>
<table className="w-full border-collapse my-3 text-[14.5px]">
<tbody><tr><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">Parametr</th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">CD</th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-wider">DVD</th></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Głębokość najmniejszych zagłębień</td><td className="border border-line px-2.5 py-1.5 text-left">0,83 μm</td><td className="border border-line px-2.5 py-1.5 text-left"><b>0,4 μm (dwukrotnie mniejsze)</b></td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Odległość ścieżek</td><td className="border border-line px-2.5 py-1.5 text-left">1,6 μm</td><td className="border border-line px-2.5 py-1.5 text-left"><b>0,74 μm</b></td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Długość spirali zapisu</td><td className="border border-line px-2.5 py-1.5 text-left">—</td><td className="border border-line px-2.5 py-1.5 text-left"><b>ponad 11 km — ponad dwa razy dłuższa niż na CD</b></td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Długość fali lasera</td><td className="border border-line px-2.5 py-1.5 text-left">780 nm</td><td className="border border-line px-2.5 py-1.5 text-left"><b>635–650 nm</b> + soczewki o większej zdolności skupiania</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Pojemność</td><td className="border border-line px-2.5 py-1.5 text-left">650 MB</td><td className="border border-line px-2.5 py-1.5 text-left"><b>4,7–17 GB</b> (dwie warstwy zapisu — dolna półprzezroczysta — oraz zapis z dwóch stron; DVD17 ≈ 27 płyt CD)</td></tr>
</tbody></table>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_15} alt="Rozkład pitów CD vs DVD"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 8.13. Rozkład pitów na płytach CD i DVD.</figcaption></figure>
<BookAddition title="Blu-ray">
<p className="mb-[11px]">Nośniki <b>Blu-ray</b> różnią się przede wszystkim <b>zwiększoną pojemnością</b> (sięgającą <b>400 GB</b>), którą uzyskano przez <b>wielowarstwowość zapisu (nawet do 16 warstw)</b> oraz inne źródło światła — <b>niebieski laser (405 nm) o krótszej długości fali</b>. Zastosowanie laserów o coraz krótszych długościach fali umożliwia odczyt gęściej zapisanych informacji (jeszcze mniejsze pity).</p>
</BookAddition>
</QuestionSection>


<QuestionSection
  id="q26"
  number="26"
  title="Omów jeden ze sposobów odtwarzania i zapisu informacji na dyskach magneto-optycznych."
  source="str. 71–73"
>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Budowa płyty CD–MO</h3>
<p className="mb-[11px]"><b>Budowa dysku typu CD–MO (ang. Compact Disc – Magneto Optical) jest bardzo podobna do płyt CD–RW, z tą różnicą, że warstwa nagrywająca jest zbudowana z materiału magnetycznego.</b> Podłoże najczęściej stanowi przeźroczysty, niemagnetyczny poliwęglan. <b>Warstwa magnetyczna (o grubości 100 nm) zbudowana jest z magnetycznych cząstek jednodomenowych (krystalitów)</b>, w których zachodzi namagnesowanie spontaniczne magnesów atomowych wskutek ich oddziaływań między sobą, co powoduje równoległe ustawienie względem siebie w jednym kierunku. Sąsiednie domeny mają magnesy atomowe ustawione w dwóch przeciwstawnych kierunkach; obszary między domenami, w których zachodzi zmiana kierunku, nazywa się <b>ścianami domenowymi</b>. <b>Domeny magnetyczne w płytach CD–MO ustawione są prostopadle do powierzchni płyty.</b></p>
<p className="mb-[11px]"><b>Żeby zaszła zmiana ustawień domen magnetycznych, należy podgrzać obszar do temperatury 150–180°C. Jest to temperatura Curie, powyżej której drgania cieplne powodują drgania sieci krystalicznej, przez co niszczą ustawienia dipoli magnetycznych. Poniżej temperatury Curie dipole magnetyczne ustawiają się w jednym kierunku, tworząc domeny ferromagnetyczne.</b></p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Zapis</h3>
<p className="mb-[11px]">Zapis jest binarny: na czystej lub skasowanej płycie krystality skierowane są w jednym kierunku (ku górze lub w dół). <b>Zapis magnetooptyczny polega na zmianie kierunku namagnesowania krystalitów tak, żeby cząstki skierowane do góry oznaczały np. logiczną jedynkę, a w dół — logiczne zero. Zmiana ustawienia możliwa jest wtedy, kiedy dojdzie do jednoczesnego oddziaływania na nie pola magnetycznego głowicy zapisującej i wiązki światła laserowego.</b> W praktyce stosuje się dwie techniki zapisu:</p>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>OMM (ang. Optical Modulation Method) — modulacja optyczna: w stałym polu magnetycznym następuje zmiana temperatury nośnika, spowodowana działaniem wiązki lasera.</b> Linie pola magnetycznego są prostopadłe do powierzchni płyty, ale pole jest <b>zbyt słabe, by przemagnesować cząstki</b>. Sytuacja zmienia się, kiedy wiązka lasera <b>nagrzeje nośnik do temperatury Curie</b> — następuje <b>zanik właściwości magnetycznych i cząstki mogą się swobodnie obrócić zgodnie z kierunkiem zewnętrznego pola magnetycznego</b>. Kierunek namagnesowania zmieniają <b>tylko te cząstki, na które pada wiązka światła</b>. Po ochłodzeniu powierzchni cząstki <b>zachowują nadany im zwrot wektora magnetycznego — na płycie trwale zostają zapisane bity informacji</b>.</li>
<li className="mb-1.5"><b>MFMM (ang. Magnetic Field Modulation Method) — modulacja pola magnetycznego: moc lasera jest stała, płyta jest podgrzewana do temperatury Curie, natomiast zmienia się wartość przyłożonego pola magnetycznego. Wartość tego pola decyduje o tym, które domeny zostaną przeorientowane.</b></li>
</ul>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_16} alt="Zapis i kasowanie na płytach magneto-optycznych"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 8.12. Sposób a) zapisu, b) kasowania danych na płytach magneto–optycznych.</figcaption></figure>
<p className="mb-[11px]"><b>Na płycie CD–MO powstają obszary o dwóch stanach namagnesowania, które reprezentują logiczne zero i logiczną jedynkę — czego odpowiednikiem w zwykłych optycznych płytach CD są pity i landy.</b></p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Odczyt — efekt Kerra</h3>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_17} alt="Układ do odczytu i zapisu na płytach MO"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 8.10. Układ a) do odczytu oraz b) do zapisu na płytach magneto–optycznych.</figcaption></figure>
<p className="mb-[11px]"><b>Wiązka światła z lasera po przejściu przez układ optyczny trafia na warstwę cząstek namagnesowanych; w zależności od kierunku ich namagnesowania polaryzacja światła odbitego jest różna — to znaczy światło może być spolaryzowane w dwóch prostopadłych płaszczyznach</b> (rotacja Kerra). Analizator przed detektorem rozróżnia te dwie polaryzacje, co pozwala odczytać stan logiczny domeny.</p>

<Conclusion title="Kasowanie i nadpisywanie">
<p className="mb-[11px]"><b>Bezproblemowym jest kasowanie i ponowne nagrywanie płyty. Nie jest koniecznym wcześniejsze usuwanie danych — „nowe" dane zapisywane są na „starych".</b> Można też wyczyścić całą płytę, co polega na <b>przywróceniu pierwotnego wektora magnetycznego</b> wszystkich domen.</p>
</Conclusion>
</QuestionSection>


<QuestionSection
  id="q27"
  number="27"
  title="Omów zasadę zapisu/odczytu z dysków magnetycznych."
  source="str. 75–79"
>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Podstawy fizyczne — własności magnetyczne substancji</h3>
<p className="mb-[11px]">W przyrodzie nie występują substancje całkowicie obojętne magnetycznie; istnieje podział na:</p>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>diamagnetyki</b> — ciała o <b>przenikalności magnetycznej mniejszej niż przenikalność magnetyczna próżni</b>; po umieszczeniu w zewnętrznym polu magnetycznym powstaje w nich pole skierowane przeciwnie (gazy szlachetne, cynk, złoto, srebro, miedź, fosfor);</li>
<li className="mb-1.5"><b>paramagnetyki</b> — ciała o przenikalności <b>niewiele większej od jedynki</b>; w obecności zewnętrznego pola słabo się magnesują, przy jego braku nie wykazują własności magnetycznych;</li>
<li className="mb-1.5"><b>ferromagnetyki (materiały magnetyczne)</b> — <b>ciała wykazujące namagnesowanie spontaniczne, o dużej wartości przenikalności magnetycznej</b>; to one znajdują zastosowanie w nośnikach magnetycznych (specjalne stopy magnetyczne, ferryty, tlenki żelaza i/lub chromu).</li>
</ul>
<p className="mb-[11px]">W procesie produkcji na taśmę lub krążek nakładane są mikromagnesy stanowiące tzw. <b>domeny magnetyczne — elementarne pola podlegające przemagnesowaniom, czyli zapisowi informacji</b>. Pusty nośnik stanowi jedynie <b>zbiór chaotycznie rozmieszczonych domen magnetycznych</b>. <b>Proces magnesowania i przemagnesowywania substancji ferromagnetycznych opisuje pętla histerezy, pokazująca zmiany indukcji magnetycznej w funkcji natężenia pola magnetycznego.</b> Dla zapisów cyfrowych stosuje się <b>materiał magnetycznie twardy (trudno przemagnesowywany)</b>; materiał <b>magnetycznie miękki</b> jest łatwo przemagnesowywany.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_18} alt="Pętla histerezy magnetycznej" style={{ "maxWidth": "380px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 9.1. Pętla histerezy magnetycznej dla materiałów magnetycznie miękkich (linia zielona) i twardych (linia czerwona).</figcaption></figure>
<div className="rounded-[10px] px-4 py-[14px] my-[14px] border bg-red/10 border-[#7d3a3a]"><span className="font-mono text-[11px] tracking-[0.14em] uppercase block mb-2">Temperatura Curie i rozmagnesowanie</span>
<p className="mb-[11px]"><b>Wraz ze wzrostem temperatury zmniejsza się stopień twardości materiału, w wyniku czego wzrasta podatność nośnika na przemagnesowanie i rozmagnesowanie. Punktem krytycznym jest podgrzanie nośnika do temperatury Curie, przy której materiał traci zdolności do magnesowania.</b> Nośniki magnetyczne powinny pracować i być przechowywane w możliwie niskich temperaturach, należy też unikać silnych zewnętrznych pól. W nośnikach zachodzi <b>proces rozmagnesowywania powodowany oddziaływaniem sił międzydomenowych</b> — wskazane jest <b>okresowe przegrywanie danych celem ponownego namagnesowania nośnika</b>.</p>
</div>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Ogólna zasada zapisu i odczytu</h3>
<p className="mb-[11px]"><b>Zapis informacji polega na zmianie prądu głowicy, co powoduje namagnesowanie nośnika magnetycznego. Odczyt odbywa się przy użyciu głowicy czytającej: nośnik zawierający zakodowaną informację przesuwa się względem głowicy, w której generowany jest prąd (zmienne pole magnetyczne).</b> W zapisie cyfrowym <b>za wartość stanu logicznego odpowiada kierunek namagnesowania domen — logiczna jedynka odpowiada przejściu z jednego stanu do stanu o przeciwnym namagnesowaniu.</b></p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_19} alt="Cyfrowy zapis na taśmie magnetycznej" style={{ "maxWidth": "440px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 9.3. Schemat cyfrowego zapisu na taśmach magnetycznych.</figcaption></figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Twarde dyski — budowa</h3>
<p className="mb-[11px]"><b>W skład dysku wchodzi wirujący talerz lub kilka talerzy, które najczęściej są wykonane ze stopów aluminium. Pokryte są one nośnikiem magnetycznym o grubości kilku mikrometrów. Zapis i odczyt danych umożliwia głowica/głowice, które umieszczone są na elastycznych ramionach.</b> Podczas przestoju głowica styka się z talerzem blisko osi, natomiast <b>w czasie pracy unosi się — odległość głowicy od talerza jest stabilizowana poprzez działającą siłę aerodynamiczną, która powstaje w wyniku szybkich obrotów talerza</b>. W celu odczytania/zapisania danych głowica ustawia się w odpowiedniej odległości od osi obrotu talerza — umożliwia to <b>cewka, która pod wpływem silnego pola magnetycznego porusza się i zajmuje położenie zgodnie z przepływającym przez nią prądem, ustawiając ramię głowicy w odpowiedniej pozycji</b>. <b>Czas przejścia między kolejnymi ścieżkami jest krótszy niż 1 milisekunda</b>, a przy maksymalnych odległościach nie przekracza kilkudziesięciu milisekund.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_20} alt="Twardy dysk po zdjęciu obudowy" style={{ "maxWidth": "480px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 9.4. Twardy dysk po zdjęciu obudowy.</figcaption></figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Twarde dyski — zapis i odczyt</h3>
<Conclusion title="Kluczowe zdania odpowiedzi">
<p className="mb-[11px]"><b>Zapis odbywa się poprzez przesyłanie strumienia elektromagnetycznego przez głowicę — wraz ze zmianą strumienia magnetycznego następuje zmiana kierunku namagnesowania. Natomiast odczyt odbywa się w odwrotny sposób: zmienne pole magnetyczne indukuje prąd w cewce, który jest następnie przetwarzany przez układ elektroniczny napędu.</b></p>
</Conclusion>
<p className="mb-[11px]"><b>Bloki danych umieszczane są w sektorach, znajdujących się na kolejnych ścieżkach</b> wokół środka krążka. Istnieją dwa rodzaje konstrukcji krążka: <b>sektory proporcjonalne albo równe</b>. Żeby odnaleźć zapisane dane, należy odnaleźć odpowiednią ścieżkę i sektor. Dyski stałe posiadają zazwyczaj <b>kilka dwustronnych krążków</b>; stosuje się <b>tyle głowic zapisu/odczytu, ile jest zapisywalnych stron wszystkich krążków</b>. W celu zwiększenia pojemności stosuje się różne konstrukcje głowic, np. <b>głowice magnetooporowe MR i GMR</b> (→ pytanie 28).</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_21} alt="Organizacja pamięci na krążku" style={{ "maxWidth": "380px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 9.5. Organizacja pamięci na krążku magnetycznym.</figcaption></figure>
<p className="mb-[11px]"><b>Najważniejszymi parametrami twardych dysków są: pojemność, szybkość transmisji danych, czas dostępu, prędkość obrotowa talerzy (ilość obrotów/min.) oraz MTBF (ang. Mean Time Between Failures) — czas bezawaryjnej pracy.</b> Chcąc zwiększyć niezawodność i przestrzeń oraz zmniejszyć czas dostępu, kilka dysków twardych łączy się w <b>macierze dyskowe</b>. Popularność dyski twarde zawdzięczają m.in.: <b>trwałości zapisu do 100 lat, dużej prędkości zapisu i odczytu, wysokiej odporności na nadpisanie lub skasowanie, małej ilości błędów, odporności na uszkodzenia oraz małej wrażliwości na pola elektromagnetyczne</b>.</p>
<BookAddition title="Extra: taśmy magnetyczne (gdyby padło pytanie pomocnicze)">
<p className="mb-[11px]">Taśmy zbudowane są z giętkiej warstwy tworzywa sztucznego (nylon lub PET) pokrytej lakierem z <b>cząsteczkami proszku ferromagnetycznego</b> (tlenki żelaza, tlenek chromu). Wyróżniamy <b>zapis równoległy</b> (ścieżki wzdłuż taśmy, wiele głowic, odtwarzanie w obie strony, szybki odczyt) i <b>zapis skośny/helikalny</b> (dane pod kątem, kilkukrotnie dłuższa ścieżka). Główna wada: <b>sekwencyjny dostęp do danych</b>. Obecnie taśmy służą do <b>archiwizacji (streamery)</b>; standardy: DAT, DLT, QIC, Travan, <b>LTO (największa pojemność — 2,5 TB)</b>.</p>
</BookAddition>
</QuestionSection>


<QuestionSection
  id="q28"
  number="28"
  title="Omów zjawisko magnetorezystancji."
  source="str. 79–80"
  examBadge={{ label: "2025 Wrzesień A (Zad. 1)", route: "/egzaminy?year=2025&term=Wrzesien&group=A#task-1" }}
>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Magnetoopór (zjawisko Gaussa)</h3>
<p className="mb-[11px]"><b>Magnetoopór (magnetorezystancja, zjawisko Gaussa) to zjawisko polegające na zmianie rezystywności (oporu) metali i półprzewodników w zależności od zmian zewnętrznego pola magnetycznego.</b> Mechanizm: <b>w polu magnetycznym tor cząstki naładowanej zakrzywia się, w wyniku czego droga, którą pokonuje cząstka, wydłuża się — co skutkuje zmniejszeniem natężenia prądu (wzrostem oporu).</b> Zjawisko to wykorzystano w <b>głowicach magnetooporowych MR (ang. Magneto Resistivity) i GMR (ang. Giant MR)</b>, stosowanych w celu zwiększenia pojemności dysków twardych.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Gigantyczna magnetorezystancja (GMR)</h3>
<p className="mb-[11px]"><b>Ze zjawiskiem gigantycznej magnetorezystancji spotykamy się wtedy, kiedy następuje znaczna zmiana oporu wielowarstwowego układu. Ferromagnetyczne warstwy metalowe są oddzielone od siebie przewodzącymi, nieferromagnetycznymi warstwami. Po przyłożeniu zewnętrznego pola magnetycznego pojawia się zmiana względnej orientacji momentów magnetycznych ferromagnetycznych warstw — w związku z czym magnetoopór ulega zmianom. Efekt ten jest znacznie większy niż zjawisko magnetooporu, stąd nazwano go gigantyczną magnetorezystancją.</b></p>
<p className="mb-[11px]">W najnowszych rozwiązaniach <b>już przy bardzo słabych polach magnetycznych występuje zmiana oporu elektrycznego o kilkadziesiąt procent</b>. Dzięki tak <b>wysokiej czułości oraz nanoskopowym rozmiarom</b> struktury te nadają się idealnie do budowy <b>głowic odczytujących informacje z twardych dysków</b>. Warto pamiętać, że <b>efekt ten jest czuły na zmiany temperatury</b>. Zmiany pola magnetycznego powstają wskutek zmian orientacji magnetycznej domen — głowica odczuwa je, a następnie rejestruje.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Działanie głowicy odczytującej (zawór spinowy)</h3>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPamieciNosniki_img_22} alt="Schemat działania głowicy odczytującej GMR"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 9.6. Schemat działania głowicy odczytującej.</figcaption></figure>
<p className="mb-[11px]"><b>Głowica odczytująca zawiera dwie warstwy magnetyczne. Jedna z nich wykonana jest z miękkiego ferromagnetyka (magnetyzacja ma kierunek równoległy do powierzchni nośnika), natomiast druga z twardego (magnetyzacja ma kierunek prostopadły do powierzchni nośnika).</b></p>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>Kiedy głowica przechodzi nad ścianką N–N domen</b>, jej pole magnetyczne powoduje, że <b>magnetyzacja miękkiego ferromagnetyka staje się prostopadła do powierzchni nośnika. Wartość oporu magnetycznego zaworu spinowego wzrasta (albo maleje), w związku z czym wartość prądu elektrycznego też ulega zmianom — odpowiednio maleje (albo wzrasta).</b></li>
<li className="mb-1.5"><b>W trakcie przejścia głowicy przez ściankę S–S następuje zmiana orientacji magnetyzacji miękkiego ferromagnetyka — kierunek namagnesowania staje się przeciwny, a prąd elektryczny płynący przez głowicę wzrasta (albo maleje).</b></li>
</ul>
<Conclusion title="Granica gęstości zapisu">
<p className="mb-[11px]"><b>Zapis i odczyt informacji może być wykonywany z bardzo dużą gęstością, wynoszącą nawet do 100 GB/cm². Wartość ta graniczy z fizycznymi możliwościami zapisu informacji na nośnikach magnetycznych — powyżej niej napotyka się na problemy związane z wielkością domen, które stają się porównywalne z wielkością ścianek między nimi.</b></p>
</Conclusion>
</QuestionSection>

<Footer>FPTiTI · odpowiedzi cz. 5/5 (pytania 21–28) · źródło: A. Szymańska, „Fizyczne podstawy transmisji i przechowywania informacji", luty 2026 · egzamin 13.06</Footer>
</div>
    



    </>
  );
}

import TeoriaPolprzewodniki_img_1 from '../../assets/TeoriaPolprzewodniki_img_1.png';
import TeoriaPolprzewodniki_img_2 from '../../assets/TeoriaPolprzewodniki_img_2.png';
import TeoriaPolprzewodniki_img_3 from '../../assets/TeoriaPolprzewodniki_img_3.png';
import TeoriaPolprzewodniki_img_4 from '../../assets/TeoriaPolprzewodniki_img_4.png';
import TeoriaPolprzewodniki_img_5 from '../../assets/TeoriaPolprzewodniki_img_5.png';
import TeoriaPolprzewodniki_img_6 from '../../assets/TeoriaPolprzewodniki_img_6.png';
import TeoriaPolprzewodniki_img_7 from '../../assets/TeoriaPolprzewodniki_img_7.png';
import TeoriaPolprzewodniki_img_8 from '../../assets/TeoriaPolprzewodniki_img_8.png';
import React, { useEffect } from 'react';
import { PageHeader, QuestionSection, BlockFormula } from '../../components/TheoryComponents';
import { Concept, Formula, Symbol, Explanation, Conclusion, BookAddition } from '../../components/MathBlocks';
import Footer from '../../components/Footer';

export default function Teoria16() {

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);





  return (
    <>
      













<div className="max-w-[880px] mx-auto">

<PageHeader
  subtitle="FPTiTI · wzorcowe odpowiedzi egzaminacyjne · część 4 / 5"
  title="Pytania 16–20: Fizyka półprzewodników"
  description="Treść wiernie wg podręcznika A. Szymańskiej (luty 2026), rozdz. 6 · rysunki oryginalne z podręcznika · numeracja pytań wg rozdz. 10"
/>

<nav className="flex flex-wrap gap-2 my-[18px] mb-[30px]">
  <a href="#q16" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">16 · Półprzewodniki samoistne i domieszkowane</a>
  <a href="#q17" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">17 · Koncentracja — równowaga</a>
  <a href="#q18" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">18 · Koncentracja — nierównowaga</a>
  <a href="#q19" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">19 · Transport nośników</a>
  <a href="#q20" className="font-mono text-[11.5px] text-amber-soft no-underline border border-line bg-panel px-2.5 py-1.5 rounded-full hover:border-amber transition-colors">20 · Złącze p–n</a>
</nav>


<QuestionSection
  id="q16"
  number="16"
  title="Półprzewodniki samoistne i domieszkowane."
  source="str. 45–48"
>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Czym są półprzewodniki</h3>
<p className="mb-[11px]"><b>Półprzewodniki to materiały, których przewodnictwo elektryczne jest zawarte w przedziale {String.raw`\(10^{-9}-10^{3}\,[\Omega^{-1}cm^{-1}]\)`}; zależy ono silnie od domieszkowania, temperatury czy napromieniowania.</b> Rezystywność półprzewodników jest <b>większa niż rezystywność metali</b> (przewodników), natomiast <b>mniejsza niż rezystywność dielektryków</b> (izolatorów). Ponadto <b>dominuje tu przewodnictwo elektronowe nad jonowym</b>. Przerwa energetyczna półprzewodników leży w większości przypadków pomiędzy wartościami <b>0&nbsp;eV i 3&nbsp;eV</b>, ale są to wartości umowne.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPolprzewodniki_img_1} alt="Modele pasmowe"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 6.1. Porównanie energetycznego modelu pasmowego dla a) metalu, b) półprzewodnika i c) dielektryka.</figcaption></figure>
<p className="mb-[11px]">Odstęp oznaczony symbolem {String.raw`\(E_g\)`}, określający odległość pomiędzy wierzchołkiem pasma walencyjnego a dnem pasma przewodnictwa, nazywa się <b>przerwą energetyczną bądź pasmem zabronionym</b>. W temperaturze zera bezwzględnego pasmo walencyjne jest całkowicie obsadzone elektronami, a pasmo przewodnictwa jest całkowicie puste. Jeżeli nastąpi wzrost temperatury, część elektronów z pasma walencyjnego przechodzi do pasma przewodnictwa i pojawią się puste miejsca w paśmie walencyjnym, tzw. dziury. <b>Proces ten nazywa się generacją par elektron–dziura.</b> Do powstania nośników swobodnych ładunku koniecznym jest dostarczenie energii z zewnątrz. <b>Szerokość przerwy zabronionej jest równa wartości energii, jaką trzeba dostarczyć do sieci krystalicznej, żeby elektron został uwolniony z wiązania kowalencyjnego.</b> W przypadku metali przerwa zabroniona nie istnieje (pasmo walencyjne i przewodnictwa zachodzą wzajemnie na siebie), a w dielektrykach jest ona większa niż w półprzewodnikach.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Rodzaje półprzewodników</h3>
<p className="mb-[11px]">Wyróżniamy półprzewodniki <b>jednoelementowe</b> i <b>dwuelementowe</b>. Do jednoelementowych należą pierwiastki czwartej grupy układu okresowego (krzem, german, węgiel i cyna) oraz piątej i szóstej grupy (siarka, tellur, fosfor, selen, arsen i antymon). <b>Wiązania między atomami są czysto kowalencyjne.</b> Rozmieszczenie dwunastu pierwiastków (w nawiasach szerokość przerwy energetycznej):</p>
<table className="w-full border-collapse my-3 text-[14.5px]">
<tbody><tr><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-[0.05em]">Okres \ Grupa</th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-[0.05em] text-center">III</th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-[0.05em] text-center">IV</th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-[0.05em] text-center">V</th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-[0.05em] text-center">VI</th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-[0.05em] text-center">VII</th></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">II</td><td className="border border-line px-2.5 py-1.5 text-left text-center">B (1,1 eV)</td><td className="border border-line px-2.5 py-1.5 text-left text-center">C (5,2 eV)</td><td className="border border-line px-2.5 py-1.5 text-left text-center">—</td><td className="border border-line px-2.5 py-1.5 text-left text-center">—</td><td className="border border-line px-2.5 py-1.5 text-left text-center">—</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">III</td><td className="border border-line px-2.5 py-1.5 text-left text-center">—</td><td className="border border-line px-2.5 py-1.5 text-left text-center">Si (1,1 eV)</td><td className="border border-line px-2.5 py-1.5 text-left text-center">P (1,5 eV)</td><td className="border border-line px-2.5 py-1.5 text-left text-center">S (2,5 eV)</td><td className="border border-line px-2.5 py-1.5 text-left text-center">—</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">IV</td><td className="border border-line px-2.5 py-1.5 text-left text-center">—</td><td className="border border-line px-2.5 py-1.5 text-left text-center">Ge (0,7 eV)</td><td className="border border-line px-2.5 py-1.5 text-left text-center">As (1,2 eV)</td><td className="border border-line px-2.5 py-1.5 text-left text-center">Se (1,7 eV)</td><td className="border border-line px-2.5 py-1.5 text-left text-center">—</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">V</td><td className="border border-line px-2.5 py-1.5 text-left text-center">—</td><td className="border border-line px-2.5 py-1.5 text-left text-center">Sn (0,08 eV)</td><td className="border border-line px-2.5 py-1.5 text-left text-center">Sb (0,12 eV)</td><td className="border border-line px-2.5 py-1.5 text-left text-center">Te (0,36 eV)</td><td className="border border-line px-2.5 py-1.5 text-left text-center">J (1,25 eV)</td></tr>
</tbody></table>
<p style={{ "color": "var(--muted)", "fontSize": "13px" }} className="mb-[11px]">Tabela 6.1.</p>
<p className="mb-[11px]">Z tabeli wynika, że <b>szerokość przerwy energetycznej w każdym okresie rośnie wraz ze wzrostem liczby atomowej, natomiast odwrotnie jest w grupach</b>, gdzie wraz ze wzrostem liczby atomowej wartość szerokości przerwy energetycznej maleje. Istnieją półprzewodniki składające się z dwóch rodzajów atomów oraz półprzewodniki mieszane. W przemyśle elektronicznym najczęściej stosuje się: <b>krzem, german, arsenek galu, azotek galu, antymonek indu lub tellurek kadmu</b>. Materiały półprzewodnikowe wytwarza się w postaci <b>monokryształów, polikryształów lub proszku</b>. Ze względu na własności fizyczne półprzewodniki dzielimy na <b>samoistne i domieszkowane</b>.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Półprzewodniki samoistne</h3>
<p className="mb-[11px]">W idealnych półprzewodnikach samoistnych mamy do czynienia z <b>doskonałą strukturą krystaliczną — nie występują tu żadne domieszki czy defekty sieci krystalicznej</b>. W większości półprzewodników koncentracja elektronów przewodnictwa jest mała. W temperaturze zera bezwzględnego w paśmie przewodnictwa nie ma elektronów; powyżej tej temperatury następuje <b>generacja par elektron–dziura</b> — wraz ze wzrostem temperatury rośnie liczba tych par. Półprzewodniki samoistne charakteryzują się <b>dużą rezystywnością</b> — żeby uniknąć tego problemu, stosuje się domieszkowanie. <b>Koncentracja elektronów i dziur jest taka sama i wynosi tyle samo co koncentracja samoistna:</b></p>
<BlockFormula tag="(6.1.1)" tex={String.raw`n=p=n_i`} />
<Symbol symbol={String.raw`n, p`} desc="koncentracja elektronów oraz dziur w półprzewodniku samoistnym" />
<Symbol symbol={String.raw`n_i`} desc="koncentracja samoistna nośników ładunku" />
<p className="mb-[11px] text-[14px] text-muted -mt-1 mb-[14px]">gdzie: <code className="font-mono text-txt text-[12.5px]">n</code> — koncentracja elektronów; <code className="font-mono text-txt text-[12.5px]">p</code> — koncentracja dziur; <code className="font-mono text-txt text-[12.5px]">n<sub>i</sub></code> — koncentracja samoistna.</p>
<BlockFormula tag="(6.1.2)" tex={String.raw`n_i=\frac{2(2\pi kT)^{3/2}}{h^3}(m_e^*m_h^*)^{3/4}e^{-E_g/2kT}`} />
<Symbol symbol={String.raw`n_i`} desc="koncentracja samoistna nośników ładunku" />
<Symbol symbol={String.raw`k`} desc="stała Boltzmanna" />
<Symbol symbol={String.raw`T`} desc="temperatura bezwzględna" />
<Symbol symbol={String.raw`h`} desc="stała Plancka" />
<Symbol symbol={String.raw`m_e^*, m_h^*`} desc="efektywne masy elektronu i dziury" />
<Symbol symbol={String.raw`E_g`} desc="szerokość przerwy energetycznej (pasma zabronionego)" />
<p className="mb-[11px] text-[14px] text-muted -mt-1 mb-[14px]">gdzie: <code className="font-mono text-txt text-[12.5px]">k</code> = 1,38·10⁻²³ [J/K] = 8,62·10⁻⁵ [eV/K] — stała Boltzmanna; <code className="font-mono text-txt text-[12.5px]">T</code> — temperatura; <code className="font-mono text-txt text-[12.5px]">h</code> = 6,62·10⁻³⁴ [J·s] = 4,136·10⁻¹⁵ [eV·s] — stała Plancka; <code className="font-mono text-txt text-[12.5px]">E<sub>g</sub></code> — szerokość pasma zabronionego; <code className="font-mono text-txt text-[12.5px]">m<sub>h</sub>*</code> — masa efektywna dziur; <code className="font-mono text-txt text-[12.5px]">m<sub>e</sub>*</code> — masa efektywna elektronów.</p>
<Conclusion title="Wniosek z (6.1.2)">
<p className="mb-[11px]">Koncentracja dziur <b>bardzo szybko wzrasta wraz ze wzrostem temperatury, natomiast maleje wraz ze wzrostem szerokości przerwy energetycznej</b>. Im temperatura wyższa, tym większa energia ruchu termicznego — rośnie prawdopodobieństwo przejścia elektronów z pasma walencyjnego do pasma przewodnictwa. Kiedy szerokość przerwy jest większa, mniej elektronów może ją pokonać, gdyż nie mają wystarczającej energii. <b>Reasumując: koncentracja samoistna wzrasta wraz z temperaturą, przy czym zmiany te są większe dla półprzewodników o większej przerwie energetycznej.</b></p>
</Conclusion>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Półprzewodniki domieszkowane</h3>
<p className="mb-[11px]">Do idealnego półprzewodnika <b>celowo wprowadzane są domieszki</b>, które nie wchodzą w skład półprzewodnika samoistnego — dzięki nim zmianom ulegają własności półprzewodnika. Jeżeli w sieci pojawi się domieszka o pewnej energii jonizacji, to w obszarze przerwy energetycznej powstanie <b>dodatkowy poziom energetyczny</b>. W wyniku domieszkowania pojawia się <b>nadmiar lub niedobór elektronów</b>.</p>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>Półprzewodnik typu n</b> — powstaje po wprowadzeniu domieszki dającej <b>nadmiar elektronów</b>; domieszkę taką nazywa się <b>donorową, ponieważ oddaje elektron</b>. Powstaje <b>poziom donorowy</b>, położony w obszarze pasma zabronionego <b>w pobliżu dna pasma przewodnictwa</b> lub w samym paśmie przewodnictwa. Nadmiar elektronów jest uwalniany do pasma przewodnictwa w postaci elektronów swobodnych zdolnych do przewodzenia prądu — <b>przewodnictwo elektronowe / typu n</b> (ang. negative — ujemny). Domieszki donorowe to głównie pierwiastki z <b>piątej grupy</b> układu okresowego — np. dla krzemu typową domieszką donorową są <b>atomy fosforu</b>.</li>
<li className="mb-1.5"><b>Półprzewodnik typu p</b> — powstaje po wprowadzeniu domieszki dającej <b>niedobór elektronów</b>; domieszkę nazywa się <b>akceptorową, ponieważ przyjmuje elektron</b>. Powstaje <b>poziom akceptorowy</b>, położony <b>w pobliżu pasma walencyjnego</b> lub w samym paśmie walencyjnym. Poziomy te wiążą elektrony i w paśmie walencyjnym powstają wolne miejsca — <b>dziury elektronowe</b>, które zachowują się jak swobodne cząstki o ładunku dodatnim i są zdolne do przewodzenia prądu — <b>przewodnictwo dziurowe / typu p</b> (ang. positive — dodatni). Domieszki akceptorowe to głównie pierwiastki z <b>trzeciej grupy</b> — np. dla krzemu typową domieszką akceptorową są <b>atomy boru</b>, rzadziej atomy aluminium, indu czy galu.</li>
</ul>
<p className="mb-[11px]"><b>Masa efektywna dziur jest zazwyczaj większa od masy efektywnej elektronów; dziury mają mniejszą ruchliwość, co wpływa na to, że rezystywność półprzewodników typu p jest zazwyczaj większa niż półprzewodników typu n.</b></p>
<p className="mb-[11px]"><b>Poziomy płytkie i głębokie:</b> powyższe domieszki znajdują się w niewielkiej odległości od granic pasm energetycznych — stąd nazwa <b>poziomy płytkie</b>. Istnieją też domieszki położone dużo dalej od granicy pasm — <b>poziomy głębokie</b> (np. atomy miedzi wprowadzone do germanu czy atomy złota w krzemie). Powodują one powstanie dozwolonych poziomów energetycznych położonych w okolicy środka pasma zabronionego. Atomy takich domieszek z podobnym prawdopodobieństwem mogą wymienić elektrony z pasmem walencyjnym czy pasmem przewodnictwa — <b>nie są to zatem ani domieszki donorowe, ani akceptorowe</b>. Powstaje tzw. <b>centrum generacyjno-rekombinacyjne</b> — elektron, chcąc przedostać się z pasma walencyjnego do pasma przewodnictwa, musi wykonać dwa przejścia, potrzebując dużo mniej energii.</p>
</QuestionSection>


<QuestionSection
  id="q17"
  number="17"
  title="Koncentracja nośników w stanie równowagi termodynamicznej."
  source="str. 48–50"
  examBadge={{ label: "2026 Lato 1 A", route: "/egzaminy?year=2026&term=L1&group=A#task-1" }}
>

<p className="mb-[11px]"><b>W stanie równowagi termodynamicznej półprzewodniki mają ustaloną temperaturę i nie działają na nie żadne zewnętrzne czynniki.</b> Koncentracja elektronów i dziur zależy od <b>koncentracji dozwolonych poziomów energetycznych i prawdopodobieństwa ich obsadzenia</b>:</p>
<BlockFormula tag="(6.3.1)" tex={String.raw`n=\int_{E_c}^{\infty}N(E)f_n(E)\,dE`} />
<Symbol symbol={String.raw`n`} desc="koncentracja elektronów w paśmie przewodnictwa" />
<Symbol symbol={String.raw`E_c`} desc="energia dna pasma przewodnictwa" />
<Symbol symbol={String.raw`N(E)`} desc="gęstość stanów energetycznych w paśmie przewodnictwa" />
<Symbol symbol={String.raw`f_n(E)`} desc="rozkład prawdopodobieństwa obsadzenia stanu (funkcja Fermiego-Diraca)" />
<BlockFormula tag="(6.3.2)" tex={String.raw`p=\int_{E_v}^{0}N(E)f_p(E)\,dE`} />
<Symbol symbol={String.raw`p`} desc="koncentracja dziur w paśmie walencyjnym" />
<Symbol symbol={String.raw`E_v`} desc="energia stropu pasma walencyjnego" />
<Symbol symbol={String.raw`N(E)`} desc="gęstość stanów energetycznych w paśmie walencyjnym" />
<Symbol symbol={String.raw`f_p(E)`} desc="rozkład prawdopodobieństwa nieobsadzenia stanu (zajęcia przez dziurę)" />
<p className="mb-[11px] text-[14px] text-muted -mt-1 mb-[14px]">gdzie: <code className="font-mono text-txt text-[12.5px]">N(E)</code> — rozkład koncentracji poziomów energetycznych w funkcji energii; <code className="font-mono text-txt text-[12.5px]">f<sub>n</sub>(E)</code> — funkcja rozkładu prawdopodobieństwa zajęcia poziomu energetycznego E przez elektron; <code className="font-mono text-txt text-[12.5px]">f<sub>p</sub>(E)</code> — funkcja rozkładu prawdopodobieństwa zajęcia poziomu energetycznego E przez dziurę.</p>
<p className="mb-[11px]">Wygodnym jest wprowadzenie pojęcia <b>efektywnej koncentracji stanów energetycznych</b> sprowadzonych odpowiednio do poziomu dna pasma przewodnictwa ({String.raw`\(N_c\)`}) i wierzchołka pasma walencyjnego ({String.raw`\(N_v\)`}):</p>
<BlockFormula tag="(6.3.3)–(6.3.4)" tex={String.raw`n=N_c f_n(E_c),\qquad p=N_v f_p(E_v)`} />
<Symbol symbol={String.raw`n, p`} desc="koncentracja elektronów / dziur" />
<Symbol symbol={String.raw`N_c, N_v`} desc="efektywna gęstość stanów w paśmie przewodnictwa / walencyjnym" />
<Symbol symbol={String.raw`f_n(E_c)`} desc="prawdopodobieństwo obsadzenia stanu na dnie pasma przewodnictwa" />
<Symbol symbol={String.raw`f_p(E_v)`} desc="prawdopodobieństwo nieobsadzenia stanu na stropie pasma walencyjnego" />
<p className="mb-[11px]">Koncentracje {String.raw`\(N_c\)`} i {String.raw`\(N_v\)`} zależą od temperatury, natomiast <b>funkcje rozkładu Fermiego–Diraca</b>:</p>
<BlockFormula tag="(6.3.5)" tex={String.raw`f_n(E)=\frac{1}{1+e^{(E-E_F)/kT}}`} />
<Symbol symbol={String.raw`f_n(E)`} desc="prawdopodobieństwo zajęcia stanu o energii E przez elektron (funkcja Fermiego-Diraca)" />
<Symbol symbol={String.raw`E_F`} desc="poziom Fermiego" />
<Symbol symbol={String.raw`k`} desc="stała Boltzmanna" />
<Symbol symbol={String.raw`T`} desc="temperatura bezwzględna" />
<BlockFormula tag="(6.3.6)" tex={String.raw`f_p(E)=1-f_n(E)=\frac{e^{(E-E_F)/kT}}{1+e^{(E-E_F)/kT}}`} />
<Symbol symbol={String.raw`f_p(E)`} desc="prawdopodobieństwo nieobsadzenia stanu przez elektron (zajęcia przez dziurę)" />
<Symbol symbol={String.raw`f_n(E)`} desc="funkcja rozkładu Fermiego-Diraca dla elektronów" />
<Symbol symbol={String.raw`E_F`} desc="poziom Fermiego" />
<Symbol symbol={String.raw`k`} desc="stała Boltzmanna" />
<Symbol symbol={String.raw`T`} desc="temperatura bezwzględna" />
<p className="mb-[11px] text-[14px] text-muted -mt-1 mb-[14px]">gdzie <code className="font-mono text-txt text-[12.5px]">E<sub>F</sub></code> — energia Fermiego (poziom Fermiego).</p>
<p className="mb-[11px]"><b>Poziom Fermiego to taki poziom energetyczny, dla którego prawdopodobieństwo zajęcia przez elektron wynosi 0,5.</b></p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPolprzewodniki_img_2} alt="Rozkład Fermiego-Diraca"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 6.2. Rozkład Fermiego–Diraca dla półprzewodnika a) samoistnego, b) typu n i c) typu p.</figcaption></figure>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5">w półprzewodniku <b>samoistnym</b> (koncentracja dziur i elektronów taka sama) poziom Fermiego jest położony <b>dokładnie pośrodku pasma zabronionego</b>;</li>
<li className="mb-1.5">w półprzewodniku <b>typu n</b> (więcej elektronów niż dziur) poziom Fermiego znajduje się <b>bliżej dna pasma przewodnictwa</b>;</li>
<li className="mb-1.5">w półprzewodniku <b>typu p</b> (więcej dziur niż elektronów) poziom Fermiego znajduje się <b>bliżej wierzchołka pasma walencyjnego</b>.</li>
</ul>
<p className="mb-[11px]">W praktyce korzystamy ze statystyki Fermiego–Diraca <b>dla półprzewodników zdegenerowanych</b>, to znaczy wtedy, kiedy istnieje duża koncentracja domieszek. W przypadku, kiedy poziom energetyczny odległy jest o kilka {String.raw`\(kT\)`} od poziomu Fermiego, w wyrażeniu (6.3.5) można pominąć 1 i wtedy rozkład energetyczny dla elektronów i dziur przyjmuje postać <b>rozkładu Boltzmanna</b>:</p>
<BlockFormula tag="(6.3.7)" tex={String.raw`f_n(E)=e^{(E_F-E)/kT},\ \text{dla }E>E_F`} />
<Symbol symbol={String.raw`f_n(E)`} desc="prawdopodobieństwo obsadzenia stanu (przybliżenie Boltzmanna)" />
<Symbol symbol={String.raw`E_F`} desc="poziom Fermiego" />
<Symbol symbol={String.raw`k`} desc="stała Boltzmanna" />
<Symbol symbol={String.raw`T`} desc="temperatura bezwzględna" />
<BlockFormula tag="(6.3.8)" tex={String.raw`f_p(E)=e^{(E-E_F)/kT},\ \text{dla }E<E_F`} />
<Symbol symbol={String.raw`f_p(E)`} desc="prawdopodobieństwo nieobsadzenia stanu (przybliżenie Boltzmanna)" />
<Symbol symbol={String.raw`E_F`} desc="poziom Fermiego" />
<Symbol symbol={String.raw`k`} desc="stała Boltzmanna" />
<Symbol symbol={String.raw`T`} desc="temperatura bezwzględna" />
<p className="mb-[11px]">Po podstawieniu do wzorów (6.3.3) i (6.3.4) otrzymujemy wyrażenia określające koncentrację dziur i elektronów:</p>
<BlockFormula tag="(6.3.9)" tex={String.raw`n=N_c e^{(E_F-E_c)/kT}`} />
<Symbol symbol={String.raw`n`} desc="koncentracja elektronów w paśmie przewodnictwa" />
<Symbol symbol={String.raw`N_c`} desc="efektywna gęstość stanów w paśmie przewodnictwa" />
<Symbol symbol={String.raw`E_F`} desc="poziom Fermiego" />
<Symbol symbol={String.raw`E_c`} desc="energia dna pasma przewodnictwa" />
<Symbol symbol={String.raw`k`} desc="stała Boltzmanna" />
<Symbol symbol={String.raw`T`} desc="temperatura bezwzględna" />
<BlockFormula tag="(6.3.10)" tex={String.raw`p=N_v e^{(E_v-E_F)/kT}`} />
<Symbol symbol={String.raw`p`} desc="koncentracja dziur w paśmie walencyjnym" />
<Symbol symbol={String.raw`N_v`} desc="efektywna gęstość stanów w paśmie walencyjnym" />
<Symbol symbol={String.raw`E_F`} desc="poziom Fermiego" />
<Symbol symbol={String.raw`E_v`} desc="energia stropu pasma walencyjnego" />
<Symbol symbol={String.raw`k`} desc="stała Boltzmanna" />
<Symbol symbol={String.raw`T`} desc="temperatura bezwzględna" />
<p className="mb-[11px]"><b>Rozkład Boltzmanna stosuje się wtedy, kiedy spełnione są warunki:</b> {String.raw`\(|E_F-E_c|\geq 2kT\)`} dla półprzewodników typu n oraz {String.raw`\(|E_v-E_F|\geq 2kT\)`} dla półprzewodników typu p.</p>
<Conclusion title="Kluczowe twierdzenie">
<p className="mb-[11px]"><b>W stanie równowagi termodynamicznej i w określonej temperaturze iloczyn koncentracji elektronów i dziur dla danego półprzewodnika jest wielkością stałą i nie zależy od sposobu domieszkowania.</b></p>
</Conclusion>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Zależność koncentracji od temperatury (krzem typu n)</h3>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPolprzewodniki_img_3} alt="Koncentracja vs temperatura" style={{ "maxWidth": "380px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 6.3. Zależność koncentracji nośników w funkcji temperatury dla krzemu typu n.</figcaption></figure>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>0–150 K:</b> koncentracja nośników szybko wzrasta — spowodowane <b>wzrostem liczby zjonizowanych atomów domieszki</b>;</li>
<li className="mb-1.5"><b>150–450 K:</b> koncentracja nie zmienia się i utrzymuje na stałym poziomie, ponieważ <b>wszystkie atomy domieszki zostały już zjonizowane</b>;</li>
<li className="mb-1.5"><b>powyżej 450 K:</b> kolejny wzrost koncentracji nośników — wzrost koncentracji samoistnej spowodowany <b>generacją par elektron–dziura</b>; następuje przeskok elektronów, które pokonują całą szerokość pasma zabronionego.</li>
</ul>
</QuestionSection>


<QuestionSection
  id="q18"
  number="18"
  title="Koncentracja nośników w stanie nierównowagi termodynamicznej."
  source="str. 51–53"
  examBadges={[
    { label: "2026 Lato 1 A", route: "/egzaminy?year=2026&term=L1&group=A#task-1" },
    { label: "2018 Zima 1 A", route: "/egzaminy?year=2018&term=Z1&group=A#task-3" }
  ]}
>

<p className="mb-[11px]"><b>Stan równowagi termodynamicznej może być zakłócony poprzez działanie zewnętrznego pola (promieniowanie świetlne, promieniowanie X) lub poprzez dostarczenie lub usunięcie pewnej liczby nośników wskutek przepływu prądu (np. w złączu p–n).</b> Ogólnie stan nierównowagi:</p>
<BlockFormula tag="(6.5.1)" tex={String.raw`np\neq n_i^2`} />
<Symbol symbol={String.raw`n, p`} desc="koncentracja elektronów oraz dziur (w stanie nierównowagi)" />
<Symbol symbol={String.raw`n_i`} desc="koncentracja samoistna nośników ładunku" />
<p className="mb-[11px]">Istnieją więc dwa przypadki: kiedy {String.raw`\(np>n_i^2\)`} i kiedy {String.raw`\(np<n_i^2\)`}. W pierwszym z nich do danego obszaru półprzewodnika są <b>wstrzykiwane nośniki (iniekcja)</b>, w drugim mamy do czynienia z <b>wyciąganiem nośników (ekstrakcja)</b>. Poniżej przeanalizowany jest przypadek dla małego poziomu wstrzykiwania nośników.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Generacja i rekombinacja bezpośrednia</h3>
<p className="mb-[11px]">Najprostszym przypadkiem jest generacja i rekombinacja bezpośrednia, gdzie następują <b>bezpośrednie przejścia elektronów z pasma walencyjnego do pasma przewodnictwa i odwrotnie</b>.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPolprzewodniki_img_4} alt="Generacja i rekombinacja bezpośrednia" style={{ "maxWidth": "380px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 6.5. Model generacji i rekombinacji bezpośredniej w półprzewodniku.</figcaption></figure>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5">Żeby doszło do <b>generacji bezpośredniej</b> pary elektron–dziura, potrzebna jest <b>energia większa niż szerokość pasma zabronionego</b>. Bardzo mało prawdopodobne jest przejście przy dostarczeniu <b>energii cieplnej</b>, natomiast prawdopodobieństwo przejścia jest <b>praktycznie zawsze zapewnione podczas dostarczenia energii świetlnej</b>, której wartość jest o wiele większa.</li>
<li className="mb-1.5">Przy <b>rekombinacji</b> (elektrony przechodzą z pasma przewodnictwa do pasma walencyjnego) <b>wydzielana jest energia w postaci promieniowania świetlnego lub cieplnego</b>. Przykładowo <b>w krzemie i germanie</b> mamy do czynienia z wydzielaniem energii <b>w postaci ciepła</b>, a <b>w arsenku galu — w postaci promieniowania świetlnego</b>.</li>
<li className="mb-1.5"><b>Szybkość rekombinacji</b> jest proporcjonalna do <b>koncentracji elektronów i dziur</b>. <b>Szybkość generacji</b> nośników jest proporcjonalna do <b>liczby elektronów w paśmie walencyjnym i liczby wolnych poziomów energetycznych w paśmie przewodzenia</b>.</li>
</ul>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Generacja i rekombinacja pośrednia</h3>
<p className="mb-[11px]">W niektórych półprzewodnikach mamy do czynienia z <b>generacją pośrednią</b>, gdzie elektron z pasma walencyjnego do pasma przewodnictwa dociera <b>pokonując dwa etapy</b> (przez centrum generacyjno-rekombinacyjne). W stosunku do rekombinacji bezpośredniej <b>wzrasta prawdopodobieństwo przejścia między pasmami. Ponadto zwiększa się szybkość generacji i rekombinacji, w związku z czym maleje czas życia nośników.</b></p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPolprzewodniki_img_5} alt="Generacja i rekombinacja pośrednia" style={{ "maxWidth": "360px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 6.6. Model generacji i rekombinacji pośredniej w półprzewodniku.</figcaption></figure>
<p className="mb-[11px]"><b>Pułapkowanie:</b> może wystąpić sytuacja, że elektron, który został schwytany z pasma przewodnictwa, z powrotem zostanie do niego wyemitowany — nie dojdzie do rekombinacji par elektron–dziura, i elektron będzie przetrzymywany w centrum generacyjno-rekombinacyjnym. Ten sam proces dotyczy dziur. Kiedy mamy do czynienia z takim przetrzymywaniem nośników, mówi się o ich <b>pułapkowaniu</b>.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Powrót do równowagi</h3>
<p className="mb-[11px]">Kiedy z układu zostanie usunięty element zakłócający, półprzewodnik <b>powraca do stanu równowagi</b>. Szybkość zmian koncentracji nośników mniejszościowych zależy od ich <b>czasu życia nośników mniejszościowych</b>, który definiuje się jako <b>przedział czasu, kiedy koncentracja nośników nadmiarowych maleje e-krotnie (około 63%)</b>.</p>
<p className="mb-[11px]"><b>Rozkład w funkcji odległości:</b> nierówna koncentracja nośników przy powierzchni i w głębi półprzewodnika powoduje <b>przepływ dyfuzyjny</b> — nośniki nadmiarowe będą przepływały w głąb, dążąc do wyrównania koncentracji. <b>Odległość, na której koncentracja nośników nadmiarowych maleje e-krotnie, nazywa się drogą dyfuzyjną.</b> W niektórych półprzewodnikach, np. krzemie, germanie, droga dyfuzyjna silnie zależy od zanieczyszczeń.</p>
</QuestionSection>


<QuestionSection
  id="q19"
  number="19"
  title="Transport nośników w półprzewodnikach."
  source="str. 50–51"
>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Ruchliwość</h3>
<p className="mb-[11px]">Z punktu widzenia działania przyrządów półprzewodnikowych jednym z ważniejszych parametrów półprzewodników jest <b>ruchliwość</b> — zależy ona przede wszystkim od <b>koncentracji domieszek, temperatury i natężenia pola elektrycznego</b>. Wartość jej jest <b>proporcjonalna do czasu między dwoma kolejnymi zderzeniami</b>:</p>
<ul className="mb-3 ml-5 list-disc">
<li className="mb-1.5"><b>Pierwszy rodzaj zderzeń</b> spowodowany jest <b>rozpraszaniem na jonach domieszek</b> — rośnie wraz z ich ilością, co powoduje, że <b>maleje ruchliwość</b> w półprzewodniku.</li>
<li className="mb-1.5"><b>Drugi rodzaj zderzeń</b> spowodowany jest przez <b>rozpraszanie cieplne i rozpraszanie na fononach</b>.</li>
<li className="mb-1.5">W niskich temperaturach <b>poniżej 150 K dominującym jest rozpraszanie na domieszkach</b>, natomiast w wyższych temperaturach <b>przeważa rozpraszanie na fononach</b>. W przedziale temperatur, w którym działają przyrządy półprzewodnikowe, <b>dominuje zatem rozpraszanie na fononach</b>.</li>
<li className="mb-1.5"><b>Natężenie pola elektrycznego:</b> dla krzemu początkowo obserwuje się wzrost ruchliwości, natomiast <b>po przekroczeniu wartości natężenia pola elektrycznego powyżej 5×10⁴ V/cm obserwuje się spadek ruchliwości, ponieważ prędkość dryfu jest stała</b>.</li>
</ul>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Konduktywność</h3>
<p className="mb-[11px]">W półprzewodnikach <b>zarówno elektrony, jak i dziury powodują transport ładunków</b>. Następnym parametrem jest <b>konduktywność</b>, która zależy również od koncentracji domieszek oraz od temperatury:</p>
<BlockFormula tag="(6.4.1)" tex={String.raw`\sigma=|e|(n\mu_e+p\mu_h)`} />
<Symbol symbol={String.raw`\sigma`} desc="przewodnictwo właściwe (konduktywność) półprzewodnika" />
<Symbol symbol={String.raw`e`} desc="ładunek elementarny" />
<Symbol symbol={String.raw`n, p`} desc="koncentracja elektronów oraz dziur" />
<Symbol symbol={String.raw`\mu_e, \mu_h`} desc="ruchliwość elektronów oraz dziur" />
<p className="mb-[11px] text-[14px] text-muted -mt-1 mb-[14px]">gdzie: <code className="font-mono text-txt text-[12.5px]">μ<sub>e</sub></code> — ruchliwość elektronów; <code className="font-mono text-txt text-[12.5px]">μ<sub>h</sub></code> — ruchliwość dziur.</p>
<p className="mb-[11px]"><b>Konduktywność elektryczna półprzewodników bardzo szybko zmienia się z temperaturą</b>, co bezpośrednio wiąże się ze zmianami koncentracji nośników. W przypadku półprzewodników <b>samoistnych</b> zależność logarytmiczna konduktywności w funkcji odwrotności temperatury jest <b>liniowa</b>. W określonej temperaturze wartość konduktywności zależy od szerokości pasma zabronionego: <b>im szersze jest pasmo zabronione, tym mniejsza koncentracja nośników i w związku z tym mniejsza konduktywność.</b></p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPolprzewodniki_img_6} alt="Konduktywność vs temperatura" style={{ "maxWidth": "300px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 6.4. Zależność konduktywności w funkcji temperatury.</figcaption></figure>
<p className="mb-[11px]">Dla półprzewodników <b>domieszkowanych</b> interpretacja wykresu jest taka sama jak wykresu koncentracji (Rys. 6.3): <b>linia 1</b> — obszar jonizacji domieszek; <b>zakres 2</b> — stała koncentracja nośników, czyli wszystkie domieszki są zjonizowane; <b>powyżej temperatury 450 K (linia 3)</b> — generacja samoistna.</p>
</QuestionSection>


<QuestionSection
  id="q20"
  number="20"
  title="Działanie złącza typu p–n. Polaryzacja w kierunku zaporowym i przewodzenia."
  source="str. 53–55"
>

<p className="mb-[11px]"><b>Złącze p–n to złącze pomiędzy półprzewodnikami niesamoistnymi o dwóch typach przewodnictwa p i n.</b></p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPolprzewodniki_img_7} alt="Schemat złącza p-n"/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 6.7. Schemat złącza p–n.</figcaption></figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Powstanie warstwy zaporowej</h3>
<p className="mb-[11px]">W półprzewodniku typu n <b>nośnikami większościowymi są elektrony</b> i donory pozostają unieruchomione w siatce krystalicznej. Podobnie w półprzewodniku typu p, gdzie <b>nośnikami większościowymi są dziury</b>, a atomy domieszek są akceptorami. Zarówno w typie n, jak i p występują <b>nośniki mniejszościowe</b>, których znak jest przeciwny do znaku nośników większościowych; ich koncentracja jest <b>dużo mniejsza</b> niż nośników większościowych. Przed zetknięciem obie warstwy są <b>obojętne elektrycznie</b> w obszarze o rozmiarach makroskopowych.</p>
<p className="mb-[11px]">Ze względu na dużą różnicę koncentracji ruchomych nośników ładunku pomiędzy warstwami, <b>po zetknięciu następuje dyfuzja elektronów z warstwy typu n do warstwy typu p oraz dziur w przeciwnym kierunku</b>. W obszarze granicznym powstaje <b>warstwa dipolowa ładunku (warstwa zaporowa = warstwa ładunku przestrzennego = warstwa zubożona)</b>, która wytwarza <b>pole elektryczne przeciwdziałające dyfuzji</b>. Wskutek czego w obszarze granicznym wytwarza się <b>napięcie dyfuzyjne (bariera potencjału)</b>, które powoduje <b>unoszenie elektronów i dziur w kierunkach przeciwnych do ich dyfuzji</b>. Zatem powstaną dwa strumienie <b>prądu unoszenia nośników mniejszościowych</b> skierowane w kierunku przeciwnym niż strumień <b>prądu dyfuzji nośników większościowych</b>.</p>
<Conclusion title="Stan równowagi złącza">
<p className="mb-[11px]"><b>Kiedy złącze jest w stanie równowagi termodynamicznej, suma prądów płynących przez złącze jest równa zero oraz wartość ładunku przestrzennego jest ustalona — co oznacza, że prąd dyfuzji musi być równy prądowi unoszenia osobno dla dziur i elektronów.</b></p>
</Conclusion>
<p className="mb-[11px]">Po przyłożeniu do złącza zewnętrznego napięcia bariera potencjału między warstwami p i n może zostać <b>zwiększona lub zmniejszona</b>.</p>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Polaryzacja w kierunku zaporowym</h3>
<p className="mb-[11px]">Ma miejsce, kiedy <b>polaryzacja zewnętrzna jest zgodna z biegunowością napięcia dyfuzyjnego</b>. Następuje <b>wzrost wartości bariery potencjału</b>, a równolegle <b>rośnie wartość ładunku przestrzennego, co powoduje wzrost szerokości warstwy zaporowej</b>. W związku z poszerzeniem się warstwy zaporowej <b>maleje prawdopodobieństwo przejścia przez nią nośników większościowych</b>. Zatem składowe <b>prądu dyfuzji nośników większościowych maleją do zera niezależnie od napięcia, pozostają jedynie składowe prądu unoszenia nośników mniejszościowych</b>. Stąd w złączu mamy jedynie <b>przepływ słabego stałego prądu</b> — lewa gałąź wykresu.</p>
<figure className="my-4 mx-auto text-center bg-white rounded-[10px] p-[14px] border border-line max-w-[680px]"><img src={TeoriaPolprzewodniki_img_8} alt="Charakterystyka prądowo-napięciowa" style={{ "maxWidth": "320px" }}/><figcaption className="font-mono text-[11px] text-[#555] mt-2 text-left">Rysunek 6.8. Charakterystyka prądowo-napięciowa.</figcaption></figure>

<h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Polaryzacja w kierunku przewodzenia</h3>
<p className="mb-[11px]">Ma miejsce, kiedy <b>polaryzacja zewnętrzna jest przeciwna z biegunowością napięcia dyfuzyjnego</b>, co powoduje <b>spadek wartości bariery potencjału</b>, a równolegle <b>maleje wartość ładunku przestrzennego — szerokość warstwy zaporowej również maleje</b>. W związku ze zwężeniem się warstwy zaporowej <b>rośnie prawdopodobieństwo przejścia przez nią nośników większościowych</b>. Zatem składowe <b>prądu dyfuzji nośników większościowych wzrastają, a składowe prądu unoszenia nośników mniejszościowych pozostają na niezmienionym poziomie</b>. Prąd dyfuzji nośników większościowych jest znacznie większy niż prąd unoszenia nośników mniejszościowych. Stąd w złączu będzie <b>przepływał znaczny prąd od obszaru p do n</b> — prawa gałąź wykresu.</p>

<BookAddition title="Tabelka-ściąga: zaporowa vs przewodzenia">
<table className="w-full border-collapse my-3 text-[14.5px]">
<tbody><tr><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-[0.05em]"></th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-[0.05em]">Kierunek zaporowy</th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[11.5px] text-amber-soft bg-ink2 tracking-[0.05em]">Kierunek przewodzenia</th></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Polaryzacja zewn. wzgl. napięcia dyfuzyjnego</td><td className="border border-line px-2.5 py-1.5 text-left">zgodna</td><td className="border border-line px-2.5 py-1.5 text-left">przeciwna</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Bariera potencjału</td><td className="border border-line px-2.5 py-1.5 text-left">rośnie</td><td className="border border-line px-2.5 py-1.5 text-left">maleje</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Ładunek przestrzenny</td><td className="border border-line px-2.5 py-1.5 text-left">rośnie</td><td className="border border-line px-2.5 py-1.5 text-left">maleje</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Szerokość warstwy zaporowej</td><td className="border border-line px-2.5 py-1.5 text-left">rośnie</td><td className="border border-line px-2.5 py-1.5 text-left">maleje</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Prąd dyfuzji (większościowe)</td><td className="border border-line px-2.5 py-1.5 text-left">maleje do zera</td><td className="border border-line px-2.5 py-1.5 text-left">wzrasta</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Prąd unoszenia (mniejszościowe)</td><td className="border border-line px-2.5 py-1.5 text-left">pozostaje</td><td className="border border-line px-2.5 py-1.5 text-left">bez zmian</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Wypadkowy prąd</td><td className="border border-line px-2.5 py-1.5 text-left">słaby, stały</td><td className="border border-line px-2.5 py-1.5 text-left">znaczny, od p do n</td></tr>
</tbody></table>
</BookAddition>
</QuestionSection>

<Footer>FPTiTI · odpowiedzi cz. 4/5 (pytania 16–20) · źródło: A. Szymańska, „Fizyczne podstawy transmisji i przechowywania informacji”, luty 2026 · egzamin 13.06</Footer>
</div>
    



    </>
  );
}

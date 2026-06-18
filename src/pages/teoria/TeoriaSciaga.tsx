import React, { useEffect } from 'react';
import { Formula, Explanation, Symbol, Concept } from '../../components/MathBlocks';

export default function TeoriaSciaga() {

  useEffect(() => {
    let timeoutId: any;
    const checkMathJax = () => {
      const w = window as any;
      if (w.MathJax && w.MathJax.typesetPromise) {
        w.MathJax.typesetPromise();
      } else {
        timeoutId = setTimeout(checkMathJax, 100);
      }
    };
    checkMathJax();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      
<div className="w-full px-6 mx-auto">

<header className="mb-6 border border-line bg-linear-to-br from-panel to-ink2 rounded-[14px] px-6 py-[22px]">
  <div className="font-mono text-[12px] tracking-[0.18em] uppercase text-amber">FPTiTI · ŚCIĄGA — keypointy wszystkich 28 pytań</div>
  <h1 className="text-[29px] font-semibold mt-1.5 mb-1">Powtórka błyskawiczna przed egzaminem</h1>
  <div className="text-muted text-[15.5px]">Skondensowane z wzorcowe odpowiedzi cz. 1–5 · wg podręcznika A. Szymańskiej · egzamin 13.06</div>
  <div className="flex gap-[14px] flex-wrap mt-2 font-mono text-[11.5px] text-muted">
    <span><span className="inline-block w-[18px] text-center font-bold text-ink bg-green rounded-[4px] mr-1 text-[11px] px-1 py-0.5">N</span> tło zielone = TIER 1 (pewniak — musi siedzieć na 100%)</span>
    <span><span className="inline-block w-[18px] text-center font-bold text-ink bg-amber rounded-[4px] mr-1 text-[11px] px-1 py-0.5">N</span> tło żółte = pozostałe pytania</span>
  </div>
</header>


<div className="my-[26px] mb-2.5 font-mono text-[13px] tracking-[0.16em] uppercase text-amber border-b border-line pb-1.5">Blok 1 · Fala elektromagnetyczna (rozdz. 2)</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">

<div className="md:col-span-2 border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="t1 font-mono font-bold text-ink bg-green rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">1</span><span className="font-semibold text-[15.5px] leading-tight text-white">Równania Maxwella + wnioski</span></div>

<Concept title="Prawo indukcji Faradaya (I równanie Maxwella)">
  <Formula tex={String.raw`\nabla\times\vec E=-\frac{\partial\vec B}{\partial t}`} />
  <Symbol symbol={String.raw`\vec E`} desc="wektor natężenia pola elektrycznego" />
  <Symbol symbol={String.raw`\vec B`} desc="wektor indukcji magnetycznej" />
  <Symbol symbol={String.raw`t`} desc="czas" />
  <Symbol symbol={String.raw`\nabla\times`} desc="operator rotacji (wirowości pola)" />
  <Explanation><b>Faraday</b>: zmienne pole B wytwarza wirowe pole E</Explanation>
</Concept>

<Concept title="Prawo Ampère'a–Maxwella (II równanie Maxwella)">
  <Formula tex={String.raw`\nabla\times\vec B=\mu_0\!\left(\vec j+\varepsilon_0\frac{\partial\vec E}{\partial t}\right)`} />
  <Symbol symbol={String.raw`\vec B`} desc="wektor indukcji magnetycznej" />
  <Symbol symbol={String.raw`\mu_0`} desc="przenikalność magnetyczna próżni" />
  <Symbol symbol={String.raw`\vec j`} desc="wektor gęstości prądu przewodzenia" />
  <Symbol symbol={String.raw`\varepsilon_0`} desc="przenikalność elektryczna próżni" />
  <Symbol symbol={String.raw`\frac{\partial\vec E}{\partial t}`} desc="pochodna natężenia pola elektrycznego po czasie" />
  <Symbol symbol={String.raw`\varepsilon_0\frac{\partial\vec E}{\partial t}`} desc="gęstość prądu przesunięcia Maxwella" />
  <Explanation><b>Ampère–Maxwell</b>: prąd + prąd przesunięcia wytwarza wirowe pole B</Explanation>
</Concept>

<Concept title="Prawo Gaussa dla elektryczności (III równanie Maxwella)">
  <Formula tex={String.raw`\nabla\cdot\vec E=\frac{\rho}{\varepsilon_0}`} />
  <Symbol symbol={String.raw`\vec E`} desc="wektor natężenia pola elektrycznego" />
  <Symbol symbol={String.raw`\rho`} desc="objętościowa gęstość ładunku elektrycznego" />
  <Symbol symbol={String.raw`\varepsilon_0`} desc="przenikalność elektryczna próżni" />
  <Symbol symbol={String.raw`\nabla\cdot`} desc="operator dywergencji (źródłowości pola)" />
  <Explanation><b>Gauss (elektr.)</b>: źródłem pola E są ładunki</Explanation>
</Concept>

<Concept title="Prawo Gaussa dla magnetyzmu (IV równanie Maxwella) + Wnioski">
  <Formula tex={String.raw`\nabla\cdot\vec B=0`} />
  <Symbol symbol={String.raw`\vec B`} desc="wektor indukcji magnetycznej" />
  <Explanation><b>Gauss (magn.)</b>: pole B bezźródłowe, linie zamknięte, brak ładunków magnetycznych.</Explanation>
</Concept>
 
  <Explanation>
    <b>Wnioski z równań Maxwella</b>: Pól elektrycznych i magnetycznych nie da się rozdzielić (tworzą jedno pole elektromagnetyczne). Zmiany tych wzajemnie prostopadłych i zgodnych w fazie pól rozchodzą się w przestrzeni jako fale EM z prędkością światła.
  </Explanation>
  
<Concept title="Zasada zachowania ładunku (równanie ciągłości)">
  <Formula tex={String.raw`\nabla\cdot\vec{j}=-\frac{\partial\rho}{\partial t}`} />
  <Symbol symbol={String.raw`\vec j`} desc="wektor gęstości prądu" />
  <Symbol symbol={String.raw`\rho`} desc="objętościowa gęstość ładunku" />
  <Symbol symbol={String.raw`t`} desc="czas" />
  <Explanation><b>Zasada zachowania ładunku</b>: ładunek nie może powstać ani zniknąć; ubytek ładunku w danej objętości w jednostce czasu jest równy prądowi wypływającemu przez jej powierzchnię.</Explanation>
</Concept>
</div>

<div className="md:col-span-2 border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="t1 font-mono font-bold text-ink bg-green rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">+</span><span className="font-semibold text-[15.5px] leading-tight text-white">Warunki brzegowe na granicy ośrodków</span></div>
<Concept title="Granica dielektryków — pole elektryczne">
  <Formula tex={String.raw`E_{t1}=E_{t2}\qquad D_{n2}-D_{n1}=\rho_s`} />
  <Symbol symbol={String.raw`E_{t1}, E_{t2}`} desc="styczne składowe natężenia pola elektrycznego w ośrodkach 1 i 2" />
  <Symbol symbol={String.raw`D_{n1}, D_{n2}`} desc="normalne składowe indukcji elektrycznej w ośrodkach 1 i 2" />
  <Symbol symbol={String.raw`\rho_s`} desc="powierzchniowa gęstość ładunku swobodnego na granicy" />
  <Explanation>
    <b>Ciągłość styczna E i skok normalny D</b>: Składowa styczna natężenia pola elektrycznego jest zawsze ciągła {"(\\(E_{t1}=E_{t2}\\))"}, co wynika z zachowawczego charakteru pola. Składowa normalna indukcji elektrycznej posiada skok {"(\\(D_{n2}-D_{n1}=\\rho_s\\))"} o wartość gęstości ładunku powierzchniowego \(\rho_s\) na granicy.
  </Explanation>
</Concept>

<Concept title="Granica dielektryków — pole magnetyczne">
  <Formula tex={String.raw`|H_{t2}-H_{t1}|=|J_s|\qquad B_{n1}=B_{n2}`} />
  <Symbol symbol={String.raw`H_{t1}, H_{t2}`} desc="styczne składowe natężenia pola magnetycznego w ośrodkach 1 i 2" />
  <Symbol symbol={String.raw`B_{n1}, B_{n2}`} desc="normalne składowe indukcji magnetycznej w ośrodkach 1 i 2" />
  <Symbol symbol={String.raw`J_s`} desc="gęstość liniowa prądu powierzchniowego na granicy" />
  <Explanation>
    <b>Skok styczny H i ciągłość normalna B</b>: Składowa styczna natężenia pola magnetycznego ulega skokowi o wartość gęstości prądu powierzchniowego {"(\\(|H_{t2}-H_{t1}|=|J_s|\\))"}, więc jest ciągła tylko przy braku tego prądu {"(\\(J_s=0\\))"}. Składowa normalna indukcji magnetycznej jest zawsze ciągła {"(\\(B_{n1}=B_{n2}\\))"}, co wynika z bezźródłowości pola magnetycznego.
  </Explanation>
</Concept>

<Concept title="Granica przewodnik idealny – dielektryk">
  <Formula tex={String.raw`E_t=0\qquad D_n=\rho_s\qquad B_n=0\qquad H_t=J_s`} />
  <Symbol symbol={String.raw`E_t, B_n`} desc="styczna pola elektrycznego oraz normalna pola magnetycznego" />
  <Symbol symbol={String.raw`D_n, H_t`} desc="normalna indukcji elektrycznej oraz styczna pola magnetycznego" />
  <Symbol symbol={String.raw`\rho_s, J_s`} desc="powierzchniowa gęstość ładunku oraz prądu na przewodniku" />
  <Explanation>
    Wewnątrz idealnego przewodnika pole EM <b>nie istnieje</b>. Na powierzchni natężenie E ma tylko składową <b>normalną</b>, a natężenie H tylko składową <b>styczną</b>.
  </Explanation>
</Concept>
</div>

<div className="md:col-span-2 border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">2</span><span className="font-semibold text-[15.5px] leading-tight text-white">Równania materiałowe i rodzaje ośrodków</span></div>

<Concept title="Równania materiałowe (zależności polowe)">
  <Formula tex={String.raw`\vec D=\varepsilon_0\varepsilon_r\vec E\qquad \vec B=\mu_0\mu_r\vec H\qquad \vec j=\sigma\vec E`} />
  <Symbol symbol={String.raw`\vec D`} desc="indukcja elektryczna (wektor przesunięcia)" />
  <Symbol symbol={String.raw`\varepsilon_r`} desc="względna przenikalność elektryczna ośrodka" />
  <Symbol symbol={String.raw`\vec B`} desc="indukcja magnetyczna" />
  <Symbol symbol={String.raw`\mu_r`} desc="względna przenikalność magnetyczna ośrodka" />
  <Symbol symbol={String.raw`\vec H`} desc="natężenie pola magnetycznego" />
  <Symbol symbol={String.raw`\sigma`} desc="przewodnictwo właściwe (konduktywność) ośrodka" />
  <Explanation><b>Równania materiałowe</b>: określają wpływ właściwości fizycznych ośrodka (dielektrycznych, magnetycznych oraz przewodzących) na indukcję i prądy płynące pod wpływem pól.</Explanation>
</Concept>

<Concept title="Współczynnik załamania i prędkość fazowa">
  <Formula tex={String.raw`n=\sqrt{\varepsilon_r\mu_r}\qquad v_p=\frac{c}{n}`} />
  <Symbol symbol={String.raw`n`} desc="współczynnik załamania światła ośrodka" />
  <Symbol symbol={String.raw`v_p`} desc="prędkość fazowa fali elektromagnetycznej w ośrodku" />
  <Symbol symbol={String.raw`c`} desc="prędkość światła w próżni (\(\approx 3\cdot 10^8\,\mathrm{m/s}\))" />
  <Explanation><b>Prędkość fazowa</b>: prędkość rozchodzenia się fazy fali w ośrodku o współczynniku załamania \(n\); jest ona zawsze mniejsza niż prędkość światła w próżni.</Explanation>
</Concept>

<Concept title="Impedancja falowa próżni">
  <Formula tex={String.raw`Z_0=\sqrt{\frac{\mu_0}{\varepsilon_0}}\approx 377\,\Omega`} />
  <Symbol symbol={String.raw`Z_0`} desc="impedancja falowa próżni (stosunek E/H w próżni)" />
  <Explanation><b>Impedancja falowa</b>: opór, jaki próżnia stawia rozchodzącej się fali elektromagnetycznej, określający stałą proporcję natężenia pola elektrycznego do magnetycznego.</Explanation>
</Concept>

<Concept title="Parametry materiałowe i rodzaje ośrodków">
  <Explanation>
    <b>Parametry materiałowe</b>: przenikalność elektryczna \(\varepsilon\) (dielektryki), przenikalność magnetyczna \(\mu\) (magnetyki) oraz przewodnictwo właściwe \(\sigma\) (konduktywność).
  </Explanation>
  <Explanation>
    <b>Rodzaje ośrodków</b>:
    <br />• <b>Liniowy</b> — parametry nie zależą od natężeń pól;
    <br />• <b>Bezstratny</b> — \(\sigma = 0\) (tylko próżnia);
    <br />• <b>Jednorodny</b> — parametry nie zależą od współrzędnych;
    <br />• <b>Dyspersyjny</b> — parametry zależą od <b>częstotliwości</b>;
    <br />• <b>Izotropowy</b> — parametry nie zależą od <b>kierunku pól</b> (anizotropowy — zależą).
  </Explanation>
</Concept>

<Concept title="Parametry fali płaskiej (TEM)">
  <Formula tex={String.raw`E_z=0\qquad H_z=0\qquad \gamma=\alpha+j\beta\qquad v_f=\frac{\omega}{\beta}\qquad v_g=\frac{\partial\omega}{\partial\beta}`} />
  <Symbol symbol={String.raw`E_z, H_z`} desc="podłużne składowe pól (równe zeru dla fali poprzecznej TEM)" />
  <Symbol symbol={String.raw`\gamma`} desc="zespolony współczynnik propagacji" />
  <Symbol symbol={String.raw`\alpha`} desc="współczynnik tłumienia fali" />
  <Symbol symbol={String.raw`\beta`} desc="współczynnik fazowy (stała fazowa)" />
  <Symbol symbol={String.raw`\omega`} desc="pulsacja kołowa fali" />
  <Symbol symbol={String.raw`v_f, v_g`} desc="prędkość fazowa oraz prędkość grupowa fali" />
  <Explanation>
    Inne typy fal: <b>TM</b> (\(E_z\neq0\)), <b>TE</b> (\(H_z\neq0\)), <b>EH</b> (oba ≠ 0).
  </Explanation>
  <Explanation>
    \(\gamma\) — współczynnik propagacji, \(v_f\) — prędkość fazowa, \(v_g\) — prędkość grupowa.
  </Explanation>
</Concept>
</div>
</div>


<div className="my-[26px] mb-2.5 font-mono text-[13px] tracking-[0.16em] uppercase text-amber border-b border-line pb-1.5">Blok 2 · Propagacja w wolnej przestrzeni (rozdz. 3)</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">3</span><span className="font-semibold text-[15.5px] leading-tight text-white">Zjawiska falowe</span></div>

<Concept title="Podstawowe zjawiska falowe (odbicie, załamanie, dyfrakcja)">
  <Explanation>
    <b>Odbicie</b>: zmiana kierunku rozchodzenia się fali na granicy dwóch ośrodków; fala pozostaje w ośrodku wyjściowym.
  </Explanation>
  <Explanation>
    <b>Załamanie (refrakcja)</b>: zmiana kierunku rozchodzenia się fali przy przejściu do innego ośrodka z powodu zmiany prędkości fali; zmienia się długość fali \(\lambda\), a jej częstotliwość pozostaje bez zmian.
  </Explanation>
  <Explanation>
    <b>Dyfrakcja (ugięcie)</b>: zjawisko zmiany kierunku rozchodzenia się fali na szczelinach i przeszkodach porównywalnych z długością fali; wyjaśnia je <b>zasada Huygensa</b> (każdy punkt czoła fali staje się źródłem nowej fali kulistej).
  </Explanation>
</Concept>

<Concept title="Prawo Snellusa (załamanie światła)">
  <Formula tex={String.raw`n_1\sin\theta_1=n_2\sin\theta_2`} />
  <Symbol symbol={String.raw`n_1, n_2`} desc="współczynniki załamania ośrodków 1 i 2" />
  <Symbol symbol={String.raw`\theta_1, \theta_2`} desc="kąty padania i załamania fali na granicy ośrodków" />
  <Explanation><b>Prawo Snellusa</b>: określa matematyczny związek między kątem padania a kątem załamania fali przy przejściu między dwoma ośrodkami.</Explanation>
</Concept>

<Concept title="Doświadczenie Younga (interferencja fal)">
  <Formula tex={String.raw`\text{wzmocnienie: } d\sin\theta=n\lambda`} />
  <Symbol symbol={String.raw`d`} desc="szerokość szczeliny (lub odległość siatek)" />
  <Symbol symbol={String.raw`\theta`} desc="kąt interferencji" />
  <Symbol symbol={String.raw`\lambda`} desc="długość fali" />
  
  <Formula tex={String.raw`\text{wygaszenie: } d\sin\theta=\left(n+\frac{1}{2}\right)\lambda`} />
  <Symbol symbol={String.raw`n`} desc="rząd widma (kolejny prążek interferencyjny)" />
  <Explanation><b>Interferencja Younga</b>: opisuje wzmocnienie lub wygaszenie nakładających się fal świetlnych w zależności od różnicy ich dróg optycznych (nałożenie fal z dwóch szczelin).</Explanation>
</Concept>

<Concept title="Kąt graniczny (całkowite wewnętrzne odbicie)">
  <Formula tex={String.raw`\theta_c = \arcsin\frac{n_2}{n_1}`} />
  <Symbol symbol={String.raw`\theta_c`} desc="kąt graniczny całkowitego wewnętrznego odbicia" />
  <Symbol symbol={String.raw`n_1`} desc="współczynnik załamania rdzenia (ośrodka gęstszego)" />
  <Symbol symbol={String.raw`n_2`} desc="współczynnik załamania płaszcza (ośrodka rzadszego)" />
  <Explanation><b>Kąt graniczny</b>: minimalny kąt padania, przy którym fala biegnąca z ośrodka gęstszego optycznie do rzadszego ulega całkowitemu wewnętrznemu odbiciu.</Explanation>
  <Explanation><span className="text-red font-semibold">W opracowaniu Poganina jest ODWROTNIE (błąd)!</span></Explanation>
</Concept>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">4</span><span className="font-semibold text-[15.5px] leading-tight text-white">Fale powierzchniowe / troposferyczne / jonosferyczne</span></div>
<Concept title="Propagacja fal w różnych warstwach (powierzchniowe, troposferyczne, jonosferyczne)">
  <Explanation>
    <b>Fale powierzchniowe</b>: rozchodzą się wzdłuż powierzchni Ziemi. Zapewniają dobry zasięg tam, gdzie Ziemię można uznać za płaską; ich tłumienie i zasięg silnie zależą od częstotliwości (maleją wraz ze wzrostem częstotliwości), a także od ugięcia fali (dyfrakcji) wzdłuż krzywizny Ziemi.
  </Explanation>
  <Explanation>
    <b>Fale troposferyczne</b>: dotyczą fal ultrakrótkich, które załamują się (ulegają refrakcji) w dolnej warstwie atmosfery — troposferze (grubość troposfery to ok. 10–13 km w strefie umiarkowana, a 15–18 km na równiku), co pozwala im docierać do odbiornika daleko za horyzontem geometrycznym.
  </Explanation>
  <Explanation>
    <b>Fale jonosferyczne</b>: fale długie, średnie i krótkie odbijają się od jonosfery, co umożliwia transmisję na bardzo duże odległości (wielokrotne odbicia między Ziemią a jonosferą); wyższe częstotliwości (np. ultrakrótkie) przenikają jonosferę i służą do łączności satelitarna i kosmiczna.
  </Explanation>
</Concept>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">5</span><span className="font-semibold text-[15.5px] leading-tight text-white">Czynniki atmosferyczne a propagacja</span></div>
<Concept title="Wpływ warunków atmosferycznych i dobowych">
  <Explanation>
    <b>Tłumienie w troposferze</b>: wywołane jest przez opady atmosferyczne (deszcz, śnieg — powodują największe straty), mgłę, absorpcja molekularna (rezonanse pary wodnej H₂O i tlenu O₂) oraz rozproszenie na cząsteczkach (pyły, dymy).
  </Explanation>
  <Explanation>
    <b>Częstotliwość a absorpcja</b>: tłumienie jest pomijalnie małe dla częstotliwości poniżej 2 GHz; powyżej tej granicy gwałtownie rośnie i wykazuje maksima rezonansowe. Tłumienie zależy również od wysokości n.p.m. (maleje wraz ze wzrostem wysokości).
  </Explanation>
  <Explanation>
    <b>Zjawiska pasożytnicze</b>: dominującym zjawiskiem jest refrakcja (załamująca bieg fali w atmosferze), a ponadto występują dyfrakcja na przeszkodach terenowych, interferencja fal wielodrogowych oraz rozproszenie.
  </Explanation>
  <Explanation>
    <b>Dobowe zmiany jonosfery</b>: właściwości jonosfery zależą silnie od nasłonecznienia (promieniowania jonizującego), przez co stan jonosfery zmienia się cyklicznie w ciągu doby (dzień/noc), co bezpośrednio wpływa na zasięg propagacji fal jonosferycznych.
  </Explanation>
</Concept>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">6</span><span className="font-semibold text-[15.5px] leading-tight text-white">Zasięg anteny nadawczej</span></div>

<Concept title="Horyzont radiowy (zasięg bezpośredniej widoczności)">
  <Formula tex={String.raw`d_0=\sqrt{2R_Z}\,(\sqrt{H_N}+\sqrt{H_O})`} />
  <Symbol symbol={String.raw`d_0`} desc="graniczny zasięg bezpośredniej widoczności" />
  <Symbol symbol={String.raw`R_Z`} desc="promień kuli ziemskiej (\(\approx 6400\,\mathrm{km}\))" />
  <Symbol symbol={String.raw`H_N`} desc="wysokość anteny nadawczej" />
  <Symbol symbol={String.raw`H_O`} desc="wysokość anteny odbiorczej" />
  <Explanation><b>Horyzont radiowy</b>: maksymalny zasięg bezpośredniej widoczności uwzględniający zakrzywienie Ziemi (gdzie średni promień Ziemi {"\\(R_Z \\approx 6400\\ \\mathrm{km}\\)"}) dla danych wysokości anten.</Explanation>
</Concept>

<Concept title="Model transmisji Friisa (gęstość mocy, natężenie pola i moc odbierana)">
  <Formula tex={String.raw`S=\frac{P_S G_S}{4\pi R^2}`} />
  <Symbol symbol={String.raw`S`} desc="gęstość powierzchniowa mocy w odległości R" />
  <Symbol symbol={String.raw`P_S`} desc="moc doprowadzona do anteny nadawczej" />
  <Symbol symbol={String.raw`G_S`} desc="zysk kierunkowy anteny nadawczej" />

  <Formula tex={String.raw`E=\frac{\sqrt{60P_S G_S}}{R}`} />
  <Symbol symbol={String.raw`E`} desc="natężenie pola elektrycznego" />
  <Symbol symbol={String.raw`R`} desc="odległość od anteny nadawczej" />

  <Formula tex={String.raw`P_O=P_S\frac{G_S G_O\lambda^2}{(4\pi R)^2}`} />
  <Symbol symbol={String.raw`P_O`} desc="moc odbierana przez antenę odbiorczą" />
  <Symbol symbol={String.raw`G_O`} desc="zysk kierunkowy anteny odbiorczej" />
  <Symbol symbol={String.raw`\lambda`} desc="długość fali elektromagnetycznej" />
  <Explanation><b>Model Friisa</b>: gęstość mocy w przestrzeni maleje proporcjonalnie do kwadratu odległości (\(1/R^2\)), natężenie pola maleje jako \(1/R\), a moc odbierana zależy też od zysków anten i kwadratu długości fali.</Explanation>
</Concept>

<Concept title="Bilans łącza radiowego w decybelach">
  <Formula tex={String.raw`P_O[\mathrm{dBm}]=P_S+G_S+G_O-20\log_{10}(f_{\mathrm{MHz}}R_{\mathrm{km}})-32{,}44`} />
  <Symbol symbol={String.raw`P_O[\mathrm{dBm}]`} desc="odbierana moc wyrażona w decybelach odniesiona do miliwata (dBm)" />
  <Symbol symbol={String.raw`f_{\mathrm{MHz}}`} desc="częstotliwość fali w megahercach" />
  <Symbol symbol={String.raw`R_{\mathrm{km}}`} desc="odległość w kilometrach" />
  <Explanation><b>Bilans łącza</b>: logarytmiczne ujęcie tłumienia wolnej przestrzeni (FSL) upraszczające obliczenie mocy docierającej do odbiornika na podstawie parametrów nadajnika i anten.</Explanation>
</Concept>

<Concept title="Strefy Fresnela">
  <Formula tex={String.raw`R_n=\sqrt{\frac{n\lambda d_1 d_2}{d_1+d_2}}`} />
  <Symbol symbol={String.raw`R_n`} desc="promień n-tej strefy Fresnela" />
  <Symbol symbol={String.raw`d_1, d_2`} desc="odległość od nadajnika/odbiornika do przeszkody" />

  <Formula tex={String.raw`R_1=\tfrac12\sqrt{\lambda D}\quad (\text{dla } d_1=d_2)`} />
  <Symbol symbol={String.raw`R_1`} desc="promień pierwszej strefy Fresnela w połowie trasy" />
  <Symbol symbol={String.raw`D`} desc="całkowita odległość między antenami (\(D=d_1+d_2\))" />
  <Explanation><b>Strefy Fresnela</b>: elipsoidalne obszary wokół linii bezpośredniej widoczności; przeszkody wnikające w pierwszą strefę Fresnela powodują ugięcie fali i dodatkowe straty mocy.</Explanation>
  <Explanation><b>Kluczowe wnioski</b>: natężenie pola \(E\) maleje jako \(1/R\), gęstość mocy jako \(1/R^2\). Pierwsza strefa Fresnela musi być wolna od przeszkód. Przed projektem radiolinii wymagany jest projekt hipsometryczny terenu.</Explanation>
</Concept>
</div>

</div>


<div className="my-[26px] mb-2.5 font-mono text-[13px] tracking-[0.16em] uppercase text-amber border-b border-line pb-1.5">Blok 3 · Światłowody cz. 1 (rozdz. 4.1–4.3)</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">7</span><span className="font-semibold text-[15.5px] leading-tight text-white">Warunki propagacji we włóknie</span></div>

<Concept title="Konstrukcja i domieszkowanie światłowodu">
  <Explanation>
    <b>Zasada działania i warunek propagacji</b>: światłowód to cylindryczny falowód dielektryczny wykonany ze szkła kwarcowego. Warunkiem koniecznym do uwięzienia i prowadzenia światła w rdzeniu jest wyższy współczynnik załamania rdzenia niż płaszcza {"(\(n_1 > n_2\))"} oraz całkowite wewnętrzne odbicie (kąt padania światła na granicę rdzeń-płaszcz musi być większy od kąta granicznego).
  </Explanation>
  <Explanation>
    <b>Współczynnik załamania i domieszkowanie</b>: typowa wartość \(n\) wynosi od 1,44 do 1,48. Odpowiednią różnicę współczynników załamania uzyskuje się przez domieszkowanie krzemionki (np. dodanie \(GeO_2\), fosforu, glinu lub chloru zwiększa \(n\); dodanie boru lub fluoru zmniejsza \(n\)).
  </Explanation>
  <Explanation>
    <b>Profil współczynnika załamania</b>: skokowy (skokowa zmiana na granicy rdzeń-płaszcz) lub gradientowy (płynne przejście) decyduje o właściwościach transmisyjnych i liczbie prowadzonych modów.
  </Explanation>
</Concept>

<Concept title="Kąt graniczny w światłowodzie">
  <Formula tex={String.raw`\theta_C=\arcsin\frac{n_2}{n_1}`} />
  <Symbol symbol={String.raw`\theta_C`} desc="kąt graniczny światłowodu w rdzeniu" />
  <Symbol symbol={String.raw`n_1, n_2`} desc="współczynniki załamania rdzenia i płaszcza" />
  <Explanation><b>Kąt graniczny we włóknie</b>: najmniejszy kąt padania promienia na granicę rdzenia z płaszczem, umożliwiający całkowite wewnętrzne odbicie (czyli propagację światła w rdzeniu).</Explanation>
</Concept>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">8</span><span className="font-semibold text-[15.5px] leading-tight text-white">Światłowody jedno-/wielomodowe, mody</span></div>
<Concept title="Częstotliwość znormalizowana i liczba modów">
  <Formula tex={String.raw`V=\frac{2\pi a}{\lambda_0}\sqrt{n_1^2-n_2^2}\qquad M\approx\frac{V^2}{2}\text{ (skokowy)},\quad M\approx\frac{V^2}{4}\text{ (gradientowy)}`} />
  <Symbol symbol={String.raw`V`} desc="częstotliwość znormalizowana światłowodu" />
  <Symbol symbol={String.raw`a`} desc="promień rdzenia światłowodu" />
  <Symbol symbol={String.raw`\lambda_0`} desc="długość fali światła w próżni" />
  <Symbol symbol={String.raw`M`} desc="liczba prowadzonych modów we włóknie" />
  <Explanation><b>Parametry modowe</b>: częstotliwość znormalizowana \(V\) decyduje o liczbie prowadzonych modów \(M\). Przy \(V &lt; 2{','}405\) światłowód staje się jednomodowy.</Explanation>
  <Explanation><b>Światłowód jednomodowy vs wielomodowy</b>: gdy {"\(V < 2,405\)"}, we włóknie rozchodzi się tylko jeden mod podstawowy \(HE_{11}\) (rdzeń ok. 9 \(\mu\)m). W przeciwnym wypadku światłowód jest wielomodowy (rdzeń ok. 50 lub 62,5 \(\mu\)m).</Explanation>
  <Explanation><b>Mody i profil załamania</b>: mody (TE, TM, HE, EH) mają różne rozkłady pola i prędkości grupowe. Profil gradientowy (paraboliczny) prowadzi około dwukrotnie mniejszą liczbę modów niż profil skokowy.</Explanation>
</Concept>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="t1 font-mono font-bold text-ink bg-green rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">9</span><span className="font-semibold text-[15.5px] leading-tight text-white">Tłumienie we włóknach</span></div>
<Concept title="Tłumienie jednostkowe światłowodu">
  <Formula tex={String.raw`\alpha_{\text{dB/km}}=\frac{A_{\text{dB}}}{L},\quad A_{\text{dB}}=10\log_{10}\frac{P(0)}{P(L)}`} />
  <Symbol symbol={String.raw`\alpha_{dB/km}`} desc="jednostkowe tłumienie światłowodu w dB/km" />
  <Symbol symbol={String.raw`A_{dB}`} desc="tłumienie światłowodu na całej trasie" />
  <Symbol symbol={String.raw`L`} desc="długość światłowodu w kilometrach" />
  <Symbol symbol={String.raw`P(0)`} desc="moc optyczna wprowadzona na wejściu" />
  <Symbol symbol={String.raw`P(L)`} desc="moc optyczna na wyjściu światłowodu" />
  <Explanation><b>Tłumienie jednostkowe \(\alpha\)</b>: strata mocy optycznej na jednostkę długości włókna, wyrażana w dB/km. Zależy silnie od długości fali (najniższa w 3. oknie, 1550 nm).</Explanation>
  <Explanation><b>Wpływ tłumienia</b>: tłumienie zmniejsza moc sygnału optycznego, ale nie wpływa na kształt impulsów. Kompensowane jest przez wzmacniacze optyczne EDFA lub Ramana.</Explanation>
  <Explanation><b>Przyczyny tłumienia</b>: absorpcja (rezonanse UV/IR, zanieczyszczenia jonami \(OH^-\) i metali), rozproszenie Rayleigha (spowodowane fluktuacjami gęstości szkła, maleje jako \(1/\lambda^4\)), Mie (niedoskonałości strukturalne) oraz zjawiska nieliniowe (Ramana i Brillouina).</Explanation>
  <Explanation><b>Okna transmisyjne</b>: I okno (ok. 850 nm, wysokie tłumienie, systemy wielomodowe, tanie), II okno (ok. 1300 nm, zerowa dyspersja chromatyczna), III okno (ok. 1550 nm, najniższe tłumienie {"\(< 0,2\ \mathrm{dB/km}\)"}).</Explanation>
</Concept>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="t1 font-mono font-bold text-ink bg-green rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">10</span><span className="font-semibold text-[15.5px] leading-tight text-white">Dyspersja we włóknach</span></div>
<div className="space-y-3 mb-3 text-muted text-[15.5px] leading-relaxed">
  <div>Dyspersja = zależność parametrów ośrodka od częstotliwości → <b>rozmycie czasowe impulsów → ogranicza szybkość transmisji</b> („0" może być odczytane jako „1").</div>
  <div><b>Modowa</b> — TYLKO wielomodowe; mody mają różne prędkości.</div>
  <Concept title="Dyspersja modowa (poszerzenie impulsu)">
    <Formula tex={String.raw`\sigma_\tau\approx\frac{L}{c_1}\Delta\ (\text{skokowy}),\ \ \sigma_\tau\approx\frac{L}{2c_1}\Delta^2\ (\text{gradientowy}),\ \ \Delta=\frac{n_1-n_2}{n_1}`} />
    <Symbol symbol={String.raw`\sigma_\tau`} desc="szerokość impulsowa (rozmycie czasowe)" />
    <Symbol symbol={String.raw`c_1`} desc="prędkość światła w rdzeniu światłowodu" />
    <Symbol symbol={String.raw`\Delta`} desc="względny profil współczynnika załamania" />
    <Explanation><b>Dyspersja modowa</b>: poszerzenie impulsu w światłowodzie wielomodowym wynikające z różnych prędkości grupowych poszczególnych modów.</Explanation>
  </Concept>
  <div><b>Chromatyczna</b> = <b>materiałowa</b> Dλ (n zależy od λ) + <b>falowodowa</b> D_W (vg zależy od λ; <b>przeciwny znak — częściowo kompensuje</b>). Dominuje w jednomodowych.</div>
  <Concept title="Dyspersja chromatyczna (poszerzenie impulsu)">
    <Formula tex={String.raw`\sigma_\tau=|D_C|\,\sigma_\lambda L`} />
    <Symbol symbol={String.raw`D_C`} desc="współczynnik dyspersji chromatycznej w ps/(nm·km)" />
    <Symbol symbol={String.raw`\sigma_\lambda`} desc="szerokość widmowa źródła światła (w nm)" />
    <Explanation><b>Dyspersja chromatyczna</b>: poszerzenie impulsu wynikające z zależności współczynnika załamania (oraz prędkości) od długości fali światła; suma dyspersji materiałowej i falowodowej.</Explanation>
  </Concept>
  <div><b>Polaryzacyjna PMD</b> — dwa mody o odmiennych polaryzacjach, różne prędkości przez zmiany geometrii; tylko <b>łącza dalekosiężne</b> (transoceaniczne).</div>
</div>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">11</span><span className="font-semibold text-[15.5px] leading-tight text-white">Kompensacja dyspersji</span></div>
<Concept title="Warunek kompensacji dyspersji chromatycznej">
  <Formula tex={String.raw`L_{DCF}=-\frac{L_{SMF}\cdot D_{SMF}}{D_{DCF}}\qquad D=-L_{SMF}\cdot D_{SMF}\ (\text{moduł DCM / siatka Bragga})`} />
  <Symbol symbol={String.raw`L_{SMF}, L_{DCF}`} desc="długości światłowodu jednomodowego (SMF) i kompensującego (DCF)" />
  <Symbol symbol={String.raw`D_{SMF}, D_{DCF}`} desc="współczynniki dyspersji odpowiednio SMF (dodatni) i DCF (silnie ujemny)" />
  <Symbol symbol={String.raw`D`} desc="całkowita dyspersja chromatyczna łącza" />
  <Explanation><b>Kompensacja dyspersji</b>: zrównoważenie dodatniej dyspersji światłowodu SMF za pomocą odpowiednio długiego odcinka światłowodu kompensującego DCF o silnie ujemnym współczynniku dyspersji.</Explanation>
</Concept>
<div className="space-y-2 mt-3 text-muted text-[15.5px] leading-relaxed">
  <div>Elementy kompensujące mają <b>ujemny współczynnik dyspersji</b>: światłowód <b>DCF</b>, gotowe moduły <b>DCM</b>, <b>światłowodowe siatki Bragga</b>.</div>
  <div>Zalety DCF: <b>kompensuje wiele długości fal jednocześnie</b> (łatwa rozbudowa o kanały), proste podłączenie; umieszczany w <b>„puszkach"</b>, nierozwijany. <b>Wada: duże tłumienie.</b></div>
  <div>DCM dobiera się tak, by <b>niedokompensowanie było jak najmniejsze</b>; przy wartości „w połowie" — moduł o mniejszym tłumieniu.</div>
</div>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">12</span><span className="font-semibold text-[15.5px] leading-tight text-white">Budżet łącza telekomunikacyjnego</span></div>
<Concept title="Budżet mocy optycznej (bilans łącza)">
  <Formula tex={String.raw`P_S-P_C-\alpha_{SMF}L_{SMF}-\alpha_{DCF}L_{DCF}\ \geq\ P_R+P_m`} />
  <Symbol symbol={String.raw`P_S`} desc="optymistyczna moc nadajnika optycznego" />
  <Symbol symbol={String.raw`P_C`} desc="tłumienie w złączach i spawach (straty stałe)" />
  <Symbol symbol={String.raw`\alpha_{SMF}, \alpha_{DCF}`} desc="tłumienia jednostkowe światłowodów SMF i DCF" />
  <Symbol symbol={String.raw`P_R`} desc="czułość odbiornika optycznego" />
  <Symbol symbol={String.raw`P_m`} desc="margines systemowy (np. na starzenie się elementów)" />
  <Explanation><b>Bilans mocy optycznej</b>: zapewnia, że całkowita moc wyjściowa lasera po uwzględnieniu tłumienia jednostkowego światłowodów i strat stałych (złącza, spawy) jest wystarczająca do poprawnego zdekodowania sygnału przez odbiornik.</Explanation>
</Concept>

<Concept title="Czułość odbiornika optycznego (limit kwantowy)">
  <Formula tex={String.raw`P_R[\mathrm{dBm}]=10\log\frac{n_0 h f B_0}{10^{-3}}`} />
  <Symbol symbol={String.raw`n_0`} desc="minimalna liczba fotonów na bit (do poprawnego odbioru)" />
  <Symbol symbol={String.raw`h`} desc="stała Plancka (\(\approx 6{,}62\cdot 10^{-34}\,\mathrm{J\cdot s}\))" />
  <Symbol symbol={String.raw`f`} desc="częstotliwość fali świetlnej" />
  <Symbol symbol={String.raw`B_0`} desc="przepływność bitowa sygnału (szerokość pasma odbiornika)" />
  <Explanation><b>Czułość odbiornika (limit kwantowy)</b>: najniższa moc wejściowa fotodetektora niezbędna do uzyskania pożądanej stopy błędu (BER); fizycznym limitem jest minimalna liczba fotonów na bit (teoretycznie ~10, praktycznie 200–1000).</Explanation>
</Concept>
<div className="space-y-2 mt-3 text-muted text-[15.5px] leading-relaxed">
  <div>P_S — moc nadajnika; P_C — straty na <b>spawach i złączach</b>; P_R — czułość odbiornika; <b>P_m — margines 3–6 dB</b>.</div>
  <div>Idealnie <b>10 fotonów/bit</b> wystarcza na „1", realnie <b>200–1000 fotonów/bit</b> (szumy).</div>
  <div>Z (4.5.2): przy tej samej czułości <b>więcej bitów = mniej fotonów w impulsie</b> → wzrost przepływności skraca odległość między stacjami regeneracji.</div>
</div>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">13</span><span className="font-semibold text-[15.5px] leading-tight text-white">Mierzenie jakości modulacji</span></div>
<div className="space-y-3 mb-3 text-muted text-[15.5px] leading-relaxed">
  <div><b>Wykres oczkowy</b> — nałożone wszystkie kombinacje bitów; parametry: <b>amplituda</b> (Vmax−Vmin, odporność na zakłócenia), <b>wysokość oka</b> (V′max−V′min, szacowanie szumów), <b>szerokość oka</b> (czas bezpiecznego próbkowania), <b>przecięcie</b> (próg decyzyjny), <b>nachylenie / czas narastania</b> \(C_&#123;NS&#125;=1&#123;,&#125;25\cdot T_&#123;20-80&#125;\), <b>zniekształcenie czasowe ΔT</b> (jitter), <b>współczynnik ekstynkcji</b>.</div>
  <div>Rozwartość oka oraz margines szumowy:</div>
  <Concept title="Rozwartość wykresu oczkowego (Eye Opening Ratio)">
    <Formula tex={String.raw`R_0=\frac{V'_{max}-V'_{min}}{V_{max}-V_{min}}`} />
    <Symbol symbol={String.raw`R_0`} desc="rozwartość oka (im większa, tym czystszy sygnał)" />
    <Symbol symbol={String.raw`V'_{max}, V'_{min}`} desc="poziomy zniekształceń oka od góry i dołu" />
    <Explanation><b>Rozwartość oka (EOR)</b>: określa stosunek pionowego otwarcia oka do maksymalnej amplitudy sygnału; im bliższy 1, tym mniejsze zniekształcenia szumowe i interferencyjne (ISI).</Explanation>
  </Concept>
  
  <Concept title="Margines szumowy (Noise Margin)">
    <Formula tex={String.raw`M_S=\frac{V_1}{V'_{max}}`} />
    <Symbol symbol={String.raw`M_S`} desc="margines szumowy (odporność na zniekształcenia)" />
    <Symbol symbol={String.raw`V_1`} desc="poziom napięcia bitu '1'" />
    <Explanation><b>Margines szumowy (NM)</b>: określa odporność odbiornika na zakłócenia; wyraża stosunek poziomu napięcia dla logicznej jedynki do zniekształconego szczytu oka.</Explanation>
  </Concept>
  <div><b>BER</b> — bitowa stopa błędu (poziom błędnie zdekodowanych bitów).</div>
  <div><b>Efektywność widmowa</b> \(\Gamma=R_b/B\) [bit/s/Hz].</div>
</div>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">14</span><span className="font-semibold text-[15.5px] leading-tight text-white">Multipleksacja i zastosowania</span></div>
<div className="space-y-2 mb-3 text-muted text-[15.5px] leading-relaxed">
  <div><b>Multipleksacja (zwielokrotnienie) = równoczesne przesyłanie wielu sygnałów przez jeden kanał transmisyjny.</b></div>
  <div><b>TDM/OTDM</b> — podział czasowy (sygnały cyfrowe); <b>FDM</b> — podział częstotliwości (różne nośne); <b>SCM</b> — podnośne mikrofalowe (analogowe sieci CATV); <b>CDMA</b> — kodowanie sygnałów.</div>
  <div><b>WDM</b> — podział długości fali (duży odstęp nośnych, GHz); <b>DWDM</b> — gęsty: 3. okno podzielone na nośne od <b>193,1 THz co 200/100/50/25 GHz</b>; dalej <b>DFDM</b>.</div>
  <div>Mniejszy odstęp = więcej kanałów, ale <b>nasilenie FWM i przesłuchów</b>.</div>
</div>
</div>

<div className="md:col-span-2 border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">15</span><span className="font-semibold text-[15.5px] leading-tight text-white">Mieszanie czterofalowe (FWM)</span></div>

<Concept title="Częstotliwości fal wtórnych w mieszaniu czterofalowym (FWM)">
  <Formula tex={String.raw`f_{ijk}=f_i+f_j-f_k\quad (i,j\neq k)`} />
  <Symbol symbol={String.raw`f_{ijk}`} desc="częstotliwości nowo powstałych fal wtórnych" />
  <Symbol symbol={String.raw`f_i, f_j, f_k`} desc="częstotliwości fal wejściowych w sąsiednich kanałach WDM" />

  <Formula tex={String.raw`2f_1 - f_2\quad \text{oraz}\quad 2f_2 - f_1\quad (\text{dla 2 fal})`} />
  <Symbol symbol={String.raw`f_1, f_2`} desc="częstotliwości wejściowe dwóch sąsiadujących ze sobą fal" />
  <Explanation><b>Produkty nieliniowe FWM</b>: określają częstotliwości nowych fal generowanych na drodze interferencji nieliniowej; mogą one pokrywać się z częstotliwościami roboczymi sąsiednich kanałów, wywołując zakłócenia.</Explanation>
</Concept>

<Concept title="Liczba generowanych nowych fal (produktów nieliniowych)">
  <Formula tex={String.raw`L=\frac{N^2(N-1)}{2}`} />
  <Symbol symbol={String.raw`L`} desc="maksymalna liczba powstałych fal wtórnych (produktów nieliniowych)" />
  <Symbol symbol={String.raw`N`} desc="liczba transmitowanych nośnych (kanałów)" />
  <Explanation><b>Wzrost kombinatoryczny FWM</b>: pokazuje, jak lawinowo rośnie liczba pasożytniczych fal wraz z dodawaniem kolejnych nośnych \(N\) w systemach DWDM.</Explanation>
</Concept>
<div className="space-y-2 mt-3 text-muted text-[15.5px] leading-relaxed">
  <div><b>Zjawisko nieliniowe 3. rzędu</b>: przy transmisji fal o różnych długościach <b>interferencja generuje kolejne fale</b>; moc fal wtórnych <b>rośnie kosztem podstawowych</b> → <b>tłumienie i przesłuchy</b>, wzrost BER.</div>
  <div>Nasilane przez: <b>mały odstęp między kanałami</b> oraz <b>dużą moc</b> (większa moc zmniejsza przesłuchy liniowe, ale zwiększa nieliniowe!).</div>
  <div>Eliminacja: <b>włókna o niezerowym współczynniku dyspersji (norma G.655)</b> — im większa dyspersja, tym mniejsza efektywność FWM (SMF-28, D=16 ps/nm/km → odstęp ~20 GHz; włókna niskodyspersyjne → &gt;50 GHz).</div>
</div>
</div>

</div>


<div className="my-[26px] mb-2.5 font-mono text-[13px] tracking-[0.16em] uppercase text-amber border-b border-line pb-1.5">Blok 5 · Fizyka półprzewodników (rozdz. 6)</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">16</span><span className="font-semibold text-[15.5px] leading-tight text-white">Półprzewodniki samoistne i domieszkowane</span></div>
<div className="space-y-2 mb-3 text-muted text-[15.5px] leading-relaxed">
  <div>Przewodnictwo <b>10⁻⁹–10³ Ω⁻¹cm⁻¹</b>, silnie zależne od domieszkowania, temperatury, napromieniowania; przerwa energetyczna umownie <b>0–3 eV</b>; przewodnictwo <b>elektronowe &gt; jonowe</b>.</div>
  <div><b>Samoistne:</b> doskonała struktura (bez domieszek i defektów); <b>n = p = nᵢ</b>; generacja par elektron–dziura z temperaturą; <b>duża rezystywność</b>; nᵢ <b>rośnie z T, maleje z E_g</b>.</div>
  <div><b>Typ n:</b> domieszka <b>donorowa (oddaje elektron)</b>, V grupa (dla Si: <b>fosfor</b>); poziom donorowy <b>przy dnie pasma przewodnictwa</b>.</div>
  <div><b>Typ p:</b> domieszka <b>akceptorowa (przyjmuje elektron)</b>, III grupa (dla Si: <b>bor</b>); poziom akceptorowy <b>przy paśmie walencyjnym</b>; dziury = swobodne cząstki dodatnie.</div>
  <div><b>Poziomy głębokie</b> (Cu w Ge, Au w Si) — środek przerwy → <b>centra generacyjno-rekombinacyjne</b>; mₕ* &gt; mₑ* → rezystywność typu p większa.</div>
</div>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="t1 font-mono font-bold text-ink bg-green rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">17</span><span className="font-semibold text-[15.5px] leading-tight text-white">Koncentracja — równowaga termodynamiczna</span></div>
<Concept title="Rozkład Fermiego–Diraca (prawdopodobieństwo obsadzenia stanu)">
  <Formula tex={String.raw`f_n(E)=\frac{1}{1+e^{(E-E_F)/kT}}`} />
  <Symbol symbol={String.raw`f_n(E)`} desc="prawdopodobieństwo zajęcia stanu o energii E przez elektron" />
  <Symbol symbol={String.raw`E_F`} desc="poziom (energia) Fermiego" />
  <Symbol symbol={String.raw`k`} desc="stała Boltzmanna (\(\approx 1{,}38\cdot 10^{-23}\,\mathrm{J/K}\))" />
  <Symbol symbol={String.raw`T`} desc="temperatura bezwzględna" />
  <Explanation><b>Rozkład Fermiego–Diraca</b>: określa prawdopodobieństwo zajęcia poziomu energetycznego przez elektron w danej temperaturze; dla stanów energetycznych oddalonych o \(\ge 2kT\) od poziomu Fermiego rozkład ten dąży do klasycznego rozkładu Maxwella-Boltzmanna.</Explanation>
</Concept>

<Concept title="Koncentracja nośników w stanie równowagi termodynamicznej">
  <Formula tex={String.raw`n=N_c e^{(E_F-E_c)/kT}\qquad p=N_v e^{(E_v-E_F)/kT}`} />
  <Symbol symbol={String.raw`n, p`} desc="koncentracja elektronów / dziur" />
  <Symbol symbol={String.raw`N_c, N_v`} desc="efektywna gęstość stanów w paśmie przewodnictwa / walencyjnym" />
  <Symbol symbol={String.raw`E_c, E_v`} desc="energia dna pasma przewodnictwa / stropu pasma walencyjnego" />
  <Explanation><b>Koncentracja nośników w równowadze</b>: zależy wykładniczo od położenia poziomu Fermiego \(E_F\) względem krawędzi pasm. W stanie równowagi termodynamicznej iloczyn \(n \cdot p = n_i^2\) jest stały w danej temperaturze, niezależnie od stopnia domieszkowania.</Explanation>
</Concept>
<div className="space-y-2 mt-3 text-muted text-[15.5px] leading-relaxed">
  <div><b>Poziom Fermiego: prawdopodobieństwo obsadzenia = 0,5.</b> Samoistny — <b>środek przerwy</b>; typ n — <b>bliżej pasma przewodnictwa</b>; typ p — <b>bliżej pasma walencyjnego</b>.</div>
  <div className="text-green font-semibold">KLUCZ: w równowadze iloczyn n·p = nᵢ² jest STAŁY i nie zależy od domieszkowania.</div>
  <div>Wykres n(T) dla Si typu n: <b>0–150 K</b> wzrost (jonizacja domieszek) → <b>150–450 K</b> plateau (wszystkie zjonizowane) → <b>&gt;450 K</b> wzrost (generacja samoistna par e–dziura).</div>
</div>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="t1 font-mono font-bold text-ink bg-green rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">18</span><span className="font-semibold text-[15.5px] leading-tight text-white">Koncentracja — nierównowaga</span></div>
<div className="space-y-2 mb-3 text-muted text-[15.5px] leading-relaxed">
  <div>Zakłócenie: <b>pole zewnętrzne (światło, RTG) lub przepływ prądu</b>; ogólnie <b>np ≠ nᵢ²</b>: np &gt; nᵢ² → <b>iniekcja (wstrzykiwanie)</b>, np &lt; nᵢ² → <b>ekstrakcja (wyciąganie)</b>.</div>
  <div><b>Generacja/rekombinacja bezpośrednia:</b> potrzeba <b>energii &gt; E_g</b> (cieplna — mało prawdopodobne, świetlna — praktycznie zawsze); rekombinacja wydziela energię: <b>Si, Ge → ciepło; GaAs → światło</b>. Szybkość rekombinacji ~ n·p.</div>
  <div><b>Pośrednia:</b> dwa etapy przez <b>centrum g-r</b> → większe prawdopodobieństwo, <b>szybsza generacja/rekombinacja, krótszy czas życia</b>; <b>pułapkowanie</b> = przetrzymanie nośnika w centrum bez rekombinacji.</div>
  <div><b>Czas życia nośników mniejszościowych</b> — spadek koncentracji nadmiarowych <b>e-krotnie (~63%)</b>; <b>droga dyfuzyjna</b> — odległość spadku e-krotnego.</div>
</div>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">19</span><span className="font-semibold text-[15.5px] leading-tight text-white">Transport nośników</span></div>
<Concept title="Przewodnictwo właściwe (konduktywność) półprzewodnika">
  <Formula tex={String.raw`\sigma=|e|\,(n\mu_e+p\mu_h)`} />
  <Symbol symbol={String.raw`\sigma`} desc="przewodnictwo właściwe (konduktywność)" />
  <Symbol symbol={String.raw`e`} desc="ładunek elementarny elektronu (\(\approx 1{,}6\cdot 10^{-19}\,\mathrm{C}\))" />
  <Symbol symbol={String.raw`\mu_e, \mu_h`} desc="ruchliwość elektronów oraz dziur" />
  <Explanation><b>Przewodnictwo właściwe</b>: określa zdolność półprzewodnika do przewodzenia prądu elektrycznego pod wpływem pola dryfowego; zależy zarówno od koncentracji, jak i ruchliwości obu rodzajów nośników ładunku (elektronów i dziur).</Explanation>
</Concept>
<div className="space-y-2 mt-3 text-muted text-[15.5px] leading-relaxed">
  <div><b>Ruchliwość</b> ~ czas między zderzeniami; zależy od <b>koncentracji domieszek, temperatury i natężenia pola</b>.</div>
  <div>Zderzenia: <b>rozpraszanie na jonach domieszek</b> (dominuje <b>&lt; 150 K</b>; więcej domieszek = mniejsza ruchliwość) i <b>na fononach</b> (wyższe T; <b>dominuje w zakresie pracy przyrządów</b>).</div>
  <div>Pole &gt; <b>5×10⁴ V/cm</b> (Si) → <b>spadek ruchliwości</b> (prędkość dryfu stała).</div>
  <div>σ szybko zmienna z T (jak koncentracja); samoistne: log σ(1/T) <b>liniowa</b>; <b>szersze pasmo zabronione → mniejsza σ</b>.</div>
</div>
</div>

<div className="md:col-span-2 border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">20</span><span className="font-semibold text-[15.5px] leading-tight text-white">Złącze p–n · polaryzacja zaporowa i przewodzenia</span></div>
<div className="space-y-2 mb-3 text-muted text-[15.5px] leading-relaxed">
  <div>Po zetknięciu: <b>dyfuzja</b> elektronów n→p i dziur p→n → <b>warstwa zaporowa</b> (= dipolowa = ładunku przestrzennego = zubożona) → pole przeciwdziałające dyfuzji → <b>napięcie dyfuzyjne (bariera potencjału)</b> → <b>prąd unoszenia mniejszościowych</b> przeciwny do <b>prądu dyfuzji większościowych</b>. <b>Równowaga: suma prądów = 0</b> (dyfuzja = unoszenie osobno dla e i dziur).</div>
</div>
<table className="w-full border-collapse my-3 text-[15.5px]">
<tbody><tr><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[12.5px] text-amber-soft bg-ink2 tracking-wider"></th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[12.5px] text-amber-soft bg-ink2 tracking-wider">ZAPOROWA (polaryzacja zgodna z nap. dyfuzyjnym)</th><th className="border border-line px-2.5 py-1.5 text-left font-mono text-[12.5px] text-amber-soft bg-ink2 tracking-wider">PRZEWODZENIA (przeciwna)</th></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Bariera / ładunek / szerokość warstwy</td><td className="border border-line px-2.5 py-1.5 text-left"><b>rosną</b></td><td className="border border-line px-2.5 py-1.5 text-left"><b>maleją</b></td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Prąd dyfuzji (większościowe)</td><td className="border border-line px-2.5 py-1.5 text-left">maleje do zera</td><td className="border border-line px-2.5 py-1.5 text-left">wzrasta</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Prąd unoszenia (mniejszościowe)</td><td colSpan={2} className="border border-line px-2.5 py-1.5 text-left">bez zmian</td></tr>
<tr><td className="border border-line px-2.5 py-1.5 text-left">Wypadkowy prąd</td><td className="border border-line px-2.5 py-1.5 text-left"><b>słaby, stały</b></td><td className="border border-line px-2.5 py-1.5 text-left"><b>znaczny, od p do n</b></td></tr>
</tbody></table>
</div>

</div>


<div className="my-[26px] mb-2.5 font-mono text-[13px] tracking-[0.16em] uppercase text-amber border-b border-line pb-1.5">Blok 6 · Pamięci i nośniki (rozdz. 7–9)</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">21</span><span className="font-semibold text-[15.5px] leading-tight text-white">Parametry pamięci półprzewodnikowych</span></div>
<div className="space-y-2 mb-3 text-muted text-[15.5px] leading-relaxed">
  <div><b>Podstawowe: pojemność</b> (liczba jednostek pamięci), <b>organizacja pamięci, czas dostępu</b> (lokalizacja bajtu).</div>
  <div><b>Technologiczne: czas odczytu i zapisu, szybkość transmismi danych.</b></div>
  <div>Cechy: technologia układów scalonych, <b>krótki czas dostępu, znaczna pojemność, znikomy pobór mocy, brak elementów mechanicznych</b> (jednorodny dostęp); SSD — skrócenie czasu dostępu do <b>1000×</b>.</div>
  <div>Podział: <b>ROM</b> (stałe) / <b>RAM</b> (<b>ulotne</b>): <b>SRAM</b> (najszybsze; komórka 4–6 tranzystorów MOS) i <b>DRAM</b> (tańsze; komórka = <b>1 kondensator + 1 tranzystor</b>).</div>
</div>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="t1 font-mono font-bold text-ink bg-green rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">22</span><span className="font-semibold text-[15.5px] leading-tight text-white">Tranzystory bipolarne</span></div>
<Concept title="Zależności prądowe w tranzystorze bipolarnym (BJT)">
  <Formula tex={String.raw`I_E=I_C+I_B\qquad \beta=\frac{I_C}{I_B}\approx 100`} />
  <Symbol symbol={String.raw`I_E`} desc="prąd emitera" />
  <Symbol symbol={String.raw`I_C`} desc="prąd kolektora" />
  <Symbol symbol={String.raw`I_B`} desc="prąd bazy" />
  <Symbol symbol={String.raw`\beta`} desc="współczynnik wzmocnienia prądowego w konfiguracji wspólnego emitera" />
  <Explanation><b>Wzmocnienie prądowe BJT</b>: prąd emitera jest sumą prądów bazy i kolektora; współczynnik wzmocnienia prądowego \(\beta\) określa stosunek prądu kolektora do prądu bazy (typowo rzędu 100, od kilkunastu do kilkuset).</Explanation>
</Concept>
<div className="space-y-2 mt-3 text-muted text-[15.5px] leading-relaxed">
  <div><b>Dwa przeciwnie połączone złącza ze wspólną warstwą</b>; elektrody: <b>baza B, emiter E, kolektor C</b>; E i C ten sam typ, <b>baza przeciwny</b>; konfiguracje <b>n–p–n i p–n–p</b>. Emiter <b>dostarcza</b> nośniki do bazy, kolektor je <b>zbiera</b>.</div>
  <div>Bez podłączonej bazy <b>prąd nie płynie</b> (bariera potencjału). Napięcie U_BE <b>obniża barierę</b> → nośniki z emitera przez bazę do kolektora; <b>U_BE kontroluje ilość nośników</b>.</div>
  <div><b>I_C zależy od I_B, słabo od U_CE</b>; I_C rośnie z U_BE <b>β-razy szybciej niż I_B</b>; warunek startu: U_BE &gt; napięcie przewodzenia złącza.</div>
  <div><b>Baza must być cienka</b>: czas rekombinacji ≫ czas dyfuzji przez bazę. <b>Sterowanie PRĄDOWE, zasilanie ciągłe.</b></div>
</div>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="t1 font-mono font-bold text-ink bg-green rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">23</span><span className="font-semibold text-[15.5px] leading-tight text-white">Tranzystory polowe</span></div>
<div className="space-y-2 mb-3 text-muted text-[15.5px] leading-relaxed">
  <div><b>FET = JFET (złączowe) + IGFET (izolowana bramka, np. MOSFET)</b>; elektrody: <b>źródło S, bramka G, dren D</b> (odpowiedniki: emiter, baza, kolektor); <b>sterowanie polem elektrycznym bramki</b>.</div>
  <div><b>JFET:</b> 3 warstwy, 2 złącza p–n; napięcie zaporowe poszerza obszar bez nośników → <b>rośnie opór kanału</b>.</div>
  <div><b>MOSFET:</b> bramka napylona na <b>izolatorze</b> (tlenek, nawet 5 atomów grubości) → <b>przez bramkę nie płynie żaden prąd</b>. U_GS=0 → <b>„zatkanie"</b>; U_GS&gt;0 → <b>warstwa inwersyjna</b> z elektronów swowodnych → przewodzenie; <b>U_DS=U_GS → kanał zanika przy drenie → nasycenie I_D</b>.</div>
  <div>Obszary pracy: <b>nienasycenia</b> (I_D ~ U_DS, prawo Ohma) i <b>nasycenia</b> (I_D = const); zawsze I_D = f(U_GS).</div>
  <div><b>Sterowanie NAPIĘCIOWE, zasilanie tylko przy przełączaniu</b>, b. duża impedancja wejściowa. Extra: <b>3D Tri-gate</b> (Intel 2012) — bramki z 3 stron, prawo Moore'a.</div>
</div>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">24</span><span className="font-semibold text-[15.5px] leading-tight text-white">Pamięć Flash</span></div>
<div className="space-y-2 mb-3 text-muted text-[15.5px] leading-relaxed">
  <div><b>EEPROM:</b> kasowalna i programowalna <b>elektrycznie</b>; komórka = <b>1 tranzystor MNOS</b>; <b>20–40 V</b> na bramkę → ładunek w warstwie <b>azotku krzemu</b> = <b>logiczne 0</b>; odwrócenie polaryzacji = kasowanie = <b>logiczna 1</b>.</div>
  <div><b>Flash EEPROM (błyskowa):</b> kasowanie/zapis <b>wielu komórek naraz w jednej sekwencji</b>, bez UV; <b>10 000–100 000 cykli</b>; elektrony na <b>bramce pływającej trzymają stan latami</b>; prąd tylko przy przełączaniu.</div>
  <div><b>NOR</b> — dostęp bezpośredni do każdej komórki, ale wolny zapis/kasowanie; <b>NAND</b> — szybszy zapis, większa gęstość, 10× trwalszy, lepszy koszt/pojemność, ale <b>dostęp sekwencyjny</b> (karty SD/MMC/MS/xD, USB).</div>
  <div><b>Wada:</b> zapis tylko po skasowaniu komórki; <b>kasowanie tylko całych bloków</b>; kasowanie znacznie dłuższe niż zapis/odczyt.</div>
</div>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">25</span><span className="font-semibold text-[15.5px] leading-tight text-white">Dyski optyczne — zapis i odczyt</span></div>
<div className="space-y-2 mb-3 text-muted text-[15.5px] leading-relaxed">
  <div><b>Budowa CD-R:</b> poliwęglan (<b>n=1,55</b>; 1,2 mm) → warstwa odbijająca (<b>Al/Au/Ag</b>) → lakier ochronny 30 μm; <b>pity</b> (wgłębienia) i <b>landy</b> w spiralnej ścieżce (szer. 0,6 μm, odchylenie 0,3 μm / 22,05 kHz steruje obrotami, odstęp 1,6 μm).</div>
  <div><b>Zapis (CD-RW, zmiana fazy):</b> stop <b>Ag–In–Sb2–Te</b>; laser topi (<b>500–700°C</b>) → <b>struktura amorficzna (zapis, słabo odbija)</b>; wyżarzanie <b>&gt;200°C → krystaliczna (kasowanie, mocno odbija)</b>; moce: <b>15 mW zapis / ≤3 mW odczyt</b>; ~<b>1000 cykli</b>; warstwy dielektryczne odprowadzają ciepło.</div>
  <div><b>Odczyt:</b> laser GaAlAs <b>780 nm</b> (w poliwęglanie ~500 nm); <b>pit głęboki na λ/4 ≈ 125 nm → fale od pitu i landu w przeciwfazie → interferencyjne wygaszenie</b>; wiązka 800 μm → <b>1,7 μm</b> na warstwie (kurz niewidoczny); <b>zmiana poziomu = „1", brak zmiany = „0"</b>; v liniowa <b>1,25 m/s</b> = const → obroty zmienne 500–200 obr/min.</div>
  <div><b>DVD:</b> pit 0,4 μm, ścieżki 0,74 μm, laser 635–650 nm, 2 warstwy + 2 strony, <b>4,7–17 GB</b>; <b>Blu-ray:</b> 405 nm, do 16 warstw, 400 GB.</div>
</div>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">26</span><span className="font-semibold text-[15.5px] leading-tight text-white">Dyski magneto-optyczne</span></div>
<div className="space-y-2 mb-3 text-muted text-[15.5px] leading-relaxed">
  <div>Jak CD-RW, ale <b>warstwa nagrywana magnetyczna (100 nm)</b>: krystality jednodomenowe, domeny <b>prostopadłe do powierzchni płyty</b>.</div>
  <div><b>Zmiana domen wymaga podgrzania do temperatury Curie 150–180°C</b> (powyżej — zanik ustawienia dipoli) <b>+ pola magnetycznego głowicy</b> — jednocześnie.</div>
  <div><b>OMM</b> — stałe pole magnetyczne, <b>laser moduluje temperaturę</b> (przemagnesowują się tylko cząstki oświetlone; po ochłodzeniu zachowują zwrot → trwały zapis); <b>MFMM</b> — stała moc lasera, <b>modulowana wartość pola</b> (pole decyduje, które domeny się przeorientują).</div>
  <div><b>Odczyt — rotacja Kerra:</b> polaryzacja światła odbitego zależy od kierunku namagnesowania (dwie prostopadłe płaszczyzny) → analizator + detektor.</div>
  <div>Stany namagnesowania = 0/1 (odpowiednik pitów i landów); <b>nadpisywanie bez wcześniejszego kasowania</b>.</div>
</div>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">27</span><span className="font-semibold text-[15.5px] leading-tight text-white">Dyski magnetyczne — zapis/odczyt</span></div>
<div className="space-y-2 mb-3 text-muted text-[15.5px] leading-relaxed">
  <div><b>Dia-/para-/ferromagnetyki</b> — tylko <b>ferromagnetyki</b> (namagnesowanie spontaniczne, duża przenikalność: stopy, ferryty, tlenki Fe/Cr) w nośnikach; <b>domeny magnetyczne</b> = elementarne pola podlegające przemagnesowaniu.</div>
  <div><b>Pętla histerezy B(H)</b>: do zapisu cyfrowego materiał <b>magnetycznie twardy</b>; temperatura Curie = utrata magnetyzmu; rozmagnesowanie przez siły międzydomenowe → okresowe przegrywanie danych.</div>
  <div className="text-green font-semibold">ZAPIS: strumień elektromagnetyczny przez głowicę → zmiana kierunku namagnesowania. ODCZYT: zmienne pole indukuje prąd w cewce głowicy. Logiczna „1" = przejście do przeciwnego namagnesowania.</div>
  <div><b>HDD:</b> talerze Al + nośnik kilka μm; głowice na ramionach, w pracy <b>unoszą się na sile aerodynamicznej</b>; pozycjonowanie cewką (<b>&lt;1 ms</b> między ścieżkami); dane w <b>sektorach na ścieżkach</b> (proporcjonalne/równe); parametry: <b>pojemność, transmisja, czas dostępu, obroty, MTBF</b>; macierze dyskowe.</div>
  <div>Taśmy: zapis <b>równoległy</b> lub <b>skośny (helikalny)</b>; wada — <b>dostęp sekwencyjny</b>; dziś archiwizacja (streamery, LTO 2,5 TB).</div>
</div>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">28</span><span className="font-semibold text-[15.5px] leading-tight text-white">Magnetorezystancja</span></div>
<div className="space-y-2 mb-3 text-muted text-[15.5px] leading-relaxed">
  <div><b>Zjawisko Gaussa (magnetoopór): zmiana rezystywności metali i półprzewodników pod wpływem zewnętrznego pola magnetycznego.</b> Mechanizm: <b>tor cząstki zakrzywia się → dłuższa droga → mniejszy prąd (większy opór)</b>.</div>
  <div><b>GMR (gigantyczna):</b> <b>znaczna zmiana oporu układu wielowarstwowego — warstwy ferromagnetyczne przedzielone przewodzącymi nieferromagnetycznymi</b>; pole zewnętrzne <b>zmienia względną orientację momentów magnetycznych warstw</b> → zmiana magnetooporu o <b>kilkadziesiąt % już przy słabych polach</b>; czuły na temperaturę.</div>
  <div><b>Głowica (zawór spinowy):</b> <b>miękki ferromagnetyk (magnetyzacja równoległa do nośnika) + twardy (prostopadła)</b>; nad ścianką <b>N–N</b> magnetyzacja miękkiego staje się prostopadła → opór rośnie (prąd maleje); nad <b>S–S</b> — orientacja przeciwna → prąd rośnie.</div>
  <div>Gęstość zapisu do <b>100 GB/cm²</b> — granica fizyczna (domeny porównywalne ze ściankami).</div>
</div>
</div>

</div>


<div className="my-[26px] mb-2.5 font-mono text-[13px] tracking-[0.16em] uppercase text-amber border-b border-line pb-1.5">Wzory ratunkowe + projekt</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="t1 font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">Σ</span><span className="font-semibold text-[15.5px] leading-tight text-white">Wzory, które MUSZĄ siedzieć (zadanie!)</span></div>
<Concept title="Strefy Fresnela (widoczność)">
  <Formula tex={String.raw`R_n=\sqrt{\frac{n\lambda d_1 d_2}{d_1+d_2}}`} />
  <Symbol symbol={String.raw`R_n`} desc="promień n-tej strefy Fresnela" />
  <Symbol symbol={String.raw`d_1, d_2`} desc="odległości od przeszkody do anten" />

  <Formula tex={String.raw`R_1=\tfrac12\sqrt{\lambda D}`} />
  <Symbol symbol={String.raw`R_1`} desc="promień pierwszej strefy Fresnela w środku trasy" />
  <Symbol symbol={String.raw`D`} desc="całkowita odległość między antenami" />
  <Explanation><b>Promień strefy Fresnela</b>: określa elipsoidalny obszar wokół osi bezpośredniej widoczności anten; wniknięcie przeszkody w tę strefę powoduje dyfrakcję i dodatkowe tłumienie sygnału.</Explanation>
</Concept>

<Concept title="Parametry światłowodu (modowość)">
  <Formula tex={String.raw`V=\frac{2\pi a}{\lambda_0}\sqrt{n_1^2-n_2^2}`} />
  <Symbol symbol={String.raw`V`} desc="częstotliwość znormalizowana rdzenia" />
  <Symbol symbol={String.raw`a`} desc="promień rdzenia światłowodu" />
  <Symbol symbol={String.raw`n_1, n_2`} desc="współczynniki załamania rdzenia i płaszcza" />

  <Formula tex={String.raw`M\approx\frac{V^2}{2}`} />
  <Symbol symbol={String.raw`M`} desc="liczba modów światłowodu" />
  <Explanation>— skokowy</Explanation>

  <Formula tex={String.raw`M\approx\frac{V^2}{4}`} />
  <Symbol symbol={String.raw`M`} desc="liczba modów światłowodu" />
  <Explanation>— gradientowy</Explanation>

  <Formula tex={String.raw`V < 2{,}405\quad (\text{jednomodowy HE}_{11})`} />
  <Symbol symbol={String.raw`V`} desc="warunek pracy jednomodowej światłowodu (HE11)" />
  <Explanation><b>Liczba modów światłowodu</b>: częstotliwość znormalizowana \(V\) decyduje o liczbie prowadzonych modów \(M\). Przy {"\\(V < 2,405\\)"} światłowód prowadzi tylko mod podstawowy HE11 (jest jednomodowy).</Explanation>
</Concept>

<Concept title="Dyspersja modowa we włóknach">
  <Formula tex={String.raw`\Delta=\frac{n_1-n_2}{n_1}`} />
  <Symbol symbol={String.raw`\Delta`} desc="względna różnica współczynników załamania" />

  <Formula tex={String.raw`\sigma_\tau\approx\frac{L}{c_1}\Delta`} />
  <Symbol symbol={String.raw`\sigma_\tau`} desc="poszerzenie impulsów" />
  <Symbol symbol={String.raw`c_1`} desc="prędkość światła w rdzeniu światłowodu" />
  <Explanation>— skokowy</Explanation>

  <Formula tex={String.raw`\sigma_\tau\approx\frac{L}{2c_1}\Delta^2`} />
  <Symbol symbol={String.raw`\sigma_\tau`} desc="poszerzenie impulsów" />
  <Explanation>— gradientowy</Explanation>
  <Explanation><b>Poszerzenie dyspersyjne</b>: określa rozmycie impulsów świetlnych w dziedzinie czasu na skutek różnych prędkości grupowych modów w światłowodzie wielomodowym.</Explanation>
</Concept>

<Concept title="Budżet mocy i kompensacja dyspersji">
  <Formula tex={String.raw`P_S-P_C-\alpha_{SMF}L_{SMF}-\alpha_{DCF}L_{DCF}\geq P_R+P_m`} />
  <Symbol symbol={String.raw`P_S, P_R`} desc="moc nadajnika i czułość odbiornika optycznego" />
  <Symbol symbol={String.raw`L_{SMF}, L_{DCF}`} desc="długości światłowodu SMF i kompensującego DCF" />

  <Formula tex={String.raw`L_{DCF}=-\frac{L_{SMF}D_{SMF}}{D_{DCF}}`} />
  <Symbol symbol={String.raw`D_{SMF}, D_{DCF}`} desc="współczynniki dyspersji chromatycznej SMF i DCF" />
  <Explanation><b>Budżet mocy i kompensacja</b>: warunek bilansu mocy gwarantuje, że sygnał optyczny po przejściu przez oba światłowody (SMF i DCF) ma moc wyższą niż czułość odbiornika optycznego wraz z marginesem; ujemna dyspersja DCF znosi dodatnią dyspersję SMF.</Explanation>
</Concept>

<Concept title="Kąt graniczny i parametry sygnału">
  <Formula tex={String.raw`\theta_c = \arcsin\frac{n_2}{n_1}`} />
  <Symbol symbol={String.raw`\theta_c`} desc="kąt graniczny w rdzeniu" />

  <Formula tex={String.raw`\Gamma=\frac{R_b}{B}`} />
  <Symbol symbol={String.raw`\Gamma`} desc="efektywność widmowa sygnułu modulowanego" />
  <Symbol symbol={String.raw`R_b`} desc="przepływność binarna (przepustowość)" />
  <Symbol symbol={String.raw`B`} desc="pasmo częstotliwości kanału" />

  <Formula tex={String.raw`f=\frac{c}{\lambda}`} />
  <Symbol symbol={String.raw`f`} desc="częstotliwość fali świetlnej" />
  <Symbol symbol={String.raw`\lambda`} desc="długość fali światła" />
  <Explanation><b>Parametry sygnału i propagacji</b>: zestaw zależności do wyznaczania kąta granicznego całkowitego odbicia we włóknie, efektywności wykorzystania pasma częstotliwości (efektywności widmowej) oraz przeliczania częstotliwości fali na długość fali.</Explanation>
</Concept>
</div>

<div className="border border-line bg-panel rounded-xl px-4 py-[14px] text-[16.5px]">
<div className="flex items-baseline gap-2 mb-2"><span className="font-mono font-bold text-ink bg-amber rounded-md px-[7px] py-px text-[13px] whitespace-nowrap">P</span><span className="font-semibold text-[15.5px] leading-tight text-white">Projekt — szybkie fakty (pyt. 30)</span></div>
<div className="space-y-2 mb-3 text-muted text-[15.5px] leading-relaxed">
  <div>Łącze <b>Tarnów–Nowy Sącz, 89 km, λ = 1550 nm (3. okno)</b>, włókno SMF TeraLight + kompensacja <b>DCF38 vs FDCF-050</b>; budżety mocy dla 1/5/10 Gbit/s.</div>
  <div className="text-red font-semibold">Częstotliwość — umieć wyliczyć przy tablicy: f = c/λ = 3×10⁸ / 1,55×10⁻⁶ ≈ 1,94×10¹⁴ Hz (≈194 THz).</div>
  <div>Margines projektowy: <b>3–6 dB</b>; SMF: niskie α, dodatnie D; DCF: wysokie α, <b>ujemne D</b>; DCF jako „puszka" — nie wlicza się do długości łącza.</div>
  <div>Moc lasera standardowo 10–20 mW (do 100 mW); większa moc → dłuższe łącze, ale → zjawiska nieliniowe (FWM).</div>
</div>
</div>

</div>

<footer className="text-center text-muted font-mono text-[12px] mt-9">FPTiTI · ŚCIĄGA 28 pytań · kondensat odpowiedzi cz. 1–5 wg A. Szymańskiej · powodzenia 13.06 💪</footer>
</div>
    


    </>
  );
}

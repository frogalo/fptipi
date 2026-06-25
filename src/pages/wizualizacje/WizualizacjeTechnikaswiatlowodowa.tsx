import React, { useEffect } from 'react';
import Footer from '../../components/Footer';

export default function WizualizacjeTechnikaswiatlowodowa() {

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);



  return (
    <>
      
<div className="max-w-[880px] mx-auto" style={{ "maxWidth": "960px" }}>

<header className="mb-6 border border-line bg-linear-to-br from-panel to-ink2 rounded-[14px] px-6 py-[22px]">
  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-amber">FPTiTI · wizualizacja interaktywna</div>
  <h1 className="text-[27px] font-semibold mt-1.5 mb-1">Dyspersja Modowa</h1>
  <div className="text-muted text-[14.5px]">Porównanie propagacji impulsu w światłowodzie wielomodowym</div>
</header>

    <p className="viz-intro mb-[11px]">
        Porównanie propagacji impulsu w światłowodzie wielomodowym o profilu <strong>skokowym</strong> oraz <strong>gradientowym</strong>. <br/>
        W profilu skokowym mod biegnący zygzakiem ma dłuższą drogę i zostaje w tyle (silne rozmycie impulsu). <br/>
        W profilu gradientowym mod odbijający się przyspiesza przy krawędziach (mniejszy współczynnik załamania), dzięki czemu oba mody docierają na metę niemal równocześnie!
    </p>

    
    <div className="fiber-container">
        <div className="fiber-title">
            <span>Profil Skokowy (Step-Index)</span>
            <span style={{ "color": "var(--red)" }}>Znaczne opóźnienie = Duża dyspersja</span>
        </div>
        <div className="fiber">
            <div className="pulse step-straight"></div>
            <div className="pulse slow step-bounce"></div>
        </div>
    </div>

    
    <div className="fiber-container">
        <div className="fiber-title">
            <span>Profil Gradientowy (Graded-Index)</span>
            <span style={{ "color": "var(--green)" }}>Czasy wyrównane = Mała dyspersja</span>
        </div>
        <div className="fiber graded">
            <div className="pulse grad-straight"></div>
            <div className="pulse slow grad-curve"></div>
        </div>
    </div>

    <div className="viz-legend">
        <div className="viz-legend-item"><div className="viz-dot" style={{ "background": "var(--pulse-color)", "boxShadow": "0 0 10px var(--pulse-color)" }}></div> Mod Osiowy (Krótka trasa)</div>
        <div className="viz-legend-item"><div className="viz-dot" style={{ "background": "var(--pulse-slow)", "boxShadow": "0 0 10px var(--pulse-slow)" }}></div> Mod Wyższego Rzędu (Długa trasa)</div>
    </div>
    <Footer>FPTiTI · Wizualizacje interaktywne · Dyspersja Modowa</Footer>
</div>
    


    </>
  );
}

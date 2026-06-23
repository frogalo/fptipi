import React, { useEffect } from 'react';
import Footer from '../../components/Footer';

export default function WizualizacjeNosnikidanych() {

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);



  return (
    <>
      
<div className="max-w-[880px] mx-auto" style={{ "maxWidth": "1100px" }}>

<header className="mb-6 border border-line bg-gradient-to-br from-panel to-ink2 rounded-[14px] px-6 py-[22px]">
  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-amber">FPTiTI · wizualizacja interaktywna</div>
  <h1 className="text-[27px] font-semibold mt-1.5 mb-1">Nośniki Danych — pamięć optyczna i magnetyczna</h1>
  <div className="text-muted text-[14.5px]">Interaktywne diagramy zapisu i odczytu danych</div>
</header>

<div className="data-grid">
    
    <div className="data-panel">
        <h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Pamięć Optyczna (CD-RW)</h3>
        <div className="cd-disk">
            <div className="cd-hole"></div>
        </div>

        <p className="desc mb-[11px]">Zmiana struktury z krystalicznej (Land) na amorficzną (Pit). Laser zmienia fazę stopu. Przejście oznacza "1", brak zmiany "0".</p>

        <div className="phase-track">
            <div className="bit land">LAND</div>
            <div className="bit pit">PIT</div>
            <div className="bit pit">PIT</div>
            <div className="bit land">LAND</div>
            <div className="bit land">LAND</div>
        </div>
    </div>

    
    <div className="data-panel">
        <h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Pamięć Magnetyczna (HDD)</h3>
        <p className="desc mb-[11px]" style={{ "marginBottom": "2rem" }}>Zapis przez zmianę polaryzacji domen magnetycznych (Temperatura Curie + pole głowicy). <br/><strong style={{ "color": "var(--amber)" }}>Najedź myszką na domenę, aby zmienić jej polaryzację!</strong></p>

        <div className="hdd-surface">
            <div className="head"></div>
            
            <div className="domain" style={{ "transform": "rotate(180deg)" }}><span>S</span><span>N</span></div>
            <div className="domain"><span>N</span><span>S</span></div>
            <div className="domain"><span>N</span><span>S</span></div>
            <div className="domain" style={{ "transform": "rotate(180deg)" }}><span>S</span><span>N</span></div>
            <div className="domain"><span>N</span><span>S</span></div>
        </div>

        <p className="desc mb-[11px]" style={{ "marginTop": "3rem" }}>Odczyt realizowany jest m.in. przez głowice wykorzystujące efekt <strong>Gigantycznej Magnetorezystancji (GMR)</strong> - opór elektryczny głowicy zależy od kierunku namagnesowania mijanej domeny.</p>
    </div>
</div>
<Footer>FPTiTI · Wizualizacje interaktywne · Pamięć Optyczna i Magnetyczna</Footer>
</div>
    


    </>
  );
}

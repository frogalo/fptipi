import React, { useEffect } from 'react';

export default function WizualizacjeFaleem() {

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);



  return (
    <>
      

    <div className="max-w-[880px] mx-auto">

    <header className="mb-6 border border-line bg-gradient-to-br from-panel to-ink2 rounded-[14px] px-6 py-[22px]">
      <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-amber">FPTiTI · wizualizacja interaktywna</div>
      <h1 className="text-[27px] font-semibold mt-1.5 mb-1">Równania Maxwella i Propagacja</h1>
      <div className="text-muted text-[14.5px]">Cztery fundamentalne równania opisujące pole elektromagnetyczne</div>
    </header>

        <div className="viz-grid">
            <div className="viz-card">
                <h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Prawo Faradaya</h3>
                <div className="equation">∇ × E = -∂B/∂t</div>
                <p className="mb-[11px]">Zmieniające się pole magnetyczne wytwarza wirowe pole elektryczne. To podstawa indukcji elektromagnetycznej.</p>
            </div>

            <div className="viz-card">
                <h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Prawo Ampera-Maxwella</h3>
                <div className="equation">∇ × B = μ₀(j + ε₀∂E/∂t)</div>
                <p className="mb-[11px]">Prąd przewodzenia oraz zmieniające się pole elektryczne (prąd przesunięcia) wytwarzają wirowe pole magnetyczne.</p>
            </div>

            <div className="viz-card">
                <h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Prawo Gaussa (Elektr.)</h3>
                <div className="equation">∇ · E = ρ/ε₀</div>
                <p className="mb-[11px]">Źródłem pola elektrycznego są ładunki. Linie pola wychodzą z ładunków dodatnich, a wchodzą do ujemnych.</p>
            </div>

            <div className="viz-card">
                <h3 className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide">Prawo Gaussa (Magn.)</h3>
                <div className="equation">∇ · B = 0</div>
                <p className="mb-[11px]">Nie istnieją monopole magnetyczne. Linie pola magnetycznego są zawsze zamkniętymi pętlami.</p>
            </div>
        </div>

        <h2 style={{ "marginBottom": "1rem", "color": "var(--green)", "fontFamily": "var(--mono)" }} className="text-[20.5px] font-semibold leading-tight">Propagacja Troposferyczna (LOS)</h2>
        <div className="wave-container">
            <p style={{ "textAlign": "center", "color": "var(--muted)", "fontSize": "0.9rem" }} className="mb-[11px]">Fala poruszająca się między nadajnikiem a odbiornikiem. Zasięg ograniczony jest krzywizną Ziemi i strefami Fresnela.</p>
            <div className="tower left"></div>
            <div className="wave-path">
                <div className="wave-dot"></div>
            </div>
            <div className="tower right"></div>
        </div>
    </div>
    


    </>
  );
}

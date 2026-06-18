import React, { useEffect, useMemo, useState } from 'react';

type BandType = 'intrinsic' | 'n-type' | 'p-type';

const bandCopy = {
  intrinsic: {
    title: 'Półprzewodnik samoistny',
    note: 'Poziom Fermiego leży prawie w środku przerwy zabronionej. Liczba elektronów i dziur jest porównywalna.',
    electrons: 5,
    holes: 5,
    fermiY: 172,
  },
  'n-type': {
    title: 'Typ N - domieszki donorowe',
    note: 'Donor wprowadza poziom blisko pasma przewodnictwa, więc elektrony łatwo przechodzą do Ec.',
    electrons: 13,
    holes: 2,
    fermiY: 124,
  },
  'p-type': {
    title: 'Typ P - domieszki akceptorowe',
    note: 'Akceptor tworzy poziom blisko pasma walencyjnego, a przewodzenie jest zdominowane przez dziury.',
    electrons: 2,
    holes: 13,
    fermiY: 220,
  },
} satisfies Record<BandType, { title: string; note: string; electrons: number; holes: number; fermiY: number }>;

function makeCharges(bandType: BandType) {
  const config = bandCopy[bandType];
  const electrons = Array.from({ length: config.electrons }, (_, i) => ({
    x: 166 + (i % 7) * 54 + Math.floor(i / 7) * 18,
    y: 68 + (i % 3) * 15,
  }));
  const holes = Array.from({ length: config.holes }, (_, i) => ({
    x: 166 + (i % 7) * 54 + Math.floor(i / 7) * 18,
    y: 258 + (i % 3) * 15,
  }));

  return { electrons, holes };
}

export default function WizualizacjeElementypolprzewodnikowe() {
  const [bandType, setBandType] = useState<BandType>('intrinsic');
  const [ube, setUbe] = useState(0);
  const band = bandCopy[bandType];
  const charges = useMemo(() => makeCharges(bandType), [bandType]);
  const barrierScale = Math.max(0.1, 1 - ube / 80);
  const bjtActive = ube >= 60;

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <div className="max-w-[880px] mx-auto" style={{ maxWidth: '900px' }}>
      <header style={{ marginTop: '15px' }} className="mb-6 border border-line bg-gradient-to-br from-panel to-ink2 rounded-[14px] px-6 py-[22px]">
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-amber">FPTiTI · wizualizacja interaktywna</div>
        <h1 className="text-[27px] font-semibold mt-1.5 mb-1">Fizyka Półprzewodników</h1>
        <div className="text-muted text-[14.5px]">Interaktywne diagramy ilustrujące złącze P-N, tranzystory, pasma energetyczne i pamięci półprzewodnikowe.</div>
      </header>

      <div className="diagram-title">1. Złącze P-N (Dioda)</div>
      <p className="viz-intro mb-[11px]" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Najedź kursorem na złącze, aby spolaryzować je w kierunku przewodzenia. Napięcie zewnętrzne pokonuje barierę potencjału, zwężając warstwę zaporową i umożliwiając przepływ prądu.</p>
      <div className="pn-junction">
        <div className="region p">P</div>
        <div className="depletion-region">Zaporowa</div>
        <div className="region n">N</div>
      </div>

      <div className="diagram-title" style={{ marginTop: '3rem' }}>2. Tranzystor MOSFET (Kanał N)</div>
      <p className="viz-intro mb-[11px]" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Najedź na elektrodę bramki (G), aby spolaryzować ją dodatnio. Pole elektryczne przyciąga elektrony pod bramkę, indukując warstwę inwersyjną i wywołując prąd drenu.</p>
      <div className="mosfet-container">
        <div className="mosfet-body">Podłoże (Typ P)</div>
        <div className="source">Źródło (S)</div>
        <div className="drain">Dren (D)</div>
        <div className="oxide"></div>
        <div className="gate">Bramka (G)</div>
        <div className="channel">
          <div className="electrons"></div>
          <div className="electrons" style={{ animationDelay: '0.3s', top: '1px' }}></div>
          <div className="electrons" style={{ animationDelay: '0.6s', top: '8px' }}></div>
        </div>
      </div>

      <div className="diagram-title" style={{ marginTop: '3rem' }}>3. Model Pasmowy Półprzewodników</div>
      <p className="viz-intro mb-[11px]" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Przełącz typ półprzewodnika, aby zobaczyć położenie poziomu Fermiego, poziomy domieszkowe i względną liczbę nośników.</p>
      <div className="band-controls">
        <button type="button" onClick={() => setBandType('intrinsic')} className={bandType === 'intrinsic' ? 'active' : ''}>Samoistny</button>
        <button type="button" onClick={() => setBandType('n-type')} className={bandType === 'n-type' ? 'active' : ''}>Typ N</button>
        <button type="button" onClick={() => setBandType('p-type')} className={bandType === 'p-type' ? 'active' : ''}>Typ P</button>
      </div>
      <div className="band-diagram band-diagram-fixed">
        <svg viewBox="0 0 760 360" width="100%" role="img" aria-label="Model pasmowy półprzewodnika">
          <defs>
            <linearGradient id="gapFill" x1="0" x2="1">
              <stop offset="0%" stopColor="rgba(244,165,42,0.03)" />
              <stop offset="50%" stopColor="rgba(244,165,42,0.13)" />
              <stop offset="100%" stopColor="rgba(244,165,42,0.03)" />
            </linearGradient>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L8,4 L0,8 Z" fill="var(--amber)" />
            </marker>
          </defs>

          <line x1="72" y1="310" x2="72" y2="36" stroke="var(--muted)" strokeWidth="2" />
          <path d="M72 34 L64 48 M72 34 L80 48" stroke="var(--muted)" strokeWidth="2" fill="none" />
          <text x="28" y="46" fill="var(--muted)" fontFamily="var(--mono)" fontSize="13">E</text>

          <rect x="118" y="48" width="430" height="74" rx="10" fill="rgba(255,111,111,.10)" stroke="var(--red)" strokeWidth="2" />
          <rect x="118" y="238" width="430" height="74" rx="10" fill="rgba(127,180,255,.10)" stroke="var(--blue)" strokeWidth="2" />
          <rect x="118" y="126" width="430" height="108" rx="8" fill="url(#gapFill)" stroke="rgba(244,165,42,.22)" strokeDasharray="8 7" />

          <text x="136" y="77" fill="var(--red)" fontFamily="var(--mono)" fontSize="15" fontWeight="700">Ec - pasmo przewodnictwa</text>
          <text x="136" y="267" fill="var(--blue)" fontFamily="var(--mono)" fontSize="15" fontWeight="700">Ev - pasmo walencyjne</text>
          <text x="324" y="183" fill="var(--amber)" fontFamily="var(--mono)" fontSize="13" textAnchor="middle">przerwa zabroniona Eg</text>

          <line x1="106" y1={band.fermiY} x2="578" y2={band.fermiY} stroke="var(--green)" strokeWidth="2.4" strokeDasharray="10 7" />
          <rect x="586" y={band.fermiY - 18} width="116" height="36" rx="8" fill="rgba(91,227,154,.12)" stroke="var(--green-dim)" />
          <text x="644" y={band.fermiY + 5} fill="var(--green)" fontFamily="var(--mono)" fontSize="14" textAnchor="middle">E_F</text>

          {bandType === 'n-type' && (
            <>
              <line x1="118" y1="136" x2="548" y2="136" stroke="var(--amber)" strokeWidth="2" strokeDasharray="7 7" />
              <text x="594" y="141" fill="var(--amber)" fontFamily="var(--mono)" fontSize="13">Ed donor</text>
              <path d="M478 136 C478 116 478 110 478 100" stroke="var(--amber)" strokeWidth="2" markerEnd="url(#arrow)" />
            </>
          )}

          {bandType === 'p-type' && (
            <>
              <line x1="118" y1="224" x2="548" y2="224" stroke="var(--amber)" strokeWidth="2" strokeDasharray="7 7" />
              <text x="594" y="229" fill="var(--amber)" fontFamily="var(--mono)" fontSize="13">Ea akceptor</text>
              <path d="M188 248 C188 236 188 232 188 224" stroke="var(--amber)" strokeWidth="2" markerEnd="url(#arrow)" />
            </>
          )}

          <g>
            {charges.electrons.map((charge, index) => (
              <circle key={`electron-${index}`} cx={charge.x} cy={charge.y} r="6" fill="var(--red)" stroke="rgba(255,255,255,.25)" />
            ))}
            {charges.holes.map((charge, index) => (
              <circle key={`hole-${index}`} cx={charge.x} cy={charge.y} r="6" fill="none" stroke="var(--blue)" strokeWidth="3" />
            ))}
          </g>

          <foreignObject x="582" y="252" width="148" height="70">
            <div className="band-mini-note">
              <b>{band.title}</b>
              <span>{band.electrons} e- / {band.holes} dziur</span>
            </div>
          </foreignObject>
        </svg>
        <div className="band-explanation">{band.note}</div>
      </div>

      <div className="diagram-title" style={{ marginTop: '3rem' }}>4. Tranzystor Bipolarny NPN</div>
      <p className="viz-intro mb-[11px]" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Przesuwaj suwak polaryzacji złącza baza-emiter {'\\(U_{BE}\\)'}. Po przekroczeniu około 0.6 V bariera potencjału spada, a elektrony z emitera przechodzą do kolektora.</p>
      <div className="bjt-controls">
        <label htmlFor="ube-slider">Napięcie Ube: <span>{(ube / 100).toFixed(2)}</span> V</label>
        <input type="range" id="ube-slider" min="0" max="100" value={ube} onChange={(event) => setUbe(Number(event.currentTarget.value))} />
      </div>
      <div className="bjt-container">
        <div className="bjt-region emitter"><span className="bjt-label">Emiter (N)</span></div>
        <div className="bjt-region base">
          <span className="bjt-label">Baza (P)</span>
          <div className="base-wire"></div>
          <div className="base-contact">B</div>
        </div>
        <div className="bjt-region collector"><span className="bjt-label">Kolektor (N)</span></div>
        {bjtActive && Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className={`bjt-carrier ${index % 7 === 0 ? 'to-base' : ''}`}
            style={{
              top: `${34 + (index % 5) * 11}px`,
              animationDelay: `${index * 0.16}s`,
              animationDuration: `${Math.max(0.45, 1.35 - (ube - 60) * 0.018)}s`,
            }}
          />
        ))}
        <div className={`barrier-overlay ${bjtActive ? 'active' : ''}`} style={{ transform: `translateX(-50%) scaleY(${barrierScale})` }}>
          <div className="barrier-text">{bjtActive ? 'Wąska Bariera' : 'Bariera Potencjału'}</div>
        </div>
      </div>

      <div className="extra-viz-grid">
        <section className="extra-viz-card fermi-viz">
          <h3>5. Rozkład Fermiego-Diraca</h3>
          <p>Punkt przecięcia przy \(E_F\) oznacza prawdopodobieństwo obsadzenia równe 0,5.</p>
          <div className="fermi-plot">
            <div className="fermi-axis-x"></div>
            <div className="fermi-axis-y"></div>
            <div className="fermi-curve"></div>
            <div className="fermi-ef"></div>
            <span className="fermi-label f-top">f(E)</span>
            <span className="fermi-label f-half">0,5</span>
            <span className="fermi-label f-ef">E_F</span>
          </div>
        </section>

        <section className="extra-viz-card photon-viz">
          <h3>6. Fotogeneracja par e-h</h3>
          <p>Foton o energii większej od \(E_g\) przenosi elektron do pasma przewodnictwa i zostawia dziurę w paśmie walencyjnym.</p>
          <div className="photon-stage">
            <div className="photon-band top">Ec</div>
            <div className="photon-gap">hν ≥ Eg</div>
            <div className="photon-band bottom">Ev</div>
            <div className="photon-beam"></div>
            <div className="jump-electron"></div>
            <div className="jump-hole"></div>
          </div>
        </section>

        <section className="extra-viz-card dram-viz">
          <h3>7. Komórka DRAM: 1T + 1C</h3>
          <p>Bit jest ładunkiem kondensatora. Kondensator przecieka, dlatego DRAM wymaga cyklicznego odświeżania.</p>
          <div className="dram-stage">
            <div className="word-line">WL</div>
            <div className="bit-line">BL</div>
            <div className="dram-gate"></div>
            <div className="dram-channel-line"></div>
            <div className="capacitor">
              <span></span>
              <span></span>
            </div>
            <div className="charge-dots">
              {Array.from({ length: 9 }, (_, index) => <i key={index}></i>)}
            </div>
            <div className="refresh-pulse">refresh</div>
          </div>
        </section>

        <section className="extra-viz-card eeprom-viz">
          <h3>8. EEPROM / MNOS</h3>
          <p>Impuls 20-40 V na bramce umieszcza ładunek w warstwie azotku krzemu. Zmienia to próg przewodzenia komórki.</p>
          <div className="eeprom-stage">
            <div className="eeprom-gate">G</div>
            <div className="eeprom-nitride">ładunek w azotku</div>
            <div className="eeprom-body"></div>
            <div className="eeprom-source">S</div>
            <div className="eeprom-drain">D</div>
            <div className="eeprom-pulse">20-40 V</div>
            {Array.from({ length: 8 }, (_, index) => <i key={index}></i>)}
          </div>
        </section>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

interface EyeParam {
  id: string;
  name: string;
  symbol: string;
  desc: string;
  color: string;
}

const EYE_PARAMS: EyeParam[] = [
  {
    id: 'noise_margin',
    name: 'Margines szumowy',
    symbol: 'V₁',
    desc: 'Pionowe otwarcie oka w optymalnym punkcie próbkowania Tp. Określa odporność sygnału na zakłócenia i szum amplitudowy. Im większa rozwartość V₁, tym mniejsza stopa błędu BER.',
    color: '#10b981',
  },
  {
    id: 'jitter',
    name: 'Zniekształcenie czasowe przecięcia (Jitter)',
    symbol: 'ΔT',
    desc: 'Rozmycie punktu przecięcia zboczy sygnału na osi czasu. Wynika z fluktuacji fazy, szumu fazowego oraz dyspersji. Zmniejsza dopuszczalne okno próbkowania.',
    color: '#f43f5e',
  },
  {
    id: 'opt_sample',
    name: 'Najlepsze miejsce próbkowania',
    symbol: 'Tp',
    desc: 'Punkt w czasie, w którym rozwarcie oka (V₁) jest maksymalne. Odbiornik powinien w tym dokładnie momencie próbkować poziom sygnału (decydować o bicie 1 lub 0).',
    color: '#38bdf8',
  },
  {
    id: 'sample_interval',
    name: 'Przedział czasu próbkowania',
    symbol: 'Okno detekcji',
    desc: 'Szerokość pozioma rozwarcia oka. Określa przedział czasu, w którym sygnał może zostać prawidłowo spróbkowany bez błędu decyzyjnego.',
    color: '#a855f7',
  },
  {
    id: 'slope',
    name: 'Nachylenie wykresu (zbocza)',
    symbol: 'dudt',
    desc: 'Stromość zboczy narastających i opadających. Określa wrażliwość odbiornika na błędy synchronizacji zegara (jitter zegara próbkującego). Im bardziej strome zbocza, tym mniejsza tolerancja błędu fazy.',
    color: '#f59e0b',
  },
  {
    id: 'amp_dist',
    name: 'Zniekształcenie amplitudy sygnału',
    symbol: 'Vmax - V\'max',
    desc: 'Grubość górnej i dolnej wiązki sygnału. Powstaje wskutek szumu addytywnego, tętnień zasilania oraz nieliniowości toru optycznego/elektronicznego.',
    color: '#fb7185',
  },
  {
    id: 'threshold',
    name: 'Próg decyzyjny',
    symbol: 'Uth',
    desc: 'Poziom odniesienia komparatora w odbiorniku. Próbki powyżej progu klasyfikowane są jako logiczna jedynka (1), a poniżej jako zero (0).',
    color: '#60a5fa',
  },
];

export default function EyeDiagramVisualizer() {
  const [activeParam, setActiveParam] = useState<EyeParam>(EYE_PARAMS[0]);
  const [distortionLevel, setDistortionLevel] = useState<number>(20); // 0..100%

  // Coordinates for Eye Diagram SVG (Width: 740, Height: 340)
  const dFactor = distortionLevel / 100; // 0 = ideal, 1 = closed

  // Trace levels
  const yTopOuter = 60 + dFactor * 10;
  const yTopInner = 85 + dFactor * 35;
  const yMid = 170;
  const yBotInner = 255 - dFactor * 35;
  const yBotOuter = 280 - dFactor * 10;

  // Horizontal crossing points
  const xCrossLeft = 240 + (dFactor - 0.2) * 20;
  const xCrossRight = 500 - (dFactor - 0.2) * 20;
  const xSampleCenter = 370;

  return (
    <div className="my-6 rounded-2xl border border-line bg-linear-to-b from-panel via-ink2/95 to-panel2/70 p-4 sm:p-6 shadow-xl">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-line/60">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber shadow-[0_0_8px_#f4a52a]" />
            <h4 className="font-mono text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-amber">
              Rysunek 5.4. Wykres oczkowy i parametry jakościowe łącza
            </h4>
          </div>
          <p className="text-[13px] text-muted mt-0.5">
            Interaktywna analiza parametrów wykresu oczkowego zgodnie z podręcznikiem
          </p>
        </div>

        {/* Distortion Slider */}
        <div className="flex items-center gap-2 p-1.5 px-3 rounded-xl bg-ink/80 border border-line">
          <span className="font-mono text-[11.5px] text-muted">Zniekształcenia (dyspersja/szum):</span>
          <input
            type="range"
            min="5"
            max="80"
            value={distortionLevel}
            onChange={e => setDistortionLevel(parseInt(e.target.value, 10))}
            className="w-24 accent-amber cursor-pointer"
          />
          <span className="font-mono text-[11.5px] font-bold text-amber w-8 text-right">
            {distortionLevel}%
          </span>
        </div>
      </div>

      {/* Parameter Selection Pills */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {EYE_PARAMS.map(param => (
          <button
            key={param.id}
            type="button"
            onClick={() => setActiveParam(param)}
            className={`font-mono text-[11px] px-2.5 py-1 rounded-md border transition-all cursor-pointer ${
              activeParam.id === param.id
                ? 'bg-amber/20 border-amber text-amber font-bold shadow-sm'
                : 'bg-ink border-line/60 text-muted hover:text-txt'
            }`}
          >
            {param.name} ({param.symbol})
          </button>
        ))}
      </div>

      {/* Interactive SVG Diagram matching Rysunek 5.4 */}
      <div className="relative w-full overflow-hidden rounded-xl border border-line/70 bg-[#0d131f] p-3 sm:p-4 shadow-inner">
        <svg
          viewBox="0 0 740 340"
          className="w-full h-auto select-none font-sans"
          role="img"
          aria-label="Wykres oczkowy z oznaczeniem parametrów"
        >
          <defs>
            <filter id="eyeRedGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#ef4444" floodOpacity="0.6" />
            </filter>
            <filter id="highlightGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#f4a52a" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* ============================================================== */}
          {/* HORIZONTAL REFERENCE LINES (Vmax, V'max, V'min, Vmin, Thresh)   */}
          {/* ============================================================== */}
          {/* Vmax Line */}
          <line x1="80" y1={yTopOuter} x2="660" y2={yTopOuter} stroke="#1e3a8a" strokeWidth="2.5" />
          <text x="65" y={yTopOuter + 4} fill="#60a5fa" fontSize="12" fontStyle="italic" fontWeight="bold" textAnchor="end">
            Vmax
          </text>
          <text x="140" y={yTopOuter - 10} fill="#94a3b8" fontSize="10.5">
            Największa wartość sygnału (Vmax)
          </text>

          {/* V'max Line */}
          <line x1="80" y1={yTopInner} x2="660" y2={yTopInner} stroke="#1e3a8a" strokeWidth="2" strokeDasharray="6 3" />
          <text x="65" y={yTopInner + 4} fill="#60a5fa" fontSize="12" fontStyle="italic" fontWeight="bold" textAnchor="end">
            V'max
          </text>

          {/* Decision Threshold Line (Próg decyzyjny) */}
          <line
            x1="80"
            y1={yMid}
            x2="660"
            y2={yMid}
            stroke="#2563eb"
            strokeWidth={activeParam.id === 'threshold' ? '3' : '2'}
            strokeDasharray="5 4"
            filter={activeParam.id === 'threshold' ? 'url(#highlightGlow)' : undefined}
          />
          <text x="65" y={yMid + 4} fill="#3b82f6" fontSize="12" fontStyle="italic" fontWeight="bold" textAnchor="end">
            Próg decyzyjny
          </text>

          {/* V'min Line */}
          <line x1="80" y1={yBotInner} x2="660" y2={yBotInner} stroke="#1e3a8a" strokeWidth="2" strokeDasharray="6 3" />
          <text x="65" y={yBotInner + 4} fill="#60a5fa" fontSize="12" fontStyle="italic" fontWeight="bold" textAnchor="end">
            V'min
          </text>

          {/* Vmin Line */}
          <line x1="80" y1={yBotOuter} x2="660" y2={yBotOuter} stroke="#1e3a8a" strokeWidth="2.5" />
          <text x="65" y={yBotOuter + 4} fill="#60a5fa" fontSize="12" fontStyle="italic" fontWeight="bold" textAnchor="end">
            Vmin
          </text>
          <text x="140" y={yBotOuter + 22} fill="#94a3b8" fontSize="10.5">
            Najmniejsza wartość sygnału (Vmin)
          </text>

          {/* ============================================================== */}
          {/* EYE TRACES (Czerwone trajektorie jak na Rys. 5.4)              */}
          {/* ============================================================== */}
          <g id="eyeTraces" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" filter="url(#eyeRedGlow)">
            {/* Upper horizontal rail */}
            <line x1="100" y1={yTopOuter} x2="640" y2={yTopOuter} />

            {/* Lower horizontal rail */}
            <line x1="100" y1={yBotOuter} x2="640" y2={yBotOuter} />

            {/* Diagonal transition 1: falling from top-left */}
            <line x1="110" y1={yTopOuter} x2="630" y2={yBotOuter} />

            {/* Diagonal transition 2: rising from bot-left */}
            <line x1="110" y1={yBotOuter} x2="630" y2={yTopOuter} />

            {/* Secondary inner transitions showing dispersion thickness */}
            <line x1="180" y1={yTopInner} x2="560" y2={yBotInner} strokeOpacity="0.7" strokeWidth="2" />
            <line x1="180" y1={yBotInner} x2="560" y2={yTopInner} strokeOpacity="0.7" strokeWidth="2" />

            {/* Inverted inner diamond lines (opening) */}
            <line x1="180" y1={yTopInner} x2={xSampleCenter} y2={yTopOuter} strokeOpacity="0.8" />
            <line x1={xSampleCenter} y1={yTopOuter} x2="560" y2={yTopInner} strokeOpacity="0.8" />
            <line x1="180" y1={yBotInner} x2={xSampleCenter} y2={yBotOuter} strokeOpacity="0.8" />
            <line x1={xSampleCenter} y1={yBotOuter} x2="560" y2={yBotInner} strokeOpacity="0.8" />

            {/* Inner diamond eye shape */}
            <line x1={xCrossLeft} y1={yMid} x2={xSampleCenter} y2={yTopInner} />
            <line x1={xSampleCenter} y1={yTopInner} x2={xCrossRight} y2={yMid} />
            <line x1={xCrossLeft} y1={yMid} x2={xSampleCenter} y2={yBotInner} />
            <line x1={xSampleCenter} y1={yBotInner} x2={xCrossRight} y2={yMid} />
          </g>

          {/* ============================================================== */}
          {/* PARAMETER ANNOTATIONS (Margines V1, Tp, delta T, nachylenie)   */}
          {/* ============================================================== */}

          {/* 1. Najlepsze miejsce próbkowania (Tp) - pionowa linia środkowa */}
          <line
            x1={xSampleCenter}
            y1="30"
            x2={xSampleCenter}
            y2="310"
            stroke={activeParam.id === 'opt_sample' ? '#38bdf8' : '#64748b'}
            strokeWidth={activeParam.id === 'opt_sample' ? '2.5' : '1.5'}
            strokeDasharray="4 3"
          />
          <text
            x={xSampleCenter}
            y="24"
            fill={activeParam.id === 'opt_sample' ? '#38bdf8' : '#94a3b8'}
            fontSize="11.5"
            fontWeight="bold"
            textAnchor="middle"
          >
            Najlepsze miejsce próbkowania (Tp)
          </text>

          {/* 2. Margines szumowy (V1) - pionowy wymiar otworu oka */}
          <g id="dimV1" className="cursor-pointer" onClick={() => setActiveParam(EYE_PARAMS[0])}>
            <line
              x1={xSampleCenter + 150}
              y1={yTopInner}
              x2={xSampleCenter + 150}
              y2={yMid}
              stroke={activeParam.id === 'noise_margin' ? '#10b981' : '#cbd5e1'}
              strokeWidth="2"
            />
            <line x1={xSampleCenter + 143} y1={yTopInner} x2={xSampleCenter + 157} y2={yTopInner} stroke="#10b981" strokeWidth="2" />
            <line x1={xSampleCenter + 143} y1={yMid} x2={xSampleCenter + 157} y2={yMid} stroke="#10b981" strokeWidth="2" />
            <polygon points={`${xSampleCenter + 150},${yTopInner} ${xSampleCenter + 146},${yTopInner + 8} ${xSampleCenter + 154},${yTopInner + 8}`} fill="#10b981" />
            <polygon points={`${xSampleCenter + 150},${yMid} ${xSampleCenter + 146},${yMid - 8} ${xSampleCenter + 154},${yMid - 8}`} fill="#10b981" />
            <text
              x={xSampleCenter + 165}
              y={(yTopInner + yMid) / 2 + 4}
              fill={activeParam.id === 'noise_margin' ? '#34d399' : '#cbd5e1'}
              fontSize="11.5"
              fontWeight="bold"
            >
              Margines szumowy (V₁)
            </text>
          </g>

          {/* 3. Zniekształcenie amplitudy (Vmax - V'max) */}
          <g id="dimAmpDist" className="cursor-pointer" onClick={() => setActiveParam(EYE_PARAMS[5])}>
            <line x1="570" y1="20" x2="570" y2={yTopOuter} stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="570" y1={yTopOuter} x2="570" y2={yTopInner} stroke="#fb7185" strokeWidth="2" />
            <line x1="565" y1={yTopInner} x2="575" y2={yTopInner} stroke="#fb7185" strokeWidth="2" />
            <text x="570" y="15" fill="#fb7185" fontSize="10.5" fontWeight="bold" textAnchor="middle">
              Zniekształcenie amplitudy
            </text>
          </g>

          {/* 4. Nachylenie wykresu */}
          <g id="dimSlope" className="cursor-pointer" onClick={() => setActiveParam(EYE_PARAMS[4])}>
            <line x1="160" y1="130" x2="220" y2="130" stroke="#f59e0b" strokeWidth="1.5" />
            <polygon points="225,130 216,126 216,134" fill="#f59e0b" />
            <text x="150" y="134" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="end">
              Nachylenie wykresu
            </text>
          </g>

          {/* 5. Przedział czasu w którym sygnał może być próbkowany */}
          <g id="dimSampleWindow" className="cursor-pointer" onClick={() => setActiveParam(EYE_PARAMS[3])}>
            <line x1={xCrossLeft} y1={yMid} x2={xCrossLeft} y2="280" stroke="#a855f7" strokeWidth="1" strokeDasharray="3 3" />
            <line x1={xCrossRight} y1={yMid} x2={xCrossRight} y2="280" stroke="#a855f7" strokeWidth="1" strokeDasharray="3 3" />
            <line x1={xCrossLeft} y1="275" x2={xCrossRight} y2="275" stroke="#a855f7" strokeWidth="2" />
            <polygon points={`${xCrossLeft},275 ${xCrossLeft + 8},271 ${xCrossLeft + 8},279`} fill="#a855f7" />
            <polygon points={`${xCrossRight},275 ${xCrossRight - 8},271 ${xCrossRight - 8},279`} fill="#a855f7" />
            <text x={xSampleCenter} y="295" fill="#c084fc" fontSize="11" fontWeight="bold" textAnchor="middle">
              Przedział czasu w którym sygnał może być próbkowany
            </text>
          </g>

          {/* 6. Zniekształcenie czasowe przecięcia (Jitter ΔT) */}
          <g id="dimJitter" className="cursor-pointer" onClick={() => setActiveParam(EYE_PARAMS[1])}>
            <line x1={xCrossRight - 20} y1="210" x2={xCrossRight + 20} y2="210" stroke="#f43f5e" strokeWidth="2" />
            <line x1={xCrossRight - 20} y1="205" x2={xCrossRight - 20} y2="215" stroke="#f43f5e" strokeWidth="1.5" />
            <line x1={xCrossRight + 20} y1="205" x2={xCrossRight + 20} y2="215" stroke="#f43f5e" strokeWidth="1.5" />
            <line x1={xCrossRight} y1="210" x2={xCrossRight + 35} y2="245" stroke="#f43f5e" strokeWidth="1" />
            <text x={xCrossRight + 40} y="250" fill="#f43f5e" fontSize="10.5" fontWeight="bold">
              Zniekształcenie czasowe (ΔT)
            </text>
          </g>
        </svg>
      </div>

      {/* Selected Parameter Details Card */}
      <div className="mt-4 rounded-xl border border-line/60 bg-ink2/90 p-4 transition-all shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: activeParam.color }}
            />
            <span className="font-mono text-[14px] font-bold text-txt">
              {activeParam.name}
            </span>
            <span className="text-[11.5px] font-mono px-2 py-0.5 rounded bg-white/5 text-amber border border-amber/30 font-bold">
              Symbol: {activeParam.symbol}
            </span>
          </div>
        </div>
        <p className="text-[13px] text-muted leading-relaxed">
          {activeParam.desc}
        </p>
      </div>

      {/* Exam Takeaway Alert */}
      <div className="mt-3 p-3.5 rounded-xl border border-amber/30 bg-amber/5 text-[12.5px] text-muted leading-relaxed">
        <b className="text-amber font-mono font-bold">Wskazówka egzaminacyjna (pytanie o wykres oczkowy):</b>
        <p className="mt-1">
          Na egzaminie wymagane jest narysowanie powyższego schematu z zaznaczeniem minimum 5 kluczowych parametrów:
          <b> V₁ (margines szumowy)</b>, <b>Tp (optymalny moment próbkowania)</b>, <b>ΔT (zniekształcenie czasowe / jitter)</b>,
          <b> nachylenie zboczy (wrażliwość na synchronizację)</b> oraz <b>próg decyzyjny</b>.
          Pamiętaj o regule: <b>im bardziej otwarte oko (duże V₁ i szerokie okno), tym lepsza jakość transmisji i niższy BER</b>!
        </p>
      </div>
    </div>
  );
}

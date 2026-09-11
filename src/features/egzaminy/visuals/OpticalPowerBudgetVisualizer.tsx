import React, { useState } from 'react';

interface Checkpoint {
  id: string;
  name: string;
  z: number; // km
  p: number; // dBm
  stage: string;
  lossNote: string;
  desc: string;
  color: string;
}

const CHECKPOINTS_EXAM: Checkpoint[] = [
  {
    id: 'pt',
    name: 'Nadajnik Tx (Laser)',
    z: 0,
    p: 7,
    stage: 'Punkt początkowy',
    lossNote: 'Moc wyjściowa: PS = +7,0 dBm (5,0 mW)',
    desc: 'Laser nadawczy generuje sygnał optyczny o mocy początkowej PS = +7 dBm (5 mW).',
    color: '#10b981',
  },
  {
    id: 'z1',
    name: 'Złącze wejściowe 1 (PC)',
    z: 0,
    p: 6,
    stage: 'Tłumienie na wejściu',
    lossNote: 'Uskok pionowy PC: -1,0 dB (P = +6,0 dBm)',
    desc: 'Pionowy spadek mocy na styku złącza transmisyjnego z kablem światłowodowym: PC = 1,0 dB.',
    color: '#f43f5e',
  },
  {
    id: 'smf_end',
    name: 'Koniec toru SMF (40 km)',
    z: 40,
    p: -2,
    stage: 'Linia transmisyjna 40 km',
    lossNote: 'Liniowy spadek α·L: -8,0 dB (P = -2,0 dBm)',
    desc: 'Liniowy spadek mocy wzdłuż L = 40 km światłowodu SMF o tłumienności α = 0,2 dB/km (40 km · 0,2 dB/km = 8,0 dB).',
    color: '#0ea5e9',
  },
  {
    id: 'z2',
    name: 'Złącze pośrednie 2 (PC)',
    z: 40,
    p: -3,
    stage: 'Złącze stacyjne',
    lossNote: 'Uskok pionowy PC: -1,0 dB (P = -3,0 dBm)',
    desc: 'Drugi uskok pionowy: tłumienie złącza wprowadzającego sygnał do modułu kompensującego DCF (PC = 1,0 dB).',
    color: '#f43f5e',
  },
  {
    id: 'dcf_end',
    name: 'Kompensator DCF / Wejście Rx',
    z: 44,
    p: -5,
    stage: 'Kompensacja dyspersji',
    lossNote: 'Tłumienie DCF: -2,0 dB (P = -5,0 dBm)',
    desc: 'Włókno DCF o długości 4 km (α = 0,5 dB/km) kompensuje dyspersję chromatyczną i doprowadza moc do czułości odbiornika PR = -5,0 dBm.',
    color: '#f59e0b',
  },
];

export default function OpticalPowerBudgetVisualizer() {
  const [viewMode, setViewMode] = useState<'textbook' | 'numerical'>('textbook');
  const [activeCheckpoint, setActiveCheckpoint] = useState<Checkpoint>(CHECKPOINTS_EXAM[0]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Generous SVG dimensions with wide margins to prevent text clipping
  const svgWidth = 860;
  const svgHeight = 400;
  const padding = { left: 125, right: 125, top: 85, bottom: 55 };
  const graphWidth = svgWidth - padding.left - padding.right; // 860 - 250 = 610
  const graphHeight = svgHeight - padding.top - padding.bottom; // 400 - 140 = 260

  // Coordinate scales
  // X: 0 to 44 km
  const scaleX = (z: number) => padding.left + (z / 44) * graphWidth;

  // Y: -7 dBm to +8 dBm
  const yMin = -7;
  const yMax = 8;
  const scaleY = (p: number) => padding.top + ((yMax - p) / (yMax - yMin)) * graphHeight;

  // Key curve points
  const pLaserStart = { x: scaleX(0) - 25, y: scaleY(7) };
  const p0 = { x: scaleX(0), y: scaleY(7) };
  const p1 = { x: scaleX(0), y: scaleY(6) };
  const p2 = { x: scaleX(40), y: scaleY(-2) };
  const p3 = { x: scaleX(40), y: scaleY(-3) };
  const p4 = { x: scaleX(44), y: scaleY(-5) };
  const pEnd = { x: scaleX(44) + 20, y: scaleY(-5) };

  const pathD = `M ${pLaserStart.x} ${pLaserStart.y} L ${p0.x} ${p0.y} L ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} L ${p4.x} ${p4.y} L ${pEnd.x} ${pEnd.y}`;

  return (
    <div className="my-6 rounded-2xl border border-line bg-linear-to-b from-panel via-ink2/95 to-panel2/70 p-4 sm:p-6 shadow-xl">
      {/* Header & Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-line/60">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber shadow-[0_0_8px_#f4a52a]" />
            <h4 className="font-mono text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-amber">
              Rysunek 4.10. Moc w łączu w funkcji odległości
            </h4>
          </div>
          <p className="text-[13px] text-muted mt-0.5">
            Wizualizacja budżetu mocy łącza optycznego zgodna ze schematem z podręcznika
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-ink/80 border border-line">
          <button
            type="button"
            onClick={() => setViewMode('textbook')}
            className={`font-mono text-[12px] px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === 'textbook'
                ? 'bg-amber text-ink font-bold shadow-sm'
                : 'text-muted hover:text-txt'
            }`}
          >
            Wzorzec podręcznikowy (Rys. 4.10)
          </button>
          <button
            type="button"
            onClick={() => setViewMode('numerical')}
            className={`font-mono text-[12px] px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === 'numerical'
                ? 'bg-amber text-ink font-bold shadow-sm'
                : 'text-muted hover:text-txt'
            }`}
          >
            Wartości liczbowe zadania (40 km)
          </button>
        </div>
      </div>

      {/* Interactive SVG Chart */}
      <div className="relative w-full overflow-hidden rounded-xl border border-line/70 bg-[#0d131f] p-2 sm:p-3 shadow-inner">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto select-none font-sans"
          role="img"
          aria-label="Wykres poziomu mocy w funkcji odległości w łączu światłowodowym"
        >
          <defs>
            {/* Shading gradients */}
            <linearGradient id="laserBandGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.08" />
            </linearGradient>

            <linearGradient id="rxBandGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.25" />
            </linearGradient>

            {/* Red glow for signal line */}
            <filter id="redSignalGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#ef4444" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* ============================================================== */}
          {/* TOP PHYSICAL CHAIN SCHEMATIC (zgodny z Rysunkiem 4.10)         */}
          {/* ============================================================== */}
          <g id="physicalChain" transform="translate(0, 10)">
            {/* Nadajnik Box (lewa krawędź x=45, prawa x=115) */}
            <rect
              x={padding.left - 75}
              y={6}
              width={70}
              height={34}
              rx={3}
              fill="#1e1b4b"
              stroke="#ef4444"
              strokeWidth="1.8"
            />
            <text
              x={padding.left - 40}
              y={28}
              fill="#ef4444"
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
            >
              Nadajnik
            </text>

            {/* Connector 1: podwójny prostokąt złącza na x=scaleX(0) */}
            <rect x={scaleX(0) - 10} y={13} width={10} height={20} fill="#f43f5e" fillOpacity="0.25" stroke="#ef4444" strokeWidth="1.5" />
            <rect x={scaleX(0)} y={13} width={10} height={20} fill="#f43f5e" fillOpacity="0.25" stroke="#ef4444" strokeWidth="1.5" />

            {/* Fiber Line Section 1 (SMF) */}
            <line
              x1={scaleX(0) + 10}
              y1={23}
              x2={scaleX(40) - 10}
              y2={23}
              stroke="#ef4444"
              strokeWidth="2"
            />
            <text
              x={(scaleX(0) + scaleX(40)) / 2}
              y={38}
              fill="#ef4444"
              fontSize="11.5"
              fontWeight="bold"
              textAnchor="middle"
            >
              {viewMode === 'textbook' ? 'Światłowód' : 'Światłowód SMF (40 km)'}
            </text>

            {/* Connector 2: złącze pośrednie na x=scaleX(40) */}
            <text
              x={scaleX(40)}
              y={5}
              fill="#ef4444"
              fontSize="11"
              fontWeight="bold"
              textAnchor="middle"
            >
              Złącze
            </text>
            <rect x={scaleX(40) - 10} y={13} width={10} height={20} fill="#f43f5e" fillOpacity="0.25" stroke="#ef4444" strokeWidth="1.5" />
            <rect x={scaleX(40)} y={13} width={10} height={20} fill="#f43f5e" fillOpacity="0.25" stroke="#ef4444" strokeWidth="1.5" />

            {/* Fiber Line Section 2 (DCF) */}
            <line
              x1={scaleX(40) + 10}
              y1={23}
              x2={scaleX(44) - 10}
              y2={23}
              stroke="#ef4444"
              strokeWidth="2"
            />
            <text
              x={scaleX(42)}
              y={38}
              fill="#ef4444"
              fontSize="10"
              fontWeight="bold"
              textAnchor="middle"
            >
              {viewMode === 'textbook' ? 'Światłowód' : 'DCF'}
            </text>

            {/* Connector 3: złącze przy odbiorniku na x=scaleX(44) */}
            <rect x={scaleX(44) - 10} y={13} width={10} height={20} fill="#f43f5e" fillOpacity="0.25" stroke="#ef4444" strokeWidth="1.5" />
            <rect x={scaleX(44)} y={13} width={10} height={20} fill="#f43f5e" fillOpacity="0.25" stroke="#ef4444" strokeWidth="1.5" />

            {/* Odbiornik Box (x od scaleX(44)+5 do scaleX(44)+75, mieści się w marginesie 860) */}
            <rect
              x={scaleX(44) + 6}
              y={6}
              width={72}
              height={34}
              rx={3}
              fill="#1e1b4b"
              stroke="#ef4444"
              strokeWidth="1.8"
            />
            <text
              x={scaleX(44) + 42}
              y={28}
              fill="#ef4444"
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
            >
              Odbiornik
            </text>
          </g>

          {/* ============================================================== */}
          {/* SHADED BANDS (Moc Lasera u góry, Czułość Odbiornika u dołu)     */}
          {/* ============================================================== */}
          {/* Top Pink Band: Moc Lasera */}
          <rect
            x={padding.left}
            y={scaleY(yMax)}
            width={graphWidth}
            height={scaleY(7) - scaleY(yMax)}
            fill="url(#laserBandGrad)"
          />
          <text
            x={padding.left + graphWidth / 2}
            y={scaleY(yMax) + 14}
            fill="#fb7185"
            fontSize="12"
            fontWeight="bold"
            letterSpacing="0.05em"
            textAnchor="middle"
          >
            Moc Lasera {viewMode === 'numerical' ? '(PS = +7 dBm)' : ''}
          </text>

          {/* Bottom Blue Band: Czułość Odbiornika */}
          <rect
            x={padding.left}
            y={scaleY(-5)}
            width={graphWidth}
            height={scaleY(yMin) - scaleY(-5)}
            fill="url(#rxBandGrad)"
          />
          <text
            x={padding.left + graphWidth / 2}
            y={scaleY(-5) + 20}
            fill="#38bdf8"
            fontSize="12"
            fontWeight="bold"
            letterSpacing="0.05em"
            textAnchor="middle"
          >
            Czułość Odbiornika {viewMode === 'numerical' ? '(PR = -5 dBm)' : ''}
          </text>

          {/* ============================================================== */}
          {/* AXES (Niebieskie osie ze strzałkami)                            */}
          {/* ============================================================== */}
          {/* Y Axis Left */}
          <line
            x1={padding.left}
            y1={padding.top + graphHeight}
            x2={padding.left}
            y2={padding.top - 14}
            stroke="#2563eb"
            strokeWidth="2"
          />
          <polygon
            points={`${padding.left},${padding.top - 20} ${padding.left - 4},${padding.top - 12} ${padding.left + 4},${padding.top - 12}`}
            fill="#2563eb"
          />

          {/* Y Axis Right */}
          <line
            x1={padding.left + graphWidth}
            y1={padding.top + graphHeight}
            x2={padding.left + graphWidth}
            y2={padding.top - 14}
            stroke="#2563eb"
            strokeWidth="2"
          />
          <polygon
            points={`${padding.left + graphWidth},${padding.top - 20} ${padding.left + graphWidth - 4},${padding.top - 12} ${padding.left + graphWidth + 4},${padding.top - 12}`}
            fill="#2563eb"
          />

          {/* X Axis Bottom */}
          <line
            x1={padding.left - 10}
            y1={padding.top + graphHeight}
            x2={padding.left + graphWidth + 24}
            y2={padding.top + graphHeight}
            stroke="#2563eb"
            strokeWidth="2"
          />
          <polygon
            points={`${padding.left + graphWidth + 30},${padding.top + graphHeight} ${padding.left + graphWidth + 22},${padding.top + graphHeight - 4} ${padding.left + graphWidth + 22},${padding.top + graphHeight + 4}`}
            fill="#2563eb"
          />

          {/* Left Axis Labels - ample space from 0 to 125, no clipping! */}
          <text x={padding.left - 14} y={padding.top - 18} fill="#3b82f6" fontSize="12" fontWeight="bold" textAnchor="end">
            log
          </text>
          <text x={padding.left - 14} y={scaleY(7) + 4} fill="#ef4444" fontSize="12.5" fontWeight="bold" textAnchor="end">
            {viewMode === 'textbook' ? 'PS' : '+7 dBm (PS)'}
          </text>

          {/* Receiver Sensitivity dashed threshold */}
          <line
            x1={padding.left}
            y1={scaleY(-5)}
            x2={padding.left + graphWidth}
            y2={scaleY(-5)}
            stroke="#2563eb"
            strokeWidth="1.8"
            strokeDasharray="5 4"
          />
          <text x={padding.left - 14} y={scaleY(-5) + 4} fill="#2563eb" fontSize="12.5" fontWeight="bold" textAnchor="end">
            {viewMode === 'textbook' ? 'PR' : '-5 dBm (PR)'}
          </text>

          {/* Margin Marker: PR + Pm */}
          <circle cx={padding.left} cy={scaleY(-4.2)} r="3" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
          <line x1={padding.left} y1={scaleY(-4.2)} x2={padding.left + 16} y2={scaleY(-4.2)} stroke="#ef4444" strokeWidth="1.5" />
          <text x={padding.left - 14} y={scaleY(-4.2) + 3} fill="#93c5fd" fontSize="11" fontWeight="bold" textAnchor="end">
            PR + Pm
          </text>

          {/* X ticks */}
          <circle cx={scaleX(0)} cy={padding.top + graphHeight} r="3" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
          <text x={scaleX(0)} y={padding.top + graphHeight + 20} fill="#94a3b8" fontSize="12" fontWeight="bold" textAnchor="middle">
            0
          </text>

          <circle cx={scaleX(44)} cy={padding.top + graphHeight} r="3" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
          <text x={scaleX(44)} y={padding.top + graphHeight + 20} fill="#94a3b8" fontSize="12" fontWeight="bold" textAnchor="middle">
            {viewMode === 'textbook' ? 'L' : 'L (44 km)'}
          </text>

          {/* ============================================================== */}
          {/* RIGHT SIDE LABELS (PC, αL, PC, αL, PC) - fully inside margins  */}
          {/* ============================================================== */}
          <g id="rightAnnotations">
            {/* 1st PC drop bracket */}
            <line x1={scaleX(44) + 2} y1={scaleY(7)} x2={scaleX(44) + 12} y2={scaleY(7)} stroke="#ef4444" strokeWidth="1.5" />
            <line x1={scaleX(44) + 2} y1={scaleY(6)} x2={scaleX(44) + 12} y2={scaleY(6)} stroke="#ef4444" strokeWidth="1.5" />
            <line x1={scaleX(44) + 12} y1={scaleY(7)} x2={scaleX(44) + 12} y2={scaleY(6)} stroke="#ef4444" strokeWidth="1.5" />
            <text x={scaleX(44) + 18} y={scaleY(6.5) + 4} fill="#ef4444" fontSize="12" fontWeight="bold">
              {viewMode === 'textbook' ? 'PC' : 'PC (1 dB)'}
            </text>

            {/* 1st αL fiber slope */}
            <text x={scaleX(44) + 18} y={scaleY(2) + 4} fill="#ef4444" fontSize="13" fontWeight="bold">
              {viewMode === 'textbook' ? 'αL' : 'α·L (8 dB)'}
            </text>

            {/* 2nd PC drop bracket */}
            <line x1={scaleX(44) + 2} y1={scaleY(-2)} x2={scaleX(44) + 12} y2={scaleY(-2)} stroke="#ef4444" strokeWidth="1.5" />
            <line x1={scaleX(44) + 2} y1={scaleY(-3)} x2={scaleX(44) + 12} y2={scaleY(-3)} stroke="#ef4444" strokeWidth="1.5" />
            <line x1={scaleX(44) + 12} y1={scaleY(-2)} x2={scaleX(44) + 12} y2={scaleY(-3)} stroke="#ef4444" strokeWidth="1.5" />
            <text x={scaleX(44) + 18} y={scaleY(-2.5) + 4} fill="#ef4444" fontSize="12" fontWeight="bold">
              {viewMode === 'textbook' ? 'PC' : 'PC (1 dB)'}
            </text>

            {/* 2nd slope (DCF) */}
            <text x={scaleX(44) + 18} y={scaleY(-4) + 4} fill="#ef4444" fontSize="12.5" fontWeight="bold">
              {viewMode === 'textbook' ? 'αL' : 'α·LDCF (2 dB)'}
            </text>

            {/* 3rd PC drop bracket */}
            <line x1={scaleX(44) + 2} y1={scaleY(-4.7)} x2={scaleX(44) + 12} y2={scaleY(-4.7)} stroke="#ef4444" strokeWidth="1.5" />
            <line x1={scaleX(44) + 2} y1={scaleY(-5)} x2={scaleX(44) + 12} y2={scaleY(-5)} stroke="#ef4444" strokeWidth="1.5" />
            <line x1={scaleX(44) + 12} y1={scaleY(-4.7)} x2={scaleX(44) + 12} y2={scaleY(-5)} stroke="#ef4444" strokeWidth="1.5" />
            <text x={scaleX(44) + 18} y={scaleY(-4.85) + 4} fill="#ef4444" fontSize="12" fontWeight="bold">
              {viewMode === 'textbook' ? 'PC' : 'PC'}
            </text>
          </g>

          {/* ============================================================== */}
          {/* MAIN OPTICAL SIGNAL POWER CURVE P(z)                           */}
          {/* ============================================================== */}
          <path
            d={pathD}
            fill="none"
            stroke="#ef4444"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#redSignalGlow)"
          />

          {/* Interactive Checkpoint Markers: completely fixed! No animate-ping, no hover:scale-125 */}
          {CHECKPOINTS_EXAM.map(cp => {
            const cx = scaleX(cp.z);
            const cy = scaleY(cp.p);
            const isSelected = activeCheckpoint.id === cp.id;
            const isHovered = hoveredId === cp.id;

            return (
              <g
                key={cp.id}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredId(cp.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setActiveCheckpoint(cp)}
              >
                {/* Large invisible circle for easy hit testing */}
                <circle cx={cx} cy={cy} r="16" fill="transparent" />

                {/* Subtle static aura ring when selected */}
                {isSelected && (
                  <circle
                    cx={cx}
                    cy={cy}
                    r="11"
                    fill="none"
                    stroke={cp.color}
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                    opacity="0.8"
                  />
                )}

                {/* Main checkpoint dot: clean SVG radius without any displacement */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isSelected ? 6.5 : (isHovered ? 6 : 4.5)}
                  fill="#ffffff"
                  stroke={cp.color}
                  strokeWidth={isSelected ? 3 : 2}
                  style={{ transition: 'r 0.15s ease, stroke-width 0.15s ease' }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Interactive Details Card for Selected Checkpoint */}
      <div className="mt-4 rounded-xl border border-line/60 bg-ink2/90 p-4 transition-all shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: activeCheckpoint.color }}
            />
            <span className="font-mono text-[14px] font-bold text-txt">
              {activeCheckpoint.name}
            </span>
            <span className="text-[11.5px] font-mono px-2 py-0.5 rounded bg-white/5 text-muted border border-line/40">
              Odległość: z = {activeCheckpoint.z} km
            </span>
          </div>
          <span
            className="font-mono text-[12px] font-bold px-2.5 py-0.5 rounded border"
            style={{
              color: activeCheckpoint.color,
              borderColor: `${activeCheckpoint.color}50`,
              backgroundColor: `${activeCheckpoint.color}15`,
            }}
          >
            {activeCheckpoint.lossNote}
          </span>
        </div>
        <p className="text-[13px] text-muted leading-relaxed">
          {activeCheckpoint.desc}
        </p>
      </div>

      {/* Analytical Summary */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="rounded-xl border border-line/60 bg-ink2/50 p-3">
          <div className="text-[11px] font-mono text-muted uppercase tracking-wider">
            Moc Nadawcza (PS)
          </div>
          <div className="text-[17px] font-mono font-bold text-rose-400 mt-0.5">
            +7,0 dBm
          </div>
          <div className="text-[11.5px] text-muted mt-1">
            Poziom wyjściowy lasera nadajnika.
          </div>
        </div>

        <div className="rounded-xl border border-line/60 bg-ink2/50 p-3">
          <div className="text-[11px] font-mono text-muted uppercase tracking-wider">
            Suma tłumień toru (A_total)
          </div>
          <div className="text-[17px] font-mono font-bold text-amber mt-0.5">
            12,0 dB
          </div>
          <div className="text-[11.5px] text-muted mt-1">
            2 złącza (2 dB) + SMF 40 km (8 dB) + DCF 4 km (2 dB).
          </div>
        </div>

        <div className="rounded-xl border border-line/60 bg-ink2/50 p-3">
          <div className="text-[11px] font-mono text-muted uppercase tracking-wider">
            Czułość Rx / Margines Pm
          </div>
          <div className="text-[17px] font-mono font-bold text-emerald-400 mt-0.5">
            PR = -5,0 dBm (Pm = 0 dB)
          </div>
          <div className="text-[11.5px] text-muted mt-1">
            Moc docierająca (+7 - 12 = -5 dBm) pokrywa próg odbiornika.
          </div>
        </div>
      </div>
    </div>
  );
}

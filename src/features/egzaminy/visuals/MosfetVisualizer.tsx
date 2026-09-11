import React, { useState } from 'react';

export default function MosfetVisualizer() {
  const [activeTab, setActiveTab] = useState<'structure' | 'characteristics'>('structure');

  // Structure state: 1 to 4 corresponding to Figures 7.4, 7.5, 7.6, 7.7
  const [structureState, setStructureState] = useState<1 | 2 | 3 | 4>(3);

  // Characteristic controls
  const [selectedUgsIndex, setSelectedUgsIndex] = useState<number>(3); // 0..4
  const [sliderUds, setSliderUds] = useState<number>(3.5); // V

  const ugsValues = [
    { label: 'UGS = 0 V (UGS < UT)', ugs: 0, ut: 1.0 },
    { label: 'UGS1 = 2,0 V', ugs: 2.0, ut: 1.0 },
    { label: 'UGS2 = 3,0 V', ugs: 3.0, ut: 1.0 },
    { label: 'UGS3 = 4,0 V', ugs: 4.0, ut: 1.0 },
    { label: 'UGS4 = 5,0 V', ugs: 5.0, ut: 1.0 },
  ];

  const currentUgs = ugsValues[selectedUgsIndex];
  const uSat = Math.max(0, currentUgs.ugs - currentUgs.ut);
  const isSaturated = sliderUds >= uSat;
  const isCutoff = currentUgs.ugs <= currentUgs.ut;

  // Calculate Drain Current ID (quadratic model for visualization)
  // ID = K * [2(UGS - UT)UDS - UDS^2] in linear
  // ID = K * (UGS - UT)^2 in saturation
  const K = 0.8; // mA/V^2
  let currentId = 0;
  if (!isCutoff) {
    if (sliderUds < uSat) {
      currentId = K * (2 * (currentUgs.ugs - currentUgs.ut) * sliderUds - sliderUds * sliderUds);
    } else {
      currentId = K * Math.pow(currentUgs.ugs - currentUgs.ut, 2);
    }
  }

  // Structure states info
  const structureInfo = {
    1: {
      title: 'Rysunek 7.4. Przekrój tranzystora MOSFET: UGS = 0, UDS = 0',
      desc: 'Brak polaryzacji bramki. Brak kanału inwersyjnego pod tlenkiem. Między źródłem (N+) a drenem (N+) znajdują się dwa przeciwsobne złącza P-N w podłożu P — element nie przewodzi prądu.',
      channelType: 'none',
      currentFlow: false,
    },
    2: {
      title: 'Rysunek 7.5. Przekrój tranzystora MOSFET: UGS > UT, UDS = 0',
      desc: 'Polaryzacja bramki dodatnia (UGS > UT), dren na potencjale zerowym. Pole elektryczne bramki przyciąga elektrony pod warstwę tlenku SiO2, tworząc jednolitą warstwę inwersyjną (kanał przewodzący typu N). Brak napięcia UDS oznacza brak przepływu prądu.',
      channelType: 'uniform',
      currentFlow: false,
    },
    3: {
      title: 'Rysunek 7.6. Przekrój tranzystora MOSFET: UGS > UT, UDS > 0 (Obszar liniowy)',
      desc: 'Przyłożenie dodatniego napięcia drenu UDS wymusza przepływ elektronów ze źródła do drenu (prąd ID). Przy małym UDS spadek napięcia wzdłuż kanału jest niewielki, kanał pozostaje otwarty na całej długości — zachowuje się jak rezystor omowy.',
      channelType: 'tapered',
      currentFlow: true,
    },
    4: {
      title: 'Rysunek 7.7. Przekrój tranzystora MOSFET: UDS >= UGS - UT (Zjawisko pinch-off)',
      desc: 'Przy dużym napięciu drenu (UDS >= UGS - UT) różnica potencjałów między bramką a kanałem przy drenie spada poniżej napięcia progowego UT. Następuje zwężenie i odcięcie kanału (pinch-off). Elektrony są wciągane przez silne pole zaporowe drenu, a prąd ID osiąga stałą wartość nasycenia.',
      channelType: 'pinched',
      currentFlow: true,
    },
  };

  return (
    <div className="rounded-2xl border border-line bg-linear-to-b from-panel via-ink2/95 to-panel2/70 p-4 sm:p-6 shadow-xl">
      {/* Top Header & Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-line/60">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber shadow-[0_0_8px_#f4a52a]" />
            <h4 className="font-mono text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-amber">
              Tranzystor Polowy MOSFET: Rysunki 7.4 – 7.8 z podręcznika
            </h4>
          </div>
          <p className="text-[13px] text-muted mt-0.5">
            Interaktywna analiza przekroju struktury, indukcji kanału i charakterystyk wyjściowych
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-ink/80 border border-line">
          <button
            type="button"
            onClick={() => setActiveTab('structure')}
            className={`font-mono text-[12px] px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'structure'
                ? 'bg-amber text-ink font-bold shadow-sm'
                : 'text-muted hover:text-txt'
            }`}
          >
            Rys. 7.4–7.7: Przekrój struktury
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('characteristics')}
            className={`font-mono text-[12px] px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'characteristics'
                ? 'bg-amber text-ink font-bold shadow-sm'
                : 'text-muted hover:text-txt'
            }`}
          >
            Rys. 7.8: Charakterystyka Id(Uds)
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: PRZEKRÓJ STRUKTURY MOSFET (RYSUNKI 7.4 - 7.7)                      */}
      {/* ========================================================================= */}
      {activeTab === 'structure' && (
        <div>
          {/* 4 State Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {[1, 2, 3, 4].map(st => (
              <button
                key={st}
                type="button"
                onClick={() => setStructureState(st as 1 | 2 | 3 | 4)}
                className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                  structureState === st
                    ? 'bg-amber/15 border-amber text-amber shadow-sm'
                    : 'bg-ink/60 border-line/70 text-muted hover:text-txt hover:border-line'
                }`}
              >
                <div className="font-mono text-[11px] font-bold">Stan {st} (Rys. 7.{st + 3})</div>
                <div className="text-[11.5px] truncate mt-0.5">
                  {st === 1 && 'UGS=0, UDS=0'}
                  {st === 2 && 'UGS>UT, UDS=0'}
                  {st === 3 && 'UGS>UT, UDS>0'}
                  {st === 4 && 'Pinch-off (Nasycenie)'}
                </div>
              </button>
            ))}
          </div>

          {/* SVG Cross-Section Illustration */}
          <div className="relative w-full overflow-hidden rounded-xl border border-line/70 bg-[#0c1220] p-3 sm:p-5 shadow-inner">
            <svg
              viewBox="0 0 760 380"
              className="w-full h-auto select-none font-sans"
              role="img"
              aria-label="Przekrój tranzystora MOSFET"
            >
              <defs>
                {/* Gradients */}
                <linearGradient id="pSubstrateGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>

                <linearGradient id="nPlusGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#0369a1" />
                </linearGradient>

                <linearGradient id="channelGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>

                <linearGradient id="gateGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#b45309" />
                </linearGradient>
              </defs>

              {/* P-type Substrate Base */}
              <rect x="70" y="110" width="620" height="230" rx="10" fill="url(#pSubstrateGrad)" stroke="#334155" strokeWidth="2" />
              <text x="380" y="270" fill="#64748b" fontSize="16" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">
                Podłoże typu P (P-substrate)
              </text>
              <text x="380" y="295" fill="#475569" fontSize="12" textAnchor="middle">
                Większościowe dziury (h+), mniejszościowe elektrony (e-)
              </text>

              {/* Source N+ Island */}
              <rect x="110" y="110" width="130" height="95" rx="6" fill="url(#nPlusGrad)" stroke="#0284c7" strokeWidth="2" />
              <text x="175" y="155" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">
                Źródło (S)
              </text>
              <text x="175" y="178" fill="#bae6fd" fontSize="13" fontWeight="bold" textAnchor="middle">
                Obszar N+
              </text>

              {/* Drain N+ Island */}
              <rect x="520" y="110" width="130" height="95" rx="6" fill="url(#nPlusGrad)" stroke="#0284c7" strokeWidth="2" />
              <text x="585" y="155" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">
                Dren (D)
              </text>
              <text x="585" y="178" fill="#bae6fd" fontSize="13" fontWeight="bold" textAnchor="middle">
                Obszar N+
              </text>

              {/* SiO2 Dielectric Oxide Layer */}
              <rect x="235" y="95" width="290" height="18" rx="3" fill="#6b7280" stroke="#9ca3af" strokeWidth="1.5" />
              <text x="380" y="108" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">
                Izolator tlenkowy SiO₂
              </text>

              {/* Metal Gate Electrode (Bramka G) */}
              <rect x="250" y="55" width="260" height="40" rx="5" fill="url(#gateGrad)" stroke="#f59e0b" strokeWidth="2" />
              <text x="380" y="80" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">
                Bramka (G) – Metal
              </text>

              {/* Gate Terminal Lead */}
              <line x1="380" y1="55" x2="380" y2="18" stroke="#f59e0b" strokeWidth="3" />
              <circle cx="380" cy="18" r="4" fill="#f59e0b" />
              <text x="395" y="24" fill="#f59e0b" fontSize="13" fontWeight="bold">
                G {structureState > 1 ? '(+UGS)' : '(UGS=0)'}
              </text>

              {/* Source Terminal Lead */}
              <line x1="175" y1="110" x2="175" y2="28" stroke="#38bdf8" strokeWidth="3" />
              <circle cx="175" cy="28" r="4" fill="#38bdf8" />
              <text x="145" y="24" fill="#38bdf8" fontSize="13" fontWeight="bold">
                S (0 V)
              </text>

              {/* Drain Terminal Lead */}
              <line x1="585" y1="110" x2="585" y2="28" stroke="#38bdf8" strokeWidth="3" />
              <circle cx="585" cy="28" r="4" fill="#38bdf8" />
              <text x="600" y="24" fill="#38bdf8" fontSize="13" fontWeight="bold">
                D {structureState >= 3 ? '(+UDS)' : '(UDS=0)'}
              </text>

              {/* ==================== INVERSION CHANNEL REGION ==================== */}
              {/* State 1: No channel */}
              {structureState === 1 && (
                <g>
                  <text x="380" y="145" fill="#ef4444" fontSize="13" fontWeight="bold" textAnchor="middle">
                    ✕ Brak kanału inwersyjnego (prąd ID = 0)
                  </text>
                  <text x="380" y="165" fill="#94a3b8" fontSize="11" textAnchor="middle">
                    Dwa przeciwsobne złącza zaporowe P-N
                  </text>
                </g>
              )}

              {/* State 2: Uniform Channel Ugs > Ut, Uds = 0 */}
              {structureState === 2 && (
                <g>
                  <rect x="238" y="112" width="284" height="20" rx="3" fill="url(#channelGrad)" opacity="0.85" />
                  <text x="380" y="126" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">
                    Jednolita warstwa inwersyjna (kanał N)
                  </text>
                  {/* Plus charges on Gate, minus charges in Channel */}
                  {[260, 290, 320, 350, 380, 410, 440, 470, 500].map(x => (
                    <g key={x}>
                      <text x={x} y={90} fill="#fef08a" fontSize="11" fontWeight="bold" textAnchor="middle">+</text>
                      <circle cx={x} cy={122} r="3" fill="#ffffff" />
                    </g>
                  ))}
                </g>
              )}

              {/* State 3: Tapered channel Ugs > Ut, Uds > 0 (Linear area) */}
              {structureState === 3 && (
                <g>
                  {/* Wedge polygon from depth 22 at S to depth 12 at D */}
                  <polygon points="238,112 522,112 522,124 238,134" fill="url(#channelGrad)" opacity="0.88" />
                  <text x="380" y="125" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">
                    Kanał przewodzący w obszarze liniowym (omowym)
                  </text>

                  {/* Electron flow arrows from Source to Drain */}
                  {[270, 330, 390, 450, 490].map(x => (
                    <g key={x}>
                      <polygon points={`${x+8},120 ${x},116 ${x},124`} fill="#f8fafc" />
                      <line x1={x-14} y1={120} x2={x+4} y2={120} stroke="#f8fafc" strokeWidth="2" strokeDasharray="3 2" />
                    </g>
                  ))}
                  <text x="380" y="152" fill="#38bdf8" fontSize="12.5" fontWeight="bold" textAnchor="middle">
                    Przepływ elektronów: S ➔ D (Prąd konwencjonalny ID: D ➔ S)
                  </text>
                </g>
              )}

              {/* State 4: Pinched channel (Pinch-off / Nasycenie) */}
              {structureState === 4 && (
                <g>
                  {/* Pinched polygon: tapers to a point before the Drain */}
                  <polygon points="238,112 470,112 470,113 238,136" fill="url(#channelGrad)" opacity="0.9" />
                  {/* Depletion zone around pinch-off point */}
                  <ellipse cx="495" cy="118" rx="26" ry="16" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 3" />
                  <text x="495" y="103" fill="#f87171" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                    Pinch-off
                  </text>
                  <text x="330" y="125" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">
                    Zwężony kanał
                  </text>

                  {/* High field drift arrow */}
                  <polygon points="518,118 506,114 506,122" fill="#ef4444" />
                  <line x1="472" y1="118" x2="512" y2="118" stroke="#ef4444" strokeWidth="2" />
                  <text x="380" y="160" fill="#f59e0b" fontSize="12.5" fontWeight="bold" textAnchor="middle">
                    Pole zaporowe wciąga elektrony przez warstwę zaporową ➔ Prąd nasycony ID = const
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Description banner */}
          <div className="mt-3 p-3.5 rounded-xl bg-ink2/80 border border-line/60">
            <h5 className="font-mono text-[13px] font-bold text-amber">
              {structureInfo[structureState].title}
            </h5>
            <p className="text-[13px] text-txt/90 mt-1 leading-relaxed">
              {structureInfo[structureState].desc}
            </p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: RODZINA CHARAKTERYSTYK WYJŚCIOWYCH (RYSUNEK 7.8)                   */}
      {/* ========================================================================= */}
      {activeTab === 'characteristics' && (
        <div>
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3 p-2.5 rounded-xl bg-ink2/60 border border-line/50">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-muted text-[12px]">Krzywa UGS:</span>
              <div className="flex gap-1.5 flex-wrap">
                {ugsValues.map((u, idx) => (
                  <button
                    key={u.label}
                    type="button"
                    onClick={() => setSelectedUgsIndex(idx)}
                    className={`font-mono text-[11px] px-2.5 py-1 rounded-md border transition-all cursor-pointer ${
                      selectedUgsIndex === idx
                        ? 'bg-amber/20 border-amber text-amber font-bold'
                        : 'bg-ink border-line/60 text-muted hover:text-txt'
                    }`}
                  >
                    {u.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-muted text-[12px]">Napięcie UDS:</span>
              <input
                type="range"
                min="0"
                max="8"
                step="0.1"
                value={sliderUds}
                onChange={e => setSliderUds(parseFloat(e.target.value))}
                className="w-28 accent-amber cursor-pointer"
              />
              <span className="font-mono text-amber text-[12px] w-12 font-bold">
                {sliderUds.toFixed(1)} V
              </span>
            </div>
          </div>

          {/* SVG Characteristic Chart */}
          <div className="relative w-full overflow-hidden rounded-xl border border-line/70 bg-[#0c1220] p-3 sm:p-5 shadow-inner">
            <svg
              viewBox="0 0 760 380"
              className="w-full h-auto select-none font-sans"
              role="img"
              aria-label="Charakterystyka wyjściowa tranzystora MOSFET"
            >
              {/* Scales */}
              {/* X: 0..8 V -> 110..690 px (dx = 580 / 8 = 72.5 px/V) */}
              {/* Y: 0..14 mA -> 310..60 px (dy = 250 / 14 = 17.85 px/mA) */}
              {/* Origin: (110, 310) */}

              {/* Shaded Areas */}
              {/* Boundary Parabola points: for V = 0..4, UDS = V, ID = K * V^2 = 0.8 * V^2 */}
              {/* Path of saturation boundary */}
              <path
                d="M 110 310 Q 255 270 400 100"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeDasharray="5 4"
              />
              <text x="350" y="85" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="end">
                UDS = UGS - UT (Granica nasycenia)
              </text>

              {/* Area Labels */}
              <text x="210" y="240" fill="#94a3b8" fontSize="13" fontWeight="bold" textAnchor="middle" opacity="0.6">
                Obszar omowy (liniowy)
              </text>
              <text x="520" y="240" fill="#94a3b8" fontSize="13" fontWeight="bold" textAnchor="middle" opacity="0.6">
                Obszar nasycenia (prąd stały)
              </text>

              {/* Axes */}
              <line x1="110" y1="310" x2="710" y2="310" stroke="#94a3b8" strokeWidth="2" />
              <polygon points="718,310 706,305 706,315" fill="#94a3b8" />
              <text x="715" y="330" fill="#94a3b8" fontSize="13" fontWeight="bold">
                UDS [V]
              </text>

              <line x1="110" y1="310" x2="110" y2="40" stroke="#94a3b8" strokeWidth="2" />
              <polygon points="110,32 105,44 115,44" fill="#94a3b8" />
              <text x="110" y="26" fill="#94a3b8" fontSize="13" fontWeight="bold" textAnchor="middle">
                ID [mA]
              </text>

              {/* Axis Ticks */}
              {[0, 2, 4, 6, 8].map(v => {
                const x = 110 + (v / 8) * 580;
                return (
                  <g key={v}>
                    <line x1={x} y1="310" x2={x} y2="316" stroke="#94a3b8" strokeWidth="1.5" />
                    <text x={x} y="330" fill="#64748b" fontSize="11" textAnchor="middle" className="font-mono">
                      {v}
                    </text>
                  </g>
                );
              })}

              {/* Curves for UGS1 to UGS4 */}
              {[
                { label: 'UGS1 = 2,0 V', ugs: 2.0, color: '#f43f5e' },
                { label: 'UGS2 = 3,0 V', ugs: 3.0, color: '#0ea5e9' },
                { label: 'UGS3 = 4,0 V', ugs: 4.0, color: '#10b981' },
                { label: 'UGS4 = 5,0 V', ugs: 5.0, color: '#f59e0b' },
              ].map((c, idx) => {
                const ut = 1.0;
                const usat = c.ugs - ut;
                const idSat = K * Math.pow(usat, 2);

                const xSat = 110 + (usat / 8) * 580;
                const ySat = 310 - (idSat / 14) * 250;
                const xEnd = 110 + 580;

                const isSelected = selectedUgsIndex === idx + 1;

                // Path: quadratic rise to saturation, then flat horizontal line
                const d = `M 110 310 Q ${110 + (xSat - 110) * 0.55} ${ySat + 15} ${xSat} ${ySat} L ${xEnd} ${ySat}`;

                return (
                  <g key={c.label}>
                    <path
                      d={d}
                      fill="none"
                      stroke={c.color}
                      strokeWidth={isSelected ? 3.5 : 1.8}
                      opacity={isSelected ? 1 : 0.45}
                    />
                    <text
                      x={xEnd + 8}
                      y={ySat + 4}
                      fill={c.color}
                      fontSize="11.5"
                      fontWeight="bold"
                      opacity={isSelected ? 1 : 0.6}
                    >
                      {c.label}
                    </text>
                  </g>
                );
              })}

              {/* UGS = 0 curve on axis */}
              <line x1="110" y1="310" x2="690" y2="310" stroke="#64748b" strokeWidth={selectedUgsIndex === 0 ? 3 : 1.5} />
              <text x="698" y="314" fill="#64748b" fontSize="11" fontWeight="bold">
                UGS = 0 V
              </text>

              {/* Operating Point Indicator (animated circle) */}
              {!isCutoff && (
                <g>
                  {(() => {
                    const cx = 110 + (sliderUds / 8) * 580;
                    const cy = 310 - (currentId / 14) * 250;
                    return (
                      <>
                        <line x1={cx} y1="310" x2={cx} y2={cy} stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 3" />
                        <line x1="110" y1={cy} x2={cx} y2={cy} stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 3" />
                        <circle cx={cx} cy={cy} r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
                        <rect x={cx + 10} y={cy - 28} width="110" height="24" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.2" />
                        <text x={cx + 65} y={cy - 12} fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">
                          ID = {currentId.toFixed(2)} mA
                        </text>
                      </>
                    );
                  })()}
                </g>
              )}
            </svg>
          </div>

          {/* Operating Point Diagnostic Badge */}
          <div className="mt-3 p-3.5 rounded-xl bg-ink2/80 border border-line/60 flex flex-wrap items-center justify-between gap-3 text-[13px]">
            <div>
              <span className="font-mono text-muted">Aktualny punkt pracy: </span>
              <span className="font-mono text-txt font-bold">
                UGS = {currentUgs.ugs.toFixed(1)} V, UDS = {sliderUds.toFixed(1)} V ➔ ID = {currentId.toFixed(2)} mA
              </span>
            </div>
            <div>
              <span className="font-mono text-muted">Obszar pracy tranzystora: </span>
              <span className={`font-mono font-bold px-2.5 py-0.5 rounded-md ${
                isCutoff
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                  : isSaturated
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                  : 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
              }`}>
                {isCutoff ? 'Zatkanie (UGS < UT)' : isSaturated ? 'Nasycenie (Pinch-off, prąd stały)' : 'Liniowy (Omowy)'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

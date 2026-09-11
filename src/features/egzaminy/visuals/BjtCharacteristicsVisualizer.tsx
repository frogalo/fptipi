import React, { useState } from 'react';

export default function BjtCharacteristicsVisualizer() {
  const [activeTab, setActiveTab] = useState<'iv' | 'potential'>('iv');
  const [potentialState, setPotentialState] = useState<'a' | 'b' | 'c'>('c');
  const [selectedIbIndex, setSelectedIbIndex] = useState<number>(3); // 0..4
  const [sliderUce, setSliderUce] = useState<number>(4.5); // V

  // Curve parameters for Rysunek 7.3b
  const ibLabels = ['IB = 0 mA', '1 (IB1)', '2 (IB2)', '3 (IB3)', '4 (IB4)'];
  const ibCurrents = [0, 15, 30, 45, 60]; // uA

  return (
    <div className="my-6 rounded-2xl border border-line bg-linear-to-b from-panel via-ink2/95 to-panel2/70 p-4 sm:p-6 shadow-xl">
      {/* Header with Tab Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-line/60">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber shadow-[0_0_8px_#f4a52a]" />
            <h4 className="font-mono text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-amber">
              Tranzystor Bipolarny (BJT): Rysunki 7.2 i 7.3 z podręcznika
            </h4>
          </div>
          <p className="text-[13px] text-muted mt-0.5">
            Wierne odwzorowanie rysunków egzaminacyjnych: charakterystyka I-V oraz bariera potencjału („wanna”)
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-ink/80 border border-line">
          <button
            type="button"
            onClick={() => setActiveTab('iv')}
            className={`font-mono text-[12px] px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'iv'
                ? 'bg-amber text-ink font-bold shadow-sm'
                : 'text-muted hover:text-txt'
            }`}
          >
            Rys. 7.3: Charakterystyka I-V
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('potential')}
            className={`font-mono text-[12px] px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'potential'
                ? 'bg-amber text-ink font-bold shadow-sm'
                : 'text-muted hover:text-txt'
            }`}
          >
            Rys. 7.2: Wanna potencjału
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: CHARAKTERYSTYKA PRĄDOWO-NAPIĘCIOWA TRANZYSTORA (RYSUNEK 7.3)       */}
      {/* ========================================================================= */}
      {activeTab === 'iv' && (
        <div>
          {/* Top Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3 text-[12.5px] p-2.5 rounded-xl bg-ink2/60 border border-line/50">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-muted text-[12px]">Wybierz krzywą IB:</span>
              <div className="flex gap-1.5">
                {ibLabels.map((lbl, idx) => (
                  <button
                    key={lbl}
                    type="button"
                    onClick={() => setSelectedIbIndex(idx)}
                    className={`font-mono text-[11px] px-2.5 py-1 rounded-md border transition-all cursor-pointer ${
                      selectedIbIndex === idx
                        ? 'bg-amber/20 border-amber text-amber font-bold'
                        : 'bg-ink border-line/60 text-muted hover:text-txt'
                    }`}
                  >
                    {lbl}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-muted text-[12px]">Napięcie UCE:</span>
              <input
                type="range"
                min="0"
                max="8"
                step="0.1"
                value={sliderUce}
                onChange={e => setSliderUce(parseFloat(e.target.value))}
                className="w-28 accent-amber cursor-pointer"
              />
              <span className="font-mono text-amber text-[12px] w-12 font-bold">
                {sliderUce.toFixed(1)} V
              </span>
            </div>
          </div>

          {/* SVG Showing Both a) and b) Exactly Matching Rysunek 7.3 */}
          <div className="relative w-full overflow-hidden rounded-xl border border-line/70 bg-[#0d131f] p-3 sm:p-4 shadow-inner">
            <svg
              viewBox="0 0 740 330"
              className="w-full h-auto select-none font-sans"
              role="img"
              aria-label="Charakterystyka prądowo-napięciowa tranzystora bipolarnego"
            >
              <defs>
                {/* Red curve glow */}
                <filter id="bjtCurveGlow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#ef4444" floodOpacity="0.5" />
                </filter>
              </defs>

              {/* ------------------------------------------------------------- */}
              {/* SUBFIGURE a): IC = f(UEB) (Charakterystyka wejściowa/sterująca) */}
              {/* ------------------------------------------------------------- */}
              <g id="subfigA" transform="translate(30, 20)">
                {/* Axes (niebieskie ze strzałkami jak na Rys. 7.3a) */}
                {/* Y-axis: IC */}
                <line x1="40" y1="240" x2="40" y2="20" stroke="#2563eb" strokeWidth="2.5" />
                <polygon points="40,12 36,22 44,22" fill="#2563eb" />
                <text x="52" y="32" fill="#2563eb" fontSize="14" fontStyle="italic" fontWeight="bold">
                  IC
                </text>

                {/* X-axis: UEB */}
                <line x1="40" y1="240" x2="260" y2="240" stroke="#2563eb" strokeWidth="2.5" />
                <polygon points="268,240 258,236 258,244" fill="#2563eb" />
                <text x="245" y="262" fill="#2563eb" fontSize="13" fontStyle="italic" fontWeight="bold">
                  UEB
                </text>

                {/* Subfigure title label "a)" */}
                <text x="20" y="266" fill="#94a3b8" fontSize="14" fontStyle="italic">
                  a)
                </text>

                {/* Grid line at origin */}
                <circle cx="40" cy="240" r="2.5" fill="#2563eb" />

                {/* Exponential Diode Curve (Czerwona jak w oryginale) */}
                <path
                  d="M 40 240 Q 130 238, 160 215 T 205 28"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  filter="url(#bjtCurveGlow)"
                />

                {/* Operating point indicator on input curve */}
                {selectedIbIndex > 0 && (
                  <g>
                    {/* Interpolate a point */}
                    {(() => {
                      const t = selectedIbIndex / 4;
                      const cx = 130 + t * 65;
                      const cy = 235 - Math.pow(t, 2.2) * 190;
                      return (
                        <>
                          <circle cx={cx} cy={cy} r="5" fill="#ffffff" stroke="#ef4444" strokeWidth="2.5" />
                          <text x={cx - 10} y={cy - 10} fill="#f87171" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
                            Qwe ({ibLabels[selectedIbIndex]})
                          </text>
                        </>
                      );
                    })()}
                  </g>
                )}

                {/* Note underneath a) */}
                <text x="140" y="285" fill="#94a3b8" fontSize="11" textAnchor="middle">
                  Wykres diodowy złącza E-B (Uprzewodzenia ≈ 0,7 V)
                </text>
              </g>

              {/* ------------------------------------------------------------- */}
              {/* SUBFIGURE b): IC = f(UCE) (Rodzina charakterystyk wyjściowych) */}
              {/* ------------------------------------------------------------- */}
              <g id="subfigB" transform="translate(320, 20)">
                {/* Axes (niebieskie ze strzałkami jak na Rys. 7.3b) */}
                {/* Y-axis: IC */}
                <line x1="40" y1="240" x2="40" y2="20" stroke="#2563eb" strokeWidth="2.5" />
                <polygon points="40,12 36,22 44,22" fill="#2563eb" />
                <text x="52" y="32" fill="#2563eb" fontSize="14" fontStyle="italic" fontWeight="bold">
                  IC
                </text>

                {/* X-axis: UCE */}
                <line x1="40" y1="240" x2="350" y2="240" stroke="#2563eb" strokeWidth="2.5" />
                <polygon points="358,240 348,236 348,244" fill="#2563eb" />
                <text x="330" y="262" fill="#2563eb" fontSize="13" fontStyle="italic" fontWeight="bold">
                  UCE
                </text>

                {/* Subfigure title label "b)" */}
                <text x="15" y="266" fill="#94a3b8" fontSize="14" fontStyle="italic">
                  b)
                </text>

                {/* Saturation knee region subtle indicator */}
                <rect x="40" y="20" width="45" height="220" fill="rgba(244, 63, 94, 0.06)" />
                <text x="62" y="35" fill="#fb7185" fontSize="9.5" textAnchor="middle" fontWeight="bold">
                  Nasycenie
                </text>

                {/* Active linear region label */}
                <text x="210" y="35" fill="#34d399" fontSize="10" textAnchor="middle" fontWeight="bold">
                  Obszar aktywny (IC ≈ const)
                </text>

                {/* Family of Red Output Curves (5 curves as in textbook: IB=0, 1, 2, 3, 4) */}
                {/* Curve 0: IB = 0 mA */}
                <path
                  d="M 40 240 Q 55 215, 80 215 L 300 215"
                  fill="none"
                  stroke={selectedIbIndex === 0 ? '#f4a52a' : '#ef4444'}
                  strokeWidth={selectedIbIndex === 0 ? '4' : '2.5'}
                  strokeLinecap="round"
                />
                <text x="306" y="219" fill={selectedIbIndex === 0 ? '#f4a52a' : '#ef4444'} fontSize="11" fontWeight="bold">
                  IB = 0 mA
                </text>

                {/* Curve 1: 1 */}
                <path
                  d="M 40 240 Q 55 170, 80 170 L 300 170"
                  fill="none"
                  stroke={selectedIbIndex === 1 ? '#f4a52a' : '#ef4444'}
                  strokeWidth={selectedIbIndex === 1 ? '4' : '2.5'}
                  strokeLinecap="round"
                />
                <text x="306" y="174" fill={selectedIbIndex === 1 ? '#f4a52a' : '#ef4444'} fontSize="11" fontWeight="bold">
                  1
                </text>

                {/* Curve 2: 2 */}
                <path
                  d="M 40 240 Q 55 125, 80 125 L 300 125"
                  fill="none"
                  stroke={selectedIbIndex === 2 ? '#f4a52a' : '#ef4444'}
                  strokeWidth={selectedIbIndex === 2 ? '4' : '2.5'}
                  strokeLinecap="round"
                />
                <text x="306" y="129" fill={selectedIbIndex === 2 ? '#f4a52a' : '#ef4444'} fontSize="11" fontWeight="bold">
                  2
                </text>

                {/* Curve 3: 3 */}
                <path
                  d="M 40 240 Q 55 80, 80 80 L 300 80"
                  fill="none"
                  stroke={selectedIbIndex === 3 ? '#f4a52a' : '#ef4444'}
                  strokeWidth={selectedIbIndex === 3 ? '4' : '2.5'}
                  strokeLinecap="round"
                />
                <text x="306" y="84" fill={selectedIbIndex === 3 ? '#f4a52a' : '#ef4444'} fontSize="11" fontWeight="bold">
                  3
                </text>

                {/* Curve 4: 4 */}
                <path
                  d="M 40 240 Q 55 45, 80 45 L 300 45"
                  fill="none"
                  stroke={selectedIbIndex === 4 ? '#f4a52a' : '#ef4444'}
                  strokeWidth={selectedIbIndex === 4 ? '4' : '2.5'}
                  strokeLinecap="round"
                />
                <text x="306" y="49" fill={selectedIbIndex === 4 ? '#f4a52a' : '#ef4444'} fontSize="11" fontWeight="bold">
                  4
                </text>

                {/* Interactive Operating Point Q(UCE, IC) */}
                {(() => {
                  const yLevels = [215, 170, 125, 80, 45];
                  const targetY = yLevels[selectedIbIndex];
                  // If Uce < 0.6 V, inside knee
                  const qx = 40 + (sliderUce / 8) * 260;
                  let qy = targetY;
                  if (sliderUce < 0.8) {
                    const frac = sliderUce / 0.8;
                    qy = 240 - frac * (240 - targetY);
                  }
                  return (
                    <g>
                      {/* Vertical line to Uce */}
                      <line x1={qx} y1={qy} x2={qx} y2="240" stroke="#f4a52a" strokeDasharray="3 3" strokeWidth="1.5" />
                      {/* Horizontal line to Ic */}
                      <line x1="40" y1={qy} x2={qx} y2={qy} stroke="#f4a52a" strokeDasharray="3 3" strokeWidth="1.5" />
                      {/* Point dot */}
                      <circle cx={qx} cy={qy} r="6" fill="#f4a52a" stroke="#ffffff" strokeWidth="2" />
                      <text x={qx + 8} y={qy - 8} fill="#f4a52a" fontSize="11" fontFamily="monospace" fontWeight="bold">
                        Q (UCE={sliderUce.toFixed(1)}V)
                      </text>
                    </g>
                  );
                })()}

                {/* Note underneath b) */}
                <text x="190" y="285" fill="#94a3b8" fontSize="11" textAnchor="middle">
                  Krzywe wyjściowe: strome nasycenie przy małym UCE i płaskie plateau aktywne
                </text>
              </g>
            </svg>
          </div>

          {/* Description of Rysunek 7.3 */}
          <div className="mt-4 p-4 rounded-xl border border-line/60 bg-ink2/70 text-[13px] text-muted leading-relaxed">
            <h5 className="font-mono text-txt font-bold text-[13.5px] mb-1">
              Interpretacja fizyczna wykresu Rysunek 7.3 (egzamin):
            </h5>
            <ul className="list-disc list-inside space-y-1.5 mt-2">
              <li>
                <b className="text-txt">Wykres a)</b> przedstawia złącze emiter–baza spolaryzowane w kierunku przewodzenia jako klasyczną charakterystykę diodową. Prąd emitera i kolektora rośnie wykładniczo dopiero po przekroczeniu napięcia progowego <b>U_EB ≈ 0,7 V</b>.
              </li>
              <li>
                <b className="text-txt">Wykres b)</b> przedstawia rodzinę charakterystyk wyjściowych <b>IC = f(UCE)</b> dla stałych prądów bazy (IB = 0, 1, 2, 3, 4).
              </li>
              <li>
                <b className="text-amber">Obszar nasycenia (początkowy kolanko)</b>: przy niskim napięciu UCE złącze kolektorowe nie jest jeszcze dostatecznie spolaryzowane zaporowo, więc prąd IC gwałtownie zależy od napięcia kolektora.
              </li>
              <li>
                <b className="text-emerald-400">Obszar aktywny (płaski przebieg)</b>: po osiągnięciu odpowiedniego napięcia UCE prąd kolektora staje się niemal całkowicie niezależny od UCE i zależy wyłącznie od prądu wstrzykiwanego przez bazę (<b>IC = β · IB = const</b>).
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: ROZKŁAD POTENCJAŁU W ZŁĄCZU P-N-P – WANNA (RYSUNEK 7.2)            */}
      {/* ========================================================================= */}
      {activeTab === 'potential' && (
        <div>
          {/* Controls: Mode A, B, C */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3 text-[12.5px] p-2.5 rounded-xl bg-ink2/60 border border-line/50">
            <span className="font-mono text-muted text-[12px]">Stan polaryzacji złącza p-n-p:</span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setPotentialState('a')}
                className={`font-mono text-[11.5px] px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  potentialState === 'a'
                    ? 'bg-amber/20 border-amber text-amber font-bold'
                    : 'bg-ink border-line/60 text-muted hover:text-txt'
                }`}
              >
                a) Bez polaryzacji (równowaga)
              </button>
              <button
                type="button"
                onClick={() => setPotentialState('b')}
                className={`font-mono text-[11.5px] px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  potentialState === 'b'
                    ? 'bg-amber/20 border-amber text-amber font-bold'
                    : 'bg-ink border-line/60 text-muted hover:text-txt'
                }`}
              >
                b) Po przyłożeniu UCE
              </button>
              <button
                type="button"
                onClick={() => setPotentialState('c')}
                className={`font-mono text-[11.5px] px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  potentialState === 'c'
                    ? 'bg-amber/20 border-amber text-amber font-bold'
                    : 'bg-ink border-line/60 text-muted hover:text-txt'
                }`}
              >
                c) Polaryzacja aktywna (UCE + UBE)
              </button>
            </div>
          </div>

          {/* SVG Potential Well matching Rysunek 7.2 */}
          <div className="relative w-full overflow-hidden rounded-xl border border-line/70 bg-[#0d131f] p-3 sm:p-4 shadow-inner">
            <svg
              viewBox="0 0 740 360"
              className="w-full h-auto select-none font-sans"
              role="img"
              aria-label="Charakterystyka potencjału w złączu p-n-p"
            >
              {/* Top Structure Bar */}
              {/* Kolektor (p) */}
              <rect x="180" y="55" width="130" height="38" fill="#84cc16" stroke="#65a30d" strokeWidth="1.5" />
              <text x="245" y="45" fill="#cbd5e1" fontSize="12" fontStyle="italic" textAnchor="middle">
                kolektor
              </text>
              <text x="245" y="78" fill="#1e293b" fontSize="14" fontStyle="italic" fontWeight="bold" textAnchor="middle">
                p
              </text>

              {/* Baza (n) */}
              <rect x="310" y="55" width="80" height="38" fill="#fdba74" stroke="#fb923c" strokeWidth="1.5" />
              <text x="350" y="45" fill="#cbd5e1" fontSize="12" fontStyle="italic" textAnchor="middle">
                baza
              </text>
              <text x="350" y="78" fill="#7c2d12" fontSize="14" fontStyle="italic" fontWeight="bold" textAnchor="middle">
                n
              </text>

              {/* Emiter (p) */}
              <rect x="390" y="55" width="130" height="38" fill="#84cc16" stroke="#65a30d" strokeWidth="1.5" />
              <text x="455" y="45" fill="#cbd5e1" fontSize="12" fontStyle="italic" textAnchor="middle">
                emiter
              </text>
              <text x="455" y="78" fill="#1e293b" fontSize="14" fontStyle="italic" fontWeight="bold" textAnchor="middle">
                p
              </text>

              {/* External Circuits matching b) and c) */}
              {potentialState !== 'a' && (
                <g id="circuitUCE">
                  {/* Wire from collector to top battery */}
                  <line x1="180" y1="74" x2="130" y2="74" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="130" y1="74" x2="130" y2="15" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="130" y1="15" x2="330" y2="15" stroke="#94a3b8" strokeWidth="1.5" />

                  {/* Battery UCE */}
                  <line x1="330" y1="8" x2="330" y2="22" stroke="#ffffff" strokeWidth="2.5" />
                  <line x1="338" y1="3" x2="338" y2="27" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="334" y="3" fill="#cbd5e1" fontSize="11" fontStyle="italic" textAnchor="middle">
                    UCE
                  </text>

                  {/* Wire from battery to emitter */}
                  <line x1="338" y1="15" x2="570" y2="15" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="570" y1="15" x2="570" y2="74" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="570" y1="74" x2="520" y2="74" stroke="#94a3b8" strokeWidth="1.5" />

                  {/* Current IC arrow */}
                  <line x1="200" y1="15" x2="250" y2="15" stroke="#38bdf8" strokeWidth="2" />
                  <polygon points="255,15 245,11 245,19" fill="#38bdf8" />
                  <text x="225" y="30" fill="#38bdf8" fontSize="11" fontStyle="italic" fontWeight="bold">
                    IC
                  </text>
                </g>
              )}

              {potentialState === 'c' && (
                <g id="circuitUBE">
                  {/* Wire from base to UBE battery */}
                  <line x1="350" y1="55" x2="350" y2="38" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="350" y1="38" x2="430" y2="38" stroke="#94a3b8" strokeWidth="1.5" />

                  {/* Battery UBE */}
                  <line x1="430" y1="32" x2="430" y2="44" stroke="#ffffff" strokeWidth="2.5" />
                  <line x1="436" y1="28" x2="436" y2="48" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="444" y="32" fill="#cbd5e1" fontSize="11" fontStyle="italic">
                    UBE
                  </text>

                  {/* Wire to emitter connection */}
                  <line x1="436" y1="38" x2="540" y2="38" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="540" y1="38" x2="540" y2="74" stroke="#94a3b8" strokeWidth="1.5" />

                  {/* Current IB arrow */}
                  <line x1="370" y1="38" x2="400" y2="38" stroke="#f59e0b" strokeWidth="2" />
                  <polygon points="405,38 395,34 395,42" fill="#f59e0b" />
                  <text x="382" y="52" fill="#f59e0b" fontSize="11" fontStyle="italic" fontWeight="bold">
                    IB
                  </text>
                </g>
              )}

              {/* Vertical Potential Axis */}
              <line x1="120" y1="320" x2="120" y2="110" stroke="#2563eb" strokeWidth="2.5" />
              <polygon points="120,100 115,112 125,112" fill="#2563eb" />
              <text x="130" y="125" fill="#3b82f6" fontSize="13" fontStyle="italic" fontWeight="bold">
                potencjał
              </text>

              {/* Potential Profile Curves */}
              {potentialState === 'a' && (
                <g id="profileA">
                  {/* Symmetrical barrier in base */}
                  <path
                    d="M 130 300 L 250 300 Q 300 300 320 200 Q 350 170 380 200 Q 400 300 450 300 L 570 300"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <text x="200" y="270" fill="#f87171" fontSize="14" fontStyle="italic" fontWeight="bold">
                    Φ
                  </text>
                  <text x="500" y="270" fill="#f87171" fontSize="14" fontStyle="italic" fontWeight="bold">
                    Φ
                  </text>
                  <text x="350" y="150" fill="#fb7185" fontSize="12" fontWeight="bold" textAnchor="middle">
                    Wysoka bariera dyfuzyjna (brak przepływu)
                  </text>
                  <text x="40" y="340" fill="#94a3b8" fontSize="14" fontStyle="italic">
                    a) Bez polaryzacji (równowaga termodynamiczna)
                  </text>
                </g>
              )}

              {potentialState === 'b' && (
                <g id="profileB">
                  {/* Collector raised by UCE */}
                  <path
                    d="M 130 300 L 250 300 Q 295 300 310 180 Q 345 155 375 180 Q 390 250 430 250 L 570 250"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <text x="190" y="270" fill="#f87171" fontSize="14" fontStyle="italic" fontWeight="bold">
                    Φ + UCE
                  </text>
                  <text x="500" y="235" fill="#f87171" fontSize="14" fontStyle="italic" fontWeight="bold">
                    Φ
                  </text>
                  <text x="350" y="135" fill="#fb7185" fontSize="12" fontWeight="bold" textAnchor="middle">
                    Bariera E-B nadal blokuje prąd
                  </text>
                  <text x="40" y="340" fill="#94a3b8" fontSize="14" fontStyle="italic">
                    b) Po przyłożeniu napięcia UCE (brak wysterowania bazy)
                  </text>
                </g>
              )}

              {potentialState === 'c' && (
                <g id="profileC">
                  {/* Collector at Phi + UCE, Emitter lowered by UBE */}
                  <path
                    d="M 130 300 L 250 300 Q 295 300 310 180 Q 345 155 365 175 Q 380 220 420 220 L 570 220"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <text x="190" y="270" fill="#f87171" fontSize="14" fontStyle="italic" fontWeight="bold">
                    Φ + UCE
                  </text>
                  <text x="490" y="200" fill="#f87171" fontSize="14" fontStyle="italic" fontWeight="bold">
                    Φ - UBE
                  </text>

                  {/* Hole Flow Arrow over lowered barrier */}
                  <path d="M 440 205 Q 370 170 300 240" fill="none" stroke="#a3e635" strokeWidth="2.5" strokeDasharray="4 3" />
                  <polygon points="295,245 302,235 308,242" fill="#a3e635" />
                  <text x="345" y="195" fill="#bef264" fontSize="11" fontWeight="bold" textAnchor="middle">
                    Wstrzykiwanie dziur (IC)
                  </text>

                  <text x="40" y="340" fill="#94a3b8" fontSize="14" fontStyle="italic">
                    c) Złącze emiter-baza spolaryzowane w kierunku przewodzenia napięciem UBE
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Description of Rysunek 7.2 */}
          <div className="mt-4 p-4 rounded-xl border border-line/60 bg-ink2/70 text-[13px] text-muted leading-relaxed">
            <h5 className="font-mono text-txt font-bold text-[13.5px] mb-1">
              Opis trzech stanów z Rysunku 7.2 (tranzystor p–n–p):
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              <div className={`p-3 rounded-lg border transition-all ${potentialState === 'a' ? 'bg-amber/10 border-amber' : 'bg-ink border-line/40'}`}>
                <div className="font-bold text-txt mb-1">a) Stan równowagi (bez polaryzacji)</div>
                <div className="text-[12px]">
                  Bariera dyfuzyjna w bazie n ma pełną wysokość z obu stron. Dziury z emitera i kolektora nie mają energii by ją przekroczyć; prąd nie płynie.
                </div>
              </div>

              <div className={`p-3 rounded-lg border transition-all ${potentialState === 'b' ? 'bg-amber/10 border-amber' : 'bg-ink border-line/40'}`}>
                <div className="font-bold text-txt mb-1">b) Przyłożenie UCE</div>
                <div className="text-[12px]">
                  Złącze baza-kolektor polaryzuje się silnie zaporowo (potencjał kolektora wzrasta do Φ + UCE). Złącze emiter-baza nadal nie przewodzi, więc prąd nadal nie płynie.
                </div>
              </div>

              <div className={`p-3 rounded-lg border transition-all ${potentialState === 'c' ? 'bg-amber/10 border-amber' : 'bg-ink border-line/40'}`}>
                <div className="font-bold text-txt mb-1">c) Polaryzacja przewodzenia UBE</div>
                <div className="text-[12px]">
                  Napięcie UBE obniża barierę emiter–baza do poziomu (Φ - UBE). Dziury z emitera łatwo dyfundują do cienkiej bazy i zostają natychmiast przechwycone przez pole kolektora, tworząc prąd kolektora IC.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';

const MosfetSimulator = () => {
  const [ugs, setUgs] = useState(0);
  const [uds, setUds] = useState(0);

  const UT = 1.0;
  const K = 1.0;

  const vOv = ugs - UT;
  const isChannelFormed = vOv > 0;

  let id = 0;
  let mode = "ODCIĘCIE";

  if (isChannelFormed) {
    if (uds < vOv) {
      mode = "OBSZAR LINIOWY";
      id = K * (2 * vOv * uds - uds * uds);
    } else {
      mode = "NASYCENIE";
      id = K * (vOv * vOv);
    }
  }

  id = Math.max(0, id);

  const channelLeftDepth = isChannelFormed ? vOv * 5 : 0;
  const channelRightDepth = isChannelFormed ? Math.max(0, (vOv - uds)) * 5 : 0;

  const maxId = K * Math.pow(5 - UT, 2);
  const ledOpacity = isChannelFormed && uds > 0 ? Math.min(1, 0.2 + (id / maxId) * 0.8) : 0;

  const numElectrons = isChannelFormed ? Math.floor(vOv * 4) : 0;
  const animDuration = Math.max(0.4, 2.5 - uds * 0.4);

  return (
    <>
      <style>{`
        @keyframes mosfetElectronFlow {
          0%   { transform: translate(320px, 152px); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translate(480px, 152px); opacity: 0; }
        }
        .mosfet-electron {
          fill: var(--color-red);
          animation: mosfetElectronFlow linear infinite;
        }
      `}</style>
      <div className="diagram-title" style={{ marginTop: '3rem' }}>5. Tranzystor MOSFET (Kanał N) – Symulator</div>
      <p className="viz-intro mb-[11px]" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
        Przesuwaj suwak <strong>U<sub>GS</sub></strong> aby utworzyć kanał (minimum {UT}V). Następnie zwiększaj <strong>U<sub>DS</sub></strong>, aby wywołać przepływ prądu w obwodzie i zaświecić diodę LED.
      </p>

      {/* Control panel using Tailwind CSS styled classes to match NPN style */}
      <div className="border border-line bg-panel rounded-[14px] px-4 py-3 mb-3">
        <label htmlFor="ugs-slider" className="block font-mono text-[13px] text-amber mb-2">
          Napięcie U<sub>GS</sub>: <span className="font-semibold text-white">{ugs.toFixed(1)}</span> V
        </label>
        <input 
          type="range" 
          id="ugs-slider" 
          min="0" 
          max="5" 
          step="0.1" 
          value={ugs} 
          onChange={(e) => setUgs(Number(e.target.value))} 
          className="w-full accent-amber"
        />
        <label htmlFor="uds-slider" className="block font-mono text-[13px] text-amber mb-2 mt-4">
          Napięcie U<sub>DS</sub>: <span className="font-semibold text-white">{uds.toFixed(1)}</span> V
        </label>
        <input 
          type="range" 
          id="uds-slider" 
          min="0" 
          max="5" 
          step="0.1" 
          value={uds} 
          onChange={(e) => setUds(Number(e.target.value))} 
          className="w-full accent-amber"
        />
      </div>

      {/* SVG Container using Tailwind CSS styled classes */}
      <div className="w-full overflow-visible border border-line bg-panel rounded-[14px] p-2">
        <svg viewBox="0 0 800 350" width="100%" height="100%">
          {/* Gate wires */}
          <polyline points="320,125 150,125 150,220" fill="none" stroke="var(--color-muted)" strokeWidth="3" />
          <polyline points="150,260 150,300 280,300 280,150" fill="none" stroke="var(--color-muted)" strokeWidth="3" />
          {/* Drain and Source wires */}
          <polyline points="520,150 520,300 280,300" fill="none" stroke="var(--color-muted)" strokeWidth="3" />
          <polyline points="520,150 650,150 650,170" fill="none" stroke="var(--color-muted)" strokeWidth="3" />
          <polyline points="650,210 650,300 520,300" fill="none" stroke="var(--color-muted)" strokeWidth="3" />

          {/* Battery UGS */}
          <g transform="translate(130, 220)">
            <rect x="0" y="0" width="40" height="40" fill="var(--color-ink2)" stroke="var(--color-line)" strokeWidth="2" rx="4" />
            <line x1="10" y1="15" x2="30" y2="15" stroke="var(--color-green)" strokeWidth="3" />
            <line x1="15" y1="25" x2="25" y2="25" stroke="var(--color-red)" strokeWidth="3" />
            <text x="45" y="25" fill="var(--color-muted)" fontSize="11">Bat. UGS</text>
          </g>

          {/* Battery UDS */}
          <g transform="translate(630, 260)">
            <rect x="0" y="0" width="40" height="40" fill="var(--color-ink2)" stroke="var(--color-line)" strokeWidth="2" rx="4" />
            <line x1="10" y1="15" x2="30" y2="15" stroke="var(--color-red)" strokeWidth="3" />
            <line x1="15" y1="25" x2="25" y2="25" stroke="var(--color-green)" strokeWidth="3" />
            <text x="45" y="25" fill="var(--color-muted)" fontSize="11">Bat. UDS</text>
          </g>

          {/* LED with dynamic glow */}
          <defs>
            <filter id="ledBlur" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur in="SourceGraphic" stdDeviation={id > 0 ? 4 + ledOpacity * 10 : 0} />
            </filter>
            <radialGradient id="ledGrad">
              <stop offset="0%" stopColor={`rgba(250, 204, 21, ${ledOpacity})`} />
              <stop offset="50%" stopColor={`rgba(244, 165, 42, ${ledOpacity * 0.6})`} />
              <stop offset="100%" stopColor="rgba(244, 165, 42, 0)" />
            </radialGradient>
          </defs>
          <g transform="translate(650, 190)">
            {/* Outer halo */}
            {id > 0 && (
              <circle
                cx="0" cy="0"
                r={22 + ledOpacity * 28}
                fill="url(#ledGrad)"
                style={{ transition: 'all 0.25s ease' }}
              />
            )}
            {/* Bloom layer */}
            {id > 0 && (
              <circle
                cx="0" cy="0" r="20"
                fill={`rgba(250, 204, 21, ${ledOpacity * 0.7})`}
                filter="url(#ledBlur)"
                style={{ transition: 'all 0.2s ease' }}
              />
            )}
            {/* Light rays */}
            {id > 0 && [0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line
                key={angle}
                x1={Math.cos(angle * Math.PI / 180) * 20}
                y1={Math.sin(angle * Math.PI / 180) * 20}
                x2={Math.cos(angle * Math.PI / 180) * (24 + ledOpacity * 16)}
                y2={Math.sin(angle * Math.PI / 180) * (24 + ledOpacity * 16)}
                stroke={`rgba(250, 204, 21, ${ledOpacity * 0.5})`}
                strokeWidth={1 + ledOpacity}
                strokeLinecap="round"
                style={{ transition: 'all 0.2s ease' }}
              />
            ))}
            {/* LED body */}
            <circle cx="0" cy="0" r="18" fill="var(--color-ink2)" stroke="var(--color-line)" strokeWidth="2" />
            {/* LED lit surface */}
            {id > 0 && (
              <circle cx="0" cy="0" r="16"
                fill={`rgba(250, 204, 21, ${ledOpacity})`}
                style={{ transition: 'fill 0.2s ease' }}
              />
            )}
            {/* Diode symbol */}
            <polygon points="-8,6 8,6 0,-8" fill={id > 0 ? `rgba(120,80,0,${0.6 + ledOpacity * 0.4})` : 'var(--color-muted)'} />
            <line x1="-10" y1="-8" x2="10" y2="-8" stroke={id > 0 ? `rgba(120,80,0,${0.6 + ledOpacity * 0.4})` : 'var(--color-muted)'} strokeWidth="2" />
            <text x="25" y="5" fill="var(--color-muted)" fontSize="11">Odbiornik</text>
          </g>

          {/* Substrate P */}
          <rect x="250" y="150" width="300" height="130" fill="rgba(255,111,111,.14)" stroke="var(--color-red)" strokeWidth="2" rx="4" />
          <text x="375" y="260" fill="var(--color-red)" fontSize="14" fontWeight="bold" textAnchor="middle">Podłoże (typ P)</text>

          {/* Inversion channel */}
          {isChannelFormed && (
            <polygon
              points={`310,150 490,150 490,${150 + channelRightDepth} 310,${150 + channelLeftDepth}`}
              fill="rgba(244,165,42,.35)"
              style={{ transition: 'all 0.2s ease' }}
            />
          )}

          {/* Source region (N+) */}
          <rect x="250" y="150" width="60" height="50" fill="rgba(127,180,255,.18)" stroke="var(--color-blue)" strokeWidth="2" rx="3" />
          <text x="280" y="180" fill="var(--color-blue)" fontSize="12" fontFamily="var(--mono)" textAnchor="middle">S (N+)</text>

          {/* Drain region (N+) */}
          <rect x="490" y="150" width="60" height="50" fill="rgba(127,180,255,.18)" stroke="var(--color-blue)" strokeWidth="2" rx="3" />
          <text x="520" y="180" fill="var(--color-blue)" fontSize="12" fontFamily="var(--mono)" textAnchor="middle">D (N+)</text>

          {/* Oxide layer (SiO2) */}
          <rect x="310" y="140" width="180" height="10" fill="rgba(148,163,184,.25)" stroke="var(--color-line)" strokeWidth="1" />
          <text x="400" y="148" fill="var(--color-muted)" fontSize="10" textAnchor="middle">SiO2</text>

          {/* Gate metal */}
          <rect x="310" y="125" width="180" height="15" fill="var(--color-muted)" rx="2" />
          <text x="400" y="137" fill="var(--color-panel)" fontSize="13" fontWeight="bold" fontFamily="var(--mono)" textAnchor="middle">G</text>

          {/* Metal contacts to S and D */}
          <rect x="265" y="140" width="30" height="10" fill="var(--color-line)" rx="1" />
          <rect x="505" y="140" width="30" height="10" fill="var(--color-line)" rx="1" />

          {/* Electron animation */}
          {id > 0 && Array.from({ length: numElectrons }).map((_, i) => (
            <circle
              key={i}
              cx="0" cy="0" r="3"
              className="mosfet-electron"
              style={{
                animationDuration: `${animDuration}s`,
                animationDelay: `${(i * animDuration) / numElectrons}s`
              }}
            />
          ))}
        </svg>
      </div>

      {/* Status panel using Tailwind CSS styled classes */}
      <div className="border border-line bg-panel rounded-[14px] px-4 py-3 mt-3 text-muted text-[14.5px] leading-relaxed">
        <strong className="block font-mono text-[13px] text-amber mb-2">Stan pracy: {mode}</strong>
        {ugs < UT && "Napięcie bramki jest niższe niż napięcie progowe (1V). Brak warstwy inwersyjnej (kanału). Tranzystor jest zatkany i obwód jest otwarty."}
        {ugs >= UT && uds === 0 && "Pole elektryczne z bramki przyciągnęło elektrony i utworzyło kanał przewodzący. Brak napięcia drenu sprawia jednak, że prąd nie płynie."}
        {ugs >= UT && uds > 0 && uds < vOv && "Kanał istnieje, a napięcie UDS wymusza przepływ elektronów. Prąd rośnie proporcjonalnie do wzrostu napięcia drenu. Dioda świeci."}
        {ugs >= UT && uds > 0 && uds >= vOv && "Nastąpiło przewężenie (pinch-off) kanału przy drenie z powodu lokalnego spadku różnicy potencjałów. Prąd drenu nasycił się i osiągnął swoją maksymalną wartość dla danego napięcia bramki."}
        <div className="mt-2 font-mono text-[12px] text-amber">
          Wyliczony prąd I<sub>D</sub>: ~{(id * 10).toFixed(1)} mA
        </div>
      </div>
    </>
  );
};

export default MosfetSimulator;

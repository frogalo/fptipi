import React from 'react';

export function FaradayViz() {
  return (
    <div className="maxwell-viz-container">
      <div className="faraday-scene">
        {/* Zmienne pole B (rosnące/malejące strzałki) */}
        <div className="b-field-group">
          <div className="b-arrow"></div>
          <div className="b-arrow"></div>
          <div className="b-arrow"></div>
        </div>
        {/* Indukowane pole E (wirowe) */}
        <div className="e-loop">
           <div className="e-arrow e1"></div>
           <div className="e-arrow e2"></div>
           <div className="e-arrow e3"></div>
           <div className="e-arrow e4"></div>
        </div>
      </div>
      <div className="viz-caption">
        <span className="text-amber">Zmienne pole B(t)</span> indukuje wirowe <span className="text-green">pole E</span>
      </div>
    </div>
  );
}

export function AmpereViz() {
  return (
    <div className="maxwell-viz-container">
      <div className="ampere-scene">
        <div className="wire">
           <div className="current-electron"></div>
           <div className="current-electron"></div>
           <div className="current-electron"></div>
        </div>
        <div className="b-loop">
           <div className="b-loop-arrow b1"></div>
           <div className="b-loop-arrow b2"></div>
           <div className="b-loop-arrow b3"></div>
           <div className="b-loop-arrow b4"></div>
        </div>
      </div>
      <div className="viz-caption">
        <span className="text-blue">Prąd (lub E(t))</span> indukuje wirowe <span className="text-amber">pole B</span>
      </div>
    </div>
  );
}

export function GaussElectricViz() {
  return (
    <div className="maxwell-viz-container">
      <div className="gauss-e-scene">
        <div className="point-charge">+</div>
        <div className="e-radial-lines">
           <div className="e-rad l1"></div>
           <div className="e-rad l2"></div>
           <div className="e-rad l3"></div>
           <div className="e-rad l4"></div>
           <div className="e-rad l5"></div>
           <div className="e-rad l6"></div>
           <div className="e-rad l7"></div>
           <div className="e-rad l8"></div>
        </div>
      </div>
      <div className="viz-caption">
        Linie <span className="text-green">pola E</span> mają źródła (ładunki)
      </div>
    </div>
  );
}

export function GaussMagneticViz() {
  return (
    <div className="maxwell-viz-container">
      <div className="gauss-m-scene">
        <svg width="180" height="120" viewBox="0 0 180 120" className="absolute inset-0 z-0">
          <defs>
            <marker id="arrow-b" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse">
              <path d="M 0 0 L 8 4 L 0 8 z" fill="var(--color-amber, #f4a52a)" />
            </marker>
          </defs>
          
          <g className="m-lines-anim" stroke="var(--color-amber, #f4a52a)" strokeWidth="1.5" fill="none">
            {/* Top inner loop */}
            <path d="M 110 56 C 110 30, 70 30, 70 56 L 110 56" />
            <polygon points="84,37 92,34 92,40" fill="var(--color-amber, #f4a52a)" stroke="none" />
            
            {/* Top middle loop */}
            <path d="M 120 56 C 130 10, 50 10, 60 56 L 120 56" />
            <polygon points="84,19 92,16 92,22" fill="var(--color-amber, #f4a52a)" stroke="none" />

            {/* Top outer loop */}
            <path d="M 130 56 C 150 -10, 30 -10, 50 56 L 130 56" />
            <polygon points="84,2 92,-1 92,5" fill="var(--color-amber, #f4a52a)" stroke="none" />

            {/* Bottom inner loop */}
            <path d="M 110 64 C 110 90, 70 90, 70 64 L 110 64" />
            <polygon points="88,83 96,80 96,86" fill="var(--color-amber, #f4a52a)" stroke="none" />

            {/* Bottom middle loop */}
            <path d="M 120 64 C 130 110, 50 110, 60 64 L 120 64" />
            <polygon points="88,101 96,98 96,104" fill="var(--color-amber, #f4a52a)" stroke="none" />

            {/* Bottom outer loop */}
            <path d="M 130 64 C 150 130, 30 130, 50 64 L 130 64" />
            <polygon points="88,118 96,115 96,121" fill="var(--color-amber, #f4a52a)" stroke="none" />
          </g>

          {/* Gaussian Surface 1 (Oval intersecting top lines) */}
          <ellipse cx="90" cy="20" rx="18" ry="14" fill="none" stroke="var(--color-green, #5be39a)" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-80" />
          
          {/* Gaussian Surface 2 (Rectangle intersecting S pole) */}
          <rect x="35" y="40" width="30" height="40" fill="none" stroke="var(--color-green, #5be39a)" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-80" />
        </svg>

        <div className="magnet-bar z-10" style={{ width: '80px', height: '18px' }}>
           <div className="pole s" style={{ backgroundColor: '#0ea5e9' }}>S</div>
           <div className="pole n" style={{ backgroundColor: '#ef4444' }}>N</div>
        </div>
      </div>
      <div className="viz-caption">
        Pow. zamknięte obejmują równe ilości<br/>linii wchodzących i wychodzących
      </div>
    </div>
  );
}

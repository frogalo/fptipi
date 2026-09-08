import React, { useState, useEffect, ImgHTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import { Radio } from 'react-next-loader';

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
  zoomable?: boolean;
  caption?: string;
};

export default function LazyImage({
  wrapperClassName = '',
  className = '',
  zoomable = true,
  caption,
  alt = '',
  ...imgProps
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Close on Escape key and lock body scroll
  useEffect(() => {
    if (!modalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

  const handleImageClick = (e: React.MouseEvent) => {
    if (zoomable) {
      e.stopPropagation();
      setModalOpen(true);
    }
  };

  const displayCaption = caption || alt;

  return (
    <>
      <div
        className={`relative inline-flex items-center justify-center ${zoomable ? 'cursor-zoom-in group' : ''} ${wrapperClassName}`}
        onClick={handleImageClick}
        title={zoomable ? 'Kliknij, aby powiększyć' : undefined}
      >
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Radio size="sm" color="#f43f5e" speed={0.4} glow />
          </div>
        )}
        <img
          {...imgProps}
          alt={alt}
          className={`transition-all duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          onLoad={() => setLoaded(true)}
        />

        {/* Hover zoom badge */}
        {zoomable && loaded && (
          <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/75 hover:bg-black/90 text-white/90 text-[11px] font-mono px-2.5 py-1 rounded-md flex items-center gap-1.5 backdrop-blur-xs border border-white/10 shadow-lg pointer-events-none select-none">
            <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2.5" fill="none">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            <span>Powiększ</span>
          </div>
        )}
      </div>

      {/* Modal Lightbox */}
      {modalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6 select-none"
            onClick={() => setModalOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all border border-white/20 cursor-pointer focus:outline-hidden"
              aria-label="Zamknij podgląd"
              title="Zamknij (ESC)"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.5" fill="none">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Modal Image container */}
            <div
              className="relative max-w-[96vw] max-h-[86vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imgProps.src}
                alt={alt}
                className="max-w-full max-h-[82vh] w-auto h-auto object-contain rounded-lg border border-line/60 shadow-2xl cursor-default"
              />

              {/* Caption & instructions */}
              <div className="mt-3 text-center max-w-[800px] px-4">
                {displayCaption && (
                  <p className="text-white/90 text-[13.5px] font-sans font-medium leading-snug mb-1">
                    {displayCaption}
                  </p>
                )}
                <span className="text-[11px] font-mono text-white/50">
                  Kliknij w tło lub naciśnij <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 border border-white/20">ESC</kbd>, aby zamknąć
                </span>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

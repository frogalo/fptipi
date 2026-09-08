import React from 'react';
import { Radio } from 'react-next-loader';

interface PageLoaderProps {
  message?: string;
}

export default function PageLoader({ message = 'Wczytywanie materiałów...' }: PageLoaderProps) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-ink/90 backdrop-blur-xs z-50 transition-opacity duration-200">
      <Radio size="lg" color="#f43f5e" speed={0.4} glow />
      {message && (
        <div className="mt-4 font-mono text-xs sm:text-sm text-amber tracking-[0.16em] uppercase font-semibold animate-pulse">
          {message}
        </div>
      )}
    </div>
  );
}


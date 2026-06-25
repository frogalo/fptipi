import React from 'react';
import { Radio } from 'react-next-loader';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-ink z-50">
      <Radio size="lg" color="#f43f5e" speed={0.4} glow />
    </div>
  );
}


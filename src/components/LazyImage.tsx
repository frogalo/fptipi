import React, { useState, ImgHTMLAttributes } from 'react';
import { Radio } from 'react-next-loader';

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
};

export default function LazyImage({ wrapperClassName = '', className = '', ...imgProps }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative inline-flex items-center justify-center ${wrapperClassName}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Radio size="sm" color="#f43f5e" speed={0.4} glow />
        </div>
      )}
      <img
        {...imgProps}
        className={`transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}


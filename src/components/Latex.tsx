import React, { useLayoutEffect, useEffect, useRef, memo } from 'react';
import { typesetMathJax, hasLatex } from '../utils/mathjax';

interface LatexProps {
  content: string;
  className?: string;
  as?: 'span' | 'div' | 'p' | 'h2' | 'h3';
}

export const Latex: React.FC<LatexProps> = memo(({
  content,
  className = '',
  as = 'span'
}) => {
  const ref = useRef<HTMLElement>(null);

  // Synchronously set initial text content before browser paint to prevent flash
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.textContent = content;
    }
  }, [content]);

  // Typeset math via MathJax if the string contains LaTeX delimiters
  useEffect(() => {
    if (!ref.current || !hasLatex(content)) return;

    let isMounted = true;
    typesetMathJax(ref.current).then(() => {
      if (!isMounted) return;
    });

    return () => {
      isMounted = false;
    };
  }, [content]);

  const Component = as as any;

  // Crucial: No React children! React's Virtual DOM sees an empty node,
  // ensuring MathJax-rendered SVG elements are NEVER wiped out by parent component re-renders.
  return <Component ref={ref} className={className} />;
});

Latex.displayName = 'Latex';

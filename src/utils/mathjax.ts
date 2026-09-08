/**
 * Robust MathJax v3 queueing utility.
 * Handles async script loading, promise serialization via startup.promise,
 * and element-level typeset clearing to prevent skipped or conflicting renders.
 */

export function typesetMathJax(element?: HTMLElement | null): Promise<void> {
  return new Promise((resolve) => {
    const w = window as any;
    const target = element || document.body;

    const execute = () => {
      if (!w.MathJax || !w.MathJax.typesetPromise) {
        return false;
      }

      // 1. Clear existing typeset math in target so MathJax doesn't skip it
      try {
        if (w.MathJax.typesetClear) {
          w.MathJax.typesetClear([target]);
        }
      } catch (e) {
        // Ignore clear errors if any
      }

      // 2. Chain typesetPromise onto startup.promise to prevent concurrency conflicts
      w.MathJax.startup = w.MathJax.startup || {};
      const prevPromise = w.MathJax.startup.promise || Promise.resolve();

      w.MathJax.startup.promise = prevPromise
        .then(() => {
          return w.MathJax.typesetPromise([target]);
        })
        .then(() => {
          resolve();
        })
        .catch((err: any) => {
          console.warn('MathJax typesetPromise warning:', err);
          resolve();
        });

      return true;
    };

    if (!execute()) {
      // MathJax script is still loading from CDN, poll until ready
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (execute() || attempts > 100) {
          clearInterval(interval);
          resolve();
        }
      }, 50);
    }
  });
}

/**
 * Checks if a string contains any LaTeX math delimiters: \( ... \), \[ ... \], or $ ... $
 */
export function hasLatex(text: string): boolean {
  if (!text) return false;
  return text.includes('\\(') || text.includes('\\[') || text.includes('$');
}

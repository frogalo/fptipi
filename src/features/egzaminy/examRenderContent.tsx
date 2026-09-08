import React from 'react';

/** Renders inline **bold** markers and `code` markers within a plain-text string. */
export function renderInline(text: string): React.ReactNode[] {
  // Split by **bold** or `code`
  const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="text-txt font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={idx} className="font-mono text-[13px] bg-ink px-1.5 py-0.5 rounded text-amber-soft border border-line">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

/**
 * Converts a plain-text solution string into a rich, highly legible React node tree.
 * Line-by-line block parser with zero emojis and comfortable typography.
 */
export function renderContent(text: string): React.ReactNode {
  if (!text) return null;

  const rawLines = text.split('\n');
  const elements: React.ReactNode[] = [];

  let currentParagraph: string[] = [];
  let currentList: {
    type: 'ul' | 'ol';
    start?: number;
    items: { content: string; formula?: string }[];
  } | null = null;
  let currentCallout: string[] = [];

  const flushParagraph = (key: string) => {
    if (currentParagraph.length > 0) {
      const pText = currentParagraph.join(' ').trim();
      if (pText) {
        elements.push(
          <p key={key} className="mb-3 text-[15px] leading-relaxed text-txt font-sans">
            {renderInline(pText)}
          </p>
        );
      }
      currentParagraph = [];
    }
  };

  const flushList = (key: string) => {
    if (currentList) {
      const items = currentList.items.map((item, iIdx) => (
        <li key={iIdx} className="leading-relaxed">
          <span>{renderInline(item.content)}</span>
          {item.formula && (
            <div className="my-2.5 py-2 px-3 bg-ink2/80 rounded-lg border border-line text-center overflow-x-auto text-[15px]">
              {renderInline(item.formula)}
            </div>
          )}
        </li>
      ));

      if (currentList.type === 'ol') {
        elements.push(
          <ol key={key} start={currentList.start} className="list-decimal pl-6 space-y-2 mb-4 text-[15px] text-txt font-sans">
            {items}
          </ol>
        );
      } else {
        elements.push(
          <ul key={key} className="list-disc pl-6 space-y-2 mb-4 text-[15px] text-txt font-sans">
            {items}
          </ul>
        );
      }
      currentList = null;
    }
  };

  const flushCallout = (key: string) => {
    if (currentCallout.length > 0) {
      elements.push(
        <div key={key} className="my-4 rounded-xl border border-amber/35 bg-amber/5 px-4 py-3.5 text-[14.5px] leading-relaxed">
          <div className="text-[11px] font-mono uppercase tracking-wider text-amber font-semibold mb-2 pb-1 border-b border-amber/20">
            Ważne / Do zapamiętania
          </div>
          <div className="space-y-1.5 text-txt font-sans">
            {currentCallout.map((cLine, cIdx) => {
              if (cLine.startsWith('\\[') && cLine.endsWith('\\]')) {
                return (
                  <div key={cIdx} className="my-2 text-center overflow-x-auto text-[15px]">
                    {renderInline(cLine)}
                  </div>
                );
              }
              return (
                <p key={cIdx} className="text-[14.5px] leading-relaxed">
                  {renderInline(cLine)}
                </p>
              );
            })}
          </div>
        </div>
      );
      currentCallout = [];
    }
  };

  const flushAll = (key: string) => {
    flushParagraph(`${key}-p`);
    flushList(`${key}-l`);
    flushCallout(`${key}-c`);
  };

  rawLines.forEach((line, lineIdx) => {
    const trimmed = line.trim();

    // Empty line -> break paragraph/list
    if (!trimmed) {
      flushAll(`line-${lineIdx}`);
      return;
    }

    // Callout (> ...)
    if (trimmed.startsWith('>')) {
      flushParagraph(`line-${lineIdx}-p`);
      flushList(`line-${lineIdx}-l`);
      const cleanCallout = trimmed.replace(/^>\s?/, '').trim();
      if (cleanCallout) {
        currentCallout.push(cleanCallout);
      }
      return;
    } else {
      flushCallout(`line-${lineIdx}-c`);
    }

    // Horizontal Rule
    if (trimmed === '---') {
      flushAll(`line-${lineIdx}`);
      elements.push(<hr key={`hr-${lineIdx}`} className="border-t border-line my-5" />);
      return;
    }

    // Level 2 Heading: ## ...
    if (trimmed.startsWith('## ')) {
      flushAll(`line-${lineIdx}`);
      const title = trimmed.replace(/^##\s+/, '');
      elements.push(
        <div key={`h2-${lineIdx}`} className="mt-7 mb-3.5 pt-1">
          <div className="border-l-4 border-amber pl-3.5 bg-ink2/60 py-2 rounded-r-lg">
            <h3 className="text-[17px] sm:text-[18px] font-bold text-txt font-sans tracking-tight">
              {renderInline(title)}
            </h3>
          </div>
        </div>
      );
      return;
    }

    // Level 3 Heading: ### ...
    if (trimmed.startsWith('### ')) {
      flushAll(`line-${lineIdx}`);
      const title = trimmed.replace(/^###\s+/, '');
      elements.push(
        <h4
          key={`h3-${lineIdx}`}
          className="text-[15.5px] text-amber-soft font-semibold mt-5 mb-2 font-sans tracking-wide pb-1 border-b border-line/50"
        >
          {renderInline(title)}
        </h4>
      );
      return;
    }

    // Block formula on its own line: \[...\]
    if (trimmed.startsWith('\\[') && trimmed.endsWith('\\]')) {
      if (currentList && currentList.items.length > 0) {
        const lastItem = currentList.items[currentList.items.length - 1];
        lastItem.formula = trimmed;
      } else {
        flushAll(`line-${lineIdx}`);
        elements.push(
          <div key={`formula-${lineIdx}`} className="my-3 py-2.5 px-4 bg-ink2/80 rounded-xl border border-line text-center overflow-x-auto shadow-inner text-[15.5px]">
            {renderInline(trimmed)}
          </div>
        );
      }
      return;
    }

    // Subheading ending in ':' (if short standalone title line)
    if (trimmed.endsWith(':') && trimmed.length < 80 && !trimmed.startsWith('-') && !trimmed.startsWith('•') && !trimmed.match(/^\d+\./)) {
      flushAll(`line-${lineIdx}`);
      elements.push(
        <h5 key={`subh-${lineIdx}`} className="text-[14.5px] font-semibold text-txt mt-3.5 mb-1.5 font-sans">
          {renderInline(trimmed)}
        </h5>
      );
      return;
    }

    // Bullet item (- or •)
    const isBullet = trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ');
    if (isBullet) {
      flushParagraph(`line-${lineIdx}-p`);
      if (currentList && currentList.type !== 'ul') {
        flushList(`line-${lineIdx}-l`);
      }
      const cleaned = trimmed.replace(/^[-•*]\s+/, '');
      if (!currentList) {
        currentList = { type: 'ul', items: [{ content: cleaned }] };
      } else {
        currentList.items.push({ content: cleaned });
      }
      return;
    }

    // Numbered item (e.g. 1. ... or 2. ...)
    const numMatch = trimmed.match(/^(\d+)[\.\)]\s+(.*)/);
    if (numMatch && !trimmed.startsWith('##')) {
      flushParagraph(`line-${lineIdx}-p`);
      if (currentList && currentList.type !== 'ol') {
        flushList(`line-${lineIdx}-l`);
      }
      const num = parseInt(numMatch[1]);
      const content = numMatch[2];
      if (!currentList) {
        currentList = { type: 'ol', start: num, items: [{ content }] };
      } else {
        currentList.items.push({ content });
      }
      return;
    }

    // If we're inside a list and the line continues the previous item
    if (currentList && currentList.items.length > 0) {
      const lastItem = currentList.items[currentList.items.length - 1];
      lastItem.content += ' ' + trimmed;
      return;
    }

    // Regular paragraph text
    currentParagraph.push(trimmed);
  });

  flushAll('final');

  return <div className="space-y-1 font-sans">{elements}</div>;
}

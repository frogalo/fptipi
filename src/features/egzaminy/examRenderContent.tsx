import React from 'react';

/** Renders inline **bold** markers within a plain-text string. */
export function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

/**
 * Converts a plain-text solution string into a rich React node tree.
 * Supports: paragraphs, subheadings (lines ending in ':'), horizontal rules
 * ('---'), ordered/unordered lists, and block-level LaTeX formulas (\[…\]).
 */
export function renderContent(text: string): React.ReactNode {
  if (!text) return null;
  const paragraphs = text.split(/\n\n+/);

  return paragraphs.map((p, idx) => {
    const trimmed = p.trim();

    if (trimmed === '---') {
      return <hr key={idx} className="border-t border-line my-6" />;
    }

    if (trimmed.endsWith(':') && trimmed.length < 80) {
      return (
        <h4
          key={idx}
          className="text-base text-amber-soft font-semibold mt-5 mb-2 font-mono tracking-wide"
        >
          {trimmed}
        </h4>
      );
    }

    const lines = trimmed.split('\n');
    const elements: React.ReactNode[] = [];

    let currentList: {
      type: 'ol' | 'ul';
      start?: number;
      items: { key: number; blocks: { type: 'text' | 'formula'; content: string }[] }[];
    } | null = null;

    let currentParagraphLines: string[] = [];

    const flushCurrentList = (key: string) => {
      if (!currentList) return;

      const listItems = currentList.items.map((item) => (
        <li key={item.key} className="mb-2">
          {item.blocks.map((block, bIdx) => {
            if (block.type === 'formula') {
              return (
                <div key={bIdx} className="my-2.5 text-center overflow-x-auto">
                  {renderInline(block.content)}
                </div>
              );
            }
            return (
              <div key={bIdx} className={bIdx > 0 ? 'mt-1.5' : ''}>
                {renderInline(block.content)}
              </div>
            );
          })}
        </li>
      ));

      if (currentList.type === 'ol') {
        elements.push(
          <ol key={key} start={currentList.start} className="list-decimal pl-5 mb-4 text-[15px] space-y-1.5">
            {listItems}
          </ol>
        );
      } else {
        elements.push(
          <ul key={key} className="list-disc pl-5 mb-4 text-[15px] space-y-1.5">
            {listItems}
          </ul>
        );
      }
      currentList = null;
    };

    const flushCurrentParagraph = (key: string) => {
      if (currentParagraphLines.length === 0) return;
      const pText = currentParagraphLines.join(' ');
      elements.push(
        <p key={key} className="mb-3.5 text-[15px] leading-relaxed text-txt font-sans">
          {renderInline(pText)}
        </p>
      );
      currentParagraphLines = [];
    };

    lines.forEach((line, lineIdx) => {
      const lineTrimmed = line.trim();
      if (!lineTrimmed) return;

      const isBullet = lineTrimmed.startsWith('-') || lineTrimmed.startsWith('•');
      const isNumber = lineTrimmed.match(/^\d+\./);
      const isBlockFormula = lineTrimmed.startsWith('\\[') && lineTrimmed.endsWith('\\]');

      if (isBullet) {
        flushCurrentParagraph(`${idx}-${lineIdx}-p`);
        if (currentList && currentList.type !== 'ul') {
          flushCurrentList(`${idx}-${lineIdx}-list`);
        }
        const cleaned = lineTrimmed.replace(/^[-•]\s*/, '');
        if (!currentList) {
          currentList = { type: 'ul', items: [{ key: 0, blocks: [{ type: 'text', content: cleaned }] }] };
        } else {
          currentList.items.push({ key: currentList.items.length, blocks: [{ type: 'text', content: cleaned }] });
        }
      } else if (isNumber) {
        flushCurrentParagraph(`${idx}-${lineIdx}-p`);
        if (currentList && currentList.type !== 'ol') {
          flushCurrentList(`${idx}-${lineIdx}-list`);
        }
        const cleaned = lineTrimmed.replace(/^\d+\.\s*/, '');
        const startNum = parseInt(isNumber[0]);
        if (!currentList) {
          currentList = { type: 'ol', start: startNum, items: [{ key: 0, blocks: [{ type: 'text', content: cleaned }] }] };
        } else {
          currentList.items.push({ key: currentList.items.length, blocks: [{ type: 'text', content: cleaned }] });
        }
      } else if (isBlockFormula) {
        if (currentList) {
          const lastItem = currentList.items[currentList.items.length - 1];
          lastItem.blocks.push({ type: 'formula', content: lineTrimmed });
        } else {
          flushCurrentParagraph(`${idx}-${lineIdx}-p`);
          elements.push(
            <div key={`${idx}-${lineIdx}-formula`} className="my-3 text-center overflow-x-auto">
              {renderInline(lineTrimmed)}
            </div>
          );
        }
      } else {
        if (currentList) {
          const lastItem = currentList.items[currentList.items.length - 1];
          const lastBlock = lastItem.blocks[lastItem.blocks.length - 1];
          if (lastBlock && lastBlock.type === 'text') {
            lastBlock.content += ' ' + lineTrimmed;
          } else {
            lastItem.blocks.push({ type: 'text', content: lineTrimmed });
          }
        } else {
          currentParagraphLines.push(lineTrimmed);
        }
      }
    });

    flushCurrentParagraph(`${idx}-final-p`);
    flushCurrentList(`${idx}-final-list`);

    return <div key={idx}>{elements}</div>;
  });
}


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

interface ListItem {
  content: string;
  formula?: string;
}

interface ListRootItem extends ListItem {
  subItems?: ListItem[];
}

interface ListState {
  type: 'ul' | 'ol';
  start?: number;
  items: ListRootItem[];
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
  let currentList: ListState | null = null;
  let currentCallout: string[] = [];
  let currentTable: string[][] = [];

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

  const flushTable = (key: string) => {
    if (currentTable.length > 0) {
      const headerRow = currentTable[0];
      let bodyRows = currentTable.slice(1);
      if (bodyRows.length > 0 && bodyRows[0].every(cell => /^[:\s-]+$/.test(cell))) {
        bodyRows = bodyRows.slice(1);
      }

      elements.push(
        <div key={key} className="my-5 overflow-x-auto rounded-xl border border-line bg-panel2/50 shadow-sm">
          <table className="w-full text-left border-collapse text-[14px]">
            <thead>
              <tr className="border-b border-line bg-ink2/90">
                {headerRow.map((cell, cIdx) => (
                  <th
                    key={cIdx}
                    className="py-3 px-4 font-mono text-[12.5px] font-bold uppercase tracking-wider text-amber border-r border-line/40 last:border-r-0"
                  >
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line/40 font-sans">
              {bodyRows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-amber/5 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className="py-2.5 px-4 text-txt leading-relaxed border-r border-line/30 last:border-r-0"
                    >
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      currentTable = [];
    }
  };

  const flushList = (key: string) => {
    if (currentList) {
      if (currentList.type === 'ol') {
        elements.push(
          <ol key={key} className="space-y-3 mb-5 text-[15px] text-txt font-sans">
            {currentList.items.map((item, iIdx) => {
              const num = (currentList?.start ?? 1) + iIdx;
              return (
                <li key={iIdx} className="leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-[12px] font-bold text-amber bg-ink2 px-2 py-0.5 rounded-md border border-line shrink-0 mt-px select-none">
                      {num}.
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-txt">{renderInline(item.content)}</span>
                      {item.formula && (
                        <div className="my-2.5 py-2 px-3 bg-ink2/80 rounded-lg border border-line text-center overflow-x-auto text-[15px]">
                          {renderInline(item.formula)}
                        </div>
                      )}
                      {item.subItems && item.subItems.length > 0 && (
                        <ul className="mt-2.5 ml-1 pl-3.5 border-l-2 border-line/70 space-y-2 text-[14px]">
                          {item.subItems.map((sub, sIdx) => (
                            <li key={sIdx} className="leading-relaxed">
                              <div className="flex items-start gap-2">
                                <span className="text-amber-soft/80 font-mono text-[13px] mt-px select-none shrink-0 font-bold">–</span>
                                <div className="flex-1 min-w-0 text-txt/90">
                                  <span>{renderInline(sub.content)}</span>
                                  {sub.formula && (
                                    <div className="my-2 py-1.5 px-2.5 bg-ink2/80 rounded-lg border border-line text-center overflow-x-auto text-[14px]">
                                      {renderInline(sub.formula)}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        );
      } else {
        elements.push(
          <ul key={key} className="space-y-3 mb-5 text-[15px] text-txt font-sans">
            {currentList.items.map((item, iIdx) => (
              <li key={iIdx} className="leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber/90 mt-[7.5px] shrink-0 shadow-sm shadow-amber/30" />
                  <div className="flex-1 min-w-0">
                    <span className="text-txt">{renderInline(item.content)}</span>
                    {item.formula && (
                      <div className="my-2.5 py-2 px-3 bg-ink2/80 rounded-lg border border-line text-center overflow-x-auto text-[15px]">
                        {renderInline(item.formula)}
                      </div>
                    )}
                    {item.subItems && item.subItems.length > 0 && (
                      <ul className="mt-2.5 ml-1 pl-3.5 border-l-2 border-line/70 space-y-2 text-[14px]">
                        {item.subItems.map((sub, sIdx) => (
                          <li key={sIdx} className="leading-relaxed">
                            <div className="flex items-start gap-2">
                              <span className="text-amber-soft/80 font-mono text-[13px] mt-px select-none shrink-0 font-bold">–</span>
                              <div className="flex-1 min-w-0 text-txt/90">
                                <span>{renderInline(sub.content)}</span>
                                {sub.formula && (
                                  <div className="my-2 py-1.5 px-2.5 bg-ink2/80 rounded-lg border border-line text-center overflow-x-auto text-[14px]">
                                    {renderInline(sub.formula)}
                                  </div>
                                )}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            ))}
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
    flushTable(`${key}-t`);
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
      flushTable(`line-${lineIdx}-t`);
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

    // Markdown table row (| col1 | col2 |)
    const isTableRow = trimmed.startsWith('|') && trimmed.endsWith('|') && trimmed.includes('|', 1);
    if (isTableRow) {
      flushParagraph(`line-${lineIdx}-p`);
      flushList(`line-${lineIdx}-l`);
      flushCallout(`line-${lineIdx}-c`);

      const cells = trimmed
        .slice(1, -1)
        .split('|')
        .map(c => c.trim());
      currentTable.push(cells);
      return;
    } else {
      flushTable(`line-${lineIdx}-t`);
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
        if (lastItem.subItems && lastItem.subItems.length > 0) {
          const lastSub = lastItem.subItems[lastItem.subItems.length - 1];
          lastSub.formula = trimmed;
        } else {
          lastItem.formula = trimmed;
        }
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
    if (trimmed.endsWith(':') && trimmed.length < 80 && !trimmed.startsWith('-') && !trimmed.startsWith('•') && !trimmed.startsWith('*') && !trimmed.match(/^\d+\./)) {
      flushAll(`line-${lineIdx}`);
      elements.push(
        <h5 key={`subh-${lineIdx}`} className="text-[14.5px] font-semibold text-txt mt-3.5 mb-1.5 font-sans">
          {renderInline(trimmed)}
        </h5>
      );
      return;
    }

    // Bullet item (- or • or *)
    const isBullet = trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ');
    if (isBullet) {
      flushParagraph(`line-${lineIdx}-p`);
      flushTable(`line-${lineIdx}-t`);
      const cleaned = trimmed.replace(/^[-•*]\s+/, '');
      const leadingSpaces = line.match(/^\s*/)?.[0].length || 0;
      const isSubItem = leadingSpaces >= 2;

      if (isSubItem && currentList && currentList.items.length > 0) {
        const parent = currentList.items[currentList.items.length - 1];
        if (!parent.subItems) {
          parent.subItems = [];
        }
        parent.subItems.push({ content: cleaned });
        return;
      }

      if (currentList && currentList.type !== 'ul') {
        flushList(`line-${lineIdx}-l`);
      }
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
      flushTable(`line-${lineIdx}-t`);
      const num = parseInt(numMatch[1]);
      const content = numMatch[2];
      const leadingSpaces = line.match(/^\s*/)?.[0].length || 0;
      const isSubItem = leadingSpaces >= 2;

      if (isSubItem && currentList && currentList.items.length > 0) {
        const parent = currentList.items[currentList.items.length - 1];
        if (!parent.subItems) {
          parent.subItems = [];
        }
        parent.subItems.push({ content });
        return;
      }

      if (currentList && currentList.type !== 'ol') {
        flushList(`line-${lineIdx}-l`);
      }
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
      const leadingSpaces = line.match(/^\s*/)?.[0].length || 0;
      if (leadingSpaces >= 2 && lastItem.subItems && lastItem.subItems.length > 0) {
        const lastSub = lastItem.subItems[lastItem.subItems.length - 1];
        lastSub.content += ' ' + trimmed;
      } else {
        lastItem.content += ' ' + trimmed;
      }
      return;
    }

    // Regular paragraph text
    currentParagraph.push(trimmed);
  });

  flushAll('final');

  return <div className="space-y-1 font-sans">{elements}</div>;
}

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export interface PageSection {
  id: string;
  label: string;
  fullLabel: string;
}

const SECTION_ID_PATTERN = /^(q\d+|qwb|t\d+|task-\d+)$/;

export const SECTION_LABEL_MAX = 52;

export function truncateLabel(text: string, max = SECTION_LABEL_MAX): { label: string; fullLabel: string } {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (normalized.length <= max) {
    return { label: normalized, fullLabel: normalized };
  }
  return { label: `${normalized.slice(0, max - 1)}…`, fullLabel: normalized };
}

function sectionSortKey(id: string): number {
  if (id === 'qwb') return 9999;
  const match = id.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}

function extractLabel(element: HTMLElement, id: string): { label: string; fullLabel: string } {
  if (/^t\d+$/.test(id)) {
    const n = id.slice(1);
    return { label: `Zadanie ${n}`, fullLabel: `Zadanie ${n}` };
  }

  if (/^task-\d+$/.test(id)) {
    const questionEl = element.querySelector('.whitespace-pre-wrap');
    const questionText = questionEl?.textContent?.trim();
    if (questionText) {
      return truncateLabel(questionText);
    }
    const n = id.replace('task-', '');
    return { label: `Zadanie ${n}`, fullLabel: `Zadanie ${n}` };
  }

  const heading = element.querySelector('h2');
  const title = heading?.textContent?.trim();
  if (title) {
    return truncateLabel(title);
  }

  return truncateLabel(id);
}

function scanSections(): PageSection[] {
  const seen = new Set<string>();
  const sections: PageSection[] = [];

  document.querySelectorAll<HTMLElement>('[id]').forEach((element) => {
    const { id } = element;
    if (!SECTION_ID_PATTERN.test(id) || seen.has(id)) return;
    seen.add(id);

    const { label, fullLabel } = extractLabel(element, id);
    sections.push({ id, label, fullLabel });
  });

  return sections.sort((a, b) => {
    const prefixOrder = (id: string) => {
      if (id.startsWith('q')) return 0;
      if (id.startsWith('t')) return 1;
      if (id.startsWith('task-')) return 2;
      return 3;
    };
    const prefixDiff = prefixOrder(a.id) - prefixOrder(b.id);
    if (prefixDiff !== 0) return prefixDiff;
    return sectionSortKey(a.id) - sectionSortKey(b.id);
  });
}

export function usePageSections() {
  const { pathname } = useLocation();
  const [sections, setSections] = useState<PageSection[]>([]);

  useEffect(() => {
    let cancelled = false;

    const update = () => {
      if (cancelled) return;
      setSections(scanSections());
    };

    update();
    const timers = [150, 500, 1200].map((ms) => window.setTimeout(update, ms));

    let debounceTimer: number | undefined;
    const observer = new MutationObserver(() => {
      window.clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(update, 120);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      window.clearTimeout(debounceTimer);
      observer.disconnect();
    };
  }, [pathname]);

  return sections;
}

export function useActiveSection(sectionIds: string[]) {
  const { hash } = useLocation();
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      if (sectionIds.includes(id)) {
        setActiveId(id);
      }
    }
  }, [hash, sectionIds]);

  useEffect(() => {
    if (sectionIds.length === 0) {
      setActiveId(null);
      return;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.1, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

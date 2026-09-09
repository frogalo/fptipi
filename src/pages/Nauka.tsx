import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Latex } from '../components/Latex';
import { typesetMathJax } from '../utils/mathjax';
import { QUIZ_QUESTIONS, QUIZ_CATEGORIES, QuizQuestion } from '../data/quizQuestions';

type Mode = 'flashcards' | 'quiz' | 'browse';

interface UserProgress {
  masteredIds: string[];
  reviewIds: string[];
  history: Record<string, { correct: number; incorrect: number }>;
}

const STORAGE_KEY = 'fptiti_learning_progress';

function loadProgress(): UserProgress {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error('Błąd odczytu postępu:', e);
  }
  return { masteredIds: [], reviewIds: [], history: {} };
}

function saveProgress(progress: UserProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Błąd zapisu postępu:', e);
  }
}

/** Deterministic Mulberry32 Fisher-Yates shuffle to keep quiz order stable across renders */
function shuffleArray<T>(array: T[], seed: number): T[] {
  if (!seed) return array;
  const result = [...array];
  let s = seed;
  const random = () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function Nauka() {
  const [mode, setMode] = useState<Mode>('flashcards');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [onlyTier1, setOnlyTier1] = useState<boolean>(false);
  const [onlyReview, setOnlyReview] = useState<boolean>(false);
  const [activeReviewIds, setActiveReviewIds] = useState<string[]>(() => loadProgress().reviewIds);
  const [isShuffled, setIsShuffled] = useState<boolean>(false);
  const [shuffleSeed, setShuffleSeed] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [progress, setProgress] = useState<UserProgress>(loadProgress);

  // Flashcards state
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [flashcardHintLevel, setFlashcardHintLevel] = useState<number>(0);

  // Quiz state
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);
  const [bestStreak, setBestStreak] = useState<number>(0);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  const [is5050Used, setIs5050Used] = useState<boolean>(false);
  const [hintLevel, setHintLevel] = useState<number>(0);
  const [quizScore, setQuizScore] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  // MathJax re-render trigger
  const triggerMathJax = useCallback(() => {
    typesetMathJax();
  }, []);

  // Filtered list with deterministic shuffle that never scrambles mid-question
  const filteredQuestions = useMemo(() => {
    let list = [...QUIZ_QUESTIONS];

    if (selectedCategory !== 'all') {
      list = list.filter((q) => q.category === selectedCategory);
    }
    if (onlyTier1) {
      list = list.filter((q) => q.tier === 'tier1');
    }
    if (onlyReview) {
      list = list.filter((q) => activeReviewIds.includes(q.id));
    }
    if (searchQuery.trim() && mode === 'browse') {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (item) =>
          item.question.toLowerCase().includes(q) ||
          item.explanation.toLowerCase().includes(q) ||
          item.flashcardFront.toLowerCase().includes(q) ||
          item.options.some((opt) => opt.toLowerCase().includes(q))
      );
    }
    if (isShuffled && shuffleSeed) {
      list = shuffleArray(list, shuffleSeed);
    }

    return list;
  }, [selectedCategory, onlyTier1, onlyReview, activeReviewIds, isShuffled, shuffleSeed, searchQuery, mode]);

  // Reset indices when filtered list configuration changes
  useEffect(() => {
    setCardIndex(0);
    setIsFlipped(false);
    setFlashcardHintLevel(0);
    setQuizIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setEliminatedOptions([]);
    setIs5050Used(false);
    setHintLevel(0);
    setQuizFinished(false);
  }, [selectedCategory, onlyTier1, onlyReview, isShuffled, shuffleSeed]);

  // Typeset math when changing card or quiz question
  useEffect(() => {
    triggerMathJax();
  }, [cardIndex, isFlipped, flashcardHintLevel, quizIndex, mode, isAnswerSubmitted, filteredQuestions, triggerMathJax]);

  const toggleShuffle = () => {
    setIsShuffled((prev) => {
      const next = !prev;
      setShuffleSeed(next ? Math.floor(Math.random() * 1000000) + 1 : 0);
      return next;
    });
  };

  const reshuffle = () => {
    if (!isShuffled) {
      setIsShuffled(true);
    }
    setShuffleSeed(Math.floor(Math.random() * 1000000) + 1);
    setQuizIndex(0);
    setCardIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setEliminatedOptions([]);
    setIs5050Used(false);
    setHintLevel(0);
    setQuizFinished(false);
  };

  const toggleOnlyReview = () => {
    setOnlyReview((prev) => {
      const next = !prev;
      if (next) {
        setActiveReviewIds(progress.reviewIds);
      }
      return next;
    });
  };

  // Current items
  const currentCard = filteredQuestions[cardIndex];
  const currentQuizQ = filteredQuestions[quizIndex];

  // Flashcards actions
  const nextCard = () => {
    if (filteredQuestions.length === 0) return;
    setIsFlipped(false);
    setFlashcardHintLevel(0);
    setCardIndex((prev) => (prev + 1) % filteredQuestions.length);
  };

  const prevCard = () => {
    if (filteredQuestions.length === 0) return;
    setIsFlipped(false);
    setFlashcardHintLevel(0);
    setCardIndex((prev) => (prev - 1 + filteredQuestions.length) % filteredQuestions.length);
  };

  const markMastered = (id: string) => {
    setProgress((prev) => {
      const updated = {
        ...prev,
        masteredIds: Array.from(new Set([...prev.masteredIds, id])),
        reviewIds: prev.reviewIds.filter((item) => item !== id)
      };
      saveProgress(updated);
      return updated;
    });
    nextCard();
  };

  const markReview = (id: string) => {
    setProgress((prev) => {
      const updated = {
        ...prev,
        reviewIds: Array.from(new Set([...prev.reviewIds, id])),
        masteredIds: prev.masteredIds.filter((item) => item !== id)
      };
      saveProgress(updated);
      return updated;
    });
    nextCard();
  };

  // Keyboard navigation for Flashcards
  useEffect(() => {
    if (mode !== 'flashcards') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        nextCard();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        prevCard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, filteredQuestions.length]);

  // Quiz actions
  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted || eliminatedOptions.includes(idx)) return;
    setSelectedOption(idx);
  };

  const handleQuizSubmit = () => {
    if (selectedOption === null || !currentQuizQ || isAnswerSubmitted) return;

    const isCorrect = selectedOption === currentQuizQ.correctIndex;
    setIsAnswerSubmitted(true);

    if (isCorrect) {
      setStreak((s) => {
        const next = s + 1;
        if (next > bestStreak) setBestStreak(next);
        return next;
      });
      setQuizScore((prev) => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
      // Automatically master question if answered correctly
      setProgress((prev) => {
        const historyItem = prev.history[currentQuizQ.id] || { correct: 0, incorrect: 0 };
        const updated = {
          ...prev,
          masteredIds: Array.from(new Set([...prev.masteredIds, currentQuizQ.id])),
          reviewIds: prev.reviewIds.filter((id) => id !== currentQuizQ.id),
          history: {
            ...prev.history,
            [currentQuizQ.id]: { ...historyItem, correct: historyItem.correct + 1 }
          }
        };
        saveProgress(updated);
        return updated;
      });
    } else {
      setStreak(0);
      setQuizScore((prev) => ({ ...prev, total: prev.total + 1 }));
      // Automatically mark for review if failed
      setProgress((prev) => {
        const historyItem = prev.history[currentQuizQ.id] || { correct: 0, incorrect: 0 };
        const updated = {
          ...prev,
          reviewIds: Array.from(new Set([...prev.reviewIds, currentQuizQ.id])),
          masteredIds: prev.masteredIds.filter((id) => id !== currentQuizQ.id),
          history: {
            ...prev.history,
            [currentQuizQ.id]: { ...historyItem, incorrect: historyItem.incorrect + 1 }
          }
        };
        saveProgress(updated);
        return updated;
      });
    }
  };

  const handleNextQuizQuestion = () => {
    if (quizIndex + 1 >= filteredQuestions.length) {
      setQuizFinished(true);
    } else {
      setQuizIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
      setEliminatedOptions([]);
      setIs5050Used(false);
      setHintLevel(0);
    }
  };

  const handleUse5050 = () => {
    if (is5050Used || !currentQuizQ || isAnswerSubmitted) return;
    const wrongIndices = [0, 1, 2, 3].filter((i) => i !== currentQuizQ.correctIndex);
    // Shuffle wrong and pick 2 to eliminate
    const toEliminate = wrongIndices.sort(() => 0.5 - Math.random()).slice(0, 2);
    setEliminatedOptions(toEliminate);
    setIs5050Used(true);
  };

  const resetProgressAll = () => {
    if (window.confirm('Czy na pewno chcesz zresetować statystyki nauki i historię odpowiedzi?')) {
      const empty: UserProgress = { masteredIds: [], reviewIds: [], history: {} };
      setProgress(empty);
      saveProgress(empty);
      setStreak(0);
      setBestStreak(0);
      setQuizScore({ correct: 0, total: 0 });
    }
  };

  const totalQuestions = QUIZ_QUESTIONS.length;
  const masteredCount = progress.masteredIds.length;
  const reviewCount = progress.reviewIds.length;
  const masteryPercentage = Math.round((masteredCount / totalQuestions) * 100);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      {/* HEADER SECTION */}
      <header className="mb-6 border border-line bg-linear-to-br from-panel to-ink2 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-amber font-semibold flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber animate-pulse"></span>
            FPTiTI · Trening i Weryfikacja Wiedzy
          </div>
          <button
            onClick={resetProgressAll}
            className="text-[12px] font-mono text-muted hover:text-red transition-colors px-2.5 py-1 rounded-md border border-line/60 hover:border-red/40 bg-ink/40"
            title="Wyczyść zapisane postępy"
          >
            Resetuj postęp
          </button>
        </div>

        <h1 className="text-[26px] md:text-[32px] font-bold tracking-tight text-txt">
          Fiszki i Quiz ABCD
        </h1>
        <p className="text-muted text-[14.5px] md:text-[15.5px] mt-1 max-w-2xl leading-relaxed">
          System powtórkowy przed egzaminem. Obejmuje pełną bazę 28 pytań ramowych, zadania obliczeniowe, wzory, 16 roczników arkuszy i reguły "kciuka".
        </p>

        {/* PROGRESS METRICS BAR */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-5 border-t border-line/50">
          <div className="bg-ink/60 border border-line rounded-xl p-3">
            <div className="text-muted text-[11.5px] font-mono uppercase tracking-wider">Opanowane</div>
            <div className="text-[20px] font-bold text-green font-mono flex items-baseline gap-1.5 mt-0.5">
              <span>{masteredCount}</span>
              <span className="text-muted text-[13px]">/ {totalQuestions}</span>
            </div>
            <div className="w-full bg-line/60 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-green h-full rounded-full transition-all duration-500"
                style={{ width: `${masteryPercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-ink/60 border border-line rounded-xl p-3">
            <div className="text-muted text-[11.5px] font-mono uppercase tracking-wider">Do powtórki</div>
            <div className="text-[20px] font-bold text-red font-mono mt-0.5">{reviewCount}</div>
            <div className="text-[11px] text-muted font-mono mt-2">
              {reviewCount > 0 ? 'Wymaga uwagi' : 'Wszystko zaliczone!'}
            </div>
          </div>

          <div className="bg-ink/60 border border-line rounded-xl p-3">
            <div className="text-muted text-[11.5px] font-mono uppercase tracking-wider">Seria (Streak)</div>
            <div className="text-[20px] font-bold text-amber font-mono mt-0.5">
              <span>{streak}</span>
            </div>
            <div className="text-[11px] text-muted font-mono mt-2">Rekord: {bestStreak} z rzędu</div>
          </div>

          <div className="bg-ink/60 border border-line rounded-xl p-3">
            <div className="text-muted text-[11.5px] font-mono uppercase tracking-wider">Skuteczność quizu</div>
            <div className="text-[20px] font-bold text-blue font-mono mt-0.5">
              {quizScore.total > 0 ? `${Math.round((quizScore.correct / quizScore.total) * 100)}%` : '—'}
            </div>
            <div className="text-[11px] text-muted font-mono mt-2">
              {quizScore.correct} / {quizScore.total} trafień
            </div>
          </div>
        </div>
      </header>

      {/* NAVIGATION TABS & FILTERS */}
      <div className="space-y-4 mb-6">
        {/* MODE TABS */}
        <div className="flex bg-panel border border-line rounded-xl p-1.5 gap-1.5 overflow-x-auto shadow-sm">
          <button
            onClick={() => setMode('flashcards')}
            className={`flex-1 min-w-35 py-2.5 px-4 rounded-lg font-mono text-[13px] font-bold transition-all flex items-center justify-center ${
              mode === 'flashcards'
                ? 'bg-amber text-ink shadow-md font-bold'
                : 'text-muted hover:text-txt hover:bg-ink2/60'
            }`}
          >
            Tryb Fiszek
          </button>

          <button
            onClick={() => setMode('quiz')}
            className={`flex-1 min-w-35 py-2.5 px-4 rounded-lg font-mono text-[13px] font-bold transition-all flex items-center justify-center ${
              mode === 'quiz'
                ? 'bg-amber text-ink shadow-md font-bold'
                : 'text-muted hover:text-txt hover:bg-ink2/60'
            }`}
          >
            Test ABCD
          </button>

          <button
            onClick={() => setMode('browse')}
            className={`flex-1 min-w-35 py-2.5 px-4 rounded-lg font-mono text-[13px] font-bold transition-all flex items-center justify-center ${
              mode === 'browse'
                ? 'bg-amber text-ink shadow-md font-bold'
                : 'text-muted hover:text-txt hover:bg-ink2/60'
            }`}
          >
            Baza Pytań ({QUIZ_QUESTIONS.length})
          </button>
        </div>

        {/* CATEGORY & MODIFIER FILTERS */}
        <div className="bg-panel border border-line rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 shadow-sm">
          <div className="flex flex-wrap items-center gap-1.5">
            {QUIZ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-[12px] font-mono transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-amber/20 text-amber border border-amber/50 font-bold'
                    : 'bg-ink2 border border-line text-muted hover:text-txt hover:border-line/80'
                }`}
              >
                <span className="font-mono text-[10.5px] opacity-70">[{cat.code}]</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t md:border-t-0 border-line/40 pt-2 md:pt-0 w-full md:w-auto">
            <button
              onClick={() => setOnlyTier1((prev) => !prev)}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-mono transition-all border flex items-center gap-1.5 ${
                onlyTier1
                  ? 'bg-green/20 text-green border-green/50 font-bold'
                  : 'bg-ink2 border-line text-muted hover:text-txt'
              }`}
            >
              Pewniaki (Tier 1)
            </button>

            <button
              onClick={toggleOnlyReview}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-mono transition-all border flex items-center gap-1.5 cursor-pointer ${
                onlyReview
                  ? 'bg-red/20 text-red border-red/50 font-bold'
                  : 'bg-ink2 border-line text-muted hover:text-txt'
              }`}
            >
              Do powtórki ({reviewCount})
            </button>

            <div className="flex items-center gap-1">
              <button
                onClick={toggleShuffle}
                className={`px-3 py-1.5 rounded-lg text-[12px] font-mono transition-all border flex items-center gap-1.5 cursor-pointer ${
                  isShuffled
                    ? 'bg-blue/20 text-blue border-blue/50 font-bold'
                    : 'bg-ink2 border-line text-muted hover:text-txt'
                }`}
                title="Włącz lub wyłącz losową kolejność pytań"
              >
                {isShuffled ? 'Losowo (aktywne)' : 'Losowo'}
              </button>
              {isShuffled && (
                <button
                  onClick={reshuffle}
                  className="px-2 py-1.5 rounded-lg text-[11px] font-mono transition-all border bg-blue/15 text-blue border-blue/40 hover:bg-blue/25 cursor-pointer"
                  title="Przetasuj pytania ponownie"
                >
                  Przetasuj
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* EMPTY STATE */}
      {filteredQuestions.length === 0 && (
        <div className="border border-line bg-panel rounded-2xl p-12 text-center my-8">
          <h3 className="text-xl font-bold text-txt">Brak pytań spełniających wybrane kryteria</h3>
          <p className="text-muted text-sm mt-1 max-w-md mx-auto">
            Zmień kategorię lub wyłącz filtry „Pewniaki” i „Do powtórki”, aby zobaczyć więcej zagadnień.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setOnlyTier1(false);
              setOnlyReview(false);
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 bg-amber text-ink rounded-lg font-mono text-xs font-bold hover:brightness-110 transition-all cursor-pointer"
          >
            Resetuj filtry
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 1: FLASHCARDS (3D FLIP)                                              */}
      {/* ========================================================================= */}
      {mode === 'flashcards' && currentCard && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-muted px-1">
            <span>
              Fiszka <b className="text-amber">{cardIndex + 1}</b> z {filteredQuestions.length}
            </span>
            <span className="hidden sm:inline">
              Skróty: <kbd className="bg-ink2 px-1.5 py-0.5 rounded border border-line">Spacja</kbd> obrót ·{' '}
              <kbd className="bg-ink2 px-1.5 py-0.5 rounded border border-line">←</kbd>{' '}
              <kbd className="bg-ink2 px-1.5 py-0.5 rounded border border-line">→</kbd> nawigacja
            </span>
          </div>

          {/* PROGRESS BAR */}
          <div className="w-full bg-panel border border-line h-2 rounded-full overflow-hidden">
            <div
              className="bg-amber h-full transition-all duration-300"
              style={{ width: `${((cardIndex + 1) / filteredQuestions.length) * 100}%` }}
            ></div>
          </div>

          {/* 3D FLASHCARD CONTAINER */}
          <div
            className="relative w-full min-h-95 md:min-h-110 cursor-pointer select-none perspective-1000"
            onClick={() => setIsFlipped((f) => !f)}
          >
            <div
              className={`w-full h-full min-h-95 md:min-h-110 transition-transform duration-500 transform-style-3d relative grid grid-cols-1 grid-rows-1 rounded-2xl ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* FRONT OF CARD */}
              <div
                className={`col-start-1 row-start-1 w-full h-full rounded-2xl border border-line bg-panel p-6 md:p-8 flex flex-col justify-between shadow-lg backface-hidden transition-all duration-300 ${
                  isFlipped ? 'pointer-events-none opacity-0 delay-0' : 'pointer-events-auto opacity-100 delay-150'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[11px] bg-amber/20 text-amber border border-amber/30 px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                      {currentCard.categoryLabel}
                    </span>
                    {currentCard.tier === 'tier1' && (
                      <span className="font-mono text-[11px] bg-green/20 text-green border border-green/30 px-2 py-0.5 rounded font-bold">
                        TIER 1 · Pewniak
                      </span>
                    )}
                  </div>

                  <Latex
                    content={currentCard.flashcardFront}
                    as="h2"
                    className="text-[20px] md:text-[25px] font-serif font-medium leading-relaxed text-txt mt-2"
                  />

                  {/* PROMPT HINTS ACCESSIBLE BEFORE FLIP */}
                  {currentCard.tips && currentCard.tips.length > 0 && (
                    <div className="mt-5" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFlashcardHintLevel((lvl) =>
                              lvl < currentCard.tips!.length ? lvl + 1 : 0
                            );
                          }}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber/30 bg-amber/10 hover:bg-amber/20 text-amber text-xs font-mono font-bold transition-all cursor-pointer"
                        >
                          <span>💡</span>
                          <span>
                            {flashcardHintLevel === 0
                              ? `Podpowiedź (1/${currentCard.tips.length})`
                              : flashcardHintLevel < currentCard.tips.length
                              ? `Kolejna podpowiedź (${flashcardHintLevel + 1}/${currentCard.tips.length})`
                              : `Zwiń podpowiedzi (${flashcardHintLevel}/${currentCard.tips.length})`}
                          </span>
                        </button>
                        {flashcardHintLevel > 0 && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setFlashcardHintLevel(0);
                            }}
                            className="text-[11px] font-mono text-muted hover:text-txt px-2 py-1.5 rounded border border-line hover:border-muted/40 cursor-pointer transition-colors"
                          >
                            Zwiń
                          </button>
                        )}
                      </div>

                      {flashcardHintLevel > 0 && (
                        <div className="mt-3 space-y-2">
                          {currentCard.tips.slice(0, flashcardHintLevel).map((tip, idx) => (
                            <div
                              key={`${currentCard.id}-fhint-${idx}`}
                              className="p-3 rounded-xl bg-ink2/90 border border-amber/25 text-[13px] text-txt flex items-start gap-2.5 shadow-sm animate-fadeIn"
                            >
                              <span className="font-mono text-[10px] text-amber font-bold shrink-0 bg-panel border border-amber/30 px-1.5 py-0.5 rounded mt-0.5">
                                {idx + 1}/{currentCard.tips!.length}
                              </span>
                              <Latex content={tip} className="text-txt text-xs md:text-sm leading-relaxed" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-line/60 flex items-center justify-between text-muted text-xs font-mono">
                  <span className="text-amber-soft">
                    Kliknij kartę lub wciśnij spację, aby odsłonić odpowiedź
                  </span>
                  <span>Obróć kartę ↻</span>
                </div>
              </div>

              {/* BACK OF CARD */}
              <div
                className={`col-start-1 row-start-1 w-full h-full rounded-2xl border border-amber/40 bg-panel p-6 md:p-8 flex flex-col justify-between shadow-lg shadow-amber/10 backface-hidden rotate-y-180 transition-all duration-300 ${
                  isFlipped ? 'pointer-events-auto opacity-100 delay-150' : 'pointer-events-none opacity-0 delay-0'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-line/50">
                    <span className="font-mono text-[11px] text-green font-bold">
                      Odpowiedź i kluczowe punkty:
                    </span>
                    {currentCard.relatedRoute && (
                      <Link
                        to={currentCard.relatedRoute}
                        onClick={(e) => e.stopPropagation()}
                        className="font-mono text-[11px] text-amber hover:underline flex items-center gap-1"
                      >
                        Pełna teoria ↗
                      </Link>
                    )}
                  </div>

                  <ul className="space-y-2.5 my-3 text-[14.5px] md:text-[15.5px] leading-relaxed text-txt font-sans">
                    {currentCard.flashcardBack.map((point, pIdx) => (
                      <li key={`${currentCard.id}-pt-${pIdx}`} className="flex items-start gap-2">
                        <span className="text-amber font-mono text-[13px] mt-1">•</span>
                        <Latex content={point} className="text-[14.5px] md:text-[15.5px] leading-relaxed text-txt font-sans" />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SELF EVALUATION BUTTONS */}
                <div
                  className="mt-6 pt-4 border-t border-line/60 flex flex-wrap items-center justify-between gap-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="text-[12px] font-mono text-muted">Jak oceniasz swoją znajomość?</div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => markReview(currentCard.id)}
                      className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-red/15 hover:bg-red/25 text-red border border-red/30 font-mono text-xs font-bold transition-all flex items-center justify-center cursor-pointer"
                    >
                      Jeszcze powtórzę
                    </button>
                    <button
                      onClick={() => markMastered(currentCard.id)}
                      className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-green/15 hover:bg-green/25 text-green border border-green/30 font-mono text-xs font-bold transition-all flex items-center justify-center cursor-pointer"
                    >
                      Opanowane
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION CONTROLS */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={prevCard}
              className="px-4 py-2.5 rounded-xl border border-line bg-panel hover:bg-ink2 text-txt font-mono text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>←</span> Poprzednia
            </button>

            <button
              onClick={() => setIsFlipped((f) => !f)}
              className="px-5 py-2.5 rounded-xl border border-line bg-panel2 hover:border-amber/60 text-amber font-mono text-xs font-bold transition-all flex items-center justify-center cursor-pointer"
            >
              {isFlipped ? 'Pokaż pytanie' : 'Obróć i sprawdź'}
            </button>

            <button
              onClick={nextCard}
              className="px-4 py-2.5 rounded-xl border border-line bg-panel hover:bg-ink2 text-txt font-mono text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer"
            >
              Następna <span>→</span>
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 2: MULTIPLE CHOICE QUIZ (ABCD)                                       */}
      {/* ========================================================================= */}
      {mode === 'quiz' && currentQuizQ && !quizFinished && (
        <div className="space-y-5">
          {/* QUIZ HEADER BAR */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted bg-panel border border-line rounded-xl px-4 py-2.5">
            <div className="flex items-center gap-3">
              <span>
                Pytanie <b className="text-amber">{quizIndex + 1}</b> z {filteredQuestions.length}
              </span>
              <span className="text-line">•</span>
              <span className="text-txt font-semibold">{currentQuizQ.categoryLabel}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleUse5050}
                disabled={is5050Used || isAnswerSubmitted}
                className={`px-2.5 py-1 rounded border text-[11px] font-mono transition-all ${
                  is5050Used || isAnswerSubmitted
                    ? 'opacity-40 border-line cursor-not-allowed text-muted'
                    : 'bg-amber/15 border-amber/40 text-amber hover:bg-amber/25 cursor-pointer font-bold'
                }`}
                title="Eliminuje 2 błędne odpowiedzi"
              >
                Koło 50:50 {is5050Used && '(użyte)'}
              </button>

              <button
                onClick={() => {
                  if (hintLevel < 3) {
                    setHintLevel((lvl) => lvl + 1);
                  }
                }}
                disabled={hintLevel >= 3}
                className={`px-3 py-1 rounded border text-[11px] font-mono transition-all flex items-center gap-1.5 ${
                  hintLevel >= 3
                    ? 'border-line bg-panel text-muted/60 cursor-default'
                    : 'bg-amber/15 border-amber/40 text-amber hover:bg-amber/25 cursor-pointer font-bold'
                }`}
                title={
                  hintLevel >= 3
                    ? 'Wszystkie 3 wskazówki zostały odkryte'
                    : `Kliknij, aby odkryć wskazówkę ${hintLevel + 1} z 3`
                }
              >
                <span>
                  {hintLevel === 0 && 'Wskazówka 1'}
                  {hintLevel === 1 && 'Wskazówka 2'}
                  {hintLevel === 2 && 'Wskazówka 3'}
                  {hintLevel >= 3 && 'Wskazówki odkryte (3/3)'}
                </span>
                {hintLevel < 3 && (
                  <span className="text-[10px] opacity-75 font-normal">({hintLevel}/3)</span>
                )}
              </button>

              {hintLevel > 0 && (
                <button
                  onClick={() => setHintLevel(0)}
                  className="px-2 py-1 rounded border border-line text-[10.5px] font-mono text-muted hover:text-txt cursor-pointer"
                  title="Zwiń wskazówki"
                >
                  Zwiń
                </button>
              )}
            </div>
          </div>

          {/* PROGRESS */}
          <div className="w-full bg-panel border border-line h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-amber h-full transition-all duration-300"
              style={{ width: `${((quizIndex + 1) / filteredQuestions.length) * 100}%` }}
            ></div>
          </div>

          {/* 3 PROGRESSIVE HINTS BOX */}
          {hintLevel > 0 && currentQuizQ.tips && (
            <div className="space-y-2.5 animate-fadeIn">
              {currentQuizQ.tips.slice(0, hintLevel).map((tipText, tIdx) => {
                const levels = [
                  {
                    title: 'Wskazówka 1 · Koncepcja i naprowadzenie',
                    badge: 'bg-amber/20 text-amber border-amber/40',
                    border: 'border-amber/30 bg-amber/5'
                  },
                  {
                    title: 'Wskazówka 2 · Zależność fizyczna i klucz',
                    badge: 'bg-blue/20 text-blue border-blue/40',
                    border: 'border-blue/30 bg-blue/5'
                  },
                  {
                    title: 'Wskazówka 3 · Bezpośrednie rozstrzygnięcie',
                    badge: 'bg-green/20 text-green border-green/40',
                    border: 'border-green/30 bg-green/5'
                  }
                ];
                const meta = levels[tIdx] || levels[0];

                return (
                  <div
                    key={`${currentQuizQ.id}-tip-${tIdx}`}
                    className={`p-4 rounded-xl border ${meta.border} text-[13.5px] shadow-sm animate-fadeIn flex flex-col gap-1.5`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-mono text-[10.5px] uppercase tracking-wider px-2.5 py-0.5 rounded border font-bold ${meta.badge}`}
                      >
                        {meta.title}
                      </span>
                      <span className="font-mono text-[11px] text-muted">
                        Poziom {tIdx + 1} z 3
                      </span>
                    </div>
                    <Latex content={tipText} className="text-txt text-[14.5px] leading-relaxed block mt-0.5" />
                  </div>
                );
              })}
            </div>
          )}

          {/* QUESTION BOX */}
          <div key={currentQuizQ.id} className="bg-panel border border-line rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[11px] bg-ink2 border border-line px-2 py-0.5 rounded text-muted font-bold">
                Nr {quizIndex + 1}
              </span>
              {currentQuizQ.tier === 'tier1' && (
                <span className="font-mono text-[11px] bg-green/20 text-green border border-green/30 px-2 py-0.5 rounded font-bold">
                  TIER 1 · Pewniak
                </span>
              )}
            </div>

            <Latex
              content={currentQuizQ.question}
              as="h2"
              className="text-[19px] md:text-[23px] font-serif font-medium leading-snug text-txt mb-6"
            />

            {/* ABCD OPTIONS */}
            <div className="space-y-3">
              {currentQuizQ.options.map((option, oIdx) => {
                const letter = ['A', 'B', 'C', 'D'][oIdx];
                const isEliminated = eliminatedOptions.includes(oIdx);
                const isSelected = selectedOption === oIdx;
                const isCorrect = oIdx === currentQuizQ.correctIndex;

                let buttonStyle = 'border-line bg-panel2/60 hover:bg-ink2 hover:border-amber/40 text-txt';
                let letterStyle = 'bg-ink border-line text-muted';

                if (isEliminated) {
                  buttonStyle = 'border-line/30 bg-ink/30 text-muted/30 cursor-not-allowed opacity-40 line-through';
                  letterStyle = 'bg-ink2/30 border-line/20 text-muted/30';
                } else if (isAnswerSubmitted) {
                  if (isCorrect) {
                    buttonStyle = 'border-green bg-green/10 text-txt ring-1 ring-green';
                    letterStyle = 'bg-green text-ink font-bold';
                  } else if (isSelected) {
                    buttonStyle = 'border-red bg-red/10 text-txt ring-1 ring-red';
                    letterStyle = 'bg-red text-ink font-bold';
                  } else {
                    buttonStyle = 'border-line/40 bg-panel/30 text-muted opacity-60';
                  }
                } else if (isSelected) {
                  buttonStyle = 'border-amber bg-amber/10 text-txt ring-1 ring-amber';
                  letterStyle = 'bg-amber text-ink font-bold';
                }

                return (
                  <button
                    key={`${currentQuizQ.id}-opt-${oIdx}`}
                    onClick={() => handleSelectOption(oIdx)}
                    disabled={isAnswerSubmitted || isEliminated}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-3.5 cursor-pointer ${buttonStyle}`}
                  >
                    <span
                      className={`font-mono text-[13px] font-bold w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border mt-0.5 ${letterStyle}`}
                    >
                      {letter}
                    </span>
                    <Latex content={option} className="text-[14.5px] md:text-[15.5px] leading-relaxed flex-1 font-sans" />
                    {isAnswerSubmitted && isCorrect && (
                      <span className="text-green text-xs font-mono font-bold shrink-0 mt-1">POPRAWNA</span>
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <span className="text-red text-xs font-mono font-bold shrink-0 mt-1">BŁĘDNA</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between gap-3">
              <div className="text-xs font-mono text-muted">
                {!isAnswerSubmitted
                  ? selectedOption !== null
                    ? 'Wybrano wariant. Kliknij Sprawdź, aby zatwierdzić.'
                    : 'Zaznacz odpowiedź A, B, C lub D'
                  : selectedOption === currentQuizQ.correctIndex
                  ? 'Odpowiedź poprawna'
                  : 'Błędna odpowiedź'}
              </div>

              {!isAnswerSubmitted ? (
                <button
                  onClick={handleQuizSubmit}
                  disabled={selectedOption === null}
                  className={`px-6 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                    selectedOption !== null
                      ? 'bg-amber text-ink hover:brightness-110 shadow-md cursor-pointer'
                      : 'bg-panel border border-line text-muted cursor-not-allowed opacity-50'
                  }`}
                >
                  Sprawdź odpowiedź
                </button>
              ) : (
                <button
                  onClick={handleNextQuizQuestion}
                  className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold bg-green text-ink hover:brightness-110 shadow-md cursor-pointer flex items-center gap-2"
                >
                  Następne pytanie <span>→</span>
                </button>
              )}
            </div>
          </div>

          {/* EXPLANATION BOX (SLIDES IN AFTER SUBMISSION) */}
          {isAnswerSubmitted && (
            <div className="border border-line bg-panel rounded-2xl p-6 shadow-md animate-fadeIn">
              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-line/50">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-amber">
                  Wyjaśnienie merytoryczne i analiza:
                </div>
                {currentQuizQ.relatedRoute && (
                  <Link
                    to={currentQuizQ.relatedRoute}
                    className="font-mono text-xs text-amber hover:underline flex items-center gap-1"
                  >
                    Zobacz pełne opracowanie tematu ↗
                  </Link>
                )}
              </div>

              <Latex
                content={currentQuizQ.explanation}
                as="p"
                className="text-[14.5px] md:text-[15px] leading-relaxed text-txt font-sans"
              />

              {currentQuizQ.tips && (
                <div className="mt-5 pt-4 border-t border-line/60">
                  <strong className="font-mono text-[11px] uppercase tracking-wider block text-amber mb-2.5">
                    Podsumowanie 3 poziomów wskazówek:
                  </strong>
                  <div className="space-y-2">
                    {currentQuizQ.tips.map((t, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-ink2/90 border border-line/80 flex items-start gap-2.5 text-[13px]">
                        <span className="font-mono text-[10.5px] font-bold text-amber bg-panel px-1.5 py-0.5 rounded border border-line shrink-0">
                          {idx + 1}/3
                        </span>
                        <Latex content={t} className="text-txt leading-relaxed" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* QUIZ FINISHED SUMMARY SCREEN */}
      {mode === 'quiz' && quizFinished && (
        <div className="border border-line bg-panel rounded-2xl p-8 md:p-12 text-center my-6 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-txt">Koniec sesji testowej</h2>
          <p className="text-muted text-sm mt-1 max-w-md mx-auto">
            Oto Twoje podsumowanie w tej serii pytań:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto my-6 text-left font-mono">
            <div className="p-4 rounded-xl bg-ink2 border border-line">
              <div className="text-muted text-xs">Twój wynik</div>
              <div className="text-2xl font-bold text-amber mt-1">
                {quizScore.correct} / {quizScore.total}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-ink2 border border-line">
              <div className="text-muted text-xs">Skuteczność</div>
              <div className="text-2xl font-bold text-green mt-1">
                {quizScore.total > 0 ? `${Math.round((quizScore.correct / quizScore.total) * 100)}%` : '0%'}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-ink2 border border-line col-span-2 sm:col-span-1">
              <div className="text-muted text-xs">Najdłuższa seria</div>
              <div className="text-2xl font-bold text-blue mt-1">{bestStreak}</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                setQuizIndex(0);
                setSelectedOption(null);
                setIsAnswerSubmitted(false);
                setQuizFinished(false);
                setQuizScore({ correct: 0, total: 0 });
              }}
              className="px-6 py-2.5 rounded-xl bg-amber text-ink font-mono text-xs font-bold hover:brightness-110 transition-all cursor-pointer"
            >
              Rozpocznij ten test od nowa
            </button>

            {reviewCount > 0 && (
              <button
                onClick={() => {
                  setOnlyReview(true);
                  setQuizIndex(0);
                  setSelectedOption(null);
                  setIsAnswerSubmitted(false);
                  setQuizFinished(false);
                }}
                className="px-6 py-2.5 rounded-xl bg-red/20 text-red border border-red/40 font-mono text-xs font-bold hover:bg-red/30 transition-all cursor-pointer"
              >
                Powtórz tylko błędne ({reviewCount})
              </button>
            )}

            <button
              onClick={() => setMode('flashcards')}
              className="px-5 py-2.5 rounded-xl border border-line bg-panel2 text-txt font-mono text-xs font-semibold hover:border-amber/40 transition-all cursor-pointer"
            >
              Przejdź do trybu fiszek
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 3: BROWSE ALL QUESTIONS & REVISION TABLE                             */}
      {/* ========================================================================= */}
      {mode === 'browse' && (
        <div className="space-y-4">
          {/* SEARCH BOX */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Szukaj pojęcia, wzoru, zjawiska (np. Maxwell, GMR, Brewster, Carson, NAND)..."
              className="w-full bg-panel border border-line rounded-xl px-4 py-3 pl-10 text-[14.5px] text-txt placeholder:text-muted focus:outline-none focus:border-amber transition-colors font-sans shadow-sm"
            />
            <svg
              className="absolute left-3.5 top-3.5 text-muted pointer-events-none"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              stroke="currentColor"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3 text-muted hover:text-txt text-xs font-mono bg-ink2 px-1.5 py-0.5 rounded border border-line"
              >
                Wyczyść
              </button>
            )}
          </div>

          <div className="text-xs font-mono text-muted px-1">
            Znaleziono: <b className="text-amber">{filteredQuestions.length}</b> zagadnień
          </div>

          {/* QUESTIONS ACCORDION LIST */}
          <div className="space-y-3">
            {filteredQuestions.map((q, idx) => {
              const isMastered = progress.masteredIds.includes(q.id);
              const isReview = progress.reviewIds.includes(q.id);

              return (
                <details
                  key={q.id}
                  className="group border border-line bg-panel rounded-xl overflow-hidden transition-colors hover:border-line/90"
                >
                  <summary className="p-4 md:p-5 flex items-start justify-between gap-3 cursor-pointer list-none select-none">
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-[12px] font-bold text-muted bg-ink2 px-2 py-0.5 rounded border border-line mt-0.5 shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-mono text-[10px] bg-amber/20 text-amber px-2 py-0.2 rounded uppercase font-bold tracking-wider">
                            {q.categoryLabel}
                          </span>
                          {q.tier === 'tier1' && (
                            <span className="font-mono text-[10px] bg-green/20 text-green px-1.5 py-0.2 rounded font-bold">
                              TIER 1
                            </span>
                          )}
                          {isMastered && (
                            <span className="font-mono text-[10px] text-green font-bold">Opanowane</span>
                          )}
                          {isReview && (
                            <span className="font-mono text-[10px] text-red font-bold">Do powtórki</span>
                          )}
                        </div>
                        <Latex
                          content={q.question}
                          as="h3"
                          className="text-[15.5px] font-medium text-txt leading-snug group-hover:text-amber transition-colors"
                        />
                      </div>
                    </div>
                    <span className="text-muted group-open:rotate-180 transition-transform font-mono text-xs shrink-0 mt-1">
                      ▼
                    </span>
                  </summary>

                  <div className="px-5 pb-5 pt-1 border-t border-line/40 bg-ink2/40 space-y-3 text-[14.5px]">
                    <div className="p-3 rounded-lg bg-green/10 border border-green/30 text-txt">
                      <strong className="font-mono text-[11.5px] text-green uppercase tracking-wider block mb-1">
                        Prawidłowa odpowiedź:
                      </strong>
                      <Latex content={q.options[q.correctIndex]} className="text-txt" />
                    </div>

                    <div className="text-muted leading-relaxed">
                      <strong className="font-mono text-[11.5px] text-amber uppercase tracking-wider block mb-1">
                        Wyjaśnienie:
                      </strong>
                      <Latex content={q.explanation} className="text-muted leading-relaxed" />
                    </div>

                    {q.tips && (
                      <div className="p-3 rounded-lg bg-panel border border-line space-y-2">
                        <strong className="font-mono text-[11px] text-amber uppercase tracking-wider block">
                          Wskazówki pomocnicze (od koncepcji do rozstrzygnięcia):
                        </strong>
                        {q.tips.map((t, tIdx) => (
                          <div key={tIdx} className="flex items-start gap-2 text-[13px]">
                            <span className="font-mono text-[10px] text-amber bg-ink2 px-1.5 py-0.5 rounded border border-line shrink-0 font-bold">
                              Krok {tIdx + 1}
                            </span>
                            <Latex content={t} className="text-muted leading-relaxed" />
                          </div>
                        ))}
                      </div>
                    )}

                    {q.relatedRoute && (
                      <div className="pt-1">
                        <Link
                          to={q.relatedRoute}
                          className="font-mono text-[12px] text-amber hover:underline inline-flex items-center gap-1"
                        >
                          Zobacz rozdział w serwisie ↗
                        </Link>
                      </div>
                    )}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  Presentation, 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  Minimize, 
  Download, 
  Plus, 
  Trash2, 
  CheckCircle, 
  HelpCircle, 
  Lightbulb, 
  Sparkles, 
  Calculator,
  Compass
} from 'lucide-react';
import { SlideItem } from '../types';
import { exportHtmlSlides } from '../utils/exportUtils';
import { MathRenderer } from './MathWorkspace/MathRenderer';
import { GraphBlock } from './MathWorkspace/GraphBlock';

interface SlidesViewProps {
  slides: SlideItem[];
  setSlides: React.Dispatch<React.SetStateAction<SlideItem[]>>;
  lessonTitle: string;
}

export const SlidesView: React.FC<SlidesViewProps> = ({ slides, setSlides, lessonTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentSlide = slides[currentIndex] || slides[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        setCurrentIndex(prev => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length, isFullscreen]);

  useEffect(() => {
    setSelectedQuizOption(null);
    setShowExplanation(false);
  }, [currentIndex]);

  const handleAddSlide = () => {
    const newSlide: SlideItem = {
      id: `slide-${Date.now()}`,
      title: 'SLIDE BỔ SUNG: VÍ DỤ / LUYỆN TẬP',
      phaseTag: 'Hình thành kiến thức',
      layout: 'formula',
      contentLeft: 'Nhập nội dung giảng dạy trực quan tại đây...',
      latexFormula: 'ax + by = c',
      speakerNotes: 'Ghi chú cho giáo viên khi trình chiếu slide này...'
    };
    setSlides([...slides, newSlide]);
    setCurrentIndex(slides.length);
  };

  const handleDeleteSlide = (index: number) => {
    if (slides.length <= 1) return;
    const next = slides.filter((_, i) => i !== index);
    setSlides(next);
    setCurrentIndex(prev => Math.min(prev, next.length - 1));
  };

  return (
    <div className={`space-y-6 ${isFullscreen ? 'fixed inset-0 z-50 bg-slate-950 p-6 overflow-y-auto space-y-0 text-white' : ''}`}>
      {/* Top Banner Control */}
      {!isFullscreen && (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1">
                <Presentation className="w-3.5 h-3.5" />
                Slide Bài Giảng Trực Quan
              </span>
              <span className="text-xs text-slate-500 font-medium">Toán 9 · Dẫn dắt Storytelling</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900 mt-1 tracking-tight">
              {lessonTitle}
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Bộ trình chiếu gồm {slides.length} trang · Sử dụng phím mũi tên [←] [→] để chuyển trang.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIsFullscreen(true)}
              className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
            >
              <Maximize className="w-4 h-4" />
              <span>Trình chiếu Fullscreen</span>
            </button>

            <button
              onClick={() => exportHtmlSlides(slides, lessonTitle)}
              className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
            >
              <Download className="w-4 h-4" />
              <span>Xuất Slide HTML</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Slide Presentation Stage */}
      <div className={`bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800 flex flex-col justify-between ${isFullscreen ? 'h-full' : 'min-h-[520px]'}`}>
        {/* Slide Header */}
        <div className="p-6 border-b border-slate-800/80 flex items-center justify-between bg-slate-950/40">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {currentSlide?.phaseTag}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Slide {currentIndex + 1} / {slides.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {isFullscreen && (
              <button
                onClick={() => setIsFullscreen(false)}
                className="px-3 py-1 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1"
              >
                <Minimize className="w-3.5 h-3.5" />
                <span>Thoát</span>
              </button>
            )}
          </div>
        </div>

        {/* Slide Body Stage */}
        <div className="p-8 md:p-12 my-auto flex flex-col justify-center items-center text-center max-w-4xl mx-auto w-full">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
            {currentSlide?.title}
          </h2>

          {/* Problem Intro Layout */}
          {currentSlide?.problemIntro && (
            <div className="w-full bg-slate-800/80 p-6 rounded-2xl border border-amber-500/30 text-amber-100 font-serif italic text-base md:text-lg mb-6 leading-relaxed whitespace-pre-line text-center shadow-inner">
              {currentSlide.problemIntro}
            </div>
          )}

          {/* Formula Display Layout */}
          {currentSlide?.latexFormula && (
            <div className="my-4 p-5 rounded-2xl bg-slate-950/80 border border-blue-500/30 text-blue-200 text-lg md:text-xl w-full text-center overflow-x-auto shadow-md">
              <MathRenderer latex={currentSlide.latexFormula} block />
            </div>
          )}

          {/* Solution steps layout */}
          {currentSlide?.steps && (
            <div className="w-full space-y-3 my-4 text-left">
              {currentSlide.steps.map(st => (
                <div key={st.id} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-slate-200 space-y-1">
                  <div className="font-bold text-blue-400">{st.label}</div>
                  <p className="text-slate-300 text-xs">{st.explanation}</p>
                  {st.formulaLatex && (
                    <div className="pt-1 overflow-x-auto">
                      <MathRenderer latex={st.formulaLatex} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Graph layout */}
          {currentSlide?.layout === 'graph' && (
            <div className="my-4 text-slate-900 w-full flex justify-center">
              <GraphBlock />
            </div>
          )}

          {/* Quiz layout */}
          {currentSlide?.quizQuestion && (
            <div className="w-full bg-slate-800/90 p-6 rounded-2xl border border-slate-700 text-left my-4 space-y-4">
              <div className="text-base font-semibold text-white">
                {currentSlide.quizQuestion.question}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentSlide.quizQuestion.options.map((opt, i) => {
                  const isCorrect = i === currentSlide.quizQuestion?.correctIndex;
                  const isSelected = selectedQuizOption === i;
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedQuizOption(i);
                        setShowExplanation(true);
                      }}
                      className={`p-3 rounded-xl border text-xs font-medium text-left transition ${
                        isSelected
                          ? isCorrect 
                            ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200' 
                            : 'bg-rose-950/60 border-rose-500 text-rose-200'
                          : 'bg-slate-900 border-slate-700 text-slate-200 hover:border-slate-500'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {showExplanation && (
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-blue-500/30 text-xs text-blue-200">
                  <strong>Giải thích toán học:</strong> {currentSlide.quizQuestion.explanation}
                </div>
              )}
            </div>
          )}

          {/* Cards layout */}
          {currentSlide?.cards && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left my-4">
              {currentSlide.cards.map((c, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                  <h4 className="text-sm font-bold text-amber-300">{c.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Bullets text */}
          {currentSlide?.bullets && (
            <ul className="space-y-2 text-left text-xs md:text-sm text-slate-300 max-w-xl mx-auto my-3">
              {currentSlide.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-amber-400 mt-1">✦</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Slide Footer with Speaker Notes & Controls */}
        <div className="p-4 md:p-6 border-t border-slate-800/80 bg-slate-950/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-xs text-slate-400 max-w-xl">
            <span className="font-bold text-amber-400">Ghi chú sư phạm (Speaker Notes):</span>{' '}
            <span>{currentSlide?.speakerNotes}</span>
          </div>

          <div className="flex items-center gap-2 self-end md:self-center">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white transition"
              title="Slide trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono font-bold text-slate-300 px-2">
              {currentIndex + 1} / {slides.length}
            </span>

            <button
              onClick={() => setCurrentIndex(prev => Math.min(slides.length - 1, prev + 1))}
              disabled={currentIndex === slides.length - 1}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white transition"
              title="Slide kế tiếp"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Thumbnails & Editor Bar */}
      {!isFullscreen && (
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Danh sách các Slide ({slides.length} trang)
            </span>
            <button
              onClick={handleAddSlide}
              className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-xs font-semibold flex items-center gap-1 hover:bg-blue-100"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Thêm slide mới</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
            {slides.map((s, idx) => (
              <div
                key={s.id}
                onClick={() => setCurrentIndex(idx)}
                className={`p-2 rounded-xl border text-center cursor-pointer transition relative group ${
                  idx === currentIndex 
                    ? 'border-blue-500 bg-blue-50/50 shadow-xs' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="text-[10px] font-mono text-slate-400 mb-1">Trang {idx + 1}</div>
                <div className="text-[11px] font-bold text-slate-800 truncate" title={s.title}>
                  {s.title}
                </div>
                {slides.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteSlide(idx);
                    }}
                    className="absolute top-1 right-1 p-1 rounded bg-rose-50 text-rose-600 opacity-0 group-hover:opacity-100 transition"
                    title="Xóa slide"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

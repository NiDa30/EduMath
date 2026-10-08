import React, { useState } from 'react';
import { 
  Menu, 
  Calculator, 
  Presentation, 
  CheckSquare, 
  Grid3X3, 
  Share2, 
  Download, 
  Printer, 
  Sparkles, 
  GraduationCap, 
  Clock, 
  CheckCircle2,
  FileText,
  HelpCircle,
  Home,
  Award
} from 'lucide-react';
import { 
  ActiveModule, 
  AppState, 
  LessonPlan5512, 
  Exam7991Data, 
  SlideItem, 
  MathLesson, 
  MathQuestionItem, 
  SolutionScoringGuide 
} from './types';
import { initialAppState } from './data/presets';
import { Sidebar } from './components/Sidebar';
import { TeacherDashboard } from './components/TeacherDashboard';
import { MathWorkspace } from './components/MathWorkspace/MathWorkspace';
import { QuestionBuilderView } from './components/QuestionBuilderView';
import { SolutionScoringBuilder } from './components/MathWorkspace/SolutionScoringBuilder';
import { KhbdView } from './components/KhbdView';
import { SlidesView } from './components/SlidesView';
import { Exam7991View } from './components/Exam7991View';
import { MatrixView } from './components/MatrixView';
import { ExportHandoverView } from './components/ExportHandoverView';
import { TeacherFooter } from './components/TeacherFooter';
import { exportWordKHBD, exportWordExam7991 } from './utils/exportUtils';
import { teacherIdentity } from './data/teacherIdentity';

export default function App() {
  const [appState, setAppState] = useState<AppState>(initialAppState);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentLesson = appState.lessons.find(l => l.id === appState.currentLessonId) || appState.lessons[0];

  // Updaters
  const setActiveModule = (mod: ActiveModule) => {
    setAppState(prev => ({
      ...prev,
      activeModule: mod,
      lastUpdated: new Date().toISOString()
    }));
  };

  const setKhbd = (value: React.SetStateAction<LessonPlan5512>) => {
    setAppState(prev => ({
      ...prev,
      khbd: typeof value === 'function' ? value(prev.khbd) : value,
      lastUpdated: new Date().toISOString()
    }));
  };

  const setExam = (value: React.SetStateAction<Exam7991Data>) => {
    setAppState(prev => ({
      ...prev,
      exam: typeof value === 'function' ? value(prev.exam) : value,
      lastUpdated: new Date().toISOString()
    }));
  };

  const setSlides = (value: React.SetStateAction<SlideItem[]>) => {
    setAppState(prev => ({
      ...prev,
      slides: typeof value === 'function' ? value(prev.slides) : value,
      lastUpdated: new Date().toISOString()
    }));
  };

  const setQuestions = (value: React.SetStateAction<MathQuestionItem[]>) => {
    setAppState(prev => ({
      ...prev,
      questions: typeof value === 'function' ? value(prev.questions) : value,
      lastUpdated: new Date().toISOString()
    }));
  };

  const setScoringGuide = (value: React.SetStateAction<SolutionScoringGuide>) => {
    setAppState(prev => ({
      ...prev,
      scoringGuide: typeof value === 'function' ? value(prev.scoringGuide) : value,
      lastUpdated: new Date().toISOString()
    }));
  };

  const handleUpdateCurrentLesson = (updated: Partial<MathLesson>) => {
    setAppState(prev => ({
      ...prev,
      lessons: prev.lessons.map(l => l.id === prev.currentLessonId ? { ...l, ...updated } : l),
      lastUpdated: new Date().toISOString()
    }));
  };

  const handleSelectLesson = (lessonId: string) => {
    const target = appState.lessons.find(l => l.id === lessonId);
    if (!target) return;

    setAppState(prev => ({
      ...prev,
      currentLessonId: lessonId,
      khbd: {
        ...prev.khbd,
        info: {
          ...prev.khbd.info,
          lessonTitle: `${target.title.toUpperCase()}`
        }
      },
      lastUpdated: new Date().toISOString()
    }));
  };

  // Cross-module connectors
  const handleAddSlideFromBlock = (title: string, latex?: string, content?: string) => {
    const newSlide: SlideItem = {
      id: `slide-${Date.now()}`,
      title: title.toUpperCase(),
      phaseTag: 'Hình thành kiến thức',
      layout: latex ? 'formula' : 'single',
      contentLeft: content || 'Nội dung kiến thức toán học trọng tâm.',
      latexFormula: latex,
      speakerNotes: 'Hướng dẫn học sinh phân tích và ghi chép nội dung trọng tâm.'
    };
    setSlides(prev => [...prev, newSlide]);
    setActiveModule('slides');
  };

  const handleAddQuestionFromBlock = (content: string, latex?: string) => {
    const newQ: MathQuestionItem = {
      id: `mq-${Date.now()}`,
      code: `C${appState.questions.length + 1}`,
      type: 'multiple_choice',
      level: 'NB',
      competency: 'Tư duy và lập luận toán học',
      content: `${content}${latex ? `\n$$${latex}$$` : ''}`,
      options: {
        A: 'Phương án A',
        B: 'Phương án B',
        C: 'Phương án C',
        D: 'Phương án D'
      },
      correctOption: 'A',
      points: 0.25,
      linkedPart: 'partI'
    };
    setQuestions(prev => [...prev, newQ]);
    setActiveModule('question_builder');
  };

  const handleAddSlideFromActivity = (actName: string, content: string) => {
    const newSlide: SlideItem = {
      id: `slide-${Date.now()}`,
      title: actName.toUpperCase(),
      phaseTag: 'Hình thành kiến thức',
      layout: 'single',
      contentLeft: content,
      speakerNotes: 'Điều phối hoạt động nhóm và phân bổ thời gian thực hiện.'
    };
    setSlides(prev => [...prev, newSlide]);
    setActiveModule('slides');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans antialiased">
      {/* Top Bar (Sticky Global Navigation) */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 md:px-6 py-2.5 flex items-center justify-between shadow-2xs">
        {/* Left: Mobile trigger & Subject Context */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <Calculator className="w-4 h-4" />
            </div>
            <span className="font-bold text-sm tracking-tight text-slate-900">{teacherIdentity.productName}</span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-800 border border-blue-200">
              {currentLesson.grade}
            </span>
          </div>
        </div>

        {/* Center: Current Lesson Breadcrumb */}
        <div className="hidden md:flex items-center gap-2 text-xs text-slate-600 font-medium">
          <span className="text-slate-400">/</span>
          <span className="text-slate-500">{currentLesson.chapter}</span>
          <span className="text-slate-400">/</span>
          <span className="font-bold text-slate-900 max-w-xs truncate" title={currentLesson.title}>
            {currentLesson.title}
          </span>
        </div>

        {/* Right: Auto-save status & Quick export */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Đã lưu (v2.0-MATH)
          </span>

          <button
            onClick={() => exportWordKHBD(appState.khbd)}
            className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hidden sm:flex items-center gap-1 border border-slate-200"
            title="Xuất nhanh Word KHBD"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Word 5512</span>
          </button>

          <button
            onClick={() => exportWordExam7991(appState.exam, appState.khbd)}
            className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hidden sm:flex items-center gap-1 border border-slate-200"
            title="Xuất nhanh Word Đề thi"
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Đề 7991</span>
          </button>

          <button
            onClick={() => window.print()}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100"
            title="In A4"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          activeModule={appState.activeModule}
          setActiveModule={setActiveModule}
          lessons={appState.lessons}
          currentLessonId={appState.currentLessonId}
          onSelectLesson={handleSelectLesson}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Mobile Backdrop */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-xs lg:hidden"
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 lg:pl-72 overflow-y-auto flex flex-col justify-between">
          <div className="p-4 md:p-6 lg:p-8 flex-1">
            <div className="max-w-7xl mx-auto space-y-6">
              {appState.activeModule === 'dashboard' && (
                <TeacherDashboard
                  lessons={appState.lessons}
                  currentLessonId={appState.currentLessonId}
                  onSelectLesson={handleSelectLesson}
                  setActiveModule={setActiveModule}
                  khbd={appState.khbd}
                />
              )}

              {appState.activeModule === 'workspace' && (
                <MathWorkspace
                  lesson={currentLesson}
                  onUpdateLesson={handleUpdateCurrentLesson}
                  setActiveModule={setActiveModule}
                  onAddSlideFromBlock={handleAddSlideFromBlock}
                  onAddQuestionFromBlock={handleAddQuestionFromBlock}
                />
              )}

              {appState.activeModule === 'khbd' && (
                <KhbdView
                  khbd={appState.khbd}
                  setKhbd={setKhbd}
                  setActiveModule={setActiveModule}
                  onAddSlideFromActivity={handleAddSlideFromActivity}
                />
              )}

              {appState.activeModule === 'question_builder' && (
                <QuestionBuilderView
                  questions={appState.questions}
                  setQuestions={setQuestions}
                  exam={appState.exam}
                  setExam={setExam}
                  setActiveModule={setActiveModule}
                />
              )}

              {appState.activeModule === 'solution_scoring' && (
                <SolutionScoringBuilder
                  guide={appState.scoringGuide}
                  setGuide={setScoringGuide}
                />
              )}

              {appState.activeModule === 'slides' && (
                <SlidesView
                  slides={appState.slides}
                  setSlides={setSlides}
                  lessonTitle={currentLesson.title}
                />
              )}

              {appState.activeModule === 'exam' && (
                <Exam7991View
                  exam={appState.exam}
                  setExam={setExam}
                  khbd={appState.khbd}
                />
              )}

              {appState.activeModule === 'matrix' && (
                <MatrixView
                  exam={appState.exam}
                  khbd={appState.khbd}
                />
              )}

              {appState.activeModule === 'export_handover' && (
                <ExportHandoverView
                  appState={appState}
                  onRestoreState={(restored) => setAppState(restored)}
                />
              )}
            </div>
          </div>

          {/* Full Teacher Identity Footer for Dashboard and Export Handover */}
          {(appState.activeModule === 'dashboard' || appState.activeModule === 'export_handover') && (
            <TeacherFooter />
          )}
        </main>
      </div>
    </div>
  );
}

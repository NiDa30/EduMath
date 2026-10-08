import React, { useState } from 'react';
import { 
  HelpCircle, 
  Plus, 
  Trash2, 
  Sparkles, 
  CheckCircle2, 
  CheckSquare, 
  Grid3X3, 
  FileText, 
  ArrowRight, 
  Filter, 
  Eye, 
  Edit3,
  Calculator,
  FunctionSquare
} from 'lucide-react';
import { 
  MathQuestionItem, 
  QuestionType, 
  CognitiveLevel, 
  Exam7991Data, 
  ActiveModule 
} from '../types';
import { MathRenderer } from './MathWorkspace/MathRenderer';

interface QuestionBuilderViewProps {
  questions: MathQuestionItem[];
  setQuestions: React.Dispatch<React.SetStateAction<MathQuestionItem[]>>;
  exam: Exam7991Data;
  setExam: React.Dispatch<React.SetStateAction<Exam7991Data>>;
  setActiveModule: (m: ActiveModule) => void;
  defaultPassage?: string;
}

export const QuestionBuilderView: React.FC<QuestionBuilderViewProps> = ({
  questions,
  setQuestions,
  exam,
  setExam,
  setActiveModule,
  defaultPassage = ''
}) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [showAddForm, setShowAddForm] = useState(false);

  // New question form state
  const [newType, setNewType] = useState<QuestionType>('multiple_choice');
  const [newLevel, setNewLevel] = useState<CognitiveLevel>('NB');
  const [newCompetency, setNewCompetency] = useState('Tư duy và lập luận toán học');
  const [newContent, setNewContent] = useState('');
  const [newPoints, setNewPoints] = useState<number>(0.25);
  const [newExplanation, setNewExplanation] = useState('');
  
  // Options for multiple choice
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [correctOption, setCorrectOption] = useState<'A' | 'B' | 'C' | 'D'>('A');

  const filteredQuestions = questions.filter(q => {
    if (filterType !== 'all' && q.type !== filterType) return false;
    if (filterLevel !== 'all' && q.level !== filterLevel) return false;
    return true;
  });

  const handleCreateQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContent.trim()) return;

    const newQ: MathQuestionItem = {
      id: `mq-${Date.now()}`,
      code: `C${questions.length + 1}`,
      type: newType,
      level: newLevel,
      competency: newCompetency,
      content: newContent,
      points: newPoints,
      explanation: newExplanation,
      options: newType === 'multiple_choice' ? {
        A: optA || 'Phương án A',
        B: optB || 'Phương án B',
        C: optC || 'Phương án C',
        D: optD || 'Phương án D'
      } : undefined,
      correctOption: newType === 'multiple_choice' ? correctOption : undefined,
      linkedPart: newType === 'multiple_choice' ? 'partI' : newType === 'true_false' ? 'partII' : newType === 'short_answer' ? 'partIII' : 'partIV'
    };

    setQuestions([...questions, newQ]);
    setShowAddForm(false);
    setNewContent('');
  };

  const handleDeleteQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
              <Calculator className="w-3.5 h-3.5" />
              Ngân hàng Khảo thí Toán 9
            </span>
            <span className="text-xs text-slate-500 font-medium">Phân loại theo Ma trận & Năng lực</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mt-1 tracking-tight">
            Ngân Hàng Câu Hỏi & Bài Tập Toán Học
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Tổng cộng <span className="font-semibold text-slate-800">{questions.length} câu hỏi</span> sẵn sàng đưa vào đề kiểm tra 7991.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
          >
            <Plus className="w-4 h-4" />
            <span>{showAddForm ? 'Đóng form tạo' : 'Tạo câu hỏi mới'}</span>
          </button>
          <button
            onClick={() => setActiveModule('exam')}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
          >
            <span>Sang Đề thi 7991</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add Question Form Modal/Box */}
      {showAddForm && (
        <form onSubmit={handleCreateQuestion} className="bg-white p-6 rounded-2xl border border-blue-200 shadow-md space-y-4">
          <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            Tạo Câu Hỏi Mới Vào Ngân Hàng
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Dạng câu hỏi:</label>
              <select
                value={newType}
                onChange={(e) => setNewType(e.target.value as QuestionType)}
                className="w-full text-xs p-2 rounded-xl border border-slate-200 bg-slate-50"
              >
                <option value="multiple_choice">Nhiều lựa chọn (Phần I)</option>
                <option value="true_false">Đúng / Sai 4 ý (Phần II)</option>
                <option value="short_answer">Trả lời ngắn (Phần III)</option>
                <option value="essay">Tự luận bài toán thực tế (Phần IV)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Mức độ nhận thức:</label>
              <select
                value={newLevel}
                onChange={(e) => setNewLevel(e.target.value as CognitiveLevel)}
                className="w-full text-xs p-2 rounded-xl border border-slate-200 bg-slate-50"
              >
                <option value="NB">Biết (Nhận biết)</option>
                <option value="TH">Hiểu (Thông hiểu)</option>
                <option value="VD">Vận dụng</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Năng lực đặc thù:</label>
              <select
                value={newCompetency}
                onChange={(e) => setNewCompetency(e.target.value)}
                className="w-full text-xs p-2 rounded-xl border border-slate-200 bg-slate-50"
              >
                <option value="Tư duy và lập luận toán học">Tư duy và lập luận</option>
                <option value="Mô hình hóa toán học">Mô hình hóa toán học</option>
                <option value="Giải quyết vấn đề toán học">Giải quyết vấn đề</option>
                <option value="Giao tiếp toán học">Giao tiếp toán học</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Điểm số:</label>
              <input
                type="number"
                step="0.25"
                value={newPoints}
                onChange={(e) => setNewPoints(parseFloat(e.target.value) || 0.25)}
                className="w-full text-xs p-2 rounded-xl border border-slate-200 bg-slate-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Đề bài (hỗ trợ nhập mã LaTeX):</label>
            <textarea
              rows={3}
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="Nhập đề bài toán..."
              className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {newType === 'multiple_choice' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">Phương án A:</label>
                <input type="text" value={optA} onChange={e => setOptA(e.target.value)} className="w-full text-xs p-2 rounded-lg border bg-white" placeholder="Đáp án A" />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">Phương án B:</label>
                <input type="text" value={optB} onChange={e => setOptB(e.target.value)} className="w-full text-xs p-2 rounded-lg border bg-white" placeholder="Đáp án B" />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">Phương án C:</label>
                <input type="text" value={optC} onChange={e => setOptC(e.target.value)} className="w-full text-xs p-2 rounded-lg border bg-white" placeholder="Đáp án C" />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">Phương án D:</label>
                <input type="text" value={optD} onChange={e => setOptD(e.target.value)} className="w-full text-xs p-2 rounded-lg border bg-white" placeholder="Đáp án D" />
              </div>
              <div className="md:col-span-2 flex items-center gap-3 pt-2">
                <span className="text-xs font-semibold text-slate-700">Đáp án đúng:</span>
                {(['A', 'B', 'C', 'D'] as const).map(op => (
                  <label key={op} className="flex items-center gap-1 text-xs cursor-pointer">
                    <input type="radio" name="correct" checked={correctOption === op} onChange={() => setCorrectOption(op)} />
                    <span className="font-bold">{op}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Lời giải / Hướng dẫn giải chi tiết:</label>
            <textarea
              rows={2}
              value={newExplanation}
              onChange={(e) => setNewExplanation(e.target.value)}
              placeholder="Giải thích cách giải bài toán..."
              className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 rounded-xl text-xs font-medium border border-slate-200 text-slate-600 hover:bg-slate-50"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm"
            >
              Lưu câu hỏi
            </button>
          </div>
        </form>
      )}

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-semibold text-slate-600">Bộ lọc:</span>

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="text-xs p-1.5 rounded-lg border border-slate-200 bg-slate-50"
          >
            <option value="all">Tất cả dạng câu</option>
            <option value="multiple_choice">Nhiều lựa chọn</option>
            <option value="true_false">Đúng / Sai</option>
            <option value="short_answer">Trả lời ngắn</option>
            <option value="essay">Tự luận</option>
          </select>

          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
            className="text-xs p-1.5 rounded-lg border border-slate-200 bg-slate-50"
          >
            <option value="all">Tất cả mức độ</option>
            <option value="NB">Biết (40%)</option>
            <option value="TH">Hiểu (30%)</option>
            <option value="VD">Vận dụng (30%)</option>
          </select>
        </div>

        <span className="text-xs text-slate-500">
          Hiển thị: <strong className="text-slate-800">{filteredQuestions.length}</strong> / {questions.length} câu
        </span>
      </div>

      {/* Questions list */}
      <div className="space-y-4">
        {filteredQuestions.map((q, idx) => {
          const typeBadgeColor = 
            q.type === 'multiple_choice' ? 'bg-blue-50 text-blue-700 border-blue-200' :
            q.type === 'true_false' ? 'bg-purple-50 text-purple-700 border-purple-200' :
            q.type === 'short_answer' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
            'bg-amber-50 text-amber-700 border-amber-200';

          const levelBadgeColor =
            q.level === 'NB' ? 'bg-slate-100 text-slate-700' :
            q.level === 'TH' ? 'bg-blue-100 text-blue-800' :
            'bg-rose-100 text-rose-800';

          return (
            <div key={q.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
                    {q.code || `C${idx + 1}`}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${typeBadgeColor}`}>
                    {q.type === 'multiple_choice' ? 'Nhiều lựa chọn' : q.type === 'true_false' ? 'Đúng / Sai' : q.type === 'short_answer' ? 'Trả lời ngắn' : 'Tự luận'}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${levelBadgeColor}`}>
                    Mức: {q.level === 'NB' ? 'Biết' : q.level === 'TH' ? 'Hiểu' : 'Vận dụng'}
                  </span>
                  {q.competency && (
                    <span className="text-[11px] text-slate-500 hidden sm:inline">
                      · {q.competency}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                    {q.points} đ
                  </span>
                  <button
                    onClick={() => handleDeleteQuestion(q.id)}
                    className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Question content */}
              <div className="text-xs md:text-sm text-slate-900 leading-relaxed">
                {q.content}
              </div>

              {/* Options if multiple choice */}
              {q.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {(Object.keys(q.options) as Array<keyof typeof q.options>).map((k) => (
                    <div 
                      key={k} 
                      className={`p-2 rounded-xl border text-xs flex items-center gap-2 ${
                        k === q.correctOption 
                          ? 'border-emerald-300 bg-emerald-50/40 text-emerald-900 font-semibold' 
                          : 'border-slate-200 bg-slate-50/50 text-slate-700'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-md bg-white border border-slate-200 text-slate-700 font-bold flex items-center justify-center shrink-0">
                        {k}
                      </span>
                      <span>{q.options ? (q.options as any)[k] : ''}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* True/False statements if true_false */}
              {q.statements && (
                <div className="space-y-1.5 pt-2">
                  {q.statements.map(st => (
                    <div key={st.subId} className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between">
                      <span><strong>{st.subId})</strong> {st.text}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${st.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                        {st.isCorrect ? 'ĐÚNG' : 'SAI'}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Explanation */}
              {q.explanation && (
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 italic">
                  <strong>Hướng dẫn giải:</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

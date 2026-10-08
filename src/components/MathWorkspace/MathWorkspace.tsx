import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Layers, 
  Presentation, 
  CheckSquare, 
  ChevronRight, 
  ChevronDown, 
  Sparkles,
  FunctionSquare,
  BookOpen,
  Activity,
  Calculator,
  Compass,
  ArrowRight,
  Eye,
  CheckCircle2,
  Copy
} from 'lucide-react';
import { MathLesson, MathBlock, MathBlockType, ActiveModule, SlideItem, MathQuestionItem } from '../../types';
import { MathRenderer } from './MathRenderer';
import { FormulaEditor } from './FormulaEditor';
import { GraphBlock } from './GraphBlock';

interface MathWorkspaceProps {
  lesson: MathLesson;
  onUpdateLesson: (updated: Partial<MathLesson>) => void;
  setActiveModule: (m: ActiveModule) => void;
  onAddSlideFromBlock: (title: string, latex?: string, content?: string) => void;
  onAddQuestionFromBlock: (content: string, latex?: string) => void;
}

export const MathWorkspace: React.FC<MathWorkspaceProps> = ({
  lesson,
  onUpdateLesson,
  setActiveModule,
  onAddSlideFromBlock,
  onAddQuestionFromBlock
}) => {
  const [selectedBlockId, setSelectedBlockId] = useState<string>(lesson.blocks[0]?.id || '');
  const [editingBlockId, setEditingBlockId] = useState<string | null>(null);
  const [showFormulaInspector, setShowFormulaInspector] = useState(true);

  const selectedBlock = lesson.blocks.find(b => b.id === selectedBlockId) || lesson.blocks[0];

  const handleAddBlock = (type: MathBlockType) => {
    const newBlock: MathBlock = {
      id: `block-${Date.now()}`,
      type,
      title: type === 'definition' ? 'Định nghĩa mới' : type === 'example' ? 'Ví dụ áp dụng' : 'Khối kiến thức mới',
      content: 'Nhập nội dung kiến thức giải thích tại đây...',
      latex: type === 'definition' || type === 'formula' ? 'ax + by = c' : undefined,
      phaseTag: 'Hình thành kiến thức'
    };

    onUpdateLesson({
      blocks: [...lesson.blocks, newBlock]
    });
    setSelectedBlockId(newBlock.id);
    setEditingBlockId(newBlock.id);
  };

  const handleUpdateBlock = (blockId: string, updated: Partial<MathBlock>) => {
    onUpdateLesson({
      blocks: lesson.blocks.map(b => b.id === blockId ? { ...b, ...updated } : b)
    });
  };

  const handleDeleteBlock = (blockId: string) => {
    if (lesson.blocks.length <= 1) return;
    onUpdateLesson({
      blocks: lesson.blocks.filter(b => b.id !== blockId)
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Context */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200 flex items-center gap-1">
              <Calculator className="w-3.5 h-3.5" />
              {lesson.grade} · {lesson.chapter}
            </span>
            <span className="text-xs text-slate-500 font-medium">{lesson.periods} tiết thực hiện</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            {lesson.title}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Bộ sách: <span className="font-semibold text-slate-700">{lesson.textbook}</span> · Giáo viên: <span className="font-semibold text-slate-700">{lesson.info.teacherName}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveModule('khbd')}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition flex items-center gap-1.5"
          >
            <span>Sang KHBD 5512</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setActiveModule('slides')}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition flex items-center gap-1.5 shadow-sm"
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>Trình chiếu Slide</span>
          </button>
        </div>
      </div>

      {/* Main Workspace 3-Panel Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Panel 1: Outline Tree Navigation (3/12 Desktop) */}
        <div className="lg:col-span-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              Tiến trình Bài dạy
            </h3>
            <span className="text-[11px] font-mono font-medium text-slate-400">
              {lesson.blocks.length} khối
            </span>
          </div>

          <div className="space-y-1.5">
            {lesson.blocks.map((block, index) => {
              const isSelected = block.id === selectedBlockId;
              return (
                <button
                  key={block.id}
                  onClick={() => setSelectedBlockId(block.id)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs transition flex items-start gap-2 ${
                    isSelected 
                      ? 'bg-blue-50 text-blue-900 border border-blue-200 font-semibold' 
                      : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <span className="w-5 h-5 rounded-md bg-white border border-slate-200 text-slate-600 flex items-center justify-center shrink-0 text-[10px] font-mono mt-0.5">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="truncate">{block.title}</div>
                    <div className="text-[10px] text-slate-400 font-normal">
                      {block.phaseTag || 'Kiến thức'} · {block.type}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Add block menu */}
          <div className="pt-3 border-t border-slate-100">
            <span className="block text-[11px] font-semibold text-slate-500 mb-2">Thêm khối kiến thức:</span>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => handleAddBlock('definition')}
                className="px-2 py-1.5 text-[11px] rounded-lg border border-slate-200 hover:bg-blue-50 hover:text-blue-700 text-slate-600 text-left transition"
              >
                + Định nghĩa
              </button>
              <button
                onClick={() => handleAddBlock('formula')}
                className="px-2 py-1.5 text-[11px] rounded-lg border border-slate-200 hover:bg-blue-50 hover:text-blue-700 text-slate-600 text-left transition"
              >
                + Công thức
              </button>
              <button
                onClick={() => handleAddBlock('example')}
                className="px-2 py-1.5 text-[11px] rounded-lg border border-slate-200 hover:bg-blue-50 hover:text-blue-700 text-slate-600 text-left transition"
              >
                + Ví dụ mẫu
              </button>
              <button
                onClick={() => handleAddBlock('exercise')}
                className="px-2 py-1.5 text-[11px] rounded-lg border border-slate-200 hover:bg-blue-50 hover:text-blue-700 text-slate-600 text-left transition"
              >
                + Luyện tập
              </button>
            </div>
          </div>
        </div>

        {/* Panel 2: Center Content & Block Editor (6/12 Desktop) */}
        <div className="lg:col-span-5 space-y-4">
          {selectedBlock && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold uppercase bg-slate-100 text-slate-700">
                    {selectedBlock.type}
                  </span>
                  <span className="text-xs text-blue-600 font-medium">
                    {selectedBlock.phaseTag}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onAddSlideFromBlock(selectedBlock.title, selectedBlock.latex, selectedBlock.content)}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-amber-50 hover:text-amber-800 transition"
                    title="Trích xuất thành Slide trình chiếu"
                  >
                    <Presentation className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onAddQuestionFromBlock(selectedBlock.content, selectedBlock.latex)}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-emerald-50 hover:text-emerald-800 transition"
                    title="Chuyển thành câu hỏi luyện tập"
                  >
                    <CheckSquare className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDeleteBlock(selectedBlock.id)}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-rose-50 hover:text-rose-700 transition"
                    title="Xóa khối này"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Title & Phase Tag */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Tiêu đề khối:</label>
                <input
                  type="text"
                  value={selectedBlock.title}
                  onChange={(e) => handleUpdateBlock(selectedBlock.id, { title: e.target.value })}
                  className="w-full text-sm font-semibold p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                />
              </div>

              {/* Content text */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Nội dung diễn giải sư phạm:</label>
                <textarea
                  rows={3}
                  value={selectedBlock.content}
                  onChange={(e) => handleUpdateBlock(selectedBlock.id, { content: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white leading-relaxed"
                />
              </div>

              {/* Latex preview / display */}
              {selectedBlock.latex && (
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Công thức toán học:</label>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 overflow-x-auto text-center">
                    <MathRenderer latex={selectedBlock.latex} block />
                  </div>
                </div>
              )}

              {/* Step by step solution if present */}
              {selectedBlock.steps && selectedBlock.steps.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-700">Lời giải chi tiết từng bước:</div>
                  {selectedBlock.steps.map((st, i) => (
                    <div key={st.id || i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                      <div className="font-semibold text-blue-900 flex items-center justify-between">
                        <span>{st.label}</span>
                        {st.points !== undefined && (
                          <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                            +{st.points} đ
                          </span>
                        )}
                      </div>
                      <p className="text-slate-600">{st.explanation}</p>
                      {st.formulaLatex && (
                        <div className="bg-white p-2 rounded-lg border border-slate-200 my-1 overflow-x-auto">
                          <MathRenderer latex={st.formulaLatex} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Graph if present */}
              {selectedBlock.graphConfig && (
                <div className="pt-2 border-t border-slate-100">
                  <GraphBlock />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Panel 3: Inspector & Formula Tools (4/12 Desktop) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
              <FunctionSquare className="w-3.5 h-3.5 text-blue-600" />
              Trình soạn thảo Công thức Toán (KaTeX)
            </h3>
            <FormulaEditor
              initialLatex={selectedBlock?.latex || 'ax + by = c'}
              onSave={(newLatex) => {
                if (selectedBlock) {
                  handleUpdateBlock(selectedBlock.id, { latex: newLatex });
                }
              }}
            />
          </div>

          {/* Quick learning outcomes checklist */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Yêu cầu Cần Đạt (YCCĐ Bài 1)
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              {lesson.learningOutcomes.map((out, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

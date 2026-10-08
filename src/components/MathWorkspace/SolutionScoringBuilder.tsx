import React, { useState } from 'react';
import { 
  Calculator, 
  Plus, 
  Trash2, 
  Download, 
  CheckCircle2, 
  Edit3, 
  Sparkles,
  FunctionSquare
} from 'lucide-react';
import { SolutionScoringGuide, SolutionScoringCriterion } from '../../types';
import { MathRenderer } from './MathRenderer';

interface SolutionScoringBuilderProps {
  guide: SolutionScoringGuide;
  setGuide: React.Dispatch<React.SetStateAction<SolutionScoringGuide>>;
}

export const SolutionScoringBuilder: React.FC<SolutionScoringBuilderProps> = ({ guide, setGuide }) => {
  const [editingCriterionId, setEditingCriterionId] = useState<string | null>(null);

  // Auto calculate total points
  const calculatedTotal = guide.criteria.reduce((sum, c) => sum + (c.maxPoints || 0), 0);

  const handleUpdateCriterion = (id: string, updated: Partial<SolutionScoringCriterion>) => {
    setGuide({
      ...guide,
      criteria: guide.criteria.map(c => c.id === id ? { ...c, ...updated } : c)
    });
  };

  const handleAddCriterion = () => {
    const newCrit: SolutionScoringCriterion = {
      id: `crit-${Date.now()}`,
      stepName: `Bước ${guide.criteria.length + 1}: Thao tác giải tiếp theo`,
      contentRequired: 'Mô tả yêu cầu cần đạt của học sinh trong bước này...',
      latexSnippet: 'x = ...',
      maxPoints: 0.5
    };

    setGuide({
      ...guide,
      criteria: [...guide.criteria, newCrit]
    });
    setEditingCriterionId(newCrit.id);
  };

  const handleDeleteCriterion = (id: string) => {
    if (guide.criteria.length <= 1) return;
    setGuide({
      ...guide,
      criteria: guide.criteria.filter(c => c.id !== id)
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
              <Calculator className="w-3.5 h-3.5" />
              Barem Điểm Từng Bước
            </span>
            <span className="text-xs text-slate-500 font-medium">Barem Chấm Tự Luận Toán</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mt-1">
            {guide.title}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Phân bổ điểm theo từng bước giải toán khoa học, rõ ràng và công bằng.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
          <div className="text-right">
            <div className="text-[11px] uppercase font-semibold text-slate-500">Tổng điểm barem:</div>
            <div className="text-lg font-bold font-mono text-emerald-700">
              {calculatedTotal.toFixed(1)} / {guide.totalPoints.toFixed(1)} đ
            </div>
          </div>
          <button
            onClick={handleAddCriterion}
            className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm bước chấm</span>
          </button>
        </div>
      </div>

      {/* Criteria list */}
      <div className="space-y-4">
        {guide.criteria.map((c, index) => {
          const isEditing = editingCriterionId === c.id;

          return (
            <div 
              key={c.id}
              className={`bg-white rounded-2xl border transition p-5 ${
                isEditing ? 'border-blue-400 ring-2 ring-blue-500/10 shadow-sm' : 'border-slate-200 shadow-xs'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <input
                    type="text"
                    value={c.stepName}
                    onChange={(e) => handleUpdateCriterion(c.id, { stepName: e.target.value })}
                    className="text-sm font-bold text-slate-800 bg-transparent border-b border-dashed border-slate-300 focus:border-blue-600 focus:outline-none pb-0.5"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-slate-500">Điểm tối đa:</span>
                    <input
                      type="number"
                      step="0.25"
                      min="0.25"
                      max="10"
                      value={c.maxPoints}
                      onChange={(e) => handleUpdateCriterion(c.id, { maxPoints: parseFloat(e.target.value) || 0 })}
                      className="w-16 text-center text-xs font-mono font-bold p-1 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500"
                    />
                    <span className="text-xs font-semibold text-slate-600">đ</span>
                  </div>

                  <button
                    onClick={() => handleDeleteCriterion(c.id)}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                    title="Xóa bước này"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-3">
                <div className="md:col-span-8">
                  <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                    Nội dung yêu cầu cần đạt & cách tính điểm:
                  </label>
                  <textarea
                    rows={2}
                    value={c.contentRequired}
                    onChange={(e) => handleUpdateCriterion(c.id, { contentRequired: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500 leading-relaxed"
                  />
                </div>

                <div className="md:col-span-4">
                  <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                    Công thức / kết quả toán học mẫu:
                  </label>
                  <input
                    type="text"
                    value={c.latexSnippet || ''}
                    onChange={(e) => handleUpdateCriterion(c.id, { latexSnippet: e.target.value })}
                    placeholder="LaTeX snippet..."
                    className="w-full text-xs font-mono p-2 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500 mb-2"
                  />
                  {c.latexSnippet && (
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 text-center overflow-x-auto">
                      <MathRenderer latex={c.latexSnippet} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

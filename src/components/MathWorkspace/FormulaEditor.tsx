import React, { useState } from 'react';
import { Sparkles, Copy, Check, Eye } from 'lucide-react';
import { MathRenderer } from './MathRenderer';

interface FormulaEditorProps {
  initialLatex?: string;
  onSave?: (latex: string) => void;
  className?: string;
}

export const FormulaEditor: React.FC<FormulaEditorProps> = ({
  initialLatex = '',
  onSave,
  className = ''
}) => {
  const [latex, setLatex] = useState(initialLatex);
  const [copied, setCopied] = useState(false);

  const toolbarButtons = [
    { label: 'a/b', snippet: '\\frac{a}{b}', tip: 'Phân số' },
    { label: '√x', snippet: '\\sqrt{x}', tip: 'Căn bậc hai' },
    { label: 'x²', snippet: 'x^2', tip: 'Bình phương' },
    { label: 'x₀', snippet: 'x_0', tip: 'Chỉ số dưới' },
    { label: '{Hệ PT', snippet: '\\begin{cases} ax + by = c \\\\ a\'x + b\'y = c\' \\end{cases}', tip: 'Hệ hai phương trình' },
    { label: '≠', snippet: '\\neq ', tip: 'Khác' },
    { label: '≤', snippet: '\\le ', tip: 'Nhỏ hơn hoặc bằng' },
    { label: '≥', snippet: '\\ge ', tip: 'Lớn hơn hoặc bằng' },
    { label: '∈', snippet: '\\in ', tip: 'Thuộc' },
    { label: 'ℝ', snippet: '\\mathbb{R}', tip: 'Tập số thực' },
    { label: 'ℕ*', snippet: '\\mathbb{N}^*', tip: 'Số tự nhiên khác 0' },
    { label: '⟹', snippet: '\\implies ', tip: 'Suy ra' },
    { label: '⟺', snippet: '\\iff ', tip: 'Tương đương' },
    { label: '±', snippet: '\\pm ', tip: 'Cộng trừ' }
  ];

  const insertSnippet = (snippet: string) => {
    setLatex(prev => (prev ? prev + ' ' + snippet : snippet));
    if (onSave) onSave(latex ? latex + ' ' + snippet : snippet);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(latex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden ${className}`}>
      {/* Virtual Formula Toolbar */}
      <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex flex-wrap gap-1.5 items-center">
        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mr-1">Toolbar Toán:</span>
        {toolbarButtons.map((btn, idx) => (
          <button
            key={idx}
            type="button"
            title={btn.tip}
            onClick={() => insertSnippet(btn.snippet)}
            className="px-2 py-1 text-xs font-mono font-medium rounded-lg bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 text-slate-700 transition"
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Input area */}
      <div className="p-3">
        <label className="block text-xs font-semibold text-slate-600 mb-1">
          Mã công thức LaTeX:
        </label>
        <textarea
          value={latex}
          onChange={(e) => {
            setLatex(e.target.value);
            if (onSave) onSave(e.target.value);
          }}
          rows={3}
          placeholder="Nhập mã LaTeX, ví dụ: 2x - y = 3 hoặc bấm các nút trên Toolbar..."
          className="w-full text-xs font-mono p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50"
        />
      </div>

      {/* Live Preview */}
      <div className="bg-slate-50/80 border-t border-slate-200 p-3 flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div className="flex-1 overflow-x-auto">
          <div className="text-[11px] font-semibold text-blue-700 flex items-center gap-1 mb-1">
            <Eye className="w-3.5 h-3.5" />
            <span>Hiển thị trực quan (Live Preview):</span>
          </div>
          {latex ? (
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
              <MathRenderer latex={latex} block />
            </div>
          ) : (
            <span className="text-xs text-slate-400 italic">Chưa có công thức để hiển thị</span>
          )}
        </div>

        <div className="flex items-center gap-2 self-end md:self-center">
          <button
            type="button"
            onClick={handleCopy}
            className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center gap-1"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Đã chép' : 'Chép LaTeX'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

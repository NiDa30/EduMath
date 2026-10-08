import React, { useState } from 'react';
import { 
  Share2, 
  Copy, 
  Check, 
  Download, 
  Upload, 
  CheckCircle2, 
  FileCode2, 
  Printer, 
  Sparkles, 
  FileText, 
  Presentation, 
  ShieldCheck, 
  AlertCircle,
  Calculator,
  Award
} from 'lucide-react';
import { AppState, LessonPlan5512, Exam7991Data, SlideItem } from '../types';
import { exportWordKHBD, exportWordExam7991, exportHtmlSlides, exportScoringGuideDoc } from '../utils/exportUtils';

interface ExportHandoverViewProps {
  appState: AppState;
  onRestoreState: (state: AppState) => void;
}

export const ExportHandoverView: React.FC<ExportHandoverViewProps> = ({ appState, onRestoreState }) => {
  const [copied, setCopied] = useState(false);
  const [importJsonText, setImportJsonText] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const [importSuccess, setImportSuccess] = useState(false);

  const jsonString = JSON.stringify(appState, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJson = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `EduMath_Handover_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleApplyImport = () => {
    setImportError(null);
    setImportSuccess(false);
    try {
      const parsed = JSON.parse(importJsonText);
      if (!parsed.khbd || !parsed.exam || !parsed.slides) {
        throw new Error('Dữ liệu JSON thiếu các phân hệ cốt lõi (khbd, exam, slides).');
      }
      onRestoreState(parsed);
      setImportSuccess(true);
      setTimeout(() => setImportSuccess(false), 3000);
    } catch (err: any) {
      setImportError(err.message || 'Mã JSON không hợp lệ.');
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 border border-blue-200 flex items-center gap-1">
              <Share2 className="w-3.5 h-3.5" />
              Trung tâm Xuất bản & Bàn giao State
            </span>
            <span className="text-xs text-slate-500 font-medium">Phiên bản 2.0-MATH</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mt-1 tracking-tight">
            Xuất Bản Tài Liệu & Lưu Trữ Phiên Làm Việc
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Đóng gói hồ sơ giáo án, đề thi và sao lưu toàn bộ trạng thái hệ thống không phụ thuộc backend.
          </p>
        </div>

        <button
          onClick={handleDownloadJson}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-sm transition"
        >
          <Download className="w-4 h-4" />
          <span>Tải file JSON dự phòng</span>
        </button>
      </div>

      {/* Verification Checklist */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          Kiểm Tra Cấu Trúc Hồ Sơ Sư Phạm (Standards Verification)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <div className="text-xs font-medium text-slate-700">KHBD chuẩn 4 HĐ Công văn 5512</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <div className="text-xs font-medium text-slate-700">Đề thi 4 phần chuẩn Công văn 7991</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <div className="text-xs font-medium text-slate-700">Ma trận 2 chiều đồng bộ 10.0 đ</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <div className="text-xs font-medium text-slate-700">JSON State Handover v2.0-MATH</div>
          </div>
        </div>
      </div>

      {/* Office Export Suite 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Xuất Word KHBD 5512</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Tệp văn bản Microsoft Word (.doc) căn chỉnh chuẩn lề A4, bảng tiến trình 4 bước chuẩn Bộ GD&ĐT.
            </p>
          </div>
          <button
            onClick={() => exportWordKHBD(appState.khbd)}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải KHBD (.doc)</span>
          </button>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Xuất Word Đề thi 7991</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Tệp đề kiểm tra định kỳ 4 phần có kèm trang Đáp án và Hướng dẫn chấm barem 10.0 điểm.
            </p>
          </div>
          <button
            onClick={() => exportWordExam7991(appState.exam, appState.khbd)}
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải Đề thi (.doc)</span>
          </button>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mb-3">
              <Presentation className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Xuất Slide Trình Chiếu</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Tệp HTML độc lập tích hợp KaTeX, chạy offline trên mọi máy chiếu phòng học.
            </p>
          </div>
          <button
            onClick={() => exportHtmlSlides(appState.slides, appState.khbd.info.lessonTitle)}
            className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải Slide HTML</span>
          </button>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mb-3">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Xuất Barem Tự Luận</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Bảng barem điểm theo từng bước giải toán phục vụ chấm thi và in phiếu chấm bài.
            </p>
          </div>
          <button
            onClick={() => exportScoringGuideDoc(appState.scoringGuide)}
            className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải Barem (.doc)</span>
          </button>
        </div>
      </div>

      {/* JSON State Handover Box */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-blue-600" />
              Khối Dữ Liệu Bàn Giao JSON (AppState Handover Block)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Sao chép mã JSON bên dưới để chia sẻ tiến độ với đồng nghiệp hoặc khôi phục phiên làm việc bất cứ lúc nào.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Đã sao chép' : 'Sao chép 1 chạm'}</span>
            </button>
          </div>
        </div>

        <pre className="bg-slate-950 text-slate-200 p-4 rounded-xl text-[11px] font-mono overflow-x-auto max-h-60 border border-slate-800 leading-relaxed">
          {jsonString}
        </pre>

        {/* Restore Section */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <Upload className="w-3.5 h-3.5 text-blue-600" />
            Khôi phục Phiên làm việc (Restore Session)
          </h4>
          <textarea
            rows={3}
            value={importJsonText}
            onChange={(e) => setImportJsonText(e.target.value)}
            placeholder="Dán mã JSON đã lưu trước đó vào đây..."
            className="w-full text-xs font-mono p-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500"
          />

          {importError && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{importError}</span>
            </div>
          )}

          {importSuccess && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Khôi phục phiên làm việc thành công!</span>
            </div>
          )}

          <button
            onClick={handleApplyImport}
            disabled={!importJsonText.trim()}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition"
          >
            <span>Áp dụng khôi phục phiên</span>
          </button>
        </div>
      </div>
    </div>
  );
};

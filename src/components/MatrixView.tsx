import React from 'react';
import { 
  Grid3X3, 
  Printer, 
  Award,
  Calculator,
  CheckCircle2
} from 'lucide-react';
import { Exam7991Data, LessonPlan5512 } from '../types';

interface MatrixViewProps {
  exam: Exam7991Data;
  khbd: LessonPlan5512;
}

export const MatrixView: React.FC<MatrixViewProps> = ({ exam, khbd }) => {
  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-900 border border-purple-200">
              Công văn 7991/BGDĐT-GDTrH (17/12/2024)
            </span>
            <span className="text-xs text-slate-500 font-medium">Bảng Ma trận & Bản đặc tả môn Toán 9</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mt-1 tracking-tight">
            Ma trận Đề kiểm tra Định kỳ 2 Chiều
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Tỉ lệ chuẩn hóa: 40% Biết (4.0 đ) · 30% Hiểu (3.0 đ) · 30% Vận dụng (3.0 đ).
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
        >
          <Printer className="w-4 h-4" />
          <span>In Ma trận A4</span>
        </button>
      </div>

      {/* Percentage distribution visual */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-slate-600 uppercase">Mức 1: Biết</span>
            <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">40% (4.0 đ)</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-2">
            <div className="bg-blue-600 h-full rounded-full" style={{ width: '40%' }}></div>
          </div>
          <p className="text-[11px] text-slate-500">
            Nhận biết phương trình ax + by = c, nghiệm (x₀; y₀), nhận biết hệ phương trình.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-slate-600 uppercase">Mức 2: Hiểu</span>
            <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">30% (3.0 đ)</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-2">
            <div className="bg-purple-600 h-full rounded-full" style={{ width: '30%' }}></div>
          </div>
          <p className="text-[11px] text-slate-500">
            Kiểm tra cặp số nghiệm, tìm hệ số m để phương trình có nghiệm, ý nghĩa hình học đường thẳng.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-slate-600 uppercase">Mức 3: Vận dụng</span>
            <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">30% (3.0 đ)</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-2">
            <div className="bg-emerald-600 h-full rounded-full" style={{ width: '30%' }}></div>
          </div>
          <p className="text-[11px] text-slate-500">
            Mô hình hóa và giải quyết bài toán thực tế (bài toán năng suất, hình học, chuyển động).
          </p>
        </div>
      </div>

      {/* Table 1: Matrix Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
        <h2 className="text-sm font-bold text-slate-900 uppercase">
          1. Khung Ma Trận Đề Kiểm Tra Định Kỳ (Phụ Lục 1 - CV 7991)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100 text-slate-800">
                <th rowSpan={3} className="border border-slate-300 p-2 text-center">TT</th>
                <th rowSpan={3} className="border border-slate-300 p-2 text-left">Chủ đề / Chương</th>
                <th rowSpan={3} className="border border-slate-300 p-2 text-left">Nội dung / Đơn vị kiến thức</th>
                <th colSpan={9} className="border border-slate-300 p-2 text-center">TNKQ</th>
                <th colSpan={3} className="border border-slate-300 p-2 text-center">Tự luận</th>
                <th rowSpan={3} className="border border-slate-300 p-2 text-center">Tổng điểm</th>
                <th rowSpan={3} className="border border-slate-300 p-2 text-center">% Điểm</th>
              </tr>
              <tr className="bg-slate-50 text-slate-700">
                <th colSpan={3} className="border border-slate-300 p-1 text-center">Nhiều lựa chọn</th>
                <th colSpan={3} className="border border-slate-300 p-1 text-center">Đúng - Sai (4 ý)</th>
                <th colSpan={3} className="border border-slate-300 p-1 text-center">Trả lời ngắn</th>
                <th colSpan={3} className="border border-slate-300 p-1 text-center">Tự luận</th>
              </tr>
              <tr className="bg-slate-50 text-[10px] text-slate-600">
                <th className="border border-slate-300 p-1 text-center">Biết</th>
                <th className="border border-slate-300 p-1 text-center">Hiểu</th>
                <th className="border border-slate-300 p-1 text-center">VD</th>
                <th className="border border-slate-300 p-1 text-center">Biết</th>
                <th className="border border-slate-300 p-1 text-center">Hiểu</th>
                <th className="border border-slate-300 p-1 text-center">VD</th>
                <th className="border border-slate-300 p-1 text-center">Biết</th>
                <th className="border border-slate-300 p-1 text-center">Hiểu</th>
                <th className="border border-slate-300 p-1 text-center">VD</th>
                <th className="border border-slate-300 p-1 text-center">Biết</th>
                <th className="border border-slate-300 p-1 text-center">Hiểu</th>
                <th className="border border-slate-300 p-1 text-center">VD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-2 text-center font-bold">1</td>
                <td className="border border-slate-300 p-2 font-semibold">Chương I: Hệ hai PT bậc nhất 2 ẩn</td>
                <td className="border border-slate-300 p-2">Phương trình bậc nhất hai ẩn & nghiệm</td>
                <td className="border border-slate-300 p-1 text-center">6</td>
                <td className="border border-slate-300 p-1 text-center">2</td>
                <td className="border border-slate-300 p-1 text-center">1</td>
                <td className="border border-slate-300 p-1 text-center">-</td>
                <td className="border border-slate-300 p-1 text-center">1 (4 ý)</td>
                <td className="border border-slate-300 p-1 text-center">-</td>
                <td className="border border-slate-300 p-1 text-center">-</td>
                <td className="border border-slate-300 p-1 text-center">2</td>
                <td className="border border-slate-300 p-1 text-center">-</td>
                <td className="border border-slate-300 p-1 text-center">-</td>
                <td className="border border-slate-300 p-1 text-center">-</td>
                <td className="border border-slate-300 p-1 text-center">-</td>
                <td className="border border-slate-300 p-2 text-center font-bold">4.25 đ</td>
                <td className="border border-slate-300 p-2 text-center">42.5%</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2 text-center font-bold">2</td>
                <td className="border border-slate-300 p-2 font-semibold">Chương I: Hệ hai PT bậc nhất 2 ẩn</td>
                <td className="border border-slate-300 p-2">Hệ hai phương trình & bài toán thực tế</td>
                <td className="border border-slate-300 p-1 text-center">-</td>
                <td className="border border-slate-300 p-1 text-center">2</td>
                <td className="border border-slate-300 p-1 text-center">1</td>
                <td className="border border-slate-300 p-1 text-center">-</td>
                <td className="border border-slate-300 p-1 text-center">-</td>
                <td className="border border-slate-300 p-1 text-center">1 (4 ý)</td>
                <td className="border border-slate-300 p-1 text-center">-</td>
                <td className="border border-slate-300 p-1 text-center">-</td>
                <td className="border border-slate-300 p-1 text-center">2</td>
                <td className="border border-slate-300 p-1 text-center">-</td>
                <td className="border border-slate-300 p-1 text-center">-</td>
                <td className="border border-slate-300 p-1 text-center">1</td>
                <td className="border border-slate-300 p-2 text-center font-bold">5.75 đ</td>
                <td className="border border-slate-300 p-2 text-center">57.5%</td>
              </tr>
              <tr className="bg-slate-100 font-bold">
                <td colSpan={3} className="border border-slate-300 p-2 text-center">TỔNG SỐ CÂU / ĐIỂM</td>
                <td colSpan={3} className="border border-slate-300 p-1 text-center">12 câu (3.0 đ)</td>
                <td colSpan={3} className="border border-slate-300 p-1 text-center">2 câu (2.0 đ)</td>
                <td colSpan={3} className="border border-slate-300 p-1 text-center">4 câu (2.0 đ)</td>
                <td colSpan={3} className="border border-slate-300 p-1 text-center">1 câu (3.0 đ)</td>
                <td className="border border-slate-300 p-2 text-center text-blue-700">10.0 đ</td>
                <td className="border border-slate-300 p-2 text-center">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Table 2: Specification Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
        <h2 className="text-sm font-bold text-slate-900 uppercase">
          2. Bản Đặc Tả Đề Kiểm Tra Định Kỳ (Phụ Lục 2 - CV 7991)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100 text-slate-800">
                <th className="border border-slate-300 p-2 text-center w-12">TT</th>
                <th className="border border-slate-300 p-2 text-left w-48">Chủ đề / Đơn vị KT</th>
                <th className="border border-slate-300 p-2 text-left">Yêu cầu cần đạt (YCCĐ)</th>
                <th className="border border-slate-300 p-2 text-center w-24">Nhiều lựa chọn</th>
                <th className="border border-slate-300 p-2 text-center w-24">Đúng - Sai</th>
                <th className="border border-slate-300 p-2 text-center w-24">Trả lời ngắn</th>
                <th className="border border-slate-300 p-2 text-center w-24">Tự luận</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="border border-slate-300 p-2 text-center font-bold">1</td>
                <td className="border border-slate-300 p-2 font-semibold">Khái niệm phương trình bậc nhất 2 ẩn</td>
                <td className="border border-slate-300 p-2 leading-relaxed">
                  <strong>Nhận biết:</strong> Nhận ra phương trình dạng ax + by = c (a² + b² ≠ 0), nhận biết nghiệm cặp số (x₀; y₀).<br />
                  <strong>Thông hiểu:</strong> Kiểm tra cặp số có là nghiệm hay không, tìm hệ số m để phương trình có nghiệm.
                </td>
                <td className="border border-slate-300 p-2 text-center">8 câu (C1-C6, C9, C12)</td>
                <td className="border border-slate-300 p-2 text-center">1 câu (C13)</td>
                <td className="border border-slate-300 p-2 text-center">2 câu (C15, C16)</td>
                <td className="border border-slate-300 p-2 text-center">-</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2 text-center font-bold">2</td>
                <td className="border border-slate-300 p-2 font-semibold">Hệ phương trình & bài toán thực tế</td>
                <td className="border border-slate-300 p-2 leading-relaxed">
                  <strong>Thông hiểu:</strong> Nhận biết nghiệm chung của hệ hai phương trình bậc nhất hai ẩn.<br />
                  <strong>Vận dụng:</strong> Mô hình hóa bài toán cổ dân gian hoặc bài toán năng suất, chuyển động thành hệ hai phương trình và giải.
                </td>
                <td className="border border-slate-300 p-2 text-center">4 câu (C7, C8, C10, C11)</td>
                <td className="border border-slate-300 p-2 text-center">1 câu (C14)</td>
                <td className="border border-slate-300 p-2 text-center">2 câu (C17, C18)</td>
                <td className="border border-slate-300 p-2 text-center">1 câu (C19)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

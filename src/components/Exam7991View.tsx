import React, { useState } from 'react';
import { 
  CheckSquare, 
  Download, 
  Printer, 
  Award, 
  Calculator, 
  FileText, 
  Info, 
  CheckCircle2, 
  HelpCircle,
  Sparkles,
  Settings
} from 'lucide-react';
import { Exam7991Data, LessonPlan5512 } from '../types';
import { exportWordExam7991 } from '../utils/exportUtils';
import { MathRenderer } from './MathWorkspace/MathRenderer';

interface Exam7991ViewProps {
  exam: Exam7991Data;
  setExam: React.Dispatch<React.SetStateAction<Exam7991Data>>;
  khbd: LessonPlan5512;
}

export const Exam7991View: React.FC<Exam7991ViewProps> = ({ exam, setExam, khbd }) => {
  const [viewMode, setViewMode] = useState<'exam_paper' | 'marking_guide'>('exam_paper');
  const [showConfig, setShowConfig] = useState(false);

  // Simulated answers state for Part II scoring simulator
  const [simulatedAnswers, setSimulatedAnswers] = useState<{
    [qId: string]: { a: boolean; b: boolean; c: boolean; d: boolean };
  }>({
    'p2-1': { a: true, b: true, c: false, d: true },
    'p2-2': { a: true, b: false, c: true, d: false }
  });

  const calculatePartIIScore = (qIndex: number) => {
    const q = exam.partII[qIndex];
    if (!q) return 0;
    const userAns = simulatedAnswers[q.id] || { a: false, b: false, c: false, d: false };
    
    let correctCount = 0;
    if (userAns.a === q.statements[0].isCorrect) correctCount++;
    if (userAns.b === q.statements[1].isCorrect) correctCount++;
    if (userAns.c === q.statements[2].isCorrect) correctCount++;
    if (userAns.d === q.statements[3].isCorrect) correctCount++;

    if (correctCount === 1) return 0.1;
    if (correctCount === 2) return 0.25;
    if (correctCount === 3) return 0.5;
    if (correctCount === 4) return 1.0;
    return 0.0;
  };

  const totalPartIPoints = exam.partI.reduce((sum, q) => sum + q.points, 0);
  const totalPartIIPoints = exam.partII.reduce((sum, q) => sum + q.points, 0);
  const totalPartIIIPoints = exam.partIII.reduce((sum, q) => sum + q.points, 0);
  const totalPartIVPoints = exam.partIV.reduce((sum, q) => sum + q.points, 0);
  const grandTotal = totalPartIPoints + totalPartIIPoints + totalPartIIIPoints + totalPartIVPoints;

  return (
    <div className="space-y-6">
      {/* Top Banner & Control Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              Công văn 7991/BGDĐT-GDTrH (17/12/2024)
            </span>
            <span className="text-xs text-slate-500 font-medium">Cấu trúc 4 phần · Barem 10.0 điểm</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mt-1 tracking-tight">
            {exam.examHeader.title}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Thời gian: {exam.examHeader.duration} · Mã đề: <span className="font-mono font-bold text-slate-700">{exam.examHeader.examCode}</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-slate-200">
            <button
              onClick={() => setViewMode('exam_paper')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                viewMode === 'exam_paper' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Đề thi học sinh
            </button>
            <button
              onClick={() => setViewMode('marking_guide')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                viewMode === 'marking_guide' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Đáp án & Barem
            </button>
          </div>

          <button
            onClick={() => exportWordExam7991(exam, khbd)}
            className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
          >
            <Download className="w-4 h-4" />
            <span>Xuất Word 7991</span>
          </button>

          <button
            onClick={() => window.print()}
            className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
          >
            <Printer className="w-4 h-4" />
            <span>In A4</span>
          </button>
        </div>
      </div>

      {/* Summary Score Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 uppercase">Phần I: Trắc nghiệm</div>
          <div className="text-lg font-bold font-mono text-blue-700 mt-1">{totalPartIPoints.toFixed(1)} đ</div>
          <div className="text-[11px] text-slate-400">{exam.partI.length} câu (0.25đ/câu)</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 uppercase">Phần II: Đúng/Sai</div>
          <div className="text-lg font-bold font-mono text-purple-700 mt-1">{totalPartIIPoints.toFixed(1)} đ</div>
          <div className="text-[11px] text-slate-400">{exam.partII.length} câu (4 ý a-b-c-d)</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 uppercase">Phần III: Trả lời ngắn</div>
          <div className="text-lg font-bold font-mono text-emerald-700 mt-1">{totalPartIIIPoints.toFixed(1)} đ</div>
          <div className="text-[11px] text-slate-400">{exam.partIII.length} câu (0.5đ/câu)</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 uppercase">Phần IV: Tự luận</div>
          <div className="text-lg font-bold font-mono text-amber-700 mt-1">{totalPartIVPoints.toFixed(1)} đ</div>
          <div className="text-[11px] text-slate-400">{exam.partIV.length} câu bài toán thực tế</div>
        </div>
      </div>

      {viewMode === 'exam_paper' ? (
        <div className="space-y-6">
          {/* Part I */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase">
                  PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN ({totalPartIPoints.toFixed(1)} ĐIỂM)
                </h3>
                <p className="text-xs text-slate-500 italic mt-0.5">
                  Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu hỏi thí sinh chỉ chọn một phương án. (Mỗi câu đúng 0.25 điểm).
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {exam.partI.map((q, idx) => (
                <div key={q.id} className="p-3.5 rounded-xl bg-slate-50/50 border border-slate-100 space-y-2 text-xs">
                  <div className="font-bold text-slate-800">
                    <span className="text-blue-700 mr-1.5">{q.code || `Câu ${idx + 1}`}:</span>
                    <span>{q.question}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1">
                    {(['A', 'B', 'C', 'D'] as const).map(opt => (
                      <div key={opt} className="p-2 rounded-lg bg-white border border-slate-200 flex items-center gap-2">
                        <span className="font-bold text-slate-700">{opt}.</span>
                        <span>{q.options[opt]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Part II */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase">
                PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG / SAI ({totalPartIIPoints.toFixed(1)} ĐIỂM)
              </h3>
              <p className="text-xs text-slate-500 italic mt-0.5">
                Thí sinh trả lời từ câu 1 đến câu 2. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn Đúng hoặc Sai.
                <br />* Đúng 1 ý: 0.10 đ | Đúng 2 ý: 0.25 đ | Đúng 3 ý: 0.50 đ | Đúng cả 4 ý: 1.00 đ.
              </p>
            </div>

            <div className="space-y-6">
              {exam.partII.map((q, idx) => {
                const simulatedScore = calculatePartIIScore(idx);
                const currentSim = simulatedAnswers[q.id] || { a: false, b: false, c: false, d: false };

                return (
                  <div key={q.id} className="p-4 rounded-xl bg-slate-50/70 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-purple-900">
                        {q.code || `Câu ${idx + 1}`}: {q.stem}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                        Điểm mô phỏng: {simulatedScore.toFixed(2)} / 1.0 đ
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-xs bg-white rounded-xl border border-slate-200 overflow-hidden">
                        <thead>
                          <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                            <th className="py-2 px-3 text-center w-12">Lệnh</th>
                            <th className="py-2 px-3 text-left">Phát biểu khẳng định</th>
                            <th className="py-2 px-3 text-center w-20">Chọn Đúng</th>
                            <th className="py-2 px-3 text-center w-20">Chọn Sai</th>
                            <th className="py-2 px-3 text-center w-20">Đáp án</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {q.statements.map(st => {
                            const isUserTrue = currentSim[st.subId];
                            return (
                              <tr key={st.subId} className="hover:bg-slate-50">
                                <td className="py-2 px-3 font-bold text-center">{st.subId})</td>
                                <td className="py-2 px-3 text-slate-700">{st.text}</td>
                                <td className="py-2 px-3 text-center">
                                  <input
                                    type="radio"
                                    name={`sim-${q.id}-${st.subId}`}
                                    checked={isUserTrue === true}
                                    onChange={() => setSimulatedAnswers({
                                      ...simulatedAnswers,
                                      [q.id]: { ...currentSim, [st.subId]: true }
                                    })}
                                  />
                                </td>
                                <td className="py-2 px-3 text-center">
                                  <input
                                    type="radio"
                                    name={`sim-${q.id}-${st.subId}`}
                                    checked={isUserTrue === false}
                                    onChange={() => setSimulatedAnswers({
                                      ...simulatedAnswers,
                                      [q.id]: { ...currentSim, [st.subId]: false }
                                    })}
                                  />
                                </td>
                                <td className="py-2 px-3 text-center font-bold">
                                  <span className={st.isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                                    {st.isCorrect ? 'Đ' : 'S'}
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Part III */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase">
                PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN ({totalPartIIIPoints.toFixed(1)} ĐIỂM)
              </h3>
              <p className="text-xs text-slate-500 italic mt-0.5">
                Thí sinh trả lời từ câu 1 đến câu 4. Viết câu trả lời súc tích vào ô tương ứng. (Mỗi câu 0.5 điểm).
              </p>
            </div>

            <div className="space-y-3">
              {exam.partIII.map((q, idx) => (
                <div key={q.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <span className="font-bold text-emerald-800 mr-2">{q.code || `Câu ${idx + 1}`}:</span>
                    <span>{q.question}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-slate-400 text-xs">Đáp số:</span>
                    <span className="w-24 p-1.5 text-center font-mono font-bold bg-white border border-slate-300 rounded-lg">
                      {q.correctAnswer}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Part IV */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase">
                PHẦN IV. TỰ LUẬN BÀI TOÁN THỰC TẾ ({totalPartIVPoints.toFixed(1)} ĐIỂM)
              </h3>
              <p className="text-xs text-slate-500 italic mt-0.5">
                Thí sinh trình bày bài toán có lập luận logic, đặt điều kiện, lập hệ phương trình và kết luận.
              </p>
            </div>

            <div className="space-y-3">
              {exam.partIV.map((q, idx) => (
                <div key={q.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <div className="font-bold text-amber-900 leading-relaxed whitespace-pre-line">
                    {q.code || `Câu ${idx + 1}`}: {q.question}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Marking Guide */
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <h2 className="text-base font-bold text-slate-900 pb-2 border-b">
            HƯỚNG DẪN CHẤM & ĐÁP ÁN ĐỀ THI TOÁN 9 (BAREM 10.0 ĐIỂM)
          </h2>

          <div>
            <h3 className="text-xs font-bold text-slate-700 uppercase mb-2">Đáp án Phần I (3.0 điểm):</h3>
            <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 text-center text-xs">
              {exam.partI.map((q, i) => (
                <div key={q.id} className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-mono text-slate-400 text-[10px]">C{i+1}</div>
                  <div className="font-bold text-blue-700">{q.correctAnswer}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-700 uppercase mb-2">Đáp án Phần II (2.0 điểm - Chuẩn CV 7991):</h3>
            <div className="space-y-2">
              {exam.partII.map(q => (
                <div key={q.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs flex flex-wrap gap-4 items-center">
                  <span className="font-bold text-purple-900">{q.code}:</span>
                  {q.statements.map(st => (
                    <span key={st.subId} className="flex items-center gap-1">
                      <strong>{st.subId})</strong>
                      <span className={st.isCorrect ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>
                        {st.isCorrect ? 'ĐÚNG' : 'SAI'}
                      </span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-700 uppercase mb-2">Đáp án Phần III (2.0 điểm):</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              {exam.partIII.map((q, i) => (
                <div key={q.id} className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-mono text-slate-400 text-[10px]">C{i+1}</div>
                  <div className="font-bold text-emerald-700">{q.correctAnswer}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-700 uppercase mb-2">Barem Chấm Phần IV (3.0 điểm):</h3>
            {exam.partIV.map(q => (
              <div key={q.id} className="space-y-1.5 text-xs">
                {q.rubric.map((r, i) => (
                  <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <span>{r.step}</span>
                    <span className="font-mono font-bold text-amber-800 shrink-0 ml-2">+{r.points} đ</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

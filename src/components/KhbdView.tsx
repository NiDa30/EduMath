import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  Plus, 
  Trash2, 
  Edit3, 
  Eye, 
  Clock, 
  Sparkles, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Presentation, 
  Layers, 
  Calculator, 
  Compass, 
  Paperclip,
  Share2
} from 'lucide-react';
import { LessonPlan5512, TeachingActivity, ActiveModule } from '../types';
import { exportWordKHBD } from '../utils/exportUtils';

interface KhbdViewProps {
  khbd: LessonPlan5512;
  setKhbd: React.Dispatch<React.SetStateAction<LessonPlan5512>>;
  setActiveModule?: (m: ActiveModule) => void;
  onAddSlideFromActivity?: (actName: string, content: string) => void;
}

export const KhbdView: React.FC<KhbdViewProps> = ({ 
  khbd, 
  setKhbd, 
  setActiveModule,
  onAddSlideFromActivity
}) => {
  const [viewMode, setViewMode] = useState<'visual_builder' | 'document'>('visual_builder');
  const [expandedActivity, setExpandedActivity] = useState<string | null>(khbd.activities[0]?.id || null);

  const handleUpdateActivity = (actId: string, updated: Partial<TeachingActivity>) => {
    setKhbd({
      ...khbd,
      activities: khbd.activities.map(act => act.id === actId ? { ...act, ...updated } : act)
    });
  };

  const handleAddActivity = () => {
    const newAct: TeachingActivity = {
      id: `act-${Date.now()}`,
      name: `Hoạt động ${khbd.activities.length + 1}: Luyện tập mở rộng / Ứng dụng thực tiễn`,
      type: 'practice',
      time: '10 phút',
      objective: 'Củng cố và rèn luyện kỹ năng giải bài toán thực tế bằng cách lập phương trình.',
      content: 'Học sinh làm việc theo nhóm giải quyết bài toán trên phiếu học tập.',
      product: 'Lời giải chi tiết và đáp án bài toán trên phiếu học tập nhóm.',
      method: 'Dạy học hợp tác, chia sẻ nhóm đôi',
      tools: 'Phiếu học tập số 2, bảng phụ',
      steps: {
        step1: 'Giáo viên giao nhiệm vụ và yêu cầu các nhóm đọc kỹ dữ kiện bài toán.',
        step2: 'Học sinh thảo luận nhóm, xác định ẩn số và thiết lập hệ thức.',
        step3: 'Đại diện nhóm báo cáo kết quả, nhóm khác phản biện.',
        step4: 'Giáo viên nhận xét, chuẩn hóa kiến thức và chốt kết luận.'
      }
    };
    setKhbd({
      ...khbd,
      activities: [...khbd.activities, newAct]
    });
    setExpandedActivity(newAct.id);
  };

  const handleDeleteActivity = (actId: string) => {
    if (khbd.activities.length <= 1) return;
    setKhbd({
      ...khbd,
      activities: khbd.activities.filter(a => a.id !== actId)
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Control Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 border border-blue-200">
              Công văn 5512/BGDĐT-GDTrH
            </span>
            <span className="text-xs text-slate-500 font-medium">Khung Kế hoạch Bài dạy Chuẩn 4 Hoạt động</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mt-1 tracking-tight">
            Kế Hoạch Bài Dạy (KHBD): {khbd.info.lessonTitle}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Môn {khbd.info.subject} {khbd.info.grade} · Bộ sách {khbd.info.textbook} · Thời lượng: {khbd.info.periods}
          </p>
        </div>

        {/* View mode toggle & Action buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-slate-200">
            <button
              onClick={() => setViewMode('visual_builder')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                viewMode === 'visual_builder'
                  ? 'bg-white text-blue-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Visual Builder
            </button>
            <button
              onClick={() => setViewMode('document')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                viewMode === 'document'
                  ? 'bg-white text-blue-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Văn bản in A4
            </button>
          </div>

          <button
            onClick={() => exportWordKHBD(khbd)}
            className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
          >
            <Download className="w-4 h-4" />
            <span>Xuất Word 5512</span>
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

      {viewMode === 'visual_builder' ? (
        <div className="space-y-6">
          {/* Section I: Objectives Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs">
                  I
                </span>
                Mục tiêu Dạy học (Chuẩn Chương trình GDPT 2018 Môn Toán)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Knowledge */}
              <div className="space-y-2 bg-slate-50/70 p-4 rounded-xl border border-slate-200">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  1. Về Kiến thức
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {khbd.objectives.knowledge.map((k, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specialized Competencies */}
              <div className="space-y-2 bg-slate-50/70 p-4 rounded-xl border border-slate-200">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  2. Năng lực Đặc thù Toán học
                </h3>
                <div className="space-y-2 text-xs text-slate-600">
                  <p><strong>Tư duy & lập luận:</strong> {khbd.objectives.specializedCompetencies.mathematicalThinking}</p>
                  <p><strong>Mô hình hóa toán học:</strong> {khbd.objectives.specializedCompetencies.mathematicalModeling}</p>
                  <p><strong>Giải quyết vấn đề:</strong> {khbd.objectives.specializedCompetencies.mathematicalProblemSolving}</p>
                </div>
              </div>

              {/* General Competencies & Qualities */}
              <div className="space-y-2 bg-slate-50/70 p-4 rounded-xl border border-slate-200">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  3. Năng lực Chung & Phẩm chất
                </h3>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <p><strong>Tự chủ & tự học:</strong> {khbd.objectives.generalCompetencies.selfControl}</p>
                  <p><strong>Giao tiếp & hợp tác:</strong> {khbd.objectives.generalCompetencies.communication}</p>
                  <div className="pt-1 border-t border-slate-200">
                    <span className="font-bold text-slate-700">Phẩm chất:</span>
                    <ul className="mt-1 space-y-1">
                      {khbd.objectives.qualities.map((q, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-emerald-600">✓</span> {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section II: Equipment Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs">
                II
              </span>
              Thiết bị Dạy học & Học liệu
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-slate-800 block mb-2">1. Giáo viên:</span>
                <ul className="space-y-1 text-slate-600">
                  {khbd.equipment.teacher.map((t, idx) => (
                    <li key={idx}>• {t}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-slate-800 block mb-2">2. Học sinh:</span>
                <ul className="space-y-1 text-slate-600">
                  {khbd.equipment.student.map((s, idx) => (
                    <li key={idx}>• {s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section III: Activities Flow (Chuẩn 4 Hoạt động) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs">
                  III
                </span>
                Tiến trình Dạy học (Chuẩn 4 Hoạt động Công văn 5512)
              </h2>
              <button
                onClick={handleAddActivity}
                className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 rounded-xl text-xs font-semibold flex items-center gap-1 transition"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Thêm hoạt động học</span>
              </button>
            </div>

            {/* List of Activities */}
            <div className="space-y-4">
              {khbd.activities.map((act, index) => {
                const isExpanded = expandedActivity === act.id;
                const phaseColor = 
                  act.type === 'warmup' ? 'border-amber-300 bg-amber-50/30 text-amber-800' :
                  act.type === 'knowledge' ? 'border-blue-300 bg-blue-50/30 text-blue-800' :
                  act.type === 'practice' ? 'border-emerald-300 bg-emerald-50/30 text-emerald-800' :
                  'border-purple-300 bg-purple-50/30 text-purple-800';

                return (
                  <div 
                    key={act.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition"
                  >
                    {/* Activity Header Bar */}
                    <div 
                      onClick={() => setExpandedActivity(isExpanded ? null : act.id)}
                      className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${phaseColor}`}>
                          0{index + 1}
                        </span>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900">
                            {act.name}
                          </h3>
                          <div className="text-xs text-slate-500 flex items-center gap-3 mt-0.5">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {act.time}
                            </span>
                            {act.method && <span>PP: {act.method}</span>}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {onAddSlideFromActivity && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onAddSlideFromActivity(act.name, `${act.objective}\n\n${act.content}`);
                            }}
                            className="p-1.5 rounded-lg border border-slate-200 hover:bg-amber-50 text-slate-600 hover:text-amber-800 text-xs flex items-center gap-1"
                            title="Tạo Slide từ hoạt động này"
                          >
                            <Presentation className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline text-[11px]">Thành Slide</span>
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteActivity(act.id);
                          }}
                          className="p-1.5 rounded-lg border border-slate-200 hover:bg-rose-50 text-slate-400 hover:text-rose-600"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                      </div>
                    </div>

                    {/* Activity Expanded Content */}
                    {isExpanded && (
                      <div className="p-6 border-t border-slate-100 space-y-5 bg-slate-50/20">
                        {/* a, b, c fields */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">a) Mục tiêu:</label>
                            <textarea
                              rows={3}
                              value={act.objective}
                              onChange={(e) => handleUpdateActivity(act.id, { objective: e.target.value })}
                              className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">b) Nội dung:</label>
                            <textarea
                              rows={3}
                              value={act.content}
                              onChange={(e) => handleUpdateActivity(act.id, { content: e.target.value })}
                              className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">c) Sản phẩm:</label>
                            <textarea
                              rows={3}
                              value={act.product}
                              onChange={(e) => handleUpdateActivity(act.id, { product: e.target.value })}
                              className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-blue-500"
                            />
                          </div>
                        </div>

                        {/* d) Tổ chức thực hiện 4 bước */}
                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-2 uppercase tracking-wide">
                            d) Tổ chức thực hiện (Chuẩn 4 bước Công văn 5512):
                          </label>

                          <div className="space-y-3">
                            <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                              <span className="text-xs font-bold text-blue-900 block">
                                Bước 1: Chuyển giao nhiệm vụ
                              </span>
                              <textarea
                                rows={2}
                                value={act.steps.step1}
                                onChange={(e) => handleUpdateActivity(act.id, { steps: { ...act.steps, step1: e.target.value } })}
                                className="w-full text-xs p-2 rounded-lg border border-slate-100 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500"
                              />
                            </div>

                            <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                              <span className="text-xs font-bold text-blue-900 block">
                                Bước 2: Thực hiện nhiệm vụ
                              </span>
                              <textarea
                                rows={2}
                                value={act.steps.step2}
                                onChange={(e) => handleUpdateActivity(act.id, { steps: { ...act.steps, step2: e.target.value } })}
                                className="w-full text-xs p-2 rounded-lg border border-slate-100 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500"
                              />
                            </div>

                            <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                              <span className="text-xs font-bold text-blue-900 block">
                                Bước 3: Báo cáo, thảo luận
                              </span>
                              <textarea
                                rows={2}
                                value={act.steps.step3}
                                onChange={(e) => handleUpdateActivity(act.id, { steps: { ...act.steps, step3: e.target.value } })}
                                className="w-full text-xs p-2 rounded-lg border border-slate-100 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500"
                              />
                            </div>

                            <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                              <span className="text-xs font-bold text-blue-900 block">
                                Bước 4: Kết luận, nhận định
                              </span>
                              <textarea
                                rows={2}
                                value={act.steps.step4}
                                onChange={(e) => handleUpdateActivity(act.id, { steps: { ...act.steps, step4: e.target.value } })}
                                className="w-full text-xs p-2 rounded-lg border border-slate-100 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Document A4 View */
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm max-w-4xl mx-auto text-slate-900 font-serif space-y-6">
          <div className="flex justify-between text-xs text-center border-b pb-4">
            <div>
              <p className="uppercase">{khbd.info.department}</p>
              <p className="font-bold uppercase">{khbd.info.school}</p>
              <p>Tổ: {khbd.info.subjectGroup}</p>
              <p>Giáo viên: {khbd.info.teacherName}</p>
            </div>
            <div>
              <p className="font-bold">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
              <p className="font-bold">Độc lập - Tự do - Hạnh phúc</p>
              <p className="italic">---------------</p>
            </div>
          </div>

          <div className="text-center space-y-1">
            <h1 className="text-xl font-bold uppercase">KẾ HOẠCH BÀI DẠY</h1>
            <h2 className="text-base font-bold">{khbd.info.lessonTitle}</h2>
            <p className="italic text-xs">Môn: {khbd.info.subject} {khbd.info.grade} · Thời lượng: {khbd.info.periods} · {khbd.info.academicYear}</p>
          </div>

          <div className="space-y-4 text-xs leading-relaxed">
            <div>
              <h3 className="font-bold text-sm uppercase">I. MỤC TIÊU DẠY HỌC</h3>
              <p className="font-bold mt-1">1. Về kiến thức:</p>
              <ul className="list-disc pl-5">
                {khbd.objectives.knowledge.map((k, i) => <li key={i}>{k}</li>)}
              </ul>
              <p className="font-bold mt-2">2. Về năng lực:</p>
              <ul className="list-disc pl-5">
                <li>Tư duy & lập luận: {khbd.objectives.specializedCompetencies.mathematicalThinking}</li>
                <li>Mô hình hóa toán học: {khbd.objectives.specializedCompetencies.mathematicalModeling}</li>
                <li>Tự chủ và tự học: {khbd.objectives.generalCompetencies.selfControl}</li>
              </ul>
              <p className="font-bold mt-2">3. Về phẩm chất:</p>
              <ul className="list-disc pl-5">
                {khbd.objectives.qualities.map((q, i) => <li key={i}>{q}</li>)}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-sm uppercase">II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU</h3>
              <p><strong>1. Giáo viên:</strong> {khbd.equipment.teacher.join('; ')}</p>
              <p><strong>2. Học sinh:</strong> {khbd.equipment.student.join('; ')}</p>
            </div>

            <div>
              <h3 className="font-bold text-sm uppercase">III. TIẾN TRÌNH DẠY HỌC</h3>
              {khbd.activities.map((act, i) => (
                <div key={act.id} className="mt-3 pt-2 border-t border-slate-200">
                  <p className="font-bold">{act.name} ({act.time})</p>
                  <p><strong>a) Mục tiêu:</strong> {act.objective}</p>
                  <p><strong>b) Nội dung:</strong> {act.content}</p>
                  <p><strong>c) Sản phẩm:</strong> {act.product}</p>
                  <p><strong>d) Tổ chức thực hiện:</strong></p>
                  <div className="pl-4 space-y-1">
                    <p>• <em>Bước 1 (Chuyển giao):</em> {act.steps.step1}</p>
                    <p>• <em>Bước 2 (Thực hiện):</em> {act.steps.step2}</p>
                    <p>• <em>Bước 3 (Báo cáo, thảo luận):</em> {act.steps.step3}</p>
                    <p>• <em>Bước 4 (Kết luận, nhận định):</em> {act.steps.step4}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

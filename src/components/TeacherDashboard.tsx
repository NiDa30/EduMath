import React from 'react';
import { 
  Calculator, 
  Layers, 
  HelpCircle, 
  CheckSquare, 
  Presentation, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Compass, 
  Activity,
  Award,
  BookOpen
} from 'lucide-react';
import { ActiveModule, MathLesson, LessonPlan5512 } from '../types';

import { teacherIdentity } from '../data/teacherIdentity';

interface TeacherDashboardProps {
  lessons: MathLesson[];
  currentLessonId: string;
  onSelectLesson: (id: string) => void;
  setActiveModule: (m: ActiveModule) => void;
  khbd: LessonPlan5512;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  lessons,
  currentLessonId,
  onSelectLesson,
  setActiveModule,
  khbd
}) => {
  const currentLesson = lessons.find(l => l.id === currentLessonId) || lessons[0];

  const quickActions = [
    {
      id: 'workspace',
      title: 'Soạn bài & Khối Kiến thức',
      desc: 'Làm việc trên các khối Khái niệm, Định lý, Công thức KaTeX, Đồ thị và Lời giải từng bước',
      icon: Calculator,
      action: () => setActiveModule('workspace'),
      color: 'bg-blue-600 text-white hover:bg-blue-700'
    },
    {
      id: 'khbd',
      title: 'Thiết kế KHBD 5512',
      desc: 'Kế hoạch bài dạy chuẩn 4 hoạt động và 4 bước tổ chức theo Công văn 5512/BGDĐT-GDTrH',
      icon: FileText,
      action: () => setActiveModule('khbd'),
      color: 'bg-indigo-600 text-white hover:bg-indigo-700'
    },
    {
      id: 'question',
      title: 'Ngân hàng Câu hỏi Toán',
      desc: 'Tạo và quản lý câu hỏi trắc nghiệm, Đúng/Sai, trả lời ngắn và tự luận theo ma trận nhận thức',
      icon: HelpCircle,
      action: () => setActiveModule('question_builder'),
      color: 'bg-emerald-600 text-white hover:bg-emerald-700'
    },
    {
      id: 'exam',
      title: 'Khảo thí & Đề thi 7991',
      desc: 'Đề kiểm tra định kỳ 4 phần chuẩn Công văn 7991/BGDĐT-GDTrH (17/12/2024)',
      icon: CheckSquare,
      action: () => setActiveModule('exam'),
      color: 'bg-violet-600 text-white hover:bg-violet-700'
    },
    {
      id: 'slides',
      title: 'Slide Bài giảng Storytelling',
      desc: 'Trình chiếu toán học: Bài toán mở đầu, Khái niệm, Đồ thị trực quan và Quiz tương tác',
      icon: Presentation,
      action: () => setActiveModule('slides'),
      color: 'bg-amber-600 text-white hover:bg-amber-700'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{teacherIdentity.productName} · {teacherIdentity.productSubtitle}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Xin chào Thầy/Cô {khbd.info.teacherName || teacherIdentity.fullName}
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
Không gian làm việc số tích hợp cho giáo viên Toán: kết nối liên thông từ Yêu cầu cần đạt → Kiến thức & Đồ thị → KHBD 5512 → Slide giảng dạy → Đề kiểm tra & Ma trận 7991.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-mono">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
              <span className="text-blue-400 font-bold">Trường:</span>
              <span>{khbd.info.school}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
              <span className="text-blue-400 font-bold">Khối lớp:</span>
              <span>{khbd.info.grade}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
              <span className="text-blue-400 font-bold">Năm học:</span>
              <span>{khbd.info.academicYear} · {khbd.info.semester || 'Học kỳ I'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Spotlight */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-blue-600" />
            Công việc đang thực hiện (Resume Spotlight)
          </span>
          <span className="text-xs font-mono font-medium text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            Cập nhật: {currentLesson.lastModified}
          </span>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 p-5 rounded-2xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                {currentLesson.grade}
              </span>
              <span className="text-xs text-slate-500">{currentLesson.chapter}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              {currentLesson.title}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bộ sách: <span className="font-semibold">{currentLesson.textbook}</span> · Thời lượng: <span className="font-semibold">{currentLesson.periods} tiết</span>
            </p>

            <div className="flex items-center gap-4 text-xs font-medium text-slate-600 pt-2">
              <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                KHBD 5512: Hoàn tất (4 HĐ)
              </span>
              <span className="flex items-center gap-1 text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                <Presentation className="w-3.5 h-3.5" />
                Slide: 8 trang
              </span>
              <span className="flex items-center gap-1 text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
                <Award className="w-3.5 h-3.5" />
                Đề 7991: Chuẩn 4 phần
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
            <button
              onClick={() => setActiveModule('workspace')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition"
            >
              <span>Vào soạn bài Toán</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveModule('export_handover')}
              className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition"
            >
              <span>Xuất hồ sơ giảng dạy</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Tác vụ Sư phạm Nhanh
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {quickActions.map((qa) => {
            const Icon = qa.icon;
            return (
              <button
                key={qa.id}
                onClick={qa.action}
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition text-left flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl ${qa.color} flex items-center justify-center mb-3 shadow-xs`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition mb-1">
                    {qa.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {qa.desc}
                  </p>
                </div>
                <div className="text-xs font-semibold text-blue-600 flex items-center gap-1 mt-4 group-hover:translate-x-1 transition">
                  <span>Mở phân hệ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Recent Lessons List */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-blue-600" />
          Danh sách Bài dạy Toán học
        </h3>
        <div className="space-y-3">
          {lessons.map((ls) => (
            <div
              key={ls.id}
              onClick={() => onSelectLesson(ls.id)}
              className="p-4 rounded-2xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/20 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-100 text-blue-800">
                    {ls.grade}
                  </span>
                  <span className="text-xs text-slate-500">{ls.chapter}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  {ls.title}
                </h4>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                <span>{ls.periods} tiết</span>
                <span>{ls.blocks.length} khối kiến thức</span>
                <span className="text-blue-600 font-semibold flex items-center gap-1">
                  <span>Mở bài</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

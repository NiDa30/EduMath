import React from 'react';
import { 
  Calculator, 
  Layers, 
  HelpCircle, 
  CheckSquare, 
  Presentation, 
  Grid3X3, 
  Share2, 
  FileText, 
  Compass, 
  LayoutDashboard, 
  Sparkles, 
  BookOpen, 
  Award, 
  GraduationCap, 
  Mail 
} from 'lucide-react';
import { ActiveModule, MathLesson } from '../types';
import { teacherIdentity } from '../data/teacherIdentity';

interface SidebarProps {
  activeModule: ActiveModule;
  setActiveModule: (m: ActiveModule) => void;
  lessons: MathLesson[];
  currentLessonId: string;
  onSelectLesson: (id: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeModule,
  setActiveModule,
  lessons,
  currentLessonId,
  onSelectLesson,
  isOpen = false,
  onClose
}) => {
  const currentLesson = lessons.find(l => l.id === currentLessonId) || lessons[0];

  const menuItems = [
    { id: 'dashboard', label: '1. Bàn làm việc Giáo viên', icon: LayoutDashboard },
    { id: 'workspace', label: '2. Không gian Bài dạy Toán', icon: Calculator },
    { id: 'khbd', label: '3. Kế hoạch bài dạy 5512', icon: FileText },
    { id: 'question_builder', label: '4. Ngân hàng Câu hỏi Toán', icon: HelpCircle },
    { id: 'solution_scoring', label: '5. Barem Chấm Tự luận', icon: Award },
    { id: 'slides', label: '6. Slide Bài giảng Trực quan', icon: Presentation },
    { id: 'exam', label: '7. Đề kiểm tra Chuẩn 7991', icon: CheckSquare },
    { id: 'matrix', label: '8. Ma trận & Bản đặc tả', icon: Grid3X3 },
    { id: 'export_handover', label: '9. Xuất bản & Bàn giao JSON', icon: Share2 }
  ];

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-40 w-72 bg-slate-900 text-slate-100 flex flex-col transition-transform duration-300 ease-in-out border-r border-slate-800
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm font-bold">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-base tracking-tight text-white flex items-center gap-1.5">
              <span>{teacherIdentity.productName}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-400 border border-blue-400/30">v2.0</span>
            </div>
            <div className="text-[11px] text-slate-400 font-medium">{teacherIdentity.productSubtitle}</div>
          </div>
        </div>

        {/* Teacher Metadata Card */}
        <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 mt-3 text-xs space-y-1">
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-[11px] text-slate-400">Giáo viên:</span>
            <span className="font-semibold text-white">{teacherIdentity.fullName}</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-[11px] text-slate-400">Trường:</span>
            <span className="truncate max-w-[150px] text-slate-300" title={teacherIdentity.school}>{teacherIdentity.school}</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-[11px] text-slate-400">Khối phụ trách:</span>
            <span className="font-mono text-blue-400 font-semibold">{currentLesson.grade} ({currentLesson.info.assignedClasses?.join(', ') || '9A1'})</span>
          </div>
        </div>
      </div>

      {/* Lesson Switcher */}
      <div className="p-3 border-b border-slate-800 bg-slate-950/40">
        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 px-2">
          Bài dạy đang chọn:
        </label>
        <div className="space-y-1">
          {lessons.map(ls => (
            <button
              key={ls.id}
              onClick={() => onSelectLesson(ls.id)}
              className={`w-full text-left p-2 rounded-xl text-xs transition flex items-center gap-2 ${
                ls.id === currentLessonId
                  ? 'bg-blue-600/30 text-blue-200 border border-blue-500/40 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 shrink-0 text-blue-400" />
              <span className="truncate">{ls.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
          Phân hệ Sư phạm
        </div>

        {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = activeModule === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveModule(item.id as ActiveModule);
                if (onClose) onClose();
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition ${
                isActive
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Sidebar Mini Identity Footer */}
      <div className="p-3.5 border-t border-slate-800 bg-slate-950/70 text-xs">
        <div className="flex items-center justify-between mb-1">
          <span className="font-semibold text-slate-200 text-[13px]">{teacherIdentity.fullName}</span>
          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Online
          </span>
        </div>
        <div className="text-[11px] text-slate-400 space-y-0.5 mb-2 leading-tight">
          <p>Giáo viên {teacherIdentity.subject} · {teacherIdentity.department}</p>
          <p>{teacherIdentity.school} · {teacherIdentity.province}</p>
        </div>
        <a
          href={`mailto:${teacherIdentity.email}`}
          className="inline-flex items-center gap-1.5 text-[11px] text-blue-400 hover:text-blue-300 hover:underline transition focus:outline-none focus:ring-1 focus:ring-blue-400 rounded"
          aria-label={`Email giáo viên: ${teacherIdentity.email}`}
        >
          <Mail className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{teacherIdentity.email}</span>
        </a>
      </div>
    </aside>
  );
};


import React from 'react';
import { Mail } from 'lucide-react';
import { teacherIdentity, TeacherIdentity } from '../data/teacherIdentity';

export interface TeacherFooterProps {
  teacher?: TeacherIdentity;
}

export const TeacherFooter: React.FC<TeacherFooterProps> = ({ teacher = teacherIdentity }) => {
  return (
    <footer className="w-full bg-white border-t border-slate-200 text-slate-900 mt-auto print:hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-5 md:pt-6 pb-4 md:pb-5">
        {/* Main 3-Column Desktop / Vertical Stack Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 pb-4 border-b border-slate-100">
          {/* Nhóm 1: Sản phẩm */}
          <div className="space-y-1">
            <h3 className="font-semibold text-base md:text-[17px] text-slate-900 tracking-tight">
              {teacher.productName}
            </h3>
            <p className="text-[13px] md:text-sm text-slate-500 font-normal leading-snug">
              {teacher.productSubtitle}
            </p>
          </div>

          {/* Nhóm 2: Người thực hiện */}
          <div className="space-y-1">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Thực hiện bởi
            </div>
            <div className="font-semibold text-sm md:text-[15px] text-slate-900">
              {teacher.fullName}
            </div>
            <div className="text-[13px] text-slate-600 leading-snug space-y-0.5">
              <p>Giáo viên {teacher.subject} · {teacher.department}</p>
              <p>{teacher.school} · {teacher.province}</p>
            </div>
          </div>

          {/* Nhóm 3: Liên hệ */}
          <div className="space-y-1">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Liên hệ
            </div>
            <div>
              <a
                href={`mailto:${teacher.email}`}
                className="inline-flex items-center gap-1.5 text-[13px] md:text-sm text-blue-600 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded font-medium transition"
                aria-label={`Gửi thư điện tử tới ${teacher.fullName}: ${teacher.email}`}
              >
                <Mail className="w-4 h-4 shrink-0 text-blue-600" aria-hidden="true" />
                <span className="truncate">{teacher.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dòng chương trình & Dòng bản quyền */}
        <div className="pt-3.5 space-y-1.5 text-center md:text-left">
          <p className="text-[12px] md:text-[13px] text-slate-500 leading-relaxed font-normal">
            Sản phẩm thực hiện trong {teacher.programName} · {teacher.programDate}
          </p>
          <p className="text-[12px] text-slate-400 font-normal">
            © 2026 {teacher.fullName} · {teacher.productName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

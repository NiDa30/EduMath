export interface TeacherIdentity {
  fullName: string;
  subject: string;
  department: string;
  specialization: string;
  school: string;
  schoolLevel: string;
  province: string;
  email: string;
  productName: string;
  productSubtitle: string;
  programName: string;
  programDate: string;
}

export const teacherIdentity: TeacherIdentity = {
  fullName: "Kiên Kim Cương",
  subject: "Toán",
  department: "Tổ Toán - Tin học",
  specialization: "Toán",
  school: "Trường THCS Ngũ Lạc",
  schoolLevel: "THCS",
  province: "Vĩnh Long",
  email: "kienkimcuong@gmail.com",
  productName: "EduMath",
  productSubtitle: "Mathematics Teaching Workspace",
  programName:
    "Chương trình chuyển giao kỹ thuật ứng dụng trí tuệ nhân tạo (AI) trong giáo dục dành cho cán bộ quản lý và giáo viên cấp THCS – THPT tỉnh Vĩnh Long",
  programDate: "03–04/10/2026"
};

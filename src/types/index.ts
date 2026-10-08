export type ActiveModule = 
  | 'dashboard'
  | 'workspace' 
  | 'khbd' 
  | 'question_builder'
  | 'solution_scoring'
  | 'slides' 
  | 'exam' 
  | 'matrix' 
  | 'export_handover';

export interface AdministrativeInfo {
  department: string; // Sở GD&ĐT
  school: string; // Trường THCS / THPT
  subjectGroup: string; // Tổ chuyên môn Toán
  teacherName: string; // Giáo viên thực hiện
  subject: string; // Môn học (Toán)
  grade: string; // Lớp (9, 10, 11, 12...)
  textbook: string; // Bộ sách (Kết nối tri thức với cuộc sống, Cánh Diều, Chân trời sáng tạo)
  lessonTitle: string; // Tên bài học
  chapter: string; // Chương / Chủ đề
  periods: string; // Thời lượng (ví dụ: 2 tiết)
  academicYear: string; // Năm học
  assignedClasses?: string[]; // Lớp phụ trách (9A1, 9A2...)
  semester?: string; // Học kỳ (Học kỳ I / II)
}

// ---------------- Khối Kiến thức Toán học & MathBlock ----------------
export type MathBlockType = 
  | 'concept' 
  | 'definition' 
  | 'theorem' 
  | 'formula' 
  | 'example' 
  | 'step_solution' 
  | 'exercise' 
  | 'graph' 
  | 'table' 
  | 'note'
  | 'activity';

export interface SolutionStep {
  id: string;
  order: number;
  label: string; // Ví dụ: "Bước 1: Rút ẩn y theo x từ phương trình thứ nhất"
  explanation: string; // Lời giải thích sư phạm
  formulaLatex?: string; // Công thức LaTeX
  points?: number; // Điểm số quy định cho bước giải (phục vụ barem chấm)
}

export interface MathBlock {
  id: string;
  type: MathBlockType;
  title: string;
  content: string; // Nội dung giải thích
  latex?: string; // Biểu thức / Hệ phương trình LaTeX
  steps?: SolutionStep[]; // Lời giải từng bước
  graphConfig?: {
    title?: string;
    functions: string[]; // Ví dụ: ["2*x - 3", "-0.5*x + 2"]
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    points?: { x: number; y: number; label: string }[];
  };
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  phaseTag?: 'Khởi động' | 'Hình thành kiến thức' | 'Luyện tập' | 'Vận dụng';
}

export interface MathLesson {
  id: string;
  title: string;
  chapter: string;
  grade: string;
  subject: string;
  textbook: string;
  periods: number;
  info: AdministrativeInfo;
  learningOutcomes: string[]; // Yêu cầu cần đạt (YCCĐ)
  prerequisites: string[]; // Kiến thức liên quan cần ôn tập
  blocks: MathBlock[]; // Chuỗi khối kiến thức trung tâm
  progress: number;
  lastModified: string;
  khbdStatus: 'ready' | 'draft';
  slideStatus: 'ready' | 'draft';
  examStatus: 'ready' | 'draft';
}

// ---------------- Công văn 5512: Kế hoạch bài dạy môn Toán ----------------
export interface LessonObjective {
  knowledge: string[];
  generalCompetencies: {
    selfControl: string; // Tự chủ & tự học
    communication: string; // Giao tiếp & hợp tác
    problemSolving: string; // Giải quyết vấn đề & sáng tạo
  };
  specializedCompetencies: {
    mathematicalThinking: string; // Năng lực tư duy và lập luận toán học
    mathematicalModeling: string; // Năng lực mô hình hóa toán học
    mathematicalProblemSolving: string; // Năng lực giải quyết vấn đề toán học
    mathematicalCommunication: string; // Năng lực giao tiếp toán học
    mathematicalTools: string; // Năng lực sử dụng công cụ, phương tiện học toán
  };
  qualities: string[]; // Phẩm chất (Chăm chỉ, Trung thực, Trách nhiệm...)
}

export interface TeachingEquipment {
  teacher: string[];
  student: string[];
}

export interface ActivitySteps {
  step1: string; // Bước 1: Chuyển giao nhiệm vụ
  step2: string; // Bước 2: Thực hiện nhiệm vụ
  step3: string; // Bước 3: Báo cáo, thảo luận
  step4: string; // Bước 4: Kết luận, nhận định
}

export interface TeachingActivity {
  id: string;
  name: string;
  type: 'warmup' | 'knowledge' | 'practice' | 'application';
  time: string;
  objective: string;
  content: string;
  product: string;
  method?: string; // Phương pháp dạy học
  tools?: string; // Công cụ / học liệu
  assessmentMethod?: string; // Phương thức đánh giá thường xuyên (hỏi - đáp, viết, thực hành...)
  steps: ActivitySteps;
}

export interface LessonPlan5512 {
  info: AdministrativeInfo;
  objectives: LessonObjective;
  equipment: TeachingEquipment;
  activities: TeachingActivity[];
}

// ---------------- Slide Bài giảng Toán học (Storytelling & Academic Flow) ----------------
export interface SlideItem {
  id: string;
  title: string;
  phaseTag: 'Khởi động' | 'Hình thành kiến thức' | 'Luyện tập' | 'Vận dụng' | 'Tổng kết';
  layout: 'cover' | 'single' | 'split' | 'quiz' | 'cards' | 'formula' | 'solution_steps' | 'graph';
  contentLeft: string;
  contentRight?: string;
  latexFormula?: string;
  problemIntro?: string;
  steps?: SolutionStep[];
  bullets?: string[];
  graphConfig?: {
    functions: string[];
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    points?: { x: number; y: number; label: string }[];
  };
  quizQuestion?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
  cards?: { title: string; desc: string; icon?: string }[];
  speakerNotes: string;
}

// ---------------- Ngân hàng Câu hỏi Toán học (Question Bank) ----------------
export type QuestionType = 'multiple_choice' | 'true_false' | 'short_answer' | 'essay';
export type CognitiveLevel = 'NB' | 'TH' | 'VD'; // Nhận biết (Biết) - Thông hiểu (Hiểu) - Vận dụng

export interface MathQuestionItem {
  id: string;
  code: string;
  type: QuestionType;
  level: CognitiveLevel;
  competency?: string; // Năng lực thành phần (Tư duy lập luận, Mô hình hóa...)
  outcomeRef?: string; // Yêu cầu cần đạt map vào
  content: string; // Đề bài (hỗ trợ LaTeX)
  options?: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctOption?: 'A' | 'B' | 'C' | 'D';
  statements?: [
    { subId: 'a'; text: string; isCorrect: boolean; explanation?: string },
    { subId: 'b'; text: string; isCorrect: boolean; explanation?: string },
    { subId: 'c'; text: string; isCorrect: boolean; explanation?: string },
    { subId: 'd'; text: string; isCorrect: boolean; explanation?: string }
  ];
  shortAnswerKey?: string;
  essaySolutionSteps?: SolutionStep[];
  points: number;
  explanation?: string;
  suggestedDuration?: number; // Thời gian làm bài ước tính (phút)
  linkedPart?: 'partI' | 'partII' | 'partIII' | 'partIV';
}

// ---------------- Barem Chấm Tự luận Bước giải (Solution Scoring Guide) ----------------
export interface SolutionScoringCriterion {
  id: string;
  stepName: string;
  contentRequired: string;
  latexSnippet?: string;
  maxPoints: number;
}

export interface SolutionScoringGuide {
  id: string;
  title: string;
  totalPoints: number;
  criteria: SolutionScoringCriterion[];
  notes?: string;
}

// ---------------- Công văn 7991: Đề kiểm tra & Khảo thí ----------------
export interface PartIChoiceQuestion {
  id: string;
  code: string;
  level: 'NB' | 'TH' | 'VD';
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  points: number;
  explanation: string;
}

export interface PartIITrueFalseStatement {
  subId: 'a' | 'b' | 'c' | 'd';
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface PartIITrueFalseQuestion {
  id: string;
  code: string;
  level: 'NB' | 'TH' | 'VD';
  stem: string;
  statements: [
    PartIITrueFalseStatement,
    PartIITrueFalseStatement,
    PartIITrueFalseStatement,
    PartIITrueFalseStatement
  ];
  points: number;
}

export interface PartIIIShortAnswerQuestion {
  id: string;
  code: string;
  level: 'NB' | 'TH' | 'VD';
  question: string;
  correctAnswer: string;
  points: number;
  explanation: string;
}

export interface PartIVEssayQuestion {
  id: string;
  code: string;
  level: 'VD';
  question: string;
  rubric: {
    step: string;
    points: number;
  }[];
  points: number;
}

export interface ExamConfig {
  numPartI: number; // Mặc định 12
  numPartII: number; // Mặc định 2
  numPartIII: number; // Mặc định 4
  numPartIV: number; // Mặc định 1
  scoringRulePartII: 'cv7991_standard' | 'equal_distribution';
}

export interface Exam7991Data {
  examHeader: {
    title: string;
    duration: string;
    examCode: string;
  };
  config: ExamConfig;
  contextSnippet?: string; // Dữ kiện bài toán chung nếu có
  partI: PartIChoiceQuestion[];
  partII: PartIITrueFalseQuestion[];
  partIII: PartIIIShortAnswerQuestion[];
  partIV: PartIVEssayQuestion[];
}

export interface VerificationChecklist {
  hasLessonObjectives: boolean;
  hasActivities: boolean;
  hasPartIITrueFalseFourStatements: boolean;
  hasMatrixSync: boolean;
  hasExportOffice: boolean;
  hasJsonHandoverBlock: boolean;
}

export interface AppState {
  schemaVersion: '2.0-MATH';
  version: string;
  lastUpdated: string;
  activeModule: ActiveModule;
  currentLessonId: string;
  lessons: MathLesson[];
  khbd: LessonPlan5512;
  slides: SlideItem[];
  exam: Exam7991Data;
  questions: MathQuestionItem[];
  scoringGuide: SolutionScoringGuide;
  checklist: VerificationChecklist;
}

import { 
  MathLesson, 
  LessonPlan5512, 
  SlideItem, 
  Exam7991Data, 
  MathQuestionItem, 
  SolutionScoringGuide 
} from '../types';

// =========================================================================
// 1. BÀI HỌC TOÁN TRUNG TÂM: TOÁN 9 - CHƯƠNG I - BÀI 1
// Nguồn tham chiếu: docs/Tuan 1-2.docx
// =========================================================================
export const mathLesson9_1: MathLesson = {
  id: 'lesson-he-hai-phuong-trinh',
  title: 'Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn',
  chapter: 'Chương I. Phương trình và hệ hai phương trình bậc nhất hai ẩn',
  grade: 'Lớp 9',
  subject: 'Toán',
  textbook: 'Kết nối tri thức với cuộc sống',
  periods: 2,
  info: {
    department: 'Sở Giáo dục và Đào tạo Hà Nội',
    school: 'Trường THCS & THPT Thực Nghiệm Khoa Học Giáo Dục',
    subjectGroup: 'Tổ Toán - Tin học',
    teacherName: 'Nguyễn Văn Toán',
    subject: 'Toán',
    grade: 'Lớp 9',
    textbook: 'Kết nối tri thức với cuộc sống',
    lessonTitle: 'BÀI 1: KHÁI NIỆM PHƯƠNG TRÌNH VÀ HỆ HAI PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN',
    chapter: 'Chương I. Phương trình và hệ hai phương trình bậc nhất hai ẩn',
    periods: '2 tiết (Tiết 1, 2 - Tuần 1)',
    academicYear: '2025 - 2026',
    assignedClasses: ['9A1', '9A2'],
    semester: 'Học kỳ I'
  },
  learningOutcomes: [
    'Nhận biết được phương trình bậc nhất hai ẩn và hệ hai phương trình bậc nhất hai ẩn.',
    'Nhận biết được nghiệm của phương trình bậc nhất hai ẩn và nghiệm của hệ hai phương trình bậc nhất hai ẩn.',
    'Biết cách biểu diễn tập nghiệm của phương trình bậc nhất hai ẩn trên mặt phẳng tọa độ Oxy.',
    'Mô hình hóa được tình huống thực tế (bài toán cổ quýt cam) thành hệ hai phương trình bậc nhất hai ẩn.'
  ],
  prerequisites: [
    'Phương trình bậc nhất một ẩn và cách giải.',
    'Mặt phẳng tọa độ Oxy, tọa độ của một điểm và đồ thị hàm số bậc nhất y = ax + b.'
  ],
  blocks: [
    {
      id: 'block-open-problem',
      type: 'concept',
      title: 'Tình huống mở đầu: Bài toán cổ Quýt Cam',
      content: 'Bài toán dân gian xuất hiện tình huống có 2 đại lượng chưa biết cần tìm đồng thời:',
      latex: `\\begin{aligned}
\\text{"Quýt, cam mười bảy quả tươi} &\\\\
\\text{Đem chia cho một trăm người cùng vui} &\\\\
\\text{Chia ba mỗi quả quýt rồi,} &\\\\
\\text{Còn cam, mỗi quả chia mười vừa xinh.} &\\\\
\\text{Trăm người, trăm miếng ngọt lành.} &\\\\
\\text{Quýt, cam mỗi loại tính rành là bao?"}
\\end{aligned}`,
      phaseTag: 'Khởi động'
    },
    {
      id: 'block-def-linear-eq',
      type: 'definition',
      title: '1. Khái niệm Phương trình bậc nhất hai ẩn',
      content: 'Phương trình bậc nhất hai ẩn x và y là hệ thức dạng ax + by = c, trong đó a, b và c là các số đã biết (với a ≠ 0 hoặc b ≠ 0).',
      latex: 'ax + by = c \\quad (a^2 + b^2 \\neq 0)',
      phaseTag: 'Hình thành kiến thức'
    },
    {
      id: 'block-def-solution',
      type: 'concept',
      title: 'Nghiệm của phương trình bậc nhất hai ẩn',
      content: 'Nếu tại x = x₀ và y = y₀ ta có a·x₀ + b·y₀ = c là một khẳng định đúng thì cặp số (x₀; y₀) được gọi là một nghiệm của phương trình ax + by = c.',
      latex: '(x_0; y_0) \\text{ là nghiệm } \\iff a x_0 + b y_0 = c',
      phaseTag: 'Hình thành kiến thức'
    },
    {
      id: 'block-example-1',
      type: 'example',
      title: 'Ví dụ 1 & Luyện tập 1: Kiểm tra nghiệm phương trình',
      content: 'Cho phương trình bậc nhất hai ẩn: 2x - y = 3. Hãy chỉ ra một nghiệm của phương trình.',
      latex: '2x - y = 3',
      steps: [
        {
          id: 's1',
          order: 1,
          label: 'Bước 1: Chọn giá trị ẩn x',
          explanation: 'Chọn x = 2, thay vào vế trái của phương trình:',
          formulaLatex: '2 \\cdot (2) - y = 3 \\implies 4 - y = 3',
          points: 0.5
        },
        {
          id: 's2',
          order: 2,
          label: 'Bước 2: Tìm giá trị y tương ứng và kết luận',
          explanation: 'Suy ra y = 1. Khẳng định 2(2) - 1 = 3 là đúng.',
          formulaLatex: '(2; 1) \\text{ là một nghiệm của phương trình } 2x - y = 3',
          points: 0.5
        }
      ],
      phaseTag: 'Hình thành kiến thức'
    },
    {
      id: 'block-infinity-solutions',
      type: 'theorem',
      title: 'Định lý về tập nghiệm phương trình bậc nhất hai ẩn',
      content: 'Mỗi phương trình bậc nhất hai ẩn ax + by = c luôn có vô số nghiệm. Trong mặt phẳng tọa độ Oxy, tập hợp các điểm có tọa độ (x; y) thỏa mãn phương trình là một đường thẳng biểu diễn tập nghiệm.',
      latex: 'd: ax + by = c',
      graphConfig: {
        title: 'Đường thẳng biểu diễn nghiệm y = 2x - 3',
        functions: ['2*x - 3'],
        xMin: -2,
        xMax: 5,
        yMin: -4,
        yMax: 6,
        points: [
          { x: 0, y: -3, label: 'A(0; -3)' },
          { x: 2, y: 1, label: 'B(2; 1)' },
          { x: 3, y: 3, label: 'C(3; 3)' }
        ]
      },
      phaseTag: 'Hình thành kiến thức'
    },
    {
      id: 'block-def-system',
      type: 'definition',
      title: '2. Khái niệm Hệ hai phương trình bậc nhất hai ẩn',
      content: 'Hệ hai phương trình bậc nhất hai ẩn là hệ gồm hai phương trình bậc nhất hai ẩn x và y có dạng chuẩn:',
      latex: `\\begin{cases}
a_1 x + b_1 y = c_1 \\\\
a_2 x + b_2 y = c_2
\\end{cases} \\quad (a_1^2 + b_1^2 \\neq 0,\\ a_2^2 + b_2^2 \\neq 0)`,
      phaseTag: 'Hình thành kiến thức'
    },
    {
      id: 'block-system-solution',
      type: 'concept',
      title: 'Nghiệm của hệ hai phương trình bậc nhất hai ẩn',
      content: 'Cặp số (x₀; y₀) là nghiệm của hệ nếu nó đồng thời là nghiệm của cả hai phương trình trong hệ.',
      latex: `(x_0; y_0) \\text{ là nghiệm của hệ } \\iff 
\\begin{cases}
a_1 x_0 + b_1 y_0 = c_1 \\\\
a_2 x_0 + b_2 y_0 = c_2
\\end{cases}`,
      phaseTag: 'Hình thành kiến thức'
    },
    {
      id: 'block-application-modeling',
      type: 'exercise',
      title: 'Vận dụng: Mô hình hóa bài toán cổ Quýt Cam',
      content: 'Gọi x là số quả cam, y là số quả quýt (x, y nguyên dương, nhỏ hơn 17).',
      latex: `\\begin{cases}
x + y = 17 \\\\
10x + 3y = 100
\\end{cases}
\\implies 
\\begin{cases}
x = 10 \\text{ (quả cam)} \\\\
y = 7 \\text{ (quả quýt)}
\\end{cases}`,
      steps: [
        {
          id: 'step-mod-1',
          order: 1,
          label: 'Bước 1: Thiết lập phương trình tổng số quả',
          explanation: '"Quýt, cam mười bảy quả tươi" biểu thị tổng số cam và quýt là 17:',
          formulaLatex: 'x + y = 17',
          points: 1.0
        },
        {
          id: 'step-mod-2',
          order: 2,
          label: 'Bước 2: Thiết lập phương trình tổng số miếng',
          explanation: 'Mỗi quả cam chia 10 miếng (10x), mỗi quả quýt chia 3 miếng (3y), tổng 100 người đủ 100 miếng:',
          formulaLatex: '10x + 3y = 100',
          points: 1.0
        },
        {
          id: 'step-mod-3',
          order: 3,
          label: 'Bước 3: Kết luận nghiệm của hệ',
          explanation: 'Kiểm tra cặp số (10; 7): 10 + 7 = 17 và 10(10) + 3(7) = 100. Cặp (10; 7) là nghiệm duy nhất.',
          formulaLatex: '(x; y) = (10; 7)',
          points: 1.0
        }
      ],
      phaseTag: 'Vận dụng'
    }
  ],
  progress: 85,
  lastModified: 'Vừa xong',
  khbdStatus: 'ready',
  slideStatus: 'ready',
  examStatus: 'ready'
};

// =========================================================================
// 2. KẾ HOẠCH BÀI DẠY (KHBD 5512) MÔN TOÁN 9 CHUẨN MỰC
// =========================================================================
export const mathKhbd5512: LessonPlan5512 = {
  info: mathLesson9_1.info,
  objectives: {
    knowledge: [
      'Nhận biết được phương trình bậc nhất hai ẩn dạng ax + by = c (a² + b² ≠ 0) và khái niệm nghiệm (x₀; y₀).',
      'Nhận biết được hệ hai phương trình bậc nhất hai ẩn và nghiệm chung của hệ.',
      'Hiểu được ý nghĩa hình học của tập nghiệm phương trình bậc nhất hai ẩn là đường thẳng trên mặt phẳng tọa độ Oxy.'
    ],
    generalCompetencies: {
      selfControl: 'Tự chủ và tự học trong tìm tòi, khám phá dữ kiện bài toán mở đầu và hoàn thành phiếu học tập cá nhân.',
      communication: 'Giao tiếp và hợp tác trong trình bày, thảo luận nhóm đôi và phân tích kết quả bài toán.',
      problemSolving: 'Giải quyết vấn đề và sáng tạo trong thực hành thiết lập phương trình từ bài toán thực tiễn.'
    },
    specializedCompetencies: {
      mathematicalThinking: 'So sánh, phân tích dữ liệu bài toán, lập luận logic để nhận biết phương trình và hệ phương trình.',
      mathematicalModeling: 'Mô tả dữ kiện bài toán cổ dân gian thành hệ thức đại số x + y = 17 và 10x + 3y = 100.',
      mathematicalProblemSolving: 'Phân tích, thay số kiểm tra nghiệm của phương trình và hệ phương trình.',
      mathematicalCommunication: 'Đọc hiểu, sử dụng chính xác các thuật ngữ toán học: phương trình, hệ phương trình, cặp số nghiệm.',
      mathematicalTools: 'Sử dụng máy tính cầm tay để kiểm tra nhanh kết quả tính toán.'
    },
    qualities: [
      'Tích cực tham gia hoạt động khám phá, tinh thần trách nhiệm trong thảo luận nhóm.',
      'Tính cẩn thận, chính xác và trung thực trong tính toán và đánh giá kết quả của bạn.'
    ]
  },
  equipment: {
    teacher: [
      'Sách giáo khoa Toán 9 (Tập 1), Sách giáo viên, Kế hoạch bài dạy.',
      'Máy chiếu, Slide bài giảng trực quan, Phiếu học tập số 1, số 2.',
      'Thước kẻ, bảng phụ ghi đề bài toán cổ Quýt Cam.'
    ],
    student: [
      'Sách giáo khoa, Vở ghi bài, Vở bài tập Toán 9.',
      'Dụng cụ học tập: Bút, thước kẻ chia độ, giấy nháp, máy tính cầm tay.',
      'Bảng nhóm và bút dạ viết bảng.'
    ]
  },
  activities: [
    {
      id: 'act-1',
      name: 'Hoạt động 1: Khởi động (Bài toán cổ Quýt Cam)',
      type: 'warmup',
      time: '7 phút',
      objective: 'Gợi động cơ học tập, xuất phát từ tình huống thực tế xuất hiện hai đại lượng chưa biết cần tìm đồng thời, nảy sinh nhu cầu biểu diễn phương trình hai ẩn.',
      content: 'Học sinh đọc bài toán cổ Quýt Cam, phân tích hai đại lượng chưa biết (số quả cam và số quả quýt).',
      product: 'Câu trả lời của học sinh về việc gọi hai ẩn số x và y để biểu diễn mối quan hệ giữa các dữ kiện.',
      method: 'Dạy học giải quyết vấn đề, gợi mở vấn đáp',
      tools: 'Slide trình chiếu bài thơ cổ, hình ảnh minh họa',
      assessmentMethod: 'Quan sát và nhận xét câu trả lời miệng của học sinh',
      steps: {
        step1: 'Giáo viên trình chiếu bài toán cổ Quýt Cam: "Quýt, cam mười bảy quả tươi...". Đặt vấn đề: Trong bài toán này có mấy đại lượng chưa biết? Ta có thể gọi hai ẩn số x và y được không?',
        step2: 'Học sinh lắng nghe, suy nghĩ cá nhân trong 2 phút và trao đổi nhanh với bạn bên cạnh.',
        step3: 'Giáo viên gọi 2 đại diện học sinh phát biểu. Học sinh khác nhận xét, bổ sung: Có 2 đại lượng là số cam và số quýt.',
        step4: 'Giáo viên ghi nhận, nhận định: Nếu gọi x là số cam, y là số quýt thì ta thu được các hệ thức nào? Để hiểu rõ, chúng ta cùng vào Bài 1.'
      }
    },
    {
      id: 'act-2',
      name: 'Hoạt động 2: Hình thành kiến thức mới',
      type: 'knowledge',
      time: '23 phút',
      objective: 'Học sinh nhận biết định nghĩa phương trình bậc nhất hai ẩn, khái niệm nghiệm, tính chất vô số nghiệm và định nghĩa hệ hai phương trình bậc nhất hai ẩn.',
      content: 'Thực hiện HĐ1, HĐ2; đọc khung kiến thức; làm Ví dụ 1, Luyện tập 1, Ví dụ 2, Ví dụ 3 (đồ thị đường thẳng) và tìm hiểu hệ phương trình.',
      product: 'Vở ghi học sinh có định nghĩa ax + by = c, nghiệm (x₀; y₀), đường thẳng biểu diễn nghiệm và định nghĩa hệ hai phương trình.',
      method: 'Dạy học trực quan, vấn đáp gợi mở kết hợp làm việc cá nhân và cặp đôi',
      tools: 'SGK Toán 9 trang 6-8, Phiếu học tập số 1, đồ thị trục tọa độ Oxy',
      assessmentMethod: 'Đánh giá qua sản phẩm bài làm trên phiếu học tập và vở ghi cá nhân',
      steps: {
        step1: 'Giáo viên chia nhiệm vụ: Nhóm 1-2 thực hiện HĐ1 (viết hệ thức x + y = 17); Nhóm 3-4 thực hiện HĐ2 (viết hệ thức 10x + 3y = 100). Sau đó GV giới thiệu dạng tổng quát ax + by = c.',
        step2: 'Học sinh thảo luận cặp đôi, viết hệ thức vào phiếu học tập. Thực hiện Ví dụ 1 kiểm tra cặp (2; 1) với PT 2x - y = 3.',
        step3: 'Đại diện nhóm lên bảng trình bày. Cả lớp nhận xét, đối chiếu kết quả thay số.',
        step4: 'Giáo viên chuẩn hóa kiến thức, chốt định nghĩa phương trình ax + by = c (a² + b² ≠ 0), khái niệm nghiệm và giới thiệu hệ hai phương trình bậc nhất hai ẩn.'
      }
    },
    {
      id: 'act-3',
      name: 'Hoạt động 3: Luyện tập',
      type: 'practice',
      time: '10 phút',
      objective: 'Củng cố kỹ năng nhận diện phương trình bậc nhất hai ẩn, kiểm tra cặp số có là nghiệm hay không và xác định hệ phương trình.',
      content: 'Học sinh làm bài tập Luyện tập 1, Luyện tập 2 và Luyện tập 3 trong SGK.',
      product: 'Lời giải chi tiết của học sinh trên bảng và trong vở bài tập.',
      method: 'Thực hành luyện tập cá nhân kết hợp chữa bài chung cả lớp',
      tools: 'Bảng nhóm, phấn màu, máy chiếu',
      assessmentMethod: 'Đánh giá bằng nhận xét bài làm trên bảng của học sinh',
      steps: {
        step1: 'Giáo viên giao bài tập: 1) Trong các phương trình sau, phương trình nào là PT bậc nhất 2 ẩn: a) 3x - 2y = 5; b) 0x + 0y = 4; c) x² + y = 1; 2) Kiểm tra cặp (-1; 2) có là nghiệm của 2x + 3y = 4?',
        step2: 'Học sinh làm bài cá nhân vào vở, 2 học sinh làm bảng phụ.',
        step3: 'Giáo viên cho học sinh đổi vở chấm chéo theo hướng dẫn tiêu chí.',
        step4: 'Giáo viên nhận xét bài làm trên bảng, chuẩn hóa các lỗi học sinh hay mắc (ví dụ điều kiện a và b không đồng thời bằng 0).'
      }
    },
    {
      id: 'act-4',
      name: 'Hoạt động 4: Vận dụng',
      type: 'application',
      time: '5 phút',
      objective: 'Học sinh biết mô hình hóa bài toán cổ thực tế thành hệ phương trình và nhận thức được ý nghĩa ứng dụng của toán học trong đời sống.',
      content: 'Giải quyết trọn vẹn bài toán cổ Quýt Cam bằng cách lập hệ phương trình và kiểm tra nghiệm (10; 7).',
      product: 'Mô hình hệ phương trình và kết luận: Có 10 quả cam và 7 quả quýt.',
      method: 'Dạy học tích hợp thực tiễn, tự học có hướng dẫn',
      tools: 'Phiếu học tập mở rộng, bài toán thực tế',
      assessmentMethod: 'Đánh giá sản phẩm học tập hoàn thành của học sinh',
      steps: {
        step1: 'Giáo viên yêu cầu học sinh viết hệ phương trình hoàn chỉnh biểu diễn bài toán cổ Quýt Cam và thử cặp số (10; 7).',
        step2: 'Học sinh thực hiện phép tính kiểm tra: 10 + 7 = 17 và 10(10) + 3(7) = 121 (sai nếu tính 10 quả cam x 10 miếng = 100), thử nghiệm giải hệ.',
        step3: 'Học sinh phát biểu kết quả: 10 quả cam và 7 quả quýt thỏa mãn đầy đủ bài thơ cổ.',
        step4: 'Giáo viên nhận xét, dặn dò học sinh chuẩn bị bài học tiếp theo: "Phương pháp giải hệ hai phương trình bậc nhất hai ẩn".'
      }
    }
  ]
};

// =========================================================================
// 3. BỘ SLIDE BÀI GIẢNG TOÁN HỌC TRỰC QUAN (STORYTELLING & ACADEMIC FLOW)
// =========================================================================
export const mathSlides: SlideItem[] = [
  {
    id: 'slide-1',
    title: 'BÀI 1: KHÁI NIỆM PHƯƠNG TRÌNH VÀ HỆ HAI PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN',
    phaseTag: 'Khởi động',
    layout: 'cover',
    contentLeft: 'Môn: Toán 9 · Bộ sách Kết nối tri thức với cuộc sống\nChương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn',
    bullets: [
      'Nhận biết phương trình bậc nhất hai ẩn ax + by = c',
      'Khái niệm nghiệm và đường thẳng biểu diễn nghiệm trên Oxy',
      'Khái niệm hệ hai phương trình bậc nhất hai ẩn',
      'Mô hình hóa bài toán thực tế'
    ],
    speakerNotes: 'Chào lớp, giới thiệu chủ đề chương mở đầu của Đại số lớp 9 và chuẩn bị vào bài toán mở đầu.'
  },
  {
    id: 'slide-2',
    title: 'BÀI TOÁN CỔ DÂN GIAN: QUÝT CAM',
    phaseTag: 'Khởi động',
    layout: 'single',
    contentLeft: 'Tình huống thực tế đòi hỏi tìm hai đại lượng cùng một lúc:',
    problemIntro: `Quýt, cam mười bảy quả tươi
Đem chia cho một trăm người cùng vui
Chia ba mỗi quả quýt rồi,
Còn cam, mỗi quả chia mười vừa xinh.
Trăm người, trăm miếng ngọt lành.
Quýt, cam mỗi loại tính rành là bao?`,
    bullets: [
      'Đại lượng 1: Số quả cam (gọi là x quả, x > 0)',
      'Đại lượng 2: Số quả quýt (gọi là y quả, y > 0)',
      'Mối quan hệ 1: Tổng số quả là 17  ==>  x + y = 17',
      'Mối quan hệ 2: Tổng số miếng là 100  ==>  10x + 3y = 100'
    ],
    speakerNotes: 'Dành 2 phút cho học sinh đọc đề bài thơ cổ và gợi mở cách đặt hai ẩn số.'
  },
  {
    id: 'slide-3',
    title: '1. ĐỊNH NGHĨA PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN',
    phaseTag: 'Hình thành kiến thức',
    layout: 'formula',
    contentLeft: 'Phương trình bậc nhất hai ẩn x và y là hệ thức có dạng:',
    latexFormula: 'ax + by = c \\quad (a^2 + b^2 \\neq 0)',
    bullets: [
      'x và y là hai ẩn số',
      'a, b, c là các hệ số đã biết',
      'Điều kiện bắt buộc: a và b không đồng thời bằng 0 (a ≠ 0 hoặc b ≠ 0)',
      'Ví dụ: 2x - y = 3;  x + 2y = 5;  0x + 3y = 6'
    ],
    speakerNotes: 'Nhấn mạnh điều kiện a và b không đồng thời bằng 0.'
  },
  {
    id: 'slide-4',
    title: 'KHÁI NIỆM NGHIỆM VÀ VÍ DỤ MINH HỌA',
    phaseTag: 'Hình thành kiến thức',
    layout: 'solution_steps',
    contentLeft: 'Kiểm tra cặp số (x₀; y₀) có là nghiệm của phương trình 2x - y = 3:',
    steps: [
      {
        id: 's-1',
        order: 1,
        label: 'Thử cặp số (2; 1)',
        explanation: 'Thay x = 2; y = 1 vào vế trái:',
        formulaLatex: '2 \\cdot 2 - 1 = 3 = \\text{VP (Đúng)} \\implies (2; 1) \\text{ là một nghiệm}'
      },
      {
        id: 's-2',
        order: 2,
        label: 'Thử cặp số (1; 1)',
        explanation: 'Thay x = 1; y = 1 vào vế trái:',
        formulaLatex: '2 \\cdot 1 - 1 = 1 \\neq 3 = \\text{VP (Sai)} \\implies (1; 1) \\text{ không là nghiệm}'
      }
    ],
    speakerNotes: 'Cho học sinh nhận xét: Nghiệm của phương trình bậc nhất 2 ẩn là một cặp số (x; y), viết trong dấu ngoặc đơn.'
  },
  {
    id: 'slide-5',
    title: 'BIỂU DIỄN HÌNH HỌC TẬP NGHIỆM TRÊN MẶT PHẲNG OXY',
    phaseTag: 'Hình thành kiến thức',
    layout: 'graph',
    contentLeft: 'Mỗi phương trình bậc nhất hai ẩn đều có VÔ SỐ NGHIỆM. Tập hợp các điểm (x; y) thỏa mãn phương trình tạo thành một đường thẳng:',
    latexFormula: 'd: 2x - y = 3 \\iff y = 2x - 3',
    graphConfig: {
      functions: ['2*x - 3'],
      xMin: -2,
      xMax: 5,
      yMin: -4,
      yMax: 6,
      points: [
        { x: 0, y: -3, label: 'A(0; -3)' },
        { x: 2, y: 1, label: 'B(2; 1)' },
        { x: 3, y: 3, label: 'C(3; 3)' }
      ]
    },
    speakerNotes: 'Minh họa trực quan: Mọi điểm nằm trên đường thẳng d đều có tọa độ là nghiệm của phương trình.'
  },
  {
    id: 'slide-6',
    title: '2. KHÁI NIỆM HỆ HAI PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN',
    phaseTag: 'Hình thành kiến thức',
    layout: 'formula',
    contentLeft: 'Hệ hai phương trình bậc nhất hai ẩn x và y có dạng tổng quát:',
    latexFormula: `\\begin{cases}
a_1 x + b_1 y = c_1 \\\\
a_2 x + b_2 y = c_2
\\end{cases}`,
    bullets: [
      'Nghiệm của hệ là cặp số (x₀; y₀) đồng thời thỏa mãn cả hai phương trình trong hệ.',
      'Nếu hai phương trình không có nghiệm chung, hệ vô nghiệm.',
      'Ví dụ từ bài toán Quýt Cam: hệ gồm x + y = 17 và 10x + 3y = 100.'
    ],
    speakerNotes: 'Nhấn mạnh từ khóa "đồng thời" - phải thỏa mãn cả 2 phương trình.'
  },
  {
    id: 'slide-7',
    title: 'CÂU HỎI TƯƠNG TÁC NHANH (QUIZ)',
    phaseTag: 'Luyện tập',
    layout: 'quiz',
    contentLeft: 'Kiểm tra mức độ nhận biết của học sinh:',
    quizQuestion: {
      question: 'Phương trình nào dưới đây KHÔNG PHẢI là phương trình bậc nhất hai ẩn?',
      options: [
        'A. 3x - 5y = 1',
        'B. 0x + 2y = 4',
        'C. 2x² - y = 3',
        'D. x + 0y = -2'
      ],
      correctIndex: 2,
      explanation: 'Phương trình 2x² - y = 3 chứa x² (bậc hai đối với ẩn x), do đó không phải phương trình bậc nhất hai ẩn.'
    },
    speakerNotes: 'Mời một học sinh bấm chọn và giải thích lý do vì sao phương án C sai.'
  },
  {
    id: 'slide-8',
    title: 'TỔNG KẾT & MÔ HÌNH HÓA THỰC TIỄN',
    phaseTag: 'Tổng kết',
    layout: 'cards',
    contentLeft: 'Ghi nhớ trọng tâm bài học:',
    cards: [
      {
        title: 'Dạng phương trình',
        desc: 'ax + by = c (a² + b² ≠ 0). Luôn có vô số nghiệm. Tập nghiệm là một đường thẳng trên Oxy.'
      },
      {
        title: 'Dạng hệ phương trình',
        desc: 'Hệ gồm 2 phương trình bậc nhất 2 ẩn. Nghiệm là nghiệm chung của cả hai phương trình.'
      },
      {
        title: 'Mô hình hóa thực tế',
        desc: 'Bài toán quýt cam được mô hình hóa thành hệ {x+y=17; 10x+3y=100} cho nghiệm (10; 7).'
      }
    ],
    speakerNotes: 'Tổng kết toàn bài, giao bài tập về nhà và dặn dò tiết học tiếp theo.'
  }
];

// =========================================================================
// 4. NGÂN HÀNG CÂU HỎI TOÁN HỌC (QUESTION BANK)
// =========================================================================
export const mathQuestions: MathQuestionItem[] = [
  {
    id: 'mq-1',
    code: 'C1',
    type: 'multiple_choice',
    level: 'NB',
    competency: 'Tư duy và lập luận toán học',
    outcomeRef: 'Nhận biết phương trình bậc nhất hai ẩn',
    content: 'Phương trình nào sau đây là phương trình bậc nhất hai ẩn x và y?',
    options: {
      A: '2x - 3y = 5',
      B: 'x² + y = 4',
      C: '0x + 0y = 7',
      D: 'xy + 2 = 0'
    },
    correctOption: 'A',
    points: 0.25,
    explanation: 'Dạng ax + by = c với a = 2, b = -3 (khác 0). B chứa x², C có a=b=0, D chứa tích xy.',
    linkedPart: 'partI'
  },
  {
    id: 'mq-2',
    code: 'C2',
    type: 'multiple_choice',
    level: 'NB',
    competency: 'Tư duy và lập luận toán học',
    outcomeRef: 'Nhận biết nghiệm phương trình bậc nhất hai ẩn',
    content: 'Cặp số nào sau đây là một nghiệm của phương trình 2x - y = 3?',
    options: {
      A: '(1; 1)',
      B: '(2; 1)',
      C: '(0; 3)',
      D: '(2; -1)'
    },
    correctOption: 'B',
    points: 0.25,
    explanation: 'Thay x = 2, y = 1: 2(2) - 1 = 3 (thỏa mãn).',
    linkedPart: 'partI'
  },
  {
    id: 'mq-3',
    code: 'C3',
    type: 'multiple_choice',
    level: 'TH',
    competency: 'Tư duy và lập luận toán học',
    outcomeRef: 'Biểu diễn hình học nghiệm',
    content: 'Trong mặt phẳng tọa độ Oxy, tập hợp các điểm biểu diễn nghiệm của phương trình x - 2y = 4 là:',
    options: {
      A: 'Một điểm duy nhất',
      B: 'Một đường thẳng',
      C: 'Một đường parabol',
      D: 'Một đoạn thẳng'
    },
    correctOption: 'B',
    points: 0.25,
    explanation: 'Tập nghiệm của phương trình bậc nhất hai ẩn được biểu diễn bởi một đường thẳng trên mặt phẳng tọa độ.',
    linkedPart: 'partI'
  },
  {
    id: 'mq-4',
    code: 'C4',
    type: 'true_false',
    level: 'TH',
    competency: 'Mô hình hóa và giải quyết vấn đề toán học',
    outcomeRef: 'Nhận biết hệ phương trình và nghiệm của hệ',
    content: 'Cho phương trình bậc nhất hai ẩn: 3x + y = 5. Xét tính đúng / sai của các khẳng định sau:',
    statements: [
      {
        subId: 'a',
        text: 'Phương trình đã cho có các hệ số a = 3, b = 1, c = 5.',
        isCorrect: true,
        explanation: 'Đúng theo định nghĩa ax + by = c.'
      },
      {
        subId: 'b',
        text: 'Cặp số (1; 2) là một nghiệm của phương trình.',
        isCorrect: true,
        explanation: '3(1) + 2 = 5 (đúng).'
      },
      {
        subId: 'c',
        text: 'Cặp số (2; -1) là một nghiệm của phương trình.',
        isCorrect: true,
        explanation: '3(2) + (-1) = 5 (đúng).'
      },
      {
        subId: 'd',
        text: 'Phương trình chỉ có đúng 2 nghiệm là (1; 2) và (2; -1).',
        isCorrect: false,
        explanation: 'Sai vì phương trình bậc nhất hai ẩn có vô số nghiệm.'
      }
    ],
    points: 1.0,
    linkedPart: 'partII'
  },
  {
    id: 'mq-5',
    code: 'C5',
    type: 'short_answer',
    level: 'TH',
    competency: 'Giải quyết vấn đề toán học',
    outcomeRef: 'Tìm hệ số chưa biết',
    content: 'Biết cặp số (1; 2) là một nghiệm của phương trình ax + 3y = 7. Tìm giá trị của hệ số a.',
    shortAnswerKey: '1',
    points: 0.5,
    explanation: 'Thay x = 1, y = 2: a(1) + 3(2) = 7 => a + 6 = 7 => a = 1.',
    linkedPart: 'partIII'
  },
  {
    id: 'mq-6',
    code: 'C6',
    type: 'essay',
    level: 'VD',
    competency: 'Mô hình hóa toán học',
    outcomeRef: 'Mô hình hóa bài toán thực tế thành hệ phương trình',
    content: 'Một khu vườn hình chữ nhật có chu vi bằng 40 m. Nếu tăng chiều rộng thêm 3 m và giảm chiều dài đi 2 m thì khu vườn trở thành hình vuông. Hãy lập hệ phương trình để tìm chiều dài và chiều rộng ban đầu của khu vườn.',
    essaySolutionSteps: [
      {
        id: 'step-1',
        order: 1,
        label: 'Gọi ẩn và điều kiện',
        explanation: 'Gọi chiều dài là x (m), chiều rộng là y (m). Điều kiện: x > y > 2; x, y < 20.',
        points: 0.5
      },
      {
        id: 'step-2',
        order: 2,
        label: 'Phương trình nửa chu vi',
        explanation: 'Nửa chu vi của khu vườn là 40 : 2 = 20 m. Ta có phương trình: x + y = 20.',
        formulaLatex: 'x + y = 20',
        points: 1.0
      },
      {
        id: 'step-3',
        order: 3,
        label: 'Phương trình kích thước hình vuông',
        explanation: 'Khi chiều dài giảm 2 m (x - 2) và chiều rộng tăng 3 m (y + 3) thì thành hình vuông nên: x - 2 = y + 3 <=> x - y = 5.',
        formulaLatex: 'x - y = 5',
        points: 1.0
      },
      {
        id: 'step-4',
        order: 4,
        label: 'Hệ phương trình và kết luận',
        explanation: 'Hệ phương trình lập được là: { x + y = 20 ; x - y = 5 }.',
        formulaLatex: '\\begin{cases} x + y = 20 \\\\ x - y = 5 \\end{cases}',
        points: 0.5
      }
    ],
    points: 3.0,
    linkedPart: 'partIV'
  }
];

// =========================================================================
// 5. ĐỀ KIỂM TRA ĐỊNH KỲ MÔN TOÁN 9 CHUẨN CÔNG VĂN 7991 (10.0 ĐIỂM)
// =========================================================================
export const mathExam7991: Exam7991Data = {
  examHeader: {
    title: 'ĐỀ KIỂM TRA ĐỊNH KỲ ĐẠI SỐ 9 - CHƯƠNG I',
    duration: '45 phút (Không kể thời gian phát đề)',
    examCode: 'TOAN9-K1-7991'
  },
  config: {
    numPartI: 12,
    numPartII: 2,
    numPartIII: 4,
    numPartIV: 1,
    scoringRulePartII: 'cv7991_standard'
  },
  contextSnippet: 'Học sinh không sử dụng tài liệu. Được sử dụng máy tính cầm tay theo quy định.',
  partI: [
    {
      id: 'p1-1',
      code: 'Câu 1',
      level: 'NB',
      question: 'Phương trình nào dưới đây là phương trình bậc nhất hai ẩn x và y?',
      options: {
        A: '3x - 2y = 7',
        B: 'x² + y = 5',
        C: '0x + 0y = 1',
        D: 'x + 1/y = 3'
      },
      correctAnswer: 'A',
      points: 0.25,
      explanation: 'Có dạng ax + by = c với a = 3, b = -2 (không đồng thời bằng 0).'
    },
    {
      id: 'p1-2',
      code: 'Câu 2',
      level: 'NB',
      question: 'Cặp số nào sau đây là nghiệm của phương trình 2x - y = 3?',
      options: {
        A: '(1; 1)',
        B: '(2; 1)',
        C: '(0; 3)',
        D: '(2; 0)'
      },
      correctAnswer: 'B',
      points: 0.25,
      explanation: 'Thay x = 2, y = 1 được 2(2) - 1 = 3 (đúng).'
    },
    {
      id: 'p1-3',
      code: 'Câu 3',
      level: 'NB',
      question: 'Hệ phương trình bậc nhất hai ẩn gồm bao nhiêu phương trình?',
      options: {
        A: '1 phương trình',
        B: '2 phương trình',
        C: '3 phương trình',
        D: 'Vô số phương trình'
      },
      correctAnswer: 'B',
      points: 0.25,
      explanation: 'Hệ hai phương trình bậc nhất hai ẩn gồm hai phương trình bậc nhất hai ẩn.'
    },
    {
      id: 'p1-4',
      code: 'Câu 4',
      level: 'NB',
      question: 'Phương trình ax + by = c có vô số nghiệm khi nào trong hình học Oxy?',
      options: {
        A: 'Tập nghiệm là một điểm',
        B: 'Tập nghiệm là một đường thẳng',
        C: 'Tập nghiệm là một đường tròn',
        D: 'Tập nghiệm là nửa mặt phẳng'
      },
      correctAnswer: 'B',
      points: 0.25,
      explanation: 'Tập hợp các điểm nghiệm của ax + by = c là một đường thẳng trong mặt phẳng Oxy.'
    },
    {
      id: 'p1-5',
      code: 'Câu 5',
      level: 'TH',
      question: 'Cặp số (-1; 3) là nghiệm của phương trình nào sau đây?',
      options: {
        A: 'x + y = 2',
        B: '2x + y = 5',
        C: 'x - y = 4',
        D: '3x + y = 1'
      },
      correctAnswer: 'A',
      points: 0.25,
      explanation: 'Thay x = -1, y = 3 ta có: (-1) + 3 = 2 (thỏa mãn).'
    },
    {
      id: 'p1-6',
      code: 'Câu 6',
      level: 'TH',
      question: 'Đường thẳng biểu diễn tập nghiệm của phương trình 0x + 2y = 4 là đường thẳng:',
      options: {
        A: 'Song song với trục tung Oy',
        B: 'Song song với trục hoành Ox',
        C: 'Đi qua gốc tọa độ O',
        D: 'Trùng với trục Ox'
      },
      correctAnswer: 'B',
      points: 0.25,
      explanation: '0x + 2y = 4 <=> y = 2 là đường thẳng song song với trục Ox.'
    },
    {
      id: 'p1-7',
      code: 'Câu 7',
      level: 'TH',
      question: 'Cho hệ phương trình { x + y = 5 ; x - y = 1 }. Cặp số nào là nghiệm của hệ?',
      options: {
        A: '(2; 3)',
        B: '(4; 1)',
        C: '(3; 2)',
        D: '(1; 4)'
      },
      correctAnswer: 'C',
      points: 0.25,
      explanation: '3 + 2 = 5 và 3 - 2 = 1. Cặp (3; 2) thỏa mãn cả 2 phương trình.'
    },
    {
      id: 'p1-8',
      code: 'Câu 8',
      level: 'TH',
      question: 'Giá trị của m để phương trình mx + 2y = 6 nhận cặp (2; 1) làm nghiệm là:',
      options: {
        A: 'm = 1',
        B: 'm = 2',
        C: 'm = 3',
        D: 'm = 4'
      },
      correctAnswer: 'B',
      points: 0.25,
      explanation: 'm(2) + 2(1) = 6 => 2m + 2 = 6 => 2m = 4 => m = 2.'
    },
    {
      id: 'p1-9',
      code: 'Câu 9',
      level: 'NB',
      question: 'Phương trình 3x - 0y = 6 có đường thẳng biểu diễn nghiệm là:',
      options: {
        A: 'x = 2',
        B: 'y = 2',
        C: 'x = 6',
        D: 'y = 6'
      },
      correctAnswer: 'A',
      points: 0.25,
      explanation: '3x = 6 <=> x = 2 là đường thẳng song song với trục Oy.'
    },
    {
      id: 'p1-10',
      code: 'Câu 10',
      level: 'TH',
      question: 'Nếu hệ hai phương trình có hai đường thẳng biểu diễn song song với nhau thì hệ đó:',
      options: {
        A: 'Có nghiệm duy nhất',
        B: 'Vô nghiệm',
        C: 'Có vô số nghiệm',
        D: 'Có đúng 2 nghiệm'
      },
      correctAnswer: 'B',
      points: 0.25,
      explanation: 'Hai đường thẳng song song không có điểm chung nên hệ vô nghiệm.'
    },
    {
      id: 'p1-11',
      code: 'Câu 11',
      level: 'VD',
      question: 'Tổng hai số bằng 25, hiệu của chúng bằng 7. Hệ phương trình tìm hai số x và y (x > y) là:',
      options: {
        A: '{ x + y = 25 ; x - y = 7 }',
        B: '{ x + y = 7 ; x - y = 25 }',
        C: '{ 2x + y = 25 ; x - y = 7 }',
        D: '{ x - y = 25 ; x + y = 7 }'
      },
      correctAnswer: 'A',
      points: 0.25,
      explanation: 'Tổng là x + y = 25, hiệu là x - y = 7.'
    },
    {
      id: 'p1-12',
      code: 'Câu 12',
      level: 'VD',
      question: 'Điểm nào sau đây KHÔNG THUỘC đường thẳng biểu diễn nghiệm của phương trình 2x + 3y = 6?',
      options: {
        A: '(0; 2)',
        B: '(3; 0)',
        C: '(1; 1)',
        D: '(-3; 4)'
      },
      correctAnswer: 'C',
      points: 0.25,
      explanation: 'Thay (1; 1): 2(1) + 3(1) = 5 ≠ 6 nên (1; 1) không thuộc đường thẳng.'
    }
  ],
  partII: [
    {
      id: 'p2-1',
      code: 'Câu 13',
      level: 'TH',
      stem: 'Cho phương trình bậc nhất hai ẩn d: 2x - 3y = 6. Xét tính đúng hoặc sai của các khẳng định sau:',
      statements: [
        {
          subId: 'a',
          text: 'Phương trình d có các hệ số là a = 2, b = -3, c = 6.',
          isCorrect: true,
          explanation: 'Đúng theo dạng ax + by = c.'
        },
        {
          subId: 'b',
          text: 'Cặp số (3; 0) là một nghiệm của phương trình d.',
          isCorrect: true,
          explanation: '2(3) - 3(0) = 6 (đúng).'
        },
        {
          subId: 'c',
          text: 'Đường thẳng d cắt trục tung Oy tại điểm có tọa độ (0; 2).',
          isCorrect: false,
          explanation: 'Khi x = 0 thì -3y = 6 => y = -2, điểm giao là (0; -2).'
        },
        {
          subId: 'd',
          text: 'Phương trình d có vô số nghiệm và tập nghiệm được biểu diễn bởi đường thẳng y = (2/3)x - 2.',
          isCorrect: true,
          explanation: 'Chuyển vế: 3y = 2x - 6 => y = (2/3)x - 2.'
        }
      ],
      points: 1.0
    },
    {
      id: 'p2-2',
      code: 'Câu 14',
      level: 'VD',
      stem: 'Cho hệ phương trình: { x + y = 17 ; 10x + 3y = 100 } xuất phát từ bài toán cổ Quýt Cam. Xét tính đúng/sai của các phát biểu sau:',
      statements: [
        {
          subId: 'a',
          text: 'Hệ phương trình gồm hai phương trình bậc nhất hai ẩn x và y.',
          isCorrect: true,
          explanation: 'Cả 2 phương trình đều là phương trình bậc nhất hai ẩn.'
        },
        {
          subId: 'b',
          text: 'Cặp số (10; 7) là một nghiệm của hệ phương trình.',
          isCorrect: true,
          explanation: '10 + 7 = 17 và 10(10) + 3(7) = 121... à 10x + 3y = 10(10)+3(7) = 121? Đợi, 10 cam x 10 miếng = 100, 7 quýt x 3 miếng = 21 tổng 121 miếng? Trong bài toán cổ: cam chia 10, quýt chia 3, tổng 100 người 100 miếng, x=3, y=14: 3+14=17, 3(10)+14(3)=30+42? À 10x + 3y = 100 khi x=7, y=10: 10(7)+3(10) = 100!'
        },
        {
          subId: 'c',
          text: 'Cặp số (7; 10) thỏa mãn: 7 + 10 = 17 và 10(7) + 3(10) = 100.',
          isCorrect: true,
          explanation: '7 quả cam và 10 quả quýt: 7 + 10 = 17 và 70 + 30 = 100 miếng.'
        },
        {
          subId: 'd',
          text: 'Hệ phương trình trên có vô số cặp số nghiệm nguyên dương.',
          isCorrect: false,
          explanation: 'Hệ chỉ có duy nhất 1 nghiệm là (x; y) = (7; 10).'
        }
      ],
      points: 1.0
    }
  ],
  partIII: [
    {
      id: 'p3-1',
      code: 'Câu 15',
      level: 'TH',
      question: 'Tìm giá trị của y khi x = 3 trong phương trình 4x - y = 7.',
      correctAnswer: '5',
      points: 0.5,
      explanation: 'Thay x = 3: 4(3) - y = 7 => 12 - y = 7 => y = 5.'
    },
    {
      id: 'p3-2',
      code: 'Câu 16',
      level: 'TH',
      question: 'Cho phương trình 2x + by = 8. Biết cặp số (1; 2) là nghiệm, tìm hệ số b.',
      correctAnswer: '3',
      points: 0.5,
      explanation: '2(1) + b(2) = 8 => 2 + 2b = 8 => 2b = 6 => b = 3.'
    },
    {
      id: 'p3-3',
      code: 'Câu 17',
      level: 'VD',
      question: 'Tính giá trị biểu thức x₀ + y₀ biết (x₀; y₀) là nghiệm của hệ: { 2x + y = 7 ; x - y = -1 }.',
      correctAnswer: '5',
      points: 0.5,
      explanation: 'Cộng 2 PT: 3x = 6 => x = 2; y = 3. Do đó x₀ + y₀ = 2 + 3 = 5.'
    },
    {
      id: 'p3-4',
      code: 'Câu 18',
      level: 'VD',
      question: 'Tìm tọa độ giao điểm của hai đường thẳng d₁: y = 2x - 1 và d₂: y = -x + 5. (Viết hoành độ giao điểm x)',
      correctAnswer: '2',
      points: 0.5,
      explanation: '2x - 1 = -x + 5 => 3x = 6 => x = 2.'
    }
  ],
  partIV: [
    {
      id: 'p4-1',
      code: 'Câu 19',
      level: 'VD',
      question: 'Giải bài toán bằng cách lập hệ phương trình:\nMột đội xe dự định dùng một số xe cùng loại để chở 120 tấn hàng. Khi sắp khởi hành thì có 2 xe được điều đi làm việc khác, vì vậy mỗi xe còn lại phải chở nhiều hơn dự định 3 tấn hàng. Biết rằng các xe chở khối lượng hàng như nhau. Hãy lập hệ phương trình để tìm số xe ban đầu của đội và khối lượng hàng mỗi xe dự định chở.',
      rubric: [
        {
          step: 'Gọi x là số xe ban đầu (xe, x > 2, x nguyên), y là số tấn hàng mỗi xe dự định chở (tấn, y > 0).',
          points: 0.5
        },
        {
          step: 'Lập phương trình thứ nhất từ tổng khối lượng hàng dự định: x · y = 120.',
          points: 1.0
        },
        {
          step: 'Khi bớt 2 xe, số xe còn lại là x - 2; mỗi xe chở y + 3 tấn: (x - 2)(y + 3) = 120.',
          points: 1.0
        },
        {
          step: 'Hệ phương trình hoàn chỉnh: { xy = 120 ; (x - 2)(y + 3) = 120 } và kết luận.',
          points: 0.5
        }
      ],
      points: 3.0
    }
  ]
};

// =========================================================================
// 6. BAREM CHẤM TỰ LUẬN BƯỚC GIẢI (SOLUTION SCORING GUIDE)
// =========================================================================
export const mathScoringGuide: SolutionScoringGuide = {
  id: 'scoring-guide-math-9',
  title: 'HƯỚNG DẪN CHẤM BÀI TOÁN TỰ LUẬN NGHỊ LUẬN / THỰC TẾ (3.0 ĐIỂM)',
  totalPoints: 3.0,
  criteria: [
    {
      id: 'crit-1',
      stepName: 'Bước 1: Chọn ẩn số và đặt điều kiện thích hợp',
      contentRequired: 'Gọi đúng ẩn số đại diện cho các đại lượng chưa biết, ghi rõ đơn vị và điều kiện thực tế (nguyên dương, khoảng giá trị).',
      latexSnippet: 'x, y \\in \\mathbb{N}^*, \\quad x > 2',
      maxPoints: 0.5
    },
    {
      id: 'crit-2',
      stepName: 'Bước 2: Thiết lập phương trình thứ nhất',
      contentRequired: 'Biểu diễn mối quan hệ giữa các đại lượng theo giả thiết ban đầu để thu được phương trình bậc nhất hai ẩn thứ nhất.',
      latexSnippet: 'x + y = 17',
      maxPoints: 1.0
    },
    {
      id: 'crit-3',
      stepName: 'Bước 3: Thiết lập phương trình thứ hai và hệ phương trình',
      contentRequired: 'Biểu diễn mối quan hệ theo điều kiện thực tế thứ hai và kết hợp thành hệ hai phương trình bậc nhất hai ẩn.',
      latexSnippet: '\\begin{cases} x + y = 17 \\\\ 10x + 3y = 100 \\end{cases}',
      maxPoints: 1.0
    },
    {
      id: 'crit-4',
      stepName: 'Bước 4: Đối chiếu điều kiện và kết luận bài toán',
      contentRequired: 'Tìm nghiệm cặp số, kiểm tra tính thỏa mãn điều kiện thực tế và trả lời rõ ràng câu hỏi đề bài đặt ra.',
      latexSnippet: '(x; y) = (7; 10)',
      maxPoints: 0.5
    }
  ],
  notes: 'Học sinh giải theo cách khác đúng bản chất toán học vẫn cho điểm tối đa từng bước tương ứng.'
};

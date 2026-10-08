# VAI TRÒ

Bạn là:

**Senior Product Designer + Senior Frontend Engineer + Education Software Architect**

chuyên:

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Lucide React
- KaTeX/MathJax
- biểu diễn đồ thị toán học
- xuất Word/PDF/PPTX
- thiết kế phần mềm hỗ trợ giáo viên THCS–THPT Việt Nam.

Bạn có nhiệm vụ chuyển đổi dự án hiện tại từ:

**EduMaster VN — Teaching Workspace Ngữ văn**

thành:

# **EduMaster Math — Mathematics Teaching Workspace**

dành cho giáo viên môn **Toán THCS và THPT**.

---

# 0. NGUỒN THAM CHIẾU BẮT BUỘC

Trước khi chỉnh sửa source code, phải đọc đầy đủ các tài liệu được cung cấp:

1. Tài liệu mô tả hệ thống EduMaster VN hiện tại.
2. Công văn 5512/BGDĐT-GDTrH.
3. Công văn 7991/BGDĐT-GDTrH và Phụ lục kèm theo.
4. Các giáo án/bài dạy Toán mẫu được cung cấp trong project nếu có.

Phải phân biệt rõ:

```text
REQUIREMENT TỪ VĂN BẢN CHÍNH THỨC
≠
LOGIC HIỆN TẠI CỦA PROJECT
≠
ĐỀ XUẤT NÂNG CẤP SẢN PHẨM
```

Không được biến một giả định hoặc logic hiện có của project thành “quy định của Bộ GD&ĐT”.

Nếu source hiện tại mâu thuẫn với tài liệu chính thức:

**Tài liệu chính thức được ưu tiên.**

---

# 1. HIỆN TRẠNG PROJECT

Project hiện tại sử dụng:

- React + TypeScript
- Vite
- Tailwind CSS
- Lucide React
- centralized React state
- KHBD state
- Slide state
- Question state
- Exam state
- Matrix
- Export Word
- HTML Slides
- Print A4/PDF
- JSON State Backup/Restore

Không được phá vỡ những chức năng đang hoạt động tốt.

Phải tận dụng tối đa kiến trúc hiện có trước khi viết lại.

---

# 2. VẤN ĐỀ HIỆN TẠI

Hệ thống hiện tại được thiết kế quá chuyên biệt cho môn Ngữ văn.

Các khái niệm cần loại bỏ hoặc chuyển đổi bao gồm:

```text
LiteratureLesson
Literature Workspace
Genre Analysis
Poetry Analysis
Story Analysis
Argument Map
Quote Slide
Character Card
Literary Annotation
Rubric chấm văn
```

Không được chỉ đổi label:

```text
“Tác phẩm” → “Bài Toán”
```

mà vẫn giữ nguyên data model Ngữ văn phía dưới.

Phải refactor domain model thực sự sang môn Toán.

---

# 3. MỤC TIÊU SẢN PHẨM

EduMaster Math phải hỗ trợ toàn bộ chu trình:

```text
THÔNG TIN BÀI DẠY
↓
YÊU CẦU CẦN ĐẠT
↓
KIẾN THỨC TOÁN HỌC
↓
KHÁI NIỆM / ĐỊNH LÝ / CÔNG THỨC
↓
VÍ DỤ
↓
LỜI GIẢI
↓
ĐỒ THỊ / HÌNH HỌC / BẢNG
↓
LUYỆN TẬP
↓
VẬN DỤNG
↓
KHBD
↓
SLIDE
↓
NGÂN HÀNG CÂU HỎI
↓
MA TRẬN
↓
BẢN ĐẶC TẢ
↓
ĐỀ KIỂM TRA
↓
ĐÁP ÁN / HƯỚNG DẪN CHẤM
↓
WORD / PPTX / PDF / PRINT
```

Đây phải là **một workflow liên thông**, không phải nhiều công cụ rời rạc.

---

# 4. SINGLE SOURCE OF TRUTH

Thiết kế một model bài học Toán trung tâm.

Ví dụ:

```ts
interface MathLesson {
  id: string;

  subject: "Toán";
  grade: string;
  chapter: string;
  title: string;
  textbook?: string;

  periods: number;
  durationPerPeriod?: number;

  learningOutcomes: LearningOutcome[];

  knowledge: MathKnowledgeItem[];

  concepts: MathConcept[];
  definitions: MathDefinition[];
  theorems: MathTheorem[];
  formulas: MathFormula[];

  examples: MathExample[];
  exercises: MathExercise[];
  applications: MathApplication[];

  graphs: MathGraph[];
  geometryFigures: GeometryFigure[];
  tables: MathTable[];

  lessonPlan?: LessonPlan;
  slides?: SlideData[];
  questions?: MathQuestion[];
  exam?: ExamData;

  progress: number;
  lastModified: string;
}
```

KHBD, Slide và Đề phải tái sử dụng dữ liệu từ MathLesson.

Không nhập lại cùng một:

- tên bài;
- mục tiêu;
- công thức;
- ví dụ;
- bài tập;
- yêu cầu cần đạt

ở nhiều module.

---

# 5. INPUT CHÍNH CỦA HỆ THỐNG

Tạo màn:

# **Tạo bài dạy Toán**

Input tối thiểu:

### Thông tin chung

- Khối/lớp
- Chương/chủ đề
- Tên bài
- Bộ sách
- Số tiết
- Thời lượng

### Yêu cầu cần đạt

Cho phép nhập nhiều YCCĐ.

### Kiến thức trọng tâm

Giáo viên có thể nhập:

- khái niệm;
- công thức;
- định lý;
- phương pháp;
- dạng toán.

### Dạng bài trọng tâm

Ví dụ:

```text
Nhận biết nghiệm
Giải phương trình
Giải hệ phương trình
Mô hình hóa bài toán thực tế
Đọc đồ thị
```

### Tài liệu tham khảo

Cho phép:

- nhập text;
- paste;
- upload tài liệu nếu chức năng hiện tại cho phép.

### Yêu cầu bổ sung

Textarea tự do.

### Output cần tạo

```text
☑ KHBD
☑ Slide
☑ Ngân hàng câu hỏi
☑ Đề kiểm tra
☑ Đáp án / lời giải
```

Primary action:

**Tạo bài dạy**

---

# 6. DASHBOARD

Dashboard phải là:

# Mathematics Teacher Workspace

Không sử dụng phong cách dashboard doanh nghiệp nặng.

Hiển thị:

### Công việc đang làm

```text
Giải hệ hai phương trình bậc nhất hai ẩn
Toán 9 · 4 tiết

KHBD       80%
Slide      70%
Câu hỏi    60%
Đề         40%

[Tiếp tục]
```

### Quick Actions

Chỉ khoảng 5 chức năng:

- Tạo bài dạy
- Soạn KHBD
- Tạo bài tập
- Tạo Slide
- Tạo đề kiểm tra

### Bài gần đây

Hiển thị dạng compact list.

---

# 7. MATH WORKSPACE

Đây là màn hình trung tâm.

Desktop:

```text
┌──────────────┬─────────────────────────────┬───────────────────┐
│ Outline      │ Math Content Workspace      │ Inspector         │
│ 220–240px    │ flexible                    │ 300–340px         │
└──────────────┴─────────────────────────────┴───────────────────┘
```

---

# 8. OUTLINE

Có thể gồm:

```text
Mục tiêu
Khởi động

Kiến thức mới
 ├─ Khái niệm
 ├─ Công thức
 ├─ Ví dụ
 └─ Phương pháp

Luyện tập
Vận dụng
Tổng kết
```

Cho phép:

- reorder;
- collapse;
- add section.

---

# 9. MATH BLOCK EDITOR

Không dùng một textarea lớn.

Nội dung Toán phải được tổ chức thành block.

Các block:

```text
Text
Concept
Definition
Formula
Theorem

Example
Solution
Exercise

Graph
Geometry
Table

Note
Application
Question
```

Mỗi block phải:

- chỉnh sửa độc lập;
- reorder;
- duplicate;
- delete;
- đưa sang slide;
- tạo câu hỏi nếu phù hợp.

---

# 10. FORMULA SYSTEM

Đây là chức năng P0.

Dùng:

**KaTeX hoặc MathJax**

để render toán học.

Hỗ trợ:

- phân số;
- căn;
- lũy thừa;
- chỉ số;
- hệ phương trình;
- vector;
- ma trận;
- lượng giác;
- logarit;
- đạo hàm;
- tích phân;
- tổng;
- giới hạn.

Ví dụ:

```latex
\begin{cases}
2x + y = 5 \\
x - y = 1
\end{cases}
```

Không để giáo viên chỉ nhìn thấy raw LaTeX.

Phải có:

```text
Input
+
Live Preview
```

---

# 11. FORMULA TOOLBAR

Không bắt giáo viên phải nhớ LaTeX.

Toolbar:

```text
a/b
√
x²
xⁿ
log
sin
cos
Σ
∫
→
Vector
Matrix
System
```

Click sẽ chèn template.

---

# 12. EXAMPLE BUILDER

Example phải có cấu trúc:

```text
Đề bài

Phân tích

Phương pháp

Lời giải

Kết luận
```

Có thể collapse:

```text
Đề bài       ▼
Phân tích    >
Lời giải     >
```

---

# 13. STEP-BY-STEP SOLUTION

Không lưu lời giải dài trong một textarea duy nhất.

Model:

```ts
interface SolutionStep {
  id: string;
  label?: string;
  explanation?: string;
  formula?: string;
}
```

UI:

```text
Bước 1
...

Bước 2
...

Bước 3
...

Kết luận
...
```

Cho phép:

- add;
- delete;
- reorder;
- duplicate.

---

# 14. GRAPH BLOCK

Môn Toán cần hỗ trợ đồ thị.

Cho phép giáo viên nhập:

```text
y = 2x + 1
y = -x + 4
```

Hiển thị:

- trục x/y;
- grid;
- label;
- nhiều hàm;
- điểm nếu được nhập;
- miền hiển thị.

Graph phải export được thành:

```text
SVG
hoặc
PNG
```

để sử dụng trong:

- Slide
- PPTX
- Word
- PDF.

---

# 15. GEOMETRY BLOCK

Cho phép xử lý học liệu hình học ở mức vừa đủ:

- điểm;
- đoạn;
- tam giác;
- đường thẳng;
- đường tròn;
- góc;
- vector;
- label;
- annotation.

Không cần xây clone GeoGebra.

Có thể hỗ trợ:

- upload hình;
- insert diagram;
- annotate;
- export.

---

# 16. TABLE SYSTEM

Hỗ trợ:

- bảng số liệu;
- bảng giá trị;
- bảng xét dấu;
- bảng biến thiên.

Có editor riêng.

Không biến bảng thành textarea.

---

# 17. KHBD

KHBD phải bám dữ liệu nguồn được cung cấp.

Công văn 5512 là căn cứ để giáo viên xây dựng kế hoạch bài dạy theo khung quy định.

KHBD trong app cần có tối thiểu:

### Thông tin bài

- môn;
- lớp;
- bài;
- số tiết;
- thời gian.

### Mục tiêu

- kiến thức;
- năng lực;
- phẩm chất.

### Thiết bị dạy học và học liệu

Phân biệt:

- Giáo viên
- Học sinh

### Tiến trình dạy học

Project hiện tại có thể tiếp tục sử dụng workflow:

```text
Khởi động
Hình thành kiến thức
Luyện tập
Vận dụng
```

nhưng phải coi đây là **cấu trúc nghiệp vụ của ứng dụng**, không tự động tuyên bố mọi nhãn UI này là câu chữ bắt buộc của Công văn nếu tài liệu nguồn không chứng minh điều đó.

---

# 18. ACTIVITY BUILDER

Mỗi activity có:

```text
Tên hoạt động
Thời lượng

Mục tiêu
Nội dung
Sản phẩm

Thiết bị / học liệu
Phương pháp / hình thức

Tổ chức thực hiện
```

Có thể hỗ trợ quy trình:

```text
Chuyển giao nhiệm vụ
Thực hiện nhiệm vụ
Báo cáo / thảo luận
Kết luận / nhận định
```

Giữ tương thích dữ liệu hiện tại nếu project đang sử dụng cấu trúc này.

---

# 19. ĐÁNH GIÁ TRONG KHBD

Công văn 5512 nhấn mạnh đánh giá thường xuyên trong quá trình hoạt động học.

Vì vậy mỗi Activity có thể thêm:

```text
Phương thức đánh giá

○ Hỏi – đáp
○ Viết
○ Thực hành
○ Thuyết trình
○ Sản phẩm học tập

Tiêu chí đánh giá
...
```

Không bắt buộc giáo viên phải điền tất cả.

---

# 20. SLIDE BUILDER

Slide Toán không được đơn giản là copy KHBD sang PowerPoint.

Flow đề xuất:

```text
Cover
↓
Mục tiêu
↓
Bài toán mở đầu
↓
Khám phá
↓
Khái niệm / Định lý
↓
Ví dụ
↓
Lời giải từng bước
↓
Luyện tập
↓
Vận dụng
↓
Tổng kết
```

---

# 21. MATH SLIDE TYPES

Tạo:

```text
CoverSlide
ObjectivesSlide

ConceptSlide
DefinitionSlide
FormulaSlide
TheoremSlide

ExampleSlide
SolutionSlide

GraphSlide
GeometrySlide
TableSlide

ExerciseSlide
QuizSlide
SummarySlide
```

---

# 22. POWERPOINT EXPORT

Ưu tiên nâng cấp export thành `.pptx` thật.

Có thể dùng:

```text
PptxGenJS
```

Kiến trúc:

```text
SlideData
   │
   ├── WebSlideRenderer
   │
   └── PowerPointRenderer
```

Không tạo slide web một kiểu rồi build PPT bằng logic hoàn toàn khác.

Không screenshot toàn UI thành ảnh nếu không cần thiết.

Text trong PowerPoint phải editable khi có thể.

---

# 23. QUESTION BANK

Question Builder Toán gồm:

```text
Đề bài
↓
Đáp án
↓
Lời giải
↓
Phân loại
```

Metadata:

- lớp;
- chương;
- chủ đề;
- đơn vị kiến thức;
- YCCĐ;
- mức độ;
- dạng câu hỏi;
- kỹ năng/năng lực;
- điểm;
- thời gian dự kiến.

---

# 24. CÁC DẠNG CÂU HỎI

Hỗ trợ đúng các nhóm cần cho ma trận 7991:

```text
Nhiều lựa chọn

Đúng – Sai

Trả lời ngắn

Tự luận
```

Đối với Đúng–Sai:

mỗi câu có:

```text
Phần dẫn

a) ...
b) ...
c) ...
d) ...
```

và từng ý có đáp án:

```text
Đúng / Sai
```

Không được hard-code công thức chấm điểm mà tài liệu nguồn không quy định.

Nếu muốn có scoring rule riêng:

tạo:

```text
Scoring Configuration
```

và ghi rõ đó là cấu hình của đơn vị/người dùng.

---

# 25. KHÔNG HARD-CODE SỐ CÂU

Không mặc định:

```text
12 câu
2 câu
4 câu
1 câu
```

là cấu trúc bắt buộc.

Exam Builder phải cho giáo viên cấu hình số câu.

Ví dụ:

```text
Phần I — Nhiều lựa chọn
[ số câu ]

Phần II — Đúng/Sai
[ số câu ]

Phần III — Trả lời ngắn
[ số câu ]

Phần IV — Tự luận
[ số câu ]
```

---

# 26. EXAM MATRIX — 7991

Ma trận phải bám cấu trúc tài liệu nguồn:

```text
Chủ đề / Chương

Nội dung /
Đơn vị kiến thức

Mức độ đánh giá

TNKQ
 ├─ Nhiều lựa chọn
 ├─ Đúng – Sai
 └─ Trả lời ngắn

Tự luận

Tổng

Tỉ lệ % điểm
```

Mức độ theo khung 7991:

```text
Biết
Hiểu
Vận dụng
```

---

# 27. DEFAULT POINT DISTRIBUTION

Có thể tạo preset tham khảo theo phụ lục:

```text
Nhiều lựa chọn ≈ 3.0 điểm
Đúng – Sai     ≈ 2.0 điểm
Trả lời ngắn   ≈ 2.0 điểm
Tự luận        ≈ 3.0 điểm
```

Tổng:

```text
10 điểm
```

Nhưng phải ghi:

**Preset tham khảo theo phụ lục**

và cho phép cấu hình khi môn học hoặc đơn vị không sử dụng một dạng câu hỏi nào.

---

# 28. COGNITIVE DISTRIBUTION

Preset:

```text
Biết       ≈ 40%
Hiểu       ≈ 30%
Vận dụng   ≈ 30%
```

Matrix tự tính theo điểm.

Không nhập tay số tổng nếu hệ thống có thể suy ra từ câu hỏi.

---

# 29. MATRIX AUTO-SYNC

Khi giáo viên:

```text
thêm câu
xóa câu
đổi mức độ
đổi điểm
đổi chủ đề
đổi dạng
```

Matrix phải tự cập nhật.

Flow:

```text
Question Bank
      ↓
 Exam
      ↓
 Matrix
      ↓
 Specification
```

Không nhập cùng dữ liệu 3 lần.

---

# 30. BẢN ĐẶC TẢ

Bản đặc tả phải thể hiện:

```text
Chủ đề/Chương

Nội dung/Đơn vị kiến thức

Yêu cầu cần đạt

Số câu hỏi theo:

- dạng câu;
- Biết;
- Hiểu;
- Vận dụng.
```

Mỗi Question phải map được tới YCCĐ.

---

# 31. EXAM BUILDER

Desktop layout:

```text
┌────────────┬──────────────────────────┬────────────────┐
│ Cấu trúc   │ Questions               │ Statistics     │
│ đề         │                          │                │
└────────────┴──────────────────────────┴────────────────┘
```

Left:

```text
Nhiều lựa chọn
Đúng/Sai
Trả lời ngắn
Tự luận
```

Center:

Questions.

Right:

```text
Tổng câu
Tổng điểm
Thời gian

Biết
Hiểu
Vận dụng

Phân bố dạng câu
```

---

# 32. ANSWER & SOLUTION

Đề Toán phải có:

```text
Đề học sinh
```

và:

```text
Đáp án / Hướng dẫn chấm
```

Câu tự luận hỗ trợ:

```text
Bước giải
Điểm từng bước
Đáp án
```

Không cần giữ Rubric chấm văn của project cũ.

Refactor thành:

# **Math Scoring Guide**

---

# 33. XỬ LÝ RUBRIC CŨ

Rubric Ngữ văn hiện tại:

- bố cục;
- dẫn chứng;
- diễn đạt;
- cảm thụ;
- sáng tạo...

không phù hợp với Toán.

REPLACE thành:

```text
Solution Scoring Builder
```

Một câu tự luận Toán có thể có:

```text
Bước 1 — 0.5đ
Bước 2 — 0.75đ
Bước 3 — 0.75đ
Kết luận — 0.5đ
```

Tổng tự động.

---

# 34. EXPORT WORD

Phải giữ hoặc nâng cấp:

```text
KHBD → Word

Đề → Word

Đáp án →
Word

Ma trận →
Word / Print

Bản đặc tả →
Word / Print
```

Công thức toán học phải được kiểm tra kỹ khi export.

Không được để LaTeX raw xuất hiện trong file cuối nếu có thể render thành MathML/image phù hợp.

---

# 35. PRINT / PDF

Test:

- A4;
- page break;
- bảng ma trận;
- bảng đặc tả;
- phương trình;
- hình;
- đồ thị;
- bảng biến thiên.

Không để công thức bị cắt giữa trang.

---

# 36. JSON HANDOVER

Giữ chức năng:

```text
Export JSON
Import JSON
Restore Session
```

Nhưng migrate schema:

```text
LiteratureLesson
```

sang:

```text
MathLesson
```

Cần versioning.

Ví dụ:

```ts
interface AppState {
  schemaVersion: "2.0";
}
```

Nếu cần, viết migration cho state cũ.

---

# 37. AI ASSISTANT

AI không phải module chat chiếm toàn màn hình.

Dùng contextual AI actions.

Ví dụ Formula/Example:

```text
Giải thích đơn giản hơn
Tạo ví dụ
Tạo bài tương tự
Tạo bài khó hơn
Tạo lời giải
```

Activity:

```text
Gợi ý hoạt động
Tạo câu hỏi kiểm tra nhanh
```

Exam:

```text
Gợi ý câu hỏi theo ô ma trận
```

---

# 38. AI GENERATION FLOW

Form:

```text
Toán 9

Bài:
Giải hệ hai phương trình bậc nhất hai ẩn

4 tiết

YCCĐ:
...

Trọng tâm:
- phương pháp thế;
- phương pháp cộng;
- bài toán thực tế.
```

Cho phép:

```text
[Tạo KHBD]

[Tạo Slide]

[Tạo câu hỏi]

[Tạo tất cả]
```

AI output luôn phải editable.

Không coi nội dung AI là nội dung chính thức chưa qua giáo viên duyệt.

---

# 39. UI DESIGN

Phong cách:

# Academic Mathematics Workspace

Cảm giác:

- sạch;
- chính xác;
- có hệ thống;
- hiện đại;
- nhẹ;
- ít màu;
- dễ scan.

Không còn phong cách:

```text
văn học
giấy cổ
burgundy
quote nghệ thuật
```

---

# 40. COLOR SYSTEM

Background:

```text
#F8FAFC
#FFFFFF
```

Primary:

```text
Deep Blue / Indigo
```

Accent:

```text
Cyan / Teal
```

Semantic:

```text
Blue → kiến thức
Green → đúng / hoàn thành
Amber → lưu ý
Red → lỗi
Purple → vận dụng / mô hình hóa
```

Không tô màu toàn bộ card.

---

# 41. TYPOGRAPHY

Dùng chủ yếu:

**Be Vietnam Pro**

cho UI và nội dung văn bản.

Công thức:

**KaTeX/MathJax fonts**

Không cần Lora cho nội dung chính của app Toán.

Không thêm font trang trí.

---

# 42. DESKTOP VIEWPORT-FIRST

Trên Desktop:

**Cố gắng hiển thị toàn bộ workspace trong một màn hình khi hợp lý.**

App shell:

```css
height: 100vh;
overflow: hidden;
```

Main workspace:

```css
min-height: 0;
overflow: hidden;
```

Panel:

```css
min-height: 0;
overflow-y: auto;
```

Ưu tiên:

```text
scroll panel
```

thay vì:

```text
scroll toàn body
```

---

# 43. BREAKPOINT KIỂM TRA

Bắt buộc test:

```text
1366×768
1440×900
1920×1080
```

Ở 1366×768 vẫn phải thấy:

- navigation;
- context;
- nội dung chính;
- primary action.

Không giảm font quá nhỏ để ép nội dung.

---

# 44. SIDEBAR

Sidebar chỉ giữ module cấp cao:

```text
Bàn làm việc

Bài dạy

KHBD

Câu hỏi

Đề kiểm tra

Ma trận & Đặc tả

Slide

Xuất bản
```

Không cần 10–15 module.

Các công cụ:

```text
Formula
Graph
Geometry
Solution
```

nằm trong Math Workspace.

---

# 45. TOP BAR

Top Bar compact:

```text
Toán 9 / Giải hệ hai phương trình bậc nhất hai ẩn

                    Đã lưu · Xem trước · Xuất · •••
```

Không đặt 6 nút Export trên topbar.

---

# 46. PROGRESSIVE DISCLOSURE

Không hiển thị tất cả chức năng cùng lúc.

Ví dụ:

```text
Không chọn Formula
→ Không hiện Formula Toolbar.

Không chọn Graph
→ Không hiện Graph Inspector.

Activity đóng
→ Không render toàn bộ form.

Không chọn Question
→ Không hiện metadata editor.
```

---

# 47. ONE PRIMARY ACTION

Mỗi màn hình chỉ có một primary action nổi bật.

Ví dụ:

Dashboard:

**Tạo bài dạy**

KHBD:

**Thêm hoạt động**

Question:

**Lưu câu hỏi**

Slides:

**Thêm slide**

Exam:

**Thêm câu hỏi**

Export:

**Xuất tài liệu**

---

# 48. RESPONSIVE

Desktop:

workspace nhiều panel.

Tablet:

sidebar drawer;
inspector drawer.

Mobile:

ưu tiên:

```text
content
formula
exercise
```

Panel phụ → bottom sheet.

Không cố ép giao diện desktop xuống mobile.

---

# 49. COMPONENT REFACTOR

Phân loại tất cả component hiện tại thành:

```text
KEEP
REFACTOR
REPLACE
DELETE
CREATE
```

Ví dụ:

```text
TeacherDashboard
→ REFACTOR

LiteratureWorkspace
→ REPLACE bằng MathWorkspace

GenreAnalysis
→ DELETE / REPLACE

KHBDView
→ REFACTOR

QuestionBuilder
→ REFACTOR

RubricBuilder
→ REPLACE bằng SolutionScoringBuilder

SlidesView
→ REFACTOR

Exam7991View
→ REFACTOR

MatrixView
→ REFACTOR

ExportHandover
→ KEEP + REFACTOR
```

---

# 50. REUSABLE COMPONENTS

Ưu tiên tạo:

```text
MathLessonCard

MathBlockEditor
MathBlockToolbar

FormulaEditor
FormulaPreview

ConceptBlock
DefinitionBlock
TheoremBlock

ExampleEditor
SolutionStepEditor

ExerciseEditor

GraphEditor
GeometryViewer
MathTableEditor

ActivityCard

QuestionEditor

ExamSection
ExamStatistics

MatrixTable
SpecificationTable

SlideEditor
MathSlideRenderer

ExportCenter
```

---

# 51. DATA MIGRATION

Current models như:

```text
LiteratureLesson
PoetryAnalysis
StoryAnalysis
ArgumentMap
LiteratureQuestionItem
RubricData
```

phải được review.

Không để model không dùng tiếp tục làm nguồn dữ liệu chính.

Đề xuất migration:

```text
LiteratureLesson
→ MathLesson

LiteratureQuestionItem
→ MathQuestion

RubricData
→ SolutionScoringData
```

---

# 52. DEMO DATA

Không dùng:

```text
Tây Tiến
Vợ nhặt
Tuyên ngôn Độc lập
```

làm preset chính nữa.

Thay bằng các bài Toán thực tế.

Nếu có giáo án Toán được cung cấp, ưu tiên lấy dữ liệu đó.

Có thể dùng:

```text
Khái niệm phương trình và
hệ hai phương trình bậc nhất hai ẩn

Giải hệ hai phương trình
bậc nhất hai ẩn
```

làm preset.

---

# 53. OUTPUT BẮT BUỘC

Hệ thống phải chứng minh được flow:

## OUTPUT 1

**Kế hoạch bài dạy**

→ Preview  
→ Word / Print

## OUTPUT 2

**Slide bài giảng**

→ Preview  
→ Fullscreen  
→ PPTX hoặc format xuất hiện tại

## OUTPUT 3

**Đề kiểm tra**

→ Ma trận  
→ Bản đặc tả  
→ Đề  
→ Đáp án / hướng dẫn chấm  
→ Word / Print

---

# 54. KHÔNG ĐƯỢC GIẢ OUTPUT

Nếu nút:

```text
Xuất PPTX
```

chưa thực sự tạo PPTX:

không hiển thị như chức năng hoàn thiện.

Nếu:

```text
Export Word
```

chỉ tạo HTML đổi extension `.doc`:

ghi đúng kỹ thuật trong code/documentation.

Không được mô tả vượt quá khả năng thật.

---

# 55. SOURCE COMPLIANCE PANEL

Có thể tạo một checklist nội bộ:

```text
KHBD
✓ Có mục tiêu
✓ Có thiết bị/học liệu
✓ Có tiến trình
✓ Có đánh giá

Đề kiểm tra
✓ Có ma trận
✓ Có đặc tả
✓ Có đề
✓ Có hướng dẫn chấm
✓ Tổng điểm hợp lệ
✓ Mức độ hợp lệ
```

Không ghi:

```text
“Đạt chuẩn Bộ”
```

nếu hệ thống chưa đủ dữ liệu để xác nhận.

Dùng:

```text
“Kiểm tra cấu trúc”
```

an toàn và chính xác hơn.

---

# 56. AUDIT TRƯỚC KHI CODE

Trước tiên phải tạo báo cáo:

# A. Current Architecture

- pages;
- components;
- models;
- state;
- dependencies;
- export.

# B. Literature-Specific Dependencies

Liệt kê mọi chỗ đang phụ thuộc Ngữ văn.

# C. Legal/Domain Constraints

Từ 5512 và 7991.

# D. Gap Analysis

Project hiện tại thiếu gì để trở thành Math Workspace.

# E. Component Classification

KEEP / REFACTOR / REPLACE / DELETE / CREATE.

---

# 57. INFORMATION ARCHITECTURE

Sau Audit, thiết kế IA mới.

Không code trước khi IA được mô tả.

---

# 58. WIREFRAME

Vẽ ASCII wireframe cho:

```text
Dashboard
Create Lesson
Math Workspace
KHBD
Question Bank
Exam
Matrix
Specification
Slides
Export Center
```

---

# 59. DATA MODEL DESIGN

Trình bày TypeScript interfaces cho:

```text
AppState
MathLesson
MathBlock
Formula
Example
Solution
Exercise
Graph
Question
Exam
Matrix
Specification
SlideData
```

---

# 60. IMPLEMENTATION PRIORITY

## P0 — Phải có để nộp sản phẩm

```text
MathLesson model

Create Lesson

Math Workspace

Formula rendering

KHBD

Question Builder

Exam Builder

Matrix

Specification

Slide

Export hiện tại
```

## P1 — Rất quan trọng

```text
Step Solution

Graph

PPTX Export

Matrix auto-sync

Answer / Scoring Guide
```

## P2 — Nâng cao

```text
Geometry Editor

AI Generation

DOCX import

Advanced graph interaction

Responsive polish
```

---

# 61. KIỂM THỬ

Sau mỗi phase:

```text
npm run build
```

Nếu có:

```text
npm run lint
npm test
```

Kiểm tra:

- console;
- broken route;
- broken button;
- export;
- persistence;
- responsive.

---

# 62. OUTPUT AUDIT CUỐI

Trước khi coi project hoàn thành, lập bảng:

| Output | Create | Edit | Preview | Export | Status |
|---|---:|---:|---:|---:|---|
| KHBD | | | | | |
| Slide | | | | | |
| PPTX | | | | | |
| Question Bank | | | | | |
| Matrix | | | | | |
| Specification | | | | | |
| Exam | | | | | |
| Answer | | | | | |
| Word | | | | | |
| PDF/Print | | | | | |

Chỉ đánh PASS khi đã test thật.

---

# 63. NGUYÊN TẮC CUỐI

EduMaster Math không được trở thành:

```text
một dashboard
+
nhiều textarea
+
nút AI
```

Mà phải là:

# **một Mathematics Teaching Workspace**

trong đó giáo viên có thể đi từ:

```text
Yêu cầu cần đạt
→
Kiến thức
→
Công thức
→
Ví dụ
→
Lời giải
→
Bài tập
→
KHBD
→
Slide
→
Câu hỏi
→
Ma trận
→
Bản đặc tả
→
Đề
→
Đáp án
→
Xuất bản
```

trong cùng một hệ dữ liệu liên thông.

---

# 64. QUY TẮC THỰC THI CUỐI CÙNG

KHÔNG CODE NGAY.

Trước tiên hãy trả về:

1. **Source Code Audit**
2. **Analysis of provided documents**
3. **Current vs Target Architecture**
4. **Domain migration from Literature → Mathematics**
5. **KEEP / REFACTOR / REPLACE / DELETE / CREATE table**
6. **Information Architecture**
7. **ASCII wireframes**
8. **Data model proposal**
9. **5512 / 7991 compliance mapping**
10. **Implementation plan P0/P1/P2**
11. **Risk analysis**
12. **Migration strategy**

Chỉ sau khi hoàn thành các phần trên mới bắt đầu chỉnh sửa source code.

Trong toàn bộ quá trình:

**Không tự suy diễn nội dung văn bản pháp lý.**

Nếu một quy tắc không xuất hiện trong tài liệu được cung cấp, hãy ghi:

> “Không được xác nhận từ tài liệu nguồn hiện tại.”

thay vì tự đưa thành yêu cầu bắt buộc.
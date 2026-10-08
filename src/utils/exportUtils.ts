import { LessonPlan5512, Exam7991Data, SlideItem, SolutionScoringGuide, MathLesson } from '../types';

export function exportWordKHBD(khbd: LessonPlan5512) {
  const content = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset='utf-8'>
<title>${khbd.info.lessonTitle} - KHBD 5512</title>
<!--[if gte mso 9]>
<xml>
<w:WordDocument>
<w:View>Print</w:View>
<w:Zoom>100</w:Zoom>
<w:DoNotOptimizeForBrowser/>
</w:WordDocument>
</xml>
<![endif]-->
<style>
  @page {
    size: 21.0cm 29.7cm;
    margin: 2.0cm 1.5cm 2.0cm 2.5cm;
    mso-page-orientation: portrait;
  }
  body {
    font-family: 'Times New Roman', serif;
    font-size: 13pt;
    line-height: 1.35;
    color: #000;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 12px 0;
  }
  th, td {
    border: 1px solid #000;
    padding: 6px 8px;
    vertical-align: top;
  }
  .header-table td {
    border: none;
    padding: 2px 4px;
  }
  .center { text-align: center; }
  .bold { font-weight: bold; }
  .italic { font-style: italic; }
  .uppercase { text-transform: uppercase; }
  h1 { font-size: 15pt; font-weight: bold; text-align: center; margin: 15px 0 5px 0; text-transform: uppercase; }
  h2 { font-size: 13.5pt; font-weight: bold; margin: 12px 0 4px 0; }
  h3 { font-size: 13pt; font-weight: bold; margin: 8px 0 4px 0; }
  p { margin: 4px 0; text-align: justify; }
  ul { margin: 4px 0 6px 20px; padding: 0; }
  li { margin-bottom: 3px; }
  .step-title { font-weight: bold; color: #1E3A8A; }
</style>
</head>
<body>
  <table class="header-table">
    <tr>
      <td width="48%" class="center">
        <p class="uppercase">${khbd.info.department}</p>
        <p class="bold uppercase">${khbd.info.school}</p>
        <p>Tổ chuyên môn: <span class="bold">${khbd.info.subjectGroup}</span></p>
        <p>Họ tên giáo viên: <span class="bold">${khbd.info.teacherName}</span></p>
      </td>
      <td width="52%" class="center">
        <p class="bold">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
        <p class="bold">Độc lập - Tự do - Hạnh phúc</p>
        <p class="italic">---------------</p>
        <p class="italic">..., ngày ... tháng ... năm 202...</p>
      </td>
    </tr>
  </table>

  <h1>KẾ HOẠCH BÀI DẠY</h1>
  <p class="center bold uppercase" style="font-size: 14pt;">BÀI: ${khbd.info.lessonTitle}</p>
  <p class="center italic">Môn học: ${khbd.info.subject} - ${khbd.info.grade} | Bộ sách: ${khbd.info.textbook}</p>
  <p class="center italic">Thời lượng thực hiện: ${khbd.info.periods} | ${khbd.info.academicYear}</p>
  <p class="center italic" style="font-size: 11pt; color: #555;">(Xây dựng theo đúng quy chuẩn hướng dẫn tại Công văn 5512/BGDĐT-GDTrH của Bộ GD&ĐT)</p>

  <h2>I. MỤC TIÊU DẠY HỌC</h2>
  <h3>1. Về kiến thức</h3>
  <ul>
    ${khbd.objectives.knowledge.map(k => `<li>${k}</li>`).join('')}
  </ul>

  <h3>2. Về năng lực</h3>
  <p class="bold">a) Năng lực chung:</p>
  <ul>
    <li><span class="bold">Tự chủ & tự học:</span> ${khbd.objectives.generalCompetencies.selfControl}</li>
    <li><span class="bold">Giao tiếp & hợp tác:</span> ${khbd.objectives.generalCompetencies.communication}</li>
    <li><span class="bold">Giải quyết vấn đề & sáng tạo:</span> ${khbd.objectives.generalCompetencies.problemSolving}</li>
  </ul>
  <p class="bold">b) Năng lực đặc thù môn Toán:</p>
  <ul>
    <li><span class="bold">Tư duy và lập luận toán học:</span> ${khbd.objectives.specializedCompetencies.mathematicalThinking}</li>
    <li><span class="bold">Mô hình hóa toán học:</span> ${khbd.objectives.specializedCompetencies.mathematicalModeling}</li>
    <li><span class="bold">Giải quyết vấn đề toán học:</span> ${khbd.objectives.specializedCompetencies.mathematicalProblemSolving}</li>
  </ul>

  <h3>3. Về phẩm chất</h3>
  <ul>
    ${khbd.objectives.qualities.map(q => `<li>${q}</li>`).join('')}
  </ul>

  <h2>II. THIẾT BỊ VÀ HỌC LIỆU</h2>
  <p><span class="bold">1. Đối với giáo viên:</span></p>
  <ul>
    ${khbd.equipment.teacher.map(t => `<li>${t}</li>`).join('')}
  </ul>
  <p><span class="bold">2. Đối với học sinh:</span></p>
  <ul>
    ${khbd.equipment.student.map(s => `<li>${s}</li>`).join('')}
  </ul>

  <h2>III. TIẾN TRÌNH DẠY HỌC (CHUẨN 4 HOẠT ĐỘNG CÔNG VĂN 5512)</h2>
  ${khbd.activities.map((act) => `
    <div style="margin-top: 15px; border-top: 1px dashed #999; padding-top: 10px;">
      <h3 style="color: #0F172A; font-size: 13.5pt;">${act.name} <span class="italic" style="font-weight: normal; font-size: 12pt;">(${act.time})</span></h3>
      <p><span class="bold">a) Mục tiêu:</span> ${act.objective}</p>
      <p><span class="bold">b) Nội dung:</span> ${act.content}</p>
      <p><span class="bold">c) Sản phẩm:</span> ${act.product}</p>
      <p><span class="bold">d) Tổ chức thực hiện:</span></p>
      
      <table>
        <tr style="background-color: #F8FAFC;">
          <th width="30%" class="center bold">Tiến trình các bước</th>
          <th width="70%" class="center bold">Hoạt động của Giáo viên và Học sinh</th>
        </tr>
        <tr>
          <td class="bold step-title">Bước 1: Chuyển giao nhiệm vụ</td>
          <td>${act.steps.step1}</td>
        </tr>
        <tr>
          <td class="bold step-title">Bước 2: Thực hiện nhiệm vụ</td>
          <td>${act.steps.step2}</td>
        </tr>
        <tr>
          <td class="bold step-title">Bước 3: Báo cáo, thảo luận</td>
          <td>${act.steps.step3}</td>
        </tr>
        <tr>
          <td class="bold step-title">Bước 4: Kết luận, nhận định</td>
          <td>${act.steps.step4}</td>
        </tr>
      </table>
    </div>
  `).join('')}

  <br/><br/>
  <table class="header-table" style="margin-top: 30px;">
    <tr>
      <td width="50%" class="center">
        <p class="bold uppercase">TỔ TRƯỞNG CHUYÊN MÔN</p>
        <p class="italic">(Ký và ghi rõ họ tên)</p>
        <br/><br/><br/><br/>
      </td>
      <td width="50%" class="center">
        <p class="bold uppercase">GIÁO VIÊN SOẠN BÀI</p>
        <p class="italic">(Ký và ghi rõ họ tên)</p>
        <br/><br/><br/>
        <p class="bold">${khbd.info.teacherName}</p>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
  downloadBlob(content, `KHBD_5512_${sanitizeFilename(khbd.info.lessonTitle)}.doc`, 'application/msword');
}

export function exportWordExam7991(exam: Exam7991Data, khbd: LessonPlan5512) {
  const content = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset='utf-8'>
<title>${exam.examHeader.title} - Chuẩn CV 7991</title>
<!--[if gte mso 9]>
<xml>
<w:WordDocument>
<w:View>Print</w:View>
<w:Zoom>100</w:Zoom>
<w:DoNotOptimizeForBrowser/>
</w:WordDocument>
</xml>
<![endif]-->
<style>
  @page {
    size: 21.0cm 29.7cm;
    margin: 2.0cm 1.5cm 2.0cm 2.0cm;
    mso-page-orientation: portrait;
  }
  body {
    font-family: 'Times New Roman', serif;
    font-size: 12.5pt;
    line-height: 1.3;
    color: #000;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;
  }
  th, td {
    border: 1px solid #000;
    padding: 5px 7px;
    vertical-align: top;
  }
  .header-table td {
    border: none;
    padding: 2px 4px;
  }
  .center { text-align: center; }
  .bold { font-weight: bold; }
  .italic { font-style: italic; }
  .uppercase { text-transform: uppercase; }
  h1 { font-size: 14pt; font-weight: bold; text-align: center; margin: 10px 0 4px 0; text-transform: uppercase; }
  h2 { font-size: 13pt; font-weight: bold; margin: 12px 0 4px 0; background: #F1F5F9; padding: 4px 8px; }
  p { margin: 3px 0; text-align: justify; }
  .question-box { margin-bottom: 12px; }
  .options-grid { width: 100%; margin: 4px 0; }
  .options-grid td { border: none; padding: 2px 4px; }
  .note-box { font-size: 11pt; font-style: italic; color: #475569; margin-bottom: 8px; }
</style>
</head>
<body>
  <table class="header-table">
    <tr>
      <td width="50%" class="center">
        <p class="uppercase">${khbd.info.department}</p>
        <p class="bold uppercase">${khbd.info.school}</p>
        <p class="bold">${exam.examHeader.examCode}</p>
      </td>
      <td width="50%" class="center">
        <p class="bold uppercase">${exam.examHeader.title}</p>
        <p>Môn: <span class="bold">${khbd.info.subject} - ${khbd.info.grade}</span></p>
        <p class="italic">Thời gian làm bài: ${exam.examHeader.duration}</p>
      </td>
    </tr>
  </table>

  <hr style="border: none; border-top: 1px solid #000; margin: 8px 0;" />
  <p class="italic center" style="font-size: 11pt;">(Đề thi gồm 04 phần tuân thủ tuyệt đối quy định Công văn 7991/BGDĐT-GDTrH của Bộ GD&ĐT)</p>

  <h2>PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (3.0 ĐIỂM)</h2>
  <p class="note-box">Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu đúng được 0.25 điểm.</p>
  ${exam.partI.map((q, idx) => `
    <div class="question-box">
      <p><span class="bold">${q.code || `Câu ${idx + 1}`}:</span> ${q.question} <span class="italic">[${q.level}]</span></p>
      <table class="options-grid">
        <tr>
          <td width="25%"><span class="bold">A.</span> ${q.options.A}</td>
          <td width="25%"><span class="bold">B.</span> ${q.options.B}</td>
          <td width="25%"><span class="bold">C.</span> ${q.options.C}</td>
          <td width="25%"><span class="bold">D.</span> ${q.options.D}</td>
        </tr>
      </table>
    </div>
  `).join('')}

  <h2>PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG / SAI (2.0 ĐIỂM)</h2>
  <p class="note-box">
    Thí sinh trả lời từ câu 1 đến câu 2. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.<br/>
    * Đúng 01 ý được 0.10 điểm | Đúng 02 ý được 0.25 điểm | Đúng 03 ý được 0.50 điểm | Đúng cả 04 ý được 1.00 điểm.
  </p>
  ${exam.partII.map((q, idx) => `
    <div class="question-box" style="margin-top: 10px;">
      <p><span class="bold">${q.code || `Câu ${idx + 1}`}:</span> ${q.stem} <span class="italic">[${q.level} - 1.0 điểm]</span></p>
      <table style="width: 100%; margin-top: 5px;">
        <tr style="background-color: #F8FAFC;">
          <th width="8%" class="center bold">Lệnh</th>
          <th width="72%" class="bold">Phát biểu khẳng định</th>
          <th width="10%" class="center bold">Đúng</th>
          <th width="10%" class="center bold">Sai</th>
        </tr>
        ${q.statements.map((st) => `
          <tr>
            <td class="center bold">${st.subId})</td>
            <td>${st.text}</td>
            <td class="center"></td>
            <td class="center"></td>
          </tr>
        `).join('')}
      </table>
    </div>
  `).join('')}

  <h2>PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (2.0 ĐIỂM)</h2>
  <p class="note-box">Thí sinh trả lời từ câu 1 đến câu 4. Viết câu trả lời ngắn gọn (mỗi câu 0.5 điểm).</p>
  ${exam.partIII.map((q, idx) => `
    <div class="question-box">
      <p><span class="bold">${q.code || `Câu ${idx + 1}`}:</span> ${q.question} <span class="italic">[${q.level} - 0.5 điểm]</span></p>
      <p class="italic" style="margin-left: 20px;">Đáp số của thí sinh: ....................................................................</p>
    </div>
  `).join('')}

  <h2>PHẦN IV. TỰ LUẬN BÀI TOÁN THỰC TẾ (3.0 ĐIỂM)</h2>
  <p class="note-box">Thí sinh trình bày bài toán có đặt ẩn, lập hệ phương trình, giải và kết luận.</p>
  ${exam.partIV.map((q, idx) => `
    <div class="question-box">
      <p><span class="bold">${q.code || `Câu ${idx + 1}`}:</span> ${q.question} <span class="italic">[${q.level} - ${q.points} điểm]</span></p>
    </div>
  `).join('')}

  <p class="center bold" style="margin-top: 25px;">---------- HẾT ----------</p>

  <br/><br/>
  <div style="page-break-before: always;">
    <h1 style="color: #1E3A8A;">HƯỚNG DẪN CHẤM CHI TIẾT (BAREM 10.0 ĐIỂM)</h1>
    
    <h3>ĐÁP ÁN PHẦN I (3.0 điểm)</h3>
    <table>
      <tr style="background: #F1F5F9;">
        ${exam.partI.map((q, i) => `<th class="center bold">C${i+1}</th>`).join('')}
      </tr>
      <tr>
        ${exam.partI.map(q => `<td class="center bold" style="color: #1E3A8A;">${q.correctAnswer}</td>`).join('')}
      </tr>
    </table>

    <h3>ĐÁP ÁN PHẦN II (2.0 điểm - Chuẩn CV 7991)</h3>
    <table style="width: 100%;">
      <tr style="background: #F1F5F9;">
        <th width="15%" class="center bold">Câu</th>
        <th width="15%" class="center bold">Lệnh a</th>
        <th width="15%" class="center bold">Lệnh b</th>
        <th width="15%" class="center bold">Lệnh c</th>
        <th width="15%" class="center bold">Lệnh d</th>
        <th width="25%" class="center bold">Quy tắc tính điểm</th>
      </tr>
      ${exam.partII.map((q, idx) => `
        <tr>
          <td class="center bold">${q.code || `Câu ${idx + 1}`}</td>
          <td class="center bold" style="color: ${q.statements[0].isCorrect ? '#059669' : '#DC2626'};">${q.statements[0].isCorrect ? 'ĐÚNG' : 'SAI'}</td>
          <td class="center bold" style="color: ${q.statements[1].isCorrect ? '#059669' : '#DC2626'};">${q.statements[1].isCorrect ? 'ĐÚNG' : 'SAI'}</td>
          <td class="center bold" style="color: ${q.statements[2].isCorrect ? '#059669' : '#DC2626'};">${q.statements[2].isCorrect ? 'ĐÚNG' : 'SAI'}</td>
          <td class="center bold" style="color: ${q.statements[3].isCorrect ? '#059669' : '#DC2626'};">${q.statements[3].isCorrect ? 'ĐÚNG' : 'SAI'}</td>
          <td style="font-size: 10.5pt;">
            - Đúng 1 ý: 0.10 đ<br/>
            - Đúng 2 ý: 0.25 đ<br/>
            - Đúng 3 ý: 0.50 đ<br/>
            - Đúng cả 4: 1.00 đ
          </td>
        </tr>
      `).join('')}
    </table>

    <h3>ĐÁP ÁN PHẦN III (2.0 điểm)</h3>
    <table>
      <tr style="background: #F1F5F9;">
        ${exam.partIII.map((q, i) => `<th class="center bold">C${i+1}</th>`).join('')}
      </tr>
      <tr>
        ${exam.partIII.map(q => `<td class="center bold" style="color: #059669;">${q.correctAnswer}</td>`).join('')}
      </tr>
    </table>

    <h3>HƯỚNG DẪN CHẤM PHẦN IV TỰ LUẬN (3.0 điểm)</h3>
    ${exam.partIV.map(q => `
      <table>
        <tr style="background: #F1F5F9;">
          <th width="80%" class="bold">Các bước giải toán và tiêu chí đánh giá</th>
          <th width="20%" class="center bold">Điểm</th>
        </tr>
        ${q.rubric.map(r => `
          <tr>
            <td>${r.step}</td>
            <td class="center bold">${r.points} đ</td>
          </tr>
        `).join('')}
        <tr style="background: #E2E8F0;">
          <td class="bold">TỔNG ĐIỂM CÂU TỰ LUẬN</td>
          <td class="center bold" style="color: #1E3A8A;">${q.points}.0 đ</td>
        </tr>
      </table>
    `).join('')}
  </div>
</body>
</html>
  `;
  downloadBlob(content, `DE_THI_TOAN_7991_${sanitizeFilename(exam.examHeader.title)}.doc`, 'application/msword');
}

export function exportHtmlSlides(slides: SlideItem[], title: string) {
  const content = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Slide Bài Giảng: ${title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"></script>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0F172A; color: #F8FAFC; margin: 0; }
    .slide-page { min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between; padding: 3.5rem; box-sizing: border-box; border-bottom: 4px solid #1E293B; }
  </style>
</head>
<body class="bg-slate-950 text-slate-100">
  <div class="fixed top-4 right-4 z-50 bg-slate-900/95 backdrop-blur px-4 py-2 rounded-xl text-sm border border-slate-800 shadow-xl flex gap-3 items-center">
    <span class="text-blue-400 font-semibold">EduMaster Math</span>
    <button onclick="window.print()" class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium">In ấn / Xuất PDF</button>
  </div>

  ${slides.map((s, idx) => `
    <section class="slide-page">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 uppercase tracking-wider">
            ${s.phaseTag}
          </span>
          <span class="text-sm font-mono text-slate-400">Trang ${idx + 1} / ${slides.length}</span>
        </div>
        <h1 class="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">${s.title}</h1>
      </div>

      <div class="my-auto py-6">
        ${s.problemIntro ? `
          <div class="max-w-3xl mx-auto p-8 rounded-2xl bg-slate-900 border border-amber-500/30 text-amber-100 font-serif italic text-lg leading-relaxed mb-6 whitespace-pre-line text-center">
            ${s.problemIntro}
          </div>
        ` : ''}

        ${s.latexFormula ? `
          <div class="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900 border border-blue-500/30 text-blue-200 text-2xl text-center font-mono my-4">
            $$${s.latexFormula}$$
          </div>
        ` : ''}

        ${s.bullets ? `
          <div class="bg-slate-900/70 p-8 rounded-2xl border border-slate-800 max-w-3xl mx-auto">
            <ul class="space-y-3 text-base text-slate-300">
              ${s.bullets.map(b => `<li class="flex items-start gap-3"><span class="text-blue-400 mt-1">✦</span> <span>${b}</span></li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </div>

      <div class="pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
        <div><span class="font-semibold text-slate-300">Ghi chú sư phạm:</span> ${s.speakerNotes}</div>
        <div>EduMaster Math — Không gian Giảng dạy Toán THCS-THPT</div>
      </div>
    </section>
  `).join('')}

  <script>
    document.addEventListener("DOMContentLoaded", function() {
      renderMathInElement(document.body, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false}
        ]
      });
    });
  </script>
</body>
</html>`;
  downloadBlob(content, `SLIDE_TOAN_${sanitizeFilename(title)}.html`, 'text/html');
}

export function exportScoringGuideDoc(guide: SolutionScoringGuide) {
  const content = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset='utf-8'>
<title>${guide.title}</title>
<style>
  body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.3; }
  table { width: 100%; border-collapse: collapse; margin-top: 15px; }
  th, td { border: 1px solid #000; padding: 6px; vertical-align: top; }
  th { background-color: #F1F5F9; font-weight: bold; }
  .center { text-align: center; }
</style>
</head>
<body>
  <h2 style="text-align: center; text-transform: uppercase;">${guide.title}</h2>
  <p style="text-align: center; font-style: italic;">Tổng điểm: ${guide.totalPoints}.0 điểm</p>
  <table>
    <tr>
      <th width="25%">Bước giải</th>
      <th width="55%">Yêu cầu cần đạt & nội dung</th>
      <th width="20%" class="center">Điểm tối đa</th>
    </tr>
    ${guide.criteria.map(c => `
      <tr>
        <td><strong>${c.stepName}</strong></td>
        <td>${c.contentRequired}</td>
        <td class="center"><strong>${c.maxPoints} đ</strong></td>
      </tr>
    `).join('')}
  </table>
</body>
</html>
  `;
  downloadBlob(content, `BAREM_CHAM_${sanitizeFilename(guide.title)}.doc`, 'application/msword');
}

function sanitizeFilename(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9_-]/g, '_')
    .substring(0, 40);
}

function downloadBlob(content: string, filename: string, mimeType: string) {
  const blob = new Blob(['\ufeff' + content], { type: `${mimeType};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

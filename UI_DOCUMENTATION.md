# TÀI LIỆU MÔ TẢ THIẾT KẾ GIAO DIỆN (UI SPECIFICATION & DESIGN SYSTEM)
## HỆ THỐNG EDUMASTER VN — TEACHING WORKSPACE NGỮ VĂN THPT

---

## 1. TỔNG QUAN SẢN PHẨM & TRIẾT LÝ THIẾT KẾ

### 1.1. Mục tiêu sản phẩm
EduMaster VN là **Teaching Workspace (Không gian làm việc sư phạm)** chuyên sâu dành cho giáo viên môn Ngữ văn cấp Trung học phổ thông (THPT) tại Việt Nam. Hệ thống kết nối liền mạch quy trình sư phạm:

$$\text{Đọc hiểu Tác phẩm} \longrightarrow \text{Phân tích Thi pháp} \longrightarrow \text{Thiết kế KHBD 5512} \longrightarrow \text{Slide Storytelling} \longrightarrow \text{Ngân hàng Câu hỏi} \longrightarrow \text{Đề thi & Ma trận 7991} \longrightarrow \text{Rubric Chấm văn}$$

### 1.2. Đối tượng sử dụng
- **Giáo viên trực tiếp giảng dạy**: Cô Trầm Thị Đổi và các thầy cô bộ môn Ngữ văn THPT (Lớp 10, 11, 12).
- **Tổ trưởng chuyên môn & Ban giám hiệu**: Giám sát kế hoạch bài dạy, duyệt ma trận đề kiểm tra và chuẩn hóa ngân hàng khảo thí.

### 1.3. Cảm xúc & Phong cách giao diện (Design Tenets)
- **Học thuật & Đậm chất văn học**: Loại bỏ phong cách dashboard doanh nghiệp khô cứng; tạo cảm giác lật mở một trang sách văn học cổ điển, tao nhã.
- **Trực quan & Hỗ trợ văn bản dài**: Khoảng cách dòng thoáng đãng, phân cấp thị giác rõ ràng, giảm áp lực thị giác khi làm việc với các trích đoạn văn xuôi và trường ca.
- **Zero-Pill Discipline**: Không bọc nhãn tĩnh trong các khối viên thuốc (pill badge) sặc sỡ; sử dụng văn bản thanh thoát kết hợp dấu phân cách typographic (`·`, `/`).

---

## 2. DESIGN SYSTEM & VISUAL TOKENS

### 2.1. Bảng màu (Color Palette)

| Vai trò | Tên màu | Mã Hex / Tailwind | Ý nghĩa & Vị trí ứng dụng |
| :--- | :--- | :--- | :--- |
| **Canvas** | Warm Ivory / Paper | `#FAF8F5` | Nền toàn bộ ứng dụng, tạo cảm giác trang giấy ngà ấm áp, chống chói mắt khi đọc lâu. |
| **Primary** | Deep Burgundy | `#7C2D37` | Màu nhận diện thương hiệu EduMaster Văn, nút hành động chính, tiêu đề tác phẩm, đường viền chủ đạo. |
| **Surface Dark** | Ink Charcoal | `#1C1817` / `#171413` | Màu nền của thanh Sidebar thương hiệu, chế độ Slide trình chiếu và khối mã JSON State. |
| **Accent** | Warm Amber / Gold | `#D97706` / `#F59E0B` | Điểm nhấn cho Quote Slide, trích dẫn quan trọng, biểu tượng thi pháp, highlight văn bản. |
| **Surface Light** | Pure White | `#FFFFFF` | Nền thẻ (card), bảng ma trận, khung văn bản in ấn A4. |
| **Dividers** | Hairline Stone | `#E7E5E4` (stone-200) | Đường kẻ phân tách mảnh 1px giữa các khu vực nội dung. |

#### Semantic Colors (Màu sắc sư phạm):
- **Xanh Lam (Blue - `#1D4ED8`)**: Nhận diện kiến thức mới, mức độ Nhận biết, phương pháp dạy học.
- **Xanh Lục (Emerald - `#047857`)**: Luyện tập, thực hành, câu trả lời đúng, chuẩn Công văn 7991.
- **Vàng Hổ Phách (Amber - `#B45309`)**: Vận dụng, câu hỏi đọc hiểu mở rộng, trích đoạn quote.
- **Tím Mộng Mơ (Purple - `#6B21A8`)**: Phân tích nghệ thuật, thi pháp học, ma trận 2 chiều.
- **Đỏ Hoa Hồng (Rose - `#BE123C`)**: Cảm xúc, điểm nhấn tượng đài bi tráng, cảnh báo xóa.

---

### 2.2. Hệ thống Typography (Typographic Hierarchy)

Ứng dụng tuân thủ nghiêm ngặt **Quy tắc 2+1 Font**:

1. **Font UI (Giao diện điều khiển)**: `Be Vietnam Pro` (Sans-serif)
   - Độ nét cao trên màn hình kỹ thuật số, hỗ trợ tiếng Việt hoàn hảo không lỗi dấu.
   - Ứng dụng: Menu điều hướng, nhãn nút bấm, bảng số liệu, thanh tiến độ.
2. **Font Tác phẩm & Trích dẫn**: `Lora` (Literary Serif)
   - Nét chữ thanh đậm trang nhã, tạo cảm giác đọc sách văn học in ấn truyền thống.
   - Ứng dụng: Toàn văn tác phẩm đọc hiểu, tiêu đề bài thơ, quote trích dẫn, nhận định văn học.
3. **Font Kỹ thuật & Barem**: `JetBrains Mono` (Monospace)
   - Ứng dụng: Điểm số, mã câu hỏi (`C1`, `C2`), thời lượng (`45 phút`), định dạng JSON.

| Cấp bậc | Font | Kích thước | Line-height | Trọng lượng |
| :--- | :--- | :--- | :--- | :--- |
| **Page Title** | Lora (Serif) | 24px - 32px | 1.25 | Bold (700) |
| **Section Header** | Lora (Serif) | 18px - 20px | 1.3 | SemiBold (600) |
| **Document Prose** | Lora (Serif) | 16px - 18px | 1.8 - 2.0 | Regular (400) |
| **UI Control / Tab** | Be Vietnam Pro (Sans) | 12px - 13px | 1.4 | Medium (500) / SemiBold |
| **Metadata / Kicker** | Be Vietnam Pro (Sans) | 10px - 11px | 1.4 | SemiBold (uppercase) |

---

### 2.3. Quy chuẩn Khối & Đổ bóng (Shapes, Borders & Elevation)
- **Bán kính góc bo (Radius)**:
  - Thẻ thông thường: `rounded-2xl` (16px).
  - Vùng chứa lớn (Workspace Container): `rounded-3xl` (24px).
  - Nút bấm & Ô nhập liệu: `rounded-xl` (12px).
- **Độ đổ bóng (Elevation)**:
  - Chỉ duy trì 1 cấp đổ bóng duy nhất (`shadow-xs` hoặc `shadow-sm`) để giữ giao diện phẳng nhẹ nhàng, tránh tạo các khối trôi nổi nặng nề.
  - Viền mảnh `1px solid #E7E5E4` (stone-200) thay vì viền dày.

---

## 3. KIẾN TRÚC THÔNG TIN & ĐIỀU HƯỚNG TỔNG THỂ

### 3.1. Hợp đồng Top Bar (3 Vùng Chuẩn)
Thanh Top Bar bám dính ở đỉnh màn hình (`sticky top-0 z-20`) với nền kính mờ (`backdrop-blur-md`):
1. **Vùng 1 (Brand & Môn học)**: Nút bật/tắt Drawer trên Mobile + Huy hiệu môn `Ngữ văn` + Khối lớp (`Lớp 12`).
2. **Vùng 2 (Ngữ cảnh Tác phẩm)**: Tên bài học và tác giả đang soạn thảo (`TÂY TIẾN — QUANG DŨNG`).
3. **Vùng 3 (Hành động & Trạng thái)**:
   - Chỉ báo lưu tự động: `● Đã lưu tự động`.
   - Nút xuất file nhanh: `Word 5512`, `Word 7991`, `In A4`.

### 3.2. Thanh bên Workspace Sidebar (Chiều rộng 360px)
- **Header thương hiệu**: Logo lông vũ văn học `EduMaster Văn`, thông tin giáo viên thực hiện (`Trầm Thị Đổi`), tên trường và khối lớp.
- **Bộ chuyển tác phẩm nhanh**: 3 nút chuyển tức thời giữa 3 thể loại chuẩn:
  - *Tây Tiến* (Thơ)
  - *Vợ nhặt* (Truyện)
  - *Tuyên ngôn Độc lập* (Văn nghị luận)
- **Menu 10 phân hệ dạy học**:
  1. Bàn làm việc Giáo viên (`dashboard`)
  2. Không gian Đọc & Chú giải (`workspace`)
  3. Phân tích Thể loại (`genre_analysis`)
  4. Kế hoạch bài dạy 5512 (`khbd`)
  5. Question Builder (`question_builder`)
  6. Rubric Chấm Tự luận (`rubric`)
  7. Slide Storytelling (`slides`)
  8. Đề kiểm tra 4 phần (`exam`)
  9. Ma trận & Bản đặc tả (`matrix`)
  10. Xuất bản & JSON State (`export_handover`)
- **Footer tác vụ nhanh**: 4 nút tắt xuất bản Word, Slide, In ấn và mở hộp JSON State.

---

## 4. MÔ TẢ CHI TIẾT TỪNG PHÂN HỆ MÀN HÌNH

### 4.1. Phân hệ 1: Bàn làm việc Giáo viên (Teacher Dashboard)
- **Banner chào đón**: Hiển thị họ tên giáo viên `Trầm Thị Đổi`, trường THPT, lớp phụ trách (`12 Văn, 12A1`), học kỳ I.
- **Khu vực "Công việc đang làm" (Resume Spotlight)**:
  - Card lớn màu nâu đen ánh hoa hồng (`#1C1817` sang `#3C1D25`) hiển thị tác phẩm đang soạn thảo dở dang.
  - Huy hiệu thể loại, thời gian sửa đổi gần nhất, trạng thái KHBD/Slide/Đề thi.
  - Thanh tiến độ soạn bài hoàn thành trực quan (Progress Bar %).
  - Nút bấm `Mở Workspace tác phẩm` để vào ngay nội dung.
- **Hệ thống 6 Quick Actions**:
  - Soạn bài & Đọc hiểu văn bản
  - Phân tích Thể loại & Sơ đồ
  - Thiết kế KHBD 5512
  - Tạo câu hỏi Đọc hiểu & Nghị luận
  - Khảo thí & Đề thi 7991
  - Tạo bài giảng Slide Storytelling
- **Danh sách Tác phẩm gần đây (Recent Lessons Grid)**:
  - Hiển thị các card tác phẩm mẫu kèm tóm tắt tiểu sử tác giả, bộ sách, phần trăm tiến độ.

---

### 4.2. Phân hệ 2: Không gian Đọc & Chú giải Tác phẩm (Literature Workspace 3 Cột)
Đây là màn hình làm việc trung tâm được tối ưu hóa cho việc tiếp cận văn bản dài.

#### Cột trái (Left Panel - Chiếm 3/12 cột desktop):
- **Outline bài học**: Cấu trúc các bước tiếp cận tác phẩm (Tác giả, Toàn văn, Đọc hiểu, Phân tích, Tổng kết, Luyện tập).
- **Danh sách chú thích đã tạo**: Thống kê số lượng ghi chú, trích đoạn văn bản, nội dung chú giải, có nút xóa nhanh.
- Cho phép thu gọn/mở rộng bằng nút mũi tên.

#### Cột giữa (Center Panel - Chiếm 6/12 cột desktop):
- **Document Reader**:
  - Toàn bộ trích đoạn hoặc toàn văn tác phẩm hiển thị trên nền giấy ngà với font chữ `Lora`, cỡ chữ lớn (18px) và line-height thoáng đãng (`leading-loose`).
  - Hỗ trợ phân đoạn có tiêu đề định hướng rõ ràng.
- **Floating Contextual Toolbar (Thanh công cụ ngữ cảnh nổi)**:
  - Tự động xuất hiện ngay phía trên đoạn văn khi người dùng bôi đen (select text).
  - Chức năng:
    - `Highlight`: Đánh dấu văn bản bằng 5 màu mực (Vàng, Xanh lục, Lam, Tím, Hồng).
    - `Chú thích`: Mở Modal nhập cảm thụ văn học, ý nghĩa hình tượng và hướng dẫn sư phạm.
    - `Nghệ thuật`: Gán nhãn biện pháp tu từ đặc sắc.
    - `Tạo câu hỏi`: Chuyển đoạn văn trích dẫn sang Question Builder làm ngữ liệu đọc hiểu.
    - `Vào Slide`: Tự động tạo một Slide dạng Quote đẹp mắt trong bộ Slide bài giảng.
    - `Vào Đề`: Đặt đoạn văn làm ngữ liệu chính trong Đề kiểm tra 7991.

#### Cột phải (Right Panel - Chiếm 3/12 cột desktop):
- **Contextual Analysis Panel**:
  - Hệ thống 5 tab phân tích chuyên sâu:
    - *Tab Nội dung*: Khái quát chủ đề tư tưởng và giá trị nhân văn cốt lõi.
    - *Tab Nghệ thuật*: Tổng hợp danh sách biện pháp tu từ, giọng điệu, nhịp điệu.
    - *Tab Hình ảnh*: Liệt kê hệ thống hình tượng trung tâm của tác phẩm.
    - *Tab Từ khóa*: Bộ từ khóa thi pháp học (nhãn tự).
    - *Tab Cảm xúc*: Sơ đồ đường đi cảm xúc của nhân vật trữ tình.
- **Nút chuyển đổi Reading Focus Mode**:
  - Khi kích hoạt, ẩn cả cột trái và cột phải, đưa văn bản đọc hiểu ra chính giữa màn hình với độ rộng giới hạn `max-w-3xl`, mang đến trải nghiệm tập trung tuyệt đối như đọc một cuốn sách in.

---

### 4.3. Phân hệ 3: Phân tích Chuyên sâu theo Thể loại (Genre Analysis)
Không dùng chung một biểu mẫu cho mọi thể loại văn bản; hệ thống tự thích ứng theo 3 thể loại:

#### Khi chọn THƠ:
- Khung phân tích 10 tiêu chuẩn thi pháp thơ:
  - Chủ đề tư tưởng
  - Hệ thống hình ảnh thơ
  - Từ khóa thi pháp (nhãn tự)
  - Mạch cảm xúc (Emotional Flow)
  - Nhịp điệu và cách gieo vần
  - Giọng điệu chủ đạo
  - Biện pháp tu từ đặc sắc
  - Các câu thơ trọng tâm
  - Giá trị nội dung
  - Giá trị nghệ thuật

#### Khi chọn TRUYỆN:
- Khung phân tích thi pháp văn xuôi:
  - Tình huống truyện độc đáo (Story Situation).
  - Điểm nhìn trần thuật & Người kể chuyện.
  - Thẻ chân dung nhân vật (Character Cards): Ngoại hình, phẩm chất, biến chuyển tâm lý, câu trích dẫn tiêu biểu.
  - Các chi tiết nghệ thuật đắt giá (nồi cháo cám, bát bánh đúc, giọt nước mắt bà cụ Tứ, lá cờ đỏ sao vàng).
  - Thông điệp nhân đạo của tác giả.

#### Khi chọn VĂN NGHỊ LUẬN (Visual Argument Map):
- Sơ đồ phân nhánh lập luận hình cây trực quan:
  $$\text{Luận đề trung tâm} \longrightarrow \text{Hệ thống Luận điểm} \longrightarrow \text{Lý lẽ sắc bén} \longrightarrow \text{Dẫn chứng thực tiễn} \longrightarrow \text{Kết luận}$$
- Khả năng tương tác: Giáo viên có thể thêm luận điểm mới, thêm lý lẽ con, xóa hoặc chỉnh sửa nội dung từng nút trên sơ đồ.

---

### 4.4. Phân hệ 4: Kế hoạch Bài dạy 5512 (Visual Lesson Builder)
- **Dải tiến trình Timeline 4 giai đoạn**:
  - `01 Khởi động` (Tạo tâm thế & khơi gợi)
  - `02 Hình thành kiến thức` (Đọc hiểu & khám phá thi pháp)
  - `03 Luyện tập` (Củng cố kỹ năng & trả lời câu hỏi)
  - `04 Vận dụng` (Chiêm nghiệm thực tiễn & viết sáng tạo)
- **Thẻ hoạt động dạy học (Activity Card)**:
  - Nhãn phân loại màu sắc, thời lượng (ví dụ: `23 phút`).
  - Hiển thị rõ: *a) Mục tiêu*, *b) Nội dung*, *c) Sản phẩm*, *Phương pháp dạy học*, *Công cụ & học liệu*.
  - Khung 4 bước tổ chức thực hiện chuẩn mực:
    - *Bước 1*: Chuyển giao nhiệm vụ
    - *Bước 2*: Thực hiện nhiệm vụ
    - *Bước 3*: Báo cáo, thảo luận
    - *Bước 4*: Kết luận, nhận định
  - Nút tiện ích `Thành Slide`: Tự động trích xuất nội dung hoạt động thành một slide trình chiếu tương ứng.
- **Chế độ xem & Xuất bản**: Chuyển đổi giữa *Visual Builder* và *Văn bản in A4*, nút xuất file Word `.doc`.

---

### 4.5. Phân hệ 5: Ngân hàng Câu hỏi Ngữ văn (Question Builder)
- **Quy trình chuẩn hóa 4 bước**:
  $$\text{NGỮ LIỆU THAM CHIẾU} \longrightarrow \text{LỆNH CÂU HỎI} \longrightarrow \text{ĐÁP ÁN GỢI Ý} \longrightarrow \text{HƯỚNG DẪN CHẤM & BIỂU ĐIỂM}$$
- **Hệ thống phân loại đa chiều**:
  - *Dạng câu hỏi (Type)*: Đọc hiểu, Tiếng Việt / Tu từ, Nghị luận xã hội, Nghị luận văn học.
  - *Mức độ nhận thức (Cognitive Level)*: Nhận biết (NB), Thông hiểu (TH), Vận dụng (VD).
  - *Kỹ năng đặc thù (Skill)*: Nhận diện, Giải thích, Phân tích, So sánh, Đánh giá, Liên hệ, Sáng tạo.
- **Liên kết đề thi**: Nút `Vào Đề 7991` cho phép đẩy câu hỏi trực tiếp sang Phần I, Phần II, Phần III hoặc Phần IV của đề kiểm tra tương ứng.

---

### 4.6. Phân hệ 6: Rubric Builder Chấm Tự luận & Bài viết
- **Bảng ma trận tiêu chí tự luận**:
  - Xác định vấn đề nghị luận
  - Bố cục & cấu trúc bài viết
  - Luận điểm & Lập luận
  - Dẫn chứng & Phân tích nghệ thuật
  - Diễn đạt, dùng từ & ngữ pháp
  - Sáng tạo & Đánh giá mở rộng
- **Tính năng thông minh**:
  - Chỉnh sửa trực tiếp từng tiêu chí, trọng số (%) và điểm tối đa.
  - Mô tả rõ các mức độ đạt được: *Xuất sắc*, *Đạt*, *Cần cố gắng*.
  - **Tự động cộng dồn và cân bằng tổng điểm (10.0 điểm)**.
  - Xuất bảng Rubric ra văn bản Microsoft Word `.doc`.

---

### 4.7. Phân hệ 7: Slide Bài giảng Storytelling
- **Dòng chảy bài giảng (Storytelling Flow)**: Không sao chép nguyên văn giáo án lên slide mà dẫn dắt học sinh qua các chặng cảm xúc:
  - *Cover Slide*: Tiêu đề tác phẩm, tác giả, mục tiêu bài học.
  - *Quote Slide (Đặc trưng Ngữ văn)*: Đoạn trích thơ/văn chữ lớn in nghiêng, tên tác giả, câu hỏi gợi mở thảo luận nhóm.
  - *Visual Map Slide*: Sơ đồ đường đi cảm xúc, timeline sự kiện hoặc chân dung nhân vật.
  - *Split Slide*: So sánh hai mặt đối lập (hiểm trở đèo dốc >< tâm thế hiên ngang người lính).
  - *Quiz Slide*: Câu hỏi tương tác nhanh có giải thích thi pháp học tức thì khi học sinh chọn đáp án.
- **Ghi chú sư phạm (Speaker Notes)**: Nằm ở đáy mỗi slide, gợi ý giáo viên cách đặt câu hỏi gợi mở và điều phối thời gian.
- **Trình chiếu Fullscreen**: Hỗ trợ phím mũi tên `←` / `→` và phím cách `Space`.

---

### 4.8. Phân hệ 8: Đề Kiểm tra Định kỳ Chuẩn Công văn 7991/BGDĐT-GDTrH
- **Bố cục 4 phần chuẩn hóa**:
  - **Phần I (3.0 điểm)**: 12 câu trắc nghiệm nhiều phương án lựa chọn (mỗi câu 0.25 điểm).
  - **Phần II (2.0 điểm)**: 2 câu trắc nghiệm Đúng/Sai, mỗi câu gồm đúng 4 phát biểu khẳng định a-b-c-d.
    - *Tích hợp Bộ mô phỏng chấm điểm CV 7991 trực tiếp*:
      - Đúng 1 ý: `0.10 đ`
      - Đúng 2 ý: `0.25 đ`
      - Đúng 3 ý: `0.50 đ`
      - Đúng cả 4 ý: `1.00 đ`
  - **Phần III (2.0 điểm)**: 4 câu trả lời ngắn dạng tự luận súc tích (mỗi câu 0.5 điểm).
  - **Phần IV (3.0 điểm)**: 1 câu tự luận nghị luận văn học / xã hội có bảng hướng dẫn chấm từng bước.
- **Chế độ xem**: Chuyển đổi giữa *Đề thi chính thức* và *Đáp án & Hướng dẫn chấm chi tiết*.

---

### 4.9. Phân hệ 9: Ma trận 2 Chiều & Bản Đặc tả
- **Khung Ma trận 2 chiều**:
  - Thể hiện rõ sự phân bổ số câu, số điểm theo 3 mức độ nhận thức: **40% Nhận biết - 30% Thông hiểu - 30% Vận dụng** (tổng 10.0 điểm).
  - Chia nhỏ chi tiết theo từng phần I, II, III, IV.
- **Bản đặc tả ma trận**:
  - Quy định rõ yêu cầu cần đạt (YCCĐ) theo chương trình GDPT 2018 cho từng câu hỏi trong đề thi.

---

### 4.10. Phân hệ 10: Trung tâm Xuất bản & Khối JSON State Handover
- **Bảng kiểm định 4 tiêu chuẩn (Verification Checklist)**:
  1. Đầy đủ hệ sinh thái Ngữ văn THPT.
  2. Đề thi chuẩn Phần II Đúng/Sai 4 lệnh a-b-c-d.
  3. Tích hợp bộ công cụ Xuất file Văn phòng.
  4. Khối JSON State bàn giao phiên làm việc.
- **Office Export Suite**:
  - Xuất Word KHBD 5512 (`.doc`)
  - Xuất Word Đề thi 7991 (`.doc`)
  - Xuất Word Rubric chấm bài (`.doc`)
  - Xuất Slide HTML/PPTX
  - In ấn trực tiếp A4 hoặc lưu PDF
- **Khối JSON State Handover**:
  - Mã hóa toàn bộ dữ liệu ứng dụng (`AppState`) thành khối JSON cấu trúc.
  - Nút sao chép 1 chạm và chức năng phục hồi phiên làm việc (Restore Session) từ mã JSON bất kỳ lúc nào.

---

## 5. THIẾT KẾ ĐÁP ỨNG (RESPONSIVE BEHAVIOR)

- **Desktop ($\ge 1024\text{px}$)**:
  - Sidebar cố định 360px.
  - Màn hình Literature Workspace hiển thị đầy đủ layout 3 cột song song (Outline - Văn bản - Phân tích).
- **Tablet ($768\text{px} - 1023\text{px}$)**:
  - Sidebar chuyển thành dạng Drawer đóng mở bằng nút Menu.
  - Cột Outline và Cột Phân tích có thể thu gọn bằng nút toggle để nhường không gian cho việc đọc văn bản.
- **Mobile ($< 768\text{px}$)**:
  - Thanh Top Bar co gọn, tự động ẩn bớt các nút thao tác phụ vào menu.
  - Văn bản đọc hiểu chiếm toàn bộ màn hình, bảng phân tích ngữ cảnh chuyển thành các tab nằm ở đáy trang.
  - Floating Toolbar tự căn giữa và co giãn linh hoạt theo chiều rộng màn hình.

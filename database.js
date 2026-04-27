// =========================================================================
// CƠ SỞ DỮ LIỆU ĐỀ THI ĐGNL V-ACT 
// Đã gộp Đề 2026 và Đề 2025 chuẩn cú pháp
// =========================================================================

const EXAM_DATABASE = {
    // ================= ĐỀ THI MẪU 2025 =================
    "vact2025": {
        title: "Đề Thi Mẫu V-ACT 2025",
        answers: [
            "B", "A", "A", "A", "D", "A", "C", "D", "C", "C",
            "B", "A", "D", "B", "A", "D", "D", "D", "A", "A",
            "D", "B", "A", "B", "D", "C", "D", "D", "A", "A",
            "A", "C", "B", "D", "B", "A", "C", "C", "B", "B",
            "B", "D", "A", "C", "C", "C", "A", "D", "C", "B",
            "D", "A", "D", "B", "C", "C", "C", "A", "C", "D",
            "A", "C", "A", "A", "B", "B", "A", "D", "A", "A",
            "C", "A", "C", "A", "A", "B", "D", "B", "D", "A",
            "A", "A", "B", "C", "B", "C", "D", "B", "A", "D",
            "C", "C", "A", "C", "D", "D", "A", "A", "B", "A",
            "D", "C", "A", "B", "D", "C", "A", "B", "D", "A",
            "D", "A", "A", "A", "C", "C", "D", "B", "A", "D"
        ],
        explanations: Array(120).fill("Giải thích chi tiết đang được cập nhật..."),
        htmlContent: `
            <div class="exam-header">
                ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH<br>KỲ THI ĐÁNH GIÁ NĂNG LỰC<br>
                ĐỀ THI MẪU 2025<br>
                <small>Thời gian làm bài: 150 phút (không kể thời gian phát đề) | Tổng số câu hỏi: 120 câu hỏi</small>
            </div>

            <h3 style="color: var(--accent); border-bottom: 1px solid var(--primary);">PHẦN 1: SỬ DỤNG NGÔN NGỮ</h3>
            <p><b>1.1. TIẾNG VIỆT</b></p>
            
            <b>Câu 1:</b> “Cành chọc trời là con đầu<br>
            Tên gọi ông Thu Tha<br>
            Cành bung xung là con thứ hai<br>
            Tên gọi bà Thu Thiên<br>
            Hai ông bà nên đôi nên lứa<br>
            Truyền cho:<br>
            Con gà có cựa<br>
            Dây dưa biết leo<br>
            Tre pheo có gai, có ngọn<br>
            Con người biết nói."<br>
            (Sử thi dân tộc Mường, Đẻ đất đẻ nước)<br>
            Nội dung của văn bản trên là gì?<br>
            A. Giải thích nguồn gốc trời và đất.<br>
            B. Giải thích đặc điểm các loài.<br>
            C. Giải thích nguồn gốc bản làng.<br>
            D. Giải thích nguồn gốc phong tục.<br><br>

            <b>Câu 2:</b> “Đây nói chuyện Ngọc Hoàng, từ lúc mọi công việc kiến thiết vũ trụ đã xong mới bắt đầu nghĩ đến chuyện sáng tạo ra vạn vật. Không hiểu Ngọc Hoàng làm như thế nào nhưng chỉ nghe nói rằng ông ta trước hết dùng những chất cặn còn sót lại trong trời đất, nặn ra đủ mọi giống vật từ những con to lớn như voi, tê ngưu, cọp đến những vật bé tí như sâu, kiến, bọ, trùng, v.v... Sau đó, Ngọc Hoàng mới gạn lấy chất trong, tinh túy rồi nặn ra một giống vật khác công phu hơn. Đó là loài người. Và cũng vì thế mà người ta khôn hơn vạn vật."<br>
            (Nguyễn Đổng Chi, Mười hai bà mụ)<br>
            Chi tiết “Ngọc Hoàng mới gạn lấy chất trong, tinh túy rồi nặn ra một giống vật khác công phu hơn” có nghĩa là gì?<br>
            A. Loài người là giống loài được sáng tạo một cách công phu từ chất trong, tinh túy.<br>
            B. Loài người là giống loài được tạo ra sau cùng và đồng chất với mọi loài, mọi vật.<br>
            C. Loài người là một hợp chất trong lành và tinh túy giống như mọi loài, mọi vật.<br>
            D. Loài người là sự sáng tạo thông thái của Ngọc Hoàng từ những chất cặn còn sót lại.<br><br>

            <b>Câu 3:</b> “Tuổi đà ngoại tám mươi già,<br>
            Thoắt thoắt xem bằng bóng ngựa qua.<br>
            Mai bạc lạnh quen nhiều tháng tuyết,<br>
            Cúc vàng thơm đổi mấy phen hoa.<br>
            Sang có phận, là ơn chúa,<br>
            Được làm người, bởi đức cha.<br>
            Am quán ngày nhàn, rồi mọi việc,<br>
            Dầu ai tự tại, mặc dầu ta.”<br>
            (Nguyễn Bỉnh Khiêm, Bạch Vân quốc ngữ thi)<br>
            Xác định thể thơ của văn bản trên.<br>
            A. Thất ngôn xen lục ngôn. &nbsp;&nbsp;&nbsp; B. Thất ngôn xen ngũ ngôn.<br>
            C. Thất ngôn tứ tuyệt. &nbsp;&nbsp;&nbsp; D. Lục ngôn bát cú.<br><br>

            <b>Câu 4:</b> "... Bà phu nhân nói: [...] Những cuộc gặp gỡ hiếm lạ, đời nào mà không có: như đền Bạc hậu, như quán Cao đường, như thần Lạc phố lướt sóng, như nàng Giang Phi cởi ngọc, như Lộng Ngọc lấy Tiêu Sử, như Thái Loan gặp Văn Tiêu, như Lan Hương gặp Trương Thạc... Bao nhiêu những chuyện cũ còn sờ sờ đó, nếu thế này mà bị chê cười thì đã có những người trước ấy họ chịu đỡ tiếng cười cho mình.<br>
            Mọi người cùng phá lên cười rất vui vẻ. Rồi đó mặt trời gác núi, các khách khứa đều giải tán cả."<br>
            (Nguyễn Dữ, Chuyện Từ Thức lấy vợ tiên)<br>
            Dòng nào sau đây không thể hiện đặc trưng hình thức nghệ thuật của văn bản trên?<br>
            A. Sử dụng biện pháp tu từ nhân hóa. &nbsp;&nbsp;&nbsp; B. Dùng nhiều điển tích, điển cố.<br>
            C. Tổ chức theo cấu trúc biền văn. &nbsp;&nbsp;&nbsp; D. Sử dụng biện pháp tu từ liệt kê.<br><br>

            <b>Câu 5:</b> “Ôi!<br>
            Trời Bến Nghé mây mưa sùi sụt, thương đấng anh hùng gặp thuở gian truân,<br>
            Đất Gò Công cây cỏ ủ ê, cảm niềm thần tử mắc nơi họa hại.<br>
            Xưa còn làm tướng, dốc rạng dồi hai chữ bình Tây,<br>
            Nay thác về thần, nên vưng hộ một câu phục thái.<br>
            Hỡi ôi thương thay!"<br>
            (Nguyễn Đình Chiểu, Văn tế Trương Định)<br>
            Dòng nào sau đây không thể hiện cảm xúc và tư tưởng của văn bản?<br>
            A. Tiếc thương cho sự hy sinh vì nước vì dân của đấng anh hùng.<br>
            B. Cảm thương trước tai họa mà đấng anh hùng mắc phải.<br>
            C. Tin vị anh hùng sống làm tướng đánh giặc, thác theo thần giúp đỡ nhân dân.<br>
            D. Xót xa cho trời Bến Nghé, đất Gò Công hoang tàn trong cơn binh biến.<br><br>

            <b>Câu 6:</b> “Đời bộ đội của tôi đã bước những bước đi đầu tiên trong các cánh rừng cằn cỗi vùng Bãi Nai. Ba tháng trời dãi gió dầm mưa trên thao trường đã giúp chúng tôi gột sạch mọi tàn tích của nếp sống thị thành và trụ vững bản thân mình vào đội ngũ. Chúng tôi tập đeo gạch hành quân, tập lăn lê trườn toài, tập nín thở bóp cò, tập bám trụ chiến hào, tập vọt tiến tấn công, tập đâm lê, tập quăng lựu đạn, tập nhồi bộc phá, tập tuân lệnh chỉ huy và tập bền bỉ chịu khổ."<br>
            (Bảo Ninh, Đêm trừ tịch)<br>
            Người kể chuyện trong văn bản trên sử dụng điểm nhìn trần thuật nào?<br>
            A. Điểm nhìn của ngôi thứ nhất. &nbsp;&nbsp;&nbsp; B. Điểm nhìn của ngôi thứ ba toàn tri.<br>
            C. Điểm nhìn của ngôi thứ ba hạn tri. &nbsp;&nbsp;&nbsp; D. Điểm nhìn của ngôi thứ hai.<br><br>

            <b>Câu 7:</b> “Nhớ cát là nỗi nhớ của tôi<br>
            Nhắm mắt lại thấy một màu trắng xóa<br>
            Trơ trụi đen những ngôi nhà lợp cỏ<br>
            Gió cát bào tróc vỏ những hàng dương<br>
            Không tìm đâu lấy một con đường<br>
            Chỉ có cát phơi mình dưới nắng<br>
            Chỉ có cát nghiêng về phía sóng<br>
            Như tấm lòng tôi ngóng những thuyền xa"<br>
            (Xuân Quỳnh, Nhớ cát)<br>
            Chủ thể trữ tình trong đoạn thơ trên là<br>
            A. nỗi nhớ của tôi. &nbsp;&nbsp;&nbsp; B. cát. &nbsp;&nbsp;&nbsp; C. tôi. &nbsp;&nbsp;&nbsp; D. tấm lòng tôi.<br><br>

            <b>Câu 8:</b> “Nước ở đâu mà tuôn mãi không thôi. Nước rung rào rào trên lá. Nước tràn trên mặt đất. Nước chảy theo những thân cây. Rừng ướt sũng, đất ướt sũng, và trời mãi cũng chẳng thấy khô hơn. Mới xế chiều mà rừng đã muốn tối om. Rừng như xị ra. Mặt trời vẫn còn đâu đó giữa đường chân trời. Nó đang thổi hồng một đám mây màu xám chì, giống như đống trấu ủ giữa sương mù đặc sệt.”<br>
            (Chu Lai, Nắng đồng bằng)<br>
            Dòng nào dưới đây chứa các biện pháp tu từ xuất hiện trong văn bản trên?<br>
            A. Phép điệp, so sánh, phóng đại.<br>
            B. Phép điệp, hoán dụ, so sánh.<br>
            C. Phép điệp, nói giảm, nói tránh, so sánh.<br>
            D. Phép điệp, so sánh, nhân hóa.<br><br>

            <b>Câu 9:</b> “Thầy nhạc: Thưa ngài, đáng lẽ ngài phải học âm nhạc, cũng như ngài đang học khiêu vũ. Đó là hai ngành nghệ thuật có liên quan chặt chẽ với nhau.<br>
            Thầy múa: Và nó mở mang trí não cho con người hiểu biết những cái đẹp.<br>
            Ông Giuốc-đanh: Thế những người sang trọng cũng có học âm nhạc chứ?<br>
            Thầy nhạc: Thưa ngài có chứ.<br>
            Ông Giuốc-đanh: Thế thì tôi sẽ học. Nhưng tôi không biết tôi có thể học vào thì giờ nào vì, ngoài thầy dạy kiếm thuật đến chỉ dẫn cho tôi, tôi lại còn mướn một thầy dạy triết lý, sáng hôm nay bắt đầu đây."<br>
            (Mô-li-e, Trưởng giả học làm sang)<br>
            Đoạn đối thoại trên cho thấy mục đích chính khiến ông Giuốc-đanh học âm nhạc là gì?<br>
            A. Ông Giuốc-đanh muốn thể hiện niềm đam mê với âm nhạc.<br>
            B. Ông Giuốc-đanh muốn mở mang hiểu biết về cái đẹp.<br>
            C. Ông Giuốc-đanh muốn trở thành người sang trọng.<br>
            D. Ông Giuốc-đanh muốn giỏi âm nhạc như giỏi kiếm thuật và triết lý.<br><br>

            <b>Câu 10:</b> “Thừa chu thuận thủy văng Ung Ninh<br>
            Hình điều thuyền lan tự giảo hình<br>
            Lưỡng ngạn hương thôn trù mật thậm<br>
            Giang tâm ngư phủ điểu thuyền khinh."<br>
            (Hồ Chí Minh, Bán lộ tháp thuyền phó Ung)<br>
            Dịch thơ:<br>
            “Đáp thuyền thẳng xuống huyện Ung Ninh<br>
            Lủng lẳng chân treo tựa giảo hình<br>
            Làng xóm ven sông đông đúc thế<br>
            Thuyền câu rẽ sóng nhẹ thênh thênh."<br>
            (Nam Trân dịch, Giữa đường đáp thuyền đi Ung Ninh)<br>
            Dòng nào sau đây không nêu đúng phong cách nghệ thuật của Hồ Chí Minh được biểu hiện trong bài thơ trên?<br>
            A. Phong thái ung dung, tự tại. &nbsp;&nbsp;&nbsp; B. Tinh thần lạc quan, yêu đời.<br>
            C. Tính chất bi tráng, hào hùng. &nbsp;&nbsp;&nbsp; D. Màu sắc cổ điển kết hợp hiện đại.<br><br>

            <b>Câu 11:</b> “Tôi vừa bỏ học sau sáu học kỳ “dùi kinh nấu sử” ở trường Luật. Suốt thời gian đó, sở thích duy nhất của tôi là đọc sách. Tôi có thể đọc ngấu nghiến bất cứ cuốn sách nào vớ được và học thuộc lòng những bài thơ độc đáo của Thế kỷ vàng Tây Ban Nha. Tôi đã đọc hầu hết các bản dịch cũng như nguyên bản các tác phẩm được coi là nổi tiếng lúc bấy giờ và những cuốn sách đó đã cho tôi hiểu được kỹ năng cũng như các tiểu xảo cần có khi viết tiểu thuyết."<br>
            (Gabriel Garcia Marquez, Sống để kể lại)<br>
            Nội dung của văn bản trên là gì?<br>
            A. Niềm đam mê học Luật và lối học “dùi kinh nấu sử” ở người viết.<br>
            B. Niềm đam mê đọc sách và tình yêu văn chương ở người viết.<br>
            C. Niềm đam mê sáng tác thơ ca và tiểu thuyết ở người viết.<br>
            D. Niềm đam mê đọc các bản dịch và nguyên tác ở người viết.<br><br>

            <b>Câu 12:</b> Dòng nào sau đây nêu tên những tác phẩm cùng phong cách sáng tác của trường phái văn học hiện thực?<br>
            A. Tắt đèn (Ngô Tất Tố), Số đỏ (Vũ Trọng Phụng), Chí Phèo (Nam Cao).<br>
            B. Chữ người tử tù (Nguyễn Tuân), Giông tố (Vũ Trọng Phụng), Lão Hạc (Nam Cao).<br>
            C. Hai đứa trẻ (Thạch Lam), Tắt đèn (Ngô Tất Tố), Số đỏ (Vũ Trọng Phụng).<br>
            D. Lão Hạc (Nam Cao), Số đỏ (Vũ Trọng Phụng), Chữ người tử tù (Nguyễn Tuân).<br><br>

            <b>Câu 13:</b> Dòng nào dưới đây có các từ viết đúng chính tả?<br>
            A. Sai xót, sơ suất, sừng sộ. &nbsp;&nbsp;&nbsp; B. Sai xót, sơ xuất, sừng sộ.<br>
            C. Sai sót, sơ xuất, sừng xộ. &nbsp;&nbsp;&nbsp; D. Sai sót, sơ suất, sừng sộ.<br><br>

            <b>Câu 14:</b> Câu nào dưới đây chứa từ viết sai chính tả?<br>
            A. Sở Giao thông Vận tải kiến nghị xây kè chống sạt lở hai đoạn bờ sông ở thành phố này.<br>
            B. Những chính sách đó quá xa vời thực tế, quá viễn vông nên rất khó được phê duyệt.<br>
            C. Trầm cảm là kẻ thù giấu mặt đối với sức khỏe tinh thần lẫn thể chất của con người.<br>
            D. Anh Phụng và nhóm bạn đã dành năm ngày để đi bộ đến hồ axit lớn nhất thế giới.<br><br>

            <b>Câu 15:</b> “Theo tôi, đó là lối giáo dục đứng đắn, đích thực của việc dạy; người dạy sẽ làm đúng vai trò của mình hơn, nhất là biết khiêm cung hơn."<br>
            Từ nào bị dùng sai trong câu trên?<br>
            A. đứng đắn. &nbsp;&nbsp;&nbsp; B. đích thực. &nbsp;&nbsp;&nbsp; C. vai trò. &nbsp;&nbsp;&nbsp; D. khiêm cung.<br><br>

            <b>Câu 16:</b> “Những mái nhà đơn sơ, giản dị nơi thâm sâu cùng cốc của tỉnh Lào Cai nằm sát bên mép núi."<br>
            Xác định lỗi sai trong câu trên.<br>
            A. Sai về dùng từ. &nbsp;&nbsp;&nbsp; B. Sai ngữ pháp. &nbsp;&nbsp;&nbsp; C. Sai quy chiếu. &nbsp;&nbsp;&nbsp; D. Sai logic.<br><br>

            <b>Câu 17:</b> Câu nào dưới đây là câu đúng?<br>
            A. Sự đồng hành, bên cạnh lẫn nhau là minh chứng rõ nhất cho tình yêu sâu đậm.<br>
            B. Giải pháp này như cứu cánh nhóm chúng tôi trong lúc bế tắc.<br>
            C. Yếu điểm của tôi vẫn là sự thiếu tự tin khi đứng trước đám đông.<br>
            D. Qua đó, ta càng thấy học vấn uyên bác và tầm nhìn xa rộng của anh.<br><br>

            <b>Câu 18:</b> “Để đánh dấu bước ngoặt mới về phát triển thị trường tại các quốc gia Đông Nam Á".<br>
            Câu trên là câu chưa hoàn chỉnh vì thiếu thành phần nào sau đây?<br>
            A. Thiếu chủ ngữ. &nbsp;&nbsp;&nbsp; B. Thiếu vị ngữ. &nbsp;&nbsp;&nbsp; C. Thiếu trạng ngữ. &nbsp;&nbsp;&nbsp; D. Thiếu nòng cốt câu.<br><br>

            <b>Câu 19:</b> “Chúng tôi đã thảo luận về dự án này hai lần: một lần vào năm ngoái, một lần ngay tại văn phòng đại diện của công ti ở phía Nam.”<br>
            Nhận định nào về câu trên là đúng?<br>
            A. Câu sai logic ngữ nghĩa. &nbsp;&nbsp;&nbsp; B. Câu mắc lỗi dùng từ.<br>
            C. Câu sai cấu tạo ngữ pháp. &nbsp;&nbsp;&nbsp; D. Câu mắc lỗi dấu câu.<br><br>

            <b>Câu 20:</b> Chỉ ra câu sai trong các câu sau:<br>
            A. Do tình cảm chân thành, gần gũi của các anh chị khiến Khang gắn bó với nhóm hơn.<br>
            B. Nhờ có những tình cảm chân thành, gần gũi của các anh chị, Khang gắn bó với nhóm hơn.<br>
            C. Những tình cảm chân thành, gần gũi của các anh chị làm cho Khang gắn bó với nhóm hơn.<br>
            D. Đáp lại những tình cảm chân thành, gần gũi của các anh chị, Khang gắn bó với nhóm hơn.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 21 đến 25</b><br>
                Biến đổi khí hậu đang được dự báo sẽ làm gia tăng hạn hán, qua đó làm trầm trọng thêm tình trạng xâm nhập mặn ở Đồng bằng sông Cửu Long (ĐBSCL). Vậy sự kết hợp giữa hai yếu tố này sẽ tác động trực tiếp như thế nào đến sự tồn tại của nông dân ĐBSCL, những người chủ yếu có sinh kế phụ thuộc vào việc trồng lúa?<br>
                M. A. van Aalst và các cộng sự ở Trường Kinh doanh và Kinh tế, Đại học Vrije Amsterdam, đã đặt câu hỏi này vào cả vùng ĐBSCL và xem xét mức độ tổn thương ở các mức quy mô khác nhau, cả cấp quận, cấp xã và cấp hộ gia đình. Giải thích vì sao lại chọn ĐBSCL, các nhà nghiên cứu cho rằng đây là điểm nóng về ảnh hưởng của biến đổi khí hậu và môi trường. Trong cả thập kỷ qua, vùng này đã trải qua những thay đổi môi trường ở tốc độ nhanh và chậm, như nước biển dâng, lũ lụt, xâm nhập mặn và hạn hán trong khi nguồn sống của 75% cư dân phụ thuộc vào nông nghiệp. Sản phẩm nông nghiệp chiếm vị thế chủ đạo của ĐBSCL là lúa, vốn dễ bị ảnh hưởng bởi điều kiện thời tiết khắc nghiệt. Họ tập trung vào giai đoạn 2015-2016, khi cả đồng bằng phải gánh chịu đợt hạn hán khốc liệt nhất trong lịch sử, đồng thời còn phải trong cảnh dòng chảy từ thượng nguồn xuống thấp hơn 65 đến 70% so với trung bình hằng năm.<br>
                Sử dụng các mô hình tính toán, họ phát hiện ra mức độ dễ bị tổn thương ở cấp độ huyện và xã có những điểm khác biệt. Ở cấp huyện, mặc dù có mối liên hệ giữa nghèo đói và thất thu vụ mùa nhưng không có chỉ dấu trực tiếp giữa sự phơi nhiễm xâm nhập mặn với nghèo đói, mặc dù thông thường xâm nhập mặn sẽ góp phần làm giảm năng suất thu hoạch với tỉ lệ xấp xỉ 21%. Ở cấp xã, mối liên hệ này thể hiện tương đối rõ nét. Các xã nghèo hơn và bị xâm nhập mặn nhiều hơn đều phải hứng chịu cảnh bị mất mát mùa vụ ở mức cao trong cùng năm. Do đó, các cộng đồng nghèo sẽ có mức độ tổn thương do tác động trực tiếp của môi trường cao hơn, điều vẫn còn chưa thể hiện rõ ở cấp huyện.<br>
                Ở cấp hộ gia đình, các hộ sống trong khu vực nghèo sẽ phải đối mặt với khả năng mất mùa cao hơn. Mối quan hệ này chứng tỏ hiệu ứng này thậm chí còn mạnh hơn ở những nơi chịu xâm nhập mặn cao, chỉ dấu là những hộ sống ở khu vực thịnh vượng hơn đều có năng lực thích ứng tốt hơn. Các mô hình cũng cho thấy mức độ rủi ro cao hơn ở cấp hộ gia đình có liên quan đáng kể với mức độ giáo dục thấp hơn, tài sản thấp hơn và quy mô canh tác nhỏ hơn.<br>
                (Theo Anh Vũ, Tính dễ bị tổn thương và khó phục hồi của nông dân ĐBSCL trong hạn hán)
            </div>

            <b>Câu 21:</b> Bao nhiêu % cư dân ĐBSCL có nguồn sống phụ thuộc vào nông nghiệp?<br>
            A. 21%. &nbsp;&nbsp;&nbsp; B. 65-70%. &nbsp;&nbsp;&nbsp; C. 50%. &nbsp;&nbsp;&nbsp; D. 75%.<br><br>

            <b>Câu 22:</b> Vì sao nhóm nghiên cứu chọn ĐBSCL là địa phương để khảo sát biến đổi khí hậu?<br>
            A. Vì ĐBSCL là một đồng bằng quan trọng của cả nước.<br>
            B. Vì ĐBSCL là điểm nóng về ảnh hưởng của biến đổi khí hậu và môi trường.<br>
            C. Vì ĐBSCL có mức độ tổn thương ở các mức quy mô khác nhau.<br>
            D. Vì ĐBSCL gánh chịu đợt hạn hán khốc liệt nhất trong giai đoạn 2015-2016.<br><br>

            <b>Câu 23:</b> Những tác động của biến đổi khí hậu đến với môi trường sinh thái ĐBSCL là gì?<br>
            A. Nước biển dâng, lũ lụt, xâm nhập mặn và hạn hán.<br>
            B. Xói mòn, lũ lụt, hạn hán và hiệu ứng nhà kính.<br>
            C. Phơi nhiễm xâm nhập mặn và giảm đa dạng sinh học.<br>
            D. Xói mòn, hạn hán, nước biển dâng và xâm nhập mặn.<br><br>

            <b>Câu 24:</b> “Ở cấp huyện, mặc dù có mối liên hệ giữa nghèo đói và thất thu vụ mùa nhưng không có chỉ dấu trực tiếp giữa sự phơi nhiễm xâm nhập mặn với nghèo đói, mặc dù thông thường xâm nhập mặn sẽ góp phần làm giảm năng suất thu hoạch với tỉ lệ xấp xỉ 21%".<br>
            Cụm từ “Ở cấp huyện" trong câu trên là thành phần gì của câu?<br>
            A. Khởi ngữ. &nbsp;&nbsp;&nbsp; B. Trạng ngữ. &nbsp;&nbsp;&nbsp; C. Vị ngữ. &nbsp;&nbsp;&nbsp; D. Chủ ngữ.<br><br>

            <b>Câu 25:</b> Chủ đề chính của văn bản trên là gì?<br>
            A. Những biểu hiện của biến đổi khí hậu ở ĐBSCL.<br>
            B. Hậu quả của hiện tượng xâm nhập mặn ở ĐBSCL.<br>
            C. Ảnh hưởng của biến đổi khí hậu đến thiên nhiên ĐBSCL.<br>
            D. Ảnh hưởng của biến đổi khí hậu đến đời sống người dân ĐBSCL.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 26 đến 30</b><br>
                Càng chung sống lâu năm với nghề viết, tôi càng tin rằng văn chương nói riêng và nghệ thuật nói chung không nhằm và cũng không có khả năng phản ánh cuộc đời y như nguyên trạng (1). Ngay cả nhiếp ảnh là nghệ thuật gần với sự trung thực nhất cũng không thể phản ánh được mặt sau của quả táo (2). Nhưng ngay cả khi có thể mô tả cuộc đời như nó vốn là, văn chương cũng từ chối làm điều đó (3). Bởi nếu vậy, văn chương sẽ không có lí do để tồn tại: người đọc khôn ngoan sẽ đọc trực tiếp trong cuộc đời thay vì nhìn vào trang sách (4). Suy cho cùng, thế giới mà người đọc tìm thấy và muốn thấy trong những trang văn bao giờ cũng là thế giới đã được lọc qua tâm hồn của người viết; đó là thế giới đã được nhà văn tháo ra và lắp lại theo một cấu trúc và tỉ lệ hoàn toàn khác (5). Thông qua cung cách thiết kế cái thế giới văn chương đó, nhà văn gửi đi những thông điệp và tìm kiếm sự chia sẻ (6). Những thông tin đủ loại của đời thường, đã có báo chí, đài truyền hình và bà hàng xóm cung cấp (7). Người đọc thông minh bao giờ cũng chờ đợi ở những trang văn một hiện thực khác - một hiện thực cao hơn so với hiện thực ngoài kia (8).<br>
                (Nguyễn Nhật Ánh, Cảm ơn người lớn)
            </div>

            <b>Câu 26:</b> “Càng ... càng...” ở câu (1) của văn bản trên thể hiện mối quan hệ gì giữa các thành phần câu?<br>
            A. Nhân quả. &nbsp;&nbsp;&nbsp; B. Chính phụ. &nbsp;&nbsp;&nbsp; C. Hô ứng. &nbsp;&nbsp;&nbsp; D. Đẳng lập.<br><br>

            <b>Câu 27:</b> Từ “cung cách" trong câu (6) có nghĩa là gì?<br>
            A. Cách thức giao tiếp giữa con người với con người.<br>
            B. Cách thức thể hiện thái độ ứng xử của con người.<br>
            C. Cách thức con người suy tư, hồi tưởng về quá khứ.<br>
            D. Cách thức tiến hành sự việc có thể quan sát được.<br><br>

            <b>Câu 28:</b> Với cách diễn đạt “một hiện thực cao hơn so với hiện thực ngoài kia" trong câu (8), tác giả đã sử dụng biện pháp tu từ gì?<br>
            A. Liệt kê. &nbsp;&nbsp;&nbsp; B. Nhân hóa. &nbsp;&nbsp;&nbsp; C. Chơi chữ. &nbsp;&nbsp;&nbsp; D. Chêm xen.<br><br>

            <b>Câu 29:</b> Ý nào sau đây không được đề cập trong văn bản trên?<br>
            A. Văn chương phản ánh đa dạng hiện thực đời sống.<br>
            B. Nhiếp ảnh cũng không thể phản ánh đầy đủ hiện thực đời sống.<br>
            C. Nhà văn luôn tìm kiếm sự chia sẻ thông qua tác phẩm.<br>
            D. Người đọc thông minh xem văn chương là hiện thực đời sống.<br><br>

            <b>Câu 30:</b> Quan điểm của người viết thể hiện trong văn bản trên là gì?<br>
            A. Văn chương không nhằm và không có khả năng phản ánh đời sống như nguyên trạng.<br>
            B. Văn chương hướng đến sự mô tả trung thực và đầy đủ về cuộc đời như nó vốn là.<br>
            C. Văn chương có lí do tồn tại riêng của nó: phục vụ cho độc giả thông minh.<br>
            D. Văn chương có cách thiết kế tương đồng với cấu trúc và tỉ lệ của hiện thực đời sống.<br><br>

            <p><b>1.2. TIẾNG ANH</b></p>
            <i>Questions 31-35: Choose a suitable word or phrase (A, B, C, or D) to fill in each blank.</i><br>
            <b>Câu 31:</b> Before you end your presentation, you need to run ______ all of the key points again.<br>
            A. over &nbsp;&nbsp;&nbsp; B. into &nbsp;&nbsp;&nbsp; C. about &nbsp;&nbsp;&nbsp; D. with<br><br>

            <b>Câu 32:</b> I hoped to see Andrew at the party, but he ______ before I arrived.<br>
            A. left &nbsp;&nbsp;&nbsp; B. would leave &nbsp;&nbsp;&nbsp; C. had left &nbsp;&nbsp;&nbsp; D. had been leaving<br><br>

            <b>Câu 33:</b> Grace writes the most inspiring song lyrics, but she can't rap ______ her competitors.<br>
            A. as good as &nbsp;&nbsp;&nbsp; B. as well as &nbsp;&nbsp;&nbsp; C. better than &nbsp;&nbsp;&nbsp; D. so good as<br><br>

            <b>Câu 34:</b> Laura wants to become a novelist, so she needs to learn skills of ______.<br>
            A. writing to create &nbsp;&nbsp;&nbsp; B. writing and creating &nbsp;&nbsp;&nbsp; C. written creativity &nbsp;&nbsp;&nbsp; D. creative writing<br><br>

            <b>Câu 35:</b> A mukbang is an online show in which a host consumes ______ of food while interacting with the audience.<br>
            A. a large number &nbsp;&nbsp;&nbsp; B. huge amounts &nbsp;&nbsp;&nbsp; C. too much &nbsp;&nbsp;&nbsp; D. many<br><br>

            <i>Questions 36-40: Each of the following sentences has one error (A, B, C, or D). Find it and blacken your choice on your answer sheet.</i><br>
            <b>Câu 36:</b> I ate the loaf of bread (A) for breakfast, but it kept (B) me going until (C) the late afternoon (D).<br>
            A. the loaf of bread &nbsp;&nbsp;&nbsp; B. kept &nbsp;&nbsp;&nbsp; C. until &nbsp;&nbsp;&nbsp; D. the late afternoon<br><br>

            <b>Câu 37:</b> Yoghurt, one of the healthiest snacks (A), are advised (B) for people with (C) daily calcium needs (D).<br>
            A. one of the healthiest snacks &nbsp;&nbsp;&nbsp; B. are advised &nbsp;&nbsp;&nbsp; C. with &nbsp;&nbsp;&nbsp; D. daily calcium needs<br><br>

            <b>Câu 38:</b> My student (A) told me that out of the four IELTS's skills (B), writing (C) is not his strength (D).<br>
            A. My student &nbsp;&nbsp;&nbsp; B. IELTS's skills &nbsp;&nbsp;&nbsp; C. writing &nbsp;&nbsp;&nbsp; D. his strength<br><br>

            <b>Câu 39:</b> The little Nikolas (A) is so excited since she (B) will have an outing next Friday (C) for some photoshots (D).<br>
            A. The little Nikolas &nbsp;&nbsp;&nbsp; B. she &nbsp;&nbsp;&nbsp; C. an outing next Friday &nbsp;&nbsp;&nbsp; D. photoshots<br><br>

            <b>Câu 40:</b> Tom's work as a college admissions officer (A), who (B) is part-time, brings (C) him some social skills (D).<br>
            A. a college admissions officer &nbsp;&nbsp;&nbsp; B. who &nbsp;&nbsp;&nbsp; C. brings &nbsp;&nbsp;&nbsp; D. some social skills<br><br>

            <i>Questions 41-45: Which of the following best restates each of the given sentences?</i><br>
            <b>Câu 41:</b> Jack said, "Daisy, I think you'd better go to the dentist's tomorrow."<br>
            A. Jack told Daisy to go to a better dentist the next day.<br>
            B. Jack advised Daisy to visit a dentist the following day.<br>
            C. Jack told Daisy that he thought it was better to see a dentist.<br>
            D. Jack said to Daisy about his going to the dentist's the day after.<br><br>

            <b>Câu 42:</b> There was a terrible fire due to difficult access for the fire fighters.<br>
            A. The fire fighters would have had easy access if the fire had not been terrible.<br>
            B. The fire would not be so terrible if the fire fighters had easy access.<br>
            C. Unless the fire was controlled, the fire fighters could not have access.<br>
            D. If the fire fighters had had easy access, the fire would have been controlled.<br><br>

            <b>Câu 43:</b> This chocolate box is sweet, but the other two boxes are too sweet.<br>
            A. Of the three chocolate boxes, this box is the least sweet.<br>
            B. The other two chocolate boxes are less sweet than this box.<br>
            C. No other chocolate is sweeter than this box of chocolate.<br>
            D. One of the three boxes of chocolate is too sweet to eat.<br><br>

            <b>Câu 44:</b> Attention! Reduce the heat so as not to burn the food.<br>
            A. Reduce the heat quickly so that you can burn the food.<br>
            B. If you reduce the heat, the food would not be burnt.<br>
            C. The heat must be reduced so that the food is not burnt.<br>
            D. The food will be burnt quickly if the heat is reduced.<br><br>

            <b>Câu 45:</b> The tourist island is losing its customers possibly because of its prices.<br>
            A. It is possible that customers will not come to the expensive tourist island.<br>
            B. The tourist island's possible loss of customers is due to its high prices.<br>
            C. Prices may be a reason for the current loss of customers on the tourist island.<br>
            D. The tourist island will increase its prices, causing a loss of customers.<br><br>

            <div class="reading-passage">
                <b>Questions 46-52: Read the passage carefully.</b><br>
                1. The world of rap music has been going through some big changes lately. It is not like it used to be, and that is a positive change. Taking a close look at how rap culture is evolving will enable us to understand the current transformations.<br>
                2. Rap music is not just coming from one place anymore. It is like a big party where everyone is invited. Rappers from different backgrounds are making their own unique sounds. Some tell profound stories about where they are from, and others create songs that inspire the audience to dance. This mix of styles is what makes rap culture so exciting today.<br>
                3. Rappers also care about important social issues, among which are fairness and justice. They use their songs to talk about things like racism, police attacks, and money problems. When big movements like Black Lives Matter started, many rappers stood up and supported the cause. They want to make the world better through their music.<br>
                4. Fashion is an important theme in rap culture, too. Rappers are like fashion leaders. These performers work with big brands and wear stylish clothes to advertise for them. What they wear can become a trend for lots of people. It is not just about looking good; it is about showing your special style.<br>
                5. Social media, like Instagram and TikTok, is a big part of rap culture today. Rappers can talk to their fans directly and show what they are doing. It is like having a chat with your favorite artist. They use these apps to share their music and connect with people who love it.<br>
                6. While there are some things that could be better about the current rap culture, it cannot be denied that rap music is delighting our world. If listeners are less critical of its inappropriate language expressions here and there, they can see that rap music is a powerful force that can inspire and bring people together.
            </div>

            <b>Câu 46:</b> What is the passage mainly about?<br>
            A. Declining quality of current rap music<br>
            B. How rap culture has shaped youths' lives<br>
            C. Positive differences in today's rap music<br>
            D. Rap culture as an inspiring social force<br><br>

            <b>Câu 47:</b> According to paragraph 2, what does the word others refer to?<br>
            A. rappers &nbsp;&nbsp;&nbsp; B. backgrounds &nbsp;&nbsp;&nbsp; C. sounds &nbsp;&nbsp;&nbsp; D. stories<br><br>

            <b>Câu 48:</b> In paragraph 2, which of the following is NOT a characteristic of rappers today?<br>
            A. Their diverse styles motivate rap listeners.<br>
            B. They create their distinctive music sounds.<br>
            C. They have great storytelling skills.<br>
            D. They invite everyone to a big party.<br><br>

            <b>Câu 49:</b> In paragraph 3, what is the word cause closest in meaning to?<br>
            A. reason &nbsp;&nbsp;&nbsp; B. motive &nbsp;&nbsp;&nbsp; C. principle &nbsp;&nbsp;&nbsp; D. origin<br><br>

            <b>Câu 50:</b> In paragraph 4, why are rappers compared with fashion leaders?<br>
            A. They advertise successfully for many big brands.<br>
            B. Many people can imitate their stylish clothes.<br>
            C. They are stylists for many other performers.<br>
            D. They wear clothes with special colors and fabrics.<br><br>

            <b>Câu 51:</b> In paragraph 5, what can be inferred about rap culture today?<br>
            A. It could not attract the audience without social media.<br>
            B. It is more successful on Instagram and Tiktok.<br>
            C. It is considerably dependent on social media.<br>
            D. It is more interactive due to the use of social media<br><br>

            <b>Câu 52:</b> According to paragraph 6, which of the following is a limitation of today's rap music?<br>
            A. its lyrics &nbsp;&nbsp;&nbsp; B. its beats &nbsp;&nbsp;&nbsp; C. its sounds &nbsp;&nbsp;&nbsp; D. its styles<br><br>

            <div class="reading-passage">
                <b>Questions 53-60: Read the passage carefully.</b><br>
                1. SARS, Ebola, and SARS-CoV-2: all three of these highly infectious viruses have caused global panic since 2002, and all three of them jumped to humans from wild animals living in dense tropical forests that we are slashing and burning to create land for crops and housing. The more we clear, the more we come into contact with wildlife which hosts illnesses likely transferred to humans.<br>
                2. Stopping deforestation will not only reduce natural disasters but also control the spread of a long list of dangerous diseases that have come from rain forest habitats, including Zika, Nipah, malaria, cholera, HIV, and so on. A 2019 study found that a 10 percent increase in deforestation would raise malaria cases by 3.3 percent; that would be 7.4 million people worldwide. Meanwhile, an average of 28 million hectares of forest have been cut down annually since 2016, and there is no sign of a slowdown.<br>
                3. Societies can take numerous steps to prevent the destruction. Eating less meat, which improves our health anyway, will lessen demand for crops and pastures. Eating fewer processed foods will reduce the demand for palm oil, much of which is grown on land from tropical rain forests. Producing more food per hectare can boost supply without the need for more land.<br>
                4. In the meantime, governments should prohibit the sale of live wild animals in so-called wet markets, where disease-causing agents have repeatedly crossed over into humans. The markets may be culturally important, but the risk is too great. Governments must also ban illegal wildlife trade, which can spread infectious agents far and wide. In addition, authorities must examine factory farms that pack thousands of animals together - the source of the 2009 swine flu outbreak that killed more than 10,000 people in the U.S. and many more people worldwide.<br>
                5. Hopefully, ending deforestation and preventing pandemics can guarantee healthy lives, zero hunger, gender equality, responsible consumption and production, sustainably managed land, and climate action. The COVID-19 pandemic is a catastrophe, but it calls for our attention on the human achievements by not overexploiting the natural world.
            </div>

            <b>Câu 53:</b> The best title of the passage can be<br>
            A. Causes and Effects of Many Pandemics in History<br>
            B. Being Vegans to Protect the World from Pandemics<br>
            C. Deforestation As a Causative Factor of Most Pandemics<br>
            D. Ways to Save the World from Coming Pandemics<br><br>

            <b>Câu 54:</b> The phrase The more in paragraph 1 refers to<br>
            A. wild animals &nbsp;&nbsp;&nbsp; B. tropical forests &nbsp;&nbsp;&nbsp; C. land &nbsp;&nbsp;&nbsp; D. crops and housing<br><br>

            <b>Câu 55:</b> In paragraph 1, wildlife<br>
            A. causes many deadly diseases in humans<br>
            B. contains most dangerous illnesses<br>
            C. may transmit causative agents to humans<br>
            D. likes to come into contact with humans<br><br>

            <b>Câu 56:</b> In paragraph 2, the word spread can be replaced by<br>
            A. start &nbsp;&nbsp;&nbsp; B. infection &nbsp;&nbsp;&nbsp; C. extension &nbsp;&nbsp;&nbsp; D. restriction<br><br>

            <b>Câu 57:</b> In paragraph 2, it is NOT mentioned that<br>
            A. Zika and HIV are among diseases coming from rain forests<br>
            B. malaria is found by a study to be linked to deforestation<br>
            C. 7.4 million people worldwide had malaria in 2019<br>
            D. deforestation has not reduced its rate since the year of 2016<br><br>

            <b>Câu 58:</b> In paragraph 3, the author uses the word anyway in order to<br>
            A. confirm a secondary effect &nbsp;&nbsp;&nbsp; B. contrast two causes<br>
            C. exemplify a solution &nbsp;&nbsp;&nbsp; D. list all of the consequences<br><br>

            <b>Câu 59:</b> It can be inferred from paragraph 4 that in wet markets,<br>
            A. wildlife cannot be sold &nbsp;&nbsp;&nbsp; B. cultural impacts are great<br>
            C. losses outweigh gains &nbsp;&nbsp;&nbsp; D. animals are not sold dead<br><br>

            <b>Câu 60:</b> It can be seen in paragraphs 2, 3, and 4 that<br>
            A. while plants can be well preserved, wild animals are hard to controlled<br>
            B. it may be not too late if humans stop killing living things in nature<br>
            C. humans' killing of wild animals is more dangerous than that of plants<br>
            D. humans destroy plants and animals, so they will end up destroying themselves<br><br>

            <h3 style="color: var(--accent); border-bottom: 1px solid var(--primary);">PHẦN 2: TOÁN HỌC</h3>
            
            <b>Câu 61:</b> Một lớp học có tất cả học sinh đều học tiếng Anh hoặc tiếng Pháp. Trong đó, có 25 học sinh học tiếng Anh, 20 học sinh học tiếng Pháp và 8 học sinh học cả tiếng Anh và tiếng Pháp. Tổng số học sinh của lớp học đó là:<br>
            A. 37. &nbsp;&nbsp;&nbsp; B. 45. &nbsp;&nbsp;&nbsp; C. 53. &nbsp;&nbsp;&nbsp; D. 41.<br><br>

            <b>Câu 62:</b> Đặt $a=\\log_{27}5$, $b=\\log_{8}7$, $c=\\log_{2}3$. Khi đó $\\log_{12}35$ bằng<br>
            A. $\\frac{3ac+3b}{c+1}.$ &nbsp;&nbsp;&nbsp; B. $\\frac{2ac+3b}{c+3}.$ &nbsp;&nbsp;&nbsp; C. $\\frac{3ac+3b}{c+2}.$ &nbsp;&nbsp;&nbsp; D. $\\frac{2ac+3b}{c+2}.$ <br><br>

            <b>Câu 63:</b> Biết rằng $\\lim_{x\\rightarrow+\\infty}(\\sqrt{ax^{2}+bx+1}-x)=2$. Giá trị của $P=ab$ là:<br>
            A. $P=4$. &nbsp;&nbsp;&nbsp; B. $P=2$. &nbsp;&nbsp;&nbsp; C. $P=1$. &nbsp;&nbsp;&nbsp; D. $P=-1$.<br><br>

            <b>Câu 64:</b> Cho hàm số $f(x)=\\sqrt{2x^{2}-2x+1}$. Đạo hàm của hàm số tại $x=1$ là:<br>
            A. $f^{\\prime}(1)=1$. &nbsp;&nbsp;&nbsp; B. $f^{\\prime}(1)=2$. &nbsp;&nbsp;&nbsp; C. $f^{\\prime}(1)=-1.$ &nbsp;&nbsp;&nbsp; D. $f^{\\prime}(1)=\\frac{1}{2}.$<br><br>

            <b>Câu 65:</b> Cho hàm số $y=f(x)$ xác định trên $\\mathbb{R}$ và có $f^{\\prime}(x)=x(x+1)^{3}(x-2)^{5}$. Số điểm cực tiểu của hàm số là:<br>
            A. 1. &nbsp;&nbsp;&nbsp; B. 2. &nbsp;&nbsp;&nbsp; C. 3. &nbsp;&nbsp;&nbsp; D. 4.<br><br>

            <b>Câu 66:</b> Số đường tiệm cận của đồ thị hàm số $y=\\frac{\\sqrt{x^{2}-4x+3}}{x^{2}-4}$ là:<br>
            A. 1. &nbsp;&nbsp;&nbsp; B. 2. &nbsp;&nbsp;&nbsp; C. 3. &nbsp;&nbsp;&nbsp; D. 4.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 67 đến 69</b><br>
                Cho hàm số $f(x)=2x^{3}-3(m+1)x^{2}+6mx+1$ với m là tham số thực.
            </div>
            
            <b>Câu 67:</b> Với $m=3$ giá trị lớn nhất của hàm số $y=f(x)$ trên đoạn $[0;3]$ là:<br>
            A. 5. &nbsp;&nbsp;&nbsp; B. 9. &nbsp;&nbsp;&nbsp; C. 11. &nbsp;&nbsp;&nbsp; D. 17.<br><br>

            <b>Câu 68:</b> Hàm số $y=f(x)$ nghịch biến trên khoảng $(1;3)$ khi và chỉ khi:<br>
            A. $m\\le1$. &nbsp;&nbsp;&nbsp; B. $m\\ge1$. &nbsp;&nbsp;&nbsp; C. $m\\le3$. &nbsp;&nbsp;&nbsp; D. $m\\ge3$.<br><br>

            <b>Câu 69:</b> Đường thẳng $y=1$ cắt đồ thị hàm số $y=f(x)$ tại hai điểm phân biệt có hoành độ lớn hơn 2 khi và chỉ khi:<br>
            A. $m>3.$ &nbsp;&nbsp;&nbsp; B. $m<3$. &nbsp;&nbsp;&nbsp; C. $m>9$. &nbsp;&nbsp;&nbsp; D. $m<9.$<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 70 đến 71</b><br>
                Cho cấp số cộng $(u_{n})$ xác định bởi: $\\begin{cases}u_{2}+u_{6}=18\\\\ u_{3}+u_{7}=22.\\end{cases}$
            </div>
            
            <b>Câu 70:</b> Ta có công sai của cấp số cộng $(u_{n})$ là:<br>
            A. $d=2.$ &nbsp;&nbsp;&nbsp; B. $d=-2$. &nbsp;&nbsp;&nbsp; C. $d=3$. &nbsp;&nbsp;&nbsp; D. $d=-3$.<br><br>

            <b>Câu 71:</b> Ta có $\\lim\\frac{3u_{n}+2}{2n+3}$ bằng:<br>
            A. $\\frac{3}{2}$. &nbsp;&nbsp;&nbsp; B. $\\frac{2}{3}.$ &nbsp;&nbsp;&nbsp; C. 3. &nbsp;&nbsp;&nbsp; D. 6.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 72 đến 73</b><br>
                Một bác nông dân cần trồng lúa và khoai trên diện tích đất gồm 6 ha, với lượng phân bón dự trữ là 100 kg và sử dụng tối đa 240 ngày công. Để trồng 1 ha lúa cần sử dụng 20 kg phân bón, 30 ngày công với lợi nhuận là 50 triệu đồng; để trồng 1 ha khoai cần sử dụng 10 kg phân bón, 60 ngày công với lợi nhuận là 60 triệu đồng.
            </div>
            
            <b>Câu 72:</b> Nếu bác nông dân trồng $x$ (ha) lúa và $y$ (ha) khoai thì số ki-lô-gam phân bón cần sử dụng là:<br>
            A. $20x+10y$. &nbsp;&nbsp;&nbsp; B. $10x+20y$. &nbsp;&nbsp;&nbsp; C. $20x+30y$. &nbsp;&nbsp;&nbsp; D. $30x+60y$.<br><br>

            <b>Câu 73:</b> Để đạt được lợi nhuận cao nhất, bác nông dân đã trồng $x$ (ha) lúa và $y$ (ha) khoai. Giá trị của $x+y$ là:<br>
            A. 2. &nbsp;&nbsp;&nbsp; B. 3. &nbsp;&nbsp;&nbsp; C. 4. &nbsp;&nbsp;&nbsp; D. 5.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 74 đến 75</b><br>
                Cho phương trình $9^{x}-2m.3^{x}+3m+4=0.$
            </div>

            <b>Câu 74:</b> Khi $m=-5$, tổng tất cả các nghiệm của phương trình là:<br>
            A. 0. &nbsp;&nbsp;&nbsp; B. 1. &nbsp;&nbsp;&nbsp; C. -10. &nbsp;&nbsp;&nbsp; D. 3.<br><br>

            <b>Câu 75:</b> Phương trình có hai nghiệm phân biệt khi và chỉ khi:<br>
            A. $m>4.$ &nbsp;&nbsp;&nbsp; B. $m\\ge4$. &nbsp;&nbsp;&nbsp; C. $m<-1$ hoặc $m>4$. &nbsp;&nbsp;&nbsp; D. $m>0$.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 76 đến 77</b><br>
                Cho bất phương trình $\\log_{2}(5^{x}-1)\\le m.$
            </div>

            <b>Câu 76:</b> Khi $m=2$, tập nghiệm của bất phương trình là:<br>
            A. $(-\\infty;1]$. &nbsp;&nbsp;&nbsp; B. $(0;1]$. &nbsp;&nbsp;&nbsp; C. $(-\\infty;1)$. &nbsp;&nbsp;&nbsp; D. $[0;1]$.<br><br>

            <b>Câu 77:</b> Gọi S là tập tất cả các giá trị nguyên của m sao cho bất phương trình có đúng 3 nghiệm nguyên. Số phần tử của S là:<br>
            A. 0. &nbsp;&nbsp;&nbsp; B. 1. &nbsp;&nbsp;&nbsp; C. 2. &nbsp;&nbsp;&nbsp; D. 3.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 78 đến 80</b><br>
                Để kiểm tra chất lượng nước uống đóng chai của ba phân xưởng X, Y, Z, đoàn kiểm tra lấy ngẫu nhiên 7 chai nước của phân xưởng X, 4 chai nước của phân xưởng Y và 5 chai nước của phân xưởng Z. Sau đó lấy ngẫu nhiên 4 chai nước từ 16 chai ở trên để kiểm tra hàm lượng fluor theo quy định.
            </div>

            <b>Câu 78:</b> Số cách chọn 4 chai nước từ 16 chai của ba phân xưởng X, Y, Z để phân tích là:<br>
            A. 1960. &nbsp;&nbsp;&nbsp; B. 1820. &nbsp;&nbsp;&nbsp; C. 1920. &nbsp;&nbsp;&nbsp; D. 1880.<br><br>

            <b>Câu 79:</b> Xác suất để cả ba phân xưởng X, Y, Z đều có chai nước được chọn để phân tích là:<br>
            A. 33,3%. &nbsp;&nbsp;&nbsp; B. 66,7%. &nbsp;&nbsp;&nbsp; C. 25,0%. &nbsp;&nbsp;&nbsp; D. 50,0%.<br><br>

            <b>Câu 80:</b> Xác suất để phân xưởng X có ít nhất một chai nước được chọn để phân tích là:<br>
            A. 93,1%. &nbsp;&nbsp;&nbsp; B. 6,9%. &nbsp;&nbsp;&nbsp; C. 25,0%. &nbsp;&nbsp;&nbsp; D. 75,0%.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 81 đến 82</b><br>
                Cho tam giác ABC có độ dài các cạnh là $AB=5$, $BC=6$, $CA=7$.
            </div>

            <b>Câu 81:</b> Giá trị của $\\vec{AB}.\\vec{AC}$ là:<br>
            A. 19. &nbsp;&nbsp;&nbsp; B. 6. &nbsp;&nbsp;&nbsp; C. 30. &nbsp;&nbsp;&nbsp; D. 55.<br><br>

            <b>Câu 82:</b> Độ dài đường cao kẻ từ A của tam giác ABC là:<br>
            A. $h_{a}=2\\sqrt{6}$. &nbsp;&nbsp;&nbsp; B. $h_{a}=\\sqrt{6}$. &nbsp;&nbsp;&nbsp; C. $h_{a}=2\\sqrt{3}$. &nbsp;&nbsp;&nbsp; D. $h_{a}=2\\sqrt{2}$.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 83 đến 84</b><br>
                Trong mặt phẳng Oxy, cho tam giác ABC có phương trình đường cao AD là $x-3y-6=0$, phương trình đường cao BE là $3x-y-10=0$, phương trình cạnh AB là $x-y-2=0$.
            </div>

            <b>Câu 83:</b> Tung độ của điểm A là:<br>
            A. $y_{A}=0$. &nbsp;&nbsp;&nbsp; B. $y_{A}=-2$. &nbsp;&nbsp;&nbsp; C. $y_{A}=1$. &nbsp;&nbsp;&nbsp; D. $y_{A}=-1$.<br><br>

            <b>Câu 84:</b> Phương trình đường cao kẻ từ C là:<br>
            A. $x-y-4=0$. &nbsp;&nbsp;&nbsp; B. $x-y+4=0$. &nbsp;&nbsp;&nbsp; C. $x+y-2=0$. &nbsp;&nbsp;&nbsp; D. $x+y+2=0$.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 85 đến 87</b><br>
                Cho hình chóp tứ giác đều S.ABCD có cạnh đáy bằng 2a, khoảng cách giữa hai đường thẳng SA và CD bằng $a\\sqrt{3}.$
            </div>

            <b>Câu 85:</b> Gọi O là tâm của đáy. Khoảng cách từ O đến mặt phẳng (SAB) bằng:<br>
            A. $\\frac{a\\sqrt{3}}{3}$. &nbsp;&nbsp;&nbsp; B. $\\frac{a\\sqrt{3}}{2}.$ &nbsp;&nbsp;&nbsp; C. $a\\sqrt{3}$. &nbsp;&nbsp;&nbsp; D. $2a\\sqrt{3}.$ <br><br>

            <b>Câu 86:</b> Thể tích của khối chóp S.ABCD bằng:<br>
            A. $\\frac{a^{3}\\sqrt{6}}{3}.$ &nbsp;&nbsp;&nbsp; B. $\\frac{a^{3}\\sqrt{3}}{3}.$ &nbsp;&nbsp;&nbsp; C. $\\frac{4a^{3}\\sqrt{3}}{3}$. &nbsp;&nbsp;&nbsp; D. $\\frac{4a^{3}\\sqrt{6}}{3}.$ <br><br>

            <b>Câu 87:</b> Góc giữa hai đường thẳng SA và CD xấp xỉ bằng:<br>
            A. $70^{\\circ}29^{\\prime}$. &nbsp;&nbsp;&nbsp; B. $26^{\\circ}34^{\\prime}$. &nbsp;&nbsp;&nbsp; C. $19^{\\circ}31^{\\prime}.$ &nbsp;&nbsp;&nbsp; D. $63^{\\circ}26^{\\prime}$.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 88 đến 90</b><br>
                Trong không gian với hệ tọa độ Oxyz, cho điểm $A(2;2;-3)$ và hai mặt phẳng $(P): 2x+y-2z=0, (Q): 2x-y+z=0$.
            </div>

            <b>Câu 88:</b> Khoảng cách từ điểm A đến mặt phẳng (P) bằng:<br>
            A. 3. &nbsp;&nbsp;&nbsp; B. 4. &nbsp;&nbsp;&nbsp; C. 2. &nbsp;&nbsp;&nbsp; D. 6.<br><br>

            <b>Câu 89:</b> Mặt phẳng đi qua A và vuông góc với (P) và (Q) có phương trình:<br>
            A. $x+6y+4z-2=0$. &nbsp;&nbsp;&nbsp; B. $x-6y-4z-2=0$. &nbsp;&nbsp;&nbsp; C. $x-6y+4z+22=0$. &nbsp;&nbsp;&nbsp; D. $x+6y-4z-26=0$.<br><br>

            <b>Câu 90:</b> Gọi d là đường thẳng đi qua A và song song với (P), (Q). Điểm M nào sau đây thuộc d?<br>
            A. $M(1;-4;7)$. &nbsp;&nbsp;&nbsp; B. $M(1;4;-7)$. &nbsp;&nbsp;&nbsp; C. $M(3;8;-1)$. &nbsp;&nbsp;&nbsp; D. $M(3;8;1)$.<br><br>

            <h3 style="color: var(--accent); border-bottom: 1px solid var(--primary);">PHẦN 3. TƯ DUY KHOA HỌC</h3>
            <p><b>3.1. LOGIC, PHÂN TÍCH SỐ LIỆU</b></p>
            
            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 91 đến 94</b><br>
                Trong một cuộc thi Olympic, năm giải thưởng cao nhất được trao cho các học sinh M, N, P, Q, R. Dưới đây là các thông tin của buổi trao giải:<br>
                - N hoặc Q đạt giải tư.<br>
                - R đạt giải cao hơn M.<br>
                - P không đạt giải ba.
            </div>

            <b>Câu 91:</b> Danh sách nào dưới đây có thể là thứ tự các học sinh đạt giải, từ giải nhất đến giải năm?<br>
            A. M, P, N, Q, R. &nbsp;&nbsp;&nbsp; B. P, R, N, M, Q. &nbsp;&nbsp;&nbsp; C. N, P, R, Q, M. &nbsp;&nbsp;&nbsp; D. Q, M, R, N, P.<br><br>

            <b>Câu 92:</b> Nếu Q đạt giải năm thì M sẽ đạt giải nào?<br>
            A. Giải nhất. &nbsp;&nbsp;&nbsp; B. Giải nhì. &nbsp;&nbsp;&nbsp; C. Giải ba. &nbsp;&nbsp;&nbsp; D. Giải tư.<br><br>

            <b>Câu 93:</b> Nếu M đạt giải nhì thì phát biểu nào sau đây có thể sai?<br>
            A. N không đạt giải ba. &nbsp;&nbsp;&nbsp; B. P không đạt giải nhất. &nbsp;&nbsp;&nbsp; C. P không đạt giải tư. &nbsp;&nbsp;&nbsp; D. Q không đạt giải nhất.<br><br>

            <b>Câu 94:</b> Nếu P đạt giải cao hơn N đúng 2 bậc thì phát biểu nào sau đây nêu đầy đủ và chính xác danh sách các học sinh có thể đạt giải nhì?<br>
            A. P. &nbsp;&nbsp;&nbsp; B. M, R. &nbsp;&nbsp;&nbsp; C. P, R. &nbsp;&nbsp;&nbsp; D. M, P, R.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 95 đến 98</b><br>
                Một đoàn khảo sát thực địa gồm 3 giáo viên là R, S, T; 3 học sinh nữ là J, K, L và 2 học sinh nam là N, O; mỗi người được đi trên một trong 3 xe ô tô và thoả mãn các điều kiện sau:<br>
                - Mỗi xe chỉ chở tối đa 3 người.<br>
                - Mỗi xe phải có 1 giáo viên.<br>
                - O và S phải ngồi cùng một xe.<br>
                - K và L không ngồi cùng một xe.<br>
                - N và R không ngồi cùng một xe.
            </div>

            <b>Câu 95:</b> Điều nào sau đây không thể đúng trong cách sắp xếp người ngồi trên các xe?<br>
            A. K và S có thể ngồi cùng một xe. &nbsp;&nbsp;&nbsp; B. L và R có thể ngồi cùng một xe.<br>
            C. N và S có thể ngồi cùng một xe. &nbsp;&nbsp;&nbsp; D. O và T có thể ngồi cùng một xe.<br><br>

            <b>Câu 96:</b> Nếu O ngồi cùng xe với K thì những người nào phải ngồi cùng xe với nhau?<br>
            A. O và N. &nbsp;&nbsp;&nbsp; B. J và T. &nbsp;&nbsp;&nbsp; C. N và K. &nbsp;&nbsp;&nbsp; D. N và T.<br><br>

            <b>Câu 97:</b> Nếu L và R ngồi cùng xe thì người nào có thể ngồi cùng xe với L và R?<br>
            A. J. &nbsp;&nbsp;&nbsp; B. K. &nbsp;&nbsp;&nbsp; C. T. &nbsp;&nbsp;&nbsp; D. O.<br><br>

            <b>Câu 98:</b> Nếu N ngồi cùng xe với S thì câu nào sau đây phải đúng?<br>
            A. J ngồi trên xe có 3 người. &nbsp;&nbsp;&nbsp; B. L ngồi trên xe có 2 người.<br>
            C. K ngồi cùng xe với O. &nbsp;&nbsp;&nbsp; D. J ngồi cùng xe với N.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 99 đến 102</b><br>
                Bảng sau thể hiện tỉ lệ nam/nữ ở 5 tỉnh có tỉ lệ cao nhất toàn quốc trong năm 2021<br>
                <table class="exam-table" style="width:100%; margin: 10px auto;">
                    <tr><th>TT</th><th>Tỉnh</th><th>Tổng số (người)</th><th>Nam (người)</th><th>Nữ (người)</th><th>Tỉ lệ (nam/nữ)</th></tr>
                    <tr><td>1</td><td>Đắk Nông</td><td>622.168</td><td>320.713</td><td>301.455</td><td>1,064</td></tr>
                    <tr><td>2</td><td>Lạng Sơn</td><td>781.655</td><td>399.410</td><td>382.245</td><td>1,045</td></tr>
                    <tr><td>3</td><td>Bắc Kạn</td><td>313.905</td><td>160.036</td><td>153.869</td><td>1,040</td></tr>
                    <tr><td>4</td><td>Quảng Ninh</td><td>1.320.324</td><td>671.522</td><td>648.802</td><td>1,035</td></tr>
                    <tr><td>5</td><td>Lào Cai</td><td>730.420</td><td>371.306</td><td>359.114</td><td>1,034</td></tr>
                </table>
            </div>

            <b>Câu 99:</b> Tỉ lệ nam/nữ trung bình của cả 5 tỉnh là?<br>
            A. 1,022. &nbsp;&nbsp;&nbsp; B. 1,042. &nbsp;&nbsp;&nbsp; C. 1,055. &nbsp;&nbsp;&nbsp; D. 1,061.<br><br>

            <b>Câu 100:</b> Biết rằng tỉnh Kiên Giang đứng thứ 6 với tỉ lệ chênh lệch nam/nữ là 1,028, đồng thời biết rằng tỉnh Kiên Giang có 873.236 nam. Hỏi dân số tỉnh Kiên Giang xấp xỉ bao nhiêu?<br>
            A. 1.723.000. &nbsp;&nbsp;&nbsp; B. 1.842.000. &nbsp;&nbsp;&nbsp; C. 1.932.000. &nbsp;&nbsp;&nbsp; D. 2.012.000.<br><br>

            <b>Câu 101:</b> Ở tỉnh Đắk Nông, theo thống kê về độ tuổi năm 2021, tỉ lệ chênh lệch nam/nữ lớn nhất là 1,217 ở độ tuổi 20-24. Biết rằng dân số ở độ tuổi 20-24 chiếm 7,15% tổng dân số toàn tỉnh. Hỏi dân số là nam giới ở độ tuổi 20-24 của tỉnh Đắk Nông bằng khoảng bao nhiêu?<br>
            A. 19.450. &nbsp;&nbsp;&nbsp; B. 20.340. &nbsp;&nbsp;&nbsp; C. 22.410. &nbsp;&nbsp;&nbsp; D. 24.420.<br><br>

            <b>Câu 102:</b> Biết rằng Cà Mau có tổng dân số bằng 31,7% tổng dân số của 5 tỉnh ở bảng trên. Số nam giới ở Cà Mau nhiều hơn số trung bình nam giới của cả 5 tỉnh 57,28%. Tính tỉ lệ nam/nữ của tỉnh Cà Mau.<br>
            A. 1,012. &nbsp;&nbsp;&nbsp; B. 1,019. &nbsp;&nbsp;&nbsp; C. 1,026. &nbsp;&nbsp;&nbsp; D. 1,035.<br><br>

            <p><b>3.2. SUY LUẬN KHOA HỌC</b></p>
            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 103 đến 105</b><br>
                Năng lượng tự do Gibbs (G) là năng lượng của phản ứng hóa học và có thể thực hiện công có ích. Ở nhiệt độ và áp suất không đổi ($p=1$ bar), biến thiên năng lượng tự do của phản ứng $\\Delta_{r}G^{\\circ}$ (kJ) được tính theo công thức sau: $\\Delta_{r}G^{\\circ}=\\Delta_{r}H^{\\circ}-T\\Delta_{r}S^{\\circ}$ (với T là nhiệt độ K).<br>
                Trong đó: $\\Delta_{r}H^{\\circ}$ (kJ) và $\\Delta_{r}S^{\\circ}$ (J/K) lần lượt là biến thiên enthalpy và entropy của phản ứng. Phản ứng tỏa nhiệt thì $\\Delta_{r}H^{\\circ}$ có giá trị âm còn phản ứng thu nhiệt thì $\\Delta_{r}H^{\\circ}$ có giá trị dương. Dấu của $\\Delta_{r}G^{\\circ}$ được dùng để dự đoán chiều hướng xảy ra của một phản ứng hóa học. Nếu $\\Delta_{r}G^{\\circ}$ âm thì phản ứng tự xảy ra, còn nếu $\\Delta_{r}G^{\\circ}$ dương thì phản ứng không tự xảy ra.
            </div>

            <b>Câu 103:</b> Để một phản ứng không tự xảy ra ở mọi nhiệt độ thì<br>
            A. $\\Delta_{r}H^{o}>0$ và $\\Delta_{r}S^{\\circ}<0$. &nbsp;&nbsp;&nbsp; B. $\\Delta_{r}H^{o}<0$ và $\\Delta_{r}S^{\\circ}<0$.<br>
            C. $\\Delta_{r}H^{o}>0$ và $\\Delta_{r}S^{\\circ}>0$. &nbsp;&nbsp;&nbsp; D. $\\Delta_{r}H^{o}<0$ và $\\Delta_{r}S^{\\circ}>0$.<br><br>

            <b>Câu 104:</b> Biến thiên enthalpy và entropy của phản ứng $2SO_{2}(g)+O_{2}(g)\\rightarrow 2SO_{3}(g)$ ở $25^{\\circ}C$ lần lượt là $\\Delta_{r}H^{o}=-198~kJ$ và $\\Delta_{r}S^{\\circ}=-187~J/K$. Hãy cho biết giá trị của $\\Delta G^{\\circ}$ thay đổi như thế nào khi tăng nhiệt độ và ở trên hay dưới khoảng nhiệt độ nào thì phản ứng không xảy ra tự nhiên được? Giả sử giá trị enthalpy và entropy của phản ứng không thay đổi theo nhiệt độ.<br>
            A. $\\Delta G^{\\circ}$ tăng; $T<1059~K$. &nbsp;&nbsp;&nbsp; B. $\\Delta G^{\\circ}$ tăng; $T>1059~K.$<br>
            C. $\\Delta G^{\\circ}$ giảm; $T<1059~K$. &nbsp;&nbsp;&nbsp; D. $\\Delta G^{\\circ}$ giảm; $T>1059~K.$<br><br>

            <b>Câu 105:</b> Xét phản ứng sau: $CaCO_{3}(s)\\rightarrow CaO(s)+CO_{2}(g)$. Giả sử giá trị enthalpy và entropy của phản ứng không thay đổi theo nhiệt độ. Mối liên hệ giữa $\\Delta_{r}G^{\\circ}$ và T (K) của phản ứng được thể hiện qua đồ thị đường thẳng đi xuống, cắt trục hoành $\\Delta_{r}G^{\\circ}=0$ tại T = 1110K. Hãy chọn nhận xét sai:<br>
            A. Phản ứng trên là phản ứng thu nhiệt và có thể tự xảy ra ở nhiệt độ trên 1110 K.<br>
            B. Phản ứng trên không xảy ra ở nhiệt độ phòng nhưng có thể tự xảy ra ở nhiệt độ trên 1110 K.<br>
            C. Phản ứng trên là phản ứng thu nhiệt và không tự xảy ra ở nhiệt độ phòng.<br>
            D. Phản ứng trên là phản ứng tỏa nhiệt và tự xảy ra ở nhiệt độ phòng.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 106 đến 108</b><br>
                Năng lượng riêng $E_s$ là lượng năng lượng được tạo ra từ một đơn vị khối lượng của nhiên liệu: $E_{s}=E/m$ (với E (J) là năng lượng và m (kg) là khối lượng của nhiên liệu). Năng lượng riêng của than là $3,200.10^{7}J/kg$. Than là nguồn năng lượng không tái tạo và phát thải nhiều khí $CO_{2}$ gây ra hiệu ứng nhà kính nhất (thải ra $8,200.10^{2}$ g $CO_{2}$ để tạo 1,000 kWh điện năng). Biết một nhà máy điện than có công suất $1,244.10^3$ MW và hiệu suất 40,00% (chỉ có 40,00% năng lượng tạo ra từ than chuyển thành điện năng).
            </div>

            <b>Câu 106:</b> Cho các phát biểu sau:<br>
            (I). Than là nguồn năng lượng tái tạo.<br>
            (II). Đơn vị của năng lượng riêng là $J/kg.$<br>
            (III). Nhà máy điện than trên sẽ thải ra $1,020.10^{3}$ tấn khí $CO_{2}$ mỗi giờ.<br>
            (IV). Công suất hao phí của nhà máy điện than ở trên là $7,464.10^{2}MW$.<br>
            Theo bài đọc, các phát biểu đúng là:<br>
            A. (I), (II), (III). &nbsp;&nbsp;&nbsp; B. (II), (III), (IV). &nbsp;&nbsp;&nbsp; C. (II), (IV). &nbsp;&nbsp;&nbsp; D. (II), (III).<br><br>

            <b>Câu 107:</b> Điện năng mà nhà máy này tạo ra trong một giờ là<br>
            A. $1,244.10^{6}$ kWh. &nbsp;&nbsp;&nbsp; B. $1,244.10^{3}$ kWh. &nbsp;&nbsp;&nbsp; C. $4,976.10^{5}$ kWh. &nbsp;&nbsp;&nbsp; D. $4,976.10^{2}$ kWh.<br><br>

            <b>Câu 108:</b> Khối lượng than cần sử dụng trong nhà máy này trong một ngày là<br>
            A. 2,333 tấn. &nbsp;&nbsp;&nbsp; B. $3,359.10^{3}$ tấn. &nbsp;&nbsp;&nbsp; C. $8,397.10^{3}$ tấn. &nbsp;&nbsp;&nbsp; D. $1,343.10^{3}$ tấn.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 109 đến 111</b><br>
                Dựa vào phản ứng nở hoa của thực vật với quang chu kì, thực vật được chia làm ba nhóm. Thực vật ngày dài như thanh long, xà lách ra hoa khi thời gian ban đêm ngắn hơn độ dài đêm tới hạn. Thực vật ngày ngắn như cúc, mía ra hoa khi thời gian ban đêm dài hơn độ dài đêm tới hạn. Thực vật trung tính như cà chua, hướng dương, lúa nước ra hoa không phụ thuộc vào độ dài thời gian chiếu sáng trong ngày.<br>
                Một nghiên cứu trồng thanh long dưới ánh sáng tự nhiên ngày ngắn (số giờ sáng trong ngày là 10,5 giờ) và có hoặc không có chiếu sáng nhân tạo bằng đèn vào ban đêm. Ba lô thí nghiệm được trồng trong các điều kiện tương tự nhau. Ở lô thí nghiệm 1, cây được chiếu sáng liên tục từ khi mặt trời lặn đến khi mặt trời mọc vào sáng hôm sau. Ở lô thí nghiệm 2, cây được chiếu sáng từ lúc 0 giờ với tổng số giờ chiếu sáng khác nhau trong đêm. Lô đối chứng cây không được chiếu sáng vào ban đêm. Tỉ lệ ra hoa trung bình ở các lô thí nghiệm sau 20 ngày được trình bày trong bảng dưới đây:<br>
                <table class="exam-table">
                    <tr><th>Điều kiện chiếu sáng bổ sung</th><th>Không chiếu sáng</th><th>0,5 giờ</th><th>1 giờ</th><th>2 giờ</th><th>3 giờ</th><th>4 giờ</th><th>5 giờ</th><th>Chiếu sáng liên tục</th></tr>
                    <tr><td>Tỉ lệ ra hoa (%)</td><td>0</td><td>0</td><td>12</td><td>51</td><td>79</td><td>90</td><td>99</td><td>99</td></tr>
                </table>
            </div>

            <b>Câu 109:</b> Trong tự nhiên để điều khiển cây thanh long ra hoa đồng loạt vào thời điểm ngày ngắn, cần phải chiếu sáng đèn từ 0 giờ và tắt đèn vào thời điểm nào sau đây?<br>
            A. 0 giờ 30 phút. &nbsp;&nbsp;&nbsp; B. 1 giờ 30 phút. &nbsp;&nbsp;&nbsp; C. 2 giờ 10 phút. &nbsp;&nbsp;&nbsp; D. 5 giờ 10 phút.<br><br>

            <b>Câu 110:</b> Một loài thực vật ngày ngắn có độ dài đêm tới hạn là 09 giờ, được trồng trong chu kì sáng tối là 24 giờ. Điều kiện chiếu sáng nào sau đây kích thích cây trưởng thành ra hoa?<br>
            A. 10 giờ tối/24 giờ. &nbsp;&nbsp;&nbsp; B. 16 giờ sáng/24 giờ. &nbsp;&nbsp;&nbsp; C. 08 giờ tối/24 giờ. &nbsp;&nbsp;&nbsp; D. 19 giờ sáng/24 giờ.<br><br>

            <b>Câu 111:</b> Loài thực vật nào sau đây được xếp vào nhóm cây ngày dài?<br>
            A. Cây ké đầu ngựa (Xanthium Strumarium) chỉ ra hoa khi chiếu sáng tối đa là 16 giờ hoặc ít hơn.<br>
            B. Cây Jusquiame (Hyoscyamus niger) ra hoa khi điều kiện chiếu sáng tối thiểu là 11,5 giờ.<br>
            C. Cây thuốc lá (Nicotiana tabacum) chỉ ra hoa khi chiếu sáng tối đa là 14 giờ hoặc ít hơn.<br>
            D. Cây cà chua có đủ 14 cặp lá có thể ra hoa khi chiếu sáng tối thiểu là 12 giờ hoặc nhiều hơn.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 112 đến 114</b><br>
                Tháng 7/2023, xuất nhập khẩu hàng hóa Việt Nam ước đạt 57,21 tỉ USD, tăng 2,5% so với tháng trước, xuất siêu tiếp tục tăng cao. Cán cân thương mại hàng hóa 7 tháng năm 2023 ước tính xuất siêu 15,23 tỉ USD - một con số kỉ lục của cán cân thương mại hàng hóa 7 tháng từ trước đến nay. Đây là những con số cho thấy hoạt động này tiếp tục có các dấu hiệu tích cực...<br>
                Về xuất khẩu hàng hóa, trong tháng 7, hoạt động xuất khẩu hàng hóa tiếp tục có những tín hiệu tích cực khi tăng 0,8% so với tháng trước, là tháng có kim ngạch xuất khẩu cao thứ hai kể từ đầu năm đến nay (chỉ thấp hơn kim ngạch xuất khẩu của tháng 3/2023). Như vậy, kim ngạch xuất khẩu hàng hóa tiếp tục có xu hướng tháng sau tăng so với tháng trước (sau khi giảm vào tháng 4/2023)...<br>
                Đối với hoạt động nhập khẩu, nhu cầu hàng hóa của thế giới giảm đã ảnh hưởng không nhỏ đến kim ngạch nhập khẩu hàng hóa, nguyên liệu phục vụ sản xuất đơn hàng xuất khẩu của nước ta. Tuy nhiên, nhờ những tín hiệu tích cực trong sản xuất công nghiệp và xuất khẩu trong tháng 7 nên kim ngạch nhập khẩu hàng hóa tháng 7/2023 ước đạt 27,53 tỉ USD, tăng 4,4% so với tháng trước.
            </div>

            <b>Câu 112:</b> Trong 7 tháng đầu năm 2023, nước ta đạt kim ngạch xuất khẩu cao nhất vào tháng nào?<br>
            A. Tháng 3. &nbsp;&nbsp;&nbsp; B. Tháng 4. &nbsp;&nbsp;&nbsp; C. Tháng 5. &nbsp;&nbsp;&nbsp; D. Tháng 7.<br><br>

            <b>Câu 113:</b> Cán cân thương mại hàng hóa được được tính bằng<br>
            A. Trị giá xuất khẩu - Trị giá nhập khẩu. &nbsp;&nbsp;&nbsp; B. Trị giá xuất khẩu + Trị giá nhập khẩu.<br>
            C. Trị giá xuất khẩu x Trị giá nhập khẩu. &nbsp;&nbsp;&nbsp; D. Trị giá xuất khẩu : Trị giá nhập khẩu.<br><br>

            <b>Câu 114:</b> Kim ngạch nhập khẩu hàng hóa tháng 6/2023 ước đạt<br>
            A. 26,37 tỉ USD. &nbsp;&nbsp;&nbsp; B. 28,74 tỉ USD. &nbsp;&nbsp;&nbsp; C. 19,12 tỉ USD. &nbsp;&nbsp;&nbsp; D. 19,95 tỉ USD.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 115 đến 117</b><br>
                Chuyển mình sang giai đoạn phát triển mới, ngày 31/12/2015, ASEAN chính thức thành lập Cộng đồng ASEAN nhằm xây dựng một Cộng đồng hướng tới người dân, lấy người dân làm trung tâm, trên nền tảng pháp lí là Hiến chương ASEAN và Tầm nhìn Cộng đồng ASEAN năm 2025.<br>
                Thực hiện Tầm nhìn Cộng đồng ASEAN năm 2025, ASEAN tập trung triển khai các kế hoạch tổng thể trên cả 3 trụ cột gồm Chính trị - An ninh, Kinh tế và Văn hóa - Xã hội; mở rộng và làm sâu sắc quan hệ đối ngoại, củng cố vai trò trung tâm của ASEAN trong cấu trúc khu vực đang định hình, đồng thời tăng cường kết nối và thu hẹp khoảng cách phát triển.<br>
                Trong bối cảnh địa chính trị khu vực và thế giới có những biến động phức tạp, ASEAN lại chuẩn bị Tầm nhìn Cộng đồng ASEAN sau năm 2025; nỗ lực này được đánh dấu bằng Tuyên bố của các nhà lãnh đạo ASEAN về định hướng Tầm nhìn Cộng đồng ASEAN sau năm 2025. Đây là sáng kiến do Việt Nam đề xuất và đã được thông qua tại Hội nghị cấp cao ASEAN lần thứ 37 (tháng 11/2020) trong nhiệm kỳ Việt Nam làm Chủ tịch ASEAN năm 2020.
            </div>

            <b>Câu 115:</b> Ở thời điểm năm 2020, ASEAN đang triển khai thực hiện Tầm nhìn đến<br>
            A. năm 2015. &nbsp;&nbsp;&nbsp; B. năm 2020. &nbsp;&nbsp;&nbsp; C. năm 2025. &nbsp;&nbsp;&nbsp; D. sau năm 2025.<br><br>

            <b>Câu 116:</b> Mục tiêu tổng quát của cộng đồng ASEAN là:<br>
            A. hoạt động trên nền tảng pháp lí là Hiến chương ASEAN.<br>
            B. hướng đến Tầm nhìn ASEAN năm 2025.<br>
            C. hướng tới người dân, lấy người dân làm trung tâm.<br>
            D. củng cố vai trò trung tâm của ASEAN trong cấu trúc khu vực.<br><br>

            <b>Câu 117:</b> Củng cố vai trò trung tâm của ASEAN trong cấu trúc khu vực đang định hình là nội dung được xác định thuộc trụ cột nào trong Tầm nhìn Cộng đồng ASEAN năm 2025?<br>
            A. Chính trị - An ninh. &nbsp;&nbsp;&nbsp; B. Kinh tế. &nbsp;&nbsp;&nbsp; C. Văn hóa - Xã hội. &nbsp;&nbsp;&nbsp; D. Cả 3 trụ cột trên.<br><br>

            <div class="reading-passage">
                <b>Dựa vào thông tin dưới đây để trả lời các câu từ 118 đến 120</b><br>
                “Khảo sát của Navigos Group cho thấy 68,7% doanh nghiệp chọn cách cắt giảm nhân sự để ứng phó với những biến động của thị trường; gần 53% ngưng tuyển dụng nhằm cắt giảm chi phí, duy trì hoạt động. Bên cạnh đó, gần 47% doanh nghiệp tăng cường đào tạo chuyên môn và kỹ năng mềm cho nhân viên để nâng cao năng suất, hiệu quả làm việc; hơn 43% doanh nghiệp chọn giải pháp điều chuyển nội bộ để phát huy tối đa năng lực của người lao động, qua đó tìm kiếm những nhân tố mới cho những vị trí cần lấp đầy mà không phải tuyển mới. Đáng chú ý, trên 59% doanh nghiệp được khảo sát cho biết sẽ tuyển dụng thêm nhân sự mới trong năm 2024. Khác với những năm trước, năm nay doanh nghiệp sẽ ưu tiên tuyển dụng nhân sự có kỹ năng giải quyết vấn đề tốt, ứng viên đã có từ 1 đến 3 năm kinh nghiệm, kinh nghiệm quản lý..."
            </div>

            <b>Câu 118:</b> Theo trích đoạn trên, tại sao nhiều doanh nghiệp chọn tăng cường đào tạo chuyên môn và kỹ năng mềm cho nhân viên?<br>
            A. Để tiết kiệm chi phí tuyển dụng.<br>
            B. Để phát huy tối đa năng lực của nhân viên và tăng năng suất.<br>
            C. Để thay thế nhân sự hiện tại bằng những nhân sự mới.<br>
            D. Để cắt giảm số lượng nhân viên không đạt yêu cầu.<br><br>

            <b>Câu 119:</b> Dựa trên khảo sát của Navigos Group, nhận định nào sau đây là chính xác nhất khi nói về cách tiếp cận xây dựng và phát triển nhân sự của doanh nghiệp trong giai đoạn 2023-2024?<br>
            A. Doanh nghiệp đang điều chỉnh chiến lược để cân bằng giữa việc phát triển kỹ năng nội bộ và bổ sung nhân sự có kỹ năng cần thiết để đối phó với sự thay đổi trong thị trường.<br>
            B. Doanh nghiệp tập trung hoàn toàn vào việc giảm chi phí nhân sự và cắt giảm các hoạt động đào tạo để tối ưu hóa lợi nhuận.<br>
            C. Doanh nghiệp dự định cắt giảm chi phí đào tạo bằng cách tuyển dụng nhiều nhân sự hơn với kinh nghiệm từ 5 năm trở lên ngay từ đầu.<br>
            D. Doanh nghiệp sẽ ngừng hoàn toàn việc đào tạo nội bộ và chỉ dựa vào việc tuyển dụng nhân sự mới để đáp ứng nhu cầu công việc.<br><br>

            <b>Câu 120:</b> Trong bối cảnh doanh nghiệp tiếp cận xây dựng và phát triển nhân sự theo cách đã phân tích và mô tả qua khảo sát của Navigos Group, bạn nên làm gì để tăng cơ hội được tuyển dụng?<br>
            A. Tham gia các buổi tư vấn tuyển dụng của các công ti tư vấn nghề nghiệp.<br>
            B. Tập trung xây dựng mối quan hệ với các nhà tuyển dụng tiềm năng.<br>
            C. Tìm kiếm công việc trong các lĩnh vực đang có nhu cầu cao.<br>
            D. Tập trung phát triển các kỹ năng chuyên môn và kỹ năng mềm.<br><br>

            <div style="text-align: center; color: var(--text-main); font-style: italic; margin-top: 30px;">--- HẾT ---</div>
        `
    }
};

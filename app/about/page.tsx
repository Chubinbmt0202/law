import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div>
            {/* Content overlay */}
            <div className="relative mt-20">
                {/* Phần đầu trang */}
                <div className="bg-cover bg-center h-64" style={{ backgroundImage: "url('/images/nganh-luat-3.jpeg')" }}>
                    <div className="flex items-center md:text-center justify-center h-full bg-black bg-opacity-50">
                        <h1 className="text-white text-center text-4xl font-bold">Thành lập doanh nghiệp</h1>
                    </div>
                </div>
                <section className=' max-w-7xl mx-auto px-5 py-8 mt-8'>
                    <h2 className="text-2xl font-bold">1. Giới thiệu chung</h2>
                    <ul className="list-disc pl-5 mt-2">
                        <li><strong>Mục tiêu:</strong> Hiệu quả – Nhanh chóng</li>
                        <li><strong>Nguyên tắc:</strong> Thượng tôn pháp luật – Tôn trọng khách hàng</li>
                        <li><strong>Giá trị theo đuổi:</strong> Công lý – Liêm chính</li>
                    </ul>
                    <div className='mt-6'>
                        <Image
                            width={1920}
                            height={1920}
                            src={"/images/nganh-luat-3.jpeg"}
                            alt='sdasd'
                            className="w-full h-auto" // Đảm bảo hình ảnh chiếm toàn bộ chiều rộng
                        />
                    </div>
                    <p className=' py-6'>Công ty Luật và Kế toán Thiện Minh bắt đầu hoạt động từ năm 2016. Đến hiện tại với hơn 8+ năm phát triển, Thiện Minh dần khẳng định vị thế là một trong những công ty dẫn đầu trong lĩnh vực cung cấp dịch vụ tư vấn Pháp Lý Doanh Nghiệp tại Việt Nam. Thiện Minh hoạt động hướng đến mục tiêu bảo vệ quyền và lợi ích của khách hàng, cam kết mang đến dịch vụ chuyên nghiệp, đáng tin cậy cho các quý doanh nghiệp.
                        Với đội ngũ chuyên viên pháp lý và kế toán có trình độ cao, tác phong làm việc chuyên nghiệp, đều xuất thân từ các trường Đại học top đầu Việt Nam trong lĩnh vực pháp lý và kế toán như Trường Đại học Luật Hà Nội, Đại học Quốc Gia Hà Nội, Học viện Ngân hàng,… Luật và Kế toán Thiện Minh luôn tự tin về kinh nghiệm, chuyên môn và sự uy tín của mình. Bên cạnh đó, chúng tôi có mối quan hệ hợp tác thân thiết với các chuyên gia pháp lý hàng đầu tại Việt Nam, giảng viên của một số trường Đại học Luật và các chuyên viên pháp lý cấp cao của Toà Án và Viện Kiểm sát.
                        Khi hợp tác với Thành lập doanh nghiệp, quý doanh nghiệp sẽ được tư vấn pháp lý và chiến lược kinh doanh, đảm bảo lợi ích cao nhất. Phương châm hoạt động của chúng tôi là “Phòng ngừa rủi ro, phát triển bền vững”. Luật và Kế toán Thiện Minh sẽ là địa chỉ hàng đầu cho các quý doanh nghiệp với mọi vấn đề về pháp lý.</p>

                    <h2 className="text-2xl font-bold">2. Sứ mệnh, tầm nhìn, giá trị cốt lõi</h2>
                    <div className='mt-6'>
                        <Image
                            width={1920}
                            height={1920}
                            src={"/images/nganh-luat-3.jpeg"}
                            alt='sdasd'
                            className="w-full h-auto" // Đảm bảo hình ảnh chiếm toàn bộ chiều rộng
                        />
                    </div>
                    <p className='mt-6'>Luật và Kế toán Thiện Minh hướng tới mục tiêu chung “Lợi ích của Doanh Nghiệp là ưu tiên hàng đầu của chúng tôi”.</p>
                    <h1 className='text-xl text-red-500'>Sứ mệnh</h1>
                    <h3>Thành lập doanh nghiệp phấn đấu trở thành cộng sự đồng hành trên sự thành công của doanh nghiệp. Sự tin tưởng của khách hàng chính là nền tảng giúp chúng tôi phát triển trong tương lai. Sứ mệnh của chúng tôi là:</h3>
                    <ul className="list-disc pl-5 mt-2">
                        <li> Tận tâm bảo vệ quyền và lợi ích của khách hàng</li>
                        <li>Xây dựng môi trường chuyên nghiệp, tạo điều kiện thuận lợi cho các luật sư Việt Nam hoạt động và phát triển</li>
                        <li>Phát huy năng lực của luật sư Việt nam trong quá trình hội nhập quốc tế, góp phần quảng bá hình ảnh và tạo môi trường đầu tốt đẹp trong mắt các nhà đầu tư nước ngoài và bạn bè quốc tế</li>
                        <li>Tạo ra những thay đổi trong hoạt động pháp lý liên quan đến lĩnh vực hoạt động của quý Doanh nghiệp giúp họ phát triển hoạt động kinh doanh khi cung cấp các giải pháp pháp lý hiệu quả và toàn diện</li>
                    </ul>

                    <h1 className='text-xl text-red-500'>Tầm nhìn</h1>
                    <p>Bằng tất cả sự cống hiến và tận tâm trong nghề, Thành lập doanh nghiệp phấn đấu trở thành một trong những công ty luật hàng đầu tại Việt Nam cung cấp dịch vụ pháp lý, thành lập và phát triển doanh nghiệp, kế toán trọn gói.</p>
                    <p>Thành lập doanh nghiệp đặt mục tiêu thúc đẩy sự thay đổi tích cực trong việc quản lý, đầu tư và kinh doanh của doanh nghiệp, tối ưu quá trình kiểm soát và giảm thiểu rủi ro pháp lý. Chúng tôi hỗ trợ doanh nghiệp nâng cao hiệu suất sản xuất, kinh doanh và tăng cường năng lực cạnh tranh trên thị trường thông qua cung cấp các giải pháp tư vấn pháp lý, quản lý và đầu tư chuyên nghiệp.</p>

                    <h1 className='text-xl text-red-500'>Giá trị cốt lõi</h1>
                    <ul className="list-disc pl-5 mt-2">
                        <li>Thượng tôn pháp luật, tuân thủ tiêu chuẩn và đạo đức nghề nghiệp</li>
                        <li>Kỷ luật và trách nhiệm, chuyên môn và tận tâm, luôn luôn lắng nghe và thấu hiểu tâm lý khách hàng</li>
                        <li>Xây dựng lòng tin với khách hàng và gia tăng uy tín, chất lượng dịch vụ của Thành lập doanh nghiệp</li>
                        <li>Không ngừng sáng tạo, vươn tới tầm cao mới</li>
                        <li>Tôn trọng yếu tố con người trong chiến lược xây dựng và phát triển công ty</li>
                    </ul>

                    <h2 className="text-2xl font-bold">3. Dịch vụ pháp lý tại Thành lập doanh nghiệp</h2>
                    <div className='mt-6'>
                        <Image
                            width={1920}
                            height={1920}
                            src={"/images/nganh-luat-3.jpeg"}
                            alt='sdasd'
                            className="w-full h-auto" // Đảm bảo hình ảnh chiếm toàn bộ chiều rộng
                        />
                    </div>
                    <h1 className=' mt-6 text-xl text-red-500'>Dịch vụ thành lập Doanh nghiệp</h1>
                    <h3>Thành lập doanh nghiệp cung cấp gói dịch vụ thành lập Doanh lập với mức chi phí cực kỳ phải chăng chỉ từ 1.190.000vnđ đến 3.890.000vnđ đã bao gồm:</h3>
                    <ul className="list-disc pl-5 mt-2">
                        <li>Tư vấn luật miễn phí trước và sau khi thành lập doanh nghiệp</li>
                        <li>Giấy chứng nhận đăng lý doanh nghiệp (đã bao gồm phí nhà nước)</li>
                        <li>Khai báo thuế môn bài</li>
                        <li>Đăng ký với cơ quan quản lý thuế (Thành lập doanh nghiệp sẽ hỗ trợ 500k khi khai báo với cơ quan thuế)</li>
                        <li>Báo cáo thành lập doanh nghiệp lên cổng thông tin dịch vụ quốc gia (đã bao gồm phí Nhà nước)</li>
                        <li>Dấu tròn công ty (dấu liền mực) trị giá 350k</li>
                        <li>Dấu chức danh (dấu liền mực) trị giá 150k</li>
                        <li>Biển công ty chất liệu mica trị giá 200k</li>
                        <li>Miễn phí mở tài khoản ngân hàng số đẹp, số phong thuỷ, khách hàng được chọn online mà không cần phải ra quầy mở. Một số tài khoản ngân hàng được nhiều công ty lựa chọn: Techcombank, MB Bank, TP Bank,…
                        </li>
                        <li>Gói khai thuế theo quý</li>
                        <li>Chữ ký điện tử và hoá đơn</li>
                        <li>Thay lại thẻ li</li>
                    </ul>

                    <h1 className='text-xl text-red-500'>Dịch vụ pháp lý Doanh nghiệp</h1>
                    <p>Thành lập doanh nghiệp cung cấp cho Doanh nghiệp giải pháp kinh doanh đa chiều, sáng tạo và đem lại hiệu quả tối đa với các vấn đề mà Doanh nghiệp đang đối mặt. Chúng tôi không những chỉ dẫn về những cơ hội và rủi ro trong lĩnh vực đầu tư và kinh doanh mà còn tạo sự gắn kết giữa cơ hội và mục tiêu, chiến lược kinh doanh của từng doanh nghiệp.</p>
                    <p>Thành lập doanh nghiệp cung cấp dịch vụ pháp lý Doanh nghiệp về:</p>
                    <ul className="list-disc pl-5 mt-2">
                        <li>Thay đổi các nội dung đăng ký kinh doanh</li>
                        <li>Tổ chức và quản lý theo loại hình doanh nghiệp: Công ty TNHH, Công ty cổ phần, Công ty hợp danh, Doanh nghiệp tư nhân</li>
                        <li>Tổ chức lại doanh nghiệp: Chia, tách, sáp nhập, hợp nhất, chuyển đổi loại hình doanh nghiệp</li>
                        <li>Nhóm công ty</li>
                        <li>Giải thể và phá sản doanh nghiệp</li>
                        <li>Mở văn phòng đại diện</li>
                        <li>Tư vấn luật thuế, kế toán</li>
                        <li>Tra cứu thủ tục, biểu mẫu liên quan đến hoạt động của doanh nghiệp</li>
                        <li>Dịch vụ giải quyết tranh chấp hợp đồng kinh tế – thương mại, bồi thường thiệt hại ngoài hợp đồng,…”</li>
                        <li>Phân tích các văn bản pháp luật mới liên quan đến hoạt động của doanh nghiệp</li>
                        <li>Hỗ trợ giải đáp vướng mắc pháp lý phát sinh trong quá trình hoạt động: Về quy định lao động và tranh chấp lao động, cơ cấu tổ chức nội bộ và tranh chấp nội bộ doanh nghiệp, thủ tục hành chính liên quan đến hoạt động của doanh nghiệp,…”</li>
                        <li>Hỗ trợ soạn thảo, rà soát hợp đồng và các biểu mẫu khác theo quy định của pháp luật: Điều lệ, nội quy, quy chế hoạt động của doanh nghiệp, hợp đồng mẫu, mẫu đơn, công văn, quyết định, thông báo về lao động và các thay đổi trong nội bộ doanh nghiệp, kiểm tra tính hợp pháp của các dự thảo hợp đồng và các văn bản khác liên quan,…”</li>
                        <li>Tư vấn các vướng mắc của doanh nghiệp tại văn phòng Thành lập doanh nghiệp hoặc trực tuyến bởi các chuyên gia pháp lý, luật sư giàu kinh nghiệm, uy tín</li>
                    </ul>

                    <h1 className='text-xl text-red-500'>Dịch vụ kế toán thuế</h1>
                    <p>Dịch vụ kế toán tại Thành lập doanh nghiệp sẽ giải quyết hết những công việc liên quan đến việc quyết toán, in và bàn giao sổ, báo cáo tài chính, lập sổ sách, báo cáo thuế,… một cách chính xác cho các doanh nghiệp. Với chi phí chỉ từ 500k/tháng, doanh nghiệp sẽ nhận được:</p>
                    <ul className="list-disc pl-5 mt-2">
                        <li>Tư vấn chung các quy định của pháp luật về thuế, kế toán, các chính sách và ưu đãi về thuế liên quan đến hoạt động đầu tư, kinh doanh của doanh nghiệp</li>
                        <li>Giới thiệu các giải pháp tối ưu thuế, kế toán cho các giao dịch dự kiến</li>
                        <li>Lập hồ sơ và đại diện khách hàng thực hiện các thủ tục kê khai thuế, hưởng mức thuế ưu đãi, miễn thuế, giảm thuế, hoàn thuế</li>
                        <li>Kiểm tra hóa đơn, chứng từ; hạch toán các nghiệp vụ kinh tế phát sinh</li>
                        <li>Lập và nộp các tờ khai thuế, báo cáo tài chính, báo cáo tình hình sử dụng hóa đơn,… theo đúng quy định pháp luật</li>
                        <li>Thông báo cho khách hàng số thuế phải nộp (nếu có) và thời hạn nộp thuế</li>
                        <li>Hoàn chỉnh sổ sách kế toán theo đúng quy định của pháp luật</li>
                        <li>Tư vấn và đại diện cho khách hàng làm việc với cơ quan thuế để giải quyết các vấn đề phát sinh</li>
                        <li>Thay thẻ li</li>
                    </ul>

                    <h1 className='text-xl text-red-500'>Hệ sinh thái cho Doanh nghiệp</h1>
                    <ul className="list-disc pl-5 mt-2">
                        <li>Cung cấp các loại dấu công ty: Dấu chức danh, dấu tròn công ty</li>
                        <li>Giấy phép con như phòng cháy chữa cháy, giấy phép mở trung tâm ngoại ngữ</li>
                        <li>Dịch vụ cho thuê văn phòng ảo</li>
                    </ul>

                    <h2 className="text-2xl font-bold">4. Lý do quý doanh nghiệp nên chọn dịch vụ của Thành lập doanh nghiệp</h2>
                    <ul className="list-disc pl-5 mt-2">
                        <li><strong>Chuyên nghiệp:</strong>Thành lập doanh nghiệp được khách hàng tin tưởng với dịch vụ pháp lý chất lượng cao. Với đội ngũ luật sư giàu kinh nghiệm và chuyên môn cao, chúng tô hỗ trợ và giải quyết các thủ tục pháp lý một cách nhanh chóng</li>
                        <li><strong>Nhanh chóng:</strong> Chúng tôi sở hữu đội ngũ luật sư và nhân viên nhanh nhẹn, sẵn sàng giúp khách hàng giải quyết các vấn đề trong thời gian ngắn nhất</li>
                        <li><strong>Chi phí hợp lý:</strong>Là một trong những công ty luật hàng đầu với đội ngũ luật sư có chuyên môn cao, chúng tôi mang đến cho khách hàng dịch vụ pháp lý được thực thi với chuyên gia với mức phí hợp lý. Thành lập doanh nghiệp cam kết chi phí sẽ được cân đối và mang lại hiệu quả cao cho cả hai bên</li>
                        <li><strong>Đơn giản và tiện lợi:</strong>Bạn không muốn mất thời gian và công sức di chuyển? Chỉ cần ủy quyền toàn bộ công việc cho Thành lập doanh nghiệp và chúng tôi sẽ đại diện cho bạn trong việc thực hiện tất cả các thủ tục và hồ sơ từ A đến Z</li>
                        <li><strong>Tận tâm và chu đáo:</strong>Với nhiều năm kinh nghiệm tư vấn và hỗ trợ khách hàng trong các vấn đề pháp lý, chúng tôi luôn đặt sự hài lòng của khách hàng là ưu tiên hàng đầu. Đội ngũ luật sư và chuyên gia pháp lý sẽ mang đến cho bạn dịch vụ chất lượng và sự hài lòng tuyệt đối</li>
                        <li><strong>Bảo mật tuyệt đối:</strong>Thành lập doanh nghiệp cam kết bảo mật tuyệt đối thông tin khách hàng về giấy tờ, bí mật đời tư liên quan đến vụ việc. Chỉ khi có sự đồng ý của khách hàng thì chúng tôi mới công khai thông tin trong công việc</li>

                    </ul>
                </section>
            </div>
        </div>
    );
}
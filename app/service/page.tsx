import Link from "next/link";
import Section11 from "../components/section11";

export default function Service() {
    const services = [
        {
            icon: '/icons/giai-quyet-tranh-chap.svg',
            path: '/service/dichvuthanhlapdoanhnghiep',
            title: 'Giấy chứng nhận đăng ký kinh doanh',
            description: 'Hỗ trợ doanh nghiệp trong việc đăng ký kinh doanh, đảm bảo tuân thủ các quy định pháp luật và tạo điều kiện thuận lợi cho hoạt động kinh doanh.'
        },
        {
            icon: '/icons/bat-dong-san.svg',
            path: '/service/ketoanphapluat',
            title: 'Giấy phép con',
            description: 'Cung cấp dịch vụ tư vấn và hỗ trợ để xin các giấy phép con cần thiết cho hoạt động kinh doanh, giúp doanh nghiệp hoạt động hợp pháp và hiệu quả.'
        },
        {
            icon: '/icons/doanh-nghiep-va-dau-tu.svg',
            path: '/service/baohonhanhieu',
            title: 'Giấy phép lao động',
            description: 'Tư vấn và hỗ trợ xin giấy phép lao động cho người nước ngoài, đảm bảo tuân thủ các quy định về lao động và nhập cư.'
        },
        {
            icon: '/icons/lao-dong.svg',
            path: '/service/attp',
            title: 'Giấy chứng nhận đủ điều kiện vệ sinh ATTP',
            description: 'Đánh giá và cấp giấy chứng nhận vệ sinh an toàn thực phẩm cho các cơ sở sản xuất và kinh doanh thực phẩm, đảm bảo sức khỏe cộng đồng.'
        },
        {
            icon: '/icons/so-huu-tri-tue.svg',
            path: '/service/giayphepmoitruong',
            title: 'Giấy phép môi trường',
            description: 'Tư vấn và hỗ trợ doanh nghiệp trong việc xin giấy phép môi trường, đảm bảo hoạt động sản xuất không gây hại cho môi trường.'
        },
        {
            icon: '/icons/thuong-mai-trong-va-ngoai-nuoc.svg',
            path: '/service/banquyenthuonghieu',
            title: 'Giấy phép đăng ký nhãn hiệu, bản quyền sở hữu trí tuệ',
            description: 'Hỗ trợ doanh nghiệp trong việc đăng ký nhãn hiệu và bảo vệ quyền sở hữu trí tuệ, giúp bảo vệ thương hiệu và sản phẩm của họ.'
        },
        {
            icon: '/icons/ipo-huy-dong-von.svg',
            path: '/service/hoachat',
            title: 'Giấy phép kinh doanh hoá chất',
            description: 'Tư vấn và hỗ trợ xin giấy phép kinh doanh hóa chất, đảm bảo tuân thủ các quy định an toàn và bảo vệ môi trường.'
        },
        {
            icon: '/icons/thu-hoi-no.svg',
            path: '/service/xuatxuhanghoa',
            title: 'Giấy chứng nhận xuất xứ hàng hoá (C/O)',
            description: 'Cung cấp dịch vụ xin giấy chứng nhận xuất xứ hàng hóa, hỗ trợ doanh nghiệp trong việc xuất khẩu và thương mại quốc tế.'
        },
        {
            icon: '/icons/xay-dung-va-co-so-ha-tang.svg',
            path: '/service/anninhtrattu',
            title: 'Giất chứng nhận an ninh, trật tự',
            description: 'Hỗ trợ doanh nghiệp trong việc xin giấy chứng nhận an ninh trật tự, đảm bảo hoạt động kinh doanh diễn ra an toàn và hợp pháp.'
        },
        {
            icon: '/icons/tu-van-ma.svg',
            path: '/service/quangcao',
            title: 'Giấy phép quảng cáo',
            description: 'Tư vấn và hỗ trợ doanh nghiệp trong việc xin giấy phép quảng cáo, đảm bảo các hoạt động quảng cáo tuân thủ quy định pháp luật.'
        },
        {
            icon: '/icons/tai-chinh.svg',
            path: '/service/congbosanpham',
            title: 'Giấy công bố sản phẩm',
            description: 'Cung cấp dịch vụ công bố sản phẩm, giúp doanh nghiệp đảm bảo sản phẩm của mình đáp ứng các tiêu chuẩn chất lượng và an toàn.'
        },
        {
            icon: '/icons/tu-van-nhuong-quyen-thuong-mai.svg',
            path: '/service/giayphepmypham',
            title: 'Giấy công bố mỹ phẩm',
            description: 'Hỗ trợ doanh nghiệp trong việc công bố mỹ phẩm, đảm bảo sản phẩm đáp ứng các tiêu chuẩn an toàn và chất lượng.'
        },
        {
            icon: '/icons/tu-van-nhuong-quyen-thuong-mai.svg',
            path: '/service/giaykiemdinh',
            title: 'Giấy kiểm định',
            description: 'Cung cấp dịch vụ kiểm định chất lượng sản phẩm, giúp doanh nghiệp đảm bảo sản phẩm của mình đạt tiêu chuẩn chất lượng.'
        },
        {
            icon: '/icons/tu-van-nhuong-quyen-thuong-mai.svg',
            path: '/service/giayxuatkhau',
            title: 'Giấy phép xuất khẩu',
            description: 'Tư vấn và hỗ trợ doanh nghiệp trong việc xin giấy phép xuất khẩu, đảm bảo tuân thủ các quy định xuất khẩu quốc tế.'
        }
    ];

    return (
        <section className="py-16 bg-gray-100 mt-10">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-red-600 text-sm font-semibold uppercase text-center mb-2">DỊCH VỤ TƯ VẤN</h3>
                <h2 className="text-3xl font-bold text-center mb-12">DỊCH VỤ CHÍNH</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link href={`/service/${service.path}`} key={index}>
                            <div className="bg-white p-6 rounded-lg shadow-md relative group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold mb-2 truncate">{service.title}</h3>
                                    <p className="text-sm text-gray-600 line-clamp-3">{service.description}</p>
                                </div>
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[50px] border-t-red-600 border-l-[50px] border-l-transparent group-hover:border-t-red-700 transition-colors duration-300">
                                    <span className="absolute top-[-40px] right-[10px] text-white transform rotate-45">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-10">
                <section className="mb-8">
                    <p className="mb-4">
                        Thành lập doanh nghiệp là một công ty luật kinh doanh, có nhiều kinh nghiệm tư vấn cho Nhà Đầu Tư Nước Ngoài đầu tư vào Việt Nam hay hay hỗ trợ cho các Doanh Nghiệp Việt Nam tiếp nhận vốn đầu tư từ Nhà Đầu Tư Nước Ngoài. Đồng thời, chúng tôi cũng hỗ trợ các Doanh Nghiệp Việt Nam đầu tư kinh doanh ra nước ngoài, mở rộng thị trường quốc tế. Khách hàng của chúng tôi bao gồm các công ty hoạt động trong nhiều lĩnh vực kinh doanh như ngân hàng và tài chính, bất động sản, xây dựng, giải trí, bảo hiểm, hàng tiêu dùng, sản xuất… Chúng tôi đã tư vấn và hỗ trợ khách hàng của mình trong từng giai đoạn riêng lẻ của dự án cũng như toàn bộ quá trình đầu tư, xác định cấu trúc quản lý, vốn hóa và xử lý vấn đề kiểm soát quyền đối với hoạt động kinh doanh và quản lý.
                    </p>
                    <p>
                        Các dịch vụ của chúng tôi trong hoạt động Đầu Tư Nước Ngoài Vào Việt Nam bao gồm đầy đủ từ hỗ trợ nghiên cứu thị trường, định lượng lợi ích và rủi ro liên quan đến chính sách đầu tư của chính phủ, xác định cấu trúc pháp lý hiệu quả trong giao dịch của khách hàng, hỗ trợ khách hàng rà soát, đánh giá và thẩm định chi tiết năng lực pháp lý các đối tác, tư vấn tái cấu trúc doanh nghiệp, lấy văn bản chấp thuận/phê chuẩn, giấy phép kinh doanh, giấy chứng nhận đầu tư, giấy chứng nhận đủ điều kiện hoạt động cho các Nhà Đầu Tư ở Việt Nam. Trong một số trường hợp, với khả năng giao tiếp với cộng đồng địa phương và kinh nghiệm chuyên sâu của các luật sư của chúng tôi đã khiến chính quyền địa phương và khách hàng thoải mái hơn trong việc đạt được thỏa thuận, giải quyết bế tắc và góp phần vào sự thành công trong kinh doanh của khách hàng.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-red-600">Tư vấn về điều kiện và quy định pháp luật</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Nghiên cứu và tư vấn về các điều kiện, những thuận lợi, bất cập của Nhà Đầu Tư theo chính sách của Việt Nam và các cam kết giữa Việt Nam với Tổ chức Thương mại Thế giới (WTO), Hiệp định thương mại giữa Việt Nam và các nước trên thế giới;</li>
                        <li>Tư vấn cho Nhà Đầu Tư các hình thức đầu tư trực tiếp và gián tiếp theo quy định pháp luật Việt Nam, phân tích ưu và nhược điểm của mỗi hình thức đầu tư để Nhà Đầu Tư có cái nhìn tổng quát và dễ dàng lựa chọn hình thức đầu tư phù hợp với từng dự án;</li>
                        <li>Tư vấn cách thức đáp ứng các điều kiện pháp luật liên quan đến ngành nghề hoạt động có điều kiện, áp dụng trước khi hoặc sau khi nộp hồ sơ xin cấp phép hoạt động;</li>
                        <li>Hỗ trợ khách hàng rà soát, đánh giá và thẩm định chi tiết năng lực pháp lý các đối tác</li>
                        <li>Tư vấn về khả năng đạt được văn bản chấp thuận/phê chuẩn đầu tư hoặc Giấy chứng nhận đầu tư theo quy định pháp luật và đối chiếu trên thực tiễn, đề xuất phương án thay đổi, điều chỉnh nội dung dự án, hồ sơ đầu tư nhằm năng cao khả năng được chấp thuận hồ sơ.</li>

                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Trở ngại thường gặp của Nhà Đầu Tư Nước Ngoài</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Khác biệt về ngôn ngữ, văn hóa, chính sách, quy định pháp luật liên quan đến hoạt động đầu tư</li>
                        <li>Khó khăn trong lựa chọn địa điểm đầu tư, quy mô, lập phương án đầu tư và dự báo tính khả thi của dự án</li>
                        <li>Không chuẩn bị tốt giai đoạn hồ sơ ban đầu</li>
                        <li>Quá nhiều thủ tục và phát sinh nhiều vấn đề phụ thuộc vào quan điểm của cơ quan có thẩm quyền địa phương</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Các dịch vụ hỗ trợ của Apolat Legal</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Thành lập công ty có vốn đầu tư nước ngoài (FIEs)</li>
                        <li>Tư vấn pháp lý về FIEs</li>
                        <li>Tuân thủ và quản trị doanh nghiệp</li>
                        <li>Tái cấu trúc doanh nghiệp, huy động vốn đầu tư</li>
                        <li>Điều chỉnh giấy chứng nhận đầu tư</li>
                        <li>Đầu tư ra nước ngoài</li>
                    </ul>
                </section>
            </div>
            <Section11 />
        </section>
    )
}
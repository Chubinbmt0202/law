import Link from "next/link";


export default function Service() {
    const services = [
        {
            icon: '/icons/giai-quyet-tranh-chap.svg',
            path: '/thanhlapcongty',
            title: 'Thành lập công ty',
            description: 'Cung cấp dịch vụ tư vấn và hỗ trợ giải quyết tranh chấp thương mại, dân sự, và hợp đồng một cách hiệu quả.'
        },
        {
            icon: '/icons/bat-dong-san.svg',
            title: 'Bất Động Sản',
            path: '/batdongsan',
            description: 'Hỗ trợ pháp lý và tư vấn về giao dịch, hợp đồng, và tranh chấp liên quan đến bất động sản.'
        },
        {
            icon: '/icons/doanh-nghiep-va-dau-tu.svg',
            title: 'Doanh Nghiệp Và Đầu Tư',
            description: 'Tư vấn pháp lý toàn diện cho các doanh nghiệp và nhà đầu tư trong các hoạt động kinh doanh và đầu tư.'
        },
        {
            icon: '/icons/lao-dong.svg',
            title: 'Lao Động',
            description: 'Cung cấp giải pháp pháp lý liên quan đến lao động, hợp đồng lao động, và tranh chấp lao động.'
        },
        {
            icon: '/icons/so-huu-tri-tue.svg',
            title: 'Sở Hữu Trí Tuệ',
            description: 'Dịch vụ bảo vệ quyền sở hữu trí tuệ, bao gồm bản quyền, thương hiệu, và sáng chế.'
        },
        {
            icon: '/icons/thuong-mai-trong-va-ngoai-nuoc.svg',
            title: 'Thương Mại Trong Và Ngoài Nước',
            description: 'Tư vấn và hỗ trợ các vấn đề pháp lý trong thương mại nội địa và quốc tế, bao gồm hợp đồng và xuất nhập khẩu.'
        },
        {
            icon: '/icons/ipo-huy-dong-von.svg',
            title: 'IPO & Huy Động Vốn',
            description: 'Hỗ trợ doanh nghiệp trong quá trình IPO và huy động vốn từ các nguồn đầu tư trong và ngoài nước.'
        },
        {
            icon: '/icons/thu-hoi-no.svg',
            title: 'Thu Hồi Nợ',
            description: 'Dịch vụ tư vấn và hỗ trợ thu hồi nợ, đảm bảo quyền lợi của doanh nghiệp và cá nhân trong các tranh chấp về nợ.'
        },
        {
            icon: '/icons/xay-dung-va-co-so-ha-tang.svg',
            title: 'Xây Dựng Và Cơ Sở Hạ Tầng',
            description: 'Tư vấn pháp lý và hỗ trợ trong các dự án xây dựng và cơ sở hạ tầng, bao gồm hợp đồng và giấy phép.'
        },
        {
            icon: '/icons/tu-van-ma.svg',
            title: 'Tư Vấn M&A',
            description: 'Tư vấn và hỗ trợ pháp lý trong các giao dịch mua bán và sáp nhập doanh nghiệp (M&A).'
        },
        {
            icon: '/icons/tai-chinh.svg',
            title: 'Tài Chính',
            description: 'Cung cấp dịch vụ tư vấn tài chính, đầu tư và hỗ trợ pháp lý liên quan đến các giao dịch tài chính.'
        },
        {
            icon: '/icons/tu-van-nhuong-quyen-thuong-mai.svg',
            title: 'Tư Vấn Nhượng Quyền Thương Mại',
            description: 'Tư vấn pháp lý cho các bên nhượng quyền và nhận quyền trong hoạt động thương mại.'
        }
    ];
    return (
        <section className="py-16 bg-gray-100">
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
                        Apolat Legal là một công ty luật kinh doanh, có nhiều kinh nghiệm tư vấn cho Nhà Đầu Tư Nước Ngoài đầu tư vào Việt Nam hay hay hỗ trợ cho các Doanh Nghiệp Việt Nam tiếp nhận vốn đầu tư từ Nhà Đầu Tư Nước Ngoài. Đồng thời, chúng tôi cũng hỗ trợ các Doanh Nghiệp Việt Nam đầu tư kinh doanh ra nước ngoài, mở rộng thị trường quốc tế. Khách hàng của chúng tôi bao gồm các công ty hoạt động trong nhiều lĩnh vực kinh doanh như ngân hàng và tài chính, bất động sản, xây dựng, giải trí, bảo hiểm, hàng tiêu dùng, sản xuất… Chúng tôi đã tư vấn và hỗ trợ khách hàng của mình trong từng giai đoạn riêng lẻ của dự án cũng như toàn bộ quá trình đầu tư, xác định cấu trúc quản lý, vốn hóa và xử lý vấn đề kiểm soát quyền đối với hoạt động kinh doanh và quản lý.
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
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-3xl font-bold text-red-600 mb-6">Thông tin liên hệ</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    {/* <PhoneIcon className="h-6 w-6 text-red-600 mr-2" /> */}
                                    <p>Hotline: (+84) 911 357 447</p>
                                </div>
                                <div className="flex items-center">
                                    {/* <EnvelopeIcon className="h-6 w-6 text-red-600 mr-2" /> */}
                                    <p>Email: info@apolatlegal.com</p>
                                </div>
                                <div className="flex items-start">
                                    {/* <MapPinIcon className="h-6 w-6 text-red-600 mr-2 mt-1" /> */}
                                    <div>
                                        <p className="font-semibold">Văn phòng tại Đà Nẵng:</p>
                                        <p>64 Lê Đại Hành, Khuê Trung, Cẩm lệ, Thành phố Đà Nẵng, Việt Nam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-red-600 mb-6">Gửi yêu cầu tư vấn</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block mb-1">Họ tên *</label>
                                    <input type="text" id="name" name="name" className="w-full p-2 border rounded" placeholder="Nhập họ tên..." required />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="phone" className="block mb-1">Số điện thoại *</label>
                                        <input type="tel" id="phone" name="phone" className="w-full p-2 border rounded" placeholder="Nhập số điện thoại..." required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-1">Email</label>
                                        <input type="email" id="email" name="email" className="w-full p-2 border rounded" placeholder="Nhập email..." />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="area" className="block mb-1">Lĩnh vực *</label>
                                    <select id="area" name="area" className="w-full p-2 border rounded" required>
                                        <option value="">Tư vấn doanh nghiệp</option>
                                        {/* Thêm các option khác */}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="service" className="block mb-1">Dịch vụ cần tư vấn *</label>
                                    <select id="service" name="service" className="w-full p-2 border rounded" required>
                                        <option value="">Doanh nghiệp</option>
                                        {/* Thêm các option khác */}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="city" className="block mb-1">Tỉnh thành *</label>
                                    <select id="city" name="city" className="w-full p-2 border rounded" required>
                                        <option value="">--Please choose an option--</option>
                                        {/* Thêm các option khác */}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-1">Nội dung *</label>
                                    <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" placeholder="Nhập nội dung..." required></textarea>
                                </div>
                                <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors duration-300">
                                    Gửi đi
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
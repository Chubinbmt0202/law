// app/components/section.tsx
import Image from 'next/image';
import Link from 'next/link';

const Section = () => {
    const services = [
        {
            icon: '/icons/giai-quyet-tranh-chap.svg',
            title: 'Giải Quyết Tranh Chấp',
            description: 'Cung cấp dịch vụ tư vấn và hỗ trợ giải quyết tranh chấp thương mại, dân sự, và hợp đồng một cách hiệu quả.'
        },
        {
            icon: '/icons/bat-dong-san.svg',
            title: 'Bất Động Sản',
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


    const pricingData = [
        {
            type: 'GÓI TỐI GIẢN',
            price: '690.000',
            time: '10 - 12 ngày\nLàm việc',
            features: [
                { name: 'Giấy chứng nhận đăng ký doanh nghiệp', included: true },
                { name: 'Miễn phí thiết kế con dấu đầu tiên: Trị giá 2.000.000', included: true },
                { name: 'Miễn phí khắc con dấu cho doanh nghiệp mới thành lập', included: false },
                { name: 'Đăng ký mã số quan hệ ngân sách (Luật An Khang sẽ hỗ trợ khai báo với cơ quan Thuế)', included: false },
                { name: 'Bộ tài khoản kế toán cho doanh nghiệp mới công bố (Trị giá 150.000)', included: false },
                { name: 'Tặng gói tư vấn pháp lý cơ bản sau thành lập', included: false },
                { name: 'Tặng gói tư vấn hợp thương hiệu', included: false },
            ],
            payment: 'Đặt cọc 100% chi phí',
            additionalServices: [
                { name: '01 Dấu tròn công ty Trị giá 350.000', included: false },
                { name: '01 Dấu chức danh Trị giá 170.000', included: false },
                { name: '01 Bảo công ty chất liệu mica. Trị giá 200.000', included: false },
            ],
            freeServices: ['Miễn phí'],
            support: 'Không',
            digitalSignature: 'Không',
        },
        {
            type: 'GÓI CƠ BẢN',
            price: '1.590.000',
            time: '07 - 09 ngày\nLàm việc',
            features: [
                { name: 'Giấy chứng nhận đăng ký doanh nghiệp', included: true },
                { name: 'Miễn phí thiết kế con dấu đầu tiên: Trị giá 2.000.000', included: true },
                { name: 'Miễn phí khắc con dấu cho doanh nghiệp mới thành lập', included: false },
                { name: 'Đăng ký mã số quan hệ ngân sách (Luật An Khang sẽ hỗ trợ khai báo với cơ quan Thuế)', included: false },
                { name: 'Bộ tài khoản kế toán cho doanh nghiệp mới công bố (Trị giá 150.000)', included: true },
                { name: 'Tặng gói tư vấn pháp lý cơ bản sau thành lập', included: false },
                { name: 'Tặng gói tư vấn hợp thương hiệu', included: false },
            ],
            payment: 'Đặt cọc 50% chi phí',
            additionalServices: [
                { name: '01 Dấu tròn công ty Trị giá 350.000', included: true },
                { name: '01 Dấu chức danh Trị giá 170.000', included: false },
                { name: '01 Bảo công ty chất liệu mica. Trị giá 200.000', included: false },
            ],
            freeServices: ['Miễn phí'],
            support: 'Không',
            digitalSignature: 'Không',
        },
        {
            type: 'GÓI NÂNG CAO',
            price: '3.790.000',
            time: '06 - 08 ngày\nLàm việc',
            features: [
                { name: 'Giấy chứng nhận đăng ký doanh nghiệp', included: true },
                { name: 'Miễn phí thiết kế con dấu đầu tiên: Trị giá 2.000.000', included: true },
                { name: 'Miễn phí khắc con dấu cho doanh nghiệp mới thành lập', included: true },
                { name: 'Đăng ký mã số quan hệ ngân sách (Luật An Khang sẽ hỗ trợ khai báo với cơ quan Thuế)', included: true },
                { name: 'Bộ tài khoản kế toán cho doanh nghiệp mới công bố (Trị giá 150.000)', included: true },
                { name: 'Tặng gói tư vấn pháp lý cơ bản sau thành lập', included: true },
                { name: 'Tặng gói tư vấn hợp thương hiệu', included: true },
            ],
            payment: 'Không cần đặt cọc\n(thanh toán chi phí khi\nđược chấp thuận ĐKKD)',
            additionalServices: [
                { name: '01 Dấu tròn công ty Trị giá 350.000', included: true },
                { name: '01 Dấu chức danh Trị giá 170.000', included: true },
                { name: '01 Bảo công ty chất liệu mica. Trị giá 200.000', included: true },
            ],
            freeServices: ['Miễn phí'],
            support: 'Chỉ từ 01 năm',
            digitalSignature: 'Không',
        },
        {
            type: 'GÓI VIP',
            price: '4.590.000',
            time: '05 - 08 ngày\nLàm việc',
            features: [
                { name: 'Giấy chứng nhận đăng ký doanh nghiệp', included: true },
                { name: 'Miễn phí thiết kế con dấu đầu tiên: Trị giá 2.000.000', included: true },
                { name: 'Miễn phí khắc con dấu cho doanh nghiệp mới thành lập', included: true },
                { name: 'Đăng ký mã số quan hệ ngân sách (Luật An Khang sẽ hỗ trợ khai báo với cơ quan Thuế)', included: true },
                { name: 'Bộ tài khoản kế toán cho doanh nghiệp mới công bố (Trị giá 150.000)', included: true },
                { name: 'Tặng gói tư vấn pháp lý cơ bản sau thành lập', included: true },
                { name: 'Tặng gói tư vấn hợp thương hiệu', included: true },
            ],
            payment: 'Không cần đặt cọc\n(thanh toán chi phí khi\nđược chấp thuận ĐKKD)',
            additionalServices: [
                { name: '01 Dấu tròn công ty Trị giá 350.000', included: true },
                { name: '01 Dấu chức danh Trị giá 170.000', included: true },
                { name: '01 Bảo công ty chất liệu mica. Trị giá 200.000', included: true },
            ],
            freeServices: ['Miễn phí'],
            support: 'Chỉ từ 03 năm',
            digitalSignature: 'Tặng 300 HD\n(trọng số 1.000 hạn ký\ndùng)',
        }
    ];
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="md:w-1/2 mb-8 mt-[-100px] md:mb-0">
                        <h3 className="text-red-600 text-sm font-semibold uppercase mb-2">VỀ LUẬT THIỆN MINH</h3>
                        <h2 className="text-3xl font-bold mb-4">Công ty luật THIỆN MINH cung cấp tư vấn pháp lý toàn diện cho các vấn đề trong và ngoài nước</h2>
                        <p className="text-gray-600 mb-6">
                            Công ty luật Thiện Minh có trụ sở chính tại Thành phố Đà Nẵng. Kinh nghiệm của
                            chúng tôi, sự hiểu biết sâu sắc về luật pháp và văn hóa Việt Nam cùng các luật sư có
                            trình độ chuyên môn cao của chúng tôi mang đến cho khách hàng sự tự tin trong mọi
                            vấn đề pháp lý mà họ gặp phải. Bằng cách tương tác sâu sắc với khách hàng mỗi ngày
                            trong hoạt động kinh doanh, Chúng tôi cố gắng hiểu nhu cầu của họ, dự đoán mong
                            muốn của họ và hỗ trợ họ đạt được những lợi ích mà họ mong muốn.
                        </p>
                        <Link href="/about-us" className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
                            Câu chuyện của chúng tôi
                        </Link>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="w-full aspect-square relative">
                            <Image
                                src="/images/secction.png"
                                alt="Legal scales"
                                width={500}
                                height={500}
                                className="rounded-full mx-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ......... */}

            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-red-600 text-sm font-semibold uppercase text-center mb-2">DỊCH VỤ TƯ VẤN</h3>
                    <h2 className="text-3xl font-bold text-center mb-12">DỊCH VỤ CHÍNH</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
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
            </section>
            {/* .................. */}
            <h2 className="text-center text-4xl font-bold mt-10 mb-6">Các gói dịch vụ mà chúng tôi đang cung cấp</h2>
            <div className="overflow-x-auto">
                <table className="max-w-7xl mx-auto bg-white mb-10">
                    <thead>
                        <tr className="bg-blue-800 text-white">
                            <th className="py-3 px-4 text-left">DỊCH VỤ CUNG CẤP</th>
                            {pricingData.map((plan, index) => (
                                <th key={index} className="py-3 px-4 text-center">{plan.type}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="mb-10">
                        <tr className="bg-red-500 text-white">
                            <td className="py-3 px-4">Giá dịch vụ trọn gói</td>
                            {pricingData.map((plan, index) => (
                                <td key={index} className="py-3 px-4 text-center font-bold">{plan.price}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="py-3 px-4 bg-gray-100">Thời gian đăng ký thành lập</td>
                            {pricingData.map((plan, index) => (
                                <td key={index} className="py-3 px-4 text-center">{plan.time}</td>
                            ))}
                        </tr>
                        {/* Thêm các hàng khác cho các tính năng */}
                        {pricingData[0].features.map((feature, featureIndex) => (
                            <tr key={featureIndex} className={featureIndex % 2 === 0 ? 'bg-gray-100' : ''}>
                                <td className="py-3 px-4">{feature.name}</td>
                                {pricingData.map((plan, planIndex) => (
                                    <td key={planIndex} className="py-3 px-4 text-center">
                                        {plan.features[featureIndex].included ? '✓' : 'Không'}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ........ */}
            <section className="py-16 bg-gray-100">
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
    );
};

export default Section;
// app/components/section.tsx
import Image from 'next/image';
import Link from 'next/link';

const Section = () => {
    const services = [
        { icon: '/icons/giai-quyet-tranh-chap.svg', title: 'Giải Quyết Tranh Chấp' },
        { icon: '/icons/bat-dong-san.svg', title: 'Bất Động Sản' },
        { icon: '/icons/doanh-nghiep-va-dau-tu.svg', title: 'Doanh Nghiệp Và Đầu Tư' },
        { icon: '/icons/lao-dong.svg', title: 'Lao Động' },
        { icon: '/icons/so-huu-tri-tue.svg', title: 'Sở Hữu Trí Tuệ' },
        { icon: '/icons/thuong-mai-trong-va-ngoai-nuoc.svg', title: 'Thương Mại Trong Và Ngoài Nước' },
        { icon: '/icons/ipo-huy-dong-von.svg', title: 'IPO & Huy Động Vốn' },
        { icon: '/icons/thu-hoi-no.svg', title: 'Thu Hồi Nợ' },
        { icon: '/icons/xay-dung-va-co-so-ha-tang.svg', title: 'Xây Dựng Và Cơ Sở Hạ Tầng' },
        { icon: '/icons/tu-van-ma.svg', title: 'Tư Vấn M&A' },
        { icon: '/icons/tai-chinh.svg', title: 'Tài Chính' },
        { icon: '/icons/tu-van-nhuong-quyen-thuong-mai.svg', title: 'Tư Vấn Nhượng Quyền Thương Mại' },
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
                                objectFit="contain"
                                className="rounded-full mx-auto"
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
                                <div className="bg-white p-6 rounded-lg shadow-md relative group hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-center mb-4">
                                        {/* <Image src={service.icon} alt={service.title} width={40} height={40} className="mr-4" /> */}
                                        <h3 className="text-lg font-semibold">{service.title}</h3>
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
            <div className="overflow-x-auto">
                <table className="max-w-7xl mx-auto bg-white">
                    <thead>
                        <tr className="bg-blue-800 text-white">
                            <th className="py-3 px-4 text-left">DỊCH VỤ CUNG CẤP</th>
                            {pricingData.map((plan, index) => (
                                <th key={index} className="py-3 px-4 text-center">{plan.type}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-blue-800 text-white">
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
                        {/* Thêm các hàng khác cho thanh toán, dịch vụ bổ sung, v.v. */}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Section;
// app/components/section.tsx
import Image from 'next/image';
import Link from 'next/link';

const Section = () => {

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
            {/* .................. */}
            <h2 className="text-center text-4xl font-bold mt-10 mb-6">Các gói dịch vụ mà chúng tôi đang cung cấp</h2>
            <div className="max-w-7xl mx-auto p-6">
                <h2 className="text-2xl font-bold text-center mb-6">Giá dịch vụ trọn gói</h2>
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr className="bg-blue-100 text-black">
                            <th className="border border-gray-300 p-4">Dịch vụ cung cấp</th>
                            <th className="border border-gray-300 p-4">Gói tối giản</th>
                            <th className="border border-gray-300 p-4">Gói cơ bản</th>
                            <th className="border border-gray-300 p-4">Gói nâng cao</th>
                            <th className="border border-gray-300 p-4">Gói vip</th>
                        </tr>
                        <tr className="bg-blue-800 text-white">
                            <th className="border border-gray-300 p-4">Dịch vụ</th>
                            <th className="border border-gray-300 p-4">690.000</th>
                            <th className="border border-gray-300 p-4">1.590.000</th>
                            <th className="border border-gray-300 p-4">3.790.000</th>
                            <th className="border border-gray-300 p-4">4.590.000</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-4">Thời gian được chấp thuận Mã Số Doanh Nghiệp / MST</td>
                            <td className="border border-gray-300 p-4">10 - 12 ngày<br /></td>
                            <td className="border border-gray-300 p-4">07 - 09 ngày</td>
                            <td className="border border-gray-300 p-4">06 - 08 ngày</td>
                            <td className="border border-gray-300 p-4">06 - 08 ngày</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4">Giấy chứng nhận đăng ký doanh nghiệp</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4">Miễn phí thuế môn bài năm đầu tiên. Trị giá 2.000.000</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">Kh&#244;ng</td>
                            <td className="border border-gray-300 p-4">Kh&#244;ng</td>
                            <td className="border border-gray-300 p-4">Kh&#244;ng</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4">Miễn phí thủ tục khai báo thuế môn bài cho doanh nghiệp mới thành lập</td>
                            <td className="border border-gray-300 p-4">Kh&#244;ng</td>
                            <td className="border border-gray-300 p-4">Kh&#244;ng</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4">Đăng ký với cơ quan quản lý thuế (Luật An Khang sẽ hỗ trợ khai báo với cơ quan thuế)</td>
                            <td className="border border-gray-300 p-4">Kh&#244;ng</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4">Bố cáo thành lập doanh nghiệp lên cổng thông tin dịch vụ quốc gia.</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4">Tặng gói tư vấn pháp lý cơ bản sau thành lập: Tư vấn cơ bản về kế toán, thuế, các ngành nghề kinh doanh có điều kiện, các loại hợp đồng cơ bản…</td>
                            <td className="border border-gray-300 p-4">Kh&#244;ng</td>
                            <td className="border border-gray-300 p-4">Kh&#244;ng</td>
                            <td className="border border-gray-300 p-4">02 tháng
                                (trị giá 2.000.000)</td>
                            <td className="border border-gray-300 p-4">04 tháng
                                (trị giá 4.000.000)</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4">Tặng gói ý tưởng logo thương hiệu</td>
                            <td className="border border-gray-300 p-4">Kh&#244;ng</td>
                            <td className="border border-gray-300 p-4">Kh&#244;ng</td>
                            <td className="border border-gray-300 p-4">04 mẫu ý tưởng
                                (trị giá 500.000)</td>
                            <td className="border border-gray-300 p-4">08 mẫu ý tưởng
                                (trị giá 1.000.000)</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4">Thanh toán đặt cọc chi phí dịch vụ</td>
                            <td className="border border-gray-300 p-4">đặt cọc 100%
                                chi phí</td>
                            <td className="border border-gray-300 p-4">đặt cọc 50%
                                chi phí</td>
                            <td className="border border-gray-300 p-4">Không cần đặt cọc
                                (thanh toán chi phí khi được chấp thuận MST)</td>
                            <td className="border border-gray-300 p-4">Không cần đặt cọc
                                (thanh toán chi phí khi được chấp thuận MST)</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4">01 Dấu tròn công ty Trị giá 350.000</td>
                            <td className="border border-gray-300 p-4">Kh&#244;ng</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                        </tr>
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
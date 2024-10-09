
import React from 'react';
import Banner2 from '@/app/components/banner2';

export default function Batdongsan() {

    const challenges = [
        "Doanh nghiệp nhỏ của bạn đang gặp khó khăn trong việc tuyển dụng và duy trì nhân sự kế toán có trình độ chuyên môn cao, dẫn đến việc xử lý sổ sách kế toán không chính xác, không kịp thời?",
        "Doanh nghiệp của bạn không có đủ thời gian và nguồn lực để tự mình xử lý các công việc kế toán, thuế phức tạp khi phải tập trung vào hoạt động sản xuất kinh doanh chính?",
        "Luật thuế Việt Nam thường xuyên có những thay đổi, bổ sung làm cho doanh nghiệp của bạn khó có thể cập nhật kịp thời và áp dụng đúng các quy định mới, dẫn đến rủi ro bị phạt hoặc truy thu thuế?",
        "Kế toán hiện tại xử lý sổ sách kế toán và kê khai thuế không chính xác dẫn đến các sai sót làm cho doanh nghiệp của bạn bị cơ quan thuế kiểm tra, truy thu và phạt tiền?",
        "Bạn chưa biết cách thiết lập hồ sơ Pháp lý khai thuế ban đầu tại các chi cục thuế cấp Quận, huyện; đăng ký mua thiết bị token; kê khai thuế môn bài hay các vấn đề liên quan đến thuế, hóa đơn?",
        "Bạn đang cần cần sự tư vấn và hỗ trợ của các chuyên gia kế toán, thuế để giải quyết các vấn đề phức tạp, tối ưu hóa nghĩa vụ thuế và đưa ra các quyết định tài chính đúng đắn?",
        "Doanh nghiệp của bạn gặp khó khăn khi xử lý các giao dịch liên quan đến xuất nhập khẩu, đầu tư nước ngoài, chuyển nhượng vốn... đòi hỏi kiến thức chuyên sâu về kế toán, thuế?",
        "Doanh nghiệp của bạn muốn tìm cách giảm thiểu nghĩa vụ thuế một cách hợp pháp nhưng kế toán chưa am hiểu luật thuế và các kỹ thuật chuyên môn hóa đủ sâu?"
    ];
    const steps = [
        {
            number: '01',
            title: 'Chuyên môn:',
            description: 'Cam kết đội ngũ kế toán giàu kinh nghiệm, am hiểu luật pháp, luôn cập nhật kiến thức để đảm bảo chính xác, tuân thủ',
        },
        {
            number: '02',
            title: 'Chất lượng dịch vụ:',
            description: 'Từ xử lý chứng từ đến giải trình thuế, chúng tôi cam kết dịch vụ chính xác, kịp thời, hỗ trợ tận tâm',
        },
        {
            number: '03',
            title: 'Bảo mật thông tin:',
            description: 'Cam kết bảo mật tuyệt đối thông tin khách hàng, áp dụng các biện pháp bảo mật nghiêm ngặt',
        },
        {
            number: '04',
            title: 'Chi phí và trách nhiệm:',
            description: 'Minh bạch về chi phí, cam kết không phát sinh thêm, chịu trách nhiệm hoàn toàn về mọi sai sót',
        },
        {
            number: '05',
            title: 'Đồng hành và hỗ trợ:',
            description: 'Đồng hành cùng doanh nghiệp, tư vấn giải pháp kế toán thuế tối ưu, tiết kiệm chi phí, nâng cao hiệu quả',
        },
    ];
    return (
        <section className=" bg-white">
            <Banner2 />
            {/* .................. */}
            <h2 className="text-center text-4xl font-bold mt-10 mb-6">Chi phí trọn gói dịch vụ thành lập công ty của Luật Thiện Minh</h2>
            <div className="max-w-7xl mx-auto py-6">
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-4 bg-blue-500 text-white">TÊN</th>
                                <th className="border border-gray-300 p-4 bg-blue-500 text-white">SỐ LƯỢNG HÓA ĐƠN<br />(HĐ đầu ra + HĐ đầu vào)</th>
                                <th className="border border-gray-300 p-4 bg-blue-500 text-white">SỐ LƯỢNG LAO ĐỘNG</th>
                                <th className="border border-gray-300 p-4 bg-blue-500 text-white">PHÍ PHÁT SINH/QUÝ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center" rowSpan={9}>THƯƠNG MẠI - DỊCH VỤ</td>
                                <td className="border border-gray-300 p-4 text-center">0</td>
                                <td className="border border-gray-300 p-4 text-center">0</td>
                                <td className="border border-gray-300 p-4 text-center">1.500.000đ</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center">01 - 10</td>
                                <td className=" p-4"></td>
                                <td className="border border-gray-300 p-4 text-center">2.000.000đ</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center">11 - 30</td>
                                <td className=" p-4"></td>
                                <td className="border border-gray-300 p-4 text-center">2.600.000đ</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center">31 - 50</td>
                                <td className=" p-4"></td>
                                <td className="border border-gray-300 p-4 text-center">3.200.000đ</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center">51 - 75</td>
                                <td className="p-4">01 - 05</td>
                                <td className="border border-gray-300 p-4 text-center">4.000.000đ</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center">76 - 100</td>
                                <td className=" p-4"></td>
                                <td className="border border-gray-300 p-4 text-center">4.800.000đ</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center">101 - 150</td>
                                <td className=" p-4"></td>
                                <td className="border border-gray-300 p-4 text-center">6.000.000đ</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center">151 - 200</td>
                                <td className="p-4"></td>
                                <td className="border border-gray-300 p-4 text-center">7.200.000đ</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center">Từ 200 trở lên:
                                    Thêm 20.000đ/hoá đơn</td>
                                <td className="border border-gray-300 p-4 text-center">Từ 5 lao động trở lên:
                                    Thêm 30.000đ/lao động</td>
                                <td className="border border-gray-300 p-4 text-center"></td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center" rowSpan={9}>SẢN XUẤT - XÂY LẮP - XUẤT NHẬP KHẨU</td>
                                <td className="border border-gray-300 p-4 text-center">0</td>
                                <td className="border border-gray-300 p-4 text-center">0</td>
                                <td className="border border-gray-300 p-4 text-center">1.500.000đ</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center">01 - 10</td>
                                <td className=" p-4 text-center"></td>
                                <td className="border border-gray-300 p-4 text-center">2.000.000đ</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center">11 - 30</td>
                                <td className=" p-4 text-center"></td>
                                <td className="border border-gray-300 p-4 text-center">3.000.000đ</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center">31 - 50</td>
                                <td className=" p-4 text-center"></td>
                                <td className="border border-gray-300 p-4 text-center">3.800.000đ</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center">51 - 75</td>
                                <td className=" p-4 text-center">01 - 10</td>
                                <td className="border border-gray-300 p-4 text-center">4.800.000đ</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center">76 - 100</td>
                                <td className=" p-4 text-center"></td>
                                <td className="border border-gray-300 p-4 text-center">5.800.000đ</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center">101 - 150</td>
                                <td className=" p-4 text-center"></td>
                                <td className="border border-gray-300 p-4 text-center">7.000.000đ</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center">151 - 200</td>
                                <td className=" p-4 text-center"></td>
                                <td className="border border-gray-300 p-4 text-center">8.200.000đ</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 text-center">Từ 200 trở lên:
                                    Thêm 20.000đ/hoá đơn</td>
                                <td className="border border-gray-300 p-4 text-center">Từ 5 lao động trở lên:
                                    Thêm 30.000đ/lao động</td>
                                <td className="border border-gray-300 p-4 text-center"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <section className="py-16">
                <h2 className="text-center text-4xl font-bold mb-8 text-red-600">CAM KẾT CỦA LUẬT VÀ KẾ TOÁN AN KHANG</h2>
                <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto px-4">
                    {steps.map((step, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg p-6 mb-8 md:mb-0 flex-1 text-center shadow-md mx-2">
                            <div className="text-3xl font-bold text-blue-600">{step.number}</div>
                            <h3 className="text-lg font-semibold mt-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>


            <section className="py-16 bg-blue-900 text-white rounded-lg shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-4">LƯU Ý</h2>
                    <p className="mb-4">
                        Thời gian triển khai dịch vụ thành lập công ty, tư vấn thành lập doanh nghiệp
                        Tổng thời gian đăng ký thành lập doanh nghiệp mất từ 3 ngày.
                    </p>
                    <p className="mb-6">
                        Với khách hàng cần gấp chúng tôi cung cấp dịch vụ đăng ký thành lập công ty
                        trong 1 ngày làm việc hoàn thành tất cả các công việc.
                    </p>
                    <div className="flex justify-between">
                        <div className="text-center flex-1 mx-2 bg-white p-4 rounded-lg shadow-md">
                            <div className="text-2xl font-bold text-black">Tháng</div>
                            <p className='text-black'>Nhận và kiểm tra tính hợp lệ của chứng từ kế toán</p>
                        </div>
                        <div className="text-center flex-1 mx-2 bg-white p-4 rounded-lg shadow-md">
                            <div className="text-2xl font-bold text-black">Quý</div>
                            <p className='text-black'>Lập báo cáo và nộp thuế lên Cơ quan thuế</p>
                        </div>
                        <div className="text-center flex-1 mx-2  bg-white p-4 rounded-lg shadow-md">
                            <div className="text-2xl font-bold text-black">Năm</div>
                            <p className='text-black'>Rà soát và đối chiếu tài liệu, hồ sơ nộp Cơ quan thuế</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <h2 className="text-center text-4xl font-bold mb-8 text-red-600">NHỮNG KHÓ KHĂN KHI LÀM KẾ TOÁN THUẾ DOANH NGHIỆP</h2>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {challenges.map((challenge, index) => (
                            <div key={index} className=" p-6  flex items-start">
                                <div className="text-2xl text-red-600 mr-4">❓</div>
                                <p className="text-gray-800">{challenge}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
}

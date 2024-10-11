
import React from 'react';
import Banner2 from '@/app/components/banner2';
import Contact from '@/app/components/contact';

export default function Batdongsan() {

    const challenges = [
        "Bạn đang lo lắng về khả năng nhãn hiệu bị xâm phạm bởi một bên đối thủ hoặc vướng vào tranh chấp nhãn hiệu với một thương hiệu khác đã hoạt động trên thị trường?",
        "Bạn không biết hồ sơ thủ tục đăng ký bảo hộ nhãn hiệu có dài dòng phức tạp và thời gian chờ đợi cấp văn bằng bảo hộ nhãn hiệu có quá lâu hay không?",
        "Bạn lo lắng chi phí phát sinh khi thực hiện Đăng ký Bảo hộ nhãn hiệu sẽ vượt quá khả năng tài chính của mình?",
        "Thị trường thì có quá nhiều đơn vị cung cấp dịch vụ Bảo hộ nhãn hiệu mà bạn thì không thể biết được đâu là Đơn vị cung cấp Dịch vụ Bảo hộ nhãn hiệu uy tín?",
        "Bạn thắc mắc không biết vì sao nhãn hiệu bị từ chối dù chắc chắn nhãn hiệu không bị trùng với bất kỳ bên nào khác?",
        "Bạn loay hoay không thể xác định được phạm vi bảo hộ nhãn hiệu của mình là những nhóm ngành nghề nào, không biết cách tra cứu nhóm ngành bảo hộ nhãn hiệu?",
        "Thương hiệu của bạn đang bị ảnh hưởng vì logo thương hiệu bị các bên khác đưa đi sử dụng tràn lan trên thị trường cho những sản phẩm và dịch vụ không uy tín?",
        "Bạn muốn bảo hộ nhãn hiệu quốc tế để có thể mở rộng hoạt động kinh doanh của mình và bảo hộ thương hiệu của mình trên thị trường quốc tế?"
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
                <h2 className="text-center text-4xl font-bold mb-8 text-red-600">CAM KẾT CỦA LUẬT VÀ KẾ TOÁN THIỆN MINH</h2>
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
                    <div className="flex justify-between flex-col md:flex-row">
                        <div className="text-center my-2 flex-1 mx-2 bg-white p-4 rounded-lg shadow-md">
                            <div className="text-2xl font-bold text-black">Tháng</div>
                            <p className='text-black'>Nhận và kiểm tra tính hợp lệ của chứng từ kế toán</p>
                        </div>
                        <div className="text-center my-2 flex-1 mx-2 bg-white p-4 rounded-lg shadow-md">
                            <div className="text-2xl font-bold text-black">Quý</div>
                            <p className='text-black'>Lập báo cáo và nộp thuế lên Cơ quan thuế</p>
                        </div>
                        <div className="text-center my-2 flex-1 mx-2  bg-white p-4 rounded-lg shadow-md">
                            <div className="text-2xl font-bold text-black">Năm</div>
                            <p className='text-black'>Rà soát và đối chiếu tài liệu, hồ sơ nộp Cơ quan thuế</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 text-red-600">NHỮNG KHÓ KHĂN KHI BẠN ĐĂNG KÝ NHÃN HIỆU</h2>
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

            <Contact />

        </section>
    );
}

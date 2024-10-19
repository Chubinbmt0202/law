import Section11 from '@/app/components/section11';
import React from 'react';

export default function Thanhlapcongty() {

    const services = [
        { name: 'Đăng bố cáo thành lập Công ty trên cổng thông tin Doanh Nghiệp Quốc Gia', price: '100.000đ/ lần', time: '1 Ngày làm việc' },
        { name: 'Lập hồ sơ góp vốn/ sổ thành viên / cổ đông công ty (tùy vào loại hình doanh nghiệp Quý khách hàng chọn)', price: '200.000', time: '1 Ngày làm việc' },
        { name: 'Khắc Dấu hộp liên mực 3 hàng chữ "MST + Tên + Địa chỉ .."', price: '200.000', time: '1 Ngày làm việc' },
        { name: 'Thực hiện thủ tục đăng ký nộp thuế điện tử theo quy định từ ngày 01/07/2015', price: '400.000', time: '1 Ngày làm việc' },
        { name: 'Khắc dấu tròn doanh nghiệp', price: '400.000', time: '1 Ngày làm việc' },
        { name: 'Khắc dấu 1 dòng tên Giám đốc', price: '100.000', time: '1 Ngày làm việc' },
        { name: 'Khắc dấu 2 dòng (dòng trên-Chức danh, dòng dưới –Tên)', price: '150.000', time: '1 Ngày làm việc' },
        { name: 'Mở Tài khoản ngân hàng', price: '0', time: '3 Ngày làm việc' },
        { name: 'Khai thuế ban đầu', price: '3.000.000', time: '10 Ngày làm việc' },
        { name: 'Hóa đơn điện tử 500 số và chi phí khởi tạo', price: '850.000', time: '1 – 3 Ngày làm việc' },
        { name: 'Chữ ký số 01 năm', price: '1.650.000', time: '1 Ngày làm việc' },
    ];
    const branchServices = [
        { id: 1, content: 'Thành lập chi nhánh', price: '3.500.000', time: '05 ngày làm việc kể từ ngày nhận đầy đủ hồ sơ hợp lệ' },
        { id: 2, content: 'Thành lập Văn phòng đại diện', price: '3.500.000', time: '05 ngày làm việc kể từ ngày nhận đầy đủ hồ sơ hợp lệ' },
        { id: 3, content: 'Thành lập địa điểm kinh doanh', price: '3.000.000', time: '05 ngày làm việc kể từ ngày nhận đầy đủ hồ sơ hợp lệ' },
    ];
    const licenseChangeServices = [
        { id: 1, content: 'Dịch vụ thay đổi địa chỉ công ty', price: '3.500.000', time: '05 ngày làm việc kể từ ngày nhận đầy đủ hồ sơ hợp lệ' },
        { id: 2, content: 'Dịch vụ thay đổi tên công ty', price: '3.500.000', time: '05 ngày làm việc kể từ ngày nhận đầy đủ hồ sơ hợp lệ' },
        { id: 3, content: 'Dịch vụ thay đổi vốn điều lệ', price: '3.500.000', time: '05 ngày làm việc kể từ ngày nhận đầy đủ hồ sơ hợp lệ' },
        { id: 4, content: 'Dịch vụ thay đổi ngành nghề kinh doanh', price: '3.500.000', time: '05 ngày làm việc kể từ ngày nhận đầy đủ hồ sơ hợp lệ' },
        { id: 5, content: 'Dịch vụ thay đổi thành viên/cổ đông', price: '3.500.000', time: '05 ngày làm việc kể từ ngày nhận đầy đủ hồ sơ hợp lệ' },
        { id: 6, content: 'Dịch vụ thay đổi người đại diện theo pháp luật/Thay đổi Giám đốc', price: '3.500.000', time: '05 ngày làm việc kể từ ngày nhận đầy đủ hồ sơ hợp lệ' },
        { id: 7, content: 'Dịch vụ chuyển đổi loại hình doanh nghiệp', price: '3.500.000 – 5.000.000', time: '05 ngày làm việc kể từ ngày nhận đầy đủ hồ sơ hợp lệ' },
    ];
    return (
        <div className="relative w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-6">Dịch vụ thành lập công ty trọn gói uy tín</h1>
                <p>Bắt đầu kinh doanh là một bước quan trọng để thực hiện ước mơ kinh doanh và việc hiểu rõ các chi phí liên quan là rất quan trọng để lập kế hoạch và ngân sách hiệu quả. Bài viết này được thiết kế để cung cấp cho quý khách hàng cái nhìn tổng quan chi tiết về dịch vụ thành lập công ty mà chúng tôi cung cấp để tạo điều kiện thuận lợi cho việc hình thành doanh nghiệp của quý khách hàng. </p>
                <br />
                <p>Cho dù quý khách hàng đang muốn thành lập một doanh nghiệp địa phương nhỏ hay một tập đoàn lớn hơn, các dịch vụ của chúng tôi đều đáp ứng nhiều nhu cầu khác nhau, bao gồm đăng ký công ty, tư vấn pháp lý, lập kế hoạch tài chính, v.v. Chúng tôi hiểu rằng mỗi doanh nghiệp là duy nhất và mục tiêu của chúng tôi là cung cấp các giải pháp được cá nhân hóa phù hợp với các yêu cầu cụ thể và hạn chế về ngân sách của bạn.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-red-600 mb-6">
                    1. Bảng giá dịch vụ thành lập công ty trọn gói tại Thành lập doannh nghiệp
                </h1>

                <p className="mb-6">
                    Phí <span className="text-blue-600 font-semibold">dịch vụ thành lập công ty</span>, doanh nghiệp trọn gói ở Apolat Legal chỉ từ <span className="font-bold">3.500.000 đồng</span> (phụ thuộc vào phạm vi dịch vụ mà khách hàng lựa chọn). Nội dung của dịch vụ thành lập doanh nghiệp trọn gói sẽ bao gồm:
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border-b">Nội dung dịch vụ</th>
                                <th className="py-2 px-4 border-b">Thời gian dự kiến</th>
                                <th className="py-2 px-4 border-b">Chi phí dịch vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Giấy chứng nhận đăng ký doanh nghiệp</td>
                                <td className="py-2 px-4 border-b"></td>
                                <td className="py-2 px-4 border-b"></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Mã số thuế/ Mã số xuất nhập khẩu/ Mã số doanh nghiệp</td>
                                <td className="py-2 px-4 border-b"></td>
                                <td className="py-2 px-4 border-b"></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Đăng ký việc khắc con dấu cho Công ty và có Giấy xác nhận việc khắc dấu hợp pháp theo quy định của Điều 43 Luật Doanh Nghiệp năm 2020, có hiệu lực từ ngày 01/01/2021</td>
                                <td className="py-2 px-4 border-b"></td>
                                <td className="py-2 px-4 border-b"></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Đăng bố cáo thành lập Công ty trên Cổng thông tin Doanh Nghiệp Quốc Gia</td>
                                <td className="py-2 px-4 border-b">Hoàn thành sau 01 ngày làm việc</td>
                                <td className="py-2 px-4 border-b"></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Soạn thảo Điều lệ hoạt động của Công ty</td>
                                <td className="py-2 px-4 border-b">Hoàn thành sau 01 – 02 ngày</td>
                                <td className="py-2 px-4 border-b"></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Lập hồ sơ góp vốn/ sổ thành viên / cổ đông công ty (tùy vào loại hình doanh nghiệp Quý khách hàng chọn)</td>
                                <td className="py-2 px-4 border-b">Hoàn thành sau 03 – 05 ngày làm việc kể từ ngày nộp hồ sơ</td>
                                <td className="py-2 px-4 border-b">Từ 3.500.000 đồng</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cung cấp dịch vụ tư vấn và hỗ trợ thực hiện thủ tục mở tài khoản ngân hàng, cũng như nộp thông báo tài khoản ngân hàng lên các cơ quan nhà nước.</td>
                                <td className="py-2 px-4 border-b">Hoàn thành sau 01 ngày làm việc tiếp theo</td>
                                <td className="py-2 px-4 border-b"></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Thực hiện thủ tục đăng ký nộp thuế điện tử theo quy định từ ngày 01/07/2015</td>
                                <td className="py-2 px-4 border-b"></td>
                                <td className="py-2 px-4 border-b"></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Thiết lập hồ sơ Pháp lý khai thuế ban đầu tại các chi cục thuế cấp Quận, huyện</td>
                                <td className="py-2 px-4 border-b">03 ngày làm việc kể từ ngày nhận đủ hồ sơ đăng ký thuế</td>
                                <td className="py-2 px-4 border-b"></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Kê khai và nộp tờ khai thuế môn bài cho doanh nghiệp.</td>
                                <td className="py-2 px-4 border-b"></td>
                                <td className="py-2 px-4 border-b"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="mt-4 italic text-sm">
                    *Chi phí thành lập doanh nghiệp trên có thể thay đổi tùy trường hợp hồ sơ và từ khu vực.
                </p>

                <p className="mt-6">
                    Để biết thêm chi tiết về bảng giá thành lập doanh nghiệp, quý khách hàng hãy liên hệ với Apolat Legal qua hotline: <span className="font-bold">0911 357 447</span> hoặc email: <a href="mailto:info@apolatlegal.com" className="text-blue-600 hover:underline">info@apolatlegal.com</a>.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl font-bold mb-6">Bảng giá dịch vụ thành lập doanh nghiệp đối với từng dịch vụ riêng biệt:</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border-b">Dịch Vụ</th>
                                <th className="py-2 px-4 border-b">Chi phí (VNĐ)</th>
                                <th className="py-2 px-4 border-b">Thời gian</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                    <td className="py-2 px-4 border-b">{service.name}</td>
                                    <td className="py-2 px-4 border-b text-right">{service.price}</td>
                                    <td className="py-2 px-4 border-b text-center">{service.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="mt-4 italic text-sm">
                    *Chi phí riêng biệt này khi thành lập kinh doanh trên có thể thay đổi tùy trường hợp hồ sơ
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl font-bold text-red-600 mb-6">2. Bảng giá thành lập chi nhánh, địa điểm kinh doanh</h2>
                <p className="mb-4">Tổng chi phí thành lập chi nhánh, địa điểm kinh doanh trọn gói chỉ từ <span className="font-bold">3.000.000 đồng</span>. Cụ thể:</p>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border-b">STT</th>
                                <th className="py-2 px-4 border-b">Nội dung</th>
                                <th className="py-2 px-4 border-b">Chi phí (VNĐ)</th>
                                <th className="py-2 px-4 border-b">Thời gian</th>
                            </tr>
                        </thead>
                        <tbody>
                            {branchServices.map((service) => (
                                <tr key={service.id}>
                                    <td className="py-2 px-4 border-b text-center">{service.id}</td>
                                    <td className="py-2 px-4 border-b">{service.content}</td>
                                    <td className="py-2 px-4 border-b text-right">{service.price}</td>
                                    <td className="py-2 px-4 border-b">{service.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="mt-4 italic text-sm">*Chi phí thành lập chi nhánh, địa điểm kinh doanh trên có thể thay đổi tùy trường hợp hồ sơ</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl font-bold text-red-600 mb-6">3. Bảng giá dịch vụ thay đổi giấy phép kinh doanh</h2>
                <p className="mb-4">Tổng chi phí thay đổi giấy phép kinh doanh trọn gói chỉ từ <span className="font-bold">3.500.000 đồng</span>. Cụ thể từng dịch vụ sẽ có mức giá như sau:</p>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border-b">STT</th>
                                <th className="py-2 px-4 border-b">Nội dung</th>
                                <th className="py-2 px-4 border-b">Chi phí (VNĐ)</th>
                                <th className="py-2 px-4 border-b">Thời gian</th>
                            </tr>
                        </thead>
                        <tbody>
                            {licenseChangeServices.map((service) => (
                                <tr key={service.id}>
                                    <td className="py-2 px-4 border-b text-center">{service.id}</td>
                                    <td className="py-2 px-4 border-b">{service.content}</td>
                                    <td className="py-2 px-4 border-b text-right">{service.price}</td>
                                    <td className="py-2 px-4 border-b">{service.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="mt-4 italic text-sm">*Chi phí thay đổi giấy phép kinh doanh trên có thể thay đổi tùy trường hợp hồ sơ</p>
            </div>

            <Section11 />
        </div>
    );
}

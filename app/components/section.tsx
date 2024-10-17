// app/components/section.tsx
import Image from 'next/image';
import Link from 'next/link';
// import Contact from './contact';
import Section11 from './section11';

const Section = () => {
    const challenges = [
        "Bạn là doanh nhân đang khởi nghiệp, bạn đang dự định thành lập công ty nhưng chưa biết phải thực hiện những công việc gì, thủ tục pháp lý ra sao, để doanh nghiệp của bạn có thể đi vào hoạt động một cách nhanh nhất, đúng quy trình và hợp pháp?",
        "Bạn đang gặp khó khăn trong các thủ tục mở tài khoản ngân hàng doanh nghiệp và nộp thông báo tài khoản ngân hàng lên cơ quan thuế chủ quản?",
        "Bạn đang gặp rắc rối về thủ tục đăng ký nộp thuế điện tử với cơ quan thuế quản lý?",
        "Bạn chưa biết làm bảng hiệu công ty, kích thước của biển hiệu hay những thông tin bắt buộc phải đặt trên biển hiệu công ty?",
        "Bạn đang gặp khó khăn trong việc đăng ký kinh doanh với cơ quan nhà nước, bạn chưa nắm rõ về cách thức soạn và nộp hồ sơ để đăng ký giấy phép kinh doanh và con dấu doanh nghiệp?",
        "Bạn đang thắc mắc về Thủ tục Phát hành hóa đơn Giá trị gia tăng (Hóa đơn VAT), hóa đơn điện tử?",
        "Bạn chưa biết cách thiết lập hồ sơ Pháp lý khai thuế ban đầu tại các chi cục thuế cấp Quận, huyện; đăng ký mua thiết bị token; kê khai thuế môn bài hay các vấn đề liên quan đến thuế, hóa đơn?",
        "Bạn chưa biết làm thế nào để đăng bố cáo sau khi thành lập doanh nghiệp? Hay làm cách nào để công bố doanh nghiệp lên Cổng thông tin quốc gia về đăng ký doanh nghiệp?"
    ];
    const steps = [
        {
            number: '01',
            title: 'Chuẩn bị hồ sơ:',
            description: 'Tiếp nhận thông tin từ khách hàng',
        },
        {
            number: '02',
            title: 'Nộp hồ sơ:',
            description: 'Nộp hồ sơ thành lập công ty qua Cổng thông tin điện tử quốc gia về đăng ký doanh nghiệp',
        },
        {
            number: '03',
            title: 'Cấp giấy chứng nhận:',
            description: 'Cấp giấy chứng nhận đăng ký doanh nghiệp Thời gian hoàn thiện: 3 ngày',
        },
        {
            number: '04',
            title: 'Khắc dấu doanh nghiệp:',
            description: 'Thời gian hoàn thành trong ngày được cấp giấy chứng nhận đăng ký doanh nghiệp Không phải thông báo mẫu dấu',
        },
        {
            number: '05',
            title: 'Hoàn thiện:',
            description: 'Hoàn thiện và gửi KQ Giấy chứng nhận',
        },
        {
            number: '06',
            title: 'Hỗ trợ:',
            description: 'Hỗ trợ thủ tục sau thành lập Kê khai thuế, phát hành hóa đơn, mở tài khoản Tư vấn các vấn đề pháp lý khác cho công ty',
        },
    ];
    return (
        <section className="py-16 bg-white mt-16 md:mt-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 sm:mt-8 lg:mt-4 md:mt-t8 mt-[-100px] md:mb-0">
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
                    <div className="md:w-1/2 relative hidden md:block">
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
            <h2 className="text-center text-4xl font-bold mt-10 mb-6">Chi phí trọn gói dịch vụ thành lập công ty của Luật Thiện Minh</h2>
            <div className=" py-6">
                <div className="md:max-w-7xl max-w-full mx-auto py-6">
                    <table className="min-w-full table-auto text-xs sm:text-sm md:text-xs lg:text-xs">
                        <thead>
                            <tr className="bg-blue-100 text-black">
                                <th className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Dịch vụ cung cấp</th>
                                <th className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Gói tối giản</th>
                                <th className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Gói cơ bản</th>
                                <th className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Gói nâng cao</th>
                                <th className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Gói vip</th>
                            </tr>
                            <tr className="bg-blue-800 text-white">
                                <th className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Dịch vụ</th>
                                <th className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">690.000</th>
                                <th className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">1.590.000</th>
                                <th className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">3.790.000</th>
                                <th className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">4.590.000</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Thời gian được chấp thuận Mã Số Doanh Nghiệp / MST</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">10 - 12 ngày<br /></td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">07 - 09 ngày</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">06 - 08 ngày</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">06 - 08 ngày</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Giấy chứng nhận đăng ký doanh nghiệp</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Miễn phí thuế môn bài năm đầu tiên. Trị giá 2.000.000</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Miễn phí thủ tục khai báo thuế môn bài cho doanh nghiệp mới thành lập</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Đăng ký với cơ quan quản lý thuế (Luật Thiện Minh sẽ hỗ trợ khai báo với cơ quan thuế)</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Bố cáo thành lập doanh nghiệp lên cổng thông tin dịch vụ quốc gia.</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Tặng gói tư vấn pháp lý cơ bản sau thành lập: Tư vấn cơ bản về kế toán, thuế, các ngành nghề kinh doanh có điều kiện, các loại hợp đồng cơ bản…</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">02 tháng
                                    (trị giá 2.000.000)</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">04 tháng
                                    (trị giá 4.000.000)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Tặng gói ý tưởng logo thương hiệu</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">04 mẫu ý tưởng
                                    (trị giá 500.000)</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">08 mẫu ý tưởng
                                    (trị giá 1.000.000)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Thanh toán đặt cọc chi phí dịch vụ</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">đặt cọc 100%
                                    chi phí</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">đặt cọc 50%
                                    chi phí</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Không cần đặt cọc
                                    (thanh toán chi phí khi được chấp thuận MST)</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Không cần đặt cọc
                                    (thanh toán chi phí khi được chấp thuận MST)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">01 Dấu tròn công ty Trị giá 350.000</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">01 Dấu chức danh. Trị giá 170.000</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">01 Biển công ty chất liệu mica. Trị giá 200.000</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">✔</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Miễn phí mở tài khoản ngân hàng số đẹp (Vietcombank, Techcombank, VPBank, MB) ngân hàng hỗ trợ mở tài khoản online KH không phải ra quầy</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Miễn phí</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Miễn phí</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Miễn phí</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Miễn phí</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Chữ ký số (Chứng thư điện tử)</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Kh&#244;ng</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Chữ kí số 01 năm</td>
                                <td className="border border-gray-300 p-1 md:p-4 text-[10px] md:text-xl">Chữ kí số 03 năm</td>
                            </tr>
                            <tr>
                                <td className=" p-1 md:p-4 text-[10px] md:text-xl"></td>
                                <td className=" md:p-4 text-[10px] md:text-xl w-[200px]"><p className="bg-red-600 text-white px-1 text-center md:px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
                                    Nhận tư vấn
                                </p></td>
                                <td className=" md:p-4 text-[10px] md:text-xl w-[200px]"><p className="bg-red-600 text-white px-1 text-center md:px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
                                    Nhận tư vấn
                                </p></td>
                                <td className=" md:p-4 text-[10px] md:text-xl w-[200px] "><p className="bg-red-600 text-white px-1 text-center md:px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
                                    Nhận tư vấn
                                </p></td>
                                <td className=" md:p-4 text-[10px] md:text-xl w-[200px]"><p className="bg-red-600 text-white px-1 text-center md:px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
                                    Nhận tư vấn
                                </p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <div className='max-w-7xl mx-auto pt-6'>
                <table className="min-w-full border border-gray-300 max-w-7xl">
                    <thead>
                        <tr className="bg-blue-800 text-white">
                            <th className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">Dịch vụ</th>
                            <th className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">Giá</th>
                            <th className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">Khuyến mãi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">Thủ tục thông báo phát hành hóa đơn</td>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">500.000 VNĐ</td>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">Khi đăng ký gói kê khai thuế cơ bản theo quý (giảm 300.000 VNĐ) chỉ phí chỉ còn 200.000 VNĐ</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">Gói khai thuế cơ bản theo quý</td>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">1.500.000 VNĐ / 01 quý</td>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">Khi sử dụng thành lập doanh nghiệp Gói nâng cao (Tặng 500.000 VNĐ)<br />Khi sử dụng thành lập doanh nghiệp Gói VIP (Tặng 1.000.000 VNĐ)</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">Hóa đơn điện tử số lượng: 200 HĐ xBill (không có thời hạn sử dụng)</td>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">500.000 VNĐ</td>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">Tặng phí khởi tạo trị giá 500.000 VNĐ</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">Hóa đơn điện tử số lượng: 300 HĐ xBill (không có thời hạn sử dụng)</td>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">750.000 VNĐ</td>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">Tặng phí khởi tạo trị giá 500.000 VNĐ</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">Chữ ký số (chứng thư điện tử) 01 năm</td>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">1.050.000 VNĐ</td>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">Tặng token USB trị giá 500.000 VNĐ</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">Chữ ký số (chứng thư điện tử) 03 năm</td>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">2.550.000 VNĐ</td>
                            <td className="border border-gray-300 p-1 md:p-4 text-center text-[10px] md:text-xl md:text-start">Tặng token USB trị giá 500.000 VNĐ</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <section className="py-16">
                <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 text-red-600">CÁC BƯỚC THÀNH LẬP CÔNG TY</h2>
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
                        <div className="text-center flex-1 mx-2 my-4 bg-white p-4 rounded-lg shadow-md">
                            <div className="text-2xl font-bold text-black">01 NGÀY</div>
                            <p className='text-black'>Tư vấn, soạn hồ sơ, trình khách hàng ký hồ sơ và nộp hồ sơ thành lập công ty ở Sở KH&ĐT.</p>
                        </div>
                        <div className="text-center flex-1 mx-2 my-4 bg-white p-4 rounded-lg shadow-md">
                            <div className="text-2xl font-bold text-black">02 NGÀY</div>
                            <p className='text-black'>Sở KH&ĐT kiểm tra hồ sơ của doanh nghiệp và cấp giấy phép kinh doanh.</p>
                        </div>
                        <div className="text-center flex-1 mx-2 my-4 bg-white p-4 rounded-lg shadow-md">
                            <div className="text-2xl font-bold text-black">03 NGÀY</div>
                            <p className='text-black'>Khắc dấu và đăng ký sử dụng.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 text-red-600">NHỮNG KHÓ KHĂN KHI BẠN THÀNH LẬP CÔNG TY</h2>
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

            <Section11 />
        </section>
    );
};

export default Section;

import React from 'react';
import Banner3 from '@/app/components/banner3';
import Link from 'next/link';
import Image from 'next/image';

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
            title: 'Chuẩn bị hồ sơ:',
            description: 'Tiếp nhận thông tin từ khách hàng',
        },
        {
            number: '02',
            title: 'Nộp hồ sơ:',
            description: 'Nộp hồ sơ Đăng ký bảo hộ nhãn hiệu lên Cục Sở hữu trí tuệ',
        },
        {
            number: '03',
            title: 'Thẩm định hình thức:',
            description: 'Cục Sở hữu trí tuệ tiến hành thẩm định hình thức đơn',
        },
        {
            number: '04',
            title: 'Thẩm định nội dung:',
            description: 'Cục Sở hữu trí tuệ tiến hành thẩm định nội dung đơn sau khi chấp nhận hình thức đơn',
        },
        {
            number: '05',
            title: 'Nộp lệ phí Cấp văn bằng:',
            description: 'Cục Sở hữu trí tuệ ra thông báo chấp nhận nội dung đơn và nộp lệ phí cấp văn bằng',
        },
        {
            number: '06',
            title: 'Cấp văn bằng:',
            description: 'Cục Sở hữu trí tuệ Cấp văn bằng Bảo hộ nhãn hiệu',
        },
    ];
    return (
        <section className=" bg-white">

            <Banner3 />

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
            <h2 className="text-center text-4xl font-bold mt-10 mb-6">CHI PHÍ TRỌN GÓI DỊCH VỤ BẢO HỘ NHÃN HIỆU</h2>
            <div className="max-w-7xl mx-auto py-6">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-blue-100 text-black">
                            <th className="border border-gray-300 p-4">Dịch vụ cung cấp</th>
                            <th className="border border-gray-300 p-4">Gói cơ bản</th>
                            <th className="border border-gray-300 p-4">Gói nâng cao</th>
                            <th className="border border-gray-300 p-4">Gói vip</th>
                        </tr>
                        <tr className="bg-blue-800 text-white">
                            <th className="border border-gray-300 p-4">Giá dịch vụ trọn gói</th>
                            <th className="border border-gray-300 p-4">1.490.000</th>
                            <th className="border border-gray-300 p-4">2.590.000</th>
                            <th className="border border-gray-300 p-4">4.590.000</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-4"><strong>Tư vấn & tra cứu sơ bộ</strong> <br />Đánh giá, kiểm tra sơ bộ khả năng bảo hộ của nhãn hiệu
                                (tính chính xác 40% -50%) <br />Tư vấn bảo hộ cho nhãn hiệu có khả năng đăng ký</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4"> <strong>Soạn thảo & Nộp hồ sơ</strong>  <br />Soạn thảo hồ sơ, nộp và nhận kết quả chấp nhận đơn tại Cục Sở hữu trí tuệ
                                Theo dõi tình trạng pháp lý đơn</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4"><strong>Tra cứu chuyên sâu (1 nhãn/1 nhóm/6 sản phẩm)</strong> <br />Ttính chính xác 80% - 90%</td>
                            <td className="border border-gray-300 p-4">Kh&#244;ng</td>
                            <td className="border border-gray-300 p-4">Kh&#244;ng</td>
                            <td className="border border-gray-300 p-4">✔</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4">LOGO</td>
                            <td className="border border-gray-300 p-4">Không</td>
                            <td className="border border-gray-300 p-4">2 lần chỉnh sửa
                                Logo đã có</td>
                            <td className="border border-gray-300 p-4">Tặng gói thiết kế logo Nâng cao (trị giá 2.590.000)</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4">Bộ nhận diện thương hiệu</td>
                            <td className="border border-gray-300 p-4">Kh&#244;ng</td>
                            <td className="border border-gray-300 p-4">Thiết kế phong bì thư, cardvisit theo logo</td>
                            <td className="border border-gray-300 p-4">Thiết kế phong bì thư, cardvisit theo logo
                                Tặng 1 hộp cardvisit (100 card/hộp)</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-4">VOUCHER giảm giá</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                            <td className="border border-gray-300 p-4">✔</td>
                        </tr>
                        <tr>
                            <td className=" p-4"></td>
                            <td className=" p-4 w-[200px]"><p className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
                                Nhận tư vấn
                            </p></td>
                            <td className=" p-4 w-[200px]"><p className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
                                Nhận tư vấn
                            </p></td>
                            <td className=" p-4 w-[200px] "><p className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
                                Nhận tư vấn
                            </p></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <section className="py-16">
                <h2 className="text-center text-4xl font-bold mb-8 text-red-600">CÁC BƯỚC BẢO HỘ NHÃN HIỆU</h2>
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
                        Thời gian thực hiện Bảo hộ nhãn hiệu thường mất từ 16 tháng đến 18 tháng.
                    </p>
                    <p className="mb-6">
                        Chúng tôi sẽ hỗ trợ khách hàng sửa thiết kế LOGO trong trường hợp nhãn hiệu không được chấp nhận
                    </p>
                    <div className="flex justify-between">
                        <div className="text-center flex-1 mx-2 bg-white p-4 rounded-lg shadow-md">
                            <div className="text-2xl font-bold text-black">03 - 05 ngày</div>
                            <p className='text-black'>Tư vấn, tra cứu sơ bộ, nhận đủ thông tin và soạn hồ sơ Đăng ký bảo hộ nhãn hiệu</p>
                        </div>
                        <div className="text-center flex-1 mx-2 bg-white p-4 rounded-lg shadow-md">
                            <div className="text-2xl font-bold text-black">01 - 02 ngày</div>
                            <p className='text-black'>Nộp hồ sơ lên Cục Sở hữu trí tuệ và lấy thông báo chấp nhận đơn</p>
                        </div>
                        <div className="text-center flex-1 mx-2  bg-white p-4 rounded-lg shadow-md">
                            <div className="text-2xl font-bold text-black">16 - 18 tháng</div>
                            <p className='text-black'>Theo dõi, sửa đổi bổ sung hồ sơ và cấp văn bằng Bảo hộ nhãn hiệu</p>
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

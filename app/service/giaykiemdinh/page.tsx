
import React from 'react';
import Image from 'next/image';
import Section11 from '@/app/components/section11';
import Banner2 from '@/app/components/banner2';

export default function Giaykiemdinh() {
    return (
        <section className="py-16 bg-white md:mt-1">
            <Banner2 />
            <section className="py-8 bg-white mt-8 md:mt-1">
                <div className="relative max-w-7xl mx-auto isolate overflow-hidden bg-white py-6 sm:py-6 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                    </div>

                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2">
                            <h2 className="mt-2 mb-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xls">Giấy chứng nhận kiểm định</h2>

                            <div className='border p-5 rounded-lg border-orange-300 mb-4'>
                                <p className='mb-2'><strong>Nội dung gồm:</strong> </p>
                                <ul>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Giấy kiểm định sản phẩm là gì?</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Tại sao cần Giấy kiểm định chất lượng sản phẩm?</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Hồ sơ, thủ tục xin Giấy kiểm định sản phẩm</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Khi nào thì gì cần kiểm định an toàn thực phẩm?</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Mẫu giấy kiểm định an toàn thực phẩm hiện hành</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Câu hỏi khác</li>
                                </ul>
                            </div>

                            <h2 className="text-xl font-bold text-indigo-600 uppercase">1. Giấy kiểm định sản phẩm là gì?</h2>
                            <p className='text-neutral-700 mt-4'>Giấy kiểm định sản phẩm là văn bản chứng nhận của cơ quan có thẩm quyền hoặc tổ chức kiểm định, xác nhận rằng sản phẩm đã được kiểm tra và đáp ứng các tiêu chuẩn về chất lượng, an toàn và tuân thủ các quy định pháp luật. Giấy này thường bao gồm thông tin về sản phẩm, kết quả kiểm tra, thông số kỹ thuật, ngày kiểm định, và tên tổ chức kiểm định.</p>
                            <p className='text-neutral-700 mt-4'>Có hai hình thức chứng nhận tiêu chuẩn chất lượng sản phẩm:</p>
                            <ul className='pl-5 mt-2'>
                                <li className='text-neutral-700 mb-1'>💠 <strong>Chứng nhận tự nguyện:</strong> Dành cho các tiêu chuẩn của nước sản xuất hoặc tiêu chuẩn quốc tế.</li>
                                <li className='text-neutral-700 mb-1'>💠 <strong>Chứng nhận bắt buộc:</strong> Theo yêu cầu của cơ quan nhà nước.</li>
                            </ul>

                            <h2 className="text-xl font-bold text-indigo-600 uppercase mt-4">2. Tại sao cần Giấy kiểm định chất lượng sản phẩm?</h2>
                            <p className='text-neutral-700 mt-4'>Giấy kiểm định giúp kiểm soát chất lượng sản phẩm trên thị trường, ngăn chặn hàng giả, hàng nhái. Việc này không chỉ là yêu cầu pháp lý mà còn nâng cao uy tín thương hiệu, đảm bảo sản phẩm an toàn và hiệu quả cho người tiêu dùng, từ đó xây dựng lòng tin và sự trung thành của khách hàng.</p>

                            <h2 className="text-xl font-bold text-indigo-600 uppercase mt-4">3. Hồ sơ, thủ tục xin Giấy kiểm định sản phẩm</h2>
                            <h3 className='text-neutral-700 font-bold mt-2'>a. Đối với sản phẩm sản xuất trong nước:</h3>
                            <ul className='pl-5 mt-2'>
                                <li className='text-neutral-700 mb-1'>💠 Giấy đăng ký kinh doanh (bản sao công chứng)</li>
                                <li className='text-neutral-700 mb-1'>💠 Kết quả kiểm nghiệm tại trung tâm kiểm định</li>
                                <li className='text-neutral-700 mb-1'>💠 Mẫu sản phẩm</li>
                            </ul>

                            <h3 className='text-neutral-700 font-bold mt-2'>b. Đối với sản phẩm nhập khẩu:</h3>
                            <ul className='pl-5 mt-2'>
                                <li className='text-neutral-700 mb-1'>💠 Giấy đăng ký kinh doanh của công ty phân phối (bản sao công chứng)</li>
                                <li className='text-neutral-700 mb-1'>💠 Giấy phép CA của nhà sản xuất hoặc cơ quan kiểm định độc lập</li>
                                <li className='text-neutral-700 mb-1'>💠 Nhãn phụ sản phẩm</li>
                                <li className='text-neutral-700 mb-1'>💠 Công thức sản phẩm</li>
                                <li className='text-neutral-700 mb-1'>💠 Phiếu kiểm định chất lượng (nước sở tại)</li>
                                <li className='text-neutral-700 mb-1'>💠 Chứng nhận chất lượng hàng hóa (nước sở tại)</li>
                            </ul>

                            <h3 className='text-neutral-700 font-bold mt-2'>Thủ tục xin Giấy kiểm định sản phẩm</h3>
                            <ol className='pl-5 mt-2'>
                                <li className='text-neutral-700 mb-1'>💠 Xác định tiêu chuẩn và quy định chất lượng.</li>
                                <li className='text-neutral-700 mb-1'>💠 Lập kế hoạch và lên lịch trình kiểm định.</li>
                                <li className='text-neutral-700 mb-1'>💠 Thực hiện các phép đo, thử nghiệm và đánh giá.</li>
                                <li className='text-neutral-700 mb-1'>💠 Đánh giá và phân tích kết quả.</li>
                                <li className='text-neutral-700 mb-1'>💠 Cải tiến và điều chỉnh (nếu cần).</li>
                            </ol>

                            <h2 className="text-xl font-bold text-indigo-600 uppercase mt-4">4. Khi nào cần kiểm định an toàn thực phẩm?</h2>
                            <p className='text-neutral-700 mt-2'> Việc kiểm định thực phẩm sẽ được áp dụng đối với những thực phẩm trong thị trường hằng ngày. Do đó, việc kiểm nghiệm thực phẩm được thực hiện trong các trường hợp như: Thực hiện theo yêu cầu của tổ chức, cá nhân sản xuất, kinh doanh thực phẩm hoặc tổ chức, cá nhân khác có liên quan và phục vụ hoạt động quản lý nhà nước về an toàn thực phẩm. Việc kiểm nghiệm thực phẩm phục vụ hoạt động quản lý nhà nước được thực hiện tại cơ sở kiểm nghiệm thực phẩm do Bộ trưởng Bộ quản lý ngành chỉ định.</p>
                            <p className='text-neutral-700 mt-2'> Doanh nghiệp khi kinh doanh những mặt hàng sau thường hay cần phải kiểm định chất lượng an toàn thực phẩm:</p>

                            <ul className='pl-5 mt-2'>
                                <li className='text-neutral-700 mb-1'>💠 Nước ăn uống, nước sinh hoạt.</li>
                                <li className='text-neutral-700 mb-1'>💠 Nước uống đóng chai, nước khoáng thiên nhiên, đồ uống có cồn hoặc không có cồn.</li>
                                <li className='text-neutral-700 mb-1'>💠 Sản phẩm dinh dưỡng cho trẻ.</li>
                                <li className='text-neutral-700 mb-1'>💠 Sữa và các sản phẩm từ sữa.</li>
                                <li className='text-neutral-700 mb-1'>💠 Nguyên liệu.</li>
                                <li className='text-neutral-700 mb-1'>💠 Thực phẩm bổ sung vi chất dinh dưỡng.</li>
                                <li className='text-neutral-700 mb-1'>💠 Phụ gia thực phẩm như: chất tạo bọt, chất nhũ hóa, chất làm dày, chất làm bóng, enzym,…</li>
                                <li className='text-neutral-700 mb-1'>💠 Bao bì, dụng cụ tiếp xúc trực tiếp với thực phẩm như: kim loại, cao su, nhựa tổng hợp, thủy tinh, gốm, sứ,…</li>
                            </ul>


                            <h2 className="text-xl font-bold text-indigo-600 uppercase mt-4">5. Mẫu giấy kiểm định an toàn thực phẩm</h2>
                            <p className='text-neutral-700 mt-2'>Giấy kiểm định an toàn thực phẩm theo quy định pháp luật có thể có nhiều mẫu khác nhau tùy thuộc vào cơ quan cấp.</p>

                            <h2 className="text-xl font-bold text-indigo-600 uppercase mt-4">6. Câu hỏi khác</h2>
                            <ul className='mt-2'>
                                <li className='text-neutral-700 mb-1'><strong>Cơ quan nào cấp giấy kiểm định an toàn thực phẩm?</strong> Ở Việt Nam, Cục An toàn thực phẩm thuộc Bộ Y tế thường cấp giấy này.</li>
                                <li className='text-neutral-700 mb-1'><strong>Giấy kiểm định sản phẩm có phải yếu tố quan trọng trong quyết định mua hàng không?</strong> Có, giấy này giúp người tiêu dùng đưa ra quyết định mua hàng an toàn.</li>
                                <li className='text-neutral-700 mb-1'><strong>Giấy kiểm định sản phẩm có thể được tái cấp không?</strong> Có thể, sau khi hết hạn hoặc khi sản phẩm có thay đổi quan trọng.</li>
                            </ul>

                            <p>Hy vọng thông tin trên hữu ích cho bạn! Nếu bạn cần thêm hỗ trợ, hãy cho tôi biết nhé!</p>

                        </div>

                        <div className="-mt-12 p-2 pt-10 lg:sticky lg:top-4  lg:row-span-2 lg:overflow-hidden">
                            <div className="bg-stone-50 max-w-full p-3">
                                <div className='bg-cyan-600 p-2'>
                                    <h3 className='text-white'>THAM KHẢO THÊM</h3>
                                </div>
                                <hr />
                                <Image className='mt-2' src='/images/dang-ky-ban-hang-online.jpg' alt='section1' layout='responsive' width={300} height={300} />
                                <p className="text-base mt-2 p-2 font-thin text-indigo-600 cursor-pointer">Cách đăng ký giấy phép kinh doanh bán hàng online, qua mạng</p>
                                <hr />
                                <p className="text-base mt-2 p-2 font-thin text-indigo-600 cursor-pointer">6 Điều kiện thành lập công ty bạn phải biết</p>
                                <hr />
                                <p className="text-base mt-2 p-2 font-thin text-indigo-600 cursor-pointer">Hồ sơ, thủ tục đăng ký giấy phép kinh doanh online cho công ty</p>
                                <hr />
                                <p className="text-base mt-2 p-2 font-thin text-indigo-600 cursor-pointer">Dịch Vụ Kế Toán (Báo Cáo Thuế) Trọn Gói - Từ 500.000đ/tháng</p>
                                <hr />
                            </div>
                        </div>
                    </div>

                </div>
                <Section11 />
            </section>


            <Section11 />
        </section>
    );
}

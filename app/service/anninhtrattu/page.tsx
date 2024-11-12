
import React from 'react';
import Image from 'next/image';
import Section11 from '@/app/components/section11';
import Banner2 from '@/app/components/banner2';

export default function Anninhtrattu() {
    return (
        <section className="py-16 bg-white md:mt-1">
            <Banner2 />
            <section className="py-8 bg-white mt-8 md:mt-1">
                <div className="relative max-w-7xl mx-auto isolate overflow-hidden bg-white py-6 sm:py-6 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                    </div>

                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2">
                            <h2 className="mt-2 mb-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xls">Hồ sơ, thủ tục cấp giấy chứng nhận vệ sinh an toàn thực phẩm năm 2024</h2>

                            <div className='border p-5 rounded-lg border-orange-300 mb-4'>
                                <p className='mb-2'><strong>Nội dung gồm:</strong> </p>
                                <ul>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Hồ sơ đề nghị cấp mới Giấy chứng nhận đủ điều kiện về an ninh trật tự có những gì?</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Thủ tục cấp mới Giấy chứng nhận đủ điều kiện về an ninh trật tự được thực hiện thế nào?</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Chủ thể thực hiện thủ tục thủ tục cấp mới Giấy chứng nhận đủ điều kiện về an ninh trật tự là ai?</li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Hồ sơ đề nghị cấp mới Giấy chứng nhận đủ điều kiện về an ninh trật tự có những gì?</h2>
                                <p className="text-base/7 text-gray-700 mt-4">Căn cứ theo Điều 19 Nghị định 96/2016/NĐ-CP, tiểu mục 1 Mục C Phần II Thủ tục hành chính ban hành kèm theo Quyết định 3191/QĐ-BCA năm 2022.</p>
                                <p className="text-base/7 text-gray-700 mt-4">Hồ sơ đề nghị cấp mới Giấy chứng nhận đủ điều kiện về an ninh trật tự bao gồm:</p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mt-2'>🔹 Văn bản đề nghị cấp Giấy chứng nhận đủ điều kiện về an ninh, trật tự của cơ sở kinh doanh.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Bản sao hợp lệ một trong các loại văn bản sau đây: Giấy chứng nhận đăng ký kinh doanh; Giấy chứng nhận đăng ký doanh nghiệp; Giấy chứng nhận đăng ký đầu tư; Giấy chứng nhận đăng ký hoạt động của chi nhánh, đơn vị trực thuộc doanh nghiệp; Giấy chứng nhận đăng ký hợp tác xã, liên hiệp hợp tác xã; Giấy chứng nhận đăng ký chi nhánh, địa điểm kinh doanh của hợp tác xã, liên hiệp hợp tác xã; Giấy phép hoạt động của cơ quan quản lý nhà nước có thẩm quyền của Việt Nam; Giấy chứng nhận đăng ký hộ kinh doanh; văn bản thành lập hoặc cho phép hoạt động kèm theo văn bản thông báo mã số thuế đối với đơn vị sự nghiệp có thu.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Bản sao hợp lệ các giấy tờ, tài liệu chứng minh bảo đảm các điều kiện an toàn về phòng cháy và chữa cháy đối với khu vực kinh doanh và kho bảo quản nguyên liệu, hàng hóa;</li>
                                    <li className='text-gray-700 mt-2'>🔹 Bản khai lý lịch kèm theo Phiếu lý lịch tư pháp hoặc Bản khai nhân sự của người chịu trách nhiệm về an ninh, trật tự của cơ sở kinh doanh.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Trường hợp người chịu trách nhiệm về an ninh, trật tự là người Việt Nam định cư ở nước ngoài mang hộ chiếu nước ngoài và người nước ngoài thì ngoài Bản khai nhân sự phải gửi kèm theo bản sao hợp lệ Hộ chiếu, Thẻ thường trú hoặc Thẻ tạm trú hoặc Thị thực còn thời hạn lưu trú tại Việt Nam.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Ngoài các tài liệu quy định nêu trên, hồ sơ đề nghị cấp mới Giấy chứng nhận đủ điều kiện về an ninh, trật tự phải có thêm tài liệu áp dụng đối với một số cơ sở kinh doanh các ngành, nghề sau đây:
                                        <ul className=" pl-5 mb-4">
                                            <li className='text-gray-700 mt-2'>🔸 Đối với cơ sở kinh doanh dịch vụ bảo vệ không có vốn đầu tư nước ngoài, phải có bản sao hợp lệ bằng tốt nghiệp chứng minh trình độ học vấn từ cao đẳng trở lên của người chịu trách nhiệm về an ninh, trật tự.</li>
                                            <li className='text-gray-700 mt-2'>🔸 Đối với cơ sở kinh doanh dịch vụ bảo vệ có vốn đầu tư nước ngoài, phải có:
                                                <ul className=" pl-5 mb-4">
                                                    <li className='text-gray-700 mt-2'>🔹 Bản sao hợp lệ bằng tốt nghiệp chứng minh trình độ học vấn từ cao đẳng trở lên của người chịu trách nhiệm về an ninh, trật tự;</li>
                                                    <li className='text-gray-700 mt-2'>🔹 Tài liệu chứng minh doanh nghiệp nước ngoài đủ điều kiện quy định tại khoản 4 Điều 11 Nghị định 96/2016/NĐ-CP.</li>
                                                </ul>
                                            </li>
                                            <li className='text-gray-700 mt-2'>🔸 Đối với cơ sở kinh doanh dịch vụ bảo vệ có chức năng đào tạo nhân viên dịch vụ bảo vệ, phải có giáo trình và chương trình đào tạo nhân viên dịch vụ bảo vệ và đáp ứng các điều kiện theo quy định tại khoản 3 Điều 12 Nghị định 96/2016/NĐ-CP.</li>
                                            <li className='text-gray-700 mt-2'>🔸 Đối với các cơ sở kinh doanh ngành, nghề: Sản xuất vật liệu nổ công nghiệp; kinh doanh tiền chất thuốc nổ; kinh doanh ngành, nghề có sử dụng vật liệu nổ công nghiệp để thăm dò, khai thác khoáng sản, dầu khí; kinh doanh súng quân dụng cầm tay hạng nhỏ; kinh doanh casino; kinh doanh trò chơi điện tử có thưởng dành cho người nước ngoài; kinh doanh dịch vụ đặt cược, phải có văn bản cho phép hoạt động của cơ quan quản lý nhà nước chuyên ngành.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Thủ tục cấp mới Giấy chứng nhận đủ điều kiện về an ninh trật tự được thực hiện thế nào?</h2>
                                <p className="text-base/7 text-gray-700 mt-4">Căn cứ nội dung được quy định tại tiểu mục 1 Mục C Phần II Thủ tục hành chính ban hành kèm theo Quyết định 3191/QĐ-BCA năm 2022.</p>
                                <p className="text-base/7 text-gray-700 mt-4">Thủ tục cấp mới Giấy chứng nhận đủ điều kiện về an ninh trật tự được thực hiện như sau:</p>

                                <h3 className="text-lg font-bold text-indigo-600 mt-4">1. Trình tự</h3>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mt-2' >🔹 Bước 1: Tổ chức, cá nhân có nhu cầu được cấp mới Giấy chứng nhận đủ điều kiện về an ninh, trật tự nộp hồ sơ đến Cục Cảnh sát quản lý hành chính về trật tự xã hội - Bộ Công an.</li>
                                    <li className='text-gray-700 mt-2' >🔹 Bước 2: Cán bộ tiếp nhận kiểm tra thông tin, thành phần, tính hợp lệ của hồ sơ.
                                        <ul className=" pl-5 mb-4">
                                            <li className='text-gray-700 mt-2' >🔸 Nếu hồ sơ hợp lệ và đủ thành phần thì tiếp nhận hồ sơ giải quyết và gửi Giấy biên nhận hồ sơ trực tiếp hoặc qua dịch vụ bưu chính hoặc qua tài khoản trên cổng dịch vụ công hoặc qua thư điện tử (nếu có) cho cơ sở kinh doanh hoặc người được cử đến liên hệ nộp hồ sơ.</li>
                                            <li className='text-gray-700 mt-2' >🔸 Nếu hồ sơ không hợp lệ hoặc thiếu thành phần thì không tiếp nhận hồ sơ và gửi Phiếu hướng dẫn hoàn thiện hồ sơ trực tiếp hoặc qua dịch vụ bưu chính hoặc qua thư điện tử (nếu có) cho cơ sở kinh doanh hoặc người được cử đến liên hệ nộp hồ sơ.</li>
                                            <li className='text-gray-700 mt-2' >🔸 Nếu hồ sơ không đủ điều kiện thì không tiếp nhận hồ sơ, nêu rõ lý do từ chối giải quyết hồ sơ và gửi Thông báo về việc hồ sơ không đủ điều kiện trực tiếp hoặc qua dịch vụ bưu chính hoặc qua tài khoản trên cổng dịch vụ công hoặc qua thư điện tử (nếu có).</li>
                                        </ul>
                                    </li>
                                    <li className='text-gray-700 mt-2' >🔹 Bước 3: Căn cứ theo ngày hẹn trên Giấy biên nhận hồ sơ, tổ chức, cá nhân đến nơi nộp hồ sơ để nhận kết quả Giấy chứng nhận đủ điều kiện về an ninh, trật tự hoặc nhận kết quả qua dịch vụ bưu chính sau khi đã hoàn thành nộp phí thẩm định.</li>
                                </ul>

                                <h3 className="text-lg font-bold text-indigo-600 mt-4">2. Cách thức</h3>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mt-2' >🔹 Nộp hồ sơ trực tiếp tại trụ sở cơ quan Cục Cảnh sát quản lý hành chính về trật tự xã hội - Bộ Công an;</li>
                                    <li className='text-gray-700 mt-2' >🔹 Nộp hồ sơ qua dịch vụ bưu chính;</li>
                                    <li className='text-gray-700 mt-2' >🔹 Nộp hồ sơ trực tuyến qua Cổng Dịch vụ công quốc gia hoặc Cổng dịch vụ công Bộ Công an.</li>
                                    <li className='text-gray-700 mt-2' >🔹 Trả kết quả qua dịch vụ bưu chính.</li>
                                </ul>

                                <h3 className="text-lg font-bold text-indigo-600 mt-4">3. Thời hạn giải quyết</h3>
                                <p className="text-base/7 text-gray-700 mt-4">05 (năm) ngày làm việc.</p>

                                <h3 className="text-lg font-bold text-indigo-600 mt-4">4. Lệ phí</h3>
                                <p className="text-base/7 text-gray-700 mt-4">300.000đ (Ba trăm nghìn đồng).</p>

                                <h3 className="text-lg font-bold text-indigo-600 mt-4">5. Kết quả</h3>
                                <p className="text-base/7 text-gray-700 mt-4">Giấy chứng nhận đủ điều kiện về an ninh, trật tự.</p>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Chủ thể thực hiện thủ tục thủ tục cấp mới Giấy chứng nhận đủ điều kiện về an ninh trật tự là ai?</h2>
                                <p className="text-base/7 text-gray-700 mt-4">Theo tiểu mục 1 Mục C Phần II Thủ tục hành chính ban hành kèm theo Quyết định 3191/QĐ-BCA năm 2022.</p>
                                <p className="text-base/7 text-gray-700 mt-4">Chủ thể thực hiện thủ tục thủ tục cấp mới Giấy chứng nhận đủ điều kiện về an ninh trật tự là tổ chức, cá nhân đầu tư kinh doanh các ngành, nghề sau đây:</p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mt-2'>🔹 Kinh doanh súng quân dụng cầm tay hạng nhỏ;</li>
                                    <li className='text-gray-700 mt-2'>🔹 Kinh doanh vật liệu nổ công nghiệp; kinh doanh tiền chất thuốc nổ; kinh doanh dịch vụ nổ mìn; kinh doanh ngành, nghề có sử dụng vật liệu nổ công nghiệp để thăm dò, khai thác khoáng sản, dầu khí trên thềm lục địa Việt Nam;</li>
                                    <li className='text-gray-700 mt-2'>🔹 Kinh doanh dịch vụ lưu trú được xếp hạng từ 05 sao trở lên;</li>
                                    <li className='text-gray-700 mt-2'>🔹 Kinh doanh công cụ hỗ trợ;</li>
                                    <li className='text-gray-700 mt-2'>🔹 Kinh doanh súng bắn sơn (trừ cung ứng dịch vụ sử dụng súng bắn sơn);</li>
                                    <li className='text-gray-700 mt-2'>🔹 Kinh doanh các loại pháo;</li>
                                    <li className='text-gray-700 mt-2'>🔹 Kinh doanh casino; kinh doanh trò chơi điện tử có thưởng dành cho người nước ngoài; cơ sở kinh doanh dịch vụ bảo vệ có vốn đầu tư nước ngoài và cơ sở kinh doanh dịch vụ bảo vệ có chức năng đào tạo nhân viên dịch vụ bảo vệ; các cơ sở kinh doanh thuộc Bộ Công an.</li>

                                </ul>
                            </div>
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

            </section>


            <Section11 />
        </section>
    );
}

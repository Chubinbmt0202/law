
import React from 'react';
import Image from 'next/image';
import Section11 from '@/app/components/section11';
import Banner2 from '@/app/components/banner2';

export default function Quangcao() {
    return (
        <section className="py-16 bg-white md:mt-1">
            <Banner2 />
            <section className="py-8 bg-white mt-8 md:mt-1">
                <div className="relative max-w-7xl mx-auto isolate overflow-hidden bg-white py-6 sm:py-6 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                    </div>

                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2">
                            <h2 className="mt-2 mb-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xls">Giấy Phép Quảng Cáo là gì? Thủ tục xin giấy phép quảng cáo</h2>

                            <div className='border p-5 rounded-lg border-orange-300 mb-4'>
                                <p className='mb-2'><strong>Nội dung gồm:</strong> </p>
                                <ul>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Quảng cáo là gì? Giấy phép quảng cáo là gì?</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Các hình thức quảng cáo phổ biến hiện nay</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Các trường hợp phải xin giấy phép quảng cáo</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Điều kiện cấp giấy phép quảng cáo cho sản phẩm, dịch vụ</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Quy trình, thủ tục xin giấy phép quảng cáo</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Tại sao cần xin giấy phép quảng cáo?</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Một số câu hỏi thường gặp khi xin giấy phép quảng cáo</li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Quảng cáo là gì? Giấy phép quảng cáo là gì?</h2>
                                <p className="text-base/7 font-bold text-gray-700 mt-4">➨ Quảng cáo là gì?</p>
                                <p className="text-base/7  text-gray-700 mt-4">Quảng cáo là việc sử dụng các phương tiện nhằm mục đích giới thiệu đến mọi người về sản phẩm, hàng hóa và dịch vụ có mục đích sinh lợi hoặc không sinh lợi. Trong đó, người muốn quảng bá thông tin sản phẩm, dịch vụ phải trả tiền cho các bên cung cấp phương tiện, sau đó các phương tiện này sẽ truyền thông tin đến người tiêu dùng và người sử dụng dịch vụ.</p>
                                <p className="text-base/7  text-gray-700 mt-4">Một số phương tiện quảng cáo phổ biến là quảng cáo Adwords, quảng cáo SEO, quảng cáo Facebook hay quảng cáo Youtube… đây cũng là những nền tảng truyền tải thông tin lớn nhất hiện nay.</p>
                                <p className="text-base/7 font-bold text-gray-700 mt-4">➨ Giấy phép quảng cáo là gì?</p>
                                <p className="text-base/7  text-gray-700 mt-4">Giấy phép quảng cáo là một loại giấy phép được cơ quan nhà nước có thẩm quyền cấp cho doanh nghiệp hoặc cá nhân cung cấp dịch vụ quảng cáo. Trong đó, giấy phép quảng cáo thể hiện sự hợp pháp của hoạt động quảng cáo và nội dung quảng cáo cụ thể cho từng sản phẩm/dịch vụ của nhà sản xuất, phân phối, cung ứng.</p>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Các hình thức quảng cáo phổ biến hiện nay</h2>
                                <p className="text-base/7 font-bold text-gray-700 mt-4">Các cá nhân, doanh nghiệp có thể chọn 1 trong các phương tiện dưới đây để quảng cáo sản phẩm, dịch vụ của mình:</p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mt-2'>🔹 Trên báo chí, phương tiện điện tử, thiết bị đầu cuối và các thiết bị viễn thông khác;</li>
                                    <li className='text-gray-700 mt-2'>🔹 Trên các sản phẩm in, thiết bị công nghệ;</li>
                                    <li className='text-gray-700 mt-2'>🔹 Bảng quảng cáo, băng rôn, màn hình, hộp đèn, biển hiệu;</li>
                                    <li className='text-gray-700 mt-2'>🔹 Trong chương trình văn hóa, thể thao, hội thảo, triển lãm, sự kiện;</li>
                                    <li className='text-gray-700 mt-2'>🔹 Đoàn người thực hiện việc quảng cáo;</li>
                                    <li className='text-gray-700 mt-2'>🔹 Loa phóng thanh.</li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Các trường hợp phải xin giấy phép quảng cáo</h2>
                                <p className="text-base/7 font-bold text-gray-700 mt-4">Việc xin giấy phép quảng cáo là thủ tục bắt buộc đối với các tổ chức, cá nhân có ý định xây dựng và triển khai hoạt động quảng cáo của một số sản phẩm/dịch vụ cụ thể như sau:</p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mt-2'>🔹 Thuốc</li>
                                    <li className='text-gray-700 mt-2'>🔹 Mỹ phẩm</li>
                                    <li className='text-gray-700 mt-2'>🔹 Hóa chất và các chế phẩm diệt côn trùng, diệt khuẩn</li>
                                    <li className='text-gray-700 mt-2'>🔹 Sữa và các sản phẩm dinh dưỡng khác dành cho trẻ</li>
                                    <li className='text-gray-700 mt-2'>🔹 Thực phẩm, chất phụ gia</li>
                                    <li className='text-gray-700 mt-2'>🔹 Dịch vụ khám chữa bệnh</li>
                                    <li className='text-gray-700 mt-2'>🔹 Trang thiết bị y tế</li>
                                    <li className='text-gray-700 mt-2'>🔹 Vật tư và thuốc bảo vệ thực vật, nguyên liệu thuốc bảo vệ thực vật</li>
                                    <li className='text-gray-700 mt-2'>🔹 Thuốc và vật tư ngành thú y</li>
                                    <li className='text-gray-700 mt-2'>🔹 Phân bón, chế phẩm sinh học phục vụ trong lĩnh vực trồng trọt, thức ăn chăn nuôi</li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Điều kiện cấp giấy phép quảng cáo cho sản phẩm, dịch vụ</h2>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mt-2'>🔹 Phải có giấy chứng nhận đăng ký kinh doanh nếu thực hiện quảng cáo về hoạt động kinh doanh hàng hóa/dịch vụ;</li>
                                    <li className='text-gray-700 mt-2'>🔹 Phải có các tài liệu chứng minh về việc hợp quy chuẩn của sản phẩm hàng hóa, dịch vụ theo luật định khi quảng cáo cho các loại sản phẩm hàng hóa, dịch vụ;</li>
                                    <li className='text-gray-700 mt-2'>🔹 Khi quảng cáo tài sản được pháp luật quy định rằng tài sản đó phải có giấy chứng nhận quyền sở hữu hoặc quyền sử dụng thì phải cung cấp được giấy chứng nhận quyền sở hữu hoặc quyền sử dụng tài sản đó.</li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Quy trình, thủ tục xin giấy phép quảng cáo</h2>
                                <ul className='pl-5 mb-4'>
                                    <li className='text-gray-700 mt-2'>
                                        <strong>Bước 1:</strong> Chuẩn bị hồ sơ xin giấy phép quảng cáo
                                        <ul className='pl-5'>
                                            <li className='text-gray-700 mt-2'>🔹 Đơn đề nghị xin phép quảng cáo;</li>
                                            <li className='text-gray-700 mt-2'>🔹 Bản sao giấy đăng ký và bản công bố sản phẩm;</li>
                                            <li className='text-gray-700 mt-2'>🔹 Mẫu nhãn sản phẩm;</li>
                                            <li className='text-gray-700 mt-2'>🔹 Kịch bản và nội dung dự kiến quảng cáo ghi sẵn trong đĩa hình, đĩa âm thanh hoặc phải có ma két đối với việc quảng cáo trên các phương tiện khác;</li>
                                            <li className='text-gray-700 mt-2'>🔹 Đối với nội dung quảng cáo ngoài công dụng, tính năng của sản phẩm có trong bản công bố sản phẩm phải có tài liệu khoa học chứng minh.</li>
                                        </ul>
                                    </li>
                                    <li className='text-gray-700 mt-2'>
                                        <strong>Bước 2:</strong> Nộp hồ sơ tại cơ quan có thẩm quyền
                                        <ul className='pl-5'>
                                            <li className='text-gray-700 mt-2'>🔹 Cục Quản lý Dược: cấp phép quảng cáo nội dung về thuốc;</li>
                                            <li className='text-gray-700 mt-2'>🔹 Cục An toàn thực phẩm: cấp phép quảng cáo những nội dung về sữa và dinh dưỡng cho trẻ;</li>
                                            <li className='text-gray-700 mt-2'>🔹 Cục Quản lý khám, chữa bệnh: xem xét hồ sơ xin cấp phép của dịch vụ khám chữa bệnh;</li>
                                            <li className='text-gray-700 mt-2'>🔹 Cục Quản lý Y, Dược cổ truyền: cấp phép quảng cáo của dịch vụ khám chữa bệnh bằng phương pháp y học cổ truyền;</li>
                                            <li className='text-gray-700 mt-2'>🔹 Cục Quản lý môi trường Y tế: cấp phép quảng cáo về hóa chất và chế phẩm diệt côn trùng;</li>
                                            <li className='text-gray-700 mt-2'>🔹 Cục Quản lý Trang thiết bị và Công trình Y tế: cấp phép quảng cáo trang thiết bị y tế.</li>
                                        </ul>
                                    </li>
                                    <li className='text-gray-700 mt-2'>
                                        <strong>Bước 3:</strong> Giải quyết hồ sơ và thông báo kết quả
                                        <p className='pl-5'>🔹 Sau khi tiếp nhận hồ sơ, trong vòng 5 - 10 ngày làm việc, cơ quan có thẩm quyền sẽ xử lý hồ sơ và trả kết quả.</p>
                                    </li>
                                    <li className='text-gray-700 mt-2'>
                                        <strong>Bước 4:</strong> Nhận giấy phép quảng cáo
                                        <p className='pl-5'>🔹 Doanh nghiệp sẽ nhận được giấy phép quảng cáo ghi rõ nội dung và thời gian hiệu lực.</p>
                                    </li>
                                    <li className='text-gray-700 mt-2'>
                                        <strong>Bước 5:</strong> Thực hiện quảng cáo
                                        <p className='pl-5'>🔹 Doanh nghiệp có thể tiến hành quảng cáo theo đúng nội dung đã được phê duyệt.</p>
                                    </li>
                                    <li className='text-gray-700 mt-2'>
                                        <strong>Bước 6:</strong> Báo cáo kết quả quảng cáo (nếu cần)
                                        <p className='pl-5'>🔹 Có thể yêu cầu báo cáo kết quả quảng cáo sau khi thực hiện.</p>
                                    </li>
                                </ul>

                            </div>

                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Tại sao cần xin giấy phép quảng cáo?</h2>
                                <p className="text-base/7 font-bold text-gray-700 mt-4">Có 3 lý do bạn phải xin giấy phép quảng cáo:</p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mt-2'>🔹 Một là, giấy phép quảng cáo là căn cứ để cơ quan nhà nước có thẩm quyền giải quyết các vấn đề phát sinh nếu xét thấy việc cung cấp dịch vụ quảng cáo không đúng luật định; </li>
                                    <li className='text-gray-700 mt-2'>🔹 Hai là, ngày nay có rất nhiều đơn vị cung cấp dịch vụ quảng cáo trên thị trường nên việc tìm và lựa chọn đơn vị phù hợp, uy tín cũng là một vấn đề khó. Chính vì thế, việc được cấp giấy phép quảng cáo sẽ giúp nội dung quảng cáo cũng như đơn vị cung cấp quảng cáo có được sự tin tưởng của người tiêu dùng;</li>
                                    <li className='text-gray-700 mt-2'>🔹 Ba là, giúp cho các công ty quảng cáo tránh được rủi ro trong việc kiểm duyệt, tra soát chứng từ pháp lý của cơ quan nhà nước.</li>
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


                {/* ////////// */}

                {/* /////////////// */}


                <Section11 />
            </section>


            <Section11 />
        </section>
    );
}

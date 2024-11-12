
import React from 'react';
import Image from 'next/image';
import Section11 from '@/app/components/section11';
import Banner9 from '@/app/components/banner9';

export default function Congbosanpham() {
    return (
        <section className="py-16 bg-white md:mt-1">
            <Banner9 />
            <section className="py-8 bg-white mt-8 md:mt-1">
                <div className="relative max-w-7xl mx-auto isolate overflow-hidden bg-white py-6 sm:py-6 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                    </div>

                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2">
                            <h2 className="mt-2 mb-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xls">Giấy công bố mỹ phẩm là gì? Hồ sơ, thủ tục công bố mỹ phẩm</h2>

                            <div className='border p-5 rounded-lg border-orange-300 mb-4'>
                                <p className='mb-2'><strong>Nội dung gồm:</strong> </p>
                                <ul>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Công bố mỹ phẩm, phiếu công bố sản phẩm mỹ phẩm là gì?</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Điều kiện, quy định công bố mỹ phẩm lưu hành tại Việt Nam</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Hồ sơ công bố mỹ phẩm sản xuất trong nước, mỹ phẩm nhập khẩu </li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Quy trình, thủ tục công bố lưu hành mỹ phẩm</li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Công bố mỹ phẩm, phiếu công bố sản phẩm mỹ phẩm là gì?</h2>
                                <p className='text-base/7 text-gray-700 my-4'>Công bố mỹ phẩm là thủ tục mà đơn vị sản xuất hoặc nhập khẩu mỹ phẩm từ nước ngoài về phải thực hiện tại cơ quan có thẩm quyền của Bộ Y tế, để được cấp số tiếp nhận phiếu công bố sản phẩm mỹ phẩm cho phép lưu hành tại Việt Nam. Đồng thời, đơn vị công bố mỹ phẩm phải chịu hoàn toàn trách nhiệm về chất lượng sản phẩm, hiệu quả và tính an toàn với người tiêu dùng.</p>
                                <p className='text-base/7 text-gray-700 my-4'>Công bố mỹ phẩm là thủ tục mà đơn vị sản xuất hoặc nhập khẩu mỹ phẩm từ nước ngoài về phải thực hiện tại cơ quan có thẩm quyền của Bộ Y tế, để được cấp số tiếp nhận phiếu công bố sản phẩm mỹ phẩm cho phép lưu hành tại Việt Nam. Đồng thời, đơn vị công bố mỹ phẩm phải chịu hoàn toàn trách nhiệm về chất lượng sản phẩm, hiệu quả và tính an toàn với người tiêu dùng.</p>


                            </div>

                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Điều kiện, quy định công bố mỹ phẩm lưu hành tại Việt Nam</h2>
                                <p className='text-base/7 text-gray-700 my-4'>Điều kiện để được công bố lưu hành mỹ phẩm quy định như sau:</p>
                                <p className='text-base/7 font-bold text-gray-700 my-4'>➨ Đối với cá nhân, tổ chức đứng tên làm thủ tục công bố mỹ phẩm: </p>
                                <ul className='mt-4'>
                                    <li className='pl-5 mb-4'>💠 Phải có giấy chứng nhận đăng ký kinh doanh (tức là hộ kinh doanh cá thể hoặc tổ chức, doanh nghiệp có tư cách pháp nhân);</li>
                                    <li className='pl-5 mb-4'>💠 Có đăng ký ngành nghề kinh doanh mỹ phẩm.</li>
                                </ul>

                                <p className='text-base/7 font-bold text-gray-700 my-4'>➨ Đối với sản phẩm mỹ phẩm:</p>
                                <ul className='mt-4'>
                                    <li className='pl-5 mb-4'>💠 Sản phẩm mỹ phẩm sản xuất trong nước phải được kiểm nghiệm thành phần mỹ phẩm trước khi làm thủ tục công bố;</li>
                                    <li className='pl-5 mb-4'>💠 Sản phẩm mỹ phẩm nhập khẩu phải có giấy chứng nhận lưu hành tự do được cấp tại nước sản xuất, giấy ủy quyền của chủ nhãn hàng/nhà sản xuất cho đơn vị phân phối tại Việt Nam.</li>
                                </ul>

                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Hồ sơ công bố mỹ phẩm sản xuất trong nước, mỹ phẩm nhập khẩu</h2>

                                <ul className='mt-2'>
                                    <li className='text-neutral-700'><strong>Hồ sơ công bố mỹ phẩm nhập khẩu</strong>
                                        <div className='border p-5 rounded-lg border-orange-300 mb-4 mt-4'>
                                            <p className='text-neutral-700'>Bộ hồ sơ công bố mỹ phẩm gồm những loại giấy tờ sau đây:</p>
                                            <ul className='text-neutral-700'>
                                                <li className='pl-5 mt-4'>💠 2 bản - phiếu công bố sản phẩm mỹ phẩm (gửi kèm theo bản mềm của phiếu công bố);</li>
                                                <li className='pl-5 mt-4'>💠 Phiếu kiểm nghiệm sản phẩm đối với mỹ phẩm được sản xuất trong nước;</li>
                                                <li className='pl-5 mt-4'>💠 Giấy chứng nhận lưu hành tự do - CFS (chỉ cung cấp với sản phẩm mỹ phẩm nhập khẩu);  </li>
                                                <li className='pl-5 mt-4'>💠 Giấy ủy quyền của chủ nhãn hàng hoặc nhà sản xuất mỹ phẩm ủy quyền cho cá nhân, tổ chức phân phối sản phẩm mỹ phẩm tại Việt Nam làm thủ tục công bố sản phẩm.</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='text-neutral-700'><strong>Lưu ý:</strong>
                                        <p className='text-neutral-700 mt-4'>Đối với giấy ủy quyền:</p>
                                        <ul>
                                            <li className='text-neutral-700 mt-4 pl-5'>💠 Nếu làm thủ tục công bố mỹ phẩm nhập khẩu: Cần cung cấp bản sao chứng thực chữ ký và được hợp pháp hóa lãnh sự;</li>
                                            <li className='text-neutral-700 mt-4 pl-5'>💠 Nếu làm thủ tục công bố mỹ phẩm sản xuất trong nước chỉ cần cung cấp bản gốc hoặc bản sao chứng thực.</li>
                                        </ul>
                                        <p className='text-neutral-700'>Đối với giấy chứng nhận lưu hành tự do của mỹ phẩm nhập khẩu phải đáp ứng 2 điều kiện:</p>
                                        <ul>
                                            <li className='text-neutral-700 mt-4 pl-5'>💠 Còn thời hạn hoặc được cấp trong vòng 24 tháng kể từ ngày cấp;</li>
                                            <li className='text-neutral-700 mt-4 pl-5'>💠 Được hợp pháp hóa lãnh sự theo quy định (trừ những trường hợp được miễn hợp pháp hóa lãnh sự).</li>
                                        </ul>
                                        <p className='text-neutral-700 mt-4'>Phiếu công bố mỹ phẩm được lập phải có đầy đủ chữ ký của người đại diện pháp luật và đóng dấu giáp lai của tổ chức, cá nhân chịu trách nhiệm phân phối sản phẩm.</p>
                                        <p className='text-neutral-700 mt-4'>Trường hợp công ty làm thủ tục công bố cho từ 2 sản phẩm mỹ phẩm trở lên, thì mỗi 1 sản phẩm chỉ được công bố trong 1 phiếu công bố.</p>

                                    </li>
                                </ul>

                                <h2 className="text-xl font-bold text-indigo-600 uppercase mt-4">Các trình tự cần thực hiện khi tự công bố sản phẩm:</h2>
                                <p className='text-neutral-700 mt-2'>Quy trình các bước làm thủ tục công bố lưu hành mỹ phẩm sản xuất trong nước và mỹ phẩm nhập khẩu cụ thể như sau:</p>

                                <ul className='pl-5 mt-4'>
                                    <li><strong>Bước 1:</strong> Chuẩn bị hồ sơ công bố mỹ phẩm
                                        <ul>
                                            <li className='text-neutral-700 mt-4 pl-5'>Số lượng hồ sơ: 1 bộ như Anpha hướng dẫn bên trên;</li>
                                            <li className='text-neutral-700 mt-2 pl-5'>Người nộp hồ sơ: Cá nhân, tổ chức được ủy quyền phân phối mỹ phẩm tại Việt Nam.</li>
                                        </ul>
                                    </li>
                                    <li className='mt-4'><strong>Bước 2:</strong> Nộp hồ sơ công bố mỹ phẩm và lệ phí
                                        <ul>
                                            <li className='mt-2'><strong>Cơ quan tiếp nhận hồ sơ:</strong>
                                                <ul>
                                                    <li className='text-neutral-700 mt-4 pl-5'>Đối với mỹ phẩm nhập khẩu: Nộp tại Cục Quản lý dược - Bộ Y tế;</li>
                                                    <li className='text-neutral-700 mt-2 pl-5'>Đối với mỹ phẩm sản xuất trong nước: Nộp tại Sở Y tế nơi đặt nhà máy sản xuất mỹ phẩm;</li>
                                                </ul>
                                            </li>
                                            <li className='mt-2'><strong>Hình thức nộp hồ sơ:</strong>
                                                <ul>
                                                    <li className='text-neutral-700 mt-4 pl-5'>Nộp hồ sơ bản giấy trực tiếp tại Cục Quản lý dược - Bộ Y tế hoặc Sở Y tế tỉnh;</li>
                                                    <li className='text-neutral-700 mt-2 pl-5'>Nộp hồ sơ online qua Cổng thông tin một cửa quốc gia.</li>
                                                </ul>
                                            </li>
                                            <li className='mt-2'><strong>Lệ phí công bố mỹ phẩm:</strong> 500.000 đồng (được quy định tại Thông tư số 277/2016/TT-BTC).</li>
                                        </ul>
                                    </li>
                                    <li className='mt-2'><strong>Bước 3:</strong> Giải quyết hồ sơ công bố mỹ phẩm
                                        <ul>
                                            <li className='text-neutral-700 mt-4 pl-5'>Trường hợp hồ sơ hợp lệ: Trong vòng 3 ngày làm việc, Cục Quản lý dược - Bộ Y tế hoặc Sở Y tế tỉnh cấp số tiếp nhận phiếu công bố sản phẩm mỹ phẩm;</li>
                                            <li className='text-neutral-700 mt-2 pl-5'>Trường hợp hồ sơ chưa hợp lệ: Trong vòng 5 ngày làm việc, Cục Quản lý dược - Bộ Y tế hoặc Sở Y tế tỉnh ra thông báo bằng văn bản hướng dẫn cá nhân, tổ chức sửa đổi, bổ sung hồ sơ và nộp lại. Thời hạn bổ sung hồ sơ tối đa là 3 tháng kể từ ngày ra thông báo.</li>
                                        </ul>
                                    </li>
                                </ul>

                                <p className='mt-2'><strong>Lưu ý:</strong></p>
                                <ul>
                                    <li className='text-neutral-700 mt-4 pl-5'>Thời gian để được cấp phiếu công bố sản phẩm mỹ phẩm có thể kéo dài từ 7 - 15 ngày đối với mỹ phẩm sản xuất trong nước và từ 20 - 25 ngày đối với mỹ phẩm nhập khẩu.</li>
                                    <li className='text-neutral-700 mt-4 pl-5'>Số tiếp nhận phiếu công bố sản phẩm mỹ phẩm chỉ có thời hạn sử dụng 5 năm kể từ ngày cấp. Nếu vẫn còn lưu hành sản phẩm sau 5 năm, doanh nghiệp phải làm thủ tục công bố lại trước khi phiếu công bố hết hạn.</li>
                                </ul>

                                <p className='mt-2'>Trên đây là thông tin về quy trình và thủ tục công bố mỹ phẩm. Nếu bạn cần tư vấn thêm, có thể liên hệ cho Thành lập doanh nghiệp theo số:</p>
                                <ul>
                                    <li className='text-neutral-700 mt-4 pl-5'>Miền Bắc: 0984 477 711</li>
                                    <li className='text-neutral-700 mt-4 pl-5'>Miền Trung: 0903 003 779</li>
                                    <li className='text-neutral-700 mt-4 pl-5'>Miền Nam: 0938 268 123</li>
                                </ul>

                                <p className='mt-2'>Hoặc để đơn giản quy trình công bố mỹ phẩm, bạn có thể tham khảo dịch vụ công bố mỹ phẩm tại Thành lập doanh nghiệp - trọn gói từ 1.000.000 đồng/sản phẩm (áp dụng cho cả mỹ phẩm sản xuất trong nước và mỹ phẩm nhập khẩu).</p>


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


import React from 'react';
import Image from 'next/image';
import Section11 from '@/app/components/section11';
import Banner2 from '@/app/components/banner2';

export default function Congbosanpham() {
    return (
        <section className="py-16 bg-white md:mt-1">
            <Banner2 />
            <section className="py-8 bg-white mt-8 md:mt-1">
                <div className="relative max-w-7xl mx-auto isolate overflow-hidden bg-white py-6 sm:py-6 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                    </div>

                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2">
                            <h2 className="mt-2 mb-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xls">Hướng dẫn chi tiết thủ tục, hồ sơ công bố sản phẩm</h2>

                            <div className='border p-5 rounded-lg border-orange-300 mb-4'>
                                <p className='mb-2'><strong>Nội dung gồm:</strong> </p>
                                <ul>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Các sản phẩm cần thực hiện thủ tục tự công bố sản phẩm</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Hồ sơ khi doanh nghiệp tự công bố chất lượng sản phẩm</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Các trình tự cần thực hiện khi tự công bố sản phẩm </li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Một số lưu ý khi tự công bố sản phẩm </li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Các câu hỏi thường gặp liên quan đến thủ tục tự công bố sản phẩm</li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Các sản phẩm cần thực hiện thủ tục tự công bố sản phẩm</h2>
                                <p className="text-base/7 font-bold text-gray-700 mt-4">➨ Khi công bố sản phẩm, sẽ có một số sản phẩm được miễn tự công bố, một số bắt buộc phải đăng ký công bố thì có sản phẩm sẽ được thực hiện tự công bố sản phẩm. Khách hàng cần xem xét sản phẩm của mình thuộc dạng nào sau đây:</p>

                                <Image className='mt-2' src='/images/ho-so-tu-cong-bo-san-pham-4_1629867130.jpg' alt='section1' layout='responsive' width={300} height={300} />

                                <p className='text-base/7 font-bold text-gray-700 my-4'>Sản phẩm phải thực hiện đăng ký công bố sản phẩm:</p>
                                <ul className=' '>
                                    <li className='pl-5 mb-4'>💠 Sản phẩm, nguyên liệu sản xuất, nhập khẩu chỉ dùng để sản xuất, gia công hàng xuất khẩu;</li>
                                    <li className='pl-5 mb-4'>💠 Sản phẩm, nguyên liệu sản xuất, nhập khẩu phục vụ cho việc sản xuất nội bộ của tổ chức, cá nhân không tiêu thụ tại thị trường trong nước.</li>
                                </ul>

                                <p className='text-base/7 font-bold text-gray-700 my-4'>Sản phẩm phải thực hiện đăng ký công bố sản phẩm:</p>
                                <ul>
                                    <li className='pl-5 mb-4'>💠 Thực phẩm bảo vệ sức khỏe, thực phẩm dinh dưỡng y học, thực phẩm dùng cho chế độ ăn đặc biệt.</li>
                                    <li className='pl-5 mb-4'>💠 Sản phẩm dinh dưỡng dùng cho trẻ đến 36 tháng tuổi.</li>
                                    <li className='pl-5 mb-4'>💠 Phụ gia thực phẩm hỗn hợp có công dụng mới, phụ gia thực phẩm không thuộc trong danh mục phụ gia được phép sử dụng trong thực phẩm hoặc không đúng đối tượng sử dụng do Bộ Y tế quy định.</li>
                                </ul>

                                <p className='text-base/7 font-bold text-gray-700 my-4'>Sản phẩm thực hiện thủ tục tự công bố:</p>
                                <ul>
                                    <li className='pl-5 mb-4'>💠 Thực phẩm đã qua chế biến bao gói sẵn;</li>
                                    <li className='pl-5 mb-4'>💠 Phụ gia thực phẩm;</li>
                                    <li className='pl-5 mb-4'>💠 Chất hỗ trợ chế biến thực phẩm;</li>
                                    <li className='pl-5 mb-4'>💠 Dụng cụ chứa, đựng thực phẩm;</li>
                                    <li className='pl-5 mb-4'>💠 Vật liệu bao gói tiếp xúc trực tiếp với thực phẩm.</li>
                                </ul>

                                <p>Đây là danh mục sản phẩm tự công bố cần thực hiện với cơ quan có thẩm quyền trước khi làm thủ tục thông quan (đối với hàng nhập khẩu), bán hàng (đối với sản phẩm trong nước).</p>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Hồ sơ khi doanh nghiệp tự công bố chất lượng sản phẩm</h2>
                                <ul className='mt-4'>
                                    <li className='pl-5 mb-4'>💠 Bản tự công bố sản phẩm</li>
                                    <li className='pl-5 mb-4'>💠 Phiếu kết quả kiểm nghiệm an toàn thực phẩm của sản phẩm trong thời hạn 12 tháng tính đến ngày nộp hồ sơ.</li>
                                    <li className='pl-5 mb-4'>💠 Nhãn sản phẩm hoặc mẫu nhãn sản phẩm dự kiến;</li>
                                    <li className='pl-5 mb-4'>💠 Giấy chứng nhận cơ sở đủ điều kiện về an toàn thực phẩm hoặc Giấy chứng nhận có giá trị tương đương.</li>
                                </ul>
                                <Image className='mt-2' src='/images/ho-so-tu-cong-bo-san-pham-8_1629867132.jpg ' alt='section1' layout='responsive' width={200} height={200} />
                                <Image className='mt-2' src='/images/ho-so-tu-cong-bo-san-pham-7_1629867134.jpg' alt='section1' layout='responsive' width={200} height={200} />

                                <p className='text-neutral-700 mt-4'>Khi kê khai các thông tin trong bản tự công bố chất lượng sản phẩm, doanh nghiệp cần chú ý:</p>

                                <ul className='mt-2'>
                                    <li className='text-neutral-700'><strong>Kê khai thông tin sản phẩm:</strong>
                                        <ul className='text-neutral-700'>
                                            <li className='pl-5 mt-4'>💠 Cần thống nhất kê khai tên sản phẩm trong toàn bộ hồ sơ.</li>
                                            <li className='pl-5 mt-4'>💠 Khi kê khai thành phần, cần chú ý kê khai từng loại nguyên liệu đúng với thực tế sản xuất. Nếu có thành phần nguyên liệu là đa chất, phụ gia thực phẩm hay phẩm màu thực phẩm, sẽ phải có hồ sơ nguồn gốc rõ ràng.</li>
                                            <li className='pl-5 mt-4'>💠 Thời gian sử dụng không bắt buộc khi kê khai, nhưng nếu đã kê khai thì phải kể từ ngày sản xuất đến khi hết hạn sử dụng.</li>
                                            <li className='pl-5 mt-4'>💠 Kê khai phần bảo quản phải đúng với điều kiện bảo quản thực tế để giữ sản phẩm tốt hơn.</li>
                                            <li className='pl-5 mt-4'>💠 Phần quy cách đóng gói và chất liệu bao bì phải khai báo đúng thực tế, bao bì sử dụng chất liệu gì.</li>
                                            <li className='pl-5 mt-4'>💠 Tùy vào sản phẩm ở dạng rắn, lỏng hay sệt, cần kê khai khối lượng tịnh hoặc thể tích đúng với thực tế hoặc thể tích thực ở 20 độ C.</li>
                                        </ul>
                                    </li>
                                    <li className='mt-2'><strong>Kê khai nhãn và yêu cầu về an toàn thực phẩm:</strong>
                                        <ul>
                                            <li className='text-neutral-700 mt-4 pl-5'>💠 Kê khai nhãn theo các phần hướng dẫn phía trên.</li>
                                            <li className='text-neutral-700 mt-4 pl-5'>💠 An toàn thực phẩm: cần thiết lập các quy chuẩn kỹ thuật đúng bản chất của từng loại sản phẩm, quy định trong quyết định 46, QCVN 8-2, QCVN 8-1, QCVN 6-2, QCVN 9-1. Sau đó, đối chiếu kết quả kiểm nghiệm của sản phẩm với giới hạn trong quy chuẩn.</li>
                                        </ul>
                                    </li>
                                </ul>

                                <h2 className="text-xl font-bold text-indigo-600 uppercase mt-4">Các trình tự cần thực hiện khi tự công bố sản phẩm:</h2>
                                <Image className='mt-2' src='/images/ho-so-tu-cong-bo-san-pham-1_1629867128.jpg' alt='section1' layout='responsive' width={200} height={200} />
                                <ul>
                                    <li className='pl-5 mt-4'><strong>Bước 1:</strong> Chuẩn bị các thông tin, giấy tờ cần thiết để tự công bố sản phẩm.
                                        <ul>
                                            <li className='pl-5 mt-4'>💠 Chuẩn bị các thông tin về sản phẩm công bố, bao gồm tên sản phẩm, nhãn sản phẩm, hạn sử dụng, các thông tin cảnh báo hay quy cách đóng gói.</li>
                                            <li className='pl-5 mt-4'>💠 Lập chỉ tiêu công bố và kiểm nghiệm sản phẩm.</li>
                                            <li className='pl-5 mt-4'>💠 Làm nhãn sản phẩm; dịch nhãn, làm nhãn phụ (đối với hàng nhập khẩu).</li>
                                        </ul>
                                    </li>
                                    <li className='pl-5 mt-4'><strong>Bước 2:</strong> Chuẩn bị hồ sơ tự công bố sản phẩm.
                                        <ul>
                                            <li className='pl-5 mt-4'>💠 Chuẩn bị hồ sơ đầy đủ đã được liệt kê ở phần trên.</li>
                                        </ul>
                                    </li>
                                    <li className='pl-5 mt-4'><strong>Bước 3:</strong> Nộp hồ sơ tự công bố sản phẩm.
                                        <ul>
                                            <li className='pl-5 mt-4'>💠 Nộp hồ sơ tự công bố sản phẩm gồm bản tự công bố và kết quả kiểm nghiệm, trực tiếp đến Ban quản lý an toàn thực phẩm hoặc qua đường bưu điện.</li>
                                            <li className='pl-5 mt-4'>💠 Còn 1 bản tổ chức, cá nhân tự công bố sản phẩm trên phương tiện thông tin đại chúng hoặc trang thông tin điện tử của mình hoặc niêm yết công khai tại trụ sở của tổ chức, cá nhân.</li>
                                        </ul>
                                    </li>
                                </ul>

                                <h2 className="text-xl font-bold text-indigo-600 uppercase mt-4">Một số lưu ý khi tự công bố sản phẩm:</h2>
                                <ul>
                                    <li className='pl-5 mt-4'>💠 Các tài liệu trong hồ sơ tự công bố chất lượng sản phẩm bắt buộc thể hiện bằng tiếng Việt. Nếu có tài liệu bằng tiếng nước ngoài, doanh nghiệp phải dịch sang tiếng Việt và được công chứng.</li>
                                    <li className='pl-5 mt-4'>💠 Nếu doanh nghiệp có từ 2 cơ sở sản xuất trở lên cùng sản xuất một sản phẩm, chỉ cần nộp hồ sơ tại một cơ quan quản lý nhà nước ở địa phương có cơ sở sản xuất do doanh nghiệp lựa chọn.</li>
                                    <li className='pl-5 mt-4'>💠 Nếu có bất kỳ sự thay đổi nào về tên sản phẩm, thành phần hay xuất xứ, doanh nghiệp phải tự công bố lại sản phẩm và gửi thông báo bằng văn bản đến các cơ quan nhà nước có thẩm quyền.</li>
                                </ul>

                                <h2 className="text-xl font-bold text-indigo-600 uppercase mt-4">Các câu hỏi thường gặp liên quan đến thủ tục tự công bố sản phẩm:</h2>
                                <ul>
                                    <li className='pl-5 mt-4'><strong>💠 Đối với sản phẩm thực phẩm nhập khẩu, đơn vị nào phải thực hiện công bố sản phẩm?</strong> Đơn vị chịu trách nhiệm về sản phẩm nhập khẩu sẽ có trách nhiệm thực hiện thủ tục tự công bố trước khi sản phẩm được thông quan.</li>
                                    <li className='pl-5 mt-4'><strong>💠 Sản phẩm nhập khẩu không dùng để kinh doanh có cần thực hiện thủ tục tự công bố không?</strong> Sản phẩm này thuộc loại được miễn thủ tục tự công bố.</li>
                                    <li className='pl-5 mt-4'><strong>💠 Các chất phụ gia thực phẩm có cần thực hiện thủ tục tự công bố không?</strong> Chất phụ gia được phép sử dụng cần thực hiện thủ tục tự công bố trước khi phân phối.</li>
                                    <li className='pl-5 mt-4'><strong>💠 Có cần dịch nhãn sản phẩm nhập khẩu không?</strong> Tất cả tài liệu trong hồ sơ tự công bố phải bằng tiếng Việt, bao gồm nhãn hàng hóa nhập khẩu.</li>
                                    <li className='pl-5 mt-4'><strong>💠 Doanh nghiệp muốn thay đổi tên sản phẩm có cần tự công bố lại không?</strong> Nếu có thay đổi về tên sản phẩm hay thành phần, doanh nghiệp phải tự công bố lại.</li>
                                    <li className='pl-5 mt-4'><strong>💠 Nếu không thực hiện tự công bố, doanh nghiệp sẽ bị xử phạt như thế nào?</strong> Không thực hiện tự công bố sẽ bị xử phạt từ 15.000.000 đồng đến 20.000.000 đồng.</li>
                                </ul>

                                <p className='pl-5 mt-4'>Trên đây là những thông tin cần thiết khi doanh nghiệp thực hiện thủ tục tự công bố sản phẩm. Nếu cần thêm hỗ trợ, bạn có thể liên hệ với Thành lập doanh nghiệp qua:</p>
                                <ul>
                                    <li className='pl-5 mt-4'>Hotline: 078.725.4444</li>
                                    <li className='pl-5 mt-4'>Email: thanhlapdoanhnghiep@gmail.com</li>
                                    <li className='pl-5 mt-4'>Website: <a href="https://www.thanhlapdoanhnghiep.ai.vn/">thanhlapdoanhnghiep.ai.vn</a></li>
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

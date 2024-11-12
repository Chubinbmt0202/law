
import React from 'react';
import Image from 'next/image';
import Section11 from '@/app/components/section11';
import Banner14 from '@/app/components/banner14';

export default function Hoachat() {
    return (
        <section className="py-16 bg-white md:mt-1">
            <Banner14 />
            <section className="py-8 bg-white mt-8 md:mt-1">
                <div className="relative max-w-7xl mx-auto isolate overflow-hidden bg-white py-6 sm:py-6 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                    </div>

                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2">
                            <h2 className="mt-2 mb-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xls">Thủ tục cấp giấy phép kinh doanh hóa chất Bảng 2, hóa chất Bảng 3 từ 19/5/2024</h2>

                            <div className='border p-5 rounded-lg border-orange-300 mb-4'>
                                <p className='mb-2'><strong>Nội dung gồm:</strong> </p>
                                <ul>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Giấy chứng nhận xuất xứ hàng hóa là gì?</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Cơ quan có thẩm quyền từ chối cấp Giấy chứng nhận xuất xứ hàng hóa trong trường hợp nào?</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Cơ quan có thẩm quyền thu hồi Giấy chứng nhận xuất xứ hàng hóa trong trường hợp nào?</li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Giấy chứng nhận xuất xứ hàng hóa là gì?</h2>
                                <p className="text-base/7 text-gray-700 mt-4">Căn cứ tại khoản 4 Điều 3 Nghị định 31/2018/NĐ-CP định nghĩa Giấy chứng nhận xuất xứ hàng hóa như sau:</p>
                                <p className="text-base/7 text-gray-700 mt-4"><strong>Giấy chứng nhận xuất xứ hàng hóa</strong> là văn bản hoặc các hình thức có giá trị pháp lý tương đương do cơ quan, tổ chức thuộc nước, nhóm nước, hoặc vùng lãnh thổ xuất khẩu hàng hóa cấp dựa trên quy định và yêu cầu liên quan về xuất xứ, chỉ rõ nguồn gốc xuất xứ của hàng hóa đó.</p>

                            </div>

                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Cơ quan có thẩm quyền từ chối cấp Giấy chứng nhận xuất xứ hàng hóa trong trường hợp nào?</h2>
                                <p className="text-base/7 text-gray-700 mt-4">Căn cứ tại Điều 21 Nghị định 31/2018/NĐ-CP quy định như sau:</p>

                                <div className="mt-8 border p-5 rounded-lg border-orange-300 mb-4">
                                    <h2 className=" font-bold text-indigo-600 uppercase">Từ chối cấp Giấy chứng nhận xuất xứ hàng hóa</h2>
                                    <p className="text-base/7 text-gray-700 mt-4">Cơ quan, tổ chức cấp Giấy chứng nhận xuất xứ hàng hóa từ chối cấp Giấy chứng nhận xuất xứ hàng hóa bằng văn bản hoặc thông báo tại Hệ thống quản lý và cấp chứng nhận xuất xứ điện tử của Bộ Công Thương tại địa chỉ www.ecosys.gov.vn hoặc trang điện tử khác của các cơ quan, tổ chức cấp Giấy chứng nhận xuất xứ hàng hóa được Bộ Công Thương ủy quyền và nêu rõ lý do từ chối trong những trường hợp sau:</p>
                                    <ul className=" pl-5 mb-4">
                                        <li className='text-gray-700 mt-2'>🔹 Thương nhân đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa chưa thực hiện việc đăng ký hồ sơ thương nhân theo quy định tại Điều 13 Nghị định này.</li>
                                        <li className='text-gray-700 mt-2'>🔹 Hồ sơ, quy trình đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa không tuân thủ theo quy định tại Điều 15 và Điều 16 Nghị định này.</li>
                                        <li className='text-gray-700 mt-2'>🔹 Hồ sơ đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa có mâu thuẫn về nội dung.</li>
                                        <li className='text-gray-700 mt-2'>🔹 Giấy chứng nhận xuất xứ hàng hóa không được khai bằng tiếng Anh, khai bằng mực màu đỏ, viết tay, bị tẩy xóa, chữ hoặc các dữ liệu thông tin mờ không đọc được, in bằng nhiều màu mực khác nhau.</li>
                                        <li className='text-gray-700 mt-2'>🔹 Hàng hóa không có xuất xứ hoặc không đáp ứng quy tắc xuất xứ.</li>
                                        <li className='text-gray-700 mt-2'>🔹 Thương nhân đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa có gian lận về xuất xứ từ lần cấp Giấy chứng nhận xuất xứ hàng hóa trước đó và vụ việc chưa được giải quyết xong.</li>
                                        <li className='text-gray-700 mt-2'>🔹 Thương nhân đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa không cung cấp đầy đủ hồ sơ, chứng từ, thông tin và tài liệu liên quan để chứng minh xuất xứ hàng hóa hoặc không hợp tác trong việc xác minh xuất xứ hàng hóa khi cơ quan, tổ chức có thẩm quyền tiến hành kiểm tra, xác minh xuất xứ hàng hóa.</li>
                                    </ul>
                                </div>

                                <p className="text-base/7 text-gray-700 mt-4">Như vậy theo quy định trên từ chối cấp Giấy chứng nhận xuất xứ hàng hóa trong một số trường hợp sau đây:</p>
                                <div className="">

                                    <ul className=" pl-5 mb-4">
                                        <li className='text-gray-700 mt-3'>🔹 Thứ nhất, thương nhân đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa chưa thực hiện việc đăng ký hồ sơ thương nhân theo quy định tại Điều 13 Nghị định 31/2018/NĐ-CP.</li>
                                        <li className='text-gray-700 mt-3'>🔹 Thứ hai, hồ sơ, quy trình đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa không tuân thủ theo quy định tại Điều 15 và Điều 16 Nghị định 31/2018/NĐ-CP.</li>
                                        <li className='text-gray-700 mt-3'>🔹 Thứ ba, hồ sơ đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa có mâu thuẫn về nội dung.</li>
                                        <li className='text-gray-700 mt-3'>🔹 Thứ tư, Giấy chứng nhận xuất xứ hàng hóa không được khai bằng tiếng Anh, khai bằng mực màu đỏ, viết tay, bị tẩy xóa, chữ hoặc các dữ liệu thông tin mờ không đọc được, in bằng nhiều màu mực khác nhau.</li>
                                        <li className='text-gray-700 mt-3'>🔹 Thứ năm, hàng hóa không có xuất xứ hoặc không đáp ứng quy tắc xuất xứ.</li>
                                        <li className='text-gray-700 mt-3'>🔹 Thứ sáu, thương nhân đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa có gian lận về xuất xứ từ lần cấp Giấy chứng nhận xuất xứ hàng hóa trước đó và vụ việc chưa được giải quyết xong.</li>
                                        <li className='text-gray-700 mt-3'>🔹 Thứ bảy, thương nhân đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa không cung cấp đầy đủ hồ sơ, chứng từ, thông tin và tài liệu liên quan để chứng minh xuất xứ hàng hóa hoặc không hợp tác trong việc xác minh xuất xứ hàng hóa khi cơ quan, tổ chức có thẩm quyền tiến hành kiểm tra, xác minh xuất xứ hàng hóa.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Cơ quan có thẩm quyền thu hồi Giấy chứng nhận xuất xứ hàng hóa trong trường hợp nào?</h2>
                                <p className="text-base/7 text-gray-700 my-4">Căn cứ tại khoản 1 Điều 22 Nghị định 31/2018/NĐ-CP quy định như sau:</p>

                                <div className='border p-5 rounded-lg border-orange-300 mb-4'>
                                    <h2 className=" font-bold text-indigo-600 uppercase">Thu hồi Giấy chứng nhận xuất xứ hàng hóa đã cấp</h2>
                                    <p className="text-base/7 text-gray-700 mt-4">1. Cơ quan, tổ chức cấp Giấy chứng nhận xuất xứ hàng hóa thu hồi Giấy chứng nhận xuất xứ hàng hóa đã cấp trong những trường hợp sau:</p>
                                    <ul className=" pl-5 mb-4">
                                        <li className='text-gray-700'>🔹 Giấy chứng nhận xuất xứ hàng hóa đã cấp không phù hợp các quy định về xuất xứ;</li>
                                        <li className='text-gray-700'>🔹 Giấy chứng nhận xuất xứ hàng hóa đã cấp trùng số tham chiếu;</li>
                                        <li className='text-gray-700'>🔹 Thương nhân đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa không nộp bổ sung chứng từ sau thời hạn quy định tại Khoản 3 Điều 15 Nghị định này;</li>
                                        <li className='text-gray-700'>🔹 Thương nhân đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa giả mạo chứng từ trong hồ sơ đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa;</li>
                                        <li className='text-gray-700'>🔹 Thương nhân đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa thông báo bằng văn bản đề nghị hủy bỏ Giấy chứng nhận xuất xứ hàng hóa đã cấp.</li>
                                    </ul>
                                    <p className="text-base/7 text-gray-700 mt-4">2. Trường hợp không thể thu hồi được Giấy chứng nhận xuất xứ hàng hóa đã cấp, cơ quan, tổ chức cấp Giấy chứng nhận xuất xứ hàng hóa thông báo bằng văn bản cho Bộ Công Thương và cơ quan có thẩm quyền của nước nhập khẩu về việc hủy bỏ Giấy chứng nhận xuất xứ hàng hóa đã cấp, đồng thời nêu rõ lý do.</p>

                                </div>
                                <p className="text-base/7 text-gray-700 mt-4">Như vậy theo quy định trên cơ quan có thẩm quyền thu hồi Giấy chứng nhận xuất xứ hàng hóa trong trường hợp sau đây:</p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mt-2'>🔹 Thứ nhất, Giấy chứng nhận xuất xứ hàng hóa đã cấp không phù hợp các quy định về xuất xứ.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Thứ hai, Giấy chứng nhận xuất xứ hàng hóa đã cấp trùng số tham chiếu.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Thứ ba, thương nhân đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa không nộp bổ sung chứng từ sau thời hạn quy định tại Khoản 3 Điều 15 Nghị định 31/2018/NĐ-CP.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Thứ tư, thương nhân đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa giả mạo chứng từ trong hồ sơ đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Thứ năm, thương nhân đề nghị cấp Giấy chứng nhận xuất xứ hàng hóa thông báo bằng văn bản đề nghị hủy bỏ Giấy chứng nhận xuất xứ hàng hóa đã cấp.</li>
                                </ul>
                            </div>

                            <p className="text-base/7 text-gray-700 mt-4">Gọi cho chúng tôi theo số <strong>0984 477 711 (Miền Bắc)</strong> , <strong>0903 003 779 (Miền Trung)</strong> hoặc <strong>0938 268 123 (Miền Nam)</strong> để được hỗ trợ.</p>
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

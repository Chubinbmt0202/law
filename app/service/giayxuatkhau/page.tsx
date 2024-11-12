
import React from 'react';
import Image from 'next/image';
import Section11 from '@/app/components/section11';
import Banner10 from '@/app/components/banner10';

export default function Giayxuatkhau() {
    return (
        <section className="py-16 bg-white md:mt-1">
            <Banner10 />
            <section className="py-8 bg-white mt-8 md:mt-1">
                <div className="relative max-w-7xl mx-auto isolate overflow-hidden bg-white py-6 sm:py-6 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                    </div>

                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2">
                            <h2 className="mt-2 mb-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xls">Quy trình cấp giấy phép xuất nhập khẩu thực hiện thế nào?</h2>

                            <div className='border p-5 rounded-lg border-orange-300 mb-4'>
                                <p className='mb-2'><strong>Nội dung gồm:</strong> </p>
                                <ul>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Hồ sơ cấp giấy phép xuất nhập khẩu gồm những giấy tờ gì?
                                        <ul>
                                            <li className='cursor-pointer ml-4 mt-1 c mb-1 hover:text-orange-500'>💠Đối với hàng hóa xuất khẩu, nhập khẩu theo giấy phép, theo điều kiện</li>
                                            <li className='cursor-pointer ml-4 mt-1 text-neutral-700 mb-1 hover:text-orange-500'>💠Đối với một số mặt hàng xuất khẩu, nhập khẩu theo quy định riêng</li>
                                            <li className='cursor-pointer ml-4 mt-1 text-neutral-700 mb-1 hover:text-orange-500'>💠Các trường hợp ngoại lệ</li>
                                        </ul>
                                    </li>

                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Quy trình cấp giấy phép xuất nhập khẩu thực hiện thế nào?</li>

                                </ul>
                            </div>

                            <h2 className="text-xl font-bold text-indigo-600 uppercase">Hồ sơ cấp giấy phép xuất nhập khẩu gồm những giấy tờ gì?</h2>
                            <p className='mt-2 text-neutral-700'>Theo quy định tại Khoản 1 Điều 9 Nghị định 69/2018/NĐ-CP, hồ sơ cấp giấy phép xuất nhập khẩu bao gồm:</p>
                            <ul>
                                <li className='pl-5 mt-4 text-neutral-700 '>💠 <strong>Văn bản đề nghị cấp giấy phép của thương nhân:</strong> 01 bản chính.</li>
                                <li className='pl-5 mt-4 text-neutral-700 '>💠 <strong>Giấy chứng nhận đầu tư hoặc giấy chứng nhận đăng ký kinh doanh, giấy chứng nhận đăng ký doanh nghiệp:</strong> 01 bản sao có đóng dấu của thương nhân.</li>
                                <li className='pl-5 mt-4 text-neutral-700 '>💠 <strong>Các giấy tờ, tài liệu liên quan:</strong> theo quy định của pháp luật.</li>
                            </ul>

                            <p className='mt-4 text-neutral-700'><strong>Lưu ý:</strong></p>
                            <ul>
                                <li className='pl-5 mt-4 text-neutral-700'>Đối với hàng hóa xuất khẩu, nhập khẩu theo giấy phép, các bộ, cơ quan ngang bộ sẽ ban hành quy định chi tiết về việc cấp giấy phép.</li>
                                <li className='pl-5 mt-4 text-neutral-700'>Hàng hóa có ảnh hưởng đến quốc phòng, an ninh cần có giấy phép của Bộ Công Thương, dựa trên ý kiến của Bộ Quốc phòng và Bộ Công an.</li>
                                <li className='pl-5 mt-4 text-neutral-700'>Bộ trưởng Bộ Công Thương có thể quyết định cho phép xuất khẩu, nhập khẩu hàng hóa đã tạm ngừng xuất khẩu, nhập khẩu cho các mục đích đặc biệt.</li>
                            </ul>

                            <h2 className="text-xl font-bold text-indigo-600 uppercase mt-4">Đối với hàng hóa xuất khẩu, nhập khẩu theo giấy phép, theo điều kiện</h2>
                            <p className='mt-2 text-neutral-700'>Căn cứ Phụ lục III Nghị định 69/2018/NĐ-CP, các bộ, cơ quan ngang bộ ban hành hoặc trình cơ quan có thẩm quyền ban hành quy định chi tiết về việc cấp giấy phép xuất khẩu, nhập khẩu phù hợp với quy định pháp luật và thực hiện việc cấp phép theo quy định.</p>

                            <h2 className="text-xl font-bold text-indigo-600 uppercase mt-4">Đối với một số mặt hàng xuất khẩu, nhập khẩu theo quy định riêng</h2>
                            <p className='mt-2 text-neutral-700'>Việc nhập khẩu hàng hóa có ảnh hưởng trực tiếp đến quốc phòng, an ninh thuộc Danh mục quy định tại Phụ lục IV Nghị định 69/2018/NĐ-CP nhưng không phục vụ mục đích quốc phòng, an ninh thực hiện theo giấy phép của Bộ Công Thương trên cơ sở ý kiến của Bộ Quốc phòng, Bộ Công an.</p>

                            <h2 className="text-xl font-bold text-indigo-600 uppercase mt-4">Các trường hợp ngoại lệ</h2>

                            <p className='mt-2 text-neutral-700'>Bộ trưởng Bộ Công Thương quyết định cho phép xuất khẩu, nhập khẩu hàng hóa đã có quyết định tạm ngừng xuất khẩu, tạm ngừng nhập khẩu nhằm phục vụ mục đích đặc dụng, bảo hành, phân tích, kiểm nghiệm, nghiên cứu khoa học, y tế, sản xuất dược phẩm, bảo vệ quốc phòng, an ninh, trên cơ sở lấy ý kiến hoặc theo đề xuất của Bộ, cơ quan ngang Bộ có liên quan, trừ trường hợp pháp luật về thú y, bảo vệ và kiểm dịch thực vật có quy định khác. (Theo Khoản 1 Điều 14 Luật Quản lý ngoại thương 2017)</p>
                            <p className='mt-2 text-neutral-700'>Như vậy, theo quy định trên thương nhân cần nộp đầy đủ hồ sơ và tuân thủ các quy định liên quan đến từng loại hàng hóa xuất nhập khẩu để tránh việc làm sai quy định và tốn nhiều thời gian hơn.</p>

                            <h2 className="text-xl font-bold text-indigo-600 uppercase mt-4">Quy trình cấp giấy phép xuất nhập khẩu thực hiện thế nào?</h2>
                            <p className='mt-2 text-neutral-700'>Theo khoản 2 Điều 9 Nghị định 69/2018/NĐ-CP quy định quy trình cấp giấy phép xuất nhập khẩu thực hiện như sau:</p>
                            <ul>
                                <li className='pl-5 mt-4 text-neutral-700'>Thương nhân gửi 1 bộ hồ sơ theo quy định tại Khoản 1 Điều 9 Nghị định 69/2018/NĐ-CP trực tiếp hoặc qua đường bưu điện hoặc trực tuyến (nếu có áp dụng) đến bộ, cơ quan ngang bộ có thẩm quyền cấp giấy phép.</li>
                                <li className='pl-5 mt-4 text-neutral-700'>Trường hợp hồ sơ chưa đầy đủ, đúng quy định hoặc cần bổ sung tài liệu giải trình, trong thời hạn 03 ngày làm việc, kể từ ngày tiếp nhận hồ sơ, bộ, cơ quan ngang bộ thông báo để thương nhân hoàn thiện hồ sơ.</li>
                                <li className='pl-5 mt-4 text-neutral-700'>Trong thời hạn tối đa 10 ngày làm việc, kể từ ngày nhận được hồ sơ đầy đủ, đúng quy định, bộ, cơ quan ngang bộ có văn bản trả lời thương nhân.</li>
                                <li className='pl-5 mt-4 text-neutral-700'>Trường hợp cần trao đổi ý kiến với các cơ quan liên quan, thời hạn xử lý hồ sơ tính từ thời điểm nhận được ý kiến trả lời của cơ quan liên quan.</li>
                            </ul>

                            <p className='mt-4 text-neutral-700'><strong>Lưu ý:</strong></p>
                            <ul>
                                <li className='pl-5 mt-4 text-neutral-700'>Thương nhân chỉ phải nộp các giấy tờ liên quan đến nội dung cần sửa đổi, bổ sung.</li>
                                <li className='pl-5 mt-4 text-neutral-700'>Thời gian cấp sửa đổi, bổ sung, cấp lại không dài hơn thời gian cấp giấy phép xuất nhập khẩu.</li>
                                <li className='pl-5 mt-4 text-neutral-700'>Trường hợp từ chối sửa đổi, bổ sung, cấp lại giấy phép, bộ, cơ quan ngang bộ có văn bản trả lời, nêu rõ lý do.</li>
                            </ul>

                            <p className='mt-4 text-neutral-700'>Quy trình cấp giấy phép xuất nhập khẩu có thể từ 03 đến 10 ngày làm việc, nhưng có thể kéo dài hơn nếu cần trao đổi ý kiến với các cơ quan khác.</p>

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

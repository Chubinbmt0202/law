
import React from 'react';
import Image from 'next/image';
import Section11 from '@/app/components/section11';
import Banner2 from '@/app/components/banner2';

export default function Hoachat() {
    return (
        <section className="py-16 bg-white md:mt-1">
            <Banner2 />
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
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Thành phần, số lượng hồ sơ đề nghị cấp giấy phép kinh doanh hóa chất Bảng 2, hóa chất Bảng 3 từ 19/5/2024</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Trình tự thực hiện đề nghị cấp giấy phép kinh doanh hóa chất Bảng 2, hóa chất Bảng 3 từ 19/5/2024</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Cách thức thực hiện</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Thời hạn giải quyết</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Đối tượng thực hiện thủ tục hành chính</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Cơ quan thực hiện thủ tục hành chính</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Phí, Lệ phí</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Kết quả thực hiện thủ tục hành chính</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Tên mẫu đơn, mẫu tờ khai</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Yêu cầu, điều kiện thực hiện thủ tục hành chính</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Căn cứ pháp lý của thủ tục hành chính</li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Thành phần, số lượng hồ sơ đề nghị cấp giấy phép kinh doanh hóa chất Bảng 2, hóa chất Bảng 3 từ 19/5/2024</h2>
                                <p className="text-base/7 text-gray-700 mt-4">Tổ chức, cá nhân đề nghị cấp Giấy phép kinh doanh hóa chất Bảng 2, hóa chất Bảng 3 từ ngày 19/5/2024 nộp 01 bộ hồ sơ bao gồm:</p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mt-2'>🔹 Văn bản đề nghị cấp Giấy phép kinh doanh hóa chất Bảng được quy định tại (Mẫu số 01 Phụ lục II ban hành kèm theo Nghị định 33/2024/NĐ-CP).</li>
                                    <li className='text-gray-700 mt-2'>🔹 Bản kê khai các điểm kinh doanh.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Bản sao Quyết định phê duyệt hoặc văn bản xác nhận các tài liệu liên quan đến bảo vệ môi trường theo quy định của pháp luật được cơ quan quản lý nhà nước có thẩm quyền ban hành.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Bản sao văn bản chấp thuận kết quả nghiệm thu về phòng cháy và chữa cháy của cơ quan Cảnh sát phòng cháy chữa cháy đối với từng kho chứa hóa chất thuộc đối tượng phải thẩm duyệt thiết kế về phòng cháy và chữa cháy.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Bản sao Biên bản kiểm tra an toàn về phòng cháy và chữa cháy hoặc văn bản của cơ quan có thẩm quyền chứng minh đảm bảo các điều kiện an toàn về phòng cháy và chữa cháy đối với từng kho chứa hóa chất không thuộc đối tượng bắt buộc phải thẩm duyệt thiết kế về phòng cháy và chữa cháy.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Bản thuyết minh về điều kiện kinh doanh hóa chất Bảng được quy định tại Mẫu số 05 Phụ lục II ban hành kèm theo Nghị định 33/2024/NĐ-CP; bản sao giấy tờ chứng minh quyền sử dụng đối với thửa đất xây dựng kho chứa hoặc Hợp đồng thuê kho đối với trường hợp thuê kho lưu trữ hoặc Hợp đồng hay thỏa thuận mua bán hóa chất trong trường hợp sử dụng kho của tổ chức, cá nhân mua hoặc bán hóa chất.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Bản kê khai thiết bị kỹ thuật, trang thiết bị phòng hộ lao động và an toàn của từng điểm kinh doanh hóa chất.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Bản sao Bằng trung cấp trở lên chuyên ngành hóa chất của người phụ trách về an toàn hóa chất.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Bản sao Quyết định công nhận kết quả kiểm tra huấn luyện an toàn hóa chất theo quy định tại Điều 34 Nghị định 113/2014/NĐ-CP, được sửa đổi, bổ sung tại Nghị định 82/2022/NĐ-CP.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Bản cam kết kinh doanh hóa chất Bảng 2, hóa chất Bảng 3 cho các mục đích không bị cấm quy định tại Điều 3 Nghị định 33/2024/NĐ-CP.</li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Trình tự thực hiện đề nghị cấp giấy phép kinh doanh hóa chất Bảng 2, hóa chất Bảng 3 từ 19/5/2024</h2>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mt-2'>🔹 Tổ chức, cá nhân đề nghị cấp Giấy phép lập 01 bộ hồ sơ tại Mục 1 nêu trên, trong thời hạn 16 ngày làm việc, kể từ ngày nhận đủ hồ sơ hợp lệ quy định tại khoản 2, khoản 3 và khoản 4 Điều 12 Nghị định 33/2024/NĐ-CP, Bộ Công Thương có trách nhiệm xem xét, thẩm định hồ sơ, kiểm tra điều kiện thực tế và cấp Giấy phép cho tổ chức, cá nhân theo mẫu tại Phụ lục II của Nghị định 33/2024/NĐ-CP. Trường hợp không cấp Giấy phép, Bộ Công Thương có văn bản trả lời, nêu rõ lý do.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Trường hợp hồ sơ chưa đầy đủ và hợp lệ, trong vòng 03 ngày kể từ ngày tiếp nhận hồ sơ, Bộ Công Thương thông báo để tổ chức, cá nhân bổ sung, hoàn chỉnh hồ sơ. Thời gian hoàn chỉnh hồ sơ không tính vào thời gian cấp phép quy định tại điểm c khoản 5 Điều 12 Nghị định 33/2024/NĐ-CP.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Trường hợp sản xuất hóa chất, kinh doanh Bảng 2, hóa chất Bảng 3 cho các mục đích chuyên ngành (y tế, dược phẩm, nông nghiệp, an ninh, quốc phòng), khi cần thiết, Bộ Công Thương lấy ý kiến bằng văn bản của Bộ quản lý nhà nước chuyên ngành trước khi cấp phép. Thời gian lấy ý kiến tối đa 05 ngày làm việc, không kể thời gian gửi và nhận văn bản và không tính vào thời gian cấp phép quy định tại Điều 12 Nghị định 33/2024/NĐ-CP. Quá thời hạn trên, nếu Bộ quản lý nhà nước chuyên ngành không có ý kiến góp ý bằng văn bản thì được coi là đồng ý với đề nghị cấp phép của tổ chức, cá nhân.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Sau khi cấp phép, Bộ Công Thương gửi 01 bản Giấy phép về Sở Công Thương nơi tổ chức, cá nhân đặt trụ sở chính để phối hợp theo dõi, quản lý.</li>
                                </ul>

                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Cách thức thực hiện</h2>
                                <p className="text-base/7 text-gray-700 mt-4">Tổ chức, cá nhân đề nghị cấp giấy phép kinh doanh hóa chất Bảng 2, hóa chất Bảng 3 từ ngày 19/5/2024 nộp hồ sơ theo một trong các cách thức sau đây:</p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mt-2'>🔹 Qua Bưu điện.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Qua hệ thống dịch vụ công trực tuyến.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Nộp trực tiếp tại Bộ Công Thương (Cục Hóa chất).</li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Thời hạn giải quyết</h2>
                                <p className="text-base/7 text-gray-700 mt-1 mb-3">Thời hạn giải quyết là 16 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ và 5 ngày xin ý kiến (nếu cần).</p>

                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Đối tượng thực hiện thủ tục hành chính</h2>
                                <p className="text-base/7 text-gray-700 mt-1 mb-3">Tổ chức, cá nhân kinh doanh hóa chất Bảng 2, Bảng 3 là đối tượng thực hiện thủ tục hành chính.</p>

                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Cơ quan thực hiện thủ tục hành chính</h2>
                                <p className="text-base/7 text-gray-700 mt-1 mb-3">Cơ quan thực hiện thủ tục hành chính là Cục Hóa chất - Bộ Công Thương.</p>

                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Phí, Lệ phí</h2>
                                <p className="text-base/7 text-gray-700 mt-1 mb-3">Về phí, lệ phí thực hiện theo Thông tư 08/2018/TT-BTC quy định mức thu, chế độ thu, nộp, quản lý và sử dụng phí trong hoạt động hóa chất.</p>

                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Kết quả thực hiện thủ tục hành chính</h2>
                                <p className="text-base/7 text-gray-700 mt-1 mb-3">Sau khi thực hiện thủ tục hành chính, tổ chức, cá nhân được cấp Giấy phép kinh doanh hóa chất Bảng 2, Bảng 3.</p>

                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Tên mẫu đơn, mẫu tờ khai</h2>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mt-2'>🔹 Văn bản đề nghị cấp Giấy phép kinh doanh hóa chất Bảng được quy định tại (Mẫu số 01 Phụ lục II ban hành kèm theo Nghị định 33/2024/NĐ-CP).</li>
                                    <li className='text-gray-700 mt-2'>🔹 Bản thuyết minh về điều kiện kinh doanh hóa chất Bảng được quy định tại Mẫu số 05 Phụ lục II ban hành kèm theo Nghị định 33/2024/NĐ-CP.</li>
                                </ul>

                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Yêu cầu, điều kiện thực hiện thủ tục hành chính</h2>
                                <p className="text-base/7 text-gray-700 mt-4">Khi thực hiện đề nghị cấp Giấy phép kinh doanh hóa chất Bảng 2, hóa chất Bảng 3 từ ngày 19/5/2024 phải đáp ứng các yêu cầu, điều kiện sau đây:</p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mt-2'>🔹 Là doanh nghiệp được thành lập theo quy định của pháp luật.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Cơ sở vật chất - kỹ thuật phải đáp ứng yêu cầu trong kinh doanh theo quy định tại khoản 2 Điều 8 Nghị định 33/2024/NĐ-CP.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Có kho chứa hoặc có hợp đồng thuê kho chứa hóa chất hoặc sử dụng kho của tổ chức, cá nhân mua hoặc bán hóa chất đáp ứng được các điều kiện về bảo quản an toàn hóa chất và an toàn phòng, chống cháy nổ.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Người phụ trách về an toàn hóa chất của cơ sở kinh doanh hóa chất Bảng phải có trình độ trung cấp trở lên chuyên ngành hóa chất.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Các đối tượng thuộc quy định tại Điều 32 Nghị định 113/2014/NĐ-CP phải được huấn luyện an toàn hóa chất.</li>
                                </ul>

                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Căn cứ pháp lý của thủ tục hành chính</h2>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mt-2'>🔹 Luật Hóa chất 2007.</li>
                                    <li className='text-gray-700 mt-2'>🔹 Nghị định 33/2024/NĐ-CP.</li>
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

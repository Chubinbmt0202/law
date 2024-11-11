
import React from 'react';
import Image from 'next/image';
import Section11 from '@/app/components/section11';
import Banner2 from '@/app/components/banner2';

export default function Giayphepmoitruong() {
    return (
        <section className="py-16 bg-white md:mt-1">
            <Banner2 />
            <section className="py-8 bg-white mt-8 md:mt-1">
                <div className="relative max-w-7xl mx-auto isolate overflow-hidden bg-white py-6 sm:py-6 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                    </div>

                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2">
                            <h2 className="mt-2 mb-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xls">Giấy phép môi trường gồm những nội dung gì? Ai có thẩm quyền phê duyệt? Thủ tục cấp giấy phép môi trường thực hiện ra sao?

                            </h2>

                            <div className='border p-5 rounded-lg border-orange-300 mb-4'>
                                <p className='mb-2'><strong>Nội dung gồm:</strong> </p>
                                <ul>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Giấy phép môi trường gồm những nội dung gì?</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Thẩm quyền cấp giấy phép môi trường do ai phê duyệt?</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Hồ sơ, trình tự thủ tục cấp giấy phép môi trường cần thực hiện những gì?</li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <p className="text-xl font-bold text-indigo-600 uppercase">Giấy phép môi trường gồm những nội dung gì?</p>
                                <div className="mt-8 border p-5 rounded-lg border-orange-300 mb-4">
                                    <h2 className="text-base/7 font-bold text-gray-700 mt-2">Điều 40. Nội dung giấy phép môi trường</h2>
                                    <p className="text-base/7 text-gray-700 mt-4">1. Nội dung giấy phép môi trường gồm thông tin chung về dự án đầu tư, cơ sở, khu sản xuất kinh doanh, dịch vụ tập trung, cụm công nghiệp; nội dung cấp phép môi trường; yêu cầu về bảo vệ môi trường; thời hạn của giấy phép môi trường; nội dung khác (nếu có).</p>
                                    <p className="text-base/7 text-gray-700 mt-4">2. Nội dung cấp phép môi trường bao gồm:</p>
                                    <ul className="pl-5 mb-4">
                                        <li className='text-gray-700 mt-2'>🔹 Nguồn phát sinh nước thải; lưu lượng xả nước thải tối đa; dòng nước thải; các chất ô nhiễm và giá trị giới hạn của các chất ô nhiễm theo dòng nước thải; vị trí, phương thức xả nước thải và nguồn tiếp nhận nước thải;</li>
                                        <li className='text-gray-700 mt-2'>🔹 Nguồn phát sinh khí thải; lưu lượng xả khí thải tối đa; dòng khí thải; các chất ô nhiễm và giá trị giới hạn của các chất ô nhiễm theo dòng khí thải; vị trí, phương thức xả khí thải;</li>
                                        <li className='text-gray-700 mt-2'>🔹 Nguồn phát sinh và giá trị giới hạn đối với tiếng ồn, độ rung;</li>
                                        <li className='text-gray-700 mt-2'>🔹 Công trình, hệ thống thiết bị xử lý chất thải nguy hại; mã chất thải nguy hại và khối lượng được phép xử lý, số lượng trạm trung chuyển chất thải nguy hại, địa bàn hoạt động đối với dự án đầu tư, cơ sở thực hiện dịch vụ xử lý chất thải nguy hại;</li>
                                        <li className='text-gray-700 mt-2'>🔹 Loại, khối lượng phế liệu được phép nhập khẩu đối với dự án đầu tư, cơ sở có nhập khẩu phế liệu từ nước ngoài làm nguyên liệu sản xuất.</li>
                                    </ul>
                                    <p className="text-base/7 text-gray-700 mt-4">3. Yêu cầu về bảo vệ môi trường bao gồm:</p>
                                    <ul className="pl-5 mb-4">
                                        <li className='text-gray-700 mt-2'>🔹 Có công trình, biện pháp thu gom, xử lý nước thải, khí thải, giảm thiểu tiếng ồn, độ rung đáp ứng yêu cầu; trường hợp xả nước thải vào công trình thủy lợi phải có các yêu cầu về bảo vệ môi trường đối với nguồn nước công trình thủy lợi;</li>
                                        <li className='text-gray-700 mt-2'>🔹 Có biện pháp, hệ thống, công trình, thiết bị lưu giữ, vận chuyển, trung chuyển, sơ chế, xử lý đáp ứng yêu cầu quy trình kỹ thuật và quản lý đối với dự án đầu tư, cơ sở thực hiện dịch vụ xử lý chất thải nguy hại;</li>
                                        <li className='text-gray-700 mt-2'>🔹 Có kho, bãi lưu giữ phế liệu đáp ứng quy định; hệ thống thiết bị tái chế; phương án xử lý tạp chất; phương án tái xuất đối với dự án đầu tư, cơ sở có nhập khẩu phế liệu từ nước ngoài làm nguyên liệu sản xuất;</li>
                                        <li className='text-gray-700 mt-2'>🔹 Có kế hoạch quản lý và giám sát môi trường, kế hoạch phòng ngừa, ứng phó sự cố môi trường; trang thiết bị, công trình phòng ngừa, ứng phó sự cố môi trường, quan trắc môi trường;</li>
                                        <li className='text-gray-700 mt-2'>🔹 Quản lý chất thải rắn sinh hoạt, chất thải rắn công nghiệp thông thường, chất thải nguy hại; cải tạo, phục hồi môi trường; bồi hoàn đa dạng sinh học theo quy định của pháp luật;</li>
                                        <li className='text-gray-700 mt-2'>🔹 Yêu cầu khác về bảo vệ môi trường (nếu có).</li>
                                    </ul>
                                    <p className="text-base/7 text-gray-700 mt-4">4. Thời hạn của giấy phép môi trường được quy định như sau:</p>
                                    <ul className="pl-5 mb-4">
                                        <li className='text-gray-700 mt-2'>🔹 07 năm đối với dự án đầu tư nhóm I;</li>
                                        <li className='text-gray-700 mt-2'>🔹 07 năm đối với cơ sở sản xuất, kinh doanh, dịch vụ, khu sản xuất, kinh doanh, dịch vụ tập trung, cụm công nghiệp hoạt động trước ngày Luật này có hiệu lực thi hành có tiêu chí về môi trường như dự án đầu tư nhóm I;</li>
                                        <li className='text-gray-700 mt-2'>🔹 10 năm đối với đối tượng không thuộc quy định tại điểm a và điểm b khoản này;</li>
                                        <li className='text-gray-700 mt-2'>🔹 Thời hạn của giấy phép môi trường có thể ngắn hơn thời hạn quy định tại các điểm a, b và c khoản này theo đề nghị của chủ dự án đầu tư, cơ sở, chủ đầu tư xây dựng và kinh doanh hạ tầng khu sản xuất, kinh doanh, dịch vụ tập trung, cụm công nghiệp (sau đây gọi chung là chủ dự án đầu tư, cơ sở).</li>
                                    </ul>
                                    <p className="text-base/7 text-gray-700 mt-4">5. Bộ trưởng Bộ Tài nguyên và Môi trường ban hành mẫu giấy phép môi trường.</p>
                                </div>

                                <div className="mt-8">
                                    <h2 className="text-xl font-bold text-indigo-600 uppercase">Thẩm quyền cấp giấy phép môi trường do ai phê duyệt?</h2>
                                    <p className="text-base/7 text-gray-700 mt-4">Theo Điều 41 Luật Bảo vệ môi trường 2020 quy định về thẩm quyền cấp giấy phép môi trường:</p>
                                    <ul className=" pl-5 mb-4">
                                        <li className='text-gray-700'>🔹 Bộ Tài nguyên và Môi trường cấp giấy phép môi trường đối với các đối tượng sau đây, trừ trường hợp quy định tại khoản 2 Điều này:
                                            <ul className=" pl-5 mb-4">
                                                <li className='text-gray-700 mt-2'>🔸 Đối tượng quy định tại Điều 39 của Luật này đã được Bộ Tài nguyên và Môi trường phê duyệt kết quả thẩm định báo cáo đánh giá tác động môi trường;</li>
                                                <li className='text-gray-700 mt-2'>🔸 Đối tượng quy định tại Điều 39 của Luật này nằm trên địa bàn từ 02 đơn vị hành chính cấp tỉnh trở lên hoặc nằm trên vùng biển chưa xác định trách nhiệm quản lý hành chính của Ủy ban nhân dân cấp tỉnh; cơ sở có nhập khẩu phế liệu từ nước ngoài làm nguyên liệu sản xuất, cơ sở thực hiện dịch vụ xử lý chất thải nguy hại.</li>
                                            </ul>
                                        </li>
                                        <li className='text-gray-700 mt-2'>🔹 Bộ Quốc phòng, Bộ Công an cấp giấy phép môi trường đối với các dự án đầu tư, cơ sở thuộc bí mật nhà nước về quốc phòng, an ninh.</li>
                                        <li className='text-gray-700 mt-2'>🔹 Ủy ban nhân dân cấp tỉnh cấp giấy phép môi trường đối với các đối tượng sau đây, trừ trường hợp quy định tại khoản 1 và khoản 2 Điều này:
                                            <ul className=" pl-5 mb-4">
                                                <li className='text-gray-700 mt-2'>🔸 Dự án đầu tư nhóm II quy định tại Điều 39 của Luật này;</li>
                                                <li className='text-gray-700 mt-2'>🔸 Dự án đầu tư nhóm III quy định tại Điều 39 của Luật này nằm trên địa bàn từ 02 đơn vị hành chính cấp huyện trở lên;</li>
                                                <li className='text-gray-700 mt-2'>🔸 Đối tượng quy định tại khoản 2 Điều 39 của Luật này đã được Ủy ban nhân dân cấp tỉnh hoặc Bộ, cơ quan ngang Bộ phê duyệt kết quả thẩm định báo cáo đánh giá tác động môi trường.</li>
                                            </ul>
                                        </li>
                                        <li className='text-gray-700'>🔹 Ủy ban nhân dân cấp huyện cấp giấy phép môi trường đối với đối tượng quy định tại Điều 39 của Luật này, trừ trường hợp quy định tại các khoản 1, 2 và 3 Điều này.</li>
                                    </ul>
                                    <p className="text-base/7 text-gray-700 mt-4">Theo đó, Bộ Tài nguyên và Môi trường; Bộ Quốc phòng, Bộ Công an; Ủy ban nhân dân cấp huyện sẽ cấp giấy phép môi trường tùy theo từng trường hợp như trên.</p>
                                </div>

                                <div className="mt-8">
                                    <h2 className="text-xl font-bold text-indigo-600 uppercase">Hồ sơ, trình tự thủ tục cấp giấy phép môi trường cần thực hiện những gì?</h2>
                                    <p className="text-base/7 text-gray-700 mt-4">Tại Điều 43 Luật Bảo vệ môi trường 2020 quy định hồ sơ, trình tự, thủ tục cấp giấy phép môi trường như sau:</p>

                                    <p className="text-base/7 text-gray-700 mt-4"><strong>(1) Về hồ sơ đề nghị cấp giấy phép môi trường</strong></p>
                                    <ul className=" pl-5 mb-4">
                                        <li className='text-gray-700'>🔹 Văn bản đề nghị cấp giấy phép môi trường;</li>
                                        <li className='text-gray-700'>🔹 Báo cáo đề xuất cấp giấy phép môi trường;</li>
                                        <li className='text-gray-700'>🔹 Tài liệu pháp lý và kỹ thuật khác của dự án đầu tư, cơ sở, khu sản xuất, kinh doanh, dịch vụ tập trung, cụm công nghiệp.</li>
                                    </ul>

                                    <p className="text-base/7 text-gray-700 mt-4"><strong>(2) Về trình tự, thủ tục cấp giấy phép môi trường</strong></p>
                                    <ul className=" pl-5 mb-4">
                                        <li className='text-gray-700'>🔹 Chủ dự án đầu tư, cơ sở gửi hồ sơ đề nghị cấp giấy phép môi trường đến cơ quan có thẩm quyền quy định tại Điều 41 của Luật này. Hồ sơ được gửi trực tiếp hoặc qua đường bưu điện hoặc bản điện tử thông qua hệ thống dịch vụ công trực tuyến;</li>
                                        <li className='text-gray-700'>🔹 Cơ quan có thẩm quyền cấp giấy phép môi trường có trách nhiệm tổ chức tiếp nhận và kiểm tra tính đầy đủ, hợp lệ của hồ sơ; công khai nội dung báo cáo đề xuất cấp giấy phép môi trường, trừ thông tin thuộc bí mật nhà nước, bí mật của doanh nghiệp theo quy định của pháp luật; tham vấn ý kiến của cơ quan, tổ chức, cá nhân có liên quan; kiểm tra thực tế thông tin dự án đầu tư, cơ sở, khu sản xuất, kinh doanh, dịch vụ tập trung, cụm công nghiệp; tổ chức việc thẩm định, cấp giấy phép môi trường.</li>
                                        <li className='text-gray-700'>🔹 Quy trình tiếp nhận, giải quyết thủ tục hành chính và thông báo kết quả được thực hiện trực tiếp, qua đường bưu điện hoặc gửi bản điện tử thông qua hệ thống dịch vụ công trực tuyến theo đề nghị của chủ dự án đầu tư, cơ sở;</li>
                                        <li className='text-gray-700'>🔹 Trường hợp dự án đầu tư, cơ sở, khu sản xuất, kinh doanh, dịch vụ tập trung, cụm công nghiệp có hoạt động xả nước thải vào công trình thủy lợi, cơ quan cấp giấy phép môi trường phải lấy ý kiến bằng văn bản và đạt được sự đồng thuận của cơ quan nhà nước quản lý công trình thủy lợi đó trước khi cấp giấy phép môi trường;</li>
                                        <li className='text-gray-700'>🔹 Trường hợp dự án đầu tư, cơ sở nằm trong khu sản xuất, kinh doanh, dịch vụ tập trung, cụm công nghiệp, cơ quan cấp giấy phép môi trường phải lấy ý kiến bằng văn bản của chủ đầu tư xây dựng và kinh doanh hạ tầng khu sản xuất, kinh doanh, dịch vụ tập trung, cụm công nghiệp đó trước khi cấp giấy phép môi trường.</li>
                                    </ul>

                                    <p className="text-base/7 text-gray-700 mt-4"><strong>* Lưu ý:</strong> Việc cấp giấy phép môi trường được thực hiện trên cơ sở thẩm định báo cáo đề xuất cấp giấy phép môi trường. Cơ quan có thẩm quyền cấp giấy phép môi trường thành lập hội đồng thẩm định, đoàn kiểm tra theo quy định của Chính phủ.</p>
                                    <p className="text-base/7 text-gray-700 mt-4">Đối với dự án đầu tư, cơ sở, khu sản xuất, kinh doanh, dịch vụ tập trung, cụm công nghiệp có hoạt động xả nước thải vào công trình thủy lợi, trong thành phần hội đồng thẩm định báo cáo đề xuất cấp giấy phép môi trường, đoàn kiểm tra phải có đại diện cơ quan nhà nước quản lý công trình thủy lợi đó.</p>
                                    <p className="text-base/7 text-gray-700 mt-4">Cơ quan nhà nước quản lý công trình thủy lợi có trách nhiệm cử thành viên tham gia hội đồng thẩm định, đoàn kiểm tra, có ý kiến bằng văn bản về việc cấp giấy phép môi trường trong thời hạn lấy ý kiến; trường hợp hết thời hạn lấy ý kiến mà không có văn bản trả lời thì được coi là đồng thuận với việc cấp giấy phép môi trường.</p>
                                </div>
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

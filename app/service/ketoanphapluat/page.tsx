
import React from 'react';
import Image from 'next/image';
import Section11 from '@/app/components/section11';
import Banner2 from '@/app/components/banner2';

export default function Batdongsan() {
    return (
        <section className="py-16 bg-white md:mt-1">
            <Banner2 />
            <section className="py-8 bg-white mt-8 md:mt-1">
                <div className="relative max-w-7xl mx-auto isolate overflow-hidden bg-white py-6 sm:py-6 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                    </div>

                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2">
                            <h2 className="mt-2 mb-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xls">Giấy phép con là gì? Chi tiết hồ sơ và thủ tục xin giấy phép con

                            </h2>

                            <div className='border p-5 rounded-lg border-orange-300 mb-4'>
                                <p className='mb-2'><strong>Nội dung gồm:</strong> </p>
                                <ul>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Giấy phép con, giấy phép kinh doanh là gì?</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Đặc điểm của giấy phép con, giấy phép kinh doanh</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Những trường hợp cần xin giấy phép con</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Hướng dẫn hồ sơ, thủ tục đăng ký giấy phép kinh doanh (giấy phép con)</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Danh sách các loại giấy phép con doanh nghiệp phải có</li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <p className="text-xl font-bold text-indigo-600 uppercase">Giấy phép con, giấy phép kinh doanh là gì?</p>
                                <p className="text-base/7 text-gray-700 mt-4">Hiện tại, pháp luật chưa có định nghĩa cụ thể cho giấy phép con - còn được gọi là giấy phép kinh doanh hay giấy phép kinh doanh có điều kiện. </p>
                                <p className="text-base/7 text-gray-700 mt-4">Tuy nhiên, bạn có thể hiểu đơn giản, giấy phép con là loại giấy tờ pháp lý khẳng định việc kinh doanh ngành nghề có điều kiện của cá nhân/tổ chức là hợp pháp.</p>
                                <p className='text-base/7 text-gray-700 mt-4'>Ví dụ:</p>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>🔹 Giấy phép đủ điều kiện an ninh trật tự khi mở công ty kinh doanh dịch vụ bảo vệ;</li>
                                    <li className='text-gray-700'>🔹 Giấy phép vệ sinh ATTP đối với ngành nghề dịch vụ ăn uống, nhà hàng…;</li>
                                    <li className='text-gray-700'>🔹 Giấy phép phòng cháy chữa cháy đối với ngành nghề nhà ở, khách sạn, cửa hàng xăng dầu…</li>
                                </ul>
                            </div>
                            <div className=" pt-6 ">
                                <h2 className="text-2xl *:text-xl font-bold text-indigo-600 uppercase">Đặc điểm của giấy phép con, giấy phép kinh doanh</h2>
                                <p className="text-base/7 text-gray-700 mb-2 mt-2">Giấy phép kinh doanh sẽ mang những đặc điểm, tính chất sau đây:</p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700'>🔹 Là văn bản được cấp bởi các cơ quan chức năng có thẩm quyền (tùy từng lĩnh vực mà cơ quan cấp sẽ khác nhau) và được cấp sau giấy chứng nhận đăng ký kinh doanh;</li>
                                    <li className='text-gray-700'>🔹 Là văn bản bắt buộc phải có đối với các doanh nghiệp kinh doanh ngành, nghề có điều kiện;</li>
                                    <li className='text-gray-700'>🔹 Đối với mỗi ngành, nghề khác nhau, điều kiện và quy định để được cấp giấy phép con cũng sẽ khác nhau;</li>
                                    <li className='text-gray-700'>🔹 Thông thường hầu hết các giấy phép con đều có thời hạn sử dụng, doanh nghiệp buộc phải làm thủ tục gia hạn hoặc cấp mới thì mới có thể tiếp tục hoạt động kinh doanh.</li>
                                </ul>
                                <p className="text-base/7 text-gray-700 mb-4">Bên cạnh đó, giấy phép con sẽ được cấp dưới một trong các hình thức sau: giấy phép, giấy chứng nhận, chứng chỉ hoặc văn bản xác nhận/chấp thuận.</p>
                                <p className="text-base/7 text-gray-700 mb-4"><strong>Lưu ý:</strong></p>
                                <p className="text-base/7 text-gray-700 mb-4">Các ngành nghề kinh doanh có điều kiện là những ngành, nghề mà trong quá trình kinh doanh, sản xuất có khả năng tác động trực tiếp đến các vấn đề như an ninh quốc phòng, đạo đức xã hội, trật tự an toàn xã hội và sức khỏe của cộng đồng. Vì thế các ngành nghề này phải được ràng buộc bởi các điều kiện cụ thể.</p>
                                <p className="text-base/7 text-gray-700 mb-4">Bạn có thể xem chi tiết về các ngành nghề đầu tư, kinh doanh có điều kiện tại Phụ lục IV Luật Đầu tư 2020 hoặc tham khảo bài viết 227 ngành nghề kinh doanh có điều kiện mà Anpha đã tổng hợp và chia sẻ.</p>
                                <h2 className="text-2xl *:text-xl font-bold text-indigo-600 uppercase">Những trường hợp cần xin giấy phép con</h2>
                                <p className="text-base/7 text-gray-700 mb-2 smt-2">Từ nội dung đã đề cập bên trên, cá nhân/doanh nghiệp/hộ kinh doanh/hợp tác xã cần tiến hành xin giấy phép con khi:</p>
                                <ul className="list-disc pl-5 mb-4">
                                    <li className='text-gray-700'>Thực hiện hoạt động kinh doanh, đầu tư vào các ngành nghề có điều kiện theo quy định của pháp luật;</li>
                                    <li className='text-gray-700'>Giấy phép con hết hiệu lực hoặc bị mất thì cũng phải yêu cầu gia hạn hoặc cấp mới.</li>
                                </ul>
                                <p className="text-base/7 text-gray-700 mb-4"><strong>Trường hợp bạn gặp khó khăn trong quá trình thực hiện thủ tục xin giấy chứng nhận đăng ký kinh doanh hoặc thủ tục xin giấy phép con thì có thể cân nhắc tham khảo các gói dịch vụ tại Kế toán Anpha:</strong></p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700'>➨ Dịch vụ làm giấy chứng nhận đăng ký kinh doanh: Phí dịch vụ chỉ 250.000 đồng, thời gian hoàn thành trong 4 ngày làm việc. <a href="#" className="text-blue-600 hover:underline">Tham khảo chi tiết: Dịch vụ làm giấy chứng nhận đăng ký kinh doanh.</a></li>
                                    <li className='text-black mt-2'>➨ Dịch vụ xin giấy phép con:
                                        <ul className=" pl-5 mb-4">
                                            <li className='text-gray-700 mt-2'>🔹 Phí dịch vụ tốt nhất thị trường, cam kết không có phí phát sinh sau khi ký kết hợp đồng. Liên hệ Anpha theo số 0984 477 711 (Miền Bắc) - 0903 003 779 (Miền Trung) - 0908 742 789 (Miền Nam) để nhận báo giá nhanh chóng, chính xác cho từng ngành nghề;</li>
                                            <li className='text-gray-700 mt-2'>🔹 Cam kết hoàn thành đúng thời hạn, bàn giao kết quả quả tận nơi miễn phí theo yêu cầu;</li>
                                            <li className='text-gray-700 mt-2'>🔹 Danh mục ngành nghề hỗ trợ xin giấy phép con đa dạng: kinh doanh thực phẩm, kinh doanh rượu, kinh doanh dịch vụ lữ hành, kinh doanh vận tải, xây dựng, kinh doanh giáo dục…;</li>
                                            <li className='text-gray-700 mt-2'>🔹 Hỗ trợ từ A - Z, khách hàng chỉ cần cung cấp thông tin theo yêu cầu, kiểm tra, ký xác nhận hồ sơ và chờ nhận kết quả.</li>
                                        </ul>
                                        <a href="#" className="text-blue-600 hover:underline">Tham khảo chi tiết: Dịch vụ xin giấy phép con.</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-bold text-indigo-600 uppercase">Hướng dẫn hồ sơ, thủ tục đăng ký giấy phép kinh doanh (giấy phép con)</h2>
                                <p className="font-bold mt-4 text-black">1. Hồ sơ xin giấy phép con, giấy phép kinh doanh</p>
                                <div className='border p-5 rounded-lg border-orange-300 mt-4'>
                                    <p className="text-base/7 text-gray-700 ">Hồ sơ đăng ký làm giấy phép con cơ bản sẽ bao gồm:</p>
                                    <ul className='ml-4 mt-3'>
                                        <li className='text-gray-700'>🔹 Đơn đề nghị cấp giấy phép kinh doanh có điều kiện;</li>
                                        <li className='text-gray-700'>🔹 Bản sao giấy chứng nhận đăng ký kinh doanh;</li>
                                        <li className='text-gray-700'>🔹 Bản điều lệ công ty;</li>
                                        <li className='text-gray-700'>🔹 Bản phương án kinh doanh dự kiến;</li>
                                        <li className='text-gray-700'>🔹 Thông tin/Bản sao hợp lệ CMND/CCCD/hộ chiếu của người đứng đầu doanh nghiệp/thành viên góp vốn/cổ đông sáng lập;</li>
                                        <li className='text-gray-700'>🔹 Giấy tờ chứng minh trình độ nghiệp vụ và kinh nghiệm đối với lĩnh vực hoạt động của những người trực tiếp điều hành doanh nghiệp;</li>
                                        <li className='text-gray-700'>🔹 Các giấy tờ pháp lý khác đối với từng ngành nghề cụ thể.</li>
                                    </ul>
                                </div>
                                <p className="text-base/7 text-gray-700 mt-4">Lưu ý:</p>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>🔹 Trên đây chỉ là bộ hồ sơ xin giấy phép con cơ bản của tất cả các ngành nghề. Đối với các ngành, nghề khác nhau sẽ có những yêu cầu về thông tin và giấy tờ riêng;</li>
                                    <li className='text-gray-700'>🔹 Căn cứ vào quy mô, loại hình hoạt động mà các thông tin và giấy tờ cần chuẩn bị sẽ thay đổi;</li>
                                    <li className='text-gray-700'>🔹 Trong một số trường hợp, bộ hồ sơ xin cấp giấy phép con sẽ được yêu cầu bổ sung một hoặc một số loại giấy phép con khác.</li>
                                </ul>

                                <p className="font-bold mt-4 text-black">2. Thủ tục xin giấy phép con, giấy phép kinh doanh</p>
                                <p className="text-base/7 text-gray-700 mt-4">Với mỗi ngành nghề khác nhau sẽ có những điều kiện, yêu cầu khác nhau về các bước nộp hồ sơ cũng như thời gian kiểm duyệt.</p>

                                <p className="font-bold mt-4 text-black">Ví dụ:</p>
                                <p className="font-bold mt-4 text-black">➧ Xin giấy phép kinh doanh lữ hành quốc tế:</p>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>🔹 Nộp hồ sơ trực tiếp đến Tổng cục Du lịch trực thuộc Bộ Văn hoá, Thể thao và Du lịch;</li>
                                    <li className='text-gray-700'>🔹 Thời hạn giải quyết hồ sơ trong vòng 10 - 15 ngày làm việc kể từ ngày nhận hồ sơ hợp lệ.</li>
                                </ul>

                                <p className="font-bold mt-4 text-black">➧ Xin giấy phép phòng cháy chữa cháy:</p>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>🔹 Nộp hồ sơ tại Cục Cảnh sát PCCC thuộc Bộ Công an hoặc Phòng Cảnh sát PCCC;</li>
                                    <li className='text-gray-700'>🔹 Thời hạn giải quyết từ 5 - 15 ngày làm việc kể từ ngày nộp hồ sơ hợp lệ.</li>
                                </ul>

                                <p className="font-bold mt-4 text-black">➧ Xin giấy phép vệ sinh an toàn thực phẩm:</p>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>🔹 Nộp hồ sơ tại Bộ Công thương, Bộ Y tế hoặc Bộ Nông nghiệp và Phát triển nông thôn (tùy vào lĩnh vực kinh doanh);</li>
                                    <li className='text-gray-700'>🔹 Thời hạn giải quyết hồ sơ trong vòng 15 ngày làm việc kể từ ngày tiếp nhận hồ sơ.</li>
                                </ul>
                                <p className="text-base/7 text-gray-700 mt-4">Xem thêm:</p>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>🔹 <a href="#" className="text-blue-600 hover:underline">Đăng ký xin giấy phép PCCC;</a></li>
                                    <li className='text-gray-700'>🔹 <a href="#" className="text-blue-600 hover:underline">Xin giấy chứng nhận vệ sinh ATTP.</a></li>
                                </ul>

                                <h2 className="text-2xl font-bold text-indigo-600 uppercase">Danh sách các loại giấy phép con doanh nghiệp phải có</h2>
                                <p className="text-base/7 text-gray-700 mt-4">Để doanh nghiệp kinh doanh ngành nghề có điều kiện được phép hoạt động một cách hợp pháp thì bắt buộc phải có giấy phép con. Tùy thuộc vào từng ngành nghề đăng ký kinh doanh mà yêu cầu về giấy phép con khác khau.</p>
                                <p className="text-base/7 text-gray-700 mt-4">Dưới đây là ví dụ về các loại giấy phép con cần có của một số ngành nghề kinh doanh có điều kiện.</p>

                                <p className="font-bold mt-4 text-black">1. Đối với lĩnh vực du lịch lữ hành</p>
                                <p className="text-base/7 text-gray-700 mt-4">Tùy vào việc doanh nghiệp kinh doanh du lịch lữ hành nội địa hay quốc tế mà bạn phải làm thủ tục xin cấp 1 trong 2 loại giấy phép con sau:</p>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>🔹 Giấy phép kinh doanh lữ hành nội địa;</li>
                                    <li className='text-gray-700'>🔹 Giấy phép kinh doanh lữ hành quốc tế.</li>
                                </ul>

                                <p className="font-bold mt-4 text-black">2. Đối với lĩnh vực kinh doanh rượu</p>
                                <p className="text-base/7 text-gray-700 mt-4">Tùy vào hình thức bán lẻ, bán buôn hay bán rượu tiêu dùng tại chỗ mà doanh nghiệp, nhà hàng, khách sạn… xin loại giấy phép phù hợp.</p>
                                <p className="text-base/7 text-gray-700 mt-4">1 trong 3 loại giấy phép con doanh nghiệp cần có nếu hoạt động buôn bán rượu:</p>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>🔹 Giấy phép bán lẻ rượu;</li>
                                    <li className='text-gray-700'>🔹 Giấy phép bán buôn rượu;</li>
                                    <li className='text-gray-700'>🔹 Giấy phép đăng ký bán tiêu dùng rượu tại chỗ.</li>
                                </ul>

                                <p className="font-bold mt-4 text-black">3. Đối với các lĩnh vực liên quan đến an toàn thực phẩm, chất lượng sản phẩm</p>
                                <p className="text-base/7 text-gray-700 mt-4">Đối với các lĩnh vực liên quan an toàn thực phẩm, chẳng hạn: nhà hàng, siêu thị, kinh doanh hải sản, rau sạch… hoặc để hàng hóa, sản phẩm có thể lưu hành trên thị trường, doanh nghiệp cần có 1 trong các loại giấy phép sau:</p>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>🔹 Bản cam kết đảm bảo ATTP;</li>
                                    <li className='text-gray-700'>🔹 Giấy chứng nhận ISO 22000;</li>
                                    <li className='text-gray-700'>🔹 Giấy phép vệ sinh an toàn thực phẩm;</li>
                                    <li className='text-gray-700'>🔹 Giấy chứng nhận tiêu chuẩn HACCP;</li>
                                    <li className='text-gray-700'>🔹 Giấy phép công bố sản phẩm;</li>
                                    <li className='text-gray-700'>🔹 Giấy phép lưu hành sản phẩm CFS;</li>
                                    <li className='text-gray-700'>🔹 Giấy chứng nhận ISO 9001:2015;</li>
                                    <li className='text-gray-700'>🔹 Giấy chứng nhận quyền sử dụng mã số mã vạch.</li>
                                </ul>

                                <p className="font-bold mt-4 text-black">4. Đối với doanh nghiệp muốn xây dựng và bảo vệ thương hiệu, nhãn hiệu</p>
                                <p className="text-base/7 text-gray-700 mt-4">Doanh nghiệp ngoài việc đảm bảo có các giấy phép con liên quan yếu tố ngành nghề, có thể xin thêm 1 trong 3 loại giấy phép sau để tránh các hành vi đạo nhái, gây ảnh hưởng nghiêm trọng đến nhận diện thương hiệu:</p>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>🔹 Văn bằng bảo hộ độc quyền nhãn hiệu, thương hiệu;</li>
                                    <li className='text-gray-700'>🔹 Bản quyền tác giả.</li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-bold text-indigo-600 uppercase">Đối với các lĩnh vực khác</h2>
                                <table className="table-auto w-full mt-4">
                                    <thead>
                                        <tr>
                                            <th className=" border bg-sky-700 text-white px-4 py-2">Lĩnh vực/ngành nghề kinh doanh</th>
                                            <th className=" border bg-sky-700 text-white px-4 py-2">Giấy phép con</th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-sky-100'>
                                        <tr>
                                            <td className="border border-white px-4 py-2">Xây dựng</td>
                                            <td className="border px-4 py-2 border-white">Giấy phép xây dựng</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2 border-white">Dịch vụ bảo vệ</td>
                                            <td className="border px-4 py-2 border-white">Giấy phép an ninh trật tự</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2 border-white">Dịch vụ quảng cáo</td>
                                            <td className="border px-4 py-2 border-white">Giấy phép quảng cáo</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2 border-white">Dịch vụ tư vấn du học</td>
                                            <td className="border px-4 py-2 border-white">Giấy phép tư vấn du học</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2 border-white">Mở trung tâm ngoại ngữ</td>
                                            <td className="border px-4 py-2 border-white">Giấy phép trung tâm ngoại ngữ</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2 border-white">Hoạt động trang thông tin điện tử (ICP)</td>
                                            <td className="border px-4 py-2 border-white">Giấy phép thiết lập trang thông tin điện tử</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2 border-white">Hoạt động trong lĩnh vực giao thông, vận tải</td>
                                            <td className="border px-4 py-2 border-white">Giấy phép kinh doanh vận tải</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2 border-white">Cung cấp dịch vụ diệt côn trùng, diệt khuẩn</td>
                                            <td className="border px-4 py-2 border-white">Giấy phép diệt côn trùng và diệt khuẩn</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2 border-white">Mở phòng khám đa khoa hoặc phòng khám chuyên khoa thuộc lĩnh vực khám chữa bệnh</td>
                                            <td className="border px-4 py-2 border-white">Giấy phép kinh doanh phòng khám tư nhân</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2 border-white">Thu gom và xử lý chất thải nguy hại</td>
                                            <td className="border px-4 py-2 border-white">- Giấy phép xử lý chất thải nguy hại<br />- Giấy phép môi trường</td>
                                        </tr>
                                    </tbody>
                                </table>
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

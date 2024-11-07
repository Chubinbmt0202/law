
import React from 'react';
import Image from 'next/image';
import Section11 from '@/app/components/section11';
import Banner2 from '@/app/components/banner2';

export default function Batdongsan() {
    return (
        <section className="py-16 bg-white md:mt-1">
            <Banner2 />
            <div className="relative max-w-7xl mx-auto isolate overflow-hidden bg-white py-6 sm:py-6 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                </div>

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2">
                        <h2 className="mt-2 mb-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xls">Giấy phép con, giấy phép kinh doanh là gì?</h2>
                        <p className='mb-3 text-base/7 text-gray-700'>Hiện tại, pháp luật chưa có định nghĩa cụ thể cho giấy phép con - còn được gọi là giấy phép kinh doanh hay giấy phép kinh doanh có điều kiện. </p>
                        <p className='mb-3 text-base/7 text-gray-700'>Tuy nhiên, bạn có thể hiểu đơn giản, giấy phép con là loại giấy tờ pháp lý khẳng định việc kinh doanh ngành nghề có điều kiện của cá nhân/tổ chức là hợp pháp.</p>
                        <div >
                            <p className="text-base/7 text-gray-700 mt-4"><strong>Ví dụ:</strong></p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>-- <strong>Giấy phép đủ điều kiện an ninh trật tự</strong> khi mở công ty kinh doanh dịch vụ bảo vệ;</li>
                                <li className='text-gray-700'>-- <strong>Giấy phép vệ sinh ATTP</strong> đối với ngành nghề dịch vụ ăn uống, nhà hàng…;</li>
                                <li className='text-gray-700'>-- Giấy phép <strong>phòng cháy chữa cháy</strong> đối với ngành nghề nhà ở, khách sạn, cửa hàng xăng dầu…</li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <p className="text-base/7 font-bold text-indigo-600">ĐẶC ĐIỂM CỦA GIẤY PHÉP CON, GIẤY PHÉP KINH DOANH</p>
                            <div >
                                <p className="text-base/7 text-gray-700 mt-4">Là văn bản được cấp bởi các cơ quan chức năng có thẩm quyền (tùy từng lĩnh vực mà cơ quan cấp sẽ khác nhau) và được cấp sau giấy chứng nhận đăng ký kinh doanh;</p>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>- Là văn bản bắt buộc phải có đối với các doanh nghiệp kinh doanh ngành, nghề có điều kiện;</li>
                                    <li className='text-gray-700'>- Đối với mỗi ngành, nghề khác nhau, điều kiện và quy định để được cấp giấy phép con cũng sẽ khác nhau;</li>
                                    <li className='text-gray-700'>- Thông thường hầu hết các giấy phép con đều có thời hạn sử dụng, doanh nghiệp buộc phải làm thủ tục gia hạn hoặc cấp mới thì mới có thể tiếp tục hoạt động kinh doanh.</li>
                                </ul>
                            </div>
                            <p className="text-base/7 text-gray-700 mt-4">Bên cạnh đó, giấy phép con sẽ được cấp dưới một trong các hình thức sau: giấy phép, giấy chứng nhận, chứng chỉ hoặc văn bản xác nhận/chấp thuận.</p>

                            <div >
                                <p className="text-base/7 text-gray-700 mt-4"><strong>Lưu ý:</strong></p>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>Các ngành nghề kinh doanh có điều kiện là những ngành, nghề mà trong quá trình kinh doanh, sản xuất có khả năng tác động trực tiếp đến các vấn đề như an ninh quốc phòng, đạo đức xã hội, trật tự an toàn xã hội và sức khỏe của cộng đồng. Vì thế các ngành nghề này phải được ràng buộc bởi các điều kiện cụ thể.</li>
                                    <li className='text-gray-700 mt-3'>Bạn có thể xem chi tiết về các ngành nghề đầu tư, kinh doanh có điều kiện tại Phụ lục IV Luật Đầu tư 2020 hoặc tham khảo bài viết 227 ngành nghề kinh doanh có điều kiện mà Anpha đã tổng hợp và chia sẻ.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold mt-4">Những trường hợp cần xin giấy phép con</h2>
                            <p className="text-base/7 text-gray-700 mt-4">Từ nội dung đã đề cập bên trên, cá nhân/doanh nghiệp/hộ kinh doanh/hợp tác xã cần tiến hành xin giấy phép con khi:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>Thực hiện hoạt động kinh doanh, đầu tư vào các ngành nghề có điều kiện theo quy định của pháp luật;</li>
                                <li className='text-gray-700'>Giấy phép con hết hiệu lực hoặc bị mất thì cũng phải yêu cầu gia hạn hoặc cấp mới.</li>
                            </ul>
                            <p className="text-base/7 text-gray-700 mt-4">Trường hợp bạn gặp khó khăn trong quá trình thực hiện thủ tục xin giấy chứng nhận đăng ký kinh doanh hoặc thủ tục xin giấy phép con thì có thể cân nhắc tham khảo các gói dịch vụ tại Kế toán Anpha:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>➨ Dịch vụ làm giấy chứng nhận đăng ký kinh doanh: Phí dịch vụ chỉ 250.000 đồng, thời gian hoàn thành trong 4 ngày làm việc.</li>
                                <li className='text-gray-700 mt-3'> Tham khảo chi tiết: Dịch vụ làm giấy chứng nhận đăng ký kinh doanh.</li>
                                <li className='text-gray-700 mt-3'>➨ Dịch vụ xin giấy phép con:</li>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>Phí dịch vụ tốt nhất thị trường, cam kết không có phí phát sinh sau khi ký kết hợp đồng. Liên hệ Anpha theo số 0984 477 711 (Miền Bắc) - 0903 003 779 (Miền Trung) - 0908 742 789 (Miền Nam) để nhận báo giá nhanh chóng, chính xác cho từng ngành nghề;</li>
                                    <li className='text-gray-700 mt-3'>Cam kết hoàn thành đúng thời hạn, bàn giao kết quả quả tận nơi miễn phí theo yêu cầu;</li>
                                    <li className='text-gray-700 mt-3'>Danh mục ngành nghề hỗ trợ xin giấy phép con đa dạng: kinh doanh thực phẩm, kinh doanh rượu, kinh doanh dịch vụ lữ hành, kinh doanh vận tải, xây dựng, kinh doanh giáo dục…;</li>
                                    <li className='text-gray-700 mt-3'>Hỗ trợ từ A - Z, khách hàng chỉ cần cung cấp thông tin theo yêu cầu, kiểm tra, ký xác nhận hồ sơ và chờ nhận kết quả.</li>
                                    <li className='text-gray-700 mt-3'> Tham khảo chi tiết: Dịch vụ xin giấy phép con.</li>
                                </ul>
                            </ul>
                            <h2 className="text-lg font-bold mt-8">Hướng dẫn hồ sơ, thủ tục đăng ký giấy phép kinh doanh (giấy phép con)</h2>
                            <h3 className="text-base font-bold mt-4">1. Hồ sơ xin giấy phép con, giấy phép kinh doanh</h3>
                            <p className="text-base/7 text-gray-700 mt-4">Hồ sơ đăng ký làm giấy phép con cơ bản sẽ bao gồm:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>Đơn đề nghị cấp giấy phép kinh doanh có điều kiện;</li>
                                <li className='text-gray-700 mt-3'>Bản sao giấy chứng nhận đăng ký kinh doanh;</li>
                                <li className='text-gray-700 mt-3'>Bản điều lệ công ty;</li>
                                <li className='text-gray-700 mt-3'>Bản phương án kinh doanh dự kiến;</li>
                                <li className='text-gray-700 mt-3'>Thông tin/Bản sao hợp lệ CMND/CCCD/hộ chiếu của người đứng đầu doanh nghiệp/thành viên góp vốn/cổ đông sáng lập;</li>
                                <li className='text-gray-700 mt-3'>Giấy tờ chứng minh trình độ nghiệp vụ và kinh nghiệm đối với lĩnh vực hoạt động của những người trực tiếp điều hành doanh nghiệp;</li>
                                <li className='text-gray-700 mt-3'>Các giấy tờ pháp lý khác đối với từng ngành nghề cụ thể.</li>
                            </ul>
                            <p className="text-base/7 text-gray-700 mt-4"><strong>Lưu ý:</strong></p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'> Trên đây chỉ là bộ hồ sơ xin giấy phép con cơ bản của tất cả các ngành nghề. Đối với các ngành, nghề khác nhau sẽ có những yêu cầu về thông tin và giấy tờ riêng;</li>
                                <li className='text-gray-700 mt-3'> Căn cứ vào quy mô, loại hình hoạt động mà các thông tin và giấy tờ cần chuẩn bị sẽ thay đổi;</li>
                                <li className='text-gray-700 mt-3'> Trong một số trường hợp, bộ hồ sơ xin cấp giấy phép con sẽ được yêu cầu bổ sung một hoặc một số loại giấy phép con khác.</li>
                            </ul>
                            <h3 className="text-base font-bold mt-4">2. Thủ tục xin giấy phép con, giấy phép kinh doanh</h3>
                            <p className="text-base/7 text-gray-700 mt-4">Với mỗi ngành nghề khác nhau sẽ có những điều kiện, yêu cầu khác nhau về các bước nộp hồ sơ cũng như thời gian kiểm duyệt.</p>
                            <p className="text-base/7 text-gray-700 mt-4"><strong>Ví dụ:</strong></p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'> Xin giấy phép kinh doanh lữ hành quốc tế:</li>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>Nộp hồ sơ trực tiếp đến Tổng cục Du lịch trực thuộc Bộ Văn hoá, Thể thao và Du lịch;</li>
                                    <li className='text-gray-700 mt-3'>Thời hạn giải quyết hồ sơ trong vòng 10 - 15 ngày làm việc kể từ ngày nhận hồ sơ hợp lệ.</li>
                                </ul>
                                <li className='text-gray-700 mt-3'> Xin giấy phép phòng cháy chữa cháy:</li>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>Nộp hồ sơ tại Cục Cảnh sát PCCC thuộc Bộ Công an hoặc Phòng Cảnh sát PCCC;</li>
                                    <li className='text-gray-700 mt-3'>Thời hạn giải quyết từ 5 - 15 ngày làm việc kể từ ngày nộp hồ sơ hợp lệ.</li>
                                </ul>
                                <li className='text-gray-700 mt-3'> Xin giấy phép vệ sinh an toàn thực phẩm:</li>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>Nộp hồ sơ tại Bộ Công thương, Bộ Y tế hoặc Bộ Nông nghiệp và Phát triển nông thôn (tùy vào lĩnh vực kinh doanh);</li>
                                    <li className='text-gray-700 mt-3'>Thời hạn giải quyết hồ sơ trong vòng 15 ngày làm việc kể từ ngày tiếp nhận hồ sơ.</li>
                                </ul>
                            </ul>
                            <p className="text-base/7 text-gray-700 mt-4">Xem thêm:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'> Đăng ký xin giấy phép PCCC;</li>
                                <li className='text-gray-700 mt-3'> Xin giấy chứng nhận vệ sinh ATTP.</li>
                            </ul>
                            <h2 className="text-lg font-bold mt-8">Danh sách các loại giấy phép con doanh nghiệp phải có</h2>
                            <p className="text-base/7 text-gray-700 mt-4">Để doanh nghiệp kinh doanh ngành nghề có điều kiện được phép hoạt động một cách hợp pháp thì bắt buộc phải có giấy phép con. Tùy thuộc vào từng ngành nghề đăng ký kinh doanh mà yêu cầu về giấy phép con khác khau.</p>
                            <p className="text-base/7 text-gray-700 mt-4">Dưới đây là ví dụ về các loại giấy phép con cần có của một số ngành nghề kinh doanh có điều kiện.</p>
                            <h3 className="text-base font-bold mt-4">1. Đối với lĩnh vực du lịch lữ hành</h3>
                            <p className="text-base/7 text-gray-700 mt-4">Tùy vào việc doanh nghiệp kinh doanh du lịch lữ hành nội địa hay quốc tế mà bạn phải làm thủ tục xin cấp 1 trong 2 loại giấy phép con sau:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>Giấy phép kinh doanh lữ hành nội địa;</li>
                                <li className='text-gray-700 mt-3'>Giấy phép kinh doanh lữ hành quốc tế.</li>
                            </ul>
                            <h3 className="text-base font-bold mt-4">2. Đối với lĩnh vực kinh doanh rượu</h3>
                            <p className="text-base/7 text-gray-700 mt-4">Tùy vào hình thức bán lẻ, bán buôn hay bán rượu tiêu dùng tại chỗ mà doanh nghiệp, nhà hàng, khách sạn… xin loại giấy phép phù hợp.</p>
                            <p className="text-base/7 text-gray-700 mt-4">1 trong 3 loại giấy phép con doanh nghiệp cần có nếu hoạt động buôn bán rượu:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>Giấy phép bán lẻ rượu;</li>
                                <li className='text-gray-700 mt-3'>Giấy phép bán buôn rượu;</li>
                                <li className='text-gray-700 mt-3'>Giấy phép đăng ký bán tiêu dùng rượu tại chỗ.</li>
                            </ul>
                            <h3 className="text-base font-bold mt-4">3. Đối với các lĩnh vực liên quan đến an toàn thực phẩm, chất lượng sản phẩm</h3>
                            <p className="text-base/7 text-gray-700 mt-4">Đối với các lĩnh vực liên quan an toàn thực phẩm, chẳng hạn: nhà hàng, siêu thị, kinh doanh hải sản, rau sạch… hoặc để hàng hóa, sản phẩm có thể lưu hành trên thị trường, doanh nghiệp cần có 1 trong các loại giấy phép sau:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>Bản cam kết đảm bảo ATTP;</li>
                                <li className='text-gray-700 mt-3'>Giấy chứng nhận ISO 22000;</li>
                                <li className='text-gray-700 mt-3'>Giấy phép vệ sinh an toàn thực phẩm;</li>
                                <li className='text-gray-700 mt-3'>Giấy chứng nhận tiêu chuẩn HACCP;</li>
                                <li className='text-gray-700 mt-3'>Giấy phép công bố sản phẩm;</li>
                                <li className='text-gray-700 mt-3'>Giấy phép lưu hành sản phẩm CFS;</li>
                                <li className='text-gray-700 mt-3'>Giấy chứng nhận ISO 9001:2015;</li>
                                <li className='text-gray-700 mt-3'>Giấy chứng nhận quyền sử dụng mã số mã vạch.</li>
                            </ul>
                            <h3 className="text-base font-bold mt-4">4. Đối với doanh nghiệp muốn xây dựng và bảo vệ thương hiệu, nhãn hiệu</h3>
                            <p className="text-base/7 text-gray-700 mt-4">Doanh nghiệp ngoài việc đảm bảo có các giấy phép con liên quan yếu tố ngành nghề, có thể xin thêm 1 trong 3 loại giấy phép sau để tránh các hành vi đạo nhái, gây ảnh hưởng nghiêm trọng đến nhận diện thương hiệu:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>Văn bằng bảo hộ độc quyền nhãn hiệu, thương hiệu;</li>
                                <li className='text-gray-700 mt-3'>Bản quyền tác giả.</li>
                            </ul>
                        </div>

                        <p className="text-base/7 text-gray-700 mt-4">Gọi cho chúng tôi theo số <strong>0984 477 711 (Miền Bắc)</strong> , <strong>0903 003 779 (Miền Trung)</strong> hoặc <strong>0938 268 123 (Miền Nam)</strong> để được hỗ trợ.</p>
                    </div>

                    {/* ///// */}
                    <div className="-mt-12 p-12 lg:sticky lg:top-4  lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
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
                        </div>
                    </div>
                </div>

            </div>


            {/* ////////// */}

            {/* /////////////// */}


            <Section11 />
        </section>
    );
}

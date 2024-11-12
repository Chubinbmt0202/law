
import React from 'react';
import Image from 'next/image';
import Section11 from '@/app/components/section11';
import Banner from '@/app/components/banner';

export default function Banquyenthuonghieu() {
    return (
        <section className="py-16 bg-white md:mt-1">
            <Banner />
            <section className="py-8 bg-white mt-8 md:mt-1">
                <div className="relative max-w-7xl mx-auto isolate overflow-hidden bg-white py-6 sm:py-6 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                    </div>

                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2">
                            <h2 className="mt-2 mb-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xls">Hồ sơ đăng ký bản quyền thương hiệu? Trình tự, thủ tục đăng ký bản quyền thương hiệu được thực hiện như thế nào?</h2>

                            <div className='border p-5 rounded-lg border-orange-300 mb-4'>
                                <p className='mb-2'><strong>Nội dung gồm:</strong> </p>
                                <ul>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Đăng ký bản quyền thương hiệu là gì?</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Hồ sơ đăng ký thương hiệu gồm giấy tờ nào?</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Trình tự, thủ tục đăng ký bản quyền thương hiệu được thực hiện như thế nào?</li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <div className="mt-8">
                                    <h2 className="text-xl font-bold text-indigo-600 uppercase">Đăng ký bản quyền thương hiệu là gì?</h2>
                                    <p className="text-base/7 text-gray-700 mt-4">Căn cứ khoản 16 Điều 4 Luật Sở hữu trí tuệ 2005 được sửa đổi bởi khoản 2 Điều 1 Luật Sở hữu trí tuệ sửa đổi 2009 đã định nghĩa về nhãn hiệu như sau:</p>
                                    <ul className=" pl-5 mb-4">
                                        <li className='text-gray-700'>🔹 Nhãn hiệu là dấu hiệu dùng để phân biệt hàng hóa, dịch vụ của các tổ chức, cá nhân khác nhau.
                                        </li>

                                    </ul>
                                    <p className="text-base/7 text-gray-700 mt-4">Cụm từ thương hiệu không được pháp luật định nghĩa, tuy nhiên trên thực tế áp dụng, thương hiệu cũng được xem là nhãn hiệu, là phương tiện hữu hiệu để xác định, đặt hàng, quảng cáo, mua bán hàng hóa.</p>
                                    <p className="text-base/7 text-gray-700 mt-4">Do nhãn hiệu là công cụ để đánh dấu những hàng hóa, dịch vụ đến từ một nhà sản xuất nhất định, từ đó đem lại cho người tiêu dùng sự bảo đảm về chất lượng.</p>
                                    <p className="text-base/7 text-gray-700 mt-4"><strong>Đăng ký bản quyền thương hiệu</strong> là thủ tục hành chính được thực hiện tại Cục sở hữu trí tuệ để xác lập quyền sở hữu hợp pháp của chủ sở hữu đối với thương hiệu, sau khi được cấp giấy chứng nhận đăng ký thương hiệu, chủ sở hữu sẽ được độc quyền sử dụng thương hiệu trên toàn lãnh thổ Việt Nam.</p>

                                </div>

                                <div className="mt-8">
                                    <h2 className="text-xl font-bold text-indigo-600 uppercase">Hồ sơ đăng ký thương hiệu gồm giấy tờ nào?</h2>
                                    <p className="text-base/7 text-gray-700 mt-4">Căn cứ tại khoản 7.1 mục 7 Thông tư 01/2007/TT-BKHCN được sửa đổi, bổ sung tại khoản 7 Điều 1 Thông tư 16/2016/TT-BKHCN thì tài liệu tối thiểu đối với đơn đăng ký nhãn hiệu như sau:</p>
                                    <p className="text-base/7 text-gray-700 mt-4">Cục Sở hữu trí tuệ chỉ tiếp nhận đơn đăng ký sở hữu công nghiệp (sau đây gọi là “đơn”) nếu khi được nộp, đơn có ít nhất các loại tài liệu quy định tại các điểm a, b và e khoản 1 Điều 100, khoản 1 Điều 108 Luật Sở hữu trí tuệ 2005 và quy định cụ thể sau đây:</p>

                                    <p className="text-base/7 text-gray-700 mt-4"><strong>Đối với đơn nhãn hiệu, các tài liệu bắt buộc phải có để đơn được tiếp nhận gồm:</strong></p>
                                    <ul className="pl-5 mb-4">
                                        <li className='text-gray-700'>🔹 Tờ khai đăng ký;</li>
                                        <li className='text-gray-700'>🔹 Tài liệu, mẫu vật, thông tin thể hiện đối tượng sở hữu công nghiệp được đăng ký;
                                            <ul className="pl-5 mb-4">
                                                <li className='text-gray-700'>🔸 Cụ thể: đối với đơn đăng ký nhãn hiệu là mẫu nhãn hiệu và danh mục hàng hóa, dịch vụ mang nhãn hiệu (phải có trong tờ khai).</li>
                                                <li className='text-gray-700'>🔸 Văn bản của UBND tỉnh, TP trực thuộc TW cho phép sử dụng địa danh hoặc dấu hiệu khác chỉ nguồn gốc địa lý của đặc sản địa phương để đăng ký nhãn hiệu theo quy định tại khoản 37.7.a Thông tư 01/2007/TTBKHCN sửa đổi bởi điểm h khoản 31 Điều 1 Thông tư 16/2016/TT/BKHCN (nếu nhãn hiệu đăng ký là nhãn hiệu tập thể, nhãn hiệu chứng nhận có chứa địa danh hoặc dấu hiệu khác chỉ nguồn gốc địa lý của đặc sản địa phương).</li>
                                            </ul>
                                        </li>
                                        <li className='text-gray-700'>🔹 Chứng từ nộp phí, lệ phí.</li>
                                    </ul>

                                    <p className="text-base/7 text-gray-700 mt-4"><strong>Đối với đơn đăng ký nhãn hiệu tập thể, nhãn hiệu chứng nhận, ngoài các tài liệu quy định tại khoản 7.1.a trên đây, đơn còn bắt buộc phải có thêm các tài liệu sau đây:</strong></p>
                                    <ul className="pl-5 mb-4">
                                        <li className='text-gray-700'>🔹 Quy chế sử dụng nhãn hiệu tập thể/nhãn hiệu chứng nhận;</li>
                                        <li className='text-gray-700'>🔹 Bản thuyết minh về tính chất, chất lượng đặc trưng (hoặc đặc thù) của sản phẩm mang nhãn hiệu (nếu nhãn hiệu được đăng ký là nhãn hiệu tập thể dùng cho sản phẩm có tính chất đặc thù hoặc là nhãn hiệu chứng nhận chất lượng của sản phẩm hoặc là nhãn hiệu chứng nhận nguồn gốc địa lý);</li>
                                        <li className='text-gray-700'>🔹 Bản đồ khu vực địa lý (nếu nhãn hiệu đăng ký là nhãn hiệu chứng nhận nguồn gốc địa lý của sản phẩm, hoặc nhãn hiệu tập thể, nhãn hiệu chứng nhận có chứa địa danh hoặc dấu hiệu khác chỉ nguồn gốc địa lý của đặc sản địa phương);</li>
                                        <li className='text-gray-700'>🔹 Văn bản của Ủy ban nhân dân tỉnh, thành phố trực thuộc Trung ương cho phép đăng ký nhãn hiệu theo quy định tại điểm 37.7.a của Thông tư này (nếu nhãn hiệu đăng ký là nhãn hiệu tập thể, nhãn hiệu chứng nhận có chứa địa danh hoặc dấu hiệu khác chỉ nguồn gốc địa lý của đặc sản địa phương).</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-indigo-600 uppercase">Trình tự, thủ tục đăng ký bản quyền thương hiệu được thực hiện như thế nào?</h2>
                                <p className="text-base/7 text-gray-700 mt-4">Căn cứ mục 11 Thông tư 01/2007/TT-BKHCN được sửa đổi bởi khoản 10 Điều 1 Thông tư 16/2016/TT-BKHCN quy định các thủ tục chung, theo đó trình tự, thủ tục đăng ký bản quyền thương hiệu cũng xử lý theo trình tự sau đây:</p>

                                <p className="text-base/7 text-gray-700 mt-4"><strong>Bước 1: Tiếp nhận đơn</strong></p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700'>🔹 Đơn đăng ký có thể nộp trực tiếp hoặc gửi qua bưu điện tới trụ sở Cục Sở hữu trí tuệ tại Hà Nội hoặc 2 Văn phòng đại diện của Cục tại TP. Hồ Chí Minh và Đà Nẵng.</li>
                                </ul>

                                <p className="text-base/7 text-gray-700 mt-4"><strong>Bước 2: Thẩm định hình thức đơn</strong></p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700'>🔹 Kiểm tra việc tuân thủ các quy định về hình thức đối với đơn, từ đó đưa ra kết luận đơn có được coi là hợp lệ hay không (Ra quyết định chấp nhận đơn hợp lệ/từ chối chấp nhận đơn
                                        <ul className=" pl-5 mb-4">
                                            <li className='text-gray-700'>🔸 Trường hợp đơn hợp lệ, Cục Sở hữu trí tuệ ra quyết định chấp nhận đơn hợp lệ;</li>
                                            <li className='text-gray-700'>🔸 Trường hợp đơn không hợp lệ, Cục Sở hữu trí tuệ ra thông báo dự định từ chối chấp nhận đơn hợp lệ trong đó nêu rõ các lý do, thiếu sót khiến cho đơn có thể bị từ chối chấp nhận và ấn định thời hạn 2 tháng để người nộp đơn có ý kiến hoặc sửa chữa thiếu sót. Nếu người nộp đơn không sửa chữa thiếu sót/sửa chữa thiếu sót không đạt yêu cầu/không có ý kiến phản đối/ý kiến phản đối không xác đáng thì Cục Sở hữu trí tuệ ra quyết định từ chối chấp nhận đơn.</li>
                                        </ul>
                                    </li>
                                </ul>

                                <p className="text-base/7 text-gray-700 mt-4"><strong>Bước 3: Công bố đơn</strong></p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700'>🔹 Sau khi có quyết định chấp nhận đơn hợp lệ, đơn sẽ được công bố trên Công báo sở hữu công nghiệp.</li>
                                </ul>

                                <p className="text-base/7 text-gray-700 mt-4"><strong>Bước 4: Thẩm định nội dung đơn</strong></p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700'>🔹 Đánh giá khả năng được bảo hộ của đối tượng nêu trong đơn theo các điều kiện bảo hộ, qua đó xác định phạm vi bảo hộ tương ứng.</li>
                                </ul>

                                <p className="text-base/7 text-gray-700 mt-4"><strong>Bước 5: Ra quyết định cấp/từ chối cấp văn bằng bảo hộ</strong></p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700'>🔹 Nếu đối tượng nêu trong đơn không đáp ứng được các yêu cầu về bảo hộ, Cục Sở hữu trí tuệ sẽ ra quyết định từ chối cấp văn bằng bảo hộ;</li>
                                    <li className='text-gray-700'>🔹 Nếu đối tượng nêu trong đơn đáp ứng được các yêu cầu về bảo hộ, và người nộp đơn nộp phí, lệ phí đầy đủ, đúng hạn thì Cục Sở hữu trí tuệ sẽ ra quyết định cấp văn bằng bảo hộ, ghi nhận vào Sổ đăng ký quốc gia về nhãn hiệu và công bố trên Công báo Sở hữu công nghiệp.</li>
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
            </section>


            <Section11 />
        </section>
    );
}

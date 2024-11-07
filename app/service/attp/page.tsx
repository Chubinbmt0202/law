
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
                        <h2 className="mt-2 mb-4 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xls">TẤT CẢ NHỮNG ĐIỀU DOANH NGHIỆP CẦN BIẾT VỀ GIẤY CHỨNG NHẬN AN TOÀN THỰC PHẨM LÀ GÌ?</h2>
                        <p className='mb-3 text-base/7 text-gray-700'>Giấy chứng nhận an toàn thực phẩm có một vai trò đặc biệt quan trọng đối với các doanh nghiệp hoạt động trong chuỗi cung ứng thực phẩm. Tầm quan trọng và lợi ích to lớn từ giấy chứng nhận này là gì ?</p>

                        <div>
                            <h3 className="text-base font-bold mt-4">1. Giấy chứng nhận an toàn thực phẩm là gì?</h3>
                            <p className="text-base/7 text-gray-700 mt-4">Cơ sở sản xuất, kinh doanh thực phẩm bắt buộc phải có Giấy Chứng Nhận Cơ Sở Đủ Điều Kiện An Toàn Thực Phẩm (gọi tắt là giấy chứng nhận an toàn thực phẩm) khi hoạt động, trừ trường hợp quy định tại Khoản 1 Điều 12 Nghị định Số: 15/2018/NĐ-CP.</p>
                            <p className="text-base/7 text-gray-700 mt-4">Đây là một loại giấy tờ được cấp cho các cơ sở, doanh nghiệp sản xuất, kinh doanh sản phẩm/ dịch vụ về thực phẩm bởi các cơ quan chức năng có thẩm quyền của nhà nước.</p>
                            <p className="text-base/7 text-gray-700 mt-4">Mục đích của loại giấy chứng nhận an toàn thực phẩm này là nhằm chứng minh doanh nghiệp đó đã đáp ứng đầy đủ các điều kiện cần thiết về an toàn và vệ sinh thực phẩm.</p>
                            <p className="text-base/7 text-gray-700 mt-4">Việc xin cấp giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm đòi hỏi:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>- Chủ doanh nghiệp phải nắm thực vững các kiến thức về pháp lý, điều kiện, hồ sơ, thủ tục, sức khỏe, ….</li>
                                <li className='text-gray-700 mt-3'>- Và nhiều thủ tục như quy định về lắp đặt cơ sở, nhà xưởng, kinh doanh, bếp ăn đến đón tiếp đoàn thanh tra kiểm tra, …</li>
                            </ul>
                            <h3 className="text-base font-bold mt-4">2. Cơ quan nào cấp giấy chứng nhận an toàn thực phẩm?</h3>
                            <p className="text-base/7 text-gray-700 mt-4">Căn cứ vào sản phẩm/dịch vụ về thực phẩm thực tế của doanh nghiệp là gì mà đơn vị cấp giấy chứng nhận an toàn thực phẩm cũng khác nhau. Hiện nay, các cơ quan có thẩm quyền trong việc cấp giấy phép này bao gồm:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>- Bộ Y tế: đối với các cơ sở chế biến thức ăn, doanh nghiệp kinh doanh dịch vụ ăn uống.</li>
                                <li className='text-gray-700 mt-3'>- Bộ Nông nghiệp & Phát triển Nông thôn: đối với các cơ sở, doanh nghiệp sản xuất, kinh doanh nông, lâm, thủy sản.</li>
                                <li className='text-gray-700 mt-3'>- Bộ Công thương: đối với các cơ sở, doanh nghiệp sản xuất kinh doanh thực phẩm.</li>
                            </ul>
                            <h3 className="text-base font-bold mt-4">3. Giấy chứng nhận an toàn thực phẩm có thời hạn bao lâu?</h3>
                            <p className="text-base/7 text-gray-700 mt-4">Thời hạn tối đa của giấy chứng nhận an toàn thực phẩm là 3 năm kể từ ngày được cấp. Trong thời gian giấy chứng nhận còn hiệu lực, các cơ quan quản lý có thẩm quyền của nhà nước sẽ tiến hành các cuộc kiểm tra định kỳ và/hoặc kiểm tra đột xuất. Cụ thể như sau:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>- Không quá 2 lần/năm: với giấy chứng nhận an toàn thực phẩm do đơn vị chức năng được UBND tỉnh/thành phố trực thuộc trung ương ủy quyền cấp.</li>
                                <li className='text-gray-700 mt-3'>- Không quá 3 lần/năm: với giấy chứng nhận an toàn thực phẩm do đơn vị chức năng được UBND cấp huyện/quận ủy quyền cấp.</li>
                                <li className='text-gray-700 mt-3'>- Không quá 4 lần/năm: với giấy chứng nhận an toàn thực phẩm do đơn vị chức năng được UBND cấp xã/phường cấp.</li>
                            </ul>
                            <p className="text-base/7 text-gray-700 mt-4">Gia hạn giấy chứng nhận an toàn thực phẩm: Trước 6 tháng trước khi hết hiệu lực của giấy chứng nhận doanh nghiệp cần phải tái đăng ký và nộp kèm hồ sơ để được cấp giấy chứng nhận mới (trong trường hợp doanh nghiệp tiếp tục sản xuất kinh doanh thực phẩm).</p>
                            <h3 className="text-base font-bold mt-4">4. Lợi ích của giấy chứng nhận an toàn thực phẩm là gì?</h3>
                            <p className="text-base/7 text-gray-700 mt-4">Giấy chứng nhận an toàn thực phẩm có một vai trò đặc biệt quan trọng đối với các doanh nghiệp hoạt động trong chuỗi cung ứng thực phẩm. Những lợi ích to lớn mà loại giấy này có thể đem đến cho doanh nghiệp bao gồm:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>- Thể hiện sự tuân thủ của doanh nghiệp với các quy định của pháp luật. Tránh trường hợp bị xử phạt do thiếu giấy chứng nhận an toàn thực phẩm gây tổn hại cả về tiền bạc và danh tiếng doanh nghiệp.</li>
                                <li className='text-gray-700 mt-3'>- Tạo được niềm tin cho khách hàng, cộng đồng về chất lượng và sự an toàn của các sản phẩm/dịch vụ thực phẩm do doanh nghiệp cung cấp. Từ đó gia tăng sức mua của sản phẩm cũng như tăng cơ hội trúng thầu, nhận thầu.</li>
                                <li className='text-gray-700 mt-3'>- Góp phần vào phát triển một thị trường sản xuất, kinh doanh thực phẩm phát triển bền vững cả về mặt lợi ích kinh tế lẫn về mặt lợi ích xã hội.</li>
                                <li className='text-gray-700 mt-3'>- Giúp doanh nghiệp kiểm soát và duy trì ổn định, nhất quán về chất lượng và an toàn vệ sinh thực phẩm.</li>
                                <li className='text-gray-700 mt-3'>- Là cơ sở để doanh nghiệp thực hiện công bố tiêu chuẩn chất lượng sản phẩm hoặc để xin giấy chứng nhận lưu hành tự do hay xin giấy phép để thực hiện hoạt động quảng cáo cho thực phẩm.</li>
                            </ul>
                            <p className="text-base/7 text-gray-700 mt-4">Ngoài ra còn có rất nhiều những lợi ích khác nữa mà giấy chứng nhận an toàn thực phẩm mang lại cho doanh nghiệp.</p>
                        </div>

                        <h3 className="text-base font-bold my-4">5. Cơ sở, doanh nghiệp nào cần phải có giấy chứng nhận an toàn thực phẩm ?</h3>

                        <div className="container mx-auto">
                            <table className="min-w-full bg-white border border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b">Các cơ sở CẦN CÓ giấy chứng nhận an toàn thực phẩm</th>
                                        <th className="py-2 px-4 border-b">Các cơ sở KHÔNG CẦN giấy chứng nhận an toàn thực phẩm</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 border-b">Cơ sở kinh doanh các dịch vụ ăn uống</td>
                                        <td className="py-2 px-4 border-b">Cơ sở sản xuất ban đầu nhỏ lẻ</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b">Cơ sở kinh doanh buôn bán thực phẩm</td>
                                        <td className="py-2 px-4 border-b">Cơ sở sản xuất, kinh doanh thực phẩm không có địa điểm cố định</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b">Tiệm ăn/Cửa hàng ăn</td>
                                        <td className="py-2 px-4 border-b">Cơ sở sơ chế nhỏ lẻ</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b">Nhà hàng ăn uống ( trên 50 người cùng lúc)</td>
                                        <td className="py-2 px-4 border-b">
                                            Cơ sở kinh doanh thực phẩm có quy mô nhỏ lẻ</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b">Quán ăn</td>
                                        <td className="py-2 px-4 border-b">Cơ sở kinh doanh thực phẩm được bao gói sẵn</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b">Căn tin</td>
                                        <td className="py-2 px-4 border-b">Cơ sở sản xuất, kinh doanh dụng cụ, vật liệu bao gói chứa đựng thực phẩm</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b">Nhà ăn tập thể</td>
                                        <td className="py-2 px-4 border-b">Nhà hàng trong khách sạn</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        <h3 className="text-base font-bold mt-4">7. Quy trình xin cấp giấy phép an toàn thực phẩm</h3>
                        <p className="text-base/7 text-gray-700 mt-4">Dưới đây là Trình tự thông thường cho các doanh nghiệp muốn xin cấp giấy chứng nhận an toàn thực phẩm tham khảo:</p>
                        <ul className='ml-4 mt-3'>
                            <li className='text-gray-700'>- Bước 1: Đăng ký xin cấp giấy phép VSATTP (nộp kèm hồ sơ) tại cơ quan chức năng có thẩm quyền;</li>
                            <li className='text-gray-700 mt-3'>- Bước 2: Cơ quan quản lý có thẩm quyền sẽ tiếp nhận và xét duyệt hồ sơ (15 ngày kể từ khi nhận được hồ sơ). Nếu như hồ sơ hợp lệ, cơ quan có thẩm quyền sẽ tới cơ sở sản xuất, kinh doanh của doanh nghiệp để tiến hành kiểm tra, đánh giá thực tế các điều kiện về đảm bảo VSATTP;</li>
                            <li className='text-gray-700 mt-3'>- Bước 3: Nếu kết quả kiểm tra thực tế là đủ điều kiện, doanh nghiệp sẽ được cấp giấy chứng nhận an toàn thực phẩm theo mẫu giấy chứng nhận vệ sinh an toàn thực phẩm.</li>
                        </ul>
                        <p className="text-base/7 text-gray-700 mt-4"><em>*Nếu kết quả là không đủ điều kiện, cơ quan quản lý có thẩm quyền sẽ phản hồi lại rõ lý do không đủ điều kiện kèm theo thời hạn tái thẩm định (tối đa là 3 tháng) bằng văn bản tới cho doanh nghiệp.</em></p>
                        <p className="text-base/7 text-gray-700 mt-4"><em>*Nếu kết quả vẫn là không đủ điều kiện, đoàn đánh giá, thẩm định sẽ lập biên bản và đề xuất với cơ quan quản lý có thẩm quyền để đình chỉ hoạt động của doanh nghiệp.</em></p>

                        <h3 className="text-base font-bold mt-4">8. Hồ sơ đăng ký xin cấp giấy chứng nhận an toàn thực phẩm gồm những hồ sơ gì?</h3>
                        <ul className='ml-4 mt-3'>
                            <li className='text-gray-700'>- Đơn đề nghị cấp giấy phép an toàn thực phẩm cho cơ sở theo mẫu được quy định của cơ quan thẩm quyền (theo mẫu)</li>
                            <li className='text-gray-700 mt-3'>- Bản sao công chứng giấy đăng kí kinh doanh ngành liên quan đến thực phẩm/ sản phẩm</li>
                            <li className='text-gray-700 mt-3'>- Bản thiết kế mặt bằng cơ sở và khu vực sản xuất, kinh doanh</li>
                            <li className='text-gray-700 mt-3'>- Sơ đồ quy trình bảo quản thực phẩm và sản xuất tại cơ sở.</li>
                            <li className='text-gray-700 mt-3'>- Bản khai về cơ sở vật chất của cơ sở.</li>
                            <li className='text-gray-700 mt-3'>- Bản sao công chứng giấy chứng nhận sức khỏe của chủ cơ sở và các nhân viên trực tiếp làm việc tại cơ sở.</li>
                            <li className='text-gray-700 mt-3'>- Giấy chứng nhận về kiến thức an toàn vệ sinh thực phẩm của chủ cơ sở và người trực tiếp tham gia sản xuất.</li>
                            <li className='text-gray-700 mt-3'>- Giấy chứng thực về nguồn gốc nguyên liệu và kiểm định nguồn nước sử dụng.</li>
                            <li className='text-gray-700 mt-3'>- Bản cam kết đảm bảo an toàn vệ sinh thực phẩm theo mẫu quy định.</li>
                        </ul>

                        <h3 className="text-base font-bold mt-4">9. Cơ sở, doanh nghiệp đã có Giấy chứng nhận Hệ thống Quản lý an toàn thực phẩm (HACCP, ISO 22000…) rồi thì có cần phải có giấy chứng nhận an toàn thực phẩm?</h3>
                        <p className="text-base/7 text-gray-700 mt-4">Cụ thể theo Điều 12, Nghị định 15/2018/NĐCP ngày 02/02/2018 hướng dẫn thi hành một số điều của Luật an toàn thực phẩm năm 2010 nêu: Cơ sở không thuộc diện cấp Giấy chứng nhận an toàn thực phẩm trong đó có bao gồm các Cơ sở đã được cấp một trong các Giấy chứng nhận: Thực hành sản xuất tốt (GMP), Hệ thống phân tích mối nguy và điểm kiểm soát tới hạn (HACCP), Hệ thống quản lý an toàn thực phẩm ISO 22000, Chứng nhận hệ thống an toàn thực phẩm (FSSC 22000) hoặc tương đương còn hiệu lực.</p>
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

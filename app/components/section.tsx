// app/components/section.tsx
import Image from 'next/image';
import Section11 from './section11';

const Section = () => {

    return (
        <section className="py-8 bg-white mt-8 md:mt-1">
            <div className="relative max-w-7xl mx-auto isolate overflow-hidden bg-white py-6 sm:py-6 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                </div>

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2">
                        <h2 className="mt-2 mb-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xls">Giấy phép kinh doanh & giấy chứng nhận đăng ký doanh nghiệp
                        </h2>

                        <div className='border p-5 rounded-lg border-orange-300 mb-4'>
                            <p className='mb-2'><strong>Nội dung gồm:</strong> </p>
                            <ul>
                                <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Giấy chứng nhận đăng ký doanh nghiệp là gì?</li>
                                <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Giấy phép kinh doanh (giấy phép con) là gì?</li>
                                <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Phân biệt giấy phép kinh doanh và giấy chứng nhận đăng ký doanh nghiệp</li>
                                <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Dịch vụ làm giấy phép kinh doanh, giấy chứng nhận đăng ký kinh doanh</li>
                                <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Câu hỏi về giấy phép kinh doanh & giấy chứng nhận đăng ký doanh nghiệp</li>
                            </ul>
                        </div>
                        <p className='mb-3 text-base/7 text-gray-700'>Giấy chứng nhận đăng ký doanh nghiệp và giấy phép kinh doanh là 2 loại giấy tờ pháp lý quan trọng mà doanh nghiệp phải có nếu muốn đi vào hoạt động một cách hợp pháp. </p>
                        <p className='mb-3 text-base/7 text-gray-700'>Theo kinh nghiệm tư vấn pháp lý cho doanh nghiệp của Anpha, hầu hết cá nhân, tổ chức vừa thành lập đều chưa hiểu rõ 2 loại giấy này nên thường nhầm lẫn chúng là 1. Bài viết này sẽ giúp bạn phân biệt giấy phép kinh doanh và giấy chứng nhận đăng ký doanh nghiệp.</p>


                        <div className="mt-8">
                            <p className="text-xl font-bold text-indigo-600 uppercase">Giấy chứng nhận đăng ký doanh nghiệp là gì?</p>
                            <p className="text-base/7 text-gray-700 mt-4">Giấy chứng nhận đăng ký doanh nghiệp (giấy chứng nhận đăng ký kinh doanh hay thường được gọi tắt là giấy chứng nhận kinh doanh) có tên tiếng Anh là Certificate of Business registration, là văn bản bằng bản điện tử hoặc bản giấy do cơ quan đăng ký kinh doanh cấp cho doanh nghiệp.</p>
                            <p className="text-base/7 text-gray-700 mt-4">Có thể nói, giấy chứng nhận đăng ký kinh doanh (ĐKKD) là loại giấy tờ đầu tiên của doanh nghiệp khi bắt đầu kinh doanh. Trên đó sẽ ghi lại những thông tin cơ bản của doanh nghiệp như:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>🔹 Tên doanh nghiệp;</li>
                                <li className='text-gray-700'>🔹 Địa chỉ trụ sở chính;</li>
                                <li className='text-gray-700'>🔹 Mã số thuế;</li>
                                <li className='text-gray-700'>🔹 Ngành nghề kinh doanh;</li>
                                <li className='text-gray-700'>🔹 Vốn điều lệ và tỷ lệ góp vốn của các thành viên/cổ đông…</li>
                            </ul>
                            <p className="text-base/7 text-gray-700 mt-4">Từ đó có thể hiểu, giấy chứng nhận đăng ký kinh doanh là giấy tờ chứng minh doanh nghiệp được thành lập một cách hợp pháp.</p>
                        </div>
                        <div className="mt-8">
                            <p className="text-xl font-bold text-indigo-600 uppercase">Giấy phép kinh doanh (giấy phép con) là gì?</p>
                            <p className="font-bold mt-4 text-indigo-600">1. Định nghĩa về giấy phép kinh doanh (GPKD)</p>
                            <div className="mt-2">
                                <p className="text-base/7 text-gray-700 mt-4">Giấy phép kinh doanh (tên tiếng Anh là Business license) hay còn được gọi là giấy phép con, là loại giấy phép được cơ quan có thẩm quyền cấp cho các cá nhân, tổ chức kinh doanh ngành nghề có điều kiện. Tức là, cá nhân hoặc tổ chức chỉ được cấp giấy phép kinh doanh khi đáp ứng đủ các điều kiện của ngành nghề kinh doanh.</p>
                                <p className="text-base/7 text-gray-700 mt-4">Trong giao tiếp hàng ngày, mọi người thường dùng thuật ngữ “giấy phép kinh doanh” để nói về “giấy chứng nhận đăng ký kinh doanh”, dẫn đến nhiều trường hợp bị nhầm lẫn khi làm hồ sơ với cơ quan nhà nước.</p>
                                <p className="text-base/7 text-gray-700 mt-4">Một trong những điều kiện để được cấp giấy phép kinh doanh là bạn phải có giấy chứng nhận đăng ký kinh doanh. Nói cách khác, giấy phép kinh doanh được cấp sau khi doanh nghiệp được cấp giấy chứng nhận đăng ký kinh doanh.</p>
                                <p className="text-base/7 text-gray-700 mt-4">Cuối cùng, giấy phép kinh doanh sẽ được cấp dưới các hình thức như: giấy phép, giấy xác nhận, văn bản xác nhận hoặc giấy chứng nhận đủ điều kiện kinh doanh…</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="font-bold mt-4 text-indigo-600">2. Các loại giấy phép kinh doanh phổ biến hiện nay</p>
                            <div className="mt-2">
                                <p className="text-base/7 text-gray-700 mt-4">Sau khi hoàn thành thủ tục đăng ký kinh doanh, được cấp giấy chứng nhận đăng ký kinh doanh thì tùy vào ngành nghề hoạt động mà doanh nghiệp cần tiếp tục thực hiện thủ tục xin giấy phép con. Dưới đây là một số giấy phép con của một số ngành nghề có điều kiện.</p>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700 mb-2'>🔹 Giấy chứng nhận đủ điều kiện phòng cháy chữa cháy khi hoạt động ngành nghề khách sạn, nhà hàng, nhà ở, quán karaoke, cửa hàng xăng dầu…;</li>
                                    <li className='text-gray-700 mb-2'>🔹 Giấy chứng nhận cơ sở đủ điều kiện ATTP đối với các ngành nghề, cơ sở kinh doanh dịch vụ ăn uống, chế biến thực phẩm…;</li>
                                    <li className='text-gray-700 mb-2'>🔹 Giấy phép kinh doanh du lịch lữ hành nội địa, giấy phép kinh doanh lữ hành quốc tế đối với ngành nghề kinh doanh du lịch, lữ hành;</li>
                                    <li className='text-gray-700 mb-2'>🔹 Giấy phép kinh doanh bán buôn rượu, giấy phép kinh doanh bán lẻ rượu đối với ngành nghề kinh doanh rượu, thức uống có cồn;</li>
                                    <li className='text-gray-700 mb-2'>🔹 Giấy chứng nhận đủ điều kiện an ninh trật tự khi kinh doanh dịch vụ bảo vệ…</li>
                                </ul>
                            </div>
                        </div>

                        <Image
                            src="/images/dang-ky-giay-phep-kinh-doanh-02.jpg"
                            alt="Background"
                            width={800}
                            height={300}
                        />

                        <div className="mt-8">
                            <p className="text-xl font-bold text-indigo-600 uppercase">Phân biệt giấy phép kinh doanh và giấy chứng nhận đăng ký doanh nghiệp</p>
                            <p className="text-base/7 text-gray-700 mt-4">Sau khi tìm hiểu về khái niệm, Anpha sẽ giúp bạn phân biệt kỹ hơn về giấy chứng nhận đăng ký doanh nghiệp và giấy phép kinh doanh dựa trên các tiêu chí, cơ sở sau: ý nghĩa pháp lý, điều kiện cấp, hồ sơ xin cấp, thủ tục cấp giấy phép và thời hạn của 2 loại giấy phép trên.</p>

                            <p className="font-bold mt-4 text-indigo-600">1. Ý nghĩa pháp lý của giấy phép kinh doanh, giấy chứng nhận đăng ký doanh nghiệp</p>

                            <p className="font-bold mt-4 text-black">1.1. Giấy phép kinh doanh</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>🔹 Là sự cho phép bằng văn bản của cơ quan nhà nước có thẩm quyền đối với cá nhân/tổ chức đủ điều kiện hoạt động kinh doanh một số ngành, nghề có điều kiện;</li>
                                <li className='text-gray-700'>🔹 Tùy ngành nghề mà cá nhân, tổ chức phải thực hiện thủ tục liên quan để được cấp giấy phép kinh doanh.</li>
                            </ul>

                            <p className="font-bold mt-4 text-black">1.2. Giấy chứng nhận đăng ký doanh nghiệp</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>🔹 Là loại giấy tờ được cơ quan đăng ký kinh doanh cấp với mục đích quản lý và bảo hộ quyền sở hữu tên doanh nghiệp;</li>
                                <li className='text-gray-700'>🔹 Doanh nghiệp phải thực hiện thủ tục đăng ký kinh doanh để được cấp giấy chứng nhận đăng ký doanh nghiệp.</li>
                            </ul>

                            <p className="font-bold mt-4 text-indigo-600">2. Điều kiện cấp giấy phép kinh doanh, giấy chứng nhận đăng ký doanh nghiệp</p>

                            <p className="font-bold mt-4 text-black">2.1. Giấy phép kinh doanh</p>
                            <p className="text-base/7 text-gray-700 mt-4">Đối với mỗi ngành nghề khác nhau, quy định về điều kiện cấp giấy phép kinh doanh cũng sẽ khác nhau. Khi đó, điều kiện cấp giấy phép kinh doanh có thể là: về cơ sở vật chất, về chứng chỉ hành nghề, bằng cấp, vốn điều lệ, vốn ký quỹ hoặc người đại diện pháp luật…</p>

                            <p className="font-bold mt-4 text-black">Ví dụ:</p>
                            <p className="text-base/7 text-gray-700 mt-4">Anpha ví dụ cụ thể về điều kiện cấp giấy phép kinh doanh ở 2 trường hợp: xin giấy phép VSATTP và xin giấy phép kinh doanh lữ hành nội địa để bạn thấy được sự khác nhau về điều kiện xin cấp giấy phép kinh doanh ở mỗi ngành nghề.</p>

                            <p className="font-bold mt-4 text-black">➧ Xin giấy phép VSATTP</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>🔹 Đảm bảo yếu tố an toàn vệ sinh đối với các dụng cụ nấu nướng, chế biến;</li>
                                <li className='text-gray-700'>🔹 Có đăng ký ngành, nghề kinh doanh thực phẩm trong giấy chứng nhận ĐKKD;</li>
                                <li className='text-gray-700'>🔹 Trang bị đầy đủ các đồ dùng, dụng cụ đựng riêng cho thực phẩm chín và thực phẩm sống;</li>
                                <li className='text-gray-700'>🔹 Người trực tiếp chế biến, kinh doanh tuân thủ quy định về sức khỏe, kiến thức và thực hành;</li>
                                <li className='text-gray-700'>🔹 Nước dùng cho hoạt động kinh doanh, chế biến đạt quy chuẩn, đáp ứng đủ nhu cầu sử dụng.</li>
                            </ul>

                            <p className="font-bold mt-4 text-black">➧ Xin giấy phép kinh doanh lữ hành nội địa</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>🔹 Doanh nghiệp phải làm thủ tục đăng ký xin hoạt động kinh doanh lữ hành nội địa tại Sở Văn hóa, Thể thao và Du lịch nơi đặt trụ sở chính;</li>
                                <li className='text-gray-700'>🔹 Có phương án kinh doanh cụ thể, chương trình du lịch rõ ràng;</li>
                                <li className='text-gray-700'>🔹 Người phụ trách phải tốt nghiệp trung cấp chuyên ngành lữ hành trở lên hoặc tốt nghiệp trung cấp trở lên chuyên ngành khác phải có chứng chỉ nghiệp vụ điều hành du lịch nội địa.</li>
                            </ul>

                            <p className="text-base/7 text-gray-700 mt-4">Lưu ý: Như Anpha chia sẻ phần trên, để được cấp giấy phép kinh doanh, cá nhân/tổ chức phải có giấy chứng nhận đăng ký doanh nghiệp.</p>

                            <p className="font-bold mt-4 text-black">2.2. Giấy chứng nhận đăng ký doanh nghiệp</p>
                            <p className="text-base/7 text-gray-700 mt-4">Với giấy chứng nhận đăng ký kinh doanh, dù là ngành nghề nào thì bạn cần phải đảm bảo các điều kiện sau:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>🔹 Hồ sơ đăng ký theo biểu mẫu hiện hành;</li>
                                <li className='text-gray-700'>🔹 Ngành, nghề đăng ký kinh doanh không bị cấm đầu tư kinh doanh;</li>
                                <li className='text-gray-700'>🔹 Tên doanh nghiệp phải được đặt đúng theo quy định của Luật Doanh nghiệp 2020;</li>
                                <li className='text-gray-700'>🔹 Nộp đủ phí, lệ phí đăng ký doanh nghiệp theo quy định.</li>
                            </ul>

                            <p className="font-bold mt-4 text-indigo-600">3. Hồ sơ xin giấy phép kinh doanh, giấy chứng nhận đăng ký kinh doanh</p>

                            <p className="font-bold mt-4 text-black">3.1. Giấy phép kinh doanh</p>
                            <p className="font-bold mt-4 text-indigo-600">3. Hồ sơ xin giấy phép kinh doanh, giấy chứng nhận đăng ký kinh doanh</p>

                            <p className="font-bold mt-4 text-black">3.1. Giấy phép kinh doanh</p>
                            <div className='border p-5 rounded-lg border-orange-300 my-4'>
                                <p className="text-base/7 font-bold ">Về cơ bản, hồ sơ xin giấy phép kinh doanh sẽ gồm có những thành phần sau:</p>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>🔹 Giấy đề nghị xin giấy phép kinh doanh có điều kiện;</li>
                                    <li className='text-gray-700'>🔹 Bản sao giấy chứng nhận đăng ký doanh nghiệp;</li>
                                    <li className='text-gray-700'>🔹 Bản sao điều lệ công ty;</li>
                                    <li className='text-gray-700'>🔹 Bản sao hợp lệ CMND/CCCD/hộ chiếu của người đứng đầu doanh nghiệp/cổ đông sáng lập/thành viên góp vốn;</li>
                                    <li className='text-gray-700'>🔹 Giấy tờ chứng minh trình độ nghiệp vụ và kinh nghiệm của người trực tiếp điều hành đối với lĩnh vực hoạt động;</li>
                                    <li className='text-gray-700'>🔹 Các loại văn bản, tài liệu liên quan chứng minh đủ điều kiện kinh doanh đối với từng ngành, nghề cụ thể.</li>
                                </ul>
                            </div>
                            <p className="text-base/7 text-gray-700 mt-4">Lưu ý:</p>
                            <p className="text-base/7 text-gray-700 mt-4">Đối với các ngành, nghề khác nhau sẽ có những yêu cầu về thông tin giấy tờ, văn bản liên quan đi kèm khác nhau.</p>

                            <p className="font-bold mt-4 text-black">Ví dụ:</p>
                            <p className="font-bold mt-4 text-black">➧ Khi xin giấy phép vệ sinh ATTP</p>
                            <p className="text-base/7 text-gray-700 mt-4">Hồ sơ ngoài giấy tờ chung, bạn sẽ phải nộp thêm các văn bản, giấy tờ khác như: bản thuyết minh về trang thiết bị, cơ sở vật chất, dụng cụ đảm bảo điều kiện VSATTP, giấy xác nhận sức khỏe, giấy xác nhận tập huấn kiến thức về ATTP của chủ doanh nghiệp, người trực tiếp sản xuất.</p>

                            <p className="font-bold mt-4 text-black">➧ Khi xin giấy phép phòng cháy chữa cháy</p>
                            <p className="text-base/7 text-gray-700 mt-4">Hồ sơ sẽ cần thêm các văn bản, tài liệu liên quan như: bảng thống kê các phương tiện PCCC, phương án chữa cháy…</p>

                            <p className="font-bold mt-4 text-black">3.2. Giấy chứng nhận đăng ký doanh nghiệp</p>
                            <p className="text-base/7 text-gray-700 mt-4">Hồ sơ cơ bản sẽ gồm có những giấy tờ sau:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>🔹 Giấy đề nghị đăng ký doanh nghiệp;</li>
                                <li className='text-gray-700'>🔹 Văn bản, giấy tờ hợp lệ đối với từng loại hình doanh nghiệp (*):</li>
                                <li className='text-gray-700'>🔹 Điều lệ công ty;</li>
                                <li className='text-gray-700'>🔹 Danh sách thành viên;</li>
                                <li className='text-gray-700'>🔹 Giấy tờ chứng thực cá nhân CCCD/CMND/hộ chiếu của người đại diện pháp luật;</li>
                                <li className='text-gray-700'>🔹 Văn bản ủy quyền (trường hợp ủy quyền cho người khác nộp hồ sơ).</li>
                            </ul>
                            <p className="text-base/7 text-gray-700 mt-4">(*): Tùy vào từng loại hình doanh nghiệp mà nội dung văn bản, giấy tờ sẽ có sự khác nhau. Bạn có thể tham khảo chi tiết hồ sơ xin giấy chứng nhận đăng ký doanh nghiệp TNHH và công ty cổ phần tại bài viết sau:</p>
                            <p className="text-base/7 text-gray-700 mt-4"> Hồ sơ xin giấy chứng nhận đăng ký doanh nghiệp TNHH;</p>
                            <p className="text-base/7 text-gray-700 mt-4"> Hồ sơ xin giấy chứng nhận đăng ký công ty cổ phần.</p>

                            <p className="font-bold mt-4 text-indigo-600">4. Thủ tục đăng ký giấy phép kinh doanh, giấy chứng nhận đăng ký doanh nghiệp</p>

                            <p className="font-bold mt-4 text-black">4.1. Giấy phép kinh doanh</p>
                            <p className="text-base/7 text-gray-700 mt-4">Do mỗi ngành, nghề kinh doanh khác nhau có những yêu cầu về điều kiện khác nhau, do đó cơ quan tiếp nhận hồ sơ, cách thức nộp hồ sơ, thời gian xét duyệt và cấp giấy phép cũng sẽ có sự khác biệt.</p>

                            <p className="font-bold mt-4 text-black">Ví dụ:</p>
                            <p className="font-bold mt-4 text-black">➧ Xin giấy chứng nhận ATTP:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>🔹 1 trong 3 cơ quan tiếp nhận hồ sơ: Bộ Công thương, Bộ Y tế hoặc Bộ Nông nghiệp và Phát triển nông thôn (tùy vào lĩnh vực kinh doanh, cá nhân/tổ chức lựa chọn cơ quan phù hợp);</li>
                                <li className='text-gray-700'>🔹 Thời gian xét duyệt hồ sơ: Trong vòng 15 ngày kể từ ngày nhận hồ sơ hợp lệ.</li>
                            </ul>

                            <p className="font-bold mt-4 text-black">➧ Xin giấy phép PCCC:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>🔹 1 trong 2 cơ quan tiếp nhận hồ sơ: Cục Cảnh sát PCCC thuộc Bộ Công an hoặc Phòng Cảnh sát PCCC (tùy vào ngành, nghề, lĩnh vực kinh doanh mà cá nhân, tổ chức lựa chọn cơ quan phù hợp);</li>
                                <li className='text-gray-700'>🔹 Thời gian xét duyệt hồ sơ: Từ 5 - 15 ngày kể từ ngày nhận hồ sơ hợp lệ.</li>
                            </ul>
                            <p className="text-base/7 text-gray-700 mt-4">Lưu ý:</p>
                            <p className="text-base/7 text-gray-700 mt-4">Đối với giấy phép kinh doanh, cơ quan thẩm quyền sẽ kiểm tra, thẩm định trực tiếp tại cơ sở kinh doanh. Nếu cơ sở đảm bảo đúng quy định, cơ quan sẽ tiến hành cấp giấy phép.</p>

                            <p className="font-bold mt-4 text-black">4.2. Giấy chứng nhận đăng ký doanh nghiệp</p>
                            <p className="text-base/7 text-gray-700 mt-4">Thủ tục xin giấy chứng nhận đăng ký doanh nghiệp được thực hiện tại Phòng Đăng ký kinh doanh thuộc Sở Kế hoạch và Đầu tư nơi doanh nghiệp đặt trụ sở chính.</p>
                            <p className="text-base/7 text-gray-700 mt-4">Trong thời hạn 3 ngày làm việc kể từ ngày nhận hồ sơ hợp lệ, cơ quan sẽ tiến hành cấp giấy chứng nhận cho doanh nghiệp, theo đó:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>🔹 Trường hợp hồ sơ không hợp lệ, cơ quan thẩm quyền sẽ gửi thông báo bằng văn nội dung cần bổ sung, sửa đổi;</li>
                                <li className='text-gray-700'>🔹 Trường hợp từ chối cấp, cơ quan thẩm quyền gửi thông báo bằng văn bản nêu rõ lý do.</li>
                            </ul>

                            <p className="font-bold mt-4 text-indigo-600">5. Thời hạn của giấy phép kinh doanh, giấy phép đăng ký kinh doanh</p>

                            <p className="font-bold mt-4 text-black">5.1. Giấy phép kinh doanh</p>
                            <p className="text-base/7 text-gray-700 mt-4">Hầu hết các giấy phép kinh doanh, giấy chứng nhận đủ điều kiện kinh doanh đều có thời hạn sử dụng. Thời hạn cụ thể sẽ căn cứ vào ngành nghề cũng như loại giấy phép kinh doanh.</p>

                            <p className="font-bold mt-4 text-black">Ví dụ:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>🔹 Giấy phép PCCC, giấy phép bán buôn rượu có thời hạn 5 năm kể từ ngày cấp;</li>
                                <li className='text-gray-700'>🔹 Giấy phép VSATTP có thời hạn 3 năm kể từ ngày cấp.</li>
                            </ul>
                            <p className="text-base/7 text-gray-700 mt-4">Lưu ý:</p>
                            <p className="text-base/7 text-gray-700 mt-4">Khi giấy phép hết hạn, cá nhân/tổ chức bắt buộc phải làm thủ tục gia hạn hoặc cấp mới để có thể tiếp tục hoạt động kinh doanh ngành nghề đó.</p>

                            <p className="font-bold mt-4 text-black">5.2. Giấy chứng nhận đăng ký kinh doanh</p>
                            <p className="text-base/7 text-gray-700 mt-4">Hiện tại, luật không có quy định về thời hạn sử dụng đối với giấy chứng nhận đăng ký doanh nghiệp.</p>
                        </div>

                        <div className="my-8">
                            <p className="text-base/7 font-bold text-black">THỜI GIAN CẤP GIẤY PHÉP KINH DOANH</p>
                            <p className="text-base/7 text-gray-700 mt-4">Tại Kế toán Anpha, thủ tục đăng ký giấy phép kinh doanh công ty cổ phần hay giấy phép kinh doanh công ty TNHH đều sẽ được hoàn thành nhanh chóng, chỉ trong khoảng thời gian từ 3 ngày làm việc:</p>
                            <p className="text-base/7 text-gray-700 mt-4">Kế toán Anpha sẽ thay bạn thực hiện các việc sau:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>1. Soạn toàn bộ hồ sơ đăng ký xin giấy phép kinh doanh;</li>
                                <li className='text-gray-700'>2. Trình khách hàng ký hồ sơ tận nơi - miễn phí chi phí giao nhận;</li>
                                <li className='text-gray-700'>3. Đại diện doanh nghiệp nộp hồ sơ xin giấy phép kinh doanh tại Sở KH&ĐT;</li>
                                <li className='text-gray-700'>4. Chỉ trong vòng 3 ngày làm việc, Sở KH&ĐT sẽ kiểm duyệt hồ sơ và cấp GPKD;</li>
                                <li className='text-gray-700'>5. Đại diện doanh nghiệp nhận giấy phép kinh doanh tại Sở KH&ĐT;</li>
                                <li className='text-gray-700'>6. Bàn giao giấy phép kinh doanh cùng con dấu pháp nhân tận nơi - miễn phí giao nhận.</li>
                            </ul>
                        </div>
                        <Image
                            src="/images/dang-ky-giay-phep-kinh-doanh-03.jpg"
                            alt="Background"
                            width={800}
                            height={300}
                        />


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
    );
};

export default Section;
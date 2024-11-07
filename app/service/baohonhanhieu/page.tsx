
import React from 'react';
import Image from 'next/image';
import Banner3 from '@/app/components/banner3';
import Section11 from '@/app/components/section11';

export default function Batdongsan() {

    return (
        <section className="py-16 bg-white md:mt-1">
            <Banner3 />
            <div className="relative max-w-7xl mx-auto isolate overflow-hidden bg-white py-6 sm:py-6 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                </div>

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2">
                        <h2 className="mt-2 mb-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xls">Giấy phép lao động</h2>
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

                        <div>
                            <h3 className="text-base font-bold mt-4">a Trình tự thực hiện:</h3>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>- Bước 1: Trước ít nhất 15 ngày làm việc, kể từ ngày người lao động nước ngoài dự kiến bắt đầu làm việc cho người sử dụng lao động thì người sử dụng lao động nộp hồ sơ đề nghị cấp giấy phép lao động bằng hình thức lập hồ sơ trực tuyến trên Cổng Dịch vụ công hoặc gửi hồ sơ qua đường bưu điện hoặc nộp hồ sơ trực tiếp cho Bộ phận tiếp nhận của Ban Quản lý Khu kinh tế tại Trung tâm Phục vụ hành chính công, địa chỉ: Số 727, Quốc lộ 14, phường Tân Bình, Thành phố Đồng Xoài, tỉnh Bình Phước.</li>
                                <li className='text-gray-700 mt-3'>- Bước 2: Trong thời hạn 05 ngày làm việc, kể từ ngày nhận đủ hồ sơ đề nghị cấp giấy phép lao động, Ban Quản lý Khu kinh tế tỉnh Bình Phước cấp giấy phép lao động cho người lao động nước ngoài theo mẫu do Bộ Lao động - Thương binh và Xã hội in và phát hành thống nhất (nội dung của giấy phép lao động theo Mẫu số 12/PLI Phụ lục I ban hành kèm theo Nghị định số 152/2020/NĐ-CP). Trường hợp không cấp giấy phép lao động thì có văn bản trả lời và nêu rõ lý do.</li>
                                <li className='text-gray-700 mt-3'>Đối với người lao động nước ngoài làm việc theo hợp đồng lao động, sau khi được cấp giấy phép lao động thì người sử dụng lao động và người lao động nước ngoài phải ký kết hợp đồng lao động bằng văn bản theo quy định của pháp luật lao động Việt Nam trước ngày dự kiến làm việc cho người sử dụng lao động.</li>
                                <li className='text-gray-700 mt-3'>Người sử dụng lao động phải gửi hợp đồng lao động đã ký kết theo yêu cầu tới Ban Quản lý Khu kinh tế tỉnh Bình Phước. Hợp đồng lao động là bản gốc hoặc bản sao có chứng thực.</li>
                                <li className='text-gray-700 mt-3'>- Bước 3: Cá nhân, tổ chức nhận kết quả trên Cổng dịch vụ công hoặc nhận kết quả theo hình thức mà đã được đăng ký trước đây.</li>
                            </ul>
                            <h3 className="text-base font-bold mt-4">b Cách thức thực hiện:</h3>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>- Thực hiện trực tuyến trên Cổng dịch vụ công;</li>
                                <li className='text-gray-700 mt-3'>- Hoặc gửi hồ sơ qua hệ thống bưu chính công ích;</li>
                                <li className='text-gray-700 mt-3'>- Hoặc nộp hồ sơ trực tiếp cho Bộ phận tiếp nhận của Ban Quản lý Khu kinh tế tại Trung tâm Phục vụ hành chính công.</li>
                            </ul>
                            <h3 className="text-base font-bold mt-4">c Thành phần, số lượng hồ sơ:</h3>
                            <p className="text-base/7 text-gray-700 mt-4"><strong>Thành phần hồ sơ:</strong></p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>1. Văn bản đề nghị cấp giấy phép lao động theo mẫu số 11/PLI Phụ lục I ban hành kèm theo Nghị định số 152/2020/NĐ-CP.</li>
                                <li className='text-gray-700 mt-3'>2. Giấy chứng nhận sức khỏe hoặc giấy khám sức khỏe do cơ quan, tổ chức y tế có thẩm quyền của nước ngoài hoặc của Việt Nam cấp có giá trị trong thời hạn 12 tháng, kể từ ngày ký kết luận sức khỏe đến ngày nộp hồ sơ hoặc giấy chứng nhận có đủ sức khoẻ theo quy định của Bộ trưởng Bộ Y tế.</li>
                                <li className='text-gray-700 mt-3'>3. Bản sao có chứng thực điện tử Phiếu lý lịch tư pháp hoặc văn bản xác nhận người lao động nước ngoài không phải là người đang trong thời gian chấp hành hình phạt hoặc chưa được xóa án tích hoặc đang trong thời gian bị truy cứu trách nhiệm hình sự của nước ngoài hoặc của Việt Nam cấp.</li>
                                <li className='text-gray-700 mt-3'>Phiếu lý lịch tư pháp hoặc văn bản xác nhận người lao động nước ngoài không phải là người đang trong thời gian chấp hành hình phạt hoặc chưa được xóa án tích hoặc đang trong thời gian bị truy cứu trách nhiệm hình sự được cấp không quá 06 tháng, kể từ ngày cấp đến ngày nộp hồ sơ.</li>
                                <li className='text-gray-700 mt-3'>4. Văn bản, giấy tờ chứng minh là nhà quản lý, giám đốc điều hành, chuyên gia hoặc lao động kỹ thuật và một số nghề, công việc được quy định như sau:</li>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>+ Giấy tờ chứng minh là nhà quản lý, giám đốc điều hành;</li>
                                    <li className='text-gray-700 mt-3'>+ Giấy tờ chứng minh là chuyên gia, lao động kỹ thuật gồm: văn bằng, chứng chỉ, văn bản xác nhận của cơ quan, tổ chức, doanh nghiệp tại nước ngoài về số năm kinh nghiệm của chuyên gia, lao động kỹ thuật;</li>
                                </ul>
                                <li className='text-gray-700 mt-3'>5. 02 ảnh mầu (kích thước 4cm x 6cm, phông nền trắng, mặt nhìn thẳng, đầu để trần, không đeo kính màu), ảnh chụp không quá 06 tháng tính đến ngày nộp hồ sơ.</li>
                                <li className='text-gray-700 mt-3'>6. Văn bản chấp thuận nhu cầu sử dụng người lao động nước ngoài trừ những trường hợp không phải xác định nhu cầu sử dụng người lao động nước ngoài.</li>
                                <li className='text-gray-700 mt-3'>7. Bản sao có chứng thực hộ chiếu còn giá trị theo quy định của pháp luật.</li>
                                <li className='text-gray-700 mt-3'>8. Các giấy tờ liên quan đến người lao động nước ngoài:</li>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>- Đối với người lao động nước ngoài di chuyển trong nội bộ doanh nghiệp phải có văn bản của doanh nghiệp nước ngoài cử sang làm việc tại hiện diện thương mại của doanh nghiệp nước ngoài đó trên lãnh thổ Việt Nam và văn bản chứng minh người lao động nước ngoài đã được doanh nghiệp nước ngoài đó tuyển dụng trước khi làm việc tại Việt Nam ít nhất 12 tháng liên tục.</li>
                                    <li className='text-gray-700 mt-3'>- Đối với người lao động nước ngoài vào Việt Nam để thực hiện các loại hợp đồng hoặc thỏa thuận về kinh tế, thương mại, tài chính, ngân hàng, bảo hiểm, khoa học kỹ thuật, văn hóa, thể thao, giáo dục, giáo dục nghề nghiệp và y tế phải có hợp đồng hoặc thỏa thuận ký kết giữa đối tác phía Việt Nam và phía nước ngoài, trong đó phải có thỏa thuận về việc người lao động nước ngoài làm việc tại Việt Nam.</li>
                                    <li className='text-gray-700 mt-3'>- Đối với người lao động nước ngoài nhà cung cấp dịch vụ theo hợp đồng phải có hợp đồng cung cấp dịch vụ ký kết giữa đối tác phía Việt Nam và phía nước ngoài và văn bản chứng minh người lao động nước ngoài đã làm việc cho doanh nghiệp nước ngoài không có hiện diện thương mại tại Việt Nam được ít nhất 02 năm.</li>
                                    <li className='text-gray-700 mt-3'>- Đối với người lao động nước ngoài chào bán dịch vụ phải có văn bản của nhà cung cấp dịch vụ cử người lao động nước ngoài vào Việt Nam để đàm phán cung cấp dịch vụ.</li>
                                    <li className='text-gray-700 mt-3'>- Đối với người lao động nước ngoài làm việc cho tổ chức phi chính phủ nước ngoài, tổ chức quốc tế tại Việt Nam được phép hoạt động theo quy định của pháp luật Việt Nam phải có giấy chứng nhận của tổ chức phi chính phủ nước ngoài, tổ chức quốc tế được phép hoạt động theo quy định của pháp luật Việt Nam.</li>
                                    <li className='text-gray-700 mt-3'>- Đối với người lao động nước ngoài là nhà quản lý, giám đốc điều hành, chuyên gia và lao động kỹ thuật thì phải có văn bản của doanh nghiệp, cơ quan, tổ chức nước ngoài cử người lao động nước ngoài sang làm việc tại Việt Nam và phù hợp với vị trí dự kiến làm việc.</li>
                                </ul>
                                <li className='text-gray-700 mt-3'>9. Hồ sơ đề nghị cấp giấy phép lao động đối với một số trường hợp đặc biệt:</li>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>- Đối với người lao động nước ngoài đã được cấp giấy phép lao động, đang còn hiệu lực mà có nhu cầu làm việc cho người sử dụng lao động khác ở cùng vị trí công việc và cùng chức danh công việc ghi trong giấy phép lao động thì hồ sơ đề nghị cấp giấy phép lao động mới gồm: giấy xác nhận của người sử dụng lao động trước đó về việc người lao động hiện đang làm việc, các giấy tờ quy định tại điểm 1, 5, 6, 7, 8 nêu trên và bản sao có chứng thực giấy phép lao động đã được cấp;</li>
                                    <li className='text-gray-700 mt-3'>- Đối với người lao động nước ngoài đã được cấp giấy phép lao động và đang còn hiệu lực mà thay đổi vị trí công việc hoặc chức danh công việc hoặc hình thức làm việc ghi trong giấy phép lao động theo quy định của pháp luật nhưng không thay đổi người sử dụng lao động thì hồ sơ đề nghị cấp giấy phép lao động mới gồm các giấy tờ quy định tại điểm 1, 4, 5, 6, 7 và 8 nêu trên và giấy phép lao động hoặc bản sao có chứng thực giấy phép lao động đã được cấp.</li>
                                </ul>
                                <li className='text-gray-700 mt-3'>10. Hợp pháp hóa lãnh sự, chứng thực các giấy tờ:</li>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>Các giấy tờ quy định tại các điểm 2, 3, 4, 6 và 8 nêu trên là 01 bản gốc hoặc bản sao có chứng thực, nếu của nước ngoài thì phải được hợp pháp hóa lãnh sự, trừ trường hợp được miễn hợp pháp hóa lãnh sự theo điều ước quốc tế mà nước Cộng hòa xã hội chủ nghĩa Việt Nam và nước ngoài liên quan đều là thành viên hoặc theo nguyên tắc có đi có lại hoặc theo quy định của pháp luật; dịch ra tiếng Việt và chứng thực theo quy định của pháp luật Việt Nam.</li>
                                </ul>
                            </ul>
                            <p className="text-base/7 text-gray-700 mt-4"><strong>Số lượng hồ sơ:</strong> 01 bộ hồ sơ.</p>
                            <h3 className="text-base font-bold mt-4">d) Thời hạn giải quyết:</h3>
                            <p className="text-base/7 text-gray-700 mt-4">Thời hạn 05 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ theo quy định.</p>
                            <h3 className="text-base font-bold mt-4">đ) Đối tượng thực hiện thủ tục hành chính:</h3>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>- Doanh nghiệp hoạt động theo Luật doanh nghiệp, Luật đầu tư hoặc theo điều ước quốc tế mà Cộng hòa xã hội chủ nghĩa Việt Nam là thành viên.</li>
                                <li className='text-gray-700 mt-3'>- Doanh nghiệp hoạt động theo Luật Doanh nghiệp, Luật Đầu tư hoặc điều ước quốc tế mà nước Cộng hoà xã hội chủ nghĩa Việt Nam là thành viên có trụ sở chính tại một tỉnh, thành phố nhưng có văn phòng đại diện hoặc chi nhánh tại tỉnh, thành phố khác;</li>
                                <li className='text-gray-700 mt-3'>- Nhà thầu tham dự thầu, thực hiện hợp đồng.</li>
                                <li className='text-gray-700 mt-3'>- Văn phòng đại diện, chi nhánh của doanh nghiệp, cơ quan, tổ chức được cơ quan có thẩm quyền cấp phép thành lập.</li>
                                <li className='text-gray-700 mt-3'>- Văn phòng điều hành của nhà đầu tư nước ngoài trong hợp đồng hợp tác kinh doanh hoặc của nhà thầu nước ngoài được đăng ký hoạt động theo quy định của pháp luật;</li>
                                <li className='text-gray-700 mt-3'>- Tổ chức hành nghề luật sư tại Việt Nam theo quy định của pháp luật;</li>
                                <li className='text-gray-700 mt-3'>- Hợp tác xã, liên hiệp hợp tác xã thành lập và hoạt động theo Luật hợp tác xã;</li>
                                <li className='text-gray-700 mt-3'>- Hộ kinh doanh, cá nhân được phép hoạt động kinh doanh theo quy định của pháp luật.</li>
                                <li className='text-gray-700 mt-3'>- Cơ quan nhà nước, tổ chức chính trị, tổ chức chính trị - xã hội, tổ chức chính trị xã hội - nghề nghiệp, tổ chức xã hội, tổ chức xã hội - nghề nghiệp do Uỷ ban nhân dân cấp tỉnh, cơ quan chuyên môn thuộc Uỷ ban nhân dân cấp tỉnh, Uỷ ban nhân dân cấp huyện thành lập.</li>
                                <li className='text-gray-700 mt-3'>- Tổ chức phi chính phủ nước ngoài được cơ quan có thẩm quyền của Việt Nam cấp giấy đăng ký theo quy định của pháp luật Việt Nam.</li>
                                <li className='text-gray-700 mt-3'>- Tổ chức sự nghiệp, cơ sở giáo dục do Uỷ ban nhân dân cấp tỉnh, cơ quan chuyên môn thuộc Uỷ ban nhân dân cấp tỉnh, Uỷ ban nhân dân cấp huyện thành lập.</li>
                                <li className='text-gray-700 mt-3'>- Cơ quan, tổ chức, doanh nghiệp Việt Nam hoặc tổ chức, doanh nghiệp nước ngoài hoạt động tại Việt Nam mà người lao động nước ngoài đến làm việc theo hình thức thực hiện các loại hợp đồng hoặc thỏa thuận về kinh tế, thương mại, tài chính, ngân hàng, bảo hiểm, khoa học kỹ thuật, văn hóa, thể thao, giáo dục, giáo dục nghề nghiệp và y tế; nhà cung cấp dịch vụ theo hợp đồng.</li>
                                <li className='text-gray-700 mt-3'>- Chào bán dịch vụ;</li>
                                <li className='text-gray-700 mt-3'>- Người chịu trách nhiệm thành lập hiện diện thương mại</li>
                            </ul>
                            <h3 className="text-base font-bold mt-4">e Cơ quan thực hiện thủ tục hành chính:</h3>
                            <p className="text-base/7 text-gray-700 mt-4">Ban Quản lý Khu kinh tế tỉnh Bình Phước</p>
                            <h3 className="text-base font-bold mt-4">g Kết quả thực hiện thủ tục hành chính:</h3>
                            <p className="text-base/7 text-gray-700 mt-4">Giấy phép lao động</p>
                            <h3 className="text-base font-bold mt-4">h Lệ phí:</h3>
                            <p className="text-base/7 text-gray-700 mt-4">600.000 đồng</p>
                            <h3 className="text-base font-bold mt-4">i Mẫu đơn, mẫu tờ khai:</h3>
                            <p className="text-base/7 text-gray-700 mt-4">Tờ khai đề nghị cấp giấy phép lao động theo mẫu số 11/PLI Phụ lục I ban hành kèm theo Nghị định số 152/2020/NĐ-CP.</p>
                            <h3 className="text-base font-bold mt-4">k Yêu cầu, điều kiện thực hiện thủ tục hành chính:</h3>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>- Đủ 18 tuổi trở lên và có năng lực hành vi dân sự đầy đủ;</li>
                                <li className='text-gray-700 mt-3'>- Có trình độ chuyên môn, kỹ thuật, tay nghề, kinh nghiệm làm việc; có đủ sức khỏe theo quy định của Bộ trưởng Bộ Y tế;</li>
                                <li className='text-gray-700 mt-3'>- Không phải là người đang trong thời gian chấp hành hình phạt hoặc chưa được xoá án tích hoặc đang trong thời gian bị truy cứu trách nhiệm hình sự theo quy định của pháp luật nước ngoài hoặc pháp luật Việt Nam.</li>
                                <li className='text-gray-700 mt-3'>- Văn bản chấp thuận nhu cầu sử dụng người lao động nước ngoài trừ những trường hợp không phải xác định nhu cầu sử dụng người lao động nước ngoài.</li>
                            </ul>
                            <h3 className="text-base font-bold mt-4">l Căn cứ pháp lý của thủ tục hành chính:</h3>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>- Bộ luật Lao động số 45/2019/QH14 ngày 20/11/2019 của Quốc hội nước Cộng hòa Xã hội Chủ nghĩa Việt Nam;</li>
                                <li className='text-gray-700 mt-3'>- Nghị định 152/2020/NĐ-CP ngày 30/12/2020 của Chính Phủ</li>
                                <li className='text-gray-700 mt-3'>- Nghị định 35/2022/NĐ-CP ngày 28/5/2022 của Chính phủ</li>

                                <h3 className="text-base font-bold mt-4">a Trình tự thực hiện:</h3>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>- Bước 1: Trước ít nhất 15 ngày làm việc, kể từ ngày người lao động nước ngoài dự kiến bắt đầu làm việc cho người sử dụng lao động thì người sử dụng lao động nộp hồ sơ đề nghị cấp giấy phép lao động bằng hình thức lập hồ sơ trực tuyến trên Cổng Dịch vụ công hoặc gửi hồ sơ qua đường bưu điện hoặc nộp hồ sơ trực tiếp cho Bộ phận tiếp nhận của Ban Quản lý Khu kinh tế tại Trung tâm Phục vụ hành chính công, địa chỉ: Số 727, Quốc lộ 14, phường Tân Bình, Thành phố Đồng Xoài, tỉnh Bình Phước.</li>
                                    <li className='text-gray-700 mt-3'>- Bước 2: Trong thời hạn 05 ngày làm việc, kể từ ngày nhận đủ hồ sơ đề nghị cấp giấy phép lao động, Ban Quản lý Khu kinh tế tỉnh Bình Phước cấp giấy phép lao động cho người lao động nước ngoài theo mẫu do Bộ Lao động - Thương binh và Xã hội in và phát hành thống nhất (nội dung của giấy phép lao động theo Mẫu số 12/PLI Phụ lục I ban hành kèm theo Nghị định số 152/2020/NĐ-CP). Trường hợp không cấp giấy phép lao động thì có văn bản trả lời và nêu rõ lý do.</li>
                                    <li className='text-gray-700 mt-3'>Đối với người lao động nước ngoài làm việc theo hợp đồng lao động, sau khi được cấp giấy phép lao động thì người sử dụng lao động và người lao động nước ngoài phải ký kết hợp đồng lao động bằng văn bản theo quy định của pháp luật lao động Việt Nam trước ngày dự kiến làm việc cho người sử dụng lao động.</li>
                                    <li className='text-gray-700 mt-3'>Người sử dụng lao động phải gửi hợp đồng lao động đã ký kết theo yêu cầu tới Ban Quản lý Khu kinh tế tỉnh Bình Phước. Hợp đồng lao động là bản gốc hoặc bản sao có chứng thực.</li>
                                    <li className='text-gray-700 mt-3'>- Bước 3: Cá nhân, tổ chức nhận kết quả trên Cổng dịch vụ công hoặc nhận kết quả theo hình thức mà đã được đăng ký trước đây.</li>
                                </ul>
                                <h3 className="text-base font-bold mt-4">b Cách thức thực hiện:</h3>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>- Thực hiện trực tuyến trên Cổng dịch vụ công;</li>
                                    <li className='text-gray-700 mt-3'>- Hoặc gửi hồ sơ qua hệ thống bưu chính công ích;</li>
                                    <li className='text-gray-700 mt-3'>- Hoặc nộp hồ sơ trực tiếp cho Bộ phận tiếp nhận của Ban Quản lý Khu kinh tế tại Trung tâm Phục vụ hành chính công.</li>
                                </ul>
                                <h3 className="text-base font-bold mt-4">c Thành phần, số lượng hồ sơ:</h3>
                                <p className="text-base/7 text-gray-700 mt-4"><strong>Thành phần hồ sơ:</strong></p>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>1. Văn bản đề nghị cấp giấy phép lao động theo mẫu số 11/PLI Phụ lục I ban hành kèm theo Nghị định số 152/2020/NĐ-CP.</li>
                                    <li className='text-gray-700 mt-3'>2. Giấy chứng nhận sức khỏe hoặc giấy khám sức khỏe do cơ quan, tổ chức y tế có thẩm quyền của nước ngoài hoặc của Việt Nam cấp có giá trị trong thời hạn 12 tháng, kể từ ngày ký kết luận sức khỏe đến ngày nộp hồ sơ hoặc giấy chứng nhận có đủ sức khoẻ theo quy định của Bộ trưởng Bộ Y tế.</li>
                                    <li className='text-gray-700 mt-3'>3. Bản sao có chứng thực điện tử Phiếu lý lịch tư pháp hoặc văn bản xác nhận người lao động nước ngoài không phải là người đang trong thời gian chấp hành hình phạt hoặc chưa được xóa án tích hoặc đang trong thời gian bị truy cứu trách nhiệm hình sự của nước ngoài hoặc của Việt Nam cấp.</li>
                                    <li className='text-gray-700 mt-3'>Phiếu lý lịch tư pháp hoặc văn bản xác nhận người lao động nước ngoài không phải là người đang trong thời gian chấp hành hình phạt hoặc chưa được xóa án tích hoặc đang trong thời gian bị truy cứu trách nhiệm hình sự được cấp không quá 06 tháng, kể từ ngày cấp đến ngày nộp hồ sơ.</li>
                                    <li className='text-gray-700 mt-3'>4. Văn bản, giấy tờ chứng minh là nhà quản lý, giám đốc điều hành, chuyên gia hoặc lao động kỹ thuật và một số nghề, công việc được quy định như sau:</li>
                                    <ul className='ml-4 mt-3'>
                                        <li className='text-gray-700'>+ Giấy tờ chứng minh là nhà quản lý, giám đốc điều hành;</li>
                                        <li className='text-gray-700 mt-3'>+ Giấy tờ chứng minh là chuyên gia, lao động kỹ thuật gồm: văn bằng, chứng chỉ, văn bản xác nhận của cơ quan, tổ chức, doanh nghiệp tại nước ngoài về số năm kinh nghiệm của chuyên gia, lao động kỹ thuật;</li>
                                    </ul>
                                    <li className='text-gray-700 mt-3'>5. 02 ảnh mầu (kích thước 4cm x 6cm, phông nền trắng, mặt nhìn thẳng, đầu để trần, không đeo kính màu), ảnh chụp không quá 06 tháng tính đến ngày nộp hồ sơ.</li>
                                    <li className='text-gray-700 mt-3'>6. Văn bản chấp thuận nhu cầu sử dụng người lao động nước ngoài trừ những trường hợp không phải xác định nhu cầu sử dụng người lao động nước ngoài.</li>
                                    <li className='text-gray-700 mt-3'>7. Bản sao có chứng thực hộ chiếu còn giá trị theo quy định của pháp luật.</li>
                                    <li className='text-gray-700 mt-3'>8. Các giấy tờ liên quan đến người lao động nước ngoài:</li>
                                    <ul className='ml-4 mt-3'>
                                        <li className='text-gray-700'>- Đối với người lao động nước ngoài di chuyển trong nội bộ doanh nghiệp phải có văn bản của doanh nghiệp nước ngoài cử sang làm việc tại hiện diện thương mại của doanh nghiệp nước ngoài đó trên lãnh thổ Việt Nam và văn bản chứng minh người lao động nước ngoài đã được doanh nghiệp nước ngoài đó tuyển dụng trước khi làm việc tại Việt Nam ít nhất 12 tháng liên tục.</li>
                                        <li className='text-gray-700 mt-3'>- Đối với người lao động nước ngoài vào Việt Nam để thực hiện các loại hợp đồng hoặc thỏa thuận về kinh tế, thương mại, tài chính, ngân hàng, bảo hiểm, khoa học kỹ thuật, văn hóa, thể thao, giáo dục, giáo dục nghề nghiệp và y tế phải có hợp đồng hoặc thỏa thuận ký kết giữa đối tác phía Việt Nam và phía nước ngoài, trong đó phải có thỏa thuận về việc người lao động nước ngoài làm việc tại Việt Nam.</li>
                                        <li className='text-gray-700 mt-3'>- Đối với người lao động nước ngoài nhà cung cấp dịch vụ theo hợp đồng phải có hợp đồng cung cấp dịch vụ ký kết giữa đối tác phía Việt Nam và phía nước ngoài và văn bản chứng minh người lao động nước ngoài đã làm việc cho doanh nghiệp nước ngoài không có hiện diện thương mại tại Việt Nam được ít nhất 02 năm.</li>
                                        <li className='text-gray-700 mt-3'>- Đối với người lao động nước ngoài chào bán dịch vụ phải có văn bản của nhà cung cấp dịch vụ cử người lao động nước ngoài vào Việt Nam để đàm phán cung cấp dịch vụ.</li>
                                        <li className='text-gray-700 mt-3'>- Đối với người lao động nước ngoài làm việc cho tổ chức phi chính phủ nước ngoài, tổ chức quốc tế tại Việt Nam được phép hoạt động theo quy định của pháp luật Việt Nam phải có giấy chứng nhận của tổ chức phi chính phủ nước ngoài, tổ chức quốc tế được phép hoạt động theo quy định của pháp luật Việt Nam.</li>
                                        <li className='text-gray-700 mt-3'>- Đối với người lao động nước ngoài là nhà quản lý, giám đốc điều hành, chuyên gia và lao động kỹ thuật thì phải có văn bản của doanh nghiệp, cơ quan, tổ chức nước ngoài cử người lao động nước ngoài sang làm việc tại Việt Nam và phù hợp với vị trí dự kiến làm việc.</li>
                                    </ul>
                                    <li className='text-gray-700 mt-3'>9. Hồ sơ đề nghị cấp giấy phép lao động đối với một số trường hợp đặc biệt:</li>
                                    <ul className='ml-4 mt-3'>
                                        <li className='text-gray-700'>- Đối với người lao động nước ngoài đã được cấp giấy phép lao động, đang còn hiệu lực mà có nhu cầu làm việc cho người sử dụng lao động khác ở cùng vị trí công việc và cùng chức danh công việc ghi trong giấy phép lao động thì hồ sơ đề nghị cấp giấy phép lao động mới gồm: giấy xác nhận của người sử dụng lao động trước đó về việc người lao động hiện đang làm việc, các giấy tờ quy định tại điểm 1, 5, 6, 7, 8 nêu trên và bản sao có chứng thực giấy phép lao động đã được cấp;</li>
                                        <li className='text-gray-700 mt-3'>- Đối với người lao động nước ngoài đã được cấp giấy phép lao động và đang còn hiệu lực mà thay đổi vị trí công việc hoặc chức danh công việc hoặc hình thức làm việc ghi trong giấy phép lao động theo quy định của pháp luật nhưng không thay đổi người sử dụng lao động thì hồ sơ đề nghị cấp giấy phép lao động mới gồm các giấy tờ quy định tại điểm 1, 4, 5, 6, 7 và 8 nêu trên và giấy phép lao động hoặc bản sao có chứng thực giấy phép lao động đã được cấp.</li>
                                    </ul>
                                    <li className='text-gray-700 mt-3'>10. Hợp pháp hóa lãnh sự, chứng thực các giấy tờ:</li>
                                    <ul className='ml-4 mt-3'>
                                        <li className='text-gray-700'>Các giấy tờ quy định tại các điểm 2, 3, 4, 6 và 8 nêu trên là 01 bản gốc hoặc bản sao có chứng thực, nếu của nước ngoài thì phải được hợp pháp hóa lãnh sự, trừ trường hợp được miễn hợp pháp hóa lãnh sự theo điều ước quốc tế mà nước Cộng hòa xã hội chủ nghĩa Việt Nam và nước ngoài liên quan đều là thành viên hoặc theo nguyên tắc có đi có lại hoặc theo quy định của pháp luật; dịch ra tiếng Việt và chứng thực theo quy định của pháp luật Việt Nam.</li>
                                    </ul>
                                </ul>
                                <p className="text-base/7 text-gray-700 mt-4"><strong>Số lượng hồ sơ:</strong> 01 bộ hồ sơ.</p>
                                <h3 className="text-base font-bold mt-4">d Thời hạn giải quyết:</h3>
                                <p className="text-base/7 text-gray-700 mt-4">Thời hạn 05 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ theo quy định.</p>
                                <h3 className="text-base font-bold mt-4">đ Đối tượng thực hiện thủ tục hành chính:</h3>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>- Doanh nghiệp hoạt động theo Luật doanh nghiệp, Luật đầu tư hoặc theo điều ước quốc tế mà Cộng hòa xã hội chủ nghĩa Việt Nam là thành viên.</li>
                                    <li className='text-gray-700 mt-3'>- Doanh nghiệp hoạt động theo Luật Doanh nghiệp, Luật Đầu tư hoặc điều ước quốc tế mà nước Cộng hoà xã hội chủ nghĩa Việt Nam là thành viên có trụ sở chính tại một tỉnh, thành phố nhưng có văn phòng đại diện hoặc chi nhánh tại tỉnh, thành phố khác;</li>
                                    <li className='text-gray-700 mt-3'>- Nhà thầu tham dự thầu, thực hiện hợp đồng.</li>
                                    <li className='text-gray-700 mt-3'>- Văn phòng đại diện, chi nhánh của doanh nghiệp, cơ quan, tổ chức được cơ quan có thẩm quyền cấp phép thành lập.</li>
                                    <li className='text-gray-700 mt-3'>- Văn phòng điều hành của nhà đầu tư nước ngoài trong hợp đồng hợp tác kinh doanh hoặc của nhà thầu nước ngoài được đăng ký hoạt động theo quy định của pháp luật;</li>
                                    <li className='text-gray-700 mt-3'>- Tổ chức hành nghề luật sư tại Việt Nam theo quy định của pháp luật;</li>
                                    <li className='text-gray-700 mt-3'>- Hợp tác xã, liên hiệp hợp tác xã thành lập và hoạt động theo Luật hợp tác xã;</li>
                                    <li className='text-gray-700 mt-3'>- Hộ kinh doanh, cá nhân được phép hoạt động kinh doanh theo quy định của pháp luật.</li>
                                    <li className='text-gray-700 mt-3'>- Cơ quan nhà nước, tổ chức chính trị, tổ chức chính trị - xã hội, tổ chức chính trị xã hội - nghề nghiệp, tổ chức xã hội, tổ chức xã hội - nghề nghiệp do Uỷ ban nhân dân cấp tỉnh, cơ quan chuyên môn thuộc Uỷ ban nhân dân cấp tỉnh, Uỷ ban nhân dân cấp huyện thành lập.</li>
                                    <li className='text-gray-700 mt-3'>- Tổ chức phi chính phủ nước ngoài được cơ quan có thẩm quyền của Việt Nam cấp giấy đăng ký theo quy định của pháp luật Việt Nam.</li>
                                    <li className='text-gray-700 mt-3'>- Tổ chức sự nghiệp, cơ sở giáo dục do Uỷ ban nhân dân cấp tỉnh, cơ quan chuyên môn thuộc Uỷ ban nhân dân cấp tỉnh, Uỷ ban nhân dân cấp huyện thành lập.</li>
                                    <li className='text-gray-700 mt-3'>- Cơ quan, tổ chức, doanh nghiệp Việt Nam hoặc tổ chức, doanh nghiệp nước ngoài hoạt động tại Việt Nam mà người lao động nước ngoài đến làm việc theo hình thức thực hiện các loại hợp đồng hoặc thỏa thuận về kinh tế, thương mại, tài chính, ngân hàng, bảo hiểm, khoa học kỹ thuật, văn hóa, thể thao, giáo dục, giáo dục nghề nghiệp và y tế; nhà cung cấp dịch vụ theo hợp đồng.</li>
                                    <li className='text-gray-700 mt-3'>- Chào bán dịch vụ;</li>
                                    <li className='text-gray-700 mt-3'>- Người chịu trách nhiệm thành lập hiện diện thương mại</li>
                                </ul>
                                <h3 className="text-base font-bold mt-4">e Cơ quan thực hiện thủ tục hành chính:</h3>
                                <p className="text-base/7 text-gray-700 mt-4">Ban Quản lý Khu kinh tế tỉnh Bình Phước</p>
                                <h3 className="text-base font-bold mt-4">g Kết quả thực hiện thủ tục hành chính:</h3>
                                <p className="text-base/7 text-gray-700 mt-4">Giấy phép lao động</p>
                                <h3 className="text-base font-bold mt-4">h Lệ phí:</h3>
                                <p className="text-base/7 text-gray-700 mt-4">600.000 đồng</p>
                                <h3 className="text-base font-bold mt-4">i Mẫu đơn, mẫu tờ khai:</h3>
                                <p className="text-base/7 text-gray-700 mt-4">Tờ khai đề nghị cấp giấy phép lao động theo mẫu số 11/PLI Phụ lục I ban hành kèm theo Nghị định số 152/2020/NĐ-CP.</p>
                                <h3 className="text-base font-bold mt-4">k Yêu cầu, điều kiện thực hiện thủ tục hành chính:</h3>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>- Đủ 18 tuổi trở lên và có năng lực hành vi dân sự đầy đủ;</li>
                                    <li className='text-gray-700 mt-3'>- Có trình độ chuyên môn, kỹ thuật, tay nghề, kinh nghiệm làm việc; có đủ sức khỏe theo quy định của Bộ trưởng Bộ Y tế;</li>
                                    <li className='text-gray-700 mt-3'>- Không phải là người đang trong thời gian chấp hành hình phạt hoặc chưa được xoá án tích hoặc đang trong thời gian bị truy cứu trách nhiệm hình sự theo quy định của pháp luật nước ngoài hoặc pháp luật Việt Nam.</li>
                                    <li className='text-gray-700 mt-3'>- Văn bản chấp thuận nhu cầu sử dụng người lao động nước ngoài trừ những trường hợp không phải xác định nhu cầu sử dụng người lao động nước ngoài.</li>
                                </ul>
                                <h3 className="text-base font-bold mt-4">l Căn cứ pháp lý của thủ tục hành chính:</h3>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>- Bộ luật Lao động số 45/2019/QH14 ngày 20/11/2019 của Quốc hội nước Cộng hòa Xã hội Chủ nghĩa Việt Nam;</li>
                                    <li className='text-gray-700 mt-3'>- Nghị định 152/2020/NĐ-CP ngày 30/12/2020 của Chính Phủ</li>
                                    <li className='text-gray-700 mt-3'>- Nghị định 35/2022/NĐ-CP ngày 28/5/2022 của Chính phủ</li>
                                    <li className='text-gray-700 mt-3'>- Quyết định 152/2020/NĐ-CP ngày 30/12/2020 của Chính phủ</li>
                                </ul>
                            </ul>


                            <p className="text-base/7 text-gray-700 mt-4">Gọi cho chúng tôi theo số <strong>0984 477 711 (Miền Bắc)</strong> , <strong>0903 003 779 (Miền Trung)</strong> hoặc <strong>0938 268 123 (Miền Nam)</strong> để được hỗ trợ.</p>
                        </div>
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

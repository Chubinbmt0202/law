
import React from 'react';
import Image from 'next/image';
import Banner15 from '@/app/components/banner15';
import Section11 from '@/app/components/section11';

export default function Batdongsan() {

    return (
        <section className="py-16 bg-white md:mt-1">
            <Banner15 />
            <section className="py-8 bg-white mt-8 md:mt-1">
                <div className="relative max-w-7xl mx-auto isolate overflow-hidden bg-white py-6 sm:py-6 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                    </div>

                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2">
                            <h2 className="mt-2 mb-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xls">Thủ tục xin giấy phép lao động - hồ sơ - quy trình</h2>

                            <div className='border p-5 rounded-lg border-orange-300 mb-4'>
                                <p className='mb-2'><strong>Nội dung gồm:</strong> </p>
                                <ul>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Văn bản quy phạm pháp luật hướng dẫn thủ tục cấp giấy phép lao động</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Trường hợp được xin cấp giấy phép lao động </li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Hồ sơ cấp giấy phép lao động</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Thủ tục và quy trình làm giấy phép lao động</li>
                                    <li className='cursor-pointer text-neutral-700 mb-1 hover:text-orange-500'>💠Những lưu ý khi chuẩn bị hồ sơ cấp giấy phép lao động</li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <p className="text-xl font-bold text-indigo-600 uppercase">Văn bản quy phạm pháp luật hướng dẫn thủ tục cấp giấy phép lao động</p>
                                <p className='text-base/7 text-gray-700 mt-4'>Những văn bản pháp luật hướng dẫn về việc xin giấy phép lao động cho người nước ngoài được quy định tại:</p>
                                <ul className='ml-4 mt-3'>
                                    <li className='text-gray-700'>🔹 Bộ luật Lao động 2019</li>
                                    <li className='text-gray-700'>🔹 Nghị định số 152/2020/NĐ-CP ngày 30 tháng 12 năm 2020 của Chính phủ quy định về người lao động nước ngoài làm việc tại Việt Nam và tuyển dụng, quản lý người lao động Việt Nam làm việc cho tổ chức, cá nhân nước ngoài tại Việt Nam, được sửa đổi, bổ sung bởi.</li>
                                    <li className='text-gray-700'>🔹 Nghị định số 70/2023/NĐ-CP ngày 18 tháng 9 năm 2023 của Chính phủ sửa đổi, bổ sung một số điều của Nghị định số 152/2020/NĐ-CP ngày 30 tháng 12 năm 2020 của Chính phủ quy định về người lao động nước ngoài làm việc tại Việt Nam và tuyển dụng, quản lý người lao động Việt Nam làm việc cho tổ chức, cá nhân nước ngoài tại Việt Nam có hiệu lực thi hành từ ngày 18 tháng 9 năm 2023</li>
                                </ul>
                            </div>
                            <div className=" pt-6 ">
                                <h2 className="text-xl *:text-xl font-bold text-indigo-600 uppercase">Trường hợp được xin cấp giấy phép lao động </h2>
                                <p className="text-base/7 text-gray-700 mb-2 mt-2"><p className="font-bold mt-4 text-black">Người nước ngoài nào được cấp giấy phép lao động tại Việt Nam?</p></p>
                                <p className="text-base/7 font-bold text-gray-700 mb-2 smt-2">Nghị định 152/2020/NĐ-CP và nghị định 70/2023/NĐ-CP sửa đổi Lao động là công dân nước ngoài vào làm việc tại Việt Nam (sau đây viết tắt là người lao động nước ngoài) theo các hình thức sau đây:</p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mb-1'>🔹 Thực hiện hợp đồng lao động;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Di chuyển trong nội bộ doanh nghiệp;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Thực hiện các loại hợp đồng hoặc thỏa thuận về kinh tế, thương mại, tài chính, ngân hàng, bảo hiểm, khoa học kỹ thuật, văn hóa, thể thao, giáo dục, giáo dục nghề nghiệp và y tế;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Nhà cung cấp dịch vụ theo hợp đồng;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Chào bán dịch vụ;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Làm việc cho tổ chức phi chính phủ nước ngoài, tổ chức quốc tế tại Việt Nam được phép hoạt động theo quy định của pháp luật Việt Nam;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Tình nguyện viên;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Người chịu trách nhiệm thành lập hiện diện thương mại;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Nhà quản lý, giám đốc điều hành, chuyên gia, lao động kỹ thuật;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Tham gia thực hiện các gói thầu, dự án tại Việt Nam;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Thân nhân thành viên cơ quan đại diện nước ngoài tại Việt Nam được phép làm việc tại Việt Nam theo quy định tại điều ước quốc tế mà nước Cộng hòa xã hội chủ nghĩa Việt Nam là thành viên.</li>
                                </ul>
                                <p className="text-base/7 font-bold text-gray-700 mb-4">Nghị định 152/2020/NĐ-CP và nghị định 70/2023/NĐ-CP sửa đổi Người sử dụng người lao động nước ngoài, bao gồm:</p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mb-1'>🔹 Doanh nghiệp hoạt động theo Luật Doanh nghiệp, Luật Đầu tư hoặc theo điều ước quốc tế mà nước Cộng hòa xã hội chủ nghĩa Việt Nam là thành viên;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Nhà thầu tham dự thầu, thực hiện hợp đồng;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Văn phòng đại diện, chi nhánh của doanh nghiệp, cơ quan, tổ chức được cơ quan có thẩm quyền cấp phép thành lập;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Cơ quan nhà nước, tổ chức chính trị, tổ chức chính trị - xã hội, tổ chức chính trị xã hội - nghề nghiệp, tổ chức xã hội, tổ chức xã hội - nghề nghiệp;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Tổ chức phi chính phủ nước ngoài được cơ quan có thẩm quyền của Việt Nam cấp giấy đăng ký theo quy định của pháp luật Việt Nam;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Tổ chức sự nghiệp, cơ sở giáo dục được thành lập theo quy định của pháp luật;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Tổ chức quốc tế, văn phòng của dự án nước ngoài tại Việt Nam; cơ quan, tổ chức do Chính phủ, Thủ tướng Chính phủ, bộ, ngành cho phép thành lập và hoạt động theo quy định của pháp luật;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Văn phòng điều hành của nhà đầu tư nước ngoài trong hợp đồng hợp tác kinh doanh hoặc của nhà thầu nước ngoài được đăng ký hoạt động theo quy định của pháp luật;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Tổ chức hành nghề luật sư tại Việt Nam theo quy định của pháp luật;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Hợp tác xã, liên hiệp hợp tác xã thành lập và hoạt động theo Luật Hợp tác xã;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Hộ kinh doanh, cá nhân được phép hoạt động kinh doanh theo quy định của pháp luật.</li>
                                </ul>
                                <p className="text-base/7 text-gray-700 mb-4">Ngoài ra, còn những trường hợp khác là đối tượng được xin cấp giấy phép lao động theo Nghị định 152/2020/NĐ-CP và nghị định 70/2023/NĐ-CP sửa đổi</p>
                                <p className="text-base/7 text-gray-700 mb-2 mt-2"><p className="font-bold mt-4 text-black">Điều kiện để người nước ngoài được làm giấy phép lao động tại Việt Nam</p></p>
                                <p className="text-base/7 text-gray-700 mb-4">Theo căn cứ tại khoản 1 điều 151 Bộ luật Lao động 2019 thì điều kiện người lao động nước ngoài làm việc tại Việt Nam được quy định như sau:

                                    Người lao động nước ngoài làm việc tại Việt Nam là người có quốc tịch nước ngoài và phải đáp ứng các điều kiện về:</p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mb-1'>🔹 Người lao động phải đủ 18 tuổi trở lên, có năng lực hành vi dân sự đầy đủ;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Có trình độ chuyên môn tay nghề, kỹ thuật, kinh nghiệm làm việc; đảm bảo sức khỏe theo quy định của Bộ trưởng Bộ Y tế;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Không thuộc các trường hợp đang chịu trách nhiệm hình sự;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Bắt buộc có giấy phép lao động.</li>
                                </ul>
                                <p className="text-xl font-bold text-indigo-600 uppercase">Văn bản quy phạm pháp luật hướng dẫn thủ tục cấp giấy phép lao động</p>
                                <p className="text-base/7 text-gray-700 mb-2 mt-2">Hồ sơ để xin giấy phép lao động bao gồm:</p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mb-1'>🔹 Văn bản nghị xin cấp giấy phép lao động cho người nước ngoài. Sử dụng mẫu đơn số 11/PLI;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Giấy chứng nhận sức khỏe hoặc giấy khám sức khỏe của người lao động. Giấy này được cấp tại nước ngoài hoặc tại Việt Nam theo quy định (thời hạn 12 tháng);</li>
                                    <li className='text-gray-700 mb-1'>🔹 Phiếu lý lịch tư pháp hoặc văn bản xác nhận của người lao động, không thuộc trường hợp đang bị truy cứu trách nhiệm hình sự. Phiếu lý lịch này không vượt quá thời hạn 6 tháng;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Văn bản chứng minh về vị trí, công việc hiện tại;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Chuẩn bị 2 ảnh màu (kích thước 4cm x 6cm, phông nền trắng, mặt nhìn thẳng, đầu để trần, không đeo kính màu), ảnh chụp không được quá 06 tháng tính đến ngày nộp hồ sơ;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Văn bản về việc đã chấp thuận nhu cầu sử dụng người lao động nước ngoài. Văn bản này do cơ quan có thẩm quyền xét duyệt;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Bản sao hộ chiếu đã công chứng, chứng thực và còn giá trị;</li>
                                    <li className='text-gray-700 mb-1'>🔹 Giấy tờ khác liên quan đến người lao động được quy định tại Nghị định 152/2020/NĐ-CP và nghị định 70/2023/NĐ-CP sửa đổi.</li>
                                </ul>

                                <p className="text-base/7 text-gray-700 mb-2 mt-2">Người lao động cần chú ý vấn đề này khi chuẩn bị hồ sơ:</p>
                                <ul className=" pl-5 mb-4">
                                    <li className='text-gray-700 mb-1'>🔹 Các giấy tờ quy định tại các khoản 2, 3, 4, 6 và 8 Điều 9 Nghị định 152/2020/NĐ-CP và nghị định 70/2023/NĐ-CP sửa đổi là 01 bản gốc hoặc bản sao công chứng</li>
                                    <li className='text-gray-700 mb-1'>🔹 Nếu giấy tờ được cấp ở nước ngoài thì phải được hợp pháp hóa lãnh sự. Giấy tờ thuộc trường hợp được miễn hợp pháp hóa lãnh sự phải được dịch ra tiếng Việt, chứng thực theo quy định của pháp luật Việt Nam.</li>
                                </ul>
                                <div className="mt-8">
                                    <h2 className="text-xl font-bold text-indigo-600 uppercase">Thủ tục và quy trình làm giấy phép lao động</h2>
                                    <p className="font-bold mt-4 text-black">Bước 1. Gửi đơn xin chấp thuận nhu cầu sử dụng lao động là người nước ngoài</p>
                                    <p className="text-base/7 text-gray-700 mt-4">Người sử dụng lao động có trách nhiệm phải gửi báo cáo giải trình nhu cầu sử dụng người lao động nước ngoài.</p>
                                    <p className="text-base/7 text-gray-700 mt-4">Địa chỉ gửi đơn: Bộ Lao động – Thương binh và Xã hội hoặc Chủ tịch Ủy ban nhân dân cấp tỉnh</p>
                                    <p className="text-base/7 text-gray-700 mt-4">Hồ sơ bao gồm: Mẫu báo cáo giải trình (mẫu số 01 Phụ lục 01 Nghị định 152/2020/NĐ-CP và nghị định 70/2023/NĐ-CP sửa đổi) kèm bản sao đăng ký doanh nghiệp.</p>

                                    <p className="font-bold mt-4 text-black">Bước 2: Nộp hồ sơ để xin cấp giấy phép lao động</p>
                                    <p className="text-base/7 text-gray-700 mt-4">Người sử dụng lao động phải điền thông tin vào tờ khai và nộp hồ sơ đề nghị cấp giấy phép lao động</p>
                                    <p className="text-base/7 text-gray-700 mt-4">Thời hạn nộp: ít nhất trước 15 ngày làm việc, tính từ ngày người lao động nước ngoài dự kiến bắt đầu làm việc cho người sử dụng lao động.</p>
                                    <p className="text-base/7 text-gray-700 mt-4">Số lượng hồ sơ: 01 bộ, hồ sơ bao gồm những nội dung đã được giải đáp ở trên</p>
                                    <p className="text-base/7 text-gray-700 mt-4">Nộp hồ sơ tại: Bộ Lao động-Thương binh và Xã hội hoặc Sở Lao động-Thương binh và Xã hội, nơi mà người lao động dự kiến làm việc</p>
                                    <p className="text-base/7 text-gray-700 mt-4">Thời gian giải quyết: 05 ngày kể từ ngày nhận đủ hồ sơ đề nghị cấp giấy phép lao động.</p>

                                    <h2 className="text-xl font-bold text-indigo-600 mt-4 uppercase">Những lưu ý khi chuẩn bị hồ sơ cấp giấy phép lao động</h2>
                                    <p className="text-base/7 text-gray-700 mt-4">Căn cứ theo quy định tại Nghị định 152/2020/NĐ-CP và nghị định 70/2023/NĐ-CP sửa đổi:</p>
                                    <ul className=" pl-5 mb-4">
                                        <li className='text-gray-700 mt-2'>🔹 Các giấy tờ cần thiết của người lao động khi được cấp tại nước ngoài, đều phải được hợp pháp hóa lãnh sự;</li>
                                        <li className='text-gray-700 mt-2'>🔹 Những giấy tờ được làm từ nước ngoài phải được dịch sang tiếng Việt và chứng thực trước khi nộp hồ sơ. Trừ các giấy tờ, tài liệu được miễn theo quy định của pháp luật Việt Nam hoặc theo điều ước quốc tế.</li>
                                    </ul>
                                </div>
                            </div>

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

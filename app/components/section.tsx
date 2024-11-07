// app/components/section.tsx
import Image from 'next/image';
import Section11 from './section11';

const Section = () => {

    return (
        <section className="py-16 bg-white mt-16 md:mt-1">


            <div className="relative max-w-7xl mx-auto isolate overflow-hidden bg-white py-6 sm:py-6 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                </div>

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2">
                        <h2 className="mt-2 mb-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xls">Dịch vụ đăng ký làm Giấy Phép Kinh Doanh</h2>
                        <p className='mb-3 text-base/7 text-gray-700'>Loại hình thành lập sẽ ảnh hưởng đến thủ tục và chi phí, do đó, bạn cần xác định loại hình trước khi đăng ký giấy phép kinh doanh.</p>
                        <p className='mb-3 text-base/7 text-gray-700'>Theo đó, các loại hình phải đăng ký giấy phép kinh doanh bao gồm: hộ kinh doanh cá thể và doanh nghiệp (doanh nghiệp tư nhân, công ty cổ phần, công ty TNHH 1 thành viên và công ty TNHH 2 thành viên trở lên, công ty hợp danh).</p>
                        <p className='mb-3 text-base/7 text-gray-700'>Tùy vào nhu cầu phát triển kinh doanh mà chọn lựa loại hình thành lập phù hợp, cụ thể:</p>

                        <div className="mt-8">
                            <p className="text-base/7 font-bold text-indigo-600">1. Thành lập hộ kinh doanh cá thể</p>
                            <p className="text-base/7 text-gray-700 mt-4">Hộ kinh doanh cá thể thường là sự lựa chọn ưu tiên của nhiều cá nhân, hộ gia đình khi họ có nhu cầu kinh doanh quy mô nhỏ...</p>
                            <p className="text-base/7 text-gray-700 mt-4">Vì không có tư cách pháp nhân, không có con dấu pháp nhân nên hộ kinh doanh không phải nộp báo cáo quý, báo cáo năm như doanh nghiệp.</p>
                            <p className="text-base/7 text-gray-700 mt-4">Hiện tại, hộ kinh doanh không còn bị giới hạn số lượng lao động và có thể đăng ký sử dụng hóa đơn bán hàng điện tử để xuất hóa đơn cho doanh nghiệp. Đây cũng là điều kiện thuận lợi để hộ kinh doanh có thể dễ dàng mở rộng quy mô cũng như tiếp cận được nhiều đối tượng khách hàng.</p>
                        </div>
                        <div className="mt-8">
                            <p className="text-base/7 font-bold text-indigo-600">2. Thành lập doanh nghiệp, công ty</p>
                            <p className="text-base/7 text-gray-700 mt-4">Nếu quy mô hoạt động kinh doanh lớn, doanh nghiệp cần có tư cách pháp nhân để được pháp luật bảo vệ và được phép xuất hóa đơn giá trị gia tăng (hóa đơn đỏ). Đồng thời, thành lập doanh nghiệp sẽ tạo điều kiện thuận lợi trong việc huy động vốn và giao dịch với đối tác, khách hàng...</p>
                            <p className="text-base/7 text-gray-700 mt-4">Tại bài viết này, Thành lập doanh nghiệp sẽ thông tin chi tiết dịch vụ đăng ký giấy phép kinh doanh cho 4 loại hình doanh nghiệp sau: </p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'><strong>Doanh nghiệp tư nhân:</strong> Do 1 cá nhân làm chủ và chịu trách nhiệm bằng toàn bộ tài sản của mình;</li>
                                <li className='text-gray-700'><strong>Công ty cổ phần:</strong>  Tối thiểu có 3 cổ đông sáng lập;</li>
                                <li className='text-gray-700'><strong>Công ty TNHH 1 thành viên:</strong>  Do 1 tổ chức hoặc cá nhân thành lập;</li>
                                <li className='text-gray-700'><strong>Công ty TNHH 2 thành viên trở lên:</strong> Từ 2 đến 50 thành viên góp vốn.</li>
                            </ul>
                            <p className="text-base/7 text-gray-700 mt-4">Nếu doanh nghiệp vẫn chưa chọn được loại hình doanh nghiệp phù hợp, hãy gọi Thành lập doanh nghiệp để được hỗ trợ tư vấn miễn phí.</p>

                        </div>
                        <div className="my-8">
                            <p className="text-base/7 font-bold text-indigo-600">TỔNG CHI PHÍ ĐĂNG KÝ GIẤY PHÉP KINH DOANH TẠI THÀNH LẬP DOANH NGHIỆP</p>
                            <p className="text-base/7 text-gray-700 mt-4">Trọn gói chi phí dịch vụ làm giấy phép kinh doanh tại Kế toán Anpha là 1.000.000 đồng, đã bao gồm các hạng mục chi phí sau:</p>
                            <ul className='ml-4 mt-3'>
                                <li className='text-gray-700'>1. Phí dịch vụ tại Kế toán Anpha;</li>
                                <li className='text-gray-700'>2. Lệ phí nộp cơ quan đăng ký kinh doanh;</li>
                                <li className='text-gray-700'>3. Lệ phí ủy quyền nộp hồ sơ đăng ký giấy phép kinh doanh;</li>
                                <li className='text-gray-700'>4. Lệ phí khắc con dấu tròn pháp nhân;</li>
                                <li className='text-gray-700'>5. Lệ phí đăng bố cáo thành lập doanh nghiệp.</li>
                            </ul>
                        </div>
                        <Image
                            src="/images/dang-ky-giay-phep-kinh-doanh-02.jpg"
                            alt="Background"
                            width={800}
                            height={300}
                        />
                        <div className="my-8">
                            <p className="text-base/7 font-bold text-indigo-600">THỜI GIAN CẤP GIẤY PHÉP KINH DOANH</p>
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

                        <p className="text-base/7 text-gray-700 mt-4">Trong khi đó, bạn chỉ cần cung cấp cho Anpha các thông tin đơn giản như:</p>
                        <ul className='ml-4 mt-3'>
                            <li className='text-gray-700'>1. Thông tin công ty dự kiến: tên công ty, địa chỉ, ngành nghề kinh doanh, vốn điều lệ và tỷ lệ vốn góp của từng thành viên/cổ đông…;</li>
                            <li className='text-gray-700'>2. Bản sao công chứng CMND/CCCD/hộ chiếu không quá 6 tháng của người đại diện pháp luật, chủ sở hữu, thành viên góp vốn hoặc cổ đông sáng lập (tùy từng loại hình công ty);</li>

                        </ul>
                        <p className="text-base/7 text-gray-700 mt-4">Gọi cho chúng tôi theo số <strong>0984 477 711 (Miền Bắc)</strong> , <strong>0903 003 779 (Miền Trung)</strong> hoặc <strong>0938 268 123 (Miền Nam)</strong> để được hỗ trợ.</p>
                    </div>

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
};

export default Section;
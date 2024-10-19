
import Image from "next/image";
// app/components/Banner.js
const Section4 = () => {
    return (
        <div className="py-10 w-full h-full bg-black bg-cover" style={{ backgroundImage: "url('/images/8.jpg')" }}>
            <h1 className="text-2xl md:text-3xl font-bold text-center">CHIA SẺ CỦA KHÁCH HÀNG VỀ</h1>
            <h2 className="text-xl md:text-2xl font-bold text-center text-yellow-800">DỊCH VỤ ĐĂNG KÝ THÀNH LẬP CÔNG TY của Thành lập doannh nghiệp</h2>

            <div className="max-w-7xl mx-auto flex-col md:flex-row flex justify-around mt-5">
                {/* Testimonial 1 */}
                <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/3 mt-3 mx-5 text-center">
                    <Image width={50} height={50} src="/images/18.jpg" alt="Chị Tường Vy" className="w-24 h-24 rounded-full mx-auto mb-4" />
                    <h2 className="text-xl font-semibold">Chị Tường Vy</h2>
                    <p className="text-black-500">CEO Trần Anh</p>
                    <div className="text-yellow-400 mb-2">★★★★★</div>
                    <p className="text-black-700">
                        Tôi rất tin tưởng vào chất lượng dịch vụ tư vấn đăng ký kinh doanh Đà Nẵng của Trung tâm Nhất Việt, tư vấn các thủ tục đăng ký kinh doanh nhiệt tình, tận tâm, lại cực kỳ chuyên nghiệp, thời gian hoàn thành vượt mức tưởng tượng chỉ sau 3 ngày tôi đã đăng ký thành công và cầm trên tay giấy phép kinh doanh.
                    </p>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/3 mt-3 mx-5 text-center">
                    <Image width={50} height={50} src="/images/17.jpg" alt="Anh Nguyễn Hạ" className="w-24 h-24 rounded-full mx-auto mb-4" />
                    <h2 className="text-xl font-semibold">Anh Nguyễn Hạ</h2>
                    <p className="text-black-500">CEO Hải Anh Group</p>
                    <div className="text-yellow-400 mb-2">★★★★★</div>
                    <p className="text-black-700">
                        Quy trình làm việc rõ ràng với nhiều quà tặng hấp dẫn giúp cho những startup chúng tôi hoàn toàn tin tưởng vào chất lượng dịch vụ thành lập công ty của các bạn. Đặc biệt thoải mái khi các bạn hỗ trợ tôi trong quá trình kinh doanh về mặt pháp lý, thuế sau thành lập hay các thông tin khác đều rất nhiệt tình, tận tâm.
                    </p>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/3 mt-3 mx-5 text-center">
                    <Image width={50} height={50} src="/images/19.jpg" alt="Chị Thu Thảo" className="w-24 h-24 rounded-full mx-auto mb-4" />
                    <h2 className="text-xl font-semibold">Chị Thu Thảo</h2>
                    <p className="text-black-500">CEO Elsa Speak</p>
                    <div className="text-yellow-400 mb-2">★★★★★</div>
                    <p className="text-black-700">
                        Nhờ vào quá trình nhận tư vấn đăng ký giấy phép kinh doanh của đơn vị Nhất Việt, tôi đã hoàn thành thủ tục và nhận giấy phép nhanh chóng chỉ trong 3 ngày. Lựa chọn đúng loại hình doanh nghiệp và hiểu biết thêm về luật thuế và quy định kinh doanh nhà nước nhờ sự tư vấn và sách pháp lý các bạn tặng tôi.
                    </p>
                </div>
            </div>
        </div>


    );
};

// ... existing code ...

export default Section4;

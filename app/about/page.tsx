import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative">
            {/* Content overlay */}
            <div className="absolute  inset-0 bg-black bg-opacity-30">
                <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 className="text-5xl font-bold mb-10 text-white">Luật Thiện Minh</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">TỔNG QUAN</h2>
                            <p className="text-sm">
                                Khác với hệ thống luật pháp trên thế giới, trong hệ thống luật pháp Việt Nam, thường cách giữa luật pháp và thực tiễn áp dụng pháp luật là tương đối lớn. Vấn đề này đòi hỏi luật sư ở Việt Nam phải hiểu luật pháp và nắm bắt chính sách quản lý (bằng văn bản hoặc không bằng văn bản) của Nhà nước Việt Nam. Chúng tôi có những luật sư và luật gia có kỹ năng, kinh nghiệm nhiều năm và có thể đánh giá rủi ro pháp lý cho khách hàng tại Việt Nam và cung cấp các giải pháp thực tế nhằm loại bỏ hoặc giảm thiểu đến mức tối đa các rủi ro đó.
                            </p>
                            <p className="text-sm mt-4">
                                Thị trường toàn cầu ngày nay không đơn giản chỉ là có văn phòng tại các thành phố quan trọng trên thế giới. Đối với chúng tôi, điều đó còn có nghĩa là sự kết hợp các nguồn lực quốc tế và chuyên môn của ngành để làm việc trực tiếp qua các giao dịch xuyên biên giới trên các thị trường và khu vực quan trọng đối với khách hàng của chúng tôi.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">VỀ CHÚNG TÔI</h2>
                            <p className="text-sm">
                                Apolat Legal là công ty luật có trụ sở chính tại thành phố Hồ Chí Minh. Kinh nghiệm, sự am hiểu sâu sắc về pháp luật và văn hóa Việt Nam cùng với các luật sư có năng lực cao của chúng tôi giúp khách hàng tự tin trong bất kỳ vấn đề pháp lý nào mình gặp phải. Bằng cách gắn bó sâu sắc với khách hàng của mình trong mọi hoạt động kinh doanh hàng ngày, chúng tôi dự liệu những gì họ muốn, cung cấp những gì họ cần và giúp khách hàng đạt được lợi ích mà mình mong muốn.
                            </p>
                            <div className="mt-8 space-x-4">
                                <Link href="/brochure" className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-100 transition duration-300">
                                    Vietnamese Brochure
                                </Link>
                                <Link href="/gts" className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-100 transition duration-300">
                                    GTS
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
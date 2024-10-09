import Image from "next/image";
import Link from "next/link";

// app/components/Banner.js
const Banner3 = () => {
    return (
        <div className="relative h-[600px] flex items-center justify-center mt-20">
            {/* Hình ảnh nền */}
            <div className="absolute inset-0 z-0">
                <Image
                    width={1920}
                    height={1080}
                    src="/images/bgbgb.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Nội dung overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50">
                <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
                    <h2 className="text-white text-5xl font-bold mb-2">DỊCH VỤ BẢO HỘ NHÃN HIỆU</h2>
                    <h1 className="text-yellow-200 text-8xl font-bold mb-6">1.490.000 VNĐ</h1>
                    <p className="text-white mb-4 text-2xl">Nhanh chóng - Tiết kiệm - Hiệu quả</p>
                    <p className="text-white mb-6">Bảo hộ nhãn hiệu không chỉ là thủ tục, đó là sự đầu tư cho tương lai.
                        Hãy để An Khang đồng hành cùng bạn!</p>
                    <Link href="/contact" className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
                        NHẬN TƯ VẤN
                    </Link>
                </div>
            </div>
        </div>
    );
};

// ... existing code ...

export default Banner3;
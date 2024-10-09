import Image from "next/image";
import Link from "next/link";

// app/components/Banner.js
const Banner2 = () => {
    return (
        <div className="relative h-[600px] flex items-center justify-center mt-20">
            {/* Hình ảnh nền */}
            <div className="absolute inset-0 z-0">
                <Image
                    width={1920}
                    height={1080}
                    src="/images/1222.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Nội dung overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50">
                <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
                    <h2 className="text-white text-5xl font-bold mb-2">DỊCH VỤ KẾ TOÁN THUẾ TRỌN GÓI</h2>
                    <h1 className="text-yellow-200 text-8xl font-bold mb-6">500.000 VNĐ</h1>
                    <p className="text-white mb-4 text-2xl">Toàn diện - An toàn - Tiết kiệm</p>
                    <p className="text-white mb-6">Kế toán thuế An Khang, chuyên nghiệp tận tâm, đồng hành cùng doanh nghiệp vững bước trên mọi nẻo đường!</p>
                    <Link href="/contact" className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
                        NHẬN TƯ VẤN
                    </Link>
                </div>
            </div>
        </div>
    );
};

// ... existing code ...

export default Banner2;
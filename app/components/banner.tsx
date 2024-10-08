import Image from "next/image";
import Link from "next/link";

// app/components/Banner.js
const Banner = () => {
    return (
        <div className="relative h-[600px] flex items-center justify-center">
            {/* Hình ảnh nền */}
            <div className="absolute inset-0 z-0">
                <Image
                    width={1920}
                    height={1080}
                    src="/images/bg.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Nội dung overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50">
                <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
                    <h2 className="text-white text-5xl font-bold mb-2">DỊCH VỤ THÀNH LẬP CÔNG TY</h2>
                    <h1 className="text-yellow-200 text-8xl font-bold mb-6">690.000 VNĐ</h1>
                    <p className="text-white mb-4 text-2xl">Chi phí trọn gói A-Z và 3 ngày làm việc</p>
                    <p className="text-white mb-6">Dịch vụ thành lập doanh nghiệp - Chọn Luật An Khang, vững bước khởi nghiệp thành công!</p>
                    <Link href="/contact" className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
                        NHẬN TƯ VẤN
                    </Link>
                </div>
            </div>
        </div>
    );
};

// ... existing code ...

export default Banner;
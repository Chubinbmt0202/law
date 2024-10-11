import Image from "next/image";
import Link from "next/link";

// app/components/Banner.js
const Banner = () => {
    return (
        <div className="relative h-[600px] sm:h-[500px] flex items-center justify-center mt-20">
            {/* Hình ảnh nền */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/bg.png"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            {/* Nội dung overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50">
                <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col md:text-center justify-center md:items-start sm:flex">
                    {/* Tiêu đề lớn */}
                    <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 text-center">
                        DỊCH VỤ THÀNH LẬP CÔNG TY
                    </h2>

                    {/* Giá */}
                    <h1 className="text-yellow-200 text-5xl md:text-8xl font-bold mb-6 text-center">
                        690.000 VNĐ
                    </h1>

                    {/* Nội dung mô tả */}
                    <p className="text-white mb-4 text-lg text-center">
                        Chi phí trọn gói A-Z và 3 ngày làm việc
                    </p>

                    <p className="text-white mb-6 text-center">
                        Dịch vụ thành lập doanh nghiệp - Chọn Luật Thiện Minh, vững bước khởi nghiệp thành công!
                    </p>

                    {/* Nút CTA */}
                    <div className="flex justify-center md:justify-start w-full">
                        <Link href="/contact" className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
                            NHẬN TƯ VẤN
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

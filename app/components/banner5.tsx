import Image from "next/image";
import Link from "next/link";

// app/components/Banner.js
const Banner5 = () => {
    return (
        <div className="relative h-[600px] sm:h-[500px] flex items-center justify-center">
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

                    {/* Giá */}
                    <h1 className="text-yellow-200 text-3xl md:text-6xl font-bold mb-6 md:text-left">
                        Giấy phép công bố sản phẩm
                    </h1>

                    {/* <p className="text-white mb-6 text-center">
                        Dịch vụ thành lập doanh nghiệp - Chọn Thành lập doanh nghiệp, vững bước khởi nghiệp thành công!
                    </p> */}

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

export default Banner5;

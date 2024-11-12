import Image from "next/image";
import Link from "next/link";

// app/components/Banner.js
const Banner3 = () => {
    return (
        <div className="relative h-[600px] flex items-center justify-center">
            {/* Hình ảnh nền */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/bg.png"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50">
                <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col md:text-center justify-center md:items-start sm:flex">

                    <h1 className="text-yellow-200 text-5xl md:text-6xl text-center font-bold mb-6">Giấy phép xuất khẩu</h1>
                    <Link href="/contact" className="bg-red-600 text-center text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
                        NHẬN TƯ VẤN
                    </Link>
                </div>
            </div>
        </div>
    );
};

// ... existing code ...

export default Banner3;
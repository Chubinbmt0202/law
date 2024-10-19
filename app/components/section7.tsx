'use client'

import Image from "next/image";
import "./section7.css"

// app/components/Banner.js
const Section7 = () => {
    return (
        <div className="py-10  h-full bg-blue-900 ">
            <h1 className="md:text-3xl text-2xl font-bold text-center text-white">TẶNG MIỄN PHÍ</h1>
            <h2 className="md:text-2xl text-xl max-w-4xl md:mx-auto mx-5 font-bold text-center text-yellow-400 mb-2">Các mẫu văn bản được sử dụng trong &quot;ĐĂNG KÝ DOANH NGHIỆP&quot; Theo Luật doanh nghiệp 2020 mới nhất</h2>
            <hr className="mx-auto" style={{ width: '10%' }} />
            <div className="border-2 flex-col md:flex-row md:w-2/3 mt-2 md:mx-auto mt-5 flex bg-blue-950 shadow-lg">
                <div className="p-4 md:w-1/2 flex items-center">
                    <div>
                        <Image
                            width={60}
                            height={60}
                            src="/images/document.png"
                            alt="Background"
                            className=""
                        />
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">Theo Nghị định số 01/2021/NĐ-CP ngày 04/01/2021 của Bộ Kế hoạch và Đầu tư </h3>
                </div>
                <div className="p-4 md:w-1/2 flex items-center">
                    <div>
                        <Image
                            width={60}
                            height={60}
                            src="/images/document.png"
                            alt="Background"
                            className=""
                        />
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">Thông tư số 01/2021/TT-BKHĐT ngày 06/03/2021 hướng dẫn về đăng ký doanh nghiệp</h3>
                </div>
            </div>
            <div className="flex justify-center mt-10"> {/* Thêm lớp flex và justify-center */}
                <button
                    type="submit"
                    className="md:w-1/2 bg-red-600 text-white py-2 mx-5 px-5 font-bold rounded-full animate-move-zoom"
                    onClick={() => {
                        const section = document.getElementById("1");
                        if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                >
                    BẤM VÀO ĐÂY ĐỂ NHẬN TƯ VẤN
                </button>

            </div>
            <div className="max-w-2xl md:mx-auto mx-5 text-center mt-8 p-4 ">
                <h3 className="text-white font-bold text-2xl">Duy nhất cho 30 khách hàng đầu tiên</h3>
                <h3 className="text-white font-bold text-2xl">Nhanh tay lên! Chỉ còn 5 suất cuối cùng</h3>
            </div>
            <div className="max-w-2xl md:mx-auto mx-5 mt-4 p-4 bg-gray-100 rounded shadow">
                <form>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Họ và tên"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="tel"
                            placeholder="Số điện thoại"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex">
                        <div className="mb-4 w-1/2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4 w-1/2 ml-1">
                            <input
                                placeholder="Nội dung tư vấn"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center"> {/* Thêm lớp flex và justify-center */}
                        <button className="md:w-1/2 bg-red-600 text-white py-2 px-5 font-bold rounded-full animate-move-zoom">
                            ĐĂNG KÝ NHẬN TÀI LIỆU MIỄN PHÍ
                        </button>
                    </div>
                </form>
            </div>
        </div>


    );
};

// ... existing code ...

export default Section7;

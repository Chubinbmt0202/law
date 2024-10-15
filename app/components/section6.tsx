import Image from "next/image";

// app/components/Banner.js
const Section6 = () => {
    return (
        <div className="py-10 w-full h-full bg-black bg-cover" style={{ backgroundImage: "url('/images/9.png')" }}>
            <h1 className="text-2xl md:text-3xl font-bold text-center">ĐĂNG KÝ THÀNH LẬP CÔNG TY TRỌN GÓI</h1>
            <h2 className="text-xl md:text-2xl font-bold text-center text-yellow-800 mb-6">TRUNG TÂM HỖ TRỢ DOANH NGHIỆP ĐÀ NẴNG</h2>


            <div className="flex justify-center flex-col md:flex-row">

                <div className="bg-white p-6 md:w-1/3 mx-5 mt-5 rounded-lg ">
                    <h2 className="text-xl font-bold mb-4">Giải pháp hoàn hảo dành cho bạn</h2>
                    <div className="flex items-center border-4 mb-4">
                        <span className="text-white font-bold text-xl line-through bg-blue-900 px-12 p-5">1.600.000 ₫</span>
                        <span className="text-red-500 font-bold text-4xl ml-3">1.200.000 ₫</span>
                    </div>
                    <div className="text-center rounded-lg mb-4">
                        <p className="text-blue-700 font-semibold">Giảm ngay 25%</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-bold text-xl text-blue-900 mb-4">CAM KẾT</p>
                        <p>✔️ Không phát sinh thêm bất kỳ chi phí nào</p>
                    </div>
                    <div className="mb-4">
                        <p>✔️ Hồ sơ đơn giản : Chỉ cần DUY NHẤT 1 bản sao CMND hoặc Hộ chiếu của mỗi thành viên/ cổ đông sáng lập, tất cả các hồ sơ cần thiết khác chúng tôi sẽ chuẩn bị cho quý khách.</p>
                    </div>
                </div>

                <div className="bg-white p-6 md:w-1/3 mx-5 rounded-lg ">
                    <div className="flex mt-2 pr-3">
                        <Image
                            width={600}
                            height={300}
                            src="/images/10.jpg"
                            alt="Background"
                            className="ml-4"
                        />
                    </div>
                </div>
            </div>


        </div>


    );
};

// ... existing code ...

export default Section6;

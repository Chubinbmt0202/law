import Image from "next/image";

// app/components/Banner.js
const Section6 = () => {
    return (
        <div className="py-10 w-full h-full bg-black bg-cover" style={{ backgroundImage: "url('/images/9.png')" }}>
            <h1 className="text-xl md:max-w-7xl max-w-[300px] mx-auto md:text-3xl font-bold text-center">ĐĂNG KÝ THÀNH LẬP CÔNG TY TRỌN GÓI</h1>
            <h2 className="text-xl md:text-2xl font-bold md:max-w-7xl max-w-[300px] mx-auto text-center text-yellow-800 mb-6">TRUNG TÂM HỖ TRỢ DOANH NGHIỆP ĐÀ NẴNG</h2>


            <div className="flex justify-center flex-col md:flex-row">

                <div className="bg-white p-6 md:w-1/3 mx-5 mt-5 rounded-lg ">
                    <h2 className="text-xl font-bold mb-4">GIẢI PHÁP HOÀN HẢO DÀNH CHO BẠN</h2>
                    <div className="flex items-center border-4 mb-4">
                        <span className="text-white w-1/2 font-bold items-center md:text-2xl line-through bg-blue-900 md:px-12 p-5 md:pl-10">1.600.000 ₫</span>
                        <span className="text-red-500 md:w-1/2 font-bold md:text-4xl text-xl ml-6 md:ml-10">1.200.000 ₫</span>
                    </div>
                    <div className="text-center rounded-lg mb-4">
                        <p className="text-blue-700 font-semibold">
                            Giảm ngay <span className="text-red-500 text-2xl">25%</span>
                        </p>
                    </div>
                    <div className="mb-4">
                        <p className="font-bold text-xl text-blue-900 mb-4">CAM KẾT</p>
                        <p>✔️ Không phát sinh thêm bất kỳ chi phí nào</p>
                    </div>
                    <div className="mb-4">
                        <p>✔️ Hồ sơ đơn giản : Chỉ cần <span className="text-red-500 font-bold">DUY NHẤT 1</span > bản sao <span className="text-red-500 font-bold">CMND</span>  hoặc <span className="text-red-500 font-bold"> Hộ chiếu </span>của mỗi thành viên/ cổ đông sáng lập, tất cả các hồ sơ cần thiết khác chúng tôi sẽ chuẩn bị cho quý khách.</p>
                    </div>
                </div>

                <div className="bg-white p-6 md:w-1/3 mx-5 rounded-lg ">
                    <div className="flex mt-2 pr-3">
                        <Image
                            width={600}
                            height={300}
                            src="/images/23.jpg"
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

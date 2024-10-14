import Image from "next/image";

// app/components/Banner.js
const Banner4 = () => {
    return (
        <div className=" w-full flex items-center justify-center mt-20">
            {/* Hình ảnh nền */}
            <div className="w-full h-full inset-0 bg-black bg-opacity-3" style={{ backgroundImage: "url('/images/1.jpg')" }}>
                <div className="">
                    <div className="max-w-7xl mx-auto relative flex"> {/* Thay đổi ở đây để sử dụng flexbox */}
                        <div className="w-1/2 mt-20"> {/* Cột bên trái */}
                            <Image
                                width={500}
                                height={500}
                                src="/images/2.png"
                                alt="Background"
                            />
                        </div>
                        <div className="w-1/2 mt-32"> {/* Cột bên phải */}
                            {/* Nội dung cột bên phải */}
                            <h1 className="text-xl font-bold text-white ml-4">TRUNG TÂM HỖ TRỢ DOANH NGHIỆP ĐÀ NẴNG</h1>

                            <div className="ml-4">
                                <h2 className="text-2xl font-bold text-yellow-200 italic">Luật và Kế toán</h2>
                                <hr className="border-t border-yellow-400 my-2 w-1/2" />
                            </div>
                            <Image
                                width={500}
                                height={500}
                                src="/images/3.png"
                                alt="Background"
                            />
                            <Image
                                width={400}
                                height={400}
                                src="/images/4.png"
                                alt="Background"
                                className="ml-4"
                            />
                            <div className="inset-0 h-[200px] bg-blue-900">
                                <div className="relative flex">
                                    <ul className="w-1/2 text-white m-4">
                                        <div className="flex">
                                            <Image
                                                width={30}
                                                height={3}
                                                src="/images/5.png"
                                                alt="Background"
                                                className="ml-4"
                                            />
                                            <p className="ml-2">Tư vấn miễn phí trọn đời</p>
                                        </div>
                                        <div className="flex mt-2">
                                            <Image
                                                width={30}
                                                height={3}
                                                src="/images/5.png"
                                                alt="Background"
                                                className="ml-4"
                                            />
                                            <p className="ml-2">Miễn 2 triệu thuế môn bài</p>
                                        </div>

                                    </ul>

                                    <ul className="w-2/3 text-white m-4">
                                        <div className="flex">
                                            <Image
                                                width={30}
                                                height={3}
                                                src="/images/5.png"
                                                alt="Background"
                                                className="ml-4"
                                            />
                                            <p className="ml-2">Voucher 500k khi sử dụng dịch vụ  </p>
                                        </div>
                                        <div className="flex mt-2">
                                            <Image
                                                width={30}
                                                height={3}
                                                src="/images/5.png"
                                                alt="Background"
                                                className="ml-4 hidden"
                                            />
                                            <p className="ml-2"> </p>
                                        </div>
                                    </ul>


                                </div>
                                <div className="flex ml-4 mt-[-7px]">
                                    <Image
                                        width={30}
                                        height={3}
                                        src="/images/5.png"
                                        alt="Background"
                                        className="ml-4"
                                    />
                                    <p className="ml-2 text-white ">Tặng Voucher: Giảm 50% + tặng thêm 01 năm khi đăng ký gói chữ ký số bất kỳ</p>
                                </div>
                                <div className="bg-sky-500 my-5 rounded-full w-2/3 text-center mx-auto">
                                    <p className="text-white px-4 py-1">Tặng ngay bộ văn bản pháp lý về thuế và Phần mềm kế toán vận hành doanh nghiệp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

// ... existing code ...

export default Banner4;

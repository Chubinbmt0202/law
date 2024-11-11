import Image from "next/image";

// app/components/Banner.js
const Section8 = () => {
    return (
        <div className="py-10 w-full h-full bg-black bg-cover" style={{ backgroundImage: "url('/images/9.png')" }}>
            <h1 className="md:text-3xl text-2xl font-bold text-center">VÌ SAO HÀNG NGHÌN KHÁCH HÀNG <br></br> LỰA CHỌN THÀNH LẬP DOANH NGHIỆP</h1>
            <h2 className="md:text-2xl text-xl font-bold text-center text-yellow-800 mt-2">LÀ NƠI KHỞI ĐẦU DOANH NGHIỆP</h2>
            <hr className="mx-auto" style={{ width: '10%' }} />

            <div className="flex md:flex-row mx-5 mt-5 flex-col justify-center items-center">

                <div className=" p-6 md:w-1/3 rounded-lg ">
                    <div className="mb-4">
                        <p>Đến với <span className="text-blue-600 font-bold">THÀNH LẬP DOANH NGHIỆP</span>, người có nhu cầu đăng ký kinh doanh được tư vấn các thủ tục chi tiết, rõ ràng, không phải đi lại nhiều lần, <span className="text-blue-600 font-bold">TỐI ƯU</span> chi phí nhất có thể</p>
                    </div>
                    <div className="mb-4">
                        <p>Công ty sở hữu 1 đội ngũ chuyên gia với hơn <span className="text-red-600 font-bold"> 40+ </span>nhân sự có chuyên môn, đào tạo bài bản và kinh nghiệm thực chiến trên <span className="text-red-600 font-bold">  11 năm </span></p>
                    </div>

                    <div className="mb-4">
                        <p>Thành lập doanh nghiệp đã và đang thực hiện dịch vụ và đang đem đến sự hài lòng với hơn<span className="text-red-600 font-bold"> 6000+ </span>  doanh nghiệp thuộc nhiều lĩnh vực ngành nghề khác nhau</p>
                    </div>
                </div>

                <div className=" p-6 md:w-1/3 rounded-lg ">
                    <div className="flex mt-2 pr-3">
                        <Image
                            width={600}
                            height={300}
                            src="/images/26.jpg"
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

export default Section8;

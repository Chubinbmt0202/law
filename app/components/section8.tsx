import Image from "next/image";

// app/components/Banner.js
const Section8 = () => {
    return (
        <div className="py-10 w-full h-full bg-black bg-cover" style={{ backgroundImage: "url('/images/9.png')" }}>
            <h1 className="md:text-3xl text-2xl font-bold text-center">VÌ SAO HÀNG NGHÌN KHÁCH HÀNG <br></br> LỰA CHỌN LUẬT THIỆN MINH</h1>
            <h2 className="md:text-2xl text-xl font-bold text-center text-yellow-800 mt-2">LÀ NƠI KHỞI ĐẦU DOANH NGHIỆP</h2>
            <hr className="mx-auto" style={{ width: '10%' }} />

            <div className="flex md:flex-row mx-5 mt-5 flex-col justify-center items-center">

                <div className="bg-white p-6 md:w-1/3 rounded-lg ">
                    <div className="mb-4">
                        <p>Đến với Luật Thiện Minh, người có nhu cầu đăng ký kinh doanh được tư vấn các thủ tục chi tiết, rõ ràng, không phải đi lại nhiều lần, tối ưu chi phí nhất có thể</p>
                    </div>
                    <div className="mb-4">
                        <p>Công ty sở hữu 1 đội ngũ chuyên gia với hơn 40+ nhân sự có chuyên môn, đào tạo bài bản và kinh nghiệm thực chiến trên 11 năm</p>
                    </div>

                    <div className="mb-4">
                        <p>Luật Thiện Minh đã và đang thực hiện dịch vụ và đang đem đến sự hài lòng với hơn 6000+ doanh nghiệp thuộc nhiều lĩnh vực ngành nghề khác nhau</p>
                    </div>
                </div>

                <div className="bg-white p-6 md:w-1/3 rounded-lg ">
                    <div className="flex mt-2 pr-3">
                        <Image
                            width={600}
                            height={300}
                            src="/images/24.jpg"
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

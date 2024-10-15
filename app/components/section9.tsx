import Image from "next/image";

// app/components/Banner.js
const Section9 = () => {
    return (
        <div className="py-10  h-full bg-blue-900 ">
            <h1 className="text-3xl font-bold text-center text-white">CHÚNG TÔI HỖ TRỢ BẠN</h1>
            <h2 className="text-2xl max-w-4xl mx-auto font-bold text-center text-yellow-400 mb-2">Trong tất cả các loại hình doanh nghiệp</h2>
            <hr className="mx-auto" style={{ width: '10%' }} />

            <div className="flex md:flex-row flex-col max-w-7xl mx-auto justify-center mt-6">
                <div className=" items-center flex flex-col mx-4">
                    <Image src="/images/11.jpg" alt="Đăng ký hộ kinh doanh cá thể Đà Nẵng" width={200} height={150} />
                    <p className="text-white text-center font-bold mt-2">Đăng ký hộ kinh doanh cá thể Đà Nẵng</p>
                </div>
                <div className=" items-center flex flex-col mx-4">
                    <Image src="/images/12.jpg" alt="Thành lập công ty TNHH 1TV tại Đà Nẵng" width={200} height={150} />
                    <p className="text-white text-center font-bold mt-2">Thành lập công ty TNHH 1TV tại Đà Nẵng</p>
                </div>
                <div className=" items-center flex flex-col mx-4">
                    <Image src="/images/13.jpg" alt="Thành lập công ty TNHH 2TV tại Đà Nẵng" width={200} height={150} />
                    <p className="text-white text-center font-bold mt-2">Thành lập công ty TNHH 2TV tại Đà Nẵng</p>
                </div>
                <div className=" items-center flex flex-col mx-4">
                    <Image src="/images/14.jpg" alt="Dịch vụ thành lập công ty tại Đà Nẵng" width={200} height={150} />
                    <p className="text-white text-center font-bold mt-2">Dịch vụ thành lập công ty tại Đà Nẵng</p>
                </div>
                <div className=" items-center flex flex-col mx-4">
                    <Image src="/images/15.jpg" alt="Dịch vụ thay đổi đăng ký kinh doanh" width={200} height={150} />
                    <p className="text-white text-center font-bold mt-2">Dịch vụ thay đổi đăng ký kinh doanh</p>
                </div>
            </div>
        </div>


    );
};

// ... existing code ...

export default Section9;


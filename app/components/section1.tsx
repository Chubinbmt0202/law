

// app/components/Banner.js
const Section1 = () => {
    return (
        <div className=" w-full relative flex items-center justify-center">
            <div className="inset-0 bg-black bg-opacity-3 bg-cover w-full" style={{ backgroundImage: "url('/images/6.png')" }}>
                <div className="section2 text-center text-white z-10 py-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-800">DỊCH VỤ TƯ VẤN ĐĂNG KÝ KINH DOANH</h1>
                    <h2 className="text-xl md:text-2xl font-bold text-red-500">TẠI TRUNG TÂM HỖ TRỢ DOANH NGHIỆP ĐÀ NẴNG</h2>
                    <h1 className="text-xl md:text-2xl font-bold text-stone-900">ĐẾN NĂM 2024</h1>
                    {/* Statistics Boxes */}
                    <div className="flex justify-center md:flex-row items-center flex-col mt-8">
                        <div className="bg-white md:w-1/5 w-1/2 mx-8 border-8 border-yellow-500 p-6 shadow-lg">
                            <h3 className="text-4xl font-bold text-blue-800">11+ Năm</h3>
                            <p className="text-black">Hơn 11 năm kinh nghiệm tư vấn lập công ty Đà Nẵng</p>
                        </div>
                        <div className="bg-white md:w-1/5 w-1/2 mt-5 border-8 mx-8 border-yellow-500 p-6 rounded-lg shadow-lg">
                            <h3 className="text-4xl font-bold text-blue-800">40+</h3>
                            <p className="text-black">Sở hữu hơn 40 chuyên gia nhiều năm kinh nghiệm thực chiến</p>
                        </div>
                        <div className="bg-white md:w-1/5 w-1/2  mt-5 border-8 mx-8 border-yellow-500 p-6 rounded-lg shadow-lg">
                            <h3 className="text-4xl font-bold text-blue-800">6.000+</h3>
                            <p className="text-black">Khách hàng thực hiện dịch vụ thành lập doanh nghiệp Đà Nẵng</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ... existing code ...

export default Section1;

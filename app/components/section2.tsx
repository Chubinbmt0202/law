

// app/components/Banner.js
const Section2 = () => {
    return (
        <div className=" w-full relative items-center justify-center">
            <div className="inset-0 text-center bg-black bg-opacity-3 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/7.jpg')" }}>
                <h1 className="text-4xl font-bold text-white">QUY TRÌNH THỰC HIỆN TRỌN GÓI</h1>
                <h2 className="text-2xl font-bold text-yellow-400">DỊCH VỤ THÀNH LẬP CÔNG TY TẠI ĐÀ NẴNG</h2>
                <h1 className="text-2xl font-bold text-yellow-400 relative">
                    MỚI NHẤT 2024
                </h1>
                <div className="flex flex-col items-center space-y-4">
                    <div className="bg-blue-500 text-white p-4 rounded-tl-lg rounded-br-lg shadow-md w-64 text-center">
                        <h2 className="text-lg font-bold">Bước 1</h2>
                        <p>Tu van cac vuong mac khi thanh lap doanh nghiep</p>
                    </div>
                </div>
            </div>

        </div>


    );
};

// ... existing code ...

export default Section2;

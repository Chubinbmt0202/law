
import Image from "next/image";
// app/components/Banner.js
const Section5 = () => {
    return (
        <div className=" w-full bg-back bg-cover" style={{ backgroundImage: "url('/images/9.jpg')" }}>
            <div className="flex justify-center items-center md:h-screen">
                <div className="flex md:space-x-8 mx-5 mt-5">
                    <div className="border-4 md:w-2/3 flex-col md:flex-row mx-auto border-yellow-500 md:p-4 flex bg-white shadow-lg">
                        <div className="p-4">
                            <h2 className="text-3xl  font-bold">CÓ PHẢI BẠN ĐANG GẶP KHÓ KHĂN KHI </h2>
                            <h3 className="text-xl font-bold text-blue-600">ĐĂNG KÝ KINH DOANH TẠI ĐÀ NẴNG?</h3>
                            <hr />
                            <ul className="list-none pt-2">
                                <li className="my-1 pt-2">✔️ Nên thành lập công ty, thành lập doanh nghiệp hay hộ kinh doanh cá thể?</li>
                                <li className="my-1 pt-2">✔️ Ai có quyền thành lập công ty? Tên công ty phải đặt như thế nào không bị trùng, dễ nhớ?</li>
                                <li className="my-1 pt-2">✔️ Xác định ngành nghề kinh doanh nào khi đăng ký?</li>
                                <li className="my-1 pt-2">✔️ Nộp hồ sơ đăng ký kinh doanh ở đâu?</li>
                                <li className="my-1 pt-2">✔️ Thành lập công ty có cần hộ khẩu không? Có bao nhiêu vốn mới có thể mở công ty?</li>
                                <li className="my-1 pt-2">✔️ Các loại thuế cơ bản phải kê khai và nộp sau khi thành lập công ty, đăng ký hộ kinh doanh?</li>
                                <li className="my-1 pt-2">✔️ Thời gian mất mấy ngày? Đăng ký kinh doanh mất bao nhiêu tiền? Hồ sơ cần chuẩn bị là gì?</li>
                                <li className="my-1 pt-2">✔️ Rất nhiều câu hỏi cần được trả lời.</li>
                            </ul>
                        </div>
                        <div className="p-4">
                            <h2 className="text-3xl  font-bold">BẠN HOÀN TOÀN CÓ THỂ </h2>
                            <h3 className="text-xl font-bold text-blue-600 mt-2" >SỬ DỤNG DỊCH VỤ ĐĂNG KÝ KINH DOANH TRỌN GÓI CỦA THIỆN MINH</h3>
                            <hr />
                            <ul className="list-none pt-2">
                                <li className="my-1 pt-2">✔️ Nên thành lập công ty, thành lập doanh nghiệp hay hộ kinh doanh cá thể?</li>
                                <li className="my-1 pt-2">✔️ Ai có quyền thành lập công ty? Tên công ty phải đặt như thế nào không bị trùng, dễ nhớ?</li>
                                <li className="my-1 pt-2">✔️ Xác định ngành nghề kinh doanh nào khi đăng ký?</li>
                                <li className="my-1 pt-2">✔️ Nộp hồ sơ đăng ký kinh doanh ở đâu?</li>
                                <li className="my-1 pt-2">✔️ Thành lập công ty có cần hộ khẩu không? Có bao nhiêu vốn mới có thể mở công ty?</li>
                                <li className="my-1 pt-2">✔️ Các loại thuế cơ bản phải kê khai và nộp sau khi thành lập công ty, đăng ký hộ kinh doanh?</li>
                                <li className="my-1 pt-2">✔️ Thời gian mất mấy ngày? Đăng ký kinh doanh mất bao nhiêu tiền? Hồ sơ cần chuẩn bị là gì?</li>
                                <li className="my-1 pt-2">✔️ Rất nhiều câu hỏi cần được trả lời.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>


    );
};

// ... existing code ...

export default Section5;

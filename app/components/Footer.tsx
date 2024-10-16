import Image from "next/image";
import Link from "next/link";
// app/components/Banner.js
const Footer = () => {
    return (
        <div className="w-full h-full flex text-white items-center justify-center relative">
            <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
            <div className="w-full h-full inset-0 mx-auto" style={{ backgroundImage: "url('/images/21.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="relative max-w-7xl mt-4 mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className="flex justify-center"> {/* Thêm flex và justify-center */}
                        <Image
                            width={500}
                            height={10}
                            src="/images/22.png"
                            alt="Background"
                            className="mx-auto"
                        />
                    </div>
                </div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className="grid grid-cols-1 my-20 md:grid-cols-2 gap-8">
                        <div className="flex flex-col items-start"> {/* Thêm flex và items-center */}
                            <h1 className="text-xl font-bold text-white">TRUNG TÂM HỖ TRỢ DOANH NGHIỆP ĐÀ NẴNG</h1>

                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-yellow-200 italic">Luật và Kế toán</h2>
                                <hr className="border-t border-yellow-400 my-2 w-1/2 mx-auto" />
                            </div>

                            <div className="flex flex-col mt-10">
                                <h1 className="text-xl font-bold text-white text-yellow-200">Địa chỉ Đà Nẵng:</h1>
                                <p className="text-center">10 Thuận An 4, Phường Chính Gián, Quận Thanh Khê, TP Đà Nẵng.</p>

                                <h3 className="text-xl font-bold mb-4 mt-4 text-yellow-200">Dịch vụ chính của Chúng tôi:</h3>
                                <ul className="space-y-2">
                                    <li>Dịch vụ thành lập doanh nghiệp Đà Nẵng</li>
                                    <li>Dịch vụ kế toán thuế Đà Nẵng</li>
                                    <li>Thay đổi đăng ký kinh doanh Đà Nẵng</li>
                                </ul>
                            </div>
                        </div>

                        {/* Cột Kiến thức */}
                        <div className="flex flex-col">
                            <h1 className=" font-bold text-white text-yellow-200">Mobile:</h1>
                            <p >0123654789</p>

                            <h1 className=" mt-2 font-bold text-white text-yellow-200">Email:</h1>
                            <p >LuatThienMinh@gmail.com</p>

                            <h1 className=" mt-2 font-bold text-white text-yellow-200">Website:</h1>
                            <p >thanhlapdoanhnghiep.ai.vn</p>

                            <h3 className="text-xl font-bold mb-4 mt-4 text-yellow-200">Trợ giúp khách hàng:</h3>
                            <ul className="space-y-2">
                                <li>Chính sách bảo mật thông tin</li>
                                <li>Chính sách thanh toán</li>
                                <li>Chính sách bảo hành và đổi trả dịch vụ</li>
                            </ul>
                        </div>
                    </div>

                    {/* Phần chứng nhận và thông báo */}
                    <div className="mt-8 flex justify-center"> {/* Thay đổi justify-between thành justify-center */}
                        <p className="text-sm text-center">
                            Trang web này chứa thông tin chung dựa trên luật pháp Việt Nam. Tuy nhiên, xin lưu ý rằng nó không cấu thành tư vấn pháp lý hoặc thương mại, cũng như không nhằm mục đích tạo mối quan hệ luật sư - khách hàng. Nó cũng không nhằm mục đích cung cấp một tuyên bố toàn diện hoặc chi tiết về luật pháp.
                        </p>
                    </div>

                    {/* Copyright và các liên kết chính sách */}
                    <div className="my-8 pt-8 border-t border-gray-700 flex justify-between items-center text-sm">
                        <p className="text-center">© 2024 Web Design & Optimization by WSI.vn</p>
                        <div className="space-x-4">
                            <Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
                            <Link href="/thong-bao-ban-quyen">Thông báo bản quyền</Link>
                            <Link href="/tuyen-bo-tu-choi-trach-nhiem">Tuyên bố từ chối trách nhiệm</Link>
                            <Link href="/chinh-sach-bao-ve-du-lieu-ca-nhan">Chính sách bảo vệ dữ liệu cá nhân</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;


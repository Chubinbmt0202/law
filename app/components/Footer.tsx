import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Cột Thông tin */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Thông tin</h3>
                        <p className='mb-2'>Thiện Minh | Công ty luật Việt Nam</p>
                        <p className='mb-2'>Văn phòng Đà Nẵng: 64 Lê Đại Hành, Khuê Trung, Cẩm Lệ, Thành phố Đà Nẵng, Việt Nam</p>
                        <p className='mb-2'>(+84) 911 357 447</p>
                        <p className='mb-2'>info@apolatlegal.com</p>
                        <p className='mb-2'>MST: 0314453226</p>
                        <p className='mb-2'>Thứ hai - Thứ sáu 08:15 - 17:15</p>
                        <p className='mb-2'>Giấy chứng nhận ĐKHĐ số 41.07.2652 do Sở Tư Pháp TPHCM cấp</p>
                        {/* Thêm các biểu tượng mạng xã hội ở đây */}
                    </div>

                    {/* Cột Về chúng tôi */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Về chúng tôi</h3>
                        <ul className="space-y-2">
                            <li><Link href="/giao-dich-noi-bat">Giao Dịch Nổi Bật</Link></li>
                            <li><Link href="/giai-thuong-cong-nhan">Giải Thưởng & Công Nhận</Link></li>
                        </ul>
                        <h3 className="text-xl font-bold mt-6 mb-4">Lĩnh vực</h3>
                        <ul className="space-y-2">
                            <li><Link href="/truyen-thong-vien-thong">Truyền Thông và Viễn Thông</Link></li>
                            <li><Link href="/cong-nghe">Công Nghệ</Link></li>
                            <li><Link href="/bat-dong-san-xay-dung">Bất Động Sản và Xây Dựng</Link></li>
                            {/* Thêm các lĩnh vực khác */}
                        </ul>
                    </div>

                    {/* Cột Dịch vụ */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Dịch vụ</h3>
                        <ul className="space-y-2">
                            <li><Link href="/so-huu-tri-tue">Sở Hữu Trí Tuệ</Link></li>
                            <li><Link href="/hop-tac-doanh-nghiep">Hợp Tác Doanh Nghiệp</Link></li>
                            <li><Link href="/giai-quyet-tranh-chap">Giải Quyết Tranh Chấp</Link></li>
                            {/* Thêm các dịch vụ khác */}
                        </ul>
                    </div>

                    {/* Cột Kiến thức */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Kiến thức</h3>
                        <ul className="space-y-2">
                            <li><Link href="/bai-viet-chuyen-mon">Bài Viết Chuyên Môn</Link></li>
                            <li><Link href="/bieu-mau">Biểu Mẫu</Link></li>
                            <li><Link href="/cap-nhat-phap-ly">Cập Nhật Pháp Lý</Link></li>
                            {/* Thêm các mục kiến thức khác */}
                        </ul>
                    </div>
                </div>

                {/* Phần chứng nhận và thông báo */}
                <div className="mt-8 flex justify-between items-center">
                    <p className="text-sm">
                        Trang web này chứa thông tin chung dựa trên luật pháp Việt Nam. Tuy nhiên, xin lưu ý rằng nó không cấu thành tư vấn pháp lý hoặc thương mại, cũng như không nhằm mục đích tạo mối quan hệ luật sư - khách hàng. Nó cũng không nhằm mục đích cung cấp một tuyên bố toàn diện hoặc chi tiết về luật pháp.
                    </p>
                </div>

                {/* Copyright và các liên kết chính sách */}
                <div className="mt-8 pt-8 border-t border-gray-700 flex justify-between items-center text-sm">
                    <p>© 2024 Web Design & Optimization by WSI.vn</p>
                    <div className="space-x-4">
                        <Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
                        <Link href="/thong-bao-ban-quyen">Thông báo bản quyền</Link>
                        <Link href="/tuyen-bo-tu-choi-trach-nhiem">Tuyên bố từ chối trách nhiệm</Link>
                        <Link href="/chinh-sach-bao-ve-du-lieu-ca-nhan">Chính sách bảo vệ dữ liệu cá nhân</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
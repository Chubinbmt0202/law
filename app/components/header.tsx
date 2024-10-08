// app/components/header.tsx
'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const menuItems = {
        'Trang Chủ': { path: '/', subItems: [] },
        'Giới Thiệu': {
            path: '/gioi-thieu',
            subItems: [
                { name: 'Công ty Luật Thiện Minh', path: '/gioi-thieu/cong-ty-luat-thien-minh' },
                { name: 'Người sáng lập', path: '/gioi-thieu/nguoi-sang-lap' },
            ]
        },
        'Dịch Vụ': {
            path: '/dich-vu',
            subItems: [
                { name: 'Thành lập Doanh nghiệp trọn gói', path: '/dich-vu/thanh-lap-doanh-nghiep-tron-goi' },
                { name: 'Kế toán Doanh nghiệp', path: '/dich-vu/ke-toan-doanh-nghiep' },
                { name: 'Đăng ký Bảo Hộ Nhãn Hiệu', path: '/dich-vu/dang-ky-bao-ho-nhan-hieu' },
            ]
        },
        'Kiến Thức Pháp Luật': {
            path: '/kien-thuc-phap-luat',
            subItems: [
                { name: 'Pháp luật doanh nghiệp', path: '/kien-thuc-phap-luat/phap-luat-doanh-nghiep' },
                { name: 'Pháp luật Kế toán', path: '/kien-thuc-phap-luat/phap-luat-ke-toan' },
                { name: 'Bảo Hộ Nhãn Hiệu', path: '/kien-thuc-phap-luat/bao-ho-nhan-hieu' },
                { name: 'Hỏi và Đáp', path: '/kien-thuc-phap-luat/hoi-va-dap' },
                { name: 'Văn bản Pháp luật', path: '/kien-thuc-phap-luat/van-ban-phap-luat' }
            ]
        },
        'Tin Tức Pháp Luật': { path: '/tin-tuc-phap-luat', subItems: [] },
        'Liên Hệ': { path: '/lien-he', subItems: [] }
    };
    const [openMenu, setOpenMenu] = useState<string | null>(null); // Trạng thái cho dropdown

    const handleMouseEnter = (key: string) => {
        setOpenMenu(key);
    };

    const handleMouseLeave = () => {
        setOpenMenu(null);
    };
    return (
        <>
            <header className="bg-white shadow w-full">
                <div className="max-w-7xl mx-auto p-6">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-blue-800">
                            <h3>AN KHANG</h3>
                        </div>
                        <nav className="flex space-x-6 relative z-50">
                            {Object.entries(menuItems).map(([key, { path, subItems }]) => (
                                <div
                                    key={key}
                                    onMouseEnter={() => handleMouseEnter(key)}
                                    onMouseLeave={handleMouseLeave}
                                    className="relative"
                                >
                                    <Link
                                        href={path} // Sử dụng path từ menuItems
                                        className="text-blue-800 font-bold hover:text-[#c41230] transition duration-300 ease-in-out flex items-center"
                                    >
                                        {key}
                                        {subItems.length > 0 && (
                                            <Image width={20} height={20} src="/images/down.png" alt="Description of the image" />
                                        )}
                                    </Link>
                                    {subItems.length > 0 && openMenu === key && (
                                        <div className="absolute left-0 w-[200px] bg-white shadow-lg rounded-lg border border-gray-200">
                                            {subItems.map(({ name, path }) => ( // Sử dụng name và path từ subItems
                                                <Link
                                                    key={name}
                                                    href={path} // Sử dụng path từ subItem
                                                    className="block px-4 py-2 text-blue-800 hover:bg-[#f0f0f0] hover:text-[#c41230] transition duration-300 ease-in-out"
                                                >
                                                    {name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header
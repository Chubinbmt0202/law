'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const menuItems = {
        'Trang Chủ': { path: '/', subItems: [] },
        'Giới Thiệu': { path: '/about', subItems: [] },
        'Dịch Vụ': {
            path: '/service',
            subItems: [
                { name: 'Giấy chứng nhận đăng ký kinh doanh', path: '/service/dichvuthanhlapdoanhnghiep' },
                { name: 'Giấy phép con', path: '/service/ketoanphapluat' },
                { name: 'Giấy phép lao động', path: '/service/baohonhanhieu' },
                { name: 'Giấy chứng nhận đủ điều kiện vệ sinh ATTP', path: '/service/attp' },
                { name: 'Giấy phép môi trường', path: '/service/ketoanphapluat' },
                { name: 'Giấy phép đăng ký nhãn hiệu, bản quyền sở hữu trí tuệ', path: '/service/baohonhanhieu' },
                { name: 'Giấy phép kinh doanh hoá chất', path: '/service/dichvuthanhlapdoanhnghiep' },
                { name: 'Giấy chứng nhận xuất xứ hàng hoá (C/O)', path: '/service/ketoanphapluat' },
                { name: 'Giất chứng nhận an ninh, trật tự', path: '/service/baohonhanhieu' },
                { name: 'Giấy phép quảng cáo', path: '/service/dichvuthanhlapdoanhnghiep' },
                { name: 'Giấy công bố sản phẩm', path: '/service/ketoanphapluat' },
                { name: 'Giấy công bố mỹ phẩm', path: '/service/baohonhanhieu' },
                { name: 'Giấy kiểm định', path: '/service/baohonhanhieu' },
                { name: 'Giấy phép xuất khẩu', path: '/service/baohonhanhieu' },

            ]
        },
        'Liên Hệ': { path: '/contacts', subItems: [] }
    };

    const [openMenu, setOpenMenu] = useState<string | null>(null); // Trạng thái cho dropdown
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Trạng thái cho menu di động

    const handleMouseEnter = (key: string) => {
        setOpenMenu(key);
    };

    const handleMouseLeave = () => {
        setOpenMenu(null);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Đóng menu di động khi nhấn vào item
    const handleMenuItemClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-white shadow w-full fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-800">
                    <h3>Thành lập doannh nghiệp</h3>
                </div>

                {/* Hamburger button for mobile */}
                <button className="lg:hidden text-blue-800" onClick={toggleMobileMenu}>
                    <Image width={30} height={30} src="/images/menu.png" alt="Menu" />
                </button>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex space-x-6 relative">
                    {Object.entries(menuItems).map(([key, { path, subItems }]) => (
                        <div
                            key={key}
                            onMouseEnter={() => handleMouseEnter(key)}
                            onMouseLeave={handleMouseLeave}
                            className="relative"
                        >
                            <Link
                                href={path}
                                className="text-blue-800 font-bold hover:text-[#c41230] transition duration-300 ease-in-out flex items-center"
                            >
                                {key}
                                {subItems.length > 0 && (
                                    <Image width={20} height={20} src="/images/down.png" alt="Dropdown Icon" />
                                )}
                            </Link>
                            {subItems.length > 0 && openMenu === key && (
                                <div className="absolute right-0 w-[300px] bg-white shadow-lg rounded-lg border border-gray-200">
                                    {subItems.map(({ name, path }) => (
                                        <Link
                                            key={name}
                                            href={path}
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

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <nav className="lg:hidden absolute top-[100%] left-0 w-full bg-white shadow-lg rounded-lg">
                        {Object.entries(menuItems).map(([key, { path, subItems }]) => (
                            <div key={key} className="relative">
                                <Link
                                    href={path}
                                    className="block px-4 py-2 text-blue-800 font-bold hover:bg-[#f0f0f0] hover:text-[#c41230] transition duration-300 ease-in-out"
                                    onClick={handleMenuItemClick} // Đóng menu sau khi nhấn
                                >
                                    {key}
                                </Link>
                                {subItems.length > 0 && (
                                    <div className="ml-4">
                                        {subItems.map(({ name, path }) => (
                                            <Link
                                                key={name}
                                                href={path}
                                                className="block px-4 py-2 text-blue-800 hover:bg-[#f0f0f0] hover:text-[#c41230] transition duration-300 ease-in-out"
                                                onClick={handleMenuItemClick} // Đóng menu sau khi nhấn
                                            >
                                                {name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;

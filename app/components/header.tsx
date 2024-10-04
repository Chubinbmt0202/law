// app/components/header.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

const Header = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const menuItems = {
        'Về Apolat Legal': [
            'Câu chuyện của chúng tôi',
            'Giao dịch nổi bật',
            'Giải thưởng và công nhận',
            'Sự kiện diễn ra',
            'Hợp tác quốc tế'
        ],
        'Đội Ngũ Luật Sư': [
            'Nhân sự pháp lý',
            'Nhân sự vận hành'
        ],
        'Dịch Vụ': [
            'Giải quyết tranh chấp',
            'Hợp tác doanh nghiệp',
            'Tư vấn thành lập doanh nghiệp',
            'Tài chính',
            'Đầu tư'
        ],
        'Kiến Thức': [
            'Bài viết chuyên môn',
            'Kiến thức pháp luật',
            'Cập nhật pháp lý',
            'Biểu mẫu',
            'Văn bản pháp luật'
        ]
    };
    return (
        <>
            <div className="bg-[#c41230] text-white w-full">
                <div className="max-w-7xl mx-auto py-2 px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <span>
                            {/* <Image src="/phone-icon.png" alt="Phone" width={20} height={20} className="inline mr-2" /> */}
                            <a href="tel:+84911927647" className="hover:underline">+84 911 927 647</a>
                        </span>
                        <span>
                            {/* <Image src="/email-icon.png" alt="Email" width={20} height={20} className="inline mr-2" /> */}
                            <a href="mailto:info@apolatlegal.com" className="hover:underline">info@apolatlegal.com</a>
                        </span>
                    </div>
                    <div>
                        <span>Thứ Hai - Thứ Bảy 08:00 - 17:30</span>
                    </div>
                </div>
            </div>
            <header className="bg-white shadow w-full">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold">
                            <h3>Luật Thiện Minh</h3>
                        </div>
                        <nav className="flex space-x-6 relative z-50">
                            {Object.entries(menuItems).map(([key, items]) => (
                                <div key={key}
                                    className="relative"
                                    onMouseEnter={() => setHoveredItem(key)}
                                    onMouseLeave={() => setHoveredItem(null)}>
                                    <div className="flex items-center">
                                        <Link href={`/${key.toLowerCase().replace(/\s+/g, '-')}`} className="text-black hover:text-[#c41230] flex items-center">
                                            {key}
                                            <ChevronDownIcon className="h-4 w-4 ml-1" />
                                        </Link>
                                    </div>
                                    {hoveredItem === key && (
                                        <div className="absolute left-0 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                {items.map((item) => (
                                                    <Link key={item} href={`/${key.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                        role="menuitem">
                                                        {item}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link href="/linh-vuc" className="text-black hover:text-[#c41230]">Lĩnh Vực</Link>
                            <Link href="/tuyen-dung" className="text-black hover:text-[#c41230]">Tuyển Dụng</Link>
                            <Link href="/lien-he" className="text-black hover:text-[#c41230]">Liên Hệ</Link>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <button className="text-black hover:text-[#c41230]">🇻🇳</button>
                            <button className="text-black hover:text-[#c41230]">🇬🇧</button>
                            <button className="text-black hover:text-[#c41230]">
                                {/* <Image src="/search-icon.png" alt="Search" width={20} height={20} /> */}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
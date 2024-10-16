'use client'

import Image from "next/image";
import React, { useEffect, useState } from 'react';
import "./section7.css"
// app/components/Banner.js
const Section11 = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date(Date.now() + 4 * 60 * 60 * 1000 + 12 * 60 * 1000 + 28 * 1000); // 4 giờ, 12 phút, 28 giây
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="py-10 h-full bg-black bg-cover" style={{ backgroundImage: "url('/images/1.jpg')" }}>
            <div className="flex max-w-5xl flex-col items-center md:flex-row mx-auto justify-between p-8 rounded-lg text-white">
                <div className="max-w-md">
                    <Image
                        width={600}
                        height={300}
                        src="/images/3.png"
                        alt="Background"
                        className="md:ml-4"
                    />
                    <h2 className=" font-bold ml-4">Địa chỉ uy tín kiến tạo doanh nghiệp phát triển bền vững</h2>
                    <hr className="ml-4 mb-4" />
                    <Image
                        width={600}
                        height={300}
                        src="/images/20.png"
                        alt="Background"
                        className="md:ml-4"
                    />
                    <div className="flex flex-col items-center p-4 animate-move-zoom rounded-lg text-white">
                        <h2 className="text-xl font-bold mb-2">ƯU ĐÃI SẼ KẾT THÚC SAU</h2>
                        <div className="flex space-x-4">
                            <div className="bg-yellow-500 p-4 rounded-lg text-center w-16 h-16 flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold ">{String(timeLeft.days).padStart(2, '0')}</span>
                                <p>Ngày</p>
                            </div>
                            <div className="bg-yellow-500 p-4 rounded-lg text-center w-16 h-16 flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                                <p>Giờ</p>
                            </div>
                            <div className="bg-yellow-500 p-4 rounded-lg text-center w-16 h-16 flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                <p>Phút</p>
                            </div>
                            <div className="bg-yellow-500 p-4 rounded-lg text-center w-16 h-16 flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                <p>Giây</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-md bg-white text-center text-black p-6 rounded-lg shadow-lg">
                    <h3 className="text-3xl font-bold text-blue-600">Bạn đang cần hỗ trợ đăng ký doanh nghiệp?</h3>
                    <h3 className="mb-4 font-bold">Đăng ký để được tư vấn MIẾN PHÍ ngay!</h3>

                    <form>
                        <input
                            type="text"
                            placeholder="Họ và tên"
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Số điện thoại"
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            required
                        />
                        <textarea
                            placeholder="Nội dung tư vấn"
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            required
                        ></textarea>
                        <button type="submit" className="w-full bg-red-600 text-white py-2 rounded">
                            GỬI THÔNG TIN
                        </button>
                    </form>
                </div>
            </div>

        </div>


    );
};

// ... existing code ...

export default Section11;

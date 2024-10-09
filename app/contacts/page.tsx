import React from 'react';
import Contact from '../components/contact';

export default function AboutPage() {
    return (
        <div>
            {/* Content overlay */}
            <div className="relative mt-20">
                {/* Phần đầu trang */}
                <div className="bg-cover bg-center h-64" style={{ backgroundImage: "url('/images/nganh-luat-3.jpeg')" }}>
                    <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                        <h1 className="text-white text-4xl font-bold">Liên hệ</h1>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
}
import React from 'react';
import Image from 'next/image';

type PersonnelType = {
    name: string;
    englishName: string;
    position: string;
    phone: string;
    email: string;
    imageUrl: string;
};

// Danh sách nhân sự
const personnelList: PersonnelType[] = [
    {
        name: "PHẠM HỒNG MẠNH",
        englishName: "MARCUS",
        position: "Managing Partner",
        phone: "+84932014986",
        email: "manh.pham@apolatlegal.com",
        imageUrl: "/images/luatsu.jpg"
    },
    {
        name: "ĐINH QUANG LONG",
        englishName: "ALEX",
        position: "Senior Partner",
        phone: "+84919963977",
        email: "long.dinh@apolatlegal.com",
        imageUrl: "/images/luatsu.jpg"
    },
    {
        name: "PHẠM THỊ THOA",
        englishName: "HELEN",
        position: "Senior Partner",
        phone: "+84918950066",
        email: "thoa.pham@apolatlegal.com",
        imageUrl: "/images/luatsu.jpg"
    },
    {
        name: "PHẠM HỒNG MẠNH",
        englishName: "MARCUS",
        position: "Managing Partner",
        phone: "+84932014986",
        email: "manh.pham@apolatlegal.com",
        imageUrl: "/images/luatsu.jpg"
    },
    {
        name: "ĐINH QUANG LONG",
        englishName: "ALEX",
        position: "Senior Partner",
        phone: "+84919963977",
        email: "long.dinh@apolatlegal.com",
        imageUrl: "/images/luatsu.jpg"
    },
    {
        name: "PHẠM THỊ THOA",
        englishName: "HELEN",
        position: "Senior Partner",
        phone: "+84918950066",
        email: "thoa.pham@apolatlegal.com",
        imageUrl: "/images/luatsu.jpg"
    },
];

const PersonnelCard: React.FC<PersonnelType> = ({ name, englishName, position, phone, email, imageUrl }) => (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-64 w-full">
            <Image
                src={imageUrl}
                fill
                objectFit="cover"
                alt={`${name} ${englishName}`}
            />
        </div>
        <div className="p-4">
            <h3 className="text-lg font-semibold text-red-600">{name} | {englishName}</h3>
            <p className="text-gray-600">{position}</p>
            <div className="mt-2">
                <p className="text-sm"><a href={`tel:${phone}`} className="text-gray-700">{phone}</a></p>
                <p className="text-sm"><a href={`mailto:${email}`} className="text-gray-700">{email}</a></p>
            </div>
        </div>
    </div>
);

export default function NhanSuVanHanhPage() {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative h-64 md:h-80 lg:h-96 w-full">
                <Image
                    src="/images/nhansu.jpg"  // Thay thế bằng đường dẫn thực tế đến hình ảnh của bạn
                    layout="fill"
                    objectFit="cover"
                    alt="Nhân sự vận hành background"
                    className="brightness-50"  // Làm tối hình ảnh để text dễ đọc hơn
                />

                {/* Overlay text */}
                <div className="absolute max-w-7xl mx-auto inset-0 flex flex-col justify-end items-start p-8 text-white">
                    <h1 className="text-4xl md:text-center md:text-5xl font-bold mb-4">Nhân Sự </h1>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="md:text-3xl font-bold mb-4 inline-block relative mb-10">
                    Nhân sự pháp lý
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 rounded"></span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {personnelList.map((person, index) => (
                        <PersonnelCard key={index} {...person} />
                    ))}
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="md:text-3xl font-bold mb-4 inline-block relative mb-10">
                    Nhân sự vận hành
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 rounded"></span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {personnelList.map((person, index) => (
                        <PersonnelCard key={index} {...person} />
                    ))}
                </div>
            </div>
        </div>
    );
}

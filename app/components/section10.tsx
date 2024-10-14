'use client'
import Image from "next/image";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
// app/components/Banner.js
const Section10 = () => {
    const [name, setName] = useState('')
    const [mail, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);
        console.log(data)

        const service_id = 'service_jie9suc';
        const template_id = 'template_lksus0w';
        const public_key = 'B-i2SfOv21AzDyDII';


        // create params
        const template = {
            from_name: name,
            from_phone: phone,
            from_email: mail,
            from_content: content,
        }
        // Gửi email qua EmailJS
        emailjs.send(service_id, template_id, template, public_key)
            .then((response) => {
                alert("Gửi biểu mẫu thành công")
                console.log("Email gửi thành công", response)
                setName("")
                setPhone("")
                setEmail("")
                setContent("")
            })
            .catch((error) => {
                alert("Lỗi khi gửi form")
                console.log("Lỗi quần què chi đó", error)
            })
    };
    return (
        <div className="py-10 w-full h-full bg-white ">
            <h1 className="text-3xl font-bold text-center">PHÍ DỊCH VỤ CHỈ TỪ</h1>
            <h2 className="text-4xl font-bold text-center text-red-800 mt-2">1.200.000VNĐ ĐÃ BAO GỒM</h2>
            <hr className="mx-auto" style={{ width: '10%' }} />

            <div className="flex justify-center mt-10 items-center">
                <div className="bg-white p-6 w-1/3 rounded-lg ">
                    <div className="flex mt-2 pr-3">
                        <Image
                            width={600}
                            height={300}
                            src="/images/10.jpg"
                            alt="Background"
                            className="ml-4"
                        />
                    </div>
                </div>
                <div className="bg-white p-6 w-1/3 rounded-lg ">
                    <ul >
                        <li className="my-2">✔️ Lệ phí nộp hồ sơ đăng ký doanh nghiệp và cấp giấy phép kinh doanh</li>
                        <li className="my-2">✔️ Lệ phí khác dấu và công bố mẫu dấu công ty lên Cổng thông tin Doanh Nghiệp Quốc Gia</li>
                        <li className="my-2">✔️ Lệ phí công bố thông tin đăng ký doanh nghiệp công khai</li>
                        <li className="my-2">✔️ Phí tư vấn về ngành nghề, vốn điều lệ, loại hình, tên công ty...</li>
                        <li className="my-2">✔️ Phí cư nhân viên gặp khách hàng ký hồ sơ tận nhà</li>
                        <li className="my-2">✔️ Phí cư nhân viên nộp hồ sơ ở sở KHDT</li>
                        <li className="my-2">✔️ Phí cư nhân viên lên sở KHDT nhận GPKD và con dấu</li>
                        <li className="my-2">✔️ Phí trả giấy phép và con dấu tận nhà cho khách hàng</li>
                    </ul>
                </div>


            </div>
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-3xl font-bold text-red-600 mb-6">Thông tin liên hệ</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <p>Hotline: (+84) 911 357 447</p>
                                </div>
                                <div className="flex items-center">
                                    <p>Email: info@apolatlegal.com</p>
                                </div>
                                <div className="flex items-start">
                                    <div>
                                        <p className="font-semibold">Văn phòng tại Đà Nẵng:</p>
                                        <p>64 Lê Đại Hành, Khuê Trung, Cẩm lệ, Thành phố Đà Nẵng, Việt Nam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-red-600 mb-6">Gửi yêu cầu tư vấn</h2>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block mb-1">Họ tên *</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" className="w-full p-2 border rounded" placeholder="Nhập họ tên..." required />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="phone" className="block mb-1">Số điện thoại *</label>
                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" id="phone" name="phone" className="w-full p-2 border rounded" placeholder="Nhập số điện thoại..." required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-1">Email</label>
                                        <input value={mail} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full p-2 border rounded" placeholder="Nhập email..." />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-1">Dịch vụ cần tư vấn *</label>
                                    <textarea value={content} onChange={(e) => setContent(e.target.value)} id="message" name="message" rows={4} className="w-full p-2 border rounded" placeholder="Nhập nội dung..." required></textarea>
                                </div>
                                <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors duration-300">
                                    Gửi đi
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
};

// ... existing code ...

export default Section10;

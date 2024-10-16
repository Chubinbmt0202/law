'use client'
import Image from "next/image";
// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
// app/components/Banner.js
const Section10 = () => {
    // const [name, setName] = useState('')
    // const [mail, setEmail] = useState('')
    // const [phone, setPhone] = useState('')
    // const [content, setContent] = useState('')

    // const handleSubmit = (event: React.FormEvent) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target as HTMLFormElement);
    //     const data = Object.fromEntries(formData);
    //     console.log(data)

    //     const service_id = 'service_jie9suc';
    //     const template_id = 'template_lksus0w';
    //     const public_key = 'B-i2SfOv21AzDyDII';


    //     // create params
    //     const template = {
    //         from_name: name,
    //         from_phone: phone,
    //         from_email: mail,
    //         from_content: content,
    //     }
    //     // Gửi email qua EmailJS
    //     emailjs.send(service_id, template_id, template, public_key)
    //         .then((response) => {
    //             alert("Gửi biểu mẫu thành công")
    //             console.log("Email gửi thành công", response)
    //             setName("")
    //             setPhone("")
    //             setEmail("")
    //             setContent("")
    //         })
    //         .catch((error) => {
    //             alert("Lỗi khi gửi form")
    //             console.log("Lỗi quần què chi đó", error)
    //         })
    // };
    return (
        <div className="py-10 w-full h-full bg-white ">
            <h1 className="text-3xl font-bold text-center">PHÍ DỊCH VỤ CHỈ TỪ</h1>
            <h2 className="md:text-4xl text-2xl font-bold text-center text-red-800 mt-2">1.200.000VNĐ ĐÃ BAO GỒM</h2>
            <hr className="mx-auto" style={{ width: '10%' }} />

            <div className="flex justify-center flex-col md:flex-row mt-10 items-center">
                <div className="bg-white p-6 md:w-1/3 rounded-lg ">
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
                <div className="bg-white mx-5 p-6 md:w-1/3 rounded-lg ">
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
        </div>


    );
};

// ... existing code ...

export default Section10;

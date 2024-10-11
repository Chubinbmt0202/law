export default function Contact() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-red-600 mb-6">Thông tin liên hệ</h2>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                {/* <PhoneIcon className="h-6 w-6 text-red-600 mr-2" /> */}
                                <p>Hotline: (+84) 911 357 447</p>
                            </div>
                            <div className="flex items-center">
                                {/* <EnvelopeIcon className="h-6 w-6 text-red-600 mr-2" /> */}
                                <p>Email: info@apolatlegal.com</p>
                            </div>
                            <div className="flex items-start">
                                {/* <MapPinIcon className="h-6 w-6 text-red-600 mr-2 mt-1" /> */}
                                <div>
                                    <p className="font-semibold">Văn phòng tại Đà Nẵng:</p>
                                    <p>64 Lê Đại Hành, Khuê Trung, Cẩm lệ, Thành phố Đà Nẵng, Việt Nam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-red-600 mb-6">Gửi yêu cầu tư vấn</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-1">Họ tên *</label>
                                <input type="text" id="name" name="name" className="w-full p-2 border rounded" placeholder="Nhập họ tên..." required />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="phone" className="block mb-1">Số điện thoại *</label>
                                    <input type="tel" id="phone" name="phone" className="w-full p-2 border rounded" placeholder="Nhập số điện thoại..." required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-1">Email</label>
                                    <input type="email" id="email" name="email" className="w-full p-2 border rounded" placeholder="Nhập email..." />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1">Dịch vụ cần tư vấn *</label>
                                <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" placeholder="Nhập nội dung..." required></textarea>
                            </div>
                            <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors duration-300">
                                Gửi đi
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
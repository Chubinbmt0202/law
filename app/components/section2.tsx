

// app/components/Banner.js
// app/components/Banner.js
const Section2 = () => {
    return (
        <div className="max-w-full mx-auto relative items-center justify-centerbg-back bg-cover" style={{ backgroundImage: "url('/images/9.jpg')" }}>
            <h1 className="text-4xl font-bold text-center pt-5 text-white"> QUY TRÌNH THỰC HIỆN TRỌN GÓI</h1>
            <h2 className="text-2xl font-bold text-center text-yellow-200">DỊCH VỤ THÀNH LẬP CÔNG TY ĐÀ NẴNG</h2>
            <h2 className="text-2xl font-bold text-center text-yellow-200 underline ">MỚI NHẤT 2024</h2>

            <div className="max-w-7xl mx-auto py-6">
                <ol
                    className="flex md:flex-row bg-white flex-col divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500"
                >
                    <li className="flex items-center gap-2 p-4 flex-1 min-h-[150px]"> {/* Đặt chiều cao tối thiểu */}
                        <p className="leading-none">
                            <strong className="block text-blue-800 font-bold text-xl"> Bước 1: </strong>
                            <small className="mt-1 text-lg md:text-sm"> Tư vấn các vướng mắc khi thành lập doanh nghiệp. </small>
                        </p>
                    </li>
                    <li className="relative flex items-center gap-2 bg-gray-50 p-4 flex-1 min-h-[150px]">
                        <span
                            className="absolute -left-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50"
                        >
                        </span>

                        <span
                            className="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white"
                        >
                        </span>

                        <p className="leading-none">
                            <strong className="block text-blue-800 font-bold text-xl"> Bước 2: </strong>
                            <small className="mt-1 text-lg md:text-sm"> Soạn thảo và hoàn thiện toàn bộ các hồ sơ, văn bản về thủ tục pháp lý </small>
                        </p>
                    </li>
                    <li className="flex items-center gap-2 p-4 flex-1 min-h-[150px]">
                        <p className="leading-none">
                            <strong className="block text-blue-800 font-bold text-xl"> Bước 3: </strong>
                            <small className="mt-1 text-lg md:text-sm"> Gửi hồ sơ cho khách hàng ký. </small>
                        </p>
                    </li>
                    <li className="flex items-center gap-2 p-4 flex-1 min-h-[150px] bg-gray-50">
                        <p className="leading-none">
                            <strong className="block text-blue-800 font-bold text-xl"> Bước 4: </strong>
                            <small className="mt-1 text-lg md:text-sm"> Thay mặt khách hàng đi lại thực hiện các thủ tục đăng ký kinh doanh theo quy định. </small>
                        </p>
                    </li>
                    <li className="relative flex items-center gap-2 p-4 flex-1 min-h-[150px]">
                        <span
                            className="absolute -left-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50"
                        >
                        </span>

                        <span
                            className="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white"
                        >
                        </span>

                        <p className="leading-none">
                            <strong className="block text-blue-800 font-bold text-xl"> Bước 5: </strong>
                            <small className="mt-1 text-lg md:text-sm"> Bàn giao bản chính giấy phép và con dấu pháp nhân, dấu chức danh </small>
                        </p>
                    </li>
                    <li className="flex items-center gap-2 p-4 flex-1 min-h-[150px] bg-gray-50">
                        <p className="leading-none">
                            <strong className="block text-blue-800 font-bold text-xl"> Bước 6: </strong>
                            <small className="mt-1 text-lg md:text-sm"> Hoàn thiện các thủ tục về thuế ban đầu, tư vấn Kế toán thuế HẬU thành lập doanh nghiệp. </small>
                        </p>
                    </li>
                    <li className="flex items-center gap-2 p-4 flex-1 min-h-[150px]">
                        <p className="leading-none">
                            <strong className="block text-blue-800 font-bold text-xl"> Bước 7: </strong>
                            <small className="mt-1 text-lg md:text-sm"> Lưu trữ hồ sơ phục vụ hậu kiểm, hỗ trợ khách. </small>
                        </p>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Section2;

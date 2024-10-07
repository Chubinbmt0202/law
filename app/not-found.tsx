
const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold">404 - Chưa có trang này</h1>
            <p className="mt-4">Xin lỗi, trang bạn tìm kiếm không tồn tại.</p>
            <a href="/" className="mt-6 text-blue-500 hover:underline">
                Quay về trang chủ
            </a>
        </div>
    );
};

export default NotFound;
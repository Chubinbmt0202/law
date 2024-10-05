import Contact from '@/app/components/contact';
import React from 'react';

export default function Batdongsan() {


    return (
        <div className="relative w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-6">Bất động sản</h1>
            </div>
            <div className='max-w-7xl mx-auto mb-10'>
                <div className="mb-8">
                    <p className="mb-4">
                        Thị trường bất động sản Việt Nam với sự tăng trưởng ổn định là điểm đầu tư hấp dẫn của các nhà đầu tư trong và ngoài nước. Ngày càng có nhiều nhà đầu tư bất động sản mới xuất hiện và sự cạnh tranh giữa họ trong thị trường bất động sản trở nên gay gắt hơn bao giờ hết. Tuy nhiên, hiện tại hành lang pháp lý trong lĩnh vực kinh doanh bất động sản tại Việt Nam vẫn chưa được hoàn thiện. Điều này dẫn đến việc các nhà đầu tư phải đối mặt với rất nhiều những rủi ro pháp lý trong việc đầu tư, kinh doanh và quản lý bất động sản của mình. Do đó, để đảm bảo an toàn cho hoạt động đầu tư và kinh doanh loại tài sản này thì nhà đầu tư cần phải có một đội ngũ cố vấn pháp lý nắm rõ và hiểu được các quy định pháp luật về bất động sản và các hoạt động kinh doanh trong lĩnh vực này.
                    </p>
                    <p className="mb-4">
                        Trải qua nhiều năm hoạt động, Apolat Legal luôn tự tin là một trong những công ty tư vấn luật nổi bật trong lĩnh vực bất động sản. Chúng tôi đã hỗ trợ tư vấn pháp lý cho nhiều nhà đầu tư, tổ chức và cá nhân khác nhau trong việc triển khai, xây dựng, phát triển và kinh doanh tài sản bất động sản của họ.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Các loại dịch vụ mà chúng tôi cung cấp cho khách hàng, bao gồm:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Đàm phán, tư vấn và soạn thảo các hợp đồng liên quan đến giao dịch bất động sản;</li>
                        <li>Tư vấn các thủ tục xin cấp giấy chứng nhận quyền sở hữu, sử dụng đối với bất động sản;</li>
                        <li>Tư vấn thành lập doanh nghiệp Việt Nam hoặc doanh nghiệp có vốn đầu tư nước ngoài kinh doanh bất động sản tại Việt Nam;</li>
                        <li>Tư vấn các giao dịch mua bán, tặng cho, chuyển nhượng, cho thuê, thế chấp,...đối với tài sản bất động sản;</li>
                        <li>Các dịch vụ về bất động sản khác theo yêu cầu của khách hàng.</li>
                    </ul>
                </div>
            </div>
            <Contact />
        </div>
    );
}

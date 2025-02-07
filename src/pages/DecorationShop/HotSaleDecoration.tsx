import OrangeButton from "../../components/common/OrangeButton";
const HostSaleDecoration = () => {
    return (
        <div className="">
            <div className="p-6 mb-10 text-black text-xl font-bold">Top Sản phẩm nổi bật</div>
            <div className="flex" >
                <div className="w-1/2"></div>
                <div className="flex flex-col">
                    <div className="w-80">
                        <div className="text-black text-xl" style={{ marginBottom: '28px' }}>
                            Công cụ quảng bá sản phẩm mới giúp sản phẩm hiển thị nổi bật trên các trang Chi tiết sản phẩm
                        </div>
                        <div className="text-black text-sm" style={{ marginBottom: '28px' }}>
                            Sản phẩm được lựa chọn dựa trên đề xuất của hệ thống nhằm tối ưu hiệu quả bán hàng và tăng doanh số cho Shop
                        </div>
                    </div>
                    <div className="w-80">
                        <div className="text-black text-sm" style={{ marginBottom: '16px' }}>
                            Shop cũng có thể tự lựa chọn những sản phẩm phù hợp theo mong muốn để quảng bá
                        </div>
                    </div>

                    <div className="sub-actions">
                        <div className="sub-btn">
                            <OrangeButton label="Tự chọn sản phẩm" />
                        </div>
                    </div>
                    <div className="text-sm w-80">
                        <a
                            className="eds-button eds-button--link eds-button--normal "
                            href="https://banhang.shopee.vn/edu/courseDetail/103?lessonId=449"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>Tìm hiểu thêm về Top sản phẩm nổi bật</span>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default HostSaleDecoration;
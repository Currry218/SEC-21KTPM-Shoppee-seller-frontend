import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AllOrderManagement from "./AllOrderManagement";
import Confirmation from "./Confirmation";
import Delivered from "./Delivered";
import Goods from "./Goods";
import InProgress from "./InProgress";

const All = () => {
    const { type: currentType = "" } = useParams<{ type: string }>(); 
    const navigate = useNavigate();

    const [inkBarStyle, setInkBarStyle] = useState({ width: 0, left: 0 }); // Vị trí và kích thước ink bar
    const typeRefs = useRef<HTMLButtonElement[]>([]); // Tham chiếu đến các tab
    const [placeholder, setPlaceholder] = useState("Nhập Mã đơn hàng"); // Placeholder state

    const types = [
        { key: "", label: "Tất cả" },
        { key: "unpaid", label: "Chờ xác nhận" },
        { key: "toship", label: "Chờ lấy hàng" },
        { key: "shipping", label: "Đang giao" },
        { key: "completed", label: "Đã giao" },
        { key: "Deleted", label: "Trả hàng/Hoàn tiền/Hủy" },

    ];

    const placeholders: { [key: string]: string } = {
        orderId: "Nhập Mã đơn hàng",
        buyerName: "Nhập Tên người mua",
        product: "Nhập Sản phẩm",
        trackingNumber: "Nhập Mã vận đơn",
        returnRequestId: "Nhập Mã yêu cầu trả hàng",
        returnTrackingNumber: "Nhập Mã vận đơn cho yêu cầu trả hàng",
    };

    useEffect(() => {
        const activeType = typeRefs.current.find(
            (type) => type.getAttribute("data-key") === currentType
        );

        if (activeType) {
            const { offsetWidth, offsetLeft } = activeType;
            setInkBarStyle({ width: offsetWidth, left: offsetLeft });
        }
    }, [currentType]);

    const handleTypeChange = (type: string) => {
        navigate(`/portal/sale/order/${type}`); 
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setPlaceholder(placeholders[selectedValue]);
    };

    return (
        <div className="p-2 pt-4">
            {/* Hàng trên cùng với chữ Tất cả và các nút */}
            <div className="relative mb-4 flex items-center justify-between">
                <span className="px-3 py-2 text-2xl text-black">Tất cả</span>
                <div className="px-4 py-2 flex space-x-4">
                    <button
                        type="button"
                        className="text-sm text-black bg-gray-100 px-4 py-2 border border-gray-300 hover:bg-gray-200 transition"
                        style={{
                            outline: "none", // Loại bỏ viền đen khi chọn
                            border: "0.5px solid rgba(0, 0, 0, 0.2)", // Viền nhạt hơn với độ trong suốt
                        }}
                    >
                        Xuất
                    </button>
                    <button
                        type="button"
                        className="text-sm text-black bg-gray-100 px-4 py-2 border border-gray-300 hover:bg-gray-200 transition"
                        style={{
                            outline: "none", // Loại bỏ viền đen khi chọn
                            border: "0.5px solid rgba(0, 0, 0, 0.2)", // Viền nhạt hơn với độ trong suốt
                        }}
                    >
                        Lịch sử Xuất báo cáo
                    </button>
                </div>
            </div>

            {/* Tabs với nút ở bên phải */}
            <div className="relative mb-4 flex items-center justify-between">
                {/* Tabs */}
                <div className="flex">
                    {types.map((type, index) => (
                        <button
                            key={type.key}
                            ref={(el) => (typeRefs.current[index] = el!)} // Lưu tham chiếu vào mảng
                            data-key={type.key}
                            onClick={() => handleTypeChange(type.key)}
                            className={`px-4 py-2 relative bg-gray-100 ${currentType === type.key
                                    ? "font-bold text-orange-500"
                                    : "text-gray-600 hover:text-orange-500"
                                }`}
                            style={{
                                outline: "none", // Loại bỏ viền đen khi chọn
                                border: "none", // Loại bỏ viền mặc định
                            }}
                        >
                            {type.label}
                        </button>
                    ))}
                </div>
                {/* Ink Bar */}
                <div
                    className="absolute bottom-0 h-[3px] bg-orange-500 transition-all duration-300"
                    style={{
                        width: `${inkBarStyle.width - 20}px`,
                        left: `${inkBarStyle.left + 10}px`,
                    }}
                />
            </div>

            {/* Dropdown và ô nhập text */}
            <div className="m-3 bg-white p-4 rounded shadow flex items-center space-x-4">
    <select
        className="border border-gray-100 px-4 py-2 bg-white text-black"
        onChange={handleSelectChange}
    >
        <option value="orderId">Mã đơn hàng</option>
        <option value="buyerName">Tên người mua</option>
        <option value="product">Sản phẩm</option>
        <option value="trackingNumber">Mã vận đơn</option>
        <option value="returnRequestId">Mã yêu cầu trả hàng</option>
        <option value="returnTrackingNumber">Mã vận đơn cho yêu cầu trả hàng</option>
    </select>
    <input
        type="text"
        className="border border-gray-100 px-4 py-2 bg-white text-black"
        placeholder={placeholder}
    />
    <div className="flex items-center space-x-4">
        <label className="text-gray-700 text-sm font-medium">
            Đơn vị vận chuyển
        </label>
        <select
            className="border border-gray-300 px-4 py-2 bg-white text-black focus:border-black w-64"
        >
            <option value="" disabled>
                Vui lòng chọn
            </option>
            <option value="all">Tất cả ĐVVC</option>
            <option value="bulky">Hàng Cồng Kềnh</option>
            <option value="express">Hỏa Tốc</option>
            <option value="fast">Nhanh</option>
            <option value="economy">Tiết kiệm</option>
            <option value="others">Others</option>
        </select>
    </div>
    <button
        type="button"
        className="text-sm text-white bg-blue-500 px-4 py-2 border border-blue-500 hover:bg-blue-600 transition"
    >
        Áp dụng
    </button>
    <button
        type="button"
        className="text-sm text-black bg-gray-100 px-4 py-2 border border-gray-300 hover:bg-gray-200 transition"
    >
        Đặt lại
    </button>
</div>

            {/* Nội dung tab */}
            <div className="m-3 bg-white p-4 rounded shadow">
                {currentType === "" && <AllOrderManagement />}
                {currentType === "unpaid" && <Confirmation />}
                {currentType === "toship" && <Goods />}
                {currentType === "shipping" && <InProgress />}
                {currentType === "completed" && <Delivered />}
            </div>
        </div>
    );
};

export default All;
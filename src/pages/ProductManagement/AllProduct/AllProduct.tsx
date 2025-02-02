import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import OrangeButton from "../../../components/common/OrangeButton";
import { Search, Edit2 } from "lucide-react";

// import AllOrderManagement from "./AllOrderManagement";
// import Confirmation from "./Confirmation";
// import Delivered from "./Delivered";
// import Goods from "./Goods";
// import InProgress from "./InProgress";

const AllProduct = () => {
    const { type: currentType = "" } = useParams<{ type: string }>();
    const navigate = useNavigate();

    const [inkBarStyle, setInkBarStyle] = useState({ width: 0, left: 0 }); // Vị trí và kích thước ink bar
    const typeRefs = useRef<HTMLButtonElement[]>([]); // Tham chiếu đến các tab

    const types = [
        { key: "all", label: "Tất cả" },
        { key: "live", label: "Đang hoạt động(0)" },
        { key: "banned", label: "Vi phạm(0)" },
        { key: "reviewing", label: "Chờ duyệt bởi Shopee(0)" },
        { key: "unpublished", label: "Chưa được đăng(0)" },
    ];

    useEffect(() => {
        console.log("Current Type:", currentType); // Debugging log

        const activeType = typeRefs.current.find(
            (type) => type.getAttribute("data-key") === currentType
        );

        if (activeType) {
            const { offsetWidth, offsetLeft } = activeType;
            setInkBarStyle({ width: offsetWidth, left: offsetLeft });
        }
    }, [currentType]);

    const handleTypeChange = (type: string) => {
        navigate(`/portal/product/list/${type}`);
    };

    return (
        <div className="p-2 pt-4">
            {/* Hàng trên cùng với chữ Tất cả và các nút */}
            <div className="relative mb-4 flex items-center justify-between">
                <span className="px-3 py-2 text-2xl text-black">Sản phẩm</span>
                <div className="px-4 py-2 flex space-x-4">
                    <select
                        defaultValue="default"
                        className="text-sm text-black bg-gray-100 px-4 py-2 border border-gray-300 hover:bg-gray-200 transition"
                        style={{
                            outline: "none", // Loại bỏ viền đen khi chọn
                            border: "0.5px solid rgba(0, 0, 0, 0.2)", // Viền nhạt hơn với độ trong suốt
                        }}
                    >
                        <option value="default" disabled>Cài đặt sản phẩm</option>
                        <option value="brandManagement">Quản lý thương hiệu</option>
                        <option value="sizeChartManagement">Quản lý Bảng quy đổi kích cỡ</option>
                    </select>
                    <select
                        defaultValue="default"
                        className="text-sm text-black bg-gray-100 px-4 py-2 border border-gray-300 hover:bg-gray-200 transition"
                        style={{
                            outline: "none",
                            border: "0.5px solid rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        <option value="default" disabled>Công cụ xử lí hàng loạt</option>
                        <option value="bulkUpload">Đăng Hàng Loạt</option>
                        <option value="bulkUpdate">Cập Nhật Hàng Loạt</option>
                        <option value="updateAttributes">Cập Nhật Thuộc Tính</option>
                    </select>

                    <OrangeButton
                        className="eds-button--normal"
                        label={
                            <>
                                <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 mr-2">
                                    <path d="M17.5 2.5h-3v12h-12v3h12v12h3v-12h12v-3h-12v-12z"></path>
                                </svg>
                                <span>Thêm một sản phẩm mới</span>
                            </>
                        }
                    />

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
                        width: `${inkBarStyle.width}px`,
                        left: `${inkBarStyle.left}px`,
                    }}
                />
            </div>

            <div className="flex gap-4 w-full max-w-5xl">
                {/* Product Search Input */}
                <div className="flex-1">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Tìm Tên sản phẩm, SKU sản phẩm, SKU phân loại, Mã sản phẩm"
                            className="w-full px-4 py-2 border border-gray-400 text-black bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                            <Search size={16} />
                        </div>
                    </div>
                </div>

                {/* Category Search */}
                <div className="w-80">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Tìm kiếm theo ngành hàng"
                            className="w-full px-4 py-2 border border-gray-400 text-black bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                            <Edit2 size={16} />
                        </div>
                    </div>
                </div>

                {/* Product Type Dropdown */}
                <div className="w-60">
                    <div className="relative">
                        <select
                            className="w-full px-4 py-2 border border-gray-400 text-black bg-white rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-gray-500"
                        >
                            <option value="">Loại Sản phẩm</option>
                            <option value="1">Chọn</option>
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* Nội dung tab */}
            {/* <div className="m-3 bg-white p-4 rounded shadow">
                {currentType === "" && <AllOrderManagement />}
                {currentType === "unpaid" && <Confirmation />}
                {currentType === "toship" && <Goods />}
                {currentType === "shipping" && <InProgress />}
                {currentType === "completed" && <Delivered />}
            </div> */}
        </div>
    );
};

export default AllProduct;
import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HomepageDecoration from "./HomepageDecoration";
import CategoryDecoration from "./CategoryDecoration";
import HostSaleDecoration from "./HotSaleDecoration";
import { Link } from "react-router-dom";

const DecorationShop = () => {
    const { tab: currentTab = "homepage" } = useParams<{ tab: string }>(); // Lấy giá trị `tab` từ URL
    const navigate = useNavigate();

    const [inkBarStyle, setInkBarStyle] = useState({ width: 0, left: 0 }); // Vị trí và kích thước ink bar
    const tabRefs = useRef<HTMLButtonElement[]>([]); // Tham chiếu đến các tab

    // Danh sách các tab
    const tabs = [
        { key: "homepage", label: "Trang chủ" },
        { key: "category", label: "Trang danh mục" },
        { key: "hotSale", label: "Top Sản phẩm nổi bật" },
    ];

    // Cập nhật vị trí và kích thước của ink bar
    useEffect(() => {
        const activeTab = tabRefs.current.find(
            (tab) => tab.getAttribute("data-key") === currentTab
        );

        if (activeTab) {
            const { offsetWidth, offsetLeft } = activeTab;
            setInkBarStyle({ width: offsetWidth, left: offsetLeft });
        }
    }, [currentTab]);

    // Hàm xử lý chuyển tab
    const handleTabChange = (tab: string) => {
        navigate(`/portal/decoration/${tab}`); // Chuyển đổi URL
    };

    return (
        <div className="p-2 pt-4">
            {/* Tabs với nút ở bên phải */}
            <div className="relative mb-4 flex items-center justify-between">
                {/* Tabs */}
                <div className="flex">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.key}
                            ref={(el) => (tabRefs.current[index] = el!)} // Lưu tham chiếu vào mảng
                            data-key={tab.key}
                            onClick={() => handleTabChange(tab.key)}
                            className={`px-4 py-2 relative bg-gray-100 ${currentTab === tab.key
                                ? "font-bold text-orange-500"
                                : "text-black font-normal hover:text-orange-500"
                                }`}
                            style={{
                                outline: "none", // Loại bỏ viền đen khi chọn
                                border: "none", // Loại bỏ viền mặc định
                            }}
                        >
                            {tab.label}
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

                {/* Nút bên phải */}
                <div className="flex space-x-4">
                    <Link
                        to="/portal/decoration/mediastore"
                        type="button"
                        className="group text-sm text-blue-500 bg-gray-100 px-4 py-2 flex items-center transition"
                        style={{
                            outline: "none", // Loại bỏ viền đen khi chọn
                            border: "none", // Loại bỏ viền mặc định
                        }}
                    >
                        <i className="eds-icon mr-1"> 
                            <svg
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 fill-blue-500 group-hover:fill-blue-800 transition-colors"
                            >
                                <path d="M14.25 3.25H6.686l-.787-1.472a1 1 0 0 0-.883-.528H1.75c-.552 0-1 .448-1 1v11.5c0 .552.448 1 1 1h12.5c.552 0 1-.448 1-1v-9.5c0-.551-.448-1-1-1Zm-12.5-1h3.266l1.07 2h8.164v1.531l-.019-.002H1.77l-.02.002V2.25Zm0 11.5v-1.5l.02-5.471 12.48.019v5.452h.001v1.5H1.75Z"></path>
                            </svg>
                        </i>
                        <span className="group-hover:text-blue-800 transition-colors">
                            Kho Hình Ảnh/Video
                        </span>
                    </Link>
                </div>
            </div>



            {/* Nội dung tab */}
            <div className="m-3 bg-white p-4 rounded shadow">
                {currentTab === "homepage" && <HomepageDecoration />}
                {currentTab === "category" && <CategoryDecoration />}
                {currentTab === "hotSale" && <HostSaleDecoration />}
            </div>
        </div>
    );
};

export default DecorationShop;

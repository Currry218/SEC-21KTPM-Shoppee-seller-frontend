import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import OrangeButton from "../../../components/common/OrangeButton";
import { Search, Edit2 } from "lucide-react";

import All from "./All";
import AllActived from "./AllActived";
import Restock from "./Restock";
import Reviewing from "./Reviewing";
import Need_optimized from "./Need_optimized";
import Banned from "./Banned";
import Deboosted from "./Deboosted";
import Deleted from "./Deleted";
import Unlisted from "./Unlisted";
import Draft from "./Draft";


const AllProduct = () => {
    const { type: currentType = "live" } = useParams<{ type: string }>();
    const { param: currentParam = "all" } = useParams<{ param: string }>();


    const navigate = useNavigate();

    const [inkBarStyle, setInkBarStyle] = useState({ width: 0, left: 0 }); // Vị trí và kích thước ink bar
    const [inkBarStyleC, setInkBarStyleC] = useState({ width: 0, left: 0 }); // Vị trí và kích thước ink bar
    const [inkBarStyleB, setInkBarStyleB] = useState({ width: 0, left: 0 }); // Vị trí và kích thước ink bar
    const [inkBarStyleP, setInkBarStyleP] = useState({ width: 0, left: 0 }); // Vị trí và kích thước ink bar

    const [selectedType, setSelectedType] = useState("");
    const [selectedContent, setSelectedContent] = useState("");
    const [selectedIssue, setSelectedIssue] = useState("");



    const typeRefs = useRef<HTMLButtonElement[]>([]); // Tham chiếu đến các tab type
    const contentRefs = useRef<HTMLButtonElement[]>([]); // Tham chiếu đến các tab content
    const banRefs = useRef<HTMLButtonElement[]>([]); // Tham chiếu đến các tab ban
    const postRefs = useRef<HTMLButtonElement[]>([]); // Tham chiếu đến các tab post



    const types = [
        { key: "all", label: "Tất cả" },
        { key: "live", label: "Đang hoạt động(0)" },
        { key: "violation", label: "Vi phạm(0)" },
        { key: "reviewing", label: "Chờ duyệt bởi Shopee(0)" },
        { key: "unpublished", label: "Chưa được đăng(0)" },
    ];

    const contents = [
        { key: "all", label: "Tất cả" },
        { key: "restock", label: "Cần bổ sung hàng (0)" },
        { key: "need_optimized", label: "Cần Cải Thiện Nội Dung (0)" },
    ];

    const bans = [
        { key: "banned", label: "Đã tạm khóa (0)" },
        { key: "deboosted", label: "Hạn chế hiển thị (0)" },
        { key: "deleted", label: "Đã xóa bởi Shopee (0)" },
    ];

    const posts = [
        { key: "unlisted", label: "Đã ẩn (0)" },
        { key: "draft", label: "Bản nháp (0)" },
    ];

    useEffect(() => {
        const activeType = typeRefs.current.find(
            (type) => type?.getAttribute("data-key") === currentType
        );

        if (activeType) {
            const { offsetWidth, offsetLeft } = activeType;
            setInkBarStyle({ width: offsetWidth, left: offsetLeft });
        }

        const activeContent = contentRefs.current.find(
            (content) => content?.getAttribute("data-key") === currentParam
        );

        if (activeContent) {
            const { offsetWidth, offsetLeft } = activeContent;
            setInkBarStyleC({ width: offsetWidth, left: offsetLeft });
        }

        const activeBan = banRefs.current.find(
            (ban) => ban?.getAttribute("data-key") === currentParam
        );

        if (activeBan) {
            const { offsetWidth, offsetLeft } = activeBan;
            setInkBarStyleB({ width: offsetWidth, left: offsetLeft });
        }

        const activePost = postRefs.current.find(
            (post) => post?.getAttribute("data-key") === currentParam
        );

        if (activePost) {
            const { offsetWidth, offsetLeft } = activePost;
            setInkBarStyleP({ width: offsetWidth, left: offsetLeft });
        }
    }, [currentType, currentParam]);

    const handleTypeChange = (type: string) => {
        navigate(`/portal/product/list/${type}`);
    };

    const handleParamChange = (type: string, param: string) => {
        navigate(`/portal/product/list/${type}/${param}`);
    };

    const handleClick = () => {
        navigate('/portal/product/new');
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
                        className="eds-button--normal" onClick={handleClick}
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

            {/* Tabs button */}
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

            <div className="m-3 bg-white p-4 rounded shadow">

                {currentType === "live" && (
                    <>
                        {/* Tabs button */}
                        <div className="relative mb-4 flex items-center justify-between">
                            {/* Tabs */}
                            <div className="flex border border-gray-300 rounded">
                                {contents.map((content, index) => (
                                    <button
                                        key={content.key}
                                        ref={(el) => (contentRefs.current[index] = el!)} // Lưu tham chiếu vào mảng
                                        data-key={content.key}
                                        onClick={() => handleParamChange(currentType, content.key)}
                                        className={`px-4 py-2 relative bg-gray-100 ${currentParam === content.key
                                            ? "font-bold text-orange-500"
                                            : "text-gray-600 hover:text-orange-500"
                                            }`}
                                        style={{
                                            outline: "none", // Loại bỏ viền đen khi chọn
                                            border: "none", // Loại bỏ viền mặc định
                                            borderRadius: "0", // Loại bỏ bo tròn góc
                                        }}
                                    >
                                        {content.label}
                                    </button>
                                ))}
                            </div>
                            {/* Ink Bar */}
                            <div
                                className="absolute bottom-0 h-[3px] bg-orange-500 transition-all duration-300"
                                style={{
                                    width: `${inkBarStyleC.width}px`,
                                    left: `${inkBarStyleC.left}px`,
                                }}
                            />
                        </div>
                    </>
                )}

                {currentType === "violation" && (
                    <>
                        {/* Tabs button */}
                        <div className="relative mb-4 flex items-center justify-between">
                            {/* Tabs */}
                            <div className="flex border border-gray-300 rounded">
                                {bans.map((ban, index) => (
                                    <button
                                        key={ban.key}
                                        ref={(el) => (banRefs.current[index] = el!)} // Lưu tham chiếu vào mảng
                                        data-key={ban.key}
                                        onClick={() => handleParamChange(currentType, ban.key)}
                                        className={`px-4 py-2 relative bg-gray-100 ${currentParam === ban.key
                                            ? "font-bold text-orange-500"
                                            : "text-gray-600 hover:text-orange-500"
                                            }`}
                                        style={{
                                            outline: "none", // Loại bỏ viền đen khi chọn
                                            border: "none", // Loại bỏ viền mặc định
                                            borderRadius: "0", // Loại bỏ bo tròn góc
                                        }}
                                    >
                                        {ban.label}
                                    </button>
                                ))}
                            </div>
                            {/* Ink Bar */}
                            <div
                                className="absolute bottom-0 h-[3px] bg-orange-500 transition-all duration-300"
                                style={{
                                    width: `${inkBarStyleB.width}px`,
                                    left: `${inkBarStyleB.left}px`,
                                }}
                            />
                            {/* Lịch sử vi phạm */}
                            <span className="text-blue-500 ml-4">Lịch sử vi phạm</span>
                        </div>
                    </>
                )}

                {currentType === "unpublished" && (
                    <>
                        {/* Tabs button */}
                        <div className="relative mb-4 flex items-center justify-between">
                            {/* Tabs */}
                            <div className="flex border border-gray-300 rounded">
                                {posts.map((post, index) => (
                                    <button
                                        key={post.key}
                                        ref={(el) => (postRefs.current[index] = el!)} // Lưu tham chiếu vào mảng
                                        data-key={post.key}
                                        onClick={() => handleParamChange(currentType, post.key)}
                                        className={`px-4 py-2 relative bg-gray-100 ${currentParam === post.key
                                            ? "font-bold text-orange-500"
                                            : "text-gray-600 hover:text-orange-500"
                                            }`}
                                        style={{
                                            outline: "none", // Loại bỏ viền đen khi chọn
                                            border: "none", // Loại bỏ viền mặc định
                                            borderRadius: "0", // Loại bỏ bo tròn góc
                                        }}
                                    >
                                        {post.label}
                                    </button>
                                ))}
                            </div>
                            {/* Ink Bar */}
                            <div
                                className="absolute bottom-0 h-[3px] bg-orange-500 transition-all duration-300"
                                style={{
                                    width: `${inkBarStyleP.width}px`,
                                    left: `${inkBarStyleP.left}px`,
                                }}
                            />
                        </div>
                    </>
                )}

                {currentParam === "restock" && (
                    <>
                        {/* Lọc nhanh */}
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="text-gray-700 text-sm font-medium">Lọc nhanh</span>
                            <button
                                className={`px-3 py-1 border rounded bg-white ${selectedType === "not" ? "border-orange-500 text-orange-500" : "border-gray-300 text-black"
                                    }`}
                                onClick={() => setSelectedType("not")}
                            >
                                Hết hàng (0)
                            </button>
                            <button
                                className={`px-3 py-1 border rounded bg-white ${selectedType === "notyet" ? "border-orange-500 text-orange-500" : "border-gray-300 text-black"
                                    }`}
                                onClick={() => setSelectedType("notyet")}
                            >
                                Sắp hết hàng (0)
                            </button>
                        </div>
                    </>
                )}

                {currentParam === "need_optimized" && (
                    <>
                        {/* Chất Lượng Nội Dung */}
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="text-gray-700 text-sm font-medium">Chất Lượng Nội Dung</span>
                            <button
                                className={`px-3 py-1 border rounded bg-white ${selectedContent === "need" ? "border-orange-500 text-orange-500" : "border-gray-300 text-black"
                                    }`}
                                onClick={() => setSelectedContent("need")}
                            >
                                Cần Cải thiện (0)
                            </button>
                            <button
                                className={`px-3 py-1 border rounded bg-white ${selectedContent === "Qualified" ? "border-orange-500 text-orange-500" : "border-gray-300 text-black"
                                    }`}
                                onClick={() => setSelectedContent("Qualified")}
                            >
                                Đạt chuẩn (0)
                            </button>
                        </div>

                        {/* Vấn đề	*/}
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-gray-700 text-sm font-medium">Vấn đề	
                            </span>
                            <button
                                className={`px-3 py-1 border rounded bg-white ${selectedIssue === "fail" ? "border-orange-500 text-orange-500" : "border-gray-300 text-black"
                                    }`}
                                onClick={() => setSelectedIssue("fail")}
                            >
                                Sai Thông tin sản phẩm (0)
                            </button>
                            <button
                                className={`px-3 py-1 border rounded bg-white ${selectedIssue === "picture" ? "border-orange-500 text-orange-500" : "border-gray-300 text-black"
                                    }`}
                                onClick={() => setSelectedIssue("picture")}
                            >
                                Hình ảnh (0)
                            </button> 
                            <button
                                className={`px-3 py-1 border rounded bg-white ${selectedIssue === "notFull" ? "border-orange-500 text-orange-500" : "border-gray-300 text-black"
                                    }`}
                                onClick={() => setSelectedIssue("notFull")}
                            >
                                Thiếu Thông tin quan trọng (0)
                            </button>
                            <button
                                className={`px-3 py-1 border rounded bg-white ${selectedIssue === "another" ? "border-orange-500 text-orange-500" : "border-gray-300 text-black"
                                    }`}
                                onClick={() => setSelectedIssue("another")}
                            >
                                Thông tin khác (0)
                            </button>
                        </div>
                    </>
                )}


                <div className="flex flex-col mb-4 gap-4 w-full max-w-7xl bg-white rounded shadow">
                    <div className="flex gap-4">
                        {/* Product Search Input */}
                        <div className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="    Tìm Tên sản phẩm, SKU sản phẩm, SKU phân loại, Mã sản phẩm"
                                    className="w-full px-5 py-2 border border-gray-400 text-black bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
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
                    </div>

                    {(currentParam === "all" || currentParam === "restock" || currentParam === "unlisted") && (
                        <div className="w-60">
                            <div className="relative">
                                <select
                                    className="w-full px-4 py-2 border border-gray-400 text-black bg-white rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-gray-500"
                                >
                                    <option value="default" disabled>Loại Sản phẩm</option>
                                    <option value="1">Sản phẩm Livestream</option>
                                </select>
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


                {/* Buttons */}
                <div className="flex gap-4 mt-4">
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
            </div>

            {/* Nội dung tab */}
            <div className="m-3 bg-white p-4 rounded shadow">
                {currentType === "all" && <All />}
                {currentType === "live" &&  currentParam === "all" && <AllActived />}
                {currentType === "live" &&  currentParam === "restock" && <Restock />}
                {currentType === "live" &&  currentParam === "need_optimized" && <Need_optimized />}
                {currentType === "violation" &&  currentParam === "banned" && <Banned />}
                {currentType === "violation" &&  currentParam === "deboosted" && <Deboosted />}
                {currentType === "violation" &&  currentParam === "deleted" && <Deleted />}
                {currentType === "reviewing" && <Reviewing />}
                {currentType === "unpublished" &&  currentParam === "unlisted" && <Unlisted />}
                {currentType === "unpublished" &&  currentParam === "draft" && <Draft />}
            </div>
        </div>
    );
};

export default AllProduct;
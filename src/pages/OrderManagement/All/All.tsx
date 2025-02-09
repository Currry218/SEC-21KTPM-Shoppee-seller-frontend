import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AllOrderManagement from "./AllOrderManagement";
import Confirmation from "./Confirmation";
import Delivered from "./Delivered";
import Goods from "./Goods";
import InProgress from "./InProgress";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const All = () => {
    const { type: currentType = "toship" } = useParams<{ type: string }>();
    const navigate = useNavigate();

    const [inkBarStyle, setInkBarStyle] = useState({ width: 0, left: 0 }); // Vị trí và kích thước ink bar
    const typeRefs = useRef<HTMLButtonElement[]>([]); // Tham chiếu đến các tab
    const [placeholder, setPlaceholder] = useState("Nhập Mã đơn hàng"); // Placeholder state
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [startDate, setStartDate] = useState<Date | null>(new Date("2025-01-02")); // Start date state
    const [endDate, setEndDate] = useState<Date | null>(new Date("2025-02-01")); // End date state
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false); // History modal state
    const [selectedType, setSelectedType] = useState("regular");
    const [selectedStatus, setSelectedStatus] = useState("pending");


    const types = [
        { key: "all", label: "Tất cả" },
        { key: "unpaid", label: "Chờ xác nhận" },
        { key: "toship", label: "Chờ lấy hàng" },
        { key: "shipping", label: "Đang giao" },
        { key: "completed", label: "Đã giao" },
        { key: "returnrefundcancel", label: "Trả hàng/Hoàn tiền/Hủy" },
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
        if (type === "returnrefundcancel") {
            navigate(`/portal/sale/ReturnRefundCancel`);
        } else {
            navigate(`/portal/sale/order/${type}`);
        }
    };
    

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setPlaceholder(placeholders[selectedValue]);
    };

    const handleExportClick = () => {
        setIsModalOpen(true);
    };


    const handleApplyClick = () => {
        // Handle the export logic here
        console.log("Exporting orders from", startDate, "to", endDate);
        setIsModalOpen(false);
    };

    const handleHistoryClick = () => {
        setIsHistoryModalOpen(true);
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
                        onClick={handleExportClick}
                    >
                        Xuất
                    </button>
                    <button
                        type="button"
                        className="text-sm text-black bg-gray-100 px-4 py-2 border border-gray-300 hover:bg-gray-200 transition"
                        style={{
                            outline: "none",
                            border: "0.5px solid rgba(0, 0, 0, 0.2)",
                        }}
                        onClick={handleHistoryClick}
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
            <div className="m-3 bg-white p-4 rounded shadow">
                {currentType === "toship" && (
                    <>
                        {/* Loại đơn hàng */}
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="text-gray-700 text-sm font-medium">Loại Đơn hàng</span>
                            <button
                                className={`px-3 py-1 border rounded bg-white ${selectedType === "regular" ? "border-orange-500 text-orange-500" : "border-gray-300 text-black"
                                    }`}
                                onClick={() => setSelectedType("regular")}
                            >
                                Regular Order (0)
                            </button>
                            <button
                                className={`px-3 py-1 border rounded bg-white ${selectedType === "instant" ? "border-orange-500 text-orange-500" : "border-gray-300 text-black"
                                    }`}
                                onClick={() => setSelectedType("instant")}
                            >
                                Instant (0)
                            </button>
                        </div>

                        {/* Trạng thái đơn hàng */}
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-gray-700 text-sm font-medium">Trạng thái đơn hàng</span>
                            <button
                                className={`px-3 py-1 border rounded bg-white ${selectedStatus === "all" ? "border-orange-500 text-orange-500" : "border-gray-300 text-black"
                                    }`}
                                onClick={() => setSelectedStatus("all")}
                            >
                                Tất cả
                            </button>
                            <button
                                className={`px-3 py-1 border rounded bg-white ${selectedStatus === "pending" ? "border-orange-500 text-orange-500" : "border-gray-300 text-black"
                                    }`}
                                onClick={() => setSelectedStatus("pending")}
                            >
                                Chưa xử lý
                            </button>
                            <button
                                className={`px-3 py-1 border rounded bg-white ${selectedStatus === "processed" ? "border-orange-500 text-orange-500" : "border-gray-300 text-black"
                                    }`}
                                onClick={() => setSelectedStatus("processed")}
                            >
                                Đã xử lý
                            </button>
                        </div>
                    </>
                )}

                <div className="bg-white p-4 rounded shadow flex items-center space-x-4">
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
                        <select className="border border-gray-300 px-4 py-2 bg-white text-black focus:border-black w-64">
                            <option value="" disabled>Vui lòng chọn</option>
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
            </div>


            {/* Nội dung tab */}
            <div className="m-3 bg-white p-4 rounded shadow">
                {currentType === "all" && <AllOrderManagement />}
                {currentType === "unpaid" && <Confirmation />}
                {currentType === "toship" && <Goods />}
                {currentType === "shipping" && <InProgress />}
                {currentType === "completed" && <Delivered />}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded shadow-lg w-3/4 max-w-3xl relative">
                        {/* Nút đóng modal */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-black text-lg font-bold bg-white rounded-full w-6 h-6 flex items-center justify-center hover:outline-none hover:box-shadow-none"
                        >
                            &times;
                        </button>

                        <h2 className="text-2xl mb-6 text-black">Xuất Tất cả Đơn hàng</h2>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Khoảng thời gian</label>
                            <div className="flex space-x-4">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date: Date | null) => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    dateFormat="yyyy/MM/dd"
                                    className="border border-black bg-white text-black px-4 py-2"
                                />
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date: Date | null) => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    dateFormat="yyyy/MM/dd"
                                    className="border border-black bg-white text-black px-4 py-2"
                                />
                            </div>
                        </div>

                        {/* Căn nút Áp dụng sang bên phải */}
                        <div className="flex justify-end">
                            <button
                                onClick={handleApplyClick}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Áp dụng
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isHistoryModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded shadow-lg w-3/4 max-w-3xl relative">
                        <button
                            onClick={() => setIsHistoryModalOpen(false)}
                            className="absolute top-4 right-4 text-black text-lg font-bold bg-white rounded-full w-6 h-6 flex items-center justify-center hover:outline-none hover:box-shadow-none"
                        >
                            &times;
                        </button>

                        <h2 className="text-2xl mb-6 text-black">Báo cáo gần nhất</h2>

                        <div className="mb-6">
                            <p className="text-red-500 text-sm mb-2 bg-yellow-300 p-2 rounded">
                                Đây là những báo cáo mà bạn chưa tải về. Báo cáo có thể được xuất trong phạm vi tối đa 31 ngày
                            </p>
                            <div className="flex justify-between mb-2">
                                <p className="text-gray-700 text-sm">Tên báo cáo</p>
                                <p className="text-gray-700 text-sm">Sửa thông tin</p>
                            </div>
                            <div className="flex flex-col items-center justify-center mt-6 text-gray-500">
                                <svg
                                    viewBox="0 0 97 96"
                                    className="w-20 h-20 text-gray-300"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <ellipse cx="47.5" cy="87" rx="45" ry="6" fill="#F2F2F2"></ellipse>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M79.5 55.5384V84.1647C79.5 85.1783 78.6453 86 77.5909 86H18.4091C17.3547 86 16.5 85.1783 16.5 84.1647V9.83529C16.5 8.82169 17.3547 8 18.4091 8H77.5909C78.6453 8 79.5 8.82169 79.5 9.83529V43.6505V55.5384Z"
                                        fill="white"
                                        stroke="#D8D8D8"
                                    ></path>
                                </svg>
                                <p className="text-center text-sm text-gray-500 mt-2">
                                    Bạn đã tải hết tất cả báo cáo hiện có.
                                </p>
                                <p className="mt-4 font-medium text-gray-700">Xem báo cáo</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={() => setIsHistoryModalOpen(false)}
                                className="bg-white text-black px-4 py-2 rounded flex items-center border border-black"
                            >
                                {/* SVG Icon */}
                                <svg
                                    width="16px"
                                    height="16px"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    className="mr-2"
                                >
                                    <g id="reports" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Group" transform="translate(2.015625, -0.984375)" fill="#000000">
                                            <path
                                                d="M12.921875,2.6109375 C12.8453125,2.43125 12.71875,2.278125 12.559375,2.171875 C12.4796875,2.11875 12.390625,2.075 12.296875,2.0453125 C12.203125,2.015625 12.1015625,2 12,2 L1,2 C0.8640625,2 0.73125,2.028125 0.6109375,2.078125 C0.43125,2.1546875 0.278125,2.28125 0.171875,2.440625 C0.11875,2.5203125 0.075,2.609375 0.0453125,2.703125 C0.015625,2.796875 0,2.8984375 0,3 L0,15 C0,15.1359375 0.028125,15.26875 0.078125,15.3890625 C0.1546875,15.56875 0.28125,15.721875 0.440625,15.828125 C0.5203125,15.88125 0.609375,15.925 0.703125,15.9546875 C0.796875,15.984375 0.8984375,16 1,16 L12,16 C12.1359375,16 12.26875,15.971875 12.3890625,15.921875 C12.56875,15.8453125 12.721875,15.71875 12.828125,15.559375 C12.88125,15.4796875 12.925,15.390625 12.9546875,15.296875 C12.984375,15.203125 13,15.1015625 13,15 L13,3 C13,2.8640625 12.971875,2.73125 12.921875,2.6109375 Z M4,3 L4,2 L9,2 L9,3 L12,3 L12,15 L1,15 L1,3 L4,3 Z"
                                                id="Shape"
                                                fillRule="nonzero"
                                            ></path>
                                            <path
                                                d="M4.7265625,0.984375 L8.2421875,0.984375 C9.20437109,0.984375 9.984375,1.76437891 9.984375,2.7265625 C9.984375,3.68874609 9.20437109,4.46875 8.2421875,4.46875 L4.7265625,4.46875 C3.76437891,4.46875 2.984375,3.68874609 2.984375,2.7265625 C2.984375,1.76437891 3.76437891,0.984375 4.7265625,0.984375 Z M4.7265625,1.984375 C4.31666366,1.984375 3.984375,2.31666366 3.984375,2.7265625 C3.984375,3.13646134 4.31666366,3.46875 4.7265625,3.46875 L8.2421875,3.46875 C8.65208634,3.46875 8.984375,3.13646134 8.984375,2.7265625 C8.984375,2.31666366 8.65208634,1.984375 8.2421875,1.984375 L4.7265625,1.984375 Z"
                                                id="Combined-Shape"
                                            ></path>
                                            <path
                                                d="M3.5,7 C3.2234375,7 3,6.7765625 3,6.5 C3,6.2234375 3.2234375,6 3.5,6 L9.5,6 C9.7765625,6 10,6.2234375 10,6.5 C10,6.7765625 9.7765625,7 9.5,7 L3.5,7 Z M3.5,10 C3.2234375,10 3,9.7765625 3,9.5 C3,9.2234375 3.2234375,9 3.5,9 L9.5,9 C9.7765625,9 10,9.2234375 10,9.5 C10,9.7765625 9.7765625,10 9.5,10 L3.5,10 Z M3.5,13 C3.2234375,13 3,12.7765625 3,12.5 C3,12.2234375 3.2234375,12 3.5,12 L8.234375,12 C8.5109375,12 8.734375,12.2234375 8.734375,12.5 C8.734375,12.7765625 8.5109375,13 8.234375,13 L3.5,13 Z"
                                                id="Combined-Shape"
                                                fillRule="nonzero"
                                            ></path>
                                        </g>
                                    </g>
                                </svg>


                                {/* Button Text */}
                                Báo Cáo Của Tôi
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
};

export default All;
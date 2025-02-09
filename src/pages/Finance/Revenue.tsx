import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../../components/custom-datepicker.css";
import Card from '../../components/common/Card';

const Revenue = () => {
    const [activeTab, setActiveTab] = useState<'unpaid' | 'paid'>('unpaid');
    const typeRefs = useRef<HTMLButtonElement[]>([]); // Tham chiếu đến các tab
    const [inkBarStyle, setInkBarStyle] = useState({ width: 0, left: 0 }); // Vị trí và kích thước ink bar

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const datePickerRef = useRef<HTMLDivElement>(null);

    const tabTypes = [
        { key: 'unpaid', label: 'Chưa thanh toán' },
        { key: 'paid', label: 'Đã thanh toán' },
    ];

    useEffect(() => {
        const activeType = typeRefs.current.find(
            (type) => type?.getAttribute("data-key") === activeTab
        );

        if (activeType) {
            const { offsetWidth, offsetLeft } = activeType;
            setInkBarStyle({ width: offsetWidth, left: offsetLeft });
        }
    }, [activeTab]);

    const handleDateChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        setShowDatePicker(false);
    };

    const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                datePickerRef.current &&
                !datePickerRef.current.contains(event.target as Node) &&
                showDatePicker
            ) {
                setShowDatePicker(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showDatePicker]);


    const formatDateRange = () => {
        if (startDate && endDate) {
            return `${startDate.toLocaleDateString("vi-VN")} - ${endDate.toLocaleDateString("vi-VN")}`;
        }
        return "Chọn khoảng thời gian";
    };

    return (
      
        <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Tổng Quan and Chi Tiết */}
            <div className="lg:col-span-2">
                {/* Tổng Quan */}
                <Card className="mb-4">
                    <h2 className="text-xl text-black font-bold mb-2">Tổng Quan</h2>
                    <div className="bg-blue-100 border border-blue-300 p-3 rounded-md mb-4">
                        <span className="text-blue-700 text-sm">
                            <span className="inline-block align-middle rounded-full bg-blue-300 w-2 h-2 mr-1" />
                            Các số dưới đây chưa bao gồm điều chỉnh. Vui lòng tải xuống Báo cáo
                            thu nhập để kiểm tra chi tiết các điều chỉnh liên quan.
                        </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                        <div className="text-center">
                            <h3 className="text-gray-500 text-sm">Chưa thanh toán</h3>
                            <span className="text-black font-bold text-lg">₫0</span>
                        </div>
                        <div className="text-center">
                            <h3 className="text-gray-500 text-sm">Đã thanh toán</h3>
                            <span className="text-black font-bold text-lg">₫0</span>
                        </div>
                        <div className="text-center">
                            <h3 className="text-gray-500 text-sm">Tuần này</h3>
                            <span className="text-black font-bold text-lg">₫0</span>
                        </div>
                        <div className="text-center">
                            <h3 className="text-gray-500 text-sm">Tháng này</h3>
                            <span className="text-black font-bold text-lg">₫0</span>
                        </div>
                        <div className="text-center">
                            <h3 className="text-gray-500 text-sm">Tổng cộng</h3>
                            <span className="text-black font-bold text-lg">₫0</span>
                        </div>
                    </div>
                    <Link
                        to="#"
                        className="text-blue-500 hover:underline text-sm"
                    >
                        Số dư TK Shopii {'>'}
                    </Link>
                </Card>

                {/* Chi Tiết */}
                <Card>
                    <h2 className="text-xl text-black font-bold mb-4">Chi Tiết</h2>
                    <div className="relative mb-4">
                        <div className="flex">
                            {tabTypes.map((type, index) => (
                                <button
                                    key={type.key}
                                    ref={(el) => (typeRefs.current[index] = el!)}
                                    data-key={type.key}
                                    onClick={() => setActiveTab(type.key as 'unpaid' | 'paid')}
                                    className={`px-4 py-2 relative bg-white ${activeTab === type.key
                                        ? "font-bold text-orange-500"
                                        : "text-gray-600 hover:text-orange-500"
                                        }`}
                                    style={{
                                        outline: "none",
                                        border: "none",
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
                                width: inkBarStyle.width ? `${inkBarStyle.width - 20}px` : '0px',
                                left: inkBarStyle.left ? `${inkBarStyle.left + 10}px` : '0px',
                            }}
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-4 relative" ref={datePickerRef}>
                        <span className="text-sm bg-white text-gray-500">Chọn khoảng thời gian:</span>
                        <button
                            type="button"
                            className="border border-gray-300 px-2 py-1 rounded text-sm bg-white text-black hover:bg-gray-100"
                            onClick={toggleDatePicker}
                        >
                            {formatDateRange()}
                        </button>
                        {showDatePicker && (
                            <div className="absolute top-10 left-0 z-10">
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleDateChange}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsRange
                                    inline
                                    calendarClassName="custom-calendar"
                                    dayClassName={() => "custom-day"}
                                    popperPlacement="bottom-start"
                                    dateFormat="dd/MM/yyyy"
                                />
                            </div>
                        )}
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="text-left text-gray-500">
                                    <th className="py-2">Đơn hàng</th>
                                    <th className="py-2">Thanh toán đã chuyển vào</th>
                                    <th className="py-2">Trạng thái</th>
                                    <th className="py-2">Phương thức thanh toán</th>
                                    <th className="py-2">Số tiền thanh toán</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={5} className="text-center py-4">
                                        <div className="flex flex-col items-center">
                                            <img
                                                src="/logo.svg"
                                                alt="No Data"
                                                className="w-16 h-16"
                                            />
                                            <span className="text-gray-500 mt-2">
                                                Không có dữ liệu
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>

            {/* Báo cáo thu nhập */}
            <div className="lg:col-span-1">
                <Card>
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl text-black font-bold">Báo cáo thu nhập</h2>
                        <Link
                            to="#"
                            className="text-blue-500 hover:underline text-sm"
                        >
                            Xem thêm {'>'}
                        </Link>
                    </div>
                    <ul className="space-y-2">
                        {/* Example list items - you would map over your data here */}
                        <li className="flex justify-between items-center">
                            <span className="text-sm text-black">20 Th01 - 26 Th01 2025</span>
                            <button className="text-blue-500 bg-white hover:underline text-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm12 0a2 2 0 100 4 2 2 0 000-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </li>
                         <li className="flex justify-between items-center">
                            <span className="text-sm text-black">13 Th01 - 19 Th01 2025</span>
                            <button className="text-blue-500 bg-white hover:underline text-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm12 0a2 2 0 100 4 2 2 0 000-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </li>
                         <li className="flex justify-between items-center">
                            <span className="text-sm text-black">06 Th01 - 12 Th01 2025</span>
                            <button className="text-blue-500 bg-white hover:underline text-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm12 0a2 2 0 100 4 2 2 0 000-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </Card>
            </div>
        </div>
    );
};

export default Revenue;
import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../components/custom-datepicker.css";
import { BiCreditCard } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import Card from "../../components/common/Card";
import OrangeButton from "../../components/common/OrangeButton";
import WhiteButton from "../../components/common/WhiteButton";

const Balance = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const datePickerRef = useRef<HTMLDivElement>(null);
    const [activeCashFlow, setActiveCashFlow] = useState<'all' | 'in' | 'out'>('all');
    const [transactionTypes, setTransactionTypes] = useState<string[]>([]);

    const cashFlowTypes = [
        { key: 'all', label: 'Tất cả' },
        { key: 'in', label: 'Tiền vào' },
        { key: 'out', label: 'Tiền ra' },
    ];

    const allTransactionTypes = [
        "Doanh Thu Đơn Hàng",
        "Điều chỉnh",
        "Cấn trừ Số dư TK Shopii",
        "Giá trị hoàn được ghi nhận",
        "Rút Tiền",
        "SEasy Cho Vay Người Bán",
    ];

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

    const toggleTransactionType = (type: string) => {
        setTransactionTypes((prevTypes) =>
            prevTypes.includes(type)
                ? prevTypes.filter((t) => t !== type)
                : [...prevTypes, type]
        );
    };

    const formatDateRange = () => {
      if (startDate && endDate) {
        return `${startDate.toLocaleDateString("vi-VN")} - ${endDate.toLocaleDateString("vi-VN")}`;
      }
      return "Chọn khoảng thời gian";
    };

    const handleApplyFilters = () => {
        console.log("Applying filters:", { startDate, endDate, activeCashFlow, transactionTypes });
    };

    const handleResetFilters = () => {
        setStartDate(null);
        setEndDate(null);
        setActiveCashFlow('all');
        setTransactionTypes([]);
    };

    const toggleAutoWithdraw = () => {
        setAutoWithdraw(!autoWithdraw);
    }

    return (
        <div className="p-4">
            <h1 className="text-lg text-black font-bold">Số dư TK Shopii</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Card>
                    <h2 className="text-lg font-bold mb-2 text-black">Tổng Quan</h2>
                    <div className="flex items-center mb-2">
                        <span className="text-gray-600 text-sm mr-2">Số dư</span>
                        <span className="text-black font-bold text-xl">₫0</span>
                        <OrangeButton label="Yêu Cầu Thanh Toán" className="ml-4 text-sm" />
                    </div>
                    <div className="text-xs text-gray-500">
                        Tự động rút tiền: Tắt
                    </div>
                </Card>

                <Card>
                    <h2 className="text-lg font-bold mb-2 text-black">
                        Tài khoản ngân hàng
                    </h2>
                    <div className="text-sm flex items-center">
                        <button className="px-2 py-1 bg-white text-black mr-1 flex items-center">
                            <BiCreditCard className="mr-1" size={20} />
                            Hủy Liên kết Tài Khoản Ngân Hàng.
                        </button>
                        <button className="px-2 py-1 bg-white text-blue-500">
                            Thêm Tài Khoản Ngân Hàng
                        </button>
                    </div>
                </Card>
            </div>
            <Card>
                <h2 className="text-lg font-bold mb-4 text-black">Các giao dịch gần đây</h2>

                <div className="flex items-center mb-4 relative" ref={datePickerRef}>
                    <span className="text-gray-600 text-sm mr-2">Thời gian phát sinh giao dịch</span>
                    <button
                        className="border border-gray-300 px-2 py-1 rounded text-sm bg-white text-black hover:bg-gray-100"
                        onClick={toggleDatePicker}
                    >
                        {formatDateRange()}
                    </button>
                    {showDatePicker && (
                        <div className="absolute top-10 bg-white left-0 z-10">
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
                 {/* Cash Flow Type Buttons */}
                <div className="flex items-center mb-4">
                    <span className="text-gray-600 text-sm mr-2">Dòng tiền</span>
                    <div className="flex">
                        {cashFlowTypes.map((type) => (
                            <button
                                key={type.key}
                                onClick={() => setActiveCashFlow(type.key as 'all' | 'in' | 'out')}
                                className={`px-4 py-1.5 rounded-full text-sm  ${
                                    activeCashFlow === type.key
                                        ? "bg-orange-100 text-orange-600 border border-orange-500"
                                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-300"
                                }`}
                                style={{ outline: "none", border: "none" }}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>
                </div>


                <div className="flex items-center mb-4 flex-wrap">
                    <span className="text-gray-600 text-sm mr-2">Loại giao dịch</span>
                    {allTransactionTypes.map((type) => (
                        <label key={type} className="border border-gray-300 px-2 py-1 rounded text-sm bg-white text-black hover:bg-gray-100 mr-1 mb-1 flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="mr-1"
                                checked={transactionTypes.includes(type)}
                                onChange={() => toggleTransactionType(type)}
                            />
                            {type}
                        </label>
                    ))}

                    <div className="ml-auto flex items-center mt-2 md:mt-0">
                        <WhiteButton label="Thiết lập lại" onClick={handleResetFilters} className="mr-2 text-sm" />
                        <OrangeButton label="Áp dụng" onClick={handleApplyFilters} className="text-sm" />
                    </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 text-sm">
                        0 Giao dịch (Tổng số tiền: 0)
                    </span>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Tìm kiếm đơn hàng"
                            className="border border-gray-300 bg-white px-2 py-1 rounded text-sm text-black mr-2"
                        />
                        <WhiteButton label={<FiSearch size={16} />} className="mr-2" />
                        <WhiteButton label="Xuất" className="mr-2" />
                        <WhiteButton label={<svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 12.75h.75v.75h-.75v-.75zM6.75 18.75h.75v.75h-.75v-.75zM12.75 6.75h.75v.75h-.75v-.75zM12.75 12.75h.75v.75h-.75v-.75zM12.75 18.75h.75v.75h-.75v-.75zM17.625 6.75h1.125v.75h-1.125v-.75zM17.625 12.75h1.125v.75h-1.125v-.75zM17.625 18.75h1.125v.75h-1.125v-.75z"
                            />
                        </svg>} />

                    </div>
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
                        Không có lịch sử giao dịch
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default Balance;
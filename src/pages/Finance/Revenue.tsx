import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../components/custom-datepicker.css";
import { BiCreditCard } from "react-icons/bi";

const Revenue = () => {
  const [startDate, setStartDate] = useState(new Date(2025, 0, 1));
  const [endDate, setEndDate] = useState(new Date(2025, 0, 31));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  const handleDateChange = (dates: [Date, Date]) => {
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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">Số dư TK Shopee</h1>
      <div className="flex space-x-4 mb-4">
        {/* Tổng quan */}
        <div className="bg-white p-4 rounded shadow w-1/2">
          <h2 className="text-lg font-bold mb-2 text-black">Tổng Quan</h2>
          <div className="flex items-center mb-2">
            <span className="text-gray-600 text-sm mr-2">Số dư</span>
            <span className="text-black font-bold text-xl">₫0</span>
            <button className="bg-orange-500 text-white px-4 py-2 rounded ml-4 hover:bg-orange-600">
              Yêu Cầu Thanh Toán
            </button>
          </div>
          <div className="text-xs text-gray-500">
            Tự động rút tiền: Tắt
          </div>
        </div>

        {/* Tài khoản ngân hàng */}
        <div className="bg-white p-4 rounded shadow w-1/2">
          <h2 className="text-lg font-bold mb-2 text-black">
            Tài khoản ngân hàng
          </h2>
          <div className="text-sm  flex items-center">
            <button className="  px-2 py-1  bg-white text-black  mr-1 flex items-center">
            <BiCreditCard className="mr-1" size={20} />

              Hủy Liên kết Tài Khoản Ngân Hàng.
            </button>
            <button className="px-2 py-1 bg-white text-blue-500 ">
              Thêm Tài Khoản Ngân Hàng
            </button>
          </div>
        </div>
      </div>

      {/* Các giao dịch gần đây */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2 text-black">
          Các giao dịch gần đây
        </h2>
        <div className="flex items-center mb-4 relative" ref={datePickerRef}>
          <span className="text-gray-600 text-sm mr-2">
            Thời gian phát sinh giao dịch
          </span>
          <button
            className="border border-gray-300 px-2 py-1 rounded text-sm bg-white text-black hover:bg-gray-100"
            onClick={toggleDatePicker}
          >
            {`Trong vòng tháng này: ${startDate
              .toLocaleDateString("vi-VN")
              .split("/")
              .map((s) => s.padStart(2, "0"))
              .join("/")} - ${endDate
              .toLocaleDateString("vi-VN")
              .split("/")
              .map((s) => s.padStart(2, "0"))
              .join("/")}`}
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
        <div className="flex items-center mb-4">
          <span className="text-gray-600 text-sm mr-2">Dòng tiền</span>
          <button className="border border-gray-300 px-2 py-1 rounded text-sm bg-white text-black hover:bg-gray-100 mr-1">
            Tất cả
          </button>
          <button className="border border-gray-300 px-2 py-1 rounded text-sm bg-white text-black hover:bg-gray-100 mr-1">
            Tiền vào
          </button>
          <button className="border border-gray-300 px-2 py-1 rounded text-sm bg-white text-black hover:bg-gray-100">
            Tiền ra
          </button>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-gray-600 text-sm mr-2">Loại giao dịch</span>
          <button className="border border-gray-300 px-2 py-1 rounded text-sm bg-white text-black hover:bg-gray-100 mr-1">
            <input type="checkbox" className="mr-1" />
            Doanh Thu Đơn Hàng
          </button>
          <button className="border border-gray-300 px-2 py-1 rounded text-sm bg-white text-black hover:bg-gray-100 mr-1">
            <input type="checkbox" className="mr-1" />
            Điều chỉnh
          </button>
          <button className="border border-gray-300 px-2 py-1 rounded text-sm bg-white text-black hover:bg-gray-100 mr-1">
            <input type="checkbox" className="mr-1" />
            Cấn trừ Số dư TK Shopee
          </button>
          <button className="border border-gray-300 px-2 py-1 rounded text-sm bg-white text-black hover:bg-gray-100 mr-1">
            <input type="checkbox" className="mr-1" />
            Giá trị hoàn được ghi nhận
          </button>
          <button className="border border-gray-300 px-2 py-1 rounded text-sm bg-white text-black hover:bg-gray-100 mr-1">
            <input type="checkbox" className="mr-1" />
            Rút Tiền
          </button>
          <button className="border border-gray-300 px-2 py-1 rounded text-sm bg-white text-black hover:bg-gray-100 mr-1">
            <input type="checkbox" className="mr-1" />
            SEasy Cho Vay Người Bán
          </button>
          <div className="ml-auto flex items-center">
            <button className="border border-gray-300 px-2 py-1 rounded text-sm bg-white text-black hover:bg-gray-100 mr-2">
              Thiết lập lại
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Áp dụng
            </button>
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
            <button className="border border-gray-300 bg-white px-2 py-1 rounded text-sm text-black hover:bg-gray-100 mr-2">
              <svg
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            <button className="border border-gray-300 px-2 py-1 rounded text-sm bg-white text-black hover:bg-gray-100">
              Xuất
            </button>
            <button className="border border-gray-300 px-2 py-1 rounded text-sm bg-white text-black hover:bg-gray-100 ml-2">
              <svg
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
              </svg>
            </button>
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
      </div>
    </div>
  );
};

export default Revenue;
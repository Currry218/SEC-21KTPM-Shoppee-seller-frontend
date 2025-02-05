import React, { useState } from 'react';
import FilterButton from "./FilterButton";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateShippingReceipt: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(true); // State to toggle form visibility
  const [printType, setPrintType] = useState<'normal' | 'thermal'>('normal');
  const [fileFormat, setFileFormat] = useState<'pdf' | 'excel'>('pdf');
  const [selectedOrderType, setSelectedOrderType] = useState("Regular Order");
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState("Tất cả trạng thái");
  const [selectedCarrier, setSelectedCarrier] = useState("SPX Instant");
  const [selectedOrderStatus, setSelectedOrderStatus] = useState("Tất cả trạng thái");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const buttonClasses = (isActive: boolean) =>
    `px-1 py-1 border rounded-full text-sm ${isActive ? "text-red-500 border-red-500 bg-red-100" : "bg-gray-200 text-black"
    }`;

  return (
    <div className="flex flex-row gap-4 p-4">
      {/* Left Panel */}
      <div className="w-2/3 bg-white rounded-lg shadow-sm border">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-black">Giao Hàng Loạt</h1>
          </div>

          {/* Loại Đơn hàng */}
          <div className="mt-4 flex items-center">
            <h2 className="text-base font-semibold text-black mr-2">Loại Đơn hàng</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Regular Order", "Instant"].map((type) => (
                <button
                  key={type}
                  className={buttonClasses(selectedOrderType === type)}
                  onClick={() => setSelectedOrderType(type)}
                >
                  {type} (0)
                </button>
              ))}
            </div>
          </div>

          {/* Hạn giao hàng */}
          <div className="mt-4 flex items-center">
            <h2 className="text-base font-semibold text-black mr-2">Hạn giao hàng</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "Tất cả trạng thái",
                "Quá hạn giao hàng",
                "Trong vòng 24 tiếng",
                "Trên 24 tiếng",
              ].map((time) => (
                <button
                  key={time}
                  className={buttonClasses(selectedDeliveryTime === time)}
                  onClick={() => setSelectedDeliveryTime(time)}
                >
                  {time} (0)
                </button>
              ))}
            </div>
          </div>

          {/* Đơn vị vận chuyển */}
          <div className="mt-4 flex items-center">
            <h2 className="text-base font-semibold text-black mr-2">Đơn vị vận chuyển</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {["SPX Instant", "GrabExpress", "AhaMove"].map((carrier) => (
                <button
                  key={carrier}
                  className={buttonClasses(selectedCarrier === carrier)}
                  onClick={() => setSelectedCarrier(carrier)}
                >
                  {carrier} (0)
                </button>
              ))}
            </div>
          </div>

          {/* Trạng thái đơn hàng */}
          <div className="mt-4 flex items-center">
            <h2 className="text-base font-semibold text-black mr-2">Trạng thái đơn hàng</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Tất cả trạng thái", "Đã xử lý", "Chưa xử lý"].map((orderStatus) => (
                <button
                  key={orderStatus}
                  className={buttonClasses(selectedOrderStatus === orderStatus)}
                  onClick={() => setSelectedOrderStatus(orderStatus)}
                >
                  {orderStatus} (0)
                </button>
              ))}
            </div>
          </div>

          {/* Form Section */}
          {isFormVisible && (
            <form className="grid grid-cols-1 gap-4 mb-1 mt-6 bg-white text-black">
              <div className="flex items-center">
                <label htmlFor="orderType" className="text-xs font-semibold mr-2 text-black w-1/4">
                  Loại đơn hàng
                </label>
                <select
                  id="orderType"
                  className="border border-black rounded-lg p-2 text-xs text-black bg-white flex-1"
                >
                  <option value="all">Tất cả</option>
                  <option value="regular">Regular Order</option>
                  <option value="instant">Instant</option>
                </select>
              </div>

              <div className="flex items-center">
                <label htmlFor="deliveryTime" className="text-xs font-semibold mr-2 text-black w-1/4">
                  Thời gian xác nhận đặt đơn
                </label>
                <div className="flex-1">
                  <DatePicker
                    selected={startDate}
                    onChange={(dates: [Date | null, Date | null]) => {
                      const [start, end] = dates;
                      setStartDate(start);
                      setEndDate(end);
                    }}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    dateFormat="yyyy/MM/dd"
                    className="border border-black rounded-lg p-2 text-xs text-black bg-white w-full"
                    placeholderText="Select a date range"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="product" className="text-xs font-semibold mr-2 text-black w-1/4">
                  Tìm kiếm theo
                </label>
                <select
                  id="product"
                  className="border border-black rounded-lg p-2 text-xs text-black bg-white w-1/4 mr-2"
                >
                  <option value="product">Sản phẩm</option>
                  <option value="buyerName">Tên người mua</option>
                  <option value="orderCode">Mã đơn hàng</option>
                </select>
                <input
                  type="text"
                  id="product"
                  placeholder="Input"
                  className="border border-black rounded-lg p-2 text-xs text-black bg-white flex-1"
                />
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  type="submit"
                  className="text-orange-500 border border-orange-500 bg-white px-4 py-2 rounded-lg text-xs font-medium flex-1"
                >
                  Áp dụng
                </button>
                <button
                  type="reset"
                  className="border border-black text-black bg-white px-4 py-2 rounded-lg text-xs font-medium flex-1"
                >
                  Đặt lại
                </button>
              </div>
            </form>
          )}
          <button
            onClick={() => setIsFormVisible(!isFormVisible)} // Toggle form visibility
            className="text-blue-500 underline bg-transparent px-0 py-0 border-none text-xs font-medium mt-4 focus:outline-none focus:ring-0"
          >
            {isFormVisible ? "Rút gọn bộ lọc" : "Hiện bộ lọc"} {/* Dynamic label */}
          </button>

          <div className="mt-6 mb-4 flex justify-end">
            <FilterButton />
          </div>

          {/* Table */}
          <div className="mt-6">
            <div className="flex justify-between items-center text-xs text-black mb-4">
              <span>Sắp xếp theo: Hạn gửi hàng (Xa - Gần nhất)</span>
            </div>
            <div className="border rounded-lg">
              <div className="grid grid-cols-6 p-3 bg-gray-50 text-xs font-medium border-b text-black">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Sản Phẩm</span>
                </div>
                <div>Mã đơn hàng</div>
                <div>Người mua</div>
                <div>Đơn vị vận chuyển</div>
                <div>Mã vận đơn</div>
                <div>Thời gian xác nhận đặt đơn</div>
              </div>
              <div className="p-8 text-center text-black">
                Không có dữ liệu
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-1/3 space-y-4">
        {/* Create Receipt Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 border">
          <h2 className="text-black text-lg font-semibold mb-4">Tạo phiếu hàng loạt</h2>
          <p className="text-yellow-600 text-sm mb-4">
            Vui lòng lựa chọn kiểu hàng để tạo phiếu
          </p>

          <div className="space-y-4">
            {/* Shipping Receipt */}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="shipping" className="rounded bg-gray-100" />
              <label htmlFor="shipping" className="text-sm text-black">
                Phiếu xuất hàng
              </label>
            </div>

            {/* Delivery and Package Receipt */}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="delivery" className="rounded bg-gray-100" />
              <label htmlFor="delivery" className="text-sm text-black flex items-center">
                Phiếu gửi hàng và Phiếu đóng gói
                <span className="ml-1 text-black">?</span>
              </label>
            </div>

            {/* Delivery Receipt Only */}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="delivery-only" className="rounded bg-gray-100" />
              <label htmlFor="delivery-only" className="text-sm text-black">
                Phiếu gửi hàng
              </label>
            </div>

            {/* Print Type */}
            <div className="ml-6">
              <div className="flex gap-4">
                <label className="flex items-center gap-1 text-black">
                  <input
                    type="radio"
                    name="printType"
                    value="normal"
                    checked={printType === 'normal'}
                    onChange={() => setPrintType('normal')}
                    className="bg-gray-100"
                  />
                  <span className="text-sm">In thường</span>
                </label>
                <label className="flex items-center gap-1 text-black">
                  <input
                    type="radio"
                    name="printType"
                    value="thermal"
                    checked={printType === 'thermal'}
                    onChange={() => setPrintType('thermal')}
                    className="bg-gray-100"
                  />
                  <span className="text-sm">In nhiệt (Thermal)</span>
                </label>
              </div>
            </div>

            {/* Package Receipt */}
            <div>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" id="package" className="rounded bg-gray-100" />
                <span className="text-sm">Phiếu đóng gói</span>
              </label>

              <div className="ml-6 mt-2 space-y-2">
                <label className="flex items-center gap-2 text-black">
                  <input
                    type="radio"
                    name="fileFormat"
                    value="pdf"
                    checked={fileFormat === 'pdf'}
                    onChange={() => setFileFormat('pdf')}
                    className="bg-gray-100"
                  />
                  <span className="text-sm">PDF</span>
                </label>
                <label className="flex items-center gap-2 text-black">
                  <input
                    type="radio"
                    name="fileFormat"
                    value="excel"
                    checked={fileFormat === 'excel'}
                    onChange={() => setFileFormat('excel')}
                    className="bg-gray-100"
                  />
                  <span className="text-sm">Excel</span>
                </label>
              </div>
            </div>
          </div>

          {/* Create Button */}
          <button className="w-full mt-6 bg-gray-100 text-black py-2 rounded-lg flex items-center justify-center">
            <span className="text-sm">Tạo phiếu đã chọn</span>
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Vui lòng cho phép hiển thị màn hình pop-up trên trình duyệt để xem trước phiếu.
          </p>
        </div>

        {/* Delivery Receipt Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 border">
          <h2 className="text-lg font-semibold mb-2 text-black">Biên bản giao nhận</h2>
          <p className="text-sm text-gray-500 mb-4">
            Tính năng in Biên bản giao nhận chưa được hỗ trợ cho đơn vị vận chuyển này.
          </p>

          <button className="w-full bg-white border border-red-100 text-red-500 py-2 rounded-lg">
            Tạo Biên bản giao nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateShippingReceipt;
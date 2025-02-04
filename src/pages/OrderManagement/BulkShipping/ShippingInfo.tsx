import { useState } from "react";
import OrangeButton from "../../../components/common/OrangeButton";
import Card from "../../../components/common/Card";
import FilterButton from "./FilterButton";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ShippingInfo = () => {
  const [isFormVisible, setIsFormVisible] = useState(true); // State to toggle form visibility
  const [selectedOrderType, setSelectedOrderType] = useState("Regular Order");
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState("Tất cả trạng thái");
  const [selectedCarrier, setSelectedCarrier] = useState("SPX Instant");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const buttonClasses = (isActive: boolean) =>
    `px-1 py-1 border rounded-full text-xs ${isActive ? "text-red-500 border-red-500 bg-red-100" : "bg-gray-200 text-black"
    }`;

  return (
    <div className="flex flex-row items-start gap-6">
      <div className="flex-[2] min-w-[60%] bg-white p-6 rounded-2xl shadow-md border">
        <h1 className="text-xl font-bold mb-4 text-black">Giao Hàng Loạt</h1>

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

        {/* Table Section */}
        <p className="text-xs text-gray-500">0 parcels selected</p>
        <table className="mt-6 border rounded-lg w-full text-left bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 border-b text-xs text-black">Sản Phẩm</th>
              <th className="p-4 border-b text-xs text-black">Mã đơn hàng</th>
              <th className="p-4 border-b text-xs text-black">Người mua</th>
              <th className="p-4 border-b text-xs text-black">Đơn vị vận chuyển</th>
              <th className="p-4 border-b text-xs text-black">Thời gian xác nhận đặt đơn</th>
              <th className="p-4 border-b text-xs text-black">Trạng thái Đơn hàng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-b text-center text-xs text-black" colSpan={6}>
                Không có dữ liệu
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Right Section */}
      <div className="flex-[1] min-w-[30%] bg-white p-6 rounded-2xl border shadow-md">
        <h2 className="text-base font-semibold text-black">Chọn ngày giao hàng loạt</h2>

        <Card className="p-4 mt-4 border border-gray-300">
          <h3 className="font-semibold text-black">Pickup</h3>
          <p className="text-xs text-gray-500">Địa chỉ lấy hàng</p>
          <p className="font-medium text-red-500 text-xs">
            Trịnh Minh Long 84944613610 Đến Lấy Hàng
          </p>
          <p className="text-xs text-gray-500">
            207C, đường Nguyễn Xí, Phường 26, Quận Bình Thạnh, TP. Hồ Chí Minh
          </p>
        </Card>

        <OrangeButton
          className="eds-button--normal mt-6"
          label={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path d="M2.15932916,6.17321692 L6.16305178,2.20272941 C6.35912605,2.00828278 6.67570579,2.00960222 6.87015242,2.20567649 C7.04299388,2.37996472 7.04299388,2.71632957 6.87015242,2.91277713 L3.7256636,6.02824077 L14.4962586,6.02824077 C14.772401,6.02824077 14.9962586,6.2520984 14.9962586,6.52824077 C14.9962586,6.77370066 14.7768555,7.02824077 14.5175476,7.02824077 L2.51140595,7.02824077 C2.09471192,7.02824077 1.81887817,6.55234779 2.15932916,6.17321692 L6.16305178,2.20272941 L2.15932916,6.17321692 Z M14.8431245,9.88326463 L10.8394019,13.8537521 C10.6433277,14.0481988 10.3267479,14.0468793 10.1323013,13.8508051 C9.95945982,13.6765168 9.95945982,13.340152 10.1323013,13.1437044 L13.2767901,10.0282408 L2.50619508,10.0282408 C2.23005271,10.0282408 2.00619508,9.80438315 2.00619508,9.52824077 C2.00619508,9.28278089 2.22559823,9.02824077 2.48490609,9.02824077 L14.4910478,9.02824077 C14.9077418,9.02824077 15.1835755,9.50413375 14.8431245,9.88326463 L10.8394019,13.8537521 L14.8431245,9.88326463 Z"></path>
              </svg>
              <span className="text-xs">Yêu cầu đơn vị vận chuyển đến lấy hàng</span>
            </>
          }
        />
      </div>
    </div>
  );
};

export default ShippingInfo;
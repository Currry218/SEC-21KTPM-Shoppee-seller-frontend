import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

const PickupTable: React.FC = () => {
  const [category, setCategory] = useState("Chờ lấy hàng");

  const waitingHeaders = [
    "Ngày Lấy hàng",
    "Đơn vị vận chuyển",
    <>    
      Đơn lấy dự kiến
      <span
        data-tooltip-id="tooltip-transport-1"
        className="ml-1 cursor-pointer text-gray-500"
      >
        ?
      </span>
      <Tooltip id="tooltip-transport-1" place="top">
        Đơn lấy dự kiến = Đơn đã xác nhận + Đơn được dời ngày lấy hàng - Đơn Hủy
      </Tooltip>
    </>, 
    <>    
      Lấy hàng thành công
      <span
        data-tooltip-id="tooltip-transport-2"
        className="ml-1 cursor-pointer text-gray-500"
      >
        ?
      </span>
      <Tooltip id="tooltip-transport-2" place="top">
      Tổng số đơn được lấy từ 6 giờ sáng ngày lấy hàng đến 6 giờ sáng ngày làm việc tiếp theo
      </Tooltip>
    </>,
    <>    
      Số đơn chờ lấy hàng
      <span
        data-tooltip-id="tooltip-transport-3"
        className="ml-1 cursor-pointer text-gray-500"
      >
        ?
      </span>
      <Tooltip id="tooltip-transport-3" place="top">
        Số đơn chờ lấy hàng = Dự kiến lấy hàng - Lấy hàng thành công
      </Tooltip>
    </>,
  ];

  const pickedHeaders = [
    "Ngày Lấy hàng",
    "Đơn vị vận chuyển",
    <>    
      Lấy hàng thành công
      <span
        data-tooltip-id="tooltip-transport-2"
        className="ml-1 cursor-pointer text-gray-500"
      >
        ?
      </span>
      <Tooltip id="tooltip-transport-2" place="top">
      Tổng số đơn được lấy từ 6 giờ sáng ngày lấy hàng đến 6 giờ sáng ngày làm việc tiếp theo
      </Tooltip>
    </>,
    "Thao tác",
  ];

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 border border-black shadow-md rounded ${
            category === "Chờ lấy hàng" ? "bg-white text-orange-500" : "bg-gray-200 text-black"
          }`}
          onClick={() => setCategory("Chờ lấy hàng")}
        >
          Chờ lấy hàng
        </button>
        <button
          className={`px-4 py-2 border border-black shadow-md rounded ${
            category === "Đã Lấy hàng" ? "bg-white text-orange-500" : "bg-gray-200 text-black"
          }`}
          onClick={() => setCategory("Đã Lấy hàng")}
        >
          Đã Lấy hàng
        </button>
      </div>
      <p className="text-black mb-3">{category === "Chờ lấy hàng" ? "" : "Các đợt lấy hàng trong 3 ngày gần nhất"}</p>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {(category === "Chờ lấy hàng" ? waitingHeaders : pickedHeaders).map((header, index) => (
              <th key={index} className="border border-gray-300 px-4 py-2 text-left text-black">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={category === "Chờ lấy hàng" ? 5 : 4} className="text-center py-4 text-black">
              Không tìm thấy đơn hàng
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PickupTable;

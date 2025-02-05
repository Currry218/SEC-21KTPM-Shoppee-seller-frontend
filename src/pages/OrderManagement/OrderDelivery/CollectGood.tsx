import React, { useState } from "react";

const CollectTable: React.FC = () => {
  const [category, setCategory] = useState("Chờ lấy hàng");

  const waitingHeaders = [
    "Ngày Lấy hàng",
    "Đơn vị vận chuyển",
    "Điểm gửi hàng gần nhất",
    "Số đơn cần gửi bưu cục",
  ];

  const pickedHeaders = [
    "Ngày gửi hàng tại bưu cục",
    "Đơn vị vận chuyển",
    "Gửi hàng tại bưu cục thành công",
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
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {(category === "Chờ lấy hàng" ? waitingHeaders : pickedHeaders).map((header) => (
              <th key={header} className="border border-gray-300 px-4 py-2 text-left text-black">
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

export default CollectTable;

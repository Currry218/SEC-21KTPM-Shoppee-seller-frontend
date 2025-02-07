import { Package } from 'lucide-react';
import { useState } from 'react';
import { X } from 'lucide-react';

const Unlisted = () => {
  const [isTooltipVisible1, setIsTooltipVisible1] = useState(false);
  const [isTooltipVisible2, setIsTooltipVisible2] = useState(false);
  const [isTooltipVisible3, setIsTooltipVisible3] = useState(false);
  const [isPermanentTooltip, setIsPermanentTooltip] = useState(false);

  const handleMouseEnter1 = () => {
    setIsTooltipVisible1(true);
  };

  const handleMouseLeave1 = () => {
    setIsTooltipVisible1(false);
  };

  const handleMouseEnter2 = () => {
    setIsTooltipVisible2(true);
  };

  const handleMouseLeave2 = () => {
    setIsTooltipVisible2(false);
  };

  const handleMouseEnter3 = () => {
    setIsTooltipVisible3(true);
  };

  const handleMouseLeave3 = () => {
    setIsTooltipVisible3(false);
  };

  const handleCloseTooltip = () => {
    setIsPermanentTooltip(false);
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 text-black">
        <div className="flex items-center space-x-2">
          <h1 className="text-lg font-bold">0 Sản Phẩm</h1>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="peer hidden"
                      id="select-checkbox"
                    />
                    <label
                      htmlFor="select-checkbox"
                      className="block w-4 h-4 border border-gray-300 bg-white rounded-md cursor-pointer peer-checked:bg-orange-500 peer-checked:border-orange-500 flex items-center justify-center transition duration-150"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 peer-checked:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </label>
                  </div>
                </th>

                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  <div className="flex items-center">
                    Tên sản phẩm
                  </div>
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  <div className="relative flex items-center">
                    Doanh số
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-3 h-3 ml-2 text-gray-600"
                      onMouseEnter={handleMouseEnter1}
                      onMouseLeave={handleMouseLeave1}
                    >
                      <path d="M32 16a16 16 0 1 0-16 16 16 16 0 0 0 16-16zm-2 0A14 14 0 1 1 16 2a14 14 0 0 1 14 14zm-19.44-3.88a5.51 5.51 0 0 1 1.68-3.74A5.33 5.33 0 0 1 16 7a5.6 5.6 0 0 1 3.92 1.36 4.47 4.47 0 0 1 1.49 3.46 4.81 4.81 0 0 1-.51 2.2 8 8 0 0 1-1.9 2.24 6.82 6.82 0 0 0-1.74 2 6.57 6.57 0 0 0-.32 2.43h-2a8.15 8.15 0 0 1 .49-3.29 7.41 7.41 0 0 1 1.82-2.23 7.65 7.65 0 0 0 1.65-1.82 2.93 2.93 0 0 0 .31-1.35 3.15 3.15 0 0 0-.87-2.29A3 3 0 0 0 16 8.79q-2.76 0-3.24 3.33h-2.2zM17.18 25h-2.35v-2.48h2.36V25z" />
                    </svg>
                    {(isTooltipVisible1 || isPermanentTooltip) && (
                      <div
                        className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white border border-gray-300 rounded-lg shadow-lg p-4 text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {isPermanentTooltip && (
                          <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={handleCloseTooltip}
                          >
                            <X size={16} />
                          </button>
                        )}
                        <div
                          className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 
                    border-l-8 border-l-transparent 
                    border-b-8 border-b-gray-300 
                    border-r-8 border-r-transparent"
                        />
                        <div
                          className="absolute -top-[6px] left-1/2 transform -translate-x-1/2 w-0 h-0 
                    border-l-[6px] border-l-transparent 
                    border-b-[6px] border-b-white 
                    border-r-[6px] border-r-transparent"
                        />
                        <div className="font-semibold mb-2 select-text">Thông tin doanh số của sản phẩm đã bao gồm cả doanh số của từng phân loại (kể cả những phân loại đã bị xóa)</div>
                      </div>
                    )}
                    <div className="flex flex-col ml-1 p-1 space-y-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -5 16 16"
                        className="w-4 h-4 text-gray-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.57253679,6.40074676 L5.1530248,8.66903925 C4.90120463,8.90512066 4.88844585,9.30064304 5.12452726,9.55246321 C5.24268191,9.67849483 5.40773242,9.75 5.58048801,9.75 L10.419512,9.75 C10.76469,9.75 11.044512,9.47017797 11.044512,9.125 C11.044512,8.95224442 10.9730068,8.7871939 10.8469752,8.66903925 L8.42746321,6.40074676 C8.18705183,6.17536109 7.81294817,6.17536109 7.57253679,6.40074676 Z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 5 16 16"
                        className="w-4 h-4 text-gray-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.42746321,9.59925324 L10.8469752,7.33096075 C11.0987954,7.09487934 11.1115542,6.69935696 10.8754727,6.44753679 C10.7573181,6.32150517 10.5922676,6.25 10.419512,6.25 L5.58048801,6.25 C5.23531002,6.25 4.95548797,6.52982203 4.95548797,6.875 C4.95548797,7.04775558 5.0269932,7.2128061 5.1530248,7.33096075 L7.57253679,9.59925324 C7.81294817,9.82463891 8.18705183,9.82463891 8.42746321,9.59925324 Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  <div className="flex items-center">
                    Giá
                    <div className="flex flex-col ml-1 p-1 space-y-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -5 16 16"
                        className="w-4 h-4 text-gray-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.57253679,6.40074676 L5.1530248,8.66903925 C4.90120463,8.90512066 4.88844585,9.30064304 5.12452726,9.55246321 C5.24268191,9.67849483 5.40773242,9.75 5.58048801,9.75 L10.419512,9.75 C10.76469,9.75 11.044512,9.47017797 11.044512,9.125 C11.044512,8.95224442 10.9730068,8.7871939 10.8469752,8.66903925 L8.42746321,6.40074676 C8.18705183,6.17536109 7.81294817,6.17536109 7.57253679,6.40074676 Z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 5 16 16"
                        className="w-4 h-4 text-gray-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.42746321,9.59925324 L10.8469752,7.33096075 C11.0987954,7.09487934 11.1115542,6.69935696 10.8754727,6.44753679 C10.7573181,6.32150517 10.5922676,6.25 10.419512,6.25 L5.58048801,6.25 C5.23531002,6.25 4.95548797,6.52982203 4.95548797,6.875 C4.95548797,7.04775558 5.0269932,7.2128061 5.1530248,7.33096075 L7.57253679,9.59925324 C7.81294817,9.82463891 8.18705183,9.82463891 8.42746321,9.59925324 Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  <div className="relative flex items-center">
                    Kho hàng
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-3 h-3 ml-2 text-gray-600"
                      onMouseEnter={handleMouseEnter2}
                      onMouseLeave={handleMouseLeave2}
                    >
                      <path d="M32 16a16 16 0 1 0-16 16 16 16 0 0 0 16-16zm-2 0A14 14 0 1 1 16 2a14 14 0 0 1 14 14zm-19.44-3.88a5.51 5.51 0 0 1 1.68-3.74A5.33 5.33 0 0 1 16 7a5.6 5.6 0 0 1 3.92 1.36 4.47 4.47 0 0 1 1.49 3.46 4.81 4.81 0 0 1-.51 2.2 8 8 0 0 1-1.9 2.24 6.82 6.82 0 0 0-1.74 2 6.57 6.57 0 0 0-.32 2.43h-2a8.15 8.15 0 0 1 .49-3.29 7.41 7.41 0 0 1 1.82-2.23 7.65 7.65 0 0 0 1.65-1.82 2.93 2.93 0 0 0 .31-1.35 3.15 3.15 0 0 0-.87-2.29A3 3 0 0 0 16 8.79q-2.76 0-3.24 3.33h-2.2zM17.18 25h-2.35v-2.48h2.36V25z" />
                    </svg>
                    {(isTooltipVisible2 || isPermanentTooltip) && (
                      <div
                        className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white border border-gray-300 rounded-lg shadow-lg p-4 text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {isPermanentTooltip && (
                          <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={handleCloseTooltip}
                          >
                            <X size={16} />
                          </button>
                        )}
                        <div
                          className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 
          border-l-8 border-l-transparent 
          border-b-8 border-b-gray-300 
          border-r-8 border-r-transparent"
                        />
                        <div
                          className="absolute -top-[6px] left-1/2 transform -translate-x-1/2 w-0 h-0 
          border-l-[6px] border-l-transparent 
          border-b-[6px] border-b-white 
          border-r-[6px] border-r-transparent"
                        />
                        <div className="font-semibold mb-2 select-text">Tồn kho là tổng số lượng sản phẩm có sẵn để bán, bao gồm cả số lượng hàng được đăng ký khuyến mãi. Nếu sản phẩm đang tham gia khuyến mãi, hệ thống sẽ hiển thị cả số tồn kho đang không tham gia chương trình.</div>
                      </div>
                    )}
                    <div className="flex flex-col ml-1 p-1 space-y-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -5 16 16"
                        className="w-4 h-4 text-gray-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.57253679,6.40074676 L5.1530248,8.66903925 C4.90120463,8.90512066 4.88844585,9.30064304 5.12452726,9.55246321 C5.24268191,9.67849483 5.40773242,9.75 5.58048801,9.75 L10.419512,9.75 C10.76469,9.75 11.044512,9.47017797 11.044512,9.125 C11.044512,8.95224442 10.9730068,8.7871939 10.8469752,8.66903925 L8.42746321,6.40074676 C8.18705183,6.17536109 7.81294817,6.17536109 7.57253679,6.40074676 Z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 5 16 16"
                        className="w-4 h-4 text-gray-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.42746321,9.59925324 L10.8469752,7.33096075 C11.0987954,7.09487934 11.1115542,6.69935696 10.8754727,6.44753679 C10.7573181,6.32150517 10.5922676,6.25 10.419512,6.25 L5.58048801,6.25 C5.23531002,6.25 4.95548797,6.52982203 4.95548797,6.875 C4.95548797,7.04775558 5.0269932,7.2128061 5.1530248,7.33096075 L7.57253679,9.59925324 C7.81294817,9.82463891 8.18705183,9.82463891 8.42746321,9.59925324 Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  <div className="relative flex items-center">
                    Chất lượng nội dung
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-3 h-3 ml-2 text-gray-600"
                      onMouseEnter={handleMouseEnter3}
                      onMouseLeave={handleMouseLeave3}
                    >
                      <path d="M32 16a16 16 0 1 0-16 16 16 16 0 0 0 16-16zm-2 0A14 14 0 1 1 16 2a14 14 0 0 1 14 14zm-19.44-3.88a5.51 5.51 0 0 1 1.68-3.74A5.33 5.33 0 0 1 16 7a5.6 5.6 0 0 1 3.92 1.36 4.47 4.47 0 0 1 1.49 3.46 4.81 4.81 0 0 1-.51 2.2 8 8 0 0 1-1.9 2.24 6.82 6.82 0 0 0-1.74 2 6.57 6.57 0 0 0-.32 2.43h-2a8.15 8.15 0 0 1 .49-3.29 7.41 7.41 0 0 1 1.82-2.23 7.65 7.65 0 0 0 1.65-1.82 2.93 2.93 0 0 0 .31-1.35 3.15 3.15 0 0 0-.87-2.29A3 3 0 0 0 16 8.79q-2.76 0-3.24 3.33h-2.2zM17.18 25h-2.35v-2.48h2.36V25z" />
                    </svg>
                    {(isTooltipVisible3 || isPermanentTooltip) && (
                      <div
                        className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white border border-gray-300 rounded-lg shadow-lg p-4 text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {isPermanentTooltip && (
                          <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={handleCloseTooltip}
                          >
                            <X size={16} />
                          </button>
                        )}
                        <div
                          className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 
          border-l-8 border-l-transparent 
          border-b-8 border-b-gray-300 
          border-r-8 border-r-transparent"
                        />
                        <div
                          className="absolute -top-[6px] left-1/2 transform -translate-x-1/2 w-0 h-0 
          border-l-[6px] border-l-transparent 
          border-b-[6px] border-b-white 
          border-r-[6px] border-r-transparent"
                        />
                        <div className="font-semibold mb-2 select-text">Chất lượng nội dung bao gồm chất lượng hình ảnh, mô tả, thông tin sản phẩm,... Chất lượng nội dung sản phẩm càng cao sẽ đem đến càng nhiều lượng truy cập và doanh số cho sản phẩm.</div>
                      </div>
                    )}
                  </div>
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Thao tác
                </th>
              </tr>
            </thead>
          <tbody>
            {/* Empty State */}
            <tr>
              <td colSpan={7} className="text-center py-8 text-gray-500">
                <div className="flex flex-col items-center">
                  <Package className="w-16 h-16 text-gray-400 mb-4" />
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    Không tìm thấy sản phẩm
                  </h2>
                  <p className="text-gray-500">
                    Rất tiếc, chúng tôi không thể tìm thấy sản phẩm bạn đang tìm kiếm.
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Unlisted;
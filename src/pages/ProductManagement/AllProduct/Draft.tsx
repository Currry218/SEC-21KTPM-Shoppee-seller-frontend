import { Package } from 'lucide-react';
import { useState } from 'react';
import { X } from 'lucide-react';

const Draft = () => {
    const [isTooltipVisible3, setIsTooltipVisible3] = useState(false);
    const [isPermanentTooltip, setIsPermanentTooltip] = useState(false);

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

            {/* Table */}
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
                                        {/* SVG dấu tick */}
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
                                    Tất cả sản phẩm
                                    <div className="flex flex-col ml-1 p-1 space-y-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 32 32"
                                            className="w-4 h-4 text-gray-600"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M28.2 11.1l-10.9 12s0 .1-.1.2c-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3 0 0 0-.1-.1-.2l-10.9-12c-.4-.4-.4-1 0-1.3.4-.4 1-.4 1.3 0l10.4 11.3L26.9 9.8c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                <div className="relative flex items-center">
                                    Giá
                                </div>
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                <div className="flex items-center">
                                    Tồn kho
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

export default Draft;
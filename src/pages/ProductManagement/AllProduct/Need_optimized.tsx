import { Package } from 'lucide-react';
import { useState } from 'react';
import { X } from 'lucide-react';

const Need_optimized = () => {
    const [isTooltipVisible1, setIsTooltipVisible1] = useState(false);
    const [isTooltipVisible2, setIsTooltipVisible2] = useState(false);
    const [isTooltipVisible3, setIsTooltipVisible3] = useState(false);
    const [isTooltipVisible4, setIsTooltipVisible4] = useState(false);
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

    const handleMouseEnter4 = () => {
        setIsTooltipVisible4(true);
    };

    const handleMouseLeave4 = () => {
        setIsTooltipVisible4(false);
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
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                <div className="flex items-center">
                                    Tên sản phẩm
                                </div>
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                Chất Lượng Nội Dung
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                <div className="relative flex items-center">
                                    Sai Thông tin sản phẩm
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
                                            <div className="font-semibold mb-2 select-text">Bao gồm sai thông tin cân nặng/kích thước sản phẩm, sai ngành hàng. Thông tin không chính xác có thể ảnh hưởng đến doanh thu sản phẩm.</div>
                                        </div>
                                    )}
                                </div>
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                <div className="relative flex items-center">
                                    Vấn đề liên quan đến Hình ảnh của Sản phẩm
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
                                            <div className="font-semibold mb-2 select-text">Hình ảnh có thể ảnh hưởng đến hiệu suất của bài đăng. Ví dụ, bài đăng có ít hình ảnh có thể có tỷ lệ nhấp chuột và tỷ lệ chuyển đổi thấp hơn.</div>
                                        </div>
                                    )}
                                </div>
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                <div className="relative flex items-center">
                                    Thiếu Thông tin quan trọng
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
                                            <div className="font-semibold mb-2 select-text">Thiếu thông tin quan trọng như Thương hiệu và Thuộc tính sản phẩm có thể ảnh hưởng đến hiển thị và lưu lượng truy cập cho sản phẩm của bạn.</div>
                                        </div>
                                    )}
                                </div>
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                <div className="relative flex items-center">
                                    Những Vấn Đề Khác
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        className="w-3 h-3 ml-2 text-gray-600"
                                        onMouseEnter={handleMouseEnter4}
                                        onMouseLeave={handleMouseLeave4}
                                    >
                                        <path d="M32 16a16 16 0 1 0-16 16 16 16 0 0 0 16-16zm-2 0A14 14 0 1 1 16 2a14 14 0 0 1 14 14zm-19.44-3.88a5.51 5.51 0 0 1 1.68-3.74A5.33 5.33 0 0 1 16 7a5.6 5.6 0 0 1 3.92 1.36 4.47 4.47 0 0 1 1.49 3.46 4.81 4.81 0 0 1-.51 2.2 8 8 0 0 1-1.9 2.24 6.82 6.82 0 0 0-1.74 2 6.57 6.57 0 0 0-.32 2.43h-2a8.15 8.15 0 0 1 .49-3.29 7.41 7.41 0 0 1 1.82-2.23 7.65 7.65 0 0 0 1.65-1.82 2.93 2.93 0 0 0 .31-1.35 3.15 3.15 0 0 0-.87-2.29A3 3 0 0 0 16 8.79q-2.76 0-3.24 3.33h-2.2zM17.18 25h-2.35v-2.48h2.36V25z" />
                                    </svg>
                                    {(isTooltipVisible4 || isPermanentTooltip) && (
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
                                            <div className="font-semibold mb-2 select-text">Tên hoặc mô tả của sản phẩm quá ngắn/không rõ ràng có thể làm giảm tỷ lệ chuyển đổi của sản phẩm, khách hàng không có đủ thông tin về sản phẩm để mua hàng.</div>
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

export default Need_optimized;
import { Package } from 'lucide-react';
const Banned = () => {
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
                                    Tên sản phẩm
                                </div>
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                <div className="relative flex items-center">
                                    Thời gian cập nhật
                                </div>
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                <div className="flex items-center">
                                    Loại vi phạm
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
                                    Lý do vi phạm
                                </div>
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                <div className="relative flex items-center">
                                    Hạn sửa lỗi
                                </div>
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                Gợi ý
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

export default Banned;
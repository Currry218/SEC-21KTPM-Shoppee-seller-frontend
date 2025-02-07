import { Package } from 'lucide-react';
const Reviewing = () => {
    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 text-black">
                <div className="flex items-center space-x-2">
                    <h1 className="text-lg font-bold">0 Sản Phẩm</h1>
                </div>
            </div>

            {/* Notification Box */}
            <div className="bg-blue-100 border border-blue-500 text-black p-4 mb-4">
                Các sản phẩm thuộc tab Chờ duyệt đang trong quá trình được Shopee xem xét. Sau khi được chấp thuận, sản phẩm sẽ được hiển thị đăng bán. Sản phẩm cần điều chỉnh sẽ bị khóa hoặc xóa bởi Shopee.
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
                                <div className="flex items-center">
                                    Thời gian cập nhật
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
                                <div className="flex items-center">
                                    Kho hàng
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        className="w-3 h-3 ml-2 text-gray-600"
                                    >
                                        <path d="M32 16a16 16 0 1 0-16 16 16 16 0 0 0 16-16zm-2 0A14 14 0 1 1 16 2a14 14 0 0 1 14 14zm-19.44-3.88a5.51 5.51 0 0 1 1.68-3.74A5.33 5.33 0 0 1 16 7a5.6 5.6 0 0 1 3.92 1.36 4.47 4.47 0 0 1 1.49 3.46 4.81 4.81 0 0 1-.51 2.2 8 8 0 0 1-1.9 2.24 6.82 6.82 0 0 0-1.74 2 6.57 6.57 0 0 0-.32 2.43h-2a8.15 8.15 0 0 1 .49-3.29 7.41 7.41 0 0 1 1.82-2.23 7.65 7.65 0 0 0 1.65-1.82 2.93 2.93 0 0 0 .31-1.35 3.15 3.15 0 0 0-.87-2.29A3 3 0 0 0 16 8.79q-2.76 0-3.24 3.33h-2.2zM17.18 25h-2.35v-2.48h2.36V25z" />
                                    </svg>
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

export default Reviewing;
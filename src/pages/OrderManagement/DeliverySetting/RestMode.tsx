import { useState } from "react";

const RestMode = () => {
    const [isVacationMode, setIsVacationMode] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleToggle = () => {
        if (!isVacationMode) {
            setIsDialogOpen(true); // Open confirmation modal
        } else {
            setIsVacationMode(false);
        }
    };

    const confirmVacationMode = () => {
        setIsVacationMode(true);
        setIsDialogOpen(false);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">Chế độ Tạm nghỉ</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Kích hoạt Chế độ Tạm nghỉ để ngăn khách hàng đặt đơn hàng mới. Những đơn hàng đang tiến hành vẫn phải được xử lý.
                    </p>
                </div>
                {/* Toggle Button */}
                <button
                    onClick={handleToggle}
                    className={`w-12 h-6 flex items-center rounded-full p-1 transition ${isVacationMode ? "bg-green-500" : "bg-gray-400"
                        }`}
                >
                    <div
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${isVacationMode ? "translate-x-6" : "translate-x-0"
                            }`}
                    ></div>
                </button>
            </div>

            <div className="mt-4 bg-gray-100 p-3 rounded-md flex items-center justify-between">
                <span className="text-sm text-gray-700">
                    Bạn vẫn chưa kích hoạt Trả lời tự động.{" "}
                    <a href="#" className="text-blue-500 font-medium">Thiết lập ngay</a>
                </span>
            </div>

            {/* Confirmation Dialog */}
            {isDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm relative">
                        <button
                            onClick={() => setIsDialogOpen(false)}
                            className="absolute bg-white top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </button>
                        <h3 className="text-lg font-semibold text-gray-800">Chế độ Tạm Nghỉ</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Người mua sẽ không thể đặt hàng trong khi Shop bạn tạm nghỉ bán. Bạn chắc chắn muốn bật tạm nghỉ bán chứ?
                        </p>

                        <div className="mt-4 flex justify-end space-x-2">
                            <button className="text-blue-500 bg-white text-sm font-medium mr-auto">Tìm hiểu thêm</button>
                            <button onClick={() => setIsDialogOpen(false)} className="px-4 py-2 border rounded-lg text-black bg-white">Hủy</button>
                            <button onClick={confirmVacationMode} className="px-4 py-2 bg-red-500 text-white rounded-lg">Tiến hành</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RestMode;

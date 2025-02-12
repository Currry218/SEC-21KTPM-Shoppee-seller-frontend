import { useState } from "react";
import ToggleButton from "./Components/ToggleButton";
import { X } from "lucide-react";
import { LuPackage2 } from "react-icons/lu";

const ChatSetting = () => {
    const [groupName, setGroupName] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleToggle = () => {
        setIsDialogOpen(!isDialogOpen);
    };

    return (
        <div className="space-y-2">
            <div className="bg-white shadow-md rounded-lg p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-base font-semibold text-black">Nhận tin nhắn</h2>
                        <p className="text-xs text-black mt-1">
                            Nhận tin nhắn từ Giải Thưởng Shopee
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                            Bật tùy chọn này để nhận tin nhắn từ Giải Thưởng Shopee.
                        </p>
                    </div>
                    <label className="flex justify-center items-center cursor-pointer">
                        <ToggleButton />
                    </label>
                </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
                <div className="items-center justify-between">
                    <div className="flex items-center justify-between space-y-2">
                        <div>
                            <h2 className="text-md font-semibold text-black">Thông báo</h2>
                            <p className="text-xs text-black mt-1">
                                Phát thông báo âm thanh cho tin nhắn mới
                            </p>
                            <p className="text-xs text-gray-600 mt-1">
                                Vui lòng đảm bảo loa của máy tính đang mở và hãy bật cảnh báo bằng giọng nói
                                (Voice Permission) trong trang thiết lập trình duyệt (Browser Settings).
                                Chúng tôi khuyến khích bạn sử dụng phiên bản Google Chrome mới nhất.
                            </p>
                        </div>
                        <label className="flex justify-center items-center cursor-pointer ml-2">
                            <ToggleButton />
                        </label>
                    </div>

                    <hr className="my-2 border-gray-300" />

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-black mt-1">
                                Đẩy tin nhắn popup mới
                            </p>
                            <p className="text-xs text-gray-600 mt-1">
                                Bạn vui lòng bật tính năng cho phép gửi thông báo (Notification Permission)
                                trong trang thiết lập trình duyệt (Browser Settings).
                                Chúng tôi khuyến khích bạn sử dụng phiên bản Google Chrome mới nhất.
                            </p>
                        </div>
                        <label className="flex justify-center items-center cursor-pointer ml-2">
                            <ToggleButton />
                        </label>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-md font-semibold text-black">Chặn người dùng</h2>
                        <p className="text-xs text-gray-400 mt-1">
                            Danh sách người dùng bạn đã chặn trò chuyện.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-6 items-center text-gray-700 border-b py-2 bg-gray-100 text-xs rounded">
                    <div className="col-span-1 flex justify-start pl-3">Người dùng</div>
                    <div className="col-span-3 flex justify-start">Thời gian chặn</div>
                    <div className="col-span-2 flex justify-start">Thao tác</div>
                </div>

                <div className="flex justify-center items-center h-full">
                    <div className="flex flex-col items-center justify-center mt-4 text-gray-500">
                        <svg
                            viewBox="0 0 97 96"
                            className="w-16 h-16 text-gray-300"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <ellipse cx="47.5" cy="87" rx="45" ry="6" fill="#F2F2F2"></ellipse>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M79.5 55.5384V84.1647C79.5 85.1783 78.6453 86 77.5909 86H18.4091C17.3547 86 16.5 85.1783 16.5 84.1647V9.83529C16.5 8.82169 17.3547 8 18.4091 8H77.5909C78.6453 8 79.5 8.82169 79.5 9.83529V43.6505V55.5384Z"
                                fill="white"
                                stroke="#D8D8D8"
                            ></path>
                        </svg>
                        <p className="text-center text-xs text-gray-500 mt-2">
                            Không có dữ liệu
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-md font-semibold text-black">Nhóm sản phẩm</h2>
                        <div className="flex items-center space-x-2">
                            <p className="text-xs text-black mt-1">
                                Nhóm sản phẩm của tôi ( / )
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleToggle}
                        className="px-3 py-1 bg-red-500 text-white rounded-lg"
                    >
                        Tạo nhóm
                    </button>
                </div>

                <div className="flex justify-center items-center h-full">
                    <div className="flex flex-col items-center justify-center mt-4 text-gray-500">
                        <LuPackage2 className="w-10 h-10"/>
                        <p className="text-center text-xs text-black mt-2 font-bold">
                            Không tìm thấy Sản phẩm nào
                        </p>
                        <p className="text-center text-xs text-gray-500 mt-2">
                            Tạo nhóm để thêm sản phẩm
                        </p>
                    </div>
                </div>
            </div>

            {isDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <div className="w-1/3 bg-white p-4 rounded-lg shadow-lg relative">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-md font-semibold text-gray-800">Tạo nhóm</h3>
                            <button
                                onClick={() => setIsDialogOpen(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors bg-white"
                                aria-label="Close dialog"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={(e) => {
                            e.preventDefault();
                            if (groupName.trim()) {
                                setIsDialogOpen(false);
                            }
                        }}>
                            <div className="mb-4">
                                <label
                                    htmlFor="groupName"
                                    className="block text-xs font-medium text-gray-700 mb-2"
                                >
                                    Tên nhóm
                                </label>
                                <div className="relative">
                                    <input
                                        id="groupName"
                                        type="text"
                                        value={groupName}
                                        onChange={(e) => setGroupName(e.target.value)}
                                        maxLength={50}
                                        className="w-full px-2 py-1 border border-gray-300 rounded-md 
                                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                                     focus:border-blue-500 transition-all bg-white text-black"
                                        placeholder="Input"
                                    />
                                    <span className="absolute right-2 top-2 text-xs text-gray-500">
                                        {groupName.length}/50
                                    </span>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsDialogOpen(false)}
                                    className="px-3 py-1 text-xs font-medium text-gray-700 
                                 bg-gray-100 rounded-md hover:bg-gray-200 
                                 focus:outline-none focus:ring-2 focus:ring-gray-500 
                                 transition-colors"
                                >
                                    Hủy
                                </button>
                                <button
                                    type="submit"
                                    disabled={!groupName.trim()}
                                    className="px-3 py-1 text-xs font-medium text-white 
                                 bg-red-500 rounded-md hover:bg-red-600 
                                 focus:outline-none focus:ring-2 focus:ring-red-500 
                                 disabled:opacity-50 disabled:cursor-not-allowed 
                                 transition-colors"
                                >
                                    Tạo
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatSetting;

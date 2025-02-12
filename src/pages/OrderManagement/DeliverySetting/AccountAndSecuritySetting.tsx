import { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import ToggleButton from "./Components/ToggleButton";
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";

const AccountSecuritySetting = () => {
    const [isTableVisible, setIsTableVisible] = useState(false);

    const profileDataMap = [
        {
            fieldName: "Hồ sơ của tôi", data: "name here",
            buttonElement: <button className="border border-gray-300 px-2 py-1 rounded bg-white text-sm">Sửa</button>,
            externalElement: <CgProfile className="text-xl mr-1" />
        },
        {
            fieldName: "Số điện thoại", data: "12421410",
            buttonElement: <button className="border border-gray-300 px-2 py-1 rounded bg-white text-sm">Sửa</button>,
            externalElement: null
        },
        {
            fieldName: "Email", data: "vuasdasdasdsagmail.com",
            buttonElement: <button className="border border-gray-300 px-2 py-1 rounded bg-white text-sm">Sửa</button>,
            externalElement: null
        },
        {
            fieldName: "Mật khẩu đăng nhập", data: "1412412412421",
            buttonElement: <button className="border border-gray-300 px-2 py-1 rounded bg-white text-sm">Cập nhật</button>,
            externalElement: null
        },
        {
            fieldName: "Liên kết tài khoản phụ",
            data: "Không được thiết lập",
            buttonElement: (
                <button
                    onClick={() => setIsTableVisible(!isTableVisible)}
                    className="border border-gray-300 px-2 py-1 rounded bg-white flex items-center text-sm"
                >
                    {isTableVisible ? (
                        <>
                            Đóng <IoIosArrowUp className="ml-1" />
                        </>
                    ) : (
                        <>
                            Xem <IoIosArrowDown className="ml-1" />
                        </>
                    )}
                </button>
            ),
            externalElement: null
        },
    ];

    return (
        <>
            <div className="p-4 bg-white shadow rounded text-black">
                <h2 className="text-lg font-semibold mb-2">Thông Tin Tài Khoản</h2>
                <div className="space-y-2">
                    {profileDataMap.map((profileData, index) => (
                        <div key={index} className="flex items-center justify-between border-b pb-1">
                            <div className="flex items-center space-x-2 flex-grow">
                                <div className="w-1/3">
                                    <p className="text-sm font-medium">{profileData.fieldName}</p>
                                </div>
                                <div className="flex items-center flex-grow">
                                    {profileData.externalElement}
                                    <span className="ml-1 text-sm">{profileData.data}</span>
                                </div>
                            </div>

                            <div className="flex items-center">
                                {profileData.buttonElement}
                            </div>
                        </div>
                    ))}
                </div>

                {isTableVisible && (
                    <>
                        <div className="grid grid-cols-5 gap-2 items-center text-gray-700 border-b py-1 bg-gray-100 text-xs rounded">
                            <div className="col-span-1 flex justify-start pl-2">Tên tài khoản</div>
                            <div className="col-span-1 flex justify-center">Vùng</div>
                            <div className="col-span-1 flex justify-center">Ngày yêu cầu</div>
                            <div className="col-span-2 flex justify-center">Hoạt động</div>
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
                                <p className="text-center text-xs text-gray-500 mt-1">
                                    Hãy liên kết tài khoản chính với Shop của bạn 
                                    và bạn có thể thiết lập các vai trò khác nhau cho nhân viên của mình để hỗ trợ vận hành Shop. 
                                </p>
                                <a href="#" className="text-blue-500 font-medium mt-1 text-xs">Liên kết tài khoản</a>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div className="mt-4 p-4 bg-white shadow rounded text-black space-y-2">
                <h2 className="text-lg font-semibold mb-2">Bảo Vệ Tài Khoản</h2>
                <h3 className="text-base font-medium">Yêu cầu/hành động có tính rủi ro cao</h3>
                <div className="border border-yellow-500 bg-yellow-200 p-2 rounded-md mt-1 text-xs">
                    <p>
                        Shop chưa được liên kết với bất kỳ Tài khoản chính nào nên không thể nhận thông báo về các hành động có nguy cơ gây rủi ro cao. Vui lòng liên kết Shop với Tài khoản chính trước.
                    </p>
                </div>
                <p className="mt-2 text-sm">Bảo vệ khỏi các hành động có nguy cơ rủi ro cao</p>
                <p className="text-gray-500 text-xs">Tăng cường bảo mật cho tài khoản trước các hành động/thay đổi có tính rủi ro cao</p>

                {/* First Table */}
                <div className="grid grid-cols-8 gap-2 items-center text-gray-700 border-b py-1 bg-gray-100 text-xs rounded">
                    <div className="col-span-4 flex justify-start pl-2">Nhóm rủi ro</div>
                    <div className="col-span-2 flex justify-center">Cần phê duyệt</div>
                    <div className="col-span-2 flex justify-center">Thông báo đến tất cả Người kiểm tra</div>
                </div>

                <div className="grid grid-cols-8 gap-2 items-center text-gray-700 border-b py-1 text-xs rounded">
                    <div className="col-span-4 flex justify-start pl-2">Thêm/Chỉnh sửa Tài khoản ngân hàng</div>
                    <label className="col-span-2 flex justify-center items-center cursor-pointer">
                        <ToggleButton />
                    </label>
                    <label className="col-span-2 flex justify-center items-center cursor-pointer">
                        <ToggleButton />
                    </label>
                </div>

                {/* Second Table */}
                <div className="grid grid-cols-6 gap-2 items-center text-gray-700 border-b py-1 bg-gray-100 text-base rounded">
                    <div className="col-span-1 flex justify-center">Mã yêu cầu</div>
                    <div className="col-span-2 flex justify-start pl-2">Nhóm rủi ro</div>
                    <div className="col-span-1 flex justify-center">Thời gian yêu cầu</div>
                    <div className="col-span-1 flex justify-center">Người phê duyệt</div>
                    <div className="col-span-1 flex justify-center">Trạng thái</div>
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
                        <p className="text-center text-xs text-gray-500 mt-1">
                            Không có dữ liệu
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountSecuritySetting;
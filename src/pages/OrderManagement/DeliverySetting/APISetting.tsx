import { useState, useEffect, useRef } from "react";

const APISetting = () => {
    const [activeTab, setActiveTab] = useState("Đang sử dụng");
    const [inkBarStyle, setInkBarStyle] = useState({ left: 0, width: 0 });
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const activeIndex = tabs.indexOf(activeTab);
        const activeButton = tabRefs.current[activeIndex];

        if (activeButton) {
            const { offsetLeft, offsetWidth } = activeButton;
            setInkBarStyle({ left: offsetLeft, width: offsetWidth });
        }
    }, [activeTab]);

    const tabs = [
        "Đang sử dụng",
        "Frozen",
        "Hết hạn",
        "Bỏ liên kết"
    ];

    const description = [
        "Đây là những đối tác mà Shop bạn đã cho phép liên kết",
        "Here are the valid partners you have authorized, but the permissions for shop authorization and api calls have been suspended.",
        "Vui lòng liên hệ với những đối tác mà Shop bạn muốn gia hạn thời gian liên kết.",
        "Vui lòng liên hệ những đối tác mà Shop bạn muốn liên kết lại",
    ]

    return (
        <div className="bg-white p-3 space-y-3">
            <div className="relative">
                {/* Tab Buttons */}
                <div className="flex border-b pb-2 relative">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            ref={(el) => (tabRefs.current[index] = el)}
                            // Remove all outlines, rings, and borders of all states (hovering, selected, ...etc..)
                            className={`relative px-4 py-2 transition-colors duration-300 
                            ${activeTab === tab ? "text-orange-600 font-semibold bg-white" : "text-black bg-white"}
                            outline-none border-none ring-0 focus:outline-none focus:ring-0 focus:border-none 
                            hover:text-orange-700 hover:outline-none hover:border-none active:outline-none active:ring-0 active:border-none`}
                            onClick={() => {
                                setActiveTab(tab);
                            }}
                        >
                            {tab}
                        </button>
                    ))}

                    {/* Ink Bar */}
                    <div
                        className="absolute bottom-0 h-1 bg-orange-500 transition-all duration-300 rounded-full"
                        style={{
                            left: `${inkBarStyle.left}px`,
                            width: `${inkBarStyle.width}px`,
                        }}
                    />
                </div>
            </div>

            <div className="bg-white space-y-2">
                <p className="text-gray-600">{description[tabs.indexOf(activeTab)]}</p>
                <div className="grid grid-cols-4 gap-7 items-center text-gray-700 border-b py-2 bg-gray-100 text-sm rounded">
                    {activeTab === "Đang sử dụng" && (
                        <>
                            <div className="col-span-1 flex justify-start pl-2">Ứng dụng</div>
                            <div className="col-span-1 flex justify-start">Developer Name</div>
                            <div className="col-span-1 flex justify-end">Ngày hết hạn</div>
                            <div className="col-span-1 flex justify-center">Hoạt động</div>
                        </>
                    )}
                    {activeTab === "Frozen" && (
                        <>
                            <div className="col-span-1 flex justify-start pl-2">Ứng dụng</div>
                            <div className="col-span-1 flex justify-start">Developer Name</div>
                            <div className="col-span-1 flex justify-end">Ngày hết hạn</div>
                            <div className="col-span-1 flex justify-center">Hoạt động</div>
                        </>
                    )}
                    {activeTab === "Hết hạn" && (
                        <>
                            <div className="col-span-1 flex justify-start pl-2">Ứng dụng</div>
                            <div className="col-span-1 flex justify-start">Developer Name</div>
                            <div className="col-span-1 flex justify-end">Ngày hết hạn</div>
                        </>
                    )}
                    {activeTab === "Bỏ liên kết" && (
                        <>
                            <div className="col-span-1 flex justify-start pl-2">Ứng dụng</div>
                            <div className="col-span-1 flex justify-start">Developer Name</div>
                            <div className="col-span-2 flex justify-center">Ngày ngưng liên kết</div>
                        </>
                    )}
                </div>

                <div className="flex justify-center items-center h-full">
                    <div className="flex flex-col items-center justify-center mt-6 text-gray-500">
                        <svg
                            viewBox="0 0 97 96"
                            className="w-20 h-20 text-gray-300"
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
                        <p className="text-center text-sm text-gray-500 mt-2">
                            Không có dữ liệu
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default APISetting;

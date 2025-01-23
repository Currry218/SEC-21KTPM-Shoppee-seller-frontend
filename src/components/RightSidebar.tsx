import { useState } from "react";
import { BiSupport } from "react-icons/bi";
import { BellIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/20/solid";

const RightSidebar = () => {
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

    const handleMouseEnter = (icon: string) => {
        setHoveredIcon(icon);
    };

    const handleMouseLeave = () => {
        setHoveredIcon(null);
    };

    return (
        <aside className="pt-4 bg-white border-l border-gray-300 flex flex-col items-center relative">
            {/* Icon: Chuông thông báo */}
            <div
                className={`w-12 h-12 mb-4 flex items-center justify-center cursor-pointer relative ${hoveredIcon === "notification" ? "bg-gray-200" : "bg-white"
                    }`}
                onMouseEnter={() => handleMouseEnter("notification")}
                onMouseLeave={handleMouseLeave}
            >
                <BellIcon className="h-6 w-6 text-orange-600" />
                {hoveredIcon === "notification" && (
                    <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-800 text-xs shadow-lg rounded-lg p-3 border border-gray-300 w-auto max-w-[12rem] whitespace-nowrap">
                    <div className="flex items-center">
                            <span className="ml-2">Thông báo</span>
                        </div>
                        <div className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-transparent border-t-gray-300 rotate-[-90deg]">
                        </div>
                    </div>
                )}

            </div>

            {/* Icon: Chat với Shopii */}
            <div
                className={`w-12 h-12 mb-4 flex items-center justify-center cursor-pointer relative ${hoveredIcon === "chatWithShopii" ? "bg-gray-200" : "bg-white"
                    }`}
                onMouseEnter={() => handleMouseEnter("chatWithShopii")}
                onMouseLeave={handleMouseLeave}
            >
                <BiSupport className="h-6 w-6 text-orange-600" />
                {hoveredIcon === "chatWithShopii" && (
                    <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-800 text-xs shadow-lg rounded-lg p-3 border border-gray-300 w-auto max-w-[12rem] whitespace-nowrap">
                    <div className="flex items-center">
                            <span className="ml-2">Chat với Shopii</span>
                        </div>
                        <div className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-transparent border-t-gray-300 rotate-[-90deg]">
                        </div>
                    </div>
                )}

            </div>

            {/* Icon: Chuông thông báo */}
            <div
                className={`w-12 h-12 mb-4 flex items-center justify-center cursor-pointer relative ${hoveredIcon === "chat" ? "bg-gray-200" : "bg-white"
                    }`}
                onMouseEnter={() => handleMouseEnter("chat")}
                onMouseLeave={handleMouseLeave}
            >
                <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-orange-600" />
                {hoveredIcon === "chat" && (
                    <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-800 text-xs shadow-lg rounded-lg p-3 border border-gray-300 w-auto max-w-[12rem] whitespace-nowrap">
                    <div className="flex items-center">
                            <span className="ml-2">Chat</span>
                        </div>
                        <div className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-transparent border-t-gray-300 rotate-[-90deg]">
                        </div>
                    </div>
                )}

            </div>

            
        </aside>
    );
};

export default RightSidebar;

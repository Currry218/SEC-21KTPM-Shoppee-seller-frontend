import { useState, useEffect, useRef } from "react";
import DeliveryOptions from "./SubTabs/DeliveryOptions";
import DeliveryBill from "./SubTabs/DeliveryBill";
import Address from "./SubTabs/Address";

const DeliverySetting = () => {
    const [activeTab, setActiveTab] = useState("Đơn vị vận chuyển");
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
        "Địa Chỉ",
        "Đơn vị vận chuyển",
        "Chứng từ vận chuyển",
    ];

    return (
        <div className="bg-white p-3 space-y-2">
            <div className="relative">
                {/* Tab Buttons */}
                <div className="flex border-b pb-1 relative">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            ref={(el) => (tabRefs.current[index] = el)}
                            // Remove all outlines, rings, and borders of all states (hovering, selected, ...etc..)
                            className={`relative px-2 py-1 text-sm transition-colors duration-300 
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
                        className="absolute bottom-0 h-0.5 bg-orange-500 transition-all duration-300 rounded-full"
                        style={{
                            left: `${inkBarStyle.left}px`,
                            width: `${inkBarStyle.width}px`,
                        }}
                    />
                </div>
            </div>

            {activeTab === "Địa Chỉ" && <Address />}
            {activeTab === "Đơn vị vận chuyển" && <DeliveryOptions />}
            {activeTab === "Chứng từ vận chuyển" && <DeliveryBill />}
        </div>
    );
};

export default DeliverySetting;

import { useState, useEffect, useRef } from "react";
import SearchForm from "./Components/SearchForm";
import FilterButton from "./Components/FilterButton";
import OrderDataTable from './Components/OrderDataTable'
import DropdownWithContent from "./Components/DropdownWithContent";

const CancelOrder = () => {
  const [activeTab, setActiveTab] = useState("Tất cả");
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
    "Tất cả",
    "Đang xem xét",
    "Đã hoàn tiền cho Người mua",
  ];

  const filters = [
    "Tất cả",
    "Hết hạn sau 1 ngày",
    "Hết hạn sau 2 ngày",
  ];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const tabActionsMap: { [key: string]: string[] } = {
    "Tất cả": ["Thương lượng với người mua", "Giữ lại kiện hàng"],
    "Đang xem xét": ["Thương lượng với người mua"],
    "Đã hoàn tiền cho Người mua": ["Giữ lại kiện hàng"],
  };
  const [activeAction, setActiveAction] = useState(tabActionsMap["Tất cả"][0]);

  return (
    <div className="">
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
                setActiveAction(tabActionsMap[tab][0]);
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

      <div className="mt-4 flex space-x-2 items-center flex-wrap">
        <span className="text-black">Ưu tiên</span>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`border px-3 py-1 rounded-full bg-white text-black text-sm focus:outline-none ${filter === activeFilter
              ? "border-orange-500 text-orange-500"
              : "border-gray-300"
              } hover:bg-gray-200 hover:border-gray-300`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-4 flex space-x-2 items-center flex-wrap">
        <span className="font-bold text-black">HÀNH ĐỘNG QUAN TRỌNG</span>
        {tabActionsMap[activeTab].map((action) => (
          <button
            key={action}
            className={`border px-3 py-1 rounded-full bg-white text-black text-sm focus:outline-none ${action === activeAction
              ? "border-orange-500 text-orange-500"
              : "border-gray-300"
              } hover:bg-gray-200 hover:border-gray-300`}
            onClick={() => setActiveAction(action)}
          >
            {action}
          </button>
        ))}
      </div>

      <SearchForm />

      {/* Fixed Header */}
      <div className="flex justify-between items-center pb-2 mb-4 mt-2">
        <h2 className="text-lg text-black text-lg font-bold">0 Yêu cầu</h2>
        <div className="flex space-x-2">
          {/* Filter */}
          <FilterButton />

          {/* Export */}
          <button
            className="border bg-white px-3 py-1 text-sm text-black border-gray-300"
            onClick={() => alert("Temporary action, will change later")}
          >
            Xuất
          </button>

          {/* Dropdown */}
          <DropdownWithContent />
        </div>
      </div>

      <OrderDataTable />
    </div>
  );
};

export default CancelOrder;

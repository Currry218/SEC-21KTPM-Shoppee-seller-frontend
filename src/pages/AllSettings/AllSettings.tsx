import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotificationSetting from "./NotificationSetting";

const AllSettings = () => {

  const { tab: currentTab = "account" } = useParams<{ tab: string }>(); // Lấy giá trị `tab` từ URL
  const navigate = useNavigate();

  const [inkBarStyle, setInkBarStyle] = useState({ width: 0, left: 0 }); // Vị trí và kích thước ink bar
  const tabRefs = useRef<HTMLButtonElement[]>([]); // Tham chiếu đến các tab

  // Danh sách các tab
  const tabs = [
    { key: "account", label: "Tài Khoản & Bảo Mật" },
    { key: "shipping", label: "Cài đặt Vận Chuyển" },
    { key: "payment", label: "Cài đặt Thanh Toán" },
    { key: "chat", label: "Cài đặt Chat" },
    { key: "notification", label: "Cài đặt Thông Báo" },
    { key: "temporary-mode", label: "Chế độ Tạm Nghỉ" },
    { key: "partner-management", label: "Nền Tảng Đối Tác (Kết Nối API)" },
  ];
  

  // Cập nhật vị trí và kích thước của ink bar
  useEffect(() => {
    const activeTab = tabRefs.current.find(
      (tab) => tab.getAttribute("data-key") === currentTab
    );

    if (activeTab) {
      const { offsetWidth, offsetLeft } = activeTab;
      setInkBarStyle({ width: offsetWidth, left: offsetLeft });
    }
  }, [currentTab]);

  // Hàm xử lý chuyển tab
  const handleTabChange = (tab: string) => {
    navigate(`/portal/all-settings/${tab}`); // Chuyển đổi URL
  };

  return (
    <div className="p-2 pt-4">
      {/* Tabs với nút ở bên phải */}
      <div className="relative mb-4 flex items-center justify-between">
        {/* Tabs */}
        <div className="flex">
          {tabs.map((tab, index) => (
            <button
              key={tab.key}
              ref={(el) => (tabRefs.current[index] = el!)} // Lưu tham chiếu vào mảng
              data-key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`px-3.5 py-2 relative bg-gray-100 ${currentTab === tab.key
                ? "font-bold text-orange-500"
                : "font-normal text-black hover:text-orange-500"
                }`}
              style={{
                outline: "none", // Loại bỏ viền đen khi chọn
                border: "none", // Loại bỏ viền mặc định
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Ink Bar */}
        <div
          className="absolute bottom-0 h-[3px] bg-orange-500 transition-all duration-300"
          style={{
            width: `${inkBarStyle.width - 20}px`,
            left: `${inkBarStyle.left + 10}px`,
          }}
        />
      </div>



      {/* Nội dung tab */}
      <div className="m-3 bg-white p-4 rounded shadow">
        {currentTab === "notification" && <NotificationSetting />}
        
      </div>
    </div>
  );
}
export default AllSettings;
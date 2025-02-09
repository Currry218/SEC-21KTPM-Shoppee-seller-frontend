import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import OrderInteractionAll from "./All";
import { CiVolumeHigh } from "react-icons/ci";
import CancelOrder from "./CancelOrder";
import RefundOrder from "./RefundOrder";
import DeliveryFailed from "./DeliveryFailed";

const OrderDelivery = () => {
  const { tab: currentTab = "" } = useParams<{ tab: string }>(); // Lấy giá trị `tab` từ URL
  const navigate = useNavigate();

  const [inkBarStyle, setInkBarStyle] = useState({ width: 0, left: 0 }); // Vị trí và kích thước ink bar
  const tabRefs = useRef<HTMLButtonElement[]>([]); // Tham chiếu đến các tab

  // Danh sách các tab
  const tabs = [
    { key: "", label: "Tất cả" },
    { key: "Refund", label: "Đơn Trả hàng Hoàn tiền" },
    { key: "Cancel", label: "Đơn Hủy" },
    { key: "DeliveryFailed", label: "Đơn Giao hàng không thành công" },
  ];

  const tabKeyMap = [
    { key: "", link: ["accounthealth"], label: ["Tỉ lệ đơn hàng không thành công"]},
    { key: "Refund", link: ["courseDetail", "accounthealth"], label: ["Quy trình trả/hoàn tiền", "Tỷ lệ trả/hoàn tiền"]},
    { key: "Cancel", link: ["accounthealth"], label: ["Tỷ lệ hủy đơn"]},
    { key: "DeliveryFailed", link: ["courseDetail"], label: ["Quy trình trả/hoàn tiền"]},
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
    navigate(`/portal/sale/ReturnRefundCancel/${tab}`); // Chuyển đổi URL
  };

  return (
    <>
      <div className="bg-gray-100 p-3">
        <div className="flex items-center gap-2 text-black px-3 py-3 bg-white rounded-lg">
          <CiVolumeHigh className="text-blue-800" />
          <h3>Thông báo</h3>
          <div className="border-l-2 border-gray-300 h-6 mx-2"></div> {/* Separator */}
          <p className="text-base">
            hello world
          </p>
        </div>
      </div>

      <div className="p-2">
        {/* Tabs với nút ở bên phải */}
        <div className="relative mb-4 flex items-center justify-between">
          {/* Tabs */}
          <div className="flex w-2/3">
            {tabs.map((tab, index) => (
              <button
                key={tab.key}
                ref={(el) => (tabRefs.current[index] = el!)} // Lưu tham chiếu vào mảng
                data-key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`px-4 py-2 relative bg-gray-100 ${currentTab === tab.key
                  ? "font-bold text-orange-500"
                  : "text-black font-normal hover:text-orange-500"
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
          {/* New Div */}
            <div className="flex w-1/3 justify-end mr-3">
            {tabKeyMap
              .find((tab) => tab.key === currentTab)
              ?.link.map((link, index) => (
              <button
                key={link}
                className="ml-4 text-blue-500 hover:underline bg-gray-100 text-blue-500 font-semibold
                outline-none border-none ring-0 focus:outline-none focus:ring-0 focus:border-none 
                hover:outline-none hover:border-none active:outline-none active:ring-0 active:border-none"
                onClick={() => alert("Redirect to " + link)}
              >
                {tabKeyMap
                .find((tab) => tab.key === currentTab)
                ?.label[index]}
              </button>
              ))}
            </div>
        </div>
        {/* Nội dung tab */}
        <div className="m-3 bg-white p-4 rounded shadow">
          {/* {currentTab === "PickUpGood" && <PickupTable />}
          {currentTab === "CollectGood" && <CollectTable />} */}
          {currentTab === "" && <OrderInteractionAll />} {/* DEFAULT */}
          {currentTab === "Cancel" && <CancelOrder />}
          {currentTab === "Refund" && <RefundOrder />}
          {currentTab === "DeliveryFailed" && <DeliveryFailed />}
        </div>
      </div>
    </>
  );
}
export default OrderDelivery;
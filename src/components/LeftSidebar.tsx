import { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className="w-48 bg-white shadow-md border-r border-gray-200">

      {/* Danh sách nhóm menu */}
      <ul className="mt-4">
        {/* Nhóm menu: Quản lý đơn hàng */}
        <li>
          <div
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer"
            onClick={() => toggleMenu("orderManagement")}
          >
            <div className="flex items-center">
              <span className="text-gray-400 font-bold text-sm">Quản lý đơn hàng</span>
            </div>
            {openMenu === "orderManagement" ? (
              <ChevronDownIcon className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronRightIcon className="h-5 w-5 text-gray-600" />
            )}
          </div>
          {/* Menu con */}
          {openMenu === "orderManagement" && (
            <ul className="pl-8">
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">
                <Link to="/portal/sale/order">Tất cả</Link>
              </li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">
                <Link to="/portal/sale/bulkShipping/ShippingInfo">Giao hàng loạt</Link>
              </li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">
                <Link to="/portal/sale/OrderDelivery/PickUpGood">Bàn giao đơn hàng</Link>
              </li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">
                <Link to="/portal/sale/ReturnRefundCancel/">Đơn Trả hàng/ Hoàn tiền hoặc Đơn hủy</Link>
              </li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">
                <Link to="/portal/sale/DeliverySetting/">Cài đặt vận chuyển</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Nhóm menu: Quản lý sản phẩm */}
        <li>
          <div
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer"
            onClick={() => toggleMenu("productManagement")}
          >
            <div className="flex items-center">
              <span className="text-gray-400 font-bold text-sm">Quản lý sản phẩm</span>
            </div>
            {openMenu === "productManagement" ? (
              <ChevronDownIcon className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronRightIcon className="h-5 w-5 text-gray-600" />
            )}
          </div>
          {/* Menu con */}
          {openMenu === "productManagement" && (
            <ul className="pl-8">
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">
                <Link to="/portal/product/list">Tất cả sản phẩm</Link>
              </li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">
                <Link to="/portal/product/new">Thêm sản phẩm</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Nhóm menu: Kênh Marketing */}
        <li>
          <div
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer"
            onClick={() => toggleMenu("marketingChannel")}
          >
            <div className="flex items-center">
              <span className="text-gray-400 font-bold text-sm">Kênh Marketing</span>
            </div>
            {openMenu === "marketingChannel" ? (
              <ChevronDownIcon className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronRightIcon className="h-5 w-5 text-gray-600" />
            )}
          </div>
          {/* Menu con */}
          {openMenu === "marketingChannel" && (
            <ul className="pl-8">
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">Kênh Marketing</li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">Đấu giá rẻ vô địch</li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">Quảng cáo Shopee</li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">Tăng đơn cùng KOL</li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">Live & Video</li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">Khuyến mãi của Shop</li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">Flash Sale của Shop</li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">Mã giảm giá của Shop</li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">Chương trình Shopee</li>
            </ul>
          )}
        </li>

        {/* Nhóm menu: Chăm sóc khách hàng */}
        <li>
          <div
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer"
            onClick={() => toggleMenu("customerCare")}
          >
            <div className="flex items-center">
              <span className="text-gray-400 font-bold text-sm">Chăm sóc khách hàng</span>
            </div>
            {openMenu === "customerCare" ? (
              <ChevronDownIcon className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronRightIcon className="h-5 w-5 text-gray-600" />
            )}
          </div>
          {/* Menu con */}
          {openMenu === "customerCare" && (
            <ul className="pl-8">
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">Quản lý Chat</li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">Quản lý đánh giá</li>
            </ul>
          )}
        </li>

        {/* Nhóm menu: Tài chính */}
        <li>
          <div
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer"
            onClick={() => toggleMenu("finance")}
          >
            <div className="flex items-center">
              <span className="text-gray-400 font-bold text-sm">Tài chính</span>
            </div>
            {openMenu === "finance" ? (
              <ChevronDownIcon className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronRightIcon className="h-5 w-5 text-gray-600" />
            )}
          </div>
          {/* Menu con */}
          {openMenu === "finance" && (
            <ul className="pl-8">
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">
                <Link to="/portal/finance/revenue">Doanh thu</Link>
              </li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">
                <Link to="/portal/finance/balance">Số dư TK Shopii</Link>
              </li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">
                <Link to="/portal/finance/cards">Tài Khoản Ngân Hàng</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Nhóm menu: Dữ liệu */}
        <li>
          <div
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer"
            onClick={() => toggleMenu("data")}
          >
            <div className="flex items-center">
              <span className="text-gray-400 font-bold text-sm">Dữ liệu</span>
            </div>
            {openMenu === "data" ? (
              <ChevronDownIcon className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronRightIcon className="h-5 w-5 text-gray-600" />
            )}
          </div>
          {/* Menu con */}
          {openMenu === "data" && (
            <ul className="pl-8">
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">Phân tích bán hàng</li>
              <li className="py-2 text-gray-800 text-sm hover:text-orange-600 cursor-pointer">Hiệu quả hoạt động</li>
            </ul>
          )}
        </li>
        {/* Nhóm menu: Quản lý Shop */}
        <li>
          <div
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer"
            onClick={() => toggleMenu("shopManagement")}
          >
            <div className="flex items-center">
              <span className="text-gray-400 font-bold text-sm">Quản lý Shop</span>
            </div>
            {openMenu === "shopManagement" ? (
              <ChevronDownIcon className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronRightIcon className="h-5 w-5 text-gray-600" />
            )}
          </div>
          {/* Menu con */}
          {openMenu === "shopManagement" && (
            <ul className="pl-8">
              <li className="py-2">
                <Link to="/portal/settings/shop/profile/"
                  className="text-sm text-gray-600 hover:text-orange-600 cursor-pointer">
                  Hồ sơ Shop
                </Link>
              </li>
              <li className="py-2">
                <Link to="/portal/decoration/"
                  className="text-sm text-gray-600 hover:text-orange-600 cursor-pointer">
                  Trang trí Shop
                </Link>
              </li>
              <li className="py-2">
                <Link to="/portal/all-settings/notification/" className="text-sm text-gray-600 hover:text-orange-600 cursor-pointer">
                  Thiết lập Shop
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
};

export default LeftSidebar;

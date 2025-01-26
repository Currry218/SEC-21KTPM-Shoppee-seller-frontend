import React, { useState } from 'react';

const AllOrderManagement = () => {
  const [activeTab, setActiveTab] = useState('Tất cả');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedShipper, setSelectedShipper] = useState('Tất cả các đơn vị');
  const [selectedOrderOption, setSelectedOrderOption] = useState('Mã đơn hàng');

  const tabs = [
    'Tất cả',
    'Chờ xác nhận',
    'Chờ lấy hàng',
    'Đang giao',
    'Đã giao',
    'Trả hàng/Hoàn tiền/Hủy'
  ];

  const orderOptions = [
    'Mã đơn hàng',
    'Tên người mua',
    'Sản phẩm',
    'Mã vận đơn',
    'Mã yêu cầu trả hàng',
    'Mã vận đơn cho yêu cầu trả hàng'
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleShipperChange = (e) => {
    setSelectedShipper(e.target.value);
  };

  const handleOrderOptionChange = (e) => {
    setSelectedOrderOption(e.target.value);
  };

  // Placeholder data for orders
  const orders = [
    // Same order data as before
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesTab = activeTab === 'Tất cả' || order.status === activeTab;
    const matchesSearch = order.id.includes(searchTerm) || order.customer.includes(searchTerm) || order.product.includes(searchTerm);
    const matchesShipper = selectedShipper === 'Tất cả các đơn vị' || order.shipper === selectedShipper;
    return matchesTab && matchesSearch && matchesShipper;
  });

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`py-3 px-6 cursor-pointer ${
              activeTab === tab ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex items-center border-r pr-4 mr-4">
            <select
              className="border-gray-300 rounded-md px-4 py-2"
              value={selectedOrderOption}
              onChange={handleOrderOptionChange}
            >
              {orderOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Nhập Tên người mua"
              className="border-gray-300 rounded-md px-4 py-2 flex-1 ml-4"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <select
            className="border-gray-300 rounded-md px-4 py-2"
            value={selectedShipper}
            onChange={handleShipperChange}
          >
            <option>Tất cả các đơn vị</option>
            <option>Giao hàng nhanh</option>
            <option>Viettel Post</option>
            <option>Giao hàng tiết kiệm</option>
          </select>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Mã đơn hàng</th>
              <th className="py-2 px-4 text-left">Khách hàng</th>
              <th className="py-2 px-4 text-left">Sản phẩm</th>
              <th className="py-2 px-4 text-left">Mã vận đơn</th>
              <th className="py-2 px-4 text-left">Mã vận đơn trả hàng</th>
              <th className="py-2 px-4 text-right">Tổng đơn hàng</th>
              <th className="py-2 px-4 text-left">Trạng thái</th>
              <th className="py-2 px-4 text-left">Đơn vị chuyển</th>
              <th className="py-2 px-4 text-right">Hoạt động</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2 px-4">{order.id}</td>
                <td className="py-2 px-4">{order.customer}</td>
                <td className="py-2 px-4">{order.product}</td>
                <td className="py-2 px-4">{order.trackingNumber}</td>
                <td className="py-2 px-4">{order.returnTrackingNumber || '-'}</td>
                <td className="py-2 px-4 text-right">{order.total?.toLocaleString()} VND</td>
                <td className="py-2 px-4">{order.status}</td>
                <td className="py-2 px-4">{order.shipper}</td>
                <td className="py-2 px-4 text-right">Hoạt động</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrderManagement;
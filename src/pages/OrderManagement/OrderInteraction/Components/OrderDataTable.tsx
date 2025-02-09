import React from 'react';

const OrderDataTable: React.FC = () => {
    {/* Table Header */}
    const columns = [
        "Sản phẩm",
        "Số tiền",
        "Lý do",
        "Phương án cho Người mua",
        "Trạng thái",
        "Vận chuyển chiều giao hàng",
        "Vận chuyển hàng hoàn",
        "Thao tác",
    ];
    return (
        <>
            <div className="grid grid-cols-8 gap-4 items-center text-gray-700 border-b py-2 bg-gray-100 text-sm">
                {columns.map((column, index) => (
                    <div key={index} className="col-span-1 flex justify-center">{column}</div>
                ))}
            </div>
        
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
                Không tìm thấy đơn hàng
                </p>
            </div>
        </>
    )
}

export default OrderDataTable;
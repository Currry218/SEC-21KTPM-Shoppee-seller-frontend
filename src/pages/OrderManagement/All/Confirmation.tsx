const Confirmation = () => {
  return (
    <div className="">
      {/* Fixed Header */}
      <div className="flex justify-between items-center pb-2 mb-4 mt-2">
        <h2 className="text-lg text-black text-lg font-bold">0 Đơn hàng</h2>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-6 gap-4 items-center text-gray-700 border-b py-2 bg-gray-100">
        {/* Cột 1 */}
        <div className="col-span-1">Sản phẩm</div>

        {/* Cột 2 */}
        <div className="col-span-1 text-center">Tổng Đơn hàng</div>

        {/* Cột 3 */}
        <div className="col-span-1 text-center">Trạng thái</div>

        {/* Cột 4 */}
        <div className="col-span-1 text-center">Đếm ngược</div>

        {/* Cột 5 */}
        <div className="col-span-1 text-center">Đơn vị vận chuyển</div>

        {/* Cột 6 */}
        <div className="col-span-1 text-center">Thao tác</div>
      </div>


      {/* No Result Section */}
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
        <p className="mt-4 font-medium text-gray-700">Vui lòng tải lại</p>
      </div>
    </div>
  );
};
export default Confirmation;

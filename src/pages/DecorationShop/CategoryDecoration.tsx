import Button
 from "../../components/common/Button";
const CategoryDecoration = () => {
  return (
    <div className="">
      {/* Fixed Header */}
      <div className="flex justify-between items-center pb-2 mb-4 mt-2">
        <h2 className="text-lg text-black text-sm">Danh mục của Shop</h2>
        <Button label="Thêm danh mục" className="eds-button--normal" />
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-5 gap-4 rounded-y text-gray-700 border-b py-2 bg-gray-100">
        <div className="col-span-1">Tên danh mục</div>
        <div className="col-span-1 text-center">Sản phẩm</div>
        <div className="col-span-1 text-center">Bật/Tắt</div>
        <div className="col-span-2 text-center">Thao tác</div>
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
        <p className="mt-4 font-medium text-gray-700">Chưa có danh mục tự chọn</p>
        <p className="text-center text-sm text-gray-500 mt-2">
          Shop của bạn sẽ tự động hiển thị danh mục được tạo bởi hệ thống cho người mua.
          <br />
          Bạn cũng có thể thêm các danh mục được tạo bởi hệ thống hoặc tạo mới danh mục tự chọn.
        </p>
        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="w-5 h-5 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M14.5069172,9.00824711 C14.7523771,9.00824711 14.9565256,9.18512227 14.9988615,9.41837148 L15.0069172,9.50824711 L15.0069172,13.508579 C15.0069172,13.7540389 14.8300421,13.9581874 14.5967928,14.0005234 L14.5069172,14.008579 L1.5,14.008579 C1.25454011,14.008579 1.05039163,13.8317039 1.00805567,13.5984547 L1,13.508579 L1,9.50824711 C1,9.23210474 1.22385763,9.00824711 1.5,9.00824711 C1.74545989,9.00824711 1.94960837,9.18512227 1.99194433,9.41837148 L2,9.50824711 L2,13.008579 L14.0069172,13.008579 L14.0069172,9.50824711 C14.0069172,9.23210474 14.2307748,9.00824711 14.5069172,9.00824711 Z M8,2 C8.2576,2 8.46666667,2.2086 8.46666667,2.46666667 L8.46666667,9.6006 L10.4654,7.2682 C10.6497333,7.0848 10.9479333,7.0848 11.1313333,7.2682 C11.3156667,7.45253333 11.3156667,7.75026667 11.1313333,7.9346 L8.33413333,11.198 L8.31686667,11.2054667 L8.31686667,11.2054667 C8.25701667,11.2611167 8.18299167,11.3010167 8.10030417,11.3192604 L8.01213333,11.3305333 C7.88706667,11.3342667 7.76106667,11.2936667 7.6654,11.198 L4.8682,7.9346 C4.68433333,7.75026667 4.68433333,7.45253333 4.8682,7.2682 C5.05206667,7.0848 5.35026667,7.0848 5.53413333,7.2682 L7.53333333,9.6006 L7.53333333,2.46666667 C7.53333333,2.2086 7.74193333,2 8,2 Z"
            ></path>
          </svg>
          Thêm Danh mục được tạo bởi hệ thống
        </button>
      </div>
    </div>
  );
};

export default CategoryDecoration;

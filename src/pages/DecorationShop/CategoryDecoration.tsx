import OrangeButton from "../../components/common/OrangeButton";
const CategoryDecoration = () => {
  return (
    <div className="">
      {/* Fixed Header */}
      <div className="flex justify-between items-center pb-2 mb-4 mt-2">
        <h2 className="text-xl text-black">Danh mục của Shop</h2>
        <OrangeButton label="Thêm danh mục" className="eds-button--normal" />
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-5 gap-4 rounded-t text-gray-700 border py-2 bg-gray-100">
        <div className="col-span-2 text-center text-sm">Tên danh mục</div>
        <div className="col-span-1 text-center text-sm">Sản phẩm</div>
        <div className="col-span-1 text-center text-sm">Bật/Tắt</div>
        <div className="col-span-1 text-center text-sm">Thao tác</div>
      </div>

      {/* No Result Section */}
      <div className="h-[420px] flex flex-col items-center justify-center text-gray-500 border-b border-r border-l rounded-b p-8">
        <svg viewBox="0 0 97 96" className="w-20 h-20 text-gray-300" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="47.5" cy="87" rx="45" ry="6" fill="#F2F2F2"></ellipse><path fill-rule="evenodd" clip-rule="evenodd" d="M79.5 55.5384V84.1647C79.5 85.1783 78.6453 86 77.5909 86H18.4091C17.3547 86 16.5 85.1783 16.5 84.1647V9.83529C16.5 8.82169 17.3547 8 18.4091 8H77.5909C78.6453 8 79.5 8.82169 79.5 9.83529V43.6505V55.5384Z" fill="white" stroke="#D8D8D8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 27.3136V31.7176C37.5 31.8736 37.3372 32 37.1364 32H25.8636C25.6628 32 25.5 31.8736 25.5 31.7176V20.2824C25.5 20.1264 25.6628 20 25.8636 20H37.1364C37.3372 20 37.5 20.1264 37.5 20.2824V25.4847V27.3136Z" fill="#FAFAFA" stroke="#D8D8D8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43 22C42.7239 22 42.5 22.2239 42.5 22.5C42.5 22.7761 42.7239 23 43 23H71C71.2761 23 71.5 22.7761 71.5 22.5C71.5 22.2239 71.2761 22 71 22H43ZM43 29C42.7239 29 42.5 29.2239 42.5 29.5C42.5 29.7761 42.7239 30 43 30H71C71.2761 30 71.5 29.7761 71.5 29.5C71.5 29.2239 71.2761 29 71 29H43Z" fill="#D8D8D8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 47.3136V51.7176C37.5 51.8736 37.3372 52 37.1364 52H25.8636C25.6628 52 25.5 51.8736 25.5 51.7176V40.2824C25.5 40.1264 25.6628 40 25.8636 40H37.1364C37.3372 40 37.5 40.1264 37.5 40.2824V45.4847V47.3136Z" fill="#FAFAFA" stroke="#D8D8D8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43 42C42.7239 42 42.5 42.2239 42.5 42.5C42.5 42.7761 42.7239 43 43 43H71C71.2761 43 71.5 42.7761 71.5 42.5C71.5 42.2239 71.2761 42 71 42H43ZM43 49C42.7239 49 42.5 49.2239 42.5 49.5C42.5 49.7761 42.7239 50 43 50H71C71.2761 50 71.5 49.7761 71.5 49.5C71.5 49.2239 71.2761 49 71 49H43Z" fill="#D8D8D8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 67.3136V71.7176C37.5 71.8736 37.3372 72 37.1364 72H25.8636C25.6628 72 25.5 71.8736 25.5 71.7176V60.2824C25.5 60.1264 25.6628 60 25.8636 60H37.1364C37.3372 60 37.5 60.1264 37.5 60.2824V65.4847V67.3136Z" fill="#FAFAFA" stroke="#D8D8D8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43 62C42.7239 62 42.5 62.2239 42.5 62.5C42.5 62.7761 42.7239 63 43 63H71C71.2761 63 71.5 62.7761 71.5 62.5C71.5 62.2239 71.2761 62 71 62H43ZM43 69C42.7239 69 42.5 69.2239 42.5 69.5C42.5 69.7761 42.7239 70 43 70H71C71.2761 70 71.5 69.7761 71.5 69.5C71.5 69.2239 71.2761 69 71 69H43Z" fill="#D8D8D8"></path><circle opacity="0.5" cx="93.5" cy="13" r="3" fill="#D8D8D8"></circle><circle opacity="0.3" cx="85.5" cy="9" r="2" fill="#D8D8D8"></circle><path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M92 1C91.1716 1 90.5 1.67157 90.5 2.5C90.5 3.32843 91.1716 4 92 4C92.8284 4 93.5 3.32843 93.5 2.5C93.5 1.67157 92.8284 1 92 1ZM92 0C93.3807 0 94.5 1.11929 94.5 2.5C94.5 3.88071 93.3807 5 92 5C90.6193 5 89.5 3.88071 89.5 2.5C89.5 1.11929 90.6193 0 92 0Z" fill="#D8D8D8"></path></svg>
        <p className="mt-4 font-bold text-sm text-gray-700">Chưa có danh mục tự chọn</p>
        <p className="text-center text-sm text-gray-500 mt-2 mx-[23%]">
          Shop của bạn sẽ tự động hiển thị danh mục được tạo bởi hệ thống cho người mua. Bạn cũng có thể thêm các danh mục được tạo bởi hệ thống hoặc tạo mới danh mục tự chọn.
        </p>
        <button className="hover:border-orange-500 border border-orange-500 mt-4 bg-white text-sm text-orange-600 px-4 py-2 rounded hover:bg-gray-200 flex items-center"
        style={{outline: "none"}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="w-5 h-5 mr-2 fill-orange-500"
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

import OrangeButton from "../../../components/common/OrangeButton";

const Goods = () => {
  return (
    <div className="">
      {/* Fixed Header */}
      <div className="flex justify-between items-center pb-2 mb-4 mt-2">
        <h2 className="text-lg text-black font-bold">0 Kiện hàng</h2>
        <div className="flex items-center space-x-4">
          <select className="border border-gray-300 px-4 py-2 bg-white text-black">
            <option value="orderConfirmDateAsc">Ngày xác nhận đặt đơn (Xa - Gần nhất)</option>
            <option value="orderConfirmDateDesc">Ngày xác nhận đặt đơn (Gần - Xa nhất)</option>
            <option value="shippingDeadlineAsc">Hạn gửi hàng (Xa - Gần nhất)</option>
            <option value="shippingDeadlineDesc">Hạn gửi hàng (Gần - Xa nhất)</option>
            <option value="orderCreateDateAsc">Ngày tạo đơn (Xa - Gần nhất)</option>
            <option value="orderCreateDateDesc">Ngày tạo đơn (Gần - Xa nhất)</option>
          </select>
          <OrangeButton
            className="eds-button--normal"
            label={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path d="M2.15932916,6.17321692 L6.16305178,2.20272941 C6.35912605,2.00828278 6.67570579,2.00960222 6.87015242,2.20567649 C7.04299388,2.37996472 7.04299388,2.71632957 6.87015242,2.91277713 L3.7256636,6.02824077 L14.4962586,6.02824077 C14.772401,6.02824077 14.9962586,6.2520984 14.9962586,6.52824077 C14.9962586,6.77370066 14.7768555,7.02824077 14.5175476,7.02824077 L2.51140595,7.02824077 C2.09471192,7.02824077 1.81887817,6.55234779 2.15932916,6.17321692 L6.16305178,2.20272941 L2.15932916,6.17321692 Z M14.8431245,9.88326463 L10.8394019,13.8537521 C10.6433277,14.0481988 10.3267479,14.0468793 10.1323013,13.8508051 C9.95945982,13.6765168 9.95945982,13.340152 10.1323013,13.1437044 L13.2767901,10.0282408 L2.50619508,10.0282408 C2.23005271,10.0282408 2.00619508,9.80438315 2.00619508,9.52824077 C2.00619508,9.28278089 2.22559823,9.02824077 2.48490609,9.02824077 L14.4910478,9.02824077 C14.9077418,9.02824077 15.1835755,9.50413375 14.8431245,9.88326463 L10.8394019,13.8537521 L14.8431245,9.88326463 Z"></path>
                </svg>
                <span>Giao hàng loạt</span>
              </>
            }
          />
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-6 gap-4 items-center text-gray-700 border-b py-2 bg-gray-100">
        {/* Cột 1 */}
        <div className="col-span-1">Sản phẩm</div>

        {/* Cột 2 */}
        <div className="col-span-1 text-center">Tổng cộng</div>

        {/* Cột 3 */}
        <div className="col-span-1 text-center">Trạng thái</div>

        {/* Cột 4 */}
        <div className="col-span-1 text-center">
          Đếm ngược
          {/* Biểu tượng SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="inline-block w-4 h-4 ml-2 text-gray-600"
          >
            <path d="M32 16a16 16 0 1 0-16 16 16 16 0 0 0 16-16zm-2 0A14 14 0 1 1 16 2a14 14 0 0 1 14 14zm-19.44-3.88a5.51 5.51 0 0 1 1.68-3.74A5.33 5.33 0 0 1 16 7a5.6 5.6 0 0 1 3.92 1.36 4.47 4.47 0 0 1 1.49 3.46 4.81 4.81 0 0 1-.51 2.2 8 8 0 0 1-1.9 2.24 6.82 6.82 0 0 0-1.74 2 6.57 6.57 0 0 0-.32 2.43h-2a8.15 8.15 0 0 1 .49-3.29 7.41 7.41 0 0 1 1.82-2.23 7.65 7.65 0 0 0 1.65-1.82 2.93 2.93 0 0 0 .31-1.35 3.15 3.15 0 0 0-.87-2.29A3 3 0 0 0 16 8.79q-2.76 0-3.24 3.33h-2.2zM17.18 25h-2.35v-2.48h2.36V25z" />
          </svg>
        </div>

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

export default Goods;
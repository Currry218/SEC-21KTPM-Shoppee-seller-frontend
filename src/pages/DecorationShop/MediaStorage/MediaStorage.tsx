import { useState, useRef, useEffect, ChangeEvent } from 'react';
import ClearIcon from '../../../assets/clear-icon.svg';
import HelpIcon from '../../../assets/help-icon.svg';
import DropdownIcon from '../../../assets/dropdown-icon.svg';
import DatePicker from 'react-datepicker';
import OrangeButton from '../../../components/common/OrangeButton';
import WhiteButton from '../../../components/common/WhiteButton';

const MediaStorageTest = {
  usedSpace: '0KB',
  totalSpace: '2GB',
  progress: 50,
};

interface MenuItem {
  label: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { label: 'Tất cả' },
  {
    label: 'Hình ảnh',
    children: [
      { label: 'PNG' },
      { label: 'JPEG' },
      { label: 'JPG' },
    ],
  },
  { label: 'Video' },
];

const MediaStorage = () => {
  const [fileName, setFileName] = useState('');

  const handleFileNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.value);
  };

  const handleFileNameClear = () => {
    setFileName('');
  };

  // State quản lý dropdown, mục active (để hiển thị menu cấp 2) và giá trị được chọn
  const [isFileTypeOpen, setFileTypeIsOpen] = useState(false);
  const [activeIndexFileType, setActiveIndexFileType] = useState<number | null>(null);
  const [selectedValueFileType, setSelectedValueFileType] = useState<string>('');

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // Ref để đóng dropdown khi click ra ngoài
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setFileTypeIsOpen(false);
        setActiveIndexFileType(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Khi click vào mục cấp 1
  const handleItemClick = (item: MenuItem, index: number) => {
    if (item.children) {
      // Nếu có children, chỉ set active để hiển thị menu cấp 2
      setActiveIndexFileType(index);
    } else {
      // Nếu không có children, chọn luôn mục đó
      setSelectedValueFileType(item.label);
      setFileTypeIsOpen(false);
      setActiveIndexFileType(null);
    }
  };

  // Khi click vào mục cấp 2
  const handleChildClick = (child: MenuItem) => {
    setSelectedValueFileType(child.label);
    setFileTypeIsOpen(false);
    setActiveIndexFileType(null);
  };

  // Xử lý nút clear, ngăn sự kiện click lan ra ngoài
  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelectedValueFileType('');
  };

  return (
    <>
      <div
        className='m-4 bg-white rounded shadow'>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 ">
          {/* Phần tiêu đề */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl font-normal text-gray-800">
              Kho Hình Ảnh/Video
            </h1>
            <p className="text-sm text-gray-500">
              Quản lý tất cả hình ảnh và videos trong shop của bạn
            </p>
          </div>

          {/* Phần dung lượng */}
          <div className="w-42">
            {/* Thanh progress */}
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mr-3">
              <div
                className="h-full bg-green-500"
                style={{ width: `${MediaStorageTest.progress}%` }}
              ></div>
            </div>
            {/* Thông tin dung lượng và icon tooltip */}
            <div className="flex items-center">
              <span className="text-xs text-gray-700">
                Dung lượng {MediaStorageTest.usedSpace} / {MediaStorageTest.totalSpace}
              </span>
              <div className="relative ml-2">
                <button
                  type="button"
                  style={{ border: 'none' }}
                  className="bg-transparent p-1 focus:outline-none"
                  title="Tổng dung lượng ảnh đang lưu trong Kho Hình Ảnh/ Tổng dung lượng tối đa bạn có thể sử dụng."
                >
                  <img src={HelpIcon} alt="help" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form
            className="p-4"
            autoComplete="off"
          >
            <div className="flex  ">
              {/* Input file name*/}
              <div className="flex">
                {/* Label */}
                <label className="rounded-l px-3 py-1 border-gray-300 border-l border-b border-t text-sm font-normal text-gray-700">
                  Tên tệp
                </label>
                {/* Input Container */}
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Tên tập tin"
                    value={fileName}
                    onChange={handleFileNameChange}
                    className="text-black py-1 border-t border-b border-r w-full pr-10 rounded-r text-sm bg-transparent border-gray-300 focus:outline-none focus:border-gray-400 hover:border-gray-400"
                  />
                  {/* Nút clear (chỉ hiển thị khi có chữ) */}
                  {fileName && (
                    <button
                      type="button"
                      onClick={handleFileNameClear}
                      style={{ outline: 'none', border: 'none' }}
                      className="bg-transparent absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      <img src={ClearIcon} alt="close" />
                    </button>
                  )}
                </div>
              </div>

              {/* Dropdown file type*/}
              <div>
                <div ref={containerRef} className="relative inline-block">
                  {/* Selector chính */}
                  <div
                    className="mx-4 hover:border-gray-400 border-gray-300 px-3 py-1 flex items-center border rounded cursor-pointer focus:outline-none"
                    onClick={() => setFileTypeIsOpen(!isFileTypeOpen)}
                  >
                    <label className="text-sm font-normal text-gray-700 mr-2">
                      Dạng tập tin
                    </label>
                    <div className="w-[140px] text-sm text-black">
                      {selectedValueFileType || ''}
                    </div >
                    {selectedValueFileType && (
                      <button
                        onClick={handleClear}
                        type="button"
                        style={{ outline: 'none', border: 'none' }}
                        className="bg-transparent focus:outline-none px-2 py-0"
                      >
                        <img src={ClearIcon} alt="close" />
                      </button>
                    )}
                    <i >
                      <img src={DropdownIcon} alt="dropdown" />
                    </i>
                  </div>

                  {/* Dropdown cascader */}
                  {isFileTypeOpen && (
                    <div
                      className="absolute z-50 mt-2 ml-4 bg-white border rounded shadow flex"
                      style={{ top: '100%', left: 0 }}
                    >
                      {/* Menu cấp 1 */}
                      <div className="max-h-60 max-w-xs overflow-auto">
                        {menuItems.map((item, index) => (
                          <div
                            key={index}
                            className={`text-gray-700 text-sm p-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center ${activeIndexFileType === index ? 'bg-gray-200' : ''
                              }`}
                            onMouseEnter={() => item.children && setActiveIndexFileType(index)}
                            onClick={() => handleItemClick(item, index)}
                          >
                            <span className='pr-2'>{item.label}</span>
                            {item.children && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            )}
                          </div>
                        ))}
                      </div>
                      {/* Menu cấp 2 (nếu mục cấp 1 có children) */}
                      {activeIndexFileType !== null && menuItems[activeIndexFileType].children && (
                        <div className="text-gray-700 text-sm max-h-60 max-w-xs overflow-auto border-l">
                          {menuItems[activeIndexFileType].children!.map((child, idx) => (
                            <div
                              key={idx}
                              className="p-2 cursor-pointer hover:bg-gray-100"
                              onClick={() => handleChildClick(child)}
                            >
                              {child.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Date picker */}
              <div>
                <div className="pr-1 flex items-center border border-gray-300 hover:border-gray-400 rounded">

                  <label className=" px-3 py-1 text-sm font-normal text-gray-700">
                    Thời gian cập nhật
                  </label>
                  <div className="flex-1">
                    <DatePicker
                      selected={startDate}
                      onChange={(dates: [Date | null, Date | null]) => {
                        const [start, end] = dates;
                        setStartDate(start);
                        setEndDate(end);
                      }}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      dateFormat="yyyy/MM/dd"
                      className="outline-none px-4 py-1 text-sm text-black bg-white w-full"
                      placeholderText="Select a date range"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-start p-4 pt-2">
            <OrangeButton label="Áp dụng" className='mr-4 text-sm' />
            <WhiteButton label="Nhập lại" />
          </div>
        </div>

        {/* */}
        <div className="p-4 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-1">
              <span className="text-black text-sm">Tất cả hình ảnh</span>
              <img src={DropdownIcon} alt="Dropdown Icon" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-black text-sm">
              0 Tập tin
            </span>
            <WhiteButton label="Xuất" />
            <WhiteButton label="Tạo thư mục mới" />
            <div className="flex items-center space-x-[1px]">
              <OrangeButton
                className="rounded-r-none"
                label="Tải tập tin đa phương tiện lên" />
              <OrangeButton
                className="rounded-l-none"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="20"
                    height="20"
                    fill="white"
                  >
                    <path d="M8,9.18933983 L4.03033009,5.21966991 C3.73743687,4.9267767 3.26256313,4.9267767 2.96966991,5.21966991 C2.6767767,5.51256313 2.6767767,5.98743687 2.96966991,6.28033009 L7.46966991,10.7803301 C7.76256313,11.0732233 8.23743687,11.0732233 8.53033009,10.7803301 L13.0303301,6.28033009 C13.3232233,5.98743687 13.3232233,5.51256313 13.0303301,5.21966991 C12.7374369,4.9267767 12.2625631,4.9267767 11.9696699,5.21966991 L8,9.18933983 Z" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div>
            {/* Table Header */}
            <div className="grid grid-cols-[16px_2fr_1fr_1fr_1fr_1fr] gap-4 rounded-t text-gray-700 border py-2 bg-gray-100">
              {/* Cột checkbox với width cố định */}
              <div className="flex items-center justify-center w-10">
                <input type="checkbox" className="h-4 w-4" />
              </div>
              {/* Tên tập tin (chiếm 2 cột) */}
              <div className="flex items-center text-left text-sm pl-10">
                Tên tập tin
              </div>
              {/* Kích thước */}
              <div className="flex items-center justify-center text-sm">
                Kích thước
              </div>
              {/* Dung lượng với icon sort */}
              <div className="flex items-center justify-center text-sm">
                <span className="mr-1">Dung lượng</span>
                <div className="flex flex-col space-y-[-10px]">
                  {/* Icon mũi tên lên */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 text-gray-500 hover:text-orange-500 cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5725 6.40075L5.15302 8.66904c-.25182.23608-.26457.63161 0 .88343.11815.12603.28329.19747.45605.19747h4.83899c.34518 0 .625-.27982.625-.625 0-.17276-.07144-.3379-.19747-.45605L8.42746 6.40075c-.24041-.22539-.71451-.22539-.855 0z"
                    />
                  </svg>
                  {/* Icon mũi tên xuống */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 text-gray-500 hover:text-orange-500 cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5725 9.34925L5.15302 7.08096c-.25182-.23608-.26457-.63161 0-.88343.11815-.12603.28329-.19747.45605-.19747h4.83899c.34518 0 .625.27982.625.625 0 .17276-.07144.3379-.19747.45605L8.42746 9.34925c-.24041.22539-.71451.22539-.855 0z"
                    />
                  </svg>
                </div>
              </div>
              {/* Thời gian cập nhật với icon sort */}
              <div className="flex items-center justify-center text-sm">
                <span className="mr-1">Thời gian cập nhật</span>
                <div className="flex flex-col space-y-[-10px]">
                  {/* Icon mũi tên lên */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 text-gray-500 hover:text-orange-500 cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5725 6.40075L5.15302 8.66904c-.25182.23608-.26457.63161 0 .88343.11815.12603.28329.19747.45605.19747h4.83899c.34518 0 .625-.27982.625-.625 0-.17276-.07144-.3379-.19747-.45605L8.42746 6.40075c-.24041-.22539-.71451-.22539-.855 0z"
                    />
                  </svg>
                  {/* Icon mũi tên xuống */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 text-gray-500 hover:text-orange-500 cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5725 9.34925L5.15302 7.08096c-.25182-.23608-.26457-.63161 0-.88343.11815-.12603.28329-.19747.45605-.19747h4.83899c.34518 0 .625.27982.625.625 0 .17276-.07144.3379-.19747.45605L8.42746 9.34925c-.24041.22539-.71451.22539-.855 0z"
                    />
                  </svg>
                </div>
              </div>
              {/* Thao tác */}
              <div className="flex items-center justify-center text-sm">
                Thao tác
              </div>
            </div>

            {/* No Result Section */}
            <div className="h-[420px] flex flex-col items-center justify-center text-gray-500 border-b border-r border-l rounded-b p-8">
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/mmf_portal_seller_root_dir/static/modules/media-space/image/no-products.3cb5b35.png"
                alt="empty"
              />
              <p className="text-center text-sm text-gray-500 mt-2 mx-[23%]">
                Shop chưa có hình ảnh nào, vui lòng Tải lên hình ảnh nhé!
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default MediaStorage;

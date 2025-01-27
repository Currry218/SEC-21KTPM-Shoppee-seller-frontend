import { useState, useEffect, useRef } from "react";
import { ArrowRightOnRectangleIcon, CogIcon, BuildingStorefrontIcon   } from "@heroicons/react/20/solid";

const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node) &&
        isDialogOpen
      ) {
        setIsDialogOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDialogOpen]);

  return (
    <header className="h-16 bg-white flex items-center justify-between shadow-md border-b border-gray-200 relative">
      {/* Logo và Tiêu đề */}
      <div className="flex items-center">
        <img
          src="/logo.svg"
          alt="Logo"
          className="h-20 w-20"
        />
        <h1 className="text-xl text-gray-800 font-semibold">Trang chủ</h1>
      </div>

      {/* Avatar, Tên người dùng, và Mũi tên */}
      <div
        className="flex items-center justify-center cursor-pointer hover:bg-gray-200 h-full px-4"
        onClick={toggleDialog}
      >
        <img
          src="https://th.bing.com/th/id/OIP.5uBExD-SddPTmh8wusNQfQHaHa?w=750&h=750&rs=1&pid=ImgDetMain"
          alt="User Avatar"
          className="h-9 w-9 rounded-full mr-2"
        />
        <span className="text-gray-800 text-sm">Nguyễn Văn A</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-2 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dialog */}
      {isDialogOpen && (
        <div 
        ref={dialogRef}
        className="absolute right-0 top-16 w-56 bg-white shadow-lg border border-gray-200 z-50">
          {/* Avatar lớn */}
          <div className="flex flex-col items-center p-4">
            <img
              src="https://th.bing.com/th/id/OIP.5uBExD-SddPTmh8wusNQfQHaHa?w=750&h=750&rs=1&pid=ImgDetMain"
              alt="User Avatar"
              className="h-16 w-16 rounded-full mt-2"
            />
            <span className="text-gray-800 mt-4 text-sm">Nguyễn Văn A</span>
          </div>
          {/* Đường kẻ mờ */}
          <hr className="border-gray-200" />
          <div>
            <span
              className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer flex items-center"
              onClick={() => alert("Hồ sơ shop")}
            >
              <BuildingStorefrontIcon   className="h-5 w-5 mr-2 text-gray-600" />
              Hồ sơ shop
            </span>
          </div>
          <div>
            <span
              className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer flex items-center"
              onClick={() => alert("Thiết lập shop")}
            >
              <CogIcon className="h-5 w-5 mr-2 text-gray-600" />
              Thiết lập shop
            </span>
          </div>
          {/* Đường kẻ mờ */}
          <hr className="border-gray-200" />

          {/* Nút Logout */}

          <div>
            <span
              className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer flex items-center"
              onClick={() => alert("Bạn đã đăng xuất!")}
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2 text-gray-600" />
              Đăng xuất
            </span>
          </div>

        </div>
      )}
    </header>
  );
};

export default Header;

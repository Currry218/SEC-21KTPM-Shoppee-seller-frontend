import WhiteButton from "../../components/common/WhiteButton";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const BusinessInformation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();  
    setIsVisible(!isVisible);
  };

  return (
    <div className="p-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center pb-4 mb-4">
        <h2 className="text-xl text-black">Thông tin thuế</h2>
        <div className="space-x-4">
          <WhiteButton label="Chỉnh sửa" />
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Loại hình kinh doanh */}
        <div className="flex items-center space-x-4">
          <label className="w-1/6 text-right flex-shrink-0 text-black text-sm">
            Loại hình kinh doanh
          </label>
          <div className="flex-grow">
            <span className="py-2 text-black text-sm">Cá nhân</span>
          </div>
        </div>

        {/* Địa chỉ đăng kí kinh doanh */}
        <div className="flex items-center space-x-4">
          <label className="w-1/6 text-right flex-shrink-0 text-black text-sm">
            Địa chỉ đăng ký kinh doanh
          </label>
          <div className="flex-grow flex items-center">
            {/* Hiển thị nội dung hoặc dấu sao */}
            <span className="py-2 text-black text-sm">
              {isVisible
                ? "227 Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh"
                : "********"}
            </span>
            {/* Nút con mắt */}
            <button
              onClick={toggleVisibility}
              type="button"
              className="p-1 px-4 text-gray-600 bg-white"
              style={{outline: "none", border: "none", }}
            >
              {isVisible ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
        </div>

        {/* Email nhận hóa đơn điện tử */}
        <div className="flex items-center space-x-4">
          <label className="w-1/6 text-right flex-shrink-0 text-black text-sm">
            Email nhận hóa đơn điện tử
          </label>
          <div className="flex-grow">
            <span className="py-2 text-black text-sm">
              nptai212@clc.fitus.edu.vn
            </span>
          </div>
        </div>

        {/* Mã số thuế */}
        <div className="flex items-center space-x-4">
          <label className="w-1/6 text-right flex-shrink-0 text-black text-sm">
            Mã số thuế
          </label>
          <div className="flex-grow">
            <span className="py-2 text-black text-sm">
              000000
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusinessInformation;

import React from "react";

interface ButtonProps {
  label?: React.ReactNode; // Nhãn hiển thị trên nút
  onClick?: () => void; // Hàm gọi khi nút được nhấn (tùy chọn)
  className?: string; // Thêm class tùy chỉnh nếu cần
  icon?: React.ReactNode;   // Icon hiển thị trên nút
}

const OrangeButton: React.FC<ButtonProps> = ({ label, onClick, className, icon }) => {
  return (
    <button
      type="button"
      className={`font-normal flex items-center px-5 py-1.5 rounded bg-orange-600 hover:bg-orange-700 text-sm ${className}`}
      style={{
        outline: "none",
        border: "none",
      }}
      onClick={onClick}
    >
      <span className="flex items-center">{label}</span>
      {icon && <span className="flex items-center mr-2">{icon}</span>}
    </button>
  );
};

export default OrangeButton;

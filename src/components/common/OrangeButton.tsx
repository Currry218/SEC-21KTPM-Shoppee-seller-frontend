import React from "react";

interface ButtonProps {
  label: React.ReactNode; // Nhãn hiển thị trên nút
  onClick?: () => void; // Hàm gọi khi nút được nhấn (tùy chọn)
  className?: string; // Thêm class tùy chỉnh nếu cần
}

const OrangeButton: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      type="button"
      className={`font-normal flex items-center px-6 py-2 rounded bg-orange-600 hover:bg-orange-700 text-sm ${className}`}
      style={{
        outline: "none",
        border: "none",
      }}
      onClick={onClick}
    >
      <span className="flex items-center">{label}</span>
    </button>
  );
};

export default OrangeButton;

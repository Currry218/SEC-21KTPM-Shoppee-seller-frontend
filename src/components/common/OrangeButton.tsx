import React from "react";

interface ButtonProps {
  label: string; // Nhãn hiển thị trên nút
  onClick?: () => void; // Hàm gọi khi nút được nhấn (tùy chọn)
  className?: string; // Thêm class tùy chỉnh nếu cần
}

const OrangeButton: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      type="button"
      className={`px-5 rounded bg-orange-600 hover:bg-orange-700 text-sm ${className}`}
      style={{
        outline: "none", 
        border: "none", 
    }}
      onClick={onClick}
    >
      <span>{label}</span>
    </button>
  );
};

export default OrangeButton;

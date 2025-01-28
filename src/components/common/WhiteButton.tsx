import React from "react";

interface ButtonProps {
  label: string; // Nhãn hiển thị trên nút
  onClick?: () => void; // Hàm gọi khi nút được nhấn (tùy chọn)
  className?: string; // Thêm class tùy chỉnh nếu cần
}

const WhiteButton: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      type="button"
      className={`font-normal hover:border-gray-300 py-1 border border-gray-300 px-5 rounded bg-white hover:bg-gray-100 ${className}`}
      style={{
        outline: "none", 
    }}
      onClick={onClick}
    >
      <span 
        className="text-black text-sm"
      >{label}
      </span>
    </button>
  );
};

export default WhiteButton;

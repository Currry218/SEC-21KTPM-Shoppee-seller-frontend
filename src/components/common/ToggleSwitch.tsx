import React, { useState } from "react";

// Định nghĩa kiểu cho prop 'onChange'
interface ToggleSwitchProps {
  defaultChecked?: boolean;
  onChange?: (newState: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ defaultChecked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedState = event.target.checked;
    setIsChecked(newCheckedState);

    // Xử lý sự kiện khi toggle được nhấn
    if (onChange) {
      onChange(newCheckedState);
    }

  };

  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isChecked}
          onChange={handleToggle} // Xử lý sự kiện khi nhấn
        />
        <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer-checked:bg-green-500"></div>
        <span
          className="absolute bg-white rounded-full transition-all peer-checked:translate-x-6"
          style={{
            width: "1.375rem",
            height: "1.375rem",
            left: "0.05rem",   
          }}
        ></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;

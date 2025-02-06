import { useState, useRef, useEffect } from "react";

const sortingOptions = [
  { label: "SKU (1 sản phẩm)", value: "sku" },
  { label: "Ngày xác nhận đặt đơn (Xa - Gần nhất)", value: "confirm_desc" },
  { label: "Ngày xác nhận đặt đơn (Gần - Xa nhất)", value: "confirm_asc" },
  { label: "Hạn gửi hàng (Xa - Gần nhất)", value: "deadline_desc" },
  { label: "Hạn gửi hàng (Gần - Xa nhất)", value: "deadline_asc" },
];

export default function FilterButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState(sortingOptions[0]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      dropdownRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Sorting Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white"
      >
        Sorted by: {selectedSorting.label}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute mt-2 left-0 w-auto min-w-max bg-white shadow-lg border rounded-lg z-50"
        >
          {sortingOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setSelectedSorting(option);
                setIsOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selectedSorting.value === option.value ? "text-orange-500 font-semibold" : "text-black"
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import { useState, useRef, useEffect } from "react";

const sortingOptions = [
    { label: "Ngày đến hạn (Sớm nhất)", value: "due_date_asc" },
    { label: "Ngày đến hạn (Trễ nhất)", value: "due_date_desc" },
    { label: "Ngày gửi yêu cầu (Mới nhất)", value: "request_date_desc" },
    { label: "Ngày gửi yêu cầu (Trễ nhất)", value: "request_date_asc" },
    { label: "Số tiền hoàn trả (Cao nhất)", value: "refund_amount_desc" },
    { label: "Số tiền hoàn trả (Thấp nhất)", value: "refund_amount_asc" }
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

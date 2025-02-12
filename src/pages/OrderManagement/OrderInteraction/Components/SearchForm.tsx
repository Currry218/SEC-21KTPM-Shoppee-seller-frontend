import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface SearchFormProps {
    excludeFields?: string | string[]; // Accepts single string or an array
}

const SearchForm: React.FC<SearchFormProps> = ({ excludeFields = [] }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    // Convert to array if a single string is passed
    const excludedKeys = Array.isArray(excludeFields) ? excludeFields : [excludeFields];

    const inputFields = [
        { key: "searchRequest", label: "Tìm yêu cầu", placeholder: "Điền Mã yêu cầu...", type: "text" },
        { key: "operation", label: "Toàn bộ thao tác", placeholder: "Vui lòng chọn", type: "dropdown" },
        { key: "status", label: "Trạng thái", placeholder: "Vui lòng chọn", type: "dropdown" },
        { key: "deliveryDirection", label: "Vận chuyển chiều giao hàng", placeholder: "Vui lòng chọn", type: "dropdown" },
        { key: "returnDirection", label: "Vận chuyển chiều hoàn hàng", placeholder: "Vui lòng chọn", type: "dropdown" },
        { key: "reason", label: "Lý do", placeholder: "Vui lòng chọn", type: "dropdown" },
        { key: "buyerPlan", label: "Phương án cho Người mua", placeholder: "Vui lòng chọn", type: "dropdown" },
        { key: "compensation", label: "Khiếu nại được đền bù", placeholder: "Vui lòng chọn", type: "dropdown" },
        { key: "refundEstimation", label: "Dự kiến hoàn tiền", placeholder: "Số tiền hoàn tối thiểu - tối đa", type: "range" },
    ];

    // Filter out fields that are in the excludeFields list
    const remainingFields = inputFields.filter((field) => !excludedKeys.includes(field.key));

    return (
        <>
            <div className="grid grid-cols-2 gap-4 mt-4">
                {remainingFields.slice(0, 2).map((item, index) => (
                    <div key={index} className="flex items-center">
                        <label className="text-sm text-gray-700 mr-2 min-w-max">{item.label}</label>
                        {item.type === "text" ? (
                            <input
                                type="text"
                                placeholder={item.placeholder}
                                className="p-2 border rounded-lg text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-300 flex-1"
                            />
                        ) : (
                            <select className="p-2 border rounded-lg text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-300 flex-1">
                                <option value="">{item.placeholder}</option>
                                {/* Add options here */}
                            </select>
                        )}
                    </div>
                ))}
            </div>
            
            {isFormVisible && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {/* Render only remaining fields dynamically */}
                    {/* Remove first two element */}
                    {remainingFields.slice(2).map((item, index) => (
                        <div key={index} className="flex items-center">
                            <label className="text-sm text-gray-700 mr-2 min-w-max">{item.label}</label>
                            {item.type === "text" ? (
                                <input
                                    type="text"
                                    placeholder={item.placeholder}
                                    className="p-2 border rounded-lg text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-300 flex-1"
                                />
                            ) : item.type === "range" ? (
                                <div className="flex items-center flex-1">
                                    <input
                                        type="text"
                                        placeholder="Số tiền hoàn tối thiểu"
                                        className="p-2 border rounded-lg text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-300 flex-1"
                                    />
                                    <span className="mx-2 text-black">-</span>
                                    <input
                                        type="text"
                                        placeholder="Số tiền hoàn tối đa"
                                        className="p-2 border rounded-lg text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-300 flex-1"
                                    />
                                </div>
                            ) : (
                                <select className="p-2 border rounded-lg text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-300 flex-1">
                                    <option value="">{item.placeholder}</option>
                                    {/* Add options here */}
                                </select>
                            )}
                        </div>
                    ))}

                    {/* Putting this separately because it has a DatePicker */}
                    {/* Ngày yêu cầu (Date Range Picker) */}
                    {!excludedKeys.includes("dateRange") && (
                        <div className="flex items-center">
                            <label className="text-sm text-gray-700 mr-2 min-w-max">Ngày yêu cầu</label>
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
                                className="p-2 border rounded-lg text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-300 flex-1"
                                placeholderText="Select a date range"
                            />
                        </div>
                    )}
                </div>
            )}

            <div className="flex justify-start mt-4 space-x-2">
                <button className="bg-white text-orange-500 px-4 py-2 rounded-lg text-sm border border-orange-500 hover:bg-red-50">Tìm kiếm</button>
                <button
                    onClick={() => {
                        setStartDate(null);
                        setEndDate(null);
                        // Reset other input fields
                        document.querySelectorAll('input[type="text"]').forEach(input => (input as HTMLInputElement).value = '');
                    }}
                    className="bg-white text-black px-4 py-2 rounded-lg text-sm border border-gray-300 hover:bg-gray-200"
                >
                    Đặt lại
                </button>
                <button
                    onClick={() => setIsFormVisible(!isFormVisible)}
                    className="text-blue-500 underline bg-transparent px-0 py-0 border-none text-sm font-medium focus:outline-none focus:ring-0"
                >
                    {isFormVisible ? "Thu nhỏ" : "Mở rộng"}
                </button>
            </div>
        </>
    );
};

export default SearchForm;

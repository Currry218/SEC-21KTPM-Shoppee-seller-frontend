import React from 'react';
import { useState, useRef, useEffect } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { FiAlignJustify } from "react-icons/fi";

const DropdownWithContent: React.FC = () => {
    const columns = [
        "Tên báo cáo",
        "Sửa thông tin",
    ];

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Toggle the dropdown
    const toggleDropdown = () => setIsOpen((prev) => !prev);

    // Close dropdown if clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <div className="relative inline-block" ref={dropdownRef}>
                {/* Button to Open Dropdown */}
                <button
                    onClick={toggleDropdown}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
                >
                    <FiAlignJustify />
                </button>

                {isOpen && (
                    <div className="absolute top-full right-0 mt-2 min-w-max bg-white border rounded-lg shadow-lg p-3">
                        {/* Triangle Pointer (Top Right) */}
                        <div className="absolute top-0 right-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white -translate-y-full"></div>
                        <h2 className="px-6 text-black mb-3 font-bold text-lg">
                            Báo cáo gần nhất
                        </h2>
                        <p className="px-6 py-2 text-sm text-gray-500 bg-yellow-100 text-orange-800">
                            Bạn đã tải hết tất cả báo cáo hiện có.
                        </p>
                        {/* Table Content */}
                        <div className="overflow-auto max-h-[500px] w-full min-w-[450px] pb-4">
                            {/* HEADER */}
                            <div className="grid grid-cols-4 gap-6 bg-gray-100 text-gray-700 border-b text-sm w-full">
                                {columns.map((column, index) => (
                                    <div key={index} className="col-span-2 flex justify-center font-bold">
                                        {column}
                                    </div>
                                ))}
                            </div>
                            {/* Rows */}
                            <div className="flex flex-col items-center justify-center mt-6 text-gray-500">
                                {/* No data */}
                                <CiFileOn className="w-20 h-20 text-gray-300"/>
                                {/* Text and button */}
                                <p className="text-center text-sm text-gray-500 mt-2">
                                    Bạn đã tải hết tất cả báo cáo hiện có.
                                </p>
                                <p className="text-sm text-gray-500">
                                    Xem báo cáo
                                </p>
                                <button 
                                    className={`px-2 py-1 border border-gray-300 rounded bg-white text-black text-base inline-flex items-center`}
                                    onClick={() => alert("Redirecting to 'Báo Cáo Của Tôi'")}
                                > 
                                    <FaRegFileAlt className="mr-1" /> Báo cáo của tôi
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default DropdownWithContent;

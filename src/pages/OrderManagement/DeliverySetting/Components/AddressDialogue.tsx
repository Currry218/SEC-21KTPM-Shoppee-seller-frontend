import { useState } from "react";

export default function AddressDialog({ 
    isOpen, 
    onClose,
    onSave 
}: { 
    isOpen: boolean; 
    onClose: () => void;
    onSave: (formData: any) => void;
}) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        province: "",
        details: "",
        defaultAddress: false,
        pickupAddress: false,
        returnAddress: false,
    });

    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        province: "",
        details: "",
    });

    const validate = (name: string, value: string) => {
        switch (name) {
            case "name":
                if (!value) return "Họ & Tên là bắt buộc";
                if (value.trim().split(" ").length < 2) return "Họ & Tên cần ít nhất 2 từ";
                break;
            case "phone":
                if (!value) return "Số điện thoại là bắt buộc";
                if (!/^\d+$/.test(value)) return "Số điện thoại không hợp lệ";
                break;
            case "province":
                if (!value) return "Tỉnh/Thành phố là bắt buộc";
                break;
            case "details":
                if (!value) return "Chi tiết địa chỉ là bắt buộc";
                break;
            default:
                return "";
        }
        return "";
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        setErrors(prev => ({
            ...prev,
            [name]: validate(name, value)
        }));
    };

    const handleSubmit = () => {
        const newErrors = {
            name: validate("name", formData.name),
            phone: validate("phone", formData.phone),
            province: validate("province", formData.province),
            details: validate("details", formData.details),
        };

        setErrors(newErrors);

        if (Object.values(newErrors).every(error => !error)) {
            onSave(formData);
            setFormData({
                name: "",
                phone: "",
                province: "",
                details: "",
                defaultAddress: false,
                pickupAddress: false,
                returnAddress: false,
            });
        }
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center p-4 bg-gray-900 bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-lg font-semibold">Thêm Địa Chỉ Mới</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 bg-white">✖</button>
                </div>
                <div className="mt-4 space-y-3">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Họ & Tên"
                        className="w-full p-2 border rounded text-black bg-white"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Số điện thoại"
                        className="w-full p-2 border rounded text-black bg-white"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    <select
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-black bg-white"
                    >
                        <option value="">Tỉnh/Thành phố/Quận/Huyện/Phường/Xã</option>
                        <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                    </select>
                    {errors.province && <p className="text-red-500 text-sm">{errors.province}</p>}
                    <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Số nhà, tên đường v.v.."
                        className="w-full p-2 border rounded text-black bg-white"
                    ></textarea>
                    {errors.details && <p className="text-red-500 text-sm">{errors.details}</p>}
                    <button className="flex items-center justify-center w-full space-x-2 text-blue-600 hover:underline text-black bg-white border border-gray-200">
                        📍
                        <span>Định vị</span>
                    </button>
                    <div className="space-y-2 bg-white">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="defaultAddress"
                                checked={formData.defaultAddress}
                                onChange={handleChange}
                            />
                            <span>Đặt làm địa chỉ mặc định</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="pickupAddress"
                                checked={formData.pickupAddress}
                                onChange={handleChange}
                            />
                            <span>Đặt làm địa chỉ lấy hàng</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="returnAddress"
                                checked={formData.returnAddress}
                                onChange={handleChange}
                            />
                            <span>Đặt làm địa chỉ trả hàng</span>
                        </label>
                    </div>
                </div>
                <div className="flex justify-end space-x-2 mt-4 text-sm">
                    <button onClick={onClose} className="border px-3 py-1 rounded bg-white border border-gray-300">Hủy</button>
                    <button 
                        onClick={handleSubmit}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                        Lưu
                    </button>
                </div>
            </div>
        </div>
    );
}
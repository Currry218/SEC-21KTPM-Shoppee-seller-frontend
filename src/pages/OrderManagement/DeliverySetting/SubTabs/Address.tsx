import { useState } from "react";
import AddressDialog from "../Components/AddressDialogue";

const Address = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [addresses, setAddresses] = useState([
        { 
            Name: "Trịnh Minh Long", 
            Phone: "84944613610", 
            Address: "207C, đường Nguyễn Xí, Phường 26, Quận Bình Thạnh, TP. Hồ Chí Minh", 
            type: ["Địa chỉ lấy hàng"] 
        },
        { 
            Name: "Nguyễn Văn A", 
            Phone: "84912345678",
            Address: "123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh", 
            type: ["Địa chỉ giao hàng"] 
        },
        { 
            Name: "Lê Thị B", 
            Phone: "84987654321", 
            Address: "456 Đường DEF, Phường UVW, Quận 2, TP. Hồ Chí Minh", 
            type: ["Default address"] 
        },
        { 
            Name: "Phạm Văn C", 
            Phone: "84911223344", 
            Address: "789 Đường GHI, Phường RST, Quận 3, TP. Hồ Chí Minh", 
            type: ["Default address", "Địa chỉ lấy hàng", "Địa chỉ trả hàng"] 
        },
    ]);

    interface Address {
        name: string;
        phone: string;
        details: string;
        province: string;
        defaultAddress?: boolean;
        pickupAddress?: boolean;
        returnAddress?: boolean;
    }

    const handleAddAddress = (newAddress: Address) => {
        const type = [];
        if (newAddress.defaultAddress) type.push("Default address");
        if (newAddress.pickupAddress) type.push("Địa chỉ lấy hàng");
        if (newAddress.returnAddress) type.push("Địa chỉ trả hàng");

        const formattedAddress = {
            Name: newAddress.name,
            Phone: newAddress.phone,
            Address: `${newAddress.details}, ${newAddress.province}`,
            type: type.length > 0 ? type : ["Địa chỉ giao hàng"]
        };

        setAddresses([...addresses, formattedAddress]);
        setIsDialogOpen(false);
    };
    
    return (
        <div className="p-2 text-black w-full max-w-full overflow-hidden">
            <div className="flex items-center justify-between mb-2">
                <div>
                    <h2 className="text-sm font-semibold">Địa Chỉ</h2>
                    <p className="text-gray-600 text-xs">Quản lý việc vận chuyển và địa chỉ giao hàng của bạn</p>
                </div>
                <button 
                    onClick={() => setIsDialogOpen(true)}
                    className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                >
                    + Thêm địa chỉ mới
                </button>
            </div>
            
            {addresses.map((address, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-sm font-medium mb-2">Address {index + 1}</h3>
                    <div className="space-y-2 text-xs p-2 bg-gray-50 rounded">
                        <div className="flex">
                            <div className="w-24 text-gray-600">Họ & Tên</div>
                            <div className="flex-1">
                                <span>{address.Name}</span>
                                {address.type.map((t, i) => {
                                    let bgColor = "bg-red-50";
                                    if (t === "Default address") bgColor = "bg-blue-100";
                                    if (t === "Địa chỉ lấy hàng") bgColor = "bg-red-50";
                                    if (t === "Địa chỉ trả hàng") bgColor = "bg-yellow-100";

                                    return (
                                        <span key={i} className={`text-red-500 text-xs ml-1 ${bgColor} px-1 py-0.5 rounded`}>{t}</span>
                                    );
                                })}
                            </div>
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline text-xs"
                                onClick={() => setIsDialogOpen(true)}
                            >
                                Sửa
                            </a>
                            <a href="#" className="text-red-500 hover:underline ml-2 text-xs">Xóa</a>
                        </div>

                        <div className="flex">
                            <div className="w-24 text-gray-600">Số điện thoại</div>
                            <div className="flex-1">{address.Phone}</div>
                        </div>

                        <div className="flex">
                            <div className="w-24 text-gray-600">Địa chỉ</div>
                            <div className="flex-1 space-y-1">
                                {address.Address.split(', ').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <AddressDialog 
                isOpen={isDialogOpen} 
                onClose={() => setIsDialogOpen(false)}
                onSave={handleAddAddress}
            />
        </div>
    );
};

export default Address;
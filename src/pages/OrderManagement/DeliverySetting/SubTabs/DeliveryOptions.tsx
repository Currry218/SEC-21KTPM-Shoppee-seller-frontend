import { useState } from "react";
import ToggleButton from "../Components/ToggleButton";

interface ShippingMethod {
    Name: string;
    Description: string;
    COD: boolean;
}

type VisibilityState = {
    [key: string]: boolean;
}

const DeliveryOptions: React.FC = () => {
    const shippingMethods: ShippingMethod[] = [
        {
            Name: "Hỏa Tốc",
            Description: "Enable this option to provide delivery to your buyers within 2 hours from order pick-up time.",
            COD: true
        },
        {
            Name: "Nhanh",
            Description: "Phương thức vận chuyển chuyên nghiệp, nhanh chóng và đáng tin cậy",
            COD: true
        },
        {
            Name: "Tiết Kiệm",
            Description: "Phương thức vận chuyển với mức phí cạnh tranh nhất",
            COD: true
        },
        {
            Name: "Hàng Cồng Kềnh",
            Description: "",
            COD: true
        },
    ];

    const [visibilityState, setVisibilityState] = useState<VisibilityState>(() =>
        shippingMethods.reduce((acc, method) => ({
            ...acc,
            [method.Name]: true
        }), {})
    );

    const toggleVisibility = (methodName: string): void => {
        setVisibilityState(prev => ({
            ...prev,
            [methodName]: !prev[methodName]
        }));
    };

    return (
        <div className="space-y-4">
            {shippingMethods.map((method) => (
                <div key={method.Name} className="text-black">
                    <div className={`flex ${!method.Description ? "items-center justify-between" : "flex-col"}`}>
                        <h2 className="text-lg font-semibold">{method.Name}</h2>
                        <div className={`flex ${method.Description ? "justify-between items-center" : "items-center"}`}>
                            {method.Description && (
                                <p className="text-sm text-gray-600">{method.Description}</p>
                            )}
                            <button
                                type="button"
                                className="bg-white hover:bg-gray-50 text-black text-sm px-2 py-1 rounded transition-colors border border-gray-300"
                                onClick={() => toggleVisibility(method.Name)}
                            >
                                {visibilityState[method.Name] ? "Thu gọn" : "Mở rộng"}
                            </button>
                        </div>
                    </div>

                    {visibilityState[method.Name] && (
                        <div className="mt-4 p-3 border rounded-md flex items-center justify-between">
                            <div>
                                <span className="font-medium">{method.Name}</span>
                                {method.COD && (
                                    <span className="text-red-500 text-sm ml-2">[COD đã được kích hoạt]</span>
                                )}
                            </div>
                            <label className="flex justify-center items-center cursor-pointer">
                                <ToggleButton />
                            </label>
                        </div>
                    )}
                </div>
            ))}

            <div className="text-black">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Thêm đơn vị vận chuyển</h2>
                    <button
                        type="button"
                        className="bg-white hover:bg-gray-50 text-black text-sm px-2 py-1 rounded transition-colors ml-4 border border-gray-300"
                    >
                        Thêm đơn vị vận chuyển
                    </button>
                </div>
                <div className="mt-2">
                    <p className="text-sm text-gray-600">Lưu ý: Không hỗ trợ theo dõi quá trình cho các phương thức
                        vận chuyển không có tích hợp và cũng sẽ không
                        chịu trách nhiệm về bất kỳ sản phẩm nào bị thiếu hoặc hư hỏng.</p>
                </div>
            </div>
        </div>
    );
};

export default DeliveryOptions;
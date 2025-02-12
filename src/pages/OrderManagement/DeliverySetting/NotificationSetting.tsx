import { useState } from "react";

interface NotificationOption {
    id: string;
    title: string;
    description: string;
    enabled: boolean;
}

const NotificationSetting = () => {
    const [notifications, setNotifications] = useState<NotificationOption[]>([
        { id: "orders", title: "Đơn hàng", description: "Cập nhật về tình trạng vận chuyển của tất cả các đơn hàng", enabled: true },
        { id: "products", title: "Sản phẩm", description: "Cập nhật về trạng thái của sản phẩm", enabled: true },
        { id: "policies", title: "Chính sách", description: "Stay informed about changes to our guidelines, rules and initiatives", enabled: true },
        { id: "promotions", title: "Cập nhật về các ưu đãi và khuyến mãi sắp tới", description: "Cập nhật về các ưu đãi và khuyến mãi sắp tới", enabled: false },
        { id: "survey", title: "Khảo sát", description: "Đồng ý nhận khảo sát để cho chúng tôi được lắng nghe bạn", enabled: true },
    ]);

    const toggleNotification = (id: string) => {
        setNotifications((prev) =>
            prev.map((notif) =>
                notif.id === id ? { ...notif, enabled: !notif.enabled } : notif
            )
        );
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">Thông báo Email</h2>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                    Bỏ Email
                </button>
            </div>

            <div className="mt-4 space-y-4">
                <h3 className="text-md font-medium text-gray-700">Cập nhật</h3>
                {notifications.slice(0, 3).map((notif) => (
                    <NotificationToggle key={notif.id} notif={notif} onToggle={toggleNotification} />
                ))}

                <h3 className="text-md font-medium text-gray-700">Khuyến mãi và hoạt động tương tác</h3>
                {notifications.slice(3).map((notif) => (
                    <NotificationToggle key={notif.id} notif={notif} onToggle={toggleNotification} />
                ))}
            </div>
        </div>
    );
}

function NotificationToggle({ notif, onToggle }: { notif: NotificationOption; onToggle: (id: string) => void }) {
    return (
        <div className="flex items-center justify-between border-b py-3">
            <div>
                <p className="text-sm font-medium text-gray-900">{notif.title}</p>
                <p className="text-xs text-gray-500">{notif.description}</p>
            </div>
            <button
                onClick={() => onToggle(notif.id)}
                className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition ${notif.enabled ? "bg-green-500" : "bg-gray-400"
                    }`}
            >
                <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${notif.enabled ? "translate-x-6" : "translate-x-0"
                        }`}
                ></div>
            </button>
        </div>
    );
}

export default NotificationSetting;
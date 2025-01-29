import ToggleSwitch from "../../components/common/ToggleSwitch";
import WhiteButton from "../../components/common/WhiteButton";
const NotificationSetting = () => {
    const handleToggleChange = (checked: boolean) => { }
    return (
        <div className="p-4">
            <div className="flex items-center justify-between mb-4">
                <div className="font-normal text-lg text-gray-800 pb-1">
                    Thông báo Email
                </div>
                <WhiteButton
                    label="Bỏ email"
                />
            </div>
            <div className="bg-white">
                <div className="font-normal text-gray-800 pb-1">
                    Cập nhật
                </div>
                {/* Toggle Card */}
                <div className="flex items-center justify-between py-4 border-b">
                    {/* Description Section */}
                    <div>
                        <div className="font-normal text-sm text-gray-800 pb-1">Đơn hàng</div>
                        <div className="font-normal text-sm text-gray-400">
                            Cập nhật về tình trạng vận chuyển của tất cả các đơn hàng
                        </div>
                    </div>
                    {/* Toggle Switch */}
                    {/* <div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer-checked:bg-green-500"></div>
                            <span className="absolute bg-white rounded-full transition-all peer-checked:translate-x-6.25"
                                style={{
                                    width: "1.375rem",
                                    height: "1.375rem",
                                    left: '0.05rem'
                                }}
                            ></span>
                        </label>
                    </div> */}
                    <ToggleSwitch
                        defaultChecked={true}
                        onChange={(newState) => {
                            // Xử lý sự kiện bên ngoài khi toggle thay đổi
                            console.log("Switch state is:", newState);
                        }}
                    />
                </div>
                {/* Toggle Card */}
                <div className="flex items-center justify-between py-4 border-b">
                    {/* Description Section */}
                    <div>
                        <div className="font-normal text-sm text-gray-800 pb-1">
                            Sản phẩm
                        </div>
                        <div className="font-normal text-sm text-gray-400">
                            Cập nhật về trạng thái của sản phẩm
                        </div>
                    </div>
                    {/* Toggle Switch */}
                    <ToggleSwitch
                        defaultChecked={true}
                        onChange={(newState) => {
                            // Xử lý sự kiện bên ngoài khi toggle thay đổi
                            console.log("Switch state is:", newState);
                        }}
                    />
                </div>
                {/* Toggle Card */}
                <div className="flex items-center justify-between py-4 border-b">
                    {/* Description Section */}
                    <div>
                        <div className="font-normal text-sm text-gray-800 pb-1">
                            Chính sách
                        </div>
                        <div className="font-normal text-sm text-gray-400">
                            Stay informed about changes to our guidelines, rules and initiatives
                        </div>
                    </div>
                    {/* Toggle Switch */}
                    <ToggleSwitch
                        defaultChecked={true}
                        onChange={(newState) => {
                            // Xử lý sự kiện bên ngoài khi toggle thay đổi
                            console.log("Switch state is:", newState);
                        }}
                    />
                </div>
            </div>
            <div className="mt-6">
                <div className="font-normal text-gray-800 pb-1">
                    Khuyến mãi và hoạt động tương tác
                </div>
                {/* Toggle Card */}
                <div className="flex items-center justify-between py-4 border-b">
                    {/* Description Section */}
                    <div>
                        <div className="font-normal text-sm text-gray-800 pb-1">
                            Cập nhật về các ưu đãi và khuyến mãi sắp tới
                        </div>
                        <div className="font-normal text-sm text-gray-400">
                            Cập nhật về các ưu đãi và khuyến mãi sắp tới
                        </div>
                    </div>
                    {/* Toggle Switch */}
                    <ToggleSwitch
                        defaultChecked={true}
                        onChange={(newState) => {
                            // Xử lý sự kiện bên ngoài khi toggle thay đổi
                            console.log("Switch state is:", newState);
                        }}
                    />
                </div>
                {/* Toggle Card */}
                <div className="flex items-center justify-between py-4">
                    {/* Description Section */}
                    <div>
                        <div className="font-normal text-sm text-gray-800 pb-1">
                            Khảo sát
                        </div>
                        <div className="font-normal text-sm text-gray-400">
                            Đồng ý nhận khảo sát để cho chúng tôi được lắng nghe bạn
                        </div>
                    </div>
                    {/* Toggle Switch */}
                    <ToggleSwitch
                        defaultChecked={true}
                        onChange={(newState) => {
                            // Xử lý sự kiện bên ngoài khi toggle thay đổi
                            console.log("Switch state is:", newState);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default NotificationSetting;

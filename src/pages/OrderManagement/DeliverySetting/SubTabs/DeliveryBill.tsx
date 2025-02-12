import ToggleButton from "../Components/ToggleButton";

const DeliveryBill = () => {
    return (
        <div className="text-black">
            <h2 className="text-sm font-medium">In Nhiệt (Thermal)</h2>
            <div className="flex justify-between items-center">
                <p className="text-xs text-gray-500">Bật In Nhiệt cho các Phiếu Xuất Hàng của tất cả phương thức vận chuyển.</p>
                <label className="flex items-center cursor-pointer">
                    <ToggleButton />
                </label>
            </div>
        </div>
    );
}

export default DeliveryBill;
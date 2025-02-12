import { useState, useEffect } from "react";

const PaymentSetting = () => {
  const [isAutoWithdrawEnabled, setIsAutoWithdrawEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [pinErrors, setPinErrors] = useState<string[]>([]);
  const [confirmPinError, setConfirmPinError] = useState("");

  const validatePin = (value: string) => {
    const errors = [];
    
    // Check if PIN contains only numbers
    if (!/^\d*$/.test(value)) {
      errors.push("Mã PIN chỉ được chứa số");
    }

    // Check PIN length (must be 6 digits)
    if (value.length > 0 && value.length !== 6) {
      errors.push("Mã PIN phải có 6 số");
    }

    // Check for consecutive numbers (e.g., 123456, 987654)
    if (value.length === 6) {
      let isConsecutive = true;
      for (let i = 1; i < value.length; i++) {
        if (Math.abs(parseInt(value[i]) - parseInt(value[i-1])) !== 1) {
          isConsecutive = false;
          break;
        }
      }
      if (isConsecutive) {
        errors.push("Không được sử dụng dãy số liên tiếp");
      }
    }

    // Check for repeated numbers (e.g., 111111, 999999)
    if (value.length === 6) {
      const uniqueDigits = new Set(value.split('')).size;
      if (uniqueDigits === 1) {
        errors.push("Không được sử dụng số lặp lại");
      }
    }

    // Check for common patterns (e.g., 123123)
    if (value.length === 6) {
      const firstHalf = value.slice(0, 3);
      const secondHalf = value.slice(3, 6);
      if (firstHalf === secondHalf) {
        errors.push("Không được sử dụng mẫu lặp lại");
      }
    }

    return errors;
  };

  // Real-time validation for PIN
  useEffect(() => {
    if (pin.length > 0) {
      const errors = validatePin(pin);
      setPinErrors(errors);
    } else {
      setPinErrors([]);
    }
  }, [pin]);

  // Real-time validation for confirm PIN
  useEffect(() => {
    if (confirmPin.length > 0) {
      if (pin !== confirmPin) {
        setConfirmPinError("Mật khẩu và mật khẩu xác nhận không giống nhau");
      } else {
        setConfirmPinError("");
      }
    } else {
      setConfirmPinError("");
    }
  }, [confirmPin, pin]);

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 6) {  // Limit to 6 digits
      setPin(value);
    }
  };

  const handleConfirmPinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 6) {  // Limit to 6 digits
      setConfirmPin(value);
    }
  };

  const isValidForm = () => {
    return pin.length === 6 && 
           confirmPin.length === 6 && 
           pin === confirmPin && 
           pinErrors.length === 0;
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      {/* Auto Withdraw Section */}
      <div className="p-4 flex justify-between items-center border-b border-gray-200">
        <div>
          <h3 className="text-lg font-semibold text-black">Rút tiền tự động</h3>
          <p className="text-gray-500 text-sm">
            Bật tùy chọn này để sử dụng tính năng rút tiền tự động và cài đặt tần suất rút tiền. 
            Bạn được miễn phí rút tiền 2 lần/tháng (bao gồm rút tiền tự động và thủ công).
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            checked={isAutoWithdrawEnabled} 
            onChange={() => setIsAutoWithdrawEnabled(!isAutoWithdrawEnabled)}
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer
            peer-checked:after:translate-x-5 peer-checked:after:border-white peer-checked:bg-blue-600
            after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all">
          </div>
        </label>
      </div>

      {/* PIN Section */}
      <div className="p-4 flex justify-between items-center text-black">
        <div>
          <h3 className="text-lg font-semibold">Mã PIN</h3>
          <p className="text-gray-500 text-sm">Thiết lập mã PIN</p>
        </div>
        <button 
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-300 transition bg-white text-black"
          onClick={() => setIsModalOpen(true)}
        >
          Tạo
        </button>
      </div>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-black">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="text-lg font-semibold">Cập nhật mã PIN</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">&times;</button>
            </div>
            <p className="text-sm mt-2 text-gray-600">
              Vui lòng không sử dụng các thông tin như: dãy số liên tiếp, dãy số lặp lại, ngày sinh nhật, hoặc mật khẩu tài khoản ngân hàng làm mật khẩu của Ví.
            </p>
            <div className="mt-4">
              <label className="block text-sm font-medium">Mã PIN mới</label>
              <input 
                type="password"
                className={`w-full border rounded p-2 mt-1 bg-white ${pinErrors.length > 0 ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Nhập mật khẩu" 
                value={pin}
                onChange={handlePinChange}
                maxLength={6}
              />
              {pinErrors.map((error, index) => (
                <p key={index} className="text-red-500 text-sm mt-1">{error}</p>
              ))}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium">Xác nhận mã PIN</label>
              <input 
                type="password"
                className={`w-full border rounded p-2 mt-1 bg-white ${confirmPinError ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Nhập lại mật khẩu" 
                value={confirmPin}
                onChange={handleConfirmPinChange}
                maxLength={6}
              />
              {confirmPinError && <p className="text-red-500 text-sm mt-1">{confirmPinError}</p>}
            </div>
            <div className="flex justify-end mt-4">
              <button 
                className="px-4 py-2 border rounded-lg mr-2 hover:bg-gray-100 bg-white" 
                onClick={() => setIsModalOpen(false)}
              >
                Hủy
              </button>
              <button 
                className={`px-4 py-2 text-white rounded-lg ${isValidForm() ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-400 cursor-not-allowed'}`}
                disabled={!isValidForm()}
                onClick={() => {
                  // Handle PIN submission here
                  if (isValidForm()) {
                    // Process the PIN
                    setIsModalOpen(false);
                  }
                }}
              >
                Tiếp theo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentSetting;
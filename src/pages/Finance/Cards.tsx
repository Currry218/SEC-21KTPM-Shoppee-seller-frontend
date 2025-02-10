import React, { useState } from 'react';
import Card from '../../components/common/Card';
import OrangeButton from '../../components/common/OrangeButton';
import WhiteButton from '../../components/common/WhiteButton';

const Cards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    bankName: '',
    branchName: '',
    accountNumber: '',
    accountHolderName: '',
  });
  const [defaultAccount, setDefaultAccount] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ //clear form data when close
        fullName: '',
        idNumber: '',
        bankName: '',
        branchName: '',
        accountNumber: '',
        accountHolderName: '',
    });
    setDefaultAccount(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDefaultAccount(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log("Set as default:", defaultAccount)
    closeModal();
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-2 text-black">Tài khoản ngân hàng</h1>
      <Card>
        <div className="grid grid-cols-3 gap-4 max-w-4xl">
          <div className="aspect-square w-72 border-2 border-dashed border-gray-300 cursor-pointer hover:border-orange-500 transition-colors duration-200"
              onClick={openModal}>
              <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-4xl text-gray-400 mb-2">+</div>
                  <p className="text-gray-500 text-base">Thêm Tài khoản Ngân hàng</p>
              </div>
          </div>
        </div>
      </Card>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black">Tài khoản ngân hàng</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 bg-white hover:text-gray-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                        Họ & Tên
                    </label>
                    <div className="relative">
                        <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full text-black px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-sm"
                        maxLength={64}
                        required
                        />
                         <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                            {formData.fullName.length}/64
                        </div>
                    </div>
                </div>

                <div>
                <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">
                    Số CMND
                </label>
                <div className="relative">
                    <input
                        type="text"
                        id="idNumber"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-sm"
                        required
                    />
                </div>
                </div>

                <div>
                <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">
                    Tên Ngân hàng
                </label>
                <select
                    id="bankName"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-sm"
                    required
                >
                    <option value="" disabled>Chọn ngân hàng</option>
                    <option value="Vietcombank">Vietcombank</option>
                    <option value="Techcombank">Techcombank</option>
                    <option value="BIDV">BIDV</option>
                    
                </select>
                </div>

                <div>
                <label htmlFor="branchName" className="block text-sm font-medium text-gray-700">
                    Tên chi nhánh ngân hàng (Theo thông tin trên sao kê)
                </label>
                <select
                    id="branchName"
                    name="branchName"
                    value={formData.branchName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-sm"
                    required
                >
                    <option value="" disabled>Chọn chi nhánh</option>
                    {/* Options will depend on selected bank, you'd need to fetch/filter this. */}
                    {formData.bankName === "Vietcombank" && (
                    <>
                        <option value="hcm">TP.HCM</option>
                        <option value="hanoi">Hà Nội</option>
                    </>
                    )}
                    {formData.bankName === "Techcombank" && (
                    <>
                        <option value="danang">Đà Nẵng</option>
                        <option value="cantho">Cần Thơ</option>
                    </>
                    )}
                    {formData.bankName === "BIDV" && (
                    <>
                        <option value="haiduong">Hải Dương</option>
                        <option value="haiphong">Hải Phòng</option>
                    </>
                    )}
                </select>
                </div>

                <div>
                <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                    Số tài khoản
                </label>
                <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-sm"
                    required
                />
                </div>

                <div>
                <label htmlFor="accountHolderName" className="block text-sm font-medium text-gray-700">
                    Tên chủ tài khoản (viết in hoa, không dấu - NGUYEN VAN A)
                </label>
                <div className="relative">
                    <input
                        type="text"
                        id="accountHolderName"
                        name="accountHolderName"
                        value={formData.accountHolderName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-sm"
                        maxLength={64}
                        required
                    />
                     <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                        {formData.accountHolderName.length}/64
                    </div>
                </div>
                </div>

                <div className="flex items-center">
                <input
                    id="defaultAccount"
                    type="checkbox"
                    checked={defaultAccount}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 bg-white rounded"
                />
                <label htmlFor="defaultAccount" className="ml-2 block text-sm bg-white text-gray-900">
                    Đặt là tài khoản mặc định
                </label>
                </div>
                <div className="flex justify-end gap-4 mt-4">
                    <WhiteButton label="Hủy" onClick={closeModal} />
                    <OrangeButton label="Tiếp theo" type="submit" />
                </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
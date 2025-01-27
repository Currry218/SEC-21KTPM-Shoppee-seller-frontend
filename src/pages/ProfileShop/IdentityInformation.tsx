import WhiteButton from "../../components/common/WhiteButton";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const IdentityInformation = () => {
  const [visibility, setVisibility] = useState({
    cccdNumber: false,  // Số Căn Cước Công Dân
    fullName: false,     // Họ & Tên
    idCardImage: false,  // Hình chụp của thẻ CMND/CCCD/hộ chiếu
    faceBiometrics: false // Sinh trắc học khuôn mặt
  });

  // Toggle visibility function for each section
  const toggleVisibility = (section: keyof typeof visibility) => {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [section]: !prevVisibility[section]
    }));
  };

  return (
    <div className="p-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center pb-4 mb-4">
        <h2 className="text-xl text-black">Thông tin định danh</h2>
        <div className="space-x-4">
          <WhiteButton label="Chỉnh sửa thông tin" />
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Quốc tịch */}
        <div className="flex items-center space-x-4">
          <label className="w-1/4 text-right flex-shrink-0 text-black text-sm">
            Quốc tịch
          </label>
          <div className="flex-grow">
            <span className="py-2 text-black text-sm">-</span>
          </div>
        </div>

        {/* Số Căn cước Công dân (CCCD) */}
        <div className="flex items-center space-x-4">
          <label className="w-1/4 text-right flex-shrink-0 text-black text-sm">
            Số Căn cước Công dân (CCCD)
          </label>
          <div className="flex-grow flex items-center">
            {/* Hiển thị nội dung hoặc dấu sao */}
            <span className="py-2 text-black text-sm">
              {visibility.cccdNumber
                ? "000000000000"
                : "************"}
            </span>
            {/* Nút con mắt */}
            <button
              onClick={() => toggleVisibility('cccdNumber')}
              type="button"
              className="p-1 px-4 text-gray-600 bg-white"
              style={{ outline: "none", border: "none", }}
            >
              {visibility.cccdNumber ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
        </div>

        {/* Họ têntên */}
        <div className="flex items-center space-x-4">
          <label className="w-1/4 text-right flex-shrink-0 text-black text-sm">
            Họ & tên
          </label>
          <div className="flex-grow flex items-center">
            {/* Hiển thị nội dung hoặc dấu sao */}
            <span className="py-2 text-black text-sm">
              {visibility.fullName
                ? "Nguyễn Văn A"
                : "************"}
            </span>
            {/* Nút con mắt */}
            <button
              onClick={() => toggleVisibility('fullName')}
              type="button"
              className="p-1 px-4 text-gray-600 bg-white"
              style={{ outline: "none", border: "none", }}
            >
              {visibility.fullName ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
        </div>

        {/* Hình chụp của thẻ CMND/CCCD/hộ chiếu */}
        <div>
          {/* Your label and the image section */}
          <div className="flex items-center space-x-4 pb-16">
            <label className="w-1/4 text-right flex-shrink-0 text-black text-sm">
              Hình chụp của thẻ CMND/CCCD/hộ chiếu
            </label>
            <div className="flex-grow flex items-center">

              {/* Conditional Image Rendering */}
              <div className="w-[110px] h-[20px] px-2 rounded">
                {visibility.idCardImage ? (
                  <img
                    className="image rounded"
                    src="https://th.bing.com/th/id/OIP.gpqHX73b455e2KbESvuIJAHaFT?w=2596&h=1857&rs=1&pid=ImgDetMain" // Replace with your actual image URL
                    alt="Actual ID Card Image"
                  />
                ) : (
                  <img
                    className="image"
                    src="https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/mmf_portal_seller_root_dir/static/modules/shop-profile/image/mask_image.e782cd4.png"
                    alt="Masked ID Card Image"
                  />
                )}
              </div>
              {/* Nút con mắt */}
              <button
                onClick={() => toggleVisibility('idCardImage')}
                type="button"
                className="p-1 px-4 text-gray-600 bg-white"
                style={{ outline: "none", border: "none" }}
              >
                {visibility.idCardImage ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>
        </div>


        {/* Sinh trắc học khuôn mặt */}
        <div className="pb-10">
          {/* Your label and the image section */}
          <div className="flex items-center space-x-4">
            <label className="w-1/4 text-right flex-shrink-0 text-black text-sm">
              Sinh trắc học khuôn mặt
            </label>
            <div className="flex-grow flex items-center">

              {/* Conditional Image Rendering */}
              <div className="w-[110px] h-[20px] rounded px-2">
                {visibility.faceBiometrics ? (
                  <img
                    className="image rounded"
                    src="https://media.licdn.com/dms/image/C5603AQEBU2cDgZeLgg/profile-displayphoto-shrink_800_800/0/1612541393505?e=2147483647&v=beta&t=TKZW3zy9c9SStEP2MCaQHKp84WCjXJ4BIkzb_qbCAl8" // Replace with your actual image URL
                    alt="Actual ID Card Image"
                  />
                ) : (
                  <img
                    className="image"
                    src="https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/mmf_portal_seller_root_dir/static/modules/shop-profile/image/mask_image.e782cd4.png"
                    alt="Masked ID Card Image"
                  />
                )}
              </div>
              <div className="w-[110px] h-[20px] px-2">
                {visibility.faceBiometrics ? (
                  <img
                    className="image rounded"
                    src="https://media.licdn.com/dms/image/C5603AQEBU2cDgZeLgg/profile-displayphoto-shrink_800_800/0/1612541393505?e=2147483647&v=beta&t=TKZW3zy9c9SStEP2MCaQHKp84WCjXJ4BIkzb_qbCAl8" // Replace with your actual image URL
                    alt="Actual ID Card Image"
                  />
                ) : (
                  <img
                    className="image"
                    src="https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/mmf_portal_seller_root_dir/static/modules/shop-profile/image/mask_image.e782cd4.png"
                    alt="Masked ID Card Image"
                  />
                )}
              </div>
              {/* Nút con mắt */}
              <button
                onClick={() => toggleVisibility('faceBiometrics')}
                type="button"
                className="p-1 px-4 text-gray-600 bg-white"
                style={{ outline: "none", border: "none" }}
              >
                {visibility.faceBiometrics ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default IdentityInformation;
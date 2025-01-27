import OrangeButton from "../../components/common/OrangeButton";
import WhiteButton from "../../components/common/WhiteButton";
import { useState } from "react";

const GeneralInformation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [shopName, setShopName] = useState('bc_ml2zyn5');
  const [shopDesc, setShopDesc] = useState(
    'Shop của chúng tôi là nơi cung cấp đa dạng các sản phẩm chất lượng cao, đáp ứng nhu cầu mua sắm của mọi khách hàng. Với không gian trưng bày hiện đại và thân thiện, chúng tôi cam kết mang lại trải nghiệm mua sắm thoải mái và tiện lợi. Các sản phẩm tại shop bao gồm thời trang, phụ kiện, đồ gia dụng, và nhiều mặt hàng khác được chọn lọc kỹ lưỡng từ các thương hiệu uy tín. Đội ngũ nhân viên nhiệt tình, chuyên nghiệp luôn sẵn sàng hỗ trợ, tư vấn để bạn tìm được sản phẩm phù hợp nhất.'
  );
  const [image, setImage] = useState('url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAABJlBMVEXP2NxgfYtjf412j5uMoavO19uis7vG0dVxi5fBzNJyjJhjgI56kp5hfoxxi5h5kZ2ouL9ohJGInaipucCHnah3kJyxv8bL1NnM1dlphJGXqrN4kZzM1tqUp7Gnt76InqlkgY6wvsWGnKdrhpOnuL+xwMZ8lJ+3xMvAzNGCmaTFz9Sdr7fN1trN19tlgY5qhZJkgI6/y9COoqzL1dlphJJ0jZp7k566x8y7x81ng5CywMegsrp4kZ14kJyhs7uJn6nH0dZlgY+Fm6bG0daWqrO2xMqzwcfF0NXBzdK3xcu0wsh7k5+qusG0wsmzwchuiJVviZaYq7S7yM2Kn6m8yM6/y9GInqiWqbKNoqxzjJmjtLyqucGfsbmdr7iwv8WKoKpuiZVif42PQ9RwAAABzUlEQVR4Xu3YVZLjShBA0UyBmZmamXuYmZmZ3tv/Jua3Y8JWTdsKKR1zzwruR1aVlDIdAAAAAAAAAAAAAAAAAADyN1t+3fPqfiOTl7kQ1qp6QqkZinmdnP6hcFVs6wY6RtATwx75OlY7K2ZlczpBzmx194ZONOyKTbc0QiAmrWikFTHoIKeRKgdiz7o6LIo919XhophzRp3yYs01dcqINavqtCTWXFAnX6y5ok7nxZqyOhWJNjAeHERzVx6Py7Y6PRZzqnP4wSQ1dajN4U9AIRSDOhqpIyYFGuGs2HRuqBMNR/O3rKlYXjG1dazhbTGsF4yd557YtlFwrHpNCpslPeHZ81DmQj7T8OvFYt9vfM3LPwkAgOzDzMLdUqV/qHqnXymtLmRe3hPD9h/s7RzpGEc7e1v7Yk+4dX/zWCMsbw6eiClPgzV107XPL8SI3cEr/Wuv3+xK+t4ueXoq3rv3kq4PrbKeWvnjtqRn9MnTqXiDkaTkUkGn9uWypKK5rDM4/CYp+K4z+iGJW9SZrSc+z57OzEt6rtsag6ok6qfGYkOS1NJY/JIk/aexyEmS/tdYHEuSNCbzGU000UQTTTQAAAAAAAAAAAAAAAAAAL8BwZgl987F+p8AAAAASUVORK5CYII=")');

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  // Hàm xử lý khi người dùng lưu thay đổi
  const handleSaveClick = () => {
    setIsEditing(false);
    // thêm logic
  };

  // Hàm xử lý khi nhấn nút "Sửa"
  const handleEditLogo = () => {
    document.getElementById('fileInput')?.click();
  };


  // Hàm xử lý khi người dùng chọn ảnh
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result) {
        setImage(reader.result as string); // Cập nhật ảnh sau khi đọc xong
      }
    };

    reader.readAsDataURL(file); // Đọc ảnh dưới dạng URL
  };




  return (
    <div className="p-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center pb-4 mb-4">
        <h2 className="text-xl text-black">Thông tin cơ bản</h2>
        {/* Ẩn các nút khi đang chỉnh sửa */}
        {!isEditing && (
          <div className="space-x-4">
            <WhiteButton label="Xem shop của tôi" />
            <WhiteButton label="Chỉnh sửa" onClick={handleEditClick} />
          </div>
        )}
      </div>


      {/* Form */}
      <form className="space-y-6">
        {/* Tên Shop */}
        <div className="flex items-center space-x-4">
          <label htmlFor="shopName" className="w-1/6 text-right flex-shrink-0 text-black text-sm">
            Tên Shop
          </label>
          <div className="flex-grow relative">
            {isEditing ? (
              <div className="relative">
                <input
                  type="text"
                  id="shopName"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  className="py-1 px-3 bg-white border border-gray-300 rounded w-full text-black text-sm pr-12" // Thêm padding phải để đủ chỗ hiển thị số ký tự
                  maxLength={20} // Giới hạn tên shop tối đa 20 ký tự
                />
                {/* Hiển thị số ký tự đã nhập bên trong input */}
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                  {shopName.length}/20
                </div>
              </div>
            ) : (
              <span className="py-2 text-black text-sm">{shopName}</span>
            )}
          </div>

        </div>



        {/* Logo của Shop */}
        <div className="flex items-center space-x-4">
          <label className="w-1/6 text-right flex-shrink-0 text-black text-sm">
            Logo của Shop
          </label>
          <div className="flex items-center space-x-4 relative">
            <div
              className="overflow-hidden relative w-24 h-24 bg-cover bg-center rounded-full"
              style={{ backgroundImage: image }}>
              {/* Nút "Sửa" chỉ hiển thị khi đang chỉnh sửa */}
              {isEditing && (
                <button
                  type="button"
                  onClick={handleEditLogo} // Hàm xử lý khi bấm "Sửa"
                  className="absolute bottom-0 left-0 w-full h-1/4 bg-black/50 text-white text-xs flex justify-center items-center rounded-b-full"
                  style={{ outline: 'none', border: 'none' }}
                >
                  {/* Input ẩn để chọn ảnh */}
                  <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}  // Hàm xử lý khi chọn ảnh
                  />
                  Sửa
                </button>
              )}
            </div>
            <ul className="text-xs text-gray-500 list-disc pl-5 space-y-1">
              <li>Kích thước hình ảnh tiêu chuẩn: Chiều rộng 300px, Chiều cao 300px</li>
              <li>Dung lượng file tối đa: 2.0MB</li>
              <li>Định dạng file được hỗ trợ: JPG, JPEG, PNG</li>
            </ul>
          </div>
        </div>

        {/* Mô tả Shop */}
        <div className="flex items-center space-x-4">
          <label htmlFor="shopDesc" className="w-1/6 text-right flex-shrink-0 text-black text-sm">
            Mô tả Shop
          </label>
          <div className="flex-grow relative">
            {isEditing ? (
              <textarea
                id="shopDesc"
                value={shopDesc}
                onChange={(e) => setShopDesc(e.target.value)}
                className="resize-auto py-2 px-3 bg-white border border-gray-300 rounded w-full text-black text-sm"
                rows={5} // Số dòng mặc định
                maxLength={500} // Giới hạn 500 ký tự
              />
            ) : (
              <span className="py-2 text-black text-sm">{shopDesc}</span>
            )}
            {isEditing && (
              <div className="absolute right-0 text-sm text-gray-600">
                {shopDesc.length}/500
              </div>
            )}
          </div>
        </div>


      </form>
      <div className="flex ml-[16.6667%] pl-4 mt-10">
        {/* Button Save (Hiển thị khi ở chế độ chỉnh sửa) */}
        {isEditing && (
          <div className="flex pr-4 justify-start space-x-4">
            <OrangeButton label="Lưu" className="px-8 py-1" onClick={handleSaveClick} />
          </div>
        )}

        {/* Button Save (Hiển thị khi ở chế độ chỉnh sửa) */}
        {isEditing && (
          <div className="flex justify-start space-x-4">
            <WhiteButton label="Hủy" className="px-8 py-1" onClick={handleSaveClick} />
          </div>
        )}
      </div>
    </div>


  );
};

export default GeneralInformation;

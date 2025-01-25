import Button from "../../components/common/Button";
const GeneralInformation = () => {
  return (
    <div className="p-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center pb-4 mb-4">
        <h2 className="text-sm text-black">Thông tin cơ bản</h2>
        <div className="space-x-4">
          {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Xem Shop của tôi
          </button> */}
          <Button label="Chỉnh sửa" />
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Tên Shop */}
        <div className="flex items-center space-x-4">
          <label htmlFor="shopName" className="w-1/6 text-black text-sm">
            Tên Shop
          </label>
          <div className="flex-grow">
            <span className="py-2 text-black text-sm ">
              bc_ml2zyn5
            </span>
          </div>
        </div>


        {/* Logo của Shop */}
        <div className="flex items-center space-x-4">
          <label className="w-1/6 text-black text-sm">Logo của Shop</label>
          <div className="flex items-center space-x-4">
            <div
              className="w-24 h-24 bg-cover bg-center rounded-full"
              style={{
                backgroundImage:
                  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAABJlBMVEXP2NxgfYtjf412j5uMoavO19uis7vG0dVxi5fBzNJyjJhjgI56kp5hfoxxi5h5kZ2ouL9ohJGInaipucCHnah3kJyxv8bL1NnM1dlphJGXqrN4kZzM1tqUp7Gnt76InqlkgY6wvsWGnKdrhpOnuL+xwMZ8lJ+3xMvAzNGCmaTFz9Sdr7fN1trN19tlgY5qhZJkgI6/y9COoqzL1dlphJJ0jZp7k566x8y7x81ng5CywMegsrp4kZ14kJyhs7uJn6nH0dZlgY+Fm6bG0daWqrO2xMqzwcfF0NXBzdK3xcu0wsh7k5+qusG0wsmzwchuiJVviZaYq7S7yM2Kn6m8yM6/y9GInqiWqbKNoqxzjJmjtLyqucGfsbmdr7iwv8WKoKpuiZVif42PQ9RwAAABzUlEQVR4Xu3YVZLjShBA0UyBmZmamXuYmZmZ3tv/Jua3Y8JWTdsKKR1zzwruR1aVlDIdAAAAAAAAAAAAAAAAAADyN1t+3fPqfiOTl7kQ1qp6QqkZinmdnP6hcFVs6wY6RtATwx75OlY7K2ZlczpBzmx194ZONOyKTbc0QiAmrWikFTHoIKeRKgdiz7o6LIo919XhophzRp3yYs01dcqINavqtCTWXFAnX6y5ok7nxZqyOhWJNjAeHERzVx6Py7Y6PRZzqnP4wSQ1dajN4U9AIRSDOhqpIyYFGuGs2HRuqBMNR/O3rKlYXjG1dazhbTGsF4yd557YtlFwrHpNCpslPeHZ81DmQj7T8OvFYt9vfM3LPwkAgOzDzMLdUqV/qHqnXymtLmRe3hPD9h/s7RzpGEc7e1v7Yk+4dX/zWCMsbw6eiClPgzV107XPL8SI3cEr/Wuv3+xK+t4ueXoq3rv3kq4PrbKeWvnjtqRn9MnTqXiDkaTkUkGn9uWypKK5rDM4/CYp+K4z+iGJW9SZrSc+z57OzEt6rtsag6ok6qfGYkOS1NJY/JIk/aexyEmS/tdYHEuSNCbzGU000UQTTTQAAAAAAAAAAAAAAAAAAL8BwZgl987F+p8AAAAASUVORK5CYII=")',
              }}
            />
            <ul className="text-sm text-gray-500 list-disc pl-5 space-y-1">
              <li>Kích thước hình ảnh tiêu chuẩn: Chiều rộng 300px, Chiều cao 300px</li>
              <li>Dung lượng file tối đa: 2.0MB</li>
              <li>Định dạng file được hỗ trợ: JPG, JPEG, PNG</li>
            </ul>
          </div>

        </div>

        {/* Mô tả Shop */}
        <div className="flex items-center space-x-4">
          <label htmlFor="shopDesc" className="w-1/6 text-black text-sm">
            Mô tả Shop
          </label>
          <div className="flex-grow">
            <span className="py-2 text-black text-sm ">
              bc_ml2zyn5
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GeneralInformation;

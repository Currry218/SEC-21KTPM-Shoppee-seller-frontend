interface Version {
  name: string;
  lastUpdated: string;
  status: "Chưa đăng tải" | "Đã đăng tải";
}

const versionData: Version[] = [
  {
    name: "Bản thiết kế trên máy tính hiện tại",
    lastUpdated: "15:35 07-02-2025",
    status: "Chưa đăng tải",
  },
  {
    name: "Bản thiết kế trước đó",
    lastUpdated: "10:20 05-02-2025",
    status: "Đã đăng tải",
  },

];

const StatusBadge = ({ status }: { status: string }) => {
  return (
    <span
      className={`px-3 py-1 text-center text-xs rounded ${status === "Chưa đăng tải"
        ? "bg-red-200 text-red-700"
        : "bg-green-200 text-green-700"
        }`}
    >
      {status}
    </span>
  );
};

const HomepageDecoration = () => {
  return (
    <div>
      <div className="mb-4">
        <span
          className="text-lg text-black"
        >
          Danh sách bản nháp
        </span>
      </div>

      <div className="flex">
        <div className="flex-1 bg-white rounded shadow overflow-hidden border border-gray-300">
          <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="pl-3 py-2 text-black font-normal text-sm">Tên phiên bản</th>
                <th className="pl-3 text-black font-normal text-sm">Thời gian cập nhật</th>
                <th className="pl-3 text-black font-normal text-sm">Trạng thái</th>
                <th className="pl-3 text-black font-normal text-sm">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {versionData.map((version, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="pl-3 border-y border-gray-300 text-black font-normal text-sm">{version.name}</td>
                  <td className="pl-3 border-y border-gray-300 text-black font-normal text-sm">{version.lastUpdated}</td>
                  <td className="pl-3 border-y border-gray-300 text-black font-normal text-sm">
                    <StatusBadge status={version.status} />
                  </td>
                  <td className="pl-0 border-y border-gray-300 text-black font-normal text-sm">
                    <button
                      style={{ outline: "none", border: "none", }}
                      className=" bg-transparent text-blue-500 hover:text-blue-800">
                      Chỉnh sửa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-1/3 ml-4">
          <div className="">
            <iframe
              className="w-full h-96"
              src="https://cf.shopee.sg/file/sg-11134141-7r98o-lkj9qwv3qchl4f"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageDecoration;
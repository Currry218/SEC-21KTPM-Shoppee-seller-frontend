import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Upload, PenLine } from 'lucide-react';

// Define types for tab data
type TabId = 'basic' | 'sales' | 'shipping' | 'other';
type StepId = 'Image' | 'Video' | 'Name' | 'Des' | 'Add';

interface Tab {
    id: TabId;
    label: string;
    ref: React.RefObject<HTMLDivElement>;
}

interface Step {
    id: StepId;
    label: string;
    ref: React.RefObject<HTMLDivElement>;
}

const AddProduct = () => {
    const [activeStep, setActiveStep] = useState<StepId>('Image');
    const [activeTab, setActiveTab] = useState<TabId>('basic');
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [selectedRatio, setSelectedRatio] = useState<string>("1:1");
    const [hasSelected, setHasSelected] = useState<boolean>(false);
    const [hasSelectedProduct, setHasSelectedProduct] = useState<boolean>(false);
    const [hasSelectedIndustry, setHasSelectedIndustry] = useState<boolean>(false);
    const [hasSelectedDes, setHasSelectedDes] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    // Create refs for each section
    const ImageRef = useRef<HTMLDivElement>(null);
    const VideoRef = useRef<HTMLDivElement>(null);
    const NameRef = useRef<HTMLDivElement>(null);
    const DesRef = useRef<HTMLDivElement>(null);
    const AddRef = useRef<HTMLDivElement>(null);


    const steps: Step[] = [
        { id: 'Image', label: 'Thêm ít nhất 3 hình ảnh', ref: ImageRef },
        { id: 'Video', label: 'Thêm video sản phẩm', ref: VideoRef },
        { id: 'Name', label: 'Tên sản phẩm có ít nhất 25~100 kí tự', ref: NameRef },
        { id: 'Des', label: 'Thêm ít nhất 100 kí tự hoặc 1 hình ảnh trong mô tả sản phẩm', ref: DesRef },
        { id: 'Add', label: 'Thêm thương hiệu', ref: AddRef }
    ];

    // Create refs for each section
    const basicRef = useRef<HTMLDivElement>(null);
    const salesRef = useRef<HTMLDivElement>(null);
    const shippingRef = useRef<HTMLDivElement>(null);
    const otherRef = useRef<HTMLDivElement>(null);

    // Define tab data with proper typing
    const tabs: Tab[] = [
        { id: 'basic', label: 'Thông tin cơ bản', ref: basicRef },
        { id: 'sales', label: 'Thông tin bán hàng', ref: salesRef },
        { id: 'shipping', label: 'Vận chuyển', ref: shippingRef },
        { id: 'other', label: 'Thông tin khác', ref: otherRef }
    ];

    const handleTabClick = (tabId: TabId) => {
        setActiveTab(tabId);
        const ref = tabs.find(tab => tab.id === tabId)?.ref;
        ref?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleStepClick = (stepId: StepId) => {
        setActiveStep(stepId);
        const ref = steps.find(step => step.id === stepId)?.ref;
        ref?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleRatioChangeInf = () => {
        setHasSelected(true);
        setHasSelectedProduct(false);
        setHasSelectedIndustry(false);
        setHasSelectedDes(false);
    };

    const handleRatioChangePro = () => {
        setHasSelected(false);
        setHasSelectedProduct(true);
        setHasSelectedIndustry(false);
        setHasSelectedDes(false);
    };

    const handleRatioChangeInd = () => {
        setHasSelected(false);
        setHasSelectedProduct(false);
        setHasSelectedIndustry(true);
        setHasSelectedDes(false);
    };

    const handleRatioChangeDes = () => {
        setHasSelected(false);
        setHasSelectedProduct(false);
        setHasSelectedIndustry(false);
        setHasSelectedDes(true);
    };

    const handleCancelClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmClick = () => {
        navigate('/portal/product/list/all');
    };

    useEffect(() => {
        const handleScroll = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id as TabId);
                }
            });
        };

        const observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });

        tabs.forEach(tab => {
            if (tab.ref.current) {
                observer.observe(tab.ref.current);
            }
        });

        return () => {
            tabs.forEach(tab => {
                if (tab.ref.current) {
                    observer.unobserve(tab.ref.current);
                }
            });
        };
    }, []);

    return (
        <div className="flex min-h-screen px-20 gap-5 mt-6">
            {/* Sidebar */}
            <div className="fixed top-20 left-20 w-80 bg-blue-50 p-6 border-r border-t-4 border-blue-500 shadow-md rounded-xl"
                id="sidebar">
                <h2 className="text-lg font-semibold mb-4 text-black">Gợi ý điền Thông tin</h2>
                <ul className="space-y-3 bg-white rounded-xl text-sm">
                    {steps.map(step => (
                        <li
                            key={step.id}
                            onClick={() => handleStepClick(step.id)}
                            className={`flex items-center space-x-2 cursor-pointer py-2 px-3 rounded ${activeStep === step.id
                                ? 'bg-blue-100 text-black font-semibold'
                                : 'text-gray-600 hover:bg-blue-100/50'
                                }`}

                        >
                            {/* SVG Icon */}
                            <svg
                                className="w-4 h-4 text-blue-500"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fillRule="evenodd" d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M11.1464466,5.92870864 L7.097234,9.97792125 L4.85355339,7.73424065 C4.65829124,7.5389785 4.34170876,7.5389785 4.14644661,7.73424065 C3.95118446,7.92950279 3.95118446,8.24608528 4.14644661,8.44134743 L6.7436806,11.0385814 C6.93894275,11.2338436 7.25552524,11.2338436 7.45078739,11.0385814 L11.8535534,6.63581542 C12.0488155,6.44055327 12.0488155,6.12397078 11.8535534,5.92870864 C11.6582912,5.73344649 11.3417088,5.73344649 11.1464466,5.92870864 Z"></path>
                            </svg>

                            <span>{step.label}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Suggestion Section Info */}
            {hasSelected && (
                <div
                    className="fixed left-20 w-80 bg-white p-4 rounded-lg shadow-md border border-gray-200"
                    style={{ top: `calc(80px + ${document.getElementById('sidebar')?.offsetHeight || 200}px + 10px)` }}
                >
                    <h3 className="font-semibold mb-2 text-blue-800 flex justify-between items-center">
                        Gợi ý
                        <svg
                            className="w-5 h-5 text-blue-500"
                            viewBox="0 0 32 48"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M23.703 5.997c-6.371-3.935-14.518-1.6-18.197 5.216-3.623 6.714-1.122 14.722 5.297 18.686 1.3.803 2.366 2.152 3.255 3.865.893 1.72 1.656 3.903 2.309 6.509l.272 1.086 11.513-3.3-.273-1.086c-.652-2.606-1.011-4.904-1.042-6.872-.031-1.959.262-3.697 1.012-5.088 3.837-7.11 2.144-15.13-4.146-19.016ZM3.078 9.713C7.53 1.463 17.392-1.364 25.105 3.4c7.793 4.814 9.688 14.748 5.173 23.114-.406.752-.663 1.889-.637 3.538.025 1.639.33 3.68.947 6.145l.998 3.985-16.93 4.853-.998-3.985c-.617-2.465-1.308-4.396-2.052-5.829-.748-1.442-1.502-2.288-2.205-2.723-7.562-4.67-10.83-14.431-6.323-22.784Zm15.287 39.984 12.19-3.494.725 2.898-12.19 3.494-.725-2.898Z"></path>
                        </svg>
                    </h3>
                    <h3 className="font-semibold mb-2 text-black">Hình ảnh sản phẩm</h3>
                    <div className="text-xs text-gray-600 text-sm">
                        <p>
                            • Tham khảo hướng dẫn hình ảnh sản phẩm khi đăng bán{' '}
                            <a href="#" className="text-blue-600">tại đây</a>
                        </p>
                        <p>
                            • Tham khảo hướng dẫn cho Shopee Mall{' '}
                            <a href="#" className="text-blue-600">tại đây</a>
                        </p>
                    </div>
                </div>
            )}


            {/* Suggestion Section Name Products */}
            {hasSelectedProduct && (
                <div
                    className="fixed left-20 w-80 bg-white p-4 rounded-lg shadow-md border border-gray-200"
                    style={{ top: `calc(80px + ${document.getElementById('sidebar')?.offsetHeight || 200}px + 10px)` }}
                >
                    <h3 className="font-semibold mb-2 text-blue-800 flex justify-between items-center">
                        Gợi ý
                        <svg
                            className="w-5 h-5 text-blue-500"
                            viewBox="0 0 32 48"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M23.703 5.997c-6.371-3.935-14.518-1.6-18.197 5.216-3.623 6.714-1.122 14.722 5.297 18.686 1.3.803 2.366 2.152 3.255 3.865.893 1.72 1.656 3.903 2.309 6.509l.272 1.086 11.513-3.3-.273-1.086c-.652-2.606-1.011-4.904-1.042-6.872-.031-1.959.262-3.697 1.012-5.088 3.837-7.11 2.144-15.13-4.146-19.016ZM3.078 9.713C7.53 1.463 17.392-1.364 25.105 3.4c7.793 4.814 9.688 14.748 5.173 23.114-.406.752-.663 1.889-.637 3.538.025 1.639.33 3.68.947 6.145l.998 3.985-16.93 4.853-.998-3.985c-.617-2.465-1.308-4.396-2.052-5.829-.748-1.442-1.502-2.288-2.205-2.723-7.562-4.67-10.83-14.431-6.323-22.784Zm15.287 39.984 12.19-3.494.725 2.898-12.19 3.494-.725-2.898Z"></path>
                        </svg>
                    </h3>
                    <h3 className="font-semibold mb-2 text-black">Tên sản phẩm</h3>
                    <div className="text-xs text-gray-600">
                        <p>
                            • Tham khảo quy định đặt tên {' '}
                            <a href="#" className="text-blue-600">tại đây</a>
                        </p>
                        <p>
                            • Với Shopee Mall, xem thêm quy định {' '}
                            <a href="#" className="text-blue-600">tại đây</a>
                        </p>
                        <p>
                            Sử dụng tiếng Việt có dấu, không viết tắt, tối thiểu 10 ký tự, 20 ký tự đối với Shopee Mall. Độ dài tối đa của tên sản phẩm cho tất cả các Shop là 120 ký tự (bao gồm cả khoảng trắng).
                        </p>
                    </div>
                </div>
            )}

            {/* Suggestion Section Industry*/}
            {hasSelectedIndustry && (
                <div
                    className="fixed left-20 w-80 bg-white p-4 rounded-lg shadow-md border border-gray-200"
                    style={{ top: `calc(80px + ${document.getElementById('sidebar')?.offsetHeight || 200}px + 10px)` }}
                >
                    <h3 className="font-semibold mb-2 text-blue-800 flex justify-between items-center">
                        Gợi ý
                        <svg
                            className="w-5 h-5 text-blue-500"
                            viewBox="0 0 32 48"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M23.703 5.997c-6.371-3.935-14.518-1.6-18.197 5.216-3.623 6.714-1.122 14.722 5.297 18.686 1.3.803 2.366 2.152 3.255 3.865.893 1.72 1.656 3.903 2.309 6.509l.272 1.086 11.513-3.3-.273-1.086c-.652-2.606-1.011-4.904-1.042-6.872-.031-1.959.262-3.697 1.012-5.088 3.837-7.11 2.144-15.13-4.146-19.016ZM3.078 9.713C7.53 1.463 17.392-1.364 25.105 3.4c7.793 4.814 9.688 14.748 5.173 23.114-.406.752-.663 1.889-.637 3.538.025 1.639.33 3.68.947 6.145l.998 3.985-16.93 4.853-.998-3.985c-.617-2.465-1.308-4.396-2.052-5.829-.748-1.442-1.502-2.288-2.205-2.723-7.562-4.67-10.83-14.431-6.323-22.784Zm15.287 39.984 12.19-3.494.725 2.898-12.19 3.494-.725-2.898Z"></path>
                        </svg>
                    </h3>
                    <h3 className="font-semibold mb-2 text-black">Ngành hàng</h3>
                    <div className="text-xs text-gray-600">
                        <p>
                            • Việc đăng tải sản phẩm đúng ngành hàng giúp Người mua dễ dàng tìm thấy sản phẩm của Shop khi đang tìm kiếm trong ngành hàng đó.
                        </p>
                        <p>
                            • Người bán có thể dễ dàng tìm thấy ngành hàng phù hợp cho sản phẩm của Shop tại  {' '}
                            <a href="#" className="text-blue-600">Danh sách ngành hàng</a>
                        </p>
                        <p>
                            • Tham khảo hướng dẫn chọn danh mục ngành hàng cho sản phẩm {' '}
                            <a href="#" className="text-blue-600">tại đây</a>
                        </p>

                    </div>
                </div>
            )}

            {/* Suggestion Section Description*/}
            {hasSelectedDes && (
                <div
                    className="fixed left-20 w-80 bg-white p-4 rounded-lg shadow-md border border-gray-200"
                    style={{ top: `calc(80px + ${document.getElementById('sidebar')?.offsetHeight || 200}px + 10px)` }}
                >
                    <h3 className="font-semibold mb-2 text-blue-800 flex justify-between items-center">
                        Gợi ý
                        <svg
                            className="w-5 h-5 text-blue-500"
                            viewBox="0 0 32 48"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M23.703 5.997c-6.371-3.935-14.518-1.6-18.197 5.216-3.623 6.714-1.122 14.722 5.297 18.686 1.3.803 2.366 2.152 3.255 3.865.893 1.72 1.656 3.903 2.309 6.509l.272 1.086 11.513-3.3-.273-1.086c-.652-2.606-1.011-4.904-1.042-6.872-.031-1.959.262-3.697 1.012-5.088 3.837-7.11 2.144-15.13-4.146-19.016ZM3.078 9.713C7.53 1.463 17.392-1.364 25.105 3.4c7.793 4.814 9.688 14.748 5.173 23.114-.406.752-.663 1.889-.637 3.538.025 1.639.33 3.68.947 6.145l.998 3.985-16.93 4.853-.998-3.985c-.617-2.465-1.308-4.396-2.052-5.829-.748-1.442-1.502-2.288-2.205-2.723-7.562-4.67-10.83-14.431-6.323-22.784Zm15.287 39.984 12.19-3.494.725 2.898-12.19 3.494-.725-2.898Z"></path>
                        </svg>
                    </h3>
                    <h3 className="font-semibold mb-2 text-black">Mô tả sản phẩm</h3>
                    <div className="text-xs text-gray-600">
                        <p>
                            <strong>Lưu ý: </strong>
                            Đối với một số mặt hàng nhất định cần cung cấp thông tin tại mục "Mô tả sản phẩm" theo Nghị định 85/2021/NĐ-CP (Xem hướng dẫn  {' '}
                            <a href="#" className="text-blue-600">tại đây)</a>
                        </p>
                        <p>
                            Tham khảo hướng dẫn chọn danh mục ngành hàng cho sản phẩm {' '}
                            <a href="#" className="text-blue-600">tại đây</a>
                        </p>
                        <p>
                            • Số chứng nhận phê duyệt kiểu <br />
                            • Khuyến cáo - Hướng dẫn sử dụng <br />
                            • Thông số kỹ thuật <br />
                            • Thông tin cảnh báo

                        </p>
                    </div>
                </div>
            )}



            {/* Main Content */}
            <div className="ml-[22rem] flex-grow h-full p-6 bg-white rounded-xl shadow-lg overflow-auto">
                <div className="max-w-2xl mx-auto">

                    {/* Horizontal Tabs */}
                    <div className="flex border-b sticky top-0 bg-white">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => handleTabClick(tab.id)}
                                className={`px-6 py-3 bg-white hover:text-gray-800 focus:outline-none outline-none ${activeTab === tab.id
                                    ? 'text-orange-600 border-b-2 border-orange-500 font-medium'
                                    : 'text-black'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>


                    {/* All Sections Content */}
                    <div className="divide-y text-black">
                        {/* Basic Information Section */}
                        <div id="basic" ref={basicRef} className="p-6">
                            <h2 className="text-lg font-semibold mb-4 ">Thông tin cơ bản</h2>

                            {/* Product Images */}
                            <div className="mb-4">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    onClick={() => handleRatioChangeInf()} // Kích hoạt khi nhấn vào label
                                >
                                    <span className="text-red-500">*</span> Hình ảnh sản phẩm
                                </label>



                                {/* Radio Buttons */}
                                <div className="flex items-center space-x-4 mb-2">
                                    {/* Tỷ lệ 1:1 */}
                                    <label className="flex items-center cursor-pointer space-x-2">
                                        <input
                                            type="radio"
                                            name="imageRatio"
                                            value="1:1"
                                            checked={selectedRatio === "1:1"}
                                            onChange={() => setSelectedRatio("1:1")}
                                            onClick={() => handleRatioChangeInf()}
                                            className="peer hidden"
                                        />
                                        <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-orange-500">
                                            <div className="w-3 h-3 bg-transparent rounded-full peer-checked:bg-orange-500"></div>
                                        </div>
                                        <span className={`text-sm font-medium ${selectedRatio === "1:1" ? "text-orange-500" : "text-gray-700"}`}>
                                            Hình ảnh tỷ lệ 1:1
                                        </span>
                                    </label>

                                    {/* Tỷ lệ 3:4 */}
                                    <label className="flex items-center cursor-pointer space-x-2">
                                        <input
                                            type="radio"
                                            name="imageRatio"
                                            value="3:4"
                                            checked={selectedRatio === "3:4"}
                                            onChange={() => setSelectedRatio("3:4")}
                                            onClick={() => handleRatioChangeInf()}
                                            className="peer hidden"
                                        />
                                        <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-orange-500">
                                            <div className="w-3 h-3 bg-transparent rounded-full peer-checked:bg-orange-500"></div>
                                        </div>
                                        <span className={`text-sm font-medium ${selectedRatio === "3:4" ? "text-orange-500" : "text-gray-700"}`}>
                                            Hình ảnh tỷ lệ 3:4
                                        </span>
                                    </label>

                                    <a href="#" className="text-blue-600" onClick={() => handleRatioChangeInf()} >Ví dụ</a>
                                </div>

                                {/* Upload Button */}
                                <label className="cursor-pointer flex items-center px-4 py-2 bg-gray-100 text-blue-600 rounded w-48" onClick={() => handleRatioChangeInf()} >
                                    <Upload className="mr-2 h-5 w-5" />
                                    Thêm hình ảnh (0/9)
                                    <input type="file" multiple className="hidden" />
                                </label>
                            </div>

                            {/* Cover Image */}
                            <div ref={ImageRef} className="mb-4" >
                                <label className="block text-sm font-medium text-gray-700 mb-2" onClick={() => handleRatioChangeInf()}>
                                    <span className="text-red-500">*</span> Ảnh bìa
                                </label>
                                <label className="cursor-pointer flex items-center px-4 py-2 bg-gray-100 text-blue-600 rounded w-48" onClick={() => handleRatioChangeInf()}>
                                    <Camera className="mr-2 h-5 w-5" />
                                    Thêm hình ảnh (0/1)
                                    <input type="file" className="hidden" />
                                </label>
                                <small className="text-gray-500 text-xs">
                                    • Tải lên hình ảnh 1:1.<br></br> • Ảnh sẽ được hiển thị tại các trang Kết quả tìm kiếm, Gợi ý hôm nay... Việc sử dụng ảnh bìa đẹp sẽ thu hút thêm lượt truy cập vào sản phẩm của bạn
                                </small>

                            </div>

                            {/* Product Video */}
                            <div ref={VideoRef} className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Video sản phẩm
                                </label>
                                <label className="cursor-pointer flex items-center px-4 py-2 bg-gray-100 text-blue-600 rounded w-48">
                                    <Upload className="mr-2 h-5 w-5" />
                                    Thêm video
                                    <input type="file" className="hidden" />
                                </label>
                                <small className="text-gray-500 text-xs block">
                                    • Kích thước tối đa 30Mb, độ phân giải không vượt quá 1280x1280px<br />
                                    • Độ dài: 10s-60s<br />
                                    • Định dạng: MP4<br />
                                    • Lưu ý: sản phẩm có thể hiển thị trong khi video đang được xử lý. Video sẽ tự động hiển thị sau khi đã xử lý thành công.
                                </small>
                            </div>

                            {/* Product Name */}
                            <div ref={NameRef} className="mb-4" onClick={() => handleRatioChangePro()}>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <span className="text-red-500">*</span> Tên sản phẩm
                                </label>

                                {/* Khung chứa input và bộ đếm */}
                                <div className={`w-full flex items-center border rounded px-3 py-2 bg-white ${productName && (productName.trim().length < 10 || productName !== productName.trim()) ? "border-red-500" : "border-gray-300"}`}>
                                    <input
                                        type="text"
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                        placeholder="Tên sản phẩm + Thương hiệu + Model + Thông số kỹ thuật"
                                        className="w-full outline-none bg-transparent"
                                    />
                                    <div className="text-gray-500 text-xs ml-2">{productName.length}/120</div>
                                </div>

                                {/* Hiển thị lỗi khi có nội dung nhập vào */}
                                {productName && (
                                    <>
                                        {productName !== productName.trim() && (
                                            <div className="text-red-500 text-xs mt-1">
                                                Vui lòng kiểm tra lại. Đầu và cuối của chuỗi ký tự được nhập không được chứa khoảng trắng.
                                            </div>
                                        )}
                                        {productName.trim().length < 10 && (
                                            <div className="text-red-500 text-xs mt-1">
                                                Tên sản phẩm của bạn quá ngắn. Vui lòng nhập ít nhất 10 ký tự.
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>


                            {/* Product Category */}
                            <div className="mb-4" onClick={() => handleRatioChangeInd()}>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <span className="text-red-500">*</span> Ngành hàng
                                </label>
                                <div className="flex justify-between items-center border rounded px-3 py-2">
                                    <span className="text-gray-500">Chọn ngành hàng</span>
                                    <PenLine className="text-blue-600 cursor-pointer" size={20} />
                                </div>
                            </div>

                            {/* Product Code */}
                            <div ref={DesRef} className="mb-4" onClick={() => handleRatioChangeDes()}>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <span className="text-red-500">*</span> Mã sản phẩm
                                </label>
                                <input
                                    type="text"
                                    value={productDescription}
                                    onChange={(e) => setProductDescription(e.target.value)}
                                    className="w-full border rounded px-3 py-2 bg-white text-black h-32"
                                />

                                {/* Hiển thị số ký tự */}
                                <div className="text-right text-gray-500 text-xs mt-1">{productDescription.length}/3000</div>

                                {/* Thông báo lỗi nếu dưới 100 ký tự */}
                                {productDescription.length > 0 && productDescription.length < 100 && (
                                    <div className="text-red-500 text-xs mt-1">
                                        Mô tả sản phẩm của bạn quá ngắn. Vui lòng nhập ít nhất 100 ký tự.
                                    </div>
                                )}
                            </div>



                        </div>

                        {/* Sales Information Section */}
                        <div id="sales" ref={salesRef} className="p-6">
                            <h2 className="text-lg font-semibold mb-4">Thông tin bán hàng</h2>
                            <div className="p-4 bg-gray-50 rounded">
                                <p className="text-gray-500">Có thể điều chỉnh sau khi chọn ngành hàng</p>
                            </div>
                        </div>

                        {/* Shipping Section */}
                        <div id="shipping" ref={shippingRef} className="p-6">
                            <h2 className="text-lg font-semibold mb-4">Vận chuyển</h2>
                            <div className="p-4 bg-gray-50 rounded">
                                <p className="text-gray-500">Có thể điều chỉnh sau khi chọn ngành hàng</p>
                            </div>
                        </div>

                        {/* Other Information Section */}
                        <div id="other" ref={otherRef} className="p-6">
                            <h2 className="text-lg font-semibold mb-4">Thông tin khác</h2>
                            <div className="p-4 bg-gray-50 rounded">
                                <p className="text-gray-500">Có thể điều chỉnh sau khi chọn ngành hàng</p>
                            </div>
                        </div>

                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-2 p-6 bg-white border-t shadow-lg">
                        <button className="px-4 py-2 border border-black rounded text-black bg-white" onClick={handleCancelClick}>Hủy</button>
                        <button className="px-4 py-2 border border-black rounded text-black bg-white">Lưu & Ẩn</button>
                        <button className="px-4 py-2 border border-black bg-orange-500 text-white rounded">Lưu & Hiển thị</button>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-8 w-96 rounded shadow-lg text-black">
                        <h2 className="text-lg font-semibold mb-4">Xác nhận</h2>
                        <p>Hủy thay đổi?</p>
                        <div className="flex justify-end space-x-2 mt-4">
                            <button className="px-4 py-2 border border-black rounded text-black bg-white" onClick={handleCloseModal}>Hủy</button>
                            <button className="px-4 py-2 border border-black bg-orange-500 text-white rounded" onClick={handleConfirmClick}>Đồng ý</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddProduct;

import MainLayout from './layouts/MainLayout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileShop  from './pages/ProfileShop';
import DecorationShop from './pages/DecorationShop';
import AllOrderManagement from './pages/AllOrderManagement';


function App() {

  return (
    <BrowserRouter>
    <MainLayout>
    <Routes>
          <Route path="/" element={<h1 className='text-black'>Trang chủ</h1>} />
          <Route path="/portal/settings/shop/profile/" element={<ProfileShop/>} />
          <Route path="/portal/decoration/" element={<DecorationShop/>} />
          <Route path="/portal/sale/order" element={<AllOrderManagement/>} />
        </Routes>
      
    </MainLayout>
    </BrowserRouter>
  )
}

export default App

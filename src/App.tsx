import MainLayout from './layouts/MainLayout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileShop from './pages/ProfileShop/ProfileShop';
import DecorationShop from './pages/DecorationShop/DecorationShop';
import All from './pages/OrderManagement/All/All';
import AllSettings from './pages/AllSettings/AllSettings';

function App() {

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<h1 className='text-black'>Trang chủ</h1>} />
          <Route path="/portal/settings/shop/profile/" element={<ProfileShop />} />
          <Route path="/portal/settings/shop/profile/:tab" element={<ProfileShop />} />
          <Route path="/portal/decoration" element={<DecorationShop />} />
          <Route path="/portal/decoration/:tab" element={<DecorationShop />} />
          <Route path="/portal/all-settings/" element={<AllSettings />} />
          <Route path="/portal/all-settings/:tab" element={<AllSettings />} />
          <Route path="/portal/sale/order" element={<All />} />
          <Route path="/portal/sale/order/:type" element={<All />} />


        </Routes>

      </MainLayout>
    </BrowserRouter>
  )
}

export default App

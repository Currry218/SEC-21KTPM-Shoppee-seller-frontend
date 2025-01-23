import MainLayout from './layouts/MainLayout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileShop  from './pages/ProfileShop';
import DecorationShop from './pages/DecorationShop';

function App() {

  return (
    <BrowserRouter>
    <MainLayout>
    <Routes>
          <Route path="/" element={<h1 className='text-black'>Trang chủ</h1>} />
          <Route path="/portal/settings/shop/profile/" element={<ProfileShop/>} />
          <Route path="/portal/decoration/" element={<DecorationShop/>} />
        </Routes>
      
    </MainLayout>
    </BrowserRouter>
  )
}

export default App

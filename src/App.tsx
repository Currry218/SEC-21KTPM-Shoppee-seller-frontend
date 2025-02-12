import MainLayout from './layouts/MainLayout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileShop from './pages/ProfileShop/ProfileShop';
import DecorationShop from './pages/DecorationShop/DecorationShop';
import All from './pages/OrderManagement/All/All';
import AllProduct from './pages/ProductManagement/AllProduct/AllProduct';
import AllSettings from './pages/AllSettings/AllSettings';
import AddProduct from './pages/ProductManagement/AddProduct/AddProduct';
import Revenue from './pages/Finance/Revenue';
import Balance from './pages/Finance/Balance';
import Cards from './pages/Finance/Cards';
import BulkShipping from './pages/OrderManagement/BulkShipping/BulkShippingMain';
import OrderDelivery from './pages/OrderManagement/OrderDelivery/OrderDeliveryMain';
import OrderInteraction from './pages/OrderManagement/OrderInteraction/OrderInteractionMain';
import MediaStorage from './pages/DecorationShop/MediaStorage/MediaStorage';
import DeliverySetting from "./pages/OrderManagement/DeliverySetting/DeliverySettingMain";

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
          <Route path="/portal/decoration/mediastore" element={<MediaStorage />} />
          <Route path="/portal/sale/order" element={<All />} />
          <Route path="/portal/sale/order/:type" element={<All />} />

          <Route path="/portal/sale/bulkShipping" element={<BulkShipping />} />
          <Route path="/portal/sale/bulkShipping/:tab" element={<BulkShipping />} /> 

          <Route path="/portal/sale/OrderDelivery" element={<OrderDelivery />} />
          <Route path="/portal/sale/OrderDelivery/:tab" element={<OrderDelivery />} />

          <Route path="/portal/sale/ReturnRefundCancel" element={<OrderInteraction />} />
          <Route path="/portal/sale/ReturnRefundCancel/:tab" element={<OrderInteraction />} />

          <Route path="/portal/sale/DeliverySetting" element={<DeliverySetting />} />
          <Route path="/portal/sale/DeliverySetting/:tab" element={<DeliverySetting />} />
          
          <Route path="/portal/finance/balance" element={<Balance />} />
          <Route path="/portal/finance/revenue" element={<Revenue />} />
          <Route path="/portal/finance/cards" element={<Cards />} />
          
          <Route path="/portal/product/list/" element={<AllProduct />} />
          <Route path="/portal/product/list/:type" element={<AllProduct />} />
          <Route path="/portal/product/list/:type/:param?" element={<AllProduct />} />
          <Route path="/portal/product/new" element={<AddProduct />} />
          <Route path="/portal/product/new/:from" element={<AddProduct />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App

import { Route, Routes } from "react-router-dom";
import { routes } from ".";
import GuestPage from "../pages/GuestPage/GuestPage";
import LoginPageCard from "../pages/LoginPage/LoginPageCard";
import RegisterPageCard from "../pages/RegisterPage/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage.jsx/ForgotPasswordPage";
import FAQPage from "../pages/FAQPage/FAQPage";
import CollectionPage from "../pages/CollectionPage/CollectionPage";
import Blog from "../pages/BlogPage/Blog";
import SaleEventPage from "../pages/SaleEventPage/SaleEventPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ChainSizePage from "../pages/ChainSizePage/ChainSizePage";
import SizePage from "../pages/SizePage/SizePage";
import DiamondKnowledgePage from "../pages/DiamondKnowledgePage/DiamondKnowledgePage";
import AccessoryInfor from "../pages/AccessoryInforPage/AccessoryInforPage";
import WarrantyPolicyPage from "../pages/WarrantyPolicyPage/WarrantyPolicyPage";
import AdminDiamond from "../pages/AdminDashboard/AdminDiamond/AdminPageDiamond";
import AdminCategory from "../pages/AdminDashboard/AdminCategory/AdminCategory";
import ProtectedRoute from "./protectedRoute";
import CartPage from "../pages/CartPage/CartPage";
import CheckOut from "../pages/CheckOut/CheckOut";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DiamondPricePage from "../pages/DiamondPricePage/DiamondPricePage";
import SaleProductPage from "../pages/SaleProductPage/SaleProductPage";
import TrackingPage from "../pages/TrackingPage/TrackingPage";
import SaleStaffPage from "../pages/SaleStaffPage/SaleStaffPage";
import DeliveryStaffPage from "../pages/DeliveryStaffPage/DeliveryStaffPage";
import AdminCertificate from "../pages/AdminDashboard/AdminCertificate/AdminCertificate";
import AdminUser from "../pages/AdminDashboard/AdminUser/AdminUser";
import AdminOrder from "../pages/AdminDashboard/AdminManageOrder/AdmiManageOrder";
import ChangePasswordPage from "../pages/ChangePassword/ChangePassword";
import AdminCover from "../pages/AdminDashboard/AdminDiamond/AdminPageCover";
import AdminCollection from "../pages/AdminDashboard/AdminCollection/AdminCollection";
import ProductPage from "../pages/ProductPage/ProductDetailPage";
import ProductRing from "../pages/ProductPage/AllProductPage/RingProductPage";
import OrderHistoryUser from "../pages/OrderHistoryUser/OrderHistoryUser";
import CuffProductPage from "../pages/ProductPage/AllProductPage/CuffProductPage";
import NecklaceProductPage from "../pages/ProductPage/AllProductPage/NecklaceProductPage";
import PaymentSuccess from "../pages/PaymentSuccessfulPage/PaymentSuccess";
import PiercingProductPage from "../pages/ProductPage/AllProductPage/PiercingProductPage";
import AdminStatistics from "../pages/AdminDashboard/AdminStatistics/AdminStatistics";
import PaymentFail from "../pages/PaymentFail/PaymentFail";
import AdminSaleEvent from "../pages/AdminDashboard/AdminSaleEvent/AdminSaleEvent";
import AdminDiamondPrice from "../pages/AdminDashboard/AdminDiamondPrice/AdminDiamondPrice";
import CollectionDetail from "../pages/CollectionPage/CollectionDetail";
import SearchProduct from "../pages/ProductPage/AllProductPage/SearchProduct";
import AdminChart from "../pages/AdminDashboard/AdminChart/AdminChart";
import AdminOrderDetail from "../pages/AdminDashboard/AdminManageOrder/AdminOrderDetail";
import SaleStaffCancleOrderPage from "../pages/SaleStaffPage/SaleStaffCancleOrder";

export default function AppRoute() {
  return (
    <Routes>
      <Route path={routes.home} element={<GuestPage />} />
      <Route path={routes.login} element={<LoginPageCard />} />
      <Route path={routes.register} element={<RegisterPageCard />} />
      <Route path={routes.forgot} element={<ForgotPasswordPage />} />
      <Route path={routes.changePassword} element={<ChangePasswordPage />} />
      <Route path={routes.faq} element={<FAQPage />} />
      <Route path={routes.size} element={<SizePage />} />
      <Route path={routes.bst} element={<CollectionPage />} />
      <Route path={routes.blog} element={<Blog />} />
      <Route path={routes.sale} element={<SaleEventPage />} />
      <Route path={routes.diamondprice} element={<DiamondPricePage />} />
      {/* <Route path={routes.bstset1} element={<CollectionSet1 />} />
      <Route path={routes.bstset2} element={<CollectionSet2 />} />
      <Route path={routes.bstset3} element={<CollectionSet3 />} /> */}
      <Route
        path={routes.profile}
        element={
          <ProtectedRoute roles={["CUSTOMER"]}>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route path={routes.about} element={<AboutPage />} />
      <Route path={routes.chain} element={<ChainSizePage />} />
      <Route path={routes.kienthuc} element={<DiamondKnowledgePage />} />
      <Route path={routes.accessoryInfor} element={<AccessoryInfor />} />
      <Route path={routes.warrantyPolicy} element={<WarrantyPolicyPage />} />
      <Route
        path={routes.adminDiamond}
        element={
          <ProtectedRoute roles={["MANAGER"]}>
            <AdminDiamond />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.adminsale}
        element={
          <ProtectedRoute roles={["MANAGER"]}>
            <AdminSaleEvent />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.adminchart}
        element={
          <ProtectedRoute roles={["MANAGER", "ADMIN"]}>
            <AdminChart />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.adminstatistics}
        element={
          <ProtectedRoute roles={["MANAGER", "ADMIN"]}>
            <AdminStatistics />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.adminCover}
        element={
          <ProtectedRoute roles={["MANAGER"]}>
            <AdminCover />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.adminCategory}
        element={
          <ProtectedRoute roles={["MANAGER"]}>
            <AdminCategory />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.adminCertificate}
        element={
          <ProtectedRoute roles={["MANAGER"]}>
            <AdminCertificate />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.adminDiamondPrice}
        element={
          <ProtectedRoute roles={["MANAGER"]}>
            <AdminDiamondPrice />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.adminUser}
        element={
          <ProtectedRoute roles={["MANAGER", "ADMIN"]}>
            <AdminUser />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.adminmanageorder}
        element={
          <ProtectedRoute roles={["MANAGER"]}>
            <AdminOrder />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.adminbst}
        element={
          <ProtectedRoute roles={["MANAGER"]}>
            <AdminCollection />
          </ProtectedRoute>
        }
      />
      <Route path={routes.notfound} element={<ErrorPage />} />
      <Route
        path={routes.cart}
        element={
          <ProtectedRoute roles={["CUSTOMER"]}>
            <CartPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.checkout}
        element={
          <ProtectedRoute roles={["CUSTOMER"]}>
            <CheckOut />
          </ProtectedRoute>
        }
      />
      <Route path={routes.productdetail} element={<ProductPage />} />
      <Route path={`${routes.productdetail}/:id`} element={<ProductPage />} />

      <Route path={routes.saleEvent} element={<SaleEventPage />} />
      <Route path={routes.saleProduct} element={<SaleProductPage />} />
      <Route path={routes.vongco} element={<NecklaceProductPage />} />
      <Route path={routes.vongtay} element={<CuffProductPage />} />
      <Route path={routes.nhan} element={<ProductRing />} />
      <Route path={routes.khuyentai} element={<PiercingProductPage />} />

      <Route
        path={routes.tracking}
        element={
          <ProtectedRoute
            roles={["CUSTOMER", "MANAGER", "ADMIN", "SALES", "DELIVERY"]}
          >
            <TrackingPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.successpayment}
        element={
          <ProtectedRoute roles={["CUSTOMER"]}>
            <PaymentSuccess />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.failpayment}
        element={
          <ProtectedRoute roles={["CUSTOMER"]}>
            <PaymentFail />{" "}
          </ProtectedRoute>
        }
      />

      <Route
        path={`${routes.tracking}/:id`}
        element={
          <ProtectedRoute
            roles={["CUSTOMER", "MANAGER", "ADMIN", "SALES", "DELIVERY"]}
          >
            <TrackingPage />
          </ProtectedRoute>
        }
      />

      <Route
        path={routes.saleStaff}
        element={
          <ProtectedRoute roles={["SALES"]}>
            <SaleStaffPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.saleStaffCancleOrder}
        element={
          <ProtectedRoute roles={["SALES"]}>
            <SaleStaffCancleOrderPage />
          </ProtectedRoute>
        }
      />

      <Route
        path={routes.deliveryStaff}
        element={
          <ProtectedRoute roles={["DELIVERY"]}>
            <DeliveryStaffPage />
          </ProtectedRoute>
        }
      />

      <Route
        path={routes.orderhistory}
        element={
          <ProtectedRoute roles={["CUSTOMER"]}>
            <OrderHistoryUser />
          </ProtectedRoute>
        }
      />
      <Route path={`${routes.bst}/:id`} element={<CollectionDetail />} />
      <Route path={routes.timkiemsanpham} element={<SearchProduct />} />

      <Route
        path={`adminOrderDetail/:id`}
        element={
          <ProtectedRoute roles={["MANAGER", "ADMIN"]}>
            <AdminOrderDetail />{" "}
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

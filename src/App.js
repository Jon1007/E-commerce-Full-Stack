import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import userProfilePage from "./pages/user/userProfilePage";
import userOrdersPage from "./pages/user/userOrdersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product-list" element={<ProductListPage />}></Route>
        <Route path="/product-details" element={<ProductDetailsPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="*" element="Page is not exists 404" />
        <Route path="/user" element={<userProfilePage />}></Route>
        <Route path="/user/my-orders" element={<userOrdersPage />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

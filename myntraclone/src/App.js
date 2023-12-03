import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Basic/Navbar";
import Home from "./Components/Basic/Home";
import MensMultipleProducts from "./Components/Categories/Mens-Products-Section/MensMultipleProducts";
import WomensMultipleProducts from "./Components/Categories/Women-Products-Section/WomensMultipleProducts";
import KidsMultipleProducts from "./Components/Categories/Kids-Products-Section/KidsMultipleProducts";
import HomeMultipleProducts from "./Components/Categories/HomeProductsSection/HomeMultipleProducts";
import BeautyMultipleProducts from "./Components/Categories/BeautyProductsSection/BeautyMultipleProducts";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/Cart/Wishlist";
import SingleProduct from "./Components/Categories/SingleProduct";
import Profile from "./Components/Basic/Profile";
import Footer from "./Components/Basic/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/mens-multiple-products"
          element={<MensMultipleProducts />}
        />
        <Route
          exact
          path="/womens-multiple-products"
          element={<WomensMultipleProducts />}
        />
        <Route
          exact
          path="/kids-multiple-products"
          element={<KidsMultipleProducts />}
        />
        <Route
          exact
          path="/home-multiple-products"
          element={<HomeMultipleProducts />}
        />
        <Route
          exact
          path="/beauty-multiple-products"
          element={<BeautyMultipleProducts />}
        />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route
          exact
          path="/single-product/:userId"
          element={<SingleProduct />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

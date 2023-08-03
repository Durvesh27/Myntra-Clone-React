import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Basic/Navbar";
import Home from "./Components/Basic/Home";
import MensMultipleProducts from "./Components/Categories/Mens-Products-Section/MensMultipleProducts";
import WomensMultipleProducts from "./Components/Categories/Women-Products-Section/WomensMultipleProducts";
import KidsMultipleProducts from "./Components/Categories/Kids-Products-Section/KidsMultipleProducts";


function App() {
  return (
    <>
<Navbar/>
<Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/mens-multiple-products" element={<MensMultipleProducts/>}/>
  <Route exact path="/womens-multiple-products" element={<WomensMultipleProducts/>}/>
  <Route exact path="/kids-multiple-products" element={<KidsMultipleProducts/>}/>
</Routes>
</>
  )
}

export default App;

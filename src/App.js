import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./pages/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./pages/ProductsList/AllProducts";
import Login from "./pages/Login/Login";
import Details from "./pages/ProductDetails/Details";
import FeaturedProducts from "./pages/FeaturedProducts/FeaturedProducts";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Category from "./pages/categories/Category";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/all-products" element={<AllProducts/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/all-products/:id" element={<Details/>}/>
        <Route path="/featured-products" element={<FeaturedProducts/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/categories" element={<Category/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

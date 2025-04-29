import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Signin from "./Signin";
import Sell from './Sell';
import ProductDetail from './ProductDetail';
import Electronics from './Electronics';
import Sports from "./Sports";
import Health from "./Health";
import Fashion from "./Fashion";
import Collectibles from "./Collectibles";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/Electronics" element={<Electronics />} />
      <Route path="/Collectibles" element={<Collectibles />} />
      <Route path="/Fashion" element={<Fashion />} />
      <Route path="/Health" element={<Health />} />
      <Route path="/Sports" element={<Sports />} />
    </Routes>
  );
}

export default App;

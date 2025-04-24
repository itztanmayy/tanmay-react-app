import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Signin from "./Signin";
import Sell from './sell';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/sell" element={<Sell />} />

    </Routes>
  );
}

export default App;

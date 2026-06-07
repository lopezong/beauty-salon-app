import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payment from "./pages/Payment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beauty-salon-app/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
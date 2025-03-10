import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // Import the CartProvider
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <CartProvider>
      <Router>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

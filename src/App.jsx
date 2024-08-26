import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ShopPage from "./Components/ShopPage";
import CartPage from "./Components/CartPage";
import Navbar from "./Components/Navbar";

function App() {
  return (
      <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </div>
      </Router>
  );
}

export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "../pages/client/Checkout";
import Home from "../pages/client/Home";
import Login from "../pages/client/Login";
import ProductDetail from "../pages/client/ProductDetail";
import Register from "../pages/client/Register";

function ClientRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="products" element={<Home />} />
      <Route path="products/:productId" element={<ProductDetail />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
}

export default ClientRouter;

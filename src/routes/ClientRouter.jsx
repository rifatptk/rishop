import React from "react";
import { Routes, Route } from "react-router-dom";
import ClientLayout from "../layouts/ClientLayout";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

function ClientRouter() {
  return (
    <ClientLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Home />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </ClientLayout>
  );
}

export default ClientRouter;

import React from "react";
import { Routes, Route } from "react-router-dom";
import ClientLayout from "../layouts/ClientLayout";
import Checkout from "../pages/client/Checkout";
import Home from "../pages/client/Home";
import Login from "../pages/client/Login";
import OrderPlaced from "../pages/client/OrderPlaced";
import ProductDetail from "../pages/client/ProductDetail";
import Register from "../pages/client/Register";
import PrivateRoute from "./PrivateRoute";

function ClientRouter() {
  return (
    <ClientLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="products" element={<Home />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route
          path="checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path="order-placed"
          element={
            <PrivateRoute>
              <OrderPlaced />
            </PrivateRoute>
          }
        />
      </Routes>
    </ClientLayout>
  );
}

export default ClientRouter;

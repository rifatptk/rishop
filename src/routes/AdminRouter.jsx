import React from "react";
import { Route, Routes } from "react-router-dom";
import Customers from "../pages/admin/Customers";
import Orders from "../pages/admin/Orders";
import Products from "../pages/admin/Products";
import SingleProduct from "../pages/admin/SingleProduct";
import CustomerDetail from "../pages/admin/CustomerDetail";
import OrderDetail from "../pages/admin/OrderDetail";

function AdminRouter() {
  return (
    <Routes>
      <Route index element={<Products />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:productId" element={<SingleProduct />} />
      <Route path="orders" element={<Orders />} />
      <Route path="orders/:orderId" element={<OrderDetail />} />
      <Route path="customers" element={<Customers />} />
      <Route path="customers/:customerId" element={<CustomerDetail />} />
    </Routes>
  );
}

export default AdminRouter;

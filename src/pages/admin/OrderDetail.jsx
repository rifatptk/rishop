import React from "react";
import Order from "../../components/admin/Order";
import AdminLayout from "../../layouts/AdminLayout";

export default function OrderDetail() {
  return (
    <AdminLayout>
      <div id="customer-detail">
        <Order />
      </div>
    </AdminLayout>
  );
}

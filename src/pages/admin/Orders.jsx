import React from "react";
import OrdersTable from "../../components/admin/OrdersTable";
import AdminLayout from "../../layouts/AdminLayout";

export default function Orders() {
  return (
    <AdminLayout>
      <div id="products">
        <OrdersTable />
      </div>
    </AdminLayout>
  );
}

import React from "react";
import CustomersTable from "../../components/admin/CustomersTable";
import AdminLayout from "../../layouts/AdminLayout";

export default function Customers() {
  return (
    <AdminLayout>
      <div id="customers">
        <CustomersTable />
      </div>
    </AdminLayout>
  );
}

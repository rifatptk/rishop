import React from "react";
import Profile from "../../components/admin/Profile";
import AdminLayout from "../../layouts/AdminLayout";

export default function CustomerDetail() {
  return (
    <AdminLayout>
      <div id="customer-detail">
        <Profile />
      </div>
    </AdminLayout>
  );
}

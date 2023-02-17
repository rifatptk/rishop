import React from "react";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import ProductsTable from "../../components/admin/ProductsTable";
import useGetData from "../../hooks/useGetData";
import AdminLayout from "../../layouts/AdminLayout";

export default function Products() {
  return (
    <AdminLayout>
      <div id="products">
        <ProductsTable />
      </div>
    </AdminLayout>
  );
}

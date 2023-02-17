import React from "react";
import ProductOverview from "../../components/productDetail/ProductOverview";
import AdminLayout from "../../layouts/AdminLayout";

export default function SingleProduct() {
  return (
    <AdminLayout>
      <div id="single-product">
        <ProductOverview />
      </div>
    </AdminLayout>
  );
}

import React from "react";
import ProductOverview from "../components/productDetail/ProductOverview";
import ClientLayout from "../layouts/ClientLayout";

export default function ProductDetail() {
  return (
    <ClientLayout>
      <div id="product-detail-page">
        <ProductOverview />
      </div>
    </ClientLayout>
  );
}

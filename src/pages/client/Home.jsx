import React from "react";
import ProductList from "../../components/Home/ProductList";
import ClientLayout from "../../layouts/ClientLayout";

function Home() {
  return (
    <ClientLayout>
      <div id="home-page">
        <ProductList />
      </div>
    </ClientLayout>
  );
}

export default Home;

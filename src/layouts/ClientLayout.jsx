import React from "react";
import ShoppingCart from "../components/cart/ShoppingCart";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

function ClientLayout({ children }) {
  return (
    <div className="client-layout">
      <Navbar />
      <ShoppingCart />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

export default ClientLayout;

import React from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

function ClientLayout({ children }) {
  return (
    <div className="client-layout">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default ClientLayout;

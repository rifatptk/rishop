import React from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div>
      <div id="client-layout">
        <Navbar />
        <div>
          <Sidebar />
          <div className="ml-[200px] pt-20 px-5">
            <div className="min-h-screen">{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

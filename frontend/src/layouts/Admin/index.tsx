import React from "react";

// components

import AdminNavbar from "src/components/Navbar/AdminNavbar";
import Sidebar from "src/components/Sidebar/AdminSidebar";
import HeaderStats from "src/components/Headers";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
        </div>
      </div>
    </>
  );
}

export default AdminLayout;

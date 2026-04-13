import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "@/components/admin/layout/AdminHeader";
import AdminSidebar from "@/components/admin/layout/AdminSidebar";
import AdminFooter from "@/components/admin/layout/AdminFooter";

const AdminLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">

      {/* Header */}
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex flex-1">

        {/* ✅ Desktop Sidebar */}
        <aside className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 md:top-16 bg-white border-r z-40">
          <AdminSidebar />
        </aside>

        {/* ✅ Mobile Sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">

            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/50"
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <div className="relative w-64 bg-white h-full shadow-lg">
              <AdminSidebar onClose={() => setSidebarOpen(false)} />
            </div>
          </div>
        )}

        {/* ✅ Main Content */}
        <main className="flex-1 md:ml-64 p-3 sm:p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>

      </div>

      {/* Footer */}
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
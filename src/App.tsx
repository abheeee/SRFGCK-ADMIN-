import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/admin/layout/AdminLayout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Admissions from "@/pages/Admissions";
import Courses from "./pages/Courses";
import News from "./pages/News";
import Events from "./pages/Events";


import GalleryPage from "./pages/GalleryPage";
import HeaderSettings from "./components/admin/logo/HeaderSettings";
import ContactMessages from "./pages/ContactMessages"; // ✅ kept from HEAD

// Protected Route Component
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("adminToken");
  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Route - No Layout */}
        <Route path="/login" element={<Login />} />

        {/* Protected Admin Routes with Layout */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          {/* Redirect root to dashboard */}
          <Route index element={<Navigate to="dashboard" replace />} />

          {/* Admin Pages */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="courses" element={<Courses />} />
          <Route path="news" element={<News />} />
          <Route path="events" element={<Events />} />
          <Route path="hostel" element={<Hostel />} />
          <Route path="government-body" element={<GovtBody />} />

          {/* ✅ FIXED: removed "/" (must be relative inside layout) */}
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="headersetting" element={<HeaderSettings />} />
          <Route path="contact-messages" element={<ContactMessages />} />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
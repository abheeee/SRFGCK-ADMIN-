import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/admin/layout/AdminLayout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Admissions from "@/pages/Admissions";
import Courses from "./pages/Courses";
import News from "./pages/News";
import Events from "./pages/Events";
import Hostel from "./pages/Hostel";
import ContactMessages from "./pages/ContactMessages";
import GalleryPage from "./pages/GalleryPage";
import HeaderSettings from "./components/admin/logo/HeaderSettings";
import About from "./pages/About";
import GoverningBody from "./pages/GoverningBody";

// Protected Route Component
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("adminToken");
  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <>
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
            <Route index element={<Navigate to="/dashboard" replace />} />

            {/* Admin Pages */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="admissions" element={<Admissions />} />
            <Route path="courses" element={<Courses />} />

            <Route path="news" element={<News />} />
            <Route path="events" element={<Events />} />
            <Route path="hostel" element={<Hostel />} />
           
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/headersetting" element={<HeaderSettings />} />


            <Route path="/Contactmessage" element={<ContactMessages/>}/>
            <Route path="/gallery" element={<GalleryPage />} />

            <Route path="/GoverningBody" element={<GoverningBody />} />
            
            <Route path="/About" element={<About/>} />

            {/* Catch all - redirect to dashboard */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
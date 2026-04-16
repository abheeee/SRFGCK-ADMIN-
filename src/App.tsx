import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/admin/layout/AdminLayout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Admissions from "@/pages/Admissions";
import Courses from "./pages/Courses";
import News from "./pages/News";
import Transport from "./pages/Transport";
import Events from "./pages/Events";
import Hostel from "./pages/Hostel";
import GalleryPage from "./pages/GalleryPage";
// import AdmissionDetails from "@/pages/admin/AdmissionDetails";
// import FormBuilder from "@/pages/admin/FormBuilder";
// import Gallery from "@/pages/admin/Gallery";
// import News from "@/pages/admin/News";
// import Transport from "@/pages/admin/Transport";
// import Events from "@/pages/admin/Events";
// import Hostel from "@/pages/admin/Hostel";
// import Settings from "@/pages/admin/Settings";

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
            <Route path="news" element={<News />}/>
            <Route path="transport" element={<Transport/>}/>
            <Route path="events" element={<Events />} />
            <Route path="hostel" element={<Hostel />} />
            <Route path="/gallery" element={<GalleryPage />} />
            {/* <Route path="admissions/:id" element={<AdmissionDetails />} />
            <Route path="form-builder" element={<FormBuilder />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="news" element={<News />} />
            <Route path="transport" element={<Transport />} />
            <Route path="events" element={<Events />} />
            <Route path="hostel" element={<Hostel />} />
            <Route path="settings" element={<Settings />} /> */}

            {/* Catch all - redirect to dashboard */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
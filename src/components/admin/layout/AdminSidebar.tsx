import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  PenTool,
  BookOpen,
  Image,
  Newspaper,
  Bus,
  Calendar,
  Home,
  Settings,
} from "lucide-react";

interface AdminSidebarProps {
  onClose?: () => void; // for mobile close
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: FileText, label: "Admissions", path: "/admissions" },
  { icon: PenTool, label: "Form Builder", path: "/form-builder" },
  { icon: BookOpen, label: "Courses", path: "/courses" },
  { icon: Image, label: "Gallery", path: "/gallery" },
  { icon: Newspaper, label: "News", path: "/news" },
  { icon: Bus, label: "Transport", path: "/transport" },
  { icon: Calendar, label: "Events", path: "/events" },
  { icon: Home, label: "Hostel", path: "/hostel" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const AdminSidebar: React.FC<AdminSidebarProps> = ({ onClose }) => {
  return (
    <aside className="h-full w-64 bg-white border-r flex flex-col">

      {/* Logo */}
      <div className="flex h-14 sm:h-16 items-center justify-between border-b px-4">
        <h1 className="text-lg sm:text-xl font-bold text-black">
          College Admin
        </h1>

        {/* Close button (only mobile) */}
        {onClose && (
          <button
            className="md:hidden text-gray-500 text-lg"
            onClick={onClose}
          >
            ✕
          </button>
        )}
      </div>

      {/* Navigation */}
     <nav className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose} // close on mobile click
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm sm:text-base transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              <span className="truncate text-black">{item.label}</span>
            </NavLink>
          );
        })}

      </nav>
    </aside>
  );
};

export default AdminSidebar;
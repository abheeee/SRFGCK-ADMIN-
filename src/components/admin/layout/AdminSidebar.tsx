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
  Contact,
  Home,
  Users,
  Settings,

} from "lucide-react";

interface AdminSidebarProps {
  onClose?: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: FileText, label: "Admissions", path: "/admissions" },
  { icon: FileText, label: "Logo", path: "/headersetting" },
  { icon: BookOpen, label: "Courses", path: "/courses" },
  { icon: Image, label: "Gallery", path: "/gallery" },
  // { icon: Newspaper, label: "News", path: "/news" },
  
  { icon: Calendar, label: "Events", path: "/events" },
   { icon: Contact, label: "Contact", path: "/Contactmessage" },
 
  { icon: Image, label: "About", path: "/About" },
   { icon: Image, label: "Governing", path: "/GoverningBody" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const AdminSidebar: React.FC<AdminSidebarProps> = ({ onClose }) => {
  return (
    <aside className="flex h-full w-full flex-col overflow-hidden bg-white">
      {/* Top */}
      <div className="flex h-14 sm:h-16 shrink-0 items-center justify-between border-b px-4">
        <h1 className="truncate text-lg font-bold text-black sm:text-xl">
          College Admin
        </h1>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="md:hidden rounded-md p-1 text-gray-500 transition hover:bg-gray-100 hover:text-black"
          >
            ✕
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm sm:text-base transition-all ${
                    isActive
                      ? "bg-gray-500 text-black"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                <Icon
                  className={`h-5 w-5 flex-shrink-0 ${
                    item.path === window.location.pathname
                      ? "text-black"
                      : "text-gray-600"
                  }`}
                />
                <span
                  className={`truncate ${
                    item.path === window.location.pathname
                      ? "text-black"
                      : "text-black"
                  }`}
                >
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
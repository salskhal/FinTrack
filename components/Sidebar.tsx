// "use client";

// import { useState } from "react";
// import { usePathname } from "next/navigation";

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function Sidebar({ isOpen, onClose }: SidebarProps) {
//   const pathname = usePathname();

//   const navigationItems = [
//     {
//       name: "Dashboard",
//       href: "/dashboard",
//       icon: (
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"
//             fill="currentColor"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: "Transactions",
//       href: "/transactions",
//       icon: (
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H17V12H7V10ZM7 14H15V16H7V14Z"
//             fill="currentColor"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: "Reports",
//       href: "/reports",
//       icon: (
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17ZM19.5 19.1H4.5V5H6.5V3H4.5C3.4 3 2.5 3.9 2.5 5V19.1C2.5 20.2 3.4 21.1 4.5 21.1H19.5C20.6 21.1 21.5 20.2 21.5 19.1V5C21.5 3.9 20.6 3 19.5 3H18V5H19.5V19.1Z"
//             fill="currentColor"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: "Settings",
//       href: "/settings",
//       icon: (
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
//             fill="currentColor"
//           />
//         </svg>
//       ),
//     },
//   ];

//   const isActive = (href: string) => {
//     return pathname === href || pathname.startsWith(href + "/");
//   };

//   return (
//     <>
//       {/* Mobile overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 lg:hidden"
//           onClick={onClose}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Logo Section */}
//           <div className="flex items-center h-16 px-6 border-b border-gray-200">
//             <div className="flex items-center">
//               <img
//                 className="h-8 w-auto"
//                 src="/logo.svg"
//                 alt="FinTrack"
//                 onError={(e) => {
//                   const target = e.target as HTMLImageElement;
//                   target.style.display = "none";
//                   const textLogo = target.nextElementSibling as HTMLElement;
//                   if (textLogo) textLogo.style.display = "block";
//                 }}
//               />
//               <span
//                 className="ml-2 text-xl font-bold text-gray-900 hidden"
//                 style={{ display: "none" }}
//               >
//                 FinTrack
//               </span>
//             </div>
//           </div>

//           {/* Navigation */}
//           <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
//             {navigationItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
//                   isActive(item.href)
//                     ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
//                     : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                 }`}
//                 onClick={() => {
//                   // Close mobile menu when item is clicked
//                   if (window.innerWidth < 1024) {
//                     onClose();
//                   }
//                 }}
//               >
//                 <span className="mr-3">{item.icon}</span>
//                 {item.name}
//               </a>
//             ))}
//           </nav>

//           {/* User Section at Bottom */}
//           <div className="border-t border-gray-200 p-4">
//             <div className="flex items-center">
//               <img
//                 className="h-10 w-10 rounded-full object-cover"
//                 src="/images/profile1.png"
//                 alt="John Doe"
//                 onError={(e) => {
//                   const target = e.target as HTMLImageElement;
//                   target.src = `data:image/svg+xml;base64,${btoa(`
//                     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <rect width="40" height="40" rx="20" fill="#6B7280"/>
//                       <text x="20" y="25" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold">
//                         JD
//                       </text>
//                     </svg>
//                   `)}`;
//                 }}
//               />
//               <div className="ml-3 flex-1">
//                 <div className="text-sm font-medium text-gray-900">John Doe</div>
//                 <div className="text-xs text-gray-500">john@example.com</div>
//               </div>
//               <button className="p-1 text-gray-400 hover:text-gray-500">
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z"
//                     fill="currentColor"
//                   />
//                   <path
//                     d="M8 4C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4Z"
//                     fill="currentColor"
//                   />
//                   <path
//                     d="M8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// components/Sidebar.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Home,
  CreditCard,
  BarChart2,
  Settings,
  Menu,
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: "Dashboard", icon: <Home className="w-5 h-5" />, href: "#" },
    { label: "Transactions", icon: <CreditCard className="w-5 h-5" />, href: "#" },
    { label: "Reports", icon: <BarChart2 className="w-5 h-5" />, href: "#" },
    { label: "Settings", icon: <Settings className="w-5 h-5" />, href: "#" },
  ];

  return (
    <aside className="h-screen bg-white border-r border-gray-200 fixed w-64 flex flex-col z-40">
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" className="h-6" alt="FinTrack Logo" />
          <span className="text-lg font-semibold text-gray-800">FinTrack</span>
        </div>
        <button onClick={() => setCollapsed(!collapsed)} className="md:hidden">
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto mt-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

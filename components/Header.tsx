// "use client";

// import { useState } from "react";
// import { User } from "@/types";
// import Image from "next/image";

// interface HeaderProps {
//   user?: User;
//   onMenuClick?: () => void;
// }

// export default function Header({ user, onMenuClick }: HeaderProps) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     onMenuClick?.();
//   };

//   const defaultUser: User = {
//     id: "1",
//     name: "John Doe",
//     avatar: "/images/profile1.png",
//   };

//   const currentUser = user || defaultUser;

//   return (
//     <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo and Brand */}
//           <div className="flex items-center">
//             <div className="flex-shrink-0 flex items-center">
//               <img
//                 className="h-8 w-auto"
//                 src="/logo.svg"
//                 alt="FinTrack"
//                 onError={(e) => {
//                   // Fallback to text logo if image fails to load
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

//           {/* Desktop User Menu */}
//           <div className="hidden md:flex items-center space-x-4">
//             {/* Notifications */}
//             <button className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md">
//               <span className="sr-only">Search</span>
//               <svg
//                 width="24"
//                 height="25"
//                 viewBox="0 0 24 25"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M21.0004 21.25L16.6504 16.9M19 11.25C19 15.6683 15.4183 19.25 11 19.25C6.58172 19.25 3 15.6683 3 11.25C3 6.83172 6.58172 3.25 11 3.25C15.4183 3.25 19 6.83172 19 11.25Z"
//                   stroke="#1B2528"
//                   stroke-width="1.5"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </button>
//             <button className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md">
//               <span className="sr-only">View notifications</span>
//               <svg
//                 width="24"
//                 height="25"
//                 viewBox="0 0 24 25"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M10 3.25H3V10.25H10V3.25Z"
//                   stroke="#1B2528"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M21 3.25H14V10.25H21V3.25Z"
//                   stroke="#1B2528"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M21 14.25H14V21.25H21V14.25Z"
//                   stroke="#1B2528"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M10 14.25H3V21.25H10V14.25Z"
//                   stroke="#1B2528"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>

//             {/* User Avatar */}
//             <div className="relative">
//               <button
//                 className="flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//               >
//                 <img
//                   className="h-10 w-10 rounded-full object-cover  "
//                   src={currentUser.avatar}
//                   alt={currentUser.name}
//                   onError={(e) => {
//                     // Fallback to initials if avatar fails to load
//                     const target = e.target as HTMLImageElement;
//                     target.src = `data:image/svg+xml;base64,${btoa(`
//                       <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <rect width="32" height="32" rx="16" fill="#6B7280"/>
//                         <text x="16" y="20" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold">
//                           ${currentUser.name
//                             .split(" ")
//                             .map((n) => n[0])
//                             .join("")
//                             .toUpperCase()}
//                         </text>
//                       </svg>
//                     `)}`;
//                   }}
//                 />
//               </button>

//               {/* User Dropdown Menu */}
//               {isMenuOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Your Profile
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Settings
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Sign out
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isMenuOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
//               {/* Mobile Search */}
//               <div className="relative mb-3">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg
//                     className="h-5 w-5 text-gray-400"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                     />
//                   </svg>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search transactions..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//               </div>

//               {/* Mobile User Info */}
//               <div className="flex items-center px-3 py-2">
//                 <img
//                   className="h-10 w-10 rounded-full object-cover border-2 border-gray-200"
//                   src={currentUser.avatar}
//                   alt={currentUser.name}
//                   onError={(e) => {
//                     const target = e.target as HTMLImageElement;
//                     target.src = `data:image/svg+xml;base64,${btoa(`
//                       <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <rect width="40" height="40" rx="20" fill="#6B7280"/>
//                         <text x="20" y="25" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold">
//                           ${currentUser.name
//                             .split(" ")
//                             .map((n) => n[0])
//                             .join("")
//                             .toUpperCase()}
//                         </text>
//                       </svg>
//                     `)}`;
//                   }}
//                 />
//                 <div className="ml-3">
//                   <div className="text-base font-medium text-gray-800">
//                     {currentUser.name}
//                   </div>
//                   <div className="text-sm text-gray-500">View profile</div>
//                 </div>
//               </div>

//               {/* Mobile Navigation Links */}
//               <div className="border-t border-gray-200 pt-4">
//                 <a
//                   href="#"
//                   className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
//                 >
//                   Dashboard
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
//                 >
//                   Transactions
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
//                 >
//                   Settings
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
//                 >
//                   Sign out
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }


"use client";

import { useState } from "react";
import { User } from "@/types";

interface HeaderProps {
  user?: User;
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export default function Header({ user, onMenuClick, showMenuButton = true }: HeaderProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const defaultUser: User = {
    id: "1",
    name: "John Doe",
    avatar: "/images/profile1.png",
  };

  const currentUser = user || defaultUser;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Mobile menu button (only show on mobile when sidebar is used) */}
          <div className="flex items-center">
            {showMenuButton && (
              <button
                onClick={onMenuClick}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            )}

            {/* Logo - only show when no sidebar or on mobile */}
            <div className={`flex-shrink-0 flex items-center ${showMenuButton ? 'lg:hidden' : ''}`}>
              <img
                className="h-8 w-auto"
                src="/logo.svg"
                alt="FinTrack"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const textLogo = target.nextElementSibling as HTMLElement;
                  if (textLogo) textLogo.style.display = "block";
                }}
              />
              <span
                className="ml-2 text-xl font-bold text-gray-900 hidden"
                style={{ display: "none" }}
              >
                FinTrack
              </span>
            </div>
          </div>

          {/* Right side - Search, Notifications, and User menu */}
          <div className="flex items-center space-x-4">
            {/* Search - Desktop */}
            <div className="hidden md:block relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            {/* Search Button - Mobile */}
            <button className="md:hidden p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md">
              <span className="sr-only">Search</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md relative">
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-4-4V9a6 6 0 00-12 0v4l-4 4h5m6 0v1a3 3 0 01-6 0v-1m6 0H9"
                />
              </svg>
              {/* Notification badge */}
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
            </button>

            {/* User Avatar and Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-1"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16" fill="#6B7280"/>
                        <text x="16" y="20" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold">
                          ${currentUser.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </text>
                      </svg>
                    `)}`;
                  }}
                />
                <span className="hidden md:block text-gray-700 font-medium">
                  {currentUser.name.split(' ')[0]}
                </span>
                <svg
                  className="hidden md:block h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* User Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="text-sm font-medium text-gray-900">
                      {currentUser.name}
                    </div>
                    <div className="text-sm text-gray-500">john@example.com</div>
                  </div>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Settings
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Help & Support
                  </a>
                  <div className="border-t border-gray-100">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
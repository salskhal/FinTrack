import React from "react";
import { User } from "@/types";
import { TitleSectionSkeleton } from './LoadingSkeletons';

interface TitleSectionProps {
  users: User[] | null;
  isLoading?: boolean;
  error?: string | null;
}

const TitleSection: React.FC<TitleSectionProps> = ({ users, isLoading = false, error = null }) => {
  // Handle loading state
  if (isLoading) {
    return <TitleSectionSkeleton />;
  }

  // Handle error or missing data - show basic title without user avatars
  if (error || !users || users.length === 0) {
    return (
      <div className="flex flex-col sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold text-[#1B2528]">
              Wallet Ledger
            </h1>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.86274 0.25C1.65111 0.25 1.04529 0.25 0.764766 0.489594C0.521356 0.697486 0.392181 1.00934 0.417296 1.32846C0.446241 1.69624 0.874618 2.12462 1.73137 2.98137L3.86863 5.11863C4.26465 5.51465 4.46265 5.71265 4.69098 5.78684C4.89183 5.8521 5.10817 5.8521 5.30902 5.78684C5.53735 5.71265 5.73535 5.51465 6.13137 5.11863L8.26863 2.98137C9.12538 2.12462 9.55376 1.69624 9.5827 1.32846C9.60782 1.00934 9.47864 0.697486 9.23523 0.489594C8.95471 0.25 8.34889 0.25 7.13726 0.25H2.86274Z"
                fill="#1B2528"
              />
            </svg>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-[#34616F]/9 rounded-full">
            <div className="w-2 h-2 bg-[#087A2E] rounded-full"></div>
            <span className="text-sm font-semibold text-[#1B2528]">Active</span>
          </div>
        </div>

        {error && (
          <div className="text-sm text-red-600">
            Unable to load user information
          </div>
        )}
      </div>
    );
  }

  const displayUsers = users;

  return (
    <div className="flex flex-col   sm:justify-between gap-4 mb-6">
      {/* Title and Status Section */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold text-[#1B2528]">
            Wallet Ledger
          </h1>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.86274 0.25C1.65111 0.25 1.04529 0.25 0.764766 0.489594C0.521356 0.697486 0.392181 1.00934 0.417296 1.32846C0.446241 1.69624 0.874618 2.12462 1.73137 2.98137L3.86863 5.11863C4.26465 5.51465 4.46265 5.71265 4.69098 5.78684C4.89183 5.8521 5.10817 5.8521 5.30902 5.78684C5.53735 5.71265 5.73535 5.51465 6.13137 5.11863L8.26863 2.98137C9.12538 2.12462 9.55376 1.69624 9.5827 1.32846C9.60782 1.00934 9.47864 0.697486 9.23523 0.489594C8.95471 0.25 8.34889 0.25 7.13726 0.25H2.86274Z"
              fill="#1B2528"
            />
          </svg>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-[#34616F]/9 rounded-full">
          <div className="w-2 h-2 bg-[#087A2E] rounded-full"></div>
          <span className="text-sm font-semibold text-[#1B2528]">Active</span>
        </div>
      </div>

      {/* User Avatars Section */}
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {displayUsers.map((user) => (
            <img
              key={user.id}
              src={user.avatar}
              alt={`${user.name} avatar`}
              className="w-8 h-8 rounded-full"
            />
          ))}
        </div>
        <span className="text-sm text-[#15272D]/62">
          Ava, Liam, Noah +12 others
        </span>
      </div>
    </div>
  );
};

export default TitleSection;

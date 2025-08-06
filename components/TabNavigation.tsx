'use client';

import React, { useState } from 'react';

interface TabNavigationProps {
  activeTab?: 'Overview' | 'Transactions';
  onTabChange?: (tab: 'Overview' | 'Transactions') => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ 
  activeTab = 'Overview', 
  onTabChange 
}) => {
  const [currentTab, setCurrentTab] = useState<'Overview' | 'Transactions'>(activeTab);

  const handleTabClick = (tab: 'Overview' | 'Transactions') => {
    setCurrentTab(tab);
    onTabChange?.(tab);
  };

  const tabs = [
    { id: 'Overview', label: 'Overview' },
    { id: 'Transactions', label: 'Transactions' }
  ] as const;

  return (
    <div className="mb-6">
      <nav className="flex space-x-8 border-b-2" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={currentTab === tab.id}
            aria-controls={`${tab.id.toLowerCase()}-panel`}
            className={`pb-2 font-medium text-sm transition-colors duration-200 border-b-2 ${
              currentTab === tab.id
                ? 'text-blue-600 border-blue-600'
                : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;
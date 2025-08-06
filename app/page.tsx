"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TitleSection from "@/components/TitleSection";
import TabNavigation from "@/components/TabNavigation";
import SummaryCards from "@/components/SummaryCards";
import TransactionTable from "@/components/TransactionTable";
import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorFallback from "@/components/ErrorFallback";
import { useTransactions, useDashboardSummary, useUsers } from "@/hooks/useDataService";

export default function WalletLedgerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktopSidebarCollapsed, setIsDesktopSidebarCollapsed] = useState(false);


  const { data: transactions, isLoading: transactionsLoading, error: transactionsError, refetch: refetchTransactions } = useTransactions();
  const { data: summary, isLoading: summaryLoading, error: summaryError, refetch: refetchSummary } = useDashboardSummary();
  const { data: users, isLoading: usersLoading, error: usersError, refetch: refetchUsers } = useUsers();

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <ErrorBoundary>
        <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
      </ErrorBoundary>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <ErrorBoundary>
          <Header
            onMenuClick={handleSidebarToggle}
            showMenuButton={true}
          />
        </ErrorBoundary>

        {/* Main Dashboard Content */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Title Section */}
          <ErrorBoundary>
            <TitleSection 
              users={users} 
              isLoading={usersLoading} 
              error={usersError} 
            />
          </ErrorBoundary>

          {/* Tab Navigation */}
          <ErrorBoundary>
            <TabNavigation />
          </ErrorBoundary>

          {/* Summary Cards */}
          <ErrorBoundary fallback={ErrorFallback}>
            <SummaryCards 
              summary={summary} 
              isLoading={summaryLoading} 
              error={summaryError} 
            />
          </ErrorBoundary>

          {/* Transaction Table */}
          <ErrorBoundary fallback={ErrorFallback}>
            <TransactionTable 
              transactions={transactions || []} 
              isLoading={transactionsLoading} 
              error={transactionsError}
              onRefresh={refetchTransactions}
            />
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
}

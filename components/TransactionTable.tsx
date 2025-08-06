"use client";
import { useState } from "react";
import { Transaction, SortConfig } from "@/types";
import { NoTransactionsEmpty, ErrorState } from "./EmptyStates";
import { TransactionTableSkeleton } from "./LoadingSkeletons";

interface TransactionTableProps {
  transactions: Transaction[];
  isLoading?: boolean;
  error?: string | null;
  onRefresh?: () => void;
}

export default function TransactionTable({
  transactions,
  isLoading = false,
  error = null,
  onRefresh,
}: TransactionTableProps) {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "asc",
  });

  const handleSort = (key: keyof Transaction) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Handle loading state
  if (isLoading) {
    return <TransactionTableSkeleton />;
  }

  // Handle error state
  if (error) {
    return (
      <ErrorState
        title="Failed to load transactions"
        description={error}
        onRetry={onRefresh}
      />
    );
  }

  // Handle empty state
  if (!transactions || transactions.length === 0) {
    return <NoTransactionsEmpty onRefresh={onRefresh} />;
  }

  // Validate transaction data integrity
  const validTransactions = transactions.filter((transaction) => {
    return (
      transaction &&
      typeof transaction === "object" &&
      transaction.id &&
      transaction.date &&
      transaction.remark !== undefined &&
      typeof transaction.amount === "number"
    );
  });

  // If all transactions are invalid, show error state
  if (validTransactions.length === 0 && transactions.length > 0) {
    return (
      <ErrorState
        title="Invalid transaction data"
        description="The transaction data appears to be corrupted or in an invalid format."
        onRetry={onRefresh}
      />
    );
  }

  const sortedTransactions = [...validTransactions].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (sortConfig.key === "date") {
      const aDate = new Date(aValue as string);
      const bDate = new Date(bValue as string);
      return sortConfig.direction === "asc"
        ? aDate.getTime() - bDate.getTime()
        : bDate.getTime() - aDate.getTime();
    }

    if (sortConfig.key === "amount") {
      const aAmount = aValue as number;
      const bAmount = bValue as number;
      return sortConfig.direction === "asc"
        ? aAmount - bAmount
        : bAmount - aAmount;
    }

    if (sortConfig.key === "remark") {
      const aRemark = (aValue as string).toLowerCase();
      const bRemark = (bValue as string).toLowerCase();
      if (aRemark < bRemark) return sortConfig.direction === "asc" ? -1 : 1;
      if (aRemark > bRemark) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    }

    return 0;
  });

  const getSortIcon = (columnKey: keyof Transaction) => {
    if (sortConfig.key !== columnKey) {
      return (
        <svg
          className="w-4 h-4 ml-1 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
          />
        </svg>
      );
    }

    if (sortConfig.direction === "asc") {
      return (
        // <svg className="w-4 h-4 ml-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        // </svg>
        <svg
          className="w-4 h-4 ml-1 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
          />
        </svg>
      );
    } else {
      return (
        // <svg className="w-4 h-4 ml-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        // </svg>
        <svg
          className="w-4 h-4 ml-1 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
          />
        </svg>
      );
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none"
                onClick={() => handleSort("date")}
              >
                <div className="flex items-center">
                  Date
                  {/* {getSortIcon('date')} */}
                  <svg
                    className="w-4 h-4 ml-1 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none"
                onClick={() => handleSort("remark")}
              >
                <div className="flex items-center">
                  Remark
                  {getSortIcon("remark")}
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none"
                onClick={() => handleSort("amount")}
              >
                <div className="flex items-center">
                  Amount
                  {getSortIcon("amount")}
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Currency
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedTransactions.map((transaction) => {
              // Validate individual transaction data at render time
              if (!transaction.id || !transaction.date || !transaction.remark) {
                return (
                  <tr
                    key={transaction.id || Math.random()}
                    className="bg-yellow-50"
                  >
                    <td
                      colSpan={5}
                      className="px-6 py-4 text-center text-yellow-700"
                    >
                      Invalid transaction data - some fields are missing
                    </td>
                  </tr>
                );
              }

              return (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {(() => {
                      try {
                        return new Date(transaction.date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        );
                      } catch {
                        return "Invalid Date";
                      }
                    })()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <div
                        className={`w-2 h-2 rounded-full mr-3 ${
                          transaction.type === "Credit"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      ></div>
                      {transaction.remark || "No description"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <span
                      className={
                        transaction.type === "Credit"
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {(() => {
                        try {
                          const amount =
                            typeof transaction.amount === "number"
                              ? transaction.amount
                              : 0;
                          return `${amount >= 0 ? "+" : "-"}$${Math.abs(
                            amount
                          ).toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}`;
                        } catch {
                          return "$0.00";
                        }
                      })()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.currency || "USD"}
                  </td>

                  {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.type || "Unknown"}
                  </td> */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-100">
                      <div
                        className={`w-2 h-2 rounded-full mr-2 ${
                          transaction.type === "Credit"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      ></div>
                      {transaction.type || "Unknown"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { DashboardSummary } from "@/types";
import { SummaryCardsSkeleton } from "./LoadingSkeletons";
import { ErrorState } from "./EmptyStates";

interface SummaryCardsProps {
  summary: DashboardSummary | null;
  isLoading?: boolean;
  error?: string | null;
}

interface CardData {
  title: string;
  value: string;
  change: number;
  changeLabel: string;
}

export default function SummaryCards({
  summary,
  isLoading = false,
  error = null,
}: SummaryCardsProps) {
  // Handle loading state
  if (isLoading) {
    return <SummaryCardsSkeleton />;
  }

  // Handle error state
  if (error) {
    return (
      <div className="mb-6">
        <ErrorState title="Failed to load summary" description={error} />
      </div>
    );
  }

  // Handle missing data
  if (!summary) {
    return <SummaryCardsSkeleton />;
  }

  const formatValue = (
    value: number | undefined | null,
    isBalance: boolean = false
  ): string => {
    try {
      const numValue = typeof value === "number" && !isNaN(value) ? value : 0;
      if (isBalance) {
        return `$${numValue.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}`;
      }
      return numValue.toLocaleString("en-US");
    } catch {
      return isBalance ? "$0" : "0";
    }
  };

  const formatChange = (value: number | undefined | null): string => {
    try {
      const numValue = typeof value === "number" && !isNaN(value) ? value : 0;
      return `${numValue > 0 ? "+" : ""}${numValue}%`;
    } catch {
      return "0%";
    }
  };

  const cards: CardData[] = [
    {
      title: "Total Balance",
      value: formatValue(summary.totalBalance, true),
      change: summary.balanceChange || 0,
      changeLabel: formatChange(summary.balanceChange),
    },
    {
      title: "Total Credits",
      value: formatValue(summary.totalCredits, true),
      change: summary.creditsChange || 0,
      changeLabel: formatChange(summary.creditsChange),
    },
    {
      title: "Total Debits",
      value: formatValue(summary.totalDebits, true),
      change: summary.debitsChange || 0,
      changeLabel: formatChange(summary.debitsChange),
    },
    {
      title: "Transactions",
      value: formatValue(summary.transactionCount),
      change: summary.transactionChange || 0,
      changeLabel: formatChange(summary.transactionChange),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#34616F]/9 rounded-3xl border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#1B2528] ">
                {card.title}
              </h3>
              <svg
                width="18"
                height="5"
                viewBox="0 0 18 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 0.25C0.89543 0.25 0 1.14543 0 2.25C0 3.35457 0.89543 4.25 2 4.25C3.10457 4.25 4 3.35457 4 2.25C4 1.14543 3.10457 0.25 2 0.25ZM7 2.25C7 1.14543 7.89543 0.25 9 0.25C10.1046 0.25 11 1.14543 11 2.25C11 3.35457 10.1046 4.25 9 4.25C7.89543 4.25 7 3.35457 7 2.25ZM14 2.25C14 1.14543 14.8954 0.25 16 0.25C17.1046 0.25 18 1.14543 18 2.25C18 3.35457 17.1046 4.25 16 4.25C14.8954 4.25 14 3.35457 14 2.25Z"
                  fill="#1B2528"
                />
              </svg>
            </div>
            <div className="flex flex-col ">
              <span className="text-3xl font-bold text-[#1B2528]">
                {card.value}
              </span>
              <span
                className={`text-sm font-medium ${
                  card.change >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {card.changeLabel}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

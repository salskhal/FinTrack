// Core data interfaces for the Wallet Ledger Dashboard

export interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: 'Credit' | 'Debit';
}

export interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}

export interface SortConfig {
  key: keyof Transaction | null;
  direction: 'asc' | 'desc';
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}

// Loading and error state interfaces
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface DataState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

// Sample transaction data
export const sampleTransactions: Transaction[] = [
  {
    id: '1',
    date: '2023-10-01',
    remark: 'Salary',
    amount: 3000,
    currency: 'USD',
    type: 'Credit'
  },
  {
    id: '2',
    date: '2023-10-02',
    remark: 'Groceries',
    amount: -150,
    currency: 'USD',
    type: 'Debit'
  },
  {
    id: '3',
    date: '2023-10-03',
    remark: 'Gym Membership',
    amount: -50,
    currency: 'USD',
    type: 'Debit'
  },
  {
    id: '4',
    date: '2023-10-04',
    remark: 'Dinner',
    amount: -75,
    currency: 'USD',
    type: 'Debit'
  },
  {
    id: '5',
    date: '2023-10-05',
    remark: 'Movie Tickets',
    amount: -25,
    currency: 'USD',
    type: 'Debit'
  },
  {
    id: '6',
    date: '2023-10-06',
    remark: 'Rent',
    amount: -1200,
    currency: 'USD',
    type: 'Debit'
  },
  {
    id: '7',
    date: '2023-10-07',
    remark: 'Utilities',
    amount: -120,
    currency: 'USD',
    type: 'Debit'
  },
  {
    id: '8',
    date: '2023-10-08',
    remark: 'Car Payment',
    amount: -400,
    currency: 'USD',
    type: 'Debit'
  },
  {
    id: '9',
    date: '2023-10-09',
    remark: 'Insurance',
    amount: -200,
    currency: 'USD',
    type: 'Debit'
  }
];

// Sample dashboard summary data
export const dashboardSummary: DashboardSummary = {
  totalBalance: 12345,
  totalCredits: 7890,
  totalDebits: 4455,
  transactionCount: 150,
  balanceChange: 5,
  creditsChange: 3,
  debitsChange: -2,
  transactionChange: 10
};

// Sample user data for the title section
export const sampleUsers: User[] = [
  {
    id: '1',
    name: 'Ava',
    avatar: '/images/profile1.png'
  },
  {
    id: '2',
    name: 'Liam',
    avatar: '/images/profile2.png'
  },
  {
    id: '3',
    name: 'Noah',
    avatar: '/images/profile3.png'
  },
  {
    id: '4',
    name: 'Emma',
    avatar: '/images/profile4.png'
  },
];
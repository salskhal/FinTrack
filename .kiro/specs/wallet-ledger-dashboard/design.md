# Design Document

## Overview

The Wallet Ledger Dashboard is a modern financial tracking interface built with Next.js 15, React 19, and Tailwind CSS 4. The design follows a component-based architecture with TypeScript for type safety, featuring a clean and intuitive user interface that adapts seamlessly across desktop, tablet, and mobile devices.

The dashboard consists of a header navigation, summary cards displaying key financial metrics, and an interactive transaction table with sorting capabilities. The design emphasizes visual hierarchy through proper spacing, typography, and color coding to distinguish between credits and debits.

## Architecture

### Technology Stack
- **Framework**: Next.js 15 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4 with custom CSS variables
- **Language**: TypeScript 5
- **Fonts**: Geist Sans and Geist Mono (already configured)

### Component Hierarchy
```
WalletLedgerDashboard
├── Header
│   ├── Navigation
│   ├── Logo
│   └── UserAvatar
├── DashboardContent
│   ├── TitleSection
│   │   ├── PageTitle
│   │   ├── StatusIndicator
│   │   └── UserAvatars
│   ├── TabNavigation
│   ├── SummaryCards
│   │   ├── BalanceCard
│   │   ├── CreditsCard
│   │   ├── DebitsCard
│   │   └── TransactionsCard
│   └── TransactionTable
│       ├── TableHeader
│       ├── SortableColumns
│       └── TransactionRows
```

### State Management
- **Local State**: React useState for component-level state (sorting, UI interactions)
- **Data Flow**: Props drilling for simple data passing
- **Sorting State**: Managed at TransactionTable level with sort direction and column tracking

## Components and Interfaces

### Core Data Types

```typescript
interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: 'Credit' | 'Debit';
}

interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}

interface SortConfig {
  key: keyof Transaction | null;
  direction: 'asc' | 'desc';
}

interface User {
  id: string;
  name: string;
  avatar: string;
}
```

### Component Specifications

#### Header Component
- **Purpose**: Top navigation with branding and user controls
- **Props**: `user: User, onMenuClick: () => void`
- **Features**: FinTrack logo, search functionality, user avatar, responsive hamburger menu

#### SummaryCards Component
- **Purpose**: Display key financial metrics in card format
- **Props**: `summary: DashboardSummary`
- **Features**: Four cards with values and percentage changes, color-coded indicators

#### TransactionTable Component
- **Purpose**: Interactive table for transaction data
- **Props**: `transactions: Transaction[], onSort: (key: keyof Transaction) => void`
- **Features**: Sortable columns, type indicators, hover states, responsive design

#### StatusIndicator Component
- **Purpose**: Visual active status display
- **Props**: `isActive: boolean, label: string`
- **Features**: Green dot with "Active" text

## Data Models

### Sample Data Structure

```typescript
const sampleTransactions: Transaction[] = [
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
  // ... additional transactions
];

const dashboardSummary: DashboardSummary = {
  totalBalance: 12345,
  totalCredits: 7890,
  totalDebits: 4455,
  transactionCount: 150,
  balanceChange: 5,
  creditsChange: 3,
  debitsChange: -2,
  transactionChange: 10
};
```

### Data Processing
- **Sorting Logic**: Implement multi-column sorting with date, amount, and remark support
- **Calculation Logic**: Derive summary metrics from transaction data
- **Formatting**: Currency formatting, date formatting, percentage display

## Visual Design System

### Color Palette
```css
:root {
  --color-primary: #3b82f6;      /* Blue for primary actions */
  --color-success: #10b981;      /* Green for credits */
  --color-danger: #ef4444;       /* Red for debits */
  --color-neutral-50: #f9fafb;   /* Light backgrounds */
  --color-neutral-100: #f3f4f6;  /* Card backgrounds */
  --color-neutral-500: #6b7280;  /* Secondary text */
  --color-neutral-900: #111827;  /* Primary text */
}
```

### Typography Scale
- **Headings**: Geist Sans font family
- **Body**: Geist Sans with appropriate line heights
- **Monospace**: Geist Mono for amounts and dates
- **Sizes**: text-sm, text-base, text-lg, text-xl, text-2xl

### Spacing System
- **Container**: max-width with responsive padding
- **Cards**: p-6 with rounded-lg borders
- **Table**: p-4 cells with border-b separators
- **Grid**: gap-4 for card layouts, gap-2 for compact elements

### Responsive Breakpoints
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (sm to lg)
- **Desktop**: > 1024px (lg+)

## Interactive Elements

### Hover States
- **Table Rows**: Background color change on hover
- **Cards**: Subtle shadow elevation
- **Buttons**: Color transitions and scale effects

### Sorting Indicators
- **Visual Cues**: Arrow icons for sort direction
- **Active State**: Highlighted column headers
- **Accessibility**: ARIA labels for screen readers

### Mobile Adaptations
- **Table**: Horizontal scroll with sticky first column
- **Cards**: Stack vertically on mobile
- **Navigation**: Collapsible hamburger menu

## Error Handling

### Loading States
- **Skeleton Components**: Placeholder cards and table rows
- **Progressive Loading**: Show available data while loading additional content
- **Spinner Indicators**: For data fetching operations

### Empty States
- **No Transactions**: Friendly message with illustration
- **Search Results**: "No results found" with clear action
- **Error Boundaries**: Graceful fallback UI for component errors

### Data Validation
- **Type Guards**: Runtime validation for API responses
- **Fallback Values**: Default values for missing data
- **Error Messages**: User-friendly error descriptions

## Accessibility

### WCAG Compliance
- **Semantic HTML**: Proper heading hierarchy and table structure
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Tab order and focus management
- **Color Contrast**: Minimum 4.5:1 ratio for text

### Screen Reader Support
- **Table Headers**: Proper th and scope attributes
- **Sort Indicators**: Announced sort direction changes
- **Status Updates**: Live regions for dynamic content
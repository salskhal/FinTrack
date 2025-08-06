# FinTrack - Wallet Ledger Dashboard

A modern, responsive financial dashboard built with React, TypeScript, and Next.js. This project implements a comprehensive wallet ledger interface with transaction management, summary cards, and user-friendly navigation.

## 🚀 Live Demo

**[View Live Application](YOUR_DEPLOYED_URL_HERE)**

## 📋 Project Overview

This application was built as part of a technical assessment for Resilience 17 Venture Studio. It demonstrates proficiency in modern frontend development practices, component-based architecture, and responsive design principles.

### Key Features

- **Responsive Dashboard Layout** - Optimized for desktop and mobile devices
- **Interactive Transaction Table** - Sortable columns with real-time data filtering
- **Summary Cards** - Financial overview with percentage changes
- **User Management** - Avatar display and user profile integration
- **Error Handling** - Comprehensive error boundaries and fallback states
- **Loading States** - Skeleton loaders for improved user experience
- **TypeScript Integration** - Full type safety throughout the application

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **State Management**: React Hooks
- **Icons**: Heroicons (SVG)
- **Deployment**: Vercel/Netlify Ready

## 📁 Project Structure

```
fintrack/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main dashboard page
├── components/            # Reusable UI components
│   ├── Header.tsx         # Navigation header
│   ├── SummaryCards.tsx   # Financial summary cards
│   ├── TransactionTable.tsx # Transaction data table
│   ├── TabNavigation.tsx  # Tab navigation
│   ├── TitleSection.tsx   # Page title with user avatars
│   ├── ErrorBoundary.tsx  # Error handling wrapper
│   ├── ErrorFallback.tsx  # Error fallback UI
│   ├── EmptyStates.tsx    # Empty state components
│   └── LoadingSkeletons.tsx # Loading state components
├── hooks/                 # Custom React hooks
│   └── useDataService.ts  # Data fetching and state management
├── types/                 # TypeScript type definitions
│   └── index.ts           # Core interfaces and sample data
├── utils/                 # Utility functions
│   └── validation.ts      # Data validation helpers
└── public/               # Static assets
    ├── images/           # User profile images
    └── logo.svg          # Application logo
```

## 🎯 Implementation Highlights

### Dashboard Requirements ✅

- [x] **Header Section** - FinTrack logo, search functionality, user avatar
- [x] **Title Section** - "Wallet Ledger" with user avatars (Ava, Liam, Noah +12 others)
- [x] **Tab Navigation** - Overview and Transactions tabs
- [x] **Summary Cards** - Total Balance, Credits, Debits, and Transaction count with percentage changes
- [x] **Transaction Table** - Sortable columns with sample data as specified
- [x] **Visual Requirements** - Color-coded transactions, responsive design, hover states

### Technical Requirements ✅

- [x] **TypeScript** - Full type safety with proper interfaces
- [x] **Component Architecture** - Modular, reusable components
- [x] **State Management** - React hooks for sorting, filtering, and data display
- [x] **Responsive Design** - Mobile-first approach with Tailwind CSS
- [x] **Error Handling** - Comprehensive error boundaries and validation
- [x] **Loading States** - Skeleton loaders and loading indicators

### Sample Data Implementation

The application uses the exact data structure specified in the requirements:

```typescript
interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}

interface DashboardSummary {
  totalBalance: number; // $12,345 (+5%)
  totalCredits: number; // $7,890 (+3%)
  totalDebits: number; // $4,455 (-2%)
  transactionCount: number; // 150 (+10%)
  // ... percentage changes
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone [YOUR_GITHUB_REPO_URL]
   cd fintrack
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Design Implementation

The application closely follows the provided Figma design with:

- **Clean, modern UI** with proper spacing and typography
- **Color-coded transactions** (green for credits, red for debits)
- **Responsive breakpoints** for mobile, tablet, and desktop
- **Interactive elements** with hover states and smooth transitions
- **Consistent visual hierarchy** throughout the interface

## 🔧 Key Features Deep Dive

### Transaction Table

- **Sortable columns** for Date, Remark, and Amount
- **Visual indicators** with colored dots for transaction types
- **Responsive design** with horizontal scroll on mobile
- **Error handling** for invalid data formats

### Summary Cards

- **Real-time calculations** based on transaction data
- **Percentage change indicators** with color coding
- **Responsive grid layout** adapting to screen size
- **Loading skeletons** during data fetch

### Error Handling

- **Error boundaries** to catch and handle React errors
- **Validation utilities** for data integrity
- **Fallback states** for network failures
- **User-friendly error messages** with retry options

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:

- Collapsible mobile navigation
- Stacked summary cards on mobile
- Horizontal scroll for transaction table
- Touch-friendly interactive elements

## 🧪 Testing & Quality

### Code Quality

- **TypeScript strict mode** enabled
- **ESLint configuration** for code consistency
- **Component prop validation** with TypeScript interfaces
- **Error boundary implementation** for graceful error handling

### Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement approach

## 🚀 Deployment

This application is optimized for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any static hosting service**

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Deploy to Netlify

1. Build the application: `npm run build`
2. Deploy the `out` folder to Netlify

## 👨‍💻 Developer Information

**Developed by**: [Your Name]  
**Email**: [your.email@example.com]  
**GitHub**: [your-github-username]  
**LinkedIn**: [your-linkedin-profile]

### Development Timeline

- **Project Start**: [Date]
- **Completion**: [Date]
- **Total Development Time**: [X hours/days]

## 📄 License

This project is developed as part of a technical assessment for Resilience 17 Venture Studio.

---

**Ready to execute at the speed of thought** ⚡

_This project demonstrates precision, attention to detail, and the ability to follow specifications exactly as required._

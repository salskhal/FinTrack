import { Transaction, DashboardSummary, User } from '@/types';

// Type guards for runtime validation
export function isValidTransaction(obj: any): obj is Transaction {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.date === 'string' &&
    typeof obj.remark === 'string' &&
    typeof obj.amount === 'number' &&
    typeof obj.currency === 'string' &&
    (obj.type === 'Credit' || obj.type === 'Debit') &&
    !isNaN(new Date(obj.date).getTime()) // Valid date
  );
}

export function isValidDashboardSummary(obj: any): obj is DashboardSummary {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.totalBalance === 'number' &&
    typeof obj.totalCredits === 'number' &&
    typeof obj.totalDebits === 'number' &&
    typeof obj.transactionCount === 'number' &&
    typeof obj.balanceChange === 'number' &&
    typeof obj.creditsChange === 'number' &&
    typeof obj.debitsChange === 'number' &&
    typeof obj.transactionChange === 'number'
  );
}

export function isValidUser(obj: any): obj is User {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.avatar === 'string'
  );
}

// Validation functions that return sanitized data or throw errors
export function validateTransactions(data: any[]): Transaction[] {
  if (!data) {
    throw new Error('Transaction data is null or undefined');
  }
  
  if (!Array.isArray(data)) {
    throw new Error('Transaction data must be an array');
  }

  if (data.length === 0) {
    return []; // Empty array is valid
  }

  const validTransactions: Transaction[] = [];
  const errors: string[] = [];

  data.forEach((item, index) => {
    try {
      if (isValidTransaction(item)) {
        // Additional sanitization
        const sanitizedTransaction: Transaction = {
          id: String(item.id).trim(),
          date: String(item.date).trim(),
          remark: String(item.remark).trim() || 'No description',
          amount: Number(item.amount) || 0,
          currency: String(item.currency).trim().toUpperCase() || 'USD',
          type: item.type === 'Credit' || item.type === 'Debit' ? item.type : 'Credit'
        };
        validTransactions.push(sanitizedTransaction);
      } else {
        errors.push(`Invalid transaction at index ${index}: ${JSON.stringify(item)}`);
      }
    } catch (error) {
      errors.push(`Error processing transaction at index ${index}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  });

  if (errors.length > 0 && validTransactions.length === 0) {
    throw new Error(`All transactions are invalid: ${errors.slice(0, 3).join(', ')}${errors.length > 3 ? '...' : ''}`);
  }

  // Log warnings for invalid items but continue with valid ones
  if (errors.length > 0) {
    console.warn(`${errors.length} transactions were invalid and skipped:`, errors.slice(0, 5));
  }

  return validTransactions;
}

export function validateDashboardSummary(data: any): DashboardSummary {
  if (!data || typeof data !== 'object') {
    throw new Error('Dashboard summary data is null, undefined, or not an object');
  }

  try {
    // Sanitize and validate each field
    const sanitizedSummary: DashboardSummary = {
      totalBalance: typeof data.totalBalance === 'number' && !isNaN(data.totalBalance) ? data.totalBalance : 0,
      totalCredits: typeof data.totalCredits === 'number' && !isNaN(data.totalCredits) ? data.totalCredits : 0,
      totalDebits: typeof data.totalDebits === 'number' && !isNaN(data.totalDebits) ? data.totalDebits : 0,
      transactionCount: typeof data.transactionCount === 'number' && !isNaN(data.transactionCount) ? Math.max(0, Math.floor(data.transactionCount)) : 0,
      balanceChange: typeof data.balanceChange === 'number' && !isNaN(data.balanceChange) ? data.balanceChange : 0,
      creditsChange: typeof data.creditsChange === 'number' && !isNaN(data.creditsChange) ? data.creditsChange : 0,
      debitsChange: typeof data.debitsChange === 'number' && !isNaN(data.debitsChange) ? data.debitsChange : 0,
      transactionChange: typeof data.transactionChange === 'number' && !isNaN(data.transactionChange) ? data.transactionChange : 0,
    };

    return sanitizedSummary;
  } catch (error) {
    throw new Error(`Failed to validate dashboard summary: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export function validateUsers(data: any[]): User[] {
  if (!Array.isArray(data)) {
    throw new Error('User data must be an array');
  }

  const validUsers: User[] = [];
  const errors: string[] = [];

  data.forEach((item, index) => {
    if (isValidUser(item)) {
      validUsers.push(item);
    } else {
      errors.push(`Invalid user at index ${index}`);
    }
  });

  if (errors.length > 0 && validUsers.length === 0) {
    throw new Error(`All users are invalid: ${errors.join(', ')}`);
  }

  if (errors.length > 0) {
    console.warn('Some users were invalid and skipped:', errors);
  }

  return validUsers;
}

// Fallback data generators
export function getDefaultTransaction(): Transaction {
  return {
    id: 'fallback-1',
    date: new Date().toISOString().split('T')[0],
    remark: 'Unknown Transaction',
    amount: 0,
    currency: 'USD',
    type: 'Credit'
  };
}

export function getDefaultDashboardSummary(): DashboardSummary {
  return {
    totalBalance: 0,
    totalCredits: 0,
    totalDebits: 0,
    transactionCount: 0,
    balanceChange: 0,
    creditsChange: 0,
    debitsChange: 0,
    transactionChange: 0
  };
}

export function getDefaultUser(): User {
  return {
    id: 'fallback-user',
    name: 'Unknown User',
    avatar: '/images/profile1.png'
  };
}
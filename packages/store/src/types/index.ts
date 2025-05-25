export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface Transaction {
  id: string;
  amount: number;
  type: 'credit' | 'debit' | 'transfer';
  description: string;
  timestamp: Date;
  status: 'pending' | 'completed' | 'failed';
}

export interface BalanceState {
  balance: number;
  isLoading: boolean;
  setBalance: (balance: number) => void;
  updateBalance: (amount: number) => void;
  setLoading: (loading: boolean) => void;
}

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export interface TransactionState {
  transactions: Transaction[];
  isLoading: boolean;
  addTransaction: (transaction: Transaction) => void;
  setTransactions: (transactions: Transaction[]) => void;
  setLoading: (loading: boolean) => void;
}
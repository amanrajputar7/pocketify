import { create } from 'zustand';
import { TransactionState } from '../types';

export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: [],
  isLoading: false,
  
  addTransaction: (transaction) => set((state) => ({
    transactions: [transaction, ...state.transactions]
  })),
  
  setTransactions: (transactions) => set({ transactions }),
  
  setLoading: (isLoading) => set({ isLoading }),
}));
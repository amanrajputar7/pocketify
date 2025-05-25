import { create } from 'zustand';
import { BalanceState } from '../types';

export const useBalanceStore = create<BalanceState>((set, get) => ({
  balance: 0,
  isLoading: false,
  
  setBalance: (balance: number) => set({ balance }),
  
  updateBalance: (amount: number) => {
    const currentBalance = get().balance;
    set({ balance: currentBalance + amount });
  },
  
  setLoading: (isLoading: boolean) => set({ isLoading }),
}));
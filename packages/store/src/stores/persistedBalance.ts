import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BalanceState } from '../types';

export const usePersistedBalanceStore = create<BalanceState>()(
  persist(
    (set, get) => ({
      balance: 0,
      isLoading: false,
      
      setBalance: (balance: number) => set({ balance }),
      updateBalance: (amount: number) => {
        const currentBalance = get().balance;
        set({ balance: currentBalance + amount });
      },
      setLoading: (isLoading: boolean) => set({ isLoading }),
    }),
    {
      name: 'balance-storage',
    }
  )
);
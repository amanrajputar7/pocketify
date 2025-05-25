import { create } from 'zustand';
import { UserState } from '../types';

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isAuthenticated: false,
  
  setUser: (user) => set({ 
    user, 
    isAuthenticated: user !== null 
  }),
  
  logout: () => set({ 
    user: null, 
    isAuthenticated: false 
  }),
}));
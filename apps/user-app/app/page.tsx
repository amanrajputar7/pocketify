"use client";

import { useBalanceStore } from "@repo/store/balance";
import { useEffect } from "react";

export default function Page() {
  const { balance, setBalance, updateBalance, isLoading } = useBalanceStore();

  useEffect(() => {
    // Simulate loading balance from API
    setBalance(1000);
  }, [setBalance]);

  const addMoney = () => {
    updateBalance(100);
  };

  const spendMoney = () => {
    updateBalance(-50);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          User App - Paytm Clone
        </h1>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Wallet Balance</h2>
          <p className="text-3xl font-bold text-green-600">
            ₹{balance.toLocaleString()}
          </p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={addMoney}
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add ₹100
          </button>
          
          <button 
            onClick={spendMoney}
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Spend ₹50
          </button>
        </div>

        <p className="text-gray-600 mt-4 text-center">
          Zustand state management working! 🎉
        </p>
      </div>
    </div>
  );
}
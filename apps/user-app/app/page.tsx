"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useBalanceStore } from "@repo/store/balance";
import { useEffect } from "react";

export default function Page() {
  const { data: session, status } = useSession();
  const { balance, setBalance, updateBalance } = useBalanceStore();

  useEffect(() => {
    if (session) {
      setBalance(1000); // Set initial balance when logged in
    }
  }, [session, setBalance]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            User App - Paytm Clone
          </h1>
          <p className="text-gray-600 mb-4">
            Please sign in to continue
          </p>
          <button
            onClick={() => signIn()}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome, {session.user?.name || session.user?.email}
          </h1>
          <button
            onClick={() => signOut()}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
          >
            Sign Out
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Wallet Balance</h2>
          <p className="text-3xl font-bold text-green-600">
            ₹{balance.toLocaleString()}
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => updateBalance(100)}
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add ₹100
          </button>

          <button
            onClick={() => updateBalance(-50)}
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Spend ₹50
          </button>
        </div>
      </div>
    </div>
  );
}
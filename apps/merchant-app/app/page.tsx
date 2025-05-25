"use client";

import { useUserStore } from "@repo/store/user";
import { useEffect } from "react";

export default function Page() {
  const { user, isAuthenticated, setUser, logout } = useUserStore();

  const loginUser = () => {
    setUser({
      id: "1",
      name: "Test Merchant",
      email: "merchant@example.com"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Merchant App - Paytm Clone
        </h1>
        
        {isAuthenticated ? (
          <div>
            <h2 className="text-xl font-semibold mb-2">Welcome!</h2>
            <p className="text-gray-600 mb-4">
              {user?.name} ({user?.email})
            </p>
            <button 
              onClick={logout}
              className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-4">
              Please login to continue
            </p>
            <button 
              onClick={loginUser}
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Login as Merchant
            </button>
          </div>
        )}

        <p className="text-gray-600 mt-4 text-center">
          Zustand user management working! 🎉
        </p>
      </div>
    </div>
  );
}
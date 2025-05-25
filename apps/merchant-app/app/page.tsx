export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Merchant App - Paytm Clone
        </h1>
        <p className="text-gray-600">
          Tailwind CSS is working! 🎉
        </p>
        <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Login with Google
        </button>
      </div>
    </div>
  );
}
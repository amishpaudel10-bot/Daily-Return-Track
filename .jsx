import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome Back</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Username</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Enter username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="••••••••" />
          </div>
          <button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-2 rounded-lg hover:opacity-90 transition">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? <span className="text-pink-600 font-bold cursor-pointer">Register</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center w-[100%] h-screen">
      <div className="p-8 rounded-lg bg-[rgb(31,41,55)] shadow-md w-full max-w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Login
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              User Name
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-4 py-2 border border-white rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-white"
              placeholder="Enter Your User Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-white rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-white"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

// File: src/components/LoadingSpinner.js
import React, { useState } from "react";
import virat_logo from "../../../assets/logo/vireta-small-logo.png";

const LoadingSpinner2 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setIsSuccess(false);

    // Simulate loading process for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="relative w-64 h-64 mb-8">
        <img
          src={virat_logo}
          alt="Virat Kohli"
          className="w-full h-full object-contain rounded-lg shadow-lg"
        />

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        )}
      </div>

      <button
        onClick={handleClick}
        disabled={isLoading}
        className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isLoading ? "Loading..." : "Click to Load"}
      </button>

      {isSuccess && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fadeIn">
          <p className="font-medium">
            Success! Data has been loaded successfully.
          </p>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner2;

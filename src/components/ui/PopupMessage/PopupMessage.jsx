import React from "react";

const PopupMessage = ({ open, type, message, onClose }) => {
  if (!open) return null;

  // ✅ Different colors based on type
  const colors = {
    success: "bg-green-100 text-green-800 border-green-500",
    error: "bg-red-100 text-red-800 border-red-500",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 ">
      <div
        className={`rounded-xl shadow-xl border p-6 w-80 text-center animate-fadeIn ${colors[type]}`}
      >
        <h2 className="text-lg font-semibold mb-2 capitalize">
          {type === "success" ? "Success!" : "Error!"}
        </h2>
        <p className="text-sm">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-white border rounded-md hover:bg-gray-100"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupMessage;

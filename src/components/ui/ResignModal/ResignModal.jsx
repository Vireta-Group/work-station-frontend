import { useState } from "react";
import { BsTrash2 } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

const ResignModal = ({ open, onClose, onConfirm, employee }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/25">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Confirm Resign
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <IoCloseSharp size={24} />
          </button>
        </div>

        <p className="text-sm text-gray-700">
          Are you sure you want to resign{" "}
          <span className="font-medium">{employee?.empName}</span>?
        </p>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(employee.empId)}
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 flex items-center gap-2"
          >
            <BsTrash2 />
            Yes, Resign
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResignModal;

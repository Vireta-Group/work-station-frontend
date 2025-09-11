import React, { useState } from "react";
import { FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import Label from "../../../components/form/Label";

export default function TaskHistoryForm() {
  const [startDate, setStartDate] = useState(null);
  const [expireDate, setExpireDate] = useState(null);
  const [department, setDepartment] = useState(null);

  const departmentOptions = [
    { value: "hr", label: "Human Resources" },
    { value: "it", label: "Information Technology" },
    { value: "finance", label: "Finance" },
    { value: "marketing", label: "Marketing" },
    { value: "sales", label: "Sales" },
  ];

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      {/* Card */}
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6 dark:bg-black">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 dark:text-gray-100">
          <FaBriefcase className="w-5 h-5 text-blue-600" />
          Working History
        </h2>

        {/* Inline Form */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Start Date */}
          <div className="flex flex-col ">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1 dark:text-gray-200">
              <FaCalendarAlt className="text-blue-500" /> Start Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Start date"
              className="border rounded-lg px-3 py-2 w-44 focus:ring-2 focus:ring-blue-400 outline-none dark:text-gray-200"
            />
          </div>

          {/* Expire Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1 dark:text-gray-200">
              <FaCalendarAlt className="text-red-500" /> Expire Date
            </label>
            <DatePicker
              selected={expireDate}
              onChange={(date) => setExpireDate(date)}
              placeholderText="Expire date"
              className="border rounded-lg px-3 py-2 w-44 focus:ring-2 focus:ring-red-400 outline-none dark:text-gray-200"
            />
          </div>

          {/* Department */}
          {/* <div className="flex flex-col min-w-[200px]">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1 dark:text-gray-200">
              <FaBriefcase className="text-green-500" /> Department
            </label>
            <select
              options={departmentOptions}
              value={department}
              onChange={setDepartment}
              placeholder="Select department..."
              isSearchable
              className="text-gray-700  "
            />
          </div> */}

          <div>
            <Label>Working Type</Label>
            <div className="relative">
              <select className="w-full rounded-md border border-gray-300 bg-white pl-[62px] py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
                <option value="">Select Type</option>
                <option value="remote">Human Resources</option>
                <option value="physical">Information Technology</option>
              </select>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <FaBriefcase className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ...existing code...
import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaBriefcase } from "react-icons/fa";

import Label from "../../../components/form/Label";
import DatePicker from "../../../components/form/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { getAllDepartment } from "../../../features/getDepartment/getDepartmentSlice";
import { fetchEmployeesByDepartment } from "../../../features/employeeByDepartment/employeeByDepartmentSlice";
import {
  fetchTaskHistoryByDates,
  selectTaskHistoryStatus,
  selectTaskHistoryError,
} from "../../../features/taskHistory/taskHistorySlice";
import { z } from "zod";

//  Step 1: Validation Schema
const historySchema = z.object({
  emp_id: z.string().min(1, { message: "Employee is required" }),
  startdate: z.string().min(1, { message: "Start date is required" }),
  enddate: z.string().min(1, { message: "End date is required" }),
});

export default function TaskHistoryForm() {
  const dispatch = useDispatch();
  const depertment = useSelector((data) => data.getAllDepartment);
  const employees = useSelector((data) => data.employeeByDepertment);
  const [formData, setFormData] = useState({
    emp_id: "",
    startdate: "",
    enddate: "",
  });

  const status = useSelector(selectTaskHistoryStatus);
  const error = useSelector(selectTaskHistoryError);

  const [validationErrors, setValidationErrors] = useState({});
  const [popup, setPopup] = useState({ open: false, type: "", message: "" });

  useEffect(() => {
    if (depertment.departments.length === 0 && depertment.error === null) {
      dispatch(getAllDepartment());
    }
  }, [depertment, dispatch]);

  const depertmentChange = (e) => {
    const id = e.target.value;
    dispatch(fetchEmployeesByDepartment({ department_id: id }));
  };

  const empChange = (e) => {
    setFormData((state) => ({ ...state, emp_id: e.target.value }));
  };

  const formatDateValue = (dates, currentDateString) => {
    if (currentDateString) return currentDateString;
    if (!dates) return "";
    const d = Array.isArray(dates) ? dates[0] : dates;
    const dt = d instanceof Date ? d : new Date(d);
    if (isNaN(dt.getTime())) return "";
    return dt.toISOString().slice(0, 10);
  };

  const handleStartDateChange = (dates, currentDateString) => {
    const value = formatDateValue(dates, currentDateString);
    setFormData((prev) => ({ ...prev, startdate: value }));
  };

  const handleEndDateChange = (dates, currentDateString) => {
    const value = formatDateValue(dates, currentDateString);
    setFormData((prev) => ({ ...prev, enddate: value }));
  };

  const clickHandler = () => {
    const result = historySchema.safeParse(formData);
    if (!result.success) {
      const formattedErrors = {};
      result.error.issues.forEach((err) => {
        formattedErrors[err.path[0]] = err.message;
      });
      setValidationErrors(formattedErrors);
      return;
    }

    setValidationErrors({});
    dispatch(fetchTaskHistoryByDates(formData));
  };

  //  Popup Logic
  useEffect(() => {
    if (status === "succeeded") {
      setPopup({
        open: true,
        type: "success",
        message: "Task history fetched successfully!",
      });
    }

    if (status === "failed") {
      setPopup({
        open: true,
        type: "error",
        message: error?.message || "Failed to fetch data!",
      });
    }
  }, [status, error]);

  // ✅ Auto close popup
  useEffect(() => {
    if (popup.open) {
      const timer = setTimeout(
        () => setPopup({ open: false, type: "", message: "" }),
        2500
      );
      return () => clearTimeout(timer);
    }
  }, [popup.open]);

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100">
        {/* Card */}
        <div className="w-full max-w-6xl bg-white  p-6 dark:bg-black">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 dark:text-gray-100">
            <FaBriefcase className="w-5 h-5 text-blue-600" />
            Working History
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Start Date */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1 dark:text-gray-200">
                <FaCalendarAlt className="text-blue-500" /> Start Date
              </label>
              <DatePicker
                id="start-date-picker"
                placeholder="Select a date "
                onChange={handleStartDateChange}
              />
              {validationErrors["startdate"] && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors["startdate"]}
                </p>
              )}
            </div>

            {/* End Date */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1 dark:text-gray-200">
                <FaCalendarAlt className="text-red-500" /> End Date
              </label>
              <DatePicker
                id="end-date-picker"
                placeholder="Select a date "
                onChange={handleEndDateChange}
              />
              {validationErrors["enddate"] && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors["enddate"]}
                </p>
              )}
            </div>

            {/* Department */}
            <div>
              <Label>Department</Label>
              <div className="relative">
                <select
                  className="w-full rounded-md border border-gray-300 bg-white pl-[62px] py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                  onChange={depertmentChange}
                >
                  <option value="">Select Department</option>
                  {depertment.departments.map((data) => (
                    <option key={data.departmentId} value={data.departmentId}>
                      {data.departmentName}
                    </option>
                  ))}
                </select>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400 ">
                  <FaBriefcase className="!w-6 !h-6 text-gray-500 " />
                </span>
              </div>
            </div>

            {/* Employee */}
            <div>
              <Label>Select Employee</Label>
              <div className="relative">
                <select
                  className="w-full rounded-md border border-gray-300 bg-white pl-[62px] py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                  onChange={empChange}
                >
                  <option value="">Select Employee</option>
                  {employees.items.map((data) => (
                    <option key={data?.empId} value={data?.empId}>
                      {data?.empName}
                    </option>
                  ))}
                </select>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <FaBriefcase className="!w-6 !h-6 text-gray-500" />
                </span>
              </div>
              {validationErrors["emp_id"] && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors["emp_id"]}
                </p>
              )}
            </div>
          </div>

          {/* Button (centered) */}
          <div className="flex justify-center mt-6">
            <button
              onClick={clickHandler}
              className="px-10 py-2 text-xl bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Get Data
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ...existing code...
import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaBriefcase } from "react-icons/fa";

import Label from "../../../components/form/Label";
import DatePicker from "../../../components/form/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { getAllDepartment } from "../../../features/getDepartment/getDepartmentSlice";
import { fetchEmployeesByDepartment } from "../../../features/employeeByDepartment/employeeByDepartmentSlice";
import { fetchTaskHistoryByDates } from "../../../features/taskHistory/taskHistorySlice";

export default function TaskHistoryForm() {
  const dispatch = useDispatch();
  const depertment = useSelector((data) => data.getAllDepartment);
  const employees = useSelector((data) => data.employeeByDepertment);
  const [formData, setFormData] = useState({
    emp_id: "",
    startdate: "",
    enddate: "",
  });

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
    dispatch(fetchTaskHistoryByDates(formData));
  };

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
              id="start-date-picker"
              placeholder="Select a date "
              onChange={handleStartDateChange}
            />
          </div>
          {/* Expire Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1 dark:text-gray-200">
              <FaCalendarAlt className="text-red-500" /> Expire Date
            </label>
            <DatePicker
              id="end-date-picker"
              placeholder="Select a date "
              onChange={handleEndDateChange}
            />
          </div>

          <div>
            <Label>department</Label>
            <div className="relative">
              <select
                className="w-full rounded-md border border-gray-300 bg-white pl-[62px] py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                onChange={depertmentChange}
              >
                <option value="">Select Department</option>
                {depertment.departments.map((data) => {
                  return (
                    <option key={data.departmentId} value={data.departmentId}>
                      {data.departmentName}
                    </option>
                  );
                })}
              </select>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <FaBriefcase className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
          </div>

          <div>
            <Label>Select Employee</Label>
            <div className="relative">
              <select
                className="w-full rounded-md border border-gray-300 bg-white pl-[62px] py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                onChange={empChange}
              >
                <option value="">Select Employee</option>
                {employees.items.map((data) => {
                  return (
                    <option key={data?.empId} value={data?.empId}>
                      {data?.empName}
                    </option>
                  );
                })}
              </select>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <FaBriefcase className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
          </div>

          <button onClick={clickHandler}>Get Data</button>
        </div>
      </div>
    </div>
  );
}

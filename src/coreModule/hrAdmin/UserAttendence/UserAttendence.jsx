import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "../../../components/ui/table/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeAttendanceByDates } from "../../../features/employeeAttendance/employeeAttendanceSlice";
import { getAllDepartment } from "../../../features/getDepartment/getDepartmentSlice";

const EmployeeAttendance = () => {
  const [formData, setFormData] = useState({
    start_date: "",
    end_date: "",
    department_id: "",
  });
  const att = useSelector((data) => data.employeeAttendance).items;
  const dip = useSelector((data) => data.getAllDepartment).departments;
  const dispatch = useDispatch();
  let tableHead = [];
  let tableBody = [];

  useEffect(() => {
    if (dip.length === 0) {
      dispatch(getAllDepartment());
    }
  }, [dip, dispatch]);

  if (att.length > 0) {
    const start = new Date(formData.start_date);
    const end = new Date(formData.end_date);

    if (tableBody.length === 0) {
      tableBody = att.map((emp) => ({
        name: emp.empName,
        designation: emp.designation,
        data: [],
      }));
    }

    if (start > end) {
      alert("Start date must be before end date");
    } else {
      const current = new Date(start);

      if (tableHead.length === 0) {
        while (current <= end) {
          tableHead.push(
            <TableCell
              isHeader
              className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200"
            >
              {current.toISOString().split("T")[0]}
            </TableCell>
          );

          att.forEach((data1) => {
            tableBody.forEach((data2, i2) => {
              if (data1.empName === data2.name) {
                const value = data1.attendance_details.some(
                  (data3) =>
                    data3.date === String(current.toISOString().split("T")[0])
                );

                tableBody[i2].data.push(value);
              }
            });
          });

          current.setDate(current.getDate() + 1);
        }
      }
    }
  }

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    tableBody = [];
    tableHead = [];
    dispatch(fetchEmployeeAttendanceByDates(formData));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        Employee Attendance
      </h1>

      {/* Search Section */}
      <div className="flex items-center gap-4">
        <input
          type="date"
          name="start_date"
          value={formData.start_date}
          onChange={changeHandler}
          className="border rounded-lg px-4 py-2 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
        <input
          type="date"
          name="end_date"
          value={formData.end_date}
          onChange={changeHandler}
          className="border rounded-lg px-4 py-2 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
        <select
          onChange={changeHandler}
          name="department_id"
          value={formData.department_id}
        >
          <option>Select department</option>
          {dip?.map((department) => (
            <option
              key={department.departmentId}
              value={department.departmentId}
            >
              {department.departmentName}
            </option>
          ))}
        </select>
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Attendance Table */}
      {tableBody.length > 0 ? (
        <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="bg-gray-100 dark:bg-gray-800">
                <TableCell
                  isHeader
                  className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200"
                >
                  User
                </TableCell>
                {tableHead}
              </TableRow>
            </TableHeader>

            <TableBody>
              {tableBody.map((emp, index) => (
                <TableRow
                  key={index}
                  className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {emp.name}
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {emp.designation}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  {emp.data.map((value, index) => (
                    <TableCell className="px-4 py-3" key={index}>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          value
                            ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                            : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {value ? "Present" : "Absent"}
                      </span>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">
          Please select a date and search.
        </p>
      )}
    </div>
  );
};

export default EmployeeAttendance;

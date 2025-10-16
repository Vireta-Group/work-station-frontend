// EditEmployee.jsx
import React, { useState, useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import EditEmployeeForm from "./EditEmployeeForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllDepartment } from "../../../features/getDepartment/getDepartmentSlice";
import { fetchEmployeesByDepartment } from "../../../features/employeeByDepartment/employeeByDepartmentSlice";
import { fetchEmployeeById } from "../../../features/empById/empByIdSlice";

// const employees = [
//   {
//     id: 1,
//     name: "Abdul Karim",
//     father: "Rahim",
//     mother: "Ayesha",
//     nid: "123456789",
//     dob: "1995-05-10",
//     local: "Dhaka",
//     permanent: "Chittagong",
//     education: "BSc",
//     gender: "Male",
//     blood: "A+",
//   },
//   {
//     id: 2,
//     name: "Hasan Ali",
//     father: "Salam",
//     mother: "Rokeya",
//     nid: "987654321",
//     dob: "1992-02-15",
//     local: "Sylhet",
//     permanent: "Barishal",
//     education: "HSC",
//     gender: "Male",
//     blood: "B+",
//   },
// ];

const EditEmployee = () => {
  const [empId, setEmpId] = useState("");
  const dispatch = useDispatch();
  const depertment = useSelector((data) => data.getAllDepartment);
  const employees = useSelector((data) => data.employeeByDepertment);

  useEffect(() => {
    if (depertment.departments.length === 0 && depertment.error === null) {
      dispatch(getAllDepartment());
    }
  }, [depertment, dispatch]);

  // Dropdown select
  const handleSelect = (e) => {
    setEmpId(e.target.value);
  };

  const depertmentChanger = (e) => {
    const id = e.target.value;
    dispatch(fetchEmployeesByDepartment({ department_id: id }));
  };

  const clickHandler = () => {
    dispatch(fetchEmployeeById({ emp_id: empId }));
  };

  // console.log(employees);
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-black shadow-lg rounded-2xl">
      {/* Department & Employee Selects */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <select
          className="w-full md:w-1/2 border p-2 rounded bg-white dark:bg-black dark:text-white"
          onChange={depertmentChanger}
        >
          <option className="dark:text-white" value="">
            Select Department
          </option>
          {depertment?.departments?.map((dep) => (
            <option
              className="dark:text-white"
              key={dep.departmentId}
              value={dep.departmentId}
            >
              {dep.departmentName}
            </option>
          ))}
        </select>

        <select
          className="w-full md:w-1/2 border p-2 rounded bg-white dark:bg-black dark:text-white"
          onChange={handleSelect}
        >
          <option className="dark:text-white" value="">
            Select Employee
          </option>
          {employees?.items?.map((emp) => (
            <option
              className="dark:text-white"
              key={emp.empId}
              value={emp.empId}
            >
              {emp.empName}
            </option>
          ))}
        </select>
      </div>

      {/* Button */}
      <div className="text-center mb-4">
        <button
          onClick={clickHandler}
          className="px-6 py-2 bg-gradient-to-r from-[#01DBE5]  to-[#02AEFA] text-white font-semibold rounded-lg hover:opacity-90 transition"
        >
          Get Data
        </button>
      </div>

      {/* Form Component */}
      <EditEmployeeForm />
    </div>
  );
};

export default EditEmployee;

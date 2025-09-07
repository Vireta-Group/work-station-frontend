// EditEmployee.jsx
import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import EditEmployeeForm from "./EditEmployeeForm";
import Label from "../../../components/form/Label";
import { BsGenderAmbiguous } from "react-icons/bs";
import Select from "../../../components/form/Select";

const employees = [
  {
    id: 1,
    name: "Abdul Karim",
    father: "Rahim",
    mother: "Ayesha",
    nid: "123456789",
    dob: "1995-05-10",
    local: "Dhaka",
    permanent: "Chittagong",
    education: "BSc",
    gender: "Male",
    blood: "A+",
  },
  {
    id: 2,
    name: "Hasan Ali",
    father: "Salam",
    mother: "Rokeya",
    nid: "987654321",
    dob: "1992-02-15",
    local: "Sylhet",
    permanent: "Barishal",
    education: "HSC",
    gender: "Male",
    blood: "B+",
  },
];

const EditEmployee = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Dropdown select
  const handleSelect = (id) => {
    const emp = employees.find((e) => e.id === parseInt(id));
    setSelectedEmployee(emp);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-black  shadow-lg rounded-2xl">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
        <FaUserEdit className="text-blue-600 dark:text dark:text-white" /> Edit
        Employee Info
      </h2>

      {/* Employee Dropdown */}

      <select
        className="w-full border p-2 rounded mb-4 bg-white dark:bg-black  dark:text-white"
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option className="dark:text-white" value="">
          Select Employee
        </option>
        {employees.map((emp) => (
          <option className="dark:text-white" key={emp.id} value={emp.id}>
            {emp.name}
          </option>
        ))}
      </select>

      {/* Form Component */}
      {selectedEmployee && <EditEmployeeForm employee={selectedEmployee} />}
    </div>
    //==========================================================
    // <div>
    //   <Label>Gender</Label>
    //   <div className="relative">
    //     <select
    //       className="w-full rounded-md border border-gray-300 bg-white pl-[62px] py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
    //       onChange={(e) => handleSelect(e.target.value)}
    //     >
    //       <option value="">Select Employee</option>
    //       {employees.map((emp) => (
    //         <option key={emp.id} value={emp.id}>
    //           {emp.name}
    //         </option>
    //       ))}
    //     </select>
    //     <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
    //       {selectedEmployee && <EditEmployeeForm employee={selectedEmployee} />}
    //     </span>
    //   </div>
    // </div>
  );
};

export default EditEmployee;

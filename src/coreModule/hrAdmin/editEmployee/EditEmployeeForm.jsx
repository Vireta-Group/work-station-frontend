// EditEmployeeForm.jsx
import React, { useState } from "react";
import ComponentCard from "../../../components/common/ComponentCard";
import Label from "../../../components/form/Label";
import {
  BsBook,
  BsBriefcase,
  BsBuilding,
  BsCalendar,
  BsCreditCard2Front,
  BsCurrencyDollar,
  BsDroplet,
  BsGenderAmbiguous,
  BsHouse,
  BsHouseDoor,
  BsLaptop,
  BsPerson,
} from "react-icons/bs";
import Input from "../../../components/form/input/InputField";

const EditEmployeeForm = ({ employee }) => {
  const [formData, setFormData] = useState(employee);

  // Input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update button
  const handleUpdate = () => {
    console.log("Updated Data:", formData);
    alert("✅ Employee info updated successfully!");
  };

  return (
    // <div className="grid grid-cols-2 gap-4 ">
    //   <input
    //     type="text"
    //     name="name"
    //     value={formData.name || ""}
    //     onChange={handleChange}
    //     placeholder="Full Name"
    //     className="border p-2 rounded dark:text-white"
    //   />
    //   <input
    //     type="text"
    //     name="father"
    //     value={formData.father || ""}
    //     onChange={handleChange}
    //     placeholder="Father Name"
    //     className="border p-2 rounded"
    //   />
    //   <input
    //     type="text"
    //     name="mother"
    //     value={formData.mother || ""}
    //     onChange={handleChange}
    //     placeholder="Mother Name"
    //     className="border p-2 rounded"
    //   />
    //   <input
    //     type="text"
    //     name="nid"
    //     value={formData.nid || ""}
    //     onChange={handleChange}
    //     placeholder="NID"
    //     className="border p-2 rounded"
    //   />
    //   <input
    //     type="date"
    //     name="dob"
    //     value={formData.dob || ""}
    //     onChange={handleChange}
    //     className="border p-2 rounded"
    //   />
    //   <input
    //     type="text"
    //     name="local"
    //     value={formData.local || ""}
    //     onChange={handleChange}
    //     placeholder="Local Address"
    //     className="border p-2 rounded"
    //   />
    //   <input
    //     type="text"
    //     name="permanent"
    //     value={formData.permanent || ""}
    //     onChange={handleChange}
    //     placeholder="Permanent Address"
    //     className="border p-2 rounded"
    //   />
    //   <input
    //     type="text"
    //     name="education"
    //     value={formData.education || ""}
    //     onChange={handleChange}
    //     placeholder="Last Education"
    //     className="border p-2 rounded"
    //   />

    //   {/* Gender Select */}
    //   <select
    //     name="gender"
    //     value={formData.gender || ""}
    //     onChange={handleChange}
    //     className="border p-2 rounded"
    //   >
    //     <option value="">Select Gender</option>
    //     <option value="Male">Male</option>
    //     <option value="Female">Female</option>
    //     <option value="Other">Other</option>
    //   </select>

    //   {/* Blood Group */}
    //   <select
    //     name="blood"
    //     value={formData.blood || ""}
    //     onChange={handleChange}
    //     className="border p-2 rounded"
    //   >
    //     <option value="">Select Blood Group</option>
    //     <option value="A+">A+</option>
    //     <option value="A-">A-</option>
    //     <option value="B+">B+</option>
    //     <option value="B-">B-</option>
    //     <option value="O+">O+</option>
    //     <option value="O-">O-</option>
    //   </select>

    //   {/* Update Button */}
    //   <button
    //     onClick={handleUpdate}
    //     className="col-span-2 mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
    //   >
    //     Update Info
    //   </button>
    // </div>
    <ComponentCard title="Input Group">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name Field */}
        <div>
          <Label>Full Name</Label>
          <div className="relative">
            <Input
              value={formData.name || ""}
              onChange={handleChange}
              placeholder="John Doe"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsPerson className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Father Name Field */}
        <div>
          <Label>Father Name</Label>
          <div className="relative">
            <Input
              name="father"
              value={formData.father || ""}
              placeholder="Father's Name"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsPerson className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Mother Name Field */}
        <div>
          <Label>Mother Name</Label>
          <div className="relative">
            <Input
              name="father"
              value={formData.father || ""}
              placeholder="Mother's Name"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsPerson className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* NID Field */}
        <div>
          <Label>NID</Label>
          <div className="relative">
            <Input
              name="father"
              value={formData.nid || ""}
              placeholder="1234567890"
              type="number"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsCreditCard2Front className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Date of Birth Field */}
        <div>
          <Label>Date of Birth</Label>
          <div className="relative">
            <Input
              name="father"
              value={formData.dob || ""}
              type="date"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsCalendar className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Local Address Field */}
        <div>
          <Label>Local Address</Label>
          <div className="relative">
            <Input
              name="father"
              value={formData.local || ""}
              placeholder="Local Address"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsHouse className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Permanent Address Field */}
        <div>
          <Label>Permanent Address</Label>
          <div className="relative">
            <Input
              name="father"
              value={formData.permanent || ""}
              placeholder="Permanent Address"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsHouseDoor className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Last Education Field */}
        <div>
          <Label>Last Education</Label>
          <div className="relative">
            <Input
              name="father"
              value={formData.education || ""}
              placeholder="Bachelor / Master"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsBook className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Salary Field */}
        {/* <div>
          <Label>Salary</Label>
          <div className="relative">
            <Input placeholder="50000" type="number" className="pl-[62px]" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsCurrencyDollar className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div> */}

        {/* Department Field */}
        {/* <div>
          <Label>Department</Label>
          <div className="relative">
            <Input
              placeholder="HR / IT / Finance"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsBuilding className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div> */}

        {/* Designation Field */}
        {/* <div>
          <Label>Designation</Label>
          <div className="relative">
            <Input
              placeholder="Manager / Developer"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsBriefcase className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div> */}

        {/* Gender Field */}
        <div>
          <Label>Gender</Label>
          <div className="relative">
            <select
              name="father"
              value={formData.gender || ""}
              className="w-full rounded-md border border-gray-300 bg-white pl-[62px] py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsGenderAmbiguous className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Blood Group Field */}
        <div>
          <Label>Blood Group</Label>
          <div className="relative">
            <select
              name="father"
              value={formData.blood || ""}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 bg-white pl-[62px] py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsDroplet className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Join Date Field */}
        {/* <div>
          <Label>Join Date</Label>
          <div className="relative">
            <Input type="date" className="pl-[62px]" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsCalendar className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div> */}

        {/* Working Type Dropdown */}
        {/* <div>
          <Label>Working Type</Label>
          <div className="relative">
            <select className="w-full rounded-md border border-gray-300 bg-white pl-[62px] py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
              <option value="">Select Type</option>
              <option value="remote">Remote</option>
              <option value="physical">Physical</option>
            </select>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsLaptop className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div> */}

        {/* Send for Approval Button */}
      </div>
      <div className="pt-4">
        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
        >
          update
        </button>
      </div>
    </ComponentCard>
  );
};

export default EditEmployeeForm;

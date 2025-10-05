// import {
//   BsBook,
//   BsBriefcase,
//   BsBuilding,
//   BsCalendar,
//   BsCreditCard2Front,
//   BsCurrencyDollar,
//   BsDroplet,
//   BsEnvelope,
//   BsGenderAmbiguous,
//   BsHouse,
//   BsHouseDoor,
//   BsLaptop,
//   BsPerson,
// } from "react-icons/bs";
// import ComponentCard from "../../../components/common/ComponentCard";
// import Label from "../../../components/form/Label";
// import Input from "../../../components/form/input/InputField";
// import { z } from "zod";
// import { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { submitEmployee } from "../store/employeeSlice";

// const employeeSchema = z.object({
//   fullName: z.string().min(3, "Full Name must be at least 3 characters"),
//   fatherName: z.string().min(3, "Father Name is required"),
//   motherName: z.string().min(3, "Mother Name is required"),
//   nid: z.string().min(10, "NID must be at least 10 digits"),
//   dob: z.string().nonempty("Date of Birth is required"),
//   localAddress: z.string().min(5, "Local Address is required"),
//   permanentAddress: z.string().min(5, "Permanent Address is required"),
//   lastEducation: z.string().nonempty("Education is required"),
//   salary: z.string().nonempty("Salary is required"),
//   department: z.string().nonempty("Department is required"),
//   designation: z.string().nonempty("Designation is required"),
//   gender: z.enum(["male", "female", "other"], {
//     errorMap: () => ({ message: "Select a gender" }),
//   }),
//   bloodGroup: z.enum(["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"], {
//     errorMap: () => ({ message: "Select a blood group" }),
//   }),
//   joinDate: z.string().nonempty("Join Date is required"),
//   workingType: z.enum(["remote", "physical"], {
//     errorMap: () => ({ message: "Select working type" }),
//   }),
// });

// export default function InputGroup() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     fatherName: "",
//     motherName: "",
//     nid: "",
//     dob: "",
//     localAddress: "",
//     permanentAddress: "",
//     lastEducation: "",
//     salary: "",
//     department: "",
//     designation: "",
//     gender: "",
//     bloodGroup: "",
//     joinDate: "",
//     workingType: "",
//   });
//   const [validationErrors, setValidationErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     //validation with zod
//     const result = employeeSchema.safeParse(formData);
//     console.log("result", result);

//     // if (!result.success) {
//     //   const errors = {};
//     //   result.error.errors.forEach((err) => {
//     //     errors[err.path[0]] = err.message;
//     //   });
//     //   setValidationErrors(errors);
//     // setLoading(false);
//     //   return;
//     // }

//     // setValidationErrors({});
//     // dispatch(submitEmployee(formData))
//     console.log("formdata", formData);
//   };

//   return (
//     <ComponentCard title="Input Group">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <form onSubmit={handleSubmit}>
//           {/* Full Name Field */}
//           <div>
//             <Label>Full Name</Label>
//             {validationErrors.fullName && (
//               <p className="text-red-500 text-sm">
//                 {validationErrors.fullName}
//               </p>
//             )}
//             <div className="relative">
//               <Input
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 placeholder="John Doe"
//                 type="text"
//                 className="pl-[62px]"
//               />
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
//                 <BsPerson className="!w-6 !h-6 text-gray-500" />
//               </span>
//             </div>
//           </div>

//           {/* Father Name Field */}
//           <div>
//             <Label>Father Name</Label>
//             <div className="relative">
//               <Input
//                 name="fatherName"
//                 value={formData.fatherName}
//                 onChange={handleChange}
//                 placeholder="Father's Name"
//                 type="text"
//                 className="pl-[62px]"
//               />
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
//                 <BsPerson className="!w-6 !h-6 text-gray-500" />
//               </span>
//             </div>
//           </div>

//           {/* Mother Name Field */}
//           <div>
//             <Label>Mother Name</Label>
//             <div className="relative">
//               <Input
//                 name="motherName"
//                 value={formData.motherName}
//                 onChange={handleChange}
//                 placeholder="Mother's Name"
//                 type="text"
//                 className="pl-[62px]"
//               />
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
//                 <BsPerson className="!w-6 !h-6 text-gray-500" />
//               </span>
//             </div>
//           </div>

//           {/* NID Field */}
//           <div>
//             <Label>NID</Label>
//             <div className="relative">
//               <Input
//                 name="nid"
//                 value={formData.nid}
//                 onChange={handleChange}
//                 placeholder="1234567890"
//                 type="number"
//                 className="pl-[62px]"
//               />
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
//                 <BsCreditCard2Front className="!w-6 !h-6 text-gray-500" />
//               </span>
//             </div>
//           </div>

//           {/* Date of Birth Field */}
//           <div>
//             <Label>Date of Birth</Label>
//             <div className="relative">
//               <Input
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 type="date"
//                 className="pl-[62px]"
//               />
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
//                 <BsCalendar className="!w-6 !h-6 text-gray-500" />
//               </span>
//             </div>
//           </div>

//           {/* Local Address Field */}
//           <div>
//             <Label>Local Address</Label>
//             <div className="relative">
//               <Input
//                 name="localAddress"
//                 value={formData.localAddress}
//                 onChange={handleChange}
//                 placeholder="Local Address"
//                 type="text"
//                 className="pl-[62px]"
//               />
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
//                 <BsHouse className="!w-6 !h-6 text-gray-500" />
//               </span>
//             </div>
//           </div>

//           {/* Permanent Address Field */}
//           <div>
//             <Label>Permanent Address</Label>
//             <div className="relative">
//               <Input
//                 name="permanentAddress"
//                 value={formData.permanentAddress}
//                 onChange={handleChange}
//                 placeholder="Permanent Address"
//                 type="text"
//                 className="pl-[62px]"
//               />
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
//                 <BsHouseDoor className="!w-6 !h-6 text-gray-500" />
//               </span>
//             </div>
//           </div>

//           {/* Last Education Field */}
//           <div>
//             <Label>Last Education</Label>
//             <div className="relative">
//               <Input
//                 name="lastEducation"
//                 value={formData.lastEducation}
//                 onChange={handleChange}
//                 placeholder="Bachelor / Master"
//                 type="text"
//                 className="pl-[62px]"
//               />
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
//                 <BsBook className="!w-6 !h-6 text-gray-500" />
//               </span>
//             </div>
//           </div>

//           {/* Salary Field */}
//           <div>
//             <Label>Salary</Label>
//             <div className="relative">
//               <Input
//                 name="salary"
//                 value={formData.salary}
//                 onChange={handleChange}
//                 placeholder="50000"
//                 type="number"
//                 className="pl-[62px]"
//               />
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
//                 <BsCurrencyDollar className="!w-6 !h-6 text-gray-500" />
//               </span>
//             </div>
//           </div>

//           {/* Department Field */}
//           <div>
//             <Label>Department</Label>
//             <div className="relative">
//               <Input
//                 name="department"
//                 value={formData.department}
//                 onChange={handleChange}
//                 placeholder="HR / IT / Finance"
//                 type="text"
//                 className="pl-[62px]"
//               />
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
//                 <BsBuilding className="!w-6 !h-6 text-gray-500" />
//               </span>
//             </div>
//           </div>

//           {/* Designation Field */}
//           <div>
//             <Label>Designation</Label>
//             <div className="relative">
//               <Input
//                 name="designation"
//                 value={formData.designation}
//                 onChange={handleChange}
//                 placeholder="Manager / Developer"
//                 type="text"
//                 className="pl-[62px]"
//               />
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
//                 <BsBriefcase className="!w-6 !h-6 text-gray-500" />
//               </span>
//             </div>
//           </div>

//           {/* Gender Field */}
//           <div>
//             <Label>Gender</Label>
//             <div className="relative">
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 className="w-full rounded-md border border-gray-300 bg-white pl-[62px] py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
//               >
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
//                 <BsGenderAmbiguous className="!w-6 !h-6 text-gray-500" />
//               </span>
//             </div>
//           </div>

//           {/* Blood Group Field */}
//           <div>
//             <Label>Blood Group</Label>
//             <div className="relative">
//               <select
//                 name="bloodGroup"
//                 value={formData.bloodGroup}
//                 onChange={handleChange}
//                 className="w-full rounded-md border border-gray-300 bg-white pl-[62px] py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
//               >
//                 <option value="">Select Blood Group</option>
//                 <option value="A+">A+</option>
//                 <option value="A-">A-</option>
//                 <option value="B+">B+</option>
//                 <option value="B-">B-</option>
//                 <option value="O+">O+</option>
//                 <option value="O-">O-</option>
//                 <option value="AB+">AB+</option>
//                 <option value="AB-">AB-</option>
//               </select>
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
//                 <BsDroplet className="!w-6 !h-6 text-gray-500" />
//               </span>
//             </div>
//           </div>

//           {/* Join Date Field */}
//           <div>
//             <Label>Join Date</Label>
//             <div className="relative">
//               <Input
//                 name="joinDate"
//                 value={formData.joinDate}
//                 onChange={handleChange}
//                 type="date"
//                 className="pl-[62px]"
//               />
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
//                 <BsCalendar className="!w-6 !h-6 text-gray-500" />
//               </span>
//             </div>
//           </div>

//           {/* Working Type Dropdown */}
//           <div>
//             <Label>Working Type</Label>
//             <div className="relative">
//               <select
//                 name="workingType"
//                 value={formData.workingType}
//                 onChange={handleChange}
//                 className="w-full rounded-md border border-gray-300 bg-white pl-[62px] py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
//               >
//                 <option value="">Select Type</option>
//                 <option value="remote">Remote</option>
//                 <option value="physical">Physical</option>
//               </select>
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
//                 <BsLaptop className="!w-6 !h-6 text-gray-500" />
//               </span>
//             </div>
//           </div>

//           {/* Send for Approval Button */}
//           <div className="pt-4">
//             <button
//               type="submit"
//               className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
//             >
//               Send for Approval
//             </button>
//           </div>
//           {/* {success && <p className="text-green-600 mt-2">Submitted successfully!</p>} */}
//           {/* {error && <p className="text-red-600 mt-2">{error}</p>} */}
//         </form>
//       </div>
//     </ComponentCard>
//   );
// }

///=================================

import {
  BsBook,
  BsBriefcase,
  BsBuilding,
  BsCalendar,
  BsCreditCard2Front,
  BsCurrencyDollar,
  BsDroplet,
  BsEnvelope,
  BsGenderAmbiguous,
  BsHouse,
  BsHouseDoor,
  BsLaptop,
  BsPerson,
} from "react-icons/bs";
import ComponentCard from "../../../components/common/ComponentCard";
import Label from "../../../components/form/Label";
import Input from "../../../components/form/input/InputField";
import { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../../features/addEmployee/addEmployeeSlice";

export default function InputGroup() {
  const [formData, setFormData] = useState({
    name: "",
    father: "",
    mother: "",
    full_address: "",
    nid: "",
    mobile: "",
    email: "",
    pic: "",
    last_edu: "",
    bkash: "",
    dob: "",
    bank_account: "",
    bank_routing: "",
    bank_name: "",
    bank_branch: "",
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result || "";
        // result is "data:<mime>;base64,<base64>"
        const base64 = result.split(",")[1] ?? "";
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const changeHandler = async (e) => {
    const { name, type, files, value } = e.target;

    if (type === "file") {
      const file = files?.[0];
      if (!file) {
        setFormData((prevData) => ({ ...prevData, pic: "" }));
        return;
      }
      try {
        const base64 = await fileToBase64(file);
        // store raw base64 (no data: prefix) to match other code expectations
        setFormData((prevData) => ({ ...prevData, pic: base64 }));
      } catch (err) {
        console.error("Failed to read file:", err);
      }
      return;
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const clickHandler = () => {
    dispatch(addEmployee(formData));
  };

  return (
    <ComponentCard title="Input Group">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name Field */}
        <div>
          <Label>Full Name</Label>
          <div className="relative">
            <Input
              placeholder="John Doe"
              value={formData.name}
              name="name"
              onChange={changeHandler}
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
              placeholder="Father's Name"
              type="text"
              value={formData.father}
              name="father"
              onChange={changeHandler}
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
              placeholder="Mother's Name"
              type="text"
              className="pl-[62px]"
              value={formData.mother}
              name="mother"
              onChange={changeHandler}
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
              value={formData.nid}
              placeholder="1234567890"
              type="number"
              className="pl-[62px]"
              name="nid"
              onChange={changeHandler}
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
              type="date"
              className="pl-[62px]"
              value={formData.dob}
              name="dob"
              onChange={changeHandler}
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsCalendar className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Local Address Field */}
        <div>
          <Label>Full Address</Label>
          <div className="relative">
            <Input
              value={formData.full_address}
              name="full_address"
              onChange={changeHandler}
              placeholder="Local Address"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsHouse className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Last Education Field */}
        <div>
          <Label>Last Education</Label>
          <div className="relative">
            <Input
              value={formData.last_edu}
              name="last_edu"
              onChange={changeHandler}
              placeholder="Bachelor / Master"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsBook className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Phone Number Field */}
        <div>
          <Label>Phone Number</Label>
          <div className="relative">
            <Input
              placeholder="50000"
              type="number"
              className="pl-[62px]"
              value={formData.mobile}
              name="mobile"
              onChange={changeHandler}
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsCurrencyDollar className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Department Field */}
        <div>
          <Label>Email</Label>
          <div className="relative">
            <Input
              placeholder="HR / IT / Finance"
              type="text"
              className="pl-[62px]"
              value={formData.email}
              name="email"
              onChange={changeHandler}
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsBuilding className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Designation Field */}
        <div>
          <Label>Bkash Number</Label>
          <div className="relative">
            <Input
              placeholder="Manager / Developer"
              type="text"
              className="pl-[62px]"
              value={formData.bkash}
              name="bkash"
              onChange={changeHandler}
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsBriefcase className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Bank Account Number Field */}
        <div>
          <Label>Bank Account Number</Label>
          <div className="relative">
            <Input
              type="text"
              className="pl-[62px]"
              value={formData.bank_account}
              name="bank_account"
              onChange={changeHandler}
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsCalendar className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Bank Name Field */}
        <div>
          <Label>Bank Name</Label>
          <div className="relative">
            <Input
              type="text"
              className="pl-[62px]"
              value={formData.bank_name}
              name="bank_name"
              onChange={changeHandler}
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsCalendar className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Bank Name Field */}
        <div>
          <Label>Bank Route</Label>
          <div className="relative">
            <Input
              type="text"
              className="pl-[62px]"
              value={formData.bank_routing}
              name="bank_routing"
              onChange={changeHandler}
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsCalendar className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Bank Branch Field */}
        <div>
          <Label>Bank Branch</Label>
          <div className="relative">
            <Input
              type="text"
              className="pl-[62px]"
              value={formData.bank_branch}
              name="bank_branch"
              onChange={changeHandler}
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsCalendar className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Bank Branch Field */}
        <div>
          <Label>User Name</Label>
          <div className="relative">
            <Input
              type="text"
              className="pl-[62px]"
              value={formData.username}
              name="username"
              onChange={changeHandler}
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsCalendar className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* User Name Field */}
        <div>
          <Label>Password</Label>
          <div className="relative">
            <Input
              type="text"
              className="pl-[62px]"
              value={formData.password}
              name="password"
              onChange={changeHandler}
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsCalendar className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>
        <div>
          <Label>User Image</Label>
          <div className="relative">
            <Input
              type="file"
              className="pl-[62px]"
              accept="image/*"
              name="pic"
              onChange={changeHandler}
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsCalendar className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Send for Approval Button */}
        <div className="pt-4">
          <button
            onClick={clickHandler}
            className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
          >
            Send for Approval
          </button>
        </div>
      </div>
    </ComponentCard>
  );
}

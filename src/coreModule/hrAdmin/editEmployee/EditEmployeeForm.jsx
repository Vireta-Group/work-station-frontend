// EditEmployeeForm.jsx
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  editProfile,
  selectEmpByIdStatus,
  selectEmpByIdError,
} from "../../../features/editProfile/editProfileSlice";
import { z } from "zod";
import LoadingSpinner from "../../../components/ui/loading/LoadingSpinner";
import PopupMessage from "../../../components/ui/PopupMessage/PopupMessage";
// ✅ Zod Validation Schema
const employeeSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  father: z.string().min(2, { message: "Father name is required" }),
  mother: z.string().min(2, { message: "Mother name is required" }),
  nid: z.string().min(5, { message: "NID must be valid" }),
  dob: z.string().min(1, { message: "Date of birth required" }),
  full_address: z.string().min(5, { message: "Address is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  // last_edu: z.string().min(2, { message: "Last education required" }),
  mobile: z.string().min(10, { message: "Mobile number required" }),
  bkash: z.string().min(10, { message: "Bkash number required" }),
  department: z.string().min(2, { message: "Department is required" }),
  designation: z.string().min(2, { message: "Designation is required" }),
  role: z.string().min(2, { message: "Role is required" }),
  username: z.string().min(2, { message: "Username required" }),
});

const EditEmployeeForm = () => {
  const employee = useSelector((data) => data.empById).data;
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    father: "",
    mother: "",
    nid: "",
    dob: "",
    full_address: "",
    email: "",
    last_edu: "",
    mobile: "",
    bkash: "",
    department: "",
    designation: "",
    role: "",
    username: "",
    bank_routing: "",
    bank_name: "",
    bank_branch: "",
    bank_account: "",
    pic: "",
  });

  const status = useSelector(selectEmpByIdStatus);
  const error = useSelector(selectEmpByIdError);

  const [validationErrors, setValidationErrors] = useState({});
  const [popup, setPopup] = useState({ open: false, type: "", message: "" });

  useEffect(() => {
    if (employee) {
      setFormData((prev) => ({ ...prev, ...employee }));
    }
  }, [setFormData, employee]);

  // Input change
  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    if (type === "file") {
      const file = files?.[0];
      setFormData((prev) => ({ ...prev, [name]: file || "" }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value ?? "" }));
  };

  // console.log(employee);

  // Update button
  const handleUpdate = () => {
    const result = employeeSchema.safeParse(formData);
    if (!result.success) {
      const formattedErrors = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) formattedErrors[err.path[0]] = err.message;
      });
      setValidationErrors(formattedErrors);
      return;
    }
    setValidationErrors({});
    dispatch(editProfile(formData));
  };

  // ✅ Popup + Reset logic
  useEffect(() => {
    if (status === "succeeded") {
      setPopup({
        open: true,
        type: "success",
        message: "Employee profile updated successfully!",
      });
    }
    if (status === "failed") {
      setPopup({
        open: true,
        type: "error",
        message: error?.message || "Failed to update employee!",
      });
    }
  }, [status, error]);

  return (
    <>
      <ComponentCard title="Input Group">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name Field */}
          <div>
            <Label>Full Name</Label>
            <div className="relative">
              <Input
                value={formData?.name || ""}
                onChange={handleChange}
                name="name"
                placeholder="John Doe"
                type="text"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsPerson className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
            {validationErrors["name"] && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors["name"]}
              </p>
            )}
          </div>

          {/* Father Name Field */}
          <div>
            <Label>Father Name</Label>
            <div className="relative">
              <Input
                name="father"
                value={formData?.father || ""}
                placeholder="Father's Name"
                onChange={handleChange}
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
                name="mother"
                value={formData?.mother || ""}
                placeholder="Mother's Name"
                type="text"
                onChange={handleChange}
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
                name="nid"
                value={formData?.nid || ""}
                placeholder="1234567890"
                onChange={handleChange}
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
                name="dob"
                value={formData?.dob || ""}
                type="date"
                onChange={handleChange}
                className="pl-[62px]"
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
                name="full_address"
                value={formData?.full_address || ""}
                placeholder="Local Address"
                type="text"
                onChange={handleChange}
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsHouse className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
          </div>

          {/* e mail */}
          <div>
            <Label>Email</Label>
            <div className="relative">
              <Input
                name="email"
                value={formData?.email || ""}
                onChange={handleChange}
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
                name="last_edu"
                value={formData?.last_edu || ""}
                onChange={handleChange}
                placeholder="Bachelor / Master"
                type="text"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsBook className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
          </div>

          {/* mobile number */}
          <div>
            <Label>Mobile Number</Label>
            <div className="relative">
              <Input
                name="mobile"
                onChange={handleChange}
                value={formData?.mobile}
                placeholder="50000"
                type="number"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsCurrencyDollar className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
          </div>

          {/* bkash number */}
          <div>
            <Label>Bkash Number</Label>
            <div className="relative">
              <Input
                name="bkash"
                onChange={handleChange}
                value={formData?.bkash}
                placeholder="50000"
                type="number"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsCurrencyDollar className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
          </div>

          {/* Department Field */}
          <div>
            <Label>Department</Label>
            <div className="relative">
              <Input
                name="department"
                value={formData?.department}
                onChange={handleChange}
                placeholder="HR / IT / Finance"
                type="text"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsBuilding className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
          </div>

          {/* Designation Field */}
          <div>
            <Label>Designation</Label>
            <div className="relative">
              <Input
                name="designation"
                onChange={handleChange}
                value={formData?.designation}
                placeholder="Manager / Developer"
                type="text"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsBriefcase className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
          </div>

          {/* role Field */}
          <div>
            <Label>Role</Label>
            <div className="relative">
              <Input
                name="role"
                onChange={handleChange}
                value={formData?.role}
                placeholder="Manager / Developer"
                type="text"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsBriefcase className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
          </div>

          {/* user name Field */}
          <div>
            <Label>User Name</Label>
            <div className="relative">
              <Input
                name="username"
                onChange={handleChange}
                value={formData?.username}
                placeholder="Manager / Developer"
                type="text"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsBriefcase className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
          </div>

          {/* bank_routing Field */}
          <div>
            <Label>Bank Routing Name</Label>
            <div className="relative">
              <Input
                name="bank_routing"
                value={formData?.bank_routing}
                onChange={handleChange}
                placeholder="Manager / Developer"
                type="text"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsBriefcase className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
          </div>

          {/* bank_name Field */}
          <div>
            <Label>Bank Name</Label>
            <div className="relative">
              <Input
                name="bank_name"
                value={formData?.bank_name}
                onChange={handleChange}
                placeholder="Manager / Developer"
                type="text"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsBriefcase className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
          </div>

          {/* bank_branch Field */}
          <div>
            <Label>Bank Branch</Label>
            <div className="relative">
              <Input
                name="bank_branch"
                value={formData?.bank_branch}
                onChange={handleChange}
                placeholder="Manager / Developer"
                type="text"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsBriefcase className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
          </div>

          {/* bank_account Field */}
          <div>
            <Label>Accoutn Number</Label>
            <div className="relative">
              <Input
                name="bank_account"
                value={formData?.bank_account}
                onChange={handleChange}
                placeholder="Manager / Developer"
                type="text"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsBriefcase className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <button
            onClick={handleUpdate}
            className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
          >
            update
          </button>
          {error && (
            <p className="text-red-500 text-sm mt-3">
              {error.message || "Something went wrong!"}
            </p>
          )}
        </div>
        <LoadingSpinner open={status === "loading"} />
        {/*  Popup */}
      </ComponentCard>
      <PopupMessage
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={() => setPopup({ open: false, type: "", message: "" })}
      />
    </>
  );
};

export default EditEmployeeForm;

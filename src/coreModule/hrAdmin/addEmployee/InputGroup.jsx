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
import { MdEmail, MdAccountBalance } from "react-icons/md";
import {
  FaUserCircle,
  FaGraduationCap,
  FaMobileAlt,
  FaCalendarAlt,
  FaRegCreditCard,
  FaHashtag,
  FaUniversity,
  FaUser,
  FaLock,
} from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import ComponentCard from "../../../components/common/ComponentCard";
import Label from "../../../components/form/Label";
import Input from "../../../components/form/input/InputField";
import { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  selectAddEmployeeStatus,
  selectAddEmployeeError,
} from "../../../features/addEmployee/addEmployeeSlice";
import { z } from "zod";
import LoadingSpinner from "../../../components/ui/loading/LoadingSpinner";
import PopupMessage from "../../../components/ui/PopupMessage/PopupMessage";

//  Step 1: Zod schema for employee
const employeeSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  father: z.string().min(1, "Father name is required"),
  mother: z.string().min(1, "Mother name is required"),
  full_address: z.string().min(1, "Address is required"),
  nid: z.string().min(1, "NID is required"),
  mobile: z.string().min(1, "Mobile is required"),
  email: z.string().email("Invalid email address"),
  pic: z.string().optional(),
  last_edu: z.string().min(1, "Education is required"),
  bkash: z.string().optional(),
  dob: z.string().min(1, "Date of birth is required"),
  bank_account: z.string().optional(),
  bank_routing: z.string().optional(),
  bank_name: z.string().optional(),
  bank_branch: z.string().optional(),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

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
  const status = useSelector(selectAddEmployeeStatus);
  const error = useSelector(selectAddEmployeeError);

  const [validationErrors, setValidationErrors] = useState({});
  const [popup, setPopup] = useState({ open: false, type: "", message: "" });

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
    const result = employeeSchema.safeParse(formData);

    if (!result.success) {
      const errors = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) errors[err.path[0]] = err.message;
      });
      setValidationErrors(errors);
      return;
    }

    dispatch(addEmployee(formData));
  };

  // Popup logic
  useEffect(() => {
    if (status === "succeeded") {
      setPopup({
        open: true,
        type: "success",
        message: "Employee added successfully!",
      });
      setFormData({
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
    }
    if (status === "failed") {
      setPopup({
        open: true,
        type: "error",
        message: error?.message || "Failed to add employee!",
      });
    }
  }, [status, error]);

  // Auto-close popup
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
            {validationErrors.name && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.name}
              </p>
            )}
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
            {validationErrors.father && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.father}
              </p>
            )}
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
            {validationErrors.mother && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.mother}
              </p>
            )}
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
            {validationErrors.nid && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.nid}
              </p>
            )}
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
                <FaCalendarAlt className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
            {validationErrors.dob && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.dob}
              </p>
            )}
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
            {validationErrors.full_address && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.full_address}
              </p>
            )}
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
                <FaGraduationCap className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
            {validationErrors.last_edu && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.last_edu}
              </p>
            )}
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
                <FaPhoneAlt className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
            {validationErrors.mobile && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.mobile}
              </p>
            )}
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
                <MdEmail className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
            {validationErrors.email && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.email}
              </p>
            )}
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
                <FaMobileAlt className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
            {validationErrors.bkash && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.bkash}
              </p>
            )}
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
                <FaRegCreditCard className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
            {validationErrors.bank_account && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.bank_account}
              </p>
            )}
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
                <FaUniversity className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
            {validationErrors.bank_name && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.bank_name}
              </p>
            )}
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
                <FaHashtag className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
            {validationErrors.bank_routing && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.bank_routing}
              </p>
            )}
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
                <MdAccountBalance className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
            {validationErrors.bank_branch && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.bank_branch}
              </p>
            )}
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
                <FaUser className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
            {validationErrors.username && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.username}
              </p>
            )}
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
                <FaLock className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
            {validationErrors.password && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.password}
              </p>
            )}
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
                <FaUserCircle className="!w-6 !h-6 text-gray-500" />
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

      {/* Loading Spinner */}
      <LoadingSpinner open={status === "loading"} />

      {/* Popup */}
      <PopupMessage
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={() => setPopup({ open: false, type: "", message: "" })}
      />
    </>
  );
}

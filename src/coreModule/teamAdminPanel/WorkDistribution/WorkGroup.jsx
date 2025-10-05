import {
  BsCalendar2Event,
  BsCardText,
  BsClipboardCheck,
  BsPersonAdd,
} from "react-icons/bs";
import ComponentCard from "../../../components/common/ComponentCard";
import Label from "../../../components/form/Label";
import Input from "../../../components/form/input/InputField";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMembersByLeader } from "../../../features/membersByLeader/membersByLeaderSlice";
import { workDistribution } from "../../../features/workDistribution/workDistributionSlice";
import { z } from "zod";
import LoadingSpinner from "../../../components/ui/loading/LoadingSpinner";
const workSchema = z.object({
  work_title: z.string().min(1, "Task title must be at least 3 characters"),
  work_desc: z
    .string()
    .min(1, "Task description must be at least 10 characters"),
  work_expire_date: z.string().nonempty("Expire date is required"),
  work_date: z.string().nonempty(),
  // work_emp_id: z.union([z.string().nonempty("Member is required"), z.number()]),
});

export default function WorkGroup() {
  const members = useSelector((state) => state.membersByLeader.items);
  const { status } = useSelector((state) => state.workDistribution);

  const dispatch = useDispatch();
  const today = new Date().toISOString().split("T")[0];

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    work_title: "",
    work_desc: "",
    work_expire_date: "",
    work_date: today,
    work_emp_id: "",
  });

  // ✅ success/error message state
  const [message, setMessage] = useState({ type: "", text: "" });

  function handleSubmit(e) {
    e.preventDefault();
    //  Validate with Zod
    const result = workSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const formatted = {};
      Object.keys(fieldErrors).forEach((k) => {
        if (fieldErrors[k]?.length) formatted[k] = fieldErrors[k][0];
      });
      setErrors(formatted);
      return;
    }

    dispatch(workDistribution(formData));
  }

  const handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    if (name === "work_emp_id") value = value === "" ? "" : Number(value);

    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    const result = workSchema.safeParse(updatedForm);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const formatted = {};
      Object.keys(fieldErrors).forEach((k) => {
        if (fieldErrors[k]?.length) formatted[k] = fieldErrors[k][0];
      });
      setErrors(formatted);
    } else {
      setErrors({});
    }
  };

  useEffect(() => {
    if (members.length <= 0) {
      dispatch(fetchMembersByLeader());
    }
    if (members.length > 0 && !formData.work_emp_id) {
      setFormData((prev) => ({ ...prev, work_emp_id: members[0].empId }));
    }
  }, [members, dispatch, formData.work_emp_id]);

  // ✅ message handle without resetStatus
  useEffect(() => {
    if (status === "succeeded") {
      setMessage({ type: "success", text: "Task assigned successfully!" });
      setFormData({
        work_title: "",
        work_desc: "",
        work_expire_date: "",
        work_date: today,
        work_emp_id: members.length ? members[0].empId : "",
      });

      // Auto hide message after 3s
      const timer = setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      return () => clearTimeout(timer);
    } else if (status === "failed") {
      setMessage({ type: "error", text: "Something went wrong!" });
      const timer = setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [status, members, today]);

  return (
    <>
      <ComponentCard title="Input Group">
        <div className="grid grid-cols-1  gap-6">
          {/* Success/Error Modal */}
          {message.text && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div
                className={`max-w-md w-full  rounded-xl shadow-lg p-8 flex flex-col items-center animate-scale-up  bg-white border-gray-200 dark:border-gray-800 dark:bg-gray-900`}
              >
                {/* ✅ Icon */}
                {message.type === "success" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-500 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-red-500 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}

                {/* ✅ Message Text */}
                <p className="text-center text-lg font-semibold  border-gray-300 bg-white pl-[62px] pr-3 py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
                  {message.text}
                </p>
              </div>
            </div>
          )}
          {/* Task Title */}
          <div>
            <Label>Task Title</Label>
            <div className="relative">
              <Input
                placeholder="Enter Task Title"
                onChange={handleChange}
                name="work_title"
                value={formData.work_title}
                type="text"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsClipboardCheck className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
            {errors.work_title && (
              <p className="text-red-500 text-sm">{errors.work_title}</p>
            )}
          </div>

          {/* Task Description */}
          <div>
            <Label>Task Description</Label>
            <div className="relative">
              <textarea
                placeholder="Enter Task Description"
                onChange={handleChange}
                name="work_desc"
                value={formData.work_desc}
                type="text"
                rows={3}
                className="w-full rounded-md border border-gray-300 bg-white pl-[62px] pr-3 py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
              />
              <span className="absolute left-0 top-4 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsCardText className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
            {errors.work_desc && (
              <p className="text-red-500 text-sm">{errors.work_desc}</p>
            )}
          </div>

          {/* Expire Date */}
          <div>
            <Label>Expire Date</Label>
            <div className="relative">
              <Input
                type="date"
                className="pl-[62px]"
                onChange={handleChange}
                name="work_expire_date"
                value={formData.work_expire_date}
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsCalendar2Event className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
            {errors.work_expire_date && (
              <p className="text-red-500 text-sm">{errors.work_expire_date}</p>
            )}
          </div>

          {/* User Name Dropdown */}
          <div>
            <Label>User Name</Label>
            <div className="relative">
              <select
                onChange={handleChange}
                name="work_emp_id"
                value={formData.work_emp_id}
                className="w-full rounded-md border border-gray-300 bg-white pl-[62px] py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
              >
                <option value="">
                  {members.length ? "Select member" : "No members available"}
                </option>
                {members.map((member, index) => (
                  <option key={`${member.empId}-${index}`} value={member.empId}>
                    {member.empName}
                  </option>
                ))}
              </select>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <BsPersonAdd className="!w-6 !h-6 text-gray-500" />
              </span>
            </div>
            {errors.work_emp_id && (
              <p className="text-red-500 text-sm">{errors.work_emp_id}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex items-center justify-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-1/3 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </div>
      </ComponentCard>
      <LoadingSpinner open={status === "loading"} />
    </>
  );
}

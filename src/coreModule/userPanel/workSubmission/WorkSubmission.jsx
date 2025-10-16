import { useEffect, useState } from "react";
import ComponentCard from "../../../components/common/ComponentCard";
import Label from "../../../components/form/Label";
import TextArea from "../../../components/form/input/TextArea";
import Select from "../../../components/form/Select";
import Input from "../../../components/form/input/InputField";
import { workSubmision } from "../../../features/workSubmition/workSubmitionSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyWork } from "../../../features/myWork/myWorkSlice";

export default function WorkSubmission() {
  const [state, setState] = useState({
    title: "",
    description: "",
    status: "",
    commitMessage: "",
    commitId: "",
    work_id: "",
  });
  const tasks = useSelector((state) => state.myWork);

  const myTasks = tasks?.items?.map((data) => ({
    value: data.work_id, // use primitive id as value
    label: data.work_title, // label for display
    raw: data, // original object if you need more fields
    key: data.work_id,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (tasks.status === "idle") {
      dispatch(fetchMyWork());
    }
  }, [tasks, dispatch]);

  const statusOptions = [
    { value: "Continuous", label: "Continuous" },
    { value: "Complete", label: "Complete" },
    { value: "Start", label: "Start" },
  ];

  //   console.log(state);

  function changeHandler(e) {
    const { name, value } = e.target;

    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(workSubmision(state));
  };

  function handleTaskSelectChange(e) {
    const raw = e.target.value;
    const work_id = raw === "" ? "" : Number(raw);
    const selectedOption = e.target.selectedOptions?.[0];
    const title = selectedOption?.dataset?.title ?? "";
    setState((prev) => ({
      ...prev,
      work_id,
      title,
    }));
  }

  return (
    <ComponentCard title="Work Submission">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Task Title */}
        <div>
          <Label>Available Task</Label>
          <select
            name="work_id"
            value={state.work_id ?? ""}
            onChange={handleTaskSelectChange}
            className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
          >
            <option value="" disabled>
              {myTasks?.length ? "Select task" : "No tasks available"}
            </option>
            {myTasks?.map((option) => (
              <option
                key={option.value}
                value={option.value}
                data-title={option.label}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {/* <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              optional icon
            </span> */}

        {/* task title  */}
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Enter commit id"
            value={state.title}
            onChange={changeHandler}
            name="title"
          />
        </div>

        {/* Task Description */}
        <div>
          <Label htmlFor="taskDescription">Task Description</Label>
          <TextArea
            id="taskDescription"
            rows={3}
            placeholder="Enter task description"
            value={state.description}
            name="description"
            onChange={changeHandler}
          />
        </div>

        {/* Status Dropdown */}
        <div>
          <Label>Status</Label>
          <Select
            options={statusOptions}
            placeholder="Select status"
            name="status"
            value={state.status}
            onChange={changeHandler}
            className="dark:bg-dark-900"
          />
        </div>

        {/* Commit ID */}
        <div>
          <Label htmlFor="commitId">GitHub Commit ID</Label>
          <Input
            id="commitId"
            type="text"
            placeholder="Enter commit id"
            value={state.commitId}
            onChange={changeHandler}
            name="commitId"
          />
        </div>

        {/* GitHub Commit Message */}
        <div>
          <Label htmlFor="commitMessage">GitHub Commit Message</Label>
          <Input
            id="commitMessage"
            type="text"
            placeholder="Enter commit message"
            value={state.commitMessage}
            onChange={changeHandler}
            name="commitMessage"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition"
          >
            submit
          </button>
        </div>
      </form>
    </ComponentCard>
  );
}

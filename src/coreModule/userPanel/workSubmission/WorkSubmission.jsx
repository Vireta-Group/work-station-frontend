import { useState } from "react";
import ComponentCard from "../../../components/common/ComponentCard";
import Label from "../../../components/form/Label";
import TextArea from "../../../components/form/input/TextArea";
import Select from "../../../components/form/Select";
import Input from "../../../components/form/input/InputField";


export default function WorkSubmission() {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [status, setStatus] = useState("");
    const [commitMessage, setCommitMessage] = useState("");

    const statusOptions = [
        { value: "continuous", label: "Continuous" },
        { value: "complete", label: "Complete" },
        { value: "start", label: "Start" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        // const submissionData = {
        //     taskTitle,
        //     taskDescription,
        //     status,
        //     commitMessage,
        // };

        // console.log("Work Submission:", submissionData);

        // Reset fields (optional)
        setTaskTitle("");
        setTaskDescription("");
        setStatus("");
        setCommitMessage("");
    };

    return (
        <ComponentCard title="Work Submission">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Task Title */}
                <div>
                    <Label htmlFor="taskTitle">Task Title</Label>
                    <Input
                        id="taskTitle"
                        type="text"
                        placeholder="Enter task title"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                    />
                </div>

                {/* Task Description */}
                <div>
                    <Label htmlFor="taskDescription">Task Description</Label>
                    <TextArea
                        id="taskDescription"
                        rows={5}
                        placeholder="Enter task description"
                        value={taskDescription}
                        onChange={(val) => setTaskDescription(val)}
                    />
                </div>

                {/* Status Dropdown */}
                <div>
                    <Label>Status</Label>
                    <Select
                        options={statusOptions}
                        placeholder="Select status"
                        onChange={(val) => setStatus(val)}
                        className="dark:bg-dark-900"
                        defaultValue={status}
                    />
                </div>

                {/* GitHub Commit Message */}
                <div>
                    <Label htmlFor="commitMessage">GitHub Commit Message</Label>
                    <Input
                        id="commitMessage"
                        type="text"
                        placeholder="Enter commit message"
                        value={commitMessage}
                        onChange={(e) => setCommitMessage(e.target.value)}
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </ComponentCard>
    );
}

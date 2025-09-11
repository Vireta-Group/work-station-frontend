import { useState } from "react";
import axios from "axios";
import ComponentCard from "../../../components/common/ComponentCard";
import Label from "../../../components/form/Label";
import TextArea from "../../../components/form/input/TextArea";
import Select from "../../../components/form/Select";
import Input from "../../../components/form/input/InputField";
import { workSubmision } from "../../../features/workSubmition/workSubmitionSlice";
import { useDispatch, useSelector } from "react-redux";

export default function WorkSubmission() {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [status, setStatus] = useState("");
    const [commitMessage, setCommitMessage] = useState("");
    const [commitId, setCommitId] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    const statusOptions = [
        { value: "Continuous", label: "Continuous" },
        { value: "Complete", label: "Complete" },
        { value: "Start", label: "Start" },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        // const data = dispatch(workSubmision());
        // data.then((data1) => console.log(data1));


        // const payload = {
        //     title: taskTitle,
        //     description: taskDescription,
        //     status,
        //     commitMessage,
        //     commitId,
        // };

        // dispatch(workSubmision(payload))
        //     .unwrap()
        //     .then((res) => {
        //         setMessage("✅ " + res.message); // backend message
        //     })
        //     .catch((err) => {
        //         setMessage("❌ " + err);
        //     })
        //     .finally(() => setLoading(false));

        const payload = {
            title: taskTitle,
            description: taskDescription,
            status: status?.value,
            commitMessage: commitMessage,
            commitId: commitId,
        };

        const result = dispatch(workSubmision(payload));

        result.then((res) => {
            console.log(res);
            if (res.type.endsWith("fulfilled")) {
                setMessage("✅ Work details saved successfully");
                // এখানে form reset করতে পারো
                setTaskTitle("");
                setTaskDescription("");
                setStatus("");
                setCommitMessage("");
                setCommitId("");
                setLoading(false);
            } else {
                setMessage("❌ Something went wrong");
            }
        });

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

                {/* Commit ID */}
                <div>
                    <Label htmlFor="commitId">GitHub Commit ID</Label>
                    <Input
                        id="commitId"
                        type="text"
                        placeholder="Enter commit id"
                        value={commitId}
                        onChange={(e) => setCommitId(e.target.value)}
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
                        disabled={loading}
                        className="px-6 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>

                {/* Message */}
                {message && <p className="text-sm mt-2">{message}</p>}
            </form>
        </ComponentCard>
    );
}

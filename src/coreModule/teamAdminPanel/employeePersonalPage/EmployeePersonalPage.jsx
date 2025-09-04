import { useState } from "react";
import Badge from "../../../components/ui/badge/Badge";
import Select from "../../../components/form/Select";

export default function EmployeePersonalPage() {
    const [formData, setFormData] = useState({
        name: "",
        startDate: "",
        endDate: "",
    });
    const [employee, setEmployee] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const dummyEmployees = [
        {
            id: 1,
            name: "John Doe",
            role: "Software Engineer",
            joinDate: "2023-01-15",
            email: "john@example.com",
            tasks: [
                {
                    title: "Frontend Module",
                    description: "Build login page",
                    startDate: "2023-07-01",
                    expireDate: "2023-07-05",
                    status: "Completed",
                },
                {
                    title: "Dashboard",
                    description: "Create admin dashboard",
                    startDate: "2023-07-06",
                    expireDate: "2023-07-12",
                    status: "In Progress",
                },
            ],
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "UI/UX Designer",
            joinDate: "2022-10-10",
            email: "jane@example.com",
            tasks: [
                {
                    title: "Wireframes",
                    description: "Design wireframes for new app",
                    startDate: "2023-07-02",
                    expireDate: "2023-07-08",
                    status: "In Progress",
                },
            ],
        },
    ];

    const employeeOptions = dummyEmployees.map((emp) => ({
        value: emp.name,
        label: emp.name,
    }));

    const handleSearch = () => {
        setLoading(true);
        setError("");

        if (!formData.name) {
            setError("❌ Please enter a valid employee name.");
            setLoading(false);
            return;
        }

        const foundEmployee = dummyEmployees.find(
            (emp) => emp.name.toLowerCase() === formData.name.toLowerCase()
        );

        if (foundEmployee) {
            setEmployee(foundEmployee);

            // Filter tasks by date range if dates are selected
            let filteredTasks = foundEmployee.tasks || [];

            if (formData.startDate) {
                filteredTasks = filteredTasks.filter(
                    (task) => task.startDate >= formData.startDate
                );
            }
            if (formData.endDate) {
                filteredTasks = filteredTasks.filter(
                    (task) => task.expireDate <= formData.endDate
                );
            }

            setTasks(filteredTasks);
        } else {
            setEmployee(null);
            setTasks([]);
            setError("❌ No employee found with this name.");
        }
        setLoading(false);
    };

    return (
        <div className="p-6 space-y-6">
            {/* Search Form */}
            <div className="bg-gray-800 shadow rounded-2xl p-4 flex gap-4 items-end">
                <div className="flex-1">
                    <label className="block text-sm font-medium mb-1 text-white">
                        Employee Name
                    </label>
                    <Select
                        name="name"
                        options={employeeOptions}
                        value={
                            formData.name
                                ? { value: formData.name, label: formData.name }
                                : null
                        }
                        onChange={(selectedOption) =>
                            setFormData({
                                ...formData,
                                name: selectedOption.value,
                            })
                        }
                        placeholder="Select employee"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1 text-white">
                        Start Date
                    </label>
                    <input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) =>
                            setFormData({ ...formData, startDate: e.target.value })
                        }
                        className="rounded-lg p-2"
                        placeholder="Select start date"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1 text-white">
                        End Date
                    </label>
                    <input
                        type="date"
                        value={formData.endDate}
                        onChange={(e) =>
                            setFormData({ ...formData, endDate: e.target.value })
                        }
                        className="rounded-lg p-2"
                        placeholder="Select end date"
                    />
                </div>
                <button
                    onClick={handleSearch}
                    className="bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600"
                >
                    {loading ? "Searching..." : "Search"}
                </button>
            </div>

            {/* Error Alert */}
            {error && (
                <div className="bg-red-500 text-white px-4 py-2 rounded-lg">
                    {error}
                </div>
            )}

            {/* Employee Meta */}
            {employee && (
                <div className="bg-gray-300 shadow rounded-2xl p-6">
                    <h2 className="text-xl font-bold">{employee.name}</h2>
                    <p className="text-gray-600">Role: {employee.role}</p>
                    <p className="text-gray-600">Joining Date: {employee.joinDate}</p>
                    <p className="text-gray-600">Email: {employee.email}</p>
                </div>
            )}

            {/* Task Table */}
            {tasks.length > 0 && (
                <div className="bg-white shadow rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Employee Tasks</h3>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-3 border">Task Title</th>
                                <th className="p-3 border">Description</th>
                                <th className="p-3 border">Start Date</th>
                                <th className="p-3 border">Expire Date</th>
                                <th className="p-3 border">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="p-3 border">{task.title}</td>
                                    <td className="p-3 border">{task.description}</td>
                                    <td className="p-3 border">{task.startDate}</td>
                                    <td className="p-3 border">{task.expireDate}</td>
                                    <td className="p-3 border">
                                        <Badge
                                            variant="light"
                                            color={
                                                task.status === "Completed"
                                                    ? "success"
                                                    : task.status === "In Progress"
                                                        ? "primary"
                                                        : "warning"
                                            }
                                        >
                                            {task.status}
                                        </Badge>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* No Tasks */}
            {!loading && employee && tasks.length === 0 && (
                <p className="text-gray-500">No tasks found for this employee.</p>
            )}
        </div>
    );
}

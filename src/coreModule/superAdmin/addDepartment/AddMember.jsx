import { useState } from "react";
import ComponentCard from "../../../components/common/ComponentCard";

const AddMember = () => {
    const [departments] = useState([
        { id: 1, name: "HR" },
        { id: 2, name: "Engineering" },
        { id: 3, name: "Marketing" },
    ]);

    const [employees] = useState([
        { id: 1, name: "Alice Smith" },
        { id: 2, name: "Bob Johnson" },
        { id: 3, name: "Charlie Brown" },
    ]);

    const [selectedDept, setSelectedDept] = useState("");
    const [selectedEmp, setSelectedEmp] = useState("");
    const [members, setMembers] = useState([]);

    const handleSave = () => {
        if (!selectedDept || !selectedEmp) return;

        const dept = departments.find((d) => d.id === Number(selectedDept));
        const emp = employees.find((e) => e.id === Number(selectedEmp));

        setMembers([...members, { department: dept.name, employee: emp.name }]);
        setSelectedDept("");
        setSelectedEmp("");
    };

    return (
        <ComponentCard title="Add Member">
            {/* Form */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                {/* Department Dropdown */}
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Department
                    </label>
                    <select
                        value={selectedDept}
                        onChange={(e) => setSelectedDept(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-700 dark:text-white"
                    >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                            <option key={dept.id} value={dept.id}>
                                {dept.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Employee Dropdown */}
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Employee
                    </label>
                    <select
                        value={selectedEmp}
                        onChange={(e) => setSelectedEmp(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-700 dark:text-white"
                    >
                        <option value="">Select Employee</option>
                        {employees.map((emp) => (
                            <option key={emp.id} value={emp.id}>
                                {emp.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Save Button */}
            <div className="mb-6">
                <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Save
                </button>
            </div>

            {/* Members Table */}
            {members.length > 0 ? (
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                    <div className="max-w-full overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead className="bg-gray-100 dark:bg-white/5">
                                <tr>
                                    <th className="px-5 py-3 text-start text-gray-500 dark:text-gray-400">
                                        Department
                                    </th>
                                    <th className="px-5 py-3 text-start text-gray-500 dark:text-gray-400">
                                        Employee
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                {members.map((m, index) => (
                                    <tr key={index}>
                                        <td className="px-5 py-4 text-gray-800 dark:text-white/90">
                                            {m.department}
                                        </td>
                                        <td className="px-5 py-4 text-gray-800 dark:text-white/90">
                                            {m.employee}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center">
                    No members added yet.
                </p>
            )}
        </ComponentCard>
    );
};

export default AddMember;

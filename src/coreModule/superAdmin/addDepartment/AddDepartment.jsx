import { useState } from "react";
import ComponentCard from "../../../components/common/ComponentCard";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "../../../components/ui/table/index";

const AddDepartment = () => {
    const [departments, setDepartments] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    // form state
    const [deptName, setDeptName] = useState("");
    const [deptDesc, setDeptDesc] = useState("");

    // open modal
    const handleAdd = () => {
        resetForm();
        setEditIndex(null);
        setIsModalOpen(true);
    };

    // edit existing department
    const handleEdit = (index) => {
        const dept = departments[index];
        setDeptName(dept.name);
        setDeptDesc(dept.description);
        setEditIndex(index);
        setIsModalOpen(true);
    };

    // save department (add or edit)
    const handleSave = () => {
        const newDept = {
            name: deptName,
            description: deptDesc,
        };

        if (editIndex !== null) {
            // edit existing
            const updated = [...departments];
            updated[editIndex] = newDept;
            setDepartments(updated);
        } else {
            // add new
            setDepartments([...departments, newDept]);
        }

        setIsModalOpen(false);
        resetForm();
    };

    const resetForm = () => {
        setDeptName("");
        setDeptDesc("");
    };

    return (
        <ComponentCard title="Department Management">
            {/* Add Button */}
            <div className="flex justify-start mb-4">
                <button
                    onClick={handleAdd}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    + Add Department
                </button>
            </div>

            {/* Table */}
            {departments.length > 0 ? (
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                    <div className="max-w-full overflow-x-auto">
                        <Table>
                            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                                <TableRow>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-start dark:text-gray-400"
                                    >
                                        Department Name
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-start dark:text-gray-400"
                                    >
                                        Description
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-end dark:text-gray-400"
                                    >
                                        Actions
                                    </TableCell>
                                </TableRow>
                            </TableHeader>

                            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                {departments.map((dept, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="px-5 py-4 text-gray-800 dark:text-white/90">
                                            {dept.name}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 dark:text-gray-400">
                                            {dept.description}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-right">
                                            <button
                                                onClick={() => handleEdit(index)}
                                                className="px-4 py-3 rounded-lg bg-yellow-500 text-white hover:bg-amber-500"
                                            >
                                                Edit
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center">
                    No departments added yet.
                </p>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-full max-w-md shadow-lg">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                            {editIndex !== null ? "Edit Department" : "Add Department"}
                        </h3>

                        {/* Department Name */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Department Name
                            </label>
                            <input
                                type="text"
                                value={deptName}
                                onChange={(e) => setDeptName(e.target.value)}
                                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-700 dark:text-white"
                            />
                        </div>

                        {/* Department Description */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Description
                            </label>
                            <textarea
                                rows={3}
                                value={deptDesc}
                                onChange={(e) => setDeptDesc(e.target.value)}
                                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-700 dark:text-white"
                            ></textarea>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-600 dark:text-white"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </ComponentCard>
    );
};

export default AddDepartment;

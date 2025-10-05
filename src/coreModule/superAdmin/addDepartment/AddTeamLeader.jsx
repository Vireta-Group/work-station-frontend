import { useState } from "react";
import ComponentCard from "../../../components/common/ComponentCard";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "../../../components/ui/table/index";

const AddTeamLeader = () => {
  const [departments, setDepartments] = useState([
    { name: "HR", description: "Handles hiring", leaders: [] },
    { name: "IT", description: "Tech & Support", leaders: [] },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // form state for department
  const [deptName, setDeptName] = useState("");
  const [deptDesc, setDeptDesc] = useState("");
  const [selectedLeaders, setSelectedLeaders] = useState([]);

  // dummy team leader list
  const allTeamLeaders = [
    "John Doe",
    "Jane Smith",
    "Michael Lee",
    "Sophia Khan",
    "David Miller",
  ];

  // open modal for editing a department
  const handleEdit = (index) => {
    const dept = departments[index];
    setDeptName(dept.name);
    setDeptDesc(dept.description);
    setSelectedLeaders(dept.leaders || []);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  // save department changes
  const handleSave = () => {
    const updated = [...departments];
    updated[editIndex] = {
      ...updated[editIndex],
      name: deptName,
      description: deptDesc,
      leaders: selectedLeaders,
    };
    setDepartments(updated);
    setIsModalOpen(false);
  };

  // toggle leader selection
  const toggleLeader = (leader) => {
    if (selectedLeaders.includes(leader)) {
      setSelectedLeaders(selectedLeaders.filter((l) => l !== leader));
    } else {
      setSelectedLeaders([...selectedLeaders, leader]);
    }
  };

  return (
    <ComponentCard title="Team Leader Management">
      {/* Table */}
      {departments.length > 0 ? (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.1] dark:bg-gray-800">
          <div className="max-w-full overflow-x-auto">
            <Table>
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.1]">
                <TableRow>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-600 dark:text-gray-300"
                  >
                    Department Name
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-600 dark:text-gray-300"
                  >
                    Description
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-600 dark:text-gray-300"
                  >
                    Team Leaders
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-600 dark:text-gray-300 text-right"
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHeader>

              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {departments.map((dept, index) => (
                  <TableRow key={index}>
                    <TableCell className="px-5 py-4 text-gray-800 dark:text-white">
                      {dept.name}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-600 dark:text-gray-300">
                      {dept.description}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-sm text-gray-700 dark:text-gray-400">
                      {dept.leaders.length > 0
                        ? dept.leaders.join(", ")
                        : "No leaders assigned"}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-right">
                      <button
                        onClick={() => handleEdit(index)}
                        className="px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                      >
                        + Add Team Leaders
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
          No departments available.
        </p>
      )}

      {/* Unified Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl w-full max-w-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Edit Department
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
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-800 dark:text-white"
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
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-800 dark:text-white"
              ></textarea>
            </div>

            {/* Team Leaders Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Team Leaders
              </label>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg mt-2">
                {allTeamLeaders.map((leader) => (
                  <label
                    key={leader}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <input
                      type="checkbox"
                      checked={selectedLeaders.includes(leader)}
                      onChange={() => toggleLeader(leader)}
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {leader}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 dark:text-white"
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

export default AddTeamLeader;

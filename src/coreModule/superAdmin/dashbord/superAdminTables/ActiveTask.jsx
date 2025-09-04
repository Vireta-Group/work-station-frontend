import { useState } from "react";
import superAdminData from "../superAdminData";

const ActiveTask = () => {
  const activeTASK = superAdminData[0].activeProjects;

  // dropdown এর জন্য state
  const [filter, setFilter] = useState("All");

  // status অনুযায়ী className বাছাই করার জন্য একটা ফাংশন
  const getStatusClass = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-yellow-500 text-white px-3 py-1 rounded-full text-sm";
      case "Rejected":
        return "bg-red-500 text-white px-3 py-1 rounded-full text-sm";
      case "Completed":
        return "bg-green-500 text-white px-3 py-1 rounded-full text-sm";
      default:
        return "bg-gray-400 text-white px-3 py-1 rounded-full text-sm";
    }
  };

  // Filter করা data
  const filteredTasks = activeTASK.filter((task) => {
    if (filter === "All") return true;
    return task.status === filter;
  });

  return (
    <div className="overflow-x-auto">
      {/* Dropdown Button */}
      <div className="flex justify-end mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className=" px-3 py-2 rounded-md dark:border-none border-2 dark:bg-blue-800 dark:text-white"
        >
          <option value="All">All Task</option>
          <option value="Completed">Completed Task</option>
          <option value="In Progress">Pending Task</option>
          <option value="Rejected">Rejected Task</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Dateline</th>
            <th className="p-4">Project Lead</th>
            <th className="p-4">Status</th>
            <th className="p-4">Assign</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-[#171f2f]">
          {filteredTasks.map((datas) => (
            <tr
              className="border-b border-gray-200 dark:border-gray-700"
              key={datas.id}
            >
              <td className="p-4 text-gray-800 dark:text-gray-200">
                {datas.name}
              </td>
              <td className="p-4 text-gray-800 dark:text-gray-200">
                {datas.deadline}
              </td>
              <td className="p-4 text-gray-800 dark:text-gray-200">
                {datas.projectLead}
              </td>
              <td className="text-gray-800 dark:text-gray-200">
                <span
                  className={`flex !w-[100px] justify-center ${getStatusClass(
                    datas.status
                  )}`}
                >
                  {datas.status}
                </span>
              </td>
              <td className="flex p-4 text-gray-800 dark:text-gray-200">
                {datas.assign.slice(0, 1).map((img) => (
                  <img
                    className="w-[1.5rem] rounded-full"
                    key={img.name}
                    src={img.img}
                    alt={img.name}
                  />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveTask;

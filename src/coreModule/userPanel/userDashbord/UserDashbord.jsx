import React, { useState } from "react";
import { tasks } from "./userInformation";


const UserDashboard = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const getStatusColor = (status) => {
    if (status === "complete") return "bg-green-500 text-white";
    if (status === "uncomplete") return "bg-red-500 text-white";
    if (status === "in progress") return "bg-yellow-400 text-black";
    return "";
  };

  return (
    <div className="p-4 min-h-[100vh] w-[100%] text-gray-900 dark:text-gray-100">
      <b className=" flex justify-end pr-[5%]  w-[100%] "> <span className="bg-black/20  py-2 px-4  m-2 rounded-[10px]">Total Earning <br></br> <span className="text-red-500"> $500</span></span></b>
      <h1 className="text-2xl font-bold mb-4 text-center">User Dashboard</h1>

      <div className="overflow-x-auto flex justify-center">
        <table
          className="table-auto w-[90%] border-collapse rounded-[10px] overflow-hidden"
          style={{ backgroundColor: "#141e2f" }}
        >
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="p-2 border border-gray-600">Date</th>
              <th className="p-2 border border-gray-600">Task Name</th>
              <th className="p-2 border border-gray-600">Description</th>
              <th className="p-2 border border-gray-600">Task Duration</th>
              
              <th className="p-2 border border-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="transition-colors h-18 text-gray-200">
                <td className="p-2 border border-gray-700">{task.date}</td>
                <td className="p-2 border border-gray-700">{task.taskName}</td>
                <td className="p-2 border border-gray-700">
                  {expanded === index
                    ? task.description
                    : `${task.description.slice(0, 100)}... `}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-blue-400 underline ml-2 cursor-pointer"
                  >
                    {expanded === index ? "See less" : "See more"}
                  </button>
                </td>
                <td className="p-2 border border-gray-700">
                  {task.taskDuration}
                </td>
               
                <td className="p-2 border border-gray-700">
                 <span
                  className={`${getStatusColor(task.status)} px-4 py-2 min-w-[120px] text-center rounded-[10px] block`}
                 >
                   {task.status}
                 </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;

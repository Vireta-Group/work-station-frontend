// MAHBUB❤️.........................

// src/pages/AdminDashbordTable.jsx


import React, { useState } from "react";

const data = [
  {
    id: 1,
    date: "2025-08-20",
    user: {
      name: "Lindsey Curtis",
      jobTitle: "Web Designer",
      profileImg: "/images/user/user-17.jpg",
    },
    taskTitle: "UI Design for Landing Page",
    status: "Ongoing",
    expire: "Complete",
  },
  {
    id: 2,
    date: "2025-08-30",
    user: {
      name: "Kaiya George",
      jobTitle: "Project Manager",
      profileImg: "/images/user/user-18.jpg",
    },
    taskTitle: "Project Planning",
    status: "Review",
    expire: "Pending",
  },
  {
    id: 3,
    date: "2025-09-01",
    user: {
      name: "Zain Geidt",
      jobTitle: "Content Writer",
      profileImg: "/images/user/user-19.jpg",
    },
    taskTitle: "Write Blog Articles",
    status: "Completed",
    expire: "Date Over",
  },
  {
    id: 4,
    date: "2025-07-28",
    user: {
      name: "Abram Schleifer",
      jobTitle: "Digital Marketer",
      profileImg: "/images/user/user-20.jpg",
    },
    taskTitle: "SEO Optimization",
    status: "Ongoing",
    expire: "Complete",
  },

    {
    id: 5,
    date: "2025-8-28",
    user: {
      name: "John Schleifer",
      jobTitle: "Digital Marketer",
      profileImg: "/images/user/user-20.jpg",
    },
    taskTitle: "SEO Optimization",
    status: "Ongoing",
    expire: "Complete",
  },
];

const expireColors = {
  Complete: "bg-green-500",
  Pending: "bg-yellow-500",
  "Date Over": "bg-red-500",
};

export default function AdminDashbordTable() {
  const [filter, setFilter] = useState("1m");

  // filter data by date range
  const filteredData = data.filter((row) => {
    const today = new Date();
    const rowDate = new Date(row.date);

    let diffDays = Math.floor((today - rowDate) / (1000 * 60 * 60 * 24));

    if (filter === "1w") return diffDays <= 7;
    if (filter === "2w") return diffDays <= 14;
    if (filter === "1m") return diffDays <= 30;
    return true;
  });

  return (
    <div className="p-4 bg-white dark:bg-gray-700 rounded-[10px] border-2">
      {/* Header with buttons */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Admin Dashboard Table
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => setFilter("1w")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              filter === "1w"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            }`}
          >
            1 Week
          </button>
          <button
            onClick={() => setFilter("2w")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              filter === "2w"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            }`}
          >
            2 Week
          </button>
          <button
            onClick={() => setFilter("1m")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              filter === "1m"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            }`}
          >
            1 Month
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-md">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="p-4">Date</th>
              <th className="p-4">User</th>
              <th className="p-4">Task Title</th>
              <th className="p-4">Status</th>
              <th className="p-4">Expire</th>
            </tr>
          </thead>

          <tbody className="bg-white dark:bg-[#171f2f]">
            {filteredData.length > 0 ? (
              filteredData.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
                >
                  {/* Date */}
                  <td className="p-4 text-gray-800 dark:text-gray-200">
                    {row.date}
                  </td>

                  {/* User */}
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src={row.user.profileImg}
                      alt={row.user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">
                        {row.user.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {row.user.jobTitle}
                      </div>
                    </div>
                  </td>

                  {/* Task Title */}
                  <td className="p-4 text-gray-700 dark:text-gray-300">
                    {row.taskTitle}
                  </td>

                  {/* Status */}
                  <td className="p-4 text-gray-700 dark:text-gray-300">
                    {row.status}
                  </td>

                  {/* Expire */}
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-white text-sm rounded-full ${expireColors[row.expire]}`}
                    >
                      {row.expire}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="p-6 text-center text-gray-500 dark:text-gray-400"
                >
                  No data available for this range
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

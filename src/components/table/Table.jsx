import React, { useState } from "react";


const tableData = [
  {
    id: 1,
    workTitle: "UI Design",
    projectName: "Agency Website",
    description: "Landing page design with responsive layout",
    expireDate: "09-15",
  },
  {
    id: 2,
    workTitle: "Backend API",
    projectName: "E-commerce Platform",
    description: "Develop product and order management APIs",
    expireDate: "10-05",
  },
  {
    id: 3,
    workTitle: "SEO Optimization",
    projectName: "Blog Website",
    description: "Improve Google ranking with on-page SEO",
    expireDate: "08-30",
  },
  {
    id: 4,
    workTitle: "Content Writing",
    projectName: "Marketing Campaign",
    description: "Write content for social media ads and blog posts",
    expireDate: "09-25",
  },
  {
    id: 5,
    workTitle: "Frontend Development",
    projectName: "Portfolio Website",
    description: "Develop interactive UI with React and Tailwind CSS",
    expireDate: "09-10",
  },
];

export default function Table() {
  const [expandedRows, setExpandedRows] = useState({});

  const toggleExpand = (id) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
          <tr>
            <th className="p-4">Work Title</th>
            <th className="p-4">Project Name</th>
            <th className="p-4">Description</th>
            <th className="p-4">Expire Date</th>
          </tr>
        </thead>

        <tbody className="bg-white dark:bg-[#171f2f]">
          {tableData.map((row) => {
            const isExpanded = expandedRows[row.id];
            const shortDesc = row.description.slice(0, 50); // প্রথম 50 character দেখাবে
            return (
              <tr key={row.id} className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 text-gray-800 dark:text-gray-200 font-semibold">{row.workTitle}</td>
                <td className="p-4 text-gray-800 dark:text-gray-200">{row.projectName}</td>
                <td className="p-4 text-gray-600 dark:text-gray-300">
                  {isExpanded ? row.description : `${shortDesc}... `}
                  <button
                    onClick={() => toggleExpand(row.id)}
                    className="text-blue-500 hover:underline ml-1"
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                </td>
                <td className="p-4 text-gray-800 dark:text-gray-200">{row.expireDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

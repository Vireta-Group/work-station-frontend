import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyWork } from "../../features/myWork/myWorkSlice";

export default function Table() {
  const [expandedRows, setExpandedRows] = useState({});
  const tableData = useSelector((data) => data.myWork);
  const dispatch = useDispatch();
  console.log(tableData.items);

  useEffect(() => {
    if (tableData.status === "idle") {
      dispatch(fetchMyWork());
    }
  });

  const toggleExpand = (id) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
          <tr>
            <th className="p-4">Work Title</th>{" "}
            <th className="p-4">Description</th>
            <th className="p-4">Issue date</th>
            <th className="p-4">Expire Date</th>
          </tr>
        </thead>

        <tbody className="bg-white dark:bg-[#171f2f]">
          {tableData?.items?.map((row) => {
            const isExpanded = expandedRows[row?.work_id];
            const shortDesc = row?.work_desc.slice(0, 50); // প্রথম 50 character দেখাবে
            return (
              <tr
                key={row?.work_id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <td className="p-4 text-gray-800 dark:text-gray-200 font-semibold">
                  {row?.work_title}
                </td>
                <td className="p-4 text-gray-600 dark:text-gray-300">
                  {isExpanded ? row?.work_desc : `${shortDesc}... `}
                  <button
                    onClick={() => toggleExpand(row?.work_id)}
                    className="text-blue-500 hover:underline ml-1"
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                </td>
                <td className="p-4 text-gray-800 dark:text-gray-200">
                  {row?.work_date}
                </td>

                <td className="p-4 text-gray-800 dark:text-gray-200">
                  {row?.work_expire_date}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

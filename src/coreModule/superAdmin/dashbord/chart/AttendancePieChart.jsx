import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import superAdminData from "../superAdminData";

const AttendancePieChart = () => {
  const attendance = superAdminData[0].attendance;

  const [period, setPeriod] = useState("today");

  const COLORS = ["#0f22eeff", "#0f8595ff", "#34c02fff"]; // Present=Green, Absent=Orange, Late=Red

  const data = attendance[period].map((item) => ({
    name: item.name,
    value: item.value,
  }));

  return (
    <div className="flex flex-col items-center">
      {/* Dropdown for period */}
      <div className="mb-4">
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className=" px-3 py-2 rounded-md dark:border-none border-2  dark:bg-blue-800 dark:text-white"
        >
          <option value="today">Today</option>
          <option value="last7days">Last 7 Days</option>
          <option value="last1month">Last 1 Month</option>
        </select>
      </div>

      {/* Pie Chart */}
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );
};

export default AttendancePieChart;

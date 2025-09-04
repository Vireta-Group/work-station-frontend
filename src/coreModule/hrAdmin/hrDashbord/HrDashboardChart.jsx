//MAHBUB............................

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const HrDashboardChart = () => {
  const earnings = [
    { month: "March, 2025", totalEarning: 1200 },
    { month: "April, 2025", totalEarning: 950 },
    { month: "May, 2025", totalEarning: 1430 },
    { month: "June, 2025", totalEarning: 1100 },
    { month: "July, 2025", totalEarning: 1500 },
    { month: "August, 2025", totalEarning: 1750 },
  ];

  return (
    <div className="w-full h-[400px] p-4  bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={earnings} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalEarning" fill="#43785eff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HrDashboardChart;

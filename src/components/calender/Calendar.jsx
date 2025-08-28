import React, { useState } from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  return (
    <div className="max-w-md mx-auto p-4 bg-white dark:bg-[#171f2f] rounded-xl shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
          ◀
        </button>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {monthNames[currentMonth]} {currentYear}
        </h2>
        <button onClick={nextMonth} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
          ▶
        </button>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 text-center font-medium text-gray-600 dark:text-gray-300 mb-2">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 text-center gap-y-2">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`}></div>
        ))}

        {Array.from({ length: daysInMonth }, (_, i) => {
          const date = i + 1;
          const isToday =
            date === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear();

          return (
            <div
              key={date}
              className={`p-2 rounded-full cursor-pointer transition ${
                isToday
                  ? "bg-blue-500 text-white font-bold"
                  : "hover:bg-blue-100 dark:hover:bg-blue-800 text-gray-700 dark:text-gray-200"
              }`}
            >
              {date}
            </div>
          );
        })}
      </div>
    </div>
  );
}

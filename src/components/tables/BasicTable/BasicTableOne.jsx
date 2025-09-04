import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../ui/table/index";

import Badge from "../../ui/badge/Badge";

const EmployeeAttendance = () => {
    const [date, setDate] = useState("");
    const [employees, setEmployees] = useState([]);

    // Dummy employee data
    const allEmployees = [
        {
            id: 1,
            name: "Mahmudul Hasan",
            designation: "Software Engineer",
            status: "Present",
            photo: "/images/user/user-17.jpg",
        },
        {
            id: 2,
            name: "Ayesha Rahman",
            designation: "HR Manager",
            status: "Absent",
            photo: "/images/user/user-18.jpg",
        },
        {
            id: 3,
            name: "Rifat Karim",
            designation: "UI/UX Designer",
            status: "Present",
            photo: "/images/user/user-19.jpg",
        },
    ];

    const handleSearch = () => {
        // later fetch from backend using date
        setEmployees(allEmployees);
    };

    return (
        <div className="p-6">
            {/* Heading */}
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Employee Attendance
            </h2>

            {/* Search Section */}
            <div className="flex items-center gap-4 mb-6">
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border rounded-lg px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-700"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                    Search
                </button>
            </div>

            {/* Attendance Table */}
            {employees.length > 0 ? (
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                    <div className="max-w-full overflow-x-auto">
                        <Table>
                            {/* Table Header */}
                            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                                <TableRow>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                    >
                                        Employee
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                    >
                                        Designation
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                    >
                                        Status
                                    </TableCell>
                                </TableRow>
                            </TableHeader>

                            {/* Table Body */}
                            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                {employees.map((emp) => (
                                    <TableRow key={emp.id}>
                                        {/* Employee Info */}
                                        <TableCell className="px-5 py-4 sm:px-6 text-start">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 overflow-hidden rounded-full">
                                                    <img
                                                        width={40}
                                                        height={40}
                                                        src={emp.photo}
                                                        alt={emp.name}
                                                    />
                                                </div>
                                                <div>
                                                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                        {emp.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </TableCell>

                                        {/* Designation */}
                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                            {emp.designation}
                                        </TableCell>

                                        {/* Status */}
                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                            <Badge
                                                size="sm"
                                                color={
                                                    emp.status === "Present"
                                                        ? "success"
                                                        : "error"
                                                }
                                            >
                                                {emp.status}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            ) : (
                <p className="text-gray-500 dark:text-gray-400">
                    Please select a date and search.
                </p>
            )}
        </div>
    );
};

export default EmployeeAttendance;

import React, { useState } from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
} from "../../../components/ui/table/index";

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
            photo: "https://via.placeholder.com/50",
        },
        {
            id: 2,
            name: "Ayesha Rahman",
            designation: "HR Manager",
            status: "Absent",
            photo: "https://via.placeholder.com/50",
        },
        {
            id: 3,
            name: "Rifat Karim",
            designation: "UI/UX Designer",
            status: "Present",
            photo: "https://via.placeholder.com/50",
        },
    ];

    const handleSearch = () => {
        // later you can fetch from backend using date
        setEmployees(allEmployees);
    };

    return (
        <div className="p-6 space-y-6">
            {/* Heading */}
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Employee Attendance
            </h1>

            {/* Search Section */}
            <div className="flex items-center gap-4">
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border rounded-lg px-4 py-2 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
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
                <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <Table className="w-full">
                        <TableHeader>
                            <TableRow className="bg-gray-100 dark:bg-gray-800">
                                <TableCell
                                    isHeader
                                    className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200"
                                >
                                    Picture
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200"
                                >
                                    Name
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200"
                                >
                                    Designation
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200"
                                >
                                    Status
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {employees.map((emp) => (
                                <TableRow
                                    key={emp.id}
                                    className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                                >
                                    <TableCell className="px-4 py-3">
                                        <img
                                            src={emp.photo}
                                            alt={emp.name}
                                            className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600"
                                        />
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-900 dark:text-gray-100">
                                        {emp.name}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-700 dark:text-gray-300">
                                        {emp.designation}
                                    </TableCell>
                                    <TableCell className="px-4 py-3">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${emp.status === "Present"
                                                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                                                : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                                                }`}
                                        >
                                            {emp.status}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
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

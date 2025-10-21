import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDepartment } from "../../../features/getDepartment/getDepartmentSlice";
import { fetchEmployeesByDepartment } from "../../../features/employeeByDepartment/employeeByDepartmentSlice";
import { resignedEmployee } from "../../../features/resignedEmployee/resignedEmployeeSlice";

// Demo Employee Data
// const employeesData = [
//   // Web Developers (5)
//   {
//     id: 1,
//     name: "Mahbubur Rahman",
//     designation: "Web Developer",
//     img: "https://i.pravatar.cc/100?img=1",
//     father: "Mr. Rahman",
//     mother: "Mrs. Rahman",
//     nid: "1234567890",
//     dob: "2003-05-10",
//     username: "mahbub",
//     password: "12345",
//   },
//   {
//     id: 2,
//     name: "Niloy Hasan",
//     designation: "Web Developer",
//     img: "https://i.pravatar.cc/100?img=2",
//     father: "Mr. Hasan",
//     mother: "Mrs. Hasan",
//     nid: "9876543210",
//     dob: "2002-08-21",
//     username: "niloy",
//     password: "67890",
//   },
//   {
//     id: 3,
//     name: "Akib Ahmed",
//     designation: "Web Developer",
//     img: "https://i.pravatar.cc/100?img=3",
//     father: "Mr. Ahmed",
//     mother: "Mrs. Ahmed",
//     nid: "246813579",
//     dob: "2001-11-15",
//     username: "akib",
//     password: "11223",
//   },
//   {
//     id: 4,
//     name: "Sabbir Hossain",
//     designation: "Web Developer",
//     img: "https://i.pravatar.cc/100?img=4",
//     father: "Mr. Hossain",
//     mother: "Mrs. Hossain",
//     nid: "555444333",
//     dob: "2000-01-20",
//     username: "sabbir",
//     password: "pass123",
//   },
//   {
//     id: 5,
//     name: "Rakibul Islam",
//     designation: "Web Developer",
//     img: "https://i.pravatar.cc/100?img=5",
//     father: "Mr. Islam",
//     mother: "Mrs. Islam",
//     nid: "111222333",
//     dob: "1999-09-12",
//     username: "rakib",
//     password: "abc123",
//   },

//   // Frontend Developers (5)
//   {
//     id: 6,
//     name: "Tanvir Ahmed",
//     designation: "Frontend Developer",
//     img: "https://i.pravatar.cc/100?img=6",
//     father: "Mr. Ahmed",
//     mother: "Mrs. Ahmed",
//     nid: "999888777",
//     dob: "2002-07-01",
//     username: "tanvir",
//     password: "frontend1",
//   },
//   {
//     id: 7,
//     name: "Hasan Mahmud",
//     designation: "Frontend Developer",
//     img: "https://i.pravatar.cc/100?img=7",
//     father: "Mr. Mahmud",
//     mother: "Mrs. Mahmud",
//     nid: "111888555",
//     dob: "2001-04-05",
//     username: "hasan",
//     password: "frontend2",
//   },
//   {
//     id: 8,
//     name: "Raihan Karim",
//     designation: "Frontend Developer",
//     img: "https://i.pravatar.cc/100?img=8",
//     father: "Mr. Karim",
//     mother: "Mrs. Karim",
//     nid: "222333444",
//     dob: "2000-11-25",
//     username: "raihan",
//     password: "frontend3",
//   },
//   {
//     id: 9,
//     name: "Shakib Khan",
//     designation: "Frontend Developer",
//     img: "https://i.pravatar.cc/100?img=9",
//     father: "Mr. Khan",
//     mother: "Mrs. Khan",
//     nid: "444555666",
//     dob: "2003-02-15",
//     username: "shakib",
//     password: "frontend4",
//   },
//   {
//     id: 10,
//     name: "Asif Rahman",
//     designation: "Frontend Developer",
//     img: "https://i.pravatar.cc/100?img=10",
//     father: "Mr. Rahman",
//     mother: "Mrs. Rahman",
//     nid: "333222111",
//     dob: "2001-12-10",
//     username: "asif",
//     password: "frontend5",
//   },

//   // Backend Developers (5)
//   {
//     id: 11,
//     name: "Jahidul Islam",
//     designation: "Backend Developer",
//     img: "https://i.pravatar.cc/100?img=11",
//     father: "Mr. Islam",
//     mother: "Mrs. Islam",
//     nid: "555111222",
//     dob: "1998-03-12",
//     username: "jahid",
//     password: "backend1",
//   },
//   {
//     id: 12,
//     name: "Samiul Haque",
//     designation: "Backend Developer",
//     img: "https://i.pravatar.cc/100?img=12",
//     father: "Mr. Haque",
//     mother: "Mrs. Haque",
//     nid: "666333444",
//     dob: "2000-06-18",
//     username: "samiul",
//     password: "backend2",
//   },
//   {
//     id: 13,
//     name: "Mizanur Rahman",
//     designation: "Backend Developer",
//     img: "https://i.pravatar.cc/100?img=13",
//     father: "Mr. Rahman",
//     mother: "Mrs. Rahman",
//     nid: "777888999",
//     dob: "1997-09-10",
//     username: "mizan",
//     password: "backend3",
//   },
//   {
//     id: 14,
//     name: "Ariful Islam",
//     designation: "Backend Developer",
//     img: "https://i.pravatar.cc/100?img=14",
//     father: "Mr. Islam",
//     mother: "Mrs. Islam",
//     nid: "222444555",
//     dob: "2001-02-22",
//     username: "arif",
//     password: "backend4",
//   },
//   {
//     id: 15,
//     name: "Saiful Hasan",
//     designation: "Backend Developer",
//     img: "https://i.pravatar.cc/100?img=15",
//     father: "Mr. Hasan",
//     mother: "Mrs. Hasan",
//     nid: "888111999",
//     dob: "2002-10-05",
//     username: "saiful",
//     password: "backend5",
//   },
// ];

export default function EmployeeList() {
  const [department, setDepartment] = useState();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // _____
  const allDepartment = useSelector(
    (data) => data.getAllDepartment
  ).departments;
  const employeesData = useSelector((data) => data.employeeByDepertment).items;
  const dispatch = useDispatch();

  useEffect(() => {
    if (allDepartment?.length === 0) {
      dispatch(getAllDepartment());
    }
  });

  // Search function
  const handleSearch = () => {
    if (department) {
      dispatch(fetchEmployeesByDepartment(department));
    }
  };

  // Resign function (remove employee)
  const handleResign = (id) => {
    dispatch(resignedEmployee(id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto w-full min-h-[100vh]">
      {/* Dropdown + Search */}
      <div className="flex items-center gap-4 mb-6">
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border dark:bg-gray-500 dark:text-white p-2 rounded w-64"
        >
          <option>Select Department</option>

          {allDepartment?.map((item) => (
            <option value={item?.departmentId} key={item.departmentId}>
              {item?.departmentName}
            </option>
          ))}
        </select>
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse shadow-md rounded-4">
        <thead>
          <tr className="bg-gray-500">
            <th className="border p-3 text-left">Employee</th>
            <th className="border p-3 text-center">Resign</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.length > 0 ? (
            employeesData?.map((emp) => (
              <tr key={emp?.empId} className="hover:bg-gray-800">
                {/* Employee (Img + Name + Designation) */}
                <td className="border p-3 flex items-center gap-3">
                  <img
                    src={emp.empPicture}
                    alt={emp?.empName}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium dark:text-white">
                      {emp?.empName}
                    </p>
                    <p className="text-sm text-gray-500">{emp?.designation}</p>
                  </div>
                </td>

                {/* Resign */}
                <td className="border p-3 text-center">
                  <button
                    onClick={() => handleResign(emp?.empId)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Resign
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center p-4">
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

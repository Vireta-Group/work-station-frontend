import { useEffect, useState } from "react";
import Badge from "../../../components/ui/badge/Badge";
import Select from "../../../components/form/Select";
import { useDispatch, useSelector } from "react-redux";
import { getAllDepartment } from "../../../features/getDepartment/getDepartmentSlice";
import { fetchEmployeesByDepartment } from "../../../features/employeeByDepartment/employeeByDepartmentSlice";
import { fetchTaskHistoryByDates } from "../../../features/taskHistory/taskHistorySlice";
import { fetchEmployeeById } from "../../../features/empById/empByIdSlice";

export default function EmployeePersonalPage() {
  const [formData, setFormData] = useState({
    emp_id: "",
    startdate: "",
    enddate: "",
  });
  const tasks = useSelector((data) => data.taskHistory).items;
  const employee = useSelector((data) => data.empById).data;
  const dep = useSelector((data) => data.getAllDepartment).departments;
  const emp = useSelector((data) => data.employeeByDepertment).items;
  const dispatch = useDispatch();

  const departments = dep?.map((item) => ({
    value: item.departmentId,
    label: item.departmentName,
  }));

  const employeeOptions = emp?.map((emp) => ({
    value: emp.empId,
    label: emp.empName,
  }));

  useEffect(() => {
    if (dep.length === 0) {
      dispatch(getAllDepartment());
    }
  }, [dep, dispatch]);

  const handleSearch = () => {
    dispatch(fetchEmployeeById({ emp_id: formData.emp_id }));
    dispatch(fetchTaskHistoryByDates(formData));
  };

  const changeDepartmentHanlder = (e) => {
    dispatch(fetchEmployeesByDepartment(e.target.value));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Search Form */}
      <div className="bg-gray-800 shadow rounded-2xl p-4 flex gap-4 items-end">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-white">
            Select Department
          </label>
          <Select
            name="name"
            options={departments}
            onChange={changeDepartmentHanlder}
            placeholder="Select Department"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-white">
            Employee Name
          </label>
          <Select
            name="name"
            options={employeeOptions}
            value={
              formData.name
                ? { value: formData.name, label: formData.name }
                : null
            }
            onChange={(selectedOption) =>
              setFormData((prev) => ({
                ...prev,
                emp_id: selectedOption.target.value,
              }))
            }
            placeholder="Select employee"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-white">
            Start Date
          </label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, startdate: e.target.value }))
            }
            className="rounded-lg p-2"
            placeholder="Select start date"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-white">
            End Date
          </label>
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, enddate: e.target.value }))
            }
            className="rounded-lg p-2"
            placeholder="Select end date"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600"
        >
          {/* {loading ? "Searching..." : "Search"} */}
          Search
        </button>
      </div>

      {/* Error Alert */}
      {/* {error && (
        <div className="bg-red-500 text-white px-4 py-2 rounded-lg">
          {error}
        </div>
      )} */}

      {/* Employee Meta */}
      {employee && (
        <div className="bg-gray-300 shadow rounded-2xl p-6">
          <img
            src={`data:image/png;base64,${employee.pic}`}
            alt={employee?.name}
          />
          <h2 className="text-xl font-bold">{employee?.name}</h2>
          <p className="text-gray-600">Designation: {employee?.designation}</p>
          <p className="text-gray-600">Role: {employee?.role}</p>
          <p className="text-gray-600">Email: {employee?.email}</p>
        </div>
      )}

      {/* Task Table */}
      {tasks.length > 0 && (
        <div className="bg-white shadow rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Employee Tasks</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">Task Title</th>
                <th className="p-3 border">Description</th>
                <th className="p-3 border">Start Date</th>
                <th className="p-3 border">Expire Date</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks?.map((task) => (
                <tr key={task?.work_id} className="hover:bg-gray-50">
                  <td className="p-3 border">{task?.work_title}</td>
                  <td className="p-3 border">{task?.work_desc}</td>
                  <td className="p-3 border">{task?.work_date}</td>
                  <td className="p-3 border">{task?.work_expire_date}</td>
                  <td className="p-3 border">
                    <Badge
                      variant="light"
                      color={
                        task?.completing_details[
                          task?.completing_details.length - 1
                        ]?.status === "Completed"
                          ? "success"
                          : task?.completing_details[
                              task?.completing_details.length - 1
                            ]?.status === "In Progress"
                          ? "primary"
                          : "warning"
                      }
                    >
                      {
                        task?.completing_details[
                          task?.completing_details.length - 1
                        ]?.status
                      }
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* No Tasks */}
      {/* {!loading && employee && tasks.length === 0 && (
        <p className="text-gray-500">No tasks found for this employee.</p>
      )} */}
    </div>
  );
}

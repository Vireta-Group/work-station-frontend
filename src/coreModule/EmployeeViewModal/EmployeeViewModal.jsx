import { BsBuilding, BsPerson } from "react-icons/bs";
import ComponentCard from "../../components/common/ComponentCard";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import { useModal } from "../../hooks/useModal";
import EditEmployee from "./EditEmployeeModal";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "../../components/ui/table/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUpapproveEmp } from "../../features/unapproveEmp/unapproveEmpSlice";

export default function InputGroup() {
  const employees = useSelector((data) => data.unapproveEmp);
  const dispatch = useDispatch();
  const { isOpen, openModal, closeModal } = useModal();

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (employees.status === "idle") {
      dispatch(fetchUpapproveEmp());
    }
  }, [dispatch, employees.status]); // use the specific field

  const handleEditClick = (user) => {
    setSelectedUser(user);
    openModal();
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes for:", selectedUser);
    closeModal();
  };

  return (
    <ComponentCard title="Input Group " className="w-1/2 mx-auto">
      <div className="grid grid-cols-1 gap-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {employees?.items?.map((user) => (
              <TableRow key={user.id ?? user.email ?? user.name}>
                {" "}
                {/* avoid index */}
                <TableCell>{user?.name}</TableCell>
                <TableCell>
                  <div className="pt-4">
                    <button
                      onClick={() => handleEditClick(user)}
                      className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 mb-4"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
                    >
                      Approval
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Single modal here */}
      <EditEmployee
        isOpen={isOpen}
        onClose={closeModal}
        onSave={handleSave}
        user={selectedUser}
      />
    </ComponentCard>
  );
}

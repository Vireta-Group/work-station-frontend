import { BsBuilding, BsPerson } from "react-icons/bs";
import ComponentCard from "../../components/common/ComponentCard";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import { useModal } from "../../hooks/useModal";
import EditEmployee from "./EditEmployeeModal";

export default function InputGroup() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <ComponentCard title="Input Group " className="w-1/2 mx-auto">
      <div className="grid grid-cols-1  gap-6">
        {/* Full Name Field */}
        <div>
          <Label>Full Name</Label>
          <div className="relative">
            {/* Static Box instead of Input */}
            <div className="pl-[62px] h-11 flex items-center rounded-lg border border-gray-200 bg-gray-50 text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 px-4">
              John Doe
            </div>

            {/* Icon */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsPerson className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Department Field */}
        <div>
          <Label>Department</Label>
          <div className="relative">
            {/* Static Box instead of Input */}
            <div className="pl-[62px] h-11 flex items-center rounded-lg border border-gray-200 bg-gray-50 text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 px-4">
              finance
            </div>

            {/* Icon */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsPerson className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Send for Approval Button */}
        <div className="pt-4">
          <div>
            <button
              onClick={openModal}
              className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 mb-4"
            >
              Edit
            </button>

            <EditEmployee
              isOpen={isOpen}
              onClose={closeModal}
              onSave={handleSave}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
          >
            Approval
          </button>
        </div>
      </div>
    </ComponentCard>
  );
}

import {
  BsBook,
  BsBriefcase,
  BsBuilding,
  BsCalendar,
  BsCalendar2Event,
  BsCardText,
  BsClipboardCheck,
  BsCreditCard2Front,
  BsCurrencyDollar,
  BsDroplet,
  BsEnvelope,
  BsGenderAmbiguous,
  BsHouse,
  BsHouseDoor,
  BsLaptop,
  BsPerson,
  BsPersonAdd,
} from "react-icons/bs";
import ComponentCard from "../../components/common/ComponentCard";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";

export default function WorkGroup() {
  return (
    <ComponentCard title="Input Group">
      <div className="grid grid-cols-1  gap-6">
        {/* Task Title */}
        <div>
          <Label>Task Title</Label>
          <div className="relative">
            <Input
              placeholder="Enter Task Title"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsClipboardCheck className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Task Description */}
        <div>
          <Label>Task Description</Label>
          <div className="relative">
            <textarea
              placeholder="Enter Task Description"
              rows={3}
              className="w-full rounded-md border border-gray-300 bg-white pl-[62px] pr-3 py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
            />
            <span className="absolute left-0 top-4 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsCardText className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Expire Date */}
        <div>
          <Label>Expire Date</Label>
          <div className="relative">
            <Input type="date" className="pl-[62px]" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsCalendar2Event className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* User Name Dropdown */}
        <div>
          <Label>User Name</Label>
          <div className="relative">
            <select className="w-full rounded-md border border-gray-300 bg-white pl-[62px] py-3 text-gray-700 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
              <option value="">Select User</option>
              <option value="user1">John Doe</option>
              <option value="user2">Jane Smith</option>
              <option value="user3">Robert Brown</option>
            </select>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <BsPersonAdd className="!w-6 !h-6 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 flex items-center justify-center">
          <button
            type="submit"
            className="w-1/3 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </div>
    </ComponentCard>
  );
}

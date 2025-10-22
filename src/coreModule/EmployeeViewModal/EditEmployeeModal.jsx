import React from "react";

import { Modal } from "../../components/ui/modal/";
import Label from "../../components/form/Label";
import Button from "../../components/ui/dropdown/button/Button";
import Input from "../../components/form/input/InputField";

import {
  BsBook,
  BsBriefcase,
  BsBuilding,
  BsCalendar,
  BsCreditCard2Front,
  BsCurrencyDollar,
  BsDroplet,
  BsEnvelope,
  BsGenderAmbiguous,
  BsHouse,
  BsHouseDoor,
  BsLaptop,
  BsPerson,
} from "react-icons/bs";

export default function EditEmployee({ isOpen, onClose, onSave, user }) {
  const [formData, setFormData] = React.useState(user);

  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[700px] m-4">
      <div className="no-scrollbar relative   overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            task edit
          </h4>
        </div>
        <form className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Father Name Field */}
            <div>
              <Label>Name</Label>
              <div className="relative">
                <Input
                  placeholder="Name"
                  name="name"
                  type="text"
                  onChange={changeHandler}
                  value={formData?.name}
                  className="pl-[62px]"
                />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <BsPerson className="!w-6 !h-6 text-gray-500" />
                </span>
              </div>
            </div>

            {/* Mother Name Field */}
            <div>
              <Label>Mother Name</Label>
              <div className="relative">
                <Input
                  placeholder="Mother's Name"
                  name="mother"
                  value={formData?.mother}
                  onChange={changeHandler}
                  type="text"
                  className="pl-[62px]"
                />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <BsPerson className="!w-6 !h-6 text-gray-500" />
                </span>
              </div>
            </div>

            {/* Father Name Field */}
            <div>
              <Label>Father Name</Label>
              <div className="relative">
                <Input
                  placeholder="Father's Name"
                  name="father"
                  value={formData?.father}
                  onChange={changeHandler}
                  type="text"
                  className="pl-[62px]"
                />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <BsPerson className="!w-6 !h-6 text-gray-500" />
                </span>
              </div>
            </div>

            {/* NID Field */}
            <div>
              <Label>NID</Label>
              <div className="relative">
                <Input
                  placeholder="1234567890"
                  type="number"
                  name="nid"
                  value={formData?.nid}
                  onChange={changeHandler}
                  className="pl-[62px]"
                />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <BsCreditCard2Front className="!w-6 !h-6 text-gray-500" />
                </span>
              </div>
            </div>

            {/* Date of Birth Field */}
            <div>
              <Label>Date of Birth</Label>
              <div className="relative">
                <Input
                  type="date"
                  className="pl-[62px]"
                  name="dob"
                  value={formData?.dob}
                  onChange={changeHandler}
                />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <BsCalendar className="!w-6 !h-6 text-gray-500" />
                </span>
              </div>
            </div>

            {/* Local Address Field */}
            <div>
              <Label>Address</Label>
              <div className="relative">
                <Input
                  placeholder="Local Address"
                  name="full_address"
                  onChange={changeHandler}
                  value={formData?.full_address}
                  type="text"
                  className="pl-[62px]"
                />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <BsHouse className="!w-6 !h-6 text-gray-500" />
                </span>
              </div>
            </div>

            {/* Permanent Address Field */}
            <div>
              <Label>Last Education</Label>
              <div className="relative">
                <Input
                  placeholder="Last Education"
                  name="last_edu"
                  onChange={changeHandler}
                  value={formData?.last_edu}
                  type="text"
                  className="pl-[62px]"
                />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <BsHouseDoor className="!w-6 !h-6 text-gray-500" />
                </span>
              </div>
            </div>

            {/* phone number */}
            <div>
              <Label>Phone Nubmer</Label>
              <div className="relative">
                <Input
                  placeholder="Enter You Phone Number"
                  name="mobile"
                  onChange={changeHandler}
                  value={formData.mobile}
                  type="number"
                  className="pl-[62px]"
                />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <BsBook className="!w-6 !h-6 text-gray-500" />
                </span>
              </div>
            </div>

            {/* bkash number */}
            <div>
              <Label>Bkash Number</Label>
              <div className="relative">
                <Input
                  placeholder="Enter Bkash Number"
                  type="number"
                  name="bkash"
                  onChange={changeHandler}
                  value={formData.bkash}
                  className="pl-[62px]"
                />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <BsCurrencyDollar className="!w-6 !h-6 text-gray-500" />
                </span>
              </div>
            </div>

            {/* Department Field */}
            <div>
              <Label>Department</Label>
              <div className="relative">
                <Input
                  placeholder="HR / IT / Finance"
                  type="text"
                  name="department"
                  onChange={changeHandler}
                  value={formData.department}
                  className="pl-[62px]"
                />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <BsBuilding className="!w-6 !h-6 text-gray-500" />
                </span>
              </div>
            </div>

            {/* Designation Field */}
            <div>
              <Label>Designation</Label>
              <div className="relative">
                <Input
                  placeholder="Manager / Developer"
                  name="designation"
                  onChange={changeHandler}
                  value={formData.designation}
                  type="text"
                  className="pl-[62px]"
                />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <BsBriefcase className="!w-6 !h-6 text-gray-500" />
                </span>
              </div>
            </div>

            {/* email Field */}
            <div>
              <Label>Email</Label>
              <div className="relative">
                <Input
                  placeholder="Enter Email"
                  name="email"
                  onChange={changeHandler}
                  value={formData.email}
                  type="email"
                  className="pl-[62px]"
                />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <BsGenderAmbiguous className="!w-6 !h-6 text-gray-500" />
                </span>
              </div>
            </div>

            {/* Role Field */}
            <div>
              <Label>Role</Label>
              <div className="relative">
                <Input
                  type="date"
                  name="role"
                  onChange={changeHandler}
                  value={formData.role}
                  className="pl-[62px]"
                />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <BsCalendar className="!w-6 !h-6 text-gray-500" />
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-2 mt-6  justify-center">
            <Button size="sm" variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button size="sm" onClick={onSave}>
              Update
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

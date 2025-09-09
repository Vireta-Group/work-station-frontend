import React from "react";

import { Modal } from "../../components/ui/modal";
import Label from "../../components/form/Label";
import Button from "../../components/ui/dropdown/button/Button";
import Input from "../../components/form/input/InputField";
import { BsCalendar2Event, BsPersonAdd } from "react-icons/bs";

export default function EditEmployee({ isOpen, onClose, onSave }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[700px] m-4">
      <div className="no-scrollbar relative   overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            task edit
          </h4>
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar  overflow-y-auto px-2 pb-3">
            <div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <div>
                  <Label>task title</Label>
                  <Input type="text" placeholder="John Doe" />
                </div>

                <div>
                  <Label>task Description</Label>
                  <Input type="text" placeholder="John Doe" />
                </div>
                <div>
                  <Label>Expire Date</Label>
                  <div className="relative">
                    <Input type="date" className="pl-[62px]" />
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                      <BsCalendar2Event className="!w-6 !h-6 text-gray-500" />
                    </span>
                  </div>
                </div>

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

// src/components/modals/EditEmployeeModal.jsx
import React from "react";
// import { Modal } from "../../components/ui/modal";
// import Label from "../../components/form/Label";
// import Input from "../../components/form/input/InputField";
// import Button from "../../components/ui/dropdown/button/Button";
import { Modal } from "../../../components/ui/modal";
import Label from "../../../components/form/Label";
// import Input from "../../../components/form/input/FileInput";
import Button from "../../../components/ui/dropdown/button/Button";
import Input from "../../../components/form/input/InputField";

export default function EditEmployee({ isOpen, onClose, onSave }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[700px] m-4">
      <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Edit Personal Information
          </h4>
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
            <div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <div>
                  <Label>father name</Label>
                  <Input type="text" placeholder="John Doe" />
                </div>

                <div>
                  <Label>father name</Label>
                  <Input type="text" placeholder="John Doe" />
                </div>

                <div>
                  <Label>mother name</Label>
                  <Input type="text" placeholder="John Doe" />
                </div>

                <div>
                  <Label>NID</Label>
                  <Input type="text" placeholder="4524457" />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <Label>date of Birth</Label>
                  <Input type="date" />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <Label>Local Address</Label>
                  <Input type="text" placeholder="Enter your address" />
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <Label>Permanent address</Label>
                  <Input type="text" placeholder="Enter your address" />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <Label>last education</Label>
                  <Input type="text" placeholder="Enter your education" />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <Label>Gender</Label>
                  <select
                    className="w-full rounded-md border border-gray-300 bg-white p-3 text-sm text-gray-700 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <Label>blood group</Label>
                  <Input type="text" placeholder={"o+"} />
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

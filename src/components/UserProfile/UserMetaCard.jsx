import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";

export default function UserMetaCard() {
    const { isOpen, openModal, closeModal } = useModal();

    const handleSave = (e) => {
        e.preventDefault();
        console.log("Saving changes...");
        closeModal();
    };

    return (
        <>
            {/* Profile Card */}
            <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
                <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                    {/* Profile Info */}
                    <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
                        {/* Avatar */}
                        <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
                            <img src="/images/user/owner.jpg" alt="user" />
                        </div>

                        {/* Name + Role */}
                        <div className="order-3 xl:order-2">
                            <h4 className="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
                                Musharof Chowdhury
                            </h4>
                            <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Team Manager
                                </p>
                                <div className="hidden h-3.5 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Arizona, United States
                                </p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center order-2 gap-2 grow xl:order-3 xl:justify-end">
                            <a
                                href="https://www.facebook.com/PimjoHQ"
                                target="_blank"
                                rel="noopener"
                                className="social-btn"
                            >
                                FB
                            </a>
                            <a
                                href="https://x.com/PimjoHQ"
                                target="_blank"
                                rel="noopener"
                                className="social-btn"
                            >
                                X
                            </a>
                            <a
                                href="https://www.linkedin.com/company/pimjo"
                                target="_blank"
                                rel="noopener"
                                className="social-btn"
                            >
                                In
                            </a>
                            <a
                                href="https://instagram.com/PimjoHQ"
                                target="_blank"
                                rel="noopener"
                                className="social-btn"
                            >
                                IG
                            </a>
                        </div>
                    </div>

                    {/* Edit Button */}
                    <button
                        onClick={openModal}
                        className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
                    >
                        ✏ Edit
                    </button>
                </div>
            </div>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
                <div className="relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                    <div className="px-2 pr-14">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Edit Personal Information
                        </h4>
                        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                            Update your details to keep your profile up-to-date.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="flex flex-col" onSubmit={handleSave}>
                        <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
                            {/* Social Links */}
                            <div>
                                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                                    Social Links
                                </h5>
                                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                                    <div>
                                        <Label>Facebook</Label>
                                        <Input type="text" defaultValue="https://www.facebook.com/PimjoHQ" />
                                    </div>
                                    <div>
                                        <Label>X.com</Label>
                                        <Input type="text" defaultValue="https://x.com/PimjoHQ" />
                                    </div>
                                    <div>
                                        <Label>Linkedin</Label>
                                        <Input type="text" defaultValue="https://www.linkedin.com/company/pimjo" />
                                    </div>
                                    <div>
                                        <Label>Instagram</Label>
                                        <Input type="text" defaultValue="https://instagram.com/PimjoHQ" />
                                    </div>
                                </div>
                            </div>

                            {/* Personal Info */}
                            <div className="mt-7">
                                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                                    Personal Information
                                </h5>
                                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                                    <div>
                                        <Label>First Name</Label>
                                        <Input type="text" defaultValue="Musharof" />
                                    </div>
                                    <div>
                                        <Label>Last Name</Label>
                                        <Input type="text" defaultValue="Chowdhury" />
                                    </div>
                                    <div>
                                        <Label>Email Address</Label>
                                        <Input type="email" defaultValue="randomuser@pimjo.com" />
                                    </div>
                                    <div>
                                        <Label>Phone</Label>
                                        <Input type="text" defaultValue="+09 363 398 46" />
                                    </div>
                                    <div className="col-span-2">
                                        <Label>Bio</Label>
                                        <Input type="text" defaultValue="Team Manager" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                            <Button size="sm" variant="outline" onClick={closeModal}>
                                Close
                            </Button>
                            <Button size="sm" type="submit">
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
}

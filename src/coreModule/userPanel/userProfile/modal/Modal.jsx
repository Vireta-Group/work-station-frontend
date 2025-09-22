import Button from "../../../../components/ui/button/Button";
import Input from "../../../../components/form/input/InputField";
import Label from "../../../../components/form/Label";
import { Modal } from "../../../../components/ui/modal/index";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../../features/updateProfile/updateProfileSlice";
// import { user } from "../../../../features/user/userSlice.js";
import { z } from "zod";
import LoadingSpinner from "../../../../components/ui/loading/LoadingSpinner";

const profileSchema = z.object({
  email: z.string().email("Invalid email address"),
  last_edu: z.string().min(1, "Last education is required"),
  full_address: z.string().min(1, "Address is required"),
  bkash: z.preprocess(
    (val) => val?.toString(),
    z
      .string()
      .regex(/^\d{10,14}$/, "Invalid BKASH number")
      .optional()
      .nullable()
  ),
  mobile: z
    .string()
    .regex(/^\d{10,14}$/, "Invalid phone number")
    .optional()
    .nullable(),
});

function ModalCom({ isOpen, closeModal, handleSave }) {
  const userInfo = useSelector((data) => data.user).user;
  const [userData, setuserData] = useState({
    email: userInfo?.email,
    last_edu: userInfo?.last_edu,
    full_address: userInfo?.full_address,
    bkash: userInfo?.bkash,
    mobile: userInfo?.mobile,
  });
  const dispatch = useDispatch();
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [profileField, setProfileField] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [errors, setErrors] = useState({});

  const { status, error, message } = useSelector((state) => state.updateUser);

  useEffect(() => {
    setuserData({
      email: userInfo?.email ?? "",
      last_edu: userInfo?.last_edu ?? "",
      full_address: userInfo?.full_address ?? "",
      bkash: userInfo?.bkash ?? "",
      mobile: userInfo?.mobile ?? "",
    });
  }, [userInfo]);

  // handlers
  const handleuserChange = (field) => (e) =>
    setuserData((prev) => ({ ...prev, [field]: e.target.value }));

  const handlePasswordChange = (field) => (e) =>
    setPasswords((prev) => ({ ...prev, [field]: e.target.value }));

  const handleProfileChange = async (e) => {
    const file = e?.target?.files?.[0] ?? null;
    if (!file) {
      setSelectedFile(null);
      setProfileField("");
      setPreviewUrl("");
      return;
    }
    setSelectedFile(file);
    setProfileField(file.name);

    const base64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
    setPreviewUrl(base64);
  };

  useEffect(() => {
    return () => {
      if (
        previewUrl &&
        typeof previewUrl === "string" &&
        previewUrl.startsWith("blob:")
      ) {
        try {
          URL.revokeObjectURL(previewUrl);
        } catch (e) {
          /* ignore */
        }
      }
    };
  }, [previewUrl]);
  // console.log(user);
  const onSave = async (e) => {
    e?.preventDefault?.();

    const result = profileSchema.safeParse(userData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const formatted = {};
      Object.keys(fieldErrors).forEach((k) => {
        if (fieldErrors[k]?.length) formatted[k] = fieldErrors[k][0];
      });
      setErrors(formatted);
      return;
    }

    try {
      dispatch(
        updateUser({
          user: {
            ...userData,
            name: userInfo?.name,
            father: userInfo?.father,
            mother: userInfo?.mother,
            nid: userInfo?.nid,
            pic: previewUrl ? previewUrl : userInfo.pic,
            dob: userInfo?.dob,
            bank_account: userInfo?.bank_account,
            bank_routing: userInfo?.bank_routing,
            bank_name: userInfo?.bank_name,
            bank_branch: userInfo?.bank_branch,
            username: userInfo?.username,
          },
          password: { ...passwords },
        })
      );
      if (typeof handleSave === "function") handleSave();
    } catch (error) {
      console.error("Update failed:", error);
    }

    // dispatch(user(""));
    if (typeof handleSave === "function") {
      handleSave();
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Personal Information
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update your details to keep your profile up-to-date.
            </p>
          </div>
          <form className="flex flex-col" onSubmit={onSave}>
            <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
              <div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div>
                    <Label>Email Address</Label>
                    <Input
                      type="text"
                      value={userData.email}
                      onChange={handleuserChange("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label>Last Education</Label>
                    <Input
                      type="text"
                      value={userData.last_edu}
                      onChange={handleuserChange("last_edu")}
                    />
                    {errors.last_edu && (
                      <p className="text-red-500 text-sm">{errors.last_edu}</p>
                    )}
                  </div>
                  <div>
                    <Label>Address</Label>
                    <Input
                      type="text"
                      value={userData.full_address}
                      onChange={handleuserChange("full_address")}
                    />
                    {errors.full_address && (
                      <p className="text-red-500 text-sm">
                        {errors.full_address}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label>BKASH Number</Label>
                    <Input
                      type="number"
                      value={userData.bkash}
                      onChange={handleuserChange("bkash")}
                    />
                    {errors.bkash && (
                      <p className="text-red-500 text-sm">{errors.bkash}</p>
                    )}
                  </div>

                  <div>
                    <Label>Phone Number</Label>
                    <Input
                      type="number"
                      value={userData.mobile}
                      onChange={handleuserChange("mobile")}
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-sm">{errors.mobile}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Change Password
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label>Old Password</Label>
                    <Input
                      type="password"
                      value={passwords.oldPassword}
                      onChange={handlePasswordChange("oldPassword")}
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>New Password</Label>
                    <Input
                      type="password"
                      value={passwords.newPassword}
                      onChange={handlePasswordChange("newPassword")}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Change Profile Picture
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label>New Profile Image</Label>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleProfileChange}
                    />
                    <div className="preview mt-4">
                      {previewUrl ? (
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="w-28 h-28 object-cover rounded-full"
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm" onClick={onSave}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
      {/* Loading Spinner */}
      <LoadingSpinner open={status === "loading"} />
      {/* Success/Error Message */}
      {/* {status === "succeeded" && <p>{message || "Profile updated!"}</p>}
      {status === "failed" && <p>{error?.toString()}</p>} */}
    </>
  );
}

export default ModalCom;

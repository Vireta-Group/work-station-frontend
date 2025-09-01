import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
// import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";
// import Button from "../ui/button/Button";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { GoEyeClosed } from "react-icons/go";
import Button from "../ui/dropdown/button/Button";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice.js";

export default function LogInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const value = useSelector((state) => state.auth);
  const navigate = useNavigate();

  function changeHanlder(e) {
    setLoginInfo((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  }

  function login(e) {
    e.preventDefault();
    dispatch(loginUser(loginInfo));
  }

  useEffect(() => {
    if (value.isAuthenticated) {
      navigate("/");
    }
  }, [value.isAuthenticated, navigate]);

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full max-w-md pt-10 mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 gap-2"
        >
          <FaCircleChevronLeft className="size-5" />
          Back to dashboard
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Log In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your user name and password to log in!
            </p>
          </div>
          <div>
            <form>
              <div className="space-y-6">
                <div>
                  <Label>
                    User Name <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input
                    placeholder="mahbub007"
                    onChange={changeHanlder}
                    name="username"
                    value={loginInfo.username}
                  />
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      value={loginInfo.password}
                      onChange={changeHanlder}
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <IoEyeOutline className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <GoEyeClosed className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                      Keep me logged in
                    </span>
                  </div>
                  <a className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400">
                    Forgot password?
                  </a>
                </div>
                <div>
                  <Button className="w-full" size="sm" onClick={login}>
                    Log In
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

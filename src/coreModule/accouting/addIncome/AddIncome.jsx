import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addIncome,
  selectAddIncomeError,
  selectAddIncomeStatus,
} from "../../../features/addIncome/addIncomeSlice";
import ComponentCard from "../../../components/common/ComponentCard";
import Label from "../../../components/form/Label";
import Input from "../../../components/form/input/InputField";
import { z } from "zod";
import LoadingSpinner from "../../../components/ui/loading/LoadingSpinner";
import PopupMessage from "../../../components/ui/PopupMessage/PopupMessage";

// ✅ Step 1: Zod schema define
const incomeSchema = z.object({
  cat_id: z.string().min(1, { message: "Category ID is required" }),
  perpose: z
    .string()
    .min(1, { message: "Purpose must be at least 3 characters" }),
  amounts: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Amount must be a positive number",
  }),
  dates: z.string().min(1, { message: "Date is required" }),
});

function AddIncome() {
  const [state, setState] = React.useState({
    cat_id: "",
    perpose: "",
    amounts: "",
    dates: "",
  });
  const dispatch = useDispatch();
  const incomes = useSelector((store) => store.addIncome.incomes);
  const status = useSelector(selectAddIncomeStatus);
  const error = useSelector(selectAddIncomeError);

  // ✅ success/error message state
  const [popup, setPopup] = useState({ open: false, type: "", message: "" });

  const [validationErrors, setValidationErrors] = useState({});
  // const { error, status } = useSelector(selectAddIncomeError);

  function changeHandler(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Step 2️⃣ Validate with Zod
    const result = incomeSchema.safeParse(state);

    if (!result.success) {
      // Extract field-wise error messages
      const formattedErrors = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) formattedErrors[err.path[0]] = err.message;
      });
      setValidationErrors(formattedErrors);
      return;
    }

    // ✅ If validation passes
    setValidationErrors({});
    dispatch(addIncome(state));
  }

  //Popup sho Logic
  useEffect(() => {
    if (status === "succeeded")
      setPopup({
        open: true,
        type: "success",
        message: "Income added successfully!",
      });
    setState({
      cat_id: "",
      perpose: "",
      amounts: "",
      dates: "",
    });

    if (status === "failed") {
      setPopup({
        open: true,
        type: "error",
        message: error?.message || "Failed to add income!",
      });
    }
  }, [status, error]);

  return (
    // <form>
    //   <input
    //     type="text"
    //     placeholder="cat id"
    //     value={state.cat_id}
    //     onChange={changeHandler}
    //     name="cat_id"
    //   />
    //   <input
    //     type="number"
    //     placeholder="amount"
    //     value={state.amounts}
    //     onChange={changeHandler}
    //     name="amounts"
    //   />
    //   <input
    //     type="date"
    //     placeholder="date"
    //     value={state.dates}
    //     onChange={changeHandler}
    //     name="dates"
    //   />
    //   <input
    //     type="text"
    //     placeholder="purpose"
    //     value={state.perpose}
    //     onChange={changeHandler}
    //     name="perpose"
    //   />
    //   <button type="submit" onClick={handleSubmit}>
    //     Submit
    //   </button>
    // </form>

    <>
      <div className="p-6 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors space-y-6">
        {/* Form Card */}
        <ComponentCard title="Add Income">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Category ID</Label>
              <Input
                type="text"
                placeholder="Enter category ID"
                name="cat_id"
                value={state.cat_id}
                onChange={changeHandler}
              />
              {validationErrors["cat_id"] && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors["cat_id"]}
                </p>
              )}
            </div>

            <div>
              <Label>Amount</Label>
              <Input
                type="number"
                placeholder="Enter amount"
                name="amounts"
                value={state.amounts}
                onChange={changeHandler}
              />
              {validationErrors["amounts"] && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors["amounts"]}
                </p>
              )}
            </div>

            <div>
              <Label>Date</Label>
              <Input
                type="date"
                name="dates"
                value={state.dates}
                onChange={changeHandler}
              />
              {validationErrors["dates"] && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors["dates"]}
                </p>
              )}
            </div>

            <div>
              <Label>Purpose</Label>
              <Input
                type="text"
                placeholder="Enter purpose"
                name="perpose"
                value={state.perpose}
                onChange={changeHandler}
              />
              {validationErrors["perpose"] && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors["perpose"]}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition"
            >
              Submit
            </button>
            {error && (
              <p className="text-red-500 text-sm mt-3">
                {error.message || "Something went wrong!"}
              </p>
            )}
          </form>
        </ComponentCard>
      </div>
      <LoadingSpinner open={status === "loading"} />

      {/*  Popup */}
      <PopupMessage
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={() => setPopup({ open: false, type: "", message: "" })}
      />
    </>
  );
}

export default AddIncome;

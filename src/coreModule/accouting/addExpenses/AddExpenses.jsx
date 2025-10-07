// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addExpense } from "../../../features/addExpenes/addExpenesSlice";

// function AddExpenes() {
//   const [state, setState] = React.useState({
//     cat_id: "",
//     perpose: "",
//     amounts: "",
//     dates: "",
//   });
//   const dispatch = useDispatch();

//   function changeHandler(e) {
//     setState({ ...state, [e.target.name]: e.target.value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch(addExpense(state));
//   }

//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="cat id"
//         value={state.cat_id}
//         onChange={changeHandler}
//         name="cat_id"
//       />
//       <input
//         type="number"
//         placeholder="amount"
//         value={state.amounts}
//         onChange={changeHandler}
//         name="amounts"
//       />
//       <input
//         type="date"
//         placeholder="date"
//         value={state.dates}
//         onChange={changeHandler}
//         name="dates"
//       />
//       <input
//         type="text"
//         placeholder="purpose"
//         value={state.perpose}
//         onChange={changeHandler}
//         name="perpose"
//       />
//       <button type="submit" onClick={handleSubmit}>
//         Submit
//       </button>
//     </form>
//   );
// }

// export default AddExpenes;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpense,
  selectAddExpenseStatus,
  selectAddExpenseError,
} from "../../../features/addExpenes/addExpenesSlice";
import ComponentCard from "../../../components/common/ComponentCard";
import Label from "../../../components/form/Label";
import Input from "../../../components/form/input/InputField";
import { z } from "zod";
import LoadingSpinner from "../../../components/ui/loading/LoadingSpinner";
import PopupMessage from "../../../components/ui/PopupMessage/PopupMessage";

//  Step 1: Zod schema
const expenseSchema = z.object({
  cat_id: z.string().min(1, { message: "Category ID is required" }),
  perpose: z.string().min(1, { message: "Purpose is required" }),
  amounts: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Amount must be a positive number",
  }),
  dates: z.string().min(1, { message: "Date is required" }),
});

function AddExpenses() {
  const [state, setState] = React.useState({
    cat_id: "",
    perpose: "",
    amounts: "",
    dates: "",
  });
  const dispatch = useDispatch();
  const expenses = useSelector((store) => store.addExpense.expenses);
  const status = useSelector(selectAddExpenseStatus);
  const error = useSelector(selectAddExpenseError);

  const [validationErrors, setValidationErrors] = useState({});
  const [popup, setPopup] = useState({ open: false, type: "", message: "" });

  function changeHandler(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const result = expenseSchema.safeParse(state);
    if (!result.success) {
      const formattedErrors = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) formattedErrors[err.path[0]] = err.message;
      });
      setValidationErrors(formattedErrors);
      return;
    }

    setValidationErrors({});
    dispatch(addExpense(state));
  }

  // ✅ Popup show logic
  useEffect(() => {
    if (status === "succeeded") {
      setPopup({
        open: true,
        type: "success",
        message: "Expense added successfully!",
      });
      setState({ cat_id: "", perpose: "", amounts: "", dates: "" });
    }

    if (status === "failed") {
      setPopup({
        open: true,
        type: "error",
        message: error?.message || "Failed to add expense!",
      });
    }
  }, [status, error]);

  //  Auto close popup after 2.5s
  useEffect(() => {
    if (popup.open) {
      const timer = setTimeout(() => {
        setPopup({ open: false, type: "", message: "" });
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [popup.open]);

  return (
    <>
      <div className="p-6 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors space-y-6">
        {/* Form Card */}
        <ComponentCard title="Add Expense">
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
              disabled={status === "loading"}
              className={`px-6 py-2 rounded-lg text-white transition ${
                status === "loading"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-brand-600 hover:bg-brand-700"
              }`}
            >
              {status === "loading" ? "Submitting..." : "Submit"}
            </button>
          </form>
        </ComponentCard>
      </div>

      {/* Loading Spinner */}
      <LoadingSpinner open={status === "loading"} />

      {/* Popup */}
      <PopupMessage
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={() => setPopup({ open: false, type: "", message: "" })}
      />
    </>
  );
}

export default AddExpenses;

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

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../../../features/addExpenes/addExpenesSlice";
import ComponentCard from "../../../components/common/ComponentCard";
import Label from "../../../components/form/Label";
import Input from "../../../components/form/input/InputField";

function AddExpenses() {
  const [state, setState] = React.useState({
    cat_id: "",
    perpose: "",
    amounts: "",
    dates: "",
  });
  const dispatch = useDispatch();
  const expenses = useSelector((store) => store.addExpense.expenses);

  function changeHandler(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addExpense(state));
  }

  return (
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
          </div>

          <div>
            <Label>Date</Label>
            <Input
              type="date"
              name="dates"
              value={state.dates}
              onChange={changeHandler}
            />
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
          </div>

          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition"
          >
            Submit
          </button>
        </form>
      </ComponentCard>
    </div>
  );
}

export default AddExpenses;

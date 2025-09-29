import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome } from "../../../features/addIncome/addIncomeSlice";

function AddIncome() {
  const [state, setState] = React.useState({
    cat_id: "",
    perpose: "",
    amounts: "",
    dates: "",
  });
  const dispatch = useDispatch();

  function changeHandler(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addIncome(state));
  }

  return (
    <form>
      <input
        type="text"
        placeholder="cat id"
        value={state.cat_id}
        onChange={changeHandler}
        name="cat_id"
      />
      <input
        type="number"
        placeholder="amount"
        value={state.amounts}
        onChange={changeHandler}
        name="amounts"
      />
      <input
        type="date"
        placeholder="date"
        value={state.dates}
        onChange={changeHandler}
        name="dates"
      />
      <input
        type="text"
        placeholder="purpose"
        value={state.perpose}
        onChange={changeHandler}
        name="perpose"
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default AddIncome;

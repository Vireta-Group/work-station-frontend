import React, { use } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenseReportByDates } from "../../../features/expenesReport/expenesReportSlice";

function Report() {
  const report = useSelector((state) => state.expenesReport.report);
  const expenesReportStatus = report?.expense_data ?? [];
  const incomeReportStatus = report?.income_data ?? [];
  const [formDate, setFormDate] = React.useState({
    start_date: "",
    end_date: "",
  });
  const dispatch = useDispatch();

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(report);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchExpenseReportByDates(formDate));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="date" name="start_date" onChange={handleDateChange} />
        <input type="date" name="end_date" onChange={handleDateChange} />
        <button type="submit">Fetch Report</button>
      </form>

      <div>
        <table>
          <caption>Expense Report</caption>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenesReportStatus.length > 0 ? (
              expenesReportStatus.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.expensePerpose}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No expenses found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div>
        <table>
          <caption>Earning Report</caption>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {incomeReportStatus.length > 0 ? (
              incomeReportStatus.map((income, index) => (
                <tr key={index}>
                  <td>{income.incomePerpose}</td>
                  <td>{income.amount}</td>
                  <td>{income.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No income found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Report;

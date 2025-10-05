// import React, { use } from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchExpenseReportByDates } from "../../../features/expenesReport/expenesReportSlice";

// function Report() {
//   const report = useSelector((state) => state.expenesReport.report);
//   const expenesReportStatus = report?.expense_data ?? [];
//   const incomeReportStatus = report?.income_data ?? [];
//   const [formDate, setFormDate] = React.useState({
//     start_date: "",
//     end_date: "",
//   });
//   const dispatch = useDispatch();

//   const handleDateChange = (e) => {
//     const { name, value } = e.target;
//     setFormDate((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(fetchExpenseReportByDates(formDate));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="date" name="start_date" onChange={handleDateChange} />
//         <input type="date" name="end_date" onChange={handleDateChange} />
//         <button type="submit">Fetch Report</button>
//       </form>

//       <div>
//         <table>
//           <caption>Expense Report</caption>
//           <thead>
//             <tr>
//               <th>Purpose</th>
//               <th>Amount</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {expenesReportStatus.length > 0 ? (
//               expenesReportStatus.map((expense, index) => (
//                 <tr key={index}>
//                   <td>{expense.expensePerpose}</td>
//                   <td>{expense.amount}</td>
//                   <td>{expense.date}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3">No expenses found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       <div>
//         <table>
//           <caption>Earning Report</caption>
//           <thead>
//             <tr>
//               <th>Purpose</th>
//               <th>Amount</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {incomeReportStatus.length > 0 ? (
//               incomeReportStatus.map((income, index) => (
//                 <tr key={index}>
//                   <td>{income.incomePerpose}</td>
//                   <td>{income.amount}</td>
//                   <td>{income.date}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3">No income found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Report;



import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenseReportByDates } from "../../../features/expenesReport/expenesReportSlice";
import ComponentCard from "../../../components/common/ComponentCard";
import Label from "../../../components/form/Label";
import Input from "../../../components/form/input/InputField";

export default function Report() {
  const dispatch = useDispatch();
  const report = useSelector((state) => state.expenesReport.report);
  const expenesReportStatus = report?.expense_data ?? [];
  const incomeReportStatus = report?.income_data ?? [];

  const [formDate, setFormDate] = React.useState({
    start_date: "",
    end_date: "",
  });

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormDate((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchExpenseReportByDates(formDate));
  };

  return (
    <div className="p-6 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors space-y-6">

      {/* Filter Form */}
      <ComponentCard title="Filter Report by Date">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <Label>Start Date</Label>
            <Input
              type="date"
              name="start_date"
              value={formDate.start_date}
              onChange={handleDateChange}
            />
          </div>
          <div className="flex-1">
            <Label>End Date</Label>
            <Input
              type="date"
              name="end_date"
              value={formDate.end_date}
              onChange={handleDateChange}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Fetch Report
          </button>
        </form>
      </ComponentCard>

      {/* Expense Report */}
      <ComponentCard title="Expense Report">
        {expenesReportStatus.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="border px-4 py-2 dark:border-gray-600">Purpose</th>
                  <th className="border px-4 py-2 dark:border-gray-600">Amount</th>
                  <th className="border px-4 py-2 dark:border-gray-600">Date</th>
                </tr>
              </thead>
              <tbody>
                {expenesReportStatus.map((expense, index) => (
                  <tr
                    key={index}
                    className="odd:bg-gray-50 even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700"
                  >
                    <td className="border px-4 py-2 dark:border-gray-600">{expense.expensePerpose}</td>
                    <td className="border px-4 py-2 dark:border-gray-600">{expense.amount}</td>
                    <td className="border px-4 py-2 dark:border-gray-600">{expense.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center">No expenses found</p>
        )}
      </ComponentCard>

      {/* Income Report */}
      <ComponentCard title="Income Report">
        {incomeReportStatus.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="border px-4 py-2 dark:border-gray-600">Purpose</th>
                  <th className="border px-4 py-2 dark:border-gray-600">Amount</th>
                  <th className="border px-4 py-2 dark:border-gray-600">Date</th>
                </tr>
              </thead>
              <tbody>
                {incomeReportStatus.map((income, index) => (
                  <tr
                    key={index}
                    className="odd:bg-gray-50 even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700"
                  >
                    <td className="border px-4 py-2 dark:border-gray-600">{income.incomePerpose}</td>
                    <td className="border px-4 py-2 dark:border-gray-600">{income.amount}</td>
                    <td className="border px-4 py-2 dark:border-gray-600">{income.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center">No incomes found</p>
        )}
      </ComponentCard>

    </div>
  );
}

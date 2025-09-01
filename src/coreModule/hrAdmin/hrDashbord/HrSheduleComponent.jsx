//MAHBUB.....................................

import employeeSchedules from "./hrData"

const HrSheduleComponent = () => {
    console.log(employeeSchedules)
  return (
    <div className="overflow-x-auto">
       <table className="w-full text-left  rounded-lg overflow-hidden shadow-lg border-2 border-[red]">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <tr>
                <th className="p-4">Employee</th>
                <th className="p-4">Department</th>
                <th className="p-4">Position</th>
                <th className="p-4">Shift</th>
                <th className="p-4 pl-8">Status</th>
            
             
            </tr>
        </thead>
        <tbody className="bg-white dark:bg-[#171f2f]">
            {
                employeeSchedules.map((data)=>(
                 <tr key={data.id}   className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900" >

                   <td className="p-4 text-gray-800 dark:text-gray-200">{data.name}</td>
                   <td className="p-4 text-gray-800 dark:text-gray-200">{data.department}</td>
                   <td className="p-4 text-gray-800 dark:text-gray-200">{data.position}</td>
                   <td className="p-4 text-gray-800 dark:text-gray-200">{data.schedule.shift}</td>
                   <td className={`p-4 text-gray-800 dark:text-gray-200 `}><span className={`${data.status === "In Job" ? "bg-green-500/40 flex  justify-center !w-[100px] px-4 py-1 rounded-[15px]" : "bg-red-500/40 flex  justify-center !w-[100px]  px-4 py-1 rounded-[15px]"}`}>{data.status}</span></td>
                 </tr>
                ))
            }
         
        </tbody>
       </table>
    </div>
  )
}

export default HrSheduleComponent
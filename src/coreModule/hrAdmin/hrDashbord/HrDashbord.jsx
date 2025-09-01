// MAHBUB.................................

import HrDashboardChart from './HrDashboardChart';
import employeeSchedules from './hrData'
import HrSheduleComponent from './HrSheduleComponent';

// icons...............
import { FaUser, FaUserCheck } from "react-icons/fa";
import { FaUserXmark } from "react-icons/fa6";

const HrDashbord = () => {

  //all team total earning functionality here.....................

    const earnings = [
  { month: "March, 2025", totalEarning: 1200 },
  { month: "April, 2025", totalEarning: 950 },
  { month: "May, 2025", totalEarning: 1430 },
  { month: "June, 2025", totalEarning: 1100 },
  { month: "July, 2025", totalEarning: 1500 },
  { month: "August, 2025", totalEarning:1750 },
 
];

 const highestEarningMonth = earnings.reduce((accu , current)=>(
 
       accu.totalEarning >= current.totalEarning ? accu : current
 ))

const lastMonth = earnings[earnings.length -1]


  //all team total earning functionality and here.....................




//How much employee resigned....
  const resignedEmploye = employeeSchedules.filter((employes)=>(
    employes.status === "Resigned"
  )).length;

  // how much empolyee now in the job.....................

  const totalEmployes = employeeSchedules.length;
  const employesNowInJob = totalEmployes - resignedEmploye;
 






  return (

    <div className='w-full flex flex-col gap-12 min-h-[100vh] p-[2%] overflow-hidden'>
     
    <div className='cards flex gap-5 flex-wrap'>

       <div className="hrCard  w-[16rem] p-4 px-8 flex flex-col gap-2 rounded-[10px] shadow-md border border-gray-200 dark:border-gray-700 ">
        <p className='dark:text-white'>Previous Month Earning...</p>
        <b className='text-red-500 text-2xl'>$ {lastMonth.totalEarning} </b>
        <p className='dark:text-white'>Top Earning : <span className='text-yellow-500'>{highestEarningMonth.month}</span></p>
     </div>


      <div className="hrCard  w-[16rem] p-4 px-8 flex flex-col gap-2 rounded-[10px] shadow-md border border-gray-200 dark:border-gray-700 ">
        <p className='dark:text-white'>Resigned Employees...</p>
        <b className='text-yellow-500 text-2xl flex gap-2 items-center'> <FaUserXmark/> {resignedEmploye} </b>
        <p className='dark:text-white'>Employees</p>
     </div>


     <div className="hrCard  w-[16rem] p-4 px-8 flex flex-col gap-2 rounded-[10px] shadow-md border border-gray-200 dark:border-gray-700 ">
        <p className='dark:text-white'>Total Employees Now...</p>
        <b className='text-green-600 text-2xl flex items-center gap-2 '><FaUserCheck/> {employesNowInJob} </b>
        <p className='dark:text-white'>Employees</p>
     </div>


    </div>
     {/* hr card end ................... */}


     <div className="hrShedule">
        <h1 className='p-2 text-gray-800 text-2xl dark:text-white'>HR Shedule ...</h1>
      <HrSheduleComponent/>

     </div>
     {/* HR shedule end here.............................. */}

     <div>
      
        <u className='flex justify-center text-2xl dark:text-white p-1'>Previous Income Data</u>
        <HrDashboardChart/>
     </div>


    </div>
  )
}

export default HrDashbord

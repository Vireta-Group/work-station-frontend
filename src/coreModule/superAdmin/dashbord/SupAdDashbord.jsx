// mahbub...............................................


import superAdminData from "./superAdminData";

import { AiFillProject } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import {  FaUserCheck } from "react-icons/fa";
import ActiveTask from "./superAdminTables/ActiveTask";
import TodoTask from "./superAdminTables/todoTask";
import AttendancePieChart from "./chart/AttendancePieChart";

const SupAdDashbord = () => {
  const card = superAdminData[0].cards

  const icons = [<FaUsers/>, <FaUserCheck/>, <AiFillProject/>]
  const colors =["red", "yellow", "skyBlue"]
  
  return (
    <div className="w-full flex flex-col gap-10 min-h-[100vh]" >

{/* cards start here............................ */}
        <div className="cards  w-full flex max-md:justify-center max-md:gap-5 gap-10 flex-wrap my-6">
         {
          card.map((cardData, index)=>(
            <div key={cardData.id} className=" flex  justify-between  items-center w-[14rem] h-[8rem] rounded-[10px] shadow-md border border-gray-200 dark:border-gray-700 p-4 dark:bg-[#171f2f]">
            
            <div className="flex flex-col gap-5">
               <h1 className="text-[1.2rem] dark:text-gray-500">{cardData.title}</h1>
               <b className={`text-2xl `} style={{color: colors[index]}}>{cardData.value}</b>
            </div>
         
              <p className="text-3xl dark:text-white">{icons[index]}</p>
             
            </div>
          ))
         }  
        </div> {/* cards end here............................ */}




       <main className="flex flex-wrap gap-5 justify-between">
        {/* active task project start here......................................... */}
        <div className="flex flex-col gap-10 lg:w-[65%]">
         <div className="activeTaskTable">
           <ActiveTask/>

         </div> {/* active task project end here......................................... */}



           <div className="todoTaskTable ">
            <TodoTask/>
           </div>
        </div>
       

           <div className=" lg:w-[30%] mt-15">
            <AttendancePieChart/>
           </div>

         </main>
       
    </div>
  )
}

export default SupAdDashbord;
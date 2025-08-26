
import Badge from "../ui/badge/Badge";
import { IoIosCloudDone } from "react-icons/io";
import { BsBox } from "react-icons/bs";
import { MdOutlineUpcoming } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import Table from "../table/Table";
import Calendar from "../calender/Calendar";
export default function EcommerceMetrics() {
  return (
    <div className="flex gap-5 flex-wrap justify-around  dark:bg-[#101828] w-full min-h-[100vh] p-5 px-[4%] overflow-x-scroll">

      

         <div className="cards flex  gap-10 flex-wrap my-10  w-full">

            <div className="card flex justify-between items-center gap-10  rounded-[10px] shadow-md border border-gray-200 dark:border-gray-700 w-fit p-4  dark:bg-[#171f2f]">
                <div className="flex  flex-col gap-5">
                    <h2 className="text-[1.2rem] dark:text-gray-500">Complete Task</h2>
                    <b className="text-2xl dark:text-white">12</b>
                </div>
                <div>
                    <IoIosCloudDone className="text-3xl dark:text-white " />
                </div>
            </div>

                <div className="card flex justify-between items-center gap-10  rounded-[10px] shadow-md border border-gray-200 dark:border-gray-700 w-fit p-4  dark:bg-[#171f2f]">
                <div className="flex  flex-col gap-5">
                    <h2 className="text-[1.2rem] dark:text-gray-500">Ongoing Task</h2>
                    <b className="text-2xl dark:text-white">12</b>
                </div>
                <div>
                    <BsBox className="text-3xl dark:text-white " />
                </div>
            </div>


                <div className="card flex justify-between items-center gap-10  rounded-[10px] shadow-md border border-gray-200 dark:border-gray-700 w-fit p-4  dark:bg-[#171f2f]">
                <div className="flex  flex-col gap-5">
                    <h2 className="text-[1.2rem] dark:text-gray-500">UpComing Task</h2>
                    <b className="text-2xl dark:text-white">12</b>
                </div>
                <div>
                    <MdOutlineUpcoming className="text-3xl dark:text-white " />
                </div>   
            </div>




             <div className="card flex justify-between items-center gap-10  rounded-[10px] shadow-md border border-gray-200 dark:border-gray-700 w-fit p-4  dark:bg-[#171f2f]">
                <div className="flex  flex-col gap-5">
                    <h2 className="text-[1.2rem] dark:text-gray-500">Total Task</h2>
                    <b className="text-2xl dark:text-white">$ 1200</b>
                </div>
                <div>
                    <GiReceiveMoney className="text-3xl dark:text-white " />
                </div>   
            </div>



            

       </div>
       {/* card end here............................................... */}


        <div className="leftSide flex w-full justify-between flex-wrap gap-10 ">

         
         <div className="table w-[70%]  overflow-x-scroll">
            <Table/>
         </div>

     

      <div className="calender h-fit ">
        <Calendar/>
      </div>

       </div> 
      {/* left side */}


    </div>
  );
}

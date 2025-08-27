
import Badge from "../ui/badge/Badge";
// icon mapping
import { IoIosCloudDone } from "react-icons/io";
import { BsBox } from "react-icons/bs";
import { MdOutlineUpcoming } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

import Table from "../table/Table";
import Calendar from "../calender/Calendar";
import Card from "../card/Card";
export default function EcommerceMetrics() {
      const cardData = [
    { title: "Complete Task", value: "12", Icon: IoIosCloudDone },
    { title: "Ongoing Task", value: "5", Icon: BsBox },
    { title: "UpComing Task", value: "3", Icon: MdOutlineUpcoming },
    { title: "Total Earned", value: "$1200", Icon: GiReceiveMoney },
    {title: "Web developer", value: "$Junior", Icon: GiReceiveMoney}
  ];
  return (
    <div className="flex gap-5 flex-wrap justify-around  dark:bg-[#101828] w-full min-h-[100vh] p-5 pb-20 px-[4%] overflow-x-scroll">

      
          <Card cardData={cardData} />
       {/* card end here............................................... */}


        <div className="leftSide flex w-full justify-between flex-wrap gap-10 ">

         
         <div className="table w-[65%] max-md:w-full overflow-x-scroll">
            <Table/>
         </div>

     

      <div className="calender h-fit w-[30%] max-md:w-full ">
        <Calendar/>
      </div>

       </div> 
      {/* left side */}


    </div>
  );
}

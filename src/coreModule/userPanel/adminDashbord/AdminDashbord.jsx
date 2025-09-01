// MAHBUB❤️❤️........................


import AdminDashbordTable from '../../../components/table/AdminDashbordTable'
import Card from '../../../components/card/Card'
import Calendar from '../../../components/calender/Calendar'

// icon mapping
import { IoIosCloudDone } from "react-icons/io";
import { BsBox } from "react-icons/bs";
import { MdOutlineUpcoming } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";

const AdminDashbord = () => {

         const cardData = [
        { title: "Complete Task", value: "12", Icon: IoIosCloudDone },
        { title: "Ongoing Task", value: "5", Icon: BsBox },
        { title: "Expire Task", value: "3", Icon: MdOutlineUpcoming },
        { title: "Total Earned", value: "$1200", Icon: GiReceiveMoney },
        {title: "Web developer", value: "Junior", Icon: MdManageAccounts}
      ];


  return (
    <div className='bg-white dark:bg-gray-900 w-full min-h-[100vh] p-5'>

   <div>
     <Card cardData={cardData} />
   </div>

   <div className='flex flex-wrap justify-around gap-5 w-full'>
     <div className='w-[70%] max-md:w-full' ><AdminDashbordTable /></div>
     <div className='w-[25%] max-md:w-full'><Calendar/></div>
   </div>
   
    </div>
  )
}

export default AdminDashbord


// MAHBUB❤️❤️❤️❤️❤️..........................

import { use, useEffect } from "react";
import EcommerceMetrics from "../components/ecommerce/EcommerceMetrics";
import { useDispatch, useSelector } from "react-redux";
import { workDistribution } from "../features/workDistribution/workDistributionSlice.js";

const HomeDashbord = () => {
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.user);
  // console.log(data);

  // console.log(data);
  // useEffect(() => {
  //   dispatch(
  //     workDistribution({
  //       work_title: "string",
  //       work_desc: "string",
  //       work_date: "2024-06-24",
  //       work_expire_date: "2024-06-24",
  //       work_emp_id: 0,
  //     })
  //   );
  // }, [dispatch]);

  return (
    <div className="dark:bg-gray-800 ">
      <EcommerceMetrics />
    </div>
  );
};

export default HomeDashbord;

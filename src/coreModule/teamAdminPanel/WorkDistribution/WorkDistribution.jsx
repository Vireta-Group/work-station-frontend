import BasicTable from "./BasicTable";
import WorkGroup from "./WorkGroup";

const WorkDistribution = () => {
  return (
    <div className="dark:bg-gray-800 ">
      <div className="mb-6">
        <WorkGroup />
      </div>
      <BasicTable />
    </div>
  );
};

export default WorkDistribution;

import CreateFlow from "./components/CreateFlow";
import TotalViews from "./components/TotalViews";
import BasicPlan from "./components/BasicPlan";

const AccountInfo = () => {
  return (
    <div className="flex gap-12">
      <CreateFlow />
      <TotalViews />
      <BasicPlan />
    </div>
  );
};

export default AccountInfo;

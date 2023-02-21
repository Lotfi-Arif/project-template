import CardLineChart from "src/components/Cards/CardLineChart";
import CardBarChart from "src/components/Cards/CardBarChart";
import CardPageVisits from "src/components/Cards/CardPageVisit";
import CardSocialTraffic from "src/components/Cards/CardSocialTraffic";
import AdminLayout from "src/layouts/Admin";

const Dashboard = () => {

  return (
    <AdminLayout>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </AdminLayout>
  );
}

Dashboard.layout = AdminLayout

export default Dashboard
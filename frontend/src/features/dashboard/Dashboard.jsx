import { initialTasks } from "./data/task";
import DashboardStats from "./components/DashboardStats";
import RecentTasks from "./components/RecentTasks";
function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-heading">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening with your tasks.</p>
        </div>
        <DashboardStats tasks={initialTasks} />
      </div>
      <RecentTasks tasks={initialTasks} />
    </div>
  );
}

export default Dashboard;

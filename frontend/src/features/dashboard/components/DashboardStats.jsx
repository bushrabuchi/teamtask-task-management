import { ListTodo, CheckCircle2, Clock3, CircleDashed } from "lucide-react";

import StatCard from "../../../components/common/StatCard/StatCard";
import "./Dashboard.scss";

function DashboardStats({ tasks }) {
  const stats = tasks.reduce(
    (result, task) => {
      result.total += 1;

      if (task.status === "Completed") {
        result.completed += 1;
      }

      if (task.status === "In Progress") {
        result.inProgress += 1;
      }

      if (task.status === "Pending") {
        result.pending += 1;
      }

      return result;
    },
    {
      total: 0,
      completed: 0,
      inProgress: 0,
      pending: 0,
    },
  );

  const cards = [
    {
      label: "Total Tasks",
      value: stats.total,
      icon: ListTodo,
    },
    {
      label: "Completed",
      value: stats.completed,
      icon: CheckCircle2,
    },
    {
      label: "In Progress",
      value: stats.inProgress,
      icon: Clock3,
    },
    {
      label: "Pending",
      value: stats.pending,
      icon: CircleDashed,
    },
  ];

  return (
    <section className="dashboard-stats">
      {cards.map((card) => (
        <StatCard key={card.label} {...card} />
      ))}
    </section>
  );
}

export default DashboardStats;

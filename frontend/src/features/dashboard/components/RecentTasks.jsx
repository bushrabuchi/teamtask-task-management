import { useState } from "react";
import { Search, Plus } from "lucide-react";

import "./RecentTask.scss";

function RecentTasks({ tasks }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      task.title.toLowerCase().includes(search) ||
      task.assignee.toLowerCase().includes(search);

    const matchesStatus =
      selectedStatus === "All" || task.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <section className="recent-tasks">
      <div className="recent-tasks-header">
        <div>
          <h2>Recent Tasks</h2>
          <p>Track and manage your team's work.</p>
        </div>

        <button type="button" className="btn btn-primary">
          <Plus size={17} />
          Create Task
        </button>
      </div>

      <div className="task-toolbar">
        <div className="task-search">
          <Search size={17} />

          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search tasks or assignees..."
            aria-label="Search tasks or assignees"
          />
        </div>

        <select
          className="form-control task-status-filter"
          value={selectedStatus}
          onChange={(event) => setSelectedStatus(event.target.value)}
          aria-label="Filter by status"
        >
          <option value="All">All statuses</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <article className="task-row" key={task.id}>
              <div className="task-details">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>

              <span className={`badge priority-${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>

              <span
                className={`badge status-${task.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {task.status}
              </span>

              <div className="task-assignee">
                <strong>{task.assignee}</strong>
                <span>Due {task.dueDate}</span>
              </div>
            </article>
          ))
        ) : (
          <div className="task-empty-state">No matching tasks found.</div>
        )}
      </div>
    </section>
  );
}

export default RecentTasks;

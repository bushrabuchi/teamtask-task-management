import {
  LayoutDashboard,
  CheckSquare,
  FolderKanban,
  Users,
  Settings,
  CircleHelp,
  ListTodo,
} from "lucide-react";

import "./Sidebar.scss";

const navigationItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "My Tasks", icon: CheckSquare },
  { label: "All Tasks", icon: ListTodo },
  { label: "Projects", icon: FolderKanban },
  { label: "Team Members", icon: Users },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">T</div>
        <span>TeamTask</span>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-section-title">WORKSPACE</p>

        <nav className="sidebar-navigation" aria-label="Main navigation">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href="#"
                className={`sidebar-link ${item.active ? "active" : ""}`}
                aria-current={item.active ? "page" : undefined}
              >
                <Icon size={19} strokeWidth={1.8} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-section sidebar-secondary">
        <p className="sidebar-section-title">PREFERENCES</p>

        <a href="#" className="sidebar-link">
          <Settings size={19} strokeWidth={1.8} />
          <span>Settings</span>
        </a>

        <a href="#" className="sidebar-link">
          <CircleHelp size={19} strokeWidth={1.8} />
          <span>Help & Support</span>
        </a>
      </div>

      <div className="sidebar-user">
        <div className="sidebar-avatar">B</div>

        <div className="sidebar-user-info">
          <strong>Bushra</strong>
          <span>Project Admin</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

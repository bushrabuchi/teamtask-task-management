import { Search, Bell, Sun, Moon, ChevronDown } from "lucide-react";
import "./Header.scss";
function Header({ theme, onToggleTheme }) {
  return (
    <header className="app-header">
      <div className="header-search">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search TeamTask"
        />
        <kbd>Ctrl</kbd> + <kbd>K</kbd>
      </div>
      <div className="header-actions">
        <button
          type="button"
          className="header-icon-button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <button
          type="button"
          className="header-icon-button"
          aria-label="Notifications"
        >
          <Bell size={18} />
          <span className="notification-dot" aria-hidden="true"></span>
        </button>
        <div className="header-divider" />
        <button type="button" className="header-profile">
          <div className="header-avatar">B</div>
          <span>Bushra</span>
          <ChevronDown size={16} />
        </button>
      </div>
    </header>
  );
}
export default Header;

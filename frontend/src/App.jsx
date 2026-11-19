import { useEffect, useState } from "react";

import Header from "./components/layout/Header/Header";
import Sidebar from "./components/layout/Sidebar/Sidebar";
// Main branch note: Dashboard import is pending the feature integration.

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("teamtask-theme") || "light";
  });
  useEffect(() => {
    localStorage.setItem("teamtask-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="app-layout">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <div className="app-main">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isMobile={isMobile}
        />
        <main className="main-content">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
export default App;

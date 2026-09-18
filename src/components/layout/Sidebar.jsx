import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: "▦" },
    { name: "Inbox", path: "/inbox", icon: "▢" },
    { name: "Automation", path: "/automation", icon: "⚡" },
    { name: "Templates", path: "/templates", icon: "▤" },
    { name: "Contacts", path: "/contacts", icon: "♙" },
    { name: "Analytics", path: "/analytics", icon: "▥" },
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">W</div>

        <div>
          <h2>WAFlow</h2>
          <span>CRM</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
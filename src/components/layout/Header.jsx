function Header() {
  return (
    <header className="header">
      <div>
        <h1>WAFlow CRM</h1>
        <p>WhatsApp Automation & Customer Management</p>
      </div>

      <div className="header-actions">
        <div className="search-box">
          <span>⌕</span>
          <input type="text" placeholder="Search..." />
        </div>

        <button className="icon-button" title="Notifications">
          ♢
        </button>

        <div className="profile">
          <div className="profile-avatar">NK</div>

          <div>
            <strong>Neha</strong>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
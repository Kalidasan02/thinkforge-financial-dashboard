const Header = () => {
  return (
    <header className="top-navbar">
      <div className="nav-left">
        <div className="user-dropdown">
          <div className="avatar-circle">AK</div>
          <span className="username">Alicia Koch</span>
          <span className="dropdown-icon">▾</span>
        </div>

        <ul className="nav-links">
          <li className="active">Home</li>
          <li>Customers</li>
          <li>Settings</li>
        </ul>
      </div>

      <div className="nav-right">
        <input type="text" placeholder="Search" />
      </div>
    </header>
  );
};

export default Header;

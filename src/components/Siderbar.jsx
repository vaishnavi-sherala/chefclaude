import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger menu for mobile */}
      <button className="hamburger-menu" onClick={toggleSidebar}>
        ☰
      </button>
      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>
        <nav>
          <ul>
            <li>
              <Link to="/container1" onClick={toggleSidebar}>Home</Link>
            </li>
            <li>
              <Link to="/container2" onClick={toggleSidebar}>About</Link>
            </li>
            <li>
              <Link to="/container3" onClick={toggleSidebar}>Services</Link>
            </li>
            <li>
              <Link to="/container4" onClick={toggleSidebar}>Contact</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

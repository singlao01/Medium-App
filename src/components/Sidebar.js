import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex">
      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleSidebar} aria-label="Close Sidebar"></div>}

      {/* Sidebar */}
      <div className={`sidebar bg-dark text-white ${isOpen ? "open" : ""}`}>
        <h3 className="text-center py-3">My App</h3>
        <ul className="list-unstyled p-2">
          <li className="my-3">
            <a href="#dashboard" className="text-white" aria-label="Dashboard">Dashboard</a>
          </li>
          <li className="my-3">
            <a href="#profile" className="text-white" aria-label="Profile">Profile</a>
          </li>
          <li className="my-3">
            <a href="#settings" className="text-white" aria-label="Settings">Settings</a>
          </li>
          <li className="my-3">
            <a href="#logout" className="text-white" aria-label="Logout">Logout</a>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className={`main-content p-4 ${isOpen ? "shifted" : ""}`}>
        <button className="btn btn-primary mb-3" onClick={toggleSidebar} aria-label={isOpen ? "Hide Sidebar" : "Show Sidebar"}>
          {isOpen ? "Hide Sidebar" : "Show Sidebar"}
        </button>
        <h1>Main Content</h1>
        
      </div>
    </div>
  );
}

export default Sidebar;

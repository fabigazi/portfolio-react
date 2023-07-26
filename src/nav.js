import { Link } from "react-router-dom";
import React, { useState } from "react";
import './nav.css';
function Nav() {
  const [selectedNavItem, setSelectedNavItem] = useState("profile");

  const handleNavItemClick = (navItem) => {
    setSelectedNavItem(navItem);
  };

  return (
    // <nav class="navbar navbar-expand-lg">
    //   <div class="collapse navbar-collapse even-spacing" id="navbarTogglerDemo03">
    //     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    //       <li class={`nav-item ${selectedNavItem === "profile" ? "active" : ""}`}>
    //         <a class="nav-link" href="#/portfolio/profile" onClick={() => handleNavItemClick("profile")}>
    //           Profile
    //         </a>
    //       </li>
    //       <li class={`nav-item ${selectedNavItem === "skills" ? "active" : ""}`}>
    //         <a class="nav-link" href="#/skills" onClick={() => handleNavItemClick("skills")}>
    //           Skills
    //         </a>
    //       </li>
    //       <li class={`nav-item ${selectedNavItem === "education" ? "active" : ""}`}>
    //         <a class="nav-link" href="#/education" onClick={() => handleNavItemClick("education")}>
    //           Education
    //         </a>
    //       </li>
    //       <li class={`nav-item ${selectedNavItem === "work-experience" ? "active" : ""}`}>
    //         <a class="nav-link" href="#/work-experience" onClick={() => handleNavItemClick("work-experience")}>
    //           Work Experience
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <nav className="nav nav-tabs mb-2 even-spacing">
      <Link className="nav-link" to="/portfolio/profile">Profile</Link>
      <Link className="nav-link" to="/portfolio/skills">Skills</Link>
      
      <Link className="nav-link" to="/education">Education</Link>
      <Link className="nav-link" to="/work-experience">Work Experience</Link>
    </nav>
  );
}
export default Nav
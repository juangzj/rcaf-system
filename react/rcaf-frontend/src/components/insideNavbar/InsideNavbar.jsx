import "react";
import "./InsideNavbar.css"
import { Link } from "react-router-dom";

function InsideNavbar() {
  return (
    <div>
      <nav className="inside-navbar">
        <div className="inside-wrapper">
          {/* Logo or title */}
          <Link to="#" className="inside-logo">RCAF</Link>
          <div className="inside-navigation-menu">
            {/* Action buttons */}
            <Link to="/" className="logout">Log out</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default InsideNavbar;

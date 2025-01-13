import "react";
import "./LeftSidebar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LeftSidebar() {

  const navigate = useNavigate();

  const toggleSidebar = () => {
    document.querySelector(".left-sidebar").classList.toggle("open");
  };

  const handleLogOut = () => {
    navigate("/");
  }



  return (
    <div>
      <button className="left-toggle-button" onClick={toggleSidebar}>
        ☰ Menu
      </button>
      <aside className="left-sidebar">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
        <button className="logout-button" onClick={handleLogOut} >Log Out</button>
      </aside>
    </div>
  );
}

export default LeftSidebar;

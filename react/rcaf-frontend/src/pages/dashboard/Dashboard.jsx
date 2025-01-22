import "react";
import "./Dashboard.css";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h1>Welcome to Dashboard</h1>
        <div className="dashboard-cards-container">
          <div className="dashboard-options-cards">
            <h2>Users</h2>
            <p className="dashboard-cards-description">
              Manage user profiles, view their activity, and control access permissions to ensure secure and efficient usage of the platform.
            </p>
            <Link to="/admin/usersDashboard">
              <button>Go</button>
            </Link>
          </div>
          <div className="dashboard-options-cards">
            <h2>RCAFs</h2>
            <p className="dashboard-cards-description">
              Access, update, and manage RCAF records efficiently. Review historical data and ensure accuracy for better decision-making.
            </p>
            <Link to="/admin/rcafs">
              <button>Go</button>
            </Link>
          </div>
          <div className="dashboard-options-cards">
            <h2>Options</h2>
            <p className="dashboard-cards-description">
              Customize your experience by updating application settings, managing notifications, and tailoring the dashboard to your preferences.
            </p>
            <Link to="/admin/options">
              <button>Go</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from 'react';
import { NavLink} from 'react-router-dom';
import './AdminPage.css'; // Import CSS file for styling




const AdminPage = () => {
  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin Dashboard</h2>
      <nav className="admin-nav">
        <ul className="admin-nav-list">
          <li className="admin-nav-item">
            <div className="dropdown">
              <span className="admin-nav-link">Voters</span>
              <div className="dropdown-content">
                <NavLink to="/PendingVotersPage" className="dropdown-item">Pending Registers</NavLink>
                <NavLink to="/ApprovedVoters" className="dropdown-item">Approved Voters</NavLink>
                <NavLink to="/RejectedVoters" className="dropdown-item">Rejected Voters</NavLink>
              </div>
            </div>
          </li>
          <li className="admin-nav-item">
            <div className="dropdown">
              <span className="admin-nav-link">Polls</span>
              <div className="dropdown-content">
                <NavLink to="/Elections" className="dropdown-item">Create Poll</NavLink>
                <NavLink to="/admin/view-polls" className="dropdown-item">View Polls</NavLink>
              </div>
            </div>
          </li>
          <li className="admin-nav-item">
            <NavLink to="/admin/results" className="admin-nav-link">Results</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminPage;

import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>Milk Management - Admin Dashboard</h1>
        <button className="logout-button">Logout</button>
      </header>
      
      <main className="dashboard-content">
        <div className="welcome-section">
          <h2>Welcome to Admin Dashboard</h2>
          <p>Manage your milk collection system</p>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

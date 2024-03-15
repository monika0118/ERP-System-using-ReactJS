// src/components/Dashboard.js
import './Dashboard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Enterprise Resource Planning System</h1> {/* Title */}
      <h2 className="dashboard-subtitle">Dashboard</h2> {/* Subtitle */}
    <div className="dashboard">
      <div className="section">
        
        <h2>Total Products</h2>
        <p>5</p>
        <Link to="/Products" className="dashboard-card">
  
          <h3 className="dashboard-card-title">Products</h3>
          <p className="dashboard-card-info">Manage Products</p>
        </Link>
      </div>
      <div className="section">
    
        <h2>Total Orders</h2>
        <p>5</p>
        <Link to="/Orders" className="dashboard-card">
          <h3 className="dashboard-card-title">Orders</h3>
          <p className="dashboard-card-info">View Orders</p>
        </Link>
      </div>
      
      <div className="section">
        
        <h2>OrderCalendar</h2>
      
        <Link to="/OrderCalendar" className="dashboard-card">
          <h3 className="dashboard-card-title">OrderCalendar</h3>
          <p className="dashboard-card-info">Manage Calendar</p>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;

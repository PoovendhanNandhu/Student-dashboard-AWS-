import React from 'react';
import './main.css'; 

const Dashboard = () => {
    return (
        <div className="db-dashboard-container" id="dashboard-container">
            <div className="db-sidebar" id="sidebar">
                <div className="db-icon" id="icon-container">
                    {/* Your icon here */}
                </div>
                <div className="db-menu-item" id="menu-dashboard">Dashboard</div>
                <div className="db-menu-item" id="menu-payment-info">Payment Info</div>
                <div className="db-menu-item" id="menu-registration">Registration</div>
                <div className="db-menu-item" id="menu-courses">Courses</div>
                <div className="db-menu-item" id="menu-drop-semester">Drop Semester</div>
                <div className="db-menu-item" id="menu-result">Result</div>
                <div className="db-menu-item" id="menu-notice">Notice</div>
                <div className="db-menu-item" id="menu-schedule">Schedule</div>
                <div className="db-menu-item" id="menu-logout">Logout</div>
            </div>
            <div className="db-main-content" id="main-content">
                <div className="db-header" id="header">
                    <div className="db-search-bar" id="search-bar">
                        <input type="text" placeholder="Search" id="search-input"/>
                    </div>
                    <div className="db-user-info" id="user-info">
                        <img src="path_to_image" alt="User" id="user-image" />
                        <span id="user-name">John Doe</span>
                        <span id="user-year">3rd year</span>
                    </div>
                </div>
                <div className="db-welcome-section" id="welcome-section">
                    <h2>Welcome back, John!</h2>
                    <p>Always stay updated in your student portal.</p>
                </div>
                <div className="db-finance-section" id="finance-section">
                    <div className="db-finance-card" id="finance-payable">
                        <h3>$10,000</h3>
                        <p>Total Payable</p>
                    </div>
                    <div className="db-finance-card" id="finance-paid">
                        <h3>$5,000</h3>
                        <p>Total Paid</p>
                    </div>
                    <div className="db-finance-card" id="finance-others">
                        <h3>$300</h3>
                        <p>Others</p>
                    </div>
                </div>
                <div className="db-course-section" id="course-section">
                    <div className="db-course-card" id="course-oop">
                        <h3>Object oriented programming</h3>
                        <button>View</button>
                    </div>
                    <div className="db-course-card" id="course-database">
                        <h3>Fundamentals of database systems</h3>
                        <button>View</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

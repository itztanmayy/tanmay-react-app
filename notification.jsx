import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching notifications
    const mockNotifications = [
      { id: 1, message: "Your order for 'Wireless Headphones' has been shipped.", date: "2025-04-27" },
      { id: 2, message: "New deals available in Electronics!", date: "2025-04-26" },
      { id: 3, message: "Your listed item 'Smartphone' has received an offer.", date: "2025-04-25" },
    ];
    setNotifications(mockNotifications);
  }, []);

  return (
    <div className="ebay-homepage">
      {/* Header */}
      <header className="main-header">
        <div className="search-container">
          <div className="logo-container">
            <img
              src="https://itembase.com/wp-content/uploads/2023/02/241-200px600px-Color.png"
              alt="eBay Logo"
              className="ebay-logo"
            />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search for anything" className="search-input" />
            <button className="search-button">Search</button>
          </div>
          <div className="user-actions">
            <Link to="/Signin" className="sign-in-link">Sign in</Link>
            <span className="or-separator">or</span>
            <Link to="/register" className="register-link">Register</Link>
            <button onClick={() => navigate("/sell")} className="sell-button">Sell</button>
            <Link to="/notifications" className="notification-icon">🔔</Link>
            <Link to="/cart" className="cart-icon">🛒</Link>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="main-nav">
        <div className="main-nav-container">
          <span className="category-label">Categories:</span>
          <Link to="/electronics" className="nav-item">Electronics</Link>
          <Link to="/fashion" className="nav-item">Fashion</Link>
          <Link to="/collectibles" className="nav-item">Collectibles and Art</Link>
          <Link to="/sports" className="nav-item">Sports</Link>
          <Link to="/health" className="nav-item">Health</Link>
        </div>
      </nav>

      {/* Notifications Section */}
      <section className="category-listings">
        <h2>Notifications</h2>
        {notifications.length > 0 ? (
          <div className="notification-list">
            {notifications.map((note) => (
              <div key={note.id} className="notification-card">
                <div className="notification-message">{note.message}</div>
                <div className="notification-date">{note.date}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-listings-message">
            <p>No notifications yet.</p>
            <Link to="/" className="selll-button">Go to Home</Link>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="about-us-section">
        <div className="about-container">
          <h2>About Our Marketplace</h2>
          <p>Welcome to our online marketplace, where buyers and sellers come together to discover great deals on a wide range of products.</p>
          <p>Founded with the mission to connect people and products, we strive to offer the best selection, value, and convenience.</p>
          <div className="footer-links">
            <a href="https://policies.google.com/terms?hl=en-US">Terms of Service</a>
            <a href="https://policies.google.com/privacy?hl=en-US">Privacy Policy</a>
            <a href="#">Contact Us</a>
            <a href="https://www.linkedin.com/in/shreyasi-doshi-9aa01a324">LinkedIn</a>
          </div>
          <div className="copyright">
            © 2025 Your Marketplace. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Notification;


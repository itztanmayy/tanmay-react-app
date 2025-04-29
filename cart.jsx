import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css"; // Reusing the home page styles

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem("ebayCloneCart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

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
            <input
              type="text"
              placeholder="Search for anything"
              className="search-input"
            />
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

      {/* Main Cart Content */}
      <section className="category-listings">
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div className="no-listings-message">
            <p>Your cart is currently empty.</p>
            <Link to="/" className="selll-button">Go to Home</Link>
          </div>
        ) : (
          <>
            <div className="product-grid">
              {cartItems.map((item) => (
                <div key={item.id} className="product-card">
                  <div className="product-image-container">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="product-image"
                    />
                  </div>
                  <div className="product-details">
                    <div className="product-price">Price: {formatPrice(item.price)}</div>
                    <div className="product-title">{item.title}</div>
                    <div className="product-location">{item.location}</div>
                    <div className="product-date">Qty: {item.quantity || 1}</div>
                    <div>Total: {formatPrice(item.price * (item.quantity || 1))}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "20px" }}>
              <h3>Total Amount: {formatPrice(totalAmount)}</h3>
              <button
                className="selll-button"
                style={{ marginTop: "10px" }}
                onClick={() => alert("Proceeding to checkout...")}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
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
            <a href="https://www.linkedin.com/in/tanmay-awal-548b0a322">LinkedIn</a>
          </div>
          <div className="copyright">
            © 2025 Your Marketplace. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Cart;

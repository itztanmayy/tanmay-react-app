import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css"; // Reusing the same CSS as home page

function Fashion() {
  // State for favorites
  const [favorites, setFavorites] = useState({});
  // State for product listings - fetch from localStorage or default to empty array
  const [listings, setListings] = useState([]);
  const [fashionListings, setFashionListings] = useState([]);
  const navigate = useNavigate();

  // Load listings and favorites from localStorage on component mount
  useEffect(() => {
    // Load listings
    const savedListings = localStorage.getItem("ebayCloneListings");
    if (savedListings) {
      const allListings = JSON.parse(savedListings);
      setListings(allListings);
      
      // Filter listings for fashion category
      const fashionItems = allListings.filter(
        (item) => item.category === "Fashion" || item.category === "fashion"
      );
      setFashionListings(fashionItems);
    }

    // Load favorites
    const savedFavorites = localStorage.getItem("ebayCloneFavorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = {
        ...prevFavorites,
        [productId]: !prevFavorites[productId],
      };

      // Save favorites to localStorage
      localStorage.setItem("ebayCloneFavorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const handleSellClick = () => {
    navigate("/sell");
  };

  return (
    <div className="ebay-homepage">
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
            <button onClick={handleSellClick} className="sell-button">Sell</button>
            <Link to="/notifications" className="notification-icon">🔔</Link>
            <Link to="/cart" className="cart-icon">🛒</Link>
          </div>
        </div>
      </header>

      <nav className="main-nav">
        <div className="main-nav-container">
          <span className="category-label">Categories:</span>
          <Link to="/electronics" className="nav-item">Electronics</Link>
          <Link to="/fashion" className="nav-item active">Fashion</Link>
          <Link to="/collectibles" className="nav-item">Collectibles and Art</Link>
          <Link to="/sports" className="nav-item">Sports</Link>
          <Link to="/health" className="nav-item">Health</Link>
        </div>
      </nav>

      <section className="hero-banner">
        <div className="banner-content">
          <h1>Fashion</h1>
          <p>Explore trendy clothing, accessories, and footwear.</p>
        </div>
      </section>

      <section className="fresh-recommendations">
        <h2>Fashion Products</h2>
        <div className="product-grid">
          {fashionListings.length > 0 ? (
            fashionListings.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="product-card">
                <div className="product-image-container">
                  <img src={product.imageUrl} alt={product.title} className="product-image" />
                  <button
                    className="favorite-button"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent navigation on clicking favorite button
                      toggleFavorite(product.id);
                    }}
                    style={{ color: favorites[product.id] ? "red" : "#777" }}
                  >
                    {favorites[product.id] ? "♥" : "♡"}
                  </button>
                </div>
                <div className="product-details">
                  <div className="product-price">₹ {product.price}</div>
                  <div className="product-title">{product.title}</div>
                  <div className="product-location">{product.location}</div>
                  <div className="product-date">{product.date}</div>
                </div>
              </Link>
            ))
          ) : (
            <div className="no-listings-message">
              <p>No fashion listings available yet. Be the first to sell fashion items!</p>
              <button onClick={handleSellClick} className="selll-button">Sell Fashion Items Now</button>
            </div>
          )}
        </div>
      </section>

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

export default Fashion;
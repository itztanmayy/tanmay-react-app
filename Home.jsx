import { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId],
    }));
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
            <Link to="/sell" className="sell-button">Sell</Link>
            <Link to="/notifications" className="notification-icon">🔔</Link>
            <Link to="/cart" className="cart-icon">🛒</Link>
          </div>
        </div>
      </header>

      <nav className="main-nav">
        <div className="main-nav-container">
          <span className="category-label">Categories:</span>
          <Link to="/electronics" className="nav-item">Electronics</Link>
          <Link to="/fashion" className="nav-item">Fashion</Link>
          <Link to="/collectibles" className="nav-item">Collectibles and Art</Link>
          <Link to="/sports" className="nav-item">Sports</Link>
          <Link to="/health" className="nav-item">Health</Link>
          <Link to="/deals" className="nav-item">Deals</Link>
        </div>
      </nav>

      <section className="hero-banner">
        <div className="banner-content">
          <h1>Welcome to Your Marketplace</h1>
          <p>Find amazing deals on thousands of items - all in one place.</p>
          <button className="explore-button">Start Shopping</button>
        </div>
      </section>

      <section className="fresh-recommendations">
        <h2>Newest recommendations</h2>
        <div className="product-grid">
          {[
            {
              id: "laptop",
              img: "https://www.v5itsolution.in/wp-content/uploads/2023/12/hP.jpg",
              price: "₹ 12,499",
              title: "HP Pavilion 15 Laptop",
              location: "MODEL TOWN, ROHTAK",
              date: "FEB 28",
            },
            {
              id: "xbox",
              img: "https://5.imimg.com/data5/SELLER/Default/2021/2/XX/NZ/YE/13593399/microsoft-xbox-360-e-500-gb-plain-brand-new-500x500.jpg",
              price: "₹ 11,999",
              title: "Xbox One s 360 series",
              location: "KORAMANGALA, BENGALURU",
              date: "2 DAYS AGO",
            },
            {
              id: "iphone13",
              img: "https://imageio.forbes.com/specials-images/imageserve/60606e1502ea441cd0d5a939/Apple-iPhone-12-Pro-in-gold-finish-/960x0.jpg?format=jpg&width=960",
              price: "₹ 23,599",
              title: "I PHONE 13",
              location: "SAMUDRAPUR MIDC, MAHARASHTRA",
              date: "TODAY",
            },
            {
              id: "swift",
              img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-left-front-three-quarter-28.jpeg?isig=0&q=80",
              price: "₹ 5,00,000",
              title: "2015 - 120,000 km",
              description: "Maruti Suzuki Swift Dzire 2015 Diesel",
              location: "PURPIDIT COLONY, HINGSANGHAT",
              date: "TODAY",
            },
            {
              id: "swift",
              img: "https://static.toiimg.com/photo/80452572.cms?imgsize=156776",
              price: "₹ 5,00,000",
              title: "Bike",
              description: "Maruti Suzuki Swift Dzire 2015 Diesel",
              location: "PURPIDIT COLONY, HINGSANGHAT",
              date: "TODAY",
            },
            {
              id: "swift",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoikGHtRhU1S6ctg1EBDKoHvHvZj42IwPHWQ&s",
              price: "₹ 1,00,000",
              title: "Activa",
              description: "Maruti Suzuki Swift Dzire 2015 Diesel",
              location: "PURPIDIT COLONY, HINGSANGHAT",
              date: "TODAY",
            },
            {
              id: "swift",
              img: "https://cdn.bikedekho.com/processedimages/lectro-electric/h7/source/h767ab06f172ac7.jpg",
              price: "₹ 5000",
              title: "2015 - 120,000 km",
              description: "Cycle",
              location: "PURPIDIT COLONY, HINGSANGHAT",
              date: "TODAY",
            },
            {
              id: "swift",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHxXvZc0ddIn8easMCVU5NL1cG_CpD9dS1A&s",
              price: "₹ 5000",
              title: "Kettle",
              description: "Kettle",
              location: "PURPIDIT COLONY, HINGSANGHAT",
              date: "TODAY",
            },
            {
              id: "swift",
              img: "https://images-cdn.ubuy.co.in/64d33a2b74552b4c680ebe82-revlon-1875w-compact-hair-dryer-black.jpg",
              price: "₹ 500",
              title: "Dryer",
              description: "Dryer",
              location: "PURPIDIT COLONY, HINGSANGHAT",
              date: "TODAY",
            },
            {
              id: "swift",
              img: "https://cdn.thewirecutter.com/wp-content/media/2024/05/clothingirons-2048px-01293.jpg?auto=webp&quality=75&width=1024",
              price: "₹ 500",
              title: "Iron",
              description: "Iron",
              location: "PURPIDIT COLONY, HINGSANGHAT",
              date: "TODAY",
            },
          ].map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.img} alt={product.title} className="product-image" />
                <button
                  className="favorite-button"
                  onClick={() => toggleFavorite(product.id)}
                  style={{ color: favorites[product.id] ? "red" : "#777" }}
                >
                  {favorites[product.id] ? "♥" : "♡"}
                </button>
              </div>
              <div className="product-details">
                <div className="product-price">{product.price}</div>
                <div className="product-title">{product.title}</div>
                <div className="product-location">{product.location}</div>
                <div className="product-date">{product.date}</div>
              </div>
            </div>
          ))}
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

export default Home;

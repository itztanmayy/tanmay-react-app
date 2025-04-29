import React from "react";

export default function Deal() {
  const dealProducts = [
    {
      id: 1,
      name: "Smart Fitness Tracker",
      category: "Deal",
      price: 1499,
      originalPrice: 2499,
      condition: "New",
      description: "Track your daily activities, heart rate, sleep, and more with this advanced fitness tracker.",
      image: "https://m.media-amazon.com/images/I/61M4FQjX6xL._SL1500_.jpg"
    },
    {
      id: 2,
      name: "Portable Massage Gun",
      category: "Deal",
      price: 3999,
      originalPrice: 6999,
      condition: "New",
      description: "A handheld massage gun to relieve muscle soreness and improve recovery.",
      image: "https://m.media-amazon.com/images/I/81jYlIuHj4L._SL1500_.jpg"
    },
    {
      id: 3,
      name: "Water Purifier",
      category: "Deal",
      price: 2999,
      originalPrice: 4999,
      condition: "New",
      description: "Efficient water purifier that ensures clean, safe drinking water at home.",
      image: "https://m.media-amazon.com/images/I/71a1yC6PqAL._SL1500_.jpg"
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Today's Special Deals</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {dealProducts.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              width: "250px",
              boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <h3>{item.name}</h3>
            <p>Condition: {item.condition}</p>
            <p style={{ textDecoration: "line-through", color: "#888" }}>Original Price: {formatPrice(item.originalPrice)}</p>
            <p>Deal Price: {formatPrice(item.price)}</p>
            <p style={{ fontSize: "0.9em", color: "#555" }}>{item.description}</p>
            <button
              style={{
                backgroundColor: "#27ae60",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                transition: "background-color 0.2s",
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#2ecc71"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#27ae60"}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

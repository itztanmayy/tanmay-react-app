import React from "react";

export default function Electronics() {
  const electronicProducts = [
    {
      id: 1,
      name: "Bluetooth Wireless Headphones",
      category: "Electronics",
      price: 3999,
      condition: "New",
      description: "Noise-cancelling Bluetooth headphones with 20 hours of battery life.",
      image: "https://m.media-amazon.com/images/I/71tZ4uKHr8L._SL1500_.jpg"
    },
    {
      id: 2,
      name: "Smart LED TV",
      category: "Electronics",
      price: 24999,
      condition: "New",
      description: "Ultra HD Smart LED TV with built-in Wi-Fi and voice control.",
      image: "https://m.media-amazon.com/images/I/91ogdQXTbWL._SL1500_.jpg"
    },
    {
      id: 3,
      name: "Smartphone",
      category: "Electronics",
      price: 24999,
      condition: "New",
      description: "Latest model with 128GB storage, 5G connectivity, and a high-quality camera.",
      image: "https://m.media-amazon.com/images/I/81DJIlOpCwL._SL1500_.jpg"
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
      <h1>Latest Electronics</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {electronicProducts.map((item) => (
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
            <p>Price: {formatPrice(item.price)}</p>
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

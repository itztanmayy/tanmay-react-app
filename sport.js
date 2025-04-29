import React from "react";

export default function Sport() {
  const sportProducts = [
    {
      id: 1,
      name: "Cricket Bat",
      category: "Sport",
      price: 1200,
      condition: "New",
      description: "SS Kashmir Willow cricket bat for beginners and intermediate players.",
      image: "https://m.media-amazon.com/images/I/71NOCoY6p3L._SL1500_.jpg"
    },
    {
      id: 2,
      name: "Adidas Football",
      category: "Sport",
      price: 999,
      condition: "New",
      description: "FIFA-approved Adidas football, size 5 with latex bladder.",
      image: "https://m.media-amazon.com/images/I/61ok1TQOAvL._SL1500_.jpg"
    },
    {
      id: 3,
      name: "Yoga Mat",
      category: "Sport",
      price: 499,
      condition: "New",
      description: "Non-slip, eco-friendly yoga mat, ideal for home workouts.",
      image: "https://m.media-amazon.com/images/I/61QXtZ6KxkL._SL1500_.jpg"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sport & Fitness</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {sportProducts.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              width: "250px",
              boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "5px"
              }}
            />
            <h3>{item.name}</h3>
            <p>Condition: {item.condition}</p>
            <p>Price: ₹{item.price}</p>
            <p style={{ fontSize: "0.9em", color: "#555" }}>{item.description}</p>
            <button
              style={{
                backgroundColor: "#2ecc71",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

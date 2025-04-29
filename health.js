import React from "react";

export default function Health() {
  const healthProducts = [
    {
      id: 1,
      name: "Digital Thermometer",
      category: "Health",
      price: 299,
      condition: "New",
      description: "Accurate digital thermometer with fast reading and memory function.",
      image: "https://m.media-amazon.com/images/I/51jgrTy5jeL._SL1500_.jpg"
    },
    {
      id: 2,
      name: "Blood Pressure Monitor",
      category: "Health",
      price: 1499,
      condition: "New",
      description: "Automatic upper arm BP monitor with large display and USB charging.",
      image: "https://m.media-amazon.com/images/I/71tF5UzVlcL._SL1500_.jpg"
    },
    {
      id: 3,
      name: "First Aid Kit",
      category: "Health",
      price: 650,
      condition: "New",
      description: "Comprehensive 50-piece first aid kit for home, office or travel.",
      image: "https://m.media-amazon.com/images/I/71mFg78RhqL._SL1500_.jpg"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Health & Wellness</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {healthProducts.map((item) => (
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
                backgroundColor: "#27ae60",
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

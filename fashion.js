import React from "react";

export default function Fashion() {
  const fashionProducts = [
    {
      id: 1,
      name: "Denim Jacket",
      category: "Fashion",
      price: 1200,
      condition: "New",
      description: "Stylish denim jacket, perfect for winter wear.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Casual T-Shirt",
      category: "Fashion",
      price: 500,
      condition: "New",
      description: "100% cotton, breathable and comfortable.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Formal Shirt",
      category: "Fashion",
      price: 900,
      condition: "Used",
      description: "Lightly worn formal shirt for office and events.",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fashion & Clothing</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {fashionProducts.map((item) => (
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
            <h3 style={{ margin: "10px 0 5px" }}>{item.name}</h3>
            <p style={{ margin: "5px 0" }}>Condition: {item.condition}</p>
            <p style={{ margin: "5px 0" }}>Price: ₹{item.price}</p>
            <p style={{ fontSize: "0.9em", color: "#555" }}>{item.description}</p>
            <button
              style={{
                marginTop: "10px",
                backgroundColor: "#e91e63",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer"
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

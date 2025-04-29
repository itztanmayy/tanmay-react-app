import React from "react";

export default function CombinedProducts() {
  const collectivesProducts = [
    {
      id: 1,
      name: "Marvel Poster Set",
      category: "Collectives",
      price: 799,
      condition: "New",
      description: "Set of 5 high-quality Marvel posters for your wall.",
      image: "https://m.media-amazon.com/images/I/81rxl3PxMoL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 2,
      name: "Vintage Pokemon Cards",
      category: "Collectives",
      price: 2500,
      condition: "Used",
      description: "Rare original Pokemon trading cards from the 90s.",
      image: "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/263/1914/Base_Set_Booster_Pack_Pokemon__78851.1651791897.jpg"
    },
    {
      id: 3,
      name: "Harry Potter Wand Replica",
      category: "Collectives",
      price: 1299,
      condition: "New",
      description: "High-quality replica of Harry Potter's wand with box.",
      image: "https://images-cdn.ubuy.co.in/634edbb6b2f94646c46b64b4-noble-collections-harry-potter.jpg"
    }
  ];

  const artProducts = [
    {
      id: 4,
      name: "Canvas Painting",
      category: "Art",
      price: 2000,
      condition: "New",
      description: "Original acrylic painting on canvas, size 24x36 inches.",
      image: "https://m.media-amazon.com/images/I/71kVj1YbcKL._AC_SL1500_.jpg"
    },
    {
      id: 5,
      name: "Handmade Terracotta Pot",
      category: "Art",
      price: 850,
      condition: "New",
      description: "Beautifully hand-painted terracotta flower pot.",
      image: "https://5.imimg.com/data5/VF/QC/MY-2017173/terracotta-handmade-vase-500x500.jpg"
    },
    {
      id: 6,
      name: "Resin Art Clock",
      category: "Art",
      price: 1499,
      condition: "New",
      description: "Custom made resin wall clock with marble finish.",
      image: "https://m.media-amazon.com/images/I/61sML7EZ1ZL._SL1200_.jpg"
    }
  ];

  const renderProducts = (products, bgColor) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.map((item) => (
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
              backgroundColor: bgColor,
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
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Collective Items</h1>
      {renderProducts(collectivesProducts, "#8e44ad")}

      <h1 style={{ marginTop: "40px" }}>Art & Handmade</h1>
      {renderProducts(artProducts, "#e67e22")}
    </div>
  );
}

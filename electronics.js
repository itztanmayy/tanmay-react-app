import React from "react";

// Sample product data (can be imported from a shared data file)
const allProducts = [
  {
    id: 1,
    name: "iPhone 12",
    category: "Electronics",
    price: 40000,
    condition: "Used",
    description: "Good condition, minor scratches",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.designinfo.in%2Fp%2Fapple-iphone-12https://enchttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.techspot.com%2Fdrivers%2Fdriver%2Ffile%2Finformation%2F18241%2F&psig=AOvVaw3cD7W1Ck4EpNue0yRJ7VMF&ust=1746034199785000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPiin7Pi_YwDFQAAAAAdAAAAABAJrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqklFLDwYoU-u5qz6kKW5vTTJTbYNCCJzGg&s-mini-5g-64gb-green%2F&psig=AOvVaw01MA7ni4z9VclMkvbVm_a-&ust=1746033801446000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiux_Xg_YwDFQAAAAAdAAAAABAJ"
  },
  {
    id: 2,
    name: "HP Laptop",
    category: "Electronics",
    price: 30000,
    condition: "Used",
    description: "8GB RAM, i5 processor",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Denim Jacket",
    category: "Clothing",
    price: 1200,
    condition: "New",
    description: "Stylish denim jacket",
    image: "https://via.placeholder.com/150"
  }
];

export default function Electronics() {
  // Filter products for "Electronics"
  const electronicsProducts = allProducts.filter(
    (product) => product.category === "Electronics"
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Electronics</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {electronicsProducts.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              width: "250px"
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
            <p>{item.description}</p>
            <button
              style={{
                marginTop: "10px",
                backgroundColor: "#3498db",
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

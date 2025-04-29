import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./sell.css"; 

export default function Sell() {

  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    price: "",
    condition: "",
    description: "",
    location: ""
  });

  const [message, setMessage] = useState("");

  const categories = [
    "Electronics", "Fashion", "Home & Garden", "Sports", 
    "Toys & Games", "Collectibles", "Automotive", "Other"
  ];

  const conditions = ["New", "Like New", "Good", "Fair", "Used"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageFile(e.dataTransfer.files[0]);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleImageFile(file);
    }
  };

  const handleImageFile = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    
    setFormData({
      ...formData,
      imageFile: file
    });
  };

  const handleNextStep = () => {
      setFormStep(2);
  };

  const handleNextStepthree = () => {
    setFormStep(3);
  }

  const handlePrevStep = () => {
    setFormStep(formStep - 1);
  };

  const handleSubmit = async () => {
    if (!image || !formData.description || !formData.location) {
      setMessage("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    const newListing = {
      id: uuidv4(), 
      title: formData.productName,
      category: formData.category,
      price: formData.price,
      condition: formData.condition,
      description: formData.description,
      imageUrl: image, 
      location: formData.location,
      date: new Date().toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric'
      })
    };

    try {
      const savedListings = JSON.parse(localStorage.getItem("ebayCloneListings")) || [];
      savedListings.push(newListing);
      localStorage.setItem("ebayCloneListings", JSON.stringify(savedListings));

      setMessage("Product listed successfully!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setMessage("Error listing product. Please try again.");
      console.error("Error:", error);
      setIsSubmitting(false);
    }
};


  const renderStep1 = () => (
    <div className="form-step-container">
      <h2 className="step-title">What are you selling?</h2>
      
      <div className="form-group animated">
        <label htmlFor="productName">Product Name</label>
        <input
          id="productName"
          type="text"
          name="productName"
          placeholder="Enter product name"
          className="form-input"
          value={formData.productName}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="form-group animated">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          className="form-input form-select"
          value={formData.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      
      <div className="button-container">
        <button 
          type="button" 
          className="next-btn"
          onClick={handleNextStep}
        >
          Continue <i className="arrow-right">→</i>
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="form-step-container">
      <h2 className="step-title">Set your price and condition</h2>
      
      <div className="form-group animated">
        <label htmlFor="price">Price</label>
        <div className="price-input-container">
          <span className="currency-symbol">₹</span>
          <input
            id="price"
            type="number"
            name="price"
            placeholder="0.00"
            className="form-input price-input"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      
      <div className="form-group animated">
        <label htmlFor="condition">Condition</label>
        <div className="condition-buttons">
          {conditions.map((conditionOption) => (
            <button
              key={conditionOption}
              type="button"
              className={`condition-btn ${formData.condition === conditionOption ? 'active' : ''}`}
              onClick={() => 
                setFormData({
                  ...formData,
                  condition: conditionOption
                })
              }
            >
              {conditionOption}
            </button>
          ))}
        </div>
      </div>
      
      <div className="button-container dual-buttons">
        <button 
          type="button" 
          className="back-btn"
          onClick={handlePrevStep}
        >
          <i className="arrow-left">←</i> Back
        </button>
        <button 
          type="button" 
          className="next-btn"
          onClick={handleNextStepthree}
        >
          Continue <i className="arrow-right">→</i>
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="form-step-container">
      <h2 className="step-title">Add details and images</h2>
      
      <div className="form-group animated">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          name="location"
          placeholder="e.g. New York, USA"
          className="form-input"
          value={formData.location}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="form-group animated">
        <label htmlFor="description">Description</label>
        <textarea 
          id="description"
          name="description"
          placeholder="Describe your item in detail. Include features, condition, and why someone should buy it."
          rows="5"
          className="form-textarea"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="form-group animated">
        <label htmlFor="image">Product Images</label>
        <div 
          className={`image-upload-area ${dragActive ? "drag-active" : ""}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input 
            id="image"
            type="file" 
            accept="image/*" 
            onChange={handleImageChange}
            className="file-input"
          />
          <div className="upload-content">
            <label htmlFor="image" className="browse-btn">Browse Files</label>
          </div>

        </div>
        
        {image && (
          <div className="image-preview-container animated">
            <img 
              src={image} 
              alt="Preview" 
              className="image-preview"
            />
            <button 
              type="button" 
              className="remove-image-btn"
              onClick={() => {
                setImage(null);
                setFormData({
                  ...formData,
                  imageFile: null
                });
              }}
            >
              ✕
            </button>
          </div>
        )}
      </div>
      
      <div className="button-container dual-buttons">
        <button 
          type="button" 
          className="back-btn"
          onClick={handlePrevStep}
        >
          <i className="arrow-left">←</i> Back
        </button>
        <button
          type="button" 
          className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
          onClick={handleSubmit}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span> Listing Item...
            </>
          ) : (
            <>List Now</>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="ebay-container sell-page">
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((formStep - 1) / 2) * 100}%` }}
          ></div>
        </div>
        <div className="progress-steps">
          <div className={`progress-step ${formStep >= 1 ? 'active' : ''}`}>
            <div className="step-circle">1</div>
            <div className="step-label">Basics</div>
          </div>
          <div className={`progress-step ${formStep >= 2 ? 'active' : ''}`}>
            <div className="step-circle">2</div>
            <div className="step-label">Price</div>
          </div>
          <div className={`progress-step ${formStep >= 3 ? 'active' : ''}`}>
            <div className="step-circle">3</div>
            <div className="step-label">Details</div>
          </div>
        </div>
      </div>
    
      <div className="form-container">
        <h1 className="form-title">Sell Your Item</h1>
        
        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          {formStep === 1 && renderStep1()}
          {formStep === 2 && renderStep2()}
          {formStep === 3 && renderStep3()}
        </form>
        
        {message && (
          <div className={`message-container ${message.includes("Error") ? "error" : "success"}`}>
            <div className="message-icon">{message.includes("Error") ? "❌" : "✅"}</div>
            <p className="message-text">{message}</p>
          </div>
        )}
        
      </div>
      
      <div className="selling-tips">
        <h3>Tips for successful selling</h3>
        <ul>
          <li>Add high-quality photos to attract more buyers</li>
          <li>Be honest about the item's condition</li>
          <li>Set a competitive price by checking similar items</li>
          <li>Write a detailed description to answer buyers' questions</li>
        </ul>
      </div>
    </div>
  );
}

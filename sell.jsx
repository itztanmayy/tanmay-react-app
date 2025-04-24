import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Sell(){

    const navigate = useNavigate(); 

    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };


    return(


        <div className="ebay-container">

        
  

          <div className="form-container">

            
  
            <h1 className="form-title">Enter Product Details </h1>
  
            
  
            <form className="signup-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Product Name"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Product category"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  placeholder="Price"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Condition : New/Used"
                  className="form-input"
                />
              </div>

              <textarea 
                placeholder="Enter product description"
                rows="4"
                style={{ width: "100%", marginTop: "10px" }}
            ></textarea>
                <br />

                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    style={{ marginTop: "10px" }}
                />
                <br />


                {image && (
                <div style={{ marginTop: "10px" }}>
                <img src={image} alt="Preview" style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "5px" }} />
            </div>
            )}    
              
              <br />
              <br />
              <br />              
              <button
                type="button" 
                className="submit-btn"
                onClick={() => navigate("/")}
              >
              Up For Sell
              </button>
            </form>
            
            <div className="help-button-container">
              <button className="help-button">?</button>
            </div>
          </div>
        </div>
    )
}
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const savedListings = JSON.parse(localStorage.getItem("ebayCloneListings")) || [];
    setListings(savedListings);

    const foundProduct = savedListings.find((item) => item.id.toString() === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    }
    setLoading(false);
  }, [productId]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value) || 1);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to checkout for ${quantity} item(s) of ${product?.name}`);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product?.name} to cart`);
  };

  const handleContactSeller = () => {
    alert(`Contacting seller: ${product?.sellerName}`);
  };

  const handleFavorite = () => {
    alert(`Added ${product?.name} to favorites`);
  };

  if (loading) {
    return (
      <div className="pd-loading-wrapper">
        <div className="pd-spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pd-not-found">
        <h2>Product Not Found</h2>
        <p>Sorry, the product you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  return (
    <div className="pd-container">
      <div className="pd-breadcrumbs">
        Home / {product.category?.split(' > ').join(' / ')} / {product.name}
      </div>

      <div className="pd-content-main">
        <div className="pd-gallery">
          <div className="pd-gallery-primary">
            {product.images?.[activeImage] ? (
              <img src={product.images[activeImage]} alt={product.name} />
            ) : (
              <div>No image available</div>
            )}
          </div>
          <div className="pd-gallery-thumbs">
            {product.images?.length > 0 &&
              product.images.map((img, index) => (
                <div
                  key={index}
                  className={`pd-gallery-thumb ${activeImage === index ? 'pd-thumb-active' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={img} alt={`${product.name} thumbnail ${index + 1}`} />
                </div>
              ))}
          </div>
        </div>

        <div className="pd-details">
          <h1 className="pd-title">{product.name}</h1>

          <div className="pd-price-row">
            <div className="pd-price">₹{product.price?.toLocaleString()}</div>
            <div className="pd-wishlist-btn" onClick={handleFavorite}>
              <i className="far fa-heart"></i> Add to Favorites
            </div>
          </div>

          <div className="pd-attributes">
            <div className="pd-attribute-item">
              <span className="pd-attribute-label">Condition:</span> {product.condition}
            </div>
            <div className="pd-attribute-item">
              <span className="pd-attribute-label">Brand:</span> {product.brand}
            </div>
            <div className="pd-attribute-item">
              <span className="pd-attribute-label">Location:</span> {product.location}
            </div>
            <div className="pd-attribute-item">
              <span className="pd-attribute-label">Listed:</span> {product.listedDate}
            </div>
          </div>

          <div className="pd-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="pd-specifications">
            <h3>Specifications</h3>
            <table className="pd-specs-table">
              <tbody>
                {product.specs?.length > 0 &&
                  product.specs.map((spec, index) => (
                    <tr key={index}>
                      <td className="pd-spec-name">{spec.name}</td>
                      <td className="pd-spec-value">{spec.value}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="pd-buy-options">
            <div className="pd-quantity">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="99"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>

            <div className="pd-action-buttons">
              <button className="pd-buy-btn" onClick={handleBuyNow}>Buy Now</button>
              <button className="pd-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
              <button className="pd-contact-btn" onClick={handleContactSeller}>Contact Seller</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;

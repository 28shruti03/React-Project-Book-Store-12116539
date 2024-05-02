import React from 'react';
import PropTypes from 'prop-types';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';
import card7 from '../assets/card7.png';
import card8 from '../assets/card8.png';

const imageMap = {
  card1, card2, card3, card4, card5, card6, card7, card8
};

function ProductCard({ product }) {
  const { id, name, author, description, price, discountPrice, image } = product;
  const imagePath = imageMap[image]; 
  const handleAddToCart = () => {
    const cartItem = {
      id,
      name,
      author,
      description,
      price,
      discountPrice,
      image
    };
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(cartItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <span className="discount-tag">50% off</span>
        <img src={imagePath} className="product-thumb" alt={name} />
        <button className="card-btn" onClick={handleAddToCart}>add to Cart</button>
      </div>
      <div className="product-info">
        <h2 className="product-brand">{author}</h2>
        <p className="product-short-des">{description}</p>
        <span className="price">₹{price}</span><span className="actual-price">₹{discountPrice}</span>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountPrice: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;

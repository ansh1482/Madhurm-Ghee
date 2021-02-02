import React from 'react';
import './product-card.css';

const ProductCard = ({ productName, productImage }) => (
        <div className='card'>
            <img className='product-image' src={productImage} />
            <div className='product-description'>
                <p className="text">{productName}</p>
            </div>
        </div>
);

export default ProductCard;
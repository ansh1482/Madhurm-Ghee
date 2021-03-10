import React from 'react';
import './product-card.css';
import ScrollAnimation from 'react-animate-on-scroll';

const ProductCard = ({ productName, productImage }) => (
    <ScrollAnimation animateIn='fadeIn'>
        <div className='card'>
            <img className='product-image' src={productImage} />
            <div className='product-description'>
                <p className="text">{productName}</p>
            </div>
        </div>
    </ScrollAnimation>
);

export default ProductCard;
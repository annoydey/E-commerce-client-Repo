import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl product">
            <figure><img src={img} alt=''></img></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p style={{ fontWeight: 'bold' }}>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
                <div className="card-actions justify-center mt-4">
                    <button onClick={() => props.handleAddToCart(props.product)} className='btn btn-cart'>
                        <p className='btn-text'>Add to Cart</p>
                        <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
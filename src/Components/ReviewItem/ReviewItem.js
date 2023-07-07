import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product, handleRemoveItem, handleQuantityplus, handleQuantityminus}) => {
    const { _id, img, name, price, quantity, shipping } = product;
    return (
        <div className='review-item' style={{ backgroundColor: 'whitesmoke', boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)'}}>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price : ${price}</small></p>
                    <p><small>Shipping Cost: ${shipping}</small></p>
                    <div className='quantity-container'>
                        <p><small>Quantity : </small></p>
                        <button onClick={() => handleQuantityplus(_id)} className='quantity-btn'>
                            <FontAwesomeIcon className='addingQuantity' icon={faPlusCircle}></FontAwesomeIcon>
                        </button>
                        <p><small className='quantvalue'>{quantity}</small></p>
                        <button onClick={() => handleQuantityminus(_id)} className='quantity-btn'>
                            <FontAwesomeIcon className='addingQuantity' icon={faMinusCircle}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveItem(_id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
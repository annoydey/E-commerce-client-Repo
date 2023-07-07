import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart, clearCart, children} = props;
    let total = 0
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);

    return (
        <div className='cart'>
            <div className="order-summary-header">
                <div className="cart-img-container">
                    <span className="cart-item-count">{cart.length}</span>
                </div>
                <h4 className='text-2xl'>Order summary</h4>
            </div>
            <div className="order-summary-details">
                <p>Selected Items: {quantity}</p>
                <p>Subtotal price: ${total}</p>
                <p>Total Shipping price: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5>Total To Pay: ${grandTotal}</h5>
            </div>
            <button onClick={clearCart} className='btn-clear-cart'>Clear Cart</button>
            {children}
            <br />
        </div>


    );
};

export default Cart;
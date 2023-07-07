import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import './Order.css';
import useTitle from '../../hooks/useTitle';

const Order = () => {
    const { initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    useTitle('Order');

    const handleRemoveItem = (_id) => {
        const remaining = cart.filter(product => product._id !== _id);
        setCart(remaining);
        removeFromDb(_id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const handleQuantityplusItem = (_id) => {
        let shoppingCart = {};
        const storedCart = localStorage.getItem('shopping-cart');
        if (storedCart) {
            shoppingCart = JSON.parse(storedCart);
        }

        const quantity = shoppingCart[_id] || 0
        shoppingCart[_id] = quantity + 1;
        
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

        setCart((prevCart) => {
            const updatedCart = prevCart.map((product) => {
              if (product._id === _id) {
                return { ...product, quantity: quantity + 1 };
              }
              return product;
            });
            return updatedCart;
        });
    };
    
    const handleQuantityminusItem = (_id) => {
        let shoppingCart = {};
        const storedCart = localStorage.getItem('shopping-cart');
        if (storedCart) {
            shoppingCart = JSON.parse(storedCart);
        }
      
        const quantity = shoppingCart[_id] || 0;
        if (quantity > 1) {
            shoppingCart[_id] = quantity - 1;
      
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
      
            setCart((prevCart) => {
                const updatedCart = prevCart.map((product) => {
                    if (product._id === _id) {
                        return { ...product, quantity: quantity - 1 };
                    }
                    return product;
                });
                return updatedCart;
            });
        }
    };

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                        key = {product._id}
                        product = {product}
                        handleRemoveItem = {handleRemoveItem}
                        handleQuantityplus = {handleQuantityplusItem}
                        handleQuantityminus = {handleQuantityminusItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2 style={{ marginLeft: '5%', marginTop: '2%', width: '90%',padding: '20px 0px 20px 0px', textAlign: 'center', backgroundColor: 'whitesmoke', boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', color: 'black', borderRadius: '12px 12px 12px 12px'}}>Empty Cart</h2>
                }
            </div>
            <div className='cart-containers'>
                <Cart clearCart={clearCart} cart={cart}>
                    {
                        cart.length !== 0 && 
                            <Link to="/shipping">
                                <button className='btn-review-cart'>Proceed shipping</button>
                            </Link>
                    }
                </Cart>
            </div>
        </div>
    );
};

export default Order;
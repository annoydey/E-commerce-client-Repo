import React, { useState } from 'react';
import './Shipping.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart } from '../../utilities/fakedb';
import useTitle from '../../hooks/useTitle';

const Shipping = () => {
    const { initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    useTitle('Shipping');

    const handleSubmitdetails = event => {
        event.preventDefault();
        const form = event.target;
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const address = form.address.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const fieldtext = form.fieldtext.value;
        const billingDetails = {
            firstname,
            lastname,
            address,
            email,
            phone,
            fieldtext
        };
        const updatedCart = {
            cart: [...cart],
            billingDetails: { ...billingDetails }
        };
        setCart(updatedCart.cart);

        localStorage.setItem('shopping-cart', JSON.stringify(updatedCart));
        console.log("Cart", updatedCart);

        form.reset();
        clearCart();
    }
    

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div>
                <div className="hero-content flex-col pt-0 billing-details">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmitdetails} className="card-body">
                            <div className="form-control grid">
                                <h1 className='mb-5 font-bold text-2xl'>Billing details</h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <input type="text" name='firstname' placeholder="First Name" className="input input-bordered" required />
                                    </div>
                                    <div>
                                        <input type="text" name='lastname' placeholder="Last Name" className="input input-bordered" required />
                                    </div>
                                </div>
                                <br/>
                                <input type="text" name='address' className="input input-bordered" placeholder="Address" required />
                                <br/>
                                <input type="email" name='email' className="input input-bordered" placeholder="Email" required />
                                <br/>
                                <input type="number" name='phone' className="input input-bordered" placeholder="Phone" required />
                                <br/>
                                <textarea className="input input-bordered" name='fieldtext' placeholder="Text Field"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Place Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    {cart.map((item) => (
                        <div
                            className="order-item"
                            key={item._id}
                            style={{
                                backgroundColor: "whitesmoke",
                                boxShadow: "0 0 5px rgba(0, 0, 0, 0.4)",
                            }}
                        >
                            <div>
                                <img src={item.img} alt="" />
                            </div>
                            <div className="order-details-container">
                                <div className="order-details">
                                    <p>{item.name}</p>
                                    <p>
                                        <small>Quantity: {item.quantity}</small>
                                    </p>
                                    <p>
                                        <small>Price: ${item.price}</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Cart>
            </div>
        </div>
    );
};

export default Shipping;
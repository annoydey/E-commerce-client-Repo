import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useTitle('Home');

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        fetch('https://e-commerce-server-red.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const _id in storedCart) {
            const addedProduct = products.find(product => product._id === _id);
            if (addedProduct) {
                const quantity = storedCart[_id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const handleClick = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    };



    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
    };

    // Filter products based on selected category
    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return (
        <div className='shop-container'>
            <div className="category-buttons">
                <button className={`btn ${selectedCategory === '' ? 'btn-info' : ''}`} onClick={() => handleCategoryFilter('')}>ALL</button>
                <button className={`btn ${selectedCategory === "Men's Sneaker" ? 'btn-info' : ''}`} onClick={() => handleCategoryFilter("Men's Sneaker")}>Men's Sneaker</button>
                <button className={`btn ${selectedCategory === "Men's Pants" ? 'btn-info' : ''}`} onClick={() => handleCategoryFilter("Men's Pants")}>Men's Pants</button>
                <button className={`btn ${selectedCategory === "Men's Boot" ? 'btn-info' : ''}`} onClick={() => handleCategoryFilter("Men's Boot")}>Men's Boot</button>
                <button className={`btn ${selectedCategory === "Bag" ? 'btn-info' : ''}`} onClick={() => handleCategoryFilter("Bag")}>Bag</button>
                <button className={`btn ${selectedCategory === "Bottle" ? 'btn-info' : ''}`} onClick={() => handleCategoryFilter("Bottle")}>Bottle</button>
            </div>
            <br/>
            <div className="products-container">
                {filteredProducts.map(product => (
                    <Product
                        key={product._id}
                        product={product}
                        handleAddToCart={handleClick}
                    />
                ))}
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to="/orders">
                        <button className='btn-review-cart'>Review Orders</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;

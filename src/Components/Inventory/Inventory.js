import React from 'react';
import useTitle from '../../hooks/useTitle';
import '../Inventory/Inventory.css'

const Inventory = () => {
    useTitle('Inventory');

    const  handleAddProductdetails = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const seller = form.seller.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const stock = parseInt(form.stock.value);
        const ratings = parseInt(form.ratings.value);
        const img = form.imgsrc.value;
        const shipping = parseInt(form.shipping.value);
        const quantity = parseInt(form.quantity.value);
        const product = {name,seller,category,price,stock,ratings,img,shipping,quantity}

        fetch('https://e-commerce-server-red.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                const newProduct = [data]
            })
            .then(err => console.error(err))

        form.reset();
    }

    return (
        <div className="hero-content managing-details">
            <div className="flex-shrink-0 w-full shadow-2xl bg-base-100">
                <form onSubmit={handleAddProductdetails} className="card-body">
                    <div className="form-control grid">
                        <h1 className='mb-5 font-bold text-2xl'>Adding Product</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className='ml-5'>
                                <input type="text" name='seller' placeholder="Seller" className="input input-bordered" required />
                            </div>
                        </div>
                        <br />
                        <input type="text" name='category' className="input input-bordered" placeholder="Category" required />
                        <br />
                        <input type="number" name='price' className="input input-bordered" placeholder="Price" required />
                        <br />
                        <input type="number" name='stock' className="input input-bordered" placeholder="Stock" required />
                        <br />
                        <input type="number" name='ratings' className="input input-bordered" placeholder="Ratings" required />
                        <br />
                        <input type="text" name='imgsrc' className="input input-bordered" placeholder="Image Links" required />
                        <br />
                        <input type="number" name='shipping' className="input input-bordered" placeholder="Shipping" required />
                        <br />
                        <input type="number" name='quantity' className="input input-bordered" placeholder="Quantity" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Adding to Database</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Inventory;
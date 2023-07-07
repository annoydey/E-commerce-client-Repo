import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // Get products 
    const productsData = await fetch('https://e-commerce-server-red.vercel.app/products');
    const products = await productsData.json();

    //Get cart 
    const savedCart = getStoredCart();
    const initialCart = [];
    for(const _id in savedCart){
        const addedProduct = products.find(product => product._id === _id);
        if(addedProduct){
            const quantity = savedCart[_id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct)
        }
    }

    return {products: products, initialCart: initialCart };
}
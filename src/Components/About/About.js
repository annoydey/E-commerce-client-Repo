import React from 'react';
import useTitle from '../../hooks/useTitle';
import '../About/About.css'

const About = () => {
    useTitle('About');
    
    return (
        <div className="mobile-div">
            <h1 style={{ marginLeft: '5%', marginTop: '2%', fontSize: '20px', width: '90%',padding: '20px 0px 20px 0px', textAlign: 'center', backgroundColor: '#3abff8', boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', color: 'black', borderRadius: '12px 12px 12px 12px'}}>
                It's an online demo e-commerce website made by Annoy Dey. It includes basic functionalities such as 
                <div className='aboutFeatures'>
                    <li>Adding products to the cart</li>
                    <li>Reviewing products</li>
                    <li>Deleting products from the cart</li>
                    <li>Increasing and Decreasing product quantities</li>
                    <li>Clearing the cart</li>
                    <li>Displaying a cart overview before checkout</li>
                    <li>Implemented Google Firebase authentication system</li>
                </div>
            </h1>
        </div>
    );
};

export default About;
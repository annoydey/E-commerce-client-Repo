import React, { useContext } from 'react';
import './Login.css'
import { AuthContext } from '../../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import useTitle from '../../hooks/useTitle';

const Login = () => {

    const {signIn, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('Login')

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            navigate('/shipping');

        })
        .catch(error => {
            console.error(error)
        })

    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            navigate('/shipping');
        })
        .catch(error => {
            console.error(error)
        })
    } 
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col logincard">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <br/>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                
                                <label className="label mt-5">
                                    <small>Test email : annoydey@gmail.com</small>
                                </label>
                                <label className="label">
                                    <small>Test password : 123456789</small>
                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <button style={{ width: '80%', marginLeft: '10%', marginBottom: '5%' }} onClick={handleGoogleSignIn} className="btn btn-success"><FaGoogle></FaGoogle>Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, { useContext } from 'react';
import logo from '../../images/Logo.png';
import '../Header/Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import defaultImageURL from '../../images/defaultAvatar.png';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
        .then( () => {

        })
        .catch( error => console.error(error));
    }

    return (
        <div className="navbar bg-base-100 header">
            <div className="flex-1">
                <img src={logo} alt=""/>
                <div className='navlink'>
                    <Link className='btn btn-ghost normal-case text-xl' to="/">Shop</Link>
                    <Link className='btn btn-ghost normal-case text-xl' to="/orders">Orders</Link>
                    <Link className='btn btn-ghost normal-case text-xl' to="/inventory">Inventory</Link>
                    <Link className='btn btn-ghost normal-case text-xl' to="/about">About</Link>
                    {
                        !user?.email && (
                            <>
                                <Link className='btn btn-ghost normal-case text-xl' to="/login">Login</Link>
                                <Link className='btn btn-ghost normal-case text-xl' to="/register">Register</Link>
                            </>
                    )}
                </div>
            </div>
            {
                user?.email &&
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                                    {user.photoURL ? (
                                        <img style={{ width: '100%' }} src={user.photoURL} alt="User Avatar" />
                                    ) : (
                                        <img style={{ width: '100%' }} src={defaultImageURL} alt="Default Avatar" />
                                    )}
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link className="justify-between">
                                        {
                                            user?.email && <span>{user.email}</span>
                                        }
                                    </Link>
                                </li>
                                <li onClick={handleSignOut}><Link>Logout</Link></li>
                            </ul>
                        </div>
                    </div>
            }
        </div>
        
    );
};

export default Header;
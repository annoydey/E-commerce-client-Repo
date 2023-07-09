import React, { useContext, useState } from 'react';
import logo from '../../images/Logo.png';
import '../Header/Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import defaultImageURL from '../../images/defaultAvatar.png';
import { Transition } from "@headlessui/react";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error));
    }

    return (
        <div className='header'>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-8 w-10 mt-3"
                                src={logo}
                                alt=""
                            />
                        </div>
                        <div className="hidden md:block sm:hidden ml-auto mt-2">
                            <div className="ml-10 flex items-center space-x-4">
                                <Link
                                    className="hover:bg-[#ff9900] hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                                    to="/"
                                >
                                    Shop
                                </Link>

                                <Link
                                    className="hover:bg-[#ff9900] hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                                    to="/orders"
                                >
                                    Orders
                                </Link>

                                <Link
                                    className="hover:bg-[#ff9900] hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                                    to="/inventory"
                                >
                                    Inventory
                                </Link>

                                <Link
                                    className="hover:bg-[#ff9900] hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                                    to="/about"
                                >
                                    About
                                </Link>
                                {
                                    !user?.email && (
                                        <>
                                            <Link
                                                className="hover:bg-[#ff9900] hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                                                to="/login"
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                className="hover:bg-[#ff9900] hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                                                to="/register"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    )}

                                {
                                    user?.email &&
                                    <div className="flex-none">
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-6 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
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
                                                <li onClick={handleSignOut}><Link className='logout'>Logout</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden mobilenav">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden flex justify-center" id="mobile-menu">
                            <div ref={ref} className="w-full px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <div className="text-center">
                                    <Link
                                        className="hover:bg-[#ff9900] hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium block"
                                        to="/"
                                    >
                                        Shop
                                    </Link>
                                    <Link
                                        className="hover:bg-[#ff9900] hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium block"
                                        to="/orders"
                                    >
                                        Orders
                                    </Link>
                                    <Link
                                        className="hover:bg-[#ff9900] hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium block"
                                        to="/inventory"
                                    >
                                        Inventory
                                    </Link>
                                    <Link
                                        className="hover:bg-[#ff9900] hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium block"
                                        to="/about"
                                    >
                                        About
                                    </Link>
                                    {!user?.email && (
                                        <>
                                            <Link
                                                className="hover:bg-[#ff9900] hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium block"
                                                to="/login"
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                className="hover:bg-[#ff9900] hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium block"
                                                to="/register"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    )}
                                    {user?.email && (
                                        <div className="flex justify-center">
                                            <div className="dropdown dropdown-end">
                                                <label
                                                    tabIndex={0}
                                                    className="btn btn-ghost btn-circle avatar"
                                                >
                                                    <div className="w-6 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                                                        {user.photoURL ? (
                                                            <img
                                                                style={{ width: '100%' }}
                                                                src={user.photoURL}
                                                                alt="User Avatar"
                                                            />
                                                        ) : (
                                                            <img
                                                                style={{ width: '100%' }}
                                                                src={defaultImageURL}
                                                                alt="Default Avatar"
                                                            />
                                                        )}
                                                    </div>
                                                </label>
                                                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li>
                                                        <Link className="justify-between">
                                                            {user?.email && <span>{user.email}</span>}
                                                        </Link>
                                                    </li>
                                                    <li onClick={handleSignOut}>
                                                        <Link>Logout</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default Header;
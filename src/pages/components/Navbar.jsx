import { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { Avatar } from '@mantine/core';

export default function Navbar() {
    const [user, setUser] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //get location /....
    const location = useLocation();














    ////////////////////////////////////
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse ">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/B-logo-1.png" className="h-8" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mini-Bank</span>
                </Link>


                {/* Boutons à droite */}
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                    {
                        user ?
                            ( <Avatar color="cyan" radius="xl">MK</Avatar> )

                            :

                            (<Link to={"/login"} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Get started</Link>)

                }




                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Menu principal */}
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to={"/"}
                               className={`block py-2 px-3 ${location.pathname.length < 2 ? `text-blue-700` : `dark:text-white text-gray-900`} 
                               rounded md:bg-transparent md:p-0 hover:text-blue-700`}
                               aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={"/about"}
                               className={`block py-2 px-3 hover:text-blue-700 ${location.pathname.includes("about") ? `text-blue-700` : `dark:text-white text-gray-900`} 
                               rounded md:bg-transparent md:p-0 `}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to={"/services"}
                               className={`block py-2 px-3 hover:text-blue-700 ${location.pathname.includes("services") ? `text-blue-700` : `dark:text-white text-gray-900`} 
                               rounded md:bg-transparent md:p-0 `}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to={"/contact"}
                               className={`block py-2 px-3 hover:text-blue-700 ${location.pathname.includes("contact") ? `text-blue-700` : `dark:text-white text-gray-900`} 
                               rounded md:bg-transparent md:p-0`}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

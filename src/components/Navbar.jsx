import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QYGLogo from '../assets/qyg-logo.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#F5EFE0] border-gray-200 relative">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo and Burger */}
                <div className="flex items-center justify-between w-full">
                    <Link to="/" className="flex items-center space-x-3 hover:text-[#D41367] transition-colors">
                        <img src={QYGLogo} className="h-8 w-auto" alt="QYG Logo" />
                        <span className="text-2xl font-medium text-[#D41367] whitespace-nowrap font-alegreya-sans">
                            Queer Youth Group
                        </span>
                    </Link>
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center p-2 w-10 h-10 text-[#D41367] rounded-lg hover:bg-[#D41367] hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>

                {/* Navbar links */}
                <div className={`
                    w-full transition-all duration-500 ease-in-out 
                    overflow-hidden ${isOpen ? "max-h-screen h-auto opacity-100 overflow-y-auto" : "max-h-0 opacity-0"} 
                    lg:max-h-0 lg:opacity-0 lg:transition-all lg:duration-500 lg:ease-in-out lg:overflow-hidden
                    ${isOpen ? "lg:max-h-screen lg:h-auto lg:opacity-100" : "lg:max-h-0 lg:opacity-0"}`}>
                    <ul className="
                        flex flex-col py-4 px-4 transition-all duration-500 ease-in-out
                        lg:flex-row lg:items-center lg:space-x-4 lg:py-2 lg:px-0">
                        {[ 
                            { path: "/", label: "Home"},
                            { path: "/about", label: "About" },
                            { path: "/intro", label: "Introduction" },
                            { path: "/history", label: "History" },
                            { path: "/objectives", label: "Objectives" },
                            { path: "/values", label: "Values" },
                            { path: "/movement", label: "Movement" },
                            { path: "/team", label: "Our Team" },
                            { path: "/values", label: "Litigation" },
                            { path: "/values", label: "Research" },
                            { path: "/resources", label: "Resources" },
                            { path: "/values", label: "Publications" },
                        ].map(({ path, label }) => (
                            <li key={path}>
                                <Link 
                                    to={path} 
                                    className="block py-2 px-3 text-[#D41367] rounded-md transition duration-300 ease-in-out hover:bg-[#D41367] hover:text-white"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

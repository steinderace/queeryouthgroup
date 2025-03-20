import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QYGLogo from '../assets/qyg-logo.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // For mobile menu
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false); // For dropdown

    return (
        <nav className="bg-[#F5EFE0] border-gray-200 relative">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo and Burger */}
                <div className="flex items-center justify-between w-full min-[1200px]:w-auto">
                    <Link 
                        to="/" 
                        className="flex items-center space-x-3 hover:text-[#D41367] transition-colors"
                    >
                        <img src={QYGLogo} className="h-8 w-auto" alt="QYG Logo" />
                        <span className="text-2xl font-medium text-[#D41367] whitespace-nowrap font-alegreya-sans">
                            Queer Youth Group
                        </span>
                    </Link>
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="min-[1200px]:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-[#D41367] rounded-lg hover:bg-[#D41367] hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>

                {/* Navbar links */}
                <div className={`
                    w-full min-[1200px]:w-auto 
                    min-[1200px]:flex 
                    transition-all duration-300 ease-in-out 
                    overflow-hidden 
                    ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                    min-[1200px]:max-h-none min-[1200px]:opacity-100
                    bg-[#F5EFE0] z-50
                `}>
                    <ul className="flex flex-col min-[1200px]:flex-row min-[1200px]:space-x-1 py-4 min-[1200px]:py-0">
                        {[
                            { path: "/", label: "Home"},
                            { 
                                path: "/about", 
                                label: "About Us ▾",
                                dropdown: [
                                    { path: "/introduction", label: "Introduction" },
                                    { path: "/history", label: "History" },
                                    { path: "/objectives", label: "Objectives" },
                                    { path: "/our-values", label: "Our Values" },
                                    { path: "/our-movement", label: "Our Movement" }
                                ]
                            },
                            { path: "/team", label: "Our Team" },
                            { path: "/research", label: "Research" },
                            { path: "/resources", label: "Legal Resources" },
                            { path: "/litigations", label: "Litigations" },
                            { path: "/publications", label: "Publication" },
                            { path: "/dictionary", label: "Dictionary" }
                        ].map(({ path, label, dropdown }) => (
                            <li 
                                key={path} 
                                className="relative"
                            >
                                <Link 
                                    to={path} 
                                    className="block py-2 px-3 text-[#D41367] rounded-md transition duration-300 ease-in-out hover:bg-[#D41367] hover:text-white"
                                    onClick={(e) => {
                                        if (dropdown) {
                                            e.preventDefault(); // Prevent navigation for dropdown toggle
                                            setIsAboutDropdownOpen(!isAboutDropdownOpen); // Toggle dropdown
                                        }
                                    }}
                                >
                                    {label}
                                </Link>
                                {dropdown && (
                                    <ul className={`
                                        pl-4 min-[1200px]:pl-0 min-[1200px]:absolute min-[1200px]:top-full min-[1200px]:left-0 min-[1200px]:bg-[#F5EFE0] min-[1200px]:shadow-lg
                                        transition-all duration-300 ease-in-out 
                                        ${isAboutDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                        min-[1200px]:max-h-none min-[1200px]:opacity-100
                                    `}>
                                        {dropdown.map(({ path: dropdownPath, label: dropdownLabel }) => (
                                            <li key={dropdownPath}>
                                                <Link 
                                                    to={dropdownPath} 
                                                    className="block py-2 px-3 text-[#D41367] rounded-md transition duration-300 ease-in-out hover:bg-[#D41367] hover:text-white"
                                                >
                                                    {dropdownLabel}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
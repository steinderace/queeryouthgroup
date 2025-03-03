import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import QYGLogo from '../assets/QYGpng.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#F5EFE0] h-20 border-gray-200 flex items-center">
            <div className="max-w-screen-xl flex w-full items-center justify-between mx-auto px-4"> {/* Use w-full */}
                
                {/* Logo and Title */}
                <div className="flex items-center space-x-3">
                <img src={QYGLogo} className="h-16 w-auto" alt="QYG Logo" />
                <span className="text-2xl font-medium text-[#D41367] whitespace-nowrap font-alegreya-sans">Queer Youth Group</span>
                </div>

                {/* Burger menu for collapse */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="min-[1200px]:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-[#D41367] rounded-lg hover:bg-[#D41367] hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                {/* Navbar links */}
                <div className={
                    `transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"} min-[1200px]:flex items-center`
                    }> 
                    {/* Ensure `items-center` here */}
                    <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
                        {[
                        { path: "/about", label: "About Us" },
                        { path: "/contact", label: "Contact Us" },
                        { path: "/blog", label: "Blog" },
                        { path: "/donate", label: "Donate" },
                        { path: "/services", label: "Our Services" },
                        { path: "/team", label: "Our Team" },
                        { path: "/resources", label: "Resources" }
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
    )
}

export default Navbar
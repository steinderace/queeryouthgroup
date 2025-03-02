import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import QYGLogo from '../assets/QYGpng.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{ backgroundColor: "#F5EFE0" }} className="h-16 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
                {/* Logo and Title */}
                <div className="flex items-center justify-start space-x-3">
                    <img src={QYGLogo} className="h-12 w-auto" alt="QYG Logo" />
                    <span style={{ color: "#D41367" }} className="self-center text-2xl font-medium text-[#D41367] whitespace-nowrap dark:text-white font-alegreya-sans"> Queer Youth Group </span>
                </div>

                {/* Burger menu for collapse */}
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                {/* Navbar links */}
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-normal font-noto-sans flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link to="/about" className="block py-2 px-3 text-[#D41367] rounded-md transition duration-300 ease-in-out bg-transparent hover:bg-[#D41367] hover:text-white" aria-current="page">
                                About Us
                            </Link>
                        </li>
                        <li>
                                <Link to="/contact" className="block py-2 px-3 text-[#D41367] rounded-md transition duration-300 ease-in-out bg-transparent hover:bg-[#D41367] hover:text-white" aria-current="page">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="block py-2 px-3 text-[#D41367] rounded-md transition duration-300 ease-in-out bg-transparent hover:bg-[#D41367] hover:text-white" aria-current="page">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/donate" className="block py-2 px-3 text-[#D41367] rounded-md transition duration-300 ease-in-out bg-transparent hover:bg-[#D41367] hover:text-white" aria-current="page">
                                Donate
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="block py-2 px-3 text-[#D41367] rounded-md transition duration-300 ease-in-out bg-transparent hover:bg-[#D41367] hover:text-white" aria-current="page">
                                Our Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/team" className="block py-2 px-3 text-[#D41367] rounded-md transition duration-300 ease-in-out bg-transparent hover:bg-[#D41367] hover:text-white" aria-current="page">
                                Our Team
                            </Link>
                        </li>
                        <li>
                            <Link to="/resources" className="block py-2 px-3 text-[#D41367] rounded-md transition duration-300 ease-in-out bg-transparent hover:bg-[#D41367] hover:text-white" aria-current="page">
                                Resources
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#E0E5F5] py-6">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        </div>
        
        {/* Divider line */}
        <div className="mx-auto w-[90%] h-[1px] bg-gray-400"></div>

        {/* Bottom text */}
        <div className="text-center text-xs mt-4 font-open-sans">
            &copy; {new Date().getFullYear()} Queer Youth Group. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer
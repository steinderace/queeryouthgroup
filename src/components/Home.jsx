import React from 'react'

import LandingPageImage from '../assets/images/3.-Nepal-Pride-Parade-2019.jpg'

const Home = () => {
  return (
    <div className="w-full flex flex-col flex-grow">
        <div className='p-4 flex flex-row items-center bg-[#d41367]/36 gap'>
            {/* Left side - image */}
            <div className="bg-white w-1/2">
                <img src={LandingPageImage} alt="homepage-image" className="w-full h-full object-cover"/>
            </div>

            {/* Right side - text*/}
            <div className="w-1/2 flex justify-center items-center p-8">
                <h2 className="text-white text-3xl font-semibold font-amesthysta">
                    Welcome to <br/> Queer Youth Group Nepal
                </h2>
            </div>
        </div>
        <div className="p-4 flex flex-row items-center bg-[#e0e5f5]">
            Something something goes here
        </div>
        <div className="p-4 flex flex-row items-center bg-[#d41367]/36">
            Something something goes here
        </div>
        <div className="p-4 flex flex-row items-center bg-[#f5efe0]">
            Something something goes here
        </div>
    </div>
    
  )
}

export default Home
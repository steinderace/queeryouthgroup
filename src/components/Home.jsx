import React from 'react'

const Home = () => {
  return (
    <div className="w-full flex flex-col flex-grow">
        <div className='p-4 flex flex-row items-center bg-[#d41367]/36'>
            <h1 class="text-3xl font-bold underline">
                Hello World!
            </h1>
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
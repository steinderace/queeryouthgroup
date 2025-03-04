import './App.css'

import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='p-4 flex flex-col items-center bg-[#d41367]/36'>
          <h1 class="text-3xl font-bold underline">
            Hello World!
          </h1>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css'

import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <h1 class="text-3xl font-bold underline">
          Hello World!
        </h1>
      </BrowserRouter>
    </>
  )
}

export default App

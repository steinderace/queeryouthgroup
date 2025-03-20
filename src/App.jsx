import './App.css'

import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'

import Dictionary from './components/pages/Dictionary'
import History from './components/pages/History'
import Intro from './components/pages/Intro'
import Liti from './components/pages/Liti'
import Movement from './components/pages/Move'
import Objectives from './components/pages/Obj'
import Publication from './components/pages/Pub'
import Research from './components/pages/Research'
import Resources from './components/pages/Resources'
import Team from './components/pages/Team'
import Values from './components/pages/Values'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <div className='flex flex-grow w-full'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/introduction' element={<Intro />}/>
            <Route path='/history' element={<History />}/>
            <Route path='/objectives' element={<Objectives />}/>
            <Route path='/values' element={<Values />}/>
            <Route path='/movement' element={<Movement />}/>
            <Route path='/team' element={<Team />}/>
            <Route path='/research' element={<Research />}/>
            <Route path='/resources' element={<Resources />}/>
            <Route path='/litigations' element={<Liti />}/>
            <Route path='/publications' element={<Publication />}/>
            <Route path='/dictionary' element={<Dictionary />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

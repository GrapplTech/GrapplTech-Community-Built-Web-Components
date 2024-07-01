import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Food from './Pages/Food/Food'
import Drinks from './Pages/Drinks/Drinks'
import About from './Pages/About-us/About'
function App() {
  return (
    <div className='px-10'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/food' element={<Food/>} />
          <Route path='/drinks' element={<Drinks/>} />
          <Route path='/about-us' element={<About/>} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
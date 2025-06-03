import { BrowserRouter as Router, Routes, Route, Link } from "react-router"
import React from 'react'
import Home from './components/Home'
import Add from './components/Add'
import Read from './components/Read'
import Header from "./elements/Header"

function App() {

  return (
    <>
    <Header />
      <Router>
        <nav className='bg-[#463120] shadow-lg h-[8vh]'>
          <div className='flex justify-start items-center px-2 font-semibold text-lg h-full '>
              
                <Link to='/'
                  className='text-white hover:text-gray-300 hover:bg-[#795a40] my-auto py-2 px-8'
                >Home</Link>
              
                <Link to='/read'
                  className='text-white hover:text-gray-300 my-auto  hover:bg-[#795a40] py-2 px-8'
                >Read Blogs</Link>
              
                <Link to='/add'
                  className='text-white hover:text-gray-300 my-auto  hover:bg-[#795a40] py-2 px-8'
                >Add Blogs</Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/read' element={<Read />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

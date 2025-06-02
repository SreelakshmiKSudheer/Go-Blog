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
          <div className='flex justify-start items-center px-10 font-semibold text-lg h-full space-x-4'>
              
                <Link to='/'
                  className='text-white hover:text-gray-300 my-auto'
                >Home</Link>
              
                <Link to='/read'
                  className='text-white hover:text-gray-300 my-auto'
                >Read Blogs</Link>
              
                <Link to='/add'
                  className='text-white hover:text-gray-300 my-auto'
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

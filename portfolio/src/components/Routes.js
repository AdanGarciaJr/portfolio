import React from 'react'
import { Routes,Route  } from 'react-router-dom';
import Home from '../pages/home'
import Contact from '../pages/contact'
import About from '../pages/aboutMe'

const Routers = () => {
    return(
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
    )
}
export default Routers;
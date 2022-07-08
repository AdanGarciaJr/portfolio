import React from 'react'
import { Routes,Route  } from 'react-router-dom';
import Home from '../pages/home'
import Contact from '../pages/contact'

const Routers = () => {
    return(
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    )
}
export default Routers;
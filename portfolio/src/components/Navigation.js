import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Styling/styles.css'

const Navigation = props => {
    return(
        <section>
            <ul className="navigation">
                <li ><NavLink className='link-react' to="/home">Portfolio</NavLink></li>
                <li ><NavLink className='link-react' to="/About">About</NavLink></li>
                <li ><NavLink className='link-react' to="/contact">Contact</NavLink></li>
            </ul>
        </section>
    )
}

export default Navigation
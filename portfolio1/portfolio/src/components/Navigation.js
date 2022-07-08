import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Styling/styles.css'

const Navigation = props => {
    return(
        <section>
            <ul className="navigation">
                <li ><NavLink to="/home">Portfolio</NavLink></li>
                <li ><NavLink to="/contact">Contact</NavLink></li>
                <li ><NavLink to="/UserAccount">Account</NavLink></li>
                <li ><NavLink to="/About">About</NavLink></li>
            </ul>
        </section>
    )
}

export default Navigation
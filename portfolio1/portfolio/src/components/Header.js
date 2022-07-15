import React from 'react';
import { Link } from 'react-router-dom';
import '../Styling/styles.css'
import Photo from '../images/diaphragm.png'
import Github from '../images/github.png'
import Linked from '../images/linkedin.png'
import Sound from '../images/soundcloud-logo.png'
import Youtube from '../images/youtube.png'


const Header = props => {
    return(
        <section className='header-container'>
            <section>
                <ul className="socials-list">
                    <li><a href="https://akphotographytx.myportfolio.com/"><img src={Photo} alt="logo" width="50px"/></a></li>
                    <li><a href="#"><img src={Github} alt="logo" width="50px"/></a></li>
                    <li><a href="https://www.linkedin.com/in/adan-garcia-560631244/"><img src={Linked} alt="logo" width="50px"/></a></li>
                    <li><a href="https://soundcloud.com/aidehn"><img src={Sound} alt="logo" width="50px"/></a></li>
                    <li><a href="https://www.youtube.com/channel/UCPGb6GmiqV02e8sH7JnYxJg"><img src={Youtube} alt="logo" width="50px"/></a></li>
                </ul>
            </section>
            <h1 className='header-logo'>Adan Garcia Jr.</h1>
            <h2 className='header-sub'>Web Developer | Photographer | Musician | Cinematographer</h2>
            
        </section>
    )
}

export default Header


import React from 'react'
import '../Styling/styles.css'
import Photo from '../images/diaphragm.png'
import Github from '../images/github.png'
import Linked from '../images/linkedin.png'
import Sound from '../images/soundcloud-logo.png'
import Youtube from '../images/youtube.png'

const Contact = props => {
    return(
        <section>
            <h1 className='page-title'>Contact Me</h1>
            <section>
                <section className="contact-page">
                    <h3 className="in-touch">Get in Touch!</h3>
                    <p className="contact-description">Send me an email at</p>
                    <p className="contact-info">adangarciajr.tx@gmail.com</p>
                    <p className="contact-description">Give me a call at</p>
                    <p className="contact-info">956-639-4717</p>
                    <p className="contact-description">More ways to reach me</p>
                    <ul className="socials-list-contact">
                    <li><a href="https://akphotographytx.myportfolio.com/"><img src={Photo} alt="logo" width="50px"/></a></li>
                    <li><a href="#"><img src={Github} alt="logo" width="50px"/></a></li>
                    <li><a href="https://www.linkedin.com/in/adan-garcia-560631244/"><img src={Linked} alt="logo" width="50px"/></a></li>
                    <li><a href="https://soundcloud.com/aidehn"><img src={Sound} alt="logo" width="50px"/></a></li>
                    <li><a href="https://www.youtube.com/channel/UCPGb6GmiqV02e8sH7JnYxJg"><img src={Youtube} alt="logo" width="50px"/></a></li>
                </ul>
                </section>
            </section>
        </section>
    )
}

export default Contact
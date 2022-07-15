import React from 'react'
import '../Styling/styles.css'
import Adan from "../images/adan.png"

const AboutMe = props => {
    return(
        <section>
            <h1 className='page-title'>About Me</h1>
            <section>
                <div className="aboutMe-container">
                    <img className="headshot" src={Adan} alt="adan"></img>
                    <div className="headshot-info">
                        <h3 className="aboutMe-name">Adan Garcia Jr.</h3>
                        <p className="aboutMe-description">Brownsville, TX | Age: 29</p>
                        <p className="aboutMe-fullDescription">Adan is a Web Developer from Brownsville Texas who earned his bachelor's degree from Full Sail University.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default AboutMe
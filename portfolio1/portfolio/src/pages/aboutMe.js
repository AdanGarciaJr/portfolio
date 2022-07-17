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
                        <p className="aboutMe-fullDescription">I am a Web Developer from Brownsville Texas and I earned my bachelor's degree
                        in Web Development/Web Design from Full Sail University. I am the type of person who enjoys taking complex problems 
                        and turning them into working web appplications that users will enjoy using.
                        </p>
                        <p className="aboutMe-fullDescription">When Im not coding, you will usually find me producing music, running professional photoshoots, or filming and editing
                            Youtube videos for my channel Spirits Collective.
                        </p>
                    </div>
                </div>
                <h2 className='page-title'>More About Me</h2>
                <section className="moreAboutMe-container">
                    <h3 className="moreAboutMe-title">Spirits Collective Youtube Channel</h3>
                    <iframe className="spirits-video" width="774px" height="400px" src="https://www.youtube.com/embed/FUJUXEKghOQ"></iframe>
                    <p className="aboutMe-fullDescription">Spirits Collective is a Youtube Channel that my cousin and I started at the beginning of 2022. The point of the channel 
                        is to review different bottles from the perspective of beginners. We do reviews for people who want to get into sipping 
                        different spirits, but dont know where to start. <br></br><br></br> I am responsible for all the editing, cinematography, and original music on the channel. 
                        
                    </p>
                </section>
                <section className="moreAboutMe-container">
                    <h3 className="moreAboutMe-title">Aidehn</h3>
                    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1114398199&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    <p className="aboutMe-fullDescription">One of my biggest passions is music. I play guitar, bass, drums, and I also produce music. Because of my passion for music 
                    I've had the opportunity to play drums for the biggest church in Brownsville. I mostly make music for myself these days, and it's important to me to experiment with different genres and sounds.
                    </p>
                </section>
            </section>
        </section>
    )
}

export default AboutMe
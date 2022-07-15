import React from 'react'
import '../Styling/styles.css'
import Aidehn from '../images/aidehn.png'
import CinePho from '../images/cinepho.png'
import CreativePro from '../images/creativepro.png'


const Home = props => {
    return(
        <section>
            <h1 className='page-title'>Portfolio</h1>
            <section>
                <ul className="portfolio-articles-list">
                    <li>
                        <article className="article-container">
                            <img className="screenshot-website" src={Aidehn} alt="Site screenshot"/>
                            <div className="links-container">
                                <a className="link-article" href="https://adangarciajr.github.io/aidehn/">Aidehn Pages Link</a>
                                <a className="link-article" href="https://github.com/AdanGarciaJr/aidehn.git">Aidehn GitHub Link</a>
                            </div>
                            <p className="description-website">Side project I've been working on that showcases some of the stuff I've worked on.</p>
                        </article>
                    </li>
                    <li>
                        <article className="article-container">
                            <img className="screenshot-website" src={CinePho} alt="Site screenshot"/>
                            <div className="links-container">
                                <a className="link-article" href="https://adangarciajr.github.io/CinePho/">CinePho Pages Link</a>
                                <a className="link-article" href="https://github.com/AdanGarciaJr/CinePho.git">CinePho GitHub Link</a>
                            </div>
                            <p className="description-website">One of my projects that I worked on for school. It's meant to be clickthrough, but the actual lessons don't work.</p>
                        </article>
                    </li>
                    <li>
                        <article className="article-container">
                            <img className="screenshot-website" src={CreativePro} alt="Site screenshot"/>
                            <div className="links-container">
                                <a className="link-article" href="https://adangarciajr.github.io/aidehn/">Aidehn Pages Link</a>
                                <a className="link-article" href="https://github.com/AdanGarciaJr/aidehn.git">Aidehn GitHub Link</a>
                            </div>
                            <p className="description-website">Side project I've been working on that showcases some of the stuff I've worked on.</p>
                        </article>
                    </li>
                    <li>
                        <article className="article-container">
                            <img className="screenshot-website" src={CreativePro} alt="Site screenshot"/>
                            <div className="links-container">
                                <a className="link-article" href="https://adangarciajr.github.io/aidehn/">Aidehn Pages Link</a>
                                <a className="link-article" href="https://github.com/AdanGarciaJr/aidehn.git">Aidehn GitHub Link</a>
                            </div>
                            <p className="description-website">Side project I've been working on that showcases some of the stuff I've worked on.</p>
                        </article>
                    </li>
                </ul>
            </section>
        </section>
    )
}

export default Home
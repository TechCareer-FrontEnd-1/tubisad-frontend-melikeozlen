import React from 'react'
import './Header.scss'
const Header = () => {
    return (
        <header id='header'>
            <div className="title">
                <h2>
                    HELLO, I'M MELİKE ...
                </h2>
                <p>
                    Frontend | React Developer
                </p>
            </div>

            <div className="protfolio">
                <p>//portfolio.js</p>
                <p>const whatAmIUsing = [...prew, "ReactJS", "HTML", "JavaScript", "CSS", "JSON", "Redux", "Tailwind"];</p>
                <p>const whatAmILearning = ["GIT", "MERN", "Sass", "NextJS" ];</p>
            </div>
        </header>
    )
}

export default Header
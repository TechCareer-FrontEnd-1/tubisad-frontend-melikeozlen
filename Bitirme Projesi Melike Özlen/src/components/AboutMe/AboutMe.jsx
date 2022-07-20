import React from 'react'
import './AboutMe.scss'
import profile from '../../assets/image/golang.png'
const AboutMe = () => {
    return (
        <section id='about-me' className="mx-auto">

            <div className="parallax"></div>
            <div className="about-me">
                <div className="div">
                    <img src={profile} alt="" />
                </div>
                <div className="about ">Merhaba. Ben Melike! <br /> 25 yaşındayım. Sakarya Üniversitesi Bilgisayar Mühendisliğinden mezunum. Web teknolojileri ile ilgileniyorum. <br />  Front-end tarafında çalışmayı seviyorum. React geliştiriyorum ve bu alanda çalışıyorum <br /> Önceliğim Front-end olmak ile birlikte kendimi fullstack olarak da geliştirmek istiyorum.
                </div>
            </div>

        </section>
    )
}

export default AboutMe
import axios from 'axios'
import { useEffect, useState } from 'react'
import './Project.scss'

import ProjectCard from './ProjectCard'
const Project = () => {
    const [myProject, setMyProject] = useState([])
    const [lang, setLang] = useState('TR')
    const getMyProject = async () => {
        const res = await axios.get("https://melikeozlen-portfolio.herokuapp.com/getproject/");
        setMyProject(res.data);
    }
    useEffect(() => {
        getMyProject();
        window.addEventListener("scroll", projectAnimation)
    }, [])
    const projectAnimation = () => {
        if (window.scrollY >= 2266) {
            document.querySelector("#project").classList.add("project-card-animation");
        } else { document.querySelector("#project").classList.remove("project-card-animation"); }
    }
    return (
        <div id='project' className='row w-100 d-flex p-4 flex-column'>
            <button className='btn btn-outline-info w-25 mx-auto m-4' onClick={()=>setLang(lang == 'TR' ? 'ENG' : 'TR')}>{lang}</button>
            <div className='row w-100 d-flex p-4'>
            {myProject.map((project, index) => {
                return <div key={index} className="col-lg-3 col-md-6">
                    <ProjectCard data={project} index={index} lang={lang}/>
                </div>


            })}
            </div>
        </div>
    )
}

export default Project
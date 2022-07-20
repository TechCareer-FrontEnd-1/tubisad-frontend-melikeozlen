import React, { useState, useEffect } from 'react'
import './Project.scss'

const ProjectCard = ({ data, lang }) => {
    const [tags, setTags] = useState(data.tag);

    return (
        <div>
            {data ?
                <div id='project-card' className="card p-2" style={{ marginLeft: "1rem", marginBottom: "2rem", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", border: "0" }} >
                    <img src={data.img_url} alt="" />
                    <div className="card-body d-flex flex-column gap-3">
                        <h5 className="card-title text-dark text-uppercase">{lang === 'ENG' ? data.title[0] : data.title[1]}</h5>
                        <div className='d-flex gap-1' style={{ flexWrap: "wrap" }}>
                            {
                                tags.map((tag, index) => {
                                    return <span key={index} className="card-subtitle mb-2 text-light p-1" style={{ fontSize: "0.75rem", backgroundColor: "#00c9db", borderRadius: "10px" }} >{tag}</span>
                                })

                            }
                        </div>
                        <p className="card-text text-dark">{lang === 'ENG' ? data.description[0] : data.description[1]}</p>
                        <a href={data.project_url} className="card-link text-info" target="_blank">Github link</a>
                    </div>
                </div>
                :
                <p>loding</p>
            }
        </div>
    )
}

export default ProjectCard
import React, { useEffect, useState, useRef, createRef } from 'react';
import projectData from '../static/project_data';
import '../styles/Projects.css';

const Card = ({ ref, title, description }) => {
    var [ax, setAx] = useState(0);
    var [ay, setAy] = useState(0);

    ref = createRef();

    const handleMouseMovement = (event) => {
        var boundingBox = ref.current.getBoundingClientRect()
        setAx((boundingBox.x + boundingBox.width / 2 - event.screenX) / 25);
        setAy((boundingBox.y + boundingBox.height / 2 - event.screenY) / 15);
    }

    const handleMouseOff = (event) => {
        setAx(0);
        setAy(0);
    }

    return (
        <div ref={ref} className="projects column is-4" onMouseMove={handleMouseMovement} onMouseOut={handleMouseOff}>
            <div className="mycard" style={{ transform: 'rotateY(' + ax + 'deg) rotateX(' + ay + 'deg)' }} >
                <div className="mycard-content">
                    <p className="title">
                        {title}
                    </p>
                    <p className="subtitle">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    var projects = projectData.map(function (project, index) {
        console.log(project)
        return (
            <Card key={index} title={project.name} description={project.description} />
        );
    });
    return (
        <div className="projects container">
            <div className="title">My Projects</div>
            <div className="projects columns is-multiline" >
                {projects}
            </div>
        </div>
    )
}

export default Projects
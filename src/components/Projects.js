import React, { useState, createRef } from 'react';
import projectData from '../static/project_data';
import '../styles/Projects.css';

const Card = ({ ref, title, description, tags, image, link }) => {
    var [ax, setAx] = useState(0);
    var [ay, setAy] = useState(0);
    var [mouseOn, setMouseOn] = useState(false)

    ref = createRef();

    const handleMouseOver = (event) => {
        setMouseOn(true);
        ref.current.children[0].style.backgroundImage = "url(" + image + ")"
    }

    const handleMouseMovement = (event) => {
        var boundingBox = ref.current.getBoundingClientRect()
        setAx((boundingBox.x + boundingBox.width / 2 - event.screenX) / 25);
        setAy((boundingBox.y + boundingBox.height / 2 - event.screenY) / 15);
    }

    const handleMouseOff = (event) => {
        setAx(0);
        setAy(0);
        setMouseOn(false);
        ref.current.children[0].style.backgroundImage = null;
    }

    const Tags = ({ tags }) => {
        return <div className="container">
            {tags.map((tag) =>
                <span class="tag is-warning">
                    {tag}
                </span>
            )}</div>
    }

    return (
        <a href={link} target="blank" ref={ref} className="projects column is-4" onMouseOver={handleMouseOver} onMouseMove={handleMouseMovement} onMouseOut={handleMouseOff}>
            <div className="mycard" style={{ transform: 'rotateY(' + ax + 'deg) rotateX(' + ay + 'deg)' }} >
                <div className={mouseOn ? "hidden mycard-content" : "mycard-content"}>
                    <p className="title">
                        {title}
                    </p>
                    <p className="">
                        {description}
                    </p>
                    <div className="tags is-light">
                        <Tags tags={tags} />
                    </div>
                </div>
            </div>
        </a>
    )
}

const Projects = () => {
    var projects = projectData.map(function (project, index) {
        console.log(project)
        return (
            <Card key={index} title={project.name} description={project.description} tags={project.tags.split(" ")} image={project.image} link={project.url} />
        );
    });

    return (
        <div className="projects container">
            <div className="container">
                <div className="title">
                    My Projects
                </div>
            </div>
            <div className="projects columns is-multiline" >
                {projects}
            </div>
        </div>
    )
}

export default Projects
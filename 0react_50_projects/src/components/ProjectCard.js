import React from "react";


function ProjectCard({name, description, image}) {

    return (
        <div className="card">
            <h3>{name}</h3>
            <img src={image} alt="project image"></img>
            <p>{description}</p>
        </div>
    )

}

export default ProjectCard;
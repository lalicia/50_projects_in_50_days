import React from "react";
import {Link} from "react-router-dom";

function ProjectCard({name, description, image, link}) {
    console.log('this is link ',link)

    return (
        <div className="card">
            <h3>{name}</h3>
            <Link to={link}>
                <img src={image} alt="project image"></img>
            </Link>
            <p>{description}</p>
        </div>
    )

}

export default ProjectCard;
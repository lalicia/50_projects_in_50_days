import React from "react";

import "../../src/App.css"

import projects from "../assets/projectsdata.js";
import ProjectCard from "../components/ProjectCard.js";

function Home() {


    return (
        <div className="container">
            <h1>50 Projects in 50 Days</h1>
            <h2>This app is a translation of 50 HTML, CSS, and vanilla JavaScript projects, into React versions</h2>

            <div className="cards-container">
                {projects.map((project) => {
                    return <ProjectCard key={project.id} name={project.name} description={project.description} image={project.image} link={project.link} />
                })}
            </div>
        </div>
    )
}

export default Home;
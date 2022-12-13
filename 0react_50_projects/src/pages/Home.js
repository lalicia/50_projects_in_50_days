import React from "react";

import "../../src/App.css"

import projects from "../assets/projectsdata.js";
import ProjectCard from "../components/ProjectCard.js";

function Home() {


    return (
        <div className="container">
            <h1>50 Projects in 50 Days</h1>
            <h2>This app is a translation of Brad Traversy and Florin Pop's 50 HTML, CSS, and JavaScript projects into React versions</h2>
            <h2>Click <a className="home-a" href="https://www.udemy.com/course/50-projects-50-days/" target="_blank" rel="noreferrer">here</a> to visit their course site</h2>

            <div className="cards-container">
                {projects.map((project) => {
                    return <ProjectCard key={project.id} name={project.name} description={project.description} image={project.image} link={project.link} />
                })}
            </div>
        </div>
    )
}

export default Home;
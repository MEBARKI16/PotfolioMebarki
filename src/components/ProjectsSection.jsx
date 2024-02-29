import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ButtonProject from './ButtonProject';

const projectData = [
    {
        id: 1,
        title: "Afrahkom",
        description: "project description",
        image: "/afrahkom.png",
        tag: ["all", "web"],
        gitUrl: "/",
        prevUrl: "/"
    },
    {
        id: 2,
        title: "Afrahkom",
        description: "project description",
        image: "/afrahkom.png",
        tag: ["all", "web"],
        gitUrl: "/",
        prevUrl: "/"
    },
    {
        id: 3,
        title: "Afrahkom",
        description: "project description",
        image: "/afrahkom.png",
        tag: ["all", "web"],
        gitUrl: "/",
        prevUrl: "/"
    },
    {
        id: 4,
        title: "Afrahkom",
        description: "project description",
        image: "/afrahkom.png",
        tag: ["all", "web"],
        gitUrl: "/",
        prevUrl: "/"
    },
    {
        id: 5,
        title: "Afrahkom",
        description: "project description",
        image: "/afrahkom.png",
        tag: ["all", "web"],
        gitUrl: "/",
        prevUrl: "/"
    }
]
const ProjectsSection = () => {
    const [actifProject, setActifProject] = useState("all");

    return (
        <div>
            <h2 className="text-center text-2xl xl:text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
            <div className="text-white flex items-center justify-center gap-2 py-6">
                <ButtonProject isActif={actifProject === "all"} onClick={() => { setActifProject("all") }}>All</ButtonProject>
                <ButtonProject isActif={actifProject === "web"} onClick={() => { setActifProject("web") }}>Web</ButtonProject>
                <ButtonProject isActif={actifProject === "mobile"} onClick={() => { setActifProject("mobile") }}>Mobile</ButtonProject>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectData.map(projet => (projet.tag.includes(actifProject) && <ProjectCard key={projet.id} imgUrl={projet.image} title={projet.title} description={projet.description} gitUrl={projet.gitUrl} prevUrl={projet.prevUrl} />))}
            </div>
        </div>
    )
}

export default ProjectsSection;
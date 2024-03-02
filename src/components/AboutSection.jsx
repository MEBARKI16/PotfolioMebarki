import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>JavaScript</li>
                <li>React</li>
                <li>Next</li>
                <li>Laravel</li>
                <li>MySql</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Houari Boumediene University of Science and Technology (USTHB)</li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className="list-disc pl-2">
                <li>Professional License in Information Systems Engineering and Software Development</li>
                <li>Master&apos;s in Software Engineering</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const selectTab = (id) => {
        startTransition(() => { setTab(id) })
    }
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 items-center gap-8 xl:gap-12 px-4 pb-8 sm:pb-16 sm:px-16">
                <Image src="/About.jpg" alt="photo de MEBARKI" width={500} height={500} className="h-[100%]" />
                <div className="mt-4 md:mt-0">
                    <h2 className="text-2xl xl:text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-base xl:text-lg">
                        Iam a Software engenering and Web developer with a passion for creating interactive and responsive web applications. Ihave experience working width Javascript, React, Redux, Next, Laravel, MySql, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am exited to work with others to create amazing applications.
                    </p>
                    <div>
                        <TabButton selectTab={selectTab} id="skills" active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={selectTab} id="education" active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={selectTab} id="certification" active={tab === "certification"}>Certification</TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((x) => x.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;
import React from 'react';
import { HiCodeBracket } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, prevUrl }) => {
    return (
        <div>
            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
                style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'contain' }}
            >
                <div className="items-center justify-center gap-2 overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link href={gitUrl} className="h-14 w-14 border-2 border-[#ADB7BE] rounded-full relative hover:border-white group/Link">
                        <HiCodeBracket className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/Link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </Link>
                    <Link href={prevUrl} className="h-14 w-14 border-2 border-[#ADB7BE] rounded-full relative hover:border-white group/Link">
                        <IoEyeOutline className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/Link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </Link>
                </div>
            </div>
            <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;
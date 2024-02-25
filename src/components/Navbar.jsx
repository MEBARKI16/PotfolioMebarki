import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import MenuOverlay from './MenuOverlay';

const links = [
    {
        title: "About",
        link: "about"
    },
    {
        title: "Projects",
        link: "projects"
    },
    {
        title: "Contact",
        link: "contact"
    }
]
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex items-center justify-between p-4">
                <Link href="/"><Image src="/amine_mebarki_logo.png" width={100} height={100} style={{ width: "100px", height: "auto" }} /></Link>
                <div className="menu-mobile block md:hidden">
                    {
                        isOpen ?
                            <button className="text-slate-200 px-3 py-2 border border-slate-200 rounded" onClick={() => { setIsOpen(false) }}>
                                <XIcon className="w-5 h-5 text-white" />
                            </button>
                            :
                            <button onClick={() => { setIsOpen(true) }} className="text-slate-200 px-3 py-2 border border-slate-200 rounded">
                                <MenuIcon className="w-5 h-5" />
                            </button>
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex flex-col p-4 md:flex-row md:space-x-8">
                        {links.map((x, index) => <li key={index}><NavLink title={x.title} link={x.link} /></li>)}
                    </ul>
                </div>
            </div>
            {isOpen && <MenuOverlay links={links} />}
        </nav>
    )
}

export default Navbar;
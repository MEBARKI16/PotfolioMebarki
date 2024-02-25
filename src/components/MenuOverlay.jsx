import React from 'react'
import NavLink from './NavLink'
const MenuOverlay = ({ links }) => {
    return (
        <ul className="py-4 flex flex-col items-center">
            {links.map((link, index) => <li key={index}><NavLink link={link.link} title={link.title} /></li>)}
        </ul>
    )
}

export default MenuOverlay
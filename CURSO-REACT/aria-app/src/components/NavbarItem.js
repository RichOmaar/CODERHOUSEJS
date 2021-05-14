import React from 'react'

import './styles/Navbar.css';

const NavbarItem = ( { name, url } ) => {
    return (
        <>
            <li className="navItem">
                <a href={url}>{name}</a>
            </li>
        </>
    )
}

export default NavbarItem

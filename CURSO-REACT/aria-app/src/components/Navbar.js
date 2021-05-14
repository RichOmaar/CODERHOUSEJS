import React from 'react';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import logo from '../assets/logo-aria.png';
import './styles/Navbar.css';
import NavbarItem from './NavbarItem';

const Navbar = () => {
    return (
        <header>
            <ul className="navbar">        
                <li>
                    <a href="">
                        <div>
                            <img className="navLogo navItem" src={logo} alt="ARIA MX" />
                        </div>
                    </a>
                </li>
                <NavbarItem name="NOSOTROS" url="#"/>
                <NavbarItem name="SHOP" url="#"/>
                <NavbarItem name="CONTACTO" url="#"/>
                <ShoppingCartOutlinedIcon />
            </ul>
        </header>
    ); 
};

export default Navbar;
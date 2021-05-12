import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Button style={{ marginInline: "auto"}} color="inherit">NOSOTROS</Button>
                <Button style={{ marginInline: "auto"}} color="inherit">SHOP</Button>
                <Button style={{ marginInline: "auto"}} color="inherit">CONTACTO</Button>
            </Toolbar>
        </AppBar>
    ); 
};

export default Navbar;
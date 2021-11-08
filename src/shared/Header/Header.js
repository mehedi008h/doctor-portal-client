import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctor Portal
                    </Typography>
                    <NavLink to="/home" className="link">Home</NavLink>
                    {user?.email &&
                        <Box>
                            <NavLink to="/appointment" className="link">Appointment</NavLink>
                            <img className="user-img me-2" src={user?.photoURL} alt="" />
                            <NavLink to="/login" className="link">{user?.displayName}</NavLink>
                        </Box>
                    }
                    {user?.email ?
                        <Button onClick={logOut} color="inherit">Logout</Button> :
                        <NavLink to="/login" className="link">Login</NavLink>
                    }


                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
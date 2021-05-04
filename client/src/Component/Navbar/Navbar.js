import React from 'react';
import { useHistory } from 'react-router';

import useStyle from './styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import {HiOutlineHome, HiUserCircle, HiLogout} from 'react-icons/hi'


const Navbar = () => {
    const classes = useStyle();
    const history = useHistory()

    const handleLogOut = () => {
        history.push('/login');
        localStorage.clear();
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Container maxWidth="xl" className={classes.container}>
                    <List
                        component="nav"
                        aria-label="main-navigation"
                        className={classes.rigthList}>
                        <IconButton edge="start" className={classes.menuButton} href="/" color="inherit" aria-label="home">
                            <HiOutlineHome/>
                        </IconButton>
                        <IconButton edge="start" className={classes.menuButton} href="/profile" color="inherit" aria-label="home">
                            <HiUserCircle/>
                        </IconButton>
                        <h2 className={classes.brandLogo}>ToDo</h2>  
                    </List>
                    <IconButton edge="end" onClick={handleLogOut} color="inherit" aria-label="logout">
                        <HiLogout/>
                    </IconButton>
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    );
}
 
export default Navbar;
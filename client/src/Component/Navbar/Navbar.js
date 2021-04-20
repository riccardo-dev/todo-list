import React from 'react';
import { useHistory } from 'react-router';

import useStyle from './styles';
import logo from '../../assets/nav_logo.png';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import ExitToAppOutlined from '@material-ui/icons/ExitToAppOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    const classes = useStyle();
    const history = useHistory()


    const socialLink = [
        { title: 'github', path: 'https://github.com/riccardo-dev' },
        { title: 'instagram', path: 'https://www.instagram.com/andria.riccardo/' }
    ];

    const handleLogOut = () => {
        localStorage.removeItem('token');
        history.go('/login');
    }


    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Container maxWidth="xl" className={classes.container}>
                    <List
                        component="nav"
                        aria-label="main-navigation"
                        className={classes.container}
                    >
                        {socialLink.map(({title, path}) => (
                            <a href={path} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <IconButton>{title === 'github' ? <FaGithub className={classes.icon}/> : <FaInstagram className={classes.icon}/>}</IconButton>
                                </ListItem>
                            </a>
                        ))}
                    </List>                   
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="home">
                        <img className={classes.navImg} alt="brand logo" src={logo}/>
                    </IconButton>
                    {window.location.pathname === '/' ?  
                        <IconButton edge="end" onClick={handleLogOut} color="inherit" aria-label="logout">
                            <ExitToAppOutlined/>
                        </IconButton> : ''
                    }
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    );
}
 
export default Navbar;
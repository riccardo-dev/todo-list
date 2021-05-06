import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import Navbar from '../Component/Navbar/Navbar';
import useStyles from './styles/home';
import { Container } from '@material-ui/core';
import { TodoList } from '../Component/TodoList/TodoList';


const Home = () => {
    const [user, setUser] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        getCurrentUser();
    }, [])
    
    //get current user from localStorage
    const getCurrentUser = async () => {
        if(token){
            let currentUser = JSON.parse(localStorage.getItem('userLogged'));
            await axios.get(`/users/${currentUser._id}`)
            .then(res => {
                setUser(res.data);
            })
            .catch(err => console.log(err));
        } else {
            history.replace('/login');
            localStorage.clear();
        }
    }
    
    return (
        <>
            <Navbar/>
            <Container maxWidth="xl">
                <div className={classes.title}>
                    <h1>Welcome {user.username}</h1>
                </div>
                <div className={classes.main}>
                    <TodoList/>
                </div>
            </Container>
        </>
    );
}
 
export default Home;
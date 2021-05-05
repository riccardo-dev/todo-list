import React, { useContext, useEffect, useState } from 'react';
import useStyles from './styles/profile';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Navbar from '../Component/Navbar/Navbar';
import Container from '@material-ui/core/Container';
import {HiOutlineUser} from 'react-icons/hi';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import jwtDecode from 'jwt-decode';

const currentUser = JSON.parse(localStorage.getItem('userLogged'));

const Profile = () => {
    const classes = useStyles();
    const history = useHistory();
    const [updatedUser, setUpdatedUser] = useState('');
    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => {
        setCurrentUser(currentUser);
    }, [currentUser])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(updatedUser)
    }

    return (
        <>
            <Navbar/>
            <Container maxWidth="sm">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <HiOutlineUser/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                       Profile
                    </Typography>
                    <form noValidate onSubmit={handleSubmit} autoComplete="off" className={classes.form}>
                        <TextField 
                            variant="filled" 
                            margin="normal" 
                            required 
                            fullWidth 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            autoComplete
                            label="First Name" 
                            id="firstName" 
                            name="firstName"
                            onChange={e => setUpdatedUser({updatedUser, firstname: e.target.value })} 
                            type="text" 
                        />
                        <TextField 
                            variant="filled" 
                            margin="normal" 
                            required 
                            fullWidth 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            label="Last Name" 
                            id="lastName"
                            name="lastName"
                            onChange={e => setUpdatedUser({updatedUser, lastname: e.target.value })}
                            type="text" 
                        />
                        <TextField 
                            variant="filled" 
                            margin="normal" 
                            required 
                            fullWidth 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            label="Username" 
                            id="username"
                            name="username"
                            onChange={e => setUpdatedUser({updatedUser, username:e.target.value })}
                            type="text"
                        />
                        <TextField 
                            variant="filled" 
                            margin="normal" 
                            required 
                            fullWidth 
                            InputLabelProps={{
                                shrink: true,
                            }}
                            label="Email" 
                            id="email"
                            name="email"
                            onChange={e => setUpdatedUser({updatedUser, email:e.target.value })}
                            type="text"
                        />
                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Update User
                        </Button>
                    </form>
                </div>
            </Container>
        </>
    );
}
 
export default Profile;
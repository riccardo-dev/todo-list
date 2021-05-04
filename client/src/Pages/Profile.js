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
    const [user, setUser] = useState('');

    useEffect(() => {
        setUser(currentUser);
    }, [user])

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
                    <form noValidate /* onSubmit={handleSubmit} */ autoComplete="off" className={classes.form}>
                        <TextField 
                            variant="filled" 
                            margin="normal" 
                            required 
                            fullWidth 
                            label="First Name" 
                            id="firstName" 
                            name="firstName"
                            value={user.firstname}
                            onChange={e => setUser({ ...user, firstname: e.target.value })} 
                            type="text" 
                        />
                        <TextField 
                            variant="filled" 
                            margin="normal" 
                            required 
                            fullWidth 
                            label="Last Name" 
                            id="lastName"
                            name="lastName"
                            value={user.lastname}
                            onChange={e => setUser({ ...user, lastname: e.target.value })}
                            type="text" 
                        />
                        <TextField 
                            variant="filled" 
                            margin="normal" 
                            required 
                            fullWidth 
                            label="Username" 
                            id="username"
                            name="username"
                            value={user.username}
                            onChange={e => setUser({ ...user, username:e.target.value })}
                            type="text"
                        />
                        <TextField 
                            variant="filled" 
                            margin="normal" 
                            required 
                            fullWidth 
                            label="Email" 
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={e => setUser({ ...user, email:e.target.value })}
                            type="text"
                        />
                        <TextField 
                            variant="filled" 
                            margin="normal" 
                            required 
                            fullWidth 
                            label="New Password" 
                            id="newPassword"
                            name="newPassword"
                            type="text"
                        />
                        <TextField 
                            variant="filled" 
                            margin="normal" 
                            required 
                            fullWidth 
                            label="Confrim Password" 
                            id="confirmPassword"
                            name="confirmPassword"
                            onChange={e => setUser({ ...user, password:e.target.value })}
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
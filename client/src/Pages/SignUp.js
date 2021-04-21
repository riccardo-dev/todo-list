import React, { useState } from 'react';
import useStyles from './styles/signup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import LockOpenOutlined from '@material-ui/icons/LockOpenOutlined';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

/* 
    firstname,
    lastname,
    username,
    email,
    password.
*/

const SignUp = () => {
    const classes = useStyles();
    const history = useHistory();
    const [newUser, setNewUser] = useState({
        firstname:'',
        lastname:'',
        username:'',
        email:'',
        password:''
    });


    const handleSubmit = async (e) => {
        history.push('/login');
        await axios.post('/users', newUser)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }




    return (
        <Container maxWidth="sm">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOpenOutlined/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form noValidate onSubmit={handleSubmit} autoComplete="off" className={classes.form}>
                    <TextField 
                        variant="outlined" 
                        margin="normal" 
                        required 
                        fullWidth 
                        label="First Name" 
                        id="firstName" 
                        name="firstName"
                        onChange={e => setNewUser({ ...newUser, firstname: e.target.value })} 
                        type="text" 
                    />
                    <TextField 
                        variant="outlined" 
                        margin="normal" 
                        required 
                        fullWidth 
                        label="Last Name" 
                        id="lastName"
                        name="lastName"
                        onChange={e => setNewUser({ ...newUser, lastname: e.target.value })}
                        type="text" 
                    />
                    <TextField 
                        variant="outlined" 
                        margin="normal" 
                        required 
                        fullWidth 
                        label="Username" 
                        id="username"
                        name="username"
                        onChange={e => setNewUser({ ...newUser, username:e.target.value })}
                        type="text"
                    />
                    <TextField 
                        variant="outlined" 
                        margin="normal" 
                        required 
                        fullWidth 
                        label="Email" 
                        id="email" 
                        name="email"
                        onChange={e => setNewUser({ ...newUser, email:e.target.value })}
                        type="email" 
                    />
                    <TextField 
                        variant="outlined" 
                        margin="normal" 
                        required 
                        fullWidth 
                        label="Password" 
                        id="password" 
                        name="password"
                        onChange={e => setNewUser({ ...newUser, password: e.target.value })} 
                        type="text"
                        helperText="Must contain at least 8 characters. Upper and lower case letters and numbers." 
                    />
                    <Button 
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </Container>
    );
}
 
export default SignUp;
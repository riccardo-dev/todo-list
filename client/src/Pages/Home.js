import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const Home = () => {
    const [user, setUser] = useState('');
    const [token, setToken] = useState('');
    const history = useHistory();

    useEffect(() => {
        checkIsAuth();
        async function fetchData() {
            await axios.get('/users')
            .then(res => {
                setUser(res.data[0]);
            }).catch(err => console.log(err));
        }
    }, [user])

    const checkIsAuth = () => {
        if(localStorage.getItem('token')) {
          setToken(localStorage.getItem('token'));
          console.log(token);
        } else {
            history.push('/login');
        }
    }

    return (
        <>
            <h1>Welcome {user.username}</h1>
        </>
    );
}
 
export default Home;
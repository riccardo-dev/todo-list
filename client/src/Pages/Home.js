import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Home = () => {
    const [user, setUser] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));
    const history = useHistory();

    useEffect(() => {
        if(token){
            fetchData();
        } else {
            history.push('/login');
        }
    }, [])
    
    const fetchData = async () => {
        await axios.get('/users')
       .then(res => {
           setUser(res.data[0]);
       }).catch(err => console.log(err));
    }


    return (
        <>
            <h1>Welcome {user.username}</h1>
        </>
    );
}
 
export default Home;
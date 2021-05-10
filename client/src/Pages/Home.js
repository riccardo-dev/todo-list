import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import Navbar from '../Component/Navbar/Navbar';
import TodoList from '../Component/TodoList/TodoList';
import style from '../style/home.module.scss';

const Home = () => {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [token, setToken] = useState(sessionStorage.getItem('token'));
    
  useEffect(() => {
      getCurrentUser();
  }, [])

  //get current user from localStorage
  const getCurrentUser = async () => {
      if(token){
          let currentUser = JSON.parse(sessionStorage.getItem('userLogged'));
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
          <div className="container-l">
            <div className={style.welcome}>
              <h1>
                <b>Welcome {user.username}</b>
              </h1>
            </div>
            <div className={style.todo}>
              <TodoList />
            </div>
          </div>
        </>
    )
}

export default Home;

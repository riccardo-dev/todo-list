import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.scss';
import App from './App';
import axios from 'axios';



axios.defaults.baseURL = 'https://planningday.herokuapp.com';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('token');


ReactDOM.render(
    <App />,
  document.getElementById('root')
);


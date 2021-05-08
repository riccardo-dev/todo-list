import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'https://plan-day.herokuapp.com/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);

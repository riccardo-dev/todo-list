import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import style from '../style/login.module.scss';
import axios from 'axios';
import { MdLockOutline } from 'react-icons/md';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  async function handleSubmit(e){
    e.preventDefault();
    const data = {
        email: email,
        password: password
    }
    await axios.post('/login', data)
    .then(res => {
        sessionStorage.setItem('token', JSON.stringify(res.data.token));
        sessionStorage.setItem('userLogged', JSON.stringify(res.data.user[0]));
        setTimeout(() => {
            sessionStorage.clear();
        }, 2700000); // 1hour
        history.push('/');
    })
    .catch(err => console.log(err));
  };

  const handleShowPassword = () => {
      setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
      e.preventDefault();
  };

    return (
        <div className="container-sm">
          <div className={style.main}>
            <div className={style.avatar}>
              <MdLockOutline/>
            </div>
            <h4>Login</h4> 
            <form onSubmit={handleSubmit} className={style.form}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email"
                  className="form-control bg-secondary"
                  id="email" 
                  aria-describedby="email"
                  required
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}  
                />
              </div>
              <label htmlFor="password" className="form-label">Password</label>
              <div className= "input-group mb-3">
                <input 
                  type={showPassword ? 'text' : 'password'}
                  className="form-control bg-secondary"
                  id="password"
                  aria-describedby="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="input-group-text bg-secondary" onClick={handleShowPassword} onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}
                </span>
              </div>
              <div className={style.loginFooter}>
                <button 
                  className={`btn btn-primary my-3 ${style.button}`}
                  type="submit"
                >
                  Login
                </button>
                <Link to="/signup">Don't have an account? Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
    )
}

export default Login;

import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
//style
import style from '../style/signup.module.scss';
//icons
import { MdLockOutline } from 'react-icons/md';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


const SignUp = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [newUser, setNewUser] = useState({
      firstname:'',
      lastname:'',
      username:'',
      email:'',
      password:''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/users', newUser)
    .then(res => {
        console.log(res.data);
        history.push('/login');
    })
    .catch(err => console.log(err));
}


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
        <h4>Sign Up</h4> 
        <form onSubmit={handleSubmit} className={style.form}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">First Name</label>
            <input 
              type="text"
              className="form-control bg-secondary"
              id="firstName" 
              aria-describedby="firstName"
              required
              autoComplete="firstName"
              onChange={e => setNewUser({ ...newUser, firstname:e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Last Name</label>
            <input 
              type="text"
              className="form-control bg-secondary"
              id="lastName" 
              aria-describedby="lastName"
              required
              autoComplete="lastName"
              onChange={e => setNewUser({ ...newUser, lastname:e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Username</label>
            <input 
              type="text"
              className="form-control bg-secondary"
              id="username" 
              aria-describedby="username"
              required
              autoComplete="username"
              onChange={e => setNewUser({ ...newUser, username:e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email"
              className="form-control bg-secondary"
              id="email" 
              aria-describedby="email"
              required
              autoComplete="email"
              onChange={e => setNewUser({ ...newUser, email:e.target.value })}
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
              onChange={e => setNewUser({ ...newUser, password:e.target.value })}
            />
            <span className="input-group-text bg-secondary" onClick={handleShowPassword} onMouseDown={handleMouseDownPassword}>
              {showPassword ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}
            </span>
          </div>
          <div className={style.signupFooter}>
            <button 
              className={`btn btn-primary my-3 ${style.button}`}
              type="submit"
            >
              Sign Up
            </button>
            <Link to="/login">Already have an account? Sign In</Link>
          </div>
        </form>
      </div>
    </div>
    )
}

export default SignUp;

import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Component/Navbar/Navbar';
//style
import style from '../style/profile.module.scss';
//icons
import { AiOutlineUser } from 'react-icons/ai';


const initialState = JSON.parse(sessionStorage.getItem('userLogged'));

const Profile = () => {
  const history = useHistory();
  const [updatedUser, setUpdatedUser] = useState('');
  const [currentUser, setCurrentUser] = useState(initialState);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/users/${currentUser._id}`, updatedUser)
    .then(res => {
        history.push('/');
    })
    .catch(err => console.log(err));
}

  return (
    <>
    
      <Navbar/>
      <div className="container-sm">
        <div className={style.main}>
          <div className={style.avatar}>
            <AiOutlineUser/>
          </div>
          <h4>Profile</h4> 
          <form onSubmit={handleSubmit} className={style.form}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Username</label>
              <input 
                type="text"
                className="form-control bg-secondary"
                id="username" 
                aria-describedby="username"
                required
                autoComplete="username"
                onChange={e => setUpdatedUser({...updatedUser, username:e.target.value })}
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
                onChange={e => setUpdatedUser({...updatedUser, username:e.target.value })}
              />
            </div>
            <div className={style.signupFooter}>
              <button 
                className={`btn btn-primary mt-3 ${style.button}`}
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}


export default Profile;



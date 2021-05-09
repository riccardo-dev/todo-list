import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import style from './navbar.module.scss';

import {HiOutlineHome, HiUserCircle} from 'react-icons/hi'
import {BiLogInCircle} from 'react-icons/bi';

const Navbar = () => {

  //clear the storage when user log out
  const handleLogOut = () => {
    sessionStorage.clear();
  }

    return (
        <nav className={`navbar ${style.navbar}`}>
          <div>
            {window.location.pathname === '/' ? 
              <Link to="/profile" className={style.navLink}><HiUserCircle/></Link>
              :
              <Link to="/" className={style.navLink}><HiOutlineHome/></Link>
            }
          </div>
          <div>
            <span>ToDo</span>
          </div>
          <div><Link to="/login" onClick={handleLogOut} className={style.navLink}><BiLogInCircle/></Link>
          </div>
        </nav>
    )
}

export default Navbar;

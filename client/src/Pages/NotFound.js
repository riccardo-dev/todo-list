import React from 'react'
import { Link } from 'react-router-dom';
import style from '../style/notFound.module.scss';

const NotFound = () => {

  const handleBackToLogin = () => {
    sessionStorage.clear();
  }
  
  return (
      <>
        <div className={style.notFound}>
          <span className={style.text}>
            <b>404</b> - Not Found. Back to <Link to='/login' onClick={handleBackToLogin} className={style.link}>Login</Link>  
          </span>
        </div>
      </>
  )
}

export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles/notFound';

const NotFound = () => {
  const classes = useStyles();
    return (
          <div className={classes.notFound}>
            <span className={classes.text}>
              <b>404</b> - Not Found. Back to <Link to='/login' className={classes.a}>Login</Link></span>  
          </div>
    )
}

export default NotFound;

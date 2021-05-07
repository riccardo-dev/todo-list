import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <>
          <h1>404 - Not Found. Back to <Link to='/login'>Login</Link></h1>  
        </>
    )
}

import { Link, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.root} variant="body2" color="textSecondary" align="center">
            {'Copyright ©'} {' '}
            <Link color="inherit" href="https://riccardo-dev.github.io/portfolio/">
                Riccardo Andria
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
 
export default Footer;
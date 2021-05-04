import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import useStyle from './styles';
import Home from '../../Pages/Home';
import Profile from '../../Pages/Profile';
import Login from '../../Pages/Login';
import SignUp from '../../Pages/SignUp';
import Footer from '../Footer/Footer';

const Layout = (props) => {
    const classes = useStyle();
    return (
        <Router>
        <Container className={classes.container} maxWidth="xl" >
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/profile" component={Profile} />
                <Route  path="/login" component={Login} />
                <Route  path="/signup" component={SignUp} />
            </Switch>
            <Footer/>
        </Container>
        </Router>
    );
}
 
export default Layout;
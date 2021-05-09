import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//pages
import Home from '../../Pages/Home';
import Profile from '../../Pages/Profile';
import Login from '../../Pages/Login';
import SignUp from '../../Pages/SignUp';
import NotFound from '../../Pages/NotFound';

//footer component
import Footer from '../Footer/Footer';


const Layout = () => {
    return (
        <Router>
            <div className="container-l">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}

export default Layout

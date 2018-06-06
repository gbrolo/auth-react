import React from 'react';
import { render } from 'react-dom';
import history from './history';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { App, Home } from './components';
import Auth from './Auth';

import 'bootstrap/dist/css/bootstrap.min.css';

const auth = new Auth();

const callbackComponent = () => {
    if (auth.loggedIn) {
        setTimeout(() => history.replace('/'), 1500);
        return <h4>loading...</h4>;
    } else {
        setTimeout(() => history.replace('/'), 1500);
        return <h4>logging you out...</h4>;
        return <Redirect to={{ pathname: '/' }} />
    }
};

const AuthRoute = (props) => {
    const { Component, path } = props;
    return (
        <Route path={path} render={() =>
            auth.loggedIn ?
                <Component />:
                <Redirect to={{ pathname: '/'}} />
            }
        />
    );
};

auth.checkAuthentication()
    .then(() => {
        render (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' render={() => <App auth={auth} />} />
                    <Route path='/callback' render={props => callbackComponent(props)} />
                    <AuthRoute path='/home' Component={Home} />
                </Switch>
            </Router>,
            document.getElementById('root')
        );
    });

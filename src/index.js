import React from 'react';
import ReactLoading from 'react-loading';
import { render } from 'react-dom';
import history from './history';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { App, Home } from './components';
import Auth from './Auth';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/layout.css';

const auth = new Auth();

const callbackDialog = (text) => {
    return (
        <Container>
            <Row>
                <Col xs="5">
                </Col>
                <Col className="layout-loading-spin" xs="1">
                    <h5>{text}...</h5>
                </Col>
                <Col className="layout-loading-spin" xs="1">
                    <ReactLoading type="spin" color="#181818" height={50} width={25} />
                </Col>
                <Col xs="5">
                </Col>
            </Row>            
        </Container>
    );
};

const callbackComponent = () => {
    if (auth.loggedIn) {
        setTimeout(() => history.replace('/'), 1500);
        return callbackDialog("Loading");
    } else {
        setTimeout(() => history.replace('/'), 1500);
        return callbackDialog("Signout");
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

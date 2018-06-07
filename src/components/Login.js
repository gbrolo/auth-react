import React, { Component } from 'react';
import { Button, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

import '../css/layout.css';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            name: '',
            surname: '',
            email: '',
        }
    }

    updateInput = type => event => {
        this.setState({ [type]: event.target.value });
    }

    signup = () => {
        const { username, password, name, surname, email } = this.state;
        this.props.auth.signup(username, password, name, surname, email);
    }

    login = () => {
        const { username, password } = this.state;
        this.props.auth.login(username, password);
    }

    render() {
        return (
            <div>
                <Container className="layout-container">
                    <Row>
                        <Col xs="5" className="layout-col">
                            <div className="layout-form-title">
                                <h2>Log In</h2>
                            </div>
                            <hr />
                            <FormGroup className="layout-form-group">
                                <Label for="username_login">Username</Label>
                                <Input 
                                    type="text"                                     
                                    name="username_login"  
                                    id="username_login" 
                                    placeholder="Username"
                                    onChange={this.updateInput('username')} />
                            </FormGroup>
                            <FormGroup className="layout-form-group">
                                <Label for="password_login">Password</Label>
                                <Input 
                                    type="password"                                     
                                    name="password_login"  
                                    id="password_login" 
                                    placeholder="Password"
                                    onChange={this.updateInput('password')} />
                            </FormGroup>
                            <Button className="layout-btn-generic" color="primary" onClick={this.login}>Log In</Button>
                        </Col>

                        <Col xs="2"></Col>

                        <Col xs="5" className="layout-col">
                            <div className="layout-form-title">
                                <h2>Sign Up</h2>
                            </div>
                            <hr />
                            <FormGroup className="layout-form-group">
                                <Label for="username">Username</Label>
                                <Input 
                                    type="text"                                     
                                    name="username"  
                                    id="username" 
                                    placeholder="Username"
                                    onChange={this.updateInput('username')} />
                            </FormGroup>
                            <FormGroup className="layout-form-group">
                                <Label for="password">Password</Label>
                                <Input 
                                    type="password"                                     
                                    name="password"  
                                    id="password" 
                                    placeholder="Password"
                                    onChange={this.updateInput('password')} />
                            </FormGroup>
                            <FormGroup className="layout-form-group">
                                <Label for="name">Name</Label>
                                <Input 
                                    type="text" 
                                    value={this.state.name}
                                    name="name"  
                                    id="name" 
                                    placeholder="Name"
                                    onChange={this.updateInput('name')} />
                            </FormGroup>
                            <FormGroup className="layout-form-group">
                                <Label for="surname">Surname</Label>
                                <Input 
                                    type="text" 
                                    value={this.state.surname}
                                    name="surname"  
                                    id="surname" 
                                    placeholder="Surname"
                                    onChange={this.updateInput('surname')} />
                            </FormGroup>
                            <FormGroup className="layout-form-group">
                                <Label for="email">Email</Label>
                                <Input 
                                    type="email" 
                                    value={this.state.email}
                                    name="email"  
                                    id="email" 
                                    placeholder="Email"
                                    onChange={this.updateInput('email')} />
                            </FormGroup>            
                            <Button color="primary" className="layout-btn-generic"  onClick={this.signup}>Sign Up</Button>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}

export default Login;
import React, { Component } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';

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
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input 
                        type="text" 
                        value={this.state.username}
                        name="username"  
                        id="username" 
                        placeholder="username"
                        onChange={this.updateInput('username')} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input 
                        type="password" 
                        value={this.state.password}
                        name="password"  
                        id="password" 
                        placeholder="password"
                        onChange={this.updateInput('password')} />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input 
                        type="text" 
                        value={this.state.name}
                        name="name"  
                        id="name" 
                        placeholder="name"
                        onChange={this.updateInput('name')} />
                </FormGroup>
                <FormGroup>
                    <Label for="surname">Surname</Label>
                    <Input 
                        type="text" 
                        value={this.state.surname}
                        name="surname"  
                        id="surname" 
                        placeholder="surname"
                        onChange={this.updateInput('surname')} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input 
                        type="email" 
                        value={this.state.email}
                        name="email"  
                        id="email" 
                        placeholder="email"
                        onChange={this.updateInput('email')} />
                </FormGroup>

                <Button color="primary" onClick={this.login}>Log In</Button>
                <Button color="primary" onClick={this.signup}>Sign Up</Button>
            </div>
        );
    }
}

export default Login;
import history from './history';
import { CONNECTION } from './config';

class Auth {
    loggedIn = false;

    signup = (username, password, name, surname, email) => {
        fetch(`${CONNECTION}/user/new`, {
            method:         'POST',
            credentials:    'include',
            headers:        {'Content-Type': 'application/json'},
            body:           JSON.stringify({ username, password, name, surname, email })
        }).then(response => response.json())
            .then(json => {
                if (json.type === 'error') {
                    alert(json.msg);
                } else {
                    this.loggedIn = true;
                    history.replace('/callback');
                }
            });
    }

    login = (username, password) => {
        fetch(`${CONNECTION}/user/login`, {
            method:         'POST',
            credentials:    'include',
            headers:        {'Content-Type': 'application/json'},
            body:           JSON.stringify({ username, password })
        }).then(response => response.json())
            .then(json => {
                if (json.type === 'error') {
                    alert(json.msg);
                } else {
                    this.loggedIn = true;
                    history.replace('/callback');
                }
            });
    }

    logout = () => {
        fetch(`${CONNECTION}/user/logout`, {
            credentials:    'include'
        }).then(response => response.json())
            .then(() => {
               this.loggedIn = false;
               history.replace('/callback');
            });
    }

    checkAuthentication = () => {
        return new Promise((resolve, reject) => {
            fetch(`${CONNECTION}/user/authenticated`, {
                credentials:    'include'
            }).then(response => response.json())
                .then(json => {
                    if (json.authenticated && json.usrLogged) {
                        this.loggedIn = true;
                    }
                    resolve();
                });
        });
    }

};

export default Auth;
import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import Home from './Home';

const Main = (props) => (
    <div>
        <Home />
        <Logout {...props} />
    </div>
);

const App = (props) => (
    <div>
        { props.auth.loggedIn ? <Main {...props} /> : <Login {...props} /> }
    </div>
);

export default App;
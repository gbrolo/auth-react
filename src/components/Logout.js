import React from 'react';
import { Button } from 'reactstrap';

const Logout = (props) => (
    <div>
        <Button color="primary" onClick={props.auth.logout}>Log Out</Button>
    </div>
);

export default Logout;
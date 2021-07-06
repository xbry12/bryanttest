import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../../css/auth.css';

//import components
import {
    Container,
    Row,
    Button
} from 'react-bootstrap';

import Login from './Login'
import Signup from './Signup'

export default function AuthPortal({ setAuthRedirect, authRedirect, setCurrentUser, handleClose, handleAuth}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const hidden = false;

    const dummyUser = {
        username: 'James Tomlin',
        email: 'jamestomlin@email.com',
        password: '123123123'
    }

    if (authRedirect) return <Redirect to='/portal/dashboard' />

    return (
            <Container className = 'loginWIndow'>
                <Row>
                    <Button id = 'close-btn' onClick={handleClose}>Close</Button>
                </Row>
                <Row>
                    <Login  
                        setUsername={setUsername} 
                        setPassword={setPassword}
                        handleClose={handleClose}
                        username={username}
                        password={password}
                        dummyUser={dummyUser}
                        handleAuth={handleAuth}
                        setCurrentUser={setCurrentUser}
                        setAuthRedirect={setAuthRedirect}
                    />
                </Row>
                <Row>
                    <Signup 
                        setUsername={setUsername} 
                        setEmail={setEmail} 
                        setPassword={setPassword}
                        handleClose={handleClose}
                        username={username}
                        password={password}
                        email={email}
                        dummyUser={dummyUser}
                        handleAuth={handleAuth}
                        setCurrentUser={setCurrentUser}
                        setAuthRedirect={setAuthRedirect}
                    />
                </Row>
            </Container>
    )
}

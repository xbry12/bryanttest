import React, { useState } from 'react';
import '../../css/header.css'

import {
    Modal,
    Container,
} from 'react-bootstrap';

import DefaultHeader from './DefaultHeader';
import AuthPortal from '../Auth/AuthPortal';
import AuthHeader from './AuthHeader';

function HeaderPortal({ currentUser, setCurrentUser, handleAuth }) {
    const [showAuth, setShowAuth] = useState(false);
    const [authRedirect, setAuthRedirect] = useState(false);

    const handleClose = () => setShowAuth(false);
    const handleShow = (e) => {
        setShowAuth(true);
    }

    let conditionalHeader = currentUser ? 
        <AuthHeader 
            setAuthRedirect={setAuthRedirect} 
            authRedirect={authRedirect} 
            handleAuth={handleAuth} 
            setCurrentUser={setCurrentUser} 
            currentUser={currentUser} 
        /> 
            : 
        <DefaultHeader 
            handleAuth={handleAuth} 
            handleShow={handleShow} 
        />;

    return (
        <Container>
            {conditionalHeader}
            <Modal show={showAuth}>
                <AuthPortal 
                    setShowAuth={setShowAuth}
                    handleClose={handleClose}
                    handleAuth={handleAuth}
                    setCurrentUser={setCurrentUser}
                    setAuthRedirect={setAuthRedirect}
                    authRedirect={authRedirect}
                />
            </Modal>
        </Container>
    )
}

export default HeaderPortal

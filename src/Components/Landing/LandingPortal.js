import React from 'react';
import '../../css/landing.css'

//Components
import DefaultLanding from './DefaultLanding';
import AuthPortal from '../Auth/AuthPortal';

function LandingPortal() {
    return (
        <div>
            <DefaultLanding AuthPortal={AuthPortal}/>
        </div>
    )
}

export default LandingPortal

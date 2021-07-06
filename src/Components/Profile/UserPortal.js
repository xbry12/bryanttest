import React from 'react'
import '../../css/profile.css';

import ProfileQandA from './ProfileQandA';
import EditProfileForm from './EditProfileForm';
import ProfileBasicInfo from './ProfileBasicInfo';

export default function UserPortal() {
    return (
        <div>
            <ProfileBasicInfo />
            <ProfileQandA />
        </div>
    )
}

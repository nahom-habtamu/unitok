import React from 'react';
import SettingsTab from './SettingsTab';

const ProfileDetailsBox = () => {

    const profileInputsData = [
        { id: "username", label: "Login", placeholder: "User123", type: "text", },
        { id: "email", label: "Email", placeholder: "email@email.com", type: "text", },
        { id: "firstName", label: "First Name", placeholder: "John", type: "text", },
        { id: "lastName", label: "Last Name", placeholder: "Doe", type: "text", },
    ];

    return (
        <>
            <SettingsTab
                inputsData={profileInputsData}
                onSubmit={(inputValues) => console.log(inputValues)}
                tabId="profile"
                tabName="Profile Details"
            />
        </>
    );
};

export default ProfileDetailsBox;
import React from 'react';

import SettingsTab from './SettingsTab';

const PasswordDetailsBox = () => {

    const passwordInputsData = [
        { 
            id: "oldPassword", 
            label: "Old Password", 
            placeholder: "", 
            type: "password", 
        },
        { 
            id: "newPassword", 
            label: "New Password", 
            placeholder: "", 
            type: "password", 
        },
        {
            id: "confirmPassword",
            label: "Confirm New Password",
            placeholder: "",
            type: "password",
        },
    ];

    return (
        <>
            <SettingsTab
                inputsData={passwordInputsData}
                onSubmit={(inputValues) => console.log(inputValues)}
                tabId="password"
                tabName="Change Password"
            />
        </>
    );
};

export default PasswordDetailsBox;
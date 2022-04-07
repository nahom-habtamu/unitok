import React from 'react';
import AuthForm from '../common/AuthForm';

const RegistrationFormWrapper = ({ onSubmit }) => {
    return (
        <div className='col-12'>
            <div className='sign'>
                <div className='sign__content'>
                    <AuthForm
                        onSubmit={onSubmit}
                        isSignUp={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default RegistrationFormWrapper;
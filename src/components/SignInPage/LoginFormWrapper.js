import React from 'react';
import AuthForm from '../common/AuthForm';

const LoginFormWrapper = ({ onSubmit }) => {
    return (
        <div className='col-12'>
            <div className='sign'>
                <div className='sign__content'>
                    <AuthForm
                        onSubmit={onSubmit}
                        isSignUp={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginFormWrapper;
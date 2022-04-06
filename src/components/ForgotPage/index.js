import React from 'react';

import BreadCrumb from '../common/BreadCrumb';
import ForgotPasswordForm from './ForgotPasswordForm';

const MainContent = () => {
  return (
    <main className='main'>
        <div className='container'>
            <div className='row row--grid'>
                <BreadCrumb
                    active="Home"
                    link="/"
                    nonActive="Forgot Password"
                />
                <ForgotPasswordForm
                    onSendPressed={(value) => console.log(value)}
                />
            </div>
        </div>
    </main>
  )
}

export default MainContent;

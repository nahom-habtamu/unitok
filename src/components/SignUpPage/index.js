import React from 'react';

import BreadCrumb from '../common/BreadCrumb';
import RegistrationFormWrapper from './RegistrationFormWrapper';

const MainContent = () => {
    return (
        <main className='main'>
            <div className='container'>
                <div className='row row--grid'>
                    <BreadCrumb
                        active="Home"
                        link="/"
                        nonActive="Sign Up"
                    />
                    <RegistrationFormWrapper
                        onSubmit={(value) => console.log(value)}
                    />
                </div>
            </div>
        </main>
    );
}

export default MainContent;
import React from 'react';

import LoginFormWrapper from './LoginFormWrapper';
import BreadCrumb from '../common/BreadCrumb';

const MainContent = () => {
    return (
        <main className='main'>
            <div className='container'>
                <div className='row row--grid'>
                    <BreadCrumb
                        active="Home"
                        link="/"
                        nonActive="Sign In"
                    />
                    <LoginFormWrapper
                        onSubmit={(value) => console.log(value)}
                    />
                </div>
            </div>
        </main>
    );
}

export default MainContent;
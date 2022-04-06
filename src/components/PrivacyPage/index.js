import React from 'react';

import BreadCrumb from '../common/BreadCrumb';
import Partners from '../common/Partners';
import PrivacyPolicyDescription from './PrivacyPolicyDescription';

const MainContent = () => {
  return (
    <main className='main'>
        <div className='container'>
            <div className='row row--grid'>
                <BreadCrumb
                    active="Home"
                    link="/"
                    nonActive="Privacy Policy"
                />
                <PrivacyPolicyDescription/>
                <Partners/>
            </div>
        </div>
    </main>
  );
}

export default MainContent;
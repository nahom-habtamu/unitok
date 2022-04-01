import React from 'react';
import PasswordDetailsBox from './PasswordDetailsBox';
import ProfileDetailsBox from './ProfileDetailsBox';

const Settings = () => {
    return (
        <div className="tab-pane fade" id="tab4" role="tabpanel">
            <div className='row row--grid'>
                <ProfileDetailsBox />
                <PasswordDetailsBox />
            </div>
        </div>
    );
};

export default Settings;
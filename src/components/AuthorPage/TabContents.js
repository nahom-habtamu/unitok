import React from 'react';
import Created from './Created';
import MyActivity from './MyActivity';
import OnSale from './OnSale';
import Settings from './Settings';

const TabContents = () => {
    return (
        <div className='tab-content'>
            <OnSale />
            <Created />
            <MyActivity />
            <Settings />
        </div>
    );
};

export default TabContents;
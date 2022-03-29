import React from 'react';

import BreadCrumb from '../common/BreadCrumb';
import Activities from './Activities';
import Filters from './Filters';

const MainContent = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className="row">
                    <BreadCrumb active="Home" link='/' nonActive="Activity" />
                    <Activities />
                    <Filters />
                </div>
            </div>
        </div>
    )
}

export default MainContent;
import React from 'react';

import BreadCrumb from '../common/BreadCrumb';
import Activities from './Activities';
import Filters from '../common/Filter';

import ActivityFilterItems from '../../constants/ActivityFilterItems';

const MainContent = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className="row">
                    <BreadCrumb active="Home" link='/' nonActive="Activity" />
                    <Activities />
                    <div className="col-12 col-xl-3 order-xl-2">
                        <Filters filterItems={ActivityFilterItems} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;
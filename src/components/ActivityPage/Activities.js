import React from 'react';
import Activity from '../common/Activity';
import ActivityTitle from './ActivityTitle';
import LoadMoreActivitiesButton from '../common/Activity/LoadMoreActivitiesButton';

import DummyActivities from '../../constants/DummyActivities';

const Activities = () => {

    const buildActivityList = () => {
        return DummyActivities.map(activity =>
            <div className="col-12 col-lg-6">
                <Activity
                    activity={activity}
                    key={activity.id}
                />
            </div>
        );
    }

    return (
        <>
            <ActivityTitle />
            <div className='col-12 col-xl-9 order-xl-1'>
                <div className="row row--grid">
                    {
                        buildActivityList()
                    }
                    {
                        DummyActivities.length > 6 &&
                        <LoadMoreActivitiesButton />
                    }
                </div>
            </div>
        </>
    );
}

export default Activities;



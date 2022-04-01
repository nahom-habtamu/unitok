import React from 'react';

import Activity from '../common/Activity';
import Filters from '../common/Filter';
import LoadMoreActivitiesButton
    from '../common/Activity/LoadMoreActivitiesButton';

import ActivityFilterItems from '../../constants/ActivityFilterItems';
import DummyActivities from '../../constants/DummyActivities';

const MyActivity = () => {
    const buildMyActivities = () => {
        return DummyActivities.map(activity =>
            <div className="col-12 col-lg-6 col-xl-12">
                <Activity activity={activity} />
            </div>
        );
    }

    return (
        <div className="tab-pane fade" id="tab3" role="tabpanel">
            <div className='row'>
                <div className="col-12 col-xl-4 order-xl-2">
                    <Filters filterItems={ActivityFilterItems} />
                </div>
                <div className="col-12 col-xl-8 order-xl-1">
                    <div className='row row--grid'>
                        {
                            buildMyActivities()
                        }
                        {
                            DummyActivities.length > 6 &&
                            <LoadMoreActivitiesButton />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyActivity;
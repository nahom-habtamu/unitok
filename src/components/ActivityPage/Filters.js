import React from 'react';

import OpenFilterButton from './OpenFilterButton';
import FilterContent from './FilterContent';

const Filters = () => {
    return (
        <div className="col-12 col-xl-3 order-xl-2">
            <div className="filter-wrap">
                <OpenFilterButton />
                <FilterContent />
            </div>
        </div>
    );
};
export default Filters;
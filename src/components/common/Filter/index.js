import React from 'react';

import OpenFilterButton from './OpenFilterButton';
import FilterContent from './FilterContent';

const Filters = ({filterItems}) => {
    return (
        <div className="filter-wrap">
            <OpenFilterButton />
            <FilterContent filterItems={filterItems}/>
        </div>
    );
};
export default Filters;
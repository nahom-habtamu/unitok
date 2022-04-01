import React, { useState } from 'react';

import ClearFiltersButton from './ClearFiltersButton';
import FilterItem from './FilterItem';


const FilterContent = (props) => {

    const [filterItems, setFilterItems] = useState(props.filterItems)

    const handleClearingAllFilters = () => {
        const changedList = filterItems.map((item) => {
            return {
                ...item,
                checked: false
            };
        });
        setFilterItems(changedList);
    }

    const handleFilterChange = (index) => {
        const changedList = filterItems.map((item, i) => {
            if (index == i) {
                item.checked = !item.checked;
            }
            return item;
        });
        setFilterItems(changedList);
    }

    const buildFilterItems = () => {
        return filterItems.map(filterItem =>
            <FilterItem
                checked={filterItem.checked}
                labelText={filterItem.labelText}
                index={filterItem.index}
                key={filterItem.index}
                onChange={handleFilterChange}
            />
        );
    }

    return (
        <div className="collapse filter-wrap__content" id="collapseFilter">
            <div className='filter filter--sticky'>
                <ClearFiltersButton onClick={handleClearingAllFilters} />
                <div className="filter__group">
                    <ul className="filter__checkboxes">
                        {
                            buildFilterItems()
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FilterContent;
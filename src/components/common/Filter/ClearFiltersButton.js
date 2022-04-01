import React from 'react';

const ClearFiltersButton = ({ onClick }) => {
    return (
        <h4 className="filter__title">
            Filters
            <button type="button" onClick={onClick}>
                Clear all
            </button>
        </h4>
    );
}

export default ClearFiltersButton;

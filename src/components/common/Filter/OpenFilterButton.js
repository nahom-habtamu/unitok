import React from 'react';

const OpenFilterButton = () => {
    return (
        <button
            className="filter-wrap__btn"
            type="button"
            data-toggle="collapse"
            data-target="#collapseFilter"
            aria-expanded="false"
            aria-controls="collapseFilter">
            Open filter
        </button>
    );
}

export default OpenFilterButton;
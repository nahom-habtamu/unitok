import React from 'react';

const FilterItem = ({ checked, labelText,index, onChange }) => {

    const handleFilterChange = () => {
        onChange(index);
    }

    return (
        <li>
            <input 
                id={`type${index}`} 
                type="checkbox" 
                checked={checked}
                onChange = {handleFilterChange}  
            />
            <label 
                for={`type${index}`}>
                {labelText}
            </label>
        </li>
    );
}

export default FilterItem;

import React, { useState, useEffect } from 'react';
import FilterByKeywordAndDrodownInput from './FilterByKeywordAndDrodownInput';

const FilterByKeywordAndDropDown = (
    {
        placeholder,
        dropDownOneItems,
        dropDownTwoItems,
        onFilterChanged
    }) => {

    const [keyword, setKeyword] = useState("");
    const [dropDownOne, setDropDownOne] = useState(dropDownOneItems[0]);
    const [dropDownTwo, setDropDownTwo] = useState("0");

    useEffect(() => {
        onFilterChanged({
            keyword,
            dropDownOne,
            dropDownTwo,
        });
    }, [keyword, dropDownOne, dropDownTwo,onFilterChanged])


    const handleInputChanged = (value) => {
        setKeyword(value);
    }

    const buildDropDownOne = () => {
        return dropDownOneItems.map(e =>
            <option value={e}>{`${e}`}</option>
        );
    }

    const buildDropDownTwo = () => {
        return dropDownTwoItems.map((e, index) =>
            <option value={index}>{e}</option>
        );
    }

    return (
        <div className="main__filter">

            <FilterByKeywordAndDrodownInput
                placeholder={placeholder}
                onChange={(value) => handleInputChanged(value)}
                onSubmit={() => { }}
            />
            <div className="main__filter-wrap">

                <select
                    onChange={(e) => setDropDownOne(e.target.value)}
                    id="dropDownOneSelect"
                    className="filterSelect">
                    {
                        buildDropDownOne()
                    }
                </select>

                <select
                    onChange={(e) => setDropDownTwo(e.target.value)}
                    id="dropDownTwoSelect"
                    className="filterSelect">
                    {
                        buildDropDownTwo()
                    }
                </select>

            </div>
        </div>
    )
}

export default FilterByKeywordAndDropDown;
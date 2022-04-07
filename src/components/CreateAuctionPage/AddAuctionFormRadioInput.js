import React from 'react';

const AddAuctionFormRadioInput = ({ items, activeIndex, onChange }) => {

    const buildItems = () => {
        return items.map((e, index) =>
            <li>
                <input
                    id={`type${index}`}
                    type="radio"
                    name="type"
                    checked={index == activeIndex}
                    onChange={() => onChange(index)}
                />
                <label for={`type${index}`}>{e}</label>
            </li>
        );
    }

    return (
        <div className="col-12">
            <div className="sign__group sign__group--row">
                <ul className="sign__radio sign__radio--single">
                    {
                        buildItems()
                    }
                </ul>
            </div>
        </div>
    );
}

export default AddAuctionFormRadioInput;
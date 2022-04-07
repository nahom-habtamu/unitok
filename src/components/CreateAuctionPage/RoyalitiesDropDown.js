import React from 'react';

export const RoyalitiesDropDown = ({ items, onChange }) => {

    const buildItems = () => {
        return items.map((e) => <option key={e} value={e}>{e}</option>);
    };

    return (
        <div className="col-12 col-md-4">
            <div className="sign__group">
                <label className="sign__label" for="royalties">Royalties</label>
                <select
                    onChange={(e) => onChange(e.target.value)}
                    id="royalties"
                    name="royalties"
                    className="sign__select">
                    {buildItems()}
                </select>
            </div>
        </div>
    );
};

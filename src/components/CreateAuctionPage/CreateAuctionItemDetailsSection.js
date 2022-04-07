import React, { useEffect, useState } from 'react';

import AddAuctionFormRadioInput from './AddAuctionFormRadioInput';
import { RoyalitiesDropDown } from './RoyalitiesDropDown';


const CreateAuctionItemDetailsSection = ({ onObjectChange }) => {

    const radioInputItems = [
        "Put on sale",
        "Instant sale price",
        "Unlock one purchased"
    ];

    const royalities = ["5%", "10%", "15%"];

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedRoyality, setSelectedRoyality] = useState(royalities[0]);
    const [size, setSize] = useState("");
    const [property, setProperty] = useState("");
    const [activeRadioButtonIndex, setActiveRadioButtonIndex] = useState(0);


    useEffect(() => {
        const resultObject = {
            name, description, selectedRoyality, size, property,
            saleType: radioInputItems[activeRadioButtonIndex]
        };
        onObjectChange(resultObject);
    }, [
        name,
        description,
        selectedRoyality,
        size,
        property,
        activeRadioButtonIndex
    ]);

    return (
        <>
            <div className="col-12">
                <h4 className="sign__title">Item details</h4>
            </div>

            <div className="col-12">
                <div className="sign__group">
                    <label className="sign__label" for="itemname">Item name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="itemname"
                        type="text"
                        className="sign__input"
                        placeholder="Crypto Heart"
                    />
                </div>
            </div>

            <div className="col-12">
                <div className="sign__group">
                    <label className="sign__label" for="description">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        id="description"
                        name="description"
                        className="sign__textarea"
                        placeholder="e. g. 'After purchasing you will able to recived...'">
                    </textarea>
                </div>
            </div>

            <RoyalitiesDropDown
                items={royalities}
                onChange={(value) => setSelectedRoyality(value)}
            />

            <div className="col-12 col-md-4">
                <div className="sign__group">
                    <label className="sign__label" for="size">Size</label>
                    <input
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        id="size"
                        type="text"
                        name="size"
                        className="sign__input"
                        placeholder="e. g. Size"
                    />
                </div>
            </div>

            <div className="col-12 col-md-4">
                <div className="sign__group">
                    <label className="sign__label" for="propertie">Propertie</label>
                    <input
                        value={property}
                        onChange={(e) => setProperty(e.target.value)}
                        id="propertie"
                        type="text"
                        name="propertie"
                        className="sign__input"
                        placeholder="Subject"
                    />
                </div>
            </div>

            <AddAuctionFormRadioInput
                items={radioInputItems}
                activeIndex={activeRadioButtonIndex}
                onChange={(value) => setActiveRadioButtonIndex(value)}
            />
        </>
    );
};

export default CreateAuctionItemDetailsSection;
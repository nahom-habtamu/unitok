import React, { useState } from 'react';

import CreateAuctionItemDetailsSection from './CreateAuctionItemDetailsSection';
import CreateAuctionFileUploadSection from './CreateAuctionFileUploadSection';

const AddAuctionForm = () => {

    const [file, setFile] = useState(null);
    const [auctionObject, setAuctionObject] = useState({});

    const handleCreateItem = () => {
        const auction = {
            ...auctionObject,
            auctionPicture: file
        };

        console.log(auction);
    }


    const renderForm = () => {
        return (
            <form className='sign__form sign__form--create'>
                <div className='row'>
                    <CreateAuctionFileUploadSection
                        onFileChanged={(file) => setFile(file)}
                    />
                    <CreateAuctionItemDetailsSection
                        onObjectChange={(value) => setAuctionObject(value)}
                    />
                    <div className="col-12 col-xl-3">
                        <button
                            onClick={handleCreateItem}
                            type="button"
                            className="sign__btn">
                            Create Item
                        </button>
                    </div>
                </div>
            </form>
        );
    };

    const renderHeading = () => {
        return (
            <div className="main__title main__title--create">
                <h2>Create collectible item</h2>
            </div>
        );
    };

    return (
        <div className='col-12 col-xl-9'>
            {renderHeading()}
            {renderForm()}
        </div>
    );
};


export default AddAuctionForm;
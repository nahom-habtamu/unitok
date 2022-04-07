import React from 'react';

import CreateAuctionFileUploadInput from './CreateAuctionFileUploadInput';

const CreateAuctionFileUploadSection = ({onFileChanged}) => {
    return (
        <>
            <div className="col-12">
                <h4 className="sign__title">Upload file</h4>
            </div>
            <div className="col-12">
                <CreateAuctionFileUploadInput onFileChanged={onFileChanged}/>
            </div>
        </>
    );
};

export default CreateAuctionFileUploadSection;
import React from 'react';

const CreateAuctionFileUploadInput = ({ onFileChanged }) => {
    return (
        <div className="sign__file">
            <label
                id="file1"
                for="sign__file-upload"
            >e. g. Image, Audio, Video</label>
            <input
                onChange={(e) => onFileChanged(e.target.files[0])}
                data-name="#file1"
                id="sign__file-upload"
                name="file"
                className="sign__file-upload"
                type="file"
                accept="video/mp4,video/x-m4v,video/*,.png,.jpg,.jpeg"
            />
        </div>
    );
};

export default CreateAuctionFileUploadInput;
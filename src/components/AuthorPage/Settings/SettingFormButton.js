import React from 'react';

const SettingFormButton = ({ text, onClick }) => {
    return (
        <div className="col-12">
            <button
                onClick={onClick}
                className="sign__btn"
                type="button">
                {text}
            </button>
        </div>
    );
};

export default SettingFormButton;
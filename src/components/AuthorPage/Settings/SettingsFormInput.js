import React from 'react';

const SettingsFormInput = ({ label, placeholder, id, type, onChange }) => {
    return (
        <div className="sign__group">
            <label
                className="sign__label"
                for={id}>
                {label}
            </label>
            <input
                onChange={(e) => onChange(e.target.value)}
                id={id}
                type={type}
                name={id}
                className="sign__input"
                placeholder={placeholder} />
        </div>
    );
};

export default SettingsFormInput;
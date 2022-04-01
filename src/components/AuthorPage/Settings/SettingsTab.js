import React, { useState } from 'react';
import SettingFormButton from './SettingFormButton';
import SettingsFormInput from './SettingsFormInput';
import SettingsFormTitle from './SettingsFormTitle';

const SettingsTab = ({inputsData,tabName,tabId,onSubmit}) => {

    const [inputValues, setInputValues] = useState({});

    const handleInputChange = (value, id) => {
        const newState = {...inputValues};
        newState[id] = value;
        setInputValues(newState);
    }

    const buildFormInputs = () => {
        return inputsData.map(e =>
            <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                <SettingsFormInput
                    onChange={(value) => handleInputChange(value,e.id)}
                    id={e.id}
                    label={e.label}
                    placeholder={e.placeholder}
                    type={e.type} />
            </div>
        );
    };

    return (
        <div className='col-12 col-lg-6'>
            <form className='sign__form sign__form--profile'>
                <div className='row'>
                    <SettingsFormTitle title={tabName} />
                    {buildFormInputs()}
                    <SettingFormButton
                        text= {`${tabId === 'profile' ? "Save" : "Change"}`}
                        onClick={() => onSubmit(inputValues)} />
                </div>
            </form>
        </div>
    );
};

export default SettingsTab;
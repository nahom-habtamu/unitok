import React, { useState } from 'react';

const ForgotPasswordForm = ({ onSendPressed }) => {

    const [email, setEmail] = useState("");
    const [privacyAgreed, setPrivacyAgreed] = useState(false);

    const handleSendPressed = () => {
        onSendPressed({ email, privacyAgreed });
    }

    return (
      <div className="col-12">
        <div className="sign">
            <div className="sign__content">
                <form className="sign__form">
                    <a href="index.html" className="sign__logo">
                        <img src="img/logo.svg" alt="" />
                    </a>

                    <div className="sign__group">
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            type="text" 
                            className="sign__input" 
                            placeholder="Email" 
                        />
                    </div>

                    <div className="sign__group sign__group--checkbox">
                        <input 
                            onChange={() => setPrivacyAgreed(prev => !prev)}
                            id="remember" 
                            name="remember" 
                            type="checkbox" 
                            checked={privacyAgreed}
                        />
                        <label for="remember">I agree to the <a href="privacy.html">Privacy Policy</a></label>
                    </div>

                    <button 
                        onClick={handleSendPressed}
                        className="sign__btn" 
                        type="button">
                        Send
                    </button>
                    <span className="sign__text">
                        We will send a password to your Email
                    </span>
                </form>
            </div>
        </div>
      </div>
    ); 
}

export default ForgotPasswordForm;
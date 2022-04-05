import React, { useState } from 'react';

const ContactsForm = ({ onSend }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("")

  const handleSendPressed = () => {
    const objectToSend = {
      name,
      email,
      subject,
      message,
    };
    onSend(objectToSend);
  }

  return (
    <form className="sign__form sign__form--contacts">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="sign__group">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              className="sign__input"
              placeholder="Name" />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="sign__group">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              className="sign__input"
              placeholder="Email" />
          </div>
        </div>

        <div className="col-12">
          <div className="sign__group">
            <input
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              name="subject"
              className="sign__input"
              placeholder="Subject" />
          </div>
        </div>

        <div className="col-12">
          <div className="sign__group">
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name="text"
              className="sign__textarea"
              placeholder="Type your message"></textarea>
          </div>
        </div>

        <div className="col-12 col-xl-3">
          <button
            onClick={handleSendPressed}
            type="button"
            className="sign__btn">Send</button>
        </div>

      </div>
    </form>
  );
};


export default ContactsForm;
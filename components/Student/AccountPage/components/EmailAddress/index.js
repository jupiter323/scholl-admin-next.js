import React from 'react';

const EmailAddress = () => (
  <div className="card-block">
    <h2>Email Address</h2>
    <div className="card">
      <div className="card-content">
        <div className="row mb-0">
          <div className="input-field col s12 focus-blue">
            <input type="email" id="email" value="arnold.studently@clearchoiceprep.com" />
            <label className="label" htmlFor="email">Email*</label>
            <span className="note">*Optional</span>
          </div>
        </div>
        <p className="text">A valid student email address is required for most student functions. You may create an account without an email address, but until a valid email address is entered, the student will not receive the requisite welcome email and cannot login to the system.</p>
      </div>
    </div>
  </div>
);

export default EmailAddress;

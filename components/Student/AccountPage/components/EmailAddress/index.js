import React from 'react';
import PropTypes from 'prop-types';

const EmailAddress = ({ state: { email }, handleDetailsChange }) => (
  <div className="card-block">
    <h2>Email Address</h2>
    <div className="card">
      <div className="card-content">
        <div className="row mb-0">
          <div className="input-field col s12 focus-blue">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => handleDetailsChange(event, 'email', 'emailAddress')}
            />
            <label className={email.length ? 'label active' : 'label'} htmlFor="email">Email*</label>
            <span className="note">*Optional</span>
          </div>
        </div>
        <p className="text">A valid student email address is required for most student functions. You may create an account without an email address, but until a valid email address is entered, the student will not receive the requisite welcome email and cannot login to the system.</p>
      </div>
    </div>
  </div>
);

EmailAddress.propTypes = {
  state: PropTypes.object.isRequired,
  handleDetailsChange: PropTypes.func.isRequired,
};

export default EmailAddress;

import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ state: { firstName, lastName, email }, handleDetailsChange }) => (
  <div className="card-block">
    <h3>User Info</h3>
    <div className="card-main card card-instructor">
      <div className="card-content">
        <div className="row mb-0">
          <div className="input-field col s12">
            <input
              type="text"
              id="first-name"
              name="firstName"
              value={firstName}
              onChange={(event) => handleDetailsChange(event, 'firstName', 'userInfo')}
            />
            <label className={firstName.length ? 'label active' : 'label'} htmlFor="first-name">First Name*</label>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12">
            <input
              type="text"
              id="last-name"
              name="lastName"
              value={lastName}
              onChange={(event) => handleDetailsChange(event, 'lastName', 'userInfo')}
            />
            <label className={lastName.length ? 'label active' : 'label'} htmlFor="last-name">Last Name*</label>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12">
            <input
              type="text"
              id="email"
              name={email}
              value={email}
              onChange={(event) => handleDetailsChange(event, 'email', 'userInfo')}
            />
            <label className={email.length ? 'label active' : 'label'} htmlFor="email">Email Address*</label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

UserInfo.propTypes = {
  state: PropTypes.object,
  handleDetailsChange: PropTypes.func.isRequired,
};

export default UserInfo;

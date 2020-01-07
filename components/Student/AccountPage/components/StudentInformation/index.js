import React from 'react';
import PropTypes from 'prop-types';

const StudentInformation = ({ state: { firstName, lastName }, handleDetailsChange }) => (
  <div className="card-block">
    <h2>Student Information</h2>
    <div className="card">
      <div className="card-content">
        <div className="row mb-0">
          <div className="input-field col s12 focus-blue">
            <input
              type="text"
              id="first_name"
              name="firstName"
              value={firstName}
              onChange={(event) => handleDetailsChange(event, 'firstName', 'studentInformation')}
            />
            <label className={firstName.length ? 'label active' : 'label'} htmlFor="first_name">First Name</label>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12 focus-blue">
            <input
              type="text"
              id="last_name"
              name="lastName"
              value={lastName}
              onChange={(event) => handleDetailsChange(event, 'lastName', 'studentInformation')}
            />
            <label className={lastName.length ? 'label active' : 'label'} htmlFor="last_name">Last Name</label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

StudentInformation.propTypes = {
  state: PropTypes.object.isRequired,
  handleDetailsChange: PropTypes.func.isRequired,
};

export default StudentInformation;

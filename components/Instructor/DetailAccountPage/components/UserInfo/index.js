import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const UserInfo = ({ state }) => (
  <div className="card-block">
    <h3>User Info</h3>
    <div className="card-main card card-instructor">
      <div className="card-content">
        <div className="row mb-0">
          <div className="input-field col s12">
            <input type="text" id="first_name_edit" value="John" />
            <label className="label" htmlFor="first_name_edit">First Name*</label>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12">
            <input type="text" id="last_name_edit" value="Smith" />
            <label className="label" htmlFor="last_name_edit">Last Name*</label>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12">
            <input type="text" id="account_email_edit" value="john.smith@clearchoiceprep.com" />
            <label className="label" htmlFor="account_email_edit">Email Address*</label>
          </div>
        </div>
        <div className="row mb-0">
          <div className="">
            <div className="input-field col s6 l7">
              <select id="gender_edit">
                <option>Other</option>
                <option>Other</option>
                <option>Other</option>
              </select>
              <label className="label" htmlFor="gender_edit">Gender*</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

UserInfo.propTypes = {
  state: PropTypes.object,
};

export default UserInfo;

import React from 'react';
import PropTypes from 'prop-types';

const AccountStatus = ({ state: { licenseCode, status, activationDate, expirationDate } }) => (
  <div className="col s12 l5">
    <div className="card-block">
      <h2>Account Status</h2>
      <div className="card">
        <div className="card-content">
          <div className="row mb-0">
            <div className="input-field account-status_input col s12 focus-blue">
              <input
                type="text"
                id="license-code"
                name="licenseCode"
                defaultValue={licenseCode}
                readOnly=""
              />
              <label className="label active" htmlFor="code">License Code</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field account-status_input col s12 focus-blue">
              <input
                type="text"
                id="status"
                name="status"
                defaultValue={status}
                readOnly=""
              />
              <label className="label active" htmlFor="status">Status</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field account-status_input col s12 focus-blue">
              <input
                type="text"
                id="activation-date"
                name="activationDate"
                defaultValue={activationDate}
                readOnly=""
              />
              <label className="label active" htmlFor="activation-date">Activation Date</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field account-status_input col s12 focus-blue">
              <input
                type="text"
                id="expiration-date"
                name="expirationDate"
                defaultValue={expirationDate}
                readOnly=""
              />
              <label className="label active" htmlFor="expiration-date">Expiration Date</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

AccountStatus.propTypes = {
  state: PropTypes.object.isRequired,
};

export default AccountStatus;

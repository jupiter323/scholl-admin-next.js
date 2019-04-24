import React from 'react';
import PropTypes from 'prop-types';

const LocationEmailSettings = ({ state: { automatedEmailOriginAddress, automatedEmailSalutation }, handleDetailsChange }) => (
  <div className="col s12 l6">
    <div className="card-block">
      <h3>Location Email Settings</h3>
      <div className="card-main card">
        <div className="card-content">
          <div className="row mb-0">
            <div className="input-field col s12">
              <input
                type="text"
                id="automated-email-origin-address"
                name="automatedEmailOriginAddress"
                value={automatedEmailOriginAddress}
                onChange={(event) => handleDetailsChange(event, 'automatedEmailOriginAddress', 'locationEmailSettings')}
              />
              <label className="label" htmlFor="automated-email-origin-address">Automated Emails Come From (email)*</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <textarea
                className="materialize-textarea"
                id="automated-email-salutation"
                name="automatedEmailSalutation"
                value={automatedEmailSalutation}
                onChange={(event) => handleDetailsChange(event, 'automatedEmailSalutation', 'locationEmailSettings')}
              />
              <label className="label" htmlFor="automated-email-salutation">Automated Email Salutation*</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

LocationEmailSettings.propTypes = {
  state: PropTypes.object.isRequired,
  handleDetailsChange: PropTypes.func.isRequired,
};

export default LocationEmailSettings;

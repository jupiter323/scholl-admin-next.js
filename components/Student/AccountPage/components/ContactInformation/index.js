import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../utils/getValueFromState';
import stateOptions from '../../../../utils/stateOptions';

const ContactInformation = ({ state: { phone, addressLine1, addressLine2, city, state, zipCode }, handleDetailsChange }) => (
  <div className="card-block">
    <h2>Contact Information (optional)</h2>
    <div className="card">
      <div className="card-content">
        <div className="row mb-0">
          <div className="input-field col s12 focus-blue">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(event) => handleDetailsChange(event, 'phone', 'contactInformation')}
            />
            <label className={phone.length ? 'label active' : 'label'} htmlFor="phone">Phone</label>
            <span className="note">*Optional</span>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12 focus-blue">
            <input
              type="text"
              id="address_line_1"
              name="addressLine1"
              value={addressLine1}
              onChange={(event) => handleDetailsChange(event, 'addressLine1', 'contactInformation')}
            />
            <label className={addressLine1.length ? 'label active' : 'label'} htmlFor="address_line_1">Address Line 1*</label>
            <span className="note">*Optional</span>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12 focus-blue">
            <input
              type="text"
              id="address_line_2"
              name="addressLine2"
              value={addressLine2}
              onChange={(event) => handleDetailsChange(event, 'addressLine2', 'contactInformation')}
            />
            <label className={addressLine2.length ? 'label active' : 'label'} htmlFor="address_line_2">Address Line 2*</label>
            <span className="note">*Optional</span>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12 focus-blue">
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(event) => handleDetailsChange(event, 'city', 'contactInformation')}
            />
            <label className={city.length ? 'label active' : 'label'} htmlFor="city">City</label>
            <span className="note">*Optional</span>
          </div>
        </div>
        <div className="row mb-0">
          <div className="col s6 l5">
            <div className="input-field focus-blue">
              <Dropdown
                value={getValueFromState(state, stateOptions)}
                onChange={(event) => handleDetailsChange(event, 'state', 'contactInformation')}
                options={stateOptions}
                label="State"
                stateKey="state"
                dropdownKey="state"
              />
              <span className="note">*Optional</span>
            </div>
          </div>
          <div className="col s6 l7">
            <div className="input-field focus-blue">
              <input
                type="text"
                id="zip_code"
                name="zipCode"
                value={zipCode}
                onChange={(event) => handleDetailsChange(event, 'zipCode', 'contactInformation')}
              />
              <label className={zipCode.length ? 'label active' : 'label'} htmlFor="zip_code">Zip</label>
              <span className="note">*Optional</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ContactInformation.propTypes = {
  state: PropTypes.object.isRequired,
  handleDetailsChange: PropTypes.func.isRequired,
};

export default ContactInformation;

import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../utils/getValueFromState';
import stateOptions from '../../../../utils/stateOptions';

const ContactInfo = ({ state: { phone, streetAddress, city, state, zip }, handleDetailsChange }) => (
  <div className="card-block">
    <h3>Contact Info</h3>
    <div className="card-main card card-instructor">
      <div className="card-content">
        <div className="row mb-0">
          <div className="input-field col s12">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(event) => handleDetailsChange(event, 'phone', 'contactInfo')}
            />
            <label className={phone.length ? 'label active' : 'label'} htmlFor="phone">Phone (optional)</label>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12">
            <input
              type="text"
              id="street-address"
              name="streetAddress"
              value={streetAddress}
              onChange={(event) => handleDetailsChange(event, 'streetAddress', 'contactInfo')}
            />
            <label className={streetAddress.length ? 'label active' : 'label'} htmlFor="street-address">Street Address (optional)</label>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12">
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(event) => handleDetailsChange(event, 'city', 'contactInfo')}
            />
            <label className={city.length ? 'label active' : 'label'} htmlFor="city">City (optional)</label>
          </div>
        </div>
        <div className="row mb-0">
          <div className="col s6 l5">
            <div className="input-field">
              <Dropdown
                value={getValueFromState(state, stateOptions)}
                onChange={(event) => handleDetailsChange(event, 'state', 'contactInfo')}
                options={stateOptions}
                label="State (optional)"
                stateKey="state"
                dropdownKey="state"
              />
            </div>
          </div>
          <div className="col s6 l7">
            <div className="input-field">
              <input
                type="tel"
                id="zip"
                name="zip"
                value={zip}
                onChange={(event) => handleDetailsChange(event, 'zip', 'contactInfo')}
              />
              <label className={zip.length ? 'label active' : 'label'} htmlFor="zip">Zip (optional)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ContactInfo.propTypes = {
  state: PropTypes.object,
  handleDetailsChange: PropTypes.func.isRequired,
};

export default ContactInfo;

import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../../utils/getValueFromState';
import stateOptions from '../../../../../utils/stateOptions';

const OwnerContactInfo = ({ state: { firstName, lastName, email, phone, streetAddress, city, state, zip }, handleDetailsChange }) => (
  <div className="col s12 l6">
    <div className="card-block">
      <h3>Owner Contact Info</h3>
      <div className="card-main card">
        <div className="card-content">
          <div className="row mb-0">
            <div className="input-field col s12">
              <input
                type="text"
                id="first-name"
                name="firstName"
                value={firstName}
                onChange={(event) => handleDetailsChange(event, 'firstName', 'ownerContactInfo')}
              />
              <label className="label" htmlFor="first-name">First Name*</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input
                type="text"
                id="last-name"
                name="lastName"
                value={lastName}
                onChange={(event) => handleDetailsChange(event, 'lastName', 'ownerContactInfo')}
              />
              <label className="label" htmlFor="last-name">Last Name*</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(event) => handleDetailsChange(event, 'email', 'ownerContactInfo')}
              />
              <label className="label" htmlFor="email">Email Address*</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(event) => handleDetailsChange(event, 'phone', 'ownerContactInfo')}
              />
              <label className="label" htmlFor="phone">Phone (optional)</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input
                type="text"
                id="street-address"
                name="streetAddress"
                value={streetAddress}
                onChange={(event) => handleDetailsChange(event, 'streetAddress', 'ownerContactInfo')}
              />
              <label className="label" htmlFor="street-address">Street Address (optional)</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={(event) => handleDetailsChange(event, 'city', 'ownerContactInfo')}
              />
              <label className="label" htmlFor="city">City (optional)</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="col s12 m6 l5">
              <div className="input-field">
                <Dropdown
                  value={getValueFromState(state, stateOptions)}
                  onChange={(event) => handleDetailsChange(event, 'state', 'ownerContactInfo')}
                  options={stateOptions}
                  label="State (optional)"
                  stateKey="state"
                  dropdownKey="state"
                />
              </div>
            </div>
            <div className="col s12 m6 l7">
              <div className="input-field">
                <input
                  type="tel"
                  id="zip"
                  name="zip"
                  value={zip}
                  onChange={(event) => handleDetailsChange(event, 'zip', 'ownerContactInfo')}
                />
                <label className="label" htmlFor="zip">Zip (optional)</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

OwnerContactInfo.propTypes = {
  state: PropTypes.object.isRequired,
  handleDetailsChange: PropTypes.func.isRequired,
};

export default OwnerContactInfo;

import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../utils/getValueFromState';
import stateOptions from '../../../../utils/stateOptions';

const LocationContactInfo = ({ state: { locationName, locationNickname, locationEmail, locationPhone, website, streetAddress, city, state, zip } = {}, handleDetailsChange }) => (
  <div className="col s12 l5">
    <div className="card-block">
      <h3>Location Contact Info</h3>
      <div className="card-main card">
        <div className="card-content">
          <div className="row mb-0">
            <div className="input-field col s12">
              <input
                type="text"
                id="location-name"
                name="locationName"
                value={locationName}
                onChange={(event) => handleDetailsChange(event, 'locationName', 'locationContactInfo')}
              />
              <label className={locationName.length ? 'label active' : 'label'} htmlFor="location-name">Location Name*</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input
                type="text"
                id="location-nickname"
                name="locationNickname"
                value={locationNickname}
                onChange={(event) => handleDetailsChange(event, 'locationNickname', 'locationContactInfo')}
              />
              <label className={locationNickname.length ? 'label active' : 'label'} htmlFor="location-nickname">Location Nickname*</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input
                type="text"
                id="location-email"
                name="locationEmail"
                value={locationEmail}
                onChange={(event) => handleDetailsChange(event, 'locationEmail', 'locationContactInfo')}
              />
              <label className={locationEmail.length ? 'label active' : 'label'} htmlFor="location-email">Location Email*</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input
                type="tel"
                id="location-phone"
                name={locationPhone}
                value={locationPhone}
                onChange={(event) => handleDetailsChange(event, 'locationPhone', 'locationContactInfo')}
              />
              <label className={locationPhone.length ? 'label active' : 'label'} htmlFor="location-phone">Location Phone Number (optional)</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input
                type="url"
                id="website"
                name="website"
                value={website}
                onChange={(event) => handleDetailsChange(event, 'website', 'locationContactInfo')}
              />
              <label className="label active" htmlFor="website">Website (optional)</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input
                type="tel"
                id="street-address"
                name="streetAddress"
                value={streetAddress}
                onChange={(event) => handleDetailsChange(event, 'streetAddress', 'locationContactInfo')}
              />
              <label className={streetAddress.length ? 'label active' : 'label'} htmlFor="street-address">Street Address (optional)</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input
                type="tel"
                id="city"
                name="city"
                value={city}
                onChange={(event) => handleDetailsChange(event, 'city', 'locationContactInfo')}
              />
              <label className={city.length ? 'label active' : 'label'} htmlFor="city">City (optional)</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12 m6 l5">
              <Dropdown
                value={getValueFromState(state, stateOptions)}
                onChange={(event) => handleDetailsChange(event, 'state', 'locationContactInfo')}
                options={stateOptions}
                label="State"
                stateKey="state"
                dropdownKey="state"
              />
            </div>
            <div className="input-field col s12 m6 l7">
              <input
                type="tel"
                id="zip"
                name="zip"
                value={zip}
                onChange={(event) => handleDetailsChange(event, 'zip', 'locationContactInfo')}
              />
              <label className={zip.length ? 'label active' : 'label'} htmlFor="zip_edit">Zip (optional)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

LocationContactInfo.propTypes = {
  state: PropTypes.object.isRequired,
  handleDetailsChange: PropTypes.func.isRequired,
};

export default LocationContactInfo;
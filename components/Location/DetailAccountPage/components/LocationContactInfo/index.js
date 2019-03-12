import React from 'react';

const LocationContactInfo = () => (
  <div className="col s12 l5">
    <div className="card-block">
      <h3>Location Contact Info</h3>
      <div className="card-main card">
        <div className="card-content">
          <div className="row mb-0">
            <div className="input-field col s12">
              <input type="text" id="location_name_edit" value="Study Hut" />
              <label className="label" htmlFor="location_name_edit">Location Name*</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input type="text" id="location_nickname_edit" value="Study Hut - Redondo Beach, CA" />
              <label className="label" htmlFor="location_nickname_edit">Location Nickname*</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input type="text" id="location_email_edit" value="info@clearchoiceprep.com" />
              <label className="label" htmlFor="location_email_edit">Location Email*</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input type="tel" id="location_phone_edit" />
              <label className="label" htmlFor="location_phone_edit">Location Phone Number (optional)</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input type="url" id="website_edit" value="http://www.clearchoiceprep.com" />
              <label className="label active" htmlFor="website_edit">Website (optional)</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input type="tel" id="street_address_edit" />
              <label className="label" htmlFor="street_address_edit">Street Address (optional)</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12">
              <input type="tel" id="city_edit" />
              <label className="label" htmlFor="city_edit">City (optional)</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field col s12 m6 l5">
              <select id="state_edit">
                <option>State (optional)</option>
                <option>State</option>
                <option>State</option>
              </select>
              <label className="label" htmlFor="state_edit">Test</label>
            </div>
            <div className="input-field col s12 m6 l7">
              <input type="tel" id="zip_edit" />
              <label className="label" htmlFor="zip_edit">Zip (optional)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LocationContactInfo;

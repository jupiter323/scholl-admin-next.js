import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const ContactInfo = ({ state }) => (
  <div className="card-block">
    <h3>Contact Info</h3>
    <div className="card-main card card-instructor">
      <div className="card-content">
        <div className="row mb-0">
          <div className="input-field col s12">
            <input type="tel" id="contact_phone_edit" />
            <label className="label" htmlFor="contact_phone_edit">Phone (optional)</label>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12">
            <input type="text" id="contact_address_edit" />
            <label className="label" htmlFor="contact_address_edit">Street Address (optional)</label>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12">
            <input type="text" id="contact_city_edit" />
            <label className="label" htmlFor="contact_city_edit">City (optional)</label>
          </div>
        </div>
        <div className="row mb-0">
          <div className="col s6 l5">
            <div className="input-field">
              <select id="contact_state_edit">
                <option>State</option>
                <option>State</option>
                <option>State</option>
              </select>
              <label className="label" htmlFor="contact_state_edit">State (optional)</label>
            </div>
          </div>
          <div className="col s6 l7">
            <div className="input-field">
              <input type="tel" id="contact_zip_edit" />
              <label className="label" htmlFor="contact_zip_edit">Zip (optional)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ContactInfo.propTypes = {
  state: PropTypes.object,
};

export default ContactInfo;

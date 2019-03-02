import React from 'react';

const ContactInformation = () => (
  <div className="card-block">
    <h2>Contact Information (optional)</h2>
    <div className="card">
      <div className="card-content">
        <div className="row mb-0">
          <div className="input-field col s12 focus-blue">
            <input type="tel" id="tel" />
            <label className="label" htmlFor="tel">Phone*</label>
            <span className="note">*Optional</span>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12 focus-blue">
            <input type="text" id="address-01" />
            <label className="label" htmlFor="address-01">Address Line 1*</label>
            <span className="note">*Optional</span>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12 focus-blue">
            <input type="text" id="address-02" />
            <label className="label" htmlFor="address-02">Address Line 2*</label>
            <span className="note">*Optional</span>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12 focus-blue">
            <input type="text" id="city" />
            <label className="label" htmlFor="city">City*</label>
            <span className="note">*Optional</span>
          </div>
        </div>
        <div className="row mb-0">
          <div className="col s6 l5">
            <div className="input-field focus-blue">
              <select id="contact_state_edit">
                <option>State*</option>
                <option>State</option>
                <option>State</option>
              </select>
              <span className="note">*Optional</span>
            </div>
          </div>
          <div className="col s6 l7">
            <div className="input-field focus-blue">
              <input type="text" id="contact_zip_edit" />
              <label className="label" htmlFor="contact_zip_edit">Zip</label>
              <span className="note">*Optional</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactInformation;

import React from 'react';

const LocationEmailSettings = () => (
  <div className="card-block">
    <h3>Location Email Settings</h3>
    <div className="card-main card">
      <div className="card-content">
        <div className="row mb-0">
          <div className="input-field col s12">
            <input type="text" id="auto_email_edit" value="Clear Choice Prep <messages@clearchoiceprep.com>" />
            <label className="label" htmlFor="auto_email_edit">Automated Emails Come From (email)*</label>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12">
            <textarea id="email_salutation_edit" className="materialize-textarea">All the best,The Clear Choice Team</textarea>
            <label className="label" htmlFor="email_salutation_edit">Automated Email Salutation*</label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LocationEmailSettings;

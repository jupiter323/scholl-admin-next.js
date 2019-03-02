import React from 'react';

const AccountStatus = () => (
  <div className="col s12 l5">
    <div className="card-block">
      <h2>Account Status</h2>
      <div className="card">
        <div className="card-content">
          <div className="row mb-0">
            <div className="input-field account-status_input col s12 focus-blue">
              <input type="text" id="code" value="792AF70E-DC1C-1448-FCCB5DA2C5890364" readOnly="" />
              <label className="label active" htmlFor="code">License Code</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field account-status_input col s12 focus-blue">
              <input type="text" id="status" value="Activated" readOnly="" />
              <label className="label active" htmlFor="status">Status</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field account-status_input col s12 focus-blue">
              <input type="text" id="activation-date" value="6/16/2017" readOnly="" />
              <label className="label active" htmlFor="activation-date">Activation Date</label>
            </div>
          </div>
          <div className="row mb-0">
            <div className="input-field account-status_input col s12 focus-blue">
              <input type="text" id="expiration-date" value="6/16/2017" readOnly="" />
              <label className="label active" htmlFor="expiration-date">Expiration Date</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AccountStatus;

/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import licenseTypeOptions from '../../../../utils/licenseTypeOptions';

const AccountType = ({ state: { licenseType } }) => (
  <div className="col s12 l5">
    <div className="card-block">
      <h2>Account Type</h2>
      <div className="card">
        <div className="card-content">
          <div className="account-type-block">
            <div className="account-type-block_holder">
              <div className="head-box">
                <h3><span>License Type</span> {licenseTypeOptions[licenseType].name}</h3>
              </div>
              <div className="picture-holder">
                <img src="images/img-01.png" alt="image description" />
              </div>
              <p>{licenseTypeOptions[licenseType].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

AccountType.propTypes = {
  state: PropTypes.object.isRequired,
};

export default AccountType;

/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const AccountType = () => (
  <div className="col s12 l5">
    <div className="card-block">
      <h2>Account Type</h2>
      <div className="card">
        <div className="card-content">
          <div className="account-type-block">
            <div className="account-type-block_holder">
              <div className="head-box">
                <h3><span>License Type</span> Class Member</h3>
              </div>
              <div className="picture-holder">
                <img src="images/img-01.png" alt="image description" />
              </div>
              <p>This license type allows the student to participate in a course with 4 or more other students. The coursework may be customized for the class as a whole, but not for individual students within the class.</p>
              <p>To conduct a course for an individual student in a one-on-one format (tutoring), you need a “one-on-one” license type.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AccountType;

import React from 'react';
import PropTypes from 'prop-types';

const Owner = ({ state: { firstName, lastName, email } }) => (
  <div className="card-block">
    <h3>Owner</h3>
    <div className="owner-box card-panel" style={{ backgroundColor: '#31837a', color: '#fff' }}>
      <div className="card-panel-row row">
        <div className="col s10">
          <div className="user-block">
            <div className="user-circle" style={{ backgroundColor: '#9c27b0', color: '#fff' }}>
              <img src="images/img-owner01.jpg" alt="" />
            </div>
            <div className="user-text" style={{ color: '#fff' }}>
              <h4 className="h3">{lastName}, {firstName}</h4>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
        </div>
        <div className="col s2 right-align">
          <span className="block-icon">
            <i className="icon-owner"></i>
            <span className="text-icon">Owner</span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

Owner.propTypes = {
  state: PropTypes.object.isRequired,
};

export default Owner;

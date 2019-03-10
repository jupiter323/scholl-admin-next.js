import React from 'react';
import PropTypes from 'prop-types';

const FullAccess = ({ fullAccess, toggleFullAccess }) => (
  <div className="col s12 l5">
    <div className="card-block">
      <h3>Full Access (be careful!)</h3>
      <div className="card-main card card-instructor">
        <div className="card-content">
          <div className="row mb-0">
            <div className="col s12">
              <div className="large">
                <p>{`To give this instructor full access to all students and instructors, select “Full Access." Caution: this option will give this user access to your whole organization.`}</p>
                <label>
                  <input
                    type="checkbox"
                    className="filled-in"
                    value={fullAccess}
                    onChange={toggleFullAccess}
                  />
                  <span className="large-label">Full Access</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

FullAccess.propTypes = {
  fullAccess: PropTypes.bool.isRequired,
  toggleFullAccess: PropTypes.func.isRequired,
};

export default FullAccess;

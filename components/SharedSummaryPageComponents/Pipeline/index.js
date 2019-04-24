import React from 'react';
import PropTypes from 'prop-types';

const Pipeline = ({ state: { unactivated, current, complete, waitingForFinalScore } }) => (
  <div className="grid-item card-width-556">
    <div className="card-block">
      <h2>Pipeline</h2>
      <div className="card-main-full card">
        <div className="card-content">
          <ul className="points-list-bordered-large">
            <li className="style-unactive">
              <span className="badge-circle badge-circle-bordered">{unactivated} <span className="badge-text">Unactivated</span></span>
            </li>
            <li className="style-current">
              <span className="badge-circle badge-circle-bordered">{current} <span className="badge-text">Current</span></span>
            </li>
            <li className="style-complete">
              <span className="badge-circle badge-circle-bordered">{complete} <span className="badge-text">Complete</span></span>
            </li>
            <li className="style-waiting">
              <span className="badge-circle badge-circle-bordered">{waitingForFinalScore} <span className="badge-text">Waiting for <br />Final Score</span></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

Pipeline.propTypes = {
  state: PropTypes.object.isRequired,
};

export default Pipeline;

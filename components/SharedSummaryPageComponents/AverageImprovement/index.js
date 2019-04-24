import React from 'react';
import PropTypes from 'prop-types';

const AverageImprovement = ({ state: { totalPoints, readingAndWriting, math } }) => (
  <div className="grid-item card-width-366">
    <div className="card-block">
      <h2>Average Improvement</h2>
      <div className="card-main-full card">
        <div className="card-content">
          <ul className="points-list-custom">
            <li className="point-custom-large style-aqua">
              <span className="badge-circle">{totalPoints} <span className="badge-text">points</span></span>
            </li>
            <li>
              <ul>
                <li className="style-green-light">
                  <span className="badge-circle">+{readingAndWriting} <span className="badge-text">Reading &amp; Writing</span></span>
                </li>
                <li className="style-blue-lightdark">
                  <span className="badge-circle">{math} <span className="badge-text">Math</span></span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

AverageImprovement.propTypes = {
  state: PropTypes.object.isRequired,
};

export default AverageImprovement;

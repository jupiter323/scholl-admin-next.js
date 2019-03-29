import React from 'react';
import PropTypes from 'prop-types';

const StudentImprovement = ({ state: { noGain, from0To50, from50To99, from100To149, from150To199, from200Plus } }) => (
  <div className="grid-item card-width-556 order-sm-4">
    <div className="card-block">
      <h2>Student Improvement</h2>
      <div className="card-main-full card">
        <div className="card-content">
          <ul className="vertical-graphs-container">
            <li className="vertical-graph-block">
              <div className="vertical-graph-frame">
                <span className="vertical-graph">
                  <span className="graph-value">{noGain}%</span>
                  <span className="vertical-graph-box red darken-1" style={{ height: `${noGain}%` }}></span>
                </span>
                <span className="graph-legend">no gain</span>
              </div>
            </li>
            <li className="vertical-graph-block">
              <div className="vertical-graph-frame">
                <span className="vertical-graph">
                  <span className="graph-value">{from0To50}%</span>
                  <span className="vertical-graph-box pink darken-3" style={{ height: `${from0To50}%` }}></span>
                </span>
                <span className="graph-legend">0 to 50 <br />points</span>
              </div>
            </li>
            <li className="vertical-graph-block">
              <div className="vertical-graph-frame">
                <span className="vertical-graph">
                  <span className="graph-value">{from50To99}%</span>
                  <span className="vertical-graph-box purple accent-4" style={{ height: `${from50To99}%` }}></span>
                </span>
                <span className="graph-legend">50 to 99 <br />points</span>
              </div>
            </li>
            <li className="vertical-graph-block">
              <div className="vertical-graph-frame">
                <span className="vertical-graph">
                  <span className="graph-value">{from100To149}%</span>
                  <span className="vertical-graph-box purple darken-3" style={{ height: `${from100To149}%` }}></span>
                </span>
                <span className="graph-legend">100-149 <br />points</span>
              </div>
            </li>
            <li className="vertical-graph-block">
              <div className="vertical-graph-frame">
                <span className="vertical-graph">
                  <span className="graph-value">{from150To199}%</span>
                  <span className="vertical-graph-box  deep-purple accent-4" style={{ height: `${from150To199}%` }}></span>
                </span>
                <span className="graph-legend">150-199 <br />points</span>
              </div>
            </li>
            <li className="vertical-graph-block">
              <div className="vertical-graph-frame">
                <span className="vertical-graph">
                  <span className="graph-value">{from200Plus}%</span>
                  <span className="vertical-graph-box  indigo accent-4" style={{ height: `${from200Plus}%` }}></span>
                </span>
                <span className="graph-legend">200+ <br />points</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

StudentImprovement.propTypes = {
  state: PropTypes.object.isRequired,
};

export default StudentImprovement;

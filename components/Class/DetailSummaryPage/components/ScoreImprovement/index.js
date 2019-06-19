import React from 'react';
import PropTypes from 'prop-types';

const ScoreImprovement = ({ state: { points, readingAndWriting, math, noGain, from0To50, from50To99, from100To149, from150To199, from200Plus } }) => (
  <div className="card-block">
    <h2>Score Improvement</h2>
    <div className="two-columns-sameheight row mb-0">
      <div className="col s12 xl6">
        <div className="card-main-full card">
          <div className="card-content">
            <ul className="points-list-custom">
              <li className="point-custom-xlarge style-aqua">
                <span className="badge-circle">{points} <span className="badge-text">points</span></span>
              </li>
              <li>
                <ul>
                  <li className="point-custom-114 style-green-light">
                    <span className="badge-circle">+{readingAndWriting} <span className="badge-text">Reading &amp; Writing</span></span>
                  </li>
                  <li className="point-custom-114 style-blue-lightdark">
                    <span className="badge-circle">{math} <span className="badge-text">Math</span></span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col s12 xl6">
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
  </div>
);

ScoreImprovement.propTypes = {
  state: PropTypes.object.isRequired,
};

export default ScoreImprovement;

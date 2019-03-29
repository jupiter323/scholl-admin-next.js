import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const TestScores = ({ state }) => (
  <div className="col s12 l7 card-width-747">
    <div className="card-main card card-chart">
      <div className="card-content">
        <h2>Test Scores</h2>
        <div className="tabs-container tabs-charts-container">
          <ul className="tabs">
            <li className="tab col s5 l4">
              <a className="active" href="#scores_tab01">Composite Score</a>
            </li>
            <li className="tab col s5 l4">
              <a href="#scores_tab02">Subject Scores</a>
            </li>
          </ul>
          <div id="scores_tab01" className="tab-content">
            <div className="card-panel panel-scores light-blue accent-2 white-text z-depth-1">
              <ul className="panel-list">
                <li className="panel-block">
                  <strong className="text-small">Reading</strong>
                  <strong className="text-large">+80</strong>
                </li>
                <li className="panel-block">
                  <strong className="text-small">Writing</strong>
                  <strong className="text-large">+30</strong>
                </li>
                <li className="panel-block">
                  <strong className="text-small">Math</strong>
                  <strong className="text-large">+110</strong>
                </li>
                <li className="panel-block">
                  <strong className="text-small">Composite</strong>
                  <strong className="text-large">+220</strong>
                </li>
              </ul>
            </div>
            <div className="chart-line-container js-scrollable-chart">
              <div className="js-spline-chart" data-source='./inc/score-spline-data_composite.json'>
              </div>
            </div>
          </div>
          <div id="scores_tab02" className="tab-content">
            <div className="card-panel panel-scores light-blue accent-2 white-text">
              <ul className="panel-list">
                <li className="panel-block">
                  <strong className="text-small">Reading</strong>
                  <strong className="text-large">+55</strong>
                </li>
                <li className="panel-block">
                  <strong className="text-small">Writing</strong>
                  <strong className="text-large">+42</strong>
                </li>
                <li className="panel-block">
                  <strong className="text-small">Math</strong>
                  <strong className="text-large">+99</strong>
                </li>
                <li className="panel-block">
                  <strong className="text-small">Composite</strong>
                  <strong className="text-large">+196</strong>
                </li>
              </ul>
            </div>
            <div className="js-scrollable-chart">
              <div className="js-spline-chart" data-source='./inc/score-spline-data_subject.json'>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

TestScores.propTypes = {
  state: PropTypes.object.isRequired,
};

export default TestScores;

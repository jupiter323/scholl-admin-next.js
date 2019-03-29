import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const CourseProgress = ({ state }) => (
  <div className="col s12 l7 card-width-747">
    <div className="card-main card card-chart">
      <div className="card-content">
        <h2>Course Progress</h2>
        <div className="progress-block">
          <div className="progress-legend">
            <div className="legend-block">
              <span className="small-text">Start Date</span>
              <time dateTime="2018-06-13" className="large-text">6/13/18</time>
            </div>
            <div className="legend-block">
              <span className="small-text">Test Date</span>
              <time dateTime="2018-10-06" className="large-text">Oct SAT (10/6/18)</time>
            </div>
          </div>
          <div className="progress">
            <div className="determinate" style={{ width: '70%' }}>
              <span className="progress-label">75%</span>
            </div>
          </div>
        </div>
        <div className="charts-container">
          <div className="row mb-0">
            <div className="col">
              <div className="chart-block">
                <div className="js-donut-chart js-donut-middle" data-stroke-width="20" data-source='./inc/score-data-improvement.json'></div>
                <div className="chart-text">
                  <span className="title">Improvement</span>
                  <span className="value">90%</span>
                  <span className="description">vs target score</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="chart-block">
                <div className="js-donut-chart js-donut-middle" data-stroke-width="20" data-source='./inc/score-data-lessons.json'></div>
                <div className="chart-text">
                  <span className="title">Lessons</span>
                  <span className="value">78%</span>
                  <span className="description">vs scheduled lessons</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="chart-block">
                <div className="js-donut-chart js-donut-middle" data-stroke-width="20" data-source='./inc/score-data-instruction.json'></div>
                <div className="chart-text">
                  <span className="title">Instruction</span>
                  <span className="value">63%</span>
                  <span className="description">vs scheduled instruction</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="chart-block">
                <div className="js-donut-chart js-donut-middle" data-stroke-width="20" data-source='./inc/score-data-practice-tests.json'></div>
                <div className="chart-text">
                  <span className="title">Practice Tests</span>
                  <span className="value">50%</span>
                  <span className="description">vs scheduled tests</span>
                </div>
              </div>
            </div>
          </div>
          <div className="chart-legend">
            <div className="row mb-0">
              <div className="col legend-frame">
                <span className="box complete"></span>
                <span className="text">Complete</span>
              </div>
              <div className="col legend-frame">
                <span className="box behind"></span>
                <span className="text">Behind Schedule</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

CourseProgress.propTypes = {
  state: PropTypes.object.isRequired,
};

export default CourseProgress;

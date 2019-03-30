import React from 'react';
import PropTypes from 'prop-types';

// TODO: Implement doughnut charts
const CourseProgress = ({ state: { startDate, testDate, progress, improvement, lessons, instruction, practiceTests }, active }) => (
  <div className="col s12 l7 card-width-747">
    <div className="card-main card card-chart">
      <div className="card-content">
        <h2>Course Progress</h2>
        <div className="progress-block">
          <div className="progress-legend">
            <Choose>
              <When condition={active}>
                <div className="legend-block">
                  <span className="small-text">Start Date</span>
                  <time dateTime="2018-06-13" className="large-text">{startDate}</time>
                </div>
                <div className="legend-block">
                  <span className="small-text">Test Date</span>
                  <time dateTime="2018-10-06" className="large-text">Oct SAT ({testDate})</time>
                </div>
              </When>
              <Otherwise>
                <span className="text-frame">Once the course begins, check here to be sure the student is on track.</span>
              </Otherwise>
            </Choose>
          </div>
          <div className="progress">
            <div className="determinate" style={{ width: `${active ? progress : '0'}%` }}>
              {active && <span className="progress-label">{progress}%</span>}
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
                  <Choose>
                    <When condition={active}>
                      <span className="value">{improvement}%</span>
                      <span className="description">vs target score</span>
                    </When>
                    <Otherwise>
                      <span className="inactive-text">None Yet</span>
                    </Otherwise>
                  </Choose>

                </div>
              </div>
            </div>
            <div className="col">
              <div className="chart-block">
                <div className="js-donut-chart js-donut-middle" data-stroke-width="20" data-source='./inc/score-data-lessons.json'></div>
                <div className="chart-text">
                  <span className="title">Lessons</span>
                  <Choose>
                    <When condition={active}>
                      <span className="value">{lessons}%</span>
                      <span className="description">vs scheduled lessons</span>
                    </When>
                    <Otherwise>
                      <span className="inactive-text">None Scheduled</span>
                    </Otherwise>
                  </Choose>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="chart-block">
                <div className="js-donut-chart js-donut-middle" data-stroke-width="20" data-source='./inc/score-data-instruction.json'></div>
                <div className="chart-text">
                  <span className="title">Instruction</span>
                  <Choose>
                    <When condition={active}>
                      <span className="value">{instruction}%</span>
                      <span className="description">vs scheduled instruction</span>
                    </When>
                    <Otherwise>
                      <span className="inactive-text">None Scheduled</span>
                    </Otherwise>
                  </Choose>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="chart-block">
                <div className="js-donut-chart js-donut-middle" data-stroke-width="20" data-source='./inc/score-data-practice-tests.json'></div>
                <div className="chart-text">
                  <span className="title">Practice Tests</span>
                  <Choose>
                    <When condition={active}>
                      <span className="value">{practiceTests}%</span>
                      <span className="description">vs scheduled tests</span>
                    </When>
                    <Otherwise>
                      <span className="inactive-text">None Scheduled</span>
                    </Otherwise>
                  </Choose>
                </div>
              </div>
            </div>
          </div>
          <If condition={active}>
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
          </If>
        </div>
      </div>
    </div>
  </div>
);

CourseProgress.propTypes = {
  state: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
};

export default CourseProgress;

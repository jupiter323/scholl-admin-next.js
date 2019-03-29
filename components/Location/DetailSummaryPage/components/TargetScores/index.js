import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const data = (percentage) => ({
  datasets: [{
    data: [percentage, 100 - percentage],
    backgroundColor: [
      '#00bbf7',
      '#eaeaea',
    ],
  }],
});

const TargetScores = ({ state: { percentageHitTargetScore } }) => (
  <div className="grid-item card-width-366 order-sm-3">
    <div className="card-block">
      <h2>Target Scores</h2>
      <div className="card-main-full card">
        <div className="card-content">
          <div className="chart-container chart-container-xllarge">
            <div className="chart-holder">
              <Doughnut
                data={() => data(percentageHitTargetScore)}
                options={{
                  circumference: 1 * Math.PI,
                  rotation: 1 * Math.PI,
                  cutoutPercentage: 60,
                  tooltips: false,
                }}
              />
              <span className="chart-value" style={{ backgroundColor: '#00bbf7' }}><span data-count-up data-start-val="0" data-end-val={`${percentageHitTargetScore}`} data-duration="1">{percentageHitTargetScore}</span>%</span>
            </div>
            <div className="chart-row">
              <div className="chart-col chart-start">
                <b className="amount-text">Total Students</b>
              </div>
              <div className="chart-col chart-end">
                <b className="amount-text">Hit Target Score</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

TargetScores.propTypes = {
  state: PropTypes.object.isRequired,
};

export default TargetScores;

import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const TestScoreCard = ( { subjectScores: { reading, math, writing } } ) => (
  <div className="col s12 l8 card-width-772">
    <div className="card-block">
      <h2>Test Scores <span className="separator">|</span> <span className="quantity">10 to 40</span></h2>
      <div className="card-main-full card">
        <div className="card-content">
          <div className="several-charts-row row mb-0">
            <div className="col s4 center-align">
              <div className="chart-block chart-block-182">
                <div className="js-donut-chart" data-stroke-width="18" data-source='./inc/score-data-reading-test.json'></div>
                <div className="chart-text">
                  <span className="title">Reading</span>
                  <span className="value">{reading}</span>
                  <span className="description">(+3)</span>
                </div>
              </div>
            </div>
            <div className="col s4 center-align">
              <div className="chart-block chart-block-182">
                <div className="js-donut-chart" data-stroke-width="18" data-source='./inc/score-data-writing-test.json'></div>
                <div className="chart-text">
                  <span className="title">Writing</span>
                  <span className="value">{writing}</span>
                  <span className="description">(+4)</span>
                </div>
              </div>
            </div>
            <div className="col s4 center-align">
              <div className="chart-block chart-block-182">
                <div className="js-donut-chart" data-stroke-width="18" data-source='./inc/score-data-math-test.json'></div>
                <div className="chart-text">
                  <span className="title">Math</span>
                  <span className="value">{math}</span>
                  <span className="description">(+2.5)</span>
                </div>
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim </p>
        </div>
      </div>
    </div>
  </div>
);

TestScoreCard.PropTypes = {
  subjectScores: PropTypes.object.isRequired,
}

export default TestScoreCard;
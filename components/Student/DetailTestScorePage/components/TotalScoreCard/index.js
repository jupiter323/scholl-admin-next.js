import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const TotalScoreCard = ( {totalScore} ) => (
  <div className="col s12 l6 card-width-546">
    <div className="card-block">
      <h2>Your Score <span className="separator">|</span> <span className="quantity">400 to 1600</span></h2>
      <div className="card-main-full card">
        <div className="card-content center-align">
          <div className="chart-block chart-block-total">
          <div className="js-donut-chart" data-stroke-width="36" data-source='./inc/score-data-total.json'></div>
            <div className="chart-text">
              <span className="title">Total Score</span>
              <span className="value">{totalScore}</span>
              <span className="description">(+220)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

TotalScoreCard.propTypes = {
  totalScore: PropTypes.object.isRequired,
};

export default TotalScoreCard;
import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const data = (totalScore, totalPossible) => ({
  datasets: [{
    data: [totalPossible, totalPossible-totalScore],
    backgroundColor: [
      '#ce237a',
      'rgb(234, 234, 234)',
    ],
  }],
})
// eslint-disable-next-line react/prop-types
const TotalScoreCard = ( {totalScore, totalPossible} ) => (
  <div className="col s12 l6 card-width-546">
    <div className="card-block">
      <h2>Your Score <span className="separator">|</span> <span className="quantity">400 to 1600</span></h2>
      <div className="card-main-full card">
        <div className="card-content center-align">
          <div className="chart-block chart-block-total">
          <Doughnut
            data={() => data(totalScore, totalPossible)}
            width="320px"
            height="320px"
            options={{
              cutoutPercentage: 80,
            }}
          />
          <div className="chart-text">
              <span className="title">TotalScore</span>
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
  totalPossible: PropTypes.object.isRequired,
};

export default TotalScoreCard;
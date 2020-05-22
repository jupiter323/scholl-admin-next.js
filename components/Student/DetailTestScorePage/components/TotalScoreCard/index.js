import React from 'react';
import PropTypes from 'prop-types';
import {Doughnut} from 'react-chartjs-2';

const data = (totalScore, totalPossible) => ({
  datasets: [
    {
      data: [totalPossible, totalPossible - totalScore],
      backgroundColor: ['#32b9ec', 'rgb(234, 234, 234)'],
    },
  ],
});
class TotalScoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: 0,
      deltaScore: 0,
    };
  }
  render() {
    return (
      <div className="col s12 l6 card-width-546">
        <div className="card-block">
          <h2>
            Your Score <span className="separator">|</span>{' '}
            <span className="quantity">400 to 1600 </span>
          </h2>
          <div className="card-main-full card">
            <div className="card-content center-align">
              <div className="chart-block chart-block-total">
                <Doughnut
                  data={() => data(200, 1600)}
                  width={320}
                  height={320}
                  options={{
                    cutoutPercentage: 80,
                  }}
                />
                <div className="chart-text">
                  <span className="title">TotalScore</span>
                  <span className="value">200</span>
                  <span className="description">(100)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TotalScoreCard.propTypes = {};

export default TotalScoreCard;

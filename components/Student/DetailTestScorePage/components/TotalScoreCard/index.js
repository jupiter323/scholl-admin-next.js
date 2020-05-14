import React from "react";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";

const data = (totalScore, totalPossible) => ({
  datasets: [
    {
      data: [totalPossible, totalPossible - totalScore],
      backgroundColor: ["#32b9ec", "rgb(234, 234, 234)"]
    }
  ]
});
// eslint-disable-next-line react/prop-types
const TotalScoreCard = ({ totalScore, initialScore, currentScore }) => (
  <div className="col s12 l6 card-width-546">
    <div className="card-block">
      <h2>
        Your Score <span className="separator">|</span>{" "}
        <span className="quantity">400 to {parseInt(totalScore)}</span>
      </h2>
      <div className="card-main-full card">
        <div className="card-content center-align">
          <div className="chart-block chart-block-total">
            <Doughnut
              data={() => data(parseInt(currentScore), 1600)}
              width={320}
              height={320}
              options={{
                cutoutPercentage: 80,
              }}
            />
            <div className="chart-text">
              <span className="title">TotalScore</span>
              <span className="value">{parseInt(currentScore)}</span>
              <span className="description">({parseInt(currentScore) - parseInt(initialScore)})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

TotalScoreCard.propTypes = {
};

export default TotalScoreCard;

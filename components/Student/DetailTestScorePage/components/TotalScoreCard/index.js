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
const TotalScoreCard = ({ totalScore, totalPossible }) => (
  <div className="col s12 l6 card-width-546">
    <div className="card-block">
      <h2>
        Your Score <span className="separator">|</span>{" "}
        <span className="quantity">400 to 1600</span>
      </h2>
      <div className="card-main-full card">
        <div className="card-content center-align">
          {/* <div className="chart-block chart-block-total">
            <RadialBar
              svgWidth={320}
              svgHeight={320}
              strokeWidth={32}
              maxValue={totalScore}
              currentValue={totalPossible*0.8}
              strokeColor="#CE237A"
            />
            <div className="chart-text">
              <span className="title">TotalScore</span>
              <span className="value">{totalScore}</span>
              <span className="description">
              (+220)
              </span>
            </div>
          </div> */}
          <div className="chart-block chart-block-total">
            <Doughnut
              data={() => data(totalScore, totalPossible)}
              width={320}
              height={320}
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
);

TotalScoreCard.propTypes = {
  totalScore: PropTypes.string.isRequired,
  totalPossible: PropTypes.string.isRequired
};

export default TotalScoreCard;

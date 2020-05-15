import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const readingData = (totalScore, totalPossible) => ({
  datasets: [{
    data: [totalPossible, totalPossible - totalScore],
    backgroundColor: ["#32A6AF", "rgb(234, 234, 234)"],
  }],
});
const writingData = (totalScore, totalPossible) => ({
  datasets: [{
    data: [totalPossible, totalPossible - totalScore],
    backgroundColor: ["#3b9f85", "rgb(234, 234, 234)"],
  }],
});
const mathData = (totalScore, totalPossible) => ({
  datasets: [{
    data: [totalPossible, totalPossible - totalScore],
    backgroundColor: ["#567EBF", "rgb(234, 234, 234)"],
  }],
});

const TestScoreCard = ({ subjectScores }) => (
  <div className="col s12 l8 card-width-772">
    <div className="card-block">
      <h2>Test Scores <span className="separator">|</span> <span className="quantity">10 to 40</span></h2>
      <div className="card-main-full card">
        <div className="card-content">
          <div className="several-charts-row row mb-0">
            <div className="col s4 center-align">
              <div className="chart-block chart-block-182">
                <Doughnut
                  data={() => readingData(subjectScores.reading ? subjectScores.reading : 0, 100)}
                  width={182}
                  height={182}
                  options={{
                    cutoutPercentage: 80,
                  }}
                />
                <div className="chart-text">
                  <span className="title">Reading</span>
                  <span className="value">{subjectScores.reading ? subjectScores.reading : 0}</span>
                  <span className="description">(+3)</span>
                </div>
              </div>
            </div>
            <div className="col s4 center-align">
              <div className="chart-block chart-block-182">
                <Doughnut
                  data={() => writingData(subjectScores.writing ? subjectScores.writing : 0, 100)}
                  width={182}
                  height={182}
                  options={{
                    cutoutPercentage: 80,
                  }}
                />
                <div className="chart-text">
                  <span className="title">Writing</span>
                  <span className="value">{subjectScores.writing ? subjectScores.writing : 0}</span>
                  <span className="description">(+4)</span>
                </div>
              </div>
            </div>
            <div className="col s4 center-align">
              <div className="chart-block chart-block-182">
                <Doughnut
                  data={() => mathData(subjectScores.math ? subjectScores.math : 0, 100)}
                  width={182}
                  height={182}
                  options={{
                    cutoutPercentage: 80,
                  }}
                />
                <div className="chart-text">
                  <span className="title">Math</span>
                  <span className="value">{subjectScores.math ? subjectScores.math : 0}</span>
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

TestScoreCard.propTypes = {
  subjectScores: PropTypes.object.isRequired,
};

export default TestScoreCard;

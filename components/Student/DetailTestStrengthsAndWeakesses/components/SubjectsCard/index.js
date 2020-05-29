import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const readingData = (totalScore, totalPossible) => ({
  datasets: [
    {
      data: [totalScore, totalPossible - totalScore],
      backgroundColor: ['#35a6af', 'rgb(234, 234, 234)'],
    },
  ],
});
const writingData = (totalScore, totalPossible) => ({
  datasets: [
    {
      data: [totalScore, totalPossible - totalScore],
      backgroundColor: ['#389b7d', 'rgb(234, 234, 234)'],
    },
  ],
});
const mathData = (totalScore, totalPossible) => ({
  datasets: [
    {
      data: [totalScore, totalPossible - totalScore],
      backgroundColor: ['#4785f4', 'rgb(234, 234, 234)'],
    },
  ],
});

const SubjectsCard = ({ readingScores, writingScores, mathScores }) =>
  (<div className="col s12 l8 card-width-772">
    <div className="card-block">
      <h2>Subjects</h2>
      <div className="card-main-full card">
        <div className="card-content">
          <div className="several-charts-row row mb-0">
            <div className="col s4 center-align" id="analysisReadingCicleImg">
              {readingScores &&
                <div className="chart-block chart-block-182">
                  <Doughnut
                    data={() => readingData(readingScores.score.correct, readingScores.score.total)}
                    width={200}
                    height={200}
                    options={{
                      cutoutPercentage: 75,
                    }}
                  />
                  <div className="chart-text">
                    <span className="title">Reading</span>
                    <span className="value">
                      {(readingScores.score.percent_correct).toFixed(0)}%
                    </span>
                    <span className="description">
                      <b>{readingScores.score.correct}</b> of <b>{readingScores.score.total}</b>
                    </span>
                  </div>
                </div>}
            </div>

            <div className="col s4 center-align" id="analysisWritingCircleImg">
              {writingScores &&
                <div className="chart-block chart-block-182">
                  <Doughnut
                    data={() => writingData(writingScores.score.correct, writingScores.score.total)}
                    width={200}
                    height={200}
                    options={{
                      cutoutPercentage: 75,
                    }}
                  />
                  <div className="chart-text">
                    <span className="title">Writing</span>
                    <span className="value">
                      {(writingScores.score.percent_correct).toFixed(0)}%
                    </span>
                    <span className="description">
                      <b>{writingScores.score.correct}</b> of <b>{writingScores.score.total}</b>
                    </span>
                  </div>
                </div>}
            </div>

            <div className="col s4 center-align" id="analysisMathCircleImg">
              {mathScores &&
                <div className="chart-block chart-block-182">
                  <Doughnut
                    data={() => mathData(mathScores.score.correct, mathScores.score.total)}
                    width={200}
                    height={200}
                    options={{
                      cutoutPercentage: 75,
                    }}
                  />
                  <div className="chart-text">
                    <span className="title">Math</span>
                    <span className="value">
                      {(mathScores.score.percent_correct).toFixed(0)}%
                    </span>
                    <span className="description">
                      <b>{mathScores.score.correct}</b> of <b>{mathScores.score.total}</b>
                    </span>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);

SubjectsCard.propTypes = {};

export default SubjectsCard;

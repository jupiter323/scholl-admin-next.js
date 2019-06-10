import React from 'react';import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const data = (totalScore, totalPossible) => ({
  datasets: [{
    data: [totalPossible, totalPossible-totalScore],
    backgroundColor: [
      '#f5883f',
      'rgb(234, 234, 234)',
    ],
  }],
});


const SectionScoreCard = ({sectionScores: {readingAndWriting, math, totalPossible }}) => (
  <div className="col s12 l6 card-width-546">
    <div className="card-block">
      <h2>Section Scores <span className="separator">|</span> <span className="quantity">200 to 800</span></h2>
      <div className="card-main-full card">
        <div className="card-content">
          <div className="several-charts-row row mb-0">
            <div className="col s6 center-align">
              <div className="chart-block chart-block-218">
              <Doughnut
                data={() => data(readingAndWriting, totalPossible)}
                width={215}
                height={215}
                options={{
                  cutoutPercentage: 80,
                }} />
                <div className="chart-text">
                  <span className="title">Reading &amp; Writing</span>
                  <span className="value">{readingAndWriting}</span>
                  <span className="description">(+80)</span>
              </div>
              </div>
            </div>
            <div className="col s6 center-align">
              <div className="chart-block chart-block-218">
              <Doughnut
                data={() => data(math, totalPossible )}
                width={215}
                height={215}
                options={{
                  cutoutPercentage: 80,
                }} />
                <div className="chart-text">
                  <span className="title">Math</span>
                  <span className="value">{math}</span>
                  <span className="description">(+80)</span>
                </div>
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
        </div>
      </div>
    </div>
  </div>
)

SectionScoreCard.propTypes = {
  sectionScores: PropTypes.object.isRequired,
}
export default SectionScoreCard;
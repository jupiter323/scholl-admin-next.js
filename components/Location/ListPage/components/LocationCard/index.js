import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const data = (value, total) => ({
  datasets: [{
    data: [ value, total-value ],
    backgroundColor: [
      '#62b771',
      '#eaeaea',
    ],
  }],
})

const LocationCard = ({ index, handleLocationCardClick, location: {
  locationBasicInfo: { studentsAchievingTargetScore, activeStudents, pastStudents, unactivatedStudents, averageImprovement, averageInitialScore, averageFinalScore } = {},
  locationContactInfo: { locationName, locationNickname } = {},
} = {} }) => (
  <div className="card-main-col col s12 m8 l7 xl5">
    <div className="card-main card-location card card-large">
      <div className="card-panel" style={{ backgroundColor: '#62b771', color: '#fff' }}>
        <div className="card-panel-row row">
          <div className="col s10">
            <div className="user-block">
              <div className="user-text" style={{ color: '#fff' }}>
                <h4 className="h3"><a href="#" onClick={() => handleLocationCardClick(index)}> {locationName}</a></h4>
                <span className="sub-title">{locationNickname}</span>
              </div>
            </div>
          </div>
          <div className="col s2 right-align">
            <div className="row icons-row">
              <div className="col right-align">
                <span className="block-icon">
                  <i className="icon-location"></i>
                  <span className="text-icon">Location</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-content">
        <div className="row d-flex align-items-center mb-0">
          <div className="col s12 m5">
            <div className="chart-container">
              <div className="chart-holder">
                <Doughnut
                  data={() => data(studentsAchievingTargetScore, pastStudents)}
                  height={110}
                  width={110}
                  options={{
                    circumference: 1.45 * Math.PI,
                        rotation: -3.85,
                        cutoutPercentage: 55,
                        tooltips: false,
                  }}
                />
                <span className="chart-value" style={{ backgroundColor: '#62b771', marginBottom: '-15px' }}><span data-count-up data-start-val="0" data-end-val="91" data-duration="1"></span>{Math.floor(studentsAchievingTargetScore / pastStudents * 100)}%</span>
              </div>
              <div className="chart-description" style={{ color: '#31837a', marginTop: '45px' }}>Students Who Achieved Target Score</div>
            </div>
          </div>
          <div className="col s12 m7">
            <ul className="points-list">
              <li className="style-red-darken">
                <span className="badge-circle">{activeStudents}</span>
                <span className="point-text">active students</span>
              </li>
              <li className="style-pink-darken">
                <span className="badge-circle">{pastStudents}</span>
                <span className="point-text">past students</span>
              </li>
              <li>
                <span className="badge-circle">{unactivatedStudents}</span>
                <span className="point-text">unactivated students</span>
              </li>
              <li className="style-blue-light">
                <span className="badge-circle">+{averageImprovement}</span>
                <span className="point-text">average improvement</span>
              </li>
              <li className="style-blue">
                <span className="badge-circle">{averageInitialScore}</span>
                <span className="point-text">average initial score</span>
              </li>
              <li className="style-blue-dark">
                <span className="badge-circle">{averageFinalScore}</span>
                <span className="point-text">average final score</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

LocationCard.propTypes = {
  location: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleLocationCardClick: PropTypes.func.isRequired,
};

export default LocationCard;

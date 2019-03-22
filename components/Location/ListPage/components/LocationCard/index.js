import React from 'react';
import PropTypes from 'prop-types';

const LocationCard = ({ location: {
  locationBasicInfo: { activeStudents, pastStudents, unactivatedStudents, averageImprovement, averageInitialScore, averageFinalScore } = {},
  locationContactInfo: { locationName, locationNickname } = {},
} = {} }) => (
  <div className="card-main-col col s12 m8 l7 xl5">
    <div className="card-main card-location card card-large">
      <div className="card-panel" style={{ backgroundColor: '#62b771', color: '#fff' }}>
        <div className="card-panel-row row">
          <div className="col s10">
            <div className="user-block">
              <div className="user-text" style={{ color: '#fff' }}>
                <h4 className="h3">{locationName}</h4>
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
                <span className="svg-curved-bar" data-values='{"from": 0, "to": 100, "current": 71}' data-duration="1">
                  <svg width="110px" height="110px" viewBox=" 0 0 110 110">
                    <path fill="none" style={{ strokeWidth: '22', stroke: '#eaeaea' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"></path>
                    <path data-dinamic fill="none" style={{ strokeWidth: '22', stroke: '#62b771' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
                  </svg>
                </span>
                <span className="chart-value" style={{ backgroundColor: '#62b771' }}><span data-count-up data-start-val="0" data-end-val="91" data-duration="1"></span>%</span>
              </div>
              <div className="chart-description" style={{ color: '#31837a' }}>Students Who Achieved Target Score</div>
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
};

export default LocationCard;

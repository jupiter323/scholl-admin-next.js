import React from 'react';
import PropTypes from 'prop-types';

import { formatTimeLoggedIn, formatVideoWatched } from './utils';

const ClassAverages = ({ state: { questionsAnswered, flaggedProblems, timeLoggedIn, videoWatched, notesTaken, onTimePercentage } }) => (
  <div className="card-block">
    <h2>Class Averages</h2>
    <ul className="alerts-list list-three-columns">
      <li className="card card-alert">
        <span className="icon-box purple darken-3"><i className="icon-pencil2"></i></span>
        <div className="alert-text purple-text text-darken-3">
          <p><b>Questions Answered</b></p>
          <div className="value"><b className="text-large">{questionsAnswered}</b></div>
        </div>
      </li>
      <li className="card card-alert">
        <span className="icon-box icon-box pink darken-3"><i className="icon-flag"></i></span>
        <div className="alert-text pink-text text-darken-3">
          <p><b>Flagged Problems</b></p>
          <div className="value"><b className="text-large">{flaggedProblems}</b></div>
        </div>
      </li>
      <li className="card card-alert">
        <span className="icon-box icon-box green darken-3"><i className="icon-clock"></i></span>
        <div className="alert-text green-text text-darken-3">
          <p><b>Time Logged In</b></p>
          <div className="value">
            {formatTimeLoggedIn(timeLoggedIn)}
          </div>
        </div>
      </li>
      <li className="card card-alert alert-blue-dark">
        <span className="icon-box cyan darken-2"><i className="icon-videocam"></i></span>
        <div className="alert-text cyan-text text-darken-2">
          <p><b>Video Watched</b></p>
          <div className="value">
            {formatVideoWatched(videoWatched)}
          </div>
        </div>
      </li>
      <li className="card card-alert">
        <span className="icon-box orange darken-2"><i className="icon-note"></i></span>
        <div className="alert-text orange-text text-darken-2">
          <p><b>Notes Taken</b></p>
          <div className="value"><b className="text-large">{notesTaken}</b></div>
        </div>
      </li>
      <li className="card card-alert">
        <span className="icon-box red"><i className="icon-bell"></i></span>
        <div className="alert-text red-text">
          <p><b>On-Time Percentage</b></p>
          <div className="value"><b className="text-large">{onTimePercentage}%</b></div>
        </div>
      </li>
    </ul>
  </div>
);

ClassAverages.propTypes = {
  state: PropTypes.object.isRequired,
}

export default ClassAverages;

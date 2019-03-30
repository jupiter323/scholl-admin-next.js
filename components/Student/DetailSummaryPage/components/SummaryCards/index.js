import React from 'react';
import PropTypes from 'prop-types';

const formatTimeLoggedIn = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  return (
    <React.Fragment>
      { hours !== 0 && (
        <React.Fragment>
          <b className="text-large">{hours}</b>
          <span className="text-small">hrs </span>
        </React.Fragment>
      )}
      { minutes !== 0 && (
        <React.Fragment>
          <b className="text-large">{minutes}</b>
          <span className="text-small">min</span>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

const formatVideoWatched = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  return (
    <React.Fragment>
      { hours !== 0 && (
        <React.Fragment>
          <b className="text-large">{hours}</b>
          <span className="text-small">hrs </span>
        </React.Fragment>
      )}
      { minutes !== 0 && (
        <React.Fragment>
          <b className="text-large">{minutes}</b>
          <span className="text-small">min</span>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

const SummaryCards = ({ state: { questionsAnswered, videoWatched, notesTaken, totalTimeLoggedIn, lastLogIn, loginTimeCode, onTimePercentage} }) => (
  <div className="col s12 l5 card-width-366">
    <ul className="alerts-list">
      <li className="card card-alert">
        <span className="icon-box purple darken-3"><i className="icon-pencil2"></i></span>
        <div className="alert-text purple-text text-darken-3">
          <p><b>Questions Answered</b></p>
          <div className="value"><b className="text-large">{questionsAnswered}</b></div>
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
        <span className="icon-box pink darken-2"><i className="icon-note"></i></span>
        <div className="alert-text pink-text text-darken-2">
          <p><b>Notes Taken</b></p>
          <div className="value"><b className="text-large">{notesTaken}</b></div>
        </div>
      </li>
      <li className="card card-alert">
        <span className="icon-box green darken-3"><i className="icon-clock"></i></span>
        <div className="alert-text green-text text-darken-3">
          <p><b>Total Time Logged In</b></p>
          <div className="value">
            {formatTimeLoggedIn(totalTimeLoggedIn)}
          </div>
        </div>
      </li>
      <li className="card card-alert">
        <span className="icon-box orange darken-2"><i className="icon-arrow-right"></i></span>
        <div className="alert-text orange-text text-darken-2">
          <p><b>Last Log In</b></p>
          <div className="value">
            <span className="text-large">{lastLogIn}</span> <span className="text-small">{loginTimeCode}</span>
          </div>
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

SummaryCards.propTypes = {
  state: PropTypes.object.isRequired,
};

export default SummaryCards;

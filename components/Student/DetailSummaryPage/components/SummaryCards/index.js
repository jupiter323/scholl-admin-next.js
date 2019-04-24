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

const SummaryCards = ({ state: { questionsAnswered, videoWatched, notesTaken, totalTimeLoggedIn, lastLogIn, loginTimeCode, onTimePercentage }, active }) => (
  <div className="col s12 l5 card-width-366">
    <ul className="alerts-list">
      <li className="card card-alert">
        <span className={active ? 'icon-box purple darken-3' : 'icon-box'}><i className="icon-pencil2"></i></span>
        <div className={active ? 'alert-text purple-text text-darken-3' : 'alert-text'}>
          <p><b>Questions Answered</b></p>
          <div className="value"><b className="text-large">{active ? questionsAnswered : '0'}</b></div>
        </div>
      </li>
      <li className="card card-alert alert-blue-dark">
        <span className={active ? 'icon-box cyan darken-2' : 'icon-box'}><i className="icon-videocam"></i></span>
        <div className={active ? 'alert-text cyan-text text-darken-2' : 'alert-text'}>
          <p><b>Video Watched</b></p>
          <div className="value">
            <Choose>
              <When condition={active}>
                {formatVideoWatched(videoWatched)}
              </When>
              <Otherwise>
                <b className="text-large">0</b>
              </Otherwise>
            </Choose>
          </div>
        </div>
      </li>
      <li className="card card-alert">
        <span className={active ? 'icon-box pink darken-2' : 'icon-box'}><i className="icon-note"></i></span>
        <div className={active ? 'alert-text pink-text text-darken-2' : 'alert-text'}>
          <p><b>Notes Taken</b></p>
          <div className="value"><b className="text-large">{active ? notesTaken : '0'}</b></div>
        </div>
      </li>
      <li className="card card-alert">
        <span className={active ? 'icon-box green darken-3' : 'icon-box'}><i className="icon-clock"></i></span>
        <div className={active ? 'alert-text green-text text-darken-3' : 'alert-text'}>
          <p><b>Total Time Logged In</b></p>
          <div className="value">
            <Choose>
              <When condition={active}>
                {formatTimeLoggedIn(totalTimeLoggedIn)}
              </When>
              <Otherwise>
                <b className="text-large">0</b>
              </Otherwise>
            </Choose>
          </div>
        </div>
      </li>
      <li className="card card-alert">
        <span className={active ? 'icon-box orange darken-2' : 'icon-box'}><i className="icon-arrow-right"></i></span>
        <div className={active ? 'alert-text orange-text text-darken-2' : 'alert-text'}>
          <p><b>Last Log In</b></p>
          <div className="value">
            <Choose>
              <When condition={active}>
                <React.Fragment>
                  <span className="text-large">{lastLogIn}</span> <span className="text-small">{loginTimeCode}</span>
                </React.Fragment>
              </When>
              <Otherwise>
                <span className="text-large">none</span>
              </Otherwise>
            </Choose>
          </div>
        </div>
      </li>
      <li className="card card-alert">
        <span className={active ? 'icon-box red' : 'icon-box'}><i className="icon-bell"></i></span>
        <div className={active ? 'alert-text red-text' : 'alert-text'}>
          <p><b>On-Time Percentage</b></p>
          <div className="value">
            <Choose>
              <When condition={active}>
                <b className="text-large">{onTimePercentage}%</b>
              </When>
              <Otherwise>
                <b className="text-large">not available</b>
              </Otherwise>
            </Choose>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

SummaryCards.propTypes = {
  state: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
};

export default SummaryCards;

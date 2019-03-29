import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const SummaryCards = ({ state }) => (
  <div className="col s12 l5 card-width-366">
    <ul className="alerts-list">
      <li className="card card-alert">
        <span className="icon-box purple darken-3"><i className="icon-pencil2"></i></span>
        <div className="alert-text purple-text text-darken-3">
          <p><b>Questions Answered</b></p>
          <div className="value"><b className="text-large">734</b></div>
        </div>
      </li>
      <li className="card card-alert alert-blue-dark">
        <span className="icon-box cyan darken-2"><i className="icon-videocam"></i></span>
        <div className="alert-text cyan-text text-darken-2">
          <p><b>Video Watched</b></p>
          <div className="value">
            <b className="text-large">4</b><span className="text-small">hrs</span> <b className="text-large">26</b><span className="text-small">min</span>
          </div>
        </div>
      </li>
      <li className="card card-alert">
        <span className="icon-box pink darken-2"><i className="icon-note"></i></span>
        <div className="alert-text pink-text text-darken-2">
          <p><b>Notes Taken</b></p>
          <div className="value"><b className="text-large">59</b></div>
        </div>
      </li>
      <li className="card card-alert">
        <span className="icon-box green darken-3"><i className="icon-clock"></i></span>
        <div className="alert-text green-text text-darken-3">
          <p><b>Total Time Logged In</b></p>
          <div className="value">
            <b className="text-large">8</b><span className="text-small">hrs</span> <b className="text-large">14</b><span className="text-small">min</span>
          </div>
        </div>
      </li>
      <li className="card card-alert">
        <span className="icon-box orange darken-2"><i className="icon-arrow-right"></i></span>
        <div className="alert-text orange-text text-darken-2">
          <p><b>Last Log In</b></p>
          <div className="value">
            <span className="text-large">3:48</span> <span className="text-small">pm</span>
          </div>
        </div>
      </li>
      <li className="card card-alert">
        <span className="icon-box red"><i className="icon-bell"></i></span>
        <div className="alert-text red-text">
          <p><b>On-Time Percentage</b></p>
          <div className="value"><b className="text-large">73%</b></div>
        </div>
      </li>
    </ul>
  </div>
);

SummaryCards.propTypes = {
  state: PropTypes.object.isRequired,
};

export default SummaryCards;

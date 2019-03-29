import React from 'react';
import PropTypes from 'prop-types';

const AveragePerCourse = ({ state: { hoursOfInstruction, lessons, worksheets, practiceTests } }) => (
  <div className="card-width-750 order-sm-5">
    <div className="card-block">
      <h2>Average (per course)</h2>
      <ul className="alerts-list list-in-columns">
        <li className="card card-alert">
          <span className="icon-box icon-box green darken-3"><i className="icon-clock"></i></span>
          <div className="alert-text green-text text-darken-3">
            <p><b>Hours of Instruction</b></p>
            <div className="value"><b className="text-large">{hoursOfInstruction}</b></div>
          </div>
        </li>
        <li className="card card-alert">
          <span className="icon-box purple accent-4"><i className="icon-books"></i></span>
          <div className="alert-text purple-text text-accent-4">
            <p><b>Lessons</b></p>
            <div className="value"><b className="text-large">{lessons}</b></div>
          </div>
        </li>
        <li className="card card-alert">
          <span className="icon-box light-blue darken-1"><i className="icon-note"></i></span>
          <div className="alert-text light-blue-text text-darken-1">
            <p><b>Worksheets</b></p>
            <div className="value"><b className="text-large">{worksheets}</b></div>
          </div>
        </li>
        <li className="card card-alert">
          <span className="icon-box pink darken-1"><i className="icon-clock"></i></span>
          <div className="alert-text pink-text text-darken-1">
            <p><b>Pactice Tests</b></p>
            <div className="value"><b className="text-large">{practiceTests}</b></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

AveragePerCourse.propTypes = {
  state: PropTypes.object.isRequired,
};

export default AveragePerCourse;

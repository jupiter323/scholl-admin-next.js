import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const OverdueWork = ({ state }) => (
  <div className="col s12 l5 card-width-366">
    <div className="card-main card card-chart">
      <div className="card-content">
        <h2>Overdue Work</h2>
        <ul className="points-list-large">
          <li className="style-red-darken">
            <span className="badge-circle">16 <span className="badge-text">Lessons</span></span>
          </li>
          <li className="style-pink-darken">
            <span className="badge-circle">0 <span className="badge-text">Worksheets</span></span>
          </li>
          <li>
            <span className="badge-circle">2 <span className="badge-text">Quizzes</span></span>
          </li>
          <li className="style-blue-light">
            <span className="badge-circle">0 <span className="badge-text">Quizzes Tests</span></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

OverdueWork.propTypes = {
  state: PropTypes.object.isRequired,
};

export default OverdueWork;
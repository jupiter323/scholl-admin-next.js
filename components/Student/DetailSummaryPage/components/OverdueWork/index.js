import React from 'react';
import PropTypes from 'prop-types';

const OverdueWork = ({ state: { lessons, worksheets, quizzes, practiceTests }, active }) => (
  <div className="col s12 l5 card-width-366">
    <div className="card-main card card-chart">
      <div className="card-content">
        <h2>Overdue Work</h2>
        <ul className="points-list-large">
          <li className={active ? 'style-red-darken' : ''}>
            <span className="badge-circle">{lessons} <span className="badge-text">Lessons</span></span>
          </li>
          <li className={active ? 'style-pink-darken' : ''}>
            <span className="badge-circle" style={{ paddingTop: '0' }}>{worksheets} <span className="badge-text">Worksheets</span></span>
          </li>
          <li>
            <span className="badge-circle">{quizzes} <span className="badge-text">Quizzes</span></span>
          </li>
          <li className={active ? 'style-blue-light' : ''}>
            <span className="badge-circle" style={{ paddingTop: '0' }}>{practiceTests} <span className="badge-text">Practice Tests</span></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

OverdueWork.propTypes = {
  state: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
};

export default OverdueWork;